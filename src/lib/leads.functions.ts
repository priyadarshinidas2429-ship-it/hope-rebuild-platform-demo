import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const FORM_TYPES = ["refer_patient", "consultation", "callback", "contact"] as const;

const leadSchema = z.object({
  form_type: z.enum(FORM_TYPES),
  name: z.string().trim().min(1).max(200),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(320).optional().or(z.literal("").transform(() => undefined)),
  message: z.string().trim().max(5000).optional().or(z.literal("").transform(() => undefined)),
  source_url: z.string().max(2000).optional(),
  turnstile_token: z.string().max(4000).optional(),
  extra: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

type LeadInput = z.infer<typeof leadSchema>;

const FORM_LABELS: Record<(typeof FORM_TYPES)[number], string> = {
  refer_patient: "Refer a Patient",
  consultation: "Confidential Consultation",
  callback: "Callback Request",
  contact: "Contact Form",
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(token: string | undefined, ip: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Not configured yet → skip verification so forms still work during setup.
  if (!secret) return true;
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch (err) {
    console.error("[turnstile] verify failed", err);
    return false;
  }
}

async function sendNotificationEmail(data: LeadInput, ip: string | undefined) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[resend] RESEND_API_KEY not configured — skipping email notification");
    return;
  }
  const label = FORM_LABELS[data.form_type];
  const rows: Array<[string, string]> = [
    ["Form", label],
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email ?? "—"],
    ["Message", data.message ?? "—"],
    ["Source URL", data.source_url ?? "—"],
    ["IP", ip ?? "—"],
    ["Submitted at", new Date().toISOString()],
  ];
  const html = `<h2>New ${escapeHtml(label)} submission</h2><table style="border-collapse:collapse;font-family:sans-serif">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const from = process.env.RESEND_FROM ?? "Hope Society <onboarding@resend.dev>";
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "mdnhopesociety@gmail.com";
  const replyTo = data.email;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Hope Society] ${label} — ${data.name}`,
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`[resend] email send failed [${res.status}]: ${body}`);
    }
  } catch (err) {
    console.error("[resend] email send exception", err);
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { getRequest } = await import("@tanstack/react-start/server");
    const request = getRequest();
    const headers = request?.headers;
    const ip =
      headers?.get("cf-connecting-ip") ??
      headers?.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      undefined;
    const userAgent = headers?.get("user-agent") ?? undefined;

    const turnstileOk = await verifyTurnstile(data.turnstile_token, ip);
    if (!turnstileOk) {
      throw new Error("Verification failed. Please refresh and try again.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      form_type: data.form_type,
      name: data.name,
      phone: data.phone,
      email: data.email ?? null,
      message: data.message ?? null,
      source_url: data.source_url ?? null,
      user_agent: userAgent ?? null,
      ip_address: ip ?? null,
      extra: data.extra ?? null,
    });
    if (error) {
      console.error("[leads] insert failed", error);
      throw new Error("Could not save your submission. Please try again.");
    }

    // Fire-and-forget email; don't block success on Resend outages.
    await sendNotificationEmail(data, ip);

    return { ok: true as const };
  });
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { Turnstile } from "@/components/site/Turnstile";
import { useLang } from "@/lib/i18n";

type FormType = "refer_patient" | "consultation" | "callback" | "contact";

export interface LeadFormValues {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  extra?: Record<string, string>;
}

export function LeadForm({
  formType,
  successMessage,
  buildValues,
  onSuccess,
  className,
  children,
}: {
  formType: FormType;
  successMessage: string;
  buildValues: () => LeadFormValues | null;
  onSuccess?: () => void;
  className?: string;
  children: (state: { submitting: boolean }) => ReactNode;
}) {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const values = buildValues();
    if (!values) return;

    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
    if (siteKey && !token) {
      toast.error(t("Please complete the verification challenge.", "যাচাইকরণ সম্পন্ন করুন।"));
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        data: {
          form_type: formType,
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
          source_url: typeof window !== "undefined" ? window.location.href : undefined,
          turnstile_token: token ?? undefined,
          extra: values.extra,
        },
      });
      toast.success(successMessage);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(t(msg, "কিছু ভুল হয়েছে। আবার চেষ্টা করুন।"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children({ submitting })}
      <Turnstile onToken={setToken} className="mt-1" />
    </form>
  );
}
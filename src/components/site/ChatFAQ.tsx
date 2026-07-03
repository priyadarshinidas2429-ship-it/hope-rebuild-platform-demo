import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User } from "lucide-react";
import { useLang } from "@/lib/i18n";

const FAQS: { q: [string, string]; a: [string, string] }[] = [
  { q: ["How long does treatment usually take?", "চিকিৎসা সাধারণত কতদিন সময় নেয়?"], a: ["Programs typically range from 30 to 180 days based on each individual's needs. Our counselors create a personalized plan after the initial assessment.", "প্রয়োজন অনুযায়ী কর্মসূচি সাধারণত ৩০ থেকে ১৮০ দিন। প্রাথমিক মূল্যায়নের পর আমাদের কাউন্সেলররা ব্যক্তিগত পরিকল্পনা তৈরি করেন।"] },
  { q: ["What is the admission process?", "ভর্তির প্রক্রিয়া কী?"], a: ["Admission begins with a confidential consultation (in-person or by phone). We assess medical and emotional needs, explain the program, and admit the same day in most cases.", "ভর্তি শুরু হয় গোপনীয় পরামর্শের মাধ্যমে (সরাসরি বা ফোনে)। আমরা চিকিৎসা ও মানসিক চাহিদা মূল্যায়ন করি এবং সাধারণত একই দিনে ভর্তি নিই।"] },
  { q: ["Can the family be involved?", "পরিবার কি অংশগ্রহণ করতে পারে?"], a: ["Yes — family involvement is a core part of recovery. We offer family counseling sessions, education workshops, and regular progress updates.", "হ্যাঁ — পারিবারিক অংশগ্রহণ পুনরুদ্ধারের একটি মূল অংশ। পারিবারিক কাউন্সেলিং, কর্মশালা ও নিয়মিত অগ্রগতির তথ্য দেওয়া হয়।"] },
  { q: ["What are the visiting rules?", "পরিদর্শনের নিয়ম কী?"], a: ["Family visits are encouraged at scheduled times to maintain a structured therapeutic environment. Our team will share the schedule on admission.", "কাঠামোবদ্ধ থেরাপিউটিক পরিবেশ বজায় রাখতে নির্ধারিত সময়ে পারিবারিক পরিদর্শন উৎসাহিত করা হয়। ভর্তির সময় সময়সূচি জানানো হবে।"] },
  { q: ["Is recovery support available after discharge?", "ছাড়ার পরে কি পুনরুদ্ধার সহায়তা পাওয়া যায়?"], a: ["Absolutely. We provide aftercare counseling, relapse-prevention groups, and 24/7 helpline support for at least 12 months post-discharge.", "অবশ্যই। ছাড়ার পর কমপক্ষে ১২ মাস আফটারকেয়ার কাউন্সেলিং, রিল্যাপ্স-প্রতিরোধ গ্রুপ ও ২৪/৭ হেল্পলাইন সহায়তা দেওয়া হয়।"] },
];

export function ChatFAQ() {
  const { t } = useLang();
  const greeting = t(
    "Hello 👋 I'm here to answer common questions about treatment, admission, and recovery. Pick a question below or call us directly.",
    "হ্যালো 👋 চিকিৎসা, ভর্তি ও পুনরুদ্ধার সম্পর্কে সাধারণ প্রশ্নের উত্তর দিতে আমি এখানে আছি। নিচ থেকে একটি প্রশ্ন বেছে নিন অথবা সরাসরি কল করুন।",
  );
  const [msgs, setMsgs] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: greeting },
  ]);

  const ask = (q: string, a: string) => {
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: a }]), 400);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-elegant bg-card">
      <div className="gradient-primary px-6 py-4 flex items-center gap-3 text-primary-foreground">
        <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold leading-tight">{t("Hope Assistant", "হোপ সহায়ক")}</p>
          <p className="text-xs opacity-90">{t("Online • Replies instantly", "অনলাইন • তাৎক্ষণিক উত্তর")}</p>
        </div>
      </div>
      <div className="p-6 space-y-4 max-h-96 overflow-y-auto bg-secondary/40">
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}>
            {m.role === "bot" && <div className="h-8 w-8 shrink-0 rounded-full gradient-primary grid place-items-center text-primary-foreground"><Bot className="h-4 w-4" /></div>}
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "gradient-primary text-primary-foreground rounded-br-sm" : "bg-card border rounded-bl-sm"}`}>
              {m.text}
            </div>
            {m.role === "user" && <div className="h-8 w-8 shrink-0 rounded-full bg-muted grid place-items-center"><User className="h-4 w-4" /></div>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-card">
        <p className="text-xs text-muted-foreground mb-2 font-medium">{t("Suggested questions", "প্রস্তাবিত প্রশ্ন")}</p>
        <div className="flex flex-wrap gap-2">
          {FAQS.map((f) => {
            const q = t(f.q[0], f.q[1]);
            const a = t(f.a[0], f.a[1]);
            return (
              <Button key={f.q[0]} variant="outline" size="sm" className="rounded-full text-xs" onClick={() => ask(q, a)}>
                {q}
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

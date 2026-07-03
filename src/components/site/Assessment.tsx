import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, AlertOctagon, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";

const QUESTIONS: { en: string; bn: string }[] = [
  { en: "Has your loved one's behavior changed suddenly or dramatically?", bn: "আপনার প্রিয়জনের আচরণ কি হঠাৎ বা ব্যাপকভাবে বদলে গেছে?" },
  { en: "Are there unexplained financial difficulties or missing money?", bn: "অব্যাখ্যাত আর্থিক সমস্যা বা টাকা হারানোর ঘটনা কি ঘটছে?" },
  { en: "Have relationships at home or work become strained?", bn: "ঘরে বা কাজের জায়গায় সম্পর্ক কি জটিল হয়ে উঠেছে?" },
  { en: "Has there been a noticeable loss of motivation or interest?", bn: "উৎসাহ বা আগ্রহে কি স্পষ্ট ঘাটতি দেখা যাচ্ছে?" },
  { en: "Is alcohol or substance use happening more frequently?", bn: "মদ বা মাদক গ্রহণ কি আরও ঘন ঘন হচ্ছে?" },
  { en: "Have promises to stop or cut back been broken repeatedly?", bn: "ছাড়ার বা কমানোর প্রতিশ্রুতি কি বারবার ভাঙা হচ্ছে?" },
  { en: "Are there mood swings, secrecy, or withdrawal from family?", bn: "মেজাজের পরিবর্তন, গোপনীয়তা বা পরিবার থেকে দূরত্ব কি দেখা যাচ্ছে?" },
];

export function Assessment() {
  const { t } = useLang();
  const [answers, setAnswers] = useState<(0 | 1 | 2)[]>([]);
  const [step, setStep] = useState(0);
  const done = step >= QUESTIONS.length;
  const score = answers.reduce<number>((a, b) => a + b, 0);
  const max = QUESTIONS.length * 2;
  const pct = (score / max) * 100;
  const level = pct < 30 ? "low" : pct < 60 ? "moderate" : "high";

  const config = {
    low: { icon: CheckCircle2, color: "text-success", title: t("Low Concern", "নিম্ন উদ্বেগ"), note: t("Signs appear minimal. Stay informed and supportive — early awareness matters.", "লক্ষণ খুব সামান্য মনে হচ্ছে। সচেতন ও সহায়ক থাকুন — প্রাথমিক সচেতনতা গুরুত্বপূর্ণ।") },
    moderate: { icon: AlertTriangle, color: "text-amber-500", title: t("Moderate Concern", "মাঝারি উদ্বেগ"), note: t("Several signs are present. A confidential conversation with a counselor is strongly recommended.", "একাধিক লক্ষণ রয়েছে। একজন কাউন্সেলরের সাথে গোপনীয় আলোচনার জোর সুপারিশ করা হচ্ছে।") },
    high: { icon: AlertOctagon, color: "text-emergency", title: t("Immediate Attention Recommended", "অবিলম্বে মনোযোগ প্রয়োজন"), note: t("Multiple warning signs detected. Please reach out to our team today — help is available 24/7.", "একাধিক সতর্ক লক্ষণ পাওয়া গেছে। অনুগ্রহ করে আজই আমাদের দলের সাথে যোগাযোগ করুন — ২৪/৭ সহায়তা উপলব্ধ।") },
  }[level];
  const Icon = config.icon;

  const answer = (v: 0 | 1 | 2) => {
    setAnswers([...answers, v]);
    setStep(step + 1);
  };
  const reset = () => { setAnswers([]); setStep(0); };

  return (
    <Card className="p-8 md:p-10 shadow-elegant border-0 bg-card">
      {!done ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-muted-foreground">{t(`Question ${step + 1} of ${QUESTIONS.length}`, `প্রশ্ন ${step + 1} / ${QUESTIONS.length}`)}</span>
            <span className="text-sm font-semibold text-primary">{Math.round(((step) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted mb-8 overflow-hidden">
            <div className="h-full gradient-primary transition-all duration-500" style={{ width: `${((step) / QUESTIONS.length) * 100}%` }} />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 min-h-20">{t(QUESTIONS[step].en, QUESTIONS[step].bn)}</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Button variant="outline" size="lg" onClick={() => answer(0)} className="h-14">{t("No / Rarely", "না / খুব কম")}</Button>
            <Button variant="outline" size="lg" onClick={() => answer(1)} className="h-14">{t("Sometimes", "কখনো কখনো")}</Button>
            <Button size="lg" onClick={() => answer(2)} className="h-14 gradient-primary text-primary-foreground border-0">{t("Yes / Often", "হ্যাঁ / প্রায়শই")}</Button>
          </div>
        </>
      ) : (
        <div className="text-center animate-fade-up">
          <Icon className={`h-16 w-16 mx-auto mb-4 ${config.color}`} />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{config.title}</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">{config.note}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-8">
            {t("Score", "স্কোর")}: {score} / {max}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground border-0 shadow-soft" asChild>
              <a href="tel:07602995502"><Phone className="mr-2 h-4 w-4" /> {t("Speak With a Counselor", "একজন কাউন্সেলরের সাথে কথা বলুন")}</a>
            </Button>
            <Button size="lg" variant="outline" onClick={reset}>{t("Retake Assessment", "পুনরায় মূল্যায়ন করুন")}</Button>
          </div>
        </div>
      )}
    </Card>
  );
}

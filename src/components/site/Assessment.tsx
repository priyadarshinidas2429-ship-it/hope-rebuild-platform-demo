import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, AlertOctagon, Phone } from "lucide-react";

const questions = [
  "Has your loved one's behavior changed suddenly or dramatically?",
  "Are there unexplained financial difficulties or missing money?",
  "Have relationships at home or work become strained?",
  "Has there been a noticeable loss of motivation or interest?",
  "Is alcohol or substance use happening more frequently?",
  "Have promises to stop or cut back been broken repeatedly?",
  "Are there mood swings, secrecy, or withdrawal from family?",
];

export function Assessment() {
  const [answers, setAnswers] = useState<(0 | 1 | 2)[]>([]);
  const [step, setStep] = useState(0);
  const done = step >= questions.length;
  const score = answers.reduce((a, b) => a + b, 0);
  const max = questions.length * 2;
  const pct = (score / max) * 100;
  const level = pct < 30 ? "low" : pct < 60 ? "moderate" : "high";

  const config = {
    low: { icon: CheckCircle2, color: "text-success", title: "Low Concern", note: "Signs appear minimal. Stay informed and supportive — early awareness matters." },
    moderate: { icon: AlertTriangle, color: "text-amber-500", title: "Moderate Concern", note: "Several signs are present. A confidential conversation with a counselor is strongly recommended." },
    high: { icon: AlertOctagon, color: "text-emergency", title: "Immediate Attention Recommended", note: "Multiple warning signs detected. Please reach out to our team today — help is available 24/7." },
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
            <span className="text-sm font-medium text-muted-foreground">Question {step + 1} of {questions.length}</span>
            <span className="text-sm font-semibold text-primary">{Math.round(((step) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted mb-8 overflow-hidden">
            <div className="h-full gradient-primary transition-all duration-500" style={{ width: `${((step) / questions.length) * 100}%` }} />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 min-h-20">{questions[step]}</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Button variant="outline" size="lg" onClick={() => answer(0)} className="h-14">No / Rarely</Button>
            <Button variant="outline" size="lg" onClick={() => answer(1)} className="h-14">Sometimes</Button>
            <Button size="lg" onClick={() => answer(2)} className="h-14 gradient-primary text-primary-foreground border-0">Yes / Often</Button>
          </div>
        </>
      ) : (
        <div className="text-center animate-fade-up">
          <Icon className={`h-16 w-16 mx-auto mb-4 ${config.color}`} />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{config.title}</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">{config.note}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-8">
            Score: {score} / {max}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground border-0 shadow-soft" asChild>
              <a href="tel:07602995502"><Phone className="mr-2 h-4 w-4" /> Speak With a Counselor</a>
            </Button>
            <Button size="lg" variant="outline" onClick={reset}>Retake Assessment</Button>
          </div>
        </div>
      )}
    </Card>
  );
}

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User } from "lucide-react";

const faqs = [
  { q: "How long does treatment usually take?", a: "Programs typically range from 30 to 180 days based on each individual's needs. Our counselors create a personalized plan after the initial assessment." },
  { q: "What is the admission process?", a: "Admission begins with a confidential consultation (in-person or by phone). We assess medical and emotional needs, explain the program, and admit the same day in most cases." },
  { q: "Can the family be involved?", a: "Yes — family involvement is a core part of recovery. We offer family counseling sessions, education workshops, and regular progress updates." },
  { q: "What are the visiting rules?", a: "Family visits are encouraged at scheduled times to maintain a structured therapeutic environment. Our team will share the schedule on admission." },
  { q: "Is recovery support available after discharge?", a: "Absolutely. We provide aftercare counseling, relapse-prevention groups, and 24/7 helpline support for at least 12 months post-discharge." },
];

export function ChatFAQ() {
  const [msgs, setMsgs] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hello 👋 I'm here to answer common questions about treatment, admission, and recovery. Pick a question below or call us directly." },
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
          <p className="font-semibold leading-tight">Hope Assistant</p>
          <p className="text-xs opacity-90">Online • Replies instantly</p>
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
        <p className="text-xs text-muted-foreground mb-2 font-medium">Suggested questions</p>
        <div className="flex flex-wrap gap-2">
          {faqs.map((f) => (
            <Button key={f.q} variant="outline" size="sm" className="rounded-full text-xs" onClick={() => ask(f.q, f.a)}>
              {f.q}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}

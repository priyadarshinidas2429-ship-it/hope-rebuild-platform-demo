import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MessageCircle, Calendar, Shield, Users, Heart, Clock, Wine, Pill,
  Brain, Sparkles, RefreshCw, ChevronRight, MapPin, Mail, Check, X, Search,
  Download, Stethoscope, Lock, Eye, HandHeart, Activity, FileText, Award,
  AlertCircle, Menu, ArrowRight, Star, Globe, Facebook, Youtube, Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Counter } from "@/components/site/Counter";
import { Assessment } from "@/components/site/Assessment";
import { ChatFAQ } from "@/components/site/ChatFAQ";
import { Gallery } from "@/components/site/Gallery";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/lib/i18n";
import { Share2 } from "lucide-react";

import heroImg from "@/assets/hero-hope.jpg";
import aboutImg from "@/assets/about-team.jpg";
import realCelebration from "@/assets/real/community-celebration.jpg.asset.json";
import realMedCamp from "@/assets/real/medical-camp.jpg.asset.json";
import realAwareness from "@/assets/real/awareness-event.jpg.asset.json";
import hopeLogo from "@/assets/hope-logo.jpg.asset.json";
import realEvent from "@/assets/real/hope-society-event.jpg.asset.json";
import realAntiDrug from "@/assets/real/antidrug-campaign.jpg.asset.json";
import realBanner from "@/assets/real/hope-society-banner.jpg.asset.json";
import realRally from "@/assets/real/antidrug-rally.jpg.asset.json";
import facilityReal1 from "@/assets/real/facility-real-1.jpg.asset.json";
import facilityReal2 from "@/assets/real/facility-real-2.jpg.asset.json";
import facilityReal3 from "@/assets/real/facility-real-3.jpg.asset.json";
import facilityReal4 from "@/assets/real/facility-real-4.jpg.asset.json";
import facilityReal5 from "@/assets/real/facility-real-5.jpg.asset.json";
import facilityReal6 from "@/assets/real/facility-real-6.jpg.asset.json";
import facilityReal7 from "@/assets/real/facility-real-7.jpg.asset.json";
import facilityReal8 from "@/assets/real/facility-real-8.jpg.asset.json";

const PHONE = "07602995502";
const PHONE_TEL = "tel:+917602995502";
const WHATSAPP = "https://wa.me/917602995502";
const ADDRESS = "Dakbanglow Road, opposite of DAV School, Bidhan Nagar East, Saratpally, Midnapore, West Bengal 721101";
const EMAIL = "mdnhopesociety@gmail.com";
const MAPS_DIRECTIONS = "https://share.google/Uj3sI0BkPua1kKwNF";
const MAPS_EMBED = "https://www.google.com/maps?q=Midnapore+Hope+Society,+Dakbanglow+Road,+Bidhan+Nagar+East,+Saratpally,+Midnapore,+West+Bengal+721101&output=embed";
const FACEBOOK = "https://www.facebook.com/share/1EACCh7nTh/";
const YOUTUBE = "https://youtube.com/@sudiptobumba?si=-QVBnEuUtYbzNwvt";
const SITE_URL = "https://hope-rebuild-platform-demo.lovable.app";
const SHARE_TEXT = "Midnapore Hope Society — Trusted Rehabilitation & Nasha Mukti Kendra in Midnapore, West Bengal. 24/7 confidential care.";

// Single source of truth for statistics — edit here to update site-wide.
export const HOPE_STATS = {
  headline: [
    { v: 500, s: "+", l: "Families Assisted" },
    { v: 6, s: "+", l: "Recovery Programs" },
    { v: 10, s: "+", l: "Years of Service" },
    { v: 24, s: "/7", l: "Support Available" },
  ],
  impact: [
    { l: "Recovery Programs Completed", v: 420, s: "+", c: "primary" as const },
    { l: "Counseling Sessions Delivered", v: 5800, s: "+", c: "accent" as const },
    { l: "Family Support Services", v: 950, s: "+", c: "primary" as const },
    { l: "Ongoing Aftercare Members", v: 180, s: "+", c: "accent" as const },
  ],
};

const FAQS: { q: [string, string]; a: [string, string] }[] = [
  { q: ["How long does treatment usually take?", "চিকিৎসা সাধারণত কতদিন সময় নেয়?"], a: ["Programs typically range from 30 to 180 days depending on individual needs. Our counselors design a personalized plan after the initial confidential assessment.", "প্রয়োজন অনুযায়ী কর্মসূচি সাধারণত ৩০ থেকে ১৮০ দিন। প্রাথমিক গোপনীয় মূল্যায়নের পর আমাদের কাউন্সেলররা ব্যক্তিগত পরিকল্পনা তৈরি করেন।"] },
  { q: ["Is treatment confidential?", "চিকিৎসা কি গোপনীয়?"], a: ["Yes. Every interaction — from your first call to discharge and aftercare — is strictly confidential. Records are protected and never shared without written consent.", "হ্যাঁ। প্রথম কল থেকে ছাড়া এবং আফটারকেয়ার পর্যন্ত প্রতিটি যোগাযোগ কঠোরভাবে গোপনীয়। লিখিত সম্মতি ছাড়া রেকর্ড কখনো ভাগ করা হয় না।"] },
  { q: ["Are family visits allowed?", "পারিবারিক পরিদর্শন কি অনুমোদিত?"], a: ["Absolutely. Family involvement is central to lasting recovery. Scheduled visits, family counseling sessions and progress updates are part of every program.", "অবশ্যই। স্থায়ী পুনরুদ্ধারে পারিবারিক অংশগ্রহণ কেন্দ্রীয়। নির্ধারিত পরিদর্শন, পারিবারিক কাউন্সেলিং ও অগ্রগতির তথ্য প্রতিটি কর্মসূচির অংশ।"] },
  { q: ["Do you provide counseling?", "আপনারা কি কাউন্সেলিং প্রদান করেন?"], a: ["Yes — one-on-one CBT, motivational counseling, group therapy and family counseling are all delivered by experienced, qualified therapists.", "হ্যাঁ — অভিজ্ঞ, যোগ্য থেরাপিস্টদের দ্বারা ব্যক্তিগত CBT, প্রেরণামূলক কাউন্সেলিং, গ্রুপ থেরাপি ও পারিবারিক কাউন্সেলিং প্রদান করা হয়।"] },
  { q: ["Is medical supervision available?", "চিকিৎসা তত্ত্বাবধান কি উপলব্ধ?"], a: ["Our facility offers 24/7 medical supervision, including doctor-led detox, medication management and on-call emergency support.", "আমাদের কেন্দ্রে ২৪/৭ চিকিৎসা তত্ত্বাবধান রয়েছে — ডাক্তার-পরিচালিত ডিটক্স, ওষুধ ব্যবস্থাপনা ও অন-কল জরুরী সহায়তা।"] },
  { q: ["What happens after recovery?", "পুনরুদ্ধারের পরে কী হয়?"], a: ["Aftercare includes relapse-prevention groups, monthly follow-ups, family check-ins and 24/7 helpline access for at least 12 months post-discharge.", "আফটারকেয়ারে রয়েছে রিল্যাপ্স-প্রতিরোধ গ্রুপ, মাসিক ফলো-আপ, পারিবারিক চেক-ইন এবং ছাড়ার পর কমপক্ষে ১২ মাস ২৪/৭ হেল্পলাইন।"] },
  { q: ["How do I begin admission?", "আমি কীভাবে ভর্তি শুরু করব?"], a: ["Call or WhatsApp us anytime. We conduct a brief confidential assessment, share the program and — in most cases — offer same-day admission.", "যেকোনো সময় আমাদের কল বা হোয়াটসঅ্যাপ করুন। আমরা সংক্ষিপ্ত গোপনীয় মূল্যায়ন করি, কর্মসূচি ব্যাখ্যা করি এবং সাধারণত একই দিনে ভর্তির ব্যবস্থা করি।"] },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Midnapore Hope Society — Nasha Mukti Kendra & Rehabilitation Centre, Midnapore" },
      { name: "description", content: "Midnapore Hope Society — trusted Rehabilitation Centre & De-Addiction Centre in Midnapore, West Bengal. Addiction recovery, counseling services, family support programs and 24/7 confidential care." },
      { property: "og:title", content: "Midnapore Hope Society — Rehabilitation Centre Midnapore" },
      { property: "og:description", content: "Trusted Nasha Mukti Kendra in Midnapore. Confidential, family-focused addiction recovery and counseling." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "Rehabilitation Centre Midnapore, De Addiction Centre Midnapore, Addiction Recovery, Counseling Services, Family Support Programs, Nasha Mukti Kendra Midnapore, Alcohol Recovery Centre, Drug De Addiction Centre West Bengal" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Midnapore Hope Society",
        alternateName: "মেদিনীপুর হোপ সোসাইটি",
        description: "Addiction treatment and rehabilitation centre serving Midnapore and West Bengal.",
        telephone: "+91-7602995502",
        email: "mdnhopesociety@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dakbanglow Road, opposite of DAV School, Bidhan Nagar East, Saratpally",
          addressLocality: "Midnapore",
          addressRegion: "West Bengal",
          postalCode: "721101",
          addressCountry: "IN",
        },
        openingHours: "Mo-Su 00:00-23:59",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "18" },
        sameAs: [
          "https://www.facebook.com/share/1EACCh7nTh/",
          "https://youtube.com/@sudiptobumba",
        ],
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How long does treatment usually take?", acceptedAnswer: { "@type": "Answer", text: "Programs typically range from 30 to 180 days depending on individual needs. Our counselors design a personalized plan after the initial confidential assessment." } },
          { "@type": "Question", name: "Is treatment confidential?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every interaction — from your first call to discharge and aftercare — is strictly confidential." } },
          { "@type": "Question", name: "Are family visits allowed?", acceptedAnswer: { "@type": "Answer", text: "Yes. Scheduled visits, family counseling sessions and progress updates are part of every program." } },
          { "@type": "Question", name: "Is medical supervision available?", acceptedAnswer: { "@type": "Answer", text: "Our facility offers 24/7 medical supervision, including doctor-led detox, medication management and on-call emergency support." } },
          { "@type": "Question", name: "How do I begin admission?", acceptedAnswer: { "@type": "Answer", text: "Call or WhatsApp us anytime. We conduct a brief confidential assessment and in most cases offer same-day admission." } },
        ],
      }),
    }],
  }),
  component: Home,
});

function Home() {
  const { lang, setLang, t } = useLang();
  const [navOpen, setNavOpen] = useState(false);
  const [guideSent, setGuideSent] = useState(false);
  const [guideName, setGuideName] = useState("");
  const [guideEmail, setGuideEmail] = useState("");

  const handleGuideSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const lead = {
        name: guideName.trim(),
        email: guideEmail.trim(),
        date: new Date().toISOString(),
        source: "PDF Download Form",
      };
      const existing = JSON.parse(localStorage.getItem("mhs-leads") || "[]");
      existing.push(lead);
      localStorage.setItem("mhs-leads", JSON.stringify(existing));
    } catch {}
    setGuideSent(true);
    toast.success(t("Thank you. Your guide has been sent to your email.", "ধন্যবাদ। আপনার গাইড ইমেইলে পাঠানো হয়েছে।"));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency top bar */}
      <div className="bg-emergency text-white text-sm">
        <div className="container mx-auto px-4 py-2 grid grid-cols-[minmax(0,1fr)_auto] sm:flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 font-medium">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="truncate">{t("24/7 Support Available · Confidential Helpline", "২৪/৭ সহায়তা উপলব্ধ · গোপনীয় হেল্পলাইন")}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook" className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 hover:scale-110 transition">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href={YOUTUBE} target="_blank" rel="noopener" aria-label="YouTube" className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 hover:scale-110 transition">
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white/25 px-3 py-1 transition">
              <Phone className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Call</span>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3 py-1 transition hover:opacity-90">
              <MessageCircle className="h-3.5 w-3.5" /> <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/85 border-b">
        <div className="container mx-auto px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={hopeLogo.url}
              alt="Midnapore Hope Society logo"
              className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-soft ring-1 ring-border"
            />
            <div className="min-w-0">
              <p className="font-display font-bold text-base sm:text-lg leading-tight truncate">Midnapore Hope Society</p>
              <p className="text-xs text-muted-foreground leading-tight truncate">মেদিনীপুর হোপ সোসাইটি · 5.0 ★ (18)</p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition">{t("About", "পরিচিতি")}</a>
            <a href="#programs" className="hover:text-primary transition">{t("Programs", "কর্মসূচি")}</a>
            <a href="#journey" className="hover:text-primary transition">{t("Recovery", "পুনরুদ্ধার")}</a>
            <a href="#facility" className="hover:text-primary transition">{t("Facility", "কেন্দ্র")}</a>
            <a href="#resources" className="hover:text-primary transition">{t("Resources", "সম্পদ")}</a>
            <a href="#contact" className="hover:text-primary transition">{t("Contact", "যোগাযোগ")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex items-center rounded-full border bg-secondary/50 p-0.5 text-xs font-semibold" role="group" aria-label="Language">
              <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-3 py-1 rounded-full transition ${lang === "en" ? "bg-primary text-primary-foreground shadow-soft" : "text-foreground/70 hover:text-foreground"}`}>English</button>
              <button onClick={() => setLang("bn")} aria-pressed={lang === "bn"} className={`px-3 py-1 rounded-full transition ${lang === "bn" ? "bg-primary text-primary-foreground shadow-soft" : "text-foreground/70 hover:text-foreground"}`}>বাংলা</button>
            </div>
            <Button asChild className="gradient-primary text-primary-foreground border-0 shadow-soft hidden md:inline-flex">
              <a href="#contact"><Calendar className="mr-2 h-4 w-4" />{t("Book Consultation", "পরামর্শ বুক করুন")}</a>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><Menu /></button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden border-t bg-card px-4 py-3 grid gap-2 text-sm font-medium">
            {[
              { en: "About", bn: "পরিচিতি", id: "about" },
              { en: "Programs", bn: "কর্মসূচি", id: "programs" },
              { en: "Recovery", bn: "পুনরুদ্ধার", id: "journey" },
              { en: "Facility", bn: "কেন্দ্র", id: "facility" },
              { en: "Resources", bn: "সম্পদ", id: "resources" },
              { en: "Contact", bn: "যোগাযোগ", id: "contact" },
            ].map(s => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setNavOpen(false)} className="py-2">{t(s.en, s.bn)}</a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t">
              <div className="inline-flex items-center rounded-full border bg-secondary/60 p-0.5 text-xs font-semibold" role="group" aria-label="Language">
                <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-3 py-1 rounded-full transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>English</button>
                <button onClick={() => setLang("bn")} aria-pressed={lang === "bn"} className={`px-3 py-1 rounded-full transition ${lang === "bn" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>বাংলা</button>
              </div>
              <a href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook" className="h-8 w-8 rounded-full bg-secondary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
              <a href={YOUTUBE} target="_blank" rel="noopener" aria-label="YouTube" className="h-8 w-8 rounded-full bg-secondary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sunrise of hope" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        </div>
        {/* Floating mobile language toggle */}
        <div className="md:hidden absolute top-3 right-3 z-20">
          <div className="flex items-center gap-0.5 rounded-full bg-white/95 backdrop-blur shadow-elegant p-1 text-xs font-semibold">
            <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-3 py-1.5 rounded-full transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-primary"}`}>English</button>
            <button onClick={() => setLang("bn")} aria-pressed={lang === "bn"} className={`px-3 py-1.5 rounded-full transition ${lang === "bn" ? "bg-primary text-primary-foreground" : "text-primary"}`}>বাংলা</button>
          </div>
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          {/* Prominent language switcher */}
          <div className="mb-6 hidden md:inline-flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-white/10 backdrop-blur border border-white/25 px-4 py-3">
            <span className="text-white/90 text-sm font-medium inline-flex items-center gap-2">
              <Globe className="h-4 w-4" /> Choose Your Language / আপনার ভাষা নির্বাচন করুন
            </span>
            <div className="inline-flex items-center rounded-full bg-white/15 border border-white/30 p-1">
              <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${lang === "en" ? "bg-white text-primary shadow-soft" : "text-white hover:bg-white/10"}`}>English</button>
              <button onClick={() => setLang("bn")} aria-pressed={lang === "bn"} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${lang === "bn" ? "bg-white text-primary shadow-soft" : "text-white hover:bg-white/10"}`}>বাংলা</button>
            </div>
          </div>
          <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
            <Award className="h-3.5 w-3.5 mr-1.5" /> {t("Trusted Rehabilitation Centre · West Bengal", "বিশ্বস্ত পুনর্বাসন কেন্দ্র · পশ্চিমবঙ্গ")}
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] max-w-4xl">
            {t("Helping People Rebuild Their Lives", "জীবন পুনর্গঠনে আপনার সঙ্গী")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {t(
              "Professional addiction treatment, counseling, rehabilitation, and family support programs designed to guide individuals toward lasting recovery.",
              "পেশাদার নেশা মুক্তি চিকিৎসা, কাউন্সেলিং, পুনর্বাসন এবং পরিবার সহায়তা কর্মসূচি — স্থায়ী পুনরুদ্ধারের পথে আপনার সঙ্গী।",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 shadow-elegant h-12 px-6">
              <a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" /> {t("Call Now", "এখনই কল করুন")}</a>
            </Button>
            <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 border-0 shadow-elegant h-12 px-6">
              <a href={WHATSAPP} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur h-12 px-6">
              <a href="#contact"><Calendar className="mr-2 h-5 w-5" /> {t("Book Confidential Consultation", "গোপনীয় পরামর্শ বুক করুন")}</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { icon: Lock, label: t("Confidential Care", "গোপনীয় সেবা") },
              { icon: Stethoscope, label: t("Experienced Team", "অভিজ্ঞ দল") },
              { icon: HandHeart, label: t("Family Guidance", "পরিবার নির্দেশনা") },
              { icon: Activity, label: t("Recovery Focused", "পুনরুদ্ধার কেন্দ্রিক") },
            ].map(({ icon: I, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-white text-sm font-medium">
                <I className="h-4 w-4 shrink-0" /> <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HOPE_STATS.headline.map((stat) => (
              <Card key={stat.l} className="p-6 md:p-8 text-center border-0 shadow-card bg-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <p className="font-display text-4xl md:text-5xl font-extrabold text-gradient">
                  <Counter to={stat.v} suffix={stat.s} />
                </p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{t(stat.l, {
                  "Families Assisted": "পরিবার সহায়তা পেয়েছে",
                  "Recovery Programs": "পুনরুদ্ধার কর্মসূচি",
                  "Years of Service": "বছরের সেবা",
                  "Support Available": "সহায়তা উপলব্ধ",
                }[stat.l] ?? stat.l)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY CRISIS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-emergency/30 text-emergency mb-4">{t("Recognize the Signs", "লক্ষণগুলি চিনুন")}</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{t("Is Addiction Affecting Someone You Love?", "নেশা কি আপনার প্রিয়জনকে প্রভাবিত করছে?")}</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {t(
                  "Addiction quietly changes the people we care about. Spotting the early warning signs is the first step toward helping them heal.",
                  "নেশা নীরবে আমাদের প্রিয়জনদের বদলে দেয়। প্রথম সতর্ক লক্ষণগুলি চিহ্নিত করাই সুস্থতার প্রথম ধাপ।",
                )}
              </p>
              <Button asChild size="lg" className="mt-6 gradient-primary text-primary-foreground border-0 shadow-soft">
                <a href={PHONE_TEL}>{t("Get Professional Guidance Today", "আজই পেশাদার পরামর্শ নিন")} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                t("Sudden behavior changes", "হঠাৎ আচরণ পরিবর্তন"),
                t("Financial problems", "আর্থিক সমস্যা"),
                t("Relationship conflicts", "সম্পর্কে দ্বন্দ্ব"),
                t("Loss of motivation", "উৎসাহ হারানো"),
                t("Alcohol or substance dependency", "মদ বা মাদক নির্ভরতা"),
                t("Withdrawal & mood swings", "অসংযম ও মানসিক পরিবর্তন"),
              ].map((sign) => (
                <Card key={sign} className="p-4 flex items-start gap-3 border-0 shadow-card hover:shadow-soft transition">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-emergency/10 grid place-items-center">
                    <AlertCircle className="h-4 w-4 text-emergency" />
                  </div>
                  <p className="font-medium text-sm leading-tight pt-1.5">{sign}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT + READINESS */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">{t("Interactive Tools", "ইন্টারঅ্যাক্টিভ সরঞ্জাম")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Addiction Self-Assessment", "নেশা স্ব-মূল্যায়ন")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("A 7-question confidential assessment to understand the level of concern and get a personalized recommendation.", "৭টি প্রশ্নের গোপনীয় মূল্যায়ন যা উদ্বেগের মাত্রা বুঝতে এবং ব্যক্তিগত পরামর্শ দিতে সাহায্য করে।")}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Assessment />
            <Card className="p-8 md:p-10 border-0 shadow-elegant gradient-accent text-accent-foreground">
              <Badge className="bg-white/20 text-white border-0 mb-4">{t("Recovery Readiness Checker", "পুনরুদ্ধারের প্রস্তুতি যাচাই")}</Badge>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{t("Is Your Family Ready for Professional Treatment?", "আপনার পরিবার কি পেশাদার চিকিৎসার জন্য প্রস্তুত?")}</h3>
              <p className="opacity-95 mb-6 leading-relaxed">{t("Recovery starts when families decide to act. Use these readiness indicators to know if it's time.", "পরিবার সিদ্ধান্ত নিলে পুনরুদ্ধার শুরু হয়। সময় এসেছে কিনা জানতে এই সূচকগুলি দেখুন।")}</p>
              <ul className="space-y-3 mb-8">
                {[
                  t("Past efforts to quit haven't lasted", "আগের ছাড়ার চেষ্টাগুলো টিকেনি"),
                  t("Daily life is being disrupted", "দৈনন্দিন জীবন ব্যাহত হচ্ছে"),
                  t("Health, work or relationships are at risk", "স্বাস্থ্য, কাজ বা সম্পর্ক ঝুঁকিতে"),
                  t("Family needs professional guidance", "পরিবারের পেশাদার নির্দেশনা প্রয়োজন"),
                ].map(s => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/95 border-0">
                <a href="#contact">{t("Talk to a Counselor", "একজন কাউন্সেলরের সাথে কথা বলুন")} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={aboutImg} alt="Counselor with family at Midnapore Hope Society" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
              <Card className="absolute -bottom-6 -right-2 md:-right-6 p-5 shadow-elegant border-0 max-w-[220px] bg-card">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-bold text-2xl">5.0 / 5.0</p>
                <p className="text-xs text-muted-foreground">{t("Based on 18 verified reviews", "১৮টি যাচাইকৃত রিভিউয়ের ভিত্তিতে")}</p>
              </Card>
            </div>
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary mb-4">{t("About Us", "আমাদের সম্পর্কে")}</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{t("A Trusted Recovery Home in Midnapore", "মেদিনীপুরের একটি বিশ্বস্ত পুনরুদ্ধার কেন্দ্র")}</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {t(
                  "Midnapore Hope Society is a compassionate addiction treatment centre committed to helping individuals and families overcome the challenges of substance dependence — with dignity, privacy, and proven care.",
                  "মেদিনীপুর হোপ সোসাইটি একটি সহানুভূতিশীল নেশা মুক্তি কেন্দ্র — মর্যাদা, গোপনীয়তা ও প্রমাণিত সেবার মাধ্যমে ব্যক্তি ও পরিবারকে নেশার সমস্যা কাটিয়ে উঠতে সহায়তা করে।",
                )}
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { i: Heart, title: t("Mission", "লক্ষ্য"), d: t("Restore lives through holistic recovery.", "সামগ্রিক পুনরুদ্ধারের মাধ্যমে জীবন ফিরিয়ে দেওয়া।") },
                  { i: Eye, title: t("Vision", "দৃষ্টিভঙ্গি"), d: t("A society free from addiction's grip.", "নেশামুক্ত এক সমাজ গড়ে তোলা।") },
                  { i: Shield, title: t("Values", "মূল্যবোধ"), d: t("Compassion · Privacy · Excellence.", "সহানুভূতি · গোপনীয়তা · উৎকর্ষ।") },
                ].map(({ i: I, title, d }) => (
                  <div key={title} className="rounded-2xl border p-4 bg-card shadow-card">
                    <I className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("Our Programs", "আমাদের কর্মসূচি")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Treatment Programs Tailored to Recovery", "পুনরুদ্ধারের জন্য বিশেষায়িত চিকিৎসা কর্মসূচি")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("Evidence-based programs that blend medical care, therapy and family involvement.", "চিকিৎসা, থেরাপি এবং পারিবারিক অংশগ্রহণের সমন্বয়ে প্রমাণভিত্তিক কর্মসূচি।")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Wine, title: t("Alcohol Addiction Recovery", "মদ্যপান আসক্তি পুনরুদ্ধার"), d: t("Medically supervised detox and structured behavioral therapy for lasting sobriety.", "চিকিৎসা তত্ত্বাবধানে ডিটক্স এবং কাঠামোবদ্ধ থেরাপি — স্থায়ী মুক্তির জন্য।") },
              { i: Pill, title: t("Drug Addiction Recovery", "মাদক আসক্তি পুনরুদ্ধার"), d: t("Personalized de-addiction programs for prescription, opioid and substance dependence.", "ব্যক্তিগতকৃত নেশা মুক্তি কর্মসূচি — ওষুধ, ওপিয়ড ও মাদক নির্ভরতার জন্য।") },
              { i: Brain, title: t("Counseling", "কাউন্সেলিং"), d: t("One-on-one CBT and motivational counseling led by experienced therapists.", "অভিজ্ঞ থেরাপিস্টের নেতৃত্বে ব্যক্তিগত CBT ও প্রেরণামূলক কাউন্সেলিং।") },
              { i: Users, title: t("Family Therapy", "পরিবার থেরাপি"), d: t("Healing the family system, rebuilding trust, and creating supportive home environments.", "পারিবারিক আরোগ্য, বিশ্বাস পুনর্গঠন ও সহায়ক পরিবেশ তৈরি।") },
              { i: RefreshCw, title: t("Relapse Prevention", "পুনরায় নেশা প্রতিরোধ"), d: t("Long-term strategies, coping skills and aftercare to prevent relapse.", "দীর্ঘমেয়াদী কৌশল ও আফটারকেয়ার — পুনরায় নেশা প্রতিরোধে।") },
              { i: Sparkles, title: t("Emotional Wellness", "মানসিক সুস্থতা"), d: t("Mindfulness, yoga and stress-management practices for inner balance.", "মেডিটেশন, যোগ ও চাপ ব্যবস্থাপনা — অন্তর্গত ভারসাম্যের জন্য।") },
            ].map(({ i: I, title, d }) => (
              <Card key={title} className="group p-6 border-0 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 bg-card">
                <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                  <I className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all gap-1">
                  {t("Learn more", "আরও জানুন")} <ChevronRight className="h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">{t("Recovery Journey", "পুনরুদ্ধারের যাত্রা")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("A Clear Path From Crisis to Confidence", "সংকট থেকে আত্মবিশ্বাসের একটি স্পষ্ট পথ")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("Every individual follows a structured, supportive journey toward lasting recovery.", "প্রতিটি ব্যক্তি স্থায়ী পুনরুদ্ধারের জন্য একটি সুসংগঠিত সহায়ক যাত্রা অনুসরণ করে।")}</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px gradient-primary md:-translate-x-1/2" />
            {[
              { title: t("Assessment", "মূল্যায়ন"), d: t("Confidential evaluation to understand medical, psychological and family context.", "চিকিৎসা, মানসিক ও পারিবারিক প্রেক্ষাপট বুঝতে গোপনীয় মূল্যায়ন।") },
              { title: t("Admission", "ভর্তি"), d: t("Same-day admission with a personalized care plan and a welcoming environment.", "একই দিনে ভর্তি, ব্যক্তিগত যত্ন পরিকল্পনা ও উষ্ণ পরিবেশ।") },
              { title: t("Detox", "ডিটক্স"), d: t("Medically supervised detoxification with comfort and safety as priorities.", "চিকিৎসা তত্ত্বাবধানে ডিটক্সিফিকেশন — আরাম ও নিরাপত্তা অগ্রাধিকার।") },
              { title: t("Counseling", "কাউন্সেলিং"), d: t("Daily individual and group therapy sessions led by experienced counselors.", "অভিজ্ঞ কাউন্সেলরদের পরিচালনায় দৈনিক ব্যক্তিগত ও গ্রুপ থেরাপি।") },
              { title: t("Recovery", "পুনরুদ্ধার"), d: t("Skill building, wellness routines and emotional reconditioning.", "দক্ষতা গঠন, সুস্থতার অভ্যাস ও মানসিক পুনর্গঠন।") },
              { title: t("Family Reintegration", "পরিবার পুনর্মিলন"), d: t("Family therapy, aftercare and continued support beyond the program.", "পরিবার থেরাপি, আফটারকেয়ার ও কর্মসূচির পরে চলমান সহায়তা।") },
            ].map((s, i) => (
              <div key={s.title} className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <Card className="inline-block p-6 border-0 shadow-card bg-card text-left max-w-sm">
                    <p className="text-xs font-bold text-primary mb-1">{t("STEP", "ধাপ")} {i + 1}</p>
                    <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </Card>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-0 md:left-1/2 top-4 h-12 w-12 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold shadow-elegant md:-translate-x-1/2 ring-4 ring-background">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">{t("Why Choose Us", "কেন আমাদের বেছে নেবেন")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Why Families Trust Midnapore Hope Society", "কেন পরিবারগুলি মেদিনীপুর হোপ সোসাইটিতে আস্থা রাখে")}</h2>
            <p className="mt-3 opacity-90 text-lg">{t("Six reasons families across West Bengal choose us as their recovery partner.", "পশ্চিমবঙ্গের পরিবারগুলি আমাদের পুনরুদ্ধার সঙ্গী হিসেবে বেছে নেওয়ার ছয়টি কারণ।")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Shield, title: t("Safe Environment", "নিরাপদ পরিবেশ"), d: t("Secure 24/7 monitored facility with hygienic, calming spaces.", "২৪/৭ নজরদারিতে পরিষ্কার, শান্ত ও নিরাপদ কেন্দ্র।") },
              { i: Stethoscope, title: t("Experienced Team", "অভিজ্ঞ দল"), d: t("Medical doctors, psychologists, and certified addiction counselors.", "চিকিৎসক, মনোবিদ ও প্রশিক্ষিত নেশা মুক্তি কাউন্সেলর।") },
              { i: Lock, title: t("Confidential Treatment", "গোপনীয় চিকিৎসা"), d: t("Complete privacy from intake to discharge — your dignity protected.", "ভর্তি থেকে ছাড়া পর্যন্ত সম্পূর্ণ গোপনীয়তা — আপনার মর্যাদা সুরক্ষিত।") },
              { i: Users, title: t("Family Support", "পরিবার সহায়তা"), d: t("Structured family programs that heal relationships.", "পারিবারিক সম্পর্ক আরোগ্যের জন্য কাঠামোবদ্ধ কর্মসূচি।") },
              { i: HandHeart, title: t("Personalized Plans", "ব্যক্তিগতকৃত পরিকল্পনা"), d: t("Recovery plans tailored to each individual's needs and history.", "প্রত্যেকের প্রয়োজন অনুযায়ী পুনরুদ্ধার পরিকল্পনা।") },
              { i: Clock, title: t("24/7 Assistance", "২৪/৭ সহায়তা"), d: t("Always-available helpline and on-site care, day or night.", "দিন-রাত হেল্পলাইন ও কেন্দ্রে সেবা সর্বদা উপলব্ধ।") },
            ].map(({ i: I, title, d }) => (
              <Card key={title} className="p-6 bg-white/10 border-white/20 backdrop-blur text-white hover:bg-white/15 transition">
                <I className="h-8 w-8 mb-3" />
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS DASHBOARD */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">{t("Impact", "প্রভাব")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Our Care, in Numbers", "আমাদের সেবা, সংখ্যায়")}</h2>
          </div>
          <Card className="p-8 md:p-12 border-0 shadow-elegant bg-card">
            <div className="grid md:grid-cols-2 gap-10">
              {HOPE_STATS.impact.map((m) => (
                <div key={m.l}>
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="text-sm font-semibold text-muted-foreground">{m.l}</p>
                    <p className="font-display text-3xl md:text-4xl font-extrabold">
                      <span className={m.c === "primary" ? "text-gradient" : "text-accent"}>
                        <Counter to={m.v} suffix={m.s} />
                      </span>
                    </p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full ${m.c === "primary" ? "gradient-primary" : "gradient-accent"} animate-fade-up`} style={{ width: `${Math.min(95, (m.v / 6000) * 100 + 30)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("Success Stories", "সাফল্যের গল্প")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Lives Renewed at Hope Society", "হোপ সোসাইটিতে নতুন জীবন")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Arijit Das", l: t("Contai", "কাঁথি"), r: t("Good infrastructure, excellent treatment procedure. Awesome staff behavior and very supportive in every situation. ❤️", "চমৎকার পরিকাঠামো, দুর্দান্ত চিকিৎসা পদ্ধতি। কর্মীদের ব্যবহার অসাধারণ ও প্রতিটি পরিস্থিতিতে সহায়ক। ❤️") },
              { n: "Ashish Bishal", l: t("Family Member", "পরিবারের সদস্য"), r: t("My brother was treated with so much love and care. The whole team went above and beyond.", "আমার ভাইকে অসম্ভব ভালোবাসা ও যত্নে চিকিৎসা করা হয়েছে। পুরো দল প্রত্যাশার চেয়ে অনেক বেশি করেছে।") },
              { n: "Purno", l: t("Recovered Member", "পুনরুদ্ধারপ্রাপ্ত সদস্য"), r: t("The best de-addiction and rehabilitation centre I've experienced. Great service and a real second chance.", "আমার অভিজ্ঞতায় সেরা নেশা মুক্তি ও পুনর্বাসন কেন্দ্র। চমৎকার সেবা ও সত্যিকারের একটি দ্বিতীয় সুযোগ।") },
            ].map((tst) => (
              <Card key={tst.n} className="p-7 border-0 shadow-card hover:shadow-elegant transition bg-card">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-5">"{tst.r}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold">
                    {tst.n[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tst.n}</p>
                    <p className="text-xs text-muted-foreground">{tst.l}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section id="facility" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">{t("Virtual Facility Tour", "ভার্চুয়াল কেন্দ্র পরিদর্শন")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("A Calm, Healing Environment", "একটি শান্ত, আরোগ্যদায়ক পরিবেশ")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("Step inside our facility designed for comfort, dignity and recovery.", "আরাম, মর্যাদা ও পুনরুদ্ধারের জন্য নির্মিত আমাদের কেন্দ্রে প্রবেশ করুন।")}</p>
          </div>
          <Gallery images={[
            { src: realBanner.url, alt: "Midnapore Hope Society banner", label: t("Rehabilitation Centre Activities", "পুনর্বাসন কেন্দ্রের কার্যক্রম") },
            { src: facilityReal1.url, alt: "Anti-drug awareness campaign", label: t("Anti-Drug Awareness Campaign", "মাদক বিরোধী সচেতনতা অভিযান") },
            { src: facilityReal2.url, alt: "Counseling and guidance session", label: t("Counseling & Guidance Program", "কাউন্সেলিং ও পরামর্শ কর্মসূচি") },
            { src: facilityReal3.url, alt: "Support group session", label: t("Support Group Session", "সহায়তা গোষ্ঠী সেশন") },
            { src: realCelebration.url, alt: "Community engagement program", label: t("Community Engagement Program", "সম্প্রদায় সংযোগ কর্মসূচি") },
            { src: realMedCamp.url, alt: "Medical health camp", label: t("Medical Health Camp", "চিকিৎসা স্বাস্থ্য শিবির") },
            { src: facilityReal4.url, alt: "Recovery support activities", label: t("Recovery Support Activities", "পুনরুদ্ধার সহায়তা কার্যক্রম") },
            { src: facilityReal5.url, alt: "Health and wellness initiative", label: t("Health & Wellness Initiative", "স্বাস্থ্য ও সুস্থতা উদ্যোগ") },
            { src: realEvent.url, alt: "Public awareness event", label: t("Public Awareness Event", "গণসচেতনতা কর্মসূচি") },
            { src: facilityReal6.url, alt: "Community outreach program", label: t("Community Outreach Program", "সম্প্রদায় সচেতনতা কর্মসূচি") },
            { src: facilityReal7.url, alt: "Social reintegration activities", label: t("Social Reintegration Activities", "সামাজিক পুনঃএকীকরণ কার্যক্রম") },
            { src: facilityReal8.url, alt: "Awareness rally", label: t("Awareness Rally", "সচেতনতা মিছিল") },
          ]} />
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-4 mb-10">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary border-0">{t("Family Guidance Resource Center", "পারিবারিক নির্দেশনা কেন্দ্র")}</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Learn. Understand. Help.", "শিখুন। বুঝুন। সাহায্য করুন।")}</h2>
            </div>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t("Search topics…", "বিষয় খুঁজুন…")} className="pl-9 bg-card" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: t("Signs of Addiction", "নেশার লক্ষণ"), d: t("Spot the early behavioral, physical and emotional warning signs.", "প্রাথমিক আচরণগত, শারীরিক ও মানসিক সতর্ক লক্ষণ চিনুন।"), k: t("Awareness", "সচেতনতা") },
              { t: t("How Families Can Help", "পরিবার কীভাবে সাহায্য করতে পারে"), d: t("Practical ways to support a loved one through recovery.", "পুনরুদ্ধারের সময় প্রিয়জনকে সাহায্য করার বাস্তব উপায়।"), k: t("Family", "পরিবার") },
              { t: t("Recovery Support", "পুনরুদ্ধার সহায়তা"), d: t("Long-term support strategies that prevent relapse.", "রিল্যাপ্স প্রতিরোধে দীর্ঘমেয়াদী সহায়তা কৌশল।"), k: t("Recovery", "পুনরুদ্ধার") },
              { t: t("Intervention Guidance", "হস্তক্ষেপ নির্দেশনা"), d: t("How to plan a compassionate, effective intervention.", "সহানুভূতিশীল ও কার্যকর হস্তক্ষেপ পরিকল্পনা করার উপায়।"), k: t("Guidance", "নির্দেশনা") },
              { t: t("Understanding Treatment", "চিকিৎসা বোঝা"), d: t("What detox, therapy and aftercare actually look like.", "ডিটক্স, থেরাপি ও আফটারকেয়ার আসলে কেমন হয়।"), k: t("Treatment", "চিকিৎসা") },
              { t: t("Mental Wellness", "মানসিক সুস্থতা"), d: t("Coping with depression, anxiety and emotional triggers.", "বিষণ্ণতা, উদ্বেগ ও মানসিক ট্রিগার মোকাবেলা।"), k: t("Wellness", "সুস্থতা") },
            ].map((r) => (
              <Card key={r.t} className="p-6 border-0 shadow-card hover:shadow-elegant transition bg-card group cursor-pointer">
                <Badge variant="outline" className="text-xs mb-3 border-primary/30 text-primary">{r.k}</Badge>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                <p className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">{t("Read article", "নিবন্ধ পড়ুন")} <ChevronRight className="h-4 w-4" /></p>
              </Card>
            ))}
          </div>

          {/* Download */}
          <Card className="mt-14 p-6 sm:p-8 md:p-12 border-0 shadow-elegant gradient-primary text-primary-foreground grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-3">{t("Free Download", "বিনামূল্যে ডাউনলোড")}</Badge>
              <h3 className="font-display text-2xl md:text-3xl font-bold">{t("Complete Family Guide to Addiction Recovery", "নেশা মুক্তির সম্পূর্ণ পারিবারিক নির্দেশিকা")}</h3>
              <p className="mt-2 opacity-90 max-w-xl">{t("A 40-page evidence-based PDF guide written by our counselors — for families ready to take the first step.", "আমাদের কাউন্সেলরদের লেখা ৪০-পৃষ্ঠার প্রমাণভিত্তিক গাইড — প্রথম পদক্ষেপ নিতে প্রস্তুত পরিবারের জন্য।")}</p>
            </div>
            {guideSent ? (
              <div className="w-full md:w-auto md:min-w-[300px] rounded-2xl bg-white/15 border border-white/25 p-6 text-center animate-fade-up">
                <div className="mx-auto h-14 w-14 rounded-full bg-success grid place-items-center shadow-elegant animate-scale-in">
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <p className="mt-4 font-semibold">{t("Thank you. Your guide has been sent to your email.", "ধন্যবাদ। আপনার গাইড ইমেইলে পাঠানো হয়েছে।")}</p>
                <button type="button" onClick={() => { setGuideSent(false); setGuideName(""); setGuideEmail(""); }} className="mt-3 text-xs underline opacity-90 hover:opacity-100">
                  {t("Send to another email", "অন্য ইমেইলে পাঠান")}
                </button>
              </div>
            ) : (
              <form className="grid gap-3 w-full md:w-auto md:min-w-[320px]" onSubmit={handleGuideSubmit}>
                <Input required value={guideName} onChange={(e) => setGuideName(e.target.value)} placeholder={t("Your name", "আপনার নাম")} className="h-11 bg-white/15 border-white/30 text-white placeholder:text-white/70" />
                <Input required type="email" value={guideEmail} onChange={(e) => setGuideEmail(e.target.value)} placeholder={t("Email address", "ইমেইল ঠিকানা")} className="h-11 bg-white/15 border-white/30 text-white placeholder:text-white/70" />
                <Button type="submit" size="lg" className="w-full bg-white text-primary hover:bg-white/95 h-12">
                  <Download className="mr-2 h-4 w-4" /> {t("Download Guide", "গাইড ডাউনলোড করুন")}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* REFERRAL */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="p-8 md:p-10 border-0 shadow-card bg-card">
              <Badge className="mb-3 bg-primary/10 text-primary border-0">{t("Referral Portal", "রেফারেল পোর্টাল")}</Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{t("For Doctors, Hospitals, Counselors & NGOs", "চিকিৎসক, হাসপাতাল, কাউন্সেলর ও এনজিওদের জন্য")}</h2>
              <p className="text-muted-foreground mb-6">{t("Refer a patient confidentially. We coordinate intake within 24 hours.", "গোপনীয়ভাবে রোগী রেফার করুন। আমরা ২৪ ঘন্টার মধ্যে ভর্তির ব্যবস্থা করি।")}</p>
              <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); toast.success(t("Referral received. Our team will respond shortly.", "রেফারেল গৃহীত হয়েছে। আমাদের দল শীঘ্রই সাড়া দেবে।")); }}>
                <Input required placeholder={t("Referring professional / organization", "রেফার করা পেশাদার / সংস্থা")} />
                <Input required placeholder={t("Contact number", "যোগাযোগ নম্বর")} />
                <Input placeholder={t("Patient name (optional)", "রোগীর নাম (ঐচ্ছিক)")} />
                <Textarea required placeholder={t("Brief case summary", "সংক্ষিপ্ত কেস সারাংশ")} rows={3} />
                <Button type="submit" className="gradient-primary text-primary-foreground border-0">{t("Refer a Patient Confidentially", "গোপনীয়ভাবে রেফার করুন")}</Button>
              </form>
            </Card>
            <Card className="p-8 md:p-10 border-0 shadow-card bg-card">
              <Badge className="mb-3 bg-accent-soft text-accent border-0">{t("Anonymous Consultation", "নাম প্রকাশ না করে পরামর্শ")}</Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{t("100% Confidential Request", "১০০% গোপনীয় অনুরোধ")}</h2>
              <p className="text-muted-foreground mb-6">{t("Share only what you're comfortable with. We'll reach out discreetly.", "যা স্বাচ্ছন্দ্যে বলতে পারেন কেবল তা-ই জানান। আমরা নীরবে যোগাযোগ করব।")}</p>
              <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); toast.success(t("Request received confidentially. We'll call you back.", "অনুরোধ গোপনীয়ভাবে গৃহীত। আমরা কল করব।")); }}>
                <Input placeholder={t("Name (optional)", "নাম (ঐচ্ছিক)")} />
                <Input required placeholder={t("Phone number", "ফোন নম্বর")} />
                <Textarea required placeholder={t("Describe your concern…", "আপনার সমস্যা বর্ণনা করুন…")} rows={4} />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5 text-success" /> {t("Encrypted & never shared. Read by trained counselors only.", "এনক্রিপ্টেড ও কখনো ভাগ করা হবে না। শুধুমাত্র প্রশিক্ষিত কাউন্সেলর পড়বেন।")}
                </div>
                <Button type="submit" className="gradient-accent text-accent-foreground border-0">{t("Request Confidential Consultation", "গোপনীয় পরামর্শের অনুরোধ করুন")}</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* AI FAQ */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("AI FAQ Assistant", "AI প্রশ্নোত্তর সহায়ক")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Instant Answers, Anytime", "যেকোনো সময় তাৎক্ষণিক উত্তর")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("Ask common questions about admission, treatment and family involvement.", "ভর্তি, চিকিৎসা ও পারিবারিক অংশগ্রহণ সম্পর্কে সাধারণ প্রশ্ন করুন।")}</p>
          </div>
          <ChatFAQ />
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("Frequently Asked Questions", "সচরাচর জিজ্ঞাসিত প্রশ্ন")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Answers Families Ask Most", "পরিবারের সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নের উত্তর")}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{t("Clear, honest answers about admission, treatment and recovery at Midnapore Hope Society.", "মেদিনীপুর হোপ সোসাইটির ভর্তি, চিকিৎসা ও পুনরুদ্ধার সম্পর্কে স্পষ্ট, সৎ উত্তর।")}</p>
          </div>
          <Card className="p-4 md:p-8 border-0 shadow-elegant bg-card">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q[0]} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg py-5 hover:no-underline">{t(f.q[0], f.q[1])}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-5">{t(f.a[0], f.a[1])}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="gradient-primary text-primary-foreground border-0 shadow-soft">
              <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" /> {t("Still have questions? Talk to a counselor", "এখনও প্রশ্ন আছে? কাউন্সেলরের সাথে কথা বলুন")}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">{t("Compare", "তুলনা")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Why Families Choose Midnapore Hope Society", "কেন পরিবারগুলি মেদিনীপুর হোপ সোসাইটি বেছে নেয়")}</h2>
          </div>
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid grid-cols-3 text-center">
              <div className="p-5 bg-muted font-semibold text-sm md:text-base">{t("Feature", "বৈশিষ্ট্য")}</div>
              <div className="p-5 bg-muted font-semibold text-sm md:text-base text-muted-foreground">{t("Typical Centre", "সাধারণ কেন্দ্র")}</div>
              <div className="p-5 gradient-primary text-primary-foreground font-bold text-sm md:text-base">{t("Midnapore Hope Society", "মেদিনীপুর হোপ সোসাইটি")}</div>
            </div>
            {[
              t("Family Support Programs", "পরিবার সহায়তা কর্মসূচি"),
              t("Confidential Care", "গোপনীয় সেবা"),
              t("Personalized Counseling", "ব্যক্তিগতকৃত কাউন্সেলিং"),
              t("Long-term Recovery Planning", "দীর্ঘমেয়াদী পুনরুদ্ধার পরিকল্পনা"),
              t("Ongoing Guidance", "চলমান নির্দেশনা"),
              t("24/7 Helpline", "২৪/৭ হেল্পলাইন"),
            ].map((f, i) => (
              <div key={f} className={`grid grid-cols-3 text-center border-t ${i % 2 ? "bg-card" : "bg-secondary/20"}`}>
                <div className="p-4 font-medium text-sm md:text-base text-left pl-6">{f}</div>
                <div className="p-4 grid place-items-center"><X className="h-5 w-5 text-muted-foreground" /></div>
                <div className="p-4 grid place-items-center"><Check className="h-5 w-5 text-success" strokeWidth={3} /></div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("Community Outreach", "সম্প্রদায় সেবা")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("Building an Aware, Healthier Midnapore", "একটি সচেতন, সুস্থ মেদিনীপুর গড়ে তোলা")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Users, title: t("Awareness Campaigns", "সচেতনতা কর্মসূচি"), d: t("District-wide campaigns on de-addiction and mental wellness.", "নেশা মুক্তি ও মানসিক সুস্থতা নিয়ে জেলা-ব্যাপী কর্মসূচি।"), img: realRally.url },
              { i: Heart, title: t("Community Programs", "সম্প্রদায় কর্মসূচি"), d: t("Free counseling camps in schools, colleges and neighborhoods.", "স্কুল, কলেজ ও এলাকায় বিনামূল্যে কাউন্সেলিং শিবির।"), img: realAntiDrug.url },
              { i: FileText, title: t("Educational Workshops", "শিক্ষামূলক কর্মশালা"), d: t("Workshops for parents, teachers and youth on addiction prevention.", "অভিভাবক, শিক্ষক ও যুবকদের জন্য নেশা প্রতিরোধ কর্মশালা।"), img: realAwareness.url },
            ].map(({ i: I, title, d, img }) => (
              <Card key={title} className="overflow-hidden border-0 shadow-card bg-card hover:-translate-y-1 hover:shadow-elegant transition group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="h-11 w-11 rounded-xl gradient-accent grid place-items-center mb-3 -mt-10 relative shadow-elegant ring-4 ring-card">
                    <I className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CALLBACK */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 md:p-12 border-0 shadow-elegant gradient-hero text-white grid md:grid-cols-[1fr_auto] gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <Badge className="bg-white/20 text-white border-0 mb-3">{t("Quick Inquiry", "দ্রুত অনুসন্ধান")}</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{t("Request a Callback in 10 Minutes", "১০ মিনিটে কলব্যাকের অনুরোধ করুন")}</h2>
              <p className="mt-2 opacity-90">{t("A counselor will personally call you back — confidential and judgment-free.", "একজন কাউন্সেলর ব্যক্তিগতভাবে আপনাকে কল করবেন — গোপনীয় ও বিচারহীন।")}</p>
            </div>
            <form className="relative grid gap-3 w-full md:w-auto md:min-w-[320px]" onSubmit={(e) => { e.preventDefault(); toast.success(t("Callback scheduled. We'll reach you within 10 minutes.", "কলব্যাক নির্ধারিত। আমরা ১০ মিনিটের মধ্যে আপনাকে কল করব।")); }}>
              <Input required placeholder={t("Your name", "আপনার নাম")} className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Input required placeholder={t("Phone number", "ফোন নম্বর")} className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold">
                {t("Request Callback Now", "এখনই কলব্যাক অনুরোধ করুন")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
          {/* SHARE */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Share2 className="h-4 w-4" />
              {t("Share this centre with a family who needs help", "প্রয়োজন এমন পরিবারের সাথে এই কেন্দ্রটি শেয়ার করুন")}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`}
                target="_blank"
                rel="noopener"
                aria-label={t("Share on Facebook", "ফেসবুকে শেয়ার করুন")}
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] text-white px-4 py-2 text-sm font-semibold shadow-soft hover:opacity-90 hover:scale-105 transition"
              >
                <Facebook className="h-4 w-4" /> {t("Share on Facebook", "ফেসবুক শেয়ার")}
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SITE_URL}`)}`}
                target="_blank"
                rel="noopener"
                aria-label={t("Share on WhatsApp", "হোয়াটসঅ্যাপে শেয়ার করুন")}
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2 text-sm font-semibold shadow-soft hover:opacity-90 hover:scale-105 transition"
              >
                <MessageCircle className="h-4 w-4" /> {t("Share on WhatsApp", "হোয়াটসঅ্যাপ শেয়ার")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">{t("Contact", "যোগাযোগ")}</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">{t("We're Here. Reach Out.", "আমরা এখানে আছি। যোগাযোগ করুন।")}</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-2 p-7 border-0 shadow-card bg-card grid gap-5 content-start">
              {[
                { i: MapPin, title: t("Address", "ঠিকানা"), d: ADDRESS },
                { i: Phone, title: t("Phone", "ফোন"), d: PHONE, href: PHONE_TEL },
                { i: MessageCircle, title: "WhatsApp", d: t("Chat with us anytime", "যেকোনো সময় চ্যাট করুন"), href: WHATSAPP },
                { i: Mail, title: t("Email", "ইমেইল"), d: EMAIL, href: `mailto:${EMAIL}` },
                { i: Clock, title: t("Hours", "সময়"), d: t("Open 24 hours · 7 days", "২৪ ঘন্টা · ৭ দিন খোলা") },
              ].map(({ i: I, title, d, href }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl gradient-primary grid place-items-center">
                    <I className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">{title}</p>
                    {href ? (
                      <a href={href} className="text-sm text-muted-foreground hover:text-primary transition break-words">{d}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{d}</p>
                    )}
                  </div>
                </div>
              ))}
            </Card>
            <Card className="lg:col-span-3 p-7 border-0 shadow-card bg-card">
              <h3 className="font-display font-bold text-xl mb-1">{t("Send us a message", "আমাদের বার্তা পাঠান")}</h3>
              <p className="text-sm text-muted-foreground mb-5">{t("We respond within an hour, 24/7.", "আমরা ২৪/৭ এক ঘন্টার মধ্যে সাড়া দিই।")}</p>
              <form className="grid sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); toast.success(t("Message sent. We'll be in touch shortly.", "বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।")); }}>
                <Input required placeholder={t("Full name", "পুরো নাম")} />
                <Input required placeholder={t("Phone number", "ফোন নম্বর")} />
                <Input className="sm:col-span-2" type="email" placeholder={t("Email", "ইমেইল")} />
                <Textarea className="sm:col-span-2" required placeholder={t("How can we help?", "আমরা কীভাবে সাহায্য করতে পারি?")} rows={4} />
                <Button type="submit" className="sm:col-span-2 gradient-primary text-primary-foreground border-0 h-12">{t("Send Message", "বার্তা পাঠান")}</Button>
              </form>
            </Card>
          </div>
          {/* FIND US */}
          <div id="find-us" className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6">
            <Card className="p-7 border-0 shadow-card bg-card flex flex-col">
              <Badge className="mb-3 bg-primary/10 text-primary border-0 w-fit">{t("Find Us", "আমাদের খুঁজুন")}</Badge>
              <h3 className="font-display text-2xl font-bold mb-2">{t("Visit Our Centre", "আমাদের কেন্দ্র পরিদর্শন করুন")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ADDRESS}</p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {t("Open 24 hours · 7 days a week", "২৪ ঘন্টা · সপ্তাহের ৭ দিন খোলা")}</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {PHONE}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {EMAIL}</div>
              </div>
              <div className="mt-auto grid sm:grid-cols-2 gap-3">
                <Button asChild className="gradient-primary text-primary-foreground border-0"><a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" /> {t("Call Now", "এখনই কল করুন")}</a></Button>
                <Button asChild variant="outline"><a href={MAPS_DIRECTIONS} target="_blank" rel="noopener"><MapPin className="mr-2 h-4 w-4" /> {t("Get Directions", "দিকনির্দেশ পান")}</a></Button>
              </div>
            </Card>
            <div className="overflow-hidden rounded-2xl shadow-card border bg-card min-h-[320px]">
              <iframe
                title="Midnapore Hope Society location"
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {/* CONNECT WITH US */}
          <div className="mt-10">
            <Card className="p-8 md:p-10 border-0 shadow-elegant gradient-primary text-primary-foreground text-center relative overflow-hidden">
              <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <Badge className="mb-3 bg-white/20 text-white border-0">{t("Follow Us", "আমাদের অনুসরণ করুন")}</Badge>
                <h3 className="font-display text-2xl md:text-4xl font-bold">{t("Connect With Us", "আমাদের সাথে যুক্ত হোন")}</h3>
                <p className="mt-2 opacity-90 max-w-xl mx-auto text-sm md:text-base">
                  {t(
                    "Follow our journey — awareness campaigns, recovery stories and community events from Midnapore Hope Society.",
                    "আমাদের যাত্রা অনুসরণ করুন — সচেতনতা কর্মসূচি, পুনরুদ্ধারের গল্প এবং সম্প্রদায় কর্মসূচি।",
                  )}
                </p>
                <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 font-semibold shadow-elegant hover:scale-105 hover:shadow-2xl transition-all"
                  >
                    <Facebook className="h-5 w-5 transition-transform group-hover:-rotate-6" />
                    Facebook
                  </a>
                  <a
                    href={YOUTUBE}
                    target="_blank"
                    rel="noopener"
                    aria-label="YouTube"
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-[#FF0000] px-5 py-2.5 font-semibold shadow-elegant hover:scale-105 hover:shadow-2xl transition-all"
                  >
                    <Youtube className="h-5 w-5 transition-transform group-hover:-rotate-6" />
                    YouTube
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={hopeLogo.url}
                  alt="Midnapore Hope Society logo"
                  className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/20"
                />
                <div>
                  <p className="font-display font-bold text-lg">Midnapore Hope Society</p>
                  <p className="text-xs opacity-80">মেদিনীপুর হোপ সোসাইটি</p>
                </div>
              </div>
              <p className="text-sm opacity-90 max-w-md leading-relaxed">
                {t(
                  "A trusted Nasha Mukti Kendra and addiction treatment centre serving Midnapore and West Bengal with confidential, compassionate, evidence-based recovery care.",
                  "মেদিনীপুর ও পশ্চিমবঙ্গের একটি বিশ্বস্ত নেশা মুক্তি কেন্দ্র — গোপনীয়, সহানুভূতিশীল ও প্রমাণভিত্তিক পুনরুদ্ধার সেবা।",
                )}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge className="bg-white/15 text-white border-0">{t("LGBTQ+ Friendly", "LGBTQ+ বান্ধব")}</Badge>
                <Badge className="bg-white/15 text-white border-0">{t("5.0 ★ Rated", "৫.০ ★ রেটেড")}</Badge>
                <Badge className="bg-white/15 text-white border-0">{t("Open 24/7", "২৪/৭ খোলা")}</Badge>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest opacity-80">{t("Follow", "অনুসরণ")}</span>
                <a href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/15 grid place-items-center hover:bg-white hover:text-primary hover:scale-110 transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href={YOUTUBE} target="_blank" rel="noopener" aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/15 grid place-items-center hover:bg-white hover:text-[#FF0000] hover:scale-110 transition-all">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">{t("Quick Links", "দ্রুত লিঙ্ক")}</p>
              <ul className="space-y-2 text-sm opacity-90">
                {[
                  { en: "About", bn: "পরিচিতি", id: "about" },
                  { en: "Programs", bn: "কর্মসূচি", id: "programs" },
                  { en: "Recovery", bn: "পুনরুদ্ধার", id: "journey" },
                  { en: "Facility", bn: "কেন্দ্র", id: "facility" },
                  { en: "Resources", bn: "সম্পদ", id: "resources" },
                  { en: "Contact", bn: "যোগাযোগ", id: "contact" },
                ].map(s => (
                  <li key={s.id}><a href={`#${s.id}`} className="hover:opacity-100 transition">{t(s.en, s.bn)}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">{t("24/7 Emergency", "২৪/৭ জরুরী")}</p>
              <ul className="space-y-3 text-sm">
                <li><a href={PHONE_TEL} className="inline-flex items-center gap-2 hover:opacity-80"><Phone className="h-4 w-4" /> {PHONE}</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:opacity-80"><MessageCircle className="h-4 w-4" /> {t("WhatsApp Chat", "হোয়াটসঅ্যাপ চ্যাট")}</a></li>
                <li className="flex items-start gap-2 opacity-90"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> <span>{t("Bidhan Nagar East, Midnapore 721101", "বিধান নগর ইস্ট, মেদিনীপুর ৭২১১০১")}</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3 justify-between text-xs opacity-80">
            <p>© {new Date().getFullYear()} Midnapore Hope Society. {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}</p>
            <p>{t("Nasha Mukti Kendra · Addiction Treatment · Rehabilitation Centre · West Bengal", "নেশা মুক্তি কেন্দ্র · নেশা চিকিৎসা · পুনর্বাসন কেন্দ্র · পশ্চিমবঙ্গ")}</p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-20 md:bottom-4 right-4 z-50 flex flex-col gap-3">
        <a href={PHONE_TEL} aria-label="Emergency call" className="h-14 w-14 rounded-full bg-emergency text-white grid place-items-center shadow-elegant animate-pulse-ring">
          <AlertCircle className="h-6 w-6" />
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp" className="h-14 w-14 rounded-full bg-whatsapp text-white grid place-items-center shadow-elegant hover:scale-110 transition">
          <MessageCircle className="h-6 w-6" />
        </a>
        <a href={PHONE_TEL} aria-label="Call now" className="h-14 w-14 rounded-full gradient-primary text-primary-foreground grid place-items-center shadow-elegant hover:scale-110 transition">
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* MOBILE STICKY CONTACT BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 gap-0 border-t bg-background/95 backdrop-blur-xl shadow-elegant">
        <a href={PHONE_TEL} className="flex items-center justify-center gap-2 py-3.5 gradient-primary text-primary-foreground font-semibold text-sm">
          <Phone className="h-4 w-4" /> {t("Call Now", "কল করুন")}
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-3.5 bg-whatsapp text-white font-semibold text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

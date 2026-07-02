import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, Calendar, Shield, Users, Heart, Clock, Wine, Pill,
  Brain, Sparkles, RefreshCw, ChevronRight, MapPin, Mail, Check, X, Search,
  Download, Stethoscope, Lock, Eye, HandHeart, Activity, FileText, Award,
  AlertCircle, Menu, ArrowRight, Star, Globe, Facebook, Youtube,
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

const FAQS = [
  { q: "How long does treatment usually take?", a: "Programs typically range from 30 to 180 days depending on individual needs. Our counselors design a personalized plan after the initial confidential assessment." },
  { q: "Is treatment confidential?", a: "Yes. Every interaction — from your first call to discharge and aftercare — is strictly confidential. Records are protected and never shared without written consent." },
  { q: "Are family visits allowed?", a: "Absolutely. Family involvement is central to lasting recovery. Scheduled visits, family counseling sessions and progress updates are part of every program." },
  { q: "Do you provide counseling?", a: "Yes — one-on-one CBT, motivational counseling, group therapy and family counseling are all delivered by experienced, qualified therapists." },
  { q: "Is medical supervision available?", a: "Our facility offers 24/7 medical supervision, including doctor-led detox, medication management and on-call emergency support." },
  { q: "What happens after recovery?", a: "Aftercare includes relapse-prevention groups, monthly follow-ups, family check-ins and 24/7 helpline access for at least 12 months post-discharge." },
  { q: "How do I begin admission?", a: "Call or WhatsApp us anytime. We conduct a brief confidential assessment, share the program and — in most cases — offer same-day admission." },
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
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mhs-lang");
      if (saved === "en" || saved === "bn") setLang(saved);
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("mhs-lang", lang); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "bn" ? "bn" : "en";
    }
  }, [lang]);

  const t = (en: string, bn: string) => (lang === "en" ? en : bn);

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
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#programs" className="hover:text-primary transition">Programs</a>
            <a href="#journey" className="hover:text-primary transition">Recovery</a>
            <a href="#facility" className="hover:text-primary transition">Facility</a>
            <a href="#resources" className="hover:text-primary transition">Resources</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "bn" : "en")} className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border px-3 py-1.5 hover:bg-secondary transition">
              <Globe className="h-3.5 w-3.5" /> {lang === "en" ? "বাংলা" : "EN"}
            </button>
            <Button asChild className="gradient-primary text-primary-foreground border-0 shadow-soft hidden md:inline-flex">
              <a href="#contact"><Calendar className="mr-2 h-4 w-4" />Book Consultation</a>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><Menu /></button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden border-t bg-card px-4 py-3 grid gap-2 text-sm font-medium">
            {["About","Programs","Recovery","Facility","Resources","Contact"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setNavOpen(false)} className="py-2">{s}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sunrise of hope" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 max-w-6xl">
          <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
            <Award className="h-3.5 w-3.5 mr-1.5" /> Trusted Rehabilitation Centre · West Bengal
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] max-w-4xl">
            {t("Helping People Rebuild Their Lives", "জীবন পুনর্গঠনে আপনার সঙ্গী")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Professional addiction treatment, counseling, rehabilitation, and family support programs designed to guide individuals toward lasting recovery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 shadow-elegant h-12 px-6">
              <a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" /> Call Now</a>
            </Button>
            <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 border-0 shadow-elegant h-12 px-6">
              <a href={WHATSAPP} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur h-12 px-6">
              <a href="#contact"><Calendar className="mr-2 h-5 w-5" /> Book Confidential Consultation</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { icon: Lock, label: "Confidential Care" },
              { icon: Stethoscope, label: "Experienced Team" },
              { icon: HandHeart, label: "Family Guidance" },
              { icon: Activity, label: "Recovery Focused" },
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
                <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{stat.l}</p>
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
              <Badge variant="outline" className="border-emergency/30 text-emergency mb-4">Recognize the Signs</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Is Addiction Affecting Someone You Love?</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Addiction quietly changes the people we care about. Spotting the early warning signs is the first step toward helping them heal.
              </p>
              <Button asChild size="lg" className="mt-6 gradient-primary text-primary-foreground border-0 shadow-soft">
                <a href={PHONE_TEL}>Get Professional Guidance Today <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Sudden behavior changes",
                "Financial problems",
                "Relationship conflicts",
                "Loss of motivation",
                "Alcohol or substance dependency",
                "Withdrawal & mood swings",
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
            <Badge className="mb-4 bg-accent-soft text-accent border-0">Interactive Tools</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Addiction Self-Assessment</h2>
            <p className="mt-3 text-muted-foreground text-lg">A 7-question confidential assessment to understand the level of concern and get a personalized recommendation.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Assessment />
            <Card className="p-8 md:p-10 border-0 shadow-elegant gradient-accent text-accent-foreground">
              <Badge className="bg-white/20 text-white border-0 mb-4">Recovery Readiness Checker</Badge>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Is Your Family Ready for Professional Treatment?</h3>
              <p className="opacity-95 mb-6 leading-relaxed">Recovery starts when families decide to act. Use these readiness indicators to know if it's time.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Past efforts to quit haven't lasted",
                  "Daily life is being disrupted",
                  "Health, work or relationships are at risk",
                  "Family needs professional guidance",
                ].map(s => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/95 border-0">
                <a href="#contact">Talk to a Counselor <ArrowRight className="ml-2 h-4 w-4" /></a>
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
                <p className="text-xs text-muted-foreground">Based on 18 verified reviews</p>
              </Card>
            </div>
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary mb-4">About Us</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">A Trusted Recovery Home in Midnapore</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Midnapore Hope Society is a compassionate addiction treatment centre committed to helping individuals and families overcome the challenges of substance dependence — with dignity, privacy, and proven care.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { i: Heart, t: "Mission", d: "Restore lives through holistic recovery." },
                  { i: Eye, t: "Vision", d: "A society free from addiction's grip." },
                  { i: Shield, t: "Values", d: "Compassion · Privacy · Excellence." },
                ].map(({ i: I, t, d }) => (
                  <div key={t} className="rounded-2xl border p-4 bg-card shadow-card">
                    <I className="h-6 w-6 text-primary mb-2" />
                    <p className="font-semibold">{t}</p>
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
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Our Programs</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Treatment Programs Tailored to Recovery</h2>
            <p className="mt-3 text-muted-foreground text-lg">Evidence-based programs that blend medical care, therapy and family involvement.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Wine, t: "Alcohol Addiction Recovery", d: "Medically supervised detox and structured behavioral therapy for lasting sobriety." },
              { i: Pill, t: "Drug Addiction Recovery", d: "Personalized de-addiction programs for prescription, opioid and substance dependence." },
              { i: Brain, t: "Counseling", d: "One-on-one CBT and motivational counseling led by experienced therapists." },
              { i: Users, t: "Family Therapy", d: "Healing the family system, rebuilding trust, and creating supportive home environments." },
              { i: RefreshCw, t: "Relapse Prevention", d: "Long-term strategies, coping skills and aftercare to prevent relapse." },
              { i: Sparkles, t: "Emotional Wellness", d: "Mindfulness, yoga and stress-management practices for inner balance." },
            ].map(({ i: I, t, d }) => (
              <Card key={t} className="group p-6 border-0 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 bg-card">
                <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                  <I className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
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
            <Badge className="mb-4 bg-accent-soft text-accent border-0">Recovery Journey</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">A Clear Path From Crisis to Confidence</h2>
            <p className="mt-3 text-muted-foreground text-lg">Every individual follows a structured, supportive journey toward lasting recovery.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px gradient-primary md:-translate-x-1/2" />
            {[
              { t: "Assessment", d: "Confidential evaluation to understand medical, psychological and family context." },
              { t: "Admission", d: "Same-day admission with a personalized care plan and a welcoming environment." },
              { t: "Detox", d: "Medically supervised detoxification with comfort and safety as priorities." },
              { t: "Counseling", d: "Daily individual and group therapy sessions led by experienced counselors." },
              { t: "Recovery", d: "Skill building, wellness routines and emotional reconditioning." },
              { t: "Family Reintegration", d: "Family therapy, aftercare and continued support beyond the program." },
            ].map((s, i) => (
              <div key={s.t} className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <Card className="inline-block p-6 border-0 shadow-card bg-card text-left max-w-sm">
                    <p className="text-xs font-bold text-primary mb-1">STEP {i + 1}</p>
                    <h3 className="font-display font-bold text-xl mb-2">{s.t}</h3>
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Why Choose Us</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Why Families Trust Midnapore Hope Society</h2>
            <p className="mt-3 opacity-90 text-lg">Six reasons families across West Bengal choose us as their recovery partner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Shield, t: "Safe Environment", d: "Secure 24/7 monitored facility with hygienic, calming spaces." },
              { i: Stethoscope, t: "Experienced Team", d: "Medical doctors, psychologists, and certified addiction counselors." },
              { i: Lock, t: "Confidential Treatment", d: "Complete privacy from intake to discharge — your dignity protected." },
              { i: Users, t: "Family Support", d: "Structured family programs that heal relationships." },
              { i: HandHeart, t: "Personalized Plans", d: "Recovery plans tailored to each individual's needs and history." },
              { i: Clock, t: "24/7 Assistance", d: "Always-available helpline and on-site care, day or night." },
            ].map(({ i: I, t, d }) => (
              <Card key={t} className="p-6 bg-white/10 border-white/20 backdrop-blur text-white hover:bg-white/15 transition">
                <I className="h-8 w-8 mb-3" />
                <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
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
            <Badge className="mb-4 bg-accent-soft text-accent border-0">Impact</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Our Care, in Numbers</h2>
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
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Success Stories</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Lives Renewed at Hope Society</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Arijit Das", l: "Contai", r: "Good infrastructure, excellent treatment procedure. Awesome staff behavior and very supportive in every situation. ❤️" },
              { n: "Ashish Bishal", l: "Family Member", r: "My brother was treated with so much love and care. The whole team went above and beyond." },
              { n: "Purno", l: "Recovered Member", r: "The best de-addiction and rehabilitation centre I've experienced. Great service and a real second chance." },
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
            <Badge className="mb-4 bg-accent-soft text-accent border-0">Virtual Facility Tour</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">A Calm, Healing Environment</h2>
            <p className="mt-3 text-muted-foreground text-lg">Step inside our facility designed for comfort, dignity and recovery.</p>
          </div>
          <Gallery images={[
            { src: realBanner.url, alt: "Midnapore Hope Society facility banner", label: t("Our Centre", "আমাদের কেন্দ্র") },
            { src: facilityReal1.url, alt: "Patient rooms", label: t("Patient Rooms", "রোগীদের কক্ষ") },
            { src: facilityReal2.url, alt: "Counseling session", label: t("Counseling Rooms", "কাউন্সেলিং কক্ষ") },
            { src: facilityReal3.url, alt: "Dining area", label: t("Dining Area", "খাবার ঘর") },
            { src: realCelebration.url, alt: "Community life", label: t("Community Life", "সম্প্রদায় জীবন") },
            { src: realMedCamp.url, alt: "Medical camp", label: t("Medical Camps", "চিকিৎসা শিবির") },
            { src: facilityReal4.url, alt: "Outdoor spaces", label: t("Outdoor Spaces", "খোলা পরিবেশ") },
            { src: facilityReal5.url, alt: "Recreation spaces", label: t("Recreation Spaces", "বিনোদন এলাকা") },
            { src: realEvent.url, alt: "Awareness events", label: t("Awareness Events", "সচেতনতা কর্মসূচি") },
            { src: facilityReal6.url, alt: "Facility photo", label: t("Community Programs", "সম্প্রদায় কর্মসূচি") },
            { src: facilityReal7.url, alt: "Facility photo", label: t("Public Outreach", "গণসচেতনতা") },
            { src: facilityReal8.url, alt: "Facility photo", label: t("Rehabilitation Team", "পুনর্বাসন দল") },
          ]} />
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-4 mb-10">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary border-0">Family Guidance Resource Center</Badge>
              <h2 className="font-display text-3xl md:text-5xl font-bold">Learn. Understand. Help.</h2>
            </div>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search topics…" className="pl-9 bg-card" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Signs of Addiction", d: "Spot the early behavioral, physical and emotional warning signs.", k: "Awareness" },
              { t: "How Families Can Help", d: "Practical ways to support a loved one through recovery.", k: "Family" },
              { t: "Recovery Support", d: "Long-term support strategies that prevent relapse.", k: "Recovery" },
              { t: "Intervention Guidance", d: "How to plan a compassionate, effective intervention.", k: "Guidance" },
              { t: "Understanding Treatment", d: "What detox, therapy and aftercare actually look like.", k: "Treatment" },
              { t: "Mental Wellness", d: "Coping with depression, anxiety and emotional triggers.", k: "Wellness" },
            ].map((r) => (
              <Card key={r.t} className="p-6 border-0 shadow-card hover:shadow-elegant transition bg-card group cursor-pointer">
                <Badge variant="outline" className="text-xs mb-3 border-primary/30 text-primary">{r.k}</Badge>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                <p className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ChevronRight className="h-4 w-4" /></p>
              </Card>
            ))}
          </div>

          {/* Download */}
          <Card className="mt-14 p-8 md:p-12 border-0 shadow-elegant gradient-primary text-primary-foreground grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-3">Free Download</Badge>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Complete Family Guide to Addiction Recovery</h3>
              <p className="mt-2 opacity-90 max-w-xl">A 40-page evidence-based PDF guide written by our counselors — for families ready to take the first step.</p>
            </div>
            <form className="grid gap-3 w-full md:w-auto md:min-w-[300px]" onSubmit={(e) => { e.preventDefault(); toast.success("Guide sent! Check your email."); }}>
              <Input required placeholder="Your name" className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Input required type="email" placeholder="Email address" className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/95">
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* REFERRAL */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="p-8 md:p-10 border-0 shadow-card bg-card">
              <Badge className="mb-3 bg-primary/10 text-primary border-0">Referral Portal</Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">For Doctors, Hospitals, Counselors & NGOs</h2>
              <p className="text-muted-foreground mb-6">Refer a patient confidentially. We coordinate intake within 24 hours.</p>
              <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Referral received. Our team will respond shortly."); }}>
                <Input required placeholder="Referring professional / organization" />
                <Input required placeholder="Contact number" />
                <Input placeholder="Patient name (optional)" />
                <Textarea required placeholder="Brief case summary" rows={3} />
                <Button type="submit" className="gradient-primary text-primary-foreground border-0">Refer a Patient Confidentially</Button>
              </form>
            </Card>
            <Card className="p-8 md:p-10 border-0 shadow-card bg-card">
              <Badge className="mb-3 bg-accent-soft text-accent border-0">Anonymous Consultation</Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">100% Confidential Request</h2>
              <p className="text-muted-foreground mb-6">Share only what you're comfortable with. We'll reach out discreetly.</p>
              <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Request received confidentially. We'll call you back."); }}>
                <Input placeholder="Name (optional)" />
                <Input required placeholder="Phone number" />
                <Textarea required placeholder="Describe your concern…" rows={4} />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5 text-success" /> Encrypted & never shared. Read by trained counselors only.
                </div>
                <Button type="submit" className="gradient-accent text-accent-foreground border-0">Request Confidential Consultation</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* AI FAQ */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">AI FAQ Assistant</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Instant Answers, Anytime</h2>
            <p className="mt-3 text-muted-foreground text-lg">Ask common questions about admission, treatment and family involvement.</p>
          </div>
          <ChatFAQ />
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Frequently Asked Questions</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Answers Families Ask Most</h2>
            <p className="mt-3 text-muted-foreground text-lg">Clear, honest answers about admission, treatment and recovery at Midnapore Hope Society.</p>
          </div>
          <Card className="p-4 md:p-8 border-0 shadow-elegant bg-card">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg py-5 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="gradient-primary text-primary-foreground border-0 shadow-soft">
              <a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" /> Still have questions? Talk to a counselor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent-soft text-accent border-0">Compare</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Why Families Choose Midnapore Hope Society</h2>
          </div>
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid grid-cols-3 text-center">
              <div className="p-5 bg-muted font-semibold text-sm md:text-base">Feature</div>
              <div className="p-5 bg-muted font-semibold text-sm md:text-base text-muted-foreground">Typical Centre</div>
              <div className="p-5 gradient-primary text-primary-foreground font-bold text-sm md:text-base">Midnapore Hope Society</div>
            </div>
            {[
              "Family Support Programs",
              "Confidential Care",
              "Personalized Counseling",
              "Long-term Recovery Planning",
              "Ongoing Guidance",
              "24/7 Helpline",
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
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Community Outreach</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Building an Aware, Healthier Midnapore</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Users, t: "Awareness Campaigns", d: "District-wide campaigns on de-addiction and mental wellness.", img: realRally.url },
              { i: Heart, t: "Community Programs", d: "Free counseling camps in schools, colleges and neighborhoods.", img: realAntiDrug.url },
              { i: FileText, t: "Educational Workshops", d: "Workshops for parents, teachers and youth on addiction prevention.", img: realAwareness.url },
            ].map(({ i: I, t, d, img }) => (
              <Card key={t} className="overflow-hidden border-0 shadow-card bg-card hover:-translate-y-1 hover:shadow-elegant transition group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={img} alt={t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="h-11 w-11 rounded-xl gradient-accent grid place-items-center mb-3 -mt-10 relative shadow-elegant ring-4 ring-card">
                    <I className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
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
              <Badge className="bg-white/20 text-white border-0 mb-3">Quick Inquiry</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Request a Callback in 10 Minutes</h2>
              <p className="mt-2 opacity-90">A counselor will personally call you back — confidential and judgment-free.</p>
            </div>
            <form className="relative grid gap-3 w-full md:w-auto md:min-w-[320px]" onSubmit={(e) => { e.preventDefault(); toast.success("Callback scheduled. We'll reach you within 10 minutes."); }}>
              <Input required placeholder="Your name" className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Input required placeholder="Phone number" className="bg-white/15 border-white/30 text-white placeholder:text-white/70" />
              <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold">
                Request Callback Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Contact</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold">We're Here. Reach Out.</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-2 p-7 border-0 shadow-card bg-card grid gap-5 content-start">
              {[
                { i: MapPin, t: "Address", d: ADDRESS },
                { i: Phone, t: "Phone", d: PHONE, href: PHONE_TEL },
                { i: MessageCircle, t: "WhatsApp", d: "Chat with us anytime", href: WHATSAPP },
                { i: Mail, t: "Email", d: EMAIL, href: `mailto:${EMAIL}` },
                { i: Clock, t: "Hours", d: "Open 24 hours · 7 days" },
              ].map(({ i: I, t, d, href }) => (
                <div key={t} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl gradient-primary grid place-items-center">
                    <I className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">{t}</p>
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
              <h3 className="font-display font-bold text-xl mb-1">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-5">We respond within an hour, 24/7.</p>
              <form className="grid sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Message sent. We'll be in touch shortly."); }}>
                <Input required placeholder="Full name" />
                <Input required placeholder="Phone number" />
                <Input className="sm:col-span-2" type="email" placeholder="Email" />
                <Textarea className="sm:col-span-2" required placeholder="How can we help?" rows={4} />
                <Button type="submit" className="sm:col-span-2 gradient-primary text-primary-foreground border-0 h-12">Send Message</Button>
              </form>
            </Card>
          </div>
          {/* FIND US */}
          <div id="find-us" className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6">
            <Card className="p-7 border-0 shadow-card bg-card flex flex-col">
              <Badge className="mb-3 bg-primary/10 text-primary border-0 w-fit">Find Us</Badge>
              <h3 className="font-display text-2xl font-bold mb-2">Visit Our Centre</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ADDRESS}</p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open 24 hours · 7 days a week</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {PHONE}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {EMAIL}</div>
              </div>
              <div className="mt-auto grid sm:grid-cols-2 gap-3">
                <Button asChild className="gradient-primary text-primary-foreground border-0"><a href={PHONE_TEL}><Phone className="mr-2 h-4 w-4" /> Call Now</a></Button>
                <Button asChild variant="outline"><a href={MAPS_DIRECTIONS} target="_blank" rel="noopener"><MapPin className="mr-2 h-4 w-4" /> Get Directions</a></Button>
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
                A trusted Nasha Mukti Kendra and addiction treatment centre serving Midnapore and West Bengal with confidential, compassionate, evidence-based recovery care.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge className="bg-white/15 text-white border-0">LGBTQ+ Friendly</Badge>
                <Badge className="bg-white/15 text-white border-0">5.0 ★ Rated</Badge>
                <Badge className="bg-white/15 text-white border-0">Open 24/7</Badge>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm opacity-90">
                {["About","Programs","Recovery","Facility","Resources","Contact"].map(s => (
                  <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:opacity-100 transition">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">24/7 Emergency</p>
              <ul className="space-y-3 text-sm">
                <li><a href={PHONE_TEL} className="inline-flex items-center gap-2 hover:opacity-80"><Phone className="h-4 w-4" /> {PHONE}</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:opacity-80"><MessageCircle className="h-4 w-4" /> WhatsApp Chat</a></li>
                <li className="flex items-start gap-2 opacity-90"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> <span>Bidhan Nagar East, Midnapore 721101</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3 justify-between text-xs opacity-80">
            <p>© {new Date().getFullYear()} Midnapore Hope Society. All rights reserved.</p>
            <p>Nasha Mukti Kendra · Addiction Treatment · Rehabilitation Centre · West Bengal</p>
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
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-3.5 bg-whatsapp text-white font-semibold text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

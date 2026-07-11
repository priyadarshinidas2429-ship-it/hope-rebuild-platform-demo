import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, ArrowLeft, Clock, Share2, Facebook, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";
import { getResource, resources, type ResourceArticle } from "@/lib/resources";
import { toast } from "sonner";

const SITE_URL = "https://www.hopesociety.co.in";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = getResource(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Midnapore Hope Society" }, { name: "robots", content: "noindex" }],
        links: [{ rel: "canonical", href: `${SITE_URL}/resources` }],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title.en} — Midnapore Hope Society` },
        { name: "description", content: a.description.en },
        { property: "og:title", content: `${a.title.en} — Midnapore Hope Society` },
        { property: "og:description", content: a.description.en },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/resources/${a.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${a.title.en} — Midnapore Hope Society` },
        { name: "twitter:description", content: a.description.en },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/resources/${a.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title.en,
            description: a.description.en,
            inLanguage: ["en", "bn"],
            author: { "@type": "Organization", name: "Midnapore Hope Society" },
            publisher: {
              "@type": "Organization",
              name: "Midnapore Hope Society",
              url: SITE_URL,
            },
            mainEntityOfPage: `${SITE_URL}/resources/${a.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/#resources` },
              { "@type": "ListItem", position: 3, name: a.title.en, item: `${SITE_URL}/resources/${a.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => {
    return (
      <div className="min-h-screen grid place-items-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline">Back to home</Link>
        </div>
      </div>
    );
  },
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: ResourceArticle };
  const { t, lang } = useLang();
  const related = article.related
    .map((slug: string) => resources.find((r) => r.slug === slug))
    .filter((r): r is ResourceArticle => Boolean(r));

  const shareUrl = `${SITE_URL}/resources/${article.slug}`;
  const shareTitle = article.title[lang];

  const onShare = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: shareTitle, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast.success(t("Link copied to clipboard", "লিংক কপি হয়েছে"));
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="border-b bg-card">
        <div className="container mx-auto max-w-4xl px-4 py-4 flex items-center justify-between gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition">
            <ArrowLeft className="h-4 w-4" />
            {t("Back to home", "হোমে ফিরুন")}
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onShare} className="gap-1.5">
              <Share2 className="h-4 w-4" />
              {t("Share", "শেয়ার")}
            </Button>
          </div>
        </div>
      </div>

      <article className="container mx-auto max-w-3xl px-4 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition">{t("Home", "হোম")}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/" hash="resources" className="hover:text-primary transition">{t("Resources", "সম্পদ")}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium truncate">{article.title[lang]}</span>
        </nav>

        <Badge className="mb-4 bg-primary/10 text-primary border-0">{article.category[lang]}</Badge>
        <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">{article.title[lang]}</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">{article.description[lang]}</p>

        <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {article.readingMinutes} {t("min read", "মিনিটে পড়ুন")}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>{t("Midnapore Hope Society", "মেদিনীপুর হোপ সোসাইটি")}</span>
        </div>

        <div className="mt-10 prose-invert max-w-none">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{article.intro[lang]}</p>

          {article.sections.map((s, i: number) => (
            <section key={i} className="mt-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{s.heading[lang]}</h2>
              {s.body[lang] && (
                <p className="mt-3 text-base leading-relaxed text-foreground/85">{s.body[lang]}</p>
              )}
              {s.items && s.items.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {s.items.map((it, j: number) => (
                    <li key={j} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{it[lang]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {article.closing && (
            <blockquote className="mt-10 border-l-4 border-primary bg-primary/5 rounded-r-lg p-5 text-base md:text-lg italic text-foreground/90">
              {article.closing[lang]}
            </blockquote>
          )}
        </div>

        {/* Share row */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold">{t("Share this article", "এই নিবন্ধ শেয়ার করুন")}:</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] text-white px-4 py-2 text-sm font-semibold shadow-soft hover:opacity-90 transition"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " — " + shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2 text-sm font-semibold shadow-soft hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t">
            <h2 className="font-display text-2xl font-bold mb-6">{t("Related articles", "সম্পর্কিত নিবন্ধ")}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((r: ResourceArticle) => (
                <Link key={r.slug} to="/resources/$slug" params={{ slug: r.slug }} className="group">
                  <Card className="p-6 border-0 shadow-card hover:shadow-elegant transition h-full">
                    <Badge variant="outline" className="text-xs mb-3 border-primary/30 text-primary">{r.category[lang]}</Badge>
                    <h3 className="font-display font-bold text-lg group-hover:text-primary transition">{r.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.description[lang]}</p>
                    <p className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("Read article", "নিবন্ধ পড়ুন")} <ChevronRight className="h-4 w-4" />
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
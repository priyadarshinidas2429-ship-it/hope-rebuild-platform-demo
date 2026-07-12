import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, useLang } from "@/lib/i18n";

function NotFoundComponent() {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("Page not found", "পৃষ্ঠাটি পাওয়া যায়নি")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("The page you're looking for doesn't exist or has been moved.", "আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি নেই বা সরানো হয়েছে।")}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Go home", "হোমে ফিরুন")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useLang();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("This page didn't load", "এই পৃষ্ঠাটি লোড হয়নি")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("Something went wrong on our end. You can try refreshing or head back home.", "আমাদের দিকে কিছু ভুল হয়েছে। রিফ্রেশ করে দেখুন বা হোমে ফিরে যান।")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Try again", "আবার চেষ্টা করুন")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("Go home", "হোমে ফিরুন")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // Indexing switch: defaults to indexable for the production custom domain.
    // Set VITE_SITE_INDEXABLE="false" to emit <meta name="robots" content="noindex, nofollow"> on previews/staging.
    const indexable = import.meta.env.VITE_SITE_INDEXABLE !== "false";
    // Google Search Console verification: paste the content value from GSC into VITE_GSC_VERIFICATION.
    const gscToken = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

    const meta: Array<Record<string, string>> = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Midnapore Hope Society | De-Addiction, Rehabilitation & Mental Wellness Centre" },
      { name: "description", content: "Midnapore Hope Society is a professional de-addiction and rehabilitation centre in Midnapore, West Bengal, providing addiction recovery programs, mental wellness support, counseling, family guidance, and rehabilitation services." },
      { name: "author", content: "Midnapore Hope Society" },
      { property: "og:title", content: "Midnapore Hope Society" },
      { property: "og:description", content: "Professional de-addiction, rehabilitation, counseling, and mental wellness support in Midnapore, West Bengal." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Midnapore Hope Society" },
      { property: "og:url", content: "https://www.hopesociety.co.in" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:locale:alternate", content: "bn_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@MidnaporeHope" },
      { name: "twitter:title", content: "Midnapore Hope Society" },
      { name: "twitter:description", content: "Professional de-addiction, rehabilitation, counseling, and mental wellness support in Midnapore, West Bengal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/faf1430f-63a6-426b-8c44-19b0a101a120/id-preview-185afd75--b04fade1-0a77-4167-8ed5-eec515fd8e6a.lovable.app-1782803990496.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/faf1430f-63a6-426b-8c44-19b0a101a120/id-preview-185afd75--b04fade1-0a77-4167-8ed5-eec515fd8e6a.lovable.app-1782803990496.png" },
    ];
    if (indexable) {
      meta.push({ name: "robots", content: "index, follow" });
    } else {
      meta.push({ name: "robots", content: "noindex, nofollow" });
    }
    if (gscToken) meta.push({ name: "google-site-verification", content: gscToken });

    return {
      meta,
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

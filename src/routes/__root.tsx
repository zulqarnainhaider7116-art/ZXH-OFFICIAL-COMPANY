import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeProvider } from "@/components/hq/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COMPANY, LINKS } from "@/data/site";
import appCss from "../styles.css?url";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: COMPANY.name,
      alternateName: COMPANY.short,
      description: COMPANY.seoDescription,
      foundingDate: String(COMPANY.established),
      founder: {
        "@type": "Person",
        name: COMPANY.founder,
      },
      slogan: COMPANY.tagline,
      sameAs: [
        LINKS.instagram,
        LINKS.tiktok,
        LINKS.snapchat,
        LINKS.facebook,
        LINKS.channel,
      ],
    },
    {
      "@type": "WebSite",
      name: COMPANY.name,
      description: COMPANY.seoDescription,
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: COMPANY.seoTitle },
      { name: "description", content: COMPANY.seoDescription },
      { name: "theme-color", content: "#0a0a0b" },
      { name: "author", content: COMPANY.founder },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("zxh-theme");if(t==="light"){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <TooltipProvider>
              <Outlet />
            </TooltipProvider>
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

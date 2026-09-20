import { COMPANY, LINKS, NAV } from "@/data/site";
import { BrandLockup } from "@/components/hq/logo";
import { ThemeToggle } from "@/components/hq/theme-toggle";
import { Button } from "@/components/ui/button";
import { House, Layers, LayoutGrid, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const dock = [
  { id: "entrance", label: "Home", icon: House },
  { id: "founder", label: "About", icon: UserRound },
  { id: "services", label: "Work", icon: Layers },
  { id: "projects", label: "Show", icon: LayoutGrid },
  { id: "contact", label: "Desk", icon: Sparkles },
] as const;

export function Nav() {
  return (
    <>
      <a
        href="#entrance"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-bg-elevated focus:px-3 focus:py-2"
      >
        Skip to company entrance
      </a>
      <header className="fixed top-0 right-0 left-0 z-30 hidden md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="zxh-glass rounded-2xl px-3 py-2">
            <BrandLockup />
          </div>
          <nav
            aria-label="Company"
            className="zxh-glass flex items-center gap-1 rounded-full px-2 py-1.5"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3.5 py-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="zxh-glass flex items-center gap-1 rounded-2xl p-1.5">
            <ThemeToggle />
            <Button asChild size="sm">
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                Start a Project
              </a>
            </Button>
          </div>
        </div>
      </header>

      <header className="fixed top-0 right-0 left-0 z-30 md:hidden">
        <div className="flex items-center justify-between px-3 pt-3">
          <div className="zxh-glass rounded-2xl px-2.5 py-1.5">
            <BrandLockup compact />
          </div>
          <div className="zxh-glass rounded-2xl p-0.5">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav
        aria-label="Company"
        className="fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <div className="zxh-glass mx-auto grid max-w-md grid-cols-5 rounded-2xl p-1.5">
          {dock.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] tracking-wide text-muted",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
      <span className="sr-only">{COMPANY.name}</span>
    </>
  );
}

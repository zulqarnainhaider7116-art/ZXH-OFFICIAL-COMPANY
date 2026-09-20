import { COMPANY, PILLARS } from "@/data/site";
import { Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Wordmark } from "@/components/hq/logo";

const ICONS = {
  globe: Globe,
  shield: ShieldCheck,
  users: Users,
  growth: TrendingUp,
} as const;

export function FooterWall() {
  return (
    <footer className="relative overflow-hidden bg-bg pb-24 md:pb-10">
      <img
        src="/company/corridor.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {PILLARS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div key={p.label} className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase">
                <Icon className="size-4 text-fg" />
                {p.label}
              </div>
            );
          })}
        </div>
        <div className="zxh-rule my-12" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Wordmark size="md" />
            <p className="mt-2 text-xs tracking-[0.28em] text-muted uppercase">{COMPANY.sub}</p>
          </div>
          <p className="text-xs tracking-[0.2em] text-subtle uppercase">
            Powered by {COMPANY.founder}
          </p>
        </div>
      </div>
    </footer>
  );
}

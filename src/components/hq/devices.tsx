import { COMPANY } from "@/data/site";

const CODE_LINES = [
  { n: "1", html: `<!DOCTYPE html>` },
  { n: "2", html: `<html lang="en">` },
  { n: "3", html: `  <title>${COMPANY.short}</title>` },
  { n: "4", html: `  <h1>${COMPANY.wordmark}</h1>` },
  { n: "5", html: `  <p>${COMPANY.line}</p>` },
];

export function LaptopScreen() {
  return (
    <div className="zxh-bezel rounded-xl p-2 md:rounded-2xl md:p-2.5">
      <div className="zxh-code relative overflow-hidden rounded-lg bg-bg px-3 py-3 font-mono text-[10px] leading-relaxed md:px-4 md:py-3.5 md:text-[11px]">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-bg-subtle" />
          <span className="size-1.5 rounded-full bg-bg-subtle" />
          <span className="size-1.5 rounded-full bg-bg-subtle" />
          <span className="ml-2 text-[9px] tracking-[0.18em] text-subtle uppercase">
            index.html — {COMPANY.short}
          </span>
        </div>
        <pre className="overflow-hidden whitespace-pre text-subtle">
          {CODE_LINES.map((line) => (
            <span key={line.n} className="block">
              <span className="n">{line.n}{"  "}</span>
              {line.html}
            </span>
          ))}
        </pre>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg" />
      </div>
    </div>
  );
}

export function DashboardScreen() {
  return (
    <div className="zxh-bezel rounded-2xl p-2.5">
      <div className="relative overflow-hidden rounded-xl bg-bg px-4 py-4 text-fg">
        <p className="zxh-track text-[9px] text-subtle">Project Dashboard</p>
        <p className="mt-2 font-display text-3xl italic">{COMPANY.short}</p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["EST", "2024"],
            ["SUPPORT", "24/7"],
            ["FOCUS", "100%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-fg/5 px-2.5 py-2">
              <p className="text-[9px] tracking-[0.2em] text-subtle">{k}</p>
              <p className="mt-1 font-medium tabular-nums">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-fg/10">
          <div className="h-full w-4/5 rounded-full bg-accent/80" />
        </div>
        <p className="mt-2 text-[10px] tracking-[0.16em] text-muted uppercase">HQ systems online</p>
      </div>
    </div>
  );
}

export function PhoneScreen() {
  return (
    <div className="zxh-phone mx-auto w-[132px] rounded-[28px] p-1.5 md:w-[148px]">
      <div className="relative overflow-hidden rounded-[22px] bg-bg px-3 pt-6 pb-5 text-center">
        <span className="absolute top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-fg/10" />
        <img
          src="/company/logo-glass.png"
          alt=""
          className="mx-auto size-16 rounded-2xl object-cover"
        />
        <p className="mt-3 text-[10px] font-semibold tracking-[0.28em]">ZXH</p>
        <p className="text-[8px] tracking-[0.32em] text-muted uppercase">Official</p>
        <p className="mt-4 font-display text-lg leading-tight italic text-fg">
          Build
          <br />
          Create
          <br />
          Scale
        </p>
      </div>
    </div>
  );
}

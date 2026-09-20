import { COMPANY, LINKS } from "@/data/site";
import { Wordmark } from "@/components/hq/logo";
import { LaptopScreen, PhoneScreen } from "@/components/hq/devices";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

export function HeroRoom() {
  const ref = useParallax<HTMLElement>();

  return (
    <section
      id="entrance"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <img
        src="/company/skyline.jpg"
        alt=""
        className="parallax-layer absolute inset-0 h-full w-full object-cover"
        style={{ ["--depth" as string]: "12px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-28 pb-8 md:justify-center md:pt-28 md:pb-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="zxh-reveal zxh-track text-[10px] text-muted">
            Ideas · Code · Design · Deploy
          </p>
          <div className="zxh-reveal mt-5">
            <Wordmark size="wall" />
          </div>
          <p className="zxh-reveal mt-2 text-lg tracking-[0.34em] text-accent uppercase md:text-2xl">
            {COMPANY.sub}
          </p>
          <p className="zxh-reveal mt-3 text-xs tracking-[0.28em] text-muted uppercase">
            {COMPANY.line}
          </p>
          <h1 className="zxh-reveal mt-8 font-display text-4xl leading-[1.1] font-medium italic md:text-6xl">
            {COMPANY.tagline}
          </h1>
          <p className="zxh-reveal mt-5 max-w-md text-sm text-muted md:text-base">
            {COMPANY.summary}
          </p>
          <div className="zxh-reveal mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#founder">Explore Company</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="zxh-reveal mt-10 md:hidden">
            <PhoneScreen />
          </div>
        </div>
      </div>

      <div
        className="parallax-layer pointer-events-none absolute z-10 hidden lg:block zxh-hero-device"
        style={{ ["--depth" as string]: "22px" }}
        aria-hidden
      >
        <LaptopScreen />
        <div className="absolute -right-2 -bottom-14 rotate-[-8deg]">
          <PhoneScreen />
        </div>
      </div>

      <div className="zxh-desk relative z-10 mt-auto px-5 pt-8 pb-6 md:px-10">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-6">
          <div className="hidden items-end gap-4 sm:flex">
            <div className="zxh-mug" />
            <p className="pb-2 text-[10px] tracking-[0.3em] text-subtle uppercase">
              Est. {COMPANY.established} · {COMPANY.founder}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-6 pb-1 text-[10px] tracking-[0.22em] text-muted uppercase">
            <span>Custom Websites</span>
            <span className="hidden sm:inline">Mobile Apps</span>
            <span className="hidden md:inline">Cloud Solutions</span>
            <a href={LINKS.whatsapp} className="text-fg" target="_blank" rel="noreferrer">
              Fast & Secure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

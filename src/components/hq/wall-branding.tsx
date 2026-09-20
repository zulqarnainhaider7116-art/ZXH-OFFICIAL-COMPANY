import { COMPANY, WALL_LINES } from "@/data/site";
import { Wordmark } from "@/components/hq/logo";
import { Eyebrow } from "@/components/hq/room-section";

export function WallBranding() {
  return (
    <section
      id="brand"
      className="relative min-h-screen overflow-hidden scroll-mt-20"
    >
      <img
        src="/company/corridor.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-bg/75" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24">
        <Eyebrow>Wall branding</Eyebrow>
        <div className="mt-6">
          <Wordmark size="wall" />
        </div>
        <p className="mt-2 text-xl tracking-[0.4em] text-accent uppercase md:text-3xl">
          {COMPANY.sub}
        </p>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WALL_LINES.map((line) => (
            <p
              key={line}
              className="border-t border-border pt-4 text-sm tracking-[0.22em] text-muted uppercase"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SERVICES } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";

export function ServicesWall() {
  return (
    <RoomSection id="services" atmosphere="/company/tech-wall.jpg" overlay="heavy">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <Eyebrow>Services wall</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
          What this room builds.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Six glass panels on the company wall — not a grid of generic cards.
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="zxh-glass group min-h-44 rounded-2xl p-6 transition-[transform,background-color] duration-[var(--motion-fast)] ease-[var(--ease-smooth)] hover:-translate-y-0.5"
            >
              <p className="font-display text-3xl italic text-subtle">{s.n}</p>
              <h3 className="mt-6 text-sm tracking-[0.18em] uppercase">{s.name}</h3>
              <p className="mt-2 text-sm text-muted">{s.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </RoomSection>
  );
}

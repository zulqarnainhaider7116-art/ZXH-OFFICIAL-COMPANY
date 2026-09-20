import { TECH } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";

export function TechWall() {
  return (
    <RoomSection id="skills" atmosphere="/company/tech-wall.jpg" overlay="heavy">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <Eyebrow>Technology wall</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
          The company board.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Materials on the wall — not percentage bars.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {TECH.map((t) => (
            <div
              key={t}
              className="zxh-glass flex min-h-24 items-center justify-center rounded-2xl px-3 text-center text-sm tracking-[0.22em] uppercase"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </RoomSection>
  );
}

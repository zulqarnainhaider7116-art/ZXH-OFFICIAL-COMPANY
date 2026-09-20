import { useEffect, useState } from "react";
import { STATS } from "@/data/site";
import { Eyebrow } from "@/components/hq/room-section";
import { useInView } from "@/hooks/use-in-view";

function Count({ value, play }: { value: number; play: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    const start = performance.now();
    const dur = 900;
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [play, value]);
  return <span className="tabular-nums">{n}</span>;
}

export function StatsWall() {
  const { ref, inView } = useInView();
  return (
    <section
      id="stats"
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-bg-elevated"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Eyebrow>Company information wall</Eyebrow>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-medium md:text-6xl">
                {s.raw ? (
                  s.value
                ) : (
                  <>
                    <Count value={s.value} play={inView} />
                    {s.suffix}
                  </>
                )}
              </p>
              <p className="mt-2 text-xs tracking-[0.22em] text-muted uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";

export function useParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;

    const tick = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.setProperty("--px", x.toFixed(4));
      el.style.setProperty("--py", y.toFixed(4));
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}

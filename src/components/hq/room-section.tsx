import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function RoomSection({
  id,
  atmosphere,
  position = "center",
  children,
  className,
  overlay = "default",
}: {
  id: string;
  atmosphere: string;
  position?: string;
  children: ReactNode;
  className?: string;
  overlay?: "default" | "heavy" | "soft";
}) {
  const { ref, inView } = useInView();
  const overlayClass =
    overlay === "heavy"
      ? "bg-gradient-to-b from-bg/80 via-bg/55 to-bg"
      : overlay === "soft"
        ? "bg-gradient-to-b from-bg/30 via-bg/25 to-bg/80"
        : "zxh-vignette";

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative min-h-screen overflow-hidden scroll-mt-20",
        "zxh-in",
        inView && "is-in",
        className,
      )}
    >
      <img
        src={atmosphere}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
        loading="lazy"
      />
      <div className={cn("absolute inset-0", overlayClass)} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="zxh-track text-[10px] text-muted md:text-[11px]">{children}</p>
  );
}

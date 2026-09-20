import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "wall";
}) {
  const scale = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl md:text-7xl",
    wall: "text-[20vw] leading-[0.86] md:text-7xl lg:text-8xl xl:text-9xl",
  }[size];

  return (
    <span className={cn("relative inline-block font-sans font-semibold tracking-[-0.08em]", className)}>
      <span className={cn("zxh-metal select-none", scale)}>
        Z
        <span className="relative inline-block">
          X
          <span className="zxh-slash" aria-hidden />
        </span>
        H
      </span>
    </span>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#entrance" className="flex items-center gap-3 text-fg">
      <img
        src="/company/logo-glass.png"
        alt=""
        className="size-10 rounded-lg object-cover shadow-[var(--shadow-border)] md:size-11"
      />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.18em]">ZXH</span>
        {!compact && (
          <span className="block text-[10px] tracking-[0.28em] text-muted uppercase">
            Official
          </span>
        )}
      </span>
    </a>
  );
}

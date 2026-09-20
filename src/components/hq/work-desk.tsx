import { COMPANY } from "@/data/site";
import { DashboardScreen, PhoneScreen } from "@/components/hq/devices";
import { Eyebrow } from "@/components/hq/room-section";
import { useParallax } from "@/hooks/use-parallax";

export function WorkDesk() {
  const ref = useParallax<HTMLElement>();

  return (
    <section id="desk" ref={ref} className="relative min-h-screen overflow-hidden scroll-mt-20">
      <img
        src="/company/desk-still.jpg"
        alt=""
        className="parallax-layer absolute inset-0 h-full w-full object-cover"
        style={{ ["--depth" as string]: "10px", objectPosition: "center 60%" }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>Company work desk</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            The desk is live.
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted">
            Laptop, monitor, phone, notebook, and lamp sit in the same room language as the
            rest of the headquarters. The screen is a real ZXH dashboard — not a stock photo of
            code.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            {[
              "Executive desk · dark stone",
              "Company monitor · project dashboard",
              "Phone · Build / Create / Scale",
              "Notebook · Better code, better future",
            ].map((line) => (
              <li key={line} className="flex items-center gap-3">
                <span className="h-px w-6 bg-border-strong" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="parallax-layer relative"
          style={{ ["--depth" as string]: "20px" }}
        >
          <DashboardScreen />
          <div className="absolute -bottom-10 -left-4 hidden rotate-[-12deg] sm:block">
            <PhoneScreen />
          </div>
          <p className="mt-16 text-right text-[10px] tracking-[0.28em] text-subtle uppercase">
            {COMPANY.short} · desk os
          </p>
        </div>
      </div>
    </section>
  );
}

import { COMPANY } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";
import { LaptopScreen, PhoneScreen } from "@/components/hq/devices";

export function ShowcaseRoom() {
  return (
    <RoomSection id="showcase" atmosphere="/company/office-vertical.jpg" position="center top">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <Eyebrow>Company showcase room</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
          ZXH digital experience
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Campaign posters, the glass emblem, and live devices sit on the same shelves as the
          rest of the headquarters.
        </p>

        <div className="mt-12 grid items-end gap-6 md:grid-cols-3">
          <figure className="zxh-panel overflow-hidden rounded-2xl">
            <img src="/company/poster-hq.png" alt="ZXH Official headquarters campaign poster" className="h-80 w-full object-cover" />
            <figcaption className="px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase">
              Headquarters poster
            </figcaption>
          </figure>
          <figure className="zxh-panel overflow-hidden rounded-2xl">
            <img src="/company/logo-glass.png" alt="ZXH Official glass emblem" className="h-80 w-full object-cover" />
            <figcaption className="px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase">
              Glass emblem
            </figcaption>
          </figure>
          <figure className="zxh-panel overflow-hidden rounded-2xl">
            <img src="/company/poster-studio.png" alt="ZXH Official studio campaign poster" className="h-80 w-full object-cover" />
            <figcaption className="px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase">
              Studio campaign
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.6fr]">
          <LaptopScreen />
          <div className="justify-self-center">
            <PhoneScreen />
            <p className="mt-4 text-center text-[10px] tracking-[0.22em] text-subtle uppercase">
              {COMPANY.line}
            </p>
          </div>
        </div>
      </div>
    </RoomSection>
  );
}

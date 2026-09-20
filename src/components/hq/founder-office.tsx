import { COMPANY, FOUNDER_ROLES } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";
import { Badge } from "@/components/ui/badge";

export function FounderOffice() {
  return (
    <RoomSection id="founder" atmosphere="/company/ceo-office.jpg" position="right center">
      <div className="mx-auto grid min-h-screen max-w-6xl items-end gap-10 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div>
          <Eyebrow>Founder office</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight font-medium md:text-6xl">
            {COMPANY.founder}
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted md:text-base">
            The executive room is kept as a working studio — desk, window, and the company
            wordmark on the wall. The founder is present in the work, not as a stock portrait.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {FOUNDER_ROLES.map((role) => (
              <li key={role}>
                <Badge>{role}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <aside className="zxh-panel rounded-2xl p-6 md:rounded-3xl md:p-8">
          <p className="zxh-track text-[10px] text-subtle">Nameplate</p>
          <p className="mt-3 font-display text-3xl italic">Zulqarnain X Haider</p>
          <p className="mt-1 text-sm text-muted">Founder & Creative Developer</p>
          <div className="zxh-rule my-6" />
          <p className="text-sm leading-relaxed text-muted">
            ZXH Official Company designs and builds premium websites, applications, and digital
            systems from this room — a private creative studio with a public product standard.
          </p>
          <p className="mt-6 text-[11px] tracking-[0.22em] text-subtle uppercase">
            Dream · Build · Grow
          </p>
        </aside>
      </div>
    </RoomSection>
  );
}

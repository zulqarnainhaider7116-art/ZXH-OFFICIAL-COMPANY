import { LINKS, SOCIAL } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";
import { Button } from "@/components/ui/button";
import { SOCIAL_ICONS } from "@/components/hq/social-icons";

export function Reception() {
  return (
    <RoomSection id="contact" atmosphere="/company/reception.jpg" overlay="heavy">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 py-24 md:py-28">
        <Eyebrow>Company reception</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight font-medium md:text-6xl">
          Let’s build something great.
        </h2>
        <p className="mt-4 max-w-md text-sm text-muted">
          The reception desk is open. Start a project on WhatsApp, or follow the company on
          the public walls.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
              Start a Project
            </a>
          </Button>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:max-w-xl">
          {SOCIAL.map((s) => {
            const Icon = SOCIAL_ICONS[s.id];
            return (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="zxh-glass flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm"
                >
                  <Icon />
                  {s.name}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-[11px] tracking-[0.2em] text-subtle uppercase">
          Backup channel ·{" "}
          <a href={LINKS.channelBackup} className="text-muted hover:text-fg" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </p>
      </div>
    </RoomSection>
  );
}

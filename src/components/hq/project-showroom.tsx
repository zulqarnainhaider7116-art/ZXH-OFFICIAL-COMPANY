import { useMemo, useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS, type Project } from "@/data/site";
import { Eyebrow, RoomSection } from "@/components/hq/room-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/data/site";

export function ProjectShowroom() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const inQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return inCat && inQ;
    });
  }, [query, cat]);

  return (
    <RoomSection id="projects" atmosphere="/company/showroom.jpg" overlay="heavy">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <Eyebrow>ZXH project showroom</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
          Work on the wall.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Displays inside the company — live destinations where they exist, never invented
          URLs.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the showroom"
            aria-label="Search projects"
            className="max-w-md"
          />
          <div className="flex gap-2 overflow-x-auto pb-1">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`h-10 shrink-0 rounded-full px-3.5 text-xs tracking-[0.14em] uppercase shadow-[var(--shadow-border)] transition-colors ${
                  cat === c ? "bg-accent text-accent-fg" : "bg-bg-elevated/70 text-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-sm text-muted">No displays match that filter.</p>
        ) : (
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="zxh-panel w-[min(80vw,340px)] shrink-0 overflow-hidden rounded-2xl md:w-auto"
              >
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className="block w-full text-left"
                  aria-label={`Preview ${p.name}`}
                >
                  <img
                    src={p.image}
                    alt=""
                    className="h-44 w-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth)] hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
                <div className="p-5">
                  <Badge>{p.category}</Badge>
                  <h3 className="mt-3 text-base font-medium">{p.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <a
                        href={p.href}
                        {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {p.cta}
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                        Request Access
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent>
          {open && (
            <>
              <img src={open.image} alt="" className="mb-4 h-44 w-full rounded-xl object-cover" />
              <Badge>{open.category}</Badge>
              <DialogTitle className="mt-3">{open.name}</DialogTitle>
              <DialogDescription className="mt-2">{open.description}</DialogDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild>
                  <a
                    href={open.href}
                    {...(open.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {open.cta}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    Request Access
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </RoomSection>
  );
}

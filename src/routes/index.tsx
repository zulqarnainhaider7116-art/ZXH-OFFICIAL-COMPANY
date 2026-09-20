import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/hq/nav";
import { HeroRoom } from "@/components/hq/hero-room";
import { FounderOffice } from "@/components/hq/founder-office";
import { WorkDesk } from "@/components/hq/work-desk";
import { WallBranding } from "@/components/hq/wall-branding";
import { ServicesWall } from "@/components/hq/services-wall";
import { ProjectShowroom } from "@/components/hq/project-showroom";
import { TechWall } from "@/components/hq/tech-wall";
import { StatsWall } from "@/components/hq/stats-wall";
import { ShowcaseRoom } from "@/components/hq/showcase-room";
import { Reception } from "@/components/hq/reception";
import { FooterWall } from "@/components/hq/footer-wall";
import { InstallPrompt } from "@/components/hq/install-prompt";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      <div className="zxh-grain" aria-hidden />
      <div className="zxh-window-wash" aria-hidden />
      <Nav />
      <main>
        <HeroRoom />
        <FounderOffice />
        <WorkDesk />
        <WallBranding />
        <ServicesWall />
        <ProjectShowroom />
        <TechWall />
        <StatsWall />
        <ShowcaseRoom />
        <Reception />
      </main>
      <FooterWall />
      <InstallPrompt />
    </div>
  );
}

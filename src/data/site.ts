export const COMPANY = {
  name: "ZXH Official Company",
  short: "ZXH Official",
  wordmark: "ZXH",
  sub: "Official Company",
  founder: "Zulqarnain X Haider",
  tagline: "Turning Ideas Into Reality.",
  line: "Web · Apps · Digital Solutions",
  established: 2024,
  summary:
    "Building premium digital experiences, modern web applications, AI-powered tools, PWAs and innovative digital solutions.",
  seoTitle: "ZXH Official Company — Web Development, AI & Digital Solutions",
  seoDescription:
    "ZXH Official Company by Zulqarnain X Haider — premium web development, UI/UX design, PWA, AI tools, 3D web experiences and digital solutions.",
} as const;

export const LINKS = {
  whatsapp: "https://wa.me/message/VP5WENBFNFKCM1",
  channel: "https://whatsapp.com/channel/0029Vb6lszR7YSd3iYfa2V0n",
  channelBackup: "https://whatsapp.com/channel/0029Vb8XF2y1NCrQDWetrk1r",
  instagram: "https://www.instagram.com/stylish.munda875",
  tiktok: "https://vm.tiktok.com/ZS9FMYvMQRAES-PVX07/",
  snapchat: "https://www.snapchat.com/add/zxh-official",
  facebook: "https://www.facebook.com/share/1E86tuDM3C/",
} as const;

export const NAV = [
  { id: "entrance", label: "Home" },
  { id: "founder", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const FOUNDER_ROLES = [
  "Founder & Creative Developer",
  "Web Developer",
  "Web Designer",
  "UI/UX Designer",
  "Full Stack Developer",
] as const;

export const SERVICES = [
  {
    n: "01",
    name: "Web Development",
    copy: "Modern responsive websites and full-stack web applications.",
  },
  {
    n: "02",
    name: "Web Design",
    copy: "Premium interfaces focused on usability and visual quality.",
  },
  {
    n: "03",
    name: "UI / UX Design",
    copy: "Clean, intuitive and conversion-focused digital experiences.",
  },
  {
    n: "04",
    name: "PWA Development",
    copy: "Installable, fast and offline-capable web applications.",
  },
  {
    n: "05",
    name: "AI Solutions",
    copy: "AI-powered tools, automation and intelligent web experiences.",
  },
  {
    n: "06",
    name: "3D Web",
    copy: "Interactive Three.js and immersive web experiences.",
  },
] as const;

export const TECH = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PWA",
  "Firebase",
  "Three.js",
  "UI/UX",
  "SEO",
  "APIs",
  "Cloud",
  "AI",
] as const;

export const STATS = [
  { value: 2024, suffix: "", label: "Established", raw: true },
  { value: 24, suffix: "/7", label: "Support", raw: false },
  { value: 100, suffix: "+", label: "Free Tools", raw: false },
  { value: 100, suffix: "%", label: "Digital Focus", raw: false },
] as const;

export const PILLARS = [
  { label: "Online Presence", icon: "globe" },
  { label: "Secure Systems", icon: "shield" },
  { label: "Client Satisfaction", icon: "users" },
  { label: "Business Growth", icon: "growth" },
] as const;

export const SOCIAL = [
  { name: "WhatsApp", href: LINKS.whatsapp, id: "whatsapp" },
  { name: "Channel", href: LINKS.channel, id: "channel" },
  { name: "Instagram", href: LINKS.instagram, id: "instagram" },
  { name: "TikTok", href: LINKS.tiktok, id: "tiktok" },
  { name: "Snapchat", href: LINKS.snapchat, id: "snapchat" },
  { name: "Facebook", href: LINKS.facebook, id: "facebook" },
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Web Apps",
  "Creative",
  "Social",
  "Media",
  "Developer Tools",
  "Utilities",
  "AI",
  "Islamic",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  image: string;
  href: string;
  cta: string;
  external: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "hq",
    name: "ZXH Headquarters",
    category: "Web Apps",
    description:
      "The immersive company room you are standing in — a digital HQ for the brand, not a template landing page.",
    image: "/company/ceo-office.jpg",
    href: "#entrance",
    cta: "Enter Room",
    external: false,
  },
  {
    id: "identity",
    name: "ZXH Official Identity",
    category: "Creative",
    description:
      "Dimensional metal wordmark, glass emblem, and the company-room visual system used across desks and walls.",
    image: "/company/logo-glass.png",
    href: "#brand",
    cta: "View Identity",
    external: false,
  },
  {
    id: "channel",
    name: "Promote & Grow Channel",
    category: "Social",
    description:
      "Official WhatsApp channel for ZXH updates, tools, and company notes. Support the studio from the reception desk.",
    image: "/company/poster-studio.png",
    href: LINKS.channel,
    cta: "Open Channel",
    external: true,
  },
  {
    id: "instagram",
    name: "Studio Journal",
    category: "Media",
    description:
      "Work-in-progress frames, room studies, and public company presence on Instagram.",
    image: "/company/poster-hq.png",
    href: LINKS.instagram,
    cta: "Open Instagram",
    external: true,
  },
  {
    id: "tiktok",
    name: "ZXH On TikTok",
    category: "Media",
    description:
      "Short-form studio notes and product walks from the ZXH Official desk.",
    image: "/company/studio-desk.jpg",
    href: LINKS.tiktok,
    cta: "Open TikTok",
    external: true,
  },
  {
    id: "dashboard",
    name: "Desk Dashboard",
    category: "Developer Tools",
    description:
      "The live company monitor on the executive desk — project status, support hours, and HQ controls.",
    image: "/company/desk-still.jpg",
    href: "#desk",
    cta: "View Desk",
    external: false,
  },
  {
    id: "pwa",
    name: "ZXH Companion PWA",
    category: "Utilities",
    description:
      "Install the headquarters on your home screen. Fast, private to your device, and built to feel like a company app.",
    image: "/company/logo-glass.png",
    href: "#contact",
    cta: "Install HQ",
    external: false,
  },
  {
    id: "campaign",
    name: "Room Campaign Series",
    category: "Creative",
    description:
      "The original ZXH Official room posters — wall-mounted in the showcase as physical company artifacts.",
    image: "/company/poster-hq.png",
    href: "#showcase",
    cta: "View Showcase",
    external: false,
  },
  {
    id: "ai",
    name: "AI Solutions Desk",
    category: "AI",
    description:
      "Intelligent tools, automation, and AI-assisted web experiences commissioned from the ZXH studio.",
    image: "/company/tech-wall.jpg",
    href: LINKS.whatsapp,
    cta: "Start a Project",
    external: true,
  },
  {
    id: "faith",
    name: "Faith-Centered Products",
    category: "Islamic",
    description:
      "Respectful digital products for community, education, and worship-adjacent experiences.",
    image: "/company/reception.jpg",
    href: LINKS.whatsapp,
    cta: "Start a Project",
    external: true,
  },
];

export const WALL_LINES = [
  "Web Development",
  "UI/UX Design",
  "AI Solutions",
  "PWA Development",
  "3D Web",
  "Digital Solutions",
] as const;

import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-UEZY3dVu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var ThemeContext = (0, import_react.createContext)({
	theme: "dark",
	toggle: () => {},
	setTheme: () => {}
});
function useTheme() {
	return (0, import_react.useContext)(ThemeContext);
}
function readStoredTheme() {
	if (typeof window === "undefined") return "dark";
	try {
		return localStorage.getItem("zxh-theme") === "light" ? "light" : "dark";
	} catch {
		return "dark";
	}
}
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.toggle("light", theme === "light");
	root.classList.toggle("dark", theme === "dark");
	try {
		localStorage.setItem("zxh-theme", theme);
	} catch {}
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)(() => typeof document !== "undefined" && document.documentElement.classList.contains("light") ? "light" : readStoredTheme());
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		applyTheme(next);
	}, []);
	const toggle = (0, import_react.useCallback)(() => {
		setTheme(theme === "dark" ? "light" : "dark");
	}, [setTheme, theme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		toggle,
		setTheme
	}), [
		theme,
		toggle,
		setTheme
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function TooltipProvider({ delayDuration = 180, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
var COMPANY = {
	name: "ZXH Official Company",
	short: "ZXH Official",
	wordmark: "ZXH",
	sub: "Official Company",
	founder: "Zulqarnain X Haider",
	tagline: "Turning Ideas Into Reality.",
	line: "Web · Apps · Digital Solutions",
	established: 2024,
	summary: "Building premium digital experiences, modern web applications, AI-powered tools, PWAs and innovative digital solutions.",
	seoTitle: "ZXH Official Company — Web Development, AI & Digital Solutions",
	seoDescription: "ZXH Official Company by Zulqarnain X Haider — premium web development, UI/UX design, PWA, AI tools, 3D web experiences and digital solutions."
};
var LINKS = {
	whatsapp: "https://wa.me/message/VP5WENBFNFKCM1",
	channel: "https://whatsapp.com/channel/0029Vb6lszR7YSd3iYfa2V0n",
	channelBackup: "https://whatsapp.com/channel/0029Vb8XF2y1NCrQDWetrk1r",
	instagram: "https://www.instagram.com/stylish.munda875",
	tiktok: "https://vm.tiktok.com/ZS9FMYvMQRAES-PVX07/",
	snapchat: "https://www.snapchat.com/add/zxh-official",
	facebook: "https://www.facebook.com/share/1E86tuDM3C/"
};
var NAV = [
	{
		id: "entrance",
		label: "Home"
	},
	{
		id: "founder",
		label: "About"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var FOUNDER_ROLES = [
	"Founder & Creative Developer",
	"Web Developer",
	"Web Designer",
	"UI/UX Designer",
	"Full Stack Developer"
];
var SERVICES = [
	{
		n: "01",
		name: "Web Development",
		copy: "Modern responsive websites and full-stack web applications."
	},
	{
		n: "02",
		name: "Web Design",
		copy: "Premium interfaces focused on usability and visual quality."
	},
	{
		n: "03",
		name: "UI / UX Design",
		copy: "Clean, intuitive and conversion-focused digital experiences."
	},
	{
		n: "04",
		name: "PWA Development",
		copy: "Installable, fast and offline-capable web applications."
	},
	{
		n: "05",
		name: "AI Solutions",
		copy: "AI-powered tools, automation and intelligent web experiences."
	},
	{
		n: "06",
		name: "3D Web",
		copy: "Interactive Three.js and immersive web experiences."
	}
];
var TECH = [
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
	"AI"
];
var STATS = [
	{
		value: 2024,
		suffix: "",
		label: "Established",
		raw: true
	},
	{
		value: 24,
		suffix: "/7",
		label: "Support",
		raw: false
	},
	{
		value: 100,
		suffix: "+",
		label: "Free Tools",
		raw: false
	},
	{
		value: 100,
		suffix: "%",
		label: "Digital Focus",
		raw: false
	}
];
var PILLARS = [
	{
		label: "Online Presence",
		icon: "globe"
	},
	{
		label: "Secure Systems",
		icon: "shield"
	},
	{
		label: "Client Satisfaction",
		icon: "users"
	},
	{
		label: "Business Growth",
		icon: "growth"
	}
];
var SOCIAL = [
	{
		name: "WhatsApp",
		href: LINKS.whatsapp,
		id: "whatsapp"
	},
	{
		name: "Channel",
		href: LINKS.channel,
		id: "channel"
	},
	{
		name: "Instagram",
		href: LINKS.instagram,
		id: "instagram"
	},
	{
		name: "TikTok",
		href: LINKS.tiktok,
		id: "tiktok"
	},
	{
		name: "Snapchat",
		href: LINKS.snapchat,
		id: "snapchat"
	},
	{
		name: "Facebook",
		href: LINKS.facebook,
		id: "facebook"
	}
];
var PROJECT_CATEGORIES = [
	"All",
	"Web Apps",
	"Creative",
	"Social",
	"Media",
	"Developer Tools",
	"Utilities",
	"AI",
	"Islamic"
];
var PROJECTS = [
	{
		id: "hq",
		name: "ZXH Headquarters",
		category: "Web Apps",
		description: "The immersive company room you are standing in — a digital HQ for the brand, not a template landing page.",
		image: "/company/ceo-office.jpg",
		href: "#entrance",
		cta: "Enter Room",
		external: false
	},
	{
		id: "identity",
		name: "ZXH Official Identity",
		category: "Creative",
		description: "Dimensional metal wordmark, glass emblem, and the company-room visual system used across desks and walls.",
		image: "/company/logo-glass.png",
		href: "#brand",
		cta: "View Identity",
		external: false
	},
	{
		id: "channel",
		name: "Promote & Grow Channel",
		category: "Social",
		description: "Official WhatsApp channel for ZXH updates, tools, and company notes. Support the studio from the reception desk.",
		image: "/company/poster-studio.png",
		href: LINKS.channel,
		cta: "Open Channel",
		external: true
	},
	{
		id: "instagram",
		name: "Studio Journal",
		category: "Media",
		description: "Work-in-progress frames, room studies, and public company presence on Instagram.",
		image: "/company/poster-hq.png",
		href: LINKS.instagram,
		cta: "Open Instagram",
		external: true
	},
	{
		id: "tiktok",
		name: "ZXH On TikTok",
		category: "Media",
		description: "Short-form studio notes and product walks from the ZXH Official desk.",
		image: "/company/studio-desk.jpg",
		href: LINKS.tiktok,
		cta: "Open TikTok",
		external: true
	},
	{
		id: "dashboard",
		name: "Desk Dashboard",
		category: "Developer Tools",
		description: "The live company monitor on the executive desk — project status, support hours, and HQ controls.",
		image: "/company/desk-still.jpg",
		href: "#desk",
		cta: "View Desk",
		external: false
	},
	{
		id: "pwa",
		name: "ZXH Companion PWA",
		category: "Utilities",
		description: "Install the headquarters on your home screen. Fast, private to your device, and built to feel like a company app.",
		image: "/company/logo-glass.png",
		href: "#contact",
		cta: "Install HQ",
		external: false
	},
	{
		id: "campaign",
		name: "Room Campaign Series",
		category: "Creative",
		description: "The original ZXH Official room posters — wall-mounted in the showcase as physical company artifacts.",
		image: "/company/poster-hq.png",
		href: "#showcase",
		cta: "View Showcase",
		external: false
	},
	{
		id: "ai",
		name: "AI Solutions Desk",
		category: "AI",
		description: "Intelligent tools, automation, and AI-assisted web experiences commissioned from the ZXH studio.",
		image: "/company/tech-wall.jpg",
		href: LINKS.whatsapp,
		cta: "Start a Project",
		external: true
	},
	{
		id: "faith",
		name: "Faith-Centered Products",
		category: "Islamic",
		description: "Respectful digital products for community, education, and worship-adjacent experiences.",
		image: "/company/reception.jpg",
		href: LINKS.whatsapp,
		cta: "Start a Project",
		external: true
	}
];
var WALL_LINES = [
	"Web Development",
	"UI/UX Design",
	"AI Solutions",
	"PWA Development",
	"3D Web",
	"Digital Solutions"
];
var styles_default = "/assets/styles-Dd7fv7Vq.css";
var jsonLd = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "Organization",
		name: COMPANY.name,
		alternateName: COMPANY.short,
		description: COMPANY.seoDescription,
		foundingDate: String(COMPANY.established),
		founder: {
			"@type": "Person",
			name: COMPANY.founder
		},
		slogan: COMPANY.tagline,
		sameAs: [
			LINKS.instagram,
			LINKS.tiktok,
			LINKS.snapchat,
			LINKS.facebook,
			LINKS.channel
		]
	}, {
		"@type": "WebSite",
		name: COMPANY.name,
		description: COMPANY.seoDescription
	}]
};
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: COMPANY.seoTitle },
			{
				name: "description",
				content: COMPANY.seoDescription
			},
			{
				name: "theme-color",
				content: "#0a0a0b"
			},
			{
				name: "author",
				content: COMPANY.founder
			},
			{
				name: "robots",
				content: "index, follow"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem("zxh-theme");if(t==="light"){document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}catch(e){}})();` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter = () => import("./routes-CuiHoJBy.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { NAV as a, PROJECT_CATEGORIES as c, STATS as d, TECH as f, LINKS as i, SERVICES as l, useTheme as m, COMPANY as n, PILLARS as o, WALL_LINES as p, FOUNDER_ROLES as r, PROJECTS as s, router_exports as t, SOCIAL as u };

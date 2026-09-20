import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as TrendingUp, c as ShieldCheck, d as LayoutGrid, f as Layers, l as Moon, m as Globe, n as Users, o as Sun, p as House, r as UserRound, s as Sparkles, t as X, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as NAV, c as PROJECT_CATEGORIES, d as STATS, f as TECH, i as LINKS, l as SERVICES, m as useTheme, n as COMPANY, o as PILLARS, p as WALL_LINES, r as FOUNDER_ROLES, s as PROJECTS, u as SOCIAL } from "./router-UEZY3dVu.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CuiHoJBy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Wordmark({ className, size = "md" }) {
	const scale = {
		sm: "text-2xl",
		md: "text-4xl",
		lg: "text-6xl md:text-7xl",
		wall: "text-[20vw] leading-[0.86] md:text-7xl lg:text-8xl xl:text-9xl"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("relative inline-block font-sans font-semibold tracking-[-0.08em]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("zxh-metal select-none", scale),
			children: [
				"Z",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative inline-block",
					children: ["X", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "zxh-slash",
						"aria-hidden": true
					})]
				}),
				"H"
			]
		})
	});
}
function BrandLockup({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#entrance",
		className: "flex items-center gap-3 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/company/logo-glass.png",
			alt: "",
			className: "size-10 rounded-lg object-cover shadow-[var(--shadow-border)] md:size-11"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-semibold tracking-[0.18em]",
				children: "ZXH"
			}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[10px] tracking-[0.28em] text-muted uppercase",
				children: "Official"
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-bg-subtle/60",
			ghost: "text-muted hover:text-fg hover:bg-bg-subtle/70",
			subtle: "bg-bg-subtle text-fg shadow-[var(--shadow-border)] hover:bg-bg-elevated"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-7",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": isLight ? "Switch to dark room lighting" : "Switch to light room lighting",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative inline-flex size-4 items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `absolute size-4 transition-[opacity,transform,filter] duration-300 ${isLight ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `absolute size-4 transition-[opacity,transform,filter] duration-300 ${isLight ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"}` })]
		})
	});
}
var dock = [
	{
		id: "entrance",
		label: "Home",
		icon: House
	},
	{
		id: "founder",
		label: "About",
		icon: UserRound
	},
	{
		id: "services",
		label: "Work",
		icon: Layers
	},
	{
		id: "projects",
		label: "Show",
		icon: LayoutGrid
	},
	{
		id: "contact",
		label: "Desk",
		icon: Sparkles
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#entrance",
			className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-bg-elevated focus:px-3 focus:py-2",
			children: "Skip to company entrance"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "fixed top-0 right-0 left-0 z-30 hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zxh-glass rounded-2xl px-3 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Company",
						className: "zxh-glass flex items-center gap-1 rounded-full px-2 py-1.5",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							className: "rounded-full px-3.5 py-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg",
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zxh-glass flex items-center gap-1 rounded-2xl p-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								children: "Start a Project"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "fixed top-0 right-0 left-0 z-30 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-3 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "zxh-glass rounded-2xl px-2.5 py-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { compact: true })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "zxh-glass rounded-2xl p-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Company",
			className: "fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zxh-glass mx-auto grid max-w-md grid-cols-5 rounded-2xl p-1.5",
				children: dock.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] tracking-wide text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
					}, item.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: COMPANY.name
		})
	] });
}
var CODE_LINES = [
	{
		n: "1",
		html: `<!DOCTYPE html>`
	},
	{
		n: "2",
		html: `<html lang="en">`
	},
	{
		n: "3",
		html: `  <title>${COMPANY.short}</title>`
	},
	{
		n: "4",
		html: `  <h1>${COMPANY.wordmark}</h1>`
	},
	{
		n: "5",
		html: `  <p>${COMPANY.line}</p>`
	}
];
function LaptopScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zxh-bezel rounded-xl p-2 md:rounded-2xl md:p-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zxh-code relative overflow-hidden rounded-lg bg-bg px-3 py-3 font-mono text-[10px] leading-relaxed md:px-4 md:py-3.5 md:text-[11px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-bg-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-bg-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-bg-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-[9px] tracking-[0.18em] text-subtle uppercase",
							children: ["index.html — ", COMPANY.short]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "overflow-hidden whitespace-pre text-subtle",
					children: CODE_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "n",
							children: [line.n, "  "]
						}), line.html]
					}, line.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg" })
			]
		})
	});
}
function DashboardScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zxh-bezel rounded-2xl p-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl bg-bg px-4 py-4 text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "zxh-track text-[9px] text-subtle",
					children: "Project Dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-3xl italic",
					children: COMPANY.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-3 gap-2",
					children: [
						["EST", "2024"],
						["SUPPORT", "24/7"],
						["FOCUS", "100%"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-fg/5 px-2.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[9px] tracking-[0.2em] text-subtle",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium tabular-nums",
							children: v
						})]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-1.5 overflow-hidden rounded-full bg-fg/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-4/5 rounded-full bg-accent/80" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[10px] tracking-[0.16em] text-muted uppercase",
					children: "HQ systems online"
				})
			]
		})
	});
}
function PhoneScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "zxh-phone mx-auto w-[132px] rounded-[28px] p-1.5 md:w-[148px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[22px] bg-bg px-3 pt-6 pb-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-fg/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/company/logo-glass.png",
					alt: "",
					className: "mx-auto size-16 rounded-2xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[10px] font-semibold tracking-[0.28em]",
					children: "ZXH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[8px] tracking-[0.32em] text-muted uppercase",
					children: "Official"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-display text-lg leading-tight italic text-fg",
					children: [
						"Build",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Create",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Scale"
					]
				})
			]
		})
	});
}
function useParallax() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		let targetX = 0;
		let targetY = 0;
		let x = 0;
		let y = 0;
		const tick = () => {
			x += (targetX - x) * .08;
			y += (targetY - y) * .08;
			el.style.setProperty("--px", x.toFixed(4));
			el.style.setProperty("--py", y.toFixed(4));
			frame = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			targetX = (e.clientX / window.innerWidth - .5) * 2;
			targetY = (e.clientY / window.innerHeight - .5) * 2;
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		frame = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(frame);
		};
	}, []);
	return ref;
}
function HeroRoom() {
	const ref = useParallax();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "entrance",
		ref,
		className: "relative flex min-h-[100svh] flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/company/skyline.jpg",
				alt: "",
				className: "parallax-layer absolute inset-0 h-full w-full object-cover",
				style: { ["--depth"]: "12px" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-28 pb-8 md:justify-center md:pt-28 md:pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl lg:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "zxh-reveal zxh-track text-[10px] text-muted",
							children: "Ideas · Code · Design · Deploy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zxh-reveal mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "wall" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "zxh-reveal mt-2 text-lg tracking-[0.34em] text-accent uppercase md:text-2xl",
							children: COMPANY.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "zxh-reveal mt-3 text-xs tracking-[0.28em] text-muted uppercase",
							children: COMPANY.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "zxh-reveal mt-8 font-display text-4xl leading-[1.1] font-medium italic md:text-6xl",
							children: COMPANY.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "zxh-reveal mt-5 max-w-md text-sm text-muted md:text-base",
							children: COMPANY.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zxh-reveal mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#founder",
									children: "Explore Company"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projects",
									children: "View Projects"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "zxh-reveal mt-10 md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneScreen, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parallax-layer pointer-events-none absolute z-10 hidden lg:block zxh-hero-device",
				style: { ["--depth"]: "22px" },
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaptopScreen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-2 -bottom-14 rotate-[-8deg]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneScreen, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zxh-desk relative z-10 mt-auto px-5 pt-8 pb-6 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-end gap-4 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zxh-mug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pb-2 text-[10px] tracking-[0.3em] text-subtle uppercase",
							children: [
								"Est. ",
								COMPANY.established,
								" · ",
								COMPANY.founder
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-6 pb-1 text-[10px] tracking-[0.22em] text-muted uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom Websites" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Mobile Apps"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline",
								children: "Cloud Solutions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.whatsapp,
								className: "text-fg",
								target: "_blank",
								rel: "noreferrer",
								children: "Fast & Secure"
							})
						]
					})]
				})
			})
		]
	});
}
function useInView(once = true) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true);
				if (once) io.disconnect();
			} else if (!once) setInView(false);
		}, { threshold: .22 });
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return {
		ref,
		inView
	};
}
function RoomSection({ id, atmosphere, position = "center", children, className, overlay = "default" }) {
	const { ref, inView } = useInView();
	const overlayClass = overlay === "heavy" ? "bg-gradient-to-b from-bg/80 via-bg/55 to-bg" : overlay === "soft" ? "bg-gradient-to-b from-bg/30 via-bg/25 to-bg/80" : "zxh-vignette";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		ref,
		className: cn("relative min-h-screen overflow-hidden scroll-mt-20", "zxh-in", inView && "is-in", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: atmosphere,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				style: { objectPosition: position },
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0", overlayClass) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				children
			})
		]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "zxh-track text-[10px] text-muted md:text-[11px]",
		children
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-bg-subtle text-muted shadow-[var(--shadow-border)]",
		metal: "bg-accent text-accent-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function FounderOffice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSection, {
		id: "founder",
		atmosphere: "/company/ceo-office.jpg",
		position: "right center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-screen max-w-6xl items-end gap-10 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Founder office" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl leading-tight font-medium md:text-6xl",
					children: COMPANY.founder
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm text-muted md:text-base",
					children: "The executive room is kept as a working studio — desk, window, and the company wordmark on the wall. The founder is present in the work, not as a stock portrait."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-wrap gap-2",
					children: FOUNDER_ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: role }) }, role))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "zxh-panel rounded-2xl p-6 md:rounded-3xl md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "zxh-track text-[10px] text-subtle",
						children: "Nameplate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl italic",
						children: "Zulqarnain X Haider"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Founder & Creative Developer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zxh-rule my-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "ZXH Official Company designs and builds premium websites, applications, and digital systems from this room — a private creative studio with a public product standard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Dream · Build · Grow"
					})
				]
			})]
		})
	});
}
function WorkDesk() {
	const ref = useParallax();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "desk",
		ref,
		className: "relative min-h-screen overflow-hidden scroll-mt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/company/desk-still.jpg",
				alt: "",
				className: "parallax-layer absolute inset-0 h-full w-full object-cover",
				style: {
					["--depth"]: "10px",
					objectPosition: "center 60%"
				},
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Company work desk" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-medium md:text-5xl",
						children: "The desk is live."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm text-muted",
						children: "Laptop, monitor, phone, notebook, and lamp sit in the same room language as the rest of the headquarters. The screen is a real ZXH dashboard — not a stock photo of code."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-2 text-sm text-muted",
						children: [
							"Executive desk · dark stone",
							"Company monitor · project dashboard",
							"Phone · Build / Create / Scale",
							"Notebook · Better code, better future"
						].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-border-strong" }), line]
						}, line))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parallax-layer relative",
					style: { ["--depth"]: "20px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardScreen, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-10 -left-4 hidden rotate-[-12deg] sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneScreen, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-16 text-right text-[10px] tracking-[0.28em] text-subtle uppercase",
							children: [COMPANY.short, " · desk os"]
						})
					]
				})]
			})
		]
	});
}
function WallBranding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "brand",
		className: "relative min-h-screen overflow-hidden scroll-mt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/company/corridor.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Wall branding" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "wall" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl tracking-[0.4em] text-accent uppercase md:text-3xl",
						children: COMPANY.sub
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: WALL_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-t border-border pt-4 text-sm tracking-[0.22em] text-muted uppercase",
							children: line
						}, line))
					})
				]
			})
		]
	});
}
function ServicesWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSection, {
		id: "services",
		atmosphere: "/company/tech-wall.jpg",
		overlay: "heavy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Services wall" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-medium md:text-5xl",
					children: "What this room builds."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm text-muted",
					children: "Six glass panels on the company wall — not a grid of generic cards."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "zxh-glass group min-h-44 rounded-2xl p-6 transition-[transform,background-color] duration-[var(--motion-fast)] ease-[var(--ease-smooth)] hover:-translate-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl italic text-subtle",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-sm tracking-[0.18em] uppercase",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.copy
							})
						]
					}, s.n))
				})
			]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-lg bg-bg-elevated px-3.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow,background-color] duration-[var(--motion-quick)] placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring/50", className),
		...props
	});
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, { ...props });
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, { ...props });
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/70 backdrop-blur-[2px]", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bg-elevated p-5 text-fg shadow-[var(--shadow-border),var(--shadow-soft)]", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function ProjectShowroom() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return PROJECTS.filter((p) => {
			const inCat = cat === "All" || p.category === cat;
			const inQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
			return inCat && inQ;
		});
	}, [query, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RoomSection, {
		id: "projects",
		atmosphere: "/company/showroom.jpg",
		overlay: "heavy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "ZXH project showroom" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-medium md:text-5xl",
					children: "Work on the wall."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm text-muted",
					children: "Displays inside the company — live destinations where they exist, never invented URLs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search the showroom",
						"aria-label": "Search projects",
						className: "max-w-md"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: PROJECT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCat(c),
							className: `h-10 shrink-0 rounded-full px-3.5 text-xs tracking-[0.14em] uppercase shadow-[var(--shadow-border)] transition-colors ${cat === c ? "bg-accent text-accent-fg" : "bg-bg-elevated/70 text-muted"}`,
							children: c
						}, c))
					})]
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-16 text-sm text-muted",
					children: "No displays match that filter."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3",
					children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "zxh-panel w-[min(80vw,340px)] shrink-0 overflow-hidden rounded-2xl md:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(p),
							className: "block w-full text-left",
							"aria-label": `Preview ${p.name}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: "",
								className: "h-44 w-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth)] hover:scale-[1.03]",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: p.category }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-base font-medium",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-sm text-muted",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: p.href,
											...p.external ? {
												target: "_blank",
												rel: "noreferrer"
											} : {},
											children: p.cta
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: LINKS.whatsapp,
											target: "_blank",
											rel: "noreferrer",
											children: "Request Access"
										})
									})]
								})
							]
						})]
					}, p.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!open,
			onOpenChange: (v) => !v && setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: open.image,
					alt: "",
					className: "mb-4 h-44 w-full rounded-xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: open.category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "mt-3",
					children: open.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-2",
					children: open.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: open.href,
							...open.external ? {
								target: "_blank",
								rel: "noreferrer"
							} : {},
							children: open.cta
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKS.whatsapp,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Request Access"]
						})
					})]
				})
			] }) })
		})]
	});
}
function TechWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSection, {
		id: "skills",
		atmosphere: "/company/tech-wall.jpg",
		overlay: "heavy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Technology wall" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-medium md:text-5xl",
					children: "The company board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm text-muted",
					children: "Materials on the wall — not percentage bars."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4",
					children: TECH.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zxh-glass flex min-h-24 items-center justify-center rounded-2xl px-3 text-center text-sm tracking-[0.22em] uppercase",
						children: t
					}, t))
				})
			]
		})
	});
}
function Count({ value, play }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!play) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setN(value);
			return;
		}
		const start = performance.now();
		const dur = 900;
		let frame = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [play, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		children: n
	});
}
function StatsWall() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		ref,
		className: "relative overflow-hidden border-y border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Company information wall" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-8 md:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl font-medium md:text-6xl",
					children: s.raw ? s.value : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Count, {
						value: s.value,
						play: inView
					}), s.suffix] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs tracking-[0.22em] text-muted uppercase",
					children: s.label
				})] }, s.label))
			})]
		})
	});
}
function ShowcaseRoom() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSection, {
		id: "showcase",
		atmosphere: "/company/office-vertical.jpg",
		position: "center top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Company showcase room" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-medium md:text-5xl",
					children: "ZXH digital experience"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm text-muted",
					children: "Campaign posters, the glass emblem, and live devices sit on the same shelves as the rest of the headquarters."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-end gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "zxh-panel overflow-hidden rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/company/poster-hq.png",
								alt: "ZXH Official headquarters campaign poster",
								className: "h-80 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase",
								children: "Headquarters poster"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "zxh-panel overflow-hidden rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/company/logo-glass.png",
								alt: "ZXH Official glass emblem",
								className: "h-80 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase",
								children: "Glass emblem"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "zxh-panel overflow-hidden rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/company/poster-studio.png",
								alt: "ZXH Official studio campaign poster",
								className: "h-80 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-4 py-3 text-xs tracking-[0.18em] text-muted uppercase",
								children: "Studio campaign"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaptopScreen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "justify-self-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneScreen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center text-[10px] tracking-[0.22em] text-subtle uppercase",
							children: COMPANY.line
						})]
					})]
				})
			]
		})
	});
}
function IconWhatsApp({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M19.05 4.91A9.86 9.86 0 0 0 12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.38A10 10 0 0 0 12.04 22h.01C17.6 22 22 17.52 22 12c0-2.65-1.03-5.14-2.95-7.09ZM12.05 20.15h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.1 8.1 0 0 1-1.24-4.31c0-4.48 3.65-8.13 8.15-8.13 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.38 5.75c0 4.49-3.65 8.14-8.13 8.14Zm4.47-6.09c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
		})
	});
}
function IconInstagram({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm10.25 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
		})
	});
}
function IconTikTok({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M14.5 3c.4 2.6 1.9 4.3 4.5 4.6v2.4c-1.5 0-2.9-.5-4.1-1.3v7.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.5a3.4 3.4 0 1 0 2.5 3.3V3h2.1Z"
		})
	});
}
function IconSnapchat({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3c3.2 0 5.4 2.3 5.4 5.8 0 1.4.2 2.3.8 3 .4.4.8.5 1.2.5.3 0 .6-.1.7-.2l.4 1.4c-.4.3-1 .5-1.7.6-.2 1.2-.8 2.2-1.7 2.8.7.5 1.5.9 2.5 1.1l-.4 1.4c-1.7-.3-3-.9-4-1.6-.6.4-1.2.7-2.2.7s-1.6-.3-2.2-.7c-1 .7-2.3 1.3-4 1.6l-.4-1.4c1-.2 1.8-.6 2.5-1.1-.9-.6-1.5-1.6-1.7-2.8-.7-.1-1.3-.3-1.7-.6l.4-1.4c.1.1.4.2.7.2.4 0 .8-.1 1.2-.5.6-.7.8-1.6.8-3C6.6 5.3 8.8 3 12 3Z"
		})
	});
}
function IconFacebook({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H16.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.6H8v2.8h2.4V21h3.1Z"
		})
	});
}
var SOCIAL_ICONS = {
	whatsapp: IconWhatsApp,
	channel: IconWhatsApp,
	instagram: IconInstagram,
	tiktok: IconTikTok,
	snapchat: IconSnapchat,
	facebook: IconFacebook
};
function Reception() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSection, {
		id: "contact",
		atmosphere: "/company/reception.jpg",
		overlay: "heavy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 py-24 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Company reception" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-xl font-display text-4xl leading-tight font-medium md:text-6xl",
					children: "Let’s build something great."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm text-muted",
					children: "The reception desk is open. Start a project on WhatsApp, or follow the company on the public walls."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.whatsapp,
							target: "_blank",
							rel: "noreferrer",
							children: "Start a Project"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:max-w-xl",
					children: SOCIAL.map((s) => {
						const Icon = SOCIAL_ICONS[s.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							className: "zxh-glass flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), s.name]
						}) }, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-[11px] tracking-[0.2em] text-subtle uppercase",
					children: [
						"Backup channel ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.channelBackup,
							className: "text-muted hover:text-fg",
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					]
				})
			]
		})
	});
}
var ICONS = {
	globe: Globe,
	shield: ShieldCheck,
	users: Users,
	growth: TrendingUp
};
function FooterWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-bg pb-24 md:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/company/corridor.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-30",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-4",
						children: PILLARS.map((p) => {
							const Icon = ICONS[p.icon];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-fg" }), p.label]
							}, p.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "zxh-rule my-12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs tracking-[0.28em] text-muted uppercase",
							children: COMPANY.sub
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-[0.2em] text-subtle uppercase",
							children: ["Powered by ", COMPANY.founder]
						})]
					})
				]
			})
		]
	});
}
function InstallPrompt() {
	const [deferred, setDeferred] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const dismissed = sessionStorage.getItem("zxh-install-dismissed");
		const onPrompt = (e) => {
			e.preventDefault();
			setDeferred(e);
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		const t = window.setTimeout(() => {
			if (!dismissed) setOpen(true);
		}, 4200);
		return () => {
			window.removeEventListener("beforeinstallprompt", onPrompt);
			window.clearTimeout(t);
		};
	}, []);
	if (!open) return null;
	const install = async () => {
		if (deferred) await deferred.prompt();
		setOpen(false);
		sessionStorage.setItem("zxh-install-dismissed", "1");
	};
	const later = () => {
		setOpen(false);
		sessionStorage.setItem("zxh-install-dismissed", "1");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed right-4 bottom-24 z-40 w-[min(calc(100vw-2rem),360px)] md:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "zxh-panel rounded-2xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/company/logo-glass.png",
					alt: "",
					className: "size-12 rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium",
					children: ["Install ", COMPANY.short]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "Keep the company room on your home screen."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => void install(),
					children: "Install"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: later,
					children: "Later"
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zxh-grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "zxh-window-wash",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroRoom, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderOffice, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkDesk, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WallBranding, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesWall, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectShowroom, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechWall, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsWall, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcaseRoom, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reception, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterWall, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallPrompt, {})
		]
	});
}
//#endregion
export { Home as component };

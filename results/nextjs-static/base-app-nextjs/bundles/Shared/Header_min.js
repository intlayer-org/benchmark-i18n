"use client";
import e from "next/link";
import { useParams as t, usePathname as n, useRouter as r } from "next/navigation";
import { ChevronDown as i } from "lucide-react";
import { useEffect as a, useLayoutEffect as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region components/ThemeToggle.tsx
function u() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function d(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function f() {
	let [e, t] = s("auto");
	a(() => {
		let e = u();
		t(e), d(e);
	}, []), a(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => d("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function n() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), d(n), window.localStorage.setItem("theme", n);
	}
	let r = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return /* @__PURE__ */ c("button", {
		type: "button",
		onClick: n,
		"aria-label": r,
		title: r,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
//#endregion
//#region i18n/config.ts
var p = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
], m = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region components/LocaleSwitcher.tsx
function h() {
	let e = t().locale ?? "en", i = n(), a = r(), o = (t) => {
		let n = i.replace(`/${e}`, `/${t}`);
		a.push(n);
	};
	return /* @__PURE__ */ c("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ c("select", {
			value: e,
			onChange: (e) => o(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: p.map((e) => /* @__PURE__ */ c("option", {
				value: e,
				children: m(e)
			}, e))
		})
	});
}
//#endregion
//#region hooks/usePerformanceMeasure.ts
function g(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region components/Header.tsx
function _() {
	g("Header");
	let [r, a] = s(!1), o = t().locale ?? "en", u = n(), d = [
		{
			href: `/${o}/products`,
			label: "Products"
		},
		{
			href: `/${o}/pricing`,
			label: "Pricing"
		},
		{
			href: `/${o}/team`,
			label: "Team"
		},
		{
			href: `/${o}/blog`,
			label: "Blog"
		},
		{
			href: `/${o}/careers`,
			label: "Careers"
		},
		{
			href: `/${o}/faq`,
			label: "FAQ"
		},
		{
			href: `/${o}/contact`,
			label: "Contact"
		},
		{
			href: `/${o}/settings`,
			label: "Settings"
		}
	];
	return /* @__PURE__ */ c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ l("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ l("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ c(e, {
					href: `/${o}`,
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ l("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ c(e, {
							href: `/${o}`,
							className: `nav-link${((e) => u === e)(`/${o}`) ? " is-active" : ""}`,
							children: "Home"
						}),
						/* @__PURE__ */ c(e, {
							href: `/${o}/about`,
							className: `nav-link${((e) => u.startsWith(e))(`/${o}/about`) ? " is-active" : ""}`,
							children: "Methodology"
						}),
						/* @__PURE__ */ l("div", {
							className: "relative",
							children: [/* @__PURE__ */ l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => a(!0),
								onMouseLeave: () => a(!1),
								onClick: () => a(!r),
								children: ["Mock Pages", /* @__PURE__ */ c(i, {
									size: 14,
									className: `transition-transform ${r ? "rotate-180" : ""}`
								})]
							}), r && /* @__PURE__ */ c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => a(!0),
								onMouseLeave: () => a(!1),
								children: /* @__PURE__ */ c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: d.map((t) => /* @__PURE__ */ c(e, {
										href: t.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => a(!1),
										children: t.label
									}, t.href))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ l("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ l("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ c("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}), /* @__PURE__ */ c("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ c("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ c(h, {}),
					/* @__PURE__ */ c(f, {})
				]
			})]
		})
	});
}
//#endregion
export { _ as default };

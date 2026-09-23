"use client";
import e from "next/link";
import { useParams as t, usePathname as n, useRouter as r } from "next/navigation";
import { jsxDEV as i } from "react/jsx-dev-runtime";
import { ChevronDown as a } from "lucide-react";
import { useEffect as o, useLayoutEffect as s, useState as c } from "react";
var l = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Link.tsx", u = (e) => /^https?:\/\//.test(e ?? "");
function d(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var f = ({ href: n, children: r, ...a }) => {
	let o = t().locale ?? "en";
	return n == null || typeof n != "string" ? i(e, {
		href: n,
		...a,
		children: r
	}, void 0, !1, {
		fileName: l,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : u(n) ? i(e, {
		href: n,
		...a,
		children: r
	}, void 0, !1, {
		fileName: l,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : i(e, {
		href: d(n, o),
		...a,
		children: r
	}, void 0, !1, {
		fileName: l,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, p = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/ThemeToggle.tsx";
function m() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function h(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function g() {
	let [e, t] = c("auto");
	o(() => {
		let e = m();
		t(e), h(e);
	}, []), o(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => h("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function n() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), h(n), window.localStorage.setItem("theme", n);
	}
	let r = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return i("button", {
		type: "button",
		onClick: n,
		"aria-label": r,
		title: r,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	}, void 0, !1, {
		fileName: p,
		lineNumber: 73,
		columnNumber: 5
	}, this);
}
var _ = [
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
], v = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, y = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/LocaleSwitcher.tsx";
function b() {
	let e = t().locale ?? "en", a = n(), o = r(), s = (t) => {
		let n = a.replace(`/${e}`, `/${t}`);
		o.push(n);
	};
	return i("div", {
		className: "flex items-center gap-2",
		children: i("select", {
			value: e,
			onChange: (e) => s(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: _.map((e) => i("option", {
				value: e,
				children: v(e)
			}, e, !1, {
				fileName: y,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: y,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: y,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function x(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var S = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Header.tsx";
function C() {
	x("Header");
	let [e, r] = c(!1), o = t(), s = n(), l = o.locale ?? "en";
	return i("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: i("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [i("div", {
				className: "flex items-center gap-8",
				children: [i(f, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: S,
					lineNumber: 45,
					columnNumber: 11
				}, this), i("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						i(f, {
							href: "/",
							prefetch: !1,
							className: `nav-link${((e) => s === d(e, l))("/") ? " is-active" : ""}`,
							children: "Home"
						}, void 0, !1, {
							fileName: S,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						i(f, {
							href: "/about",
							prefetch: !1,
							className: `nav-link${((e) => {
								let t = d(e, l);
								return s.startsWith(t) && (e !== "/" || s === t);
							})("/about") ? " is-active" : ""}`,
							children: "Methodology"
						}, void 0, !1, {
							fileName: S,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						i("div", {
							className: "relative",
							children: [i("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								onClick: () => r(!e),
								children: ["Mock Pages", i(a, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: S,
									lineNumber: 78,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: S,
								lineNumber: 70,
								columnNumber: 15
							}, this), e && i("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								children: i("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: [
										{
											href: "/products",
											label: "Products"
										},
										{
											href: "/pricing",
											label: "Pricing"
										},
										{
											href: "/team",
											label: "Team"
										},
										{
											href: "/blog",
											label: "Blog"
										},
										{
											href: "/careers",
											label: "Careers"
										},
										{
											href: "/faq",
											label: "FAQ"
										},
										{
											href: "/contact",
											label: "Contact"
										},
										{
											href: "/settings",
											label: "Settings"
										}
									].map((e) => i(f, {
										href: e.href,
										prefetch: !1,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => r(!1),
										children: e.label
									}, e.href, !1, {
										fileName: S,
										lineNumber: 92,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: S,
									lineNumber: 90,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: S,
								lineNumber: 85,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: S,
							lineNumber: 69,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: S,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: S,
				lineNumber: 44,
				columnNumber: 9
			}, this), i("div", {
				className: "flex items-center gap-4",
				children: [
					i("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [i("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}, void 0, !1, {
							fileName: S,
							lineNumber: 116,
							columnNumber: 13
						}, this), i("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: i("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: S,
								lineNumber: 118,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: S,
							lineNumber: 117,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: S,
						lineNumber: 110,
						columnNumber: 11
					}, this),
					i(b, {}, void 0, !1, {
						fileName: S,
						lineNumber: 124,
						columnNumber: 11
					}, this),
					i(g, {}, void 0, !1, {
						fileName: S,
						lineNumber: 125,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: S,
				lineNumber: 109,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: S,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: S,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
export { C as default };

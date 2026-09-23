"use client";
import e from "next/link";
import { useParams as t, usePathname as n, useRouter as r } from "next/navigation";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { ChevronDown as o } from "lucide-react";
import { useEffect as s, useLayoutEffect as c, useState as l } from "react";
var u = (e) => /^https?:\/\//.test(e ?? "");
function d(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var f = ({ href: n, children: r, ...a }) => {
	let o = t().locale ?? "en";
	return n == null || typeof n != "string" || u(n) ? i(e, {
		href: n,
		...a,
		children: r
	}) : i(e, {
		href: d(n, o),
		...a,
		children: r
	});
};
function p() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function m(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function h() {
	let [e, t] = l("auto");
	s(() => {
		let e = p();
		t(e), m(e);
	}, []), s(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => m("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function n() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), m(n), window.localStorage.setItem("theme", n);
	}
	let r = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return i("button", {
		type: "button",
		onClick: n,
		"aria-label": r,
		title: r,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
var g = [
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
], _ = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function v() {
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
			children: g.map((e) => i("option", {
				value: e,
				children: _(e)
			}, e))
		})
	});
}
function y(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function b() {
	y("Header");
	let [e, r] = l(!1), s = t(), c = n(), u = s.locale ?? "en";
	return i("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: a("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [a("div", {
				className: "flex items-center gap-8",
				children: [i(f, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), a("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						i(f, {
							href: "/",
							prefetch: !1,
							className: `nav-link${((e) => c === d(e, u))("/") ? " is-active" : ""}`,
							children: "Home"
						}),
						i(f, {
							href: "/about",
							prefetch: !1,
							className: `nav-link${((e) => {
								let t = d(e, u);
								return c.startsWith(t) && (e !== "/" || c === t);
							})("/about") ? " is-active" : ""}`,
							children: "Methodology"
						}),
						a("div", {
							className: "relative",
							children: [a("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								onClick: () => r(!e),
								children: ["Mock Pages", i(o, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && i("div", {
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
									}, e.href))
								})
							})]
						})
					]
				})]
			}), a("div", {
				className: "flex items-center gap-4",
				children: [
					a("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [i("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}), i("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: i("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					i(v, {}),
					i(h, {})
				]
			})]
		})
	});
}
export { b as default };

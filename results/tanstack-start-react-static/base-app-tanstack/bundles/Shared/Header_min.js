import { Link as e, useNavigate as t, useParams as n } from "@tanstack/react-router";
import { ChevronDown as r } from "lucide-react";
import { useEffect as i, useLayoutEffect as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/ThemeToggle.tsx
function l() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function u(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function d() {
	let [e, t] = o("auto");
	i(() => {
		let e = l();
		t(e), u(e);
	}, []), i(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => u("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function n() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), u(n), window.localStorage.setItem("theme", n);
	}
	let r = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return /* @__PURE__ */ s("button", {
		type: "button",
		onClick: n,
		"aria-label": r,
		title: r,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
//#endregion
//#region src/i18n/config.ts
var f = [
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
], p = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function m() {
	let e = n({ strict: !1 }).locale ?? "en", r = t(), i = (e) => {
		r({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return /* @__PURE__ */ s("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ s("select", {
			value: e,
			onChange: (e) => i(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: f.map((e) => /* @__PURE__ */ s("option", {
				value: e,
				children: p(e)
			}, e))
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function h(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region src/components/Header.tsx
function g() {
	h("Header");
	let [t, i] = o(!1), a = n({ strict: !1 }).locale ?? "en";
	return /* @__PURE__ */ s("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ c("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ c("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ s(e, {
					to: "/$locale",
					params: { locale: a },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ c("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ s(e, {
							to: "/$locale",
							params: { locale: a },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: "Home"
						}),
						/* @__PURE__ */ s(e, {
							to: "/$locale/about",
							params: { locale: a },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: "Methodology"
						}),
						/* @__PURE__ */ c("div", {
							className: "relative",
							children: [/* @__PURE__ */ c("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => i(!0),
								onMouseLeave: () => i(!1),
								onClick: () => i(!t),
								children: ["Mock Pages", /* @__PURE__ */ s(r, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && /* @__PURE__ */ s("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => i(!0),
								onMouseLeave: () => i(!1),
								children: /* @__PURE__ */ s("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: [
										{
											to: "/$locale/products",
											label: "Products"
										},
										{
											to: "/$locale/pricing",
											label: "Pricing"
										},
										{
											to: "/$locale/team",
											label: "Team"
										},
										{
											to: "/$locale/blog",
											label: "Blog"
										},
										{
											to: "/$locale/careers",
											label: "Careers"
										},
										{
											to: "/$locale/faq",
											label: "FAQ"
										},
										{
											to: "/$locale/contact",
											label: "Contact"
										},
										{
											to: "/$locale/settings",
											label: "Settings"
										}
									].map((t) => /* @__PURE__ */ s(e, {
										to: t.to,
										params: { locale: a },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => i(!1),
										children: t.label
									}, t.to))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ c("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ c("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ s("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}), /* @__PURE__ */ s("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ s("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ s(m, {}),
					/* @__PURE__ */ s(d, {})
				]
			})]
		})
	});
}
//#endregion
export { g as default };

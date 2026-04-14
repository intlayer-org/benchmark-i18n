import { Link as e, useParams as t } from "@tanstack/react-router";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/Footer.tsx
function i() {
	let i = t({ strict: !1 }).locale ?? "en";
	return /* @__PURE__ */ n("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ r("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ r("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ n("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), /* @__PURE__ */ n("ul", {
						className: "space-y-1",
						children: [
							{
								label: "GitHub",
								href: "https://github.com/intlayer-org/benchmark-i18n",
								isInternal: !1
							},
							{
								label: "Methodology",
								to: "/$locale/about",
								isInternal: !0
							},
							{
								label: "Contributing",
								to: "/$locale/contact",
								isInternal: !0
							}
						].map((t) => /* @__PURE__ */ n("li", { children: t.isInternal ? /* @__PURE__ */ n(e, {
							to: t.to,
							params: { locale: i },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) : /* @__PURE__ */ n("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) }, t.label))
					})] }),
					/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), /* @__PURE__ */ n("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ n("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router."
			})]
		})
	});
}
//#endregion
export { i as default };

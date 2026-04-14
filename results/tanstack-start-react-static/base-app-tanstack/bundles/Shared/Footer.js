import { Link, useParams } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Footer.tsx
function Footer() {
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-1",
						children: [
							{
								label: "GitHub",
								href: "https://github.com/intlayer-org/benchmark-i18n",
								isInternal: false
							},
							{
								label: "Methodology",
								to: "/$locale/about",
								isInternal: true
							},
							{
								label: "Contributing",
								to: "/$locale/contact",
								isInternal: true
							}
						].map((linkEl) => /* @__PURE__ */ jsx("li", { children: linkEl.isInternal ? /* @__PURE__ */ jsx(Link, {
							to: linkEl.to,
							params: { locale: currentLocale },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) : /* @__PURE__ */ jsx("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) }, linkEl.label))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router."
			})]
		})
	});
}
//#endregion
export { Footer as default };

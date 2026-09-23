"use client";
import e from "next/link";
import { useParams as t } from "next/navigation";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
function i() {
	let i = t().locale ?? "en", a = [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: "Methodology",
			href: `/${i}/about`,
			isInternal: !0
		},
		{
			label: "Contributing",
			href: `/${i}/contact`,
			isInternal: !0
		}
	];
	return n("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: r("div", {
			className: "container py-8",
			children: [r("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					r("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), n("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					r("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), n("ul", {
						className: "space-y-1",
						children: a.map((t) => n("li", { children: t.isInternal ? n(e, {
							href: t.href,
							prefetch: !1,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) : n("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) }, t.label))
					})] }),
					r("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), n("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), n("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React & Next.js."
			})]
		})
	});
}
export { i as default };

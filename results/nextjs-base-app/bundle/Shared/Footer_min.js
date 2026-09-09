"use client";
import e from "next/link";
import { useParams as t } from "next/navigation";
import { jsxDEV as n } from "react/jsx-dev-runtime";
var r = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Footer.tsx";
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
		children: n("div", {
			className: "container py-8",
			children: [n("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					n("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: r,
						lineNumber: 33,
						columnNumber: 13
					}, this), n("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}, void 0, !1, {
						fileName: r,
						lineNumber: 36,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: r,
						lineNumber: 32,
						columnNumber: 11
					}, this),
					n("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}, void 0, !1, {
						fileName: r,
						lineNumber: 43,
						columnNumber: 13
					}, this), n("ul", {
						className: "space-y-1",
						children: a.map((t) => n("li", { children: t.isInternal ? n(e, {
							href: t.href,
							prefetch: !1,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}, void 0, !1, {
							fileName: r,
							lineNumber: 50,
							columnNumber: 21
						}, this) : n("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}, void 0, !1, {
							fileName: r,
							lineNumber: 58,
							columnNumber: 21
						}, this) }, t.label, !1, {
							fileName: r,
							lineNumber: 48,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: r,
						lineNumber: 46,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: r,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					n("div", { children: [n("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}, void 0, !1, {
						fileName: r,
						lineNumber: 72,
						columnNumber: 13
					}, this), n("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: r,
						lineNumber: 75,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: r,
						lineNumber: 71,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: r,
				lineNumber: 31,
				columnNumber: 9
			}, this), n("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React & Next.js."
			}, void 0, !1, {
				fileName: r,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: r,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: r,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
export { i as default };

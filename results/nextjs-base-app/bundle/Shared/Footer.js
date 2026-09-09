"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Footer.tsx";
function Footer() {
	const currentLocale = useParams().locale ?? "en";
	const footerLinks = [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: "Methodology",
			href: `/${currentLocale}/about`,
			isInternal: true
		},
		{
			label: "Contributing",
			href: `/${currentLocale}/contact`,
			isInternal: true
		}
	];
	return jsxDEV("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: jsxDEV("div", {
			className: "container py-8",
			children: [jsxDEV("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 11
					}, this),
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this), jsxDEV("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => jsxDEV("li", { children: linkEl.isInternal ? jsxDEV(Link, {
							href: linkEl.href,
							prefetch: false,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 21
						}, this) : jsxDEV("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 21
						}, this) }, linkEl.label, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 9
			}, this), jsxDEV("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React & Next.js."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
export { Footer as default };

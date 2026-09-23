import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/about/WhatWeMeasure.tsx";
function n() {
	return e("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [e("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: "What We Measure"
		}, void 0, !1, {
			fileName: t,
			lineNumber: 27,
			columnNumber: 7
		}, this), e("ul", {
			className: "space-y-4",
			children: [
				{
					metric: "Bundle size impact",
					desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
				},
				{
					metric: "Rendering overhead",
					desc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
				},
				{
					metric: "Hydration cost",
					desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
				},
				{
					metric: "Lazy loading effectiveness",
					desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
				},
				{
					metric: "Locale switch speed",
					desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
				}
			].map((n) => e("li", {
				className: "rounded-md border border-border p-4",
				children: [e("span", {
					className: "block text-sm font-bold text-primary",
					children: n.metric
				}, void 0, !1, {
					fileName: t,
					lineNumber: 33,
					columnNumber: 13
				}, this), e("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: n.desc
				}, void 0, !1, {
					fileName: t,
					lineNumber: 36,
					columnNumber: 13
				}, this)]
			}, n.metric, !0, {
				fileName: t,
				lineNumber: 32,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: t,
			lineNumber: 30,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: t,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
export { n as default };

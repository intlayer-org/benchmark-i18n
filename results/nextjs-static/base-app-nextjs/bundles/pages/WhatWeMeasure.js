import { jsx, jsxs } from "react/jsx-runtime";
//#region components/pages/about/WhatWeMeasure.tsx
function WhatWeMeasure() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: "What We Measure"
		}), /* @__PURE__ */ jsx("ul", {
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
			].map((m) => /* @__PURE__ */ jsxs("li", {
				className: "rounded-md border border-border p-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: "block text-sm font-bold text-primary",
					children: m.metric
				}), /* @__PURE__ */ jsx("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: m.desc
				})]
			}, m.metric))
		})]
	});
}
//#endregion
export { WhatWeMeasure as default };

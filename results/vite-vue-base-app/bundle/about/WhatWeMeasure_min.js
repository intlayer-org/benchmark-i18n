import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "mt-12 mx-auto max-w-3xl" }, c = { class: "space-y-4" }, l = { class: "block text-sm font-bold text-primary" }, u = { class: "block mt-1 text-sm text-muted-foreground" }, d = r({
	__name: "WhatWeMeasure",
	setup(r) {
		let d = [
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
		];
		return (r, f) => (i(), t("section", s, [f[0] ||= n("h2", { class: "mb-4 text-2xl font-bold text-foreground" }, " What We Measure ", -1), n("ul", c, [(i(), t(e, null, a(d, (e) => n("li", {
			key: e.metric,
			class: "rounded-md border border-border p-4"
		}, [n("span", l, o(e.metric), 1), n("span", u, o(e.desc), 1)])), 64))])]));
	}
});
export { d as default };

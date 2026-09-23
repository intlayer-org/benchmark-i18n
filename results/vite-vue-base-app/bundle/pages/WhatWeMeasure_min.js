import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "WhatWeMeasure",
	setup(e, { expose: t }) {
		t();
		let n = { metrics: [
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
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "mt-12 mx-auto max-w-3xl" }, u = { class: "space-y-4" }, d = { class: "block text-sm font-bold text-primary" }, f = { class: "block mt-1 text-sm text-muted-foreground" };
function p(r, s, c, p, m, h) {
	return i(), t("section", l, [s[0] ||= n("h2", { class: "mb-4 text-2xl font-bold text-foreground" }, " What We Measure ", -1), n("ul", u, [(i(), t(e, null, a(p.metrics, (e) => n("li", {
		key: e.metric,
		class: "rounded-md border border-border p-4"
	}, [n("span", d, o(e.metric), 1), n("span", f, o(e.desc), 1)])), 64))])]);
}
var m = c(s, [["render", p], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/about/WhatWeMeasure.vue"]]);
export { m as default };

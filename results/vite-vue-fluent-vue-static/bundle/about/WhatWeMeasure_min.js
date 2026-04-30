import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, onBeforeMount as o, onMounted as s, openBlock as c, renderList as l, toDisplayString as u } from "vue";
function d(e) {
	o(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
function f(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function p(e) {
	return e.split(".").map(f).join("-");
}
function m() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(p(t), n ?? {});
	} };
}
var h = i({
	__name: "WhatWeMeasure",
	setup(e, { expose: n }) {
		n(), d("WhatWeMeasure");
		let { td: r } = m(), i = {
			td: r,
			metrics: t(() => [
				{
					metric: r("about.whatWeMeasure.bundleSizeImpact"),
					desc: r("about.whatWeMeasure.bundleSizeImpactDesc")
				},
				{
					metric: r("about.whatWeMeasure.renderingOverhead"),
					desc: r("about.whatWeMeasure.renderingOverheadDesc")
				},
				{
					metric: r("about.whatWeMeasure.hydrationCost"),
					desc: r("about.whatWeMeasure.hydrationCostDesc")
				},
				{
					metric: r("about.whatWeMeasure.lazyLoading"),
					desc: r("about.whatWeMeasure.lazyLoadingDesc")
				},
				{
					metric: r("about.whatWeMeasure.localeSwitch"),
					desc: r("about.whatWeMeasure.localeSwitchDesc")
				}
			])
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), g = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, _ = { class: "mt-12 mx-auto max-w-3xl" }, v = { class: "mb-4 text-2xl font-bold text-foreground" }, y = { class: "space-y-4" }, b = { class: "block text-sm font-bold text-primary" }, x = { class: "block mt-1 text-sm text-muted-foreground" };
function S(t, i, a, o, s, d) {
	return c(), n("section", _, [r("h2", v, u(o.td("about.whatWeMeasure.title")), 1), r("ul", y, [(c(!0), n(e, null, l(o.metrics, (e) => (c(), n("li", {
		key: e.metric,
		class: "rounded-md border border-border p-4"
	}, [r("span", b, u(e.metric), 1), r("span", x, u(e.desc), 1)]))), 128))])]);
}
var C = g(h, [["render", S], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/about/WhatWeMeasure.vue"]]);
export { C as default };

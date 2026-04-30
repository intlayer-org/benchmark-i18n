import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, onBeforeMount as o, onMounted as s, openBlock as c, renderList as l, toDisplayString as u, unref as d } from "vue";
function f(e) {
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
function p(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function m(e) {
	return e.split(".").map(p).join("-");
}
function h() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(m(t), n ?? {});
	} };
}
var g = { class: "mt-12 mx-auto max-w-3xl" }, _ = { class: "mb-4 text-2xl font-bold text-foreground" }, v = { class: "space-y-4" }, y = { class: "block text-sm font-bold text-primary" }, b = { class: "block mt-1 text-sm text-muted-foreground" }, x = i({
	__name: "WhatWeMeasure",
	setup(i) {
		f("WhatWeMeasure");
		let { td: a } = h(), o = t(() => [
			{
				metric: a("about.whatWeMeasure.bundleSizeImpact"),
				desc: a("about.whatWeMeasure.bundleSizeImpactDesc")
			},
			{
				metric: a("about.whatWeMeasure.renderingOverhead"),
				desc: a("about.whatWeMeasure.renderingOverheadDesc")
			},
			{
				metric: a("about.whatWeMeasure.hydrationCost"),
				desc: a("about.whatWeMeasure.hydrationCostDesc")
			},
			{
				metric: a("about.whatWeMeasure.lazyLoading"),
				desc: a("about.whatWeMeasure.lazyLoadingDesc")
			},
			{
				metric: a("about.whatWeMeasure.localeSwitch"),
				desc: a("about.whatWeMeasure.localeSwitchDesc")
			}
		]);
		return (t, i) => (c(), n("section", g, [r("h2", _, u(d(a)("about.whatWeMeasure.title")), 1), r("ul", v, [(c(!0), n(e, null, l(o.value, (e) => (c(), n("li", {
			key: e.metric,
			class: "rounded-md border border-border p-4"
		}, [r("span", y, u(e.metric), 1), r("span", b, u(e.desc), 1)]))), 128))])]));
	}
});
export { x as default };

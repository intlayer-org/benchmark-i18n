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
	__name: "ResultsTable",
	setup(e, { expose: n }) {
		n(), d("ResultsTable");
		let { td: r } = m(), i = {
			td: r,
			results: t(() => [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: r("home.resultsTable.yes")
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: r("home.resultsTable.manual")
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: r("home.resultsTable.yes")
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: r("home.resultsTable.builtIn")
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
}, _ = { class: "mb-6 text-2xl font-bold text-foreground" }, v = { class: "overflow-x-auto rounded-lg border border-border" }, y = { class: "w-full text-sm" }, b = { class: "bg-muted" }, x = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, S = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, C = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, w = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, T = { class: "px-4 py-3 font-medium text-foreground" }, E = { class: "px-4 py-3 text-muted-foreground" }, D = { class: "px-4 py-3 text-muted-foreground" }, O = { class: "px-4 py-3 text-muted-foreground" };
function k(t, i, a, o, s, d) {
	return c(), n("section", null, [r("h2", _, u(o.td("home.resultsTable.title")), 1), r("div", v, [r("table", y, [r("thead", b, [r("tr", null, [
		r("th", x, u(o.td("home.resultsTable.library")), 1),
		r("th", S, u(o.td("home.resultsTable.bundleSize")), 1),
		r("th", C, u(o.td("home.resultsTable.lookupTime")), 1),
		r("th", w, u(o.td("home.resultsTable.lazyLoading")), 1)
	])]), r("tbody", null, [(c(!0), n(e, null, l(o.results, (e) => (c(), n("tr", {
		key: e.lib,
		class: "border-t border-border"
	}, [
		r("td", T, u(e.lib), 1),
		r("td", E, u(e.size), 1),
		r("td", D, u(e.time), 1),
		r("td", O, u(e.lazy), 1)
	]))), 128))])])])]);
}
var A = g(h, [["render", k], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/ResultsTable.vue"]]);
export { A as default };

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
var g = { class: "mb-6 text-2xl font-bold text-foreground" }, _ = { class: "overflow-x-auto rounded-lg border border-border" }, v = { class: "w-full text-sm" }, y = { class: "bg-muted" }, b = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, x = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, S = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, C = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, w = { class: "px-4 py-3 font-medium text-foreground" }, T = { class: "px-4 py-3 text-muted-foreground" }, E = { class: "px-4 py-3 text-muted-foreground" }, D = { class: "px-4 py-3 text-muted-foreground" }, O = i({
	__name: "ResultsTable",
	setup(i) {
		f("ResultsTable");
		let { td: a } = h(), o = t(() => [
			{
				lib: "react-i18next",
				size: "42.3 kB",
				time: "0.12ms",
				lazy: a("home.resultsTable.yes")
			},
			{
				lib: "react-intl",
				size: "38.1 kB",
				time: "0.15ms",
				lazy: a("home.resultsTable.manual")
			},
			{
				lib: "lingui",
				size: "12.8 kB",
				time: "0.08ms",
				lazy: a("home.resultsTable.yes")
			},
			{
				lib: "typesafe-i18n",
				size: "5.2 kB",
				time: "0.05ms",
				lazy: a("home.resultsTable.builtIn")
			}
		]);
		return (t, i) => (c(), n("section", null, [r("h2", g, u(d(a)("home.resultsTable.title")), 1), r("div", _, [r("table", v, [r("thead", y, [r("tr", null, [
			r("th", b, u(d(a)("home.resultsTable.library")), 1),
			r("th", x, u(d(a)("home.resultsTable.bundleSize")), 1),
			r("th", S, u(d(a)("home.resultsTable.lookupTime")), 1),
			r("th", C, u(d(a)("home.resultsTable.lazyLoading")), 1)
		])]), r("tbody", null, [(c(!0), n(e, null, l(o.value, (e) => (c(), n("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			r("td", w, u(e.lib), 1),
			r("td", T, u(e.size), 1),
			r("td", E, u(e.time), 1),
			r("td", D, u(e.lazy), 1)
		]))), 128))])])])]));
	}
});
export { O as default };

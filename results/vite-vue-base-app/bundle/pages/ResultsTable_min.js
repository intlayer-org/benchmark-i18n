import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "ResultsTable",
	setup(e, { expose: t }) {
		t();
		let n = { results: [
			{
				lib: "react-i18next",
				size: "42.3 kB",
				time: "0.12ms",
				lazy: "Yes"
			},
			{
				lib: "react-intl",
				size: "38.1 kB",
				time: "0.15ms",
				lazy: "Manual"
			},
			{
				lib: "lingui",
				size: "12.8 kB",
				time: "0.08ms",
				lazy: "Yes"
			},
			{
				lib: "typesafe-i18n",
				size: "5.2 kB",
				time: "0.05ms",
				lazy: "Built-in"
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
}, l = { class: "overflow-x-auto rounded-lg border border-border" }, u = { class: "w-full text-sm" }, d = { class: "px-4 py-3 font-medium text-foreground" }, f = { class: "px-4 py-3 text-muted-foreground" }, p = { class: "px-4 py-3 text-muted-foreground" }, m = { class: "px-4 py-3 text-muted-foreground" };
function h(r, s, c, h, g, _) {
	return i(), t("section", null, [s[1] ||= n("h2", { class: "mb-6 text-2xl font-bold text-foreground" }, " Sample Results ", -1), n("div", l, [n("table", u, [s[0] ||= n("thead", { class: "bg-muted" }, [n("tr", null, [
		n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Library "),
		n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Bundle Size "),
		n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lookup Time "),
		n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lazy Loading ")
	])], -1), n("tbody", null, [(i(), t(e, null, a(h.results, (e) => n("tr", {
		key: e.lib,
		class: "border-t border-border"
	}, [
		n("td", d, o(e.lib), 1),
		n("td", f, o(e.size), 1),
		n("td", p, o(e.time), 1),
		n("td", m, o(e.lazy), 1)
	])), 64))])])])]);
}
var g = c(s, [["render", h], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/home/ResultsTable.vue"]]);
export { g as default };

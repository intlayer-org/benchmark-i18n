import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "overflow-x-auto rounded-lg border border-border" }, c = { class: "w-full text-sm" }, l = { class: "px-4 py-3 font-medium text-foreground" }, u = { class: "px-4 py-3 text-muted-foreground" }, d = { class: "px-4 py-3 text-muted-foreground" }, f = { class: "px-4 py-3 text-muted-foreground" }, p = r({
	__name: "ResultsTable",
	setup(r) {
		let p = [
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
		];
		return (r, m) => (i(), t("section", null, [m[1] ||= n("h2", { class: "mb-6 text-2xl font-bold text-foreground" }, " Sample Results ", -1), n("div", s, [n("table", c, [m[0] ||= n("thead", { class: "bg-muted" }, [n("tr", null, [
			n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Library "),
			n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Bundle Size "),
			n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lookup Time "),
			n("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lazy Loading ")
		])], -1), n("tbody", null, [(i(), t(e, null, a(p, (e) => n("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			n("td", l, o(e.lib), 1),
			n("td", u, o(e.size), 1),
			n("td", d, o(e.time), 1),
			n("td", f, o(e.lazy), 1)
		])), 64))])])])]));
	}
});
export { p as default };

import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "overflow-x-auto rounded-lg border border-border" };
var _hoisted_2 = { class: "w-full text-sm" };
var _hoisted_3 = { class: "px-4 py-3 font-medium text-foreground" };
var _hoisted_4 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_5 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_6 = { class: "px-4 py-3 text-muted-foreground" };
var ResultsTable_default = defineComponent({
	__name: "ResultsTable",
	setup(__props) {
		const results = [
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", null, [_cache[1] || (_cache[1] = createElementVNode("h2", { class: "mb-6 text-2xl font-bold text-foreground" }, " Sample Results ", -1)), createElementVNode("div", _hoisted_1, [createElementVNode("table", _hoisted_2, [_cache[0] || (_cache[0] = createElementVNode("thead", { class: "bg-muted" }, [createElementVNode("tr", null, [
				createElementVNode("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Library "),
				createElementVNode("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Bundle Size "),
				createElementVNode("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lookup Time "),
				createElementVNode("th", { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, " Lazy Loading ")
			])], -1)), createElementVNode("tbody", null, [(openBlock(), createElementBlock(Fragment, null, renderList(results, (r) => {
				return createElementVNode("tr", {
					key: r.lib,
					class: "border-t border-border"
				}, [
					createElementVNode("td", _hoisted_3, toDisplayString(r.lib), 1),
					createElementVNode("td", _hoisted_4, toDisplayString(r.size), 1),
					createElementVNode("td", _hoisted_5, toDisplayString(r.time), 1),
					createElementVNode("td", _hoisted_6, toDisplayString(r.lazy), 1)
				]);
			}), 64))])])])]);
		};
	}
});
export { ResultsTable_default as default };

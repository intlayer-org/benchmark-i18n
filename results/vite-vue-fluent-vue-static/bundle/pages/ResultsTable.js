import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, renderList, toDisplayString } from "vue";
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
function segmentToKebab(segment) {
	return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function dottedKeyToFluentId(dottedKey) {
	return dottedKey.split(".").map(segmentToKebab).join("-");
}
function useFluentDottedT() {
	const proxy = getCurrentInstance()?.proxy;
	const td = (dottedVueI18nKey, params) => {
		if (!proxy) throw new Error("useFluentDottedT must be used during setup()");
		return proxy.$t(dottedKeyToFluentId(dottedVueI18nKey), params ?? {});
	};
	return { td };
}
var ResultsTable_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ResultsTable",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("ResultsTable");
		const { td } = useFluentDottedT();
		const __returned__ = {
			td,
			results: computed(() => [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: td("home.resultsTable.yes")
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: td("home.resultsTable.manual")
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: td("home.resultsTable.yes")
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: td("home.resultsTable.builtIn")
				}
			])
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_2 = { class: "overflow-x-auto rounded-lg border border-border" };
var _hoisted_3 = { class: "w-full text-sm" };
var _hoisted_4 = { class: "bg-muted" };
var _hoisted_5 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_6 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_7 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_8 = { class: "px-4 py-3 text-left font-medium text-muted-foreground" };
var _hoisted_9 = { class: "px-4 py-3 font-medium text-foreground" };
var _hoisted_10 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_11 = { class: "px-4 py-3 text-muted-foreground" };
var _hoisted_12 = { class: "px-4 py-3 text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", null, [createElementVNode("h2", _hoisted_1, toDisplayString($setup.td("home.resultsTable.title")), 1), createElementVNode("div", _hoisted_2, [createElementVNode("table", _hoisted_3, [createElementVNode("thead", _hoisted_4, [createElementVNode("tr", null, [
		createElementVNode("th", _hoisted_5, toDisplayString($setup.td("home.resultsTable.library")), 1),
		createElementVNode("th", _hoisted_6, toDisplayString($setup.td("home.resultsTable.bundleSize")), 1),
		createElementVNode("th", _hoisted_7, toDisplayString($setup.td("home.resultsTable.lookupTime")), 1),
		createElementVNode("th", _hoisted_8, toDisplayString($setup.td("home.resultsTable.lazyLoading")), 1)
	])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.results, (r) => {
		return openBlock(), createElementBlock("tr", {
			key: r.lib,
			class: "border-t border-border"
		}, [
			createElementVNode("td", _hoisted_9, toDisplayString(r.lib), 1),
			createElementVNode("td", _hoisted_10, toDisplayString(r.size), 1),
			createElementVNode("td", _hoisted_11, toDisplayString(r.time), 1),
			createElementVNode("td", _hoisted_12, toDisplayString(r.lazy), 1)
		]);
	}), 128))])])])]);
}
var ResultsTable_default = _plugin_vue_export_helper_default(ResultsTable_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/ResultsTable.vue"]]);
export { ResultsTable_default as default };

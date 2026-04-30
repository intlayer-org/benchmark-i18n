import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, toDisplayString } from "vue";
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
var AboutGrid_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "AboutGrid",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("AboutGrid");
		const { td } = useFluentDottedT();
		const __returned__ = { td };
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
var _hoisted_1 = { class: "grid gap-8 md:grid-cols-2" };
var _hoisted_2 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_3 = { class: "mb-3 text-xl font-semibold text-foreground" };
var _hoisted_4 = { class: "text-sm text-muted-foreground" };
var _hoisted_5 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_6 = { class: "mb-3 text-xl font-semibold text-foreground" };
var _hoisted_7 = { class: "text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("h2", _hoisted_3, toDisplayString($setup.td("about.grid.whyExistsTitle")), 1), createElementVNode("p", _hoisted_4, toDisplayString($setup.td("about.grid.whyExistsDesc")), 1)]), createElementVNode("div", _hoisted_5, [createElementVNode("h2", _hoisted_6, toDisplayString($setup.td("about.grid.methodologyTitle")), 1), createElementVNode("p", _hoisted_7, toDisplayString($setup.td("about.grid.methodologyDesc")), 1)])]);
}
var AboutGrid_default = _plugin_vue_export_helper_default(AboutGrid_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/about/AboutGrid.vue"]]);
export { AboutGrid_default as default };

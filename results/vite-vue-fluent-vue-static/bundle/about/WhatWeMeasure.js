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
var WhatWeMeasure_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "WhatWeMeasure",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("WhatWeMeasure");
		const { td } = useFluentDottedT();
		const __returned__ = {
			td,
			metrics: computed(() => [
				{
					metric: td("about.whatWeMeasure.bundleSizeImpact"),
					desc: td("about.whatWeMeasure.bundleSizeImpactDesc")
				},
				{
					metric: td("about.whatWeMeasure.renderingOverhead"),
					desc: td("about.whatWeMeasure.renderingOverheadDesc")
				},
				{
					metric: td("about.whatWeMeasure.hydrationCost"),
					desc: td("about.whatWeMeasure.hydrationCostDesc")
				},
				{
					metric: td("about.whatWeMeasure.lazyLoading"),
					desc: td("about.whatWeMeasure.lazyLoadingDesc")
				},
				{
					metric: td("about.whatWeMeasure.localeSwitch"),
					desc: td("about.whatWeMeasure.localeSwitchDesc")
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
var _hoisted_1 = { class: "mt-12 mx-auto max-w-3xl" };
var _hoisted_2 = { class: "mb-4 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "block text-sm font-bold text-primary" };
var _hoisted_5 = { class: "block mt-1 text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.td("about.whatWeMeasure.title")), 1), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.metrics, (m) => {
		return openBlock(), createElementBlock("li", {
			key: m.metric,
			class: "rounded-md border border-border p-4"
		}, [createElementVNode("span", _hoisted_4, toDisplayString(m.metric), 1), createElementVNode("span", _hoisted_5, toDisplayString(m.desc), 1)]);
	}), 128))])]);
}
var WhatWeMeasure_default = _plugin_vue_export_helper_default(WhatWeMeasure_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/about/WhatWeMeasure.vue"]]);
export { WhatWeMeasure_default as default };

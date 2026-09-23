import { Fragment, createElementBlock, createElementVNode, defineComponent, onBeforeMount, onMounted, openBlock } from "vue";
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
var AboutHeader_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "AboutHeader",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("AboutHeader");
		const __returned__ = {};
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [_cache[0] || (_cache[0] = createElementVNode("h1", { class: "mb-4 text-3xl font-bold text-foreground" }, " About This Benchmark ", -1)), _cache[1] || (_cache[1] = createElementVNode("p", { class: "mb-8 max-w-3xl text-muted-foreground" }, " This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions. ", -1))], 64);
}
var AboutHeader_default = _plugin_vue_export_helper_default(AboutHeader_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/about/AboutHeader.vue"]]);
export { AboutHeader_default as default };

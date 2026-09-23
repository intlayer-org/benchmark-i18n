import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var CareersBenefits_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "CareersBenefits",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = { benefits: [
			{
				label: "Remote-first",
				value: "Work from anywhere in the world"
			},
			{
				label: "Competitive pay",
				value: "Top-of-market compensation"
			},
			{
				label: "Open source time",
				value: "20% time for OSS contributions"
			}
		] };
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
var _hoisted_1 = { class: "mb-12 grid gap-4 md:grid-cols-3" };
var _hoisted_2 = { class: "text-sm font-semibold text-foreground" };
var _hoisted_3 = { class: "text-xs text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList($setup.benefits, (b) => {
		return createElementVNode("div", {
			key: b.label,
			class: "rounded-lg border border-border bg-card p-4 text-center"
		}, [createElementVNode("p", _hoisted_2, toDisplayString(b.label), 1), createElementVNode("p", _hoisted_3, toDisplayString(b.value), 1)]);
	}), 64))]);
}
var CareersBenefits_default = _plugin_vue_export_helper_default(CareersBenefits_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/careers/CareersBenefits.vue"]]);
export { CareersBenefits_default as default };

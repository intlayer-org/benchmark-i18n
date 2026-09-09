import { Fragment, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var MockBanner_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/MockBanner.vue"]]);
var ContactHeader_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ContactHeader",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = { MockBanner: MockBanner_default };
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [
		createVNode($setup["MockBanner"]),
		_cache[0] || (_cache[0] = createElementVNode("h1", { class: "mb-2 text-3xl font-bold text-foreground" }, "Get in Touch", -1)),
		_cache[1] || (_cache[1] = createElementVNode("p", { class: "mb-8 text-muted-foreground" }, [
			createTextVNode(" Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at "),
			createElementVNode("a", {
				href: "mailto:contact@intlayer.org",
				class: "text-primary hover:underline"
			}, " contact@intlayer.org "),
			createTextVNode(" . ")
		], -1))
	], 64);
}
var ContactHeader_default = _plugin_vue_export_helper_default(ContactHeader_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/contact/ContactHeader.vue"]]);
export { ContactHeader_default as default };

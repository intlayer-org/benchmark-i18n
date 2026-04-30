import { Fragment, createElementBlock, createElementVNode, createVNode, defineComponent, getCurrentInstance, openBlock, toDisplayString } from "vue";
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
var MockBanner_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "MockBanner",
	setup(__props, { expose: __expose }) {
		__expose();
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
var _hoisted_1$1 = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString($setup.td("mockBanner")), 1);
}
var MockBanner_default = _plugin_vue_export_helper_default(MockBanner_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/MockBanner.vue"]]);
var CareersHeader_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "CareersHeader",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const __returned__ = {
			td,
			MockBanner: MockBanner_default
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1 = { class: "mb-2 text-3xl font-bold text-foreground" };
var _hoisted_2 = { class: "mb-4 text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [
		createVNode($setup["MockBanner"]),
		createElementVNode("h1", _hoisted_1, toDisplayString($setup.td("careers.header.title")), 1),
		createElementVNode("p", _hoisted_2, toDisplayString($setup.td("careers.header.description")), 1)
	], 64);
}
var CareersHeader_default = _plugin_vue_export_helper_default(CareersHeader_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/careers/CareersHeader.vue"]]);
export { CareersHeader_default as default };

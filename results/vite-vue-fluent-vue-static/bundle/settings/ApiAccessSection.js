import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, toDisplayString } from "vue";
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
var ApiAccessSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ApiAccessSection",
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
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_2 = { class: "mb-4 text-lg font-semibold text-foreground" };
var _hoisted_3 = {
	for: "api-key",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_4 = { class: "flex gap-2" };
var _hoisted_5 = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
};
var _hoisted_6 = { class: "mt-1 text-xs text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.td("settings.apiAccess.title")), 1), createElementVNode("div", null, [
		createElementVNode("label", _hoisted_3, toDisplayString($setup.td("settings.apiAccess.apiKey")), 1),
		createElementVNode("div", _hoisted_4, [_cache[0] || (_cache[0] = createElementVNode("input", {
			id: "api-key",
			readonly: "",
			value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
			class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
		}, null, -1)), createElementVNode("button", _hoisted_5, toDisplayString($setup.td("settings.apiAccess.copy")), 1)]),
		createElementVNode("p", _hoisted_6, toDisplayString($setup.td("settings.apiAccess.description")), 1)
	])]);
}
var ApiAccessSection_default = _plugin_vue_export_helper_default(ApiAccessSection_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/ApiAccessSection.vue"]]);
export { ApiAccessSection_default as default };

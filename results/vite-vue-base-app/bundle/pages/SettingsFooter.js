import { createElementBlock, createElementVNode, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "flex justify-end gap-3" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [createElementVNode("button", {
		type: "button",
		class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
	}, " Cancel ", -1), createElementVNode("button", {
		type: "submit",
		class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
	}, " Save Changes ", -1)])]);
}
var SettingsFooter_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/settings/SettingsFooter.vue"]]);
export { SettingsFooter_default as default };

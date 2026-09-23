import { createElementBlock, createStaticVNode, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<h2 class=\"mb-4 text-lg font-semibold text-foreground\">Profile</h2><div class=\"space-y-4\"><div><label for=\"displayName\" class=\"mb-1 block text-sm font-medium text-foreground\"> Display Name </label><input id=\"displayName\" value=\"John Developer\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label for=\"email\" class=\"mb-1 block text-sm font-medium text-foreground\"> Email </label><input id=\"email\" value=\"john@example.com\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div></div>", 2)])]);
}
var ProfileSection_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/settings/ProfileSection.vue"]]);
export { ProfileSection_default as default };

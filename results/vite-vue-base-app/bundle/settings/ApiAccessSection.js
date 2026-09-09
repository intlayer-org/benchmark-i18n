import { createElementBlock, createStaticVNode, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<h2 class=\"mb-4 text-lg font-semibold text-foreground\">API Access</h2><div><label for=\"apiKey\" class=\"mb-1 block text-sm font-medium text-foreground\"> API Key </label><div class=\"flex gap-2\"><input id=\"apiKey\" readonly value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors\"> Copy </button></div><p class=\"mt-1 text-xs text-muted-foreground\"> Use this key to access the benchmarking API programmatically. </p></div>", 2)])]);
}
var ApiAccessSection_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/settings/ApiAccessSection.vue"]]);
export { ApiAccessSection_default as default };

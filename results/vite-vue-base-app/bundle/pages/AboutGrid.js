import { createElementBlock, createStaticVNode, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "grid gap-8 md:grid-cols-2" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> Why This Exists </h2><p class=\"text-sm text-muted-foreground\"> Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data. </p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> Methodology </h2><p class=\"text-sm text-muted-foreground\"> The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results. </p></div>", 2)])]);
}
var AboutGrid_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { AboutGrid_default as default };

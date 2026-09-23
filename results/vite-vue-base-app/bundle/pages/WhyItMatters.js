import { createElementBlock, createStaticVNode, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "mb-16" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> Why These Metrics Matter </h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Bundle Size </h3><p class=\"text-sm text-muted-foreground\"> The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves. </p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Rendering &amp; Hydration </h3><p class=\"text-sm text-muted-foreground\"> Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI). </p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Dynamic Loading </h3><p class=\"text-sm text-muted-foreground\"> Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential. </p></div></div>", 2)])]);
}
var WhyItMatters_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/home/WhyItMatters.vue"]]);
export { WhyItMatters_default as default };

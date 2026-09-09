import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var BlogList_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "BlogList",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = { posts: [
			{
				title: "Comparing i18n Libraries in 2026: A Deep Dive",
				date: "March 15, 2026",
				excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
				category: "Benchmark"
			},
			{
				title: "How to Reduce Your i18n Bundle by 60%",
				date: "March 8, 2026",
				excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
				category: "Tutorial"
			},
			{
				title: "The State of Internationalization in React",
				date: "February 28, 2026",
				excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
				category: "Analysis"
			},
			{
				title: "Migrating from react-i18next to Lingui",
				date: "February 15, 2026",
				excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
				category: "Tutorial"
			},
			{
				title: "Server Components and i18n: What Changes?",
				date: "February 1, 2026",
				excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
				category: "Analysis"
			},
			{
				title: "Benchmark Methodology: How We Test",
				date: "January 20, 2026",
				excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
				category: "Meta"
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2" };
var _hoisted_2 = { class: "mb-3 flex items-center gap-3" };
var _hoisted_3 = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" };
var _hoisted_4 = { class: "text-xs text-muted-foreground" };
var _hoisted_5 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_6 = { class: "mb-4 text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList($setup.posts, (p) => {
		return createElementVNode("article", {
			key: p.title,
			class: "rounded-lg border border-border bg-card p-6"
		}, [
			createElementVNode("div", _hoisted_2, [createElementVNode("span", _hoisted_3, toDisplayString(p.category), 1), createElementVNode("span", _hoisted_4, toDisplayString(p.date), 1)]),
			createElementVNode("h2", _hoisted_5, toDisplayString(p.title), 1),
			createElementVNode("p", _hoisted_6, toDisplayString(p.excerpt), 1),
			_cache[0] || (_cache[0] = createElementVNode("button", {
				type: "button",
				class: "text-sm font-medium text-primary hover:underline"
			}, " Read More → ", -1))
		]);
	}), 64))]);
}
var BlogList_default = _plugin_vue_export_helper_default(BlogList_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/blog/BlogList.vue"]]);
export { BlogList_default as default };

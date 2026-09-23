import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var FAQList_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "FAQList",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = { faqs: [
			{
				q: "What is i18n Benchmark?",
				a: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
			},
			{
				q: "How are benchmarks conducted?",
				a: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
			},
			{
				q: "Which libraries are currently supported?",
				a: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
			},
			{
				q: "Can I submit my own benchmarks?",
				a: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
			},
			{
				q: "How often are benchmarks updated?",
				a: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
			},
			{
				q: "Is the data reliable?",
				a: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
			},
			{
				q: "Do you offer consulting services?",
				a: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
			},
			{
				q: "How can I contribute?",
				a: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
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
var _hoisted_1 = { class: "mx-auto max-w-3xl space-y-4" };
var _hoisted_2 = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors" };
var _hoisted_3 = { class: "px-6 pb-4 text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList($setup.faqs, (f) => {
		return createElementVNode("details", {
			key: f.q,
			class: "group rounded-lg border border-border bg-card"
		}, [createElementVNode("summary", _hoisted_2, toDisplayString(f.q), 1), createElementVNode("p", _hoisted_3, toDisplayString(f.a), 1)]);
	}), 64))]);
}
var FAQList_default = _plugin_vue_export_helper_default(FAQList_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/faq/FAQList.vue"]]);
export { FAQList_default as default };

import { Fragment, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, renderList, toDisplayString } from "vue";
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
var FAQList_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "FAQList",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const faqNums = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		];
		const __returned__ = {
			td,
			faqNums,
			faqs: faqNums.map((i) => ({
				q: td(`faq.list.q${i}`),
				a: td(`faq.list.a${i}`)
			}))
		};
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
var _hoisted_2 = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50" };
var _hoisted_3 = { class: "px-6 pb-4 text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.faqs, (f, idx) => {
		return openBlock(), createElementBlock("details", {
			key: idx,
			class: "group rounded-lg border border-border bg-card"
		}, [createElementVNode("summary", _hoisted_2, toDisplayString(f.q), 1), createElementVNode("p", _hoisted_3, toDisplayString(f.a), 1)]);
	}), 128))]);
}
var FAQList_default = _plugin_vue_export_helper_default(FAQList_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/faq/FAQList.vue"]]);
export { FAQList_default as default };

import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, renderList, toDisplayString } from "vue";
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
var BlogList_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "BlogList",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const postIndices = [
			1,
			2,
			3,
			4,
			5,
			6
		];
		const __returned__ = {
			td,
			postIndices,
			posts: computed(() => postIndices.map((i) => ({
				title: td(`blog.list.post${i}Title`),
				date: td(`blog.list.post${i}Date`),
				excerpt: td(`blog.list.post${i}Excerpt`),
				category: td(`blog.list.post${i}Category`)
			})))
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2" };
var _hoisted_2 = { class: "mb-3 flex items-center gap-3" };
var _hoisted_3 = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" };
var _hoisted_4 = { class: "text-xs text-muted-foreground" };
var _hoisted_5 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_6 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_7 = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.posts, (p) => {
		return openBlock(), createElementBlock("article", {
			key: p.title,
			class: "rounded-lg border border-border bg-card p-6"
		}, [
			createElementVNode("div", _hoisted_2, [createElementVNode("span", _hoisted_3, toDisplayString(p.category), 1), createElementVNode("span", _hoisted_4, toDisplayString(p.date), 1)]),
			createElementVNode("h2", _hoisted_5, toDisplayString(p.title), 1),
			createElementVNode("p", _hoisted_6, toDisplayString(p.excerpt), 1),
			createElementVNode("button", _hoisted_7, toDisplayString($setup.td("blog.list.readMore")), 1)
		]);
	}), 128))]);
}
var BlogList_default = _plugin_vue_export_helper_default(BlogList_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/blog/BlogList.vue"]]);
export { BlogList_default as default };

import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, toDisplayString } from "vue";
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
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var Hero_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Hero",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("Hero");
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
var _hoisted_1 = { class: "mb-16 text-center" };
var _hoisted_2 = { class: "mb-4 text-4xl font-bold tracking-tight text-foreground" };
var _hoisted_3 = { class: "mx-auto max-w-2xl text-lg text-muted-foreground" };
var _hoisted_4 = { class: "mt-8 flex justify-center gap-4" };
var _hoisted_5 = {
	type: "button",
	class: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
var _hoisted_6 = {
	type: "button",
	class: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [
		createElementVNode("h1", _hoisted_2, toDisplayString($setup.td("home.hero.title")), 1),
		createElementVNode("p", _hoisted_3, toDisplayString($setup.td("home.hero.description")), 1),
		createElementVNode("div", _hoisted_4, [createElementVNode("button", _hoisted_5, toDisplayString($setup.td("home.hero.viewResults")), 1), createElementVNode("button", _hoisted_6, toDisplayString($setup.td("home.hero.methodology")), 1)])
	]);
}
var Hero_default = _plugin_vue_export_helper_default(Hero_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/Hero.vue"]]);
export { Hero_default as default };

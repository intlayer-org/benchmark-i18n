import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, renderList, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "mt-12 mx-auto max-w-3xl" };
var _hoisted_2 = { class: "mb-4 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "block text-sm font-bold text-primary" };
var _hoisted_5 = { class: "block mt-1 text-sm text-muted-foreground" };
var WhatWeMeasure_default = defineComponent({
	__name: "WhatWeMeasure",
	setup(__props) {
		usePerformanceMeasure("WhatWeMeasure");
		const { td } = useFluentDottedT();
		const metrics = computed(() => [
			{
				metric: td("about.whatWeMeasure.bundleSizeImpact"),
				desc: td("about.whatWeMeasure.bundleSizeImpactDesc")
			},
			{
				metric: td("about.whatWeMeasure.renderingOverhead"),
				desc: td("about.whatWeMeasure.renderingOverheadDesc")
			},
			{
				metric: td("about.whatWeMeasure.hydrationCost"),
				desc: td("about.whatWeMeasure.hydrationCostDesc")
			},
			{
				metric: td("about.whatWeMeasure.lazyLoading"),
				desc: td("about.whatWeMeasure.lazyLoadingDesc")
			},
			{
				metric: td("about.whatWeMeasure.localeSwitch"),
				desc: td("about.whatWeMeasure.localeSwitchDesc")
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(td)("about.whatWeMeasure.title")), 1), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (m) => {
				return openBlock(), createElementBlock("li", {
					key: m.metric,
					class: "rounded-md border border-border p-4"
				}, [createElementVNode("span", _hoisted_4, toDisplayString(m.metric), 1), createElementVNode("span", _hoisted_5, toDisplayString(m.desc), 1)]);
			}), 128))])]);
		};
	}
});
export { WhatWeMeasure_default as default };

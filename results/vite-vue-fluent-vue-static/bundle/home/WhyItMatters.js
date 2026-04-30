import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "mb-16" };
var _hoisted_2 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "grid gap-6 md:grid-cols-3" };
var _hoisted_4 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_5 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_6 = { class: "text-sm text-muted-foreground" };
var _hoisted_7 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_8 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_9 = { class: "text-sm text-muted-foreground" };
var _hoisted_10 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_11 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_12 = { class: "text-sm text-muted-foreground" };
var WhyItMatters_default = defineComponent({
	__name: "WhyItMatters",
	setup(__props) {
		usePerformanceMeasure("WhyItMatters");
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(td)("home.whyItMatters.title")), 1), createElementVNode("div", _hoisted_3, [
				createElementVNode("div", _hoisted_4, [createElementVNode("h3", _hoisted_5, toDisplayString(unref(td)("home.whyItMatters.bundleSizeTitle")), 1), createElementVNode("p", _hoisted_6, toDisplayString(unref(td)("home.whyItMatters.bundleSizeDesc")), 1)]),
				createElementVNode("div", _hoisted_7, [createElementVNode("h3", _hoisted_8, toDisplayString(unref(td)("home.whyItMatters.renderingTitle")), 1), createElementVNode("p", _hoisted_9, toDisplayString(unref(td)("home.whyItMatters.renderingDesc")), 1)]),
				createElementVNode("div", _hoisted_10, [createElementVNode("h3", _hoisted_11, toDisplayString(unref(td)("home.whyItMatters.dynamicLoadingTitle")), 1), createElementVNode("p", _hoisted_12, toDisplayString(unref(td)("home.whyItMatters.dynamicLoadingDesc")), 1)])
			])]);
		};
	}
});
export { WhyItMatters_default as default };

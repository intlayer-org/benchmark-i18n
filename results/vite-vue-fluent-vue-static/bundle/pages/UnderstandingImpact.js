import { createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "mb-16 mx-auto max-w-3xl space-y-6" };
var _hoisted_2 = { class: "text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_4 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" };
var _hoisted_7 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_8 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_9 = { class: "text-sm text-muted-foreground" };
var _hoisted_10 = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" };
var _hoisted_11 = { class: "text-foreground" };
var _hoisted_12 = { class: "text-foreground" };
var _hoisted_13 = { class: "text-foreground" };
var _hoisted_14 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_15 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_16 = { class: "text-sm text-muted-foreground" };
var UnderstandingImpact_default = defineComponent({
	__name: "UnderstandingImpact",
	setup(__props) {
		usePerformanceMeasure("UnderstandingImpact");
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [
				createElementVNode("h2", _hoisted_2, toDisplayString(unref(td)("home.understandingImpact.title")), 1),
				createElementVNode("div", _hoisted_3, [
					createElementVNode("h3", _hoisted_4, toDisplayString(unref(td)("home.understandingImpact.singleJsonTitle")), 1),
					createElementVNode("p", _hoisted_5, toDisplayString(unref(td)("home.understandingImpact.singleJsonIntro")), 1),
					createElementVNode("ul", _hoisted_6, [
						createElementVNode("li", null, toDisplayString(unref(td)("home.understandingImpact.singleJsonBullet1")), 1),
						createElementVNode("li", null, toDisplayString(unref(td)("home.understandingImpact.singleJsonBullet2")), 1),
						createElementVNode("li", null, toDisplayString(unref(td)("home.understandingImpact.singleJsonBullet3")), 1)
					])
				]),
				createElementVNode("div", _hoisted_7, [
					createElementVNode("h3", _hoisted_8, toDisplayString(unref(td)("home.understandingImpact.tradeOffsTitle")), 1),
					createElementVNode("p", _hoisted_9, toDisplayString(unref(td)("home.understandingImpact.tradeOffsIntro")), 1),
					createElementVNode("ul", _hoisted_10, [
						createElementVNode("li", null, [createElementVNode("strong", _hoisted_11, toDisplayString(unref(td)("home.understandingImpact.waterfallLabel")), 1), createTextVNode(" " + toDisplayString(unref(td)("home.understandingImpact.waterfallDesc")), 1)]),
						createElementVNode("li", null, [createElementVNode("strong", _hoisted_12, toDisplayString(unref(td)("home.understandingImpact.foucLabel")), 1), createTextVNode(" " + toDisplayString(unref(td)("home.understandingImpact.foucDesc")), 1)]),
						createElementVNode("li", null, [createElementVNode("strong", _hoisted_13, toDisplayString(unref(td)("home.understandingImpact.cacheLabel")), 1), createTextVNode(" " + toDisplayString(unref(td)("home.understandingImpact.cacheDesc")), 1)])
					])
				]),
				createElementVNode("div", _hoisted_14, [createElementVNode("h3", _hoisted_15, toDisplayString(unref(td)("home.understandingImpact.measuresTitle")), 1), createElementVNode("p", _hoisted_16, toDisplayString(unref(td)("home.understandingImpact.measuresDesc")), 1)])
			]);
		};
	}
});
export { UnderstandingImpact_default as default };

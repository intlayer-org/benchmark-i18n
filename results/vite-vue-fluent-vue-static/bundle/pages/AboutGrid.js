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
var _hoisted_1 = { class: "grid gap-8 md:grid-cols-2" };
var _hoisted_2 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_3 = { class: "mb-3 text-xl font-semibold text-foreground" };
var _hoisted_4 = { class: "text-sm text-muted-foreground" };
var _hoisted_5 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_6 = { class: "mb-3 text-xl font-semibold text-foreground" };
var _hoisted_7 = { class: "text-sm text-muted-foreground" };
var AboutGrid_default = defineComponent({
	__name: "AboutGrid",
	setup(__props) {
		usePerformanceMeasure("AboutGrid");
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("h2", _hoisted_3, toDisplayString(unref(td)("about.grid.whyExistsTitle")), 1), createElementVNode("p", _hoisted_4, toDisplayString(unref(td)("about.grid.whyExistsDesc")), 1)]), createElementVNode("div", _hoisted_5, [createElementVNode("h2", _hoisted_6, toDisplayString(unref(td)("about.grid.methodologyTitle")), 1), createElementVNode("p", _hoisted_7, toDisplayString(unref(td)("about.grid.methodologyDesc")), 1)])]);
		};
	}
});
export { AboutGrid_default as default };

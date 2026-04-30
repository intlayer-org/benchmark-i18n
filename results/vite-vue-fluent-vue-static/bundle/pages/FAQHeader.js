import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, onBeforeMount, onMounted, openBlock, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "mb-8 text-center" };
var _hoisted_2 = { class: "mb-4 text-3xl font-bold text-foreground" };
var _hoisted_3 = { class: "mx-auto max-w-2xl text-muted-foreground" };
var FAQHeader_default = defineComponent({
	__name: "FAQHeader",
	setup(__props) {
		usePerformanceMeasure("FAQHeader");
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h1", _hoisted_2, toDisplayString(unref(td)("faq.header.title")), 1), createElementVNode("p", _hoisted_3, toDisplayString(unref(td)("faq.header.description")), 1)]);
		};
	}
});
export { FAQHeader_default as default };

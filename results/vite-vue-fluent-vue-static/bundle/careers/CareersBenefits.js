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
var _hoisted_1 = { class: "mb-12 grid gap-4 md:grid-cols-3" };
var _hoisted_2 = { class: "text-sm font-semibold text-foreground" };
var _hoisted_3 = { class: "text-xs text-muted-foreground" };
var CareersBenefits_default = defineComponent({
	__name: "CareersBenefits",
	setup(__props) {
		const { td } = useFluentDottedT();
		const benefits = computed(() => [
			{
				label: td("careers.benefits.remoteLabel"),
				value: td("careers.benefits.remoteValue")
			},
			{
				label: td("careers.benefits.payLabel"),
				value: td("careers.benefits.payValue")
			},
			{
				label: td("careers.benefits.ossLabel"),
				value: td("careers.benefits.ossValue")
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(benefits.value, (b) => {
				return openBlock(), createElementBlock("div", {
					key: b.label,
					class: "rounded-lg border border-border bg-card p-4 text-center"
				}, [createElementVNode("p", _hoisted_2, toDisplayString(b.label), 1), createElementVNode("p", _hoisted_3, toDisplayString(b.value), 1)]);
			}), 128))]);
		};
	}
});
export { CareersBenefits_default as default };

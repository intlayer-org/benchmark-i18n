import { Fragment, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, renderList, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "mx-auto max-w-3xl space-y-4" };
var _hoisted_2 = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50" };
var _hoisted_3 = { class: "px-6 pb-4 text-sm text-muted-foreground" };
var FAQList_default = defineComponent({
	__name: "FAQList",
	setup(__props) {
		const { td } = useFluentDottedT();
		const faqs = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		].map((i) => ({
			q: td(`faq.list.q${i}`),
			a: td(`faq.list.a${i}`)
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(faqs), (f, idx) => {
				return openBlock(), createElementBlock("details", {
					key: idx,
					class: "group rounded-lg border border-border bg-card"
				}, [createElementVNode("summary", _hoisted_2, toDisplayString(f.q), 1), createElementVNode("p", _hoisted_3, toDisplayString(f.a), 1)]);
			}), 128))]);
		};
	}
});
export { FAQList_default as default };

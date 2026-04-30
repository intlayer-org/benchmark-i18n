import { Fragment, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, getCurrentInstance, openBlock, toDisplayString, unref } from "vue";
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
var _hoisted_1$1 = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
var MockBanner_default = defineComponent({
	__name: "MockBanner",
	setup(__props) {
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(unref(td)("mockBanner")), 1);
		};
	}
});
var _hoisted_1 = { class: "mb-2 text-3xl font-bold text-foreground" };
var _hoisted_2 = { class: "mb-8 text-muted-foreground" };
var _hoisted_3 = {
	href: "mailto:contact@intlayer.org",
	class: "text-primary hover:underline"
};
var ContactHeader_default = defineComponent({
	__name: "ContactHeader",
	setup(__props) {
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(MockBanner_default),
				createElementVNode("h1", _hoisted_1, toDisplayString(unref(td)("contact.header.title")), 1),
				createElementVNode("p", _hoisted_2, [
					createTextVNode(toDisplayString(unref(td)("contact.header.description")) + " ", 1),
					createElementVNode("a", _hoisted_3, toDisplayString(unref(td)("shared.contactEmail")), 1),
					_cache[0] || (_cache[0] = createTextVNode(" . ", -1))
				])
			], 64);
		};
	}
});
export { ContactHeader_default as default };

import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_2 = { class: "mb-4 text-lg font-semibold text-foreground" };
var _hoisted_3 = {
	for: "api-key",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_4 = { class: "flex gap-2" };
var _hoisted_5 = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
};
var _hoisted_6 = { class: "mt-1 text-xs text-muted-foreground" };
var ApiAccessSection_default = defineComponent({
	__name: "ApiAccessSection",
	setup(__props) {
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(td)("settings.apiAccess.title")), 1), createElementVNode("div", null, [
				createElementVNode("label", _hoisted_3, toDisplayString(unref(td)("settings.apiAccess.apiKey")), 1),
				createElementVNode("div", _hoisted_4, [_cache[0] || (_cache[0] = createElementVNode("input", {
					id: "api-key",
					readonly: "",
					value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}, null, -1)), createElementVNode("button", _hoisted_5, toDisplayString(unref(td)("settings.apiAccess.copy")), 1)]),
				createElementVNode("p", _hoisted_6, toDisplayString(unref(td)("settings.apiAccess.description")), 1)
			])]);
		};
	}
});
export { ApiAccessSection_default as default };

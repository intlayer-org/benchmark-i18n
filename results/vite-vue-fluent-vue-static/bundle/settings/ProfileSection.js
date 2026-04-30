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
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = {
	for: "display-name",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_5 = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var ProfileSection_default = defineComponent({
	__name: "ProfileSection",
	setup(__props) {
		const { td } = useFluentDottedT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(td)("settings.profile.title")), 1), createElementVNode("div", _hoisted_3, [createElementVNode("div", null, [createElementVNode("label", _hoisted_4, toDisplayString(unref(td)("settings.profile.displayName")), 1), _cache[0] || (_cache[0] = createElementVNode("input", {
				id: "display-name",
				value: "John Developer",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, null, -1))]), createElementVNode("div", null, [createElementVNode("label", _hoisted_5, toDisplayString(unref(td)("settings.profile.email")), 1), _cache[1] || (_cache[1] = createElementVNode("input", {
				id: "email",
				value: "john@example.com",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, null, -1))])])]);
		};
	}
});
export { ProfileSection_default as default };

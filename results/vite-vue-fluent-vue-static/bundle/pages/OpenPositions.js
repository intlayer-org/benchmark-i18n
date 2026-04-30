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
var _hoisted_1 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_2 = { class: "space-y-4" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "text-sm text-muted-foreground" };
var _hoisted_5 = { class: "mt-2 flex gap-2" };
var _hoisted_6 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_7 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_8 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_9 = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
};
var OpenPositions_default = defineComponent({
	__name: "OpenPositions",
	setup(__props) {
		const { td } = useFluentDottedT();
		const openings = [
			{
				titleKey: "frontendTitle",
				descKey: "frontendDesc",
				deptKey: "engineering",
				locationKey: "remote",
				typeKey: "fullTime"
			},
			{
				titleKey: "backendTitle",
				descKey: "backendDesc",
				deptKey: "engineering",
				locationKey: "remote",
				typeKey: "fullTime"
			},
			{
				titleKey: "writerTitle",
				descKey: "writerDesc",
				deptKey: "documentation",
				locationKey: "remote",
				typeKey: "partTime"
			},
			{
				titleKey: "devrelTitle",
				descKey: "devrelDesc",
				deptKey: "community",
				locationKey: "sfRemote",
				typeKey: "fullTime"
			},
			{
				titleKey: "qaTitle",
				descKey: "qaDesc",
				deptKey: "engineering",
				locationKey: "remote",
				typeKey: "fullTime"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h2", _hoisted_1, toDisplayString(unref(td)("careers.openPositions.title")), 1), createElementVNode("div", _hoisted_2, [(openBlock(), createElementBlock(Fragment, null, renderList(openings, (o, i) => {
				return createElementVNode("div", {
					key: `${o.titleKey}-${o.locationKey}-${i}`,
					class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
				}, [createElementVNode("div", null, [
					createElementVNode("h3", _hoisted_3, toDisplayString(unref(td)(`careers.openPositions.${o.titleKey}`)), 1),
					createElementVNode("p", _hoisted_4, toDisplayString(unref(td)(`careers.openPositions.${o.descKey}`)), 1),
					createElementVNode("div", _hoisted_5, [
						createElementVNode("span", _hoisted_6, toDisplayString(unref(td)(`careers.openPositions.${o.deptKey}`)), 1),
						createElementVNode("span", _hoisted_7, toDisplayString(unref(td)(`careers.openPositions.${o.locationKey}`)), 1),
						createElementVNode("span", _hoisted_8, toDisplayString(unref(td)(`careers.openPositions.${o.typeKey}`)), 1)
					])
				]), createElementVNode("button", _hoisted_9, toDisplayString(unref(td)("careers.openPositions.applyNow")), 1)]);
			}), 64))])], 64);
		};
	}
});
export { OpenPositions_default as default };

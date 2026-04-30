import { Fragment, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, renderList, toDisplayString } from "vue";
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
var OpenPositions_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "OpenPositions",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const __returned__ = {
			td,
			openings: [
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
			]
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h2", _hoisted_1, toDisplayString($setup.td("careers.openPositions.title")), 1), createElementVNode("div", _hoisted_2, [(openBlock(), createElementBlock(Fragment, null, renderList($setup.openings, (o, i) => {
		return createElementVNode("div", {
			key: `${o.titleKey}-${o.locationKey}-${i}`,
			class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
		}, [createElementVNode("div", null, [
			createElementVNode("h3", _hoisted_3, toDisplayString($setup.td(`careers.openPositions.${o.titleKey}`)), 1),
			createElementVNode("p", _hoisted_4, toDisplayString($setup.td(`careers.openPositions.${o.descKey}`)), 1),
			createElementVNode("div", _hoisted_5, [
				createElementVNode("span", _hoisted_6, toDisplayString($setup.td(`careers.openPositions.${o.deptKey}`)), 1),
				createElementVNode("span", _hoisted_7, toDisplayString($setup.td(`careers.openPositions.${o.locationKey}`)), 1),
				createElementVNode("span", _hoisted_8, toDisplayString($setup.td(`careers.openPositions.${o.typeKey}`)), 1)
			])
		]), createElementVNode("button", _hoisted_9, toDisplayString($setup.td("careers.openPositions.applyNow")), 1)]);
	}), 64))])], 64);
}
var OpenPositions_default = _plugin_vue_export_helper_default(OpenPositions_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/careers/OpenPositions.vue"]]);
export { OpenPositions_default as default };

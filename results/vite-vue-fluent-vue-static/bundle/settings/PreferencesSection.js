import { createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, toDisplayString } from "vue";
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
var PreferencesSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "PreferencesSection",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const __returned__ = { td };
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
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_2 = { class: "mb-4 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "text-sm font-medium text-foreground" };
var _hoisted_6 = { class: "text-xs text-muted-foreground" };
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = { class: "flex items-center justify-between" };
var _hoisted_9 = { class: "text-sm font-medium text-foreground" };
var _hoisted_10 = { class: "text-xs text-muted-foreground" };
var _hoisted_11 = ["aria-label"];
var _hoisted_12 = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_13 = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.td("settings.preferences.title")), 1), createElementVNode("div", _hoisted_3, [
		createElementVNode("div", _hoisted_4, [createElementVNode("div", null, [createElementVNode("p", _hoisted_5, toDisplayString($setup.td("settings.preferences.emailNotifications")), 1), createElementVNode("p", _hoisted_6, toDisplayString($setup.td("settings.preferences.weeklyReports")), 1)]), createElementVNode("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": $setup.td("settings.preferences.toggleNotifications")
		}, [..._cache[0] || (_cache[0] = [createElementVNode("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)])], 8, _hoisted_7)]),
		createElementVNode("div", _hoisted_8, [createElementVNode("div", null, [createElementVNode("p", _hoisted_9, toDisplayString($setup.td("settings.preferences.darkMode")), 1), createElementVNode("p", _hoisted_10, toDisplayString($setup.td("settings.preferences.darkColorScheme")), 1)]), createElementVNode("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": $setup.td("settings.preferences.toggleDarkMode")
		}, [..._cache[1] || (_cache[1] = [createElementVNode("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)])], 8, _hoisted_11)]),
		createElementVNode("div", null, [createElementVNode("label", _hoisted_12, toDisplayString($setup.td("settings.preferences.defaultLanguage")), 1), createElementVNode("select", _hoisted_13, [
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.english")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.french")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.german")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.spanish")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.japanese")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.chinese")), 1),
			createElementVNode("option", null, toDisplayString($setup.td("settings.preferences.arabic")), 1)
		])])
	])]);
}
var PreferencesSection_default = _plugin_vue_export_helper_default(PreferencesSection_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { PreferencesSection_default as default };

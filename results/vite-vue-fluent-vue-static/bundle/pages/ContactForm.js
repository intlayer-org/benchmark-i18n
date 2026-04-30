import { Fragment, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, openBlock, renderList, toDisplayString, withModifiers } from "vue";
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
var ContactForm_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ContactForm",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const __returned__ = {
			td,
			topics: [
				"bugReport",
				"newBenchmarkIdea",
				"methodologyQuestion",
				"contribution",
				"other"
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
var _hoisted_1 = { class: "grid gap-4 md:grid-cols-2" };
var _hoisted_2 = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_3 = ["placeholder"];
var _hoisted_4 = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_5 = ["placeholder"];
var _hoisted_6 = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_7 = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
var _hoisted_8 = ["value"];
var _hoisted_9 = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_10 = ["placeholder"];
var _hoisted_11 = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("form", {
		class: "space-y-6",
		onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
	}, [
		createElementVNode("div", _hoisted_1, [createElementVNode("div", null, [createElementVNode("label", _hoisted_2, toDisplayString($setup.td("contact.form.name")), 1), createElementVNode("input", {
			id: "name",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: $setup.td("contact.form.yourName")
		}, null, 8, _hoisted_3)]), createElementVNode("div", null, [createElementVNode("label", _hoisted_4, toDisplayString($setup.td("contact.form.email")), 1), createElementVNode("input", {
			id: "email",
			type: "email",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: $setup.td("contact.form.emailPlaceholder")
		}, null, 8, _hoisted_5)])]),
		createElementVNode("div", null, [createElementVNode("label", _hoisted_6, toDisplayString($setup.td("contact.form.topic")), 1), createElementVNode("select", _hoisted_7, [(openBlock(), createElementBlock(Fragment, null, renderList($setup.topics, (topic) => {
			return createElementVNode("option", {
				key: topic,
				value: topic
			}, toDisplayString($setup.td(`contact.form.${topic}`)), 9, _hoisted_8);
		}), 64))])]),
		createElementVNode("div", null, [createElementVNode("label", _hoisted_9, toDisplayString($setup.td("contact.form.message")), 1), createElementVNode("textarea", {
			id: "message",
			rows: "5",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: $setup.td("contact.form.messagePlaceholder")
		}, null, 8, _hoisted_10)]),
		createElementVNode("button", _hoisted_11, toDisplayString($setup.td("contact.form.sendMessage")), 1)
	], 32);
}
var ContactForm_default = _plugin_vue_export_helper_default(ContactForm_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/contact/ContactForm.vue"]]);
export { ContactForm_default as default };

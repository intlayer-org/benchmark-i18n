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
var TeamGrid_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "TeamGrid",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const memberIndices = [
			1,
			2,
			3,
			4,
			5,
			6
		];
		const members = computed(() => memberIndices.map((i) => ({
			name: td(`team.grid.member${i}Name`),
			role: td(`team.grid.member${i}Role`),
			bio: td(`team.grid.member${i}Bio`)
		})));
		const getInitials = (name) => name.split(" ").map((n) => n[0]).join("");
		const __returned__ = {
			td,
			memberIndices,
			members,
			getInitials
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "mb-2 text-xs font-medium text-primary" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.members, (m) => {
		return openBlock(), createElementBlock("div", {
			key: m.name,
			class: "rounded-lg border border-border bg-card p-6 text-center"
		}, [
			createElementVNode("div", _hoisted_2, toDisplayString($setup.getInitials(m.name)), 1),
			createElementVNode("h3", _hoisted_3, toDisplayString(m.name), 1),
			createElementVNode("p", _hoisted_4, toDisplayString(m.role), 1),
			createElementVNode("p", _hoisted_5, toDisplayString(m.bio), 1)
		]);
	}), 128))]);
}
var TeamGrid_default = _plugin_vue_export_helper_default(TeamGrid_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/team/TeamGrid.vue"]]);
export { TeamGrid_default as default };

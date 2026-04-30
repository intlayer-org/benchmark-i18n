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
var ProductsGrid_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ProductsGrid",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
		const productIds = [
			"cli",
			"cloud",
			"enterprise",
			"migration",
			"qa",
			"optimizer"
		];
		const __returned__ = {
			td,
			productIds,
			products: computed(() => productIds.map((id) => ({
				name: td(`products.grid.${id}Name`),
				desc: td(`products.grid.${id}Desc`),
				price: td(`products.grid.${id}Price`)
			})))
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
var _hoisted_2 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "text-sm font-bold text-primary" };
var _hoisted_6 = {
	type: "button",
	class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.products, (p) => {
		return openBlock(), createElementBlock("div", {
			key: p.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [createElementVNode("div", null, [createElementVNode("h3", _hoisted_2, toDisplayString(p.name), 1), createElementVNode("p", _hoisted_3, toDisplayString(p.desc), 1)]), createElementVNode("div", _hoisted_4, [createElementVNode("span", _hoisted_5, toDisplayString(p.price), 1), createElementVNode("button", _hoisted_6, toDisplayString($setup.td("products.grid.learnMore")), 1)])]);
	}), 128))]);
}
var ProductsGrid_default = _plugin_vue_export_helper_default(ProductsGrid_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/products/ProductsGrid.vue"]]);
export { ProductsGrid_default as default };

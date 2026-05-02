import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
import { useRoute, useRouter } from "vue-router";
var locales = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
];
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var LocaleSwitcher_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const router = useRouter();
		const currentLocale = computed(() => route.params.locale || "en");
		const handleLocaleChange = (newLocale) => {
			const newPath = route.path.replace(/^\/[^/]+/, `/${newLocale}`);
			router.push({
				path: newPath,
				query: route.query,
				hash: route.hash
			});
		};
		const __returned__ = {
			route,
			router,
			currentLocale,
			handleLocaleChange,
			get getLocaleName() {
				return getLocaleName;
			},
			get locales() {
				return locales;
			}
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
var _hoisted_1 = { class: "flex items-center gap-2" };
var _hoisted_2 = ["value"];
var _hoisted_3 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("select", {
		value: $setup.currentLocale,
		onChange: _cache[0] || (_cache[0] = (e) => $setup.handleLocaleChange(e.target.value)),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.locales, (localeItem) => {
		return openBlock(), createElementBlock("option", {
			key: localeItem,
			value: localeItem
		}, toDisplayString($setup.getLocaleName(localeItem)), 9, _hoisted_3);
	}), 128))], 40, _hoisted_2)]);
}
var LocaleSwitcher_default = _plugin_vue_export_helper_default(LocaleSwitcher_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/LocaleSwitcher.vue"]]);
export { LocaleSwitcher_default as default };

import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString, unref } from "vue";
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
var _hoisted_1 = { class: "flex items-center gap-2" };
var _hoisted_2 = ["value"];
var _hoisted_3 = ["value"];
var LocaleSwitcher_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props) {
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("select", {
				value: currentLocale.value,
				onChange: _cache[0] || (_cache[0] = (e) => handleLocaleChange(e.target.value)),
				class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(locales), (localeItem) => {
				return openBlock(), createElementBlock("option", {
					key: localeItem,
					value: localeItem
				}, toDisplayString(unref(getLocaleName)(localeItem)), 9, _hoisted_3);
			}), 128))], 40, _hoisted_2)]);
		};
	}
});
export { LocaleSwitcher_default as default };

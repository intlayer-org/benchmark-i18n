import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var content = {
	"de": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((m) => m.default),
	"en": () => import("./en-CXxk3_Zn.js").then((m) => m.default),
	"es": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((m) => m.default),
	"fr": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((m) => m.default),
	"it": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((m) => m.default),
	"ja": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((m) => m.default),
	"ko": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((m) => m.default),
	"pt": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((m) => m.default),
	"ru": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((m) => m.default),
	"zh": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((m) => m.default)
};
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var internationalization = {
	"locales": [
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
	],
	"requiredLocales": [
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
	],
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
function IntlayerNodeWrapper($$anchor, $$props) {
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, Renderer, false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Renderer()($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if (typeof Renderer() === "string") $$render(consequent);
		else if (typeof Renderer() === "function") $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => args.value?.toString() ?? "",
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => renderIntlayerNode({
		value: children ?? node,
		component: void 0,
		props: rest
	})
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var recursiveProxy = new Proxy(() => {}, {
	get: (_target, prop) => {
		if (prop === Symbol.toPrimitive) return () => void 0;
		if (prop === "toString") return () => "";
		if (prop === "then") return;
		return recursiveProxy;
	},
	apply: () => recursiveProxy
});
function useDictionaryDynamic(dictionaryPromise, _key, locale) {
	const context = getIntlayerContext();
	return derived(derived(intlayerStore, ($store) => locale ?? context?.locale ?? $store.locale), ($locale, set) => {
		set(new Proxy({
			isLoading: true,
			error: null
		}, { get: (_target, prop) => {
			if (prop === "isLoading") return true;
			if (prop === "error") return null;
			return recursiveProxy;
		} }));
		let isCancelled = false;
		const load = async () => {
			try {
				const loader = dictionaryPromise[$locale];
				if (!loader) return;
				const dict = await loader();
				if (isCancelled) return;
				set({
					...getDictionary(dict, $locale),
					isLoading: false,
					error: null
				});
			} catch (error) {
				if (isCancelled) return;
				console.error(error);
				set({
					isLoading: false,
					error
				});
			}
		};
		load();
		return () => {
			isCancelled = true;
		};
	}, new Proxy({
		isLoading: true,
		error: null
	}, { get: (_target, prop) => {
		if (prop === "isLoading") return true;
		if (prop === "error") return null;
		return recursiveProxy;
	} }));
}
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div class="space-y-4"><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div> <div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div> <div><label for="settings-default-language" class="mb-1 block text-sm font-medium text-foreground"> </label> <select id="settings-default-language" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>`);
function PreferencesSection($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content$1 = useDictionaryDynamic(content, "preferences-section");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var p = $.child(div_2);
	var text_1 = $.child(p, true);
	$.reset(p);
	var p_1 = $.sibling(p, 2);
	var text_2 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	var button = $.sibling(div_2, 2);
	$.reset(div_1);
	var div_3 = $.sibling(div_1, 2);
	var div_4 = $.child(div_3);
	var p_2 = $.child(div_4);
	var text_3 = $.child(p_2, true);
	$.reset(p_2);
	var p_3 = $.sibling(p_2, 2);
	var text_4 = $.child(p_3, true);
	$.reset(p_3);
	$.reset(div_4);
	var button_1 = $.sibling(div_4, 2);
	$.reset(div_3);
	var div_5 = $.sibling(div_3, 2);
	var label = $.child(div_5);
	var text_5 = $.child(label, true);
	$.reset(label);
	var select = $.sibling(label, 2);
	var option = $.child(select);
	var text_6 = $.child(option, true);
	$.reset(option);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_7 = $.child(option_1, true);
	$.reset(option_1);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_8 = $.child(option_2, true);
	$.reset(option_2);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_9 = $.child(option_3, true);
	$.reset(option_3);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_10 = $.child(option_4, true);
	$.reset(option_4);
	var option_4_value = {};
	var option_5 = $.sibling(option_4);
	var text_11 = $.child(option_5, true);
	$.reset(option_5);
	var option_5_value = {};
	var option_6 = $.sibling(option_5);
	var text_12 = $.child(option_6, true);
	$.reset(option_6);
	var option_6_value = {};
	$.reset(select);
	$.reset(div_5);
	$.reset(div);
	$.reset(section);
	$.template_effect(() => {
		$.set_text(text, $content().preferences);
		$.set_text(text_1, $content().emailNotifications);
		$.set_text(text_2, $content().receiveWeeklyBenchmarkReports);
		$.set_attribute(button, "aria-label", $content().toggleNotifications);
		$.set_text(text_3, $content().darkMode);
		$.set_text(text_4, $content().useDarkColorScheme);
		$.set_attribute(button_1, "aria-label", $content().toggleDarkMode);
		$.set_text(text_5, $content().defaultLanguage);
		$.set_text(text_6, $content().englishEn);
		if (option_value !== (option_value = $content().englishEn)) option.__value = $content().englishEn;
		$.set_text(text_7, $content().frenchFr);
		if (option_1_value !== (option_1_value = $content().frenchFr)) option_1.__value = $content().frenchFr;
		$.set_text(text_8, $content().germanDe);
		if (option_2_value !== (option_2_value = $content().germanDe)) option_2.__value = $content().germanDe;
		$.set_text(text_9, $content().spanishEs);
		if (option_3_value !== (option_3_value = $content().spanishEs)) option_3.__value = $content().spanishEs;
		$.set_text(text_10, $content().japaneseJa);
		if (option_4_value !== (option_4_value = $content().japaneseJa)) option_4.__value = $content().japaneseJa;
		$.set_text(text_11, $content().chineseSimplifiedZhCn);
		if (option_5_value !== (option_5_value = $content().chineseSimplifiedZhCn)) option_5.__value = $content().chineseSimplifiedZhCn;
		$.set_text(text_12, $content().arabicAr);
		if (option_6_value !== (option_6_value = $content().arabicAr)) option_6.__value = $content().arabicAr;
	});
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { PreferencesSection as default };
var en_default = {
	key: "preferences-section",
	content: {
		"arabicAr": "Arabic (ar)",
		"chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
		"japaneseJa": "Japanese (ja)",
		"spanishEs": "Spanish (es)",
		"germanDe": "German (de)",
		"frenchFr": "French (fr)",
		"englishEn": "English (en)",
		"defaultLanguage": "Default Language",
		"toggleDarkMode": "Toggle dark mode",
		"useDarkColorScheme": "Use dark color scheme",
		"darkMode": "Dark Mode",
		"toggleNotifications": "Toggle notifications",
		"receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
		"emailNotifications": "Email Notifications",
		"preferences": "Preferences"
	}
};
export { en_default as default };

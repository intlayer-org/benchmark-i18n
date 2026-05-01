import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { derived, get, writable } from "svelte/store";
import { getContext, onMount } from "svelte";
var content = {
	"de": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/de.json").then((m) => m.default),
	"en": () => import("./en-BLJI3J6y.js").then((m) => m.default),
	"es": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/es.json").then((m) => m.default),
	"fr": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/fr.json").then((m) => m.default),
	"it": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/it.json").then((m) => m.default),
	"ja": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ja.json").then((m) => m.default),
	"ko": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ko.json").then((m) => m.default),
	"pt": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/pt.json").then((m) => m.default),
	"ru": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ru.json").then((m) => m.default),
	"zh": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/zh.json").then((m) => m.default)
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
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
}
var root_1 = $.from_html(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td></tr>`);
var root = $.from_html(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th></tr></thead><tbody></tbody></table></div></section>`);
function ResultsTable($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	usePerformanceMeasure("ResultsTable");
	const content$1 = useDictionaryDynamic(content, "results-table");
	const results = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: get(content$1).yes
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: get(content$1).manual
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: get(content$1).yes1
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var table = $.child(div);
	var thead = $.child(table);
	var tr = $.child(thead);
	var th = $.child(tr);
	var text_1 = $.child(th, true);
	$.reset(th);
	var th_1 = $.sibling(th);
	var text_2 = $.child(th_1, true);
	$.reset(th_1);
	var th_2 = $.sibling(th_1);
	var text_3 = $.child(th_2, true);
	$.reset(th_2);
	var th_3 = $.sibling(th_2);
	var text_4 = $.child(th_3, true);
	$.reset(th_3);
	$.reset(tr);
	$.reset(thead);
	var tbody = $.sibling(thead);
	$.each(tbody, 5, () => results, (r) => r.lib, ($$anchor, r) => {
		var tr_1 = root_1();
		var td = $.child(tr_1);
		var text_5 = $.child(td, true);
		$.reset(td);
		var td_1 = $.sibling(td);
		var text_6 = $.child(td_1, true);
		$.reset(td_1);
		var td_2 = $.sibling(td_1);
		var text_7 = $.child(td_2, true);
		$.reset(td_2);
		var td_3 = $.sibling(td_2);
		var text_8 = $.child(td_3, true);
		$.reset(td_3);
		$.reset(tr_1);
		$.template_effect(() => {
			$.set_text(text_5, $.get(r).lib);
			$.set_text(text_6, $.get(r).size);
			$.set_text(text_7, $.get(r).time);
			$.set_text(text_8, $.get(r).lazy);
		});
		$.append($$anchor, tr_1);
	});
	$.reset(tbody);
	$.reset(table);
	$.reset(div);
	$.reset(section);
	$.template_effect(() => {
		$.set_text(text, $content().title);
		$.set_text(text_1, $content().columns.library);
		$.set_text(text_2, $content().columns.bundleSize);
		$.set_text(text_3, $content().columns.lookupTime);
		$.set_text(text_4, $content().columns.lazyLoading);
	});
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { ResultsTable as default };
var en_default = {
	key: "results-table",
	content: {
		"title": "Sample Results",
		"columns": {
			"library": "Library",
			"bundleSize": "Bundle Size",
			"lookupTime": "Lookup Time",
			"lazyLoading": "Lazy Loading"
		},
		"yes1": "Yes",
		"manual": "Manual",
		"yes": "Yes"
	}
};
export { en_default as default };

import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var content = {
	"de": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/de.json").then((m) => m.default),
	"en": () => import("./en-zWIWgraf.js").then((m) => m.default),
	"es": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/es.json").then((m) => m.default),
	"fr": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/fr.json").then((m) => m.default),
	"it": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/it.json").then((m) => m.default),
	"ja": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ja.json").then((m) => m.default),
	"ko": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ko.json").then((m) => m.default),
	"pt": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/pt.json").then((m) => m.default),
	"ru": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ru.json").then((m) => m.default),
	"zh": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/zh.json").then((m) => m.default)
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
var root_2 = $.from_html(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class="text-primary">✓</span> </li>`);
var root_1 = $.from_html(`<div><h3 class="text-lg font-semibold text-foreground"> </h3> <div class="my-4"><span class="text-3xl font-bold text-foreground"> </span> <span class="text-sm text-muted-foreground"> </span></div> <ul class="mb-6 flex-1 space-y-2"></ul> <button type="button"> </button></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-3"></div>`);
function PricingTiers($$anchor, $$props) {
	$.push($$props, false);
	const content$1 = useDictionaryDynamic(content, "pricing-tiers");
	const tiers = [
		{
			name: get(content$1).starter,
			price: "$0",
			period: "forever",
			features: [
				get(content$1).x5BenchmarkRunsday,
				"3 libraries",
				get(content$1).communitySupport,
				get(content$1).publicResults
			]
		},
		{
			name: get(content$1).pro,
			price: "$29",
			period: "/month",
			features: [
				get(content$1).unlimitedRuns,
				get(content$1).allLibraries,
				get(content$1).prioritySupport,
				get(content$1).privateResults,
				get(content$1).ciIntegration,
				get(content$1).historicalData
			],
			highlighted: true
		},
		{
			name: get(content$1).enterprise,
			price: get(content$1).custom,
			period: "",
			features: [
				get(content$1).everythingInPro,
				get(content$1).onPremiseOption,
				get(content$1).ssoSaml,
				get(content$1).dedicatedAccountManager,
				get(content$1).customSlas,
				get(content$1).auditLogs,
				get(content$1).trainingSessions
			]
		}
	];
	$.init();
	var div = root();
	$.each(div, 5, () => tiers, (t) => t.name, ($$anchor, t) => {
		var div_1 = root_1();
		var h3 = $.child(div_1);
		var text = $.child(h3, true);
		$.reset(h3);
		var div_2 = $.sibling(h3, 2);
		var span = $.child(div_2);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(div_2);
		var ul = $.sibling(div_2, 2);
		$.each(ul, 5, () => $.get(t).features, (f) => f, ($$anchor, f) => {
			var li = root_2();
			var text_3 = $.sibling($.child(li));
			$.reset(li);
			$.template_effect(() => $.set_text(text_3, ` ${$.get(f) ?? ""}`));
			$.append($$anchor, li);
		});
		$.reset(ul);
		var button = $.sibling(ul, 2);
		var text_4 = $.child(button, true);
		$.reset(button);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_class(div_1, 1, `flex flex-col rounded-lg border p-6 ${$.get(t).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`);
			$.set_text(text, $.get(t).name);
			$.set_text(text_1, $.get(t).price);
			$.set_text(text_2, $.get(t).period);
			$.set_class(button, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${$.get(t).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`);
			$.set_text(text_4, $.get(t).name === "Enterprise" ? "Contact Sales" : "Get Started");
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
}
export { PricingTiers as default };
var en_default = {
	key: "pricing-tiers",
	content: {
		"trainingSessions": "Training sessions",
		"auditLogs": "Audit logs",
		"customSlas": "Custom SLAs",
		"dedicatedAccountManager": "Dedicated account manager",
		"ssoSaml": "SSO & SAML",
		"onPremiseOption": "On-premise option",
		"everythingInPro": "Everything in Pro",
		"custom": "Custom",
		"enterprise": "Enterprise",
		"historicalData": "Historical data",
		"ciIntegration": "CI integration",
		"privateResults": "Private results",
		"prioritySupport": "Priority support",
		"allLibraries": "All libraries",
		"unlimitedRuns": "Unlimited runs",
		"pro": "Pro",
		"publicResults": "Public results",
		"communitySupport": "Community support",
		"x5BenchmarkRunsday": "5 benchmark runs/day",
		"starter": "Starter"
	}
};
export { en_default as default };

import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var content = {
	"de": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/de.json").then((m) => m.default),
	"en": () => import("./en-ODRLqhlq.js").then((m) => m.default),
	"es": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/es.json").then((m) => m.default),
	"fr": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/fr.json").then((m) => m.default),
	"it": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/it.json").then((m) => m.default),
	"ja": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ja.json").then((m) => m.default),
	"ko": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ko.json").then((m) => m.default),
	"pt": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/pt.json").then((m) => m.default),
	"ru": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ru.json").then((m) => m.default),
	"zh": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/zh.json").then((m) => m.default)
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
var root = $.from_html(`<form class="space-y-6"><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input type="email" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none" placeholder="you@example.com"/></div></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <textarea class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"></textarea></div> <button type="submit" class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></form>`);
function ContactForm($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content$1 = useDictionaryDynamic(content, "contact-form");
	const nameId = "contact-name";
	const emailId = "contact-email";
	const topicId = "contact-topic";
	const messageId = "contact-message";
	$.init();
	var form = root();
	var div = $.child(form);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	$.set_attribute(label, "for", nameId);
	var text = $.child(label, true);
	$.reset(label);
	var input = $.sibling(label, 2);
	$.set_attribute(input, "id", nameId);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	$.set_attribute(label_1, "for", emailId);
	var text_1 = $.child(label_1, true);
	$.reset(label_1);
	var input_1 = $.sibling(label_1, 2);
	$.set_attribute(input_1, "id", emailId);
	$.reset(div_2);
	$.reset(div);
	var div_3 = $.sibling(div, 2);
	var label_2 = $.child(div_3);
	$.set_attribute(label_2, "for", topicId);
	var text_2 = $.child(label_2, true);
	$.reset(label_2);
	var select = $.sibling(label_2, 2);
	$.set_attribute(select, "id", topicId);
	var option = $.child(select);
	var text_3 = $.child(option, true);
	$.reset(option);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_4 = $.child(option_1, true);
	$.reset(option_1);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_5 = $.child(option_2, true);
	$.reset(option_2);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_6 = $.child(option_3, true);
	$.reset(option_3);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_7 = $.child(option_4, true);
	$.reset(option_4);
	var option_4_value = {};
	$.reset(select);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var label_3 = $.child(div_4);
	$.set_attribute(label_3, "for", messageId);
	var text_8 = $.child(label_3, true);
	$.reset(label_3);
	var textarea = $.sibling(label_3, 2);
	$.set_attribute(textarea, "id", messageId);
	$.set_attribute(textarea, "rows", 5);
	$.reset(div_4);
	var button = $.sibling(div_4, 2);
	var text_9 = $.child(button, true);
	$.reset(button);
	$.reset(form);
	$.template_effect(() => {
		$.set_text(text, $content().name);
		$.set_attribute(input, "placeholder", $content().yourName);
		$.set_text(text_1, $content().email);
		$.set_text(text_2, $content().topic);
		$.set_text(text_3, $content().bugReport);
		if (option_value !== (option_value = $content().bugReport)) option.__value = $content().bugReport;
		$.set_text(text_4, $content().newBenchmarkIdea);
		if (option_1_value !== (option_1_value = $content().newBenchmarkIdea)) option_1.__value = $content().newBenchmarkIdea;
		$.set_text(text_5, $content().methodologyQuestion);
		if (option_2_value !== (option_2_value = $content().methodologyQuestion)) option_2.__value = $content().methodologyQuestion;
		$.set_text(text_6, $content().contribution);
		if (option_3_value !== (option_3_value = $content().contribution)) option_3.__value = $content().contribution;
		$.set_text(text_7, $content().other);
		if (option_4_value !== (option_4_value = $content().other)) option_4.__value = $content().other;
		$.set_text(text_8, $content().message);
		$.set_attribute(textarea, "placeholder", $content().describeYourQuestionOrIdea);
		$.set_text(text_9, $content().sendMessage);
	});
	$.append($$anchor, form);
	$.pop();
	$$cleanup();
}
export { ContactForm as default };
var en_default = {
	key: "contact-form",
	content: {
		"sendMessage": "Send Message",
		"describeYourQuestionOrIdea": "Describe your question or idea...",
		"message": "Message",
		"other": "Other",
		"contribution": "Contribution",
		"methodologyQuestion": "Methodology Question",
		"newBenchmarkIdea": "New Benchmark Idea",
		"bugReport": "Bug Report",
		"topic": "Topic",
		"email": "Email",
		"yourName": "Your name",
		"name": "Name"
	}
};
export { en_default as default };

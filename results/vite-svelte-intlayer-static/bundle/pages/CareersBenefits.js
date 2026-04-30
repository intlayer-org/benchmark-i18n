import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var careers_benefits_default = {
	key: "careers-benefits",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"x20TimeForOssContributions": "20% time for OSS contributions",
				"openSourceTime": "Open source time",
				"topOfMarketCompensation": "Top-of-market compensation",
				"competitivePay": "Competitive pay",
				"workFromAnywhereInThe": "Work from anywhere in the world"
			},
			"fr": {
				"x20TimeForOssContributions": "20 % du temps pour les contributions OSS",
				"openSourceTime": "Temps open source",
				"topOfMarketCompensation": "Rémunération au sommet du marché",
				"competitivePay": "Salaire compétitif",
				"workFromAnywhereInThe": "Travaillez de n'importe où dans le monde"
			},
			"es": {
				"x20TimeForOssContributions": "20% de tiempo para contribuciones de OSS",
				"openSourceTime": "Tiempo de código abierto",
				"topOfMarketCompensation": "Compensación superior al mercado",
				"competitivePay": "Salario competitivo",
				"workFromAnywhereInThe": "Trabaje desde cualquier lugar del mundo"
			},
			"de": {
				"x20TimeForOssContributions": "20 % Zeit für OSS-Beiträge",
				"openSourceTime": "Open-Source-Zeit",
				"topOfMarketCompensation": "Marktgerechte Vergütung",
				"competitivePay": "Wettbewerbsfähige Bezahlung",
				"workFromAnywhereInThe": "Arbeiten Sie von überall auf der Welt"
			},
			"it": {
				"x20TimeForOssContributions": "20% del tempo per i contributi OSS",
				"openSourceTime": "Tempo open source",
				"topOfMarketCompensation": "Compenso ai vertici del mercato",
				"competitivePay": "Retribuzione competitiva",
				"workFromAnywhereInThe": "Lavora da qualsiasi parte del mondo"
			},
			"pt": {
				"x20TimeForOssContributions": "20% do tempo para contribuições OSS",
				"openSourceTime": "Tempo de código aberto",
				"topOfMarketCompensation": "Remuneração acima do mercado",
				"competitivePay": "Salário competitivo",
				"workFromAnywhereInThe": "Trabalhe de qualquer lugar do mundo"
			},
			"zh": {
				"x20TimeForOssContributions": "20% 的时间用于 OSS 贡献",
				"openSourceTime": "开源时间",
				"topOfMarketCompensation": "市场顶尖的薪酬",
				"competitivePay": "具有竞争力的薪酬",
				"workFromAnywhereInThe": "在全球任何地方工作"
			},
			"ja": {
				"x20TimeForOssContributions": "OSS への貢献のための 20% の時間",
				"openSourceTime": "オープンソースの時間",
				"topOfMarketCompensation": "市場トップレベルの報酬",
				"competitivePay": "競争力のある給与",
				"workFromAnywhereInThe": "世界中のどこからでも仕事ができます"
			},
			"ko": {
				"x20TimeForOssContributions": "OSS 기여를 위한 20%의 시간",
				"openSourceTime": "오픈 소스 시간",
				"topOfMarketCompensation": "업계 최고 수준의 보상",
				"competitivePay": "경쟁력 있는 급여",
				"workFromAnywhereInThe": "전 세계 어디서나 근무 가능"
			},
			"ru": {
				"x20TimeForOssContributions": "20% времени на вклад в OSS",
				"openSourceTime": "Время на open source",
				"topOfMarketCompensation": "Компенсация выше рыночной",
				"competitivePay": "Конкурентоспособная зарплата",
				"workFromAnywhereInThe": "Работайте из любой точки мира"
			}
		}
	},
	localIds: ["careers-benefits::local::src/components/pages/careers/careersBenefits.content.ts"]
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
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
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
var intlayerNodePlugins = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false" ? fallbackPlugin : {
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
var useDictionary = (dictionary, locale) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		return getDictionary(dictionary, locale ?? context?.locale ?? $store.locale);
	});
};
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-4 text-center"><p class="text-sm font-semibold text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="mb-12 grid gap-4 md:grid-cols-3"></div>`);
function CareersBenefits($$anchor, $$props) {
	$.push($$props, false);
	const content = useDictionary(careers_benefits_default);
	const benefits = [
		{
			label: "Remote-first",
			value: get(content).workFromAnywhereInThe
		},
		{
			label: get(content).competitivePay,
			value: get(content).topOfMarketCompensation
		},
		{
			label: get(content).openSourceTime,
			value: get(content).x20TimeForOssContributions
		}
	];
	$.init();
	var div = root();
	$.each(div, 5, () => benefits, (b) => b.label, ($$anchor, b) => {
		var div_1 = root_1();
		var p = $.child(div_1);
		var text = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_1 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(b).label);
			$.set_text(text_1, $.get(b).value);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
}
export { CareersBenefits as default };

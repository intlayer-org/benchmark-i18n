import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var content$1 = {
	"de": () => import("./de-CI6Hh0NK.js").then((m) => m.default),
	"en": () => import("./en-BadW0BUi.js").then((m) => m.default),
	"es": () => import("./es-CeJLKIkW.js").then((m) => m.default),
	"fr": () => import("./fr-DZLaLAH-.js").then((m) => m.default),
	"it": () => import("./it-Dtwt6uih.js").then((m) => m.default),
	"ja": () => import("./ja-BJpzZ26o.js").then((m) => m.default),
	"ko": () => import("./ko-CvCt88hk.js").then((m) => m.default),
	"pt": () => import("./pt-DCHDmsjJ.js").then((m) => m.default),
	"ru": () => import("./ru-Cx0itjd7.js").then((m) => m.default),
	"zh": () => import("./zh-DiY81UXm.js").then((m) => m.default)
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
var content = {
	"de": () => import("./de-CZloO0fb.js").then((m) => m.default),
	"en": () => import("./en-D4ldyfsM.js").then((m) => m.default),
	"es": () => import("./es-C9SlJ5sh.js").then((m) => m.default),
	"fr": () => import("./fr-D5JxLk-0.js").then((m) => m.default),
	"it": () => import("./it-yUi1Wzrh.js").then((m) => m.default),
	"ja": () => import("./ja-Cet5H0BX.js").then((m) => m.default),
	"ko": () => import("./ko-DQQG9eqC.js").then((m) => m.default),
	"pt": () => import("./pt-BE_-JGzS.js").then((m) => m.default),
	"ru": () => import("./ru-Bk-dFI6f.js").then((m) => m.default),
	"zh": () => import("./zh-CuaDcH8L.js").then((m) => m.default)
};
var root$1 = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground"> </div>`);
function MockBanner($$anchor, $$props) {
	$.push($$props, false);
	const $banner = () => $.store_get(banner, "$banner", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const banner = useDictionaryDynamic(content, "mock-banner");
	$.init();
	var div = root$1();
	var text = $.child(div, true);
	$.reset(div);
	$.template_effect(() => $.set_text(text, $banner().message));
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
var root = $.from_html(`<!> <h1 class="mb-2 text-3xl font-bold text-foreground"> </h1> <p class="mb-10 text-muted-foreground"> </p>`, 1);
function TeamHeader($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionaryDynamic(content$1, "team-header");
	$.init();
	var fragment = root();
	var node = $.first_child(fragment);
	MockBanner(node, {});
	var h1 = $.sibling(node, 2);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.template_effect(() => {
		$.set_text(text, $content().title);
		$.set_text(text_1, $content().description);
	});
	$.append($$anchor, fragment);
	$.pop();
	$$cleanup();
}
export { TeamHeader as default };
var de_default = {
	key: "team-header",
	content: {
		"title": "Unser Team",
		"description": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwickler-Tools vereint ist."
	}
};
export { de_default as default };
var de_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." }
};
export { de_default as default };
var en_default = {
	key: "team-header",
	content: {
		"title": "Our Team",
		"description": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	}
};
export { en_default as default };
var en_default = {
	key: "mock-banner",
	content: { "message": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }
};
export { en_default as default };
var es_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." }
};
export { es_default as default };
var es_default = {
	key: "team-header",
	content: {
		"title": "Nuestro Equipo",
		"description": "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas para desarrolladores."
	}
};
export { es_default as default };
var fr_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." }
};
export { fr_default as default };
var fr_default = {
	key: "team-header",
	content: {
		"title": "Notre Équipe",
		"description": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
	}
};
export { fr_default as default };
var it_default = {
	key: "team-header",
	content: {
		"title": "Il nostro team",
		"description": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti di sviluppo."
	}
};
export { it_default as default };
var it_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." }
};
export { it_default as default };
var ja_default = {
	key: "team-header",
	content: {
		"title": "私たちのチーム",
		"description": "i18n Benchmark の背後にいる人々を紹介します。優れた開発者ツールへの情熱を共有する多様なチームです。"
	}
};
export { ja_default as default };
var ja_default = {
	key: "mock-banner",
	content: { "message": "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" }
};
export { ja_default as default };
var ko_default = {
	key: "team-header",
	content: {
		"title": "우리 팀",
		"description": "i18n Benchmark의 주역들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
	}
};
export { ko_default as default };
var ko_default = {
	key: "mock-banner",
	content: { "message": "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." }
};
export { ko_default as default };
var pt_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Esta página contém données fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." }
};
export { pt_default as default };
var pt_default = {
	key: "team-header",
	content: {
		"title": "Nossa Equipe",
		"description": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
	}
};
export { pt_default as default };
var ru_default = {
	key: "mock-banner",
	content: { "message": "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
};
export { ru_default as default };
var ru_default = {
	key: "team-header",
	content: {
		"title": "Наша команда",
		"description": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к созданию отличных инструментов для разработчиков."
	}
};
export { ru_default as default };
var zh_default = {
	key: "mock-banner",
	content: { "message": "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。" }
};
export { zh_default as default };
var zh_default = {
	key: "team-header",
	content: {
		"title": "我们的团队",
		"description": "结识 i18n Benchmark 背后的团队。一支多元化的团队，因对出色开发工具的共同热情而团结在一起。"
	}
};
export { zh_default as default };

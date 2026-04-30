import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext, setContext } from "svelte";
import { derived, writable } from "svelte/store";
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"home": "Home",
				"methodology": "Methodology",
				"mockPages": "Mock Pages",
				"products": "Products",
				"pricing": "Pricing",
				"team": "Team",
				"blog": "Blog",
				"careers": "Careers",
				"faq": "FAQ",
				"contact": "Contact",
				"settings": "Settings",
				"appName": "i18n Bench",
				"goToGithub": "Go to GitHub",
				"header": "Header"
			},
			"fr": {
				"home": "Accueil",
				"methodology": "Méthodologie",
				"mockPages": "Pages fictives",
				"products": "Produits",
				"pricing": "Tarification",
				"team": "Équipe",
				"blog": "Blog",
				"careers": "Carrières",
				"faq": "FAQ",
				"contact": "Contact",
				"settings": "Paramètres",
				"appName": "Benchmark i18n",
				"goToGithub": "Aller sur GitHub",
				"header": "En-tête"
			},
			"es": {
				"home": "Inicio",
				"methodology": "Metodología",
				"mockPages": "Páginas de prueba",
				"products": "Productos",
				"pricing": "Precios",
				"team": "Equipo",
				"blog": "Blog",
				"careers": "Carreras",
				"faq": "FAQ",
				"contact": "Contacto",
				"settings": "Ajustes",
				"appName": "i18n Bench",
				"goToGithub": "Ir a GitHub",
				"header": "Encabezado"
			},
			"de": {
				"home": "Startseite",
				"methodology": "Methodik",
				"mockPages": "Mock-Seiten",
				"products": "Produkte",
				"pricing": "Preise",
				"team": "Team",
				"blog": "Blog",
				"careers": "Karriere",
				"faq": "FAQ",
				"contact": "Kontakt",
				"settings": "Einstellungen",
				"appName": "i18n Bench",
				"goToGithub": "Zu GitHub gehen",
				"header": "Header"
			},
			"it": {
				"home": "Home",
				"methodology": "Metodologia",
				"mockPages": "Pagine mock",
				"products": "Prodotti",
				"pricing": "Prezzi",
				"team": "Team",
				"blog": "Blog",
				"careers": "Carriere",
				"faq": "FAQ",
				"contact": "Contatti",
				"settings": "Impostazioni",
				"appName": "i18n Bench",
				"goToGithub": "Vai su GitHub",
				"header": "Intestazione"
			},
			"pt": {
				"home": "Início",
				"methodology": "Metodologia",
				"mockPages": "Páginas fictícias",
				"products": "Produtos",
				"pricing": "Preços",
				"team": "Equipe",
				"blog": "Blog",
				"careers": "Carreiras",
				"faq": "FAQ",
				"contact": "Contato",
				"settings": "Configurações",
				"appName": "i18n Bench",
				"goToGithub": "Ir para o GitHub",
				"header": "Cabeçalho"
			},
			"zh": {
				"home": "首页",
				"methodology": "方法论",
				"mockPages": "模拟页面",
				"products": "产品",
				"pricing": "价格",
				"team": "团队",
				"blog": "博客",
				"careers": "职业生涯",
				"faq": "常见问题",
				"contact": "联系我们",
				"settings": "设置",
				"appName": "i18n 基准",
				"goToGithub": "前往 GitHub",
				"header": "页眉"
			},
			"ja": {
				"home": "ホーム",
				"methodology": "方法論",
				"mockPages": "モックページ",
				"products": "製品",
				"pricing": "価格",
				"team": "チーム",
				"blog": "ブログ",
				"careers": "採用情報",
				"faq": "よくある質問",
				"contact": "お問い合わせ",
				"settings": "設定",
				"appName": "i18n ベンチ",
				"goToGithub": "GitHub へ",
				"header": "ヘッダー"
			},
			"ko": {
				"home": "홈",
				"methodology": "방법론",
				"mockPages": "모의 페이지",
				"products": "제품",
				"pricing": "가격",
				"team": "팀",
				"blog": "블로그",
				"careers": "채용",
				"faq": "FAQ",
				"contact": "연락처",
				"settings": "설정",
				"appName": "i18n 벤치",
				"goToGithub": "GitHub로 이동",
				"header": "헤더"
			},
			"ru": {
				"home": "Главная",
				"methodology": "Методология",
				"mockPages": "Мок-страницы",
				"products": "Продукты",
				"pricing": "Цены",
				"team": "Команда",
				"blog": "Блог",
				"careers": "Вакансии",
				"faq": "FAQ",
				"contact": "Контакты",
				"settings": "Настройки",
				"appName": "i18n Бенч",
				"goToGithub": "Перейти на GitHub",
				"header": "Шапка"
			}
		}
	},
	localIds: ["header::local::src/components/Header.content.ts"]
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
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var setIntlayerContext = (context) => {
	setContext(INTLAYER_CONTEXT_KEY, context);
};
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
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
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var useEditor = () => {};
var setupIntlayer = (initialLocale) => {
	setIntlayerIdentifier();
	useEditor();
	let locale = $.state($.proxy(initialLocale));
	if (initialLocale) intlayerStore.setLocale(initialLocale);
	const contextValue = {
		get locale() {
			return $.get(locale) ?? internationalization.defaultLocale;
		},
		setLocale: (newLocale) => {
			$.set(locale, newLocale, true);
			intlayerStore.setLocale(newLocale);
		}
	};
	setIntlayerContext(contextValue);
	return contextValue;
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
function EmptyComponent($$anchor, $$props) {
	$.push($$props, false);
	setupIntlayer("en");
	useDictionary(header_default);
	$.init();
	$.pop();
}
export { EmptyComponent as default };

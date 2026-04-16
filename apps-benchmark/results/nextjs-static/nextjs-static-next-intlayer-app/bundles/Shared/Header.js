import { Fragment, Profiler, createContext, createElement, isValidElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { usePathname, useRouter } from "next/navigation.js";
import NextLink from "next/link";
import { ChevronDown } from "lucide-react";
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"f": "Home",
				"h": "Methodology",
				"i": "Mock Pages",
				"k": "Products",
				"j": "Pricing",
				"m": "Team",
				"a": "Blog",
				"b": "Careers",
				"d": "FAQ",
				"c": "Contact",
				"l": "Settings",
				"e": "Go to GitHub",
				"header": "Header",
				"g": "i18n Bench"
			},
			"fr": {
				"f": "Accueil",
				"h": "Méthodologie",
				"i": "Pages de Test",
				"k": "Produits",
				"j": "Tarification",
				"m": "Équipe",
				"a": "Blog",
				"b": "Carrières",
				"d": "FAQ",
				"c": "Contact",
				"l": "Paramètres",
				"e": "Aller sur GitHub",
				"header": "En-tête",
				"g": "Bench i18n"
			},
			"es": {
				"f": "Inicio",
				"h": "Metodología",
				"i": "Páginas de Prueba",
				"k": "Productos",
				"j": "Precios",
				"m": "Equipo",
				"a": "Blog",
				"b": "Carreras",
				"d": "FAQ",
				"c": "Contacto",
				"l": "Ajustes",
				"e": "Ir a GitHub",
				"header": "Cabecera",
				"g": "Bench i18n"
			},
			"de": {
				"f": "Startseite",
				"h": "Methodik",
				"i": "Testseiten",
				"k": "Produkte",
				"j": "Preise",
				"m": "Team",
				"a": "Blog",
				"b": "Karriere",
				"d": "FAQ",
				"c": "Kontakt",
				"l": "Einstellungen",
				"e": "Zu GitHub gehen",
				"header": "Header",
				"g": "i18n Bench"
			},
			"it": {
				"f": "Home",
				"h": "Metodologia",
				"i": "Pagine di test",
				"k": "Prodotti",
				"j": "Prezzi",
				"m": "Team",
				"a": "Blog",
				"b": "Carriere",
				"d": "FAQ",
				"c": "Contatti",
				"l": "Impostazioni",
				"e": "Vai su GitHub",
				"header": "Intestazione",
				"g": "Bench i18n"
			},
			"pt": {
				"f": "Início",
				"h": "Metodologia",
				"i": "Páginas de teste",
				"k": "Produtos",
				"j": "Preços",
				"m": "Equipe",
				"a": "Blog",
				"b": "Carreiras",
				"d": "FAQ",
				"c": "Contato",
				"l": "Configurações",
				"e": "Ir para GitHub",
				"header": "Cabeçalho",
				"g": "Bench i18n"
			},
			"zh": {
				"f": "首页",
				"h": "方法学",
				"i": "模拟页面",
				"k": "产品",
				"j": "价格",
				"m": "团队",
				"a": "博客",
				"b": "职业",
				"d": "常见问题",
				"c": "联系我们",
				"l": "设置",
				"e": "前往 GitHub",
				"header": "页眉",
				"g": "i18n 基准"
			},
			"ja": {
				"f": "ホーム",
				"h": "方法論",
				"i": "モックページ",
				"k": "製品",
				"j": "価格",
				"m": "チーム",
				"a": "ブログ",
				"b": "採用情報",
				"d": "よくある質問",
				"c": "お問い合わせ",
				"l": "設定",
				"e": "GitHubへ移動",
				"header": "ヘッダー",
				"g": "i18n ベンチ"
			},
			"ko": {
				"f": "홈",
				"h": "방법론",
				"i": "모의 페이지",
				"k": "제품",
				"j": "가격",
				"m": "팀",
				"a": "블로그",
				"b": "채용",
				"d": "자주 묻는 질문",
				"c": "연락처",
				"l": "설정",
				"e": "GitHub으로 이동",
				"header": "헤더",
				"g": "i18n 벤치"
			},
			"ru": {
				"f": "Главная",
				"h": "Методология",
				"i": "Тестовые страницы",
				"k": "Продукты",
				"j": "Цены",
				"m": "Команда",
				"a": "Блог",
				"b": "Карьера",
				"d": "FAQ",
				"c": "Контакт",
				"l": "Настройки",
				"e": "Перейти на GitHub",
				"header": "Шапка",
				"g": "i18n Бенчмарк"
			}
		}
	}
};
//#endregion
//#region .intlayer/config/configuration.mjs
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
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var configuration = {
	internationalization,
	routing,
	editor: {
		"applicationURL": "http://localhost:3000",
		"editorURL": "http://localhost:8000",
		"cmsURL": "https://app.intlayer.org",
		"backendURL": "https://back.intlayer.org",
		"port": 8e3,
		"enabled": false,
		"dictionaryPriorityStrategy": "local_first",
		"liveSync": true,
		"liveSyncPort": 4e3,
		"liveSyncURL": "http://localhost:4000"
	},
	log: {
		"mode": "default",
		"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
	}
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/IntlayerNode.mjs
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && Object.keys(additionalProps).includes(prop)) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/reactElement/renderReactElement.mjs
var renderReactElement = (element) => {
	if (element === null || typeof element !== "object") return element;
	const convertChildrenAsArray = (element) => {
		const children = element.props?.children;
		if (Array.isArray(children)) {
			const childrenResult = children.map((child, index) => {
				const renderedChild = renderReactElement(child);
				if (typeof renderedChild === "object" && renderedChild !== null && "type" in renderedChild) {
					const childElement = renderedChild;
					return createElement(childElement.type, {
						...childElement.props,
						key: index
					}, ...Array.isArray(childElement.props?.children) ? childElement.props.children : typeof childElement.props?.children !== "undefined" ? [childElement.props.children] : []);
				}
				return renderedChild;
			});
			return {
				...element,
				props: {
					...element.props,
					children: childrenResult
				}
			};
		} else if (typeof children !== "undefined" && children !== null) {
			const renderedChild = renderReactElement(children);
			return {
				...element,
				props: {
					...element.props,
					children: [renderedChild]
				}
			};
		}
		return {
			...element,
			props: {
				...element.props,
				children: []
			}
		};
	};
	const { type, props } = convertChildrenAsArray(element);
	return createElement(type ?? "span", props, ...props.children);
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+types@8.7.1-canary-1/node_modules/@intlayer/types/dist/esm/nodeType.mjs
var TRANSLATION = "translation";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/deepTransform.mjs
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		result[key] = deepTransformNode(node[key], childProps);
	}
	return result;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getInsertion.mjs
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getTranslation.mjs
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
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/plugins.mjs
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const result = { ...node["translation"] ?? {} };
		for (const key in result) {
			const childProps = {
				...props,
				children: result[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(result[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/getContent.mjs
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
].filter(Boolean);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getDictionary.mjs
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/splitAndJoinInsertion.mjs
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/plugins.mjs
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var getPlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	intlayerNodePlugins,
	reactNodePlugins,
	insertionPlugin,
	markdownPlugin,
	htmlPlugin
].filter(Boolean);
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/getDictionary.mjs
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/checkIsURLAbsolute.mjs
var checkIsURLAbsolute = (url) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getPathWithoutLocale.mjs
var getPathWithoutLocale = (inputUrl, locales = internationalization?.locales) => {
	const isAbsoluteUrl = checkIsURLAbsolute(inputUrl);
	let fixedInputUrl = inputUrl;
	if (inputUrl?.endsWith("/")) fixedInputUrl = inputUrl.slice(0, -1);
	const url = isAbsoluteUrl ? new URL(fixedInputUrl) : new URL(fixedInputUrl, "http://example.com");
	const pathname = url.pathname;
	if (!pathname.startsWith("/")) url.pathname = `/${pathname}`;
	{
		const pathSegments = pathname.split("/");
		const firstSegment = pathSegments[1];
		if (locales?.includes(firstSegment)) {
			pathSegments.splice(1, 1);
			url.pathname = pathSegments.join("/") ?? "/";
		}
	}
	if (isAbsoluteUrl) return url.toString();
	return url.toString().replace("http://example.com", "");
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+config@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/config/dist/esm/defaultValues/internationalization.mjs
var LOCALES = ["en"];
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getPrefix.mjs
var resolveRoutingConfig = (options = {}) => ({
	defaultLocale: internationalization?.defaultLocale ?? "en",
	mode: routing?.mode ?? "prefix-no-default",
	locales: internationalization?.locales ?? LOCALES,
	rewrite: routing?.rewrite,
	domains: routing?.domains,
	...options
});
var getPrefix = (locale, options = {}) => {
	const { defaultLocale, mode, locales, domains } = resolveRoutingConfig(options);
	if (!locale || !locales.includes(locale)) return {
		prefix: "",
		localePrefix: void 0
	};
	if (mode === "prefix-all" || mode === "prefix-no-default" && defaultLocale !== locale) return {
		prefix: `${locale}/`,
		localePrefix: locale
	};
	return {
		prefix: "",
		localePrefix: void 0
	};
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/rewriteUtils.mjs
var getRewriteRules = (rewrite, context = "url") => {};
var getCanonicalPath = (localizedPath, locale, rewriteRules) => {
	return localizedPath;
};
var getLocalizedPath = (canonicalPath, locale, rewriteRules) => {
	return {
		path: canonicalPath,
		isRewritten: false
	};
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getLocalizedUrl.mjs
var getLocalizedUrl = (url, currentLocale = internationalization?.defaultLocale, options = {}) => {
	const { defaultLocale, mode, locales, rewrite, domains, currentDomain } = resolveRoutingConfig(options);
	const urlWithoutLocale = getPathWithoutLocale(url, locales);
	const rewriteRules = getRewriteRules(rewrite, "url");
	const isAbsoluteUrl = checkIsURLAbsolute(urlWithoutLocale);
	const parsedUrl = isAbsoluteUrl ? new URL(urlWithoutLocale) : new URL(urlWithoutLocale, "http://example.com");
	const translatedPathname = getLocalizedPath(getCanonicalPath(parsedUrl.pathname, void 0, rewriteRules), currentLocale, rewriteRules).path;
	const baseUrl = isAbsoluteUrl ? `${parsedUrl.protocol}//${parsedUrl.host}` : "";
	const { prefix } = getPrefix(currentLocale, {
		defaultLocale,
		mode,
		locales,
		domains
	});
	let localizedPath = `/${prefix}${translatedPathname}`.replace(/\/+/g, "/");
	if (localizedPath.length > 1 && localizedPath.endsWith("/")) localizedPath = localizedPath.slice(0, -1);
	return `${baseUrl}${localizedPath}${parsedUrl.search}${parsedUrl.hash}`;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/localeResolver.mjs
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/editor/useEditor.mjs
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/editor/EditorProvider.mjs
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+config@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/config/dist/esm/utils/setIntlayerIdentifier.mjs
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [jsx(EditorProvider, {}), children]
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useDictionary.mjs
var useDictionary = (dictionary, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => {
		return getDictionary(dictionary, locale ?? currentLocale);
	}, [
		dictionary.key,
		currentLocale,
		locale
	]);
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocale.mjs
var useLocale$1 = ({ isCookieEnabled, onLocaleChange } = {}) => {
	const { defaultLocale, locales: availableLocales } = internationalization ?? {};
	const { locale, setLocale: setLocaleState, isCookieEnabled: isCookieEnabledContext } = useContext(IntlayerClientContext) ?? {};
	return {
		locale,
		defaultLocale,
		availableLocales,
		setLocale: useCallback((locale) => {
			if (!availableLocales?.map(String).includes(locale)) {
				console.error(`Locale ${locale} is not available`);
				return;
			}
			setLocaleState(locale);
			setLocaleInStorage(locale, isCookieEnabled ?? isCookieEnabledContext ?? true);
			onLocaleChange?.(locale);
		}, [
			availableLocales,
			onLocaleChange,
			setLocaleState,
			isCookieEnabled
		])
	};
};
//#endregion
//#region ../../../node_modules/.bun/next-intlayer@8.7.1-canary-1+c0daa947c99913c1/node_modules/next-intlayer/dist/esm/client/IntlayerClientProvider.mjs
var IntlayerClientProvider = (props) => jsx(IntlayerProvider, { ...props });
//#endregion
//#region ../../../node_modules/.bun/next-intlayer@8.7.1-canary-1+c0daa947c99913c1/node_modules/next-intlayer/dist/esm/client/useLocale.mjs
var usePathWithoutLocale = () => {
	const pathname = usePathname();
	const [fullPath, setFullPath] = useState(pathname);
	useEffect(() => {
		const search = typeof window !== "undefined" ? window.location.search : "";
		setFullPath(search ? `${pathname}${search}` : pathname);
	}, [pathname]);
	return useMemo(() => getPathWithoutLocale(fullPath), [fullPath]);
};
var useLocale = ({ onChange = "replace" } = {}) => {
	const { replace, push } = useRouter();
	const pathWithoutLocale = usePathWithoutLocale();
	return {
		...useLocale$1({ onLocaleChange: useCallback((locale) => {
			if (!onChange) return;
			const pathWithLocale = getLocalizedUrl(pathWithoutLocale, locale, { currentDomain: void 0 });
			if (typeof onChange === "function") {
				onChange({
					locale,
					path: pathWithLocale
				});
				return;
			}
			if (onChange === "replace") replace(pathWithLocale);
			if (onChange === "push") push(pathWithLocale);
		}, [
			replace,
			push,
			pathWithoutLocale,
			onChange
		]) }),
		pathWithoutLocale
	};
};
//#endregion
//#region ../../../node_modules/.bun/intlayer@8.7.1-canary-1+022b49fd31533b73/node_modules/intlayer/dist/esm/index.mjs
var locales = configuration.internationalization.locales;
configuration.internationalization.requiredLocales;
configuration.internationalization.defaultLocale;
configuration.editor;
//#endregion
//#region src/components/Link.tsx
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const { locale } = useLocale();
	const isExternalLink = checkIsExternalLink(href.toString());
	return jsx(NextLink, {
		href: href && !isExternalLink ? getLocalizedUrl(href.toString(), locale) : href,
		...props,
		children
	});
};
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
				"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
				"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
				"a": "Theme: Auto",
				"themeDark": "Theme: Dark",
				"themeLight": "Theme: Light",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			"fr": {
				"themeModeAutoSystemClick": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				"themeModeLightClick": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				"themeModeDarkClick": "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				"a": "Thème : Auto",
				"themeDark": "Thème : Sombre",
				"themeLight": "Thème : Clair",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			"es": {
				"themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				"themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				"a": "Tema: Auto",
				"themeDark": "Tema: Oscuro",
				"themeLight": "Tema: Claro",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			"de": {
				"themeModeAutoSystemClick": "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				"themeModeLightClick": "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				"themeModeDarkClick": "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				"a": "Design: Auto",
				"themeDark": "Design: Dunkel",
				"themeLight": "Design: Hell",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			"it": {
				"themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				"themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				"themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				"a": "Tema: Auto",
				"themeDark": "Tema: Scuro",
				"themeLight": "Tema: Chiaro",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			"pt": {
				"themeModeAutoSystemClick": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro.",
				"themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				"a": "Tema: Auto",
				"themeDark": "Tema: Escuro",
				"themeLight": "Tema: Claro",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			"zh": {
				"themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
				"themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
				"themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
				"a": "主题：自动",
				"themeDark": "主题：深色",
				"themeLight": "主题：浅色",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "主题模式：{{mode}}。点击切换模式。"
				}
			},
			"ja": {
				"themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				"themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				"a": "テーマ：自動",
				"themeDark": "テーマ：ダーク",
				"themeLight": "テーマ：ライト",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			"ko": {
				"themeModeAutoSystemClick": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				"themeModeLightClick": "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				"themeModeDarkClick": "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				"a": "테마: 자동",
				"themeDark": "테마: 다크",
				"themeLight": "테마: 라이트",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			"ru": {
				"themeModeAutoSystemClick": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				"themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				"themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				"a": "Тема: Авто",
				"themeDark": "Тема: Темная",
				"themeLight": "Тема: Светлая",
				"themeModeModeClickTo": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Режим темы: {{mode}}. Нажмите, чтобы переключить режим."
				}
			}
		}
	}
};
//#endregion
//#region src/components/ThemeToggle.tsx
function ThemeToggle() {
	return jsx("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: useDictionary(theme_toggle_default).a.value
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function getLocaleName(locale) {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
}
function LocaleSwitcher() {
	const { locale, setLocale } = useLocale({ onChange: "push" });
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => setLocale(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeItem) => jsx("option", {
				value: localeItem,
				children: getLocaleName(localeItem)
			}, localeItem))
		})
	});
}
//#endregion
//#region src/components/Header.tsx
function Header() {
	const content = useDictionary(header_default);
	const mockPages = [
		{
			href: `/products`,
			label: content.k
		},
		{
			href: `/pricing`,
			label: content.j
		},
		{
			href: `/team`,
			label: content.m
		},
		{
			href: `/blog`,
			label: content.a
		},
		{
			href: `/careers`,
			label: content.b
		},
		{
			href: `/faq`,
			label: content.d
		},
		{
			href: `/contact`,
			label: content.c
		},
		{
			href: `/settings`,
			label: content.l
		}
	];
	return jsx("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: jsxs("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [jsxs("div", {
				className: "flex items-center gap-8",
				children: [jsx(Link, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: content.g
				}), jsxs("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						jsx(Link, {
							href: "/",
							className: "nav-link",
							children: content.f
						}),
						jsx(Link, {
							href: "/about",
							className: "nav-link",
							children: content.h
						}),
						jsxs("div", {
							className: "relative group",
							children: [jsxs("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								children: [content.i, jsx(ChevronDown, {
									size: 14,
									className: "transition-transform group-hover:rotate-180"
								})]
							}), jsx("div", {
								className: "absolute left-0 top-full pt-2 w-48 hidden group-hover:block",
								children: jsx("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => jsx(Link, {
										href: page.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										children: page.label
									}, page.href))
								})
							})]
						})
					]
				})]
			}), jsxs("div", {
				className: "flex items-center gap-4",
				children: [
					jsxs("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [jsx("span", {
							className: "sr-only",
							children: content.e
						}), jsx("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: jsx("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					jsx(LocaleSwitcher, {}),
					jsx(ThemeToggle, {})
				]
			})]
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children: jsx(IntlayerClientProvider, {
			locale,
			children
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
//#endregion
//#region src/components/Header.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Header, {}) });
}
//#endregion
export { Wrapped as default };

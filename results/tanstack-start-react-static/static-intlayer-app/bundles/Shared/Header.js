import { Fragment, createContext, createElement, isValidElement, lazy, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"g": "Home",
				"i": "Methodology",
				"j": "Mock Pages",
				"l": "Products",
				"k": "Pricing",
				"n": "Team",
				"a": "Blog",
				"b": "Careers",
				"d": "FAQ",
				"c": "Contact",
				"m": "Settings",
				"e": "Go to GitHub",
				"f": "Header",
				"h": "i18n Bench"
			},
			"fr": {
				"g": "Accueil",
				"i": "Méthodologie",
				"j": "Pages de Test",
				"l": "Produits",
				"k": "Tarification",
				"n": "Équipe",
				"a": "Blog",
				"b": "Carrières",
				"d": "FAQ",
				"c": "Contact",
				"m": "Paramètres",
				"e": "Aller sur GitHub",
				"f": "En-tête",
				"h": "Bench i18n"
			},
			"es": {
				"g": "Inicio",
				"i": "Metodología",
				"j": "Páginas de Prueba",
				"l": "Productos",
				"k": "Precios",
				"n": "Equipo",
				"a": "Blog",
				"b": "Carreras",
				"d": "FAQ",
				"c": "Contacto",
				"m": "Ajustes",
				"e": "Ir a GitHub",
				"f": "Cabecera",
				"h": "Bench i18n"
			},
			"de": {
				"g": "Startseite",
				"i": "Methodik",
				"j": "Testseiten",
				"l": "Produkte",
				"k": "Preise",
				"n": "Team",
				"a": "Blog",
				"b": "Karriere",
				"d": "FAQ",
				"c": "Kontakt",
				"m": "Einstellungen",
				"e": "Zu GitHub gehen",
				"f": "Header",
				"h": "i18n Bench"
			},
			"it": {
				"g": "Home",
				"i": "Metodologia",
				"j": "Pagine di test",
				"l": "Prodotti",
				"k": "Prezzi",
				"n": "Team",
				"a": "Blog",
				"b": "Carriere",
				"d": "FAQ",
				"c": "Contatti",
				"m": "Impostazioni",
				"e": "Vai su GitHub",
				"f": "Intestazione",
				"h": "Bench i18n"
			},
			"pt": {
				"g": "Início",
				"i": "Metodologia",
				"j": "Páginas de teste",
				"l": "Produtos",
				"k": "Preços",
				"n": "Equipe",
				"a": "Blog",
				"b": "Carreiras",
				"d": "FAQ",
				"c": "Contato",
				"m": "Configurações",
				"e": "Ir para GitHub",
				"f": "Cabeçalho",
				"h": "Bench i18n"
			},
			"zh": {
				"g": "首页",
				"i": "方法学",
				"j": "模拟页面",
				"l": "产品",
				"k": "价格",
				"n": "团队",
				"a": "博客",
				"b": "职业",
				"d": "常见问题",
				"c": "联系我们",
				"m": "设置",
				"e": "前往 GitHub",
				"f": "页眉",
				"h": "i18n 基准"
			},
			"ja": {
				"g": "ホーム",
				"i": "方法論",
				"j": "モックページ",
				"l": "製品",
				"k": "価格",
				"n": "チーム",
				"a": "ブログ",
				"b": "採用情報",
				"d": "よくある質問",
				"c": "お問い合わせ",
				"m": "設定",
				"e": "GitHubへ移動",
				"f": "ヘッダー",
				"h": "i18n ベンチ"
			},
			"ko": {
				"g": "홈",
				"i": "방법론",
				"j": "모의 페이지",
				"l": "제품",
				"k": "가격",
				"n": "팀",
				"a": "블로그",
				"b": "채용",
				"d": "자주 묻는 질문",
				"c": "연락처",
				"m": "설정",
				"e": "GitHub으로 이동",
				"f": "헤더",
				"h": "i18n 벤치"
			},
			"ru": {
				"g": "Главная",
				"i": "Методология",
				"j": "Тестовые страницы",
				"l": "Продукты",
				"k": "Цены",
				"n": "Команда",
				"a": "Блог",
				"b": "Карьера",
				"d": "FAQ",
				"c": "Контакт",
				"m": "Настройки",
				"e": "Перейти на GitHub",
				"f": "Шапка",
				"h": "i18n Бенчмарк"
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
	"mode": "prefix-no-default",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/IntlayerNode.mjs
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : /* @__PURE__ */ jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && Object.keys(additionalProps).includes(prop)) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/reactElement/renderReactElement.mjs
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
//#region ../../node_modules/.bun/@intlayer+types@8.7.1-canary-0/node_modules/@intlayer/types/dist/esm/nodeType.mjs
var TRANSLATION = "translation";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/deepTransform.mjs
/**
* Recursively traverses a node (object/array/primitive).
* Applies the *first* plugin that can transform a node, then stops descending further.
* If no plugin transforms it, it recurses into its children.
*/
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getInsertion.mjs
/**
* Allow to insert values in a string.
*
* Usage:
*
* ```ts
* const content = getInsertion('Hello {{name}}!', {
*  name: 'John',
* });
* // 'Hello John!'
* ```
*
*/
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getTranslation.mjs
/**
* Check if a value is a plain object that can be safely merged.
* Returns false for Promises, React elements, class instances, etc.
*/
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
/**
* Recursively merges two objects, skipping undefined source values.
* First argument takes precedence. Arrays replace rather than merge.
*/
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
/**
* Picks the appropriate content from a locale map based on the provided locale.
*
* It handles:
* 1. Exact locale match (e.g., 'en-US').
* 2. Generic locale fallback (e.g., 'en' if 'en-US' is not found).
* 3. Explicit fallback locale.
* 4. Deep merging of objects to ensure partial translations are complemented by fallbacks.
*
* @param languageContent - A map of locales to content.
* @param locale - The target locale to retrieve.
* @param fallback - Optional fallback locale if the target is not found.
* @returns The translated content.
*
* @example
* ```ts
* const content = getTranslation({
*   en: 'Hello',
*   fr: 'Bonjour',
* }, 'fr');
* // 'Bonjour'
* ```
*/
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/plugins.mjs
/**
* True when the translation node type is explicitly disabled at build time.
*/
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
/** ---------------------------------------------
* FALLBACK PLUGIN
*
* Used to fallback a tree-shaken plugin
* --------------------------------------------- */
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
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
/** Enumeration plugin. Replaces node with a function that takes quantity => string. */
var enumerationPlugin = fallbackPlugin;
/** Condition plugin. Replaces node with a function that takes boolean => string. */
var conditionPlugin = fallbackPlugin;
/** Insertion plugin. Replaces node with a function that takes quantity => string. */
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
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
/** Gender plugin. Replaces node with a function that takes gender => string. */
var genderPlugin = fallbackPlugin;
/** Nested plugin. Replaces node with the result of `getNesting`. */
var nestedPlugin = (locale) => fallbackPlugin;
/** File plugin. Replaces node with the result of `getNesting`. */
var filePlugin = fallbackPlugin;
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/getContent.mjs
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
].filter(Boolean);
/**
* Transforms a node in a single pass, applying each plugin as needed.
*
* @param node The node to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
*/
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getDictionary.mjs
/**
* Transforms a dictionary in a single pass, applying each plugin as needed.
*
* @param dictionary The dictionary to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
* @param additionalPlugins An array of NodeTransformer that define how to transform recognized nodes.
*                      If omitted, we’ll use a default set of plugins.
*/
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/splitAndJoinInsertion.mjs
/**
* Check if a value is a complex object (not a primitive)
* Used to determine if values need to be wrapped in fragments
*/
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/plugins.mjs
/**
* True when the intlayer node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
/**
* True when the react node type is explicitly disabled at build time.
*/
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
lazy(() => import("./MarkdownRendererPlugin-CHUSp3mZ.js").then((m) => ({ default: m.MarkdownRendererPlugin })));
lazy(() => import("./HTMLRendererPlugin-BBg6-YRp.js").then((m) => ({ default: m.HTMLRendererPlugin })));
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
/**
* Split insertion string and join with React nodes using shared core logic
*/
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
/** Insertion plugin for React. Handles component/node insertion. */
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
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
/** HTML plugin. Replaces node with a function that takes components => ReactNode. */
var htmlPlugin = fallbackPlugin;
/**
* Get the plugins array for React content transformation.
* This function is used by both getIntlayer and getDictionary to ensure consistent plugin configuration.
*/
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/getDictionary.mjs
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/localeResolver.mjs
/**
* Resolves the most specific locale from a user-provided list,
* or falls back to the default locale if no match is found.
*/
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
/**
* True when cookie storage is explicitly disabled at build time.
*/
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
/**
* Retrieves the locale from browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not read from headers — use `getLocaleFromStorageServer` for that.
*/
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
/**
* Stores the locale in browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not write to headers — use `setLocaleInStorageServer` for that.
*/
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
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
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/utils/intl.mjs
/**
* Cached Intl helper – drop‑in replacement for the global `Intl` object.
* ‑‑‑
* • Uses a `Proxy` to lazily wrap every *constructor* hanging off `Intl` (NumberFormat, DateTimeFormat, …).
* • Each wrapped constructor keeps an in‑memory cache keyed by `[locales, options]` so that identical requests
* reuse the same heavy instance instead of reparsing CLDR data every time.
* • A polyfill warning for `Intl.DisplayNames` is emitted only once and only in dev.
* • The public API is fully type‑safe and mirrors the native `Intl` surface exactly –
* you can treat `CachedIntl` just like the built‑in `Intl`.
*
* Usage @example:
* ---------------
* ```ts
* import { CachedIntl } from "./cached-intl";
*
* const nf = CachedIntl.NumberFormat("en-US", { style: "currency", currency: "USD" });
* console.log(nf.format(1234));
*
* const dn = CachedIntl.DisplayNames(["fr"], { type: "language" });
* console.log(dn.of("en")); * → "anglais"
*
* You can also spin up an isolated instance with its own caches (handy in test suites):
* const TestIntl = createCachedIntl();
* ```
*/
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
/**
* Generic caching instantiator for Intl constructors.
*/
var getCachedIntl = (Ctor, locale, options) => {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	let ctorCache = cache.get(Ctor);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(Ctor, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new Ctor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
};
var CachedIntl = {
	Collator: function Collator(locales, options) {
		return getCachedIntl(Intl.Collator, locales, options);
	},
	DateTimeFormat: function DateTimeFormat(locales, options) {
		return getCachedIntl(Intl.DateTimeFormat, locales, options);
	},
	DisplayNames: function DisplayNames(locales, options) {
		return getCachedIntl(Intl.DisplayNames, locales, options);
	},
	ListFormat: function ListFormat(locales, options) {
		return getCachedIntl(Intl.ListFormat, locales, options);
	},
	NumberFormat: function NumberFormat(locales, options) {
		return getCachedIntl(Intl.NumberFormat, locales, options);
	},
	PluralRules: function PluralRules(locales, options) {
		return getCachedIntl(Intl.PluralRules, locales, options);
	},
	RelativeTimeFormat: function RelativeTimeFormat(locales, options) {
		return getCachedIntl(Intl.RelativeTimeFormat, locales, options);
	},
	Segmenter: function Segmenter(locales, options) {
		return getCachedIntl(Intl.Segmenter, locales, options);
	}
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/getLocaleName.mjs
var getLocaleName = (displayLocale, targetLocale = displayLocale) => {
	return new CachedIntl.DisplayNames(targetLocale, { type: "language" }).of(displayLocale) ?? "Unknown locale";
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
/**
* Get the locale cookie
*/
/**
* Get the locale cookie
*/
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
/**
* Set the locale cookie
*/
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/useEditor.mjs
/**
* Initializes the Intlayer editor client singleton when the editor is enabled.
* Syncs the current locale from the Intlayer context into the editor manager so
* the editor always knows which locale the app is displaying.
*/
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/EditorProvider.mjs
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+config@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/config/dist/esm/utils/setIntlayerIdentifier.mjs
/**
* Sets the version of Intlayer in the window object.
* This is used for Intlayer detection in the browser.
*/
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
/**
* Context that stores the current locale on the client side.
*/
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
/**
* Provider that stores the current locale on the client side.
*
* This component is focused on content delivery without the editor features.
*
* @param props - The provider props.
* @returns The provider component.
*/
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
	return /* @__PURE__ */ jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
/**
* Main provider for Intlayer in React applications.
*
* It includes the editor provider by default, allowing for live content editing
* if configured.
*
* @param props - The provider props.
* @returns The provider component with editor support.
*
* @example
* ```tsx
* import { IntlayerProvider } from 'react-intlayer';
*
* const App = () => (
*   <IntlayerProvider>
*     <MyComponent />
*   </IntlayerProvider>
* );
* ```
*/
var IntlayerProvider = ({ children, ...props }) => /* @__PURE__ */ jsxs(IntlayerProviderContent, {
	...props,
	children: [/* @__PURE__ */ jsx(EditorProvider, {}), children]
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useDictionary.mjs
/**
* On the server side, Hook that transform a dictionary and return the content
*
* If the locale is not provided, it will use the locale from the client context
*/
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
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useLocale.mjs
/**
* Client-side hook to get the current locale and related locale management functions.
*
* @param props - Optional properties for the hook.
* @returns An object containing the current locale, default locale, available locales, and a function to update the locale.
*
* @example
* ```tsx
* import { useLocale } from 'react-intlayer';
*
* const LocaleSwitcher = () => {
*   const { locale, setLocale, availableLocales } = useLocale();
*
*   return (
*     <select value={locale} onChange={(e) => setLocale(e.target.value)}>
*       {availableLocales.map((loc) => (
*         <option key={loc} value={loc}>{loc}</option>
*       ))}
*     </select>
*   );
* };
* ```
*/
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
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
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"d": "Theme mode: auto (system). Click to switch to light mode.",
				"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
				"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
				"a": "Theme: Auto",
				"b": "Theme: Dark",
				"c": "Theme: Light",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			"fr": {
				"d": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				"themeModeLightClick": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				"themeModeDarkClick": "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				"a": "Thème : Auto",
				"b": "Thème : Sombre",
				"c": "Thème : Clair",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			"es": {
				"d": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				"themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				"a": "Tema: Auto",
				"b": "Tema: Oscuro",
				"c": "Tema: Claro",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			"de": {
				"d": "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				"themeModeLightClick": "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				"themeModeDarkClick": "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				"a": "Design: Auto",
				"b": "Design: Dunkel",
				"c": "Design: Hell",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			"it": {
				"d": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				"themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				"themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				"a": "Tema: Auto",
				"b": "Tema: Scuro",
				"c": "Tema: Chiaro",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			"pt": {
				"d": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro.",
				"themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				"a": "Tema: Auto",
				"b": "Tema: Escuro",
				"c": "Tema: Claro",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			"zh": {
				"d": "主题模式：自动（系统）。点击切换到浅色模式。",
				"themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
				"themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
				"a": "主题：自动",
				"b": "主题：深色",
				"c": "主题：浅色",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "主题模式：{{mode}}。点击切换模式。"
				}
			},
			"ja": {
				"d": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				"themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				"a": "テーマ：自動",
				"b": "テーマ：ダーク",
				"c": "テーマ：ライト",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			"ko": {
				"d": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				"themeModeLightClick": "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				"themeModeDarkClick": "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				"a": "테마: 자동",
				"b": "테마: 다크",
				"c": "테마: 라이트",
				"e": {
					"fields": ["mode"],
					"nodeType": "insertion",
					"insertion": "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			"ru": {
				"d": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				"themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				"themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				"a": "Тема: Авто",
				"b": "Тема: Темная",
				"c": "Тема: Светлая",
				"e": {
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
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const content = useDictionary(theme_toggle_default);
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? content.d.value : content.e({ mode });
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? content.a.value : mode === "dark" ? content.b.value : content.c.value
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function LocaleSwitcher() {
	const navigate = useNavigate();
	const { locale, availableLocales, setLocale } = useLocale({ onLocaleChange: (newLocale) => {
		navigate({
			to: ".",
			params: (prev) => ({
				...prev,
				locale: newLocale
			})
		});
	} });
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ jsx("select", {
			value: locale,
			onChange: (e) => setLocale(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: availableLocales.map((locale) => /* @__PURE__ */ jsx("option", {
				value: locale,
				children: getLocaleName(locale)
			}, locale))
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
/**
* Custom hook to measure the render-to-layout duration of a component.
* It uses the Browser User Timing API (performance.mark/measure).
*
* @param name The name of the measurement (e.g., 'HeroComponent')
*/
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	useLayoutEffect(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	}, [name]);
}
//#endregion
//#region src/components/Header.tsx
function Header() {
	const content = useDictionary(header_default);
	usePerformanceMeasure(content.f.value);
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	const mockPages = [
		{
			to: "/$locale/products",
			label: content.l
		},
		{
			to: "/$locale/pricing",
			label: content.k
		},
		{
			to: "/$locale/team",
			label: content.n
		},
		{
			to: "/$locale/blog",
			label: content.a
		},
		{
			to: "/$locale/careers",
			label: content.b
		},
		{
			to: "/$locale/faq",
			label: content.d
		},
		{
			to: "/$locale/contact",
			label: content.c
		},
		{
			to: "/$locale/settings",
			label: content.m
		}
	];
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ jsxs("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/$locale",
					params: { locale: currentLocale },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: content.h
				}), /* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/$locale",
							params: { locale: currentLocale },
							activeOptions: { exact: true },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: content.g
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/$locale/about",
							params: { locale: currentLocale },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: content.i
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								onClick: () => setIsMockPagesOpen(!isMockPagesOpen),
								children: [content.j, /* @__PURE__ */ jsx(ChevronDown, {
									size: 14,
									className: `transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`
								})]
							}), isMockPagesOpen && /* @__PURE__ */ jsx("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								children: /* @__PURE__ */ jsx("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => /* @__PURE__ */ jsx(Link, {
										to: page.to,
										params: { locale: currentLocale },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => setIsMockPagesOpen(false),
										children: page.label
									}, page.to))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: content.e
						}), /* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ jsx("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ jsx(LocaleSwitcher, {}),
					/* @__PURE__ */ jsx(ThemeToggle, {})
				]
			})]
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(IntlayerProvider, {
		locale: "en",
		children
	});
}
//#endregion
//#region src/components/Header.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(Header, {}) });
}
//#endregion
export { Wrapped as default };
import { Fragment, createContext, createElement, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
/**
* Helper to parse attributes from a tag string.
*/
var parseAttributes = (attributes) => {
	const props = {};
	const attrRegex = /([a-zA-Z0-9-]+)="([^"]*)"/g;
	let match = attrRegex.exec(attributes);
	while (match !== null) {
		props[match[1]] = match[2];
		match = attrRegex.exec(attributes);
	}
	return props;
};
var astCache = /* @__PURE__ */ new Map();
var parseHTML = (content) => {
	if (astCache.has(content)) return astCache.get(content);
	if (typeof content !== "string") return [];
	const tagRegex = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g;
	const elements = [];
	const stack = [];
	let lastIndex = 0;
	let match = tagRegex.exec(content);
	const appendChild = (child) => {
		(stack.length > 0 ? stack[stack.length - 1].children : elements).push(child);
	};
	while (match !== null) {
		const [fullMatch, isClosingRaw, tagName, attributesRaw, isSelfClosingRaw] = match;
		const matchIndex = match.index;
		if (matchIndex > lastIndex) appendChild(content.slice(lastIndex, matchIndex));
		const isClosing = isClosingRaw === "/";
		const isSelfClosing = isSelfClosingRaw === "/" || attributesRaw.trim().endsWith("/") || fullMatch.endsWith("/>");
		const cleanedAttributes = attributesRaw.trim().replace(/\/$/, "").trim();
		if (isClosing) {
			const last = stack[stack.length - 1];
			if (last && last.tagName === tagName) {
				const popped = stack.pop();
				if (popped) appendChild({
					tagName: popped.tagName,
					props: popped.props,
					children: popped.children
				});
			}
		} else if (isSelfClosing) appendChild({
			tagName,
			props: parseAttributes(cleanedAttributes),
			children: []
		});
		else {
			const tagProps = parseAttributes(cleanedAttributes);
			stack.push({
				tagName,
				children: [],
				props: tagProps
			});
		}
		lastIndex = matchIndex + fullMatch.length;
		match = tagRegex.exec(content);
	}
	if (lastIndex < content.length) appendChild(content.slice(lastIndex));
	while (stack.length > 0) {
		const last = stack.pop();
		if (last) appendChild({
			tagName: last.tagName,
			props: last.props,
			children: last.children
		});
	}
	astCache.set(content, elements);
	return elements;
};
/**
* Interprets a string containing HTML-like tags and replaces them with provided components or strings.
*/
var getHTML = (content, values) => {
	const ast = parseHTML(content);
	let keyCounter = 0;
	const renderASTNode = (node) => {
		if (typeof node === "string") return node;
		const { tagName, props, children } = node;
		const renderedChildren = children.flatMap(renderASTNode);
		const index = keyCounter++;
		let override = values[tagName];
		if (!override) {
			const lowerTagName = tagName.toLowerCase();
			const foundKey = Object.keys(values).find((key) => key.toLowerCase() === lowerTagName);
			if (foundKey) override = values[foundKey];
		}
		const key = `html-tag-${tagName}-${index}`;
		if (typeof override === "function") return override({
			...props,
			children: renderedChildren,
			key
		});
		if (typeof override === "string") {
			const component = values[override];
			if (typeof component === "function") return component({
				...props,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		if (typeof override === "object" && override !== null && "tag" in override) {
			const { tag: targetTag, props: extraProps } = override;
			const component = values[targetTag];
			if (typeof component === "function") return component({
				...props,
				...extraProps,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		return renderedChildren;
	};
	const result = ast.flatMap(renderASTNode);
	return result.length === 1 ? result[0] : result;
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLProvider.mjs
var HTMLContext = createContext(void 0);
var useHTMLContext = () => useContext(HTMLContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLRenderer.mjs
/**
* Renders HTML-like content to JSX with the provided components.
*
* This function does not use context from HTMLProvider. Use `useHTMLRenderer`
* hook if you want to leverage provider context.
*/
var renderHTML = (content, { components = {} } = {}) => {
	const userComponents = Object.fromEntries(Object.entries(components).filter(([, Component]) => Component).map(([key, Component]) => [key, (props) => createElement(Component, props)]));
	return /* @__PURE__ */ jsx(Fragment, { children: getHTML(content, new Proxy(userComponents, { get(target, prop) {
		if (typeof prop === "string" && prop in target) return target[prop];
		if (typeof prop === "string" && /^[a-z][a-z0-9]*$/.test(prop)) return (props) => createElement(prop, props);
	} })) });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLRendererPlugin.mjs
var HTMLRendererPlugin = (props) => {
	const { html, userComponents } = props;
	return renderHTML(html, { components: {
		...useHTMLContext()?.components,
		...userComponents
	} });
};
//#endregion
export { HTMLRendererPlugin };
import { createContext, useContext } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var MarkdownContext = createContext(void 0);
var useMarkdownContext = () => useContext(MarkdownContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownRendererPlugin.mjs
var MarkdownRendererPlugin = (props) => {
	const { children, options, components } = props;
	const context = useMarkdownContext();
	return (context?.renderMarkdown ?? ((md) => md))(children, options, {
		...context?.components ?? {},
		...components ?? {}
	});
};
//#endregion
export { MarkdownRendererPlugin };

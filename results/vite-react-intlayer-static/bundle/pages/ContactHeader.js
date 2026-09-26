import { Fragment, createContext, createElement, isValidElement, useContext, useMemo } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var contact_header_default = {
	key: "contact-header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"a": "Get in Touch",
				"b": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
			},
			"fr": {
				"a": "Contactez-nous",
				"b": "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à"
			},
			"es": {
				"a": "Póngase en contacto",
				"b": "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en"
			},
			"de": {
				"a": "Kontaktieren Sie uns",
				"b": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter"
			},
			"it": {
				"a": "Mettiti in contatto",
				"b": "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo"
			},
			"pt": {
				"a": "Entre em contato",
				"b": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em"
			},
			"zh": {
				"a": "联系我们",
				"b": "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们"
			},
			"ja": {
				"a": "お問い合わせ",
				"b": "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください"
			},
			"ko": {
				"a": "문의하기",
				"b": "아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요"
			},
			"ru": {
				"a": "Связаться с нами",
				"b": "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
			}
		}
	}
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
var routing = {
	"mode": "prefix-all",
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
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
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var renderIntlayerNode = ({ children, value, additionalProps }) => Object.setPrototypeOf({
	...isValidElement(children) ? children : jsx(Fragment$1, { children }),
	value,
	...additionalProps
}, getIntlayerNodePrototype(value));
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var isInterpolableWrapperNode = (node) => {
	if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
	const { nodeType } = node;
	return false;
};
var getInterpolableContent = (node) => {
	if (typeof node === "string") return node;
	if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
};
var rebuildInterpolableContent = (node, interpolated) => {
	if (typeof node === "string") return interpolated;
	if (isInterpolableWrapperNode(node)) {
		const key = node.nodeType === "html" ? HTML : MARKDOWN;
		return {
			...node,
			[key]: interpolated
		};
	}
	return node;
};
var transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
	const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
	return deepTransformNode(children, {
		...subProps,
		plugins: parentPlugins,
		children
	});
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var isAwaitingValues = (branch) => {
	if (typeof branch !== "function") return false;
	const { value } = branch;
	return value === void 0 || typeof value === "function";
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
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
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var selectorNodeTypes = [
	ENUMERATION,
	CONDITION,
	PLURAL,
	GENDER,
	SELECT
];
var bindInsertedValues = (children, result, values, areBranchesInterpolated = false) => {
	const nodeType = children?.nodeType;
	if (typeof result !== "function" || !nodeType || !selectorNodeTypes.includes(nodeType)) return result;
	const isCountSelector = nodeType === "plural" || nodeType === "enumeration";
	return (selector) => {
		if (typeof selector === "object" && selector !== null) return result({
			...values,
			...selector
		});
		if (isCountSelector) return result({
			...values,
			count: selector
		});
		const selected = result(selector);
		return !areBranchesInterpolated && isAwaitingValues(selected) ? selected(values) : selected;
	};
};
var resolveInsertedSelector = (children, result) => typeof result === "function" && selectorNodeTypes.includes(children?.nodeType ?? "") ? (values) => bindInsertedValues(children, result, values) : result;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
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
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, props) => {
		return renderIntlayerNode({
			value: props.children,
			children: props.children
		});
	}
};
var reactNodePlugins = fallbackPlugin;
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
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
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		reactNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var useDictionary = (dictionary, localeOrSelector) => {
	const { locale: currentLocale, variant: contextVariant } = useContext(IntlayerClientContext) ?? {};
	const argument = localeOrSelector ?? currentLocale;
	const argumentIdentity = argument;
	return useMemo(() => getDictionary(dictionary, argument), [dictionary.key, argumentIdentity]);
};
var app_default = {
	key: "app",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Go to GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Methodology\",\"g\":\"Mock Pages\",\"i\":\"Products\",\"h\":\"Pricing\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Careers\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Settings\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"g\":\"Resources\",\"e\":\"GitHub\",\"f\":\"Methodology\",\"b\":\"Contact\",\"c\":\"Contributing\",\"a\":\"i18n Benchmark — Open-source project. Built with React, Vite & React Router.\"},\"f\":{\"a\":\"Theme: Auto\",\"b\":\"Theme: Dark\",\"e\":\"Theme: Light\",\"c\":\"Theme mode: auto (system). Click to switch to light mode.\",\"d\":\"Theme mode: {mode}. Click to switch mode.\"},\"c\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"e\":{\"a\":\"Banc d'essai i18n\",\"d\":\"Benchmark i18n\",\"b\":\"contact@intlayer.org\",\"c\":\"Aller sur GitHub\"},\"b\":{\"e\":\"Accueil\",\"f\":\"Méthodologie\",\"g\":\"Pages fictives\",\"i\":\"Produits\",\"h\":\"Tarification\",\"k\":\"Équipe\",\"a\":\"Blog\",\"b\":\"Carrières\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Paramètres\"},\"a\":{\"h\":\"Benchmark i18n\",\"d\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"g\":\"Ressources\",\"e\":\"GitHub\",\"f\":\"Méthodologie\",\"b\":\"Contact\",\"c\":\"Contribution\",\"a\":\"Benchmark i18n — Projet open source. Construit avec React, Vite et React Router.\"},\"f\":{\"a\":\"Thème : Auto\",\"b\":\"Thème : Sombre\",\"e\":\"Thème : Clair\",\"c\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"d\":\"Mode thématique : {mode}. Cliquez pour changer de mode.\"},\"c\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir a GitHub\"},\"b\":{\"e\":\"Inicio\",\"f\":\"Metodología\",\"g\":\"Páginas de prueba\",\"i\":\"Productos\",\"h\":\"Precios\",\"k\":\"Equipo\",\"a\":\"Blog\",\"b\":\"Carreras\",\"d\":\"FAQ\",\"c\":\"Contacto\",\"j\":\"Ajustes\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga и la reactividad de la aplicación.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodología\",\"b\":\"Contacto\",\"c\":\"Contribución\",\"a\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Oscuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"d\":\"Modo de tema: {mode}. Haga clic para cambiar de modo.\"},\"c\":\"⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"},\"de\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Zu GitHub\"},\"b\":{\"e\":\"Startseite\",\"f\":\"Methodik\",\"g\":\"Testseiten\",\"i\":\"Produkte\",\"h\":\"Preise\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Karriere\",\"d\":\"FAQ\",\"c\":\"Kontakt\",\"j\":\"Einstellungen\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.\",\"g\":\"Ressourcen\",\"e\":\"GitHub\",\"f\":\"Methodik\",\"b\":\"Kontakt\",\"c\":\"Beitrag\",\"a\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & React Router.\"},\"f\":{\"a\":\"Design: Auto\",\"b\":\"Design: Dunkel\",\"e\":\"Design: Hell\",\"c\":\"Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.\",\"d\":\"Design-Modus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\"},\"c\":\"⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung.\"},\"it\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Vai su GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Metodologia\",\"g\":\"Pagine di prova\",\"i\":\"Prodotti\",\"h\":\"Prezzi\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Carriere\",\"d\":\"FAQ\",\"c\":\"Contatti\",\"j\":\"Impostazioni\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sul tempo di caricamento e sulla reattività dell'app.\",\"g\":\"Risorse\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contatti\",\"c\":\"Contribuire\",\"a\":\"i18n Benchmark — Progetto open source. Costruito con React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Auto\",\"b\":\"Tema: Scuro\",\"e\":\"Tema: Chiaro\",\"c\":\"Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.\",\"d\":\"Modalità tema: {mode}. Fai clic per cambiare modalità.\"},\"c\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir para o GitHub\"},\"b\":{\"e\":\"Início\",\"f\":\"Metodologia\",\"g\":\"Páginas de Teste\",\"i\":\"Produtos\",\"h\":\"Preços\",\"k\":\"Equipe\",\"a\":\"Blog\",\"b\":\"Carreiras\",\"d\":\"FAQ\",\"c\":\"Contato\",\"j\":\"Configurações\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contato\",\"c\":\"Contribuindo\",\"a\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Escuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"d\":\"Modo de tema: {mode}. Clique para mudar o modo.\"},\"c\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real.\"},\"zh\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"前往 GitHub\"},\"b\":{\"e\":\"首页\",\"f\":\"方法论\",\"g\":\"模拟页面\",\"i\":\"产品\",\"h\":\"定价\",\"k\":\"团队\",\"a\":\"博客\",\"b\":\"职业\",\"d\":\"常见问题\",\"c\":\"联系我们\",\"j\":\"设置\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间以及应用程序反应性的真实影响。\",\"g\":\"资源\",\"e\":\"GitHub\",\"f\":\"方法论\",\"b\":\"联系\",\"c\":\"贡献\",\"a\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 React Router 构建。\"},\"f\":{\"a\":\"主题：自动\",\"b\":\"主题：深色\",\"e\":\"主题：亮色\",\"c\":\"主题模式：自动（系统）。点击切换到亮色模式。\",\"d\":\"主题模式：{mode}。点击切换模式。\"},\"c\":\"⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"e\":{\"a\":\"i18n ベンチ\",\"d\":\"i18n ベンチマーク\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub へ\"},\"b\":{\"e\":\"ホーム\",\"f\":\"方法論\",\"g\":\"モックページ\",\"i\":\"製品\",\"h\":\"価格設定\",\"k\":\"チーム\",\"a\":\"ブログ\",\"b\":\"採用情報\",\"d\":\"よくある質問\",\"c\":\"お問い合わせ\",\"j\":\"設定\"},\"a\":{\"h\":\"i18n ベンチマーク\",\"d\":\"国際化ライブラリがバンドルサイズ、ロード時間、およびアプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。\",\"g\":\"リソース\",\"e\":\"GitHub\",\"f\":\"方法論\",\"b\":\"連絡先\",\"c\":\"貢献\",\"a\":\"i18n ベンチマーク — オープンソースプロジェクト。React、Vite、および React Router で構築されています。\"},\"f\":{\"a\":\"テーマ：自動\",\"b\":\"テーマ：ダーク\",\"e\":\"テーマ：ライト\",\"c\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\",\"d\":\"テーマモード：{mode}。クリックしてモードを切り替えます。\"},\"c\":\"⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"e\":{\"a\":\"i18n 벤치\",\"d\":\"i18n 벤치마크\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub으로 이동\"},\"b\":{\"e\":\"홈\",\"f\":\"방법론\",\"g\":\"모적 페이지\",\"i\":\"제품\",\"h\":\"가격\",\"k\":\"팀\",\"a\":\"블로그\",\"b\":\"채용\",\"d\":\"자주 묻는 질문\",\"c\":\"문의\",\"j\":\"설정\"},\"a\":{\"h\":\"i18n 벤치마크\",\"d\":\"번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"g\":\"리소스\",\"e\":\"GitHub\",\"f\":\"방법론\",\"b\":\"연락처\",\"c\":\"기여\",\"a\":\"i18n 벤치마크 — 오픈 소스 프로젝트입니다. React, Vite 및 React Router로 구축되었습니다.\"},\"f\":{\"a\":\"테마: 자동\",\"b\":\"테마: 다크\",\"e\":\"테마: 라이트\",\"c\":\"테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.\",\"d\":\"테마 모드: {mode}. 모드를 전환하려면 클릭하세요.\"},\"c\":\"⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Перейти на GitHub\"},\"b\":{\"e\":\"Главная\",\"f\":\"Методология\",\"g\":\"Мок-страницы\",\"i\":\"Продукты\",\"h\":\"Цены\",\"k\":\"Команда\",\"a\":\"Блог\",\"b\":\"Вакансии\",\"d\":\"FAQ\",\"c\":\"Контакт\",\"j\":\"Настройки\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\",\"g\":\"Ресурсы\",\"e\":\"GitHub\",\"f\":\"Методология\",\"b\":\"Контакт\",\"c\":\"Вклад в проект\",\"a\":\"i18n Benchmark — проект с открытым исходным кодом. Построен на React, Vite и React Router.\"},\"f\":{\"a\":\"Тема: Авто\",\"b\":\"Тема: Темная\",\"e\":\"Тема: Светлая\",\"c\":\"Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.\",\"d\":\"Режим темы: {mode}. Нажмите, чтобы изменить режим.\"},\"c\":\"⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}")
};
var MockBanner = () => {
	const content = useDictionary(app_default);
	return jsx("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: content.c
	});
};
function ContactHeader() {
	const content = useDictionary(contact_header_default);
	return jsxs(Fragment$1, { children: [
		jsx(MockBanner, {}),
		jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: content.a
		}),
		jsxs("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				content.b,
				" ",
				jsx("a", {
					href: "mailto:contact@intlayer.org",
					className: "text-primary hover:underline",
					children: "contact@intlayer.org"
				}),
				"."
			]
		})
	] });
}
export { ContactHeader as default };

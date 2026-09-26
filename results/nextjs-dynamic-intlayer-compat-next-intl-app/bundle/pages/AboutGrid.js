import { Fragment, createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import _dnk5ynbitk from "../../../.intlayer/dictionary/faq.json";
import _7b9d8r32r4 from "../../../.intlayer/dictionary/header.json";
import _26kgqdr9lj1 from "../../../.intlayer/dictionary/open-positions.json";
import _g4qdxk8y90 from "../../../.intlayer/dictionary/careers-benefits.json";
import _1vbg33290fp from "../../../.intlayer/dictionary/settings.json";
import _adjq6sn7fs from "../../../.intlayer/dictionary/footer.json";
import _1ji1qtqt3ub from "../../../.intlayer/dictionary/results-table.json";
import _1biffpftok9 from "../../../.intlayer/dictionary/contact-form.json";
import _1ofqcedt4d7 from "../../../.intlayer/dictionary/contact-header.json";
import _2eyx0sae2iw from "../../../.intlayer/dictionary/about-grid.json";
import _ep9qge8c18 from "../../../.intlayer/dictionary/mockBanner.json";
import _z8bl6eet8p from "../../../.intlayer/dictionary/theme-toggle.json";
import _1ba459kp8h5 from "../../../.intlayer/dictionary/about-header.json";
import _1l1cjfkf3cl from "../../../.intlayer/dictionary/faq-header1.json";
import _1ij1eyyqvwx from "../../../.intlayer/dictionary/careers.json";
import _4od6a7mcpe from "../../../.intlayer/dictionary/blog-header.json";
import _imvr09bmlk from "../../../.intlayer/dictionary/route.json";
import _28v3ubsenlh from "../../../.intlayer/dictionary/faq-list.json";
import _1qushpcw4fx from "../../../.intlayer/dictionary/careers-header.json";
import _1kr3webkrnp from "../../../.intlayer/dictionary/pricing.json";
import _zfitrvjkeg from "../../../.intlayer/dictionary/what-we-measure.json";
import _1kaftmzk99s from "../../../.intlayer/dictionary/products.json";
import _h1lwwq8yjy from "../../../.intlayer/dictionary/contact.json";
import _1qyt4jvigga from "../../../.intlayer/dictionary/blog-list.json";
import _191a9ejqcbk from "../../../.intlayer/dictionary/about.json";
import _15vag837z6q from "../../../.intlayer/dictionary/understanding-impact.json";
import _251o225ti48 from "../../../.intlayer/dictionary/home.json";
import _1o2f3n78djl from "../../../.intlayer/dictionary/team.json";
import _1r6754931cv from "../../../.intlayer/dictionary/blog.json";
import _yknyh7pfbd from "../../../.intlayer/dictionary/why-it-matters.json";
import _1i31x847sak from "../../../.intlayer/dictionary/hero.json";
import { usePathname } from "next/navigation";
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
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
var alreadyWarnedConstructors = /* @__PURE__ */ new Set();
var warnMissingIntlConstructor = (constructorName) => {
	if (alreadyWarnedConstructors.has(constructorName)) return;
	alreadyWarnedConstructors.add(constructorName);
	console.warn(`[intlayer] \`Intl.${constructorName}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${constructorName.toLowerCase()}/polyfill\`) before rendering your app.`);
};
var intlConstructorFallbacks = {
	DisplayNames: class DisplayNamesFallback {
		of(code) {
			return code;
		}
	},
	ListFormat: class ListFormatFallback {
		format(list) {
			return Array.from(list).join(", ");
		}
		formatToParts(list) {
			return Array.from(list).flatMap((value, index) => index === 0 ? [{
				type: "element",
				value
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value
			}]);
		}
	},
	Segmenter: class SegmenterFallback {
		segment(input) {
			let index = 0;
			return Array.from(input).map((segment) => {
				const segmentStart = index;
				index += segment.length;
				return {
					segment,
					index: segmentStart
				};
			});
		}
	}
};
var resolveIntlConstructor = (constructorName) => {
	const nativeConstructor = Intl[constructorName];
	if (typeof nativeConstructor === "function") return nativeConstructor;
	warnMissingIntlConstructor(constructorName);
	return intlConstructorFallbacks[constructorName];
};
function getCachedIntl(intlConstructor, locale, options) {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	const cacheKey = intlConstructor;
	let ctorCache = cache.get(cacheKey);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(cacheKey, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		const ResolvedConstructor = typeof intlConstructor === "string" ? resolveIntlConstructor(intlConstructor) : intlConstructor;
		if (typeof ResolvedConstructor !== "function") throw new Error(`[intlayer] \`Intl.${String(intlConstructor)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new ResolvedConstructor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
}
var checkIsURLAbsolute = (url) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
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
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
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
var findMatchingCondition = (enumerationContent, quantity) => {
	const numericKeys = Object.keys(enumerationContent);
	for (const key of numericKeys) {
		const isEqual = !key.startsWith(">") && !key.startsWith("<") && !key.startsWith("=") && parseFloat(key) === quantity || key.startsWith("=") && parseFloat(key.slice(1)) === quantity;
		const isSuperior = key.startsWith(">") && quantity > parseFloat(key.slice(1));
		const isSuperiorOrEqual = key.startsWith(">=") && quantity >= parseFloat(key.slice(2));
		const isInferior = key.startsWith("<") && quantity < parseFloat(key.slice(1));
		const isInferiorOrEqual = key.startsWith("<=") && quantity <= parseFloat(key.slice(2));
		if (isEqual || isSuperior || isSuperiorOrEqual || isInferior || isInferiorOrEqual) return key;
	}
};
var getEnumeration = (enumerationContent, quantity) => {
	return enumerationContent[findMatchingCondition(enumerationContent, quantity) ?? "fallback"];
};
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var CYAN = "\x1B[36m";
var getPrefix = (configPrefix) => {
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var dictionaries = {
	"faq": _dnk5ynbitk,
	"header": _7b9d8r32r4,
	"open-positions": _26kgqdr9lj1,
	"careers-benefits": _g4qdxk8y90,
	"settings": _1vbg33290fp,
	"footer": _adjq6sn7fs,
	"results-table": _1ji1qtqt3ub,
	"contact-form": _1biffpftok9,
	"contact-header": _1ofqcedt4d7,
	"about-grid": _2eyx0sae2iw,
	"mockBanner": _ep9qge8c18,
	"theme-toggle": _z8bl6eet8p,
	"about-header": _1ba459kp8h5,
	"faq-header1": _1l1cjfkf3cl,
	"careers": _1ij1eyyqvwx,
	"blog-header": _4od6a7mcpe,
	"route": _imvr09bmlk,
	"faq-list": _28v3ubsenlh,
	"careers-header": _1qushpcw4fx,
	"pricing": _1kr3webkrnp,
	"what-we-measure": _zfitrvjkeg,
	"products": _1kaftmzk99s,
	"contact": _h1lwwq8yjy,
	"blog-list": _1qyt4jvigga,
	"about": _191a9ejqcbk,
	"understanding-impact": _15vag837z6q,
	"home": _251o225ti48,
	"team": _1o2f3n78djl,
	"blog": _1r6754931cv,
	"why-it-matters": _yknyh7pfbd,
	"hero": _1i31x847sak
};
var getDictionaries = () => dictionaries;
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary(dictionary, localeOrSelector, plugins);
};
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
};
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
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
process.env.INTLAYER_OPTIMIZED_NESTING;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin,
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
var getDictionary = (dictionary, localeOrSelector, plugins) => {
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
var LOCALES = ["en"];
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var resolveRoutingConfig = (options = {}) => ({
	...options,
	defaultLocale: options.defaultLocale ?? internationalization?.defaultLocale ?? "en",
	mode: options.mode ?? routing?.mode ?? "prefix-no-default",
	locales: options.locales ?? internationalization?.locales ?? LOCALES,
	rewrite: options.rewrite ?? routing?.rewrite,
	domains: options.domains ?? routing?.domains
});
var isDeclaredLocale = (value, locales) => !!value && (locales ?? internationalization.locales).includes(value);
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	if (locales?.includes(selectedLocale)) return selectedLocale;
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
var getLocaleFromPath = (inputUrl = "/", options) => {
	const { defaultLocale, locales, mode } = resolveRoutingConfig(options);
	if (!defaultLocale || !locales) return defaultLocale;
	const isAbsoluteUrl = checkIsURLAbsolute(inputUrl);
	const fixedInputUrl = inputUrl?.endsWith("/") && inputUrl.length > 1 ? inputUrl.slice(0, -1) : inputUrl;
	const url = isAbsoluteUrl ? new URL(fixedInputUrl) : new URL(fixedInputUrl, "http://e.com");
	if (mode === "search-params") {
		const localeParam = url.searchParams.get("locale");
		if (isDeclaredLocale(localeParam, locales)) return localeParam;
		return defaultLocale;
	}
	if (mode === "no-prefix") return defaultLocale;
	const firstSegment = url.pathname.split("/")[1];
	if (isDeclaredLocale(firstSegment, locales)) return firstSegment;
	if (mode === "prefix-no-default") return defaultLocale;
};
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, variant, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(() => localeProp ?? getLocaleInStorage() ?? defaultLocaleProp ?? defaultLocaleConfig);
	const [adoptedLocaleProp, setAdoptedLocaleProp] = useState(localeProp);
	if (localeProp !== adoptedLocaleProp) {
		setAdoptedLocaleProp(localeProp);
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = useCallback((newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	}, [
		currentLocale,
		availableLocales,
		isCookieEnabled
	]);
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	const contextValue = useMemo(() => ({
		locale: resolvedLocale,
		setLocale,
		variant,
		disableEditor
	}), [
		resolvedLocale,
		setLocale,
		variant,
		disableEditor
	]);
	return jsx(IntlayerClientContext.Provider, {
		value: contextValue,
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [
		false,
		false,
		children
	]
});
var NextIntlClientProvider = ({ locale, children, messages: _messages, timeZone: _timeZone, now: _now, ...rest }) => {
	if (typeof _messages !== "undefined") getAppLogger({ log })(`${colorize("NextIntlClientProvider", CYAN)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	const pathname = usePathname();
	const mode = routing?.mode ?? "prefix-no-default";
	const resolvedLocale = locale ?? (mode === "prefix-all" || mode === "prefix-no-default" ? getLocaleFromPath(pathname) : void 0);
	return jsx(IntlayerProvider, {
		locale: resolvedLocale,
		...rest,
		children
	}, String(resolvedLocale));
};
var navigatePath = (contentValue, path, keySeparator = ".") => {
	if (!path) return contentValue;
	if (contentValue !== null && contentValue !== void 0 && typeof contentValue === "object") {
		const flatValue = contentValue[path];
		if (flatValue !== void 0) return flatValue;
	}
	if (keySeparator === false || !path.includes(keySeparator)) return;
	let current = contentValue;
	for (const part of path.split(keySeparator)) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var ENUMERATION_METADATA_KEYS = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
];
var resolveValuePath = (values, path) => {
	if (path in values) return values[path];
	let current = values;
	for (const part of path.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var formatArgument = (value, type, style, locale) => {
	try {
		if (type === "number") {
			const numberValue = Number(value);
			if (style === "percent") return getCachedIntl("NumberFormat", locale, { style: "percent" }).format(numberValue);
			if (style === "integer") return getCachedIntl("NumberFormat", locale, { maximumFractionDigits: 0 }).format(numberValue);
			return getCachedIntl("NumberFormat", locale).format(numberValue);
		}
		if (type === "date" || type === "time") {
			const dateValue = value instanceof Date ? value : new Date(value);
			const dateTimeStyle = [
				"short",
				"medium",
				"long",
				"full"
			].includes(style ?? "") ? style : type === "date" ? "medium" : "short";
			return getCachedIntl("DateTimeFormat", locale, type === "date" ? { dateStyle: dateTimeStyle } : { timeStyle: dateTimeStyle }).format(dateValue);
		}
	} catch {}
	return String(value);
};
var interpolateMessage = (template, values = {}, locale = "en") => template.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return type ? formatArgument(value, type, style, locale) : String(value);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return formatArgument(value, type, style, locale);
}).replace(/\{\s*([\w.]+)\s*\}/g, (match, path) => {
	const value = resolveValuePath(values, path);
	return value === void 0 ? match : String(value);
});
var getSelectorValue = (values, variableName) => values[variableName] ?? values.count ?? values.n;
var resolveMessageNode = (node, values = {}, locale = "en") => {
	if (node === null || node === void 0) return node;
	if (typeof node === "string") return interpolateMessage(node, values, locale);
	if (typeof node === "number" || typeof node === "boolean") return String(node);
	if (typeof node === "function") try {
		return resolveMessageNode(node(values), values, locale);
	} catch {
		return;
	}
	if (Array.isArray(node)) return node.map((item) => String(resolveMessageNode(item, values, locale) ?? "")).join("");
	const typedNode = node;
	if (typedNode.nodeType === "insertion") return resolveMessageNode(typedNode[INSERTION], values, locale);
	if (typedNode.nodeType === "html") return resolveMessageNode(typedNode[HTML], values, locale);
	if (typedNode.nodeType === "plural") {
		const pluralState = typedNode[PLURAL];
		return resolveMessageNode(getPlural(pluralState, Number(getSelectorValue(values, "count") ?? 1), locale), values, locale);
	}
	if (typedNode.nodeType === "enumeration") {
		const enumerationState = typedNode[ENUMERATION];
		const variableName = ENUMERATION_METADATA_KEYS.map((metadataKey) => enumerationState[metadataKey]).find((name) => typeof name === "string") ?? "count";
		const isOrdinal = enumerationState.__intlayer_icu_ordinal === true;
		const options = {};
		for (const [key, value] of Object.entries(enumerationState)) if (!ENUMERATION_METADATA_KEYS.includes(key)) options[key] = value;
		const selector = getSelectorValue(values, variableName);
		let selected;
		if (isOrdinal && !Number.isNaN(Number(selector))) {
			const ordinalCount = Number(selector);
			const ordinalCategory = getCachedIntl("PluralRules", locale, { type: "ordinal" }).select(ordinalCount);
			selected = options[String(ordinalCount)] ?? options[ordinalCategory] ?? options.fallback ?? options.other;
		} else if (typeof selector === "number" || !Number.isNaN(Number(selector))) selected = getEnumeration(options, Number(selector));
		else selected = options[String(selector)] ?? options.fallback ?? options.other;
		return resolveMessageNode(selected, values, locale);
	}
	if (typedNode.nodeType === "select") {
		const selectState = typedNode[SELECT];
		const selector = getSelectorValue(values, typeof typedNode.variable === "string" ? typedNode.variable : "value");
		return resolveMessageNode(getSelect(selectState, String(selector ?? "")), values, locale);
	}
	if (typedNode.nodeType === "gender") {
		const genderState = typedNode[GENDER];
		return resolveMessageNode(genderState[String(values.gender ?? "")] ?? genderState.fallback ?? genderState.other, values, locale);
	}
	return node;
};
var resolveMessageNodeToString = (node, values = {}, locale = "en") => {
	const resolved = resolveMessageNode(node, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var parseTaggedMessage = (message) => {
	const tokens = [];
	const tagRegex = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g;
	let lastIndex = 0;
	let match = tagRegex.exec(message);
	while (match !== null) {
		if (match.index > lastIndex) tokens.push(message.slice(lastIndex, match.index));
		const [, selfClosingTag, tag, inner] = match;
		if (selfClosingTag) tokens.push({
			tag: selfClosingTag,
			children: []
		});
		else if (tag) tokens.push({
			tag,
			children: parseTaggedMessage(inner ?? "")
		});
		lastIndex = match.index + match[0].length;
		match = tagRegex.exec(message);
	}
	if (lastIndex < message.length) tokens.push(message.slice(lastIndex));
	return tokens;
};
var splitRichValues = (values = {}) => {
	const scalarValues = {};
	const renderers = {};
	for (const [valueKey, value] of Object.entries(values)) if (typeof value === "function") renderers[valueKey] = value;
	else scalarValues[valueKey] = value;
	return {
		scalarValues,
		renderers
	};
};
var renderRichTokens = (tokens, renderers) => tokens.map((token, tokenIndex) => {
	if (typeof token === "string") return token;
	const children = renderRichTokens(token.children, renderers);
	const renderer = renderers[token.tag];
	if (typeof renderer === "function") return jsx(Fragment, { children: renderer(children) }, tokenIndex);
	return jsx(Fragment, { children }, tokenIndex);
});
var renderMarkupTokens = (tokens, renderers) => tokens.map((token) => {
	if (typeof token === "string") return token;
	const children = renderMarkupTokens(token.children, renderers);
	const renderer = renderers[token.tag];
	if (typeof renderer === "function") return renderer(children);
	return children;
}).join("");
var createNamespaceTranslator = (locale, namespace) => {
	const [dictionaryKey, ...prefixSegments] = (namespace ?? "").split(".");
	const keyPrefix = prefixSegments.join(".");
	const lookup = (lookupKey) => lookupNamespaceKey(locale, dictionaryKey ?? "", keyPrefix, lookupKey);
	return createLookupTranslator(locale, lookup, (key) => namespace ? `${namespace}.${key}` : key);
};
var lookupNamespaceKey = (locale, dictionaryKey, keyPrefix, key) => {
	let targetDictionaryKey = dictionaryKey;
	let path = keyPrefix ? `${keyPrefix}.${key}` : key;
	const dictionaries = getDictionaries();
	if (!targetDictionaryKey) {
		const [firstSegment, ...restSegments] = key.split(".");
		targetDictionaryKey = firstSegment ?? key;
		path = restSegments.join(".");
		if (!dictionaries[targetDictionaryKey]) for (const dictKey of Object.keys(dictionaries)) try {
			const result = navigatePath(getIntlayer(dictKey, locale), key);
			if (result !== void 0) return result;
		} catch {}
	}
	try {
		return navigatePath(getIntlayer(targetDictionaryKey, locale), path);
	} catch {
		return;
	}
};
var createLookupTranslator = (locale, lookup, missingKeyFallback) => {
	const resolveToString = (key, values = {}) => {
		const rawValue = lookup(key);
		if (rawValue === null || rawValue === void 0) return void 0;
		return resolveMessageNodeToString(rawValue, values, locale);
	};
	const translate = (key, values) => resolveToString(key, values) ?? missingKeyFallback(key);
	return Object.assign(translate, {
		has: (key) => lookup(key) !== void 0,
		raw: (key) => lookup(key),
		rich: (key, values) => {
			const { scalarValues, renderers } = splitRichValues(values);
			const message = resolveToString(key, scalarValues);
			if (message === void 0) return missingKeyFallback(key);
			return jsx(Fragment$1, { children: renderRichTokens(parseTaggedMessage(message), renderers) });
		},
		markup: (key, values) => {
			const { scalarValues, renderers } = splitRichValues(values);
			const message = resolveToString(key, scalarValues);
			if (message === void 0) return missingKeyFallback(key);
			return renderMarkupTokens(parseTaggedMessage(message), renderers);
		}
	});
};
var useTranslations = ((namespace) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => createNamespaceTranslator(currentLocale, namespace), [currentLocale, namespace]);
});
function AboutGrid() {
	const t = useTranslations();
	return jsxs("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: t("about-grid.whyThisExists")
			}), jsx("p", {
				className: "text-sm text-muted-foreground",
				children: t("about-grid.choosingAnI18nLibraryIs")
			})]
		}), jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: t("footer.methodology")
			}), jsx("p", {
				className: "text-sm text-muted-foreground",
				children: t("about-grid.theSame10PageApp")
			})]
		})]
	});
}
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
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(NextIntlClientProvider, {
		locale,
		timeZone: "UTC",
		children
	});
}
var locale = "en";
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(AboutGrid, {}) });
}
export { Wrapped as default };

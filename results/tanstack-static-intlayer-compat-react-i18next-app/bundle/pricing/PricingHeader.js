import * as React from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var MAGENTA = "\x1B[35m";
var BEIGE = "\x1B[38;5;3m";
var CYAN = "\x1B[36m";
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
var rtlScripts = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
];
var getHTMLTextDir = (locale) => {
	if (!locale) return "ltr";
	try {
		const localeInfo = new Intl.Locale(locale);
		if ("getTextInfo" in localeInfo) return localeInfo.getTextInfo().direction;
		if ("textInfo" in localeInfo) return localeInfo.textInfo.direction;
		const maximized = localeInfo.maximize();
		return rtlScripts.includes(maximized.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
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
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
};
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
var dictionaries = { "index": {
	key: "index",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"route\":{\"oopsPageNotFound\":\"Oops! Page not found\",\"returnToHome\":\"Return to Home\",\"couldNotMeasureHydrationDuration\":\"Could not measure hydration duration:\"},\"header\":{\"home\":\"Home\",\"methodology\":\"Methodology\",\"mockPages\":\"Mock Pages\",\"products\":\"Products\",\"pricing\":\"Pricing\",\"team\":\"Team\",\"blog\":\"Blog\",\"careers\":\"Careers\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"settings\":\"Settings\",\"goToGithub\":\"Go to GitHub\"},\"footer\":{\"resources\":\"Resources\",\"contact\":\"Contact\",\"github\":\"GitHub\",\"methodology\":\"Methodology\",\"contributing\":\"Contributing\",\"builtWith\":\"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.\",\"anOpenSourceTestApplication\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Theme mode: auto (system). Click to switch to light mode.\",\"themeModeLightClick\":\"Theme mode: light. Click to switch to dark mode.\",\"themeModeDarkClick\":\"Theme mode: dark. Click to switch to auto (system) mode.\",\"themeAuto\":\"Theme: Auto\",\"themeDark\":\"Theme: Dark\",\"themeLight\":\"Theme: Light\"},\"hero\":{\"aTestApplicationDesignedTo\":\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\",\"viewResults\":\"View Results\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Why These Metrics Matter\",\"bundleSize\":\"Bundle Size\",\"theBundleIsTheData\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"renderingHydration\":\"Rendering & Hydration\",\"connectingALargeJson\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"dynamicLoading\":\"Dynamic Loading\",\"loadingAllTranslationsUpfront\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Understanding the Impact\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequests\":\"Waterfall requests:\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"cacheInvalidation\":\"Cache invalidation:\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"},\"resultsTable\":{\"sampleResults\":\"Sample Results\",\"bundleSize\":\"Bundle Size\",\"lookupTime\":\"Lookup Time\",\"lazyLoading\":\"Lazy Loading\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"About This Benchmark\",\"thisIsAnOpenSource\":\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\"},\"aboutGrid\":{\"whyThisExists\":\"Why This Exists\",\"choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodology\":\"Methodology\",\"theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Bundle size impact\",\"theAdditionalJavascriptBytesSent\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"renderingOverhead\":\"Rendering overhead\",\"howMuchExtraTimeThe\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"hydrationCost\":\"Hydration cost\",\"duringSsrTranslationDataIs\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"lazyLoadingEffectiveness\":\"Lazy loading effectiveness\",\"whetherSplittingTranslationsByRoute\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"localeSwitchSpeed\":\"Locale switch speed\",\"howFastTheAppCan\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"whatWeMeasure\":\"What We Measure\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Insights, deep dives, and updates from the i18n benchmarking community.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"march152026\":\"March 15, 2026\",\"weTested12DifferentInternationalization\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"How to Reduce Your i18n Bundle by 60%\",\"march82026\":\"March 8, 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"tutorial\":\"Tutorial\",\"theStateOfInternationalizationIn\":\"The State of Internationalization in React\",\"february282026\":\"February 28, 2026\",\"anOverviewOfTheCurrent\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"analysis\":\"Analysis\",\"migratingFromReactI18nextTo\":\"Migrating from react-i18next to Lingui\",\"february152026\":\"February 15, 2026\",\"aStepByStepGuide\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components and i18n: What Changes?\",\"february12026\":\"February 1, 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark Methodology: How We Test\",\"january202026\":\"January 20, 2026\",\"aTransparentLookAtOur\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"meta\":\"Meta\",\"readMore\":\"Read More →\"},\"careersHeader\":{\"title\":\"Careers\",\"joinOurMissionToImprove\":\"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\"},\"careersBenefits\":{\"remoteFirst\":\"Remote-first\",\"workFromAnywhereInThe\":\"Work from anywhere in the world\",\"competitivePay\":\"Competitive pay\",\"topOfMarketCompensation\":\"Top-of-market compensation\",\"openSourceTime\":\"Open source time\",\"x20TimeForOssContributions\":\"20% time for OSS contributions\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Senior Frontend Engineer\",\"remote\":\"Remote\",\"fullTime\":\"Full-time\",\"engineering\":\"Engineering\",\"buildAndMaintainOurBenchmarking\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"backendEngineer\":\"Backend Engineer\",\"designAndScaleOurCloud\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"technicalWriter\":\"Technical Writer\",\"partTime\":\"Part-time\",\"documentation\":\"Documentation\",\"createComprehensiveGuidesApiReferences\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"devrelEngineer\":\"DevRel Engineer\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"community\":\"Community\",\"engageWithTheI18nCommunity\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"qaEngineer\":\"QA Engineer\",\"ensureTheAccuracyAndReliability\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\",\"openPositions\":\"Open Positions\",\"applyNow\":\"Apply Now\"},\"contactHeader\":{\"getInTouch\":\"Get in Touch\",\"haveIdeasFoundABug\":\"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\"},\"contactForm\":{\"name\":\"Name\",\"email\":\"Email\",\"subject\":\"Subject\",\"message\":\"Message\",\"sendMessage\":\"Send Message\",\"wellGetBackTo\":\"We'll get back to you within 48 hours.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Frequently Asked Questions\",\"everythingYouNeedToKnow\":\"Everything you need to know about i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"isTheDataReliable\":\"Is the data reliable?\",\"weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"howCanIContribute\":\"How can I contribute?\",\"thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Simple, Transparent Pricing\",\"chooseThePlanThatFits\":\"Choose the plan that fits your team. No hidden fees.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"$0\",\"forever\":\"forever\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} benchmark runs/day\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} libraries\"},\"communitySupport\":\"Community support\",\"publicResults\":\"Public results\",\"pro\":\"Pro\",\"price29\":\"$29\",\"month\":\"/month\",\"unlimitedRuns\":\"Unlimited runs\",\"allLibraries\":\"All libraries\",\"prioritySupport\":\"Priority support\",\"privateResults\":\"Private results\",\"ciIntegration\":\"CI integration\",\"historicalData\":\"Historical data\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Custom\",\"everythingInPro\":\"Everything in Pro\",\"onPremiseOption\":\"On-premise option\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Dedicated account manager\",\"customSlas\":\"Custom SLAs\",\"auditLogs\":\"Audit logs\",\"trainingSessions\":\"Training sessions\",\"contactSales\":\"Contact Sales\",\"getStarted\":\"Get Started\"},\"productsHeader\":{\"products\":\"Products\",\"toolsAndServicesTo\":\"Tools and services to help you optimize your internationalization strategy.\"},\"productsGrid\":{\"benchmarkCli\":\"Benchmark CLI\",\"runBenchmarksLocallyFromYour\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"free\":\"Free\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"price29mo\":\"$29/mo\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"contactUs\":\"Contact Us\",\"migrationAssistant\":\"Migration Assistant\",\"aiPoweredToolThatHelps\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"price99oneTime\":\"$99 one-time\",\"translationQa\":\"Translation QA\",\"automatedQualityChecksForMissing\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"price19mo\":\"$19/mo\",\"bundleOptimizer\":\"Bundle Optimizer\",\"analyzesAndOptimizesYourI18n\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"price49mo\":\"$49/mo\",\"learnMore\":\"Learn More\"},\"settingsHeader\":{\"settings\":\"Settings\",\"manageYourAccountPreferences\":\"Manage your account preferences and configuration.\"},\"profileSection\":{\"profile\":\"Profile\",\"displayName\":\"Display Name\",\"email\":\"Email\"},\"preferencesSection\":{\"preferences\":\"Preferences\",\"emailNotifications\":\"Email Notifications\",\"receiveWeeklyBenchmarkReports\":\"Receive weekly benchmark reports\",\"darkMode\":\"Dark Mode\",\"useDarkColorScheme\":\"Use dark color scheme\",\"defaultLanguage\":\"Default Language\"},\"apiAccessSection\":{\"apiAccess\":\"API Access\",\"apiKey\":\"API Key\",\"useThisKeyTo\":\"Use this key to access the benchmarking API programmatically.\",\"copy\":\"Copy\"},\"settingsFooter\":{\"cancel\":\"Cancel\",\"saveChanges\":\"Save Changes\"},\"teamHeader\":{\"ourTeam\":\"Our Team\",\"meetThePeopleBehindI18n\":\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance Engineer\",\"specializesInJavascriptPerformanceOptimization\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Data Analyst\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community Manager\",\"managesCommunityContributionsPartnershipsAnd\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"mockBanner\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"route\":{\"oopsPageNotFound\":\"Oups ! Page non trouvée\",\"returnToHome\":\"Retour à l'accueil\",\"couldNotMeasureHydrationDuration\":\"Impossible de mesurer la durée d'hydratation :\"},\"header\":{\"home\":\"Accueil\",\"methodology\":\"Méthodologie\",\"mockPages\":\"Pages de test\",\"products\":\"Produits\",\"pricing\":\"Tarifs\",\"team\":\"Équipe\",\"blog\":\"Blog\",\"careers\":\"Carrières\",\"faq\":\"FAQ\",\"contact\":\"Contact\",\"settings\":\"Paramètres\",\"goToGithub\":\"Aller sur GitHub\"},\"footer\":{\"resources\":\"Ressources\",\"contact\":\"Contact\",\"github\":\"GitHub\",\"methodology\":\"Méthodologie\",\"contributing\":\"Contribuer\",\"builtWith\":\"i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.\",\"anOpenSourceTestApplication\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"themeModeLightClick\":\"Mode thématique : clair. Cliquez pour passer en mode sombre.\",\"themeModeDarkClick\":\"Mode thématique : sombre. Cliquez pour passer en mode auto (système).\",\"themeAuto\":\"Thème : Auto\",\"themeDark\":\"Thème : Sombre\",\"themeLight\":\"Thème : Clair\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\",\"viewResults\":\"Voir les résultats\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Pourquoi ces mesures sont importantes\",\"bundleSize\":\"Taille du bundle\",\"theBundleIsTheData\":\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"renderingHydration\":\"Rendu & Hydratation\",\"connectingALargeJson\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"dynamicLoading\":\"Chargement dynamique\",\"loadingAllTranslationsUpfront\":\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Comprendre l'impact\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequests\":\"Requêtes en cascade :\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"cacheInvalidation\":\"Invalidation du cache :\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"},\"resultsTable\":{\"sampleResults\":\"Exemples de résultats\",\"bundleSize\":\"Taille du bundle\",\"lookupTime\":\"Temps de recherche\",\"lazyLoading\":\"Chargement différé\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"À propos de ce Benchmark\",\"thisIsAnOpenSource\":\"Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.\"},\"aboutGrid\":{\"whyThisExists\":\"Pourquoi ce Projet Existe\",\"choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision d'architecture aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Quel est son impact sur le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement asynchrone aide-t-il vraiment ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"methodology\":\"Méthodologie\",\"theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons le React Profiler pour capturer les temps de rendu lors des changements de locale. Tous les tests s'exécutent en CI sur du matériel constant pour garantir des résultats reproductibles.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Impact sur la taille du bundle\",\"theAdditionalJavascriptBytesSent\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"renderingOverhead\":\"Surcharge de rendu\",\"howMuchExtraTimeThe\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.\",\"hydrationCost\":\"Coût d'hydratation\",\"duringSsrTranslationDataIs\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\",\"lazyLoadingEffectiveness\":\"Efficacité du lazy loading\",\"whetherSplittingTranslationsByRoute\":\"Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\",\"localeSwitchSpeed\":\"Vitesse de changement de langue\",\"howFastTheAppCan\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"whatWeMeasure\":\"Ce que nous mesurons\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Comparer les bibliothèques i18n en 2026 : une analyse approfondie\",\"march152026\":\"15 mars 2026\",\"weTested12DifferentInternationalization\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"Comment réduire votre bundle i18n de 60 %\",\"march82026\":\"8 mars 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.\",\"tutorial\":\"Tutoriel\",\"theStateOfInternationalizationIn\":\"L'état de l'internationalisation dans React\",\"february282026\":\"28 février 2026\",\"anOverviewOfTheCurrent\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"analysis\":\"Analyse\",\"migratingFromReactI18nextTo\":\"Migrer de react-i18next vers Lingui\",\"february152026\":\"15 février 2026\",\"aStepByStepGuide\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components et i18n : qu'est-ce qui change ?\",\"february12026\":\"1er février 2026\",\"reactServerComponentsIntroduceNew\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"benchmarkMethodologyHowWeTest\":\"Méthodologie du Benchmark : comment nous testons\",\"january202026\":\"20 janvier 2026\",\"aTransparentLookAtOur\":\"Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.\",\"meta\":\"Méta\",\"readMore\":\"Lire la suite →\"},\"careersHeader\":{\"title\":\"Carrières\",\"joinOurMissionToImprove\":\"Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe télétravail d'abord qui valorise l'impact, la transparence et l'apprentissage continu.\"},\"careersBenefits\":{\"remoteFirst\":\"Télétravail d'abord\",\"workFromAnywhereInThe\":\"Travailler de n'importe où dans le monde\",\"competitivePay\":\"Rémunération compétitive\",\"topOfMarketCompensation\":\"Rémunération au-dessus du marché\",\"openSourceTime\":\"Temps alloué à l'open source\",\"x20TimeForOssContributions\":\"20 % du temps pour les contributions OSS\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Ingénieur Frontend Senior\",\"remote\":\"Télétravail\",\"fullTime\":\"Temps plein\",\"engineering\":\"Ingénierie\",\"buildAndMaintainOurBenchmarking\":\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.\",\"backendEngineer\":\"Ingénieur Backend\",\"designAndScaleOurCloud\":\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.\",\"technicalWriter\":\"Rédacteur Technique\",\"partTime\":\"Temps partiel\",\"documentation\":\"Documentation\",\"createComprehensiveGuidesApiReferences\":\"Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.\",\"devrelEngineer\":\"Ingénieur DevRel\",\"sanFranciscoRemote\":\"San Francisco / Télétravail\",\"community\":\"Communauté\",\"engageWithTheI18nCommunity\":\"S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\",\"qaEngineer\":\"Ingénieur QA\",\"ensureTheAccuracyAndReliability\":\"Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.\",\"openPositions\":\"Postes Ouverts\",\"applyNow\":\"Postuler Maintenant\"},\"contactHeader\":{\"getInTouch\":\"Contactez-nous\",\"haveIdeasFoundABug\":\"Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à\"},\"contactForm\":{\"name\":\"Nom\",\"email\":\"Email\",\"subject\":\"Sujet\",\"message\":\"Message\",\"sendMessage\":\"Envoyer le message\",\"wellGetBackTo\":\"Nous vous répondrons dans les 48 heures.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Foire Aux Questions\",\"everythingYouNeedToKnow\":\"Tout ce que vous devez savoir sur i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"Qu'est-ce que i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite d'analyse comparative open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\",\"howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"weReRunAllBenchmarks\":\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle immédiat de re-benchmarking.\",\"isTheDataReliable\":\"Les données sont-elles fiables ?\",\"weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées aux côtés de notre analyse pour une transparence totale.\",\"doYouOfferConsultingServices\":\"Proposez-vous des services de conseil ?\",\"yesOurEnterprisePlanIncludes\":\"Oui, notre plan Entreprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation spécifique, votre échelle et vos contraintes.\",\"howCanIContribute\":\"Comment puis-je contribuer ?\",\"thereAreManyWaysTo\":\"Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Tarification Simple et Transparente\",\"chooseThePlanThatFits\":\"Choisissez le plan qui convient à votre équipe. Pas de frais cachés.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"pour toujours\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} lancements de benchmark/jour\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliothèques\"},\"communitySupport\":\"Support de la communauté\",\"publicResults\":\"Résultats publics\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mois\",\"unlimitedRuns\":\"Lancements illimités\",\"allLibraries\":\"Toutes les bibliothèques\",\"prioritySupport\":\"Support prioritaire\",\"privateResults\":\"Résultats privés\",\"ciIntegration\":\"Intégration CI\",\"historicalData\":\"Données historiques\",\"enterprise\":\"Entreprise\",\"customPrice\":\"Custom\",\"everythingInPro\":\"Tout dans Pro\",\"onPremiseOption\":\"Option sur site\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Gestionnaire de compte dédié\",\"customSlas\":\"SLA personnalisés\",\"auditLogs\":\"Journaux d'audit\",\"trainingSessions\":\"Sessions de formation\",\"contactSales\":\"Contacter les ventes\",\"getStarted\":\"Commencer\"},\"productsHeader\":{\"products\":\"Produits\",\"toolsAndServicesTo\":\"Des outils et des services pour vous aider à optimiser votre stratégie d'internationalisation.\"},\"productsGrid\":{\"benchmarkCli\":\"CLI de Benchmark\",\"runBenchmarksLocallyFromYour\":\"Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"free\":\"Gratuit\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"price29mo\":\"29 $/mois\",\"benchmarkEnterprise\":\"Benchmark Entreprise\",\"onPremiseDeploymentWithSso\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"contactUs\":\"Contactez-nous\",\"migrationAssistant\":\"Assistant de Migration\",\"aiPoweredToolThatHelps\":\"Outil propulsé par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d'arrêt.\",\"price99oneTime\":\"99 $ une fois\",\"translationQa\":\"QA de Traduction\",\"automatedQualityChecksForMissing\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"price19mo\":\"19 $/mois\",\"bundleOptimizer\":\"Optimiseur de Bundle\",\"analyzesAndOptimizesYourI18n\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\",\"price49mo\":\"49 $/mois\",\"learnMore\":\"En savoir plus\"},\"settingsHeader\":{\"settings\":\"Paramètres\",\"manageYourAccountPreferences\":\"Gérez vos préférences de compte et votre configuration.\"},\"profileSection\":{\"profile\":\"Profil\",\"displayName\":\"Nom d'affichage\",\"email\":\"Email\"},\"preferencesSection\":{\"preferences\":\"Préférences\",\"emailNotifications\":\"Notifications par email\",\"receiveWeeklyBenchmarkReports\":\"Recevoir des rapports hebdomadaires de benchmark\",\"darkMode\":\"Mode sombre\",\"useDarkColorScheme\":\"Utiliser le schéma de couleurs sombres\",\"defaultLanguage\":\"Langue par défaut\"},\"apiAccessSection\":{\"apiAccess\":\"Accès API\",\"apiKey\":\"Clé API\",\"useThisKeyTo\":\"Utilisez cette clé pour accéder à l'API de benchmarking par programmation.\",\"copy\":\"Copier\"},\"settingsFooter\":{\"cancel\":\"Annuler\",\"saveChanges\":\"Enregistrer les modifications\"},\"teamHeader\":{\"ourTeam\":\"Notre équipe\",\"meetThePeopleBehindI18n\":\"Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice & Ingénieure en chef\",\"formerGoogleEngineerWith10\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingénieur Performance\",\"specializesInJavascriptPerformanceOptimization\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Développeur Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analyste de données\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de communauté\",\"managesCommunityContributionsPartnershipsAnd\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"mockBanner\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"route\":{\"oopsPageNotFound\":\"¡Ups! Página no encontrada\",\"returnToHome\":\"Volver al inicio\",\"couldNotMeasureHydrationDuration\":\"No se pudo medir la duración de la hidratación:\"},\"header\":{\"home\":\"Inicio\",\"methodology\":\"Metodología\",\"mockPages\":\"Páginas de prueba\",\"products\":\"Productos\",\"pricing\":\"Precios\",\"team\":\"Equipo\",\"blog\":\"Blog\",\"careers\":\"Carreras\",\"faq\":\"FAQ\",\"contact\":\"Contacto\",\"settings\":\"Configuración\",\"goToGithub\":\"Ir a GitHub\"},\"footer\":{\"resources\":\"Recursos\",\"contact\":\"Contacto\",\"github\":\"GitHub\",\"methodology\":\"Metodología\",\"contributing\":\"Contribuir\",\"builtWith\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.\",\"anOpenSourceTestApplication\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"themeModeLightClick\":\"Modo de tema: claro. Haga clic para cambiar al modo oscuro.\",\"themeModeDarkClick\":\"Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).\",\"themeAuto\":\"Tema: Auto\",\"themeDark\":\"Tema: Oscuro\",\"themeLight\":\"Tema: Claro\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.\",\"viewResults\":\"Ver resultados\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Por qué son importantes estas métricas\",\"bundleSize\":\"Tamaño del paquete\",\"theBundleIsTheData\":\"El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\",\"renderingHydration\":\"Renderizado e hidratación\",\"connectingALargeJson\":\"Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).\",\"dynamicLoading\":\"Carga dinámica\",\"loadingAllTranslationsUpfront\":\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Entendiendo el impacto\",\"whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"theJsonMustBeParsed\":\"El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.\",\"duringServerSideRenderingThe\":\"Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"cacheInvalidation\":\"Invalidación de la caché:\",\"whatThisBenchmarkMeasures\":\"Lo que mide este benchmark\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"},\"resultsTable\":{\"sampleResults\":\"Resultados de muestra\",\"bundleSize\":\"Tamaño del paquete\",\"lookupTime\":\"Tiempo de búsqueda\",\"lazyLoading\":\"Carga diferida\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"Acerca de este Benchmark\",\"thisIsAnOpenSource\":\"Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.\"},\"aboutGrid\":{\"whyThisExists\":\"¿Por Qué Existe Este Proyecto?\",\"choosingAnI18nLibraryIs\":\"Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿El lazy loading realmente ayuda o solo traslada el costo? Este benchmark responde a esas preguntas con datos reales.\",\"methodology\":\"Metodología\",\"theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y usamos React Profiler para capturar los tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Impacto en el tamaño del bundle\",\"theAdditionalJavascriptBytesSent\":\"Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderizado\",\"howMuchExtraTimeThe\":\"¿Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React? Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\",\"hydrationCost\":\"Costo de hidratación\",\"duringSsrTranslationDataIs\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"lazyLoadingEffectiveness\":\"Efectividad del lazy loading\",\"whetherSplittingTranslationsByRoute\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"localeSwitchSpeed\":\"Velocidad de cambio de idioma\",\"howFastTheAppCan\":\"Qué tan rápido puede cambiar la aplicación de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\",\"whatWeMeasure\":\"Lo que medimos\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Comparativa de bibliotecas i18n en 2026: un análisis profundo\",\"march152026\":\"15 de marzo de 2026\",\"weTested12DifferentInternationalization\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Estos son los resultados sorprendentes.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"Cómo reducir su bundle i18n en un 60 %\",\"march82026\":\"8 de marzo de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estrategias prácticas para optimizar los conjuntos de traducción, incluido el lazy loading, la división del código y las optimizaciones en el momento de la compilación.\",\"tutorial\":\"Tutorial\",\"theStateOfInternationalizationIn\":\"El estado de la internacionalización en React\",\"february282026\":\"28 de febrero de 2026\",\"anOverviewOfTheCurrent\":\"Una visión general del ecosistema actual de i18n en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"analysis\":\"Análisis\",\"migratingFromReactI18nextTo\":\"Migración de react-i18next a Lingui\",\"february152026\":\"15 de febrero de 2026\",\"aStepByStepGuide\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: ¿Qué cambia?\",\"february12026\":\"1 de febrero de 2026\",\"reactServerComponentsIntroduceNew\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodología del Benchmark: Cómo probamos\",\"january202026\":\"20 de enero de 2026\",\"aTransparentLookAtOur\":\"Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.\",\"meta\":\"Meta\",\"readMore\":\"Leer más →\"},\"careersHeader\":{\"title\":\"Carreras\",\"joinOurMissionToImprove\":\"Únete a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo remoto primero que valora el impacto, la transparencia y el aprendizaje continuo.\"},\"careersBenefits\":{\"remoteFirst\":\"Primero remoto\",\"workFromAnywhereInThe\":\"Trabaja desde cualquier parte del mundo\",\"competitivePay\":\"Salario competitivo\",\"topOfMarketCompensation\":\"Compensación superior al mercado\",\"openSourceTime\":\"Tiempo dedicado al código abierto\",\"x20TimeForOssContributions\":\"20% de tiempo para contribuciones de OSS\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Ingeniero Frontend Principal\",\"remote\":\"Remoto\",\"fullTime\":\"Tiempo completo\",\"engineering\":\"Ingeniería\",\"buildAndMaintainOurBenchmarking\":\"Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.\",\"backendEngineer\":\"Ingeniero Backend\",\"designAndScaleOurCloud\":\"Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.\",\"technicalWriter\":\"Redactor Técnico\",\"partTime\":\"Tiempo parcial\",\"documentation\":\"Documentación\",\"createComprehensiveGuidesApiReferences\":\"Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.\",\"devrelEngineer\":\"Ingeniero DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"community\":\"Comunidad\",\"engageWithTheI18nCommunity\":\"Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\",\"qaEngineer\":\"Ingeniero QA\",\"ensureTheAccuracyAndReliability\":\"Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.\",\"openPositions\":\"Puestos Abiertos\",\"applyNow\":\"Postular Ahora\"},\"contactHeader\":{\"getInTouch\":\"Póngase en contacto\",\"haveIdeasFoundABug\":\"¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en\"},\"contactForm\":{\"name\":\"Nombre\",\"email\":\"Correo electrónico\",\"subject\":\"Asunto\",\"message\":\"Mensaje\",\"sendMessage\":\"Enviar mensaje\",\"wellGetBackTo\":\"Nos pondremos en contacto con usted en un plazo de 48 horas.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Preguntas Frecuentes\",\"everythingYouNeedToKnow\":\"Todo lo que necesitas saber sobre i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks ?\",\"weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas son compatibles actualmente ?\",\"weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará las presentaciones que califiquen.\",\"howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se actualizan los benchmarks ?\",\"weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"isTheDataReliable\":\"¿Son fiables los datos ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos sin procesar se publican junto con nuestro análisis para una total transparencia.\",\"doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría ?\",\"yesOurEnterprisePlanIncludes\":\"¡Sí! Nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y restricciones.\",\"howCanIContribute\":\"¿Cómo puedo contribuir ?\",\"thereAreManyWaysTo\":\"Hay muchas formas de contribuir: enviando benchmarks, mejorando la documentación, informando errores, sugiriendo nuevas métricas o patrocinando el proyecto. Visite nuestro repositorio de GitHub para más detalles.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Precios Simples y Transparentes\",\"chooseThePlanThatFits\":\"Elija el plan que se adapte a su equipo. Sin cargos ocultos.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"para siempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} ejecuciones de benchmark/día\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"communitySupport\":\"Soporte de la comunidad\",\"publicResults\":\"Resultados públicos\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mes\",\"unlimitedRuns\":\"Ejecuciones ilimitadas\",\"allLibraries\":\"Todas las bibliotecas\",\"prioritySupport\":\"Soporte prioritario\",\"privateResults\":\"Résultats privés\",\"ciIntegration\":\"Integración de CI\",\"historicalData\":\"Datos históricos\",\"enterprise\":\"Personalizado\",\"customPrice\":\"Custom\",\"everythingInPro\":\"Todo en Pro\",\"onPremiseOption\":\"Opción local\",\"ssoSaml\":\"SSO y SAML\",\"dedicatedAccountManager\":\"Gerente de cuenta dedicado\",\"customSlas\":\"SLA personalizados\",\"auditLogs\":\"Registros de auditoría\",\"trainingSessions\":\"Sesiones de formación\",\"contactSales\":\"Contactar a Ventas\",\"getStarted\":\"Empezar\"},\"productsHeader\":{\"products\":\"Productos\",\"toolsAndServicesTo\":\"Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización.\"},\"productsGrid\":{\"benchmarkCli\":\"CLI de Benchmark\",\"runBenchmarksLocallyFromYour\":\"Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\",\"free\":\"Gratis\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"price29mo\":\"29 $/mes\",\"benchmarkEnterprise\":\"Benchmark para Empresas\",\"onPremiseDeploymentWithSso\":\"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"contactUs\":\"Contáctenos\",\"migrationAssistant\":\"Asistente de Migración\",\"aiPoweredToolThatHelps\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.\",\"price99oneTime\":\"$99 una vez\",\"translationQa\":\"QA de Traducción\",\"automatedQualityChecksForMissing\":\"Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"price19mo\":\"19 $/mes\",\"bundleOptimizer\":\"Optimizador de Bundles\",\"analyzesAndOptimizesYourI18n\":\"Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.\",\"price49mo\":\"49 $/mes\",\"learnMore\":\"Más información\"},\"settingsHeader\":{\"settings\":\"Configuración\",\"manageYourAccountPreferences\":\"Gestione sus preferencias de cuenta y configuración.\"},\"profileSection\":{\"profile\":\"Perfil\",\"displayName\":\"Nombre de pantalla\",\"email\":\"Correo electrónico\"},\"preferencesSection\":{\"preferences\":\"Preferencias\",\"emailNotifications\":\"Notificaciones por correo electrónico\",\"receiveWeeklyBenchmarkReports\":\"Recibir informes semanales de benchmark\",\"darkMode\":\"Modo oscuro\",\"useDarkColorScheme\":\"Usar esquema de colores oscuros\",\"defaultLanguage\":\"Idioma predeterminado\"},\"apiAccessSection\":{\"apiAccess\":\"Acceso API\",\"apiKey\":\"Clave API\",\"useThisKeyTo\":\"Utilice esta clave para acceder a la API de benchmarking de forma programática.\",\"copy\":\"Copiar\"},\"settingsFooter\":{\"cancel\":\"Cancelar\",\"saveChanges\":\"Guardar cambios\"},\"teamHeader\":{\"ourTeam\":\"Nuestro equipo\",\"meetThePeopleBehindI18n\":\"Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e Ingeniera Principal\",\"formerGoogleEngineerWith10\":\"Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Abogado de desarrolladores\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desarrollador Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de datos\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de la comunidad\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\"},\"mockBanner\":\"⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.\"},\"de\":{\"route\":{\"oopsPageNotFound\":\"Hoppla! Seite nicht gefunden\",\"returnToHome\":\"Zurück zur Startseite\",\"couldNotMeasureHydrationDuration\":\"Hydratationsdauer konnte nicht gemessen werden:\"},\"header\":{\"home\":\"Startseite\",\"methodology\":\"Methodik\",\"mockPages\":\"Testseiten\",\"products\":\"Produkte\",\"pricing\":\"Preise\",\"team\":\"Team\",\"blog\":\"Blog\",\"careers\":\"Karriere\",\"faq\":\"FAQ\",\"contact\":\"Kontakt\",\"settings\":\"Einstellungen\",\"goToGithub\":\"Zu GitHub\"},\"footer\":{\"resources\":\"Ressourcen\",\"contact\":\"Kontakt\",\"github\":\"GitHub\",\"methodology\":\"Methodik\",\"contributing\":\"Beitragen\",\"builtWith\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.\",\"anOpenSourceTestApplication\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.\",\"themeModeLightClick\":\"Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.\",\"themeModeDarkClick\":\"Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.\",\"themeAuto\":\"Thema: Auto\",\"themeDark\":\"Thema: Dunkel\",\"themeLight\":\"Thema: Hell\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\",\"viewResults\":\"Ergebnisse anzeigen\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Warum diese Kennzahlen wichtig sind\",\"bundleSize\":\"Bundle-Größe\",\"theBundleIsTheData\":\"Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.\",\"renderingHydration\":\"Rendering & Hydratation\",\"connectingALargeJson\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"dynamicLoading\":\"Dynamisches Laden\",\"loadingAllTranslationsUpfront\":\"Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallRequests\":\"Waterfall-Anfragen:\",\"flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"cacheInvalidation\":\"Cache-Invalidierung:\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"},\"resultsTable\":{\"sampleResults\":\"Beispielergebnisse\",\"bundleSize\":\"Bundle-Größe\",\"lookupTime\":\"Suchzeit\",\"lazyLoading\":\"Lazy Loading\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"Über diesen Benchmark\",\"thisIsAnOpenSource\":\"Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.\"},\"aboutGrid\":{\"whyThisExists\":\"Warum dies existiert\",\"choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\",\"methodology\":\"Methodik\",\"theSame10PageApp\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden React Profiler, um die Renderzeiten während des Sprachwechsels zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Auswirkungen auf die Bundle-Größe\",\"theAdditionalJavascriptBytesSent\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit bei langsamen Netzwerken aus.\",\"renderingOverhead\":\"Rendering-Overhead\",\"howMuchExtraTimeThe\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzelnen Kontextanbieter injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.\",\"hydrationCost\":\"Hydratisierungs-Kosten\",\"duringSsrTranslationDataIs\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird.\",\"lazyLoadingEffectiveness\":\"Effektivität des Lazy Loadings\",\"whetherSplittingTranslationsByRoute\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\",\"localeSwitchSpeed\":\"Geschwindigkeit beim Sprachwechsel\",\"howFastTheAppCan\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufs neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\",\"whatWeMeasure\":\"Was wir messen\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"i18n-Bibliotheken im Jahr 2026 im Vergleich: Eine tiefgehende Analyse\",\"march152026\":\"15. März 2026\",\"weTested12DifferentInternationalization\":\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"march82026\":\"8. März 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"tutorial\":\"Tutorial\",\"theStateOfInternationalizationIn\":\"Der Stand der Internationalisierung in React\",\"february282026\":\"28. Februar 2026\",\"anOverviewOfTheCurrent\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Vorlieben der Community.\",\"analysis\":\"Analyse\",\"migratingFromReactI18nextTo\":\"Migration von react-i18next zu Lingui\",\"february152026\":\"15. Februar 2026\",\"aStepByStepGuide\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components und i18n: Was ändert sich?\",\"february12026\":\"1. Februar 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark-Methodik: Wie wir testen\",\"january202026\":\"20. Januar 2026\",\"aTransparentLookAtOur\":\"Ein transparenter Blick auf unsere Benchmark-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"meta\":\"Meta\",\"readMore\":\"Weiterlesen →\"},\"careersHeader\":{\"title\":\"Karriere\",\"joinOurMissionToImprove\":\"Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt.\"},\"careersBenefits\":{\"remoteFirst\":\"Remote-First\",\"workFromAnywhereInThe\":\"Arbeiten von überall auf der Welt\",\"competitivePay\":\"Wettbewerbsfähige Bezahlung\",\"topOfMarketCompensation\":\"Spitzenvergütung\",\"openSourceTime\":\"Open-Source-Zeit\",\"x20TimeForOssContributions\":\"20 % Zeit für OSS-Beiträge\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Senior Frontend-Entwickler\",\"remote\":\"Remote\",\"fullTime\":\"Vollzeit\",\"engineering\":\"Engineering\",\"buildAndMaintainOurBenchmarking\":\"Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\",\"backendEngineer\":\"Backend-Entwickler\",\"designAndScaleOurCloud\":\"Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.\",\"technicalWriter\":\"Technischer Redakteur\",\"partTime\":\"Teilzeit\",\"documentation\":\"Dokumentation\",\"createComprehensiveGuidesApiReferences\":\"Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"devrelEngineer\":\"DevRel-Ingenieur\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"community\":\"Community\",\"engageWithTheI18nCommunity\":\"Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\",\"qaEngineer\":\"QA-Ingenieur\",\"ensureTheAccuracyAndReliability\":\"Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.\",\"openPositions\":\"Offene Stellen\",\"applyNow\":\"Jetzt bewerben\"},\"contactHeader\":{\"getInTouch\":\"Kontaktieren Sie uns\",\"haveIdeasFoundABug\":\"Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter\"},\"contactForm\":{\"name\":\"Name\",\"email\":\"E-Mail\",\"subject\":\"Betreff\",\"message\":\"Nachricht\",\"sendMessage\":\"Nachricht senden\",\"wellGetBackTo\":\"Wir melden uns innerhalb von 48 Stunden bei Ihnen.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Häufig gestellte Fragen\",\"everythingYouNeedToKnow\":\"Alles, was Sie über i18n Benchmark wissen müssen.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"Was ist i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"Wie werden die Benchmarks durchgeführt ?\",\"weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\",\"whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt ?\",\"weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\",\"howOftenAreBenchmarksUpdated\":\"Wie oft werden die Benchmarks aktualisiert ?\",\"weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.\",\"isTheDataReliable\":\"Sind die Daten zuverlässig ?\",\"weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmphasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an ?\",\"yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen validieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Einschränkungen geben.\",\"howCanIContribute\":\"Wie kann ich beitragen ?\",\"thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Einfache, transparente Preisgestaltung\",\"chooseThePlanThatFits\":\"Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"für immer\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} Benchmark-Läufe/Tag\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} Bibliotheken\"},\"communitySupport\":\"Community-Support\",\"publicResults\":\"Öffentliche Ergebnisse\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/Monat\",\"unlimitedRuns\":\"Unbegrenzte Läufe\",\"allLibraries\":\"Alle Bibliotheken\",\"prioritySupport\":\"Prioritäts-Support\",\"privateResults\":\"Private Ergebnisse\",\"ciIntegration\":\"CI-Integration\",\"historicalData\":\"Historische Daten\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Benutzerdefiniert\",\"everythingInPro\":\"Alles in Pro\",\"onPremiseOption\":\"On-Premise-Option\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Dedizierter Account-Manager\",\"customSlas\":\"Benutzerdefinierte SLAs\",\"auditLogs\":\"Audit-Logs\",\"trainingSessions\":\"Schulungssitzungen\",\"contactSales\":\"Vertrieb kontaktieren\",\"getStarted\":\"Erste Schritte\"},\"productsHeader\":{\"products\":\"Produkte\",\"toolsAndServicesTo\":\"Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie.\"},\"productsGrid\":{\"benchmarkCli\":\"Benchmark-CLI\",\"runBenchmarksLocallyFromYour\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"free\":\"Kostenlos\",\"benchmarkCloud\":\"Benchmark-Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.\",\"price29mo\":\"29 $/Monat\",\"benchmarkEnterprise\":\"Benchmark-Enterprise\",\"onPremiseDeploymentWithSso\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.\",\"contactUs\":\"Kontaktieren Sie uns\",\"migrationAssistant\":\"Migrations-Assistent\",\"aiPoweredToolThatHelps\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"price99oneTime\":\"$99 einmalig\",\"translationQa\":\"Übersetzungs-QA\",\"automatedQualityChecksForMissing\":\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"price19mo\":\"19 $/Monat\",\"bundleOptimizer\":\"Bundle-Optimierer\",\"analyzesAndOptimizesYourI18n\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.\",\"price49mo\":\"49 $/Monat\",\"learnMore\":\"Mehr erfahren\"},\"settingsHeader\":{\"settings\":\"Einstellungen\",\"manageYourAccountPreferences\":\"Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.\"},\"profileSection\":{\"profile\":\"Profil\",\"displayName\":\"Anzeigename\",\"email\":\"E-Mail\"},\"preferencesSection\":{\"preferences\":\"Einstellungen\",\"emailNotifications\":\"E-Mail-Benachrichtigungen\",\"receiveWeeklyBenchmarkReports\":\"Wöchentliche Benchmark-Berichte erhalten\",\"darkMode\":\"Dunkelmodus\",\"useDarkColorScheme\":\"Dunkles Farbschema verwenden\",\"defaultLanguage\":\"Standardsprache\"},\"apiAccessSection\":{\"apiAccess\":\"API-Zugriff\",\"apiKey\":\"API-Schlüssel\",\"useThisKeyTo\":\"Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.\",\"copy\":\"Kopieren\"},\"settingsFooter\":{\"cancel\":\"Abbrechen\",\"saveChanges\":\"Änderungen speichern\"},\"teamHeader\":{\"ourTeam\":\"Unser Team\",\"meetThePeopleBehindI18n\":\"Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Gründerin & Leitende Ingenieurin\",\"formerGoogleEngineerWith10\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance-Ingenieur\",\"specializesInJavascriptPerformanceOptimization\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Datenanalystin\",\"ensuresStatisticalRigorInAll\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community-Managerin\",\"managesCommunityContributionsPartnershipsAnd\":\"Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.\"},\"mockBanner\":\"⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.\"},\"it\":{\"route\":{\"oopsPageNotFound\":\"Ops! Pagina non trovata\",\"returnToHome\":\"Torna alla Home\",\"couldNotMeasureHydrationDuration\":\"Impossibile misurare la durata dell'idratazione:\"},\"header\":{\"home\":\"Home\",\"methodology\":\"Metodologia\",\"mockPages\":\"Pagine di test\",\"products\":\"Prodotti\",\"pricing\":\"Prezzi\",\"team\":\"Team\",\"blog\":\"Blog\",\"careers\":\"Carriere\",\"faq\":\"FAQ\",\"contact\":\"Contatti\",\"settings\":\"Impostazioni\",\"goToGithub\":\"Vai su GitHub\"},\"footer\":{\"resources\":\"Risorse\",\"contact\":\"Contatti\",\"github\":\"GitHub\",\"methodology\":\"Metodologia\",\"contributing\":\"Contribuire\",\"builtWith\":\"i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.\",\"anOpenSourceTestApplication\":\"Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\",\"themeModeLightClick\":\"Modalità tema: chiara. Clicca per passare alla modalità scura.\",\"themeModeDarkClick\":\"Modalità tema: scura. Clicca per passare alla modalità auto (sistema).\",\"themeAuto\":\"Tema: Auto\",\"themeDark\":\"Tema: Scuro\",\"themeLight\":\"Tema: Chiaro\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\",\"viewResults\":\"Visualizza i risultati\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Perché queste metriche sono importanti\",\"bundleSize\":\"Dimensione del bundle\",\"theBundleIsTheData\":\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"renderingHydration\":\"Rendering e idratazione\",\"connectingALargeJson\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"dynamicLoading\":\"Caricamento dinamico\",\"loadingAllTranslationsUpfront\":\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Capire l'impatto\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequests\":\"Richieste a cascata:\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"cacheInvalidation\":\"Invalidazione della cache:\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"},\"resultsTable\":{\"sampleResults\":\"Risultati di esempio\",\"bundleSize\":\"Dimensione del bundle\",\"lookupTime\":\"Tempo di ricerca\",\"lazyLoading\":\"Caricamento lazy\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"Informazioni su questo benchmark\",\"thisIsAnOpenSource\":\"Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\"},\"aboutGrid\":{\"whyThisExists\":\"Perché esiste questo progetto\",\"choosingAnI18nLibraryIs\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lento aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Impatto sulla dimensione del bundle\",\"theAdditionalJavascriptBytesSent\":\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sui tempi di download su reti lente.\",\"renderingOverhead\":\"Overhead di rendering\",\"howMuchExtraTimeThe\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che inseriscono traduzioni tramite un singolo provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"hydrationCost\":\"Costo di idratazione\",\"duringSsrTranslationDataIs\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.\",\"lazyLoadingEffectiveness\":\"Efficacia del caricamento lento\",\"whetherSplittingTranslationsByRoute\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\",\"localeSwitchSpeed\":\"Velocità di cambio lingua\",\"howFastTheAppCan\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il nuovo rendering dei componenti e l'aggiornamento del DOM.\",\"whatWeMeasure\":\"Cosa misuriamo\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Confronto tra librerie i18n nel 2026: un’analisi approfondita\",\"march152026\":\"15 marzo 2026\",\"weTested12DifferentInternationalization\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in base a prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"Come ridurre il bundle i18n del 60%\",\"march82026\":\"8 marzo 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lento, suddivisione del codice e ottimizzazioni in fase di compilazione.\",\"tutorial\":\"Tutorial\",\"theStateOfInternationalizationIn\":\"Lo stato dell'internazionalizzazione in React\",\"february282026\":\"28 febbraio 2026\",\"anOverviewOfTheCurrent\":\"Una panoramica dell’attuale ecosistema i18n in React, con tendenze, pattern emergenti e preferenze della comunità.\",\"analysis\":\"Analisi\",\"migratingFromReactI18nextTo\":\"Migrazione da react-i18next a Lingui\",\"february152026\":\"15 febbraio 2026\",\"aStepByStepGuide\":\"Una guida dettagliata sulla migrazione di un’app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: cosa cambia?\",\"february12026\":\"1 febbraio 2026\",\"reactServerComponentsIntroduceNew\":\"I React Server Components introducono nuovi pattern per l’internazionalizzazione. Esploriamo implicazioni e best practice.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia del benchmark: come testiamo\",\"january202026\":\"20 gennaio 2026\",\"aTransparentLookAtOur\":\"Uno sguardo trasparente alla nostra metodologia di benchmark, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"meta\":\"Meta\",\"readMore\":\"Leggi di più →\"},\"careersHeader\":{\"title\":\"Carriere\",\"joinOurMissionToImprove\":\"Unisciti alla nostra missione per migliorare l’ecosistema di internazionalizzazione. Siamo un team remote-first che valorizza l’impatto, la trasparenza e l’apprendimento continuo.\"},\"careersBenefits\":{\"remoteFirst\":\"Remote-first\",\"workFromAnywhereInThe\":\"Lavora da qualsiasi parte del mondo\",\"competitivePay\":\"Retribuzione competitiva\",\"topOfMarketCompensation\":\"Compensi ai vertici del mercato\",\"openSourceTime\":\"Tempo per l'open source\",\"x20TimeForOssContributions\":\"20% di tempo per contributi OSS\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Ingegnere frontend senior\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo pieno\",\"engineering\":\"Ingegneria\",\"buildAndMaintainOurBenchmarking\":\"Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"backendEngineer\":\"Ingegnere backend\",\"designAndScaleOurCloud\":\"Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\",\"technicalWriter\":\"Redattore tecnico\",\"partTime\":\"Part-time\",\"documentation\":\"Documentazione\",\"createComprehensiveGuidesApiReferences\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"devrelEngineer\":\"Ingegnere DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"community\":\"Comunità\",\"engageWithTheI18nCommunity\":\"Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.\",\"qaEngineer\":\"Ingegnere QA\",\"ensureTheAccuracyAndReliability\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\",\"openPositions\":\"Posizioni aperte\",\"applyNow\":\"Candidati ora\"},\"contactHeader\":{\"getInTouch\":\"Mettiti in contatto\",\"haveIdeasFoundABug\":\"Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo\"},\"contactForm\":{\"name\":\"Nome\",\"email\":\"Email\",\"subject\":\"Oggetto\",\"message\":\"Messaggio\",\"sendMessage\":\"Invia messaggio\",\"wellGetBackTo\":\"Ti risponderemo entro 48 ore.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Domande frequenti\",\"everythingYouNeedToKnow\":\"Tutto quello che c'è da sapere su i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"Cos'è i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"Come vengono condotti i benchmark ?\",\"weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate ?\",\"weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"canISubmitMyOwn\":\"Posso inviare i miei benchmark ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sì! I contributi ai benchmark della comunità sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei.\",\"howOftenAreBenchmarksUpdated\":\"Ogni quanto vengono aggiornati i benchmark ?\",\"weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente con le ultime versioni stabili di ogni libreria. Le versioni principali attivano un ciclo di benchmarking immediato.\",\"isTheDataReliable\":\"I dati sono affidabili ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.\",\"doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire consigli su misura in base al tuo caso d’uso specifico, alle dimensioni e ai vincoli.\",\"howCanIContribute\":\"Come posso contribuire ?\",\"thereAreManyWaysTo\":\"Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Prezzi semplici e trasparenti\",\"chooseThePlanThatFits\":\"Scegli il piano più adatto al tuo team. Nessun costo nascosto.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"per sempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} esecuzioni di benchmark/giorno\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} librerie\"},\"communitySupport\":\"Supporto della comunità\",\"publicResults\":\"Risultati pubblici\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mese\",\"unlimitedRuns\":\"Esecuzioni illimitate\",\"allLibraries\":\"Tutte le librerie\",\"prioritySupport\":\"Supporto prioritario\",\"privateResults\":\"Risultati privati\",\"ciIntegration\":\"Integrazione CI\",\"historicalData\":\"Dati storici\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Custom\",\"everythingInPro\":\"Tutto in Pro\",\"onPremiseOption\":\"Opzione on-premise\",\"ssoSaml\":\"SSO e SAML\",\"dedicatedAccountManager\":\"Account manager dedicato\",\"customSlas\":\"SLA personalizzati\",\"auditLogs\":\"Log di audit\",\"trainingSessions\":\"Sessioni di formazione\",\"contactSales\":\"Contatta le vendite\",\"getStarted\":\"Inizia ora\"},\"productsHeader\":{\"products\":\"Prodotti\",\"toolsAndServicesTo\":\"Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione.\"},\"productsGrid\":{\"benchmarkCli\":\"CLI di benchmark\",\"runBenchmarksLocallyFromYour\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"free\":\"Gratis\",\"benchmarkCloud\":\"Benchmark cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.\",\"price29mo\":\"29 $/mese\",\"benchmarkEnterprise\":\"Benchmark enterprise\",\"onPremiseDeploymentWithSso\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"contactUs\":\"Contattaci\",\"migrationAssistant\":\"Assistente alla migrazione\",\"aiPoweredToolThatHelps\":\"Strumento basato sull’intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d’interruzione.\",\"price99oneTime\":\"$99 una tantum\",\"translationQa\":\"QA di traduzione\",\"automatedQualityChecksForMissing\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"price19mo\":\"19 $/mese\",\"bundleOptimizer\":\"Ottimizzatore bundle\",\"analyzesAndOptimizesYourI18n\":\"Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.\",\"price49mo\":\"49 $/mese\",\"learnMore\":\"Scopri di più\"},\"settingsHeader\":{\"settings\":\"Impostazioni\",\"manageYourAccountPreferences\":\"Gestisci le preferenze del tuo account e la configurazione.\"},\"profileSection\":{\"profile\":\"Profilo\",\"displayName\":\"Nome visualizzato\",\"email\":\"Email\"},\"preferencesSection\":{\"preferences\":\"Preferenze\",\"emailNotifications\":\"Notifiche via email\",\"receiveWeeklyBenchmarkReports\":\"Ricevi rapporti settimanali sui benchmark\",\"darkMode\":\"Modalità scura\",\"useDarkColorScheme\":\"Usa lo schema colori scuro\",\"defaultLanguage\":\"Lingua predefinita\"},\"apiAccessSection\":{\"apiAccess\":\"Accesso API\",\"apiKey\":\"Chiave API\",\"useThisKeyTo\":\"Usa questa chiave per accedere programmaticamente all'API di benchmarking.\",\"copy\":\"Copia\"},\"settingsFooter\":{\"cancel\":\"Annulla\",\"saveChanges\":\"Salva modifiche\"},\"teamHeader\":{\"ourTeam\":\"Il nostro team\",\"meetThePeopleBehindI18n\":\"Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice & Lead Engineer\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"specializesInJavascriptPerformanceOptimization\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista dati\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsabile della comunità\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"},\"mockBanner\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"route\":{\"oopsPageNotFound\":\"Ops! Página não encontrada\",\"returnToHome\":\"Voltar para o Início\",\"couldNotMeasureHydrationDuration\":\"Não foi possível medir a duração da hidratação:\"},\"header\":{\"home\":\"Início\",\"methodology\":\"Metodologia\",\"mockPages\":\"Páginas de teste\",\"products\":\"Produtos\",\"pricing\":\"Preços\",\"team\":\"Equipe\",\"blog\":\"Blog\",\"careers\":\"Carreiras\",\"faq\":\"FAQ\",\"contact\":\"Contato\",\"settings\":\"Configurações\",\"goToGithub\":\"Ir para GitHub\"},\"footer\":{\"resources\":\"Recursos\",\"contact\":\"Contato\",\"github\":\"GitHub\",\"methodology\":\"Metodologia\",\"contributing\":\"Contribuir\",\"builtWith\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.\",\"anOpenSourceTestApplication\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"themeModeLightClick\":\"Modo de tema: claro. Clique para mudar para o modo escuro.\",\"themeModeDarkClick\":\"Modo de tema: escuro. Clique para mudar para o modo automático (sistema).\",\"themeAuto\":\"Tema: Auto\",\"themeDark\":\"Tema: Escuro\",\"themeLight\":\"Tema: Claro\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.\",\"viewResults\":\"Ver Resultados\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Por que essas métricas são importantes\",\"bundleSize\":\"Tamanho do Bundle\",\"theBundleIsTheData\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.\",\"renderingHydration\":\"Renderização e Hidratação\",\"connectingALargeJson\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"dynamicLoading\":\"Carregamento Dinâmico\",\"loadingAllTranslationsUpfront\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Entendendo o impacto\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\",\"contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\",\"theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"waterfallRequests\":\"Pedidos em cascata:\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"cacheInvalidation\":\"Invalidação da cache:\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\"},\"resultsTable\":{\"sampleResults\":\"Resultados de amostra\",\"bundleSize\":\"Tamanho do bundle\",\"lookupTime\":\"Tempo de consulta\",\"lazyLoading\":\"Carregamento lento\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"Sobre este Benchmark\",\"thisIsAnOpenSource\":\"Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas.\"},\"aboutGrid\":{\"whyThisExists\":\"Por que isso existe\",\"choosingAnI18nLibraryIs\":\"Escolher uma biblioteca de i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas muda o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de locale. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Impacto no tamanho do bundle\",\"theAdditionalJavascriptBytesSent\":\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderização\",\"howMuchExtraTimeThe\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de un único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\",\"hydrationCost\":\"Custo de hidratação\",\"duringSsrTranslationDataIs\":\"Durante o SSR, os datos de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\",\"lazyLoadingEffectiveness\":\"Eficácia do carregamento lento\",\"whetherSplittingTranslationsByRoute\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascata, FOUC, complexidade de cache).\",\"localeSwitchSpeed\":\"Velocidade de troca de idioma\",\"howFastTheAppCan\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\",\"whatWeMeasure\":\"O que medimos\"},\"blogHeader\":{\"blog\":\"Blog\",\"insightsDeepDivesAnd\":\"Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"march152026\":\"15 de março de 2026\",\"weTested12DifferentInternationalization\":\"Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"benchmark\":\"Benchmark\",\"howToReduceYourI18n\":\"Como reduzir seu bundle i18n em 60%\",\"march82026\":\"8 de março de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"tutorial\":\"Tutorial\",\"theStateOfInternationalizationIn\":\"O estado da internacionalização no React\",\"february282026\":\"28 de fevereiro de 2026\",\"anOverviewOfTheCurrent\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"analysis\":\"Análise\",\"migratingFromReactI18nextTo\":\"Migrando do react-i18next para o Lingui\",\"february152026\":\"15 de fevereiro de 2026\",\"aStepByStepGuide\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"serverComponentsAndI18nWhat\":\"componentes de servidor e i18n: o que muda?\",\"february12026\":\"1 de fevereiro de 2026\",\"reactServerComponentsIntroduceNew\":\"Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia de Benchmark: como testamos\",\"january202026\":\"20 de janeiro de 2026\",\"aTransparentLookAtOur\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estadísticos e reprodutibilidade.\",\"meta\":\"Meta\",\"readMore\":\"Leia mais →\"},\"careersHeader\":{\"title\":\"Carreiras\",\"joinOurMissionToImprove\":\"Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e que valoriza o impacto, a transparência e o aprendizado contínuo.\"},\"careersBenefits\":{\"remoteFirst\":\"Trabalho remoto primeiro\",\"workFromAnywhereInThe\":\"Trabalhe de qualquer lugar do mundo\",\"competitivePay\":\"Pagamento competitivo\",\"topOfMarketCompensation\":\"Compensação acima do mercado\",\"openSourceTime\":\"Tempo dedicado ao código aberto\",\"x20TimeForOssContributions\":\"20% de tempo para contribuições OSS\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Engenheiro Frontend Sênior\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo integral\",\"engineering\":\"Engenharia\",\"buildAndMaintainOurBenchmarking\":\"Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"backendEngineer\":\"Engenheiro Backend\",\"designAndScaleOurCloud\":\"Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.\",\"technicalWriter\":\"Redator Técnico\",\"partTime\":\"Meio período\",\"documentation\":\"Documentação\",\"createComprehensiveGuidesApiReferences\":\"Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"devrelEngineer\":\"Engenheiro DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"community\":\"Comunidade\",\"engageWithTheI18nCommunity\":\"Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"qaEngineer\":\"Engenheiro QA\",\"ensureTheAccuracyAndReliability\":\"Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.\",\"openPositions\":\"Vagas abertas\",\"applyNow\":\"Candidatar-se agora\"},\"contactHeader\":{\"getInTouch\":\"Entre em contato\",\"haveIdeasFoundABug\":\"Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em\"},\"contactForm\":{\"name\":\"Nome\",\"email\":\"E-mail\",\"subject\":\"Assunto\",\"message\":\"Mensagem\",\"sendMessage\":\"Enviar Mensagem\",\"wellGetBackTo\":\"Retornaremos em até 48 horas.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Perguntas Frequentes\",\"everythingYouNeedToKnow\":\"Tudo o que você precisa saber sobre o i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"O que é o i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos ?\",\"weRunStandardizedTestsIn\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente ?\",\"weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são cập nhật ?\",\"weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de novos benchmarks.\",\"isTheDataReliable\":\"Os dados são confiáveis ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria ?\",\"yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.\",\"howCanIContribute\":\"Como posso contribuir ?\",\"thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentazione, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Preços Simples e Transparentes\",\"chooseThePlanThatFits\":\"Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.\"},\"pricingTiers\":{\"starter\":\"Iniciante\",\"price0\":\"0 $\",\"forever\":\"para sempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} execuções de benchmark/dia\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"communitySupport\":\"Suporte da comunidade\",\"publicResults\":\"Resultados públicos\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mês\",\"unlimitedRuns\":\"Execuções ilimitadas\",\"allLibraries\":\"Todas as bibliotecas\",\"prioritySupport\":\"Suporte prioritário\",\"privateResults\":\"Resultados privados\",\"ciIntegration\":\"Integração de CI\",\"historicalData\":\"Dados históricos\",\"enterprise\":\"Personalizado\",\"customPrice\":\"Personalizado\",\"everythingInPro\":\"Tudo no Pro\",\"onPremiseOption\":\"Opção on-premise\",\"ssoSaml\":\"SSO e SAML\",\"dedicatedAccountManager\":\"Gerente de conta dedicado\",\"customSlas\":\"SLAs personalizados\",\"auditLogs\":\"Logs de auditoria\",\"trainingSessions\":\"Sessões de treinamento\",\"contactSales\":\"Contatar Vendas\",\"getStarted\":\"Começar\"},\"productsHeader\":{\"products\":\"Produtos\",\"toolsAndServicesTo\":\"Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização.\"},\"productsGrid\":{\"benchmarkCli\":\"CLI do Benchmark\",\"runBenchmarksLocallyFromYour\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.\",\"free\":\"Grátis\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"price29mo\":\"29 $/mês\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"contactUs\":\"Contate-nos\",\"migrationAssistant\":\"Assistente de Migração\",\"aiPoweredToolThatHelps\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\",\"price99oneTime\":\"$99 uma vez\",\"translationQa\":\"QA de Tradução\",\"automatedQualityChecksForMissing\":\"Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.\",\"price19mo\":\"19 $/mês\",\"bundleOptimizer\":\"Otimizador de Bundle\",\"analyzesAndOptimizesYourI18n\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"price49mo\":\"49 $/mês\",\"learnMore\":\"Saiba mais\"},\"settingsHeader\":{\"settings\":\"Configurações\",\"manageYourAccountPreferences\":\"Gerencie as suas preferências e configuração da conta.\"},\"profileSection\":{\"profile\":\"Perfil\",\"displayName\":\"Nome de exibição\",\"email\":\"E-Mail\"},\"preferencesSection\":{\"preferences\":\"Preferências\",\"emailNotifications\":\"Notificações por e-mail\",\"receiveWeeklyBenchmarkReports\":\"Receber relatórios semanais de benchmarks\",\"darkMode\":\"Modo Escuro\",\"useDarkColorScheme\":\"Usar esquema de cores escuras\",\"defaultLanguage\":\"Idioma Padrão\"},\"apiAccessSection\":{\"apiAccess\":\"Acesso à API\",\"apiKey\":\"Chave da API\",\"useThisKeyTo\":\"Utilize esta chave para aceder à API de benchmarking de forma programática.\",\"copy\":\"Copiar\"},\"settingsFooter\":{\"cancel\":\"Cancelar\",\"saveChanges\":\"Guardar alterações\"},\"teamHeader\":{\"ourTeam\":\"Nossa Equipe\",\"meetThePeopleBehindI18n\":\"Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"formerGoogleEngineerWith10\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Engenheiro de Performance\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Advogado de Desenvolvedores\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de Dados\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Gerente de Comunidade\",\"managesCommunityContributionsPartnershipsAnd\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"mockBanner\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.\"},\"zh\":{\"route\":{\"oopsPageNotFound\":\"糟糕！找不到页面\",\"returnToHome\":\"返回首页\",\"couldNotMeasureHydrationDuration\":\"无法测量注水时长：\"},\"header\":{\"home\":\"首页\",\"methodology\":\"方法学\",\"mockPages\":\"模拟页面\",\"products\":\"产品\",\"pricing\":\"价格\",\"team\":\"团队\",\"blog\":\"博客\",\"careers\":\"职业\",\"faq\":\"常见问题\",\"contact\":\"联系我们\",\"settings\":\"设置\",\"goToGithub\":\"前往 GitHub\"},\"footer\":{\"resources\":\"资源\",\"contact\":\"联系\",\"github\":\"GitHub\",\"methodology\":\"方法学\",\"contributing\":\"贡献\",\"builtWith\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。\",\"anOpenSourceTestApplication\":\"一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"主题模式：自动（系统）。点击切换到浅色模式。\",\"themeModeLightClick\":\"主题模式：浅色。点击切换到深色模式。\",\"themeModeDarkClick\":\"主题模式：深色。点击切换到自动（系统）模式。\",\"themeAuto\":\"主题：自动\",\"themeDark\":\"主题：深色\",\"themeLight\":\"主题：浅色\"},\"hero\":{\"aTestApplicationDesignedTo\":\"一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。\",\"viewResults\":\"查看结果\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"为什么这些指标很重要\",\"bundleSize\":\"包大小\",\"theBundleIsTheData\":\"Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。\",\"renderingHydration\":\"渲染与注水\",\"connectingALargeJson\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"dynamicLoading\":\"动态加载\",\"loadingAllTranslationsUpfront\":\"预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"},\"understandingImpact\":{\"understandingTheImpact\":\"理解影响\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：\",\"theJsonMustBeParsed\":\"JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。\",\"contextBasedArchitecturesCanCause\":\"当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"waterfallRequests\":\"瀑布请求：\",\"flashOfUntranslatedContentFouc\":\"未翻译内容闪烁 (FOUC)：\",\"cacheInvalidation\":\"缓存失效：\",\"whatThisBenchmarkMeasures\":\"此基准测试测量什么\",\"thisTestAppProvidesA\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\"},\"resultsTable\":{\"sampleResults\":\"样本结果\",\"bundleSize\":\"包大小\",\"lookupTime\":\"查询时间\",\"lazyLoading\":\"延迟加载\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"关于此基准测试\",\"thisIsAnOpenSource\":\"这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。\"},\"aboutGrid\":{\"whyThisExists\":\"为什么存在这个项目\",\"choosingAnI18nLibraryIs\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的易用性，但很少有人衡量性能成本：该库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"methodology\":\"方法学\",\"theSame10PageApp\":\"每个库都构建一次相同的 10 页应用程序。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用 React Profiler 捕获本地切换期间的渲染时间。所有测试都在具有相同硬件的 CI 上运行，以确保结果可重现。\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"包大小影响\",\"theAdditionalJavascriptBytesSent\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"renderingOverhead\":\"渲染开销\",\"howMuchExtraTimeThe\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\",\"hydrationCost\":\"注水成本\",\"duringSsrTranslationDataIs\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\",\"lazyLoadingEffectiveness\":\"延迟加载有效性\",\"whetherSplittingTranslationsByRoute\":\"按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\",\"localeSwitchSpeed\":\"本地语言切换速度\",\"howFastTheAppCan\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。\",\"whatWeMeasure\":\"我们测量什么\"},\"blogHeader\":{\"blog\":\"博客\",\"insightsDeepDivesAnd\":\"来自 i18n 基准测试社区的见解、深入探讨和更新。\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"2026 年 i18n 库对比：深度分析\",\"march152026\":\"2026年3月15日\",\"weTested12DifferentInternationalization\":\"我们针对性能、包大小和 DX 测试了 12 种不同的国际化库。以下是令人惊讶的结果。\",\"benchmark\":\"基准测试\",\"howToReduceYourI18n\":\"如何将 i18n 包大小减少 60%\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"tutorial\":\"教程\",\"theStateOfInternationalizationIn\":\"React 国际化的现状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。\",\"analysis\":\"分析\",\"migratingFromReactI18nextTo\":\"从 react-i18next 迁移到 Lingui\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。\",\"serverComponentsAndI18nWhat\":\"服务器组件和 i18n：有什么变化？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"benchmarkMethodologyHowWeTest\":\"基准测试方法学：我们如何测试\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。\",\"meta\":\"元数据\",\"readMore\":\"阅读更多 →\"},\"careersHeader\":{\"title\":\"职业\",\"joinOurMissionToImprove\":\"加入我们改善国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\"},\"careersBenefits\":{\"remoteFirst\":\"远程优先\",\"workFromAnywhereInThe\":\"在全球任何地方工作\",\"competitivePay\":\"有竞争力的薪酬\",\"topOfMarketCompensation\":\"市场顶级薪酬\",\"openSourceTime\":\"开源贡献时间\",\"x20TimeForOssContributions\":\"20% 的时间用于 OSS 贡献\"},\"openPositions\":{\"seniorFrontendEngineer\":\"高级前端工程师\",\"remote\":\"远程\",\"fullTime\":\"全职\",\"engineering\":\"工程\",\"buildAndMaintainOurBenchmarking\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\",\"backendEngineer\":\"后端工程师\",\"designAndScaleOurCloud\":\"设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。\",\"technicalWriter\":\"技术文档工程师\",\"partTime\":\"兼职\",\"documentation\":\"文档\",\"createComprehensiveGuidesApiReferences\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\",\"devrelEngineer\":\"开发者关系工程师\",\"sanFranciscoRemote\":\"旧金山 / 远程\",\"community\":\"社区\",\"engageWithTheI18nCommunity\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\",\"qaEngineer\":\"测试工程师\",\"ensureTheAccuracyAndReliability\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\",\"openPositions\":\"开放职位\",\"applyNow\":\"立即申请\"},\"contactHeader\":{\"getInTouch\":\"联系我们\",\"haveIdeasFoundABug\":\"有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们\"},\"contactForm\":{\"name\":\"姓名\",\"email\":\"电子邮件\",\"subject\":\"主题\",\"message\":\"留言\",\"sendMessage\":\"发送消息\",\"wellGetBackTo\":\"我们将在 48 小时内回复您。\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"常见问题\",\"everythingYouNeedToKnow\":\"您需要了解的有关 i18n Benchmark 的一切。\"},\"faqList\":{\"whatIsI18nBenchmark\":\"什么是 i18n Benchmark？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"如何进行基准测试？\",\"weRunStandardizedTestsIn\":\"我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都重复多次，以确保统计学意义。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\",\"whichLibrariesAreCurrentlySupported\":\"目前支持哪些库？\",\"weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"canISubmitMyOwn\":\"我可以提交自己的基准测试吗？\",\"yesCommunityBenchmarkSubmissionsAre\":\"是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。\",\"howOftenAreBenchmarksUpdated\":\"基准测试多久更新一次？\",\"weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会触发立即重新进行基准测试。\",\"isTheDataReliable\":\"数据可靠吗？\",\"weFollowRigorousStatisticalMethodology\":\"我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\",\"doYouOfferConsultingServices\":\"你们提供咨询服务吗？\",\"yesOurEnterprisePlanIncludes\":\"是的，我们的企业版计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。\",\"howCanIContribute\":\"我该如何贡献？\",\"thereAreManyWaysTo\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"简单透明的定价\",\"chooseThePlanThatFits\":\"选择适合您团队的计划。无隐藏费用。\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"永久\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"每天 {{runs}} 次基准测试运行\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 个库\"},\"communitySupport\":\"社区支持\",\"publicResults\":\"公共结果\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/月\",\"unlimitedRuns\":\"无限运行\",\"allLibraries\":\"所有库\",\"prioritySupport\":\"优先支持\",\"privateResults\":\"私人结果\",\"ciIntegration\":\"CI 集成\",\"historicalData\":\"历史数据\",\"enterprise\":\"企业版\",\"customPrice\":\"定制价格\",\"everythingInPro\":\"Pro 计划中的一切\",\"onPremiseOption\":\"本地部署选项\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"专属大客户经理\",\"customSlas\":\"定制 SLA\",\"auditLogs\":\"审核日志\",\"trainingSessions\":\"培训会议\",\"contactSales\":\"联系销售人员\",\"getStarted\":\"开始使用\"},\"productsHeader\":{\"products\":\"产品\",\"toolsAndServicesTo\":\"帮助您优化国际化战略的工具和服务。\"},\"productsGrid\":{\"benchmarkCli\":\"基准测试 CLI\",\"runBenchmarksLocallyFromYour\":\"在终端本地运行基准测试。支持自定义配置和 CI 集成。\",\"free\":\"免费\",\"benchmarkCloud\":\"基准测试云\",\"automatedCloudBasedBenchmarkingWith\":\"基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。\",\"price29mo\":\"$29/月\",\"benchmarkEnterprise\":\"基准测试企业版\",\"onPremiseDeploymentWithSso\":\"采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。\",\"contactUs\":\"联系我们\",\"migrationAssistant\":\"迁移助手\",\"aiPoweredToolThatHelps\":\"由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。\",\"price99oneTime\":\"$99 一次性\",\"translationQa\":\"翻译质量保证\",\"automatedQualityChecksForMissing\":\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\",\"price19mo\":\"$19/月\",\"bundleOptimizer\":\"包优化器\",\"analyzesAndOptimizesYourI18n\":\"通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。\",\"price49mo\":\"$49/月\",\"learnMore\":\"了解更多\"},\"settingsHeader\":{\"settings\":\"设置\",\"manageYourAccountPreferences\":\"管理您的账户偏好和配置。\"},\"profileSection\":{\"profile\":\"个人资料\",\"displayName\":\"显示名称\",\"email\":\"电子邮件\"},\"preferencesSection\":{\"preferences\":\"偏好设置\",\"emailNotifications\":\"邮件通知\",\"receiveWeeklyBenchmarkReports\":\"接收每周基准测试报告\",\"darkMode\":\"深色模式\",\"useDarkColorScheme\":\"使用深色配色方案\",\"defaultLanguage\":\"默认语言\"},\"apiAccessSection\":{\"apiAccess\":\"API 访问\",\"apiKey\":\"API 密钥\",\"useThisKeyTo\":\"使用此密钥以编程方式访问基准测试 API。\",\"copy\":\"复制\"},\"settingsFooter\":{\"cancel\":\"取消\",\"saveChanges\":\"保存更改\"},\"teamHeader\":{\"ourTeam\":\"我们的团队\",\"meetThePeopleBehindI18n\":\"认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"性能工程师\",\"specializesInJavascriptPerformanceOptimization\":\"专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"开发者倡导者\",\"passionateAboutDeveloperExperienceAnd\":\"热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"全栈开发人员\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"数据分析师\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"社区经理\",\"managesCommunityContributionsPartnershipsAnd\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"mockBanner\":\"⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"route\":{\"oopsPageNotFound\":\"おっと！ページが見つかりません\",\"returnToHome\":\"ホームに戻る\",\"couldNotMeasureHydrationDuration\":\"ハイドレーション時間を測定できませんでした：\"},\"header\":{\"home\":\"ホーム\",\"methodology\":\"メソッド\",\"mockPages\":\"テストページ\",\"products\":\"製品\",\"pricing\":\"料金\",\"team\":\"チーム\",\"blog\":\"ブログ\",\"careers\":\"採用\",\"faq\":\"FAQ\",\"contact\":\"お問い合わせ\",\"settings\":\"設定\",\"goToGithub\":\"GitHubへ\"},\"footer\":{\"resources\":\"リソース\",\"contact\":\"お問い合わせ\",\"github\":\"GitHub\",\"methodology\":\"メソッド\",\"contributing\":\"貢献する\",\"builtWith\":\"i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。\",\"anOpenSourceTestApplication\":\"国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替え。\",\"themeModeLightClick\":\"テーマモード：ライト。クリックしてダークモードに切り替え。\",\"themeModeDarkClick\":\"テーマモード：ダーク。クリックして自動（システム）モードに切り替え。\",\"themeAuto\":\"テーマ：自動\",\"themeDark\":\"テーマ：ダーク\",\"themeLight\":\"テーマ：ライト\"},\"hero\":{\"aTestApplicationDesignedTo\":\"国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。\",\"viewResults\":\"結果を表示\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"なぜこれらの指標が重要なのか\",\"bundleSize\":\"バンドルサイズ\",\"theBundleIsTheData\":\"バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。\",\"renderingHydration\":\"レンダリングとハイドレーション\",\"connectingALargeJson\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。\",\"dynamicLoading\":\"動的読み込み\",\"loadingAllTranslationsUpfront\":\"すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。\"},\"understandingImpact\":{\"understandingTheImpact\":\"影響を理解する\",\"whyASingleLargeJson\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"manyI18nLibrariesStoreTranslations\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：\",\"theJsonMustBeParsed\":\"JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"theTradeOffsOfDynamic\":\"動的読み込みのトレードオフ\",\"splittingTranslationsIntoPerRoute\":\"ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\",\"waterfallRequests\":\"ウォーターフォールリクエスト：\",\"flashOfUntranslatedContentFouc\":\"未翻訳コンテンツのフラッシュ（FOUC）：\",\"cacheInvalidation\":\"キャッシュの無効化：\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"thisTestAppProvidesA\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"},\"resultsTable\":{\"sampleResults\":\"サンプル結果\",\"bundleSize\":\"バンドルサイズ\",\"lookupTime\":\"検索時間\",\"lazyLoading\":\"遅延読み込み\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"このベンチマークについて\",\"thisIsAnOpenSource\":\"これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまな i18n ライブラリを同一条件下で統合および測定できる、現実的なマルチページ React アプリを提供することです。\"},\"aboutGrid\":{\"whyThisExists\":\"なぜこれが存在するのか\",\"choosingAnI18nLibraryIs\":\"i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API の使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。\",\"methodology\":\"方法論\",\"theSame10PageApp\":\"同じ 10 ページのアプリがライブラリごとに 1 回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer を使用）、読み込みメトリクスの Lighthouse 監査を実行し、React Profiler を使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を保証するために、すべてのテストは一貫したハードウェア上の CI で実行されます。\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"バンドルサイズへの影響\",\"theAdditionalJavascriptBytesSent\":\"i18n ライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加の JavaScript バイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\",\"renderingOverhead\":\"レンダリングのオーバーヘッド\",\"howMuchExtraTimeThe\":\"ライブラリが React のレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を挿入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。\",\"hydrationCost\":\"ハイドレーションのコスト\",\"duringSsrTranslationDataIs\":\"SSR 中、翻訳データは HTML にシリアル化されます。大規模な辞書は HTML ペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\",\"lazyLoadingEffectiveness\":\"遅延読み込みの有効性\",\"whetherSplittingTranslationsByRoute\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期読み込みを削減するかどうか、そしてどのようなトレードオフを導入するか（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）。\",\"localeSwitchSpeed\":\"ロケール切り替え速度\",\"howFastTheAppCan\":\"ランタイム時にアプリが言語をどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOM の更新が含まれます。\",\"whatWeMeasure\":\"測定対象\"},\"blogHeader\":{\"blog\":\"ブログ\",\"insightsDeepDivesAnd\":\"i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"2026 年の i18n ライブラリの比較：詳細な分析\",\"march152026\":\"2026年3月15日\",\"weTested12DifferentInternationalization\":\"パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果が得られました。\",\"benchmark\":\"ベンチマーク\",\"howToReduceYourI18n\":\"i18n バンドルを 60% 削減する方法\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"遅延読み込み、コード分割、コンパイル時の最適化などの翻訳バンドルを最適化するための実用的な戦略。\",\"tutorial\":\"チュートリアル\",\"theStateOfInternationalizationIn\":\"React における国際化の現状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"トレンド、新たなパターン、コミュニティの好みなど、React における現在の i18n エコシステムの概要。\",\"analysis\":\"分析\",\"migratingFromReactI18nextTo\":\"react-i18next から Lingui への移行\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"50,000 の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。\",\"serverComponentsAndI18nWhat\":\"サーバーコンポーネントと i18n：何が変わるのか？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React サーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを検討します。\",\"benchmarkMethodologyHowWeTest\":\"ベンチマークの方法論：テスト方法\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"テスト環境、統計手法、再現性など、当社のベンチマーク方法論を透過的に公開します。\",\"meta\":\"メタ\",\"readMore\":\"続きを読む →\"},\"careersHeader\":{\"title\":\"採用情報\",\"joinOurMissionToImprove\":\"国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、継続的な学習を重視するリモートファーストのチームです。\"},\"careersBenefits\":{\"remoteFirst\":\"リモートファースト\",\"workFromAnywhereInThe\":\"世界中どこからでも仕事ができます\",\"competitivePay\":\"競争力のある報酬\",\"topOfMarketCompensation\":\"市場最高水准の報酬\",\"openSourceTime\":\"オープンソースの時間\",\"x20TimeForOssContributions\":\"OSS への貢献に 20% の時間を割く\"},\"openPositions\":{\"seniorFrontendEngineer\":\"シニアフロントエンドエンジニア\",\"remote\":\"リモート\",\"fullTime\":\"正社員\",\"engineering\":\"エンジニアリング\",\"buildAndMaintainOurBenchmarking\":\"React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。\",\"backendEngineer\":\"バックエンドエンジニア\",\"designAndScaleOurCloud\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。\",\"technicalWriter\":\"テクニカルライター\",\"partTime\":\"アルバイト\",\"documentation\":\"ドキュメント\",\"createComprehensiveGuidesApiReferences\":\"ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。\",\"devrelEngineer\":\"DevRel エンジニア\",\"sanFranciscoRemote\":\"サンフランシスコ / リモート\",\"community\":\"コミュニティ\",\"engageWithTheI18nCommunity\":\"講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。\",\"qaEngineer\":\"QA エンジニア\",\"ensureTheAccuracyAndReliability\":\"厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\",\"openPositions\":\"募集職種\",\"applyNow\":\"今すぐ応募\"},\"contactHeader\":{\"getInTouch\":\"お問い合わせ\",\"haveIdeasFoundABug\":\"アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください\"},\"contactForm\":{\"name\":\"お名前\",\"email\":\"メールアドレス\",\"subject\":\"件名\",\"message\":\"メッセージ\",\"sendMessage\":\"メッセージを送信\",\"wellGetBackTo\":\"48時間以内に返信いたします。\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"よくある質問\",\"everythingYouNeedToKnow\":\"i18n Benchmark について知っておくべきことのすべて。\"},\"faqList\":{\"whatIsI18nBenchmark\":\"i18n Benchmark とは何ですか？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"weRunStandardizedTestsIn\":\"一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。\",\"whichLibrariesAreCurrentlySupported\":\"現在サポートされているライブラリは何ですか？\",\"weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgee をサポートしています。\",\"canISubmitMyOwn\":\"独自のベンチマークを送信できますか？\",\"yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマークの送信を歓迎します。当社のリポジトリをフォークし、コントリビューションガイドに従ってベンチマークを追加し、プルリクエストを送信してください。当社のチームが、資格のある送信内容をレビューしてマージします。\",\"howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"weReRunAllBenchmarks\":\"各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが実行されます。\",\"isTheDataReliable\":\"データは信頼できますか？\",\"weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値の検出、信頼区間などの厳密な統計的手法に従います。すべての生データは、完全な透明性のために当社の分析とともに公開されます。\",\"doYouOfferConsultingServices\":\"コンサルティングサービスを提供していますか？\",\"yesOurEnterprisePlanIncludes\":\"はい、当社のエンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\",\"howCanIContribute\":\"どのように貢献できますか？\",\"thereAreManyWaysTo\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"シンプルで透明性の高い料金プラン\",\"chooseThePlanThatFits\":\"チームに合ったプランをお選びください。隠れた費用はありません。\"},\"pricingTiers\":{\"starter\":\"スターター\",\"price0\":\"0 $\",\"forever\":\"永久\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"毎日 {{runs}} 回のベンチマーク実行\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 個のライブラリ\"},\"communitySupport\":\"コミュニティサポート\",\"publicResults\":\"公開結果\",\"pro\":\"プロ\",\"price29\":\"29 $\",\"month\":\"/月\",\"unlimitedRuns\":\"無限の実行\",\"allLibraries\":\"すべてのライブラリ\",\"prioritySupport\":\"優先サポート\",\"privateResults\":\"プライベート結果\",\"ciIntegration\":\"CI 統合\",\"historicalData\":\"履歴データ\",\"enterprise\":\"エンタープライズ\",\"customPrice\":\"カスタム価格\",\"everythingInPro\":\"Pro のすべて\",\"onPremiseOption\":\"オンプレミスオプション\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"専任のアカウントマネージャー\",\"customSlas\":\"カスタム SLA\",\"auditLogs\":\"監査ログ\",\"trainingSessions\":\"トレーニングセッション\",\"contactSales\":\"営業に問い合わせる\",\"getStarted\":\"使ってみる\"},\"productsHeader\":{\"products\":\"製品\",\"toolsAndServicesTo\":\"国際化戦略の最適化に役立つツールとサービス。\"},\"productsGrid\":{\"benchmarkCli\":\"ベンチマーク CLI\",\"runBenchmarksLocallyFromYour\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。\",\"free\":\"無料\",\"benchmarkCloud\":\"ベンチマーククラウド\",\"automatedCloudBasedBenchmarkingWith\":\"履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\",\"price29mo\":\"$29/月\",\"benchmarkEnterprise\":\"ベンチマークエンタープライズ\",\"onPremiseDeploymentWithSso\":\"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。\",\"contactUs\":\"お問い合わせ\",\"migrationAssistant\":\"移行アシスタント\",\"aiPoweredToolThatHelps\":\"i18n ライブラリ間のコードベースをダウンタイムなしで移行するのに役立つ AI 搭載ツール。\",\"price99oneTime\":\"$99 一回限り\",\"translationQa\":\"翻訳 QA\",\"automatedQualityChecksForMissing\":\"翻訳の欠落、複数形の問題、コンテキストエラーに対する自動品質チェック。\",\"price19mo\":\"$19/月\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"analyzesAndOptimizesYourI18n\":\"生産向けに i18n バンドルをツリーシェイキングとコード分割で分析・最適化します。\",\"price49mo\":\"$49/月\",\"learnMore\":\"詳細はこちら\"},\"settingsHeader\":{\"settings\":\"設定\",\"manageYourAccountPreferences\":\"アカウントの設定と構成を管理します。\"},\"profileSection\":{\"profile\":\"プロフィール\",\"displayName\":\"表示名\",\"email\":\"メールアドレス\"},\"preferencesSection\":{\"preferences\":\"設定\",\"emailNotifications\":\"メール通知\",\"receiveWeeklyBenchmarkReports\":\"ベンチマーク週報を受け取る\",\"darkMode\":\"ダークモード\",\"useDarkColorScheme\":\"ダークカラー体系を使用する\",\"defaultLanguage\":\"デフォルト言語\"},\"apiAccessSection\":{\"apiAccess\":\"APIアクセス\",\"apiKey\":\"APIキー\",\"useThisKeyTo\":\"このキーを使用して、ベンチマークAPIにプログラムでアクセスします。\",\"copy\":\"コピー\"},\"settingsFooter\":{\"cancel\":\"キャンセル\",\"saveChanges\":\"変更を保存\"},\"teamHeader\":{\"ourTeam\":\"私たちのチーム\",\"meetThePeopleBehindI18n\":\"i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"創設者兼リードエンジニア\",\"formerGoogleEngineerWith10\":\"以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"passionateAboutDeveloperExperienceAnd\":\"開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"データアナリスト\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"コミュニティマネージャー\",\"managesCommunityContributionsPartnershipsAnd\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。\"},\"mockBanner\":\"⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"route\":{\"oopsPageNotFound\":\"앗! 페이지를 찾을 수 없습니다\",\"returnToHome\":\"홈으로 돌아가기\",\"couldNotMeasureHydrationDuration\":\"하이드레이션 시간을 측정할 수 없습니다:\"},\"header\":{\"home\":\"홈\",\"methodology\":\"방법론\",\"mockPages\":\"테스트 페이지\",\"products\":\"제품\",\"pricing\":\"가격\",\"team\":\"팀\",\"blog\":\"블로그\",\"careers\":\"채용\",\"faq\":\"FAQ\",\"contact\":\"문의하기\",\"settings\":\"설정\",\"goToGithub\":\"GitHub로 이동\"},\"footer\":{\"resources\":\"리소스\",\"contact\":\"문의\",\"github\":\"GitHub\",\"methodology\":\"방법론\",\"contributing\":\"기여하기\",\"builtWith\":\"i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.\",\"anOpenSourceTestApplication\":\"국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.\",\"themeModeLightClick\":\"테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.\",\"themeModeDarkClick\":\"테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.\",\"themeAuto\":\"테마: 자동\",\"themeDark\":\"테마: 다크\",\"themeLight\":\"테마: 라이트\"},\"hero\":{\"aTestApplicationDesignedTo\":\"국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.\",\"viewResults\":\"결과 보기\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"이 지표들이 중요한 이유\",\"bundleSize\":\"번들 크기\",\"theBundleIsTheData\":\"번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.\",\"renderingHydration\":\"렌더링 및 하이드레이션\",\"connectingALargeJson\":\"모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\",\"dynamicLoading\":\"동적 로딩\",\"loadingAllTranslationsUpfront\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"},\"understandingImpact\":{\"understandingTheImpact\":\"영향 이해하기\",\"whyASingleLargeJson\":\"단일 대형 JSON이 성능을 저해하는 이유\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"theJsonMustBeParsed\":\"JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.\",\"contextBasedArchitecturesCanCause\":\"로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.\",\"theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"waterfallRequests\":\"워터폴 요청:\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 플래시 (FOUC):\",\"cacheInvalidation\":\"캐시 무효화:\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\"},\"resultsTable\":{\"sampleResults\":\"샘플 결과\",\"bundleSize\":\"번들 크기\",\"lookupTime\":\"조회 시간\",\"lazyLoading\":\"지연 로딩\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"이 벤치마크에 대하여\",\"thisIsAnOpenSource\":\"이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.\"},\"aboutGrid\":{\"whyThisExists\":\"왜 이것이 존재하는가\",\"choosingAnI18nLibraryIs\":\"i18n 라이브러리 선택은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\",\"methodology\":\"방법론\",\"theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리당 한 번씩 구축됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"번들 크기 영향\",\"theAdditionalJavascriptBytesSent\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"renderingOverhead\":\"렌더링 오버헤드\",\"howMuchExtraTimeThe\":\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\",\"hydrationCost\":\"하이드레이션 비용\",\"duringSsrTranslationDataIs\":\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화식으로 변하는 순간인 하이드레이션 속도를 늦춥니다.\",\"lazyLoadingEffectiveness\":\"지연 로딩 효과\",\"whetherSplittingTranslationsByRoute\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 도입하는지 여부입니다.\",\"localeSwitchSpeed\":\"로케일 전환 속도\",\"howFastTheAppCan\":\"런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 — 새로운 번역 가져오기, 구성 요소 다시 렌더링 및 DOM 업데이트를 포함합니다.\",\"whatWeMeasure\":\"측정 대상\"},\"blogHeader\":{\"blog\":\"블로그\",\"insightsDeepDivesAnd\":\"i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"march152026\":\"2026년 3월 15일\",\"weTested12DifferentInternationalization\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 여기 놀라운 결과가 있습니다.\",\"benchmark\":\"벤치마크\",\"howToReduceYourI18n\":\"i18n 번들을 60% 줄이는 방법\",\"march82026\":\"2026년 3월 8일\",\"practicalStrategiesForOptimizingTranslation\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함한 번역 번들 최적화를위한 실용적인 전략.\",\"tutorial\":\"튜토리얼\",\"theStateOfInternationalizationIn\":\"React의 국제화 현황\",\"february282026\":\"2026년 2월 28일\",\"anOverviewOfTheCurrent\":\"React의 현재 i18n 생태계에 대한 개요로, 트렌드, 떠오르는 패턴 및 커뮤니티 선호도를 다룹니다.\",\"analysis\":\"분석\",\"migratingFromReactI18nextTo\":\"react-i18next에서 Lingui로 마이그레이션\",\"february152026\":\"2026년 2월 15일\",\"aStepByStepGuide\":\"50,000 개의 번역 키가있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드.\",\"serverComponentsAndI18nWhat\":\"서버 구성 요소 및 i18n: 무엇이 변합니까?\",\"february12026\":\"2026년 2월 1일\",\"reactServerComponentsIntroduceNew\":\"React Server Components는 국제화를위한 새로운 패턴을 도입합니다. 우리는 그 함의와 모범 사례를 탐구합니다.\",\"benchmarkMethodologyHowWeTest\":\"벤치 마크 방법론 : 테스트 방법\",\"january202026\":\"2026년 1월 20일\",\"aTransparentLookAtOur\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치 마크 방법론에 대한 투명한 살펴보기.\",\"meta\":\"메타\",\"readMore\":\"더 읽어보기 →\"},\"careersHeader\":{\"title\":\"채용\",\"joinOurMissionToImprove\":\"국제화 생태계를 개선하기 위한 우리의 임무에 동참하십시오. 우리는 영향력, 투명성 및 지속적인 학습을 중요하게 생각하는 원격 우선 팀입니다.\"},\"careersBenefits\":{\"remoteFirst\":\"원격 우선\",\"workFromAnywhereInThe\":\"전 세계 어디서나 근무하십시오\",\"competitivePay\":\"경쟁력있는 보수\",\"topOfMarketCompensation\":\"시장 최고의 보상\",\"openSourceTime\":\"오픈 소스 시간\",\"x20TimeForOssContributions\":\"OSS 기여를 위한 20% 시간\"},\"openPositions\":{\"seniorFrontendEngineer\":\"시니어 프런트 엔드 엔지니어\",\"remote\":\"원격\",\"fullTime\":\"풀타임\",\"engineering\":\"엔지니어링\",\"buildAndMaintainOurBenchmarking\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\",\"backendEngineer\":\"백엔드 엔지니어\",\"designAndScaleOurCloud\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\",\"technicalWriter\":\"테크니컬 라이터\",\"partTime\":\"파트타임\",\"documentation\":\"문서\",\"createComprehensiveGuidesApiReferences\":\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.\",\"devrelEngineer\":\"DevRel 엔지니어\",\"sanFranciscoRemote\":\"샌프란시스코 / 원격\",\"community\":\"커뮤니티\",\"engageWithTheI18nCommunity\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.\",\"qaEngineer\":\"QA 엔지니어\",\"ensureTheAccuracyAndReliability\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\",\"openPositions\":\"모집 부문\",\"applyNow\":\"지금 지원하기\"},\"contactHeader\":{\"getInTouch\":\"문의하기\",\"haveIdeasFoundABug\":\"아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요\"},\"contactForm\":{\"name\":\"이름\",\"email\":\"이메일\",\"subject\":\"제목\",\"message\":\"메시지\",\"sendMessage\":\"메시지 보내기\",\"wellGetBackTo\":\"48시간 이내에 답변해 드리겠습니다.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"자주 묻는 질문\",\"everythingYouNeedToKnow\":\"i18n Benchmark에 대해 알아야 할 모든 것.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"weRunStandardizedTestsIn\":\"우리는 일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"canISubmitMyOwn\":\"직접 벤치마크를 제출할 수 있나요?\",\"yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 되는 제출물을 검토하고 병합할 것입니다.\",\"howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"weReRunAllBenchmarks\":\"우리는 매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 재실행합니다. 메이저 버전이 출시되면 즉시 재벤치마크 주기가 시작됩니다.\",\"isTheDataReliable\":\"데이터가 신뢰할 수 있나요?\",\"weFollowRigorousStatisticalMethodology\":\"우리는 웜업 실행, 이상값 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 게시됩니다.\",\"doYouOfferConsultingServices\":\"컨설팅 서비스를 제공합나요?\",\"yesOurEnterprisePlanIncludes\":\"네, 엔터프라이즈 요금제에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"thereAreManyWaysTo\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 참조하세요.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"간단하고 투명한 가격 책정\",\"chooseThePlanThatFits\":\"팀에 적합한 요금제를 선택하십시오. 숨겨진 수수료가 없습니다.\"},\"pricingTiers\":{\"starter\":\"스타터\",\"price0\":\"0 $\",\"forever\":\"영구적\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"하루 {{runs}} 회의 벤치마크 실행\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 개의 라이브러리\"},\"communitySupport\":\"커뮤니티 지원\",\"publicResults\":\"공개 결과\",\"pro\":\"프로\",\"price29\":\"29 $\",\"month\":\"/월\",\"unlimitedRuns\":\"무제한 실행\",\"allLibraries\":\"모든 라이브러리\",\"prioritySupport\":\"우선 지원\",\"privateResults\":\"비공개 결과\",\"ciIntegration\":\"CI 통합\",\"historicalData\":\"기록 데이터\",\"enterprise\":\"엔터프라이즈\",\"customPrice\":\"맞춤형 가격\",\"everythingInPro\":\"프로의 모든 기능\",\"onPremiseOption\":\"온프레미스 옵션\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"전담 어카운트 매니저\",\"customSlas\":\"사용자 지정 SLA\",\"auditLogs\":\"감사 로그\",\"trainingSessions\":\"교육 세션\",\"contactSales\":\"영업 문의\",\"getStarted\":\"시작하기\"},\"productsHeader\":{\"products\":\"제품\",\"toolsAndServicesTo\":\"국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스.\"},\"productsGrid\":{\"benchmarkCli\":\"벤치마크 CLI\",\"runBenchmarksLocallyFromYour\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.\",\"free\":\"무료\",\"benchmarkCloud\":\"벤치마크 클라우드\",\"automatedCloudBasedBenchmarkingWith\":\"기록 추적, 알림 및 팀 대시보드를 제공하는 자동화된 클라우드 기반 벤치마킹.\",\"price29mo\":\"$29/월\",\"benchmarkEnterprise\":\"벤치마크 엔터프라이즈\",\"onPremiseDeploymentWithSso\":\"SSO, 감사 로그, 사용자 지정 SLA 및 전담 지원을 제공하는 온프레미스 배포.\",\"contactUs\":\"문의하기\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"aiPoweredToolThatHelps\":\"코드베이스를 가동 중지 시간 없이 i18n 라이브러리 간에 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"price99oneTime\":\"$99 일회성\",\"translationQa\":\"번역 QA\",\"automatedQualityChecksForMissing\":\"누락된 번역, 복수화 문제 및 상황별 오류에 대한 자동화된 품질 검사.\",\"price19mo\":\"$19/월\",\"bundleOptimizer\":\"번들 최적화기\",\"analyzesAndOptimizesYourI18n\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"price49mo\":\"$49/월\",\"learnMore\":\"자세히 알아보기\"},\"settingsHeader\":{\"settings\":\"설정\",\"manageYourAccountPreferences\":\"계정 기본 설정 및 구성을 관리합니다.\"},\"profileSection\":{\"profile\":\"프로필\",\"displayName\":\"표시 이름\",\"email\":\"이메일\"},\"preferencesSection\":{\"preferences\":\"기본 설정\",\"emailNotifications\":\"이메일 알림\",\"receiveWeeklyBenchmarkReports\":\"주간 벤치마크 보고서 받기\",\"darkMode\":\"다크 모드\",\"useDarkColorScheme\":\"어두운 색상 체계 사용\",\"defaultLanguage\":\"기본 언어\"},\"apiAccessSection\":{\"apiAccess\":\"API 액세스\",\"apiKey\":\"API 키\",\"useThisKeyTo\":\"이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.\",\"copy\":\"복사\"},\"settingsFooter\":{\"cancel\":\"취소\",\"saveChanges\":\"변경 사항 저장\"},\"teamHeader\":{\"ourTeam\":\"우리 팀\",\"meetThePeopleBehindI18n\":\"i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.\"},\"teamGrid\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"창립자 및 리드 엔지니어\",\"formerGoogleEngineerWith10\":\"전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"성능 엔지니어\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"개발자 에반젤리스트\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"풀스택 개발자\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"데이터 분석가\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"커뮤니티 매니저\",\"managesCommunityContributionsPartnershipsAnd\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。\"},\"mockBanner\":\"⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"route\":{\"oopsPageNotFound\":\"Упс! Страница не найдена\",\"returnToHome\":\"Вернуться на главную\",\"couldNotMeasureHydrationDuration\":\"Не удалось измерить продолжительность гидратации:\"},\"header\":{\"home\":\"Главная\",\"methodology\":\"Методология\",\"mockPages\":\"Тестовые страницы\",\"products\":\"Продукты\",\"pricing\":\"Цены\",\"team\":\"Команда\",\"blog\":\"Блог\",\"careers\":\"Карьера\",\"faq\":\"FAQ\",\"contact\":\"Контакт\",\"settings\":\"Настройки\",\"goToGithub\":\"Перейти на GitHub\"},\"footer\":{\"resources\":\"Ресурсы\",\"contact\":\"Контакт\",\"github\":\"GitHub\",\"methodology\":\"Методология\",\"contributing\":\"Вклад\",\"builtWith\":\"i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.\",\"anOpenSourceTestApplication\":\"Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.\"},\"themeToggle\":{\"themeModeAutoSystemClick\":\"Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\",\"themeModeLightClick\":\"Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.\",\"themeModeDarkClick\":\"Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.\",\"themeAuto\":\"Тема: Авто\",\"themeDark\":\"Тема: Темная\",\"themeLight\":\"Тема: Светлая\"},\"hero\":{\"aTestApplicationDesignedTo\":\"Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\",\"viewResults\":\"Посмотреть результаты\"},\"whyItMatters\":{\"whyTheseMetricsMatter\":\"Почему эти показатели важны\",\"bundleSize\":\"Размер бандла\",\"theBundleIsTheData\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"renderingHydration\":\"Рендеринг и гидратация\",\"connectingALargeJson\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"dynamicLoading\":\"Динамическая загрузка\",\"loadingAllTranslationsUpfront\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\"},\"understandingImpact\":{\"understandingTheImpact\":\"Понимание влияния\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"cacheInvalidation\":\"Инвалидация кэша:\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"},\"resultsTable\":{\"sampleResults\":\"Примеры результатов\",\"bundleSize\":\"Размер бандла\",\"lookupTime\":\"Время поиска\",\"lazyLoading\":\"Ленивая загрузка\"},\"aboutHeader\":{\"aboutThisBenchmark\":\"Об этом бенчмарке\",\"thisIsAnOpenSource\":\"Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\"},\"aboutGrid\":{\"whyThisExists\":\"Почему это существует\",\"choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodology\":\"Методология\",\"theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"},\"whatWeMeasure\":{\"bundleSizeImpact\":\"Влияние на размер бандла\",\"theAdditionalJavascriptBytesSent\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"renderingOverhead\":\"Затраты на рендеринг\",\"howMuchExtraTimeThe\":\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"hydrationCost\":\"Стоимость гидратации\",\"duringSsrTranslationDataIs\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"lazyLoadingEffectiveness\":\"Эффективность ленивой загрузки\",\"whetherSplittingTranslationsByRoute\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\",\"localeSwitchSpeed\":\"Скорость переключения языка\",\"howFastTheAppCan\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"whatWeMeasure\":\"Что мы измеряем\"},\"blogHeader\":{\"blog\":\"Блог\",\"insightsDeepDivesAnd\":\"Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n.\"},\"blogList\":{\"comparingI18nLibrariesIn2026\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"march152026\":\"15 марта 2026 года\",\"weTested12DifferentInternationalization\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"benchmark\":\"Бенчмарк\",\"howToReduceYourI18n\":\"Как уменьшить бандл i18n на 60%\",\"march82026\":\"8 марта 2026 года\",\"practicalStrategiesForOptimizingTranslation\":\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\",\"tutorial\":\"Руководство\",\"theStateOfInternationalizationIn\":\"Состояние интернационализации в React\",\"february282026\":\"28 февраля 2026 года\",\"anOverviewOfTheCurrent\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\",\"analysis\":\"Анализ\",\"migratingFromReactI18nextTo\":\"Миграция с react-i18next на Lingui\",\"february152026\":\"15 февраля 2026 года\",\"aStepByStepGuide\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components и i18n: что меняется?\",\"february12026\":\"1 февраля 2026 года\",\"reactServerComponentsIntroduceNew\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"benchmarkMethodologyHowWeTest\":\"Методология бенчмарка: как мы тестируем\",\"january202026\":\"20 января 2026 года\",\"aTransparentLookAtOur\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"meta\":\"Мета\",\"readMore\":\"Читать далее →\"},\"careersHeader\":{\"title\":\"Карьера\",\"joinOurMissionToImprove\":\"Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.\"},\"careersBenefits\":{\"remoteFirst\":\"Удаленная работа прежде всего\",\"workFromAnywhereInThe\":\"Работайте из любой точки мира\",\"competitivePay\":\"Конкурентоспособная оплата\",\"topOfMarketCompensation\":\"Компенсация выше рыночной\",\"openSourceTime\":\"Время на open source\",\"x20TimeForOssContributions\":\"20% времени на вклад в OSS\"},\"openPositions\":{\"seniorFrontendEngineer\":\"Старший фронтенд-инженер\",\"remote\":\"Удаленно\",\"fullTime\":\"Полный рабочий день\",\"engineering\":\"Разработка\",\"buildAndMaintainOurBenchmarking\":\"Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.\",\"backendEngineer\":\"Бэкенд-инженер\",\"designAndScaleOurCloud\":\"Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.\",\"technicalWriter\":\"Технический писатель\",\"partTime\":\"Неполный рабочий день\",\"documentation\":\"Документация\",\"createComprehensiveGuidesApiReferences\":\"Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.\",\"devrelEngineer\":\"DevRel-инженер\",\"sanFranciscoRemote\":\"Сан-Франциско / Удаленно\",\"community\":\"Сообщество\",\"engageWithTheI18nCommunity\":\"Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.\",\"qaEngineer\":\"QA-инженер\",\"ensureTheAccuracyAndReliability\":\"Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.\",\"openPositions\":\"Открытые вакансии\",\"applyNow\":\"Подать заявку\"},\"contactHeader\":{\"getInTouch\":\"Связаться с нами\",\"haveIdeasFoundABug\":\"Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу\"},\"contactForm\":{\"name\":\"Имя\",\"email\":\"Email\",\"subject\":\"Тема\",\"message\":\"Сообщение\",\"sendMessage\":\"Отправить сообщение\",\"wellGetBackTo\":\"Мы ответим вам в течение 48 часов.\"},\"faq-header1\":{\"frequentlyAskedQuestions\":\"Часто задаваемые вопросы\",\"everythingYouNeedToKnow\":\"Все, что вам нужно знать об i18n Benchmark.\"},\"faqList\":{\"whatIsI18nBenchmark\":\"Что такое i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"Как проводятся бенчмарки ?\",\"weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в настоящее время ?\",\"weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"canISubmitMyOwn\":\"Могу ли я отправить свои собственные бенчмарки ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.\",\"howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки ?\",\"weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.\",\"isTheDataReliable\":\"Надежны ли данные ?\",\"weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"doYouOfferConsultingServices\":\"Предлагаете ли вы консультационные услуги ?\",\"yesOurEnterprisePlanIncludes\":\"Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\",\"howCanIContribute\":\"Как я могу помочь ?\",\"thereAreManyWaysTo\":\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.\"},\"pricingHeader\":{\"simpleTransparentPricing\":\"Простое и прозрачное ценообразование\",\"chooseThePlanThatFits\":\"Выберите план, который подходит вашей команде. Никаких скрытых комиссий.\"},\"pricingTiers\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"навсегда\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} запусков бенчмарка в день\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} библиотек\"},\"communitySupport\":\"Сообщество поддержки\",\"publicResults\":\"Публичные результаты\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/месяц\",\"unlimitedRuns\":\"Неограниченное количество запусков\",\"allLibraries\":\"Все библиотеки\",\"prioritySupport\":\"Приоритетная поддержка\",\"privateResults\":\"Приватные результаты\",\"ciIntegration\":\"Интеграция с CI\",\"historicalData\":\"Исторические данные\",\"enterprise\":\"Корпоративный\",\"customPrice\":\"Индивидуальная цена\",\"everythingInPro\":\"Все возможности Pro\",\"onPremiseOption\":\"Локальное развертывание\",\"ssoSaml\":\"SSO и SAML\",\"dedicatedAccountManager\":\"Выделенный менеджер\",\"customSlas\":\"Индивидуальные SLA\",\"auditLogs\":\"Журналы аудита\",\"trainingSessions\":\"Сессии обучения\",\"contactSales\":\"Связаться с отделом продаж\",\"getStarted\":\"Начать\"},\"productsHeader\":{\"products\":\"Продукты\",\"toolsAndServicesTo\":\"Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации.\"},\"productsGrid\":{\"benchmarkCli\":\"CLI для бенчмаркинга\",\"runBenchmarksLocallyFromYour\":\"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.\",\"free\":\"Бесплатно\",\"benchmarkCloud\":\"Облачный бенчмаркинг\",\"automatedCloudBasedBenchmarkingWith\":\"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.\",\"price29mo\":\"29 $/мес\",\"benchmarkEnterprise\":\"Корпоративный бенчмаркинг\",\"onPremiseDeploymentWithSso\":\"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"contactUs\":\"Связаться с нами\",\"migrationAssistant\":\"Помощник по миграции\",\"aiPoweredToolThatHelps\":\"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"price99oneTime\":\"$99 один раз\",\"translationQa\":\"Контроль качества перевода\",\"automatedQualityChecksForMissing\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.\",\"price19mo\":\"19 $/мес\",\"bundleOptimizer\":\"Оптимизатор бандлов\",\"analyzesAndOptimizesYourI18n\":\"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.\",\"price49mo\":\"49 $/мес\",\"learnMore\":\"Узнать больше\"},\"settingsHeader\":{\"settings\":\"Настройки\",\"manageYourAccountPreferences\":\"Управляйте настройками своего аккаунта и конфигурацией.\"},\"profileSection\":{\"profile\":\"Профиль\",\"displayName\":\"Отображаемое имя\",\"email\":\"Email\"},\"preferencesSection\":{\"preferences\":\"Настройки\",\"emailNotifications\":\"Email-уведомления\",\"receiveWeeklyBenchmarkReports\":\"Получать еженедельные отчеты о бенчмарках\",\"darkMode\":\"Темный режим\",\"useDarkColorScheme\":\"Использовать темную цветовою схему\",\"defaultLanguage\":\"Язык по умолчанию\"},\"apiAccessSection\":{\"apiAccess\":\"Доступ к API\",\"apiKey\":\"Ключ API\",\"useThisKeyTo\":\"Используйте этот ключ для программного доступа к API бенчмаркинга.\",\"copy\":\"Копировать\"},\"settingsFooter\":{\"cancel\":\"Отмена\",\"saveChanges\":\"Сохранить изменения\"},\"teamHeader\":{\"ourTeam\":\"Наша команда\",\"meetThePeopleBehindI18n\":\"Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.\"},\"teamGrid\":{\"sarahChen\":\"Сара Чен\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"marcusWeber\":\"Маркус Вебер\",\"performanceEngineer\":\"Инженер по производительности\",\"specializesInJavascriptPerformanceOptimization\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"aishaPatel\":\"Айша Патель\",\"developerAdvocate\":\"Адвокат разработчиков\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\",\"tomasRodriguez\":\"Томас Родригес\",\"fullStackDeveloper\":\"Full-Stack разработчик\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.\",\"yukiTanaka\":\"Юки Танака\",\"dataAnalyst\":\"Аналитик данных\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).\",\"elenaKowalski\":\"Елена Ковальски\",\"communityManager\":\"Комьюнити-менеджер\",\"managesCommunityContributionsPartnershipsAnd\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"},\"mockBanner\":\"⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}"),
	localIds: [
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/en.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/fr.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/es.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/de.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/it.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/pt.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/zh.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/ja.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/ko.json",
		"index::sync-json::./src/i18n/locales/{{locale}}.json::src/i18n/locales/ru.json"
	]
} };
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
var CONTROL_OPTION_KEYS = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]);
var MAX_NESTING_DEPTH = 5;
var ROOT_DICTIONARY_KEY = "index";
var getDictionaryOrUndefined = (namespace, locale) => {
	if (!(namespace in getDictionaries())) return void 0;
	return getIntlayer(namespace, locale);
};
var buildKeyCandidates = (path, locale, count, context, ordinal) => {
	const candidates = [];
	const pluralCategory = count === void 0 ? void 0 : new Intl.PluralRules(locale, { type: ordinal ? "ordinal" : "cardinal" }).select(count);
	if (context) {
		if (pluralCategory) {
			if (ordinal) candidates.push(`${path}_${context}_ordinal_${pluralCategory}`);
			candidates.push(`${path}_${context}_${pluralCategory}`);
			if (count !== 1) candidates.push(`${path}_${context}_plural`);
		}
		candidates.push(`${path}_${context}`);
	}
	if (pluralCategory) {
		if (ordinal) candidates.push(`${path}_ordinal_${pluralCategory}`);
		candidates.push(`${path}_${pluralCategory}`);
		if (count !== 1) candidates.push(`${path}_plural`);
	}
	candidates.push(path);
	return candidates;
};
var getInterpolationValues = (options) => {
	if (!options || typeof options !== "object") return {};
	const replace = options.replace;
	if (replace) {
		const values = { ...replace };
		if (options.count !== void 0) values.count ??= options.count;
		if (options.context !== void 0) values.context ??= options.context;
		return values;
	}
	const values = {};
	for (const [optionKey, optionValue] of Object.entries(options)) if (!CONTROL_OPTION_KEYS.has(optionKey)) values[optionKey] = optionValue;
	return values;
};
var resolveTranslation = ({ locale, namespace, key, options, keySeparator = ".", nsSeparator = ":", depth = 0, dictionaryContent }) => {
	let targetNamespace = namespace;
	let path = key;
	if (nsSeparator !== false && key.includes(nsSeparator)) {
		const separatorIndex = key.indexOf(nsSeparator);
		targetNamespace = key.slice(0, separatorIndex);
		path = key.slice(separatorIndex + nsSeparator.length);
	} else if (options?.ns) targetNamespace = Array.isArray(options.ns) ? options.ns[0] : options.ns;
	const count = typeof options?.count === "number" ? options.count : void 0;
	const context = options?.context !== void 0 ? String(options.context) : void 0;
	const ordinal = options?.ordinal === true;
	const resolvedLocale = options?.lng ?? locale;
	let dictionary;
	if (dictionaryContent !== void 0 && targetNamespace === namespace && options?.lng === void 0) dictionary = dictionaryContent;
	else {
		dictionary = getDictionaryOrUndefined(targetNamespace, resolvedLocale);
		if (dictionary === void 0 && targetNamespace === namespace && targetNamespace !== ROOT_DICTIONARY_KEY) dictionary = getDictionaryOrUndefined(ROOT_DICTIONARY_KEY, resolvedLocale);
		if (dictionary === void 0) return void 0;
	}
	let resolvedValue;
	for (const candidate of buildKeyCandidates(path, options?.lng ?? locale, count, context, ordinal)) {
		const value = navigatePath(dictionary, candidate, keySeparator);
		if (value !== null && value !== void 0) {
			resolvedValue = value;
			break;
		}
	}
	if (resolvedValue === null || resolvedValue === void 0) return void 0;
	if (options?.returnObjects && typeof resolvedValue === "object" && resolvedValue !== null) return resolvedValue;
	const values = getInterpolationValues(options);
	let resolved = resolveMessageNodeToString(resolvedValue, values, options?.lng ?? locale);
	if (depth < MAX_NESTING_DEPTH && resolved.includes("$t(")) resolved = resolved.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (match, nestedKey) => {
		const nestedValue = resolveTranslation({
			locale,
			namespace: targetNamespace,
			key: nestedKey.trim(),
			options,
			keySeparator,
			nsSeparator,
			depth: depth + 1,
			dictionaryContent: targetNamespace === namespace ? dictionaryContent : void 0
		});
		return typeof nestedValue === "string" ? nestedValue : match;
	});
	return resolved;
};
var warnIgnoredResources = (location) => {
	getAppLogger({ log })(`${colorize(location, CYAN)}: the ${colorize("`resources`", CYAN)} option is ignored when using ${colorize("@intlayer/i18next", MAGENTA)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${colorize("`resources`", CYAN)} option to reduce your bundle size.`);
};
var createInstance = (instanceOptions = {}) => {
	if (instanceOptions.resources !== void 0) warnIgnoredResources("createInstance");
	const config = internationalization;
	let currentLanguage = instanceOptions.lng ?? config?.defaultLocale ?? "en";
	let defaultNS = instanceOptions.defaultNS ?? (Array.isArray(instanceOptions.ns) ? instanceOptions.ns[0] : instanceOptions.ns) ?? "translation";
	const listeners = /* @__PURE__ */ new Map();
	let initialized = false;
	const emit = (event, ...args) => {
		listeners.get(event)?.forEach((h) => {
			h(...args);
		});
	};
	const getSeparators = () => ({
		keySeparator: instanceOptions.keySeparator ?? ".",
		nsSeparator: instanceOptions.nsSeparator ?? ":"
	});
	const resolveKey = (lang, ns, key, opts) => {
		const options = typeof opts === "string" ? { defaultValue: opts } : opts;
		const resolved = resolveTranslation({
			locale: lang,
			namespace: ns,
			key,
			options,
			...getSeparators()
		});
		if (resolved !== void 0) return resolved;
		const defaultValue = options?.defaultValue;
		if (typeof defaultValue === "string") return resolveMessageNodeToString(defaultValue, getInterpolationValues(options), lang);
		return key;
	};
	const instance = {
		get language() {
			return currentLanguage;
		},
		get languages() {
			return config?.locales?.map(String) ?? [currentLanguage];
		},
		get resolvedLanguage() {
			return currentLanguage;
		},
		get isInitialized() {
			return initialized;
		},
		isInitializing: false,
		initializedStoreOnce: false,
		initializedLanguageOnce: false,
		options: instanceOptions,
		modules: {},
		services: {},
		store: {},
		format: ((value) => String(value)),
		async init(optionsOrCb, cb) {
			const opts = typeof optionsOrCb === "function" ? {} : optionsOrCb ?? {};
			if (opts.resources !== void 0) warnIgnoredResources("i18next.init");
			if (opts.lng) currentLanguage = opts.lng;
			if (opts.defaultNS) defaultNS = opts.defaultNS;
			else if (opts.ns) defaultNS = Array.isArray(opts.ns) ? opts.ns[0] : opts.ns;
			initialized = true;
			emit("initialized", opts);
			const t = instance.t.bind(instance);
			(typeof optionsOrCb === "function" ? optionsOrCb : cb)?.(null, t);
			return t;
		},
		t(key, optionsOrDefaultValue, extraOpts) {
			const options = typeof optionsOrDefaultValue === "string" ? {
				defaultValue: optionsOrDefaultValue,
				...extraOpts ?? {}
			} : optionsOrDefaultValue;
			const keys = Array.isArray(key) ? key : [String(key)];
			for (const candidateKey of keys) {
				const result = resolveTranslation({
					locale: currentLanguage,
					namespace: defaultNS,
					key: candidateKey,
					options,
					...getSeparators()
				});
				if (result !== void 0) return result;
			}
			const defaultValue = options?.defaultValue;
			if (typeof defaultValue === "string") return resolveMessageNodeToString(defaultValue, getInterpolationValues(options), currentLanguage);
			return defaultValue ?? (Array.isArray(key) ? key[key.length - 1] : key);
		},
		async changeLanguage(language, cb) {
			const prev = currentLanguage;
			if (language) currentLanguage = language;
			emit("languageChanged", currentLanguage, prev);
			const t = instance.t.bind(instance);
			cb?.(null, t);
			return t;
		},
		exists(key, options) {
			return resolveTranslation({
				locale: currentLanguage,
				namespace: defaultNS,
				key,
				options,
				...getSeparators()
			}) !== void 0;
		},
		getFixedT: ((language, ns, keyPrefix) => {
			const fixedLng = Array.isArray(language) ? language[0] ?? currentLanguage : language ?? currentLanguage;
			const fixedNS = ns ?? defaultNS;
			return (key, opts) => {
				const fullKey = keyPrefix ? `${keyPrefix}.${key}` : key;
				return resolveKey(fixedLng, fixedNS, fullKey, opts);
			};
		}),
		use(module) {
			module?.init?.(instance);
			return instance;
		},
		on(event, handler) {
			if (!listeners.has(event)) listeners.set(event, /* @__PURE__ */ new Set());
			listeners.get(event).add(handler);
			return instance;
		},
		once(event, handler) {
			const wrapper = (...args) => {
				handler(...args);
				instance.off(event, wrapper);
			};
			instance.on(event, wrapper);
			return instance;
		},
		off(event, handler) {
			if (!handler) listeners.delete(event);
			else listeners.get(event)?.delete(handler);
		},
		emit(eventName, ...args) {
			emit(eventName, ...args);
		},
		createInstance(opts, _cb) {
			return createInstance({
				...instanceOptions,
				...opts
			});
		},
		cloneInstance(opts, _cb) {
			return createInstance({
				...instanceOptions,
				...opts
			});
		},
		dir(language) {
			return getHTMLTextDir(language ?? currentLanguage) === "rtl" ? "rtl" : "ltr";
		},
		setDefaultNamespace(ns) {
			defaultNS = ns;
		},
		hasLoadedNamespace(ns) {
			try {
				getIntlayer(Array.isArray(ns) ? ns[0] : ns, currentLanguage);
				return true;
			} catch {
				return false;
			}
		},
		async loadNamespaces(_ns) {},
		async loadLanguages(_lngs) {},
		loadResources(_cb) {},
		async reloadResources() {},
		getDataByLanguage(_lng) {},
		getResource(lng, ns, key) {
			try {
				return navigatePath(getIntlayer(ns, lng), key);
			} catch {
				return;
			}
		},
		addResource: () => instance,
		addResources: () => instance,
		addResourceBundle: () => instance,
		hasResourceBundle: () => false,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => instance,
		toJSON() {
			return {
				options: instanceOptions,
				store: {},
				language: currentLanguage,
				languages: config?.locales?.map(String) ?? [currentLanguage],
				resolvedLanguage: currentLanguage
			};
		}
	};
	return instance;
};
var i18next = createInstance();
i18next.dir.bind(i18next);
i18next.init.bind(i18next);
i18next.loadResources.bind(i18next);
i18next.reloadResources.bind(i18next);
i18next.use.bind(i18next);
i18next.changeLanguage.bind(i18next);
i18next.getFixedT.bind(i18next);
i18next.t.bind(i18next);
i18next.exists.bind(i18next);
i18next.setDefaultNamespace.bind(i18next);
i18next.hasLoadedNamespace.bind(i18next);
i18next.loadNamespaces.bind(i18next);
i18next.loadLanguages.bind(i18next);
var createTranslationApi = ({ locale, setLocale, availableLocales, namespace, keyPrefix, dictionaryContent }) => {
	const resolveSingleKey = (key, translateOptions) => resolveTranslation({
		locale,
		namespace,
		key: keyPrefix ? `${keyPrefix}.${key}` : key,
		options: translateOptions,
		dictionaryContent
	});
	const translate = (key, optionsOrDefaultValue, extraOptions) => {
		const translateOptions = typeof optionsOrDefaultValue === "string" ? {
			defaultValue: optionsOrDefaultValue,
			...extraOptions
		} : optionsOrDefaultValue ?? {};
		const keys = Array.isArray(key) ? key : [key];
		for (const candidateKey of keys) {
			const resolved = resolveSingleKey(candidateKey, translateOptions);
			if (resolved !== void 0) return resolved;
		}
		const defaultValue = translateOptions.defaultValue;
		if (typeof defaultValue === "string") return resolveMessageNodeToString(defaultValue, getInterpolationValues(translateOptions), locale);
		return keys[keys.length - 1];
	};
	return {
		translate,
		i18n: {
			language: locale,
			languages: availableLocales ?? [],
			resolvedLanguage: locale,
			isInitialized: true,
			changeLanguage: async (newLanguage) => {
				setLocale(newLanguage);
			},
			dir: (language) => {
				return getHTMLTextDir(language ?? locale) === "rtl" ? "rtl" : "ltr";
			},
			exists: (key, existsOptions) => resolveTranslation({
				locale,
				namespace,
				key,
				options: existsOptions,
				dictionaryContent
			}) !== void 0,
			t: translate,
			getFixedT: (language, fixedNamespace) => (key, fixedOptions) => {
				const resolved = resolveTranslation({
					locale: language ?? locale,
					namespace: fixedNamespace ?? namespace,
					key,
					options: fixedOptions,
					dictionaryContent: (language ?? locale) === locale && (fixedNamespace ?? namespace) === namespace ? dictionaryContent : void 0
				});
				return resolved !== void 0 ? resolved : key;
			}
		}
	};
};
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
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
var { defaultLocale, locales: availableLocales } = internationalization ?? {};
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
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
var useTranslationImplementation = (ns, options) => {
	const namespace = Array.isArray(ns) ? ns[0] ?? "translation" : ns ?? "translation";
	const { locale, setLocale, availableLocales } = useLocale();
	const keyPrefix = options?.keyPrefix;
	const { translate, i18n } = useMemo(() => createTranslationApi({
		locale,
		setLocale,
		availableLocales: availableLocales ?? [],
		namespace,
		keyPrefix
	}), [
		locale,
		setLocale,
		availableLocales,
		namespace,
		keyPrefix
	]);
	return {
		t: translate,
		i18n,
		ready: true
	};
};
var useTranslation = useTranslationImplementation;
var I18nextProvider = ({ children, i18n: _i18n }) => {
	if (_i18n !== void 0) getAppLogger({ log })(`${colorize("I18nextProvider", CYAN)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`);
	return jsx(IntlayerProvider, { children });
};
React.createContext({ i18n: null });
var initReactI18next = {
	type: "3rdParty",
	init: (instance) => {}
};
var MockBanner = () => {
	const { t } = useTranslation();
	return jsx("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: t("mockBanner")
	});
};
function PricingHeader() {
	const { t } = useTranslation();
	return jsxs(Fragment, { children: [jsx(MockBanner, {}), jsxs("div", {
		className: "mb-12 text-center",
		children: [jsx("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: t("pricingHeader.simpleTransparentPricing")
		}), jsx("p", {
			className: "text-muted-foreground",
			children: t("pricingHeader.chooseThePlanThatFits")
		})]
	})] });
}
i18next.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false }
});
var i18n_default = i18next;
function Wrapper({ children }) {
	return jsx(I18nextProvider, {
		i18n: i18n_default,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PricingHeader, {}) });
}
export { Wrapped as default };

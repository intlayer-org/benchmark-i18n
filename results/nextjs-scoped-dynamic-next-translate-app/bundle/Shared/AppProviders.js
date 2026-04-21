import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
import { useRouter } from "next/router";
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
	return jsx(Fragment, { children });
}
var context;
if (typeof React.createContext === "function") context = React.createContext({
	t: function(k) {
		return Array.isArray(k) ? k[0] : k;
	},
	lang: ""
});
var context_default = context;
function safePluralRules(locale) {
	try {
		return new Intl.PluralRules(locale);
	} catch (_e) {
		return new Intl.PluralRules();
	}
}
var __assign$3 = function() {
	__assign$3 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$3.apply(this, arguments);
};
function splitNsKey(key, nsSeparator) {
	if (!nsSeparator) return { i18nKey: key };
	var i = key.indexOf(nsSeparator);
	if (i < 0) return { i18nKey: key };
	return {
		namespace: key.slice(0, i),
		i18nKey: key.slice(i + nsSeparator.length)
	};
}
function transCore(_a) {
	var config = _a.config, allNamespaces = _a.allNamespaces, pluralRules = _a.pluralRules, lang = _a.lang;
	var _b = config.logger, logger = _b === void 0 ? missingKeyLogger : _b, _c = config.allowEmptyStrings, allowEmptyStrings = _c === void 0 ? true : _c;
	var interpolateUnknown = function(value, query) {
		if (Array.isArray(value)) return value.map(function(val) {
			return interpolateUnknown(val, query);
		});
		if (value instanceof Object) return objectInterpolation({
			obj: value,
			query,
			config,
			lang
		});
		return interpolation({
			text: value,
			query,
			config,
			lang
		});
	};
	var t = function(key, query, options) {
		var _a;
		if (key === void 0) key = "";
		var k = Array.isArray(key) ? key[0] : key;
		var _b = config.nsSeparator, nsSeparator = _b === void 0 ? ":" : _b, _c = config.loggerEnvironment, loggerEnvironment = _c === void 0 ? "browser" : _c;
		var _d = splitNsKey(k, nsSeparator), i18nKey = _d.i18nKey, _e = _d.namespace, namespace = _e === void 0 ? (_a = options === null || options === void 0 ? void 0 : options.ns) !== null && _a !== void 0 ? _a : config.defaultNS : _e;
		var dic = namespace && allNamespaces[namespace] || {};
		var dicValue = getDicValue(dic, plural(pluralRules, dic, i18nKey, config, query, options), config, options);
		var value = typeof dicValue === "object" ? JSON.parse(JSON.stringify(dicValue)) : dicValue;
		var empty = typeof value === "undefined" || typeof value === "object" && !Object.keys(value).length || value === "" && !allowEmptyStrings;
		var fallbacks = typeof (options === null || options === void 0 ? void 0 : options.fallback) === "string" ? [options.fallback] : (options === null || options === void 0 ? void 0 : options.fallback) || [];
		if (empty && (loggerEnvironment === "both" || loggerEnvironment === (typeof window === "undefined" ? "node" : "browser"))) logger({
			namespace,
			i18nKey
		});
		if (empty && Array.isArray(fallbacks) && fallbacks.length) {
			var firstFallback = fallbacks[0], restFallbacks = fallbacks.slice(1);
			if (typeof firstFallback === "string") return t(firstFallback, query, __assign$3(__assign$3({}, options), { fallback: restFallbacks }));
		}
		if (empty && options && options.hasOwnProperty("default") && !(fallbacks === null || fallbacks === void 0 ? void 0 : fallbacks.length)) return options.default ? interpolateUnknown(options.default, query) : options.default;
		if (empty) return k;
		return interpolateUnknown(value, query);
	};
	return t;
}
function getDicValue(dic, key, config, options) {
	if (key === void 0) key = "";
	if (options === void 0) options = { returnObjects: false };
	var _a = (config || {}).keySeparator, keySeparator = _a === void 0 ? "." : _a;
	var keyParts = keySeparator ? key.split(keySeparator) : [key];
	if (key === keySeparator && options.returnObjects) return dic;
	var value = keyParts.reduce(function(val, key) {
		if (typeof val === "string") return {};
		var res = val[key];
		return res || (typeof res === "string" ? res : {});
	}, dic);
	if (typeof value === "string" || value instanceof Object && options.returnObjects && Object.keys(value).length > 0) return value;
	if (Array.isArray(value) && options.returnObjects) return value;
}
function plural(pluralRules, dic, key, config, query, options) {
	if (!query || typeof query.count !== "number") return key;
	var numKey = "".concat(key, "_").concat(query.count);
	if (getDicValue(dic, numKey, config, options) !== void 0) return numKey;
	var pluralKey = "".concat(key, "_").concat(pluralRules.select(query.count));
	if (getDicValue(dic, pluralKey, config, options) !== void 0) return pluralKey;
	var nestedNumKey = "".concat(key, ".").concat(query.count);
	if (getDicValue(dic, nestedNumKey, config, options) !== void 0) return nestedNumKey;
	var nestedKey = "".concat(key, ".").concat(pluralRules.select(query.count));
	if (getDicValue(dic, nestedKey, config, options) !== void 0) return nestedKey;
	return key;
}
function interpolation(_a) {
	var text = _a.text, query = _a.query, config = _a.config, lang = _a.lang;
	if (!text || !query) return text || "";
	var escapeRegex = function(str) {
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	};
	var _b = config.interpolation || {}, _c = _b.format, format = _c === void 0 ? null : _c, _d = _b.prefix, prefix = _d === void 0 ? "{{" : _d, _e = _b.suffix, suffix = _e === void 0 ? "}}" : _e;
	var regexEnd = suffix === "" ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(escapeRegex(suffix));
	return Object.keys(query).reduce(function(all, varKey) {
		var regex = new RegExp("".concat(escapeRegex(prefix), "\\s*").concat(varKey).concat(regexEnd), "gm");
		return all.replace(regex, function(_match, $1) {
			return $1 && format ? format(query[varKey], $1, lang) : query[varKey];
		});
	}, text);
}
function objectInterpolation(_a) {
	var obj = _a.obj, query = _a.query, config = _a.config, lang = _a.lang;
	if (!query || Object.keys(query).length === 0) return obj;
	Object.keys(obj).forEach(function(key) {
		if (obj[key] instanceof Object) objectInterpolation({
			obj: obj[key],
			query,
			config,
			lang
		});
		if (typeof obj[key] === "string") obj[key] = interpolation({
			text: obj[key],
			query,
			config,
			lang
		});
	});
	return obj;
}
function missingKeyLogger(_a) {
	var namespace = _a.namespace, i18nKey = _a.i18nKey;
	if (process.env.NODE_ENV === "production") return;
	if (!namespace) {
		console.warn("[next-translate] The text \"".concat(i18nKey, "\" has no namespace in front of it."));
		return;
	}
	console.warn("[next-translate] \"".concat(namespace, ":").concat(i18nKey, "\" is missing in current namespace configuration. Try adding \"").concat(i18nKey, "\" to the namespace \"").concat(namespace, "\"."));
}
var __assign$2 = function() {
	__assign$2 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$2.apply(this, arguments);
};
function wrapTWithDefaultNs(oldT, ns) {
	if (typeof ns !== "string") return oldT;
	var t = function(key, query, options) {
		return oldT(key, query, __assign$2({ ns }, options));
	};
	return t;
}
function isServer() {
	return typeof window === "undefined";
}
function createTranslation(defaultNS) {
	var _a;
	var _b = (_a = globalThis.__NEXT_TRANSLATE__) !== null && _a !== void 0 ? _a : {}, lang = _b.lang, namespaces = _b.namespaces, config = _b.config;
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var getT = function() {
		return wrapTWithDefaultNs(transCore({
			config,
			allNamespaces: namespaces,
			pluralRules: safePluralRules(ignoreLang ? void 0 : lang),
			lang
		}), defaultNS);
	};
	return {
		t: isServer() ? getT() : useMemo(getT, [defaultNS, lang]),
		lang
	};
}
var __assign$1 = function() {
	__assign$1 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$1.apply(this, arguments);
};
function useTranslationInPages(defaultNS) {
	var ctx = useContext(context_default);
	return useMemo(function() {
		return __assign$1(__assign$1({}, ctx), { t: wrapTWithDefaultNs(ctx.t, defaultNS) });
	}, [ctx, defaultNS]);
}
function useTranslation(defaultNS) {
	var appDir = globalThis.__NEXT_TRANSLATE__;
	return ((appDir === null || appDir === void 0 ? void 0 : appDir.config) ? createTranslation : useTranslationInPages)(defaultNS);
}
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var InternalContext = createContext({
	ns: {},
	config: {}
});
function I18nProvider(_a) {
	var lng = _a.lang, _b = _a.namespaces, namespaces = _b === void 0 ? {} : _b, children = _a.children, _c = _a.config, newConfig = _c === void 0 ? {} : _c;
	var parentLang = useTranslation().lang;
	var _d = useRouter() || {}, locale = _d.locale, defaultLocale = _d.defaultLocale;
	var internal = useContext(InternalContext);
	var allNamespaces = __assign(__assign(__assign({}, initialBrowserNamespaces()), internal.ns), namespaces);
	var lang = lng || parentLang || locale || defaultLocale || "";
	var config = __assign(__assign({}, internal.config), newConfig);
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var pluralRules = useMemo(function() {
		return safePluralRules(ignoreLang ? void 0 : lang);
	}, [ignoreLang, lang]);
	var t = useMemo(function() {
		return transCore({
			config,
			allNamespaces,
			pluralRules,
			lang
		});
	}, [
		config,
		allNamespaces,
		pluralRules,
		lang
	]);
	return React.createElement(context_default.Provider, { value: {
		lang,
		t
	} }, React.createElement(InternalContext.Provider, { value: {
		ns: allNamespaces,
		config
	} }, children));
}
function initialBrowserNamespaces() {
	var _a, _b;
	if (typeof window === "undefined") return {};
	return ((_b = (_a = window.__NEXT_DATA__) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.__namespaces) || {};
}
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
var i18n_default = {
	locales: [
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
	defaultLocale: "en",
	keySeparator: false,
	nsSeparator: false,
	pages: {
		"*": ["shared"],
		"/[lang]/(home)": ["home"],
		"/[lang]/about": ["about"],
		"/[lang]/blog": ["blog"],
		"/[lang]/careers": ["careers"],
		"/[lang]/contact": ["contact"],
		"/[lang]/faq": ["faq"],
		"/[lang]/pricing": ["pricing"],
		"/[lang]/products": ["products"],
		"/[lang]/settings": ["settings"],
		"/[lang]/team": ["team"]
	},
	loadLocaleFrom: (lang, ns) => _rolldown_dynamic_import_helper_default(Object.assign({
		"./locales/de/about.json": () => import("../locales/de/about.json"),
		"./locales/de/blog.json": () => import("../locales/de/blog.json"),
		"./locales/de/careers.json": () => import("../locales/de/careers.json"),
		"./locales/de/contact.json": () => import("../locales/de/contact.json"),
		"./locales/de/faq.json": () => import("../locales/de/faq.json"),
		"./locales/de/home.json": () => import("../locales/de/home.json"),
		"./locales/de/pricing.json": () => import("../locales/de/pricing.json"),
		"./locales/de/products.json": () => import("../locales/de/products.json"),
		"./locales/de/route.json": () => import("../locales/de/route.json"),
		"./locales/de/settings.json": () => import("../locales/de/settings.json"),
		"./locales/de/shared.json": () => import("../locales/de/shared.json"),
		"./locales/de/team.json": () => import("../locales/de/team.json"),
		"./locales/en/about.json": () => import("./about-DrPeV7Zp.js"),
		"./locales/en/blog.json": () => import("./blog-uUHBPsDN.js"),
		"./locales/en/careers.json": () => import("./careers-CT6E1l5K.js"),
		"./locales/en/contact.json": () => import("./contact-CZtCE9BE.js"),
		"./locales/en/faq.json": () => import("./faq-BPrPn6m_.js"),
		"./locales/en/home.json": () => import("./home-CSEOOcM2.js"),
		"./locales/en/pricing.json": () => import("./pricing-BjZqjpMz.js"),
		"./locales/en/products.json": () => import("./products-D8gD60Ao.js"),
		"./locales/en/route.json": () => import("./route-UQnagTfi.js"),
		"./locales/en/settings.json": () => import("./settings-BEbFGJAX.js"),
		"./locales/en/shared.json": () => import("./shared-DxRtm_ck.js"),
		"./locales/en/team.json": () => import("./team-tSYxAuqK.js"),
		"./locales/es/about.json": () => import("../locales/es/about.json"),
		"./locales/es/blog.json": () => import("../locales/es/blog.json"),
		"./locales/es/careers.json": () => import("../locales/es/careers.json"),
		"./locales/es/contact.json": () => import("../locales/es/contact.json"),
		"./locales/es/faq.json": () => import("../locales/es/faq.json"),
		"./locales/es/home.json": () => import("../locales/es/home.json"),
		"./locales/es/pricing.json": () => import("../locales/es/pricing.json"),
		"./locales/es/products.json": () => import("../locales/es/products.json"),
		"./locales/es/route.json": () => import("../locales/es/route.json"),
		"./locales/es/settings.json": () => import("../locales/es/settings.json"),
		"./locales/es/shared.json": () => import("../locales/es/shared.json"),
		"./locales/es/team.json": () => import("../locales/es/team.json"),
		"./locales/fr/about.json": () => import("../locales/fr/about.json"),
		"./locales/fr/blog.json": () => import("../locales/fr/blog.json"),
		"./locales/fr/careers.json": () => import("../locales/fr/careers.json"),
		"./locales/fr/contact.json": () => import("../locales/fr/contact.json"),
		"./locales/fr/faq.json": () => import("../locales/fr/faq.json"),
		"./locales/fr/home.json": () => import("../locales/fr/home.json"),
		"./locales/fr/pricing.json": () => import("../locales/fr/pricing.json"),
		"./locales/fr/products.json": () => import("../locales/fr/products.json"),
		"./locales/fr/route.json": () => import("../locales/fr/route.json"),
		"./locales/fr/settings.json": () => import("../locales/fr/settings.json"),
		"./locales/fr/shared.json": () => import("../locales/fr/shared.json"),
		"./locales/fr/team.json": () => import("../locales/fr/team.json"),
		"./locales/it/about.json": () => import("../locales/it/about.json"),
		"./locales/it/blog.json": () => import("../locales/it/blog.json"),
		"./locales/it/careers.json": () => import("../locales/it/careers.json"),
		"./locales/it/contact.json": () => import("../locales/it/contact.json"),
		"./locales/it/faq.json": () => import("../locales/it/faq.json"),
		"./locales/it/home.json": () => import("../locales/it/home.json"),
		"./locales/it/pricing.json": () => import("../locales/it/pricing.json"),
		"./locales/it/products.json": () => import("../locales/it/products.json"),
		"./locales/it/route.json": () => import("../locales/it/route.json"),
		"./locales/it/settings.json": () => import("../locales/it/settings.json"),
		"./locales/it/shared.json": () => import("../locales/it/shared.json"),
		"./locales/it/team.json": () => import("../locales/it/team.json"),
		"./locales/ja/about.json": () => import("../locales/ja/about.json"),
		"./locales/ja/blog.json": () => import("../locales/ja/blog.json"),
		"./locales/ja/careers.json": () => import("../locales/ja/careers.json"),
		"./locales/ja/contact.json": () => import("../locales/ja/contact.json"),
		"./locales/ja/faq.json": () => import("../locales/ja/faq.json"),
		"./locales/ja/home.json": () => import("../locales/ja/home.json"),
		"./locales/ja/pricing.json": () => import("../locales/ja/pricing.json"),
		"./locales/ja/products.json": () => import("../locales/ja/products.json"),
		"./locales/ja/route.json": () => import("../locales/ja/route.json"),
		"./locales/ja/settings.json": () => import("../locales/ja/settings.json"),
		"./locales/ja/shared.json": () => import("../locales/ja/shared.json"),
		"./locales/ja/team.json": () => import("../locales/ja/team.json"),
		"./locales/ko/about.json": () => import("../locales/ko/about.json"),
		"./locales/ko/blog.json": () => import("../locales/ko/blog.json"),
		"./locales/ko/careers.json": () => import("../locales/ko/careers.json"),
		"./locales/ko/contact.json": () => import("../locales/ko/contact.json"),
		"./locales/ko/faq.json": () => import("../locales/ko/faq.json"),
		"./locales/ko/home.json": () => import("../locales/ko/home.json"),
		"./locales/ko/pricing.json": () => import("../locales/ko/pricing.json"),
		"./locales/ko/products.json": () => import("../locales/ko/products.json"),
		"./locales/ko/route.json": () => import("../locales/ko/route.json"),
		"./locales/ko/settings.json": () => import("../locales/ko/settings.json"),
		"./locales/ko/shared.json": () => import("../locales/ko/shared.json"),
		"./locales/ko/team.json": () => import("../locales/ko/team.json"),
		"./locales/pt/about.json": () => import("../locales/pt/about.json"),
		"./locales/pt/blog.json": () => import("../locales/pt/blog.json"),
		"./locales/pt/careers.json": () => import("../locales/pt/careers.json"),
		"./locales/pt/contact.json": () => import("../locales/pt/contact.json"),
		"./locales/pt/faq.json": () => import("../locales/pt/faq.json"),
		"./locales/pt/home.json": () => import("../locales/pt/home.json"),
		"./locales/pt/pricing.json": () => import("../locales/pt/pricing.json"),
		"./locales/pt/products.json": () => import("../locales/pt/products.json"),
		"./locales/pt/route.json": () => import("../locales/pt/route.json"),
		"./locales/pt/settings.json": () => import("../locales/pt/settings.json"),
		"./locales/pt/shared.json": () => import("../locales/pt/shared.json"),
		"./locales/pt/team.json": () => import("../locales/pt/team.json"),
		"./locales/ru/about.json": () => import("../locales/ru/about.json"),
		"./locales/ru/blog.json": () => import("../locales/ru/blog.json"),
		"./locales/ru/careers.json": () => import("../locales/ru/careers.json"),
		"./locales/ru/contact.json": () => import("../locales/ru/contact.json"),
		"./locales/ru/faq.json": () => import("../locales/ru/faq.json"),
		"./locales/ru/home.json": () => import("../locales/ru/home.json"),
		"./locales/ru/pricing.json": () => import("../locales/ru/pricing.json"),
		"./locales/ru/products.json": () => import("../locales/ru/products.json"),
		"./locales/ru/route.json": () => import("../locales/ru/route.json"),
		"./locales/ru/settings.json": () => import("../locales/ru/settings.json"),
		"./locales/ru/shared.json": () => import("../locales/ru/shared.json"),
		"./locales/ru/team.json": () => import("../locales/ru/team.json"),
		"./locales/zh/about.json": () => import("../locales/zh/about.json"),
		"./locales/zh/blog.json": () => import("../locales/zh/blog.json"),
		"./locales/zh/careers.json": () => import("../locales/zh/careers.json"),
		"./locales/zh/contact.json": () => import("../locales/zh/contact.json"),
		"./locales/zh/faq.json": () => import("../locales/zh/faq.json"),
		"./locales/zh/home.json": () => import("../locales/zh/home.json"),
		"./locales/zh/pricing.json": () => import("../locales/zh/pricing.json"),
		"./locales/zh/products.json": () => import("../locales/zh/products.json"),
		"./locales/zh/route.json": () => import("../locales/zh/route.json"),
		"./locales/zh/settings.json": () => import("../locales/zh/settings.json"),
		"./locales/zh/shared.json": () => import("../locales/zh/shared.json"),
		"./locales/zh/team.json": () => import("../locales/zh/team.json")
	}), `./locales/${lang}/${ns}.json`, 4).then((m) => m.default)
};
var MEASURE_NAMESPACES = [
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"home",
	"pricing",
	"products",
	"route",
	"settings",
	"shared",
	"team"
];
function Wrapper({ children }) {
	const locale = "en";
	const [namespaces, setNamespaces] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const loadTranslations = async () => {
			try {
				const entries = await Promise.all(MEASURE_NAMESPACES.map(async (ns) => {
					return [ns, await i18n_default.loadLocaleFrom?.(locale, ns) ?? {}];
				}));
				setNamespaces(Object.fromEntries(entries));
				setIsLoaded(true);
			} catch (error) {
				console.error("Failed to load translations:", error);
				setIsLoaded(true);
			}
		};
		loadTranslations();
	}, [locale]);
	if (!isLoaded) return null;
	return jsx(I18nProvider, {
		lang: locale,
		namespaces,
		children: jsx(AppProviders, {
			locale,
			children
		})
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(AppProviders, {}) });
}
export { Wrapped as default };
var about_default = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
};
export { about_default as default };
var blog_default = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
};
export { blog_default as default };
var careers_default = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.applyNow": "Apply Now"
};
export { careers_default as default };
var contact_default = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
};
export { contact_default as default };
var faq_default = {
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
};
export { faq_default as default };
var home_default = {
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
};
export { home_default as default };
var pricing_default = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
export { pricing_default as default };
var products_default = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.benchmarkCLIPrice": "Free",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.benchmarkCloudPrice": "$29/mo",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.benchmarkEnterprisePrice": "Contact Us",
	"products.migrationAssistant": "Migration Assistant",
	"products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.migrationAssistantPrice": "$99 one-time",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.translationQAPrice": "$19/mo",
	"products.bundleOptimizer": "Bundle Optimizer",
	"products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.bundleOptimizerPrice": "$49/mo",
	"products.learnMore": "Learn More",
	"productsHeader.ourProducts": "Our Products",
	"productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps."
};
export { products_default as default };
var route_default = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
export { route_default as default };
var settings_default = {
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email"
};
export { settings_default as default };
var shared_default = {
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.products": "Products",
	"header.pricing": "Pricing",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Settings",
	"header.goToGithub": "Go to GitHub",
	"footer.resources": "Resources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.contributing": "Contributing",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light"
};
export { shared_default as default };
var team_default = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
export { team_default as default };

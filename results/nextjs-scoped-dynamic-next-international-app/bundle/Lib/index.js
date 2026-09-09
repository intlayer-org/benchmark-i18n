import { useEffect, useLayoutEffect, useState } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
var require_client_only = __commonJSMin((() => {}));
var client = (0, __commonJSMin(((exports, module) => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __spreadValues = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) {
			for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var client_exports = {};
	__export(client_exports, { createI18nClient: () => createI18nClient });
	module.exports = __toCommonJS(client_exports);
	require_client_only();
	var import_navigation = __require("next/navigation");
	var import_react = __toESM(__require("react"));
	var flattenLocale = (locale, prefix = "") => Object.entries(locale).reduce((prev, [name, value]) => __spreadValues(__spreadValues({}, prev), typeof value === "string" ? { [prefix + name]: value } : flattenLocale(value, `${prefix}${name}.`)), {});
	function log(type, message) {
		if (process.env.NODE_ENV !== "production") console[type](`[next-international] ${message}`);
		return null;
	}
	var warn = (message) => log("warn", message);
	var error = (message) => log("error", message);
	var localesCache = /* @__PURE__ */ new Map();
	function createI18nProviderClient(I18nClientContext, locales, fallbackLocale) {
		function I18nProvider({ locale, importLocale, children }) {
			var _a;
			const clientLocale = (_a = localesCache.get(locale)) != null ? _a : (0, import_react.use)(importLocale).default;
			if (!localesCache.has(locale)) localesCache.set(locale, clientLocale);
			const value = (0, import_react.useMemo)(() => ({
				localeContent: flattenLocale(clientLocale),
				fallbackLocale: fallbackLocale ? flattenLocale(fallbackLocale) : void 0,
				locale
			}), [clientLocale, locale]);
			return import_react.default.createElement(I18nClientContext.Provider, { value }, children);
		}
		return function I18nProviderWrapper({ locale, fallback, children }) {
			const importFnLocale = locales[locale];
			if (!importFnLocale) {
				error(`The locale '${locale}' is not supported. Defined locales are: [${Object.keys(locales).join(", ")}].`);
				(0, import_navigation.notFound)();
			}
			return import_react.default.createElement(import_react.Suspense, { fallback }, import_react.default.createElement(I18nProvider, {
				locale,
				importLocale: importFnLocale()
			}, children));
		};
	}
	var import_react6 = __require("react");
	var import_react3 = __require("react");
	var import_react2 = __require("react");
	function createT(context, scope) {
		const { localeContent, fallbackLocale } = context;
		const content = fallbackLocale && typeof localeContent === "string" ? fallbackLocale : Object.assign(fallbackLocale != null ? fallbackLocale : {}, localeContent);
		const pluralKeys = new Set(Object.keys(content).filter((key) => key.includes("#")).map((key) => key.split("#", 1)[0]));
		const pluralRules = new Intl.PluralRules(context.locale);
		function getPluralKey(count) {
			if (count === 0) return "zero";
			return pluralRules.select(count);
		}
		function t(key, ...params) {
			var _a, _b;
			const paramObject = params[0];
			let isPlural = false;
			if (paramObject && "count" in paramObject) {
				if (scope ? pluralKeys.has(`${scope}.${key}`) : pluralKeys.has(key)) {
					key = `${key}#${getPluralKey(paramObject.count)}`;
					isPlural = true;
				}
			}
			let value = scope ? content[`${scope}.${key}`] : content[key];
			if (!value && isPlural) {
				const baseKey = key.split("#", 1)[0];
				value = (_a = content[`${baseKey}#other`] || key) == null ? void 0 : _a.toString();
			} else value = (_b = value || key) == null ? void 0 : _b.toString();
			if (!paramObject) return value;
			let isString = true;
			const result = value == null ? void 0 : value.split(/({[^}]*})/).map((part, index) => {
				const match = part.match(/{(.*)}/);
				if (match) {
					const param = match[1];
					const paramValue = paramObject[param];
					if ((0, import_react2.isValidElement)(paramValue)) {
						isString = false;
						return (0, import_react2.cloneElement)(paramValue, { key: `${String(param)}-${index}` });
					}
					return paramValue;
				}
				return part;
			});
			return isString ? result == null ? void 0 : result.join("") : result;
		}
		return t;
	}
	function createUsei18n(I18nClientContext) {
		return function useI18n() {
			const context = (0, import_react3.useContext)(I18nClientContext);
			if (!context) throw new Error("`useI18n` must be used inside `I18nProvider`");
			return (0, import_react3.useMemo)(() => createT(context, void 0), [context]);
		};
	}
	var import_react4 = __require("react");
	function createScopedUsei18n(I18nClientContext) {
		return function useScopedI18n(scope) {
			const context = (0, import_react4.useContext)(I18nClientContext);
			if (!context) throw new Error("`useI18n` must be used inside `I18nProvider`");
			return (0, import_react4.useMemo)(() => createT(context, scope), [context, scope]);
		};
	}
	var import_navigation2 = __require("next/navigation");
	function createUseChangeLocale(useCurrentLocale, locales, config) {
		return function useChangeLocale(changeLocaleConfig) {
			const { push, refresh } = (0, import_navigation2.useRouter)();
			const currentLocale = useCurrentLocale();
			const path = (0, import_navigation2.usePathname)();
			const searchParams = (changeLocaleConfig == null ? void 0 : changeLocaleConfig.preserveSearchParams) ? (0, import_navigation2.useSearchParams)().toString() : void 0;
			const finalSearchParams = searchParams ? `?${searchParams}` : "";
			let pathWithoutLocale = path;
			if (config.basePath) pathWithoutLocale = pathWithoutLocale.replace(config.basePath, "");
			if (pathWithoutLocale.startsWith(`/${currentLocale}/`)) pathWithoutLocale = pathWithoutLocale.replace(`/${currentLocale}/`, "/");
			else if (pathWithoutLocale === `/${currentLocale}`) pathWithoutLocale = "/";
			return function changeLocale(newLocale) {
				if (newLocale === currentLocale) return;
				const importFnLocale = locales[newLocale];
				if (!importFnLocale) {
					warn(`The locale '${newLocale}' is not supported. Defined locales are: [${Object.keys(locales).join(", ")}].`);
					return;
				}
				importFnLocale().then((module2) => {
					localesCache.set(newLocale, module2.default);
					push(`/${newLocale}${pathWithoutLocale}${finalSearchParams}`);
					refresh();
				});
			};
		};
	}
	function createDefineLocale() {
		return function defineLocale(locale) {
			return locale;
		};
	}
	var import_navigation3 = __require("next/navigation");
	var import_react5 = __require("react");
	var DEFAULT_SEGMENT_NAME = "locale";
	function createUseCurrentLocale(locales, config) {
		return function useCurrentLocale() {
			var _a;
			const segment = (0, import_navigation3.useParams)()[(_a = config.segmentName) != null ? _a : DEFAULT_SEGMENT_NAME];
			return (0, import_react5.useMemo)(() => {
				for (const locale of locales) if (segment === locale) return locale;
				error(`Locale "${segment}" not found in locales (${locales.join(", ")}), returning "notFound()"`);
				(0, import_navigation3.notFound)();
			}, [segment]);
		};
	}
	function createI18nClient(locales, config = {}) {
		const localesKeys = Object.keys(locales);
		const I18nClientContext = (0, import_react6.createContext)(null);
		const useCurrentLocale = createUseCurrentLocale(localesKeys, config);
		const I18nProviderClient = createI18nProviderClient(I18nClientContext, locales, config.fallbackLocale);
		return {
			useI18n: createUsei18n(I18nClientContext),
			useScopedI18n: createScopedUsei18n(I18nClientContext),
			I18nProviderClient,
			I18nClientContext,
			useChangeLocale: createUseChangeLocale(useCurrentLocale, locales, config),
			defineLocale: createDefineLocale(),
			useCurrentLocale
		};
	}
	0 && (module.exports = { createI18nClient });
}))().createI18nClient)({
	en: () => import("./en-B6z9XUeP.js"),
	fr: () => import("./fr-Bq6Vg87A.js"),
	es: () => import("./es-DWfMqWMv.js"),
	de: () => import("./de-CPZ8XliA.js"),
	it: () => import("./it-fhyjUQSR.js"),
	pt: () => import("./pt-DQHErvYe.js"),
	zh: () => import("./zh-C9Vs1ypo.js"),
	ja: () => import("./ja-Ccz1w8YZ.js"),
	ko: () => import("./ko-CQGGNPkI.js"),
	ru: () => import("./ru-Cp_Zq82O.js")
});
var useScopedI18n = client.useScopedI18n;
var { I18nProviderClient, useChangeLocale, useCurrentLocale } = client;
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/EmptyComponent.tsx";
var TestComponent = () => {
	useScopedI18n("header");
	return null;
};
function EmptyComponent() {
	const locale = useCurrentLocale();
	return jsxDEV(I18nProviderClient, {
		locale,
		children: jsxDEV(TestComponent, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 16,
		columnNumber: 5
	}, this);
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/components/AppProviders.tsx";
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
	return jsxDEV(I18nProviderClient, {
		locale,
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 30,
		columnNumber: 7
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/Wrapper.tsx";
var locale = "en";
function Wrapper({ children }) {
	return jsxDEV(AppProviders, {
		locale,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-dynamic/next-international-app/scripts/EmptyComponent.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(EmptyComponent, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import deAbout from "../messages/de/about.json";
import deBlog from "../messages/de/blog.json";
import deCareers from "../messages/de/careers.json";
import deContact from "../messages/de/contact.json";
import deFaq from "../messages/de/faq.json";
import deHome from "../messages/de/home.json";
import dePricing from "../messages/de/pricing.json";
import deProducts from "../messages/de/products.json";
import deRoute from "../messages/de/route.json";
import deSettings from "../messages/de/settings.json";
import deShared from "../messages/de/shared.json";
import deTeam from "../messages/de/team.json";
var de_default = mergeAll([
	nestify(deAbout),
	nestify(deBlog),
	nestify(deCareers),
	nestify(deContact),
	nestify(deFaq),
	nestify(deHome),
	nestify(dePricing),
	nestify(deProducts),
	nestify(deRoute),
	nestify(deSettings),
	nestify(deShared),
	nestify(deTeam)
]);
export { de_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import enAbout from "../messages/en/about.json";
import enBlog from "../messages/en/blog.json";
import enCareers from "../messages/en/careers.json";
import enContact from "../messages/en/contact.json";
import enFaq from "../messages/en/faq.json";
import enHome from "../messages/en/home.json";
import enPricing from "../messages/en/pricing.json";
import enProducts from "../messages/en/products.json";
import enRoute from "../messages/en/route.json";
import enSettings from "../messages/en/settings.json";
import enShared from "../messages/en/shared.json";
import enTeam from "../messages/en/team.json";
var en_default = mergeAll([
	nestify(enAbout),
	nestify(enBlog),
	nestify(enCareers),
	nestify(enContact),
	nestify(enFaq),
	nestify(enHome),
	nestify(enPricing),
	nestify(enProducts),
	nestify(enRoute),
	nestify(enSettings),
	nestify(enShared),
	nestify(enTeam)
]);
export { en_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import esAbout from "../messages/es/about.json";
import esBlog from "../messages/es/blog.json";
import esCareers from "../messages/es/careers.json";
import esContact from "../messages/es/contact.json";
import esFaq from "../messages/es/faq.json";
import esHome from "../messages/es/home.json";
import esPricing from "../messages/es/pricing.json";
import esProducts from "../messages/es/products.json";
import esRoute from "../messages/es/route.json";
import esSettings from "../messages/es/settings.json";
import esShared from "../messages/es/shared.json";
import esTeam from "../messages/es/team.json";
var es_default = mergeAll([
	nestify(esAbout),
	nestify(esBlog),
	nestify(esCareers),
	nestify(esContact),
	nestify(esFaq),
	nestify(esHome),
	nestify(esPricing),
	nestify(esProducts),
	nestify(esRoute),
	nestify(esSettings),
	nestify(esShared),
	nestify(esTeam)
]);
export { es_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import frAbout from "../messages/fr/about.json";
import frBlog from "../messages/fr/blog.json";
import frCareers from "../messages/fr/careers.json";
import frContact from "../messages/fr/contact.json";
import frFaq from "../messages/fr/faq.json";
import frHome from "../messages/fr/home.json";
import frPricing from "../messages/fr/pricing.json";
import frProducts from "../messages/fr/products.json";
import frRoute from "../messages/fr/route.json";
import frSettings from "../messages/fr/settings.json";
import frShared from "../messages/fr/shared.json";
import frTeam from "../messages/fr/team.json";
var fr_default = mergeAll([
	nestify(frAbout),
	nestify(frBlog),
	nestify(frCareers),
	nestify(frContact),
	nestify(frFaq),
	nestify(frHome),
	nestify(frPricing),
	nestify(frProducts),
	nestify(frRoute),
	nestify(frSettings),
	nestify(frShared),
	nestify(frTeam)
]);
export { fr_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import itAbout from "../messages/it/about.json";
import itBlog from "../messages/it/blog.json";
import itCareers from "../messages/it/careers.json";
import itContact from "../messages/it/contact.json";
import itFaq from "../messages/it/faq.json";
import itHome from "../messages/it/home.json";
import itPricing from "../messages/it/pricing.json";
import itProducts from "../messages/it/products.json";
import itRoute from "../messages/it/route.json";
import itSettings from "../messages/it/settings.json";
import itShared from "../messages/it/shared.json";
import itTeam from "../messages/it/team.json";
var it_default = mergeAll([
	nestify(itAbout),
	nestify(itBlog),
	nestify(itCareers),
	nestify(itContact),
	nestify(itFaq),
	nestify(itHome),
	nestify(itPricing),
	nestify(itProducts),
	nestify(itRoute),
	nestify(itSettings),
	nestify(itShared),
	nestify(itTeam)
]);
export { it_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import jaAbout from "../messages/ja/about.json";
import jaBlog from "../messages/ja/blog.json";
import jaCareers from "../messages/ja/careers.json";
import jaContact from "../messages/ja/contact.json";
import jaFaq from "../messages/ja/faq.json";
import jaHome from "../messages/ja/home.json";
import jaPricing from "../messages/ja/pricing.json";
import jaProducts from "../messages/ja/products.json";
import jaRoute from "../messages/ja/route.json";
import jaSettings from "../messages/ja/settings.json";
import jaShared from "../messages/ja/shared.json";
import jaTeam from "../messages/ja/team.json";
var ja_default = mergeAll([
	nestify(jaAbout),
	nestify(jaBlog),
	nestify(jaCareers),
	nestify(jaContact),
	nestify(jaFaq),
	nestify(jaHome),
	nestify(jaPricing),
	nestify(jaProducts),
	nestify(jaRoute),
	nestify(jaSettings),
	nestify(jaShared),
	nestify(jaTeam)
]);
export { ja_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import koAbout from "../messages/ko/about.json";
import koBlog from "../messages/ko/blog.json";
import koCareers from "../messages/ko/careers.json";
import koContact from "../messages/ko/contact.json";
import koFaq from "../messages/ko/faq.json";
import koHome from "../messages/ko/home.json";
import koPricing from "../messages/ko/pricing.json";
import koProducts from "../messages/ko/products.json";
import koRoute from "../messages/ko/route.json";
import koSettings from "../messages/ko/settings.json";
import koShared from "../messages/ko/shared.json";
import koTeam from "../messages/ko/team.json";
var ko_default = mergeAll([
	nestify(koAbout),
	nestify(koBlog),
	nestify(koCareers),
	nestify(koContact),
	nestify(koFaq),
	nestify(koHome),
	nestify(koPricing),
	nestify(koProducts),
	nestify(koRoute),
	nestify(koSettings),
	nestify(koShared),
	nestify(koTeam)
]);
export { ko_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import ptAbout from "../messages/pt/about.json";
import ptBlog from "../messages/pt/blog.json";
import ptCareers from "../messages/pt/careers.json";
import ptContact from "../messages/pt/contact.json";
import ptFaq from "../messages/pt/faq.json";
import ptHome from "../messages/pt/home.json";
import ptPricing from "../messages/pt/pricing.json";
import ptProducts from "../messages/pt/products.json";
import ptRoute from "../messages/pt/route.json";
import ptSettings from "../messages/pt/settings.json";
import ptShared from "../messages/pt/shared.json";
import ptTeam from "../messages/pt/team.json";
var pt_default = mergeAll([
	nestify(ptAbout),
	nestify(ptBlog),
	nestify(ptCareers),
	nestify(ptContact),
	nestify(ptFaq),
	nestify(ptHome),
	nestify(ptPricing),
	nestify(ptProducts),
	nestify(ptRoute),
	nestify(ptSettings),
	nestify(ptShared),
	nestify(ptTeam)
]);
export { pt_default as default };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import ruAbout from "../messages/ru/about.json";
import ruBlog from "../messages/ru/blog.json";
import ruCareers from "../messages/ru/careers.json";
import ruContact from "../messages/ru/contact.json";
import ruFaq from "../messages/ru/faq.json";
import ruHome from "../messages/ru/home.json";
import ruPricing from "../messages/ru/pricing.json";
import ruProducts from "../messages/ru/products.json";
import ruRoute from "../messages/ru/route.json";
import ruSettings from "../messages/ru/settings.json";
import ruShared from "../messages/ru/shared.json";
import ruTeam from "../messages/ru/team.json";
var ru_default = mergeAll([
	nestify(ruAbout),
	nestify(ruBlog),
	nestify(ruCareers),
	nestify(ruContact),
	nestify(ruFaq),
	nestify(ruHome),
	nestify(ruPricing),
	nestify(ruProducts),
	nestify(ruRoute),
	nestify(ruSettings),
	nestify(ruShared),
	nestify(ruTeam)
]);
export { ru_default as default };
function nestify(flat) {
	const root = {};
	for (const [key, value] of Object.entries(flat)) {
		const parts = key.split(".");
		let cur = root;
		for (let i = 0; i < parts.length - 1; i++) {
			const p = parts[i];
			const next = cur[p];
			if (typeof next !== "object" || next === null || Array.isArray(next)) cur[p] = {};
			cur = cur[p];
		}
		cur[parts[parts.length - 1]] = value;
	}
	return root;
}
function deepMerge(a, b) {
	const out = { ...a };
	for (const [k, v] of Object.entries(b)) {
		const existing = out[k];
		if (v !== null && typeof v === "object" && !Array.isArray(v) && existing !== null && typeof existing === "object" && !Array.isArray(existing)) out[k] = deepMerge(existing, v);
		else out[k] = v;
	}
	return out;
}
function mergeAll(parts) {
	return parts.reduce((acc, p) => deepMerge(acc, p), {});
}
export { nestify as n, mergeAll as t };
import { n as nestify, t as mergeAll } from "./scopedMessages-BHCAh11m.js";
import zhAbout from "../messages/zh/about.json";
import zhBlog from "../messages/zh/blog.json";
import zhCareers from "../messages/zh/careers.json";
import zhContact from "../messages/zh/contact.json";
import zhFaq from "../messages/zh/faq.json";
import zhHome from "../messages/zh/home.json";
import zhPricing from "../messages/zh/pricing.json";
import zhProducts from "../messages/zh/products.json";
import zhRoute from "../messages/zh/route.json";
import zhSettings from "../messages/zh/settings.json";
import zhShared from "../messages/zh/shared.json";
import zhTeam from "../messages/zh/team.json";
var zh_default = mergeAll([
	nestify(zhAbout),
	nestify(zhBlog),
	nestify(zhCareers),
	nestify(zhContact),
	nestify(zhFaq),
	nestify(zhHome),
	nestify(zhPricing),
	nestify(zhProducts),
	nestify(zhRoute),
	nestify(zhSettings),
	nestify(zhShared),
	nestify(zhTeam)
]);
export { zh_default as default };

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
	en: () => import("./en-DdZxHrkY.js"),
	fr: () => import("./fr-BH690cXy.js"),
	es: () => import("./es-CEkpLbnV.js"),
	de: () => import("./de-CzaYaEfU.js"),
	it: () => import("./it-zwHlYiDM.js"),
	pt: () => import("./pt-DwF7iRTi.js"),
	zh: () => import("./zh-CDC8y4Nn.js"),
	ja: () => import("./ja-C27OBTzI.js"),
	ko: () => import("./ko-CY7_P8I0.js"),
	ru: () => import("./ru-BhWOgESx.js")
});
function useI18n() {
	return client.useI18n();
}
var { useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = client;
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/EmptyComponent.tsx";
var TestComponent = () => {
	useI18n();
	return null;
};
function EmptyComponent() {
	const locale = useCurrentLocale();
	return jsxDEV(I18nProviderClient, {
		locale,
		children: jsxDEV(TestComponent, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 14,
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/components/AppProviders.tsx";
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
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/Wrapper.tsx";
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-international-app/scripts/EmptyComponent.wrapper.tsx";
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
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/de.json";
var de_default = flattenMessages(messages);
export { de_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/en.json";
var en_default = flattenMessages(messages);
export { en_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/es.json";
var es_default = flattenMessages(messages);
export { es_default as default };
function flattenMessages(obj, prefix = "") {
	const result = {};
	for (const key in obj) {
		const fullKey = prefix ? `${prefix}.${key}` : key;
		if (typeof obj[key] === "object" && obj[key] !== null) Object.assign(result, flattenMessages(obj[key], fullKey));
		else result[fullKey] = String(obj[key]);
	}
	return result;
}
export { flattenMessages as t };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/fr.json";
var fr_default = flattenMessages(messages);
export { fr_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/it.json";
var it_default = flattenMessages(messages);
export { it_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/ja.json";
var ja_default = flattenMessages(messages);
export { ja_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/ko.json";
var ko_default = flattenMessages(messages);
export { ko_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/pt.json";
var pt_default = flattenMessages(messages);
export { pt_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/ru.json";
var ru_default = flattenMessages(messages);
export { ru_default as default };
import { t as flattenMessages } from "./flatten-C1nycfDa.js";
import messages from "../messages/zh.json";
var zh_default = flattenMessages(messages);
export { zh_default as default };

import { Profiler, useEffect } from "react";
import messages from "../../../messages/de.json";
import messages$1 from "../../../messages/es.json";
import messages$2 from "../../../messages/fr.json";
import messages$3 from "../../../messages/it.json";
import messages$4 from "../../../messages/ja.json";
import messages$5 from "../../../messages/ko.json";
import messages$6 from "../../../messages/pt.json";
import messages$7 from "../../../messages/ru.json";
import messages$8 from "../../../messages/zh.json";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region ../../../node_modules/.bun/client-only@0.0.1/node_modules/client-only/index.js
var require_client_only = __commonJSMin((() => {}));
//#endregion
//#region i18n/flatten.ts
var import_client = __commonJSMin(((exports, module) => {
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
			if (!value && isPlural) value = (_a = content[`${key.split("#", 1)[0]}#other`] || key) == null ? void 0 : _a.toString();
			else value = (_b = value || key) == null ? void 0 : _b.toString();
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
}))();
function flattenMessages(obj, prefix = "") {
	const result = {};
	for (const key in obj) {
		const fullKey = prefix ? `${prefix}.${key}` : key;
		if (typeof obj[key] === "object" && obj[key] !== null) Object.assign(result, flattenMessages(obj[key], fullKey));
		else result[fullKey] = String(obj[key]);
	}
	return result;
}
//#endregion
//#region locales/de.ts
var de_default = flattenMessages(messages);
//#endregion
//#region locales/en.ts
var en_default = flattenMessages({
	"careers-header": {
		"title": "Careers",
		"joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	contact: {
		"contact-header": {
			"getInTouch": "Get in Touch",
			"haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
		},
		"contact-form": {
			"yourName": "Your name",
			"nameLabel": "Name",
			"emailLabel": "Email",
			"topicLabel": "Topic",
			"messageLabel": "Message",
			"emailPlaceholder": "you@example.com",
			"topicOther": "Other",
			"bugReport": "Bug Report",
			"newBenchmarkIdea": "New Benchmark Idea",
			"methodologyQuestion": "Methodology Question",
			"describeYourQuestionOrIdea": "Describe your question or idea...",
			"sendMessage": "Send Message"
		}
	},
	"about-header": {
		"aboutThisBenchmark": "About This Benchmark",
		"thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	hero: {
		"title": "i18n Benchmark",
		"aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		"viewResults": "View Results"
	},
	blog: {
		"blog-header": { "insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community." },
		"blog-list": {
			"comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
			"weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			"howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
			"march82026": "March 8, 2026",
			"practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			"theStateOfInternationalizationIn": "The State of Internationalization in React",
			"february282026": "February 28, 2026",
			"anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			"migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
			"february152026": "February 15, 2026",
			"aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			"serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
			"february12026": "February 1, 2026",
			"reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			"benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
			"january202026": "January 20, 2026",
			"aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			"readMore": "Read More →",
			"categoryBenchmark": "Benchmark",
			"categoryTutorial": "Tutorial",
			"categoryAnalysis": "Analysis",
			"categoryMeta": "Meta"
		}
	},
	faq: { "faq-list": {
		"whatIsI18nBenchmark": "What is i18n Benchmark?",
		"whatIsI18nBenchmarkAnswer": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		"howAreBenchmarksConducted": "How are benchmarks conducted?",
		"weRunStandardizedTestsIn": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		"whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
		"weSupportReactI18nextReact": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		"canISubmitMyOwn": "Can I submit my own benchmarks?",
		"yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		"howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
		"weReRunAllBenchmarks": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		"isTheDataReliable": "Is the data reliable?",
		"weFollowRigorousStatisticalMethodology": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		"doYouOfferConsultingServices": "Do you offer consulting services?",
		"yesOurEnterprisePlanIncludes": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		"howCanIContribute": "How can I contribute?",
		"thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	} },
	"blog-list": {
		"comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
		"weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		"howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
		"march82026": "March 8, 2026",
		"practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		"theStateOfInternationalizationIn": "The State of Internationalization in React",
		"february282026": "February 28, 2026",
		"anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		"migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
		"february152026": "February 15, 2026",
		"aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		"serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
		"february12026": "February 1, 2026",
		"reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		"benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
		"january202026": "January 20, 2026",
		"aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		"readMore": "Read More →"
	},
	"understanding-impact": {
		"understandingTheImpact": "Understanding the Impact",
		"whyASingleLargeJson": "Why a single large JSON can hurt performance",
		"manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		"theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
		"contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		"duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		"theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
		"splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		"waterfallRequests": "Waterfall requests:",
		"flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
		"cacheInvalidation": "Cache invalidation:",
		"whatThisBenchmarkMeasures": "What this benchmark measures",
		"thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	settings: {
		"settings-header": { "manageYourAccountPreferencesAnd": "Manage your account preferences and configuration." },
		"profile-section": {
			"displayName": "Display Name",
			"profile": "Profile",
			"email": "Email"
		},
		"preferences-section": {
			"preferences": "Preferences",
			"emailNotifications": "Email Notifications",
			"receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
			"toggleNotifications": "Toggle notifications",
			"darkMode": "Dark Mode",
			"useDarkColorScheme": "Use dark color scheme",
			"toggleDarkMode": "Toggle dark mode",
			"defaultLanguage": "Default Language",
			"englishEn": "English (en)",
			"frenchFr": "French (fr)",
			"germanDe": "German (de)",
			"spanishEs": "Spanish (es)",
			"japaneseJa": "Japanese (ja)",
			"chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
			"arabicAr": "Arabic (ar)"
		},
		"api-access-section": {
			"apiAccess": "API Access",
			"copy": "Copy",
			"apiKey": "API Key",
			"useThisKeyToAccess": "Use this key to access the benchmarking API programmatically."
		},
		"settings-footer": {
			"saveChanges": "Save Changes",
			"cancel": "Cancel"
		}
	},
	"faq-list": {
		"whatIsI18nBenchmark": "What is i18n Benchmark?",
		"whatIsI18nBenchmarkAnswer": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		"howAreBenchmarksConducted": "How are benchmarks conducted?",
		"weRunStandardizedTestsIn": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		"whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
		"weSupportReactI18nextReact": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		"canISubmitMyOwn": "Can I submit my own benchmarks?",
		"yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		"howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
		"weReRunAllBenchmarks": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		"isTheDataReliable": "Is the data reliable?",
		"weFollowRigorousStatisticalMethodology": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		"doYouOfferConsultingServices": "Do you offer consulting services?",
		"yesOurEnterprisePlanIncludes": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		"howCanIContribute": "How can I contribute?",
		"thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	},
	pricing: {
		"pricing-header": {
			"simpleTransparentPricing": "Simple, Transparent Pricing",
			"chooseThePlanThatFits": "Choose the plan that fits your team. No hidden fees."
		},
		"pricing-tiers": {
			"starter": "Starter",
			"price0": "$0",
			"forever": "forever",
			"benchmarkRunPerDay": "{runs} benchmark runs/day",
			"librariesNumber": "{libs} libraries",
			"communitySupport": "Community support",
			"publicResults": "Public results",
			"pro": "Pro",
			"price29": "$29",
			"month": "/month",
			"unlimitedRuns": "Unlimited runs",
			"allLibraries": "All libraries",
			"prioritySupport": "Priority support",
			"privateResults": "Private results",
			"ciIntegration": "CI integration",
			"historicalData": "Historical data",
			"enterprise": "Enterprise",
			"customPrice": "Custom",
			"everythingInPro": "Everything in Pro",
			"onPremiseOption": "On-premise option",
			"ssoSaml": "SSO & SAML",
			"dedicatedAccountManager": "Dedicated account manager",
			"customSlas": "Custom SLAs",
			"auditLogs": "Audit logs",
			"trainingSessions": "Training sessions",
			"contactSales": "Contact Sales",
			"getStarted": "Get Started"
		}
	},
	footer: {
		"resources": "Resources",
		"contact": "Contact",
		"github": "GitHub",
		"methodology": "Methodology",
		"contributing": "Contributing",
		"builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	"theme-toggle": {
		"themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
		"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
		"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
		"themeAuto": "Theme: Auto",
		"themeDark": "Theme: Dark",
		"themeLight": "Theme: Light"
	},
	"contact-header": {
		"getInTouch": "Get in Touch",
		"haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	"what-we-measure": {
		"bundleSizeImpact": "Bundle size impact",
		"theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"renderingOverhead": "Rendering overhead",
		"howMuchExtraTimeThe": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"hydrationCost": "Hydration cost",
		"duringSsrTranslationDataIs": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"lazyLoadingEffectiveness": "Lazy loading effectiveness",
		"whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		"localeSwitchSpeed": "Locale switch speed",
		"howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		"whatWeMeasure": "What We Measure"
	},
	"results-table": {
		"sampleResults": "Sample Results",
		"libraryColumn": "Library",
		"bundleSize": "Bundle Size",
		"lookupTime": "Lookup Time",
		"lazyLoading": "Lazy Loading"
	},
	careers: {
		"careers-header": {
			"title": "Careers",
			"joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		},
		"careers-benefits": {
			"remoteFirstLabel": "Remote-first",
			"workFromAnywhereInThe": "Work from anywhere in the world",
			"competitivePay": "Competitive pay",
			"topOfMarketCompensation": "Top-of-market compensation",
			"openSourceTime": "Open source time",
			"ossTimeValue": "20% time for OSS contributions"
		},
		"open-positions": {
			"seniorFrontendEngineer": "Senior Frontend Engineer",
			"buildAndMaintainOurBenchmarking": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			"backendEngineer": "Backend Engineer",
			"designAndScaleOurCloud": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
			"technicalWriter": "Technical Writer",
			"createComprehensiveGuidesApiReferences": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
			"devrelEngineer": "DevRel Engineer",
			"sanFranciscoRemote": "San Francisco / Remote",
			"engageWithTheI18nCommunity": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
			"qaEngineer": "QA Engineer",
			"ensureTheAccuracyAndReliability": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
			"openPositions": "Open Positions",
			"applyNow": "Apply Now",
			"remote": "Remote",
			"fullTime": "Full-time",
			"partTime": "Part-time",
			"engineering": "Engineering",
			"documentation": "Documentation",
			"community": "Community"
		}
	},
	header: {
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
		"goToGithub": "Go to GitHub"
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	team: {
		"team-header": {
			"ourTeam": "Our Team",
			"meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		"team-grid": {
			"sarahChen": "Sarah Chen",
			"founderLeadEngineer": "Founder & Lead Engineer",
			"formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			"marcusWeber": "Marcus Weber",
			"performanceEngineer": "Performance Engineer",
			"specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			"aishaPatel": "Aisha Patel",
			"developerAdvocate": "Developer Advocate",
			"passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			"tomasRodriguez": "Tomás Rodríguez",
			"fullStackDeveloper": "Full-Stack Developer",
			"maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			"yukiTanaka": "Yuki Tanaka",
			"dataAnalyst": "Data Analyst",
			"ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			"elenaKowalski": "Elena Kowalski",
			"communityManager": "Community Manager",
			"managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	},
	about: {
		"about-header": {
			"aboutThisBenchmark": "About This Benchmark",
			"thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
		},
		"about-grid": {
			"whyThisExists": "Why This Exists",
			"choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			"methodology": "Methodology",
			"theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		},
		"what-we-measure": {
			"bundleSizeImpact": "Bundle size impact",
			"theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
			"renderingOverhead": "Rendering overhead",
			"howMuchExtraTimeThe": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
			"hydrationCost": "Hydration cost",
			"duringSsrTranslationDataIs": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			"lazyLoadingEffectiveness": "Lazy loading effectiveness",
			"whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			"localeSwitchSpeed": "Locale switch speed",
			"howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			"whatWeMeasure": "What We Measure"
		}
	},
	"contact-form": {
		"yourName": "Your name",
		"bugReport": "Bug Report",
		"newBenchmarkIdea": "New Benchmark Idea",
		"methodologyQuestion": "Methodology Question",
		"describeYourQuestionOrIdea": "Describe your question or idea...",
		"sendMessage": "Send Message"
	},
	products: {
		"products-header": { "toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow." },
		"products-grid": {
			"benchmarkCli": "Benchmark CLI",
			"runBenchmarksLocallyFromYour": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			"benchmarkCloud": "Benchmark Cloud",
			"automatedCloudBasedBenchmarkingWith": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			"benchmarkEnterprise": "Benchmark Enterprise",
			"onPremiseDeploymentWithSso": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			"contactUs": "Contact Us",
			"migrationAssistant": "Migration Assistant",
			"aiPoweredToolThatHelps": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			"translationQa": "Translation QA",
			"automatedQualityChecksForMissing": "Automated quality checks for missing translations, pluralization issues, and context errors.",
			"bundleOptimizer": "Bundle Optimizer",
			"analyzesAndOptimizesYourI18n": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			"learnMore": "Learn More",
			"free": "Free",
			"price29mo": "$29/mo",
			"price99oneTime": "$99 one-time",
			"price19mo": "$19/mo",
			"price49mo": "$49/mo"
		}
	},
	"open-positions": {
		"seniorFrontendEngineer": "Senior Frontend Engineer",
		"buildAndMaintainOurBenchmarking": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"backendEngineer": "Backend Engineer",
		"designAndScaleOurCloud": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"technicalWriter": "Technical Writer",
		"createComprehensiveGuidesApiReferences": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"devrelEngineer": "DevRel Engineer",
		"sanFranciscoRemote": "San Francisco / Remote",
		"engageWithTheI18nCommunity": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"qaEngineer": "QA Engineer",
		"ensureTheAccuracyAndReliability": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"openPositions": "Open Positions",
		"applyNow": "Apply Now",
		"remote": "Remote",
		"fullTime": "Full-time",
		"partTime": "Part-time",
		"engineering": "Engineering",
		"documentation": "Documentation",
		"community": "Community"
	},
	route: { "route": {
		"oopsPageNotFound": "Oops! Page not found",
		"returnToHome": "Return to Home",
		"couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
	} },
	"blog-header": { "insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community." },
	"faq-header1": {
		"frequentlyAskedQuestions": "Frequently Asked Questions",
		"everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
	},
	"about-grid": {
		"whyThisExists": "Why This Exists",
		"choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"methodology": "Methodology",
		"theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	home: {
		"hero": {
			"title": "i18n Benchmark",
			"aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			"viewResults": "View Results"
		},
		"why-it-matters": {
			"whyTheseMetricsMatter": "Why These Metrics Matter",
			"bundleSize": "Bundle Size",
			"theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			"renderingHydration": "Rendering & Hydration",
			"connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			"dynamicLoading": "Dynamic Loading",
			"loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		},
		"understanding-impact": {
			"understandingTheImpact": "Understanding the Impact",
			"whyASingleLargeJson": "Why a single large JSON can hurt performance",
			"manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			"theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
			"contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			"duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			"theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
			"splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			"waterfallRequests": "Waterfall requests:",
			"waterfallRequestsDetail": " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
			"flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
			"flashOfUntranslatedContentDetail": " users may briefly see translation keys or a fallback language before the chunk arrives.",
			"cacheInvalidation": "Cache invalidation:",
			"cacheInvalidationDetail": " updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
			"whatThisBenchmarkMeasures": "What this benchmark measures",
			"thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		"results-table": {
			"sampleResults": "Sample Results",
			"libraryColumn": "Library",
			"bundleSize": "Bundle Size",
			"lookupTime": "Lookup Time",
			"lazyLoading": "Lazy Loading"
		}
	},
	"careers-benefits": {
		"workFromAnywhereInThe": "Work from anywhere in the world",
		"competitivePay": "Competitive pay",
		"topOfMarketCompensation": "Top-of-market compensation",
		"openSourceTime": "Open source time"
	},
	"why-it-matters": {
		"whyTheseMetricsMatter": "Why These Metrics Matter",
		"bundleSize": "Bundle Size",
		"theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		"renderingHydration": "Rendering & Hydration",
		"connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		"dynamicLoading": "Dynamic Loading",
		"loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	}
});
//#endregion
//#region locales/es.ts
var es_default = flattenMessages(messages$1);
//#endregion
//#region locales/fr.ts
var fr_default = flattenMessages(messages$2);
//#endregion
//#region locales/it.ts
var it_default = flattenMessages(messages$3);
//#endregion
//#region locales/ja.ts
var ja_default = flattenMessages(messages$4);
//#endregion
//#region locales/ko.ts
var ko_default = flattenMessages(messages$5);
//#endregion
//#region locales/pt.ts
var pt_default = flattenMessages(messages$6);
//#endregion
//#region locales/ru.ts
var ru_default = flattenMessages(messages$7);
//#endregion
//#region locales/zh.ts
var zh_default = flattenMessages(messages$8);
//#endregion
//#region locales/client.ts
var client = (0, import_client.createI18nClient)({
	en: () => Promise.resolve({ default: en_default }),
	fr: () => Promise.resolve({ default: fr_default }),
	es: () => Promise.resolve({ default: es_default }),
	de: () => Promise.resolve({ default: de_default }),
	it: () => Promise.resolve({ default: it_default }),
	pt: () => Promise.resolve({ default: pt_default }),
	zh: () => Promise.resolve({ default: zh_default }),
	ja: () => Promise.resolve({ default: ja_default }),
	ko: () => Promise.resolve({ default: ko_default }),
	ru: () => Promise.resolve({ default: ru_default })
});
function useI18n() {
	return client.useI18n();
}
var { useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = client;
//#endregion
//#region components/pages/blog/BlogList.tsx
function BlogList() {
	const t = useI18n();
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: t("blog.blog-list.comparingI18nLibrariesIn2026"),
				date: t("blog.blog-list.march82026"),
				excerpt: t("blog.blog-list.weTested12DifferentInternationalization"),
				category: t("blog.blog-list.categoryBenchmark")
			},
			{
				title: t("blog.blog-list.howToReduceYourI18n"),
				date: t("blog.blog-list.march82026"),
				excerpt: t("blog.blog-list.practicalStrategiesForOptimizingTranslation"),
				category: t("blog.blog-list.categoryTutorial")
			},
			{
				title: t("blog.blog-list.theStateOfInternationalizationIn"),
				date: t("blog.blog-list.february282026"),
				excerpt: t("blog.blog-list.anOverviewOfTheCurrent"),
				category: t("blog.blog-list.categoryAnalysis")
			},
			{
				title: t("blog.blog-list.migratingFromReactI18nextTo"),
				date: t("blog.blog-list.february152026"),
				excerpt: t("blog.blog-list.aStepByStepGuide"),
				category: t("blog.blog-list.categoryTutorial")
			},
			{
				title: t("blog.blog-list.serverComponentsAndI18nWhat"),
				date: t("blog.blog-list.february12026"),
				excerpt: t("blog.blog-list.reactServerComponentsIntroduceNew"),
				category: t("blog.blog-list.categoryAnalysis")
			},
			{
				title: t("blog.blog-list.benchmarkMethodologyHowWeTest"),
				date: t("blog.blog-list.january202026"),
				excerpt: t("blog.blog-list.aTransparentLookAtOur"),
				category: t("blog.blog-list.categoryMeta")
			}
		].map((p) => jsxs("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				jsxs("div", {
					className: "mb-3 flex items-center gap-3",
					children: [jsx("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: p.category
					}), jsx("span", {
						className: "text-xs text-muted-foreground",
						children: p.date
					})]
				}),
				jsx("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: p.title
				}),
				jsx("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: p.excerpt
				}),
				jsx("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: t("blog.blog-list.readMore")
				})
			]
		}, p.title))
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
//#region components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children: jsx(I18nProviderClient, {
			locale,
			children
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
var locale = "en";
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		children
	});
}
//#endregion
//#region components/pages/blog/BlogList.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(BlogList, {}) });
}
//#endregion
export { Wrapped as default };

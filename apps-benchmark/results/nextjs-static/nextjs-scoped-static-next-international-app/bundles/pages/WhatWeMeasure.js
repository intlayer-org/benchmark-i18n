import { Profiler, useEffect } from "react";
import frAbout from "../../../messages/fr/about.json";
import frBlog from "../../../messages/fr/blog.json";
import frCareers from "../../../messages/fr/careers.json";
import frContact from "../../../messages/fr/contact.json";
import frFaq from "../../../messages/fr/faq.json";
import frHome from "../../../messages/fr/home.json";
import frPricing from "../../../messages/fr/pricing.json";
import frProducts from "../../../messages/fr/products.json";
import frRoute from "../../../messages/fr/route.json";
import frSettings from "../../../messages/fr/settings.json";
import frShared from "../../../messages/fr/shared.json";
import frTeam from "../../../messages/fr/team.json";
import esAbout from "../../../messages/es/about.json";
import esBlog from "../../../messages/es/blog.json";
import esCareers from "../../../messages/es/careers.json";
import esContact from "../../../messages/es/contact.json";
import esFaq from "../../../messages/es/faq.json";
import esHome from "../../../messages/es/home.json";
import esPricing from "../../../messages/es/pricing.json";
import esProducts from "../../../messages/es/products.json";
import esRoute from "../../../messages/es/route.json";
import esSettings from "../../../messages/es/settings.json";
import esShared from "../../../messages/es/shared.json";
import esTeam from "../../../messages/es/team.json";
import deAbout from "../../../messages/de/about.json";
import deBlog from "../../../messages/de/blog.json";
import deCareers from "../../../messages/de/careers.json";
import deContact from "../../../messages/de/contact.json";
import deFaq from "../../../messages/de/faq.json";
import deHome from "../../../messages/de/home.json";
import dePricing from "../../../messages/de/pricing.json";
import deProducts from "../../../messages/de/products.json";
import deRoute from "../../../messages/de/route.json";
import deSettings from "../../../messages/de/settings.json";
import deShared from "../../../messages/de/shared.json";
import deTeam from "../../../messages/de/team.json";
import itAbout from "../../../messages/it/about.json";
import itBlog from "../../../messages/it/blog.json";
import itCareers from "../../../messages/it/careers.json";
import itContact from "../../../messages/it/contact.json";
import itFaq from "../../../messages/it/faq.json";
import itHome from "../../../messages/it/home.json";
import itPricing from "../../../messages/it/pricing.json";
import itProducts from "../../../messages/it/products.json";
import itRoute from "../../../messages/it/route.json";
import itSettings from "../../../messages/it/settings.json";
import itShared from "../../../messages/it/shared.json";
import itTeam from "../../../messages/it/team.json";
import ptAbout from "../../../messages/pt/about.json";
import ptBlog from "../../../messages/pt/blog.json";
import ptCareers from "../../../messages/pt/careers.json";
import ptContact from "../../../messages/pt/contact.json";
import ptFaq from "../../../messages/pt/faq.json";
import ptHome from "../../../messages/pt/home.json";
import ptPricing from "../../../messages/pt/pricing.json";
import ptProducts from "../../../messages/pt/products.json";
import ptRoute from "../../../messages/pt/route.json";
import ptSettings from "../../../messages/pt/settings.json";
import ptShared from "../../../messages/pt/shared.json";
import ptTeam from "../../../messages/pt/team.json";
import zhAbout from "../../../messages/zh/about.json";
import zhBlog from "../../../messages/zh/blog.json";
import zhCareers from "../../../messages/zh/careers.json";
import zhContact from "../../../messages/zh/contact.json";
import zhFaq from "../../../messages/zh/faq.json";
import zhHome from "../../../messages/zh/home.json";
import zhPricing from "../../../messages/zh/pricing.json";
import zhProducts from "../../../messages/zh/products.json";
import zhRoute from "../../../messages/zh/route.json";
import zhSettings from "../../../messages/zh/settings.json";
import zhShared from "../../../messages/zh/shared.json";
import zhTeam from "../../../messages/zh/team.json";
import jaAbout from "../../../messages/ja/about.json";
import jaBlog from "../../../messages/ja/blog.json";
import jaCareers from "../../../messages/ja/careers.json";
import jaContact from "../../../messages/ja/contact.json";
import jaFaq from "../../../messages/ja/faq.json";
import jaHome from "../../../messages/ja/home.json";
import jaPricing from "../../../messages/ja/pricing.json";
import jaProducts from "../../../messages/ja/products.json";
import jaRoute from "../../../messages/ja/route.json";
import jaSettings from "../../../messages/ja/settings.json";
import jaShared from "../../../messages/ja/shared.json";
import jaTeam from "../../../messages/ja/team.json";
import koAbout from "../../../messages/ko/about.json";
import koBlog from "../../../messages/ko/blog.json";
import koCareers from "../../../messages/ko/careers.json";
import koContact from "../../../messages/ko/contact.json";
import koFaq from "../../../messages/ko/faq.json";
import koHome from "../../../messages/ko/home.json";
import koPricing from "../../../messages/ko/pricing.json";
import koProducts from "../../../messages/ko/products.json";
import koRoute from "../../../messages/ko/route.json";
import koSettings from "../../../messages/ko/settings.json";
import koShared from "../../../messages/ko/shared.json";
import koTeam from "../../../messages/ko/team.json";
import ruAbout from "../../../messages/ru/about.json";
import ruBlog from "../../../messages/ru/blog.json";
import ruCareers from "../../../messages/ru/careers.json";
import ruContact from "../../../messages/ru/contact.json";
import ruFaq from "../../../messages/ru/faq.json";
import ruHome from "../../../messages/ru/home.json";
import ruPricing from "../../../messages/ru/pricing.json";
import ruProducts from "../../../messages/ru/products.json";
import ruRoute from "../../../messages/ru/route.json";
import ruSettings from "../../../messages/ru/settings.json";
import ruShared from "../../../messages/ru/shared.json";
import ruTeam from "../../../messages/ru/team.json";
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
//#region messages/en/about.json
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
var about_default = {
	"about-grid.whyThisExists": "Why This Exists",
	"about-grid.choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	"about-grid.methodology": "Methodology",
	"about-grid.theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	"about-header.aboutThisBenchmark": "About This Benchmark",
	"about-header.thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
	"what-we-measure.bundleSizeImpact": "Bundle size impact",
	"what-we-measure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"what-we-measure.renderingOverhead": "Rendering overhead",
	"what-we-measure.howMuchExtraTimeThe": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"what-we-measure.hydrationCost": "Hydration cost",
	"what-we-measure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"what-we-measure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"what-we-measure.localeSwitchSpeed": "Locale switch speed",
	"what-we-measure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"what-we-measure.whatWeMeasure": "What We Measure"
};
//#endregion
//#region messages/en/blog.json
var blog_default = {
	"blog-header.insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
	"blog-list.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	"blog-list.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blog-list.march82026": "March 8, 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	"blog-list.theStateOfInternationalizationIn": "The State of Internationalization in React",
	"blog-list.february282026": "February 28, 2026",
	"blog-list.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	"blog-list.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blog-list.february152026": "February 15, 2026",
	"blog-list.aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blog-list.february12026": "February 1, 2026",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blog-list.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blog-list.january202026": "January 20, 2026",
	"blog-list.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blog-list.readMore": "Read More →"
};
//#endregion
//#region messages/en/careers.json
var careers_default = {
	"open-positions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"open-positions.buildAndMaintainOurBenchmarking": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"open-positions.backendEngineer": "Backend Engineer",
	"open-positions.designAndScaleOurCloud": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	"open-positions.technicalWriter": "Technical Writer",
	"open-positions.createComprehensiveGuidesApiReferences": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	"open-positions.devrelEngineer": "DevRel Engineer",
	"open-positions.sanFranciscoRemote": "San Francisco / Remote",
	"open-positions.engageWithTheI18nCommunity": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	"open-positions.qaEngineer": "QA Engineer",
	"open-positions.ensureTheAccuracyAndReliability": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	"open-positions.openPositions": "Open Positions",
	"open-positions.applyNow": "Apply Now",
	"open-positions.remote": "Remote",
	"open-positions.fullTime": "Full-time",
	"open-positions.partTime": "Part-time",
	"open-positions.engineering": "Engineering",
	"open-positions.documentation": "Documentation",
	"open-positions.community": "Community",
	"careers-benefits.workFromAnywhereInThe": "Work from anywhere in the world",
	"careers-benefits.competitivePay": "Competitive pay",
	"careers-benefits.topOfMarketCompensation": "Top-of-market compensation",
	"careers-benefits.openSourceTime": "Open source time",
	"careers-header.title": "Careers",
	"careers-header.joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
	"careers-benefits.twentyPercentTime": "20% time for OSS"
};
//#endregion
//#region messages/en/contact.json
var contact_default = {
	"contact-form.name": "Name",
	"contact-form.yourName": "Your name",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "Topic",
	"contact-form.bugReport": "Bug Report",
	"contact-form.newBenchmarkIdea": "New Benchmark Idea",
	"contact-form.methodologyQuestion": "Methodology Question",
	"contact-form.contribution": "Contribution",
	"contact-form.other": "Other",
	"contact-form.message": "Message",
	"contact-form.describeYourQuestionOrIdea": "Describe your question or idea...",
	"contact-form.sendMessage": "Send Message",
	"contact-header.getInTouch": "Get in Touch",
	"contact-header.haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
};
//#endregion
//#region messages/en/faq.json
var faq_default = {
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "What is i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	"faq-list.howAreBenchmarksConducted": "How are benchmarks conducted?",
	"faq-list.weRunStandardizedTestsIn": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
	"faq-list.weSupportReactI18nextReact": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"faq-list.canISubmitMyOwn": "Can I submit my own benchmarks?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"faq-list.howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
	"faq-list.weReRunAllBenchmarks": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"faq-list.isTheDataReliable": "Is the data reliable?",
	"faq-list.weFollowRigorousStatisticalMethodology": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"faq-list.doYouOfferConsultingServices": "Do you offer consulting services?",
	"faq-list.yesOurEnterprisePlanIncludes": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"faq-list.howCanIContribute": "How can I contribute?",
	"faq-list.thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
};
//#endregion
//#region messages/en/home.json
var home_default = {
	"results-table.sampleResults": "Sample Results",
	"results-table.library": "Library",
	"results-table.bundleSize": "Bundle Size",
	"results-table.lookupTime": "Lookup Time",
	"results-table.lazyLoading": "Lazy Loading",
	"understanding-impact.understandingTheImpact": "Understanding the Impact",
	"understanding-impact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understanding-impact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understanding-impact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understanding-impact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understanding-impact.waterfallRequests": "Waterfall requests:",
	"understanding-impact.theAppMustFirstLoad": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understanding-impact.usersMayBrieflySee": "users may briefly see translation keys or a fallback language before the chunk arrives.",
	"understanding-impact.cacheInvalidation": "Cache invalidation:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
	"understanding-impact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understanding-impact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"why-it-matters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"why-it-matters.bundleSize": "Bundle Size",
	"why-it-matters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"why-it-matters.renderingHydration": "Rendering & Hydration",
	"why-it-matters.connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Dynamic Loading",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
};
//#endregion
//#region messages/en/pricing.json
var pricing_default = {
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "$0",
	"pricing-tiers.forever": "forever",
	"pricing-tiers.benchmarkRunPerDay": "{runs} benchmark runs/day",
	"pricing-tiers.librariesNumber": "{libs} libraries",
	"pricing-tiers.communitySupport": "Community support",
	"pricing-tiers.publicResults": "Public results",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "$29",
	"pricing-tiers.month": "/month",
	"pricing-tiers.unlimitedRuns": "Unlimited runs",
	"pricing-tiers.allLibraries": "All libraries",
	"pricing-tiers.prioritySupport": "Priority support",
	"pricing-tiers.privateResults": "Private results",
	"pricing-tiers.ciIntegration": "CI integration",
	"pricing-tiers.historicalData": "Historical data",
	"pricing-tiers.enterprise": "Enterprise",
	"pricing-tiers.customPrice": "Custom",
	"pricing-tiers.everythingInPro": "Everything in Pro",
	"pricing-tiers.onPremiseOption": "On-premise option",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "Dedicated account manager",
	"pricing-tiers.customSlas": "Custom SLAs",
	"pricing-tiers.auditLogs": "Audit logs",
	"pricing-tiers.trainingSessions": "Training sessions",
	"pricing-tiers.contactSales": "Contact Sales",
	"pricing-tiers.getStarted": "Get Started",
	"pricing-header.simpleTransparentPricing": "Simple, Transparent Pricing",
	"pricing-header.chooseThePlanThatFits": "Choose the plan that fits your team. No hidden fees."
};
//#endregion
//#region messages/en/products.json
var products_default = {
	"products-grid.benchmarkCli": "Benchmark CLI",
	"products-grid.runBenchmarksLocallyFromYour": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products-grid.contactUs": "Contact Us",
	"products-grid.migrationAssistant": "Migration Assistant",
	"products-grid.aiPoweredToolThatHelps": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products-grid.translationQa": "Translation QA",
	"products-grid.automatedQualityChecksForMissing": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products-grid.bundleOptimizer": "Bundle Optimizer",
	"products-grid.analyzesAndOptimizesYourI18n": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products-grid.learnMore": "Learn More",
	"products-header.toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow.",
	"products-grid.free": "Free",
	"products-grid.price29mo": "$29/mo",
	"products-grid.price99oneTime": "$99 one-time",
	"products-grid.price19mo": "$19/mo",
	"products-grid.price49mo": "$49/mo"
};
//#endregion
//#region messages/en/route.json
var route_default = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
//#endregion
//#region messages/en/settings.json
var settings_default = {
	"preferences-section.preferences": "Preferences",
	"preferences-section.emailNotifications": "Email Notifications",
	"preferences-section.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferences-section.toggleNotifications": "Toggle notifications",
	"preferences-section.darkMode": "Dark Mode",
	"preferences-section.useDarkColorScheme": "Use dark color scheme",
	"preferences-section.toggleDarkMode": "Toggle dark mode",
	"preferences-section.defaultLanguage": "Default Language",
	"preferences-section.englishEn": "English (en)",
	"preferences-section.frenchFr": "French (fr)",
	"preferences-section.germanDe": "German (de)",
	"preferences-section.spanishEs": "Spanish (es)",
	"preferences-section.japaneseJa": "Japanese (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
	"preferences-section.arabicAr": "Arabic (ar)",
	"settings-header.manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
	"settings-footer.cancel": "Cancel",
	"settings-footer.saveChanges": "Save Changes",
	"profile-section.profile": "Profile",
	"profile-section.displayName": "Display Name",
	"profile-section.email": "Email",
	"api-access-section.apiAccess": "API Access",
	"api-access-section.apiKey": "API Key",
	"api-access-section.useThisKeyToAccess": "Use this key to access the benchmarking API programmatically.",
	"api-access-section.copy": "Copy"
};
//#endregion
//#region messages/en/shared.json
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
	"theme-toggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"theme-toggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"theme-toggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"theme-toggle.themeAuto": "Theme: Auto",
	"theme-toggle.themeDark": "Theme: Dark",
	"theme-toggle.themeLight": "Theme: Light",
	"mock-banner.mockBanner": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
};
//#endregion
//#region messages/en/team.json
var team_default = {
	"team-header.ourTeam": "Our Team",
	"team-header.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Founder & Lead Engineer",
	"team-grid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Performance Engineer",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer Advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Full-Stack Developer",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Data Analyst",
	"team-grid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Community Manager",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
//#endregion
//#region i18n/scopedMessages.ts
var namespaces = [
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
var messagesByLocaleAndNamespace = {
	en: {
		about: about_default,
		blog: blog_default,
		careers: careers_default,
		contact: contact_default,
		faq: faq_default,
		home: home_default,
		pricing: pricing_default,
		products: products_default,
		route: route_default,
		settings: settings_default,
		shared: shared_default,
		team: team_default
	},
	fr: {
		about: frAbout,
		blog: frBlog,
		careers: frCareers,
		contact: frContact,
		faq: frFaq,
		home: frHome,
		pricing: frPricing,
		products: frProducts,
		route: frRoute,
		settings: frSettings,
		shared: frShared,
		team: frTeam
	},
	es: {
		about: esAbout,
		blog: esBlog,
		careers: esCareers,
		contact: esContact,
		faq: esFaq,
		home: esHome,
		pricing: esPricing,
		products: esProducts,
		route: esRoute,
		settings: esSettings,
		shared: esShared,
		team: esTeam
	},
	de: {
		about: deAbout,
		blog: deBlog,
		careers: deCareers,
		contact: deContact,
		faq: deFaq,
		home: deHome,
		pricing: dePricing,
		products: deProducts,
		route: deRoute,
		settings: deSettings,
		shared: deShared,
		team: deTeam
	},
	it: {
		about: itAbout,
		blog: itBlog,
		careers: itCareers,
		contact: itContact,
		faq: itFaq,
		home: itHome,
		pricing: itPricing,
		products: itProducts,
		route: itRoute,
		settings: itSettings,
		shared: itShared,
		team: itTeam
	},
	pt: {
		about: ptAbout,
		blog: ptBlog,
		careers: ptCareers,
		contact: ptContact,
		faq: ptFaq,
		home: ptHome,
		pricing: ptPricing,
		products: ptProducts,
		route: ptRoute,
		settings: ptSettings,
		shared: ptShared,
		team: ptTeam
	},
	zh: {
		about: zhAbout,
		blog: zhBlog,
		careers: zhCareers,
		contact: zhContact,
		faq: zhFaq,
		home: zhHome,
		pricing: zhPricing,
		products: zhProducts,
		route: zhRoute,
		settings: zhSettings,
		shared: zhShared,
		team: zhTeam
	},
	ja: {
		about: jaAbout,
		blog: jaBlog,
		careers: jaCareers,
		contact: jaContact,
		faq: jaFaq,
		home: jaHome,
		pricing: jaPricing,
		products: jaProducts,
		route: jaRoute,
		settings: jaSettings,
		shared: jaShared,
		team: jaTeam
	},
	ko: {
		about: koAbout,
		blog: koBlog,
		careers: koCareers,
		contact: koContact,
		faq: koFaq,
		home: koHome,
		pricing: koPricing,
		products: koProducts,
		route: koRoute,
		settings: koSettings,
		shared: koShared,
		team: koTeam
	},
	ru: {
		about: ruAbout,
		blog: ruBlog,
		careers: ruCareers,
		contact: ruContact,
		faq: ruFaq,
		home: ruHome,
		pricing: ruPricing,
		products: ruProducts,
		route: ruRoute,
		settings: ruSettings,
		shared: ruShared,
		team: ruTeam
	}
};
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
function getMessages(locale, requestedNamespaces) {
	const localeMessages = messagesByLocaleAndNamespace[locale] ?? messagesByLocaleAndNamespace.en;
	const nsSet = new Set(requestedNamespaces);
	nsSet.add("shared");
	const parts = [];
	for (const ns of nsSet) {
		const nsMessages = localeMessages[ns];
		if (nsMessages) parts.push(nestify(nsMessages));
	}
	return mergeAll(parts);
}
function getAllMessages(locale) {
	return getMessages(locale, namespaces);
}
//#endregion
//#region locales/de.ts
var de_default = getAllMessages("de");
//#endregion
//#region locales/en.ts
var en_default = getAllMessages("en");
//#endregion
//#region locales/es.ts
var es_default = getAllMessages("es");
//#endregion
//#region locales/fr.ts
var fr_default = getAllMessages("fr");
//#endregion
//#region locales/it.ts
var it_default = getAllMessages("it");
//#endregion
//#region locales/ja.ts
var ja_default = getAllMessages("ja");
//#endregion
//#region locales/ko.ts
var ko_default = getAllMessages("ko");
//#endregion
//#region locales/pt.ts
var pt_default = getAllMessages("pt");
//#endregion
//#region locales/ru.ts
var ru_default = getAllMessages("ru");
//#endregion
//#region locales/zh.ts
var zh_default = getAllMessages("zh");
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
var useScopedI18n = client.useScopedI18n;
var { I18nProviderClient, useChangeLocale, useCurrentLocale } = client;
//#endregion
//#region components/pages/about/WhatWeMeasure.tsx
function WhatWeMeasure() {
	const scopedT = useScopedI18n("what-we-measure");
	const metrics = [
		{
			metric: scopedT("bundleSizeImpact"),
			desc: scopedT("theAdditionalJavascriptBytesSent")
		},
		{
			metric: scopedT("renderingOverhead"),
			desc: scopedT("howMuchExtraTimeThe")
		},
		{
			metric: scopedT("hydrationCost"),
			desc: scopedT("duringSsrTranslationDataIs")
		},
		{
			metric: scopedT("lazyLoadingEffectiveness"),
			desc: scopedT("whetherSplittingTranslationsByRoute")
		},
		{
			metric: scopedT("localeSwitchSpeed"),
			desc: scopedT("howFastTheAppCan")
		}
	];
	return jsxs("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [jsx("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: scopedT("whatWeMeasure")
		}), jsx("ul", {
			className: "space-y-4",
			children: metrics.map((m) => jsxs("li", {
				className: "rounded-md border border-border p-4",
				children: [jsx("span", {
					className: "block text-sm font-bold text-primary",
					children: m.metric
				}), jsx("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: m.desc
				})]
			}, m.metric))
		})]
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
//#region components/pages/about/WhatWeMeasure.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(WhatWeMeasure, {}) });
}
//#endregion
export { Wrapped as default };

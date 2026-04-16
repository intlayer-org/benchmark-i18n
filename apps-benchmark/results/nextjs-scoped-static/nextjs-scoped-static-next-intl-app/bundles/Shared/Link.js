import { Profiler, createContext, useContext, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import { jsx } from "react/jsx-runtime";
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
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().locale ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
};
function memoize(fn, options) {
	const cache = options && options.cache ? options.cache : cacheDefault;
	const serializer = options && options.serializer ? options.serializer : serializerDefault;
	return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
		cache,
		serializer
	});
}
function isPrimitive(value) {
	return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
	const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function variadic(fn, cache, serializer) {
	const args = Array.prototype.slice.call(arguments, 3);
	const cacheKey = serializer(args);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
	const strategy = fn.length === 1 ? monadic : variadic;
	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
	return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(key) {
		return this.cache[key];
	}
	set(key, value) {
		this.cache[key] = value;
	}
};
var cacheDefault = { create: function create() {
	return new ObjectWithoutPrototypeCache();
} };
var strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic
};
var r = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(r || {});
function s() {
	return {
		dateTime: {},
		number: {},
		message: {},
		relativeTime: {},
		pluralRules: {},
		list: {},
		displayNames: {}
	};
}
function i$1(a, r) {
	return memoize(a, {
		cache: (s = r, { create: () => ({
			get: (e) => s[e],
			set(e, t) {
				s[e] = t;
			}
		}) }),
		strategy: strategies.variadic
	});
	var s;
}
function I(e, t) {
	return i$1(((...t) => new e(...t)), t);
}
function l(e) {
	return {
		getDateTimeFormat: I(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: I(Intl.NumberFormat, e.number),
		getPluralRules: I(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: I(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: I(Intl.ListFormat, e.list),
		getDisplayNames: I(Intl.DisplayNames, e.displayNames)
	};
}
function c(...e) {
	return e.filter(Boolean).join(".");
}
function i(e) {
	return c(e.namespace, e.key);
}
function u(e) {
	console.error(e);
}
var y = 86400;
7 * y;
365 * y;
function M({ formats: e, getMessageFallback: t, messages: r, onError: n, ...o }) {
	return {
		...o,
		formats: e || void 0,
		messages: r || void 0,
		onError: n || u,
		getMessageFallback: t || i
	};
}
var d = createContext(void 0);
function v({ children: e, formats: o, getMessageFallback: n, locale: c, messages: i, now: f, onError: u, timeZone: l$1 }) {
	const v = useContext(d), w = useMemo((() => v?.cache || s()), [c, v?.cache]), p = useMemo((() => v?.formatters || l(w)), [w, v?.formatters]), h = useMemo((() => ({
		...M({
			locale: c,
			formats: void 0 === o ? v?.formats : o,
			getMessageFallback: n || v?.getMessageFallback,
			messages: void 0 === i ? v?.messages : i,
			now: f || v?.now,
			onError: u || v?.onError,
			timeZone: l$1 || v?.timeZone
		}),
		formatters: p,
		cache: w
	})), [
		w,
		o,
		p,
		n,
		c,
		i,
		f,
		u,
		v,
		l$1
	]);
	return jsx(d.Provider, {
		value: h,
		children: e
	});
}
function t({ locale: t, ...e }) {
	if (!t) throw new Error(void 0);
	return jsx(v, {
		locale: t,
		...e
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
function AppProviders({ children, locale, messages }) {
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children: jsx(t, {
			locale,
			messages,
			timeZone: "UTC",
			children
		})
	});
}
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
var route_default = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
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
var enMessages = getAllMessages("en");
var locale = "en";
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		messages: enMessages,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Link, {}) });
}
export { Wrapped as default };

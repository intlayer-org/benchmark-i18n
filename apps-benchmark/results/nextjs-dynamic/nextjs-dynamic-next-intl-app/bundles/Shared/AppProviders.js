import { Profiler, createContext, useContext, useEffect, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
//#region ../../../node_modules/.bun/@formatjs+fast-memoize@3.1.1/node_modules/@formatjs/fast-memoize/index.js
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
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/formatters-CJcico0N.js
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
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/initializeConfig-Brh10fyG.js
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
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/react.js
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
//#endregion
//#region ../../../node_modules/.bun/next-intl@4.9.1+77ae5f1145ea432b/node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function t({ locale: t, ...e }) {
	if (!t) throw new Error(void 0);
	return jsx(v, {
		locale: t,
		...e
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
var en_default = {
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
			"readMore": "Read More →"
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
			"workFromAnywhereInThe": "Work from anywhere in the world",
			"competitivePay": "Competitive pay",
			"topOfMarketCompensation": "Top-of-market compensation",
			"openSourceTime": "Open source time"
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
			"flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
			"cacheInvalidation": "Cache invalidation:",
			"whatThisBenchmarkMeasures": "What this benchmark measures",
			"thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		"results-table": {
			"sampleResults": "Sample Results",
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
};
//#endregion
//#region scripts/Wrapper.tsx
var locale = "en";
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		messages: en_default,
		children
	});
}
//#endregion
//#region components/AppProviders.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(AppProviders, {}) });
}
//#endregion
export { Wrapped as default };

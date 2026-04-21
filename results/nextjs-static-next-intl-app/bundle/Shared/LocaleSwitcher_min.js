import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import { useParams as o, usePathname as s, useRouter as c } from "next/navigation";
import { jsx as l } from "react/jsx-runtime";
var u = [
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
];
function d(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function f() {
	let e = o().locale ?? "en", t = s(), n = c(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return l("div", {
		className: "flex items-center gap-2",
		children: l("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: u.map((e) => l("option", {
				value: e,
				children: d(e)
			}, e))
		})
	});
}
function p(e, t) {
	let n = t && t.cache ? t.cache : C, r = t && t.serializer ? t.serializer : x;
	return (t && t.strategy ? t.strategy : v)(e, {
		cache: n,
		serializer: r
	});
}
function m(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function h(e, t, n, r) {
	let i = m(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function g(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function _(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function v(e, t) {
	let n = e.length === 1 ? h : g;
	return _(e, this, n, t.cache.create(), t.serializer);
}
function y(e, t) {
	return _(e, this, g, t.cache.create(), t.serializer);
}
function b(e, t) {
	return _(e, this, h, t.cache.create(), t.serializer);
}
var x = function() {
	return JSON.stringify(arguments);
}, S = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, C = { create: function() {
	return new S();
} }, w = {
	variadic: y,
	monadic: b
}, T = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(T || {});
function E() {
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
function D(e, t) {
	return p(e, {
		cache: (n = t, { create: () => ({
			get: (e) => n[e],
			set(e, t) {
				n[e] = t;
			}
		}) }),
		strategy: w.variadic
	});
	var n;
}
function O(e, t) {
	return D(((...t) => new e(...t)), t);
}
function k(e) {
	return {
		getDateTimeFormat: O(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: O(Intl.NumberFormat, e.number),
		getPluralRules: O(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: O(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: O(Intl.ListFormat, e.list),
		getDisplayNames: O(Intl.DisplayNames, e.displayNames)
	};
}
function A(...e) {
	return e.filter(Boolean).join(".");
}
function j(e) {
	return A(e.namespace, e.key);
}
function M(e) {
	console.error(e);
}
var N = 86400;
7 * N, 365 * N;
function P({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	return {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: r || M,
		getMessageFallback: t || j
	};
}
var F = e(void 0);
function I({ children: e, formats: n, getMessageFallback: r, locale: a, messages: o, now: s, onError: c, timeZone: u }) {
	let d = t(F), f = i((() => d?.cache || E()), [a, d?.cache]), p = i((() => d?.formatters || k(f)), [f, d?.formatters]), m = i((() => ({
		...P({
			locale: a,
			formats: n === void 0 ? d?.formats : n,
			getMessageFallback: r || d?.getMessageFallback,
			messages: o === void 0 ? d?.messages : o,
			now: s || d?.now,
			onError: c || d?.onError,
			timeZone: u || d?.timeZone
		}),
		formatters: p,
		cache: f
	})), [
		f,
		n,
		p,
		r,
		a,
		o,
		s,
		c,
		d,
		u
	]);
	return l(F.Provider, {
		value: m,
		children: e
	});
}
function L({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return l(I, {
		locale: e,
		...t
	});
}
function R() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function z(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function B({ children: e, locale: t, messages: i }) {
	let [o] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		z("AppRoot", o);
	}, [o]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		R();
	}, []), l(L, {
		locale: t,
		messages: i,
		timeZone: "UTC",
		children: e
	});
}
var V = {
	"careers-header": {
		title: "Careers",
		joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	contact: {
		"contact-header": {
			getInTouch: "Get in Touch",
			haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
		},
		"contact-form": {
			yourName: "Your name",
			bugReport: "Bug Report",
			newBenchmarkIdea: "New Benchmark Idea",
			methodologyQuestion: "Methodology Question",
			describeYourQuestionOrIdea: "Describe your question or idea...",
			sendMessage: "Send Message"
		}
	},
	"about-header": {
		aboutThisBenchmark: "About This Benchmark",
		thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	hero: {
		aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results"
	},
	blog: {
		"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
		"blog-list": {
			comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
			weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
			march82026: "March 8, 2026",
			practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			theStateOfInternationalizationIn: "The State of Internationalization in React",
			february282026: "February 28, 2026",
			anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
			february152026: "February 15, 2026",
			aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
			february12026: "February 1, 2026",
			reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
			january202026: "January 20, 2026",
			aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			readMore: "Read More →"
		}
	},
	faq: { "faq-list": {
		whatIsI18nBenchmark: "What is i18n Benchmark?",
		whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		howAreBenchmarksConducted: "How are benchmarks conducted?",
		weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
		weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		canISubmitMyOwn: "Can I submit my own benchmarks?",
		yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
		weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		isTheDataReliable: "Is the data reliable?",
		weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		doYouOfferConsultingServices: "Do you offer consulting services?",
		yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		howCanIContribute: "How can I contribute?",
		thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	} },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
		weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
		march82026: "March 8, 2026",
		practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		theStateOfInternationalizationIn: "The State of Internationalization in React",
		february282026: "February 28, 2026",
		anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
		february152026: "February 15, 2026",
		aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
		february12026: "February 1, 2026",
		reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
		january202026: "January 20, 2026",
		aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		readMore: "Read More →"
	},
	"understanding-impact": {
		understandingTheImpact: "Understanding the Impact",
		whyASingleLargeJson: "Why a single large JSON can hurt performance",
		manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
		contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
		splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		waterfallRequests: "Waterfall requests:",
		flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
		cacheInvalidation: "Cache invalidation:",
		whatThisBenchmarkMeasures: "What this benchmark measures",
		thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	settings: {
		"settings-header": { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." },
		"profile-section": {
			displayName: "Display Name",
			profile: "Profile",
			email: "Email"
		},
		"preferences-section": {
			emailNotifications: "Email Notifications",
			receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
			toggleNotifications: "Toggle notifications",
			darkMode: "Dark Mode",
			useDarkColorScheme: "Use dark color scheme",
			toggleDarkMode: "Toggle dark mode",
			defaultLanguage: "Default Language",
			englishEn: "English (en)",
			frenchFr: "French (fr)",
			germanDe: "German (de)",
			spanishEs: "Spanish (es)",
			japaneseJa: "Japanese (ja)",
			chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
			arabicAr: "Arabic (ar)"
		},
		"api-access-section": {
			apiAccess: "API Access",
			apiKey: "API Key",
			useThisKeyToAccess: "Use this key to access the benchmarking API programmatically."
		},
		"settings-footer": {
			saveChanges: "Save Changes",
			cancel: "Cancel"
		}
	},
	"faq-list": {
		whatIsI18nBenchmark: "What is i18n Benchmark?",
		whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		howAreBenchmarksConducted: "How are benchmarks conducted?",
		weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
		weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		canISubmitMyOwn: "Can I submit my own benchmarks?",
		yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
		weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		isTheDataReliable: "Is the data reliable?",
		weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		doYouOfferConsultingServices: "Do you offer consulting services?",
		yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		howCanIContribute: "How can I contribute?",
		thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	},
	pricing: {
		"pricing-header": {
			simpleTransparentPricing: "Simple, Transparent Pricing",
			chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees."
		},
		"pricing-tiers": {
			starter: "Starter",
			price0: "$0",
			forever: "forever",
			benchmarkRunPerDay: "{runs} benchmark runs/day",
			librariesNumber: "{libs} libraries",
			communitySupport: "Community support",
			publicResults: "Public results",
			pro: "Pro",
			price29: "$29",
			month: "/month",
			unlimitedRuns: "Unlimited runs",
			allLibraries: "All libraries",
			prioritySupport: "Priority support",
			privateResults: "Private results",
			ciIntegration: "CI integration",
			historicalData: "Historical data",
			enterprise: "Enterprise",
			customPrice: "Custom",
			everythingInPro: "Everything in Pro",
			onPremiseOption: "On-premise option",
			ssoSaml: "SSO & SAML",
			dedicatedAccountManager: "Dedicated account manager",
			customSlas: "Custom SLAs",
			auditLogs: "Audit logs",
			trainingSessions: "Training sessions",
			contactSales: "Contact Sales",
			getStarted: "Get Started"
		}
	},
	footer: {
		resources: "Resources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
		themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
		themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
		themeAuto: "Theme: Auto",
		themeDark: "Theme: Dark",
		themeLight: "Theme: Light"
	},
	"contact-header": {
		getInTouch: "Get in Touch",
		haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	"what-we-measure": {
		bundleSizeImpact: "Bundle size impact",
		theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		renderingOverhead: "Rendering overhead",
		howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		hydrationCost: "Hydration cost",
		duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		lazyLoadingEffectiveness: "Lazy loading effectiveness",
		whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		localeSwitchSpeed: "Locale switch speed",
		howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		whatWeMeasure: "What We Measure"
	},
	"results-table": {
		sampleResults: "Sample Results",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading"
	},
	careers: {
		"careers-header": {
			title: "Careers",
			joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		},
		"careers-benefits": {
			workFromAnywhereInThe: "Work from anywhere in the world",
			competitivePay: "Competitive pay",
			topOfMarketCompensation: "Top-of-market compensation",
			openSourceTime: "Open source time"
		},
		"open-positions": {
			seniorFrontendEngineer: "Senior Frontend Engineer",
			buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			backendEngineer: "Backend Engineer",
			designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
			technicalWriter: "Technical Writer",
			createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
			devrelEngineer: "DevRel Engineer",
			sanFranciscoRemote: "San Francisco / Remote",
			engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
			qaEngineer: "QA Engineer",
			ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
			openPositions: "Open Positions",
			applyNow: "Apply Now",
			remote: "Remote",
			fullTime: "Full-time",
			partTime: "Part-time",
			engineering: "Engineering",
			documentation: "Documentation",
			community: "Community"
		}
	},
	header: {
		home: "Home",
		methodology: "Methodology",
		mockPages: "Mock Pages",
		products: "Products",
		pricing: "Pricing",
		team: "Team",
		blog: "Blog",
		careers: "Careers",
		faq: "FAQ",
		contact: "Contact",
		settings: "Settings",
		goToGithub: "Go to GitHub"
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	team: {
		"team-header": {
			ourTeam: "Our Team",
			meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		"team-grid": {
			sarahChen: "Sarah Chen",
			founderLeadEngineer: "Founder & Lead Engineer",
			formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			marcusWeber: "Marcus Weber",
			performanceEngineer: "Performance Engineer",
			specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			aishaPatel: "Aisha Patel",
			developerAdvocate: "Developer Advocate",
			passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			tomasRodriguez: "Tomás Rodríguez",
			fullStackDeveloper: "Full-Stack Developer",
			maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			yukiTanaka: "Yuki Tanaka",
			dataAnalyst: "Data Analyst",
			ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			elenaKowalski: "Elena Kowalski",
			communityManager: "Community Manager",
			managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	},
	about: {
		"about-header": {
			aboutThisBenchmark: "About This Benchmark",
			thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
		},
		"about-grid": {
			whyThisExists: "Why This Exists",
			choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			methodology: "Methodology",
			theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		},
		"what-we-measure": {
			bundleSizeImpact: "Bundle size impact",
			theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
			renderingOverhead: "Rendering overhead",
			howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
			hydrationCost: "Hydration cost",
			duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			lazyLoadingEffectiveness: "Lazy loading effectiveness",
			whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			localeSwitchSpeed: "Locale switch speed",
			howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			whatWeMeasure: "What We Measure"
		}
	},
	"contact-form": {
		yourName: "Your name",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		describeYourQuestionOrIdea: "Describe your question or idea...",
		sendMessage: "Send Message"
	},
	products: {
		"products-header": { toolsAndServicesToStreamline: "Tools and services to streamline your internationalization workflow." },
		"products-grid": {
			benchmarkCli: "Benchmark CLI",
			runBenchmarksLocallyFromYour: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			benchmarkCloud: "Benchmark Cloud",
			automatedCloudBasedBenchmarkingWith: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			benchmarkEnterprise: "Benchmark Enterprise",
			onPremiseDeploymentWithSso: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			contactUs: "Contact Us",
			migrationAssistant: "Migration Assistant",
			aiPoweredToolThatHelps: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			translationQa: "Translation QA",
			automatedQualityChecksForMissing: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			bundleOptimizer: "Bundle Optimizer",
			analyzesAndOptimizesYourI18n: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			learnMore: "Learn More",
			free: "Free",
			price29mo: "$29/mo",
			price99oneTime: "$99 one-time",
			price19mo: "$19/mo",
			price49mo: "$49/mo"
		}
	},
	"open-positions": {
		seniorFrontendEngineer: "Senior Frontend Engineer",
		buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		backendEngineer: "Backend Engineer",
		designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		technicalWriter: "Technical Writer",
		createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		devrelEngineer: "DevRel Engineer",
		sanFranciscoRemote: "San Francisco / Remote",
		engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		qaEngineer: "QA Engineer",
		ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		openPositions: "Open Positions",
		applyNow: "Apply Now",
		remote: "Remote",
		fullTime: "Full-time",
		partTime: "Part-time",
		engineering: "Engineering",
		documentation: "Documentation",
		community: "Community"
	},
	route: { route: {
		oopsPageNotFound: "Oops! Page not found",
		returnToHome: "Return to Home",
		couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
	} },
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
	"faq-header1": {
		frequentlyAskedQuestions: "Frequently Asked Questions",
		everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
	},
	"about-grid": {
		whyThisExists: "Why This Exists",
		choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodology: "Methodology",
		theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	home: {
		hero: {
			aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			viewResults: "View Results"
		},
		"why-it-matters": {
			whyTheseMetricsMatter: "Why These Metrics Matter",
			bundleSize: "Bundle Size",
			theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			renderingHydration: "Rendering & Hydration",
			connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			dynamicLoading: "Dynamic Loading",
			loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		},
		"understanding-impact": {
			understandingTheImpact: "Understanding the Impact",
			whyASingleLargeJson: "Why a single large JSON can hurt performance",
			manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
			contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
			splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			waterfallRequests: "Waterfall requests:",
			flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
			cacheInvalidation: "Cache invalidation:",
			whatThisBenchmarkMeasures: "What this benchmark measures",
			thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		"results-table": {
			sampleResults: "Sample Results",
			bundleSize: "Bundle Size",
			lookupTime: "Lookup Time",
			lazyLoading: "Lazy Loading"
		}
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Work from anywhere in the world",
		competitivePay: "Competitive pay",
		topOfMarketCompensation: "Top-of-market compensation",
		openSourceTime: "Open source time"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Why These Metrics Matter",
		bundleSize: "Bundle Size",
		theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingHydration: "Rendering & Hydration",
		connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoading: "Dynamic Loading",
		loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	}
}, H = "en";
function U({ children: e }) {
	return l(B, {
		locale: H,
		messages: V,
		children: e
	});
}
function W() {
	return l(U, { children: l(f, {}) });
}
export { W as default };

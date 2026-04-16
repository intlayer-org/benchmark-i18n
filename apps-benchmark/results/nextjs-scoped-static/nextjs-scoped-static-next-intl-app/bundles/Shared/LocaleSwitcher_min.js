import { Profiler as e, createContext as t, useContext as n, useEffect as r, useMemo as i } from "react";
import { useParams as a, usePathname as o, useRouter as s } from "next/navigation";
import { jsx as c } from "react/jsx-runtime";
import l from "../messages/fr/about.json";
import u from "../messages/fr/blog.json";
import d from "../messages/fr/careers.json";
import f from "../messages/fr/contact.json";
import p from "../messages/fr/faq.json";
import m from "../messages/fr/home.json";
import ee from "../messages/fr/pricing.json";
import te from "../messages/fr/products.json";
import ne from "../messages/fr/route.json";
import re from "../messages/fr/settings.json";
import ie from "../messages/fr/shared.json";
import ae from "../messages/fr/team.json";
import oe from "../messages/es/about.json";
import se from "../messages/es/blog.json";
import ce from "../messages/es/careers.json";
import le from "../messages/es/contact.json";
import h from "../messages/es/faq.json";
import g from "../messages/es/home.json";
import _ from "../messages/es/pricing.json";
import v from "../messages/es/products.json";
import y from "../messages/es/route.json";
import b from "../messages/es/settings.json";
import x from "../messages/es/shared.json";
import S from "../messages/es/team.json";
import C from "../messages/de/about.json";
import w from "../messages/de/blog.json";
import T from "../messages/de/careers.json";
import E from "../messages/de/contact.json";
import D from "../messages/de/faq.json";
import O from "../messages/de/home.json";
import k from "../messages/de/pricing.json";
import A from "../messages/de/products.json";
import j from "../messages/de/route.json";
import M from "../messages/de/settings.json";
import N from "../messages/de/shared.json";
import P from "../messages/de/team.json";
import F from "../messages/it/about.json";
import I from "../messages/it/blog.json";
import L from "../messages/it/careers.json";
import R from "../messages/it/contact.json";
import z from "../messages/it/faq.json";
import B from "../messages/it/home.json";
import V from "../messages/it/pricing.json";
import H from "../messages/it/products.json";
import U from "../messages/it/route.json";
import W from "../messages/it/settings.json";
import ue from "../messages/it/shared.json";
import de from "../messages/it/team.json";
import fe from "../messages/pt/about.json";
import pe from "../messages/pt/blog.json";
import me from "../messages/pt/careers.json";
import he from "../messages/pt/contact.json";
import ge from "../messages/pt/faq.json";
import _e from "../messages/pt/home.json";
import ve from "../messages/pt/pricing.json";
import ye from "../messages/pt/products.json";
import be from "../messages/pt/route.json";
import xe from "../messages/pt/settings.json";
import Se from "../messages/pt/shared.json";
import Ce from "../messages/pt/team.json";
import we from "../messages/zh/about.json";
import Te from "../messages/zh/blog.json";
import Ee from "../messages/zh/careers.json";
import De from "../messages/zh/contact.json";
import Oe from "../messages/zh/faq.json";
import ke from "../messages/zh/home.json";
import Ae from "../messages/zh/pricing.json";
import je from "../messages/zh/products.json";
import Me from "../messages/zh/route.json";
import Ne from "../messages/zh/settings.json";
import Pe from "../messages/zh/shared.json";
import Fe from "../messages/zh/team.json";
import Ie from "../messages/ja/about.json";
import Le from "../messages/ja/blog.json";
import Re from "../messages/ja/careers.json";
import ze from "../messages/ja/contact.json";
import Be from "../messages/ja/faq.json";
import Ve from "../messages/ja/home.json";
import He from "../messages/ja/pricing.json";
import Ue from "../messages/ja/products.json";
import We from "../messages/ja/route.json";
import Ge from "../messages/ja/settings.json";
import Ke from "../messages/ja/shared.json";
import qe from "../messages/ja/team.json";
import Je from "../messages/ko/about.json";
import Ye from "../messages/ko/blog.json";
import Xe from "../messages/ko/careers.json";
import Ze from "../messages/ko/contact.json";
import Qe from "../messages/ko/faq.json";
import $e from "../messages/ko/home.json";
import et from "../messages/ko/pricing.json";
import tt from "../messages/ko/products.json";
import nt from "../messages/ko/route.json";
import rt from "../messages/ko/settings.json";
import it from "../messages/ko/shared.json";
import at from "../messages/ko/team.json";
import ot from "../messages/ru/about.json";
import st from "../messages/ru/blog.json";
import ct from "../messages/ru/careers.json";
import lt from "../messages/ru/contact.json";
import ut from "../messages/ru/faq.json";
import dt from "../messages/ru/home.json";
import ft from "../messages/ru/pricing.json";
import pt from "../messages/ru/products.json";
import mt from "../messages/ru/route.json";
import ht from "../messages/ru/settings.json";
import gt from "../messages/ru/shared.json";
import _t from "../messages/ru/team.json";
var vt = [
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
function yt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function bt() {
	let e = a().locale ?? "en", t = o(), n = s(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: vt.map((e) => c("option", {
				value: e,
				children: yt(e)
			}, e))
		})
	});
}
function xt(e, t) {
	let n = t && t.cache ? t.cache : Ot, r = t && t.serializer ? t.serializer : Et;
	return (t && t.strategy ? t.strategy : Ct)(e, {
		cache: n,
		serializer: r
	});
}
function St(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function G(e, t, n, r) {
	let i = St(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function K(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function q(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function Ct(e, t) {
	let n = e.length === 1 ? G : K;
	return q(e, this, n, t.cache.create(), t.serializer);
}
function wt(e, t) {
	return q(e, this, K, t.cache.create(), t.serializer);
}
function Tt(e, t) {
	return q(e, this, G, t.cache.create(), t.serializer);
}
var Et = function() {
	return JSON.stringify(arguments);
}, Dt = class {
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
}, Ot = { create: function() {
	return new Dt();
} }, kt = {
	variadic: wt,
	monadic: Tt
}, At = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(At || {});
function jt() {
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
function Mt(e, t) {
	return xt(e, {
		cache: (n = t, { create: () => ({
			get: (e) => n[e],
			set(e, t) {
				n[e] = t;
			}
		}) }),
		strategy: kt.variadic
	});
	var n;
}
function J(e, t) {
	return Mt(((...t) => new e(...t)), t);
}
function Nt(e) {
	return {
		getDateTimeFormat: J(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: J(Intl.NumberFormat, e.number),
		getPluralRules: J(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: J(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: J(Intl.ListFormat, e.list),
		getDisplayNames: J(Intl.DisplayNames, e.displayNames)
	};
}
function Pt(...e) {
	return e.filter(Boolean).join(".");
}
function Ft(e) {
	return Pt(e.namespace, e.key);
}
function It(e) {
	console.error(e);
}
var Y = 86400;
7 * Y, 365 * Y;
function Lt({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	return {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: r || It,
		getMessageFallback: t || Ft
	};
}
var X = t(void 0);
function Rt({ children: e, formats: t, getMessageFallback: r, locale: a, messages: o, now: s, onError: l, timeZone: u }) {
	let d = n(X), f = i((() => d?.cache || jt()), [a, d?.cache]), p = i((() => d?.formatters || Nt(f)), [f, d?.formatters]), m = i((() => ({
		...Lt({
			locale: a,
			formats: t === void 0 ? d?.formats : t,
			getMessageFallback: r || d?.getMessageFallback,
			messages: o === void 0 ? d?.messages : o,
			now: s || d?.now,
			onError: l || d?.onError,
			timeZone: u || d?.timeZone
		}),
		formatters: p,
		cache: f
	})), [
		f,
		t,
		p,
		r,
		a,
		o,
		s,
		l,
		d,
		u
	]);
	return c(X.Provider, {
		value: m,
		children: e
	});
}
function zt({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return c(Rt, {
		locale: e,
		...t
	});
}
function Bt() {
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
function Vt(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Ht({ children: t, locale: n, messages: i }) {
	return r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		Bt();
	}, []), c(e, {
		id: "AppRoot",
		onRender: Vt,
		children: c(zt, {
			locale: n,
			messages: i,
			timeZone: "UTC",
			children: t
		})
	});
}
var Ut = {
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
}, Wt = {
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
}, Gt = {
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
}, Kt = {
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
}, qt = {
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
}, Jt = {
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
}, Yt = {
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
}, Z = {
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
}, Xt = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
}, Zt = {
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
}, Qt = {
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
}, $t = {
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
}, en = [
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
], Q = {
	en: {
		about: Ut,
		blog: Wt,
		careers: Gt,
		contact: Kt,
		faq: qt,
		home: Jt,
		pricing: Yt,
		products: Z,
		route: Xt,
		settings: Zt,
		shared: Qt,
		team: $t
	},
	fr: {
		about: l,
		blog: u,
		careers: d,
		contact: f,
		faq: p,
		home: m,
		pricing: ee,
		products: te,
		route: ne,
		settings: re,
		shared: ie,
		team: ae
	},
	es: {
		about: oe,
		blog: se,
		careers: ce,
		contact: le,
		faq: h,
		home: g,
		pricing: _,
		products: v,
		route: y,
		settings: b,
		shared: x,
		team: S
	},
	de: {
		about: C,
		blog: w,
		careers: T,
		contact: E,
		faq: D,
		home: O,
		pricing: k,
		products: A,
		route: j,
		settings: M,
		shared: N,
		team: P
	},
	it: {
		about: F,
		blog: I,
		careers: L,
		contact: R,
		faq: z,
		home: B,
		pricing: V,
		products: H,
		route: U,
		settings: W,
		shared: ue,
		team: de
	},
	pt: {
		about: fe,
		blog: pe,
		careers: me,
		contact: he,
		faq: ge,
		home: _e,
		pricing: ve,
		products: ye,
		route: be,
		settings: xe,
		shared: Se,
		team: Ce
	},
	zh: {
		about: we,
		blog: Te,
		careers: Ee,
		contact: De,
		faq: Oe,
		home: ke,
		pricing: Ae,
		products: je,
		route: Me,
		settings: Ne,
		shared: Pe,
		team: Fe
	},
	ja: {
		about: Ie,
		blog: Le,
		careers: Re,
		contact: ze,
		faq: Be,
		home: Ve,
		pricing: He,
		products: Ue,
		route: We,
		settings: Ge,
		shared: Ke,
		team: qe
	},
	ko: {
		about: Je,
		blog: Ye,
		careers: Xe,
		contact: Ze,
		faq: Qe,
		home: $e,
		pricing: et,
		products: tt,
		route: nt,
		settings: rt,
		shared: it,
		team: at
	},
	ru: {
		about: ot,
		blog: st,
		careers: ct,
		contact: lt,
		faq: ut,
		home: dt,
		pricing: ft,
		products: pt,
		route: mt,
		settings: ht,
		shared: gt,
		team: _t
	}
};
function tn(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		let e = n.split("."), i = t;
		for (let t = 0; t < e.length - 1; t++) {
			let n = e[t], r = i[n];
			(typeof r != "object" || !r || Array.isArray(r)) && (i[n] = {}), i = i[n];
		}
		i[e[e.length - 1]] = r;
	}
	return t;
}
function $(e, t) {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		typeof r == "object" && r && !Array.isArray(r) && typeof t == "object" && t && !Array.isArray(t) ? n[e] = $(t, r) : n[e] = r;
	}
	return n;
}
function nn(e) {
	return e.reduce((e, t) => $(e, t), {});
}
function rn(e, t) {
	let n = Q[e] ?? Q.en, r = new Set(t);
	r.add("shared");
	let i = [];
	for (let e of r) {
		let t = n[e];
		t && i.push(tn(t));
	}
	return nn(i);
}
function an(e) {
	return rn(e, en);
}
var on = an("en"), sn = "en";
function cn({ children: e }) {
	return c(Ht, {
		locale: sn,
		messages: on,
		children: e
	});
}
function ln() {
	return c(cn, { children: c(bt, {}) });
}
export { ln as default };

import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "../messages/fr/about.json";
import i from "../messages/fr/blog.json";
import a from "../messages/fr/careers.json";
import o from "../messages/fr/contact.json";
import s from "../messages/fr/faq.json";
import c from "../messages/fr/home.json";
import l from "../messages/fr/pricing.json";
import u from "../messages/fr/products.json";
import d from "../messages/fr/route.json";
import f from "../messages/fr/settings.json";
import p from "../messages/fr/shared.json";
import m from "../messages/fr/team.json";
import h from "../messages/es/about.json";
import g from "../messages/es/blog.json";
import _ from "../messages/es/careers.json";
import v from "../messages/es/contact.json";
import y from "../messages/es/faq.json";
import b from "../messages/es/home.json";
import x from "../messages/es/pricing.json";
import S from "../messages/es/products.json";
import C from "../messages/es/route.json";
import w from "../messages/es/settings.json";
import T from "../messages/es/shared.json";
import E from "../messages/es/team.json";
import D from "../messages/de/about.json";
import O from "../messages/de/blog.json";
import k from "../messages/de/careers.json";
import A from "../messages/de/contact.json";
import j from "../messages/de/faq.json";
import M from "../messages/de/home.json";
import N from "../messages/de/pricing.json";
import P from "../messages/de/products.json";
import F from "../messages/de/route.json";
import I from "../messages/de/settings.json";
import L from "../messages/de/shared.json";
import R from "../messages/de/team.json";
import z from "../messages/it/about.json";
import ee from "../messages/it/blog.json";
import te from "../messages/it/careers.json";
import ne from "../messages/it/contact.json";
import re from "../messages/it/faq.json";
import ie from "../messages/it/home.json";
import ae from "../messages/it/pricing.json";
import oe from "../messages/it/products.json";
import se from "../messages/it/route.json";
import ce from "../messages/it/settings.json";
import B from "../messages/it/shared.json";
import V from "../messages/it/team.json";
import H from "../messages/pt/about.json";
import U from "../messages/pt/blog.json";
import W from "../messages/pt/careers.json";
import G from "../messages/pt/contact.json";
import le from "../messages/pt/faq.json";
import ue from "../messages/pt/home.json";
import de from "../messages/pt/pricing.json";
import fe from "../messages/pt/products.json";
import pe from "../messages/pt/route.json";
import me from "../messages/pt/settings.json";
import he from "../messages/pt/shared.json";
import ge from "../messages/pt/team.json";
import _e from "../messages/zh/about.json";
import ve from "../messages/zh/blog.json";
import ye from "../messages/zh/careers.json";
import be from "../messages/zh/contact.json";
import xe from "../messages/zh/faq.json";
import Se from "../messages/zh/home.json";
import Ce from "../messages/zh/pricing.json";
import we from "../messages/zh/products.json";
import Te from "../messages/zh/route.json";
import Ee from "../messages/zh/settings.json";
import De from "../messages/zh/shared.json";
import Oe from "../messages/zh/team.json";
import ke from "../messages/ja/about.json";
import Ae from "../messages/ja/blog.json";
import je from "../messages/ja/careers.json";
import Me from "../messages/ja/contact.json";
import Ne from "../messages/ja/faq.json";
import Pe from "../messages/ja/home.json";
import Fe from "../messages/ja/pricing.json";
import Ie from "../messages/ja/products.json";
import Le from "../messages/ja/route.json";
import Re from "../messages/ja/settings.json";
import ze from "../messages/ja/shared.json";
import Be from "../messages/ja/team.json";
import Ve from "../messages/ko/about.json";
import He from "../messages/ko/blog.json";
import Ue from "../messages/ko/careers.json";
import We from "../messages/ko/contact.json";
import Ge from "../messages/ko/faq.json";
import Ke from "../messages/ko/home.json";
import qe from "../messages/ko/pricing.json";
import Je from "../messages/ko/products.json";
import Ye from "../messages/ko/route.json";
import Xe from "../messages/ko/settings.json";
import Ze from "../messages/ko/shared.json";
import Qe from "../messages/ko/team.json";
import $e from "../messages/ru/about.json";
import et from "../messages/ru/blog.json";
import tt from "../messages/ru/careers.json";
import nt from "../messages/ru/contact.json";
import rt from "../messages/ru/faq.json";
import it from "../messages/ru/home.json";
import at from "../messages/ru/pricing.json";
import ot from "../messages/ru/products.json";
import st from "../messages/ru/route.json";
import ct from "../messages/ru/settings.json";
import lt from "../messages/ru/shared.json";
import ut from "../messages/ru/team.json";
import { jsx as K } from "react/jsx-runtime";
var q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), J = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), dt = q((() => {})), ft = q(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols, s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable, u = (e, t, n) => t in e ? r(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n, d = (e, t) => {
		for (var n in t ||= {}) c.call(t, n) && u(e, n, t[n]);
		if (o) for (var n of o(t)) l.call(t, n) && u(e, n, t[n]);
		return e;
	}, f = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, p = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (let s of a(t)) !c.call(e, s) && s !== n && r(e, s, {
			get: () => t[s],
			enumerable: !(o = i(t, s)) || o.enumerable
		});
		return e;
	}, m = (e, t, i) => (i = e == null ? {} : n(s(e)), p(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), h = (e) => p(r({}, "__esModule", { value: !0 }), e), g = {};
	f(g, { createI18nClient: () => z }), t.exports = h(g), dt();
	var _ = J("next/navigation"), v = m(J("react")), y = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => d(d({}, e), typeof r == "string" ? { [t + n]: r } : y(r, `${t}${n}.`)), {});
	function b(e, t) {
		return process.env.NODE_ENV !== "production" && console[e](`[next-international] ${t}`), null;
	}
	var x = (e) => b("warn", e), S = (e) => b("error", e), C = /* @__PURE__ */ new Map();
	function w(e, t, n) {
		function r({ locale: t, importLocale: r, children: i }) {
			let a = C.get(t) ?? (0, v.use)(r).default;
			C.has(t) || C.set(t, a);
			let o = (0, v.useMemo)(() => ({
				localeContent: y(a),
				fallbackLocale: n ? y(n) : void 0,
				locale: t
			}), [a, t]);
			return v.default.createElement(e.Provider, { value: o }, i);
		}
		return function({ locale: e, fallback: n, children: i }) {
			let a = t[e];
			return a || (S(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`), (0, _.notFound)()), v.default.createElement(v.Suspense, { fallback: n }, v.default.createElement(r, {
				locale: e,
				importLocale: a()
			}, i));
		};
	}
	var T = J("react"), E = J("react"), D = J("react");
	function O(e, t) {
		let { localeContent: n, fallbackLocale: r } = e, i = r && typeof n == "string" ? r : Object.assign(r ?? {}, n), a = new Set(Object.keys(i).filter((e) => e.includes("#")).map((e) => e.split("#", 1)[0])), o = new Intl.PluralRules(e.locale);
		function s(e) {
			return e === 0 ? "zero" : o.select(e);
		}
		function c(e, ...n) {
			let r = n[0], o = !1;
			r && "count" in r && (t ? a.has(`${t}.${e}`) : a.has(e)) && (e = `${e}#${s(r.count)}`, o = !0);
			let c = t ? i[`${t}.${e}`] : i[e];
			if (c = !c && o ? (i[`${e.split("#", 1)[0]}#other`] || e)?.toString() : (c || e)?.toString(), !r) return c;
			let l = !0, u = c?.split(/({[^}]*})/).map((e, t) => {
				let n = e.match(/{(.*)}/);
				if (n) {
					let e = n[1], i = r[e];
					return (0, D.isValidElement)(i) ? (l = !1, (0, D.cloneElement)(i, { key: `${String(e)}-${t}` })) : i;
				}
				return e;
			});
			return l ? u?.join("") : u;
		}
		return c;
	}
	function k(e) {
		return function() {
			let t = (0, E.useContext)(e);
			if (!t) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, E.useMemo)(() => O(t, void 0), [t]);
		};
	}
	var A = J("react");
	function j(e) {
		return function(t) {
			let n = (0, A.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, A.useMemo)(() => O(n, t), [n, t]);
		};
	}
	var M = J("next/navigation");
	function N(e, t, n) {
		return function(r) {
			let { push: i, refresh: a } = (0, M.useRouter)(), o = e(), s = (0, M.usePathname)(), c = r?.preserveSearchParams ? (0, M.useSearchParams)().toString() : void 0, l = c ? `?${c}` : "", u = s;
			return n.basePath && (u = u.replace(n.basePath, "")), u.startsWith(`/${o}/`) ? u = u.replace(`/${o}/`, "/") : u === `/${o}` && (u = "/"), function(e) {
				if (e === o) return;
				let n = t[e];
				if (!n) {
					x(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`);
					return;
				}
				n().then((t) => {
					C.set(e, t.default), i(`/${e}${u}${l}`), a();
				});
			};
		};
	}
	function P() {
		return function(e) {
			return e;
		};
	}
	var F = J("next/navigation"), I = J("react"), L = "locale";
	function R(e, t) {
		return function() {
			let n = (0, F.useParams)()[t.segmentName ?? L];
			return (0, I.useMemo)(() => {
				for (let t of e) if (n === t) return t;
				S(`Locale "${n}" not found in locales (${e.join(", ")}), returning "notFound()"`), (0, F.notFound)();
			}, [n]);
		};
	}
	function z(e, t = {}) {
		let n = Object.keys(e), r = (0, T.createContext)(null), i = R(n, t), a = w(r, e, t.fallbackLocale);
		return {
			useI18n: k(r),
			useScopedI18n: j(r),
			I18nProviderClient: a,
			I18nClientContext: r,
			useChangeLocale: N(i, e, t),
			defineLocale: P(),
			useCurrentLocale: i
		};
	}
}))(), pt = {
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
}, mt = {
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
}, ht = {
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
}, gt = {
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
}, _t = {
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
}, vt = {
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
}, yt = {
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
}, bt = {
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
}, xt = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
}, St = {
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
}, Ct = {
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
}, wt = {
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
}, Tt = [
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
], Y = {
	en: {
		about: pt,
		blog: mt,
		careers: ht,
		contact: gt,
		faq: _t,
		home: vt,
		pricing: yt,
		products: bt,
		route: xt,
		settings: St,
		shared: Ct,
		team: wt
	},
	fr: {
		about: r,
		blog: i,
		careers: a,
		contact: o,
		faq: s,
		home: c,
		pricing: l,
		products: u,
		route: d,
		settings: f,
		shared: p,
		team: m
	},
	es: {
		about: h,
		blog: g,
		careers: _,
		contact: v,
		faq: y,
		home: b,
		pricing: x,
		products: S,
		route: C,
		settings: w,
		shared: T,
		team: E
	},
	de: {
		about: D,
		blog: O,
		careers: k,
		contact: A,
		faq: j,
		home: M,
		pricing: N,
		products: P,
		route: F,
		settings: I,
		shared: L,
		team: R
	},
	it: {
		about: z,
		blog: ee,
		careers: te,
		contact: ne,
		faq: re,
		home: ie,
		pricing: ae,
		products: oe,
		route: se,
		settings: ce,
		shared: B,
		team: V
	},
	pt: {
		about: H,
		blog: U,
		careers: W,
		contact: G,
		faq: le,
		home: ue,
		pricing: de,
		products: fe,
		route: pe,
		settings: me,
		shared: he,
		team: ge
	},
	zh: {
		about: _e,
		blog: ve,
		careers: ye,
		contact: be,
		faq: xe,
		home: Se,
		pricing: Ce,
		products: we,
		route: Te,
		settings: Ee,
		shared: De,
		team: Oe
	},
	ja: {
		about: ke,
		blog: Ae,
		careers: je,
		contact: Me,
		faq: Ne,
		home: Pe,
		pricing: Fe,
		products: Ie,
		route: Le,
		settings: Re,
		shared: ze,
		team: Be
	},
	ko: {
		about: Ve,
		blog: He,
		careers: Ue,
		contact: We,
		faq: Ge,
		home: Ke,
		pricing: qe,
		products: Je,
		route: Ye,
		settings: Xe,
		shared: Ze,
		team: Qe
	},
	ru: {
		about: $e,
		blog: et,
		careers: tt,
		contact: nt,
		faq: rt,
		home: it,
		pricing: at,
		products: ot,
		route: st,
		settings: ct,
		shared: lt,
		team: ut
	}
};
function Et(e) {
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
function X(e, t) {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		typeof r == "object" && r && !Array.isArray(r) && typeof t == "object" && t && !Array.isArray(t) ? n[e] = X(t, r) : n[e] = r;
	}
	return n;
}
function Dt(e) {
	return e.reduce((e, t) => X(e, t), {});
}
function Ot(e, t) {
	let n = Y[e] ?? Y.en, r = new Set(t);
	r.add("shared");
	let i = [];
	for (let e of r) {
		let t = n[e];
		t && i.push(Et(t));
	}
	return Dt(i);
}
function Z(e) {
	return Ot(e, Tt);
}
var kt = Z("de"), At = Z("en"), jt = Z("es"), Mt = Z("fr"), Nt = Z("it"), Pt = Z("ja"), Q = Z("ko"), Ft = Z("pt"), It = Z("ru"), Lt = Z("zh"), $ = (0, ft.createI18nClient)({
	en: () => Promise.resolve({ default: At }),
	fr: () => Promise.resolve({ default: Mt }),
	es: () => Promise.resolve({ default: jt }),
	de: () => Promise.resolve({ default: kt }),
	it: () => Promise.resolve({ default: Nt }),
	pt: () => Promise.resolve({ default: Ft }),
	zh: () => Promise.resolve({ default: Lt }),
	ja: () => Promise.resolve({ default: Pt }),
	ko: () => Promise.resolve({ default: Q }),
	ru: () => Promise.resolve({ default: It })
}), Rt = $.useScopedI18n, { I18nProviderClient: zt, useChangeLocale: Bt, useCurrentLocale: Vt } = $, Ht = () => K("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: Rt("mock-banner")("mockBanner")
});
function Ut() {
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
function Wt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Gt({ children: r, locale: i }) {
	let [a] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Wt("AppRoot", a);
	}, [a]), e(() => {
		document.documentElement.lang = i;
	}, [i]), e(() => {
		Ut();
	}, []), K(zt, {
		locale: i,
		children: r
	});
}
var Kt = "en";
function qt({ children: e }) {
	return K(Gt, {
		locale: Kt,
		children: e
	});
}
function Jt() {
	return K(qt, { children: K(Ht, {}) });
}
export { Jt as default };

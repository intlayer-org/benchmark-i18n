import { Profiler as e, useEffect as t, useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var a = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), o = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), s = a((() => {})), c = (0, a(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable, f = (e, t, n) => t in e ? r(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n, p = (e, t) => {
		for (var n in t ||= {}) u.call(t, n) && f(e, n, t[n]);
		if (c) for (var n of c(t)) d.call(t, n) && f(e, n, t[n]);
		return e;
	}, m = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, h = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (let s of a(t)) !u.call(e, s) && s !== n && r(e, s, {
			get: () => t[s],
			enumerable: !(o = i(t, s)) || o.enumerable
		});
		return e;
	}, g = (e, t, i) => (i = e == null ? {} : n(l(e)), h(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), _ = (e) => h(r({}, "__esModule", { value: !0 }), e), v = {};
	m(v, { createI18nClient: () => V }), t.exports = _(v), s();
	var y = o("next/navigation"), b = g(o("react")), x = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => p(p({}, e), typeof r == "string" ? { [t + n]: r } : x(r, `${t}${n}.`)), {});
	function S(e, t) {
		return process.env.NODE_ENV !== "production" && console[e](`[next-international] ${t}`), null;
	}
	var C = (e) => S("warn", e), w = (e) => S("error", e), T = /* @__PURE__ */ new Map();
	function E(e, t, n) {
		function r({ locale: t, importLocale: r, children: i }) {
			let a = T.get(t) ?? (0, b.use)(r).default;
			T.has(t) || T.set(t, a);
			let o = (0, b.useMemo)(() => ({
				localeContent: x(a),
				fallbackLocale: n ? x(n) : void 0,
				locale: t
			}), [a, t]);
			return b.default.createElement(e.Provider, { value: o }, i);
		}
		return function({ locale: e, fallback: n, children: i }) {
			let a = t[e];
			return a || (w(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`), (0, y.notFound)()), b.default.createElement(b.Suspense, { fallback: n }, b.default.createElement(r, {
				locale: e,
				importLocale: a()
			}, i));
		};
	}
	var D = o("react"), O = o("react"), k = o("react");
	function A(e, t) {
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
					return (0, k.isValidElement)(i) ? (l = !1, (0, k.cloneElement)(i, { key: `${String(e)}-${t}` })) : i;
				}
				return e;
			});
			return l ? u?.join("") : u;
		}
		return c;
	}
	function j(e) {
		return function() {
			let t = (0, O.useContext)(e);
			if (!t) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, O.useMemo)(() => A(t, void 0), [t]);
		};
	}
	var M = o("react");
	function N(e) {
		return function(t) {
			let n = (0, M.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, M.useMemo)(() => A(n, t), [n, t]);
		};
	}
	var P = o("next/navigation");
	function F(e, t, n) {
		return function(r) {
			let { push: i, refresh: a } = (0, P.useRouter)(), o = e(), s = (0, P.usePathname)(), c = r?.preserveSearchParams ? (0, P.useSearchParams)().toString() : void 0, l = c ? `?${c}` : "", u = s;
			return n.basePath && (u = u.replace(n.basePath, "")), u.startsWith(`/${o}/`) ? u = u.replace(`/${o}/`, "/") : u === `/${o}` && (u = "/"), function(e) {
				if (e === o) return;
				let n = t[e];
				if (!n) {
					C(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`);
					return;
				}
				n().then((t) => {
					T.set(e, t.default), i(`/${e}${u}${l}`), a();
				});
			};
		};
	}
	function I() {
		return function(e) {
			return e;
		};
	}
	var L = o("next/navigation"), R = o("react"), z = "locale";
	function B(e, t) {
		return function() {
			let n = (0, L.useParams)()[t.segmentName ?? z];
			return (0, R.useMemo)(() => {
				for (let t of e) if (n === t) return t;
				w(`Locale "${n}" not found in locales (${e.join(", ")}), returning "notFound()"`), (0, L.notFound)();
			}, [n]);
		};
	}
	function V(e, t = {}) {
		let n = Object.keys(e), r = (0, D.createContext)(null), i = B(n, t), a = E(r, e, t.fallbackLocale);
		return {
			useI18n: j(r),
			useScopedI18n: N(r),
			I18nProviderClient: a,
			I18nClientContext: r,
			useChangeLocale: F(i, e, t),
			defineLocale: I(),
			useCurrentLocale: i
		};
	}
}))().createI18nClient)({
	en: () => import("./en-B5l3qKNS.js"),
	fr: () => import("./fr-Dt-xEtEP.js"),
	es: () => import("./es-BnpFJUxp.js"),
	de: () => import("./de-BKGR6k8Y.js"),
	it: () => import("./it-Cobr8ttO.js"),
	pt: () => import("./pt-CUG2R9Oe.js"),
	zh: () => import("./zh-BLRd-5d2.js"),
	ja: () => import("./ja-CkfA6R39.js"),
	ko: () => import("./ko-CLnz0Bab.js"),
	ru: () => import("./ru-FkO67x1E.js")
}), l = c.useScopedI18n, { I18nProviderClient: u, useChangeLocale: d, useCurrentLocale: f } = c;
//#endregion
//#region components/pages/contact/ContactForm.tsx
function p() {
	let e = l("contact-form"), t = n(), a = n(), o = n(), s = n();
	return i("form", {
		className: "space-y-6",
		children: [
			i("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [i("div", { children: [r("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e("name")
				}), r("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("yourName")
				})] }), i("div", { children: [r("label", {
					htmlFor: a,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e("email")
				}), r("input", {
					id: a,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("emailPlaceholder")
				})] })]
			}),
			i("div", { children: [r("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("topic")
			}), i("select", {
				id: o,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					r("option", { children: e("bugReport") }),
					r("option", { children: e("newBenchmarkIdea") }),
					r("option", { children: e("methodologyQuestion") }),
					r("option", { children: e("contribution") }),
					r("option", { children: e("other") })
				]
			})] }),
			i("div", { children: [r("label", {
				htmlFor: s,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("message")
			}), r("textarea", {
				id: s,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e("describeYourQuestionOrIdea")
			})] }),
			r("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("sendMessage")
			})
		]
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function m() {
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
function h(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function g({ children: n, locale: i }) {
	return t(() => {
		document.documentElement.lang = i;
	}, [i]), t(() => {
		m();
	}, []), r(e, {
		id: "AppRoot",
		onRender: h,
		children: r(u, {
			locale: i,
			children: n
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
var _ = "en";
function v({ children: e }) {
	return r(g, {
		locale: _,
		children: e
	});
}
//#endregion
//#region components/pages/contact/ContactForm.wrapper.tsx
function y() {
	return r(v, { children: r(p, {}) });
}
//#endregion
export { y as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/de/about.json";
import r from "../../../messages/de/blog.json";
import i from "../../../messages/de/careers.json";
import a from "../../../messages/de/contact.json";
import o from "../../../messages/de/faq.json";
import s from "../../../messages/de/home.json";
import c from "../../../messages/de/pricing.json";
import l from "../../../messages/de/products.json";
import u from "../../../messages/de/route.json";
import d from "../../../messages/de/settings.json";
import f from "../../../messages/de/shared.json";
import p from "../../../messages/de/team.json";
//#region locales/de.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
//#endregion
//#region locales/en.ts
var n = t([
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	}),
	e({
		"route.oopsPageNotFound": "Oops! Page not found",
		"route.returnToHome": "Return to Home",
		"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
	}),
	e({
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
	}),
	e({
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
	}),
	e({
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
	})
]);
//#endregion
export { n as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/es/about.json";
import r from "../../../messages/es/blog.json";
import i from "../../../messages/es/careers.json";
import a from "../../../messages/es/contact.json";
import o from "../../../messages/es/faq.json";
import s from "../../../messages/es/home.json";
import c from "../../../messages/es/pricing.json";
import l from "../../../messages/es/products.json";
import u from "../../../messages/es/route.json";
import d from "../../../messages/es/settings.json";
import f from "../../../messages/es/shared.json";
import p from "../../../messages/es/team.json";
//#region locales/es.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/fr/about.json";
import r from "../../../messages/fr/blog.json";
import i from "../../../messages/fr/careers.json";
import a from "../../../messages/fr/contact.json";
import o from "../../../messages/fr/faq.json";
import s from "../../../messages/fr/home.json";
import c from "../../../messages/fr/pricing.json";
import l from "../../../messages/fr/products.json";
import u from "../../../messages/fr/route.json";
import d from "../../../messages/fr/settings.json";
import f from "../../../messages/fr/shared.json";
import p from "../../../messages/fr/team.json";
//#region locales/fr.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/it/about.json";
import r from "../../../messages/it/blog.json";
import i from "../../../messages/it/careers.json";
import a from "../../../messages/it/contact.json";
import o from "../../../messages/it/faq.json";
import s from "../../../messages/it/home.json";
import c from "../../../messages/it/pricing.json";
import l from "../../../messages/it/products.json";
import u from "../../../messages/it/route.json";
import d from "../../../messages/it/settings.json";
import f from "../../../messages/it/shared.json";
import p from "../../../messages/it/team.json";
//#region locales/it.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/ja/about.json";
import r from "../../../messages/ja/blog.json";
import i from "../../../messages/ja/careers.json";
import a from "../../../messages/ja/contact.json";
import o from "../../../messages/ja/faq.json";
import s from "../../../messages/ja/home.json";
import c from "../../../messages/ja/pricing.json";
import l from "../../../messages/ja/products.json";
import u from "../../../messages/ja/route.json";
import d from "../../../messages/ja/settings.json";
import f from "../../../messages/ja/shared.json";
import p from "../../../messages/ja/team.json";
//#region locales/ja.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/ko/about.json";
import r from "../../../messages/ko/blog.json";
import i from "../../../messages/ko/careers.json";
import a from "../../../messages/ko/contact.json";
import o from "../../../messages/ko/faq.json";
import s from "../../../messages/ko/home.json";
import c from "../../../messages/ko/pricing.json";
import l from "../../../messages/ko/products.json";
import u from "../../../messages/ko/route.json";
import d from "../../../messages/ko/settings.json";
import f from "../../../messages/ko/shared.json";
import p from "../../../messages/ko/team.json";
//#region locales/ko.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/pt/about.json";
import r from "../../../messages/pt/blog.json";
import i from "../../../messages/pt/careers.json";
import a from "../../../messages/pt/contact.json";
import o from "../../../messages/pt/faq.json";
import s from "../../../messages/pt/home.json";
import c from "../../../messages/pt/pricing.json";
import l from "../../../messages/pt/products.json";
import u from "../../../messages/pt/route.json";
import d from "../../../messages/pt/settings.json";
import f from "../../../messages/pt/shared.json";
import p from "../../../messages/pt/team.json";
//#region locales/pt.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/ru/about.json";
import r from "../../../messages/ru/blog.json";
import i from "../../../messages/ru/careers.json";
import a from "../../../messages/ru/contact.json";
import o from "../../../messages/ru/faq.json";
import s from "../../../messages/ru/home.json";
import c from "../../../messages/ru/pricing.json";
import l from "../../../messages/ru/products.json";
import u from "../../../messages/ru/route.json";
import d from "../../../messages/ru/settings.json";
import f from "../../../messages/ru/shared.json";
import p from "../../../messages/ru/team.json";
//#region locales/ru.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };
//#region i18n/scopedMessages.ts
function e(e) {
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
function t(e, n) {
	let r = { ...e };
	for (let [e, i] of Object.entries(n)) {
		let n = r[e];
		typeof i == "object" && i && !Array.isArray(i) && typeof n == "object" && n && !Array.isArray(n) ? r[e] = t(n, i) : r[e] = i;
	}
	return r;
}
function n(e) {
	return e.reduce((e, n) => t(e, n), {});
}
//#endregion
export { e as n, n as t };
import { n as e, t } from "./scopedMessages-CXIoNocY.js";
import n from "../../../messages/zh/about.json";
import r from "../../../messages/zh/blog.json";
import i from "../../../messages/zh/careers.json";
import a from "../../../messages/zh/contact.json";
import o from "../../../messages/zh/faq.json";
import s from "../../../messages/zh/home.json";
import c from "../../../messages/zh/pricing.json";
import l from "../../../messages/zh/products.json";
import u from "../../../messages/zh/route.json";
import d from "../../../messages/zh/settings.json";
import f from "../../../messages/zh/shared.json";
import p from "../../../messages/zh/team.json";
//#region locales/zh.ts
var m = t([
	e(n),
	e(r),
	e(i),
	e(a),
	e(o),
	e(s),
	e(c),
	e(l),
	e(u),
	e(d),
	e(f),
	e(p)
]);
//#endregion
export { m as default };

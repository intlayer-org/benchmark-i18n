import e, { createContext as t, useContext as n, useEffect as r, useId as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { useRouter as d } from "next/router";
import f from "../../../locales/fr/about.json";
import p from "../../../locales/fr/blog.json";
import m from "../../../locales/fr/careers.json";
import h from "../../../locales/fr/contact.json";
import g from "../../../locales/fr/faq.json";
import _ from "../../../locales/fr/home.json";
import v from "../../../locales/fr/pricing.json";
import y from "../../../locales/fr/products.json";
import b from "../../../locales/fr/route.json";
import x from "../../../locales/fr/settings.json";
import S from "../../../locales/fr/shared.json";
import C from "../../../locales/fr/team.json";
import w from "../../../locales/es/about.json";
import T from "../../../locales/es/blog.json";
import ee from "../../../locales/es/careers.json";
import te from "../../../locales/es/contact.json";
import ne from "../../../locales/es/faq.json";
import re from "../../../locales/es/home.json";
import ie from "../../../locales/es/pricing.json";
import ae from "../../../locales/es/products.json";
import oe from "../../../locales/es/route.json";
import se from "../../../locales/es/settings.json";
import ce from "../../../locales/es/shared.json";
import le from "../../../locales/es/team.json";
import ue from "../../../locales/de/about.json";
import de from "../../../locales/de/blog.json";
import fe from "../../../locales/de/careers.json";
import pe from "../../../locales/de/contact.json";
import me from "../../../locales/de/faq.json";
import he from "../../../locales/de/home.json";
import ge from "../../../locales/de/pricing.json";
import _e from "../../../locales/de/products.json";
import E from "../../../locales/de/route.json";
import D from "../../../locales/de/settings.json";
import O from "../../../locales/de/shared.json";
import k from "../../../locales/de/team.json";
import A from "../../../locales/it/about.json";
import j from "../../../locales/it/blog.json";
import M from "../../../locales/it/careers.json";
import N from "../../../locales/it/contact.json";
import P from "../../../locales/it/faq.json";
import F from "../../../locales/it/home.json";
import I from "../../../locales/it/pricing.json";
import ve from "../../../locales/it/products.json";
import ye from "../../../locales/it/route.json";
import be from "../../../locales/it/settings.json";
import xe from "../../../locales/it/shared.json";
import Se from "../../../locales/it/team.json";
import Ce from "../../../locales/pt/about.json";
import we from "../../../locales/pt/blog.json";
import Te from "../../../locales/pt/careers.json";
import Ee from "../../../locales/pt/contact.json";
import De from "../../../locales/pt/faq.json";
import Oe from "../../../locales/pt/home.json";
import ke from "../../../locales/pt/pricing.json";
import Ae from "../../../locales/pt/products.json";
import je from "../../../locales/pt/route.json";
import Me from "../../../locales/pt/settings.json";
import Ne from "../../../locales/pt/shared.json";
import Pe from "../../../locales/pt/team.json";
import Fe from "../../../locales/zh/about.json";
import Ie from "../../../locales/zh/blog.json";
import Le from "../../../locales/zh/careers.json";
import Re from "../../../locales/zh/contact.json";
import ze from "../../../locales/zh/faq.json";
import Be from "../../../locales/zh/home.json";
import Ve from "../../../locales/zh/pricing.json";
import He from "../../../locales/zh/products.json";
import Ue from "../../../locales/zh/route.json";
import We from "../../../locales/zh/settings.json";
import Ge from "../../../locales/zh/shared.json";
import Ke from "../../../locales/zh/team.json";
import qe from "../../../locales/ja/about.json";
import Je from "../../../locales/ja/blog.json";
import Ye from "../../../locales/ja/careers.json";
import Xe from "../../../locales/ja/contact.json";
import Ze from "../../../locales/ja/faq.json";
import Qe from "../../../locales/ja/home.json";
import $e from "../../../locales/ja/pricing.json";
import et from "../../../locales/ja/products.json";
import tt from "../../../locales/ja/route.json";
import nt from "../../../locales/ja/settings.json";
import rt from "../../../locales/ja/shared.json";
import it from "../../../locales/ja/team.json";
import at from "../../../locales/ko/about.json";
import ot from "../../../locales/ko/blog.json";
import st from "../../../locales/ko/careers.json";
import ct from "../../../locales/ko/contact.json";
import lt from "../../../locales/ko/faq.json";
import ut from "../../../locales/ko/home.json";
import dt from "../../../locales/ko/pricing.json";
import ft from "../../../locales/ko/products.json";
import pt from "../../../locales/ko/route.json";
import mt from "../../../locales/ko/settings.json";
import ht from "../../../locales/ko/shared.json";
import gt from "../../../locales/ko/team.json";
import _t from "../../../locales/ru/about.json";
import vt from "../../../locales/ru/blog.json";
import yt from "../../../locales/ru/careers.json";
import bt from "../../../locales/ru/contact.json";
import xt from "../../../locales/ru/faq.json";
import St from "../../../locales/ru/home.json";
import Ct from "../../../locales/ru/pricing.json";
import wt from "../../../locales/ru/products.json";
import Tt from "../../../locales/ru/route.json";
import Et from "../../../locales/ru/settings.json";
import Dt from "../../../locales/ru/shared.json";
import Ot from "../../../locales/ru/team.json";
var L = function() {
	return L = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, L.apply(this, arguments);
};
function R(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, L({ ns: t }, i));
	} : e;
}
var z;
typeof e.createContext == "function" && (z = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var B = z;
function kt() {
	return typeof window > "u";
}
function V(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var H = function() {
	return H = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, H.apply(this, arguments);
};
function At(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function U(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? Mt : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? K({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : G({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = At(s, f), g = h.i18nKey, _ = h.namespace, v = _ === void 0 ? a?.ns ?? t.defaultNS : _, y = v && n[v] || {}, b = W(y, jt(r, y, g, t, i, a), t, a), x = typeof b == "object" ? JSON.parse(JSON.stringify(b)) : b, S = x === void 0 || typeof x == "object" && !Object.keys(x).length || x === "" && !c, C = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (S && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: v,
			i18nKey: g
		}), S && Array.isArray(C) && C.length) {
			var w = C[0], T = C.slice(1);
			if (typeof w == "string") return u(w, i, H(H({}, a), { fallback: T }));
		}
		return S && a && a.hasOwnProperty("default") && !C?.length ? a.default ? l(a.default, i) : a.default : S ? s : l(x, i);
	};
	return u;
}
function W(e, t, n, r) {
	t === void 0 && (t = ""), r === void 0 && (r = { returnObjects: !1 });
	var i = (n || {}).keySeparator, a = i === void 0 ? "." : i, o = a ? t.split(a) : [t];
	if (t === a && r.returnObjects) return e;
	var s = o.reduce(function(e, t) {
		if (typeof e == "string") return {};
		var n = e[t];
		return n || (typeof n == "string" ? n : {});
	}, e);
	if (typeof s == "string" || s instanceof Object && r.returnObjects && Object.keys(s).length > 0 || Array.isArray(s) && r.returnObjects) return s;
}
function jt(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (W(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (W(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (W(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return W(t, l, r, a) === void 0 ? n : l;
}
function G(e) {
	var t = e.text, n = e.query, r = e.config, i = e.lang;
	if (!t || !n) return t || "";
	var a = function(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	}, o = r.interpolation || {}, s = o.format, c = s === void 0 ? null : s, l = o.prefix, u = l === void 0 ? "{{" : l, d = o.suffix, f = d === void 0 ? "}}" : d, p = f === "" ? "" : `(?:[\\s,]+([\\w-]*))?\\s*${a(f)}`;
	return Object.keys(n).reduce(function(e, t) {
		var r = RegExp(`${a(u)}\\s*${t}${p}`, "gm");
		return e.replace(r, function(e, r) {
			return r && c ? c(n[t], r, i) : n[t];
		});
	}, t);
}
function K(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && K({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = G({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function Mt(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function Nt(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, a = i.localesToIgnore || ["default"], s = !n || a.includes(n), c = function() {
		return R(U({
			config: i,
			allNamespaces: r,
			pluralRules: V(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: kt() ? c() : o(c, [e, n]),
		lang: n
	};
}
var q = function() {
	return q = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, q.apply(this, arguments);
};
function Pt(e) {
	var t = n(B);
	return o(function() {
		return q(q({}, t), { t: R(t.t, e) });
	}, [t, e]);
}
function J(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? Nt : Pt)(e);
}
function Ft() {
	let { t: e } = J("common"), t = i(), n = i();
	return u("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [l("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e("settings.profileSection.profile")
		}), u("div", {
			className: "space-y-4",
			children: [u("div", { children: [l("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("settings.profileSection.displayName")
			}), l("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), u("div", { children: [l("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("settings.profileSection.email")
			}), l("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
var Y = function() {
	return Y = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Y.apply(this, arguments);
}, X = t({
	ns: {},
	config: {}
});
function It(t) {
	var r = t.lang, i = t.namespaces, a = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, u = J().lang, f = d() || {}, p = f.locale, m = f.defaultLocale, h = n(X), g = Y(Y(Y({}, Lt()), h.ns), a), _ = r || u || p || m || "", v = Y(Y({}, h.config), l), y = v.localesToIgnore || ["default"], b = !_ || y.includes(_), x = o(function() {
		return V(b ? void 0 : _);
	}, [b, _]), S = o(function() {
		return U({
			config: v,
			allNamespaces: g,
			pluralRules: x,
			lang: _
		});
	}, [
		v,
		g,
		x,
		_
	]);
	return e.createElement(B.Provider, { value: {
		lang: _,
		t: S
	} }, e.createElement(X.Provider, { value: {
		ns: g,
		config: v
	} }, s));
}
function Lt() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var Rt = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
}, zt = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
}, Bt = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.applyNow": "Apply Now"
}, Vt = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
}, Ht = {
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
}, Ut = {
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
}, Wt = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
}, Gt = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.benchmarkCLIPrice": "Free",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.benchmarkCloudPrice": "$29/mo",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.benchmarkEnterprisePrice": "Contact Us",
	"products.migrationAssistant": "Migration Assistant",
	"products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.migrationAssistantPrice": "$99 one-time",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.translationQAPrice": "$19/mo",
	"products.bundleOptimizer": "Bundle Optimizer",
	"products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.bundleOptimizerPrice": "$49/mo",
	"products.learnMore": "Learn More",
	"productsHeader.ourProducts": "Our Products",
	"productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps."
}, Kt = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
}, qt = {
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email"
}, Jt = {
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
	"mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light"
}, Z = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
function Q(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) n[e + "." + r] = i;
	return n;
}
var $ = {
	en: {
		...Q("about", Rt),
		...Q("blog", zt),
		...Q("careers", Bt),
		...Q("contact", Vt),
		...Q("faq", Ht),
		...Q("home", Ut),
		...Q("pricing", Wt),
		...Q("products", Gt),
		...Q("route", Kt),
		...Q("settings", qt),
		...Q("shared", Jt),
		...Q("team", Z)
	},
	fr: {
		...Q("about", f),
		...Q("blog", p),
		...Q("careers", m),
		...Q("contact", h),
		...Q("faq", g),
		...Q("home", _),
		...Q("pricing", v),
		...Q("products", y),
		...Q("route", b),
		...Q("settings", x),
		...Q("shared", S),
		...Q("team", C)
	},
	es: {
		...Q("about", w),
		...Q("blog", T),
		...Q("careers", ee),
		...Q("contact", te),
		...Q("faq", ne),
		...Q("home", re),
		...Q("pricing", ie),
		...Q("products", ae),
		...Q("route", oe),
		...Q("settings", se),
		...Q("shared", ce),
		...Q("team", le)
	},
	de: {
		...Q("about", ue),
		...Q("blog", de),
		...Q("careers", fe),
		...Q("contact", pe),
		...Q("faq", me),
		...Q("home", he),
		...Q("pricing", ge),
		...Q("products", _e),
		...Q("route", E),
		...Q("settings", D),
		...Q("shared", O),
		...Q("team", k)
	},
	it: {
		...Q("about", A),
		...Q("blog", j),
		...Q("careers", M),
		...Q("contact", N),
		...Q("faq", P),
		...Q("home", F),
		...Q("pricing", I),
		...Q("products", ve),
		...Q("route", ye),
		...Q("settings", be),
		...Q("shared", xe),
		...Q("team", Se)
	},
	pt: {
		...Q("about", Ce),
		...Q("blog", we),
		...Q("careers", Te),
		...Q("contact", Ee),
		...Q("faq", De),
		...Q("home", Oe),
		...Q("pricing", ke),
		...Q("products", Ae),
		...Q("route", je),
		...Q("settings", Me),
		...Q("shared", Ne),
		...Q("team", Pe)
	},
	zh: {
		...Q("about", Fe),
		...Q("blog", Ie),
		...Q("careers", Le),
		...Q("contact", Re),
		...Q("faq", ze),
		...Q("home", Be),
		...Q("pricing", Ve),
		...Q("products", He),
		...Q("route", Ue),
		...Q("settings", We),
		...Q("shared", Ge),
		...Q("team", Ke)
	},
	ja: {
		...Q("about", qe),
		...Q("blog", Je),
		...Q("careers", Ye),
		...Q("contact", Xe),
		...Q("faq", Ze),
		...Q("home", Qe),
		...Q("pricing", $e),
		...Q("products", et),
		...Q("route", tt),
		...Q("settings", nt),
		...Q("shared", rt),
		...Q("team", it)
	},
	ko: {
		...Q("about", at),
		...Q("blog", ot),
		...Q("careers", st),
		...Q("contact", ct),
		...Q("faq", lt),
		...Q("home", ut),
		...Q("pricing", dt),
		...Q("products", ft),
		...Q("route", pt),
		...Q("settings", mt),
		...Q("shared", ht),
		...Q("team", gt)
	},
	ru: {
		...Q("about", _t),
		...Q("blog", vt),
		...Q("careers", yt),
		...Q("contact", bt),
		...Q("faq", xt),
		...Q("home", St),
		...Q("pricing", Ct),
		...Q("products", wt),
		...Q("route", Tt),
		...Q("settings", Et),
		...Q("shared", Dt),
		...Q("team", Ot)
	}
}, Yt = {
	locales: [
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
	],
	defaultLocale: "en",
	keySeparator: !1,
	nsSeparator: !1,
	pages: { "*": ["common"] },
	loadLocaleFrom: async (e) => $[e ?? "en"] ?? $.en
};
function Xt() {
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
function Zt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Qt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Zt("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Xt();
	}, []), l(c, { children: e });
}
function $t({ children: e }) {
	let [t, n] = s({}), [i, a] = s(!1);
	return r(() => {
		(async () => {
			try {
				n(await Yt.loadLocaleFrom?.("en", "common") ?? {}), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? l(It, {
		lang: "en",
		namespaces: { common: t },
		children: l(Qt, {
			locale: "en",
			children: e
		})
	}) : null;
}
function en() {
	return l($t, { children: l(Ft, {}) });
}
export { en as default };

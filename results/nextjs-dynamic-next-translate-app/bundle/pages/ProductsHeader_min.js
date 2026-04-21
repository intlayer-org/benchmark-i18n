import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import { useRouter as u } from "next/router";
var d = function() {
	return d = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, d.apply(this, arguments);
};
function f(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, d({ ns: t }, i));
	} : e;
}
var p;
typeof e.createContext == "function" && (p = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var m = p;
function h() {
	return typeof window > "u";
}
function g(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var _ = function() {
	return _ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, _.apply(this, arguments);
};
function v(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function y(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? w : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? C({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : S({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = v(s, f), g = h.i18nKey, y = h.namespace, S = y === void 0 ? a?.ns ?? t.defaultNS : y, C = S && n[S] || {}, w = b(C, x(r, C, g, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: g
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, _(_({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function b(e, t, n, r) {
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
function x(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (b(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (b(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (b(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return b(t, l, r, a) === void 0 ? n : l;
}
function S(e) {
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
function C(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && C({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = S({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function w(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function T(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return f(y({
			config: i,
			allNamespaces: r,
			pluralRules: g(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: h() ? c() : a(c, [e, n]),
		lang: n
	};
}
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function D(e) {
	var t = n(m);
	return a(function() {
		return E(E({}, t), { t: f(t.t, e) });
	}, [t, e]);
}
function O(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? T : D)(e);
}
var k = () => {
	let { t: e } = O("common");
	return c("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("shared.mockBanner.text")
	});
};
function A() {
	let { t: e } = O("common");
	return l(s, { children: [
		c(k, {}),
		c("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("products.productsHeader.ourProducts")
		}),
		c("p", {
			className: "mb-10 text-muted-foreground",
			children: e("products.productsHeader.exploreOurSuiteOfTools")
		})
	] });
}
var j = function() {
	return j = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, j.apply(this, arguments);
}, M = t({
	ns: {},
	config: {}
});
function N(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, d = O().lang, f = u() || {}, p = f.locale, h = f.defaultLocale, _ = n(M), v = j(j(j({}, P()), _.ns), o), b = r || d || p || h || "", x = j(j({}, _.config), l), S = x.localesToIgnore || ["default"], C = !b || S.includes(b), w = a(function() {
		return g(C ? void 0 : b);
	}, [C, b]), T = a(function() {
		return y({
			config: x,
			allNamespaces: v,
			pluralRules: w,
			lang: b
		});
	}, [
		x,
		v,
		w,
		b
	]);
	return e.createElement(m.Provider, { value: {
		lang: b,
		t: T
	} }, e.createElement(M.Provider, { value: {
		ns: v,
		config: x
	} }, s));
}
function P() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var F = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, I = {
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
	loadLocaleFrom: async (e, t) => {
		let n = e ?? "en";
		try {
			return (await F(Object.assign({
				"./locales/de.json": () => import("../../../locales/de.json"),
				"./locales/en.json": () => import("./en-C1X3AyET.js"),
				"./locales/es.json": () => import("../../../locales/es.json"),
				"./locales/fr.json": () => import("../../../locales/fr.json"),
				"./locales/it.json": () => import("../../../locales/it.json"),
				"./locales/ja.json": () => import("../../../locales/ja.json"),
				"./locales/ko.json": () => import("../../../locales/ko.json"),
				"./locales/pt.json": () => import("../../../locales/pt.json"),
				"./locales/ru.json": () => import("../../../locales/ru.json"),
				"./locales/zh.json": () => import("../../../locales/zh.json")
			}), `./locales/${n}.json`, 3)).default;
		} catch {
			return (await import("./en-C1X3AyET.js")).default;
		}
	}
};
function L() {
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
function R(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function z({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		R("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		L();
	}, []), c(s, { children: e });
}
function B({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				n(await I.loadLocaleFrom?.("en", "common") ?? {}), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? c(N, {
		lang: "en",
		namespaces: { common: t },
		children: c(z, {
			locale: "en",
			children: e
		})
	}) : null;
}
function V() {
	return c(B, { children: c(A, {}) });
}
export { V as default };
var e = {
	"faq.faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faq.faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faq.faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faq.faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faq.faqList.canIContributeA": "Can I contribute a new library integration?",
	"faq.faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faq.faqList.howOftenAreResults": "How often are results updated?",
	"faq.faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faq.faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faq.faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq.faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq.faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
	"settings.preferencesSection.preferences": "Preferences",
	"settings.preferencesSection.emailNotifications": "Email Notifications",
	"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"settings.preferencesSection.darkMode": "Dark Mode",
	"settings.preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"settings.preferencesSection.defaultLanguage": "Default Language",
	"settings.settingsHeader.settings": "Settings",
	"settings.settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settings.settingsFooter.cancel": "Cancel",
	"settings.settingsFooter.saveChanges": "Save Changes",
	"settings.apiAccessSection.apiAccess": "API Access",
	"settings.apiAccessSection.apiKey": "API Key",
	"settings.apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"settings.apiAccessSection.copy": "Copy",
	"settings.profileSection.profile": "Profile",
	"settings.profileSection.displayName": "Display Name",
	"settings.profileSection.email": "Email",
	"shared.header.home": "Home",
	"shared.header.methodology": "Methodology",
	"shared.header.mockPages": "Mock Pages",
	"shared.header.products": "Products",
	"shared.header.pricing": "Pricing",
	"shared.header.team": "Team",
	"shared.header.blog": "Blog",
	"shared.header.careers": "Careers",
	"shared.header.faq": "FAQ",
	"shared.header.contact": "Contact",
	"shared.header.settings": "Settings",
	"shared.header.goToGithub": "Go to GitHub",
	"shared.footer.resources": "Resources",
	"shared.footer.contact": "Contact",
	"shared.footer.github": "GitHub",
	"shared.footer.methodology": "Methodology",
	"shared.footer.contributing": "Contributing",
	"shared.footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"shared.footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"shared.mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"shared.themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"shared.themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"shared.themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"shared.themeToggle.themeAuto": "Theme: Auto",
	"shared.themeToggle.themeDark": "Theme: Dark",
	"shared.themeToggle.themeLight": "Theme: Light",
	"careers.careersHeader.careers": "Careers",
	"careers.careersHero.fromAnywhere": "from anywhere in the world",
	"careers.careersBenefits.competitivePay": "Competitive pay",
	"careers.careersBenefits.topOfMarket": "Top-of-market compensation",
	"careers.careersBenefits.openSourceTime": "Open source time",
	"careers.careersBenefits.twentyPercentTime": "20% time for OSS",
	"careers.careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careers.careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"careers.openPositions.openPositions": "Open Positions",
	"careers.openPositions.remote": "Remote",
	"careers.openPositions.fullTime": "Full-time",
	"careers.openPositions.applyNow": "Apply Now",
	"route.route.oopsPageNotFound": "Oops! Page not found",
	"route.route.returnToHome": "Return to Home",
	"route.route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"pricing.pricingTiers.starterTier": "Starter",
	"pricing.pricingTiers.starterPrice": "$0",
	"pricing.pricingTiers.forever": "forever",
	"pricing.pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricing.pricingTiers.libraries3": "3 libraries",
	"pricing.pricingTiers.communitySupport": "Community support",
	"pricing.pricingTiers.publicResults": "Public results",
	"pricing.pricingTiers.getStarted": "Get Started",
	"pricing.pricingTiers.proTier": "Pro",
	"pricing.pricingTiers.proPrice": "$29",
	"pricing.pricingTiers.perMonth": "/month",
	"pricing.pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricing.pricingTiers.allLibraries": "All libraries",
	"pricing.pricingTiers.prioritySupport": "Priority support",
	"pricing.pricingTiers.privateResults": "Private results",
	"pricing.pricingTiers.ciIntegration": "CI integration",
	"pricing.pricingTiers.historicalData": "Historical data",
	"pricing.pricingTiers.enterpriseTier": "Enterprise",
	"pricing.pricingTiers.custom": "Custom",
	"pricing.pricingTiers.everythingInPro": "Everything in Pro",
	"pricing.pricingTiers.onPremiseOption": "On-premise option",
	"pricing.pricingTiers.ssoSaml": "SSO & SAML",
	"pricing.pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricing.pricingTiers.customSLAs": "Custom SLAs",
	"pricing.pricingTiers.auditLogs": "Audit logs",
	"pricing.pricingTiers.trainingSessions": "Training sessions",
	"pricing.pricingTiers.contactSales": "Contact Sales",
	"pricing.pricingHeader.pricing": "Pricing",
	"pricing.pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey.",
	"products.products.benchmarkCLI": "Benchmark CLI",
	"products.products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.products.benchmarkCLIPrice": "Free",
	"products.products.benchmarkCloud": "Benchmark Cloud",
	"products.products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.products.benchmarkCloudPrice": "$29/mo",
	"products.products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.products.benchmarkEnterprisePrice": "Contact Us",
	"products.products.migrationAssistant": "Migration Assistant",
	"products.products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.products.migrationAssistantPrice": "$99 one-time",
	"products.products.translationQA": "Translation QA",
	"products.products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.products.translationQAPrice": "$19/mo",
	"products.products.bundleOptimizer": "Bundle Optimizer",
	"products.products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.products.bundleOptimizerPrice": "$49/mo",
	"products.products.learnMore": "Learn More",
	"products.productsHeader.ourProducts": "Our Products",
	"products.productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps.",
	"contact.contactForm.name": "Name",
	"contact.contactForm.email": "Email",
	"contact.contactForm.subject": "Subject",
	"contact.contactForm.message": "Message",
	"contact.contactForm.sendMessage": "Send Message",
	"contact.contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contact.contactHeader.contactUs": "Contact Us",
	"contact.contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"about.aboutHeader.methodology": "Methodology",
	"about.aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"about.whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"about.whatWeMeasure.renderingOverhead": "Rendering overhead",
	"about.whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"about.whatWeMeasure.hydrationCost": "Hydration cost",
	"about.whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"about.whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"about.whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"about.whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"about.whatWeMeasure.whatWeMeasure": "What We Measure",
	"about.aboutGrid.testEnvironment": "Test Environment",
	"about.aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"about.aboutGrid.applicationDesign": "Application Design",
	"about.aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"about.aboutGrid.measurementMethodology": "Measurement Methodology",
	"about.aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"about.aboutGrid.fairComparison": "Fair Comparison",
	"about.aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"home.understandingImpact.understandingTheImpact": "Understanding the Impact",
	"home.understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"home.understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"home.understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"home.understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"home.understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"home.understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"home.understandingImpact.waterfallRequests": "Waterfall requests:",
	"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"home.understandingImpact.cacheInvalidation": "Cache invalidation:",
	"home.understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"home.understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"home.whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"home.whyItMatters.bundleSize": "Bundle Size",
	"home.whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"home.whyItMatters.renderingHydration": "Rendering & Hydration",
	"home.whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"home.whyItMatters.dynamicLoading": "Dynamic Loading",
	"home.whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"home.resultsTable.sampleResults": "Sample Results",
	"home.resultsTable.bundleSize": "Bundle Size",
	"home.resultsTable.lookupTime": "Lookup Time",
	"home.resultsTable.lazyLoading": "Lazy Loading",
	"home.hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"home.hero.viewResults": "View Results",
	"team.teamGrid.sarahChen": "Sarah Chen",
	"team.teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"team.teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"team.teamGrid.marcusWeber": "Marcus Weber",
	"team.teamGrid.performanceEngineer": "Performance Engineer",
	"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"team.teamGrid.aishaPatel": "Aisha Patel",
	"team.teamGrid.developerAdvocate": "Developer Advocate",
	"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"team.teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"team.teamGrid.yukiTanaka": "Yuki Tanaka",
	"team.teamGrid.dataAnalyst": "Data Analyst",
	"team.teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"team.teamGrid.elenaKowalski": "Elena Kowalski",
	"team.teamGrid.communityManager": "Community Manager",
	"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"team.teamHeader.ourTeam": "Our Team",
	"team.teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"blog.blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blog.blogList.march152026": "March 15, 2026",
	"blog.blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blog.blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blog.blogList.march82026": "March 8, 2026",
	"blog.blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blog.blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blog.blogList.february282026": "February 28, 2026",
	"blog.blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blog.blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blog.blogList.february152026": "February 15, 2026",
	"blog.blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blog.blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blog.blogList.february12026": "February 1, 2026",
	"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blog.blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blog.blogList.january202026": "January 20, 2026",
	"blog.blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blog.blogList.readMore": "Read More →",
	"blog.blogHeader.blog": "Blog",
	"blog.blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
};
export { e as default };

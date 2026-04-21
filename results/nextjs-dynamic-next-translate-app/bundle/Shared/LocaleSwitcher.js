import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Fragment, jsx } from "react/jsx-runtime";
import { useRouter as useRouter$1 } from "next/router";
var locales = [
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
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
function LocaleSwitcher() {
	const locale = useParams().lang ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeEl) => jsx("option", {
				value: localeEl,
				children: getLocaleName(localeEl)
			}, localeEl))
		})
	});
}
var context;
if (typeof React.createContext === "function") context = React.createContext({
	t: function(k) {
		return Array.isArray(k) ? k[0] : k;
	},
	lang: ""
});
var context_default = context;
function safePluralRules(locale) {
	try {
		return new Intl.PluralRules(locale);
	} catch (_e) {
		return new Intl.PluralRules();
	}
}
var __assign$3 = function() {
	__assign$3 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$3.apply(this, arguments);
};
function splitNsKey(key, nsSeparator) {
	if (!nsSeparator) return { i18nKey: key };
	var i = key.indexOf(nsSeparator);
	if (i < 0) return { i18nKey: key };
	return {
		namespace: key.slice(0, i),
		i18nKey: key.slice(i + nsSeparator.length)
	};
}
function transCore(_a) {
	var config = _a.config, allNamespaces = _a.allNamespaces, pluralRules = _a.pluralRules, lang = _a.lang;
	var _b = config.logger, logger = _b === void 0 ? missingKeyLogger : _b, _c = config.allowEmptyStrings, allowEmptyStrings = _c === void 0 ? true : _c;
	var interpolateUnknown = function(value, query) {
		if (Array.isArray(value)) return value.map(function(val) {
			return interpolateUnknown(val, query);
		});
		if (value instanceof Object) return objectInterpolation({
			obj: value,
			query,
			config,
			lang
		});
		return interpolation({
			text: value,
			query,
			config,
			lang
		});
	};
	var t = function(key, query, options) {
		var _a;
		if (key === void 0) key = "";
		var k = Array.isArray(key) ? key[0] : key;
		var _b = config.nsSeparator, nsSeparator = _b === void 0 ? ":" : _b, _c = config.loggerEnvironment, loggerEnvironment = _c === void 0 ? "browser" : _c;
		var _d = splitNsKey(k, nsSeparator), i18nKey = _d.i18nKey, _e = _d.namespace, namespace = _e === void 0 ? (_a = options === null || options === void 0 ? void 0 : options.ns) !== null && _a !== void 0 ? _a : config.defaultNS : _e;
		var dic = namespace && allNamespaces[namespace] || {};
		var dicValue = getDicValue(dic, plural(pluralRules, dic, i18nKey, config, query, options), config, options);
		var value = typeof dicValue === "object" ? JSON.parse(JSON.stringify(dicValue)) : dicValue;
		var empty = typeof value === "undefined" || typeof value === "object" && !Object.keys(value).length || value === "" && !allowEmptyStrings;
		var fallbacks = typeof (options === null || options === void 0 ? void 0 : options.fallback) === "string" ? [options.fallback] : (options === null || options === void 0 ? void 0 : options.fallback) || [];
		if (empty && (loggerEnvironment === "both" || loggerEnvironment === (typeof window === "undefined" ? "node" : "browser"))) logger({
			namespace,
			i18nKey
		});
		if (empty && Array.isArray(fallbacks) && fallbacks.length) {
			var firstFallback = fallbacks[0], restFallbacks = fallbacks.slice(1);
			if (typeof firstFallback === "string") return t(firstFallback, query, __assign$3(__assign$3({}, options), { fallback: restFallbacks }));
		}
		if (empty && options && options.hasOwnProperty("default") && !(fallbacks === null || fallbacks === void 0 ? void 0 : fallbacks.length)) return options.default ? interpolateUnknown(options.default, query) : options.default;
		if (empty) return k;
		return interpolateUnknown(value, query);
	};
	return t;
}
function getDicValue(dic, key, config, options) {
	if (key === void 0) key = "";
	if (options === void 0) options = { returnObjects: false };
	var _a = (config || {}).keySeparator, keySeparator = _a === void 0 ? "." : _a;
	var keyParts = keySeparator ? key.split(keySeparator) : [key];
	if (key === keySeparator && options.returnObjects) return dic;
	var value = keyParts.reduce(function(val, key) {
		if (typeof val === "string") return {};
		var res = val[key];
		return res || (typeof res === "string" ? res : {});
	}, dic);
	if (typeof value === "string" || value instanceof Object && options.returnObjects && Object.keys(value).length > 0) return value;
	if (Array.isArray(value) && options.returnObjects) return value;
}
function plural(pluralRules, dic, key, config, query, options) {
	if (!query || typeof query.count !== "number") return key;
	var numKey = "".concat(key, "_").concat(query.count);
	if (getDicValue(dic, numKey, config, options) !== void 0) return numKey;
	var pluralKey = "".concat(key, "_").concat(pluralRules.select(query.count));
	if (getDicValue(dic, pluralKey, config, options) !== void 0) return pluralKey;
	var nestedNumKey = "".concat(key, ".").concat(query.count);
	if (getDicValue(dic, nestedNumKey, config, options) !== void 0) return nestedNumKey;
	var nestedKey = "".concat(key, ".").concat(pluralRules.select(query.count));
	if (getDicValue(dic, nestedKey, config, options) !== void 0) return nestedKey;
	return key;
}
function interpolation(_a) {
	var text = _a.text, query = _a.query, config = _a.config, lang = _a.lang;
	if (!text || !query) return text || "";
	var escapeRegex = function(str) {
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	};
	var _b = config.interpolation || {}, _c = _b.format, format = _c === void 0 ? null : _c, _d = _b.prefix, prefix = _d === void 0 ? "{{" : _d, _e = _b.suffix, suffix = _e === void 0 ? "}}" : _e;
	var regexEnd = suffix === "" ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(escapeRegex(suffix));
	return Object.keys(query).reduce(function(all, varKey) {
		var regex = new RegExp("".concat(escapeRegex(prefix), "\\s*").concat(varKey).concat(regexEnd), "gm");
		return all.replace(regex, function(_match, $1) {
			return $1 && format ? format(query[varKey], $1, lang) : query[varKey];
		});
	}, text);
}
function objectInterpolation(_a) {
	var obj = _a.obj, query = _a.query, config = _a.config, lang = _a.lang;
	if (!query || Object.keys(query).length === 0) return obj;
	Object.keys(obj).forEach(function(key) {
		if (obj[key] instanceof Object) objectInterpolation({
			obj: obj[key],
			query,
			config,
			lang
		});
		if (typeof obj[key] === "string") obj[key] = interpolation({
			text: obj[key],
			query,
			config,
			lang
		});
	});
	return obj;
}
function missingKeyLogger(_a) {
	var namespace = _a.namespace, i18nKey = _a.i18nKey;
	if (process.env.NODE_ENV === "production") return;
	if (!namespace) {
		console.warn("[next-translate] The text \"".concat(i18nKey, "\" has no namespace in front of it."));
		return;
	}
	console.warn("[next-translate] \"".concat(namespace, ":").concat(i18nKey, "\" is missing in current namespace configuration. Try adding \"").concat(i18nKey, "\" to the namespace \"").concat(namespace, "\"."));
}
var __assign$2 = function() {
	__assign$2 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$2.apply(this, arguments);
};
function wrapTWithDefaultNs(oldT, ns) {
	if (typeof ns !== "string") return oldT;
	var t = function(key, query, options) {
		return oldT(key, query, __assign$2({ ns }, options));
	};
	return t;
}
function isServer() {
	return typeof window === "undefined";
}
function createTranslation(defaultNS) {
	var _a;
	var _b = (_a = globalThis.__NEXT_TRANSLATE__) !== null && _a !== void 0 ? _a : {}, lang = _b.lang, namespaces = _b.namespaces, config = _b.config;
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var getT = function() {
		return wrapTWithDefaultNs(transCore({
			config,
			allNamespaces: namespaces,
			pluralRules: safePluralRules(ignoreLang ? void 0 : lang),
			lang
		}), defaultNS);
	};
	return {
		t: isServer() ? getT() : useMemo(getT, [defaultNS, lang]),
		lang
	};
}
var __assign$1 = function() {
	__assign$1 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$1.apply(this, arguments);
};
function useTranslationInPages(defaultNS) {
	var ctx = useContext(context_default);
	return useMemo(function() {
		return __assign$1(__assign$1({}, ctx), { t: wrapTWithDefaultNs(ctx.t, defaultNS) });
	}, [ctx, defaultNS]);
}
function useTranslation(defaultNS) {
	var appDir = globalThis.__NEXT_TRANSLATE__;
	return ((appDir === null || appDir === void 0 ? void 0 : appDir.config) ? createTranslation : useTranslationInPages)(defaultNS);
}
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var InternalContext = createContext({
	ns: {},
	config: {}
});
function I18nProvider(_a) {
	var lng = _a.lang, _b = _a.namespaces, namespaces = _b === void 0 ? {} : _b, children = _a.children, _c = _a.config, newConfig = _c === void 0 ? {} : _c;
	var parentLang = useTranslation().lang;
	var _d = useRouter$1() || {}, locale = _d.locale, defaultLocale = _d.defaultLocale;
	var internal = useContext(InternalContext);
	var allNamespaces = __assign(__assign(__assign({}, initialBrowserNamespaces()), internal.ns), namespaces);
	var lang = lng || parentLang || locale || defaultLocale || "";
	var config = __assign(__assign({}, internal.config), newConfig);
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var pluralRules = useMemo(function() {
		return safePluralRules(ignoreLang ? void 0 : lang);
	}, [ignoreLang, lang]);
	var t = useMemo(function() {
		return transCore({
			config,
			allNamespaces,
			pluralRules,
			lang
		});
	}, [
		config,
		allNamespaces,
		pluralRules,
		lang
	]);
	return React.createElement(context_default.Provider, { value: {
		lang,
		t
	} }, React.createElement(InternalContext.Provider, { value: {
		ns: allNamespaces,
		config
	} }, children));
}
function initialBrowserNamespaces() {
	var _a, _b;
	if (typeof window === "undefined") return {};
	return ((_b = (_a = window.__NEXT_DATA__) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.__namespaces) || {};
}
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
var i18n_default = {
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
	keySeparator: false,
	nsSeparator: false,
	pages: { "*": ["common"] },
	loadLocaleFrom: async (lang, _ns) => {
		const locale = lang ?? "en";
		try {
			return (await _rolldown_dynamic_import_helper_default(Object.assign({
				"./locales/de.json": () => import("../locales/de.json"),
				"./locales/en.json": () => import("./en-YACnRwSE.js"),
				"./locales/es.json": () => import("../locales/es.json"),
				"./locales/fr.json": () => import("../locales/fr.json"),
				"./locales/it.json": () => import("../locales/it.json"),
				"./locales/ja.json": () => import("../locales/ja.json"),
				"./locales/ko.json": () => import("../locales/ko.json"),
				"./locales/pt.json": () => import("../locales/pt.json"),
				"./locales/ru.json": () => import("../locales/ru.json"),
				"./locales/zh.json": () => import("../locales/zh.json")
			}), `./locales/${locale}.json`, 3)).default;
		} catch {
			return (await import("./en-YACnRwSE.js")).default;
		}
	}
};
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
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Fragment, { children });
}
function Wrapper({ children }) {
	const locale = "en";
	const [translations, setTranslations] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const loadTranslations = async () => {
			try {
				setTranslations(await i18n_default.loadLocaleFrom?.(locale, "common") ?? {});
				setIsLoaded(true);
			} catch (error) {
				console.error("Failed to load translations:", error);
				setIsLoaded(true);
			}
		};
		loadTranslations();
	}, [locale]);
	if (!isLoaded) return null;
	return jsx(I18nProvider, {
		lang: locale,
		namespaces: { common: translations },
		children: jsx(AppProviders, {
			locale,
			children
		})
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(LocaleSwitcher, {}) });
}
export { Wrapped as default };
var en_default = {
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
export { en_default as default };

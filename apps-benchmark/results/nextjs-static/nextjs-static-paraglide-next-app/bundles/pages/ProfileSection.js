import { Profiler, useEffect, useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
var URLPattern = {};
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
var cookieName = "PARAGLIDE_LOCALE";
var cookieMaxAge = 3456e4;
var strategy = [
	"cookie",
	"globalVariable",
	"baseLocale"
];
var routeStrategies = [];
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const urlObject = new URL(urlString, "http://dummy.com");
	let match;
	for (const routeStrategy of routeStrategies) if (new URLPattern(routeStrategy.match, urlObject.href).exec(urlObject.href)) {
		match = routeStrategy;
		break;
	}
	cachedRouteStrategyUrl = urlString;
	cachedRouteStrategy = match;
	return match;
}
function getStrategyForUrl(url) {
	const routeStrategy = findMatchingRouteStrategy(url);
	if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) return routeStrategy.strategy;
	return strategy;
}
var serverAsyncLocalStorage = void 0;
var isServer = typeof window === "undefined";
globalThis.__paraglide = globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _locale;
var localeInitiallySet = false;
var getLocale = () => {
	if (serverAsyncLocalStorage) {
		const locale = serverAsyncLocalStorage?.getStore()?.locale;
		if (locale) return locale;
	}
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	const resolved = resolveLocaleWithStrategies(strategyToUse, typeof window !== "undefined" ? window.location?.href : void 0);
	if (resolved) {
		if (!localeInitiallySet) {
			_locale = resolved;
			localeInitiallySet = true;
			setLocale(resolved, { reload: false });
		}
		return resolved;
	}
	throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
	let locale;
	for (const strat of strategyToUse) {
		if (strat === "cookie") locale = extractLocaleFromCookie();
		else if (strat === "baseLocale") locale = "en";
		else if (strat === "globalVariable" && _locale !== void 0) locale = _locale;
		else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
			const handler = customClientStrategies.get(strat);
			if (handler) {
				const result = handler.getLocale();
				if (result instanceof Promise) continue;
				if (result !== void 0) return assertIsLocale(result);
			}
		}
		const matchedLocale = toLocale(locale);
		if (matchedLocale) return matchedLocale;
	}
}
var navigateOrReload = (newLocation) => {
	if (newLocation) window.location.href = newLocation;
	else window.location.reload();
};
var setLocale = (newLocale, options) => {
	const optionsWithDefaults = {
		reload: true,
		...options
	};
	let currentLocale;
	try {
		currentLocale = getLocale();
	} catch {}
	const customSetLocalePromises = [];
	let newLocation = void 0;
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	for (const strat of strategyToUse) if (strat === "globalVariable") _locale = newLocale;
	else if (strat === "cookie") {
		if (isServer || typeof document === "undefined" || typeof window === "undefined") continue;
		const cookieString = `${cookieName}=${newLocale}; path=/; max-age=${cookieMaxAge}`;
		document.cookie = cookieString;
	} else if (strat === "baseLocale") continue;
	else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
		const handler = customClientStrategies.get(strat);
		if (handler) {
			let result = handler.setLocale(newLocale);
			if (result instanceof Promise) {
				result = result.catch((error) => {
					throw new Error(`Custom strategy "${strat}" setLocale failed.`, { cause: error });
				});
				customSetLocalePromises.push(result);
			}
		}
	}
	const runReload = () => {
		if (!isServer && optionsWithDefaults.reload && window.location && newLocale !== currentLocale) navigateOrReload(newLocation);
	};
	if (customSetLocalePromises.length) return Promise.all(customSetLocalePromises).then(() => {
		runReload();
	});
	runReload();
};
function toLocale(value) {
	if (typeof value !== "string") return;
	const lowerValue = value.toLowerCase();
	for (const locale of locales) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
function extractLocaleFromCookie() {
	if (typeof document === "undefined" || !document.cookie) return;
	const locale = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`))?.[2];
	return toLocale(locale);
}
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
var en_profile_section_profile = () => {
	return `Profile`;
};
var fr_profile_section_profile = () => {
	return `Profil`;
};
var es_profile_section_profile = () => {
	return `Perfil`;
};
var de_profile_section_profile = () => {
	return `Profil`;
};
var it_profile_section_profile = () => {
	return `Profilo`;
};
var pt_profile_section_profile = () => {
	return `Perfil`;
};
var zh_profile_section_profile = () => {
	return `个人资料`;
};
var ja_profile_section_profile = () => {
	return `プロファイル`;
};
var ko_profile_section_profile = () => {
	return `프로필`;
};
var ru_profile_section_profile = () => {
	return `Профиль`;
};
var profile_section_profile = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_profile_section_profile(inputs);
	if (locale === "fr") return fr_profile_section_profile(inputs);
	if (locale === "es") return es_profile_section_profile(inputs);
	if (locale === "de") return de_profile_section_profile(inputs);
	if (locale === "it") return it_profile_section_profile(inputs);
	if (locale === "pt") return pt_profile_section_profile(inputs);
	if (locale === "zh") return zh_profile_section_profile(inputs);
	if (locale === "ja") return ja_profile_section_profile(inputs);
	if (locale === "ko") return ko_profile_section_profile(inputs);
	return ru_profile_section_profile(inputs);
});
var en_profile_section_displayname1 = () => {
	return `Display Name`;
};
var fr_profile_section_displayname1 = () => {
	return `Nom d'affichage`;
};
var es_profile_section_displayname1 = () => {
	return `Nombre visible`;
};
var de_profile_section_displayname1 = () => {
	return `Anzeigename`;
};
var it_profile_section_displayname1 = () => {
	return `Nome visualizzato`;
};
var pt_profile_section_displayname1 = () => {
	return `Nome de exibição`;
};
var zh_profile_section_displayname1 = () => {
	return `显示名称`;
};
var ja_profile_section_displayname1 = () => {
	return `表示名`;
};
var ko_profile_section_displayname1 = () => {
	return `표시 이름`;
};
var ru_profile_section_displayname1 = () => {
	return `Отображаемое имя`;
};
var profile_section_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_profile_section_displayname1(inputs);
	if (locale === "fr") return fr_profile_section_displayname1(inputs);
	if (locale === "es") return es_profile_section_displayname1(inputs);
	if (locale === "de") return de_profile_section_displayname1(inputs);
	if (locale === "it") return it_profile_section_displayname1(inputs);
	if (locale === "pt") return pt_profile_section_displayname1(inputs);
	if (locale === "zh") return zh_profile_section_displayname1(inputs);
	if (locale === "ja") return ja_profile_section_displayname1(inputs);
	if (locale === "ko") return ko_profile_section_displayname1(inputs);
	return ru_profile_section_displayname1(inputs);
});
var en_profile_section_email = () => {
	return `Email`;
};
var fr_profile_section_email = () => {
	return `Email`;
};
var es_profile_section_email = () => {
	return `Correo electrónico`;
};
var de_profile_section_email = () => {
	return `E-Mail`;
};
var it_profile_section_email = () => {
	return `Email`;
};
var pt_profile_section_email = () => {
	return `E-mail`;
};
var zh_profile_section_email = () => {
	return `邮件地址`;
};
var ja_profile_section_email = () => {
	return `メールアドレス`;
};
var ko_profile_section_email = () => {
	return `이메일 주소`;
};
var ru_profile_section_email = () => {
	return `Эл. почта`;
};
var profile_section_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_profile_section_email(inputs);
	if (locale === "fr") return fr_profile_section_email(inputs);
	if (locale === "es") return es_profile_section_email(inputs);
	if (locale === "de") return de_profile_section_email(inputs);
	if (locale === "it") return it_profile_section_email(inputs);
	if (locale === "pt") return pt_profile_section_email(inputs);
	if (locale === "zh") return zh_profile_section_email(inputs);
	if (locale === "ja") return ja_profile_section_email(inputs);
	if (locale === "ko") return ko_profile_section_email(inputs);
	return ru_profile_section_email(inputs);
});
function ProfileSection() {
	const displayNameId = useId();
	const emailId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: profile_section_profile()
		}), jsxs("div", {
			className: "space-y-4",
			children: [jsxs("div", { children: [jsx("label", {
				htmlFor: displayNameId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: profile_section_displayname1()
			}), jsx("input", {
				id: displayNameId,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), jsxs("div", { children: [jsx("label", {
				htmlFor: emailId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: profile_section_email()
			}), jsx("input", {
				id: emailId,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
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
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	useEffect(() => {
		setLocale(locale);
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ProfileSection, {}) });
}
export { Wrapped as default };

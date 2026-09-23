import "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
	throw new Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
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
		clearLocaleCookieCache();
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
var getUrlOrigin = () => {
	if (serverAsyncLocalStorage) return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
	else if (typeof window !== "undefined") return window.location.origin;
	return "http://fallback.com";
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
function normalizeTrailingSlash(url) {
	return url;
}
function execUrlPattern(pattern, url) {
	return pattern.exec(url.href);
}
var cookieNamePattern = cookieName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var localeCookiePattern = new RegExp(`(?:^|;\\s*)${cookieNamePattern}=([^;]*)`);
var noCachedLocale = Symbol();
var cachedLocaleFromCookie = noCachedLocale;
function clearLocaleCookieCache() {
	cachedLocaleFromCookie = noCachedLocale;
}
function scheduleLocaleCookieCacheClear() {
	if (typeof queueMicrotask === "function") queueMicrotask(clearLocaleCookieCache);
	else Promise.resolve().then(clearLocaleCookieCache);
}
function extractLocaleFromCookie() {
	if (typeof document === "undefined") return;
	if (cachedLocaleFromCookie !== noCachedLocale) return cachedLocaleFromCookie;
	const locale = document.cookie.match(localeCookiePattern)?.[1];
	cachedLocaleFromCookie = toLocale(locale);
	scheduleLocaleCookieCacheClear();
	return cachedLocaleFromCookie;
}
function deLocalizeUrl(url) {
	return deLocalizeUrlDefaultPattern(url);
}
function deLocalizeUrlDefaultPattern(url) {
	const urlObj = normalizeTrailingSlash(typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url));
	const pathSegments = urlObj.pathname.split("/").filter(Boolean);
	if (pathSegments.length > 0 && toLocale(pathSegments[0])) urlObj.pathname = "/" + pathSegments.slice(1).join("/");
	return normalizeTrailingSlash(urlObj);
}
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const publicUrl = normalizeTrailingSlash(new URL(urlString, "http://example.com"));
	const canonicalUrl = deLocalizeUrl(publicUrl);
	const candidateUrls = canonicalUrl.href === publicUrl.href ? [publicUrl] : [publicUrl, canonicalUrl];
	let match;
	for (const candidateUrl of candidateUrls) {
		for (const routeStrategy of routeStrategies) if (execUrlPattern(new URLPattern(routeStrategy.match, candidateUrl.href), candidateUrl)) {
			match = routeStrategy;
			break;
		}
		if (match) break;
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
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
var careers_benefits_competitivepay1$10 = () => {
	return `Competitive pay`;
};
var careers_benefits_opensourcetime2$10 = () => {
	return `Open source time`;
};
var careers_benefits_topofmarketcompensation3$10 = () => {
	return `Top-of-market compensation`;
};
var careers_benefits_workfromanywhereinthe4$10 = () => {
	return `Work from anywhere in the world`;
};
var open_positions_remote$10 = () => {
	return `Remote`;
};
var careers_benefits_competitivepay1$9 = () => {
	return `Rémunération compétitive`;
};
var careers_benefits_opensourcetime2$9 = () => {
	return `Temps dédié à l'open source`;
};
var careers_benefits_topofmarketcompensation3$9 = () => {
	return `Rémunération au-dessus du marché`;
};
var careers_benefits_workfromanywhereinthe4$9 = () => {
	return `Travaillez de n'importe où dans le monde`;
};
var open_positions_remote$9 = () => {
	return `À distance`;
};
var careers_benefits_competitivepay1$8 = () => {
	return `Salario competitivo`;
};
var careers_benefits_opensourcetime2$8 = () => {
	return `Tiempo dedicado al código abierto`;
};
var careers_benefits_topofmarketcompensation3$8 = () => {
	return `Compensación superior a la del mercado`;
};
var careers_benefits_workfromanywhereinthe4$8 = () => {
	return `Trabaja desde cualquier lugar del mundo`;
};
var open_positions_remote$8 = () => {
	return `Remoto`;
};
var careers_benefits_competitivepay1$7 = () => {
	return `Wettbewerbsfähige Bezahlung`;
};
var careers_benefits_opensourcetime2$7 = () => {
	return `Zeit für Open Source`;
};
var careers_benefits_topofmarketcompensation3$7 = () => {
	return `Überdurchschnittliche Vergütung`;
};
var careers_benefits_workfromanywhereinthe4$7 = () => {
	return `Arbeiten Sie von überall auf der Welt`;
};
var open_positions_remote$7 = () => {
	return `Remote`;
};
var careers_benefits_competitivepay1$6 = () => {
	return `Retribuzione competitiva`;
};
var careers_benefits_opensourcetime2$6 = () => {
	return `Tempo dedicato all'open source`;
};
var careers_benefits_topofmarketcompensation3$6 = () => {
	return `Compensazione ai vertici del mercato`;
};
var careers_benefits_workfromanywhereinthe4$6 = () => {
	return `Lavora da qualsiasi parte del mondo`;
};
var open_positions_remote$6 = () => {
	return `Remoto`;
};
var careers_benefits_competitivepay1$5 = () => {
	return `Remuneração competitiva`;
};
var careers_benefits_opensourcetime2$5 = () => {
	return `Tempo dedicado ao código aberto`;
};
var careers_benefits_topofmarketcompensation3$5 = () => {
	return `Remuneração acima da média do mercado`;
};
var careers_benefits_workfromanywhereinthe4$5 = () => {
	return `Trabalhe de qualquer lugar do mundo`;
};
var open_positions_remote$5 = () => {
	return `Remoto`;
};
var careers_benefits_competitivepay1$4 = () => {
	return `具有竞争力的薪酬`;
};
var careers_benefits_opensourcetime2$4 = () => {
	return `开源贡献时间`;
};
var careers_benefits_topofmarketcompensation3$4 = () => {
	return `市场顶尖的薪资待遇`;
};
var careers_benefits_workfromanywhereinthe4$4 = () => {
	return `在全球任何地方工作`;
};
var open_positions_remote$4 = () => {
	return `远程`;
};
var careers_benefits_competitivepay1$3 = () => {
	return `競争力のある給与`;
};
var careers_benefits_opensourcetime2$3 = () => {
	return `オープンソースへの貢献時間`;
};
var careers_benefits_topofmarketcompensation3$3 = () => {
	return `市場最高水準の報酬`;
};
var careers_benefits_workfromanywhereinthe4$3 = () => {
	return `世界中のどこからでも働けます`;
};
var open_positions_remote$3 = () => {
	return `リモート`;
};
var careers_benefits_competitivepay1$2 = () => {
	return `경쟁력 있는 급여`;
};
var careers_benefits_opensourcetime2$2 = () => {
	return `오픈 소스 기여 시간`;
};
var careers_benefits_topofmarketcompensation3$2 = () => {
	return `업계 최고 수준의 보상`;
};
var careers_benefits_workfromanywhereinthe4$2 = () => {
	return `전 세계 어디서나 근무 가능`;
};
var open_positions_remote$2 = () => {
	return `원격`;
};
var careers_benefits_competitivepay1$1 = () => {
	return `Конкурентоспособная оплата`;
};
var careers_benefits_opensourcetime2$1 = () => {
	return `Время на open source`;
};
var careers_benefits_topofmarketcompensation3$1 = () => {
	return `Компенсация выше рыночной`;
};
var careers_benefits_workfromanywhereinthe4$1 = () => {
	return `Работайте из любой точки мира`;
};
var open_positions_remote$1 = () => {
	return `Удаленно`;
};
var careers_benefits_competitivepay1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return careers_benefits_competitivepay1$9(inputs);
	if (locale === "es") return careers_benefits_competitivepay1$8(inputs);
	if (locale === "de") return careers_benefits_competitivepay1$7(inputs);
	if (locale === "it") return careers_benefits_competitivepay1$6(inputs);
	if (locale === "pt") return careers_benefits_competitivepay1$5(inputs);
	if (locale === "zh") return careers_benefits_competitivepay1$4(inputs);
	if (locale === "ja") return careers_benefits_competitivepay1$3(inputs);
	if (locale === "ko") return careers_benefits_competitivepay1$2(inputs);
	if (locale === "ru") return careers_benefits_competitivepay1$1(inputs);
	return careers_benefits_competitivepay1$10(inputs);
});
var careers_benefits_opensourcetime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return careers_benefits_opensourcetime2$9(inputs);
	if (locale === "es") return careers_benefits_opensourcetime2$8(inputs);
	if (locale === "de") return careers_benefits_opensourcetime2$7(inputs);
	if (locale === "it") return careers_benefits_opensourcetime2$6(inputs);
	if (locale === "pt") return careers_benefits_opensourcetime2$5(inputs);
	if (locale === "zh") return careers_benefits_opensourcetime2$4(inputs);
	if (locale === "ja") return careers_benefits_opensourcetime2$3(inputs);
	if (locale === "ko") return careers_benefits_opensourcetime2$2(inputs);
	if (locale === "ru") return careers_benefits_opensourcetime2$1(inputs);
	return careers_benefits_opensourcetime2$10(inputs);
});
var careers_benefits_topofmarketcompensation3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return careers_benefits_topofmarketcompensation3$9(inputs);
	if (locale === "es") return careers_benefits_topofmarketcompensation3$8(inputs);
	if (locale === "de") return careers_benefits_topofmarketcompensation3$7(inputs);
	if (locale === "it") return careers_benefits_topofmarketcompensation3$6(inputs);
	if (locale === "pt") return careers_benefits_topofmarketcompensation3$5(inputs);
	if (locale === "zh") return careers_benefits_topofmarketcompensation3$4(inputs);
	if (locale === "ja") return careers_benefits_topofmarketcompensation3$3(inputs);
	if (locale === "ko") return careers_benefits_topofmarketcompensation3$2(inputs);
	if (locale === "ru") return careers_benefits_topofmarketcompensation3$1(inputs);
	return careers_benefits_topofmarketcompensation3$10(inputs);
});
var careers_benefits_workfromanywhereinthe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return careers_benefits_workfromanywhereinthe4$9(inputs);
	if (locale === "es") return careers_benefits_workfromanywhereinthe4$8(inputs);
	if (locale === "de") return careers_benefits_workfromanywhereinthe4$7(inputs);
	if (locale === "it") return careers_benefits_workfromanywhereinthe4$6(inputs);
	if (locale === "pt") return careers_benefits_workfromanywhereinthe4$5(inputs);
	if (locale === "zh") return careers_benefits_workfromanywhereinthe4$4(inputs);
	if (locale === "ja") return careers_benefits_workfromanywhereinthe4$3(inputs);
	if (locale === "ko") return careers_benefits_workfromanywhereinthe4$2(inputs);
	if (locale === "ru") return careers_benefits_workfromanywhereinthe4$1(inputs);
	return careers_benefits_workfromanywhereinthe4$10(inputs);
});
var open_positions_remote = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_remote$9(inputs);
	if (locale === "es") return open_positions_remote$8(inputs);
	if (locale === "de") return open_positions_remote$7(inputs);
	if (locale === "it") return open_positions_remote$6(inputs);
	if (locale === "pt") return open_positions_remote$5(inputs);
	if (locale === "zh") return open_positions_remote$4(inputs);
	if (locale === "ja") return open_positions_remote$3(inputs);
	if (locale === "ko") return open_positions_remote$2(inputs);
	if (locale === "ru") return open_positions_remote$1(inputs);
	return open_positions_remote$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/CareersBenefits.tsx";
function CareersBenefits() {
	const benefits = [
		{
			label: open_positions_remote(),
			value: careers_benefits_workfromanywhereinthe4()
		},
		{
			label: careers_benefits_competitivepay1(),
			value: careers_benefits_topofmarketcompensation3()
		},
		{
			label: careers_benefits_opensourcetime2(),
			value: "20% time for OSS contributions"
		}
	];
	return jsxDEV("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: benefits.map((b) => jsxDEV("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [jsxDEV("p", {
				className: "text-sm font-semibold text-foreground",
				children: b.label
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 26,
				columnNumber: 11
			}, this), jsxDEV("p", {
				className: "text-xs text-muted-foreground",
				children: b.value
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 11
			}, this)]
		}, b.label, true, {
			fileName: _jsxFileName$2,
			lineNumber: 22,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/CareersBenefits.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(CareersBenefits, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };

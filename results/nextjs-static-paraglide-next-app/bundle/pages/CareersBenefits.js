import { useEffect, useLayoutEffect, useState } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var en_careers_benefits_competitivepay1 = () => {
	return `Competitive pay`;
};
var fr_careers_benefits_competitivepay1 = () => {
	return `Rémunération compétitive`;
};
var es_careers_benefits_competitivepay1 = () => {
	return `Salario competitivo`;
};
var de_careers_benefits_competitivepay1 = () => {
	return `Wettbewerbsfähige Bezahlung`;
};
var it_careers_benefits_competitivepay1 = () => {
	return `Retribuzione competitiva`;
};
var pt_careers_benefits_competitivepay1 = () => {
	return `Remuneração competitiva`;
};
var zh_careers_benefits_competitivepay1 = () => {
	return `具有竞争力的薪酬`;
};
var ja_careers_benefits_competitivepay1 = () => {
	return `競争力のある給与`;
};
var ko_careers_benefits_competitivepay1 = () => {
	return `경쟁력 있는 급여`;
};
var ru_careers_benefits_competitivepay1 = () => {
	return `Конкурентоспособная оплата`;
};
var careers_benefits_competitivepay1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_careers_benefits_competitivepay1(inputs);
	if (locale === "es") return es_careers_benefits_competitivepay1(inputs);
	if (locale === "de") return de_careers_benefits_competitivepay1(inputs);
	if (locale === "it") return it_careers_benefits_competitivepay1(inputs);
	if (locale === "pt") return pt_careers_benefits_competitivepay1(inputs);
	if (locale === "zh") return zh_careers_benefits_competitivepay1(inputs);
	if (locale === "ja") return ja_careers_benefits_competitivepay1(inputs);
	if (locale === "ko") return ko_careers_benefits_competitivepay1(inputs);
	if (locale === "ru") return ru_careers_benefits_competitivepay1(inputs);
	return en_careers_benefits_competitivepay1(inputs);
});
var en_careers_benefits_opensourcetime2 = () => {
	return `Open source time`;
};
var fr_careers_benefits_opensourcetime2 = () => {
	return `Temps dédié à l'open source`;
};
var es_careers_benefits_opensourcetime2 = () => {
	return `Tiempo dedicado al código abierto`;
};
var de_careers_benefits_opensourcetime2 = () => {
	return `Zeit für Open Source`;
};
var it_careers_benefits_opensourcetime2 = () => {
	return `Tempo dedicato all'open source`;
};
var pt_careers_benefits_opensourcetime2 = () => {
	return `Tempo dedicado ao código aberto`;
};
var zh_careers_benefits_opensourcetime2 = () => {
	return `开源贡献时间`;
};
var ja_careers_benefits_opensourcetime2 = () => {
	return `オープンソースへの貢献時間`;
};
var ko_careers_benefits_opensourcetime2 = () => {
	return `오픈 소스 기여 시간`;
};
var ru_careers_benefits_opensourcetime2 = () => {
	return `Время на open source`;
};
var careers_benefits_opensourcetime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_careers_benefits_opensourcetime2(inputs);
	if (locale === "es") return es_careers_benefits_opensourcetime2(inputs);
	if (locale === "de") return de_careers_benefits_opensourcetime2(inputs);
	if (locale === "it") return it_careers_benefits_opensourcetime2(inputs);
	if (locale === "pt") return pt_careers_benefits_opensourcetime2(inputs);
	if (locale === "zh") return zh_careers_benefits_opensourcetime2(inputs);
	if (locale === "ja") return ja_careers_benefits_opensourcetime2(inputs);
	if (locale === "ko") return ko_careers_benefits_opensourcetime2(inputs);
	if (locale === "ru") return ru_careers_benefits_opensourcetime2(inputs);
	return en_careers_benefits_opensourcetime2(inputs);
});
var en_careers_benefits_topofmarketcompensation3 = () => {
	return `Top-of-market compensation`;
};
var fr_careers_benefits_topofmarketcompensation3 = () => {
	return `Rémunération au-dessus du marché`;
};
var es_careers_benefits_topofmarketcompensation3 = () => {
	return `Compensación superior a la del mercado`;
};
var de_careers_benefits_topofmarketcompensation3 = () => {
	return `Überdurchschnittliche Vergütung`;
};
var it_careers_benefits_topofmarketcompensation3 = () => {
	return `Compensazione ai vertici del mercato`;
};
var pt_careers_benefits_topofmarketcompensation3 = () => {
	return `Remuneração acima da média do mercado`;
};
var zh_careers_benefits_topofmarketcompensation3 = () => {
	return `市场顶尖的薪资待遇`;
};
var ja_careers_benefits_topofmarketcompensation3 = () => {
	return `市場最高水準の報酬`;
};
var ko_careers_benefits_topofmarketcompensation3 = () => {
	return `업계 최고 수준의 보상`;
};
var ru_careers_benefits_topofmarketcompensation3 = () => {
	return `Компенсация выше рыночной`;
};
var careers_benefits_topofmarketcompensation3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "es") return es_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "de") return de_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "it") return it_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "pt") return pt_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "zh") return zh_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "ja") return ja_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "ko") return ko_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "ru") return ru_careers_benefits_topofmarketcompensation3(inputs);
	return en_careers_benefits_topofmarketcompensation3(inputs);
});
var en_careers_benefits_workfromanywhereinthe4 = () => {
	return `Work from anywhere in the world`;
};
var fr_careers_benefits_workfromanywhereinthe4 = () => {
	return `Travaillez de n'importe où dans le monde`;
};
var es_careers_benefits_workfromanywhereinthe4 = () => {
	return `Trabaja desde cualquier lugar del mundo`;
};
var de_careers_benefits_workfromanywhereinthe4 = () => {
	return `Arbeiten Sie von überall auf der Welt`;
};
var it_careers_benefits_workfromanywhereinthe4 = () => {
	return `Lavora da qualsiasi parte del mondo`;
};
var pt_careers_benefits_workfromanywhereinthe4 = () => {
	return `Trabalhe de qualquer lugar do mundo`;
};
var zh_careers_benefits_workfromanywhereinthe4 = () => {
	return `在全球任何地方工作`;
};
var ja_careers_benefits_workfromanywhereinthe4 = () => {
	return `世界中のどこからでも働けます`;
};
var ko_careers_benefits_workfromanywhereinthe4 = () => {
	return `전 세계 어디서나 근무 가능`;
};
var ru_careers_benefits_workfromanywhereinthe4 = () => {
	return `Работайте из любой точки мира`;
};
var careers_benefits_workfromanywhereinthe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "es") return es_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "de") return de_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "it") return it_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "pt") return pt_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "zh") return zh_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "ja") return ja_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "ko") return ko_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "ru") return ru_careers_benefits_workfromanywhereinthe4(inputs);
	return en_careers_benefits_workfromanywhereinthe4(inputs);
});
var en_open_positions_remote = () => {
	return `Remote`;
};
var fr_open_positions_remote = () => {
	return `À distance`;
};
var es_open_positions_remote = () => {
	return `Remoto`;
};
var de_open_positions_remote = () => {
	return `Remote`;
};
var it_open_positions_remote = () => {
	return `Remoto`;
};
var pt_open_positions_remote = () => {
	return `Remoto`;
};
var zh_open_positions_remote = () => {
	return `远程`;
};
var ja_open_positions_remote = () => {
	return `リモート`;
};
var ko_open_positions_remote = () => {
	return `원격`;
};
var ru_open_positions_remote = () => {
	return `Удаленно`;
};
var open_positions_remote = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_open_positions_remote(inputs);
	if (locale === "es") return es_open_positions_remote(inputs);
	if (locale === "de") return de_open_positions_remote(inputs);
	if (locale === "it") return it_open_positions_remote(inputs);
	if (locale === "pt") return pt_open_positions_remote(inputs);
	if (locale === "zh") return zh_open_positions_remote(inputs);
	if (locale === "ja") return ja_open_positions_remote(inputs);
	if (locale === "ko") return ko_open_positions_remote(inputs);
	if (locale === "ru") return ru_open_positions_remote(inputs);
	return en_open_positions_remote(inputs);
});
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/CareersBenefits.tsx";
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
				fileName: _jsxFileName$3,
				lineNumber: 28,
				columnNumber: 11
			}, this), jsxDEV("p", {
				className: "text-xs text-muted-foreground",
				children: b.value
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 29,
				columnNumber: 11
			}, this)]
		}, b.label, true, {
			fileName: _jsxFileName$3,
			lineNumber: 24,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 22,
		columnNumber: 5
	}, this);
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
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		setLocale(locale, { reload: false });
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Wrapper({ children }) {
	return jsxDEV(AppProviders, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/CareersBenefits.wrapper.tsx";
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

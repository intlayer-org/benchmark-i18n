import "react";
import { Link, useParams } from "@tanstack/react-router";
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
var footer_anopensourcetestapplication4$10 = () => {
	return `An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.`;
};
var footer_builtwith1$10 = () => {
	return `i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.`;
};
var footer_contact$10 = () => {
	return `Contact`;
};
var footer_contributing$10 = () => {
	return `Contributing`;
};
var footer_github$10 = () => {
	return `GitHub`;
};
var footer_methodology$10 = () => {
	return `Methodology`;
};
var footer_resources$10 = () => {
	return `Resources`;
};
var footer_anopensourcetestapplication4$9 = () => {
	return `Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.`;
};
var footer_builtwith1$9 = () => {
	return `i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.`;
};
var footer_contact$9 = () => {
	return `Contact`;
};
var footer_contributing$9 = () => {
	return `Contribuer`;
};
var footer_github$9 = () => {
	return `GitHub`;
};
var footer_methodology$9 = () => {
	return `Méthodologie`;
};
var footer_resources$9 = () => {
	return `Ressources`;
};
var footer_anopensourcetestapplication4$8 = () => {
	return `Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.`;
};
var footer_builtwith1$8 = () => {
	return `i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.`;
};
var footer_contact$8 = () => {
	return `Contacto`;
};
var footer_contributing$8 = () => {
	return `Contribuir`;
};
var footer_github$8 = () => {
	return `GitHub`;
};
var footer_methodology$8 = () => {
	return `Metodología`;
};
var footer_resources$8 = () => {
	return `Recursos`;
};
var footer_anopensourcetestapplication4$7 = () => {
	return `Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.`;
};
var footer_builtwith1$7 = () => {
	return `i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.`;
};
var footer_contact$7 = () => {
	return `Kontakt`;
};
var footer_contributing$7 = () => {
	return `Beitragen`;
};
var footer_github$7 = () => {
	return `GitHub`;
};
var footer_methodology$7 = () => {
	return `Methodik`;
};
var footer_resources$7 = () => {
	return `Ressourcen`;
};
var footer_anopensourcetestapplication4$6 = () => {
	return `Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.`;
};
var footer_builtwith1$6 = () => {
	return `i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.`;
};
var footer_contact$6 = () => {
	return `Contatti`;
};
var footer_contributing$6 = () => {
	return `Contribuire`;
};
var footer_github$6 = () => {
	return `GitHub`;
};
var footer_methodology$6 = () => {
	return `Metodologia`;
};
var footer_resources$6 = () => {
	return `Risorse`;
};
var footer_anopensourcetestapplication4$5 = () => {
	return `Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.`;
};
var footer_builtwith1$5 = () => {
	return `i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.`;
};
var footer_contact$5 = () => {
	return `Contato`;
};
var footer_contributing$5 = () => {
	return `Contribuir`;
};
var footer_github$5 = () => {
	return `GitHub`;
};
var footer_methodology$5 = () => {
	return `Metodologia`;
};
var footer_resources$5 = () => {
	return `Recursos`;
};
var footer_anopensourcetestapplication4$4 = () => {
	return `一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。`;
};
var footer_builtwith1$4 = () => {
	return `i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。`;
};
var footer_contact$4 = () => {
	return `联系我们`;
};
var footer_contributing$4 = () => {
	return `贡献`;
};
var footer_github$4 = () => {
	return `GitHub`;
};
var footer_methodology$4 = () => {
	return `方法论`;
};
var footer_resources$4 = () => {
	return `资源`;
};
var footer_anopensourcetestapplication4$3 = () => {
	return `国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。`;
};
var footer_builtwith1$3 = () => {
	return `i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。`;
};
var footer_contact$3 = () => {
	return `お問い合わせ`;
};
var footer_contributing$3 = () => {
	return `貢献する`;
};
var footer_github$3 = () => {
	return `GitHub`;
};
var footer_methodology$3 = () => {
	return `方法論`;
};
var footer_resources$3 = () => {
	return `リソース`;
};
var footer_anopensourcetestapplication4$2 = () => {
	return `국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.`;
};
var footer_builtwith1$2 = () => {
	return `i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.`;
};
var footer_contact$2 = () => {
	return `문의하기`;
};
var footer_contributing$2 = () => {
	return `기여하기`;
};
var footer_github$2 = () => {
	return `GitHub`;
};
var footer_methodology$2 = () => {
	return `방법론`;
};
var footer_resources$2 = () => {
	return `리소스`;
};
var footer_anopensourcetestapplication4$1 = () => {
	return `Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.`;
};
var footer_builtwith1$1 = () => {
	return `i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.`;
};
var footer_contact$1 = () => {
	return `Контакт`;
};
var footer_contributing$1 = () => {
	return `Вклад`;
};
var footer_github$1 = () => {
	return `GitHub`;
};
var footer_methodology$1 = () => {
	return `Методология`;
};
var footer_resources$1 = () => {
	return `Ресурсы`;
};
var footer_anopensourcetestapplication4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_anopensourcetestapplication4$9(inputs);
	if (locale === "es") return footer_anopensourcetestapplication4$8(inputs);
	if (locale === "de") return footer_anopensourcetestapplication4$7(inputs);
	if (locale === "it") return footer_anopensourcetestapplication4$6(inputs);
	if (locale === "pt") return footer_anopensourcetestapplication4$5(inputs);
	if (locale === "zh") return footer_anopensourcetestapplication4$4(inputs);
	if (locale === "ja") return footer_anopensourcetestapplication4$3(inputs);
	if (locale === "ko") return footer_anopensourcetestapplication4$2(inputs);
	if (locale === "ru") return footer_anopensourcetestapplication4$1(inputs);
	return footer_anopensourcetestapplication4$10(inputs);
});
var footer_builtwith1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_builtwith1$9(inputs);
	if (locale === "es") return footer_builtwith1$8(inputs);
	if (locale === "de") return footer_builtwith1$7(inputs);
	if (locale === "it") return footer_builtwith1$6(inputs);
	if (locale === "pt") return footer_builtwith1$5(inputs);
	if (locale === "zh") return footer_builtwith1$4(inputs);
	if (locale === "ja") return footer_builtwith1$3(inputs);
	if (locale === "ko") return footer_builtwith1$2(inputs);
	if (locale === "ru") return footer_builtwith1$1(inputs);
	return footer_builtwith1$10(inputs);
});
var footer_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_contact$9(inputs);
	if (locale === "es") return footer_contact$8(inputs);
	if (locale === "de") return footer_contact$7(inputs);
	if (locale === "it") return footer_contact$6(inputs);
	if (locale === "pt") return footer_contact$5(inputs);
	if (locale === "zh") return footer_contact$4(inputs);
	if (locale === "ja") return footer_contact$3(inputs);
	if (locale === "ko") return footer_contact$2(inputs);
	if (locale === "ru") return footer_contact$1(inputs);
	return footer_contact$10(inputs);
});
var footer_contributing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_contributing$9(inputs);
	if (locale === "es") return footer_contributing$8(inputs);
	if (locale === "de") return footer_contributing$7(inputs);
	if (locale === "it") return footer_contributing$6(inputs);
	if (locale === "pt") return footer_contributing$5(inputs);
	if (locale === "zh") return footer_contributing$4(inputs);
	if (locale === "ja") return footer_contributing$3(inputs);
	if (locale === "ko") return footer_contributing$2(inputs);
	if (locale === "ru") return footer_contributing$1(inputs);
	return footer_contributing$10(inputs);
});
var footer_github = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_github$9(inputs);
	if (locale === "es") return footer_github$8(inputs);
	if (locale === "de") return footer_github$7(inputs);
	if (locale === "it") return footer_github$6(inputs);
	if (locale === "pt") return footer_github$5(inputs);
	if (locale === "zh") return footer_github$4(inputs);
	if (locale === "ja") return footer_github$3(inputs);
	if (locale === "ko") return footer_github$2(inputs);
	if (locale === "ru") return footer_github$1(inputs);
	return footer_github$10(inputs);
});
var footer_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_methodology$9(inputs);
	if (locale === "es") return footer_methodology$8(inputs);
	if (locale === "de") return footer_methodology$7(inputs);
	if (locale === "it") return footer_methodology$6(inputs);
	if (locale === "pt") return footer_methodology$5(inputs);
	if (locale === "zh") return footer_methodology$4(inputs);
	if (locale === "ja") return footer_methodology$3(inputs);
	if (locale === "ko") return footer_methodology$2(inputs);
	if (locale === "ru") return footer_methodology$1(inputs);
	return footer_methodology$10(inputs);
});
var footer_resources = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return footer_resources$9(inputs);
	if (locale === "es") return footer_resources$8(inputs);
	if (locale === "de") return footer_resources$7(inputs);
	if (locale === "it") return footer_resources$6(inputs);
	if (locale === "pt") return footer_resources$5(inputs);
	if (locale === "zh") return footer_resources$4(inputs);
	if (locale === "ja") return footer_resources$3(inputs);
	if (locale === "ko") return footer_resources$2(inputs);
	if (locale === "ru") return footer_resources$1(inputs);
	return footer_resources$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Footer.tsx";
function Footer() {
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	const footerLinks = [
		{
			label: footer_github(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: footer_methodology(),
			to: "/$locale/about",
			isInternal: true
		},
		{
			label: footer_contributing(),
			to: "/$locale/contact",
			isInternal: true
		}
	];
	return jsxDEV("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: jsxDEV("div", {
			className: "container py-8",
			children: [jsxDEV("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 31,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: footer_anopensourcetestapplication4()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 34,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_resources()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 39,
						columnNumber: 13
					}, this), jsxDEV("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => jsxDEV("li", { children: linkEl.isInternal ? jsxDEV(Link, {
							preload: false,
							to: linkEl.to,
							params: { locale: currentLocale },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 46,
							columnNumber: 21
						}, this) : jsxDEV("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 55,
							columnNumber: 21
						}, this) }, linkEl.label, false, {
							fileName: _jsxFileName$2,
							lineNumber: 44,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 42,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					jsxDEV("div", { children: [jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_contact()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 69,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 72,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 68,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
				columnNumber: 9
			}, this), jsxDEV("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: footer_builtwith1()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 77,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 27,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Footer.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(Footer, {}, void 0, false, {
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

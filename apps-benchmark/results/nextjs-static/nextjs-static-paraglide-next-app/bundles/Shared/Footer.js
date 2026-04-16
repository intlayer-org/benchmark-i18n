import { Profiler, useEffect } from "react";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().locale ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
};
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
var en_footer_resources = () => {
	return `Resources`;
};
var fr_footer_resources = () => {
	return `Ressources`;
};
var es_footer_resources = () => {
	return `Recursos`;
};
var de_footer_resources = () => {
	return `Ressourcen`;
};
var it_footer_resources = () => {
	return `Risorse`;
};
var pt_footer_resources = () => {
	return `Recursos`;
};
var zh_footer_resources = () => {
	return `资源`;
};
var ja_footer_resources = () => {
	return `リソース`;
};
var ko_footer_resources = () => {
	return `리소스`;
};
var ru_footer_resources = () => {
	return `Ресурсы`;
};
var footer_resources = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_resources(inputs);
	if (locale === "fr") return fr_footer_resources(inputs);
	if (locale === "es") return es_footer_resources(inputs);
	if (locale === "de") return de_footer_resources(inputs);
	if (locale === "it") return it_footer_resources(inputs);
	if (locale === "pt") return pt_footer_resources(inputs);
	if (locale === "zh") return zh_footer_resources(inputs);
	if (locale === "ja") return ja_footer_resources(inputs);
	if (locale === "ko") return ko_footer_resources(inputs);
	return ru_footer_resources(inputs);
});
var en_footer_contact = () => {
	return `Contact`;
};
var fr_footer_contact = () => {
	return `Contact`;
};
var es_footer_contact = () => {
	return `Contacto`;
};
var de_footer_contact = () => {
	return `Kontakt`;
};
var it_footer_contact = () => {
	return `Contatti`;
};
var pt_footer_contact = () => {
	return `Contato`;
};
var zh_footer_contact = () => {
	return `联系我们`;
};
var ja_footer_contact = () => {
	return `お問い合わせ`;
};
var ko_footer_contact = () => {
	return `문의하기`;
};
var ru_footer_contact = () => {
	return `Контакт`;
};
var footer_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contact(inputs);
	if (locale === "fr") return fr_footer_contact(inputs);
	if (locale === "es") return es_footer_contact(inputs);
	if (locale === "de") return de_footer_contact(inputs);
	if (locale === "it") return it_footer_contact(inputs);
	if (locale === "pt") return pt_footer_contact(inputs);
	if (locale === "zh") return zh_footer_contact(inputs);
	if (locale === "ja") return ja_footer_contact(inputs);
	if (locale === "ko") return ko_footer_contact(inputs);
	return ru_footer_contact(inputs);
});
var en_footer_github = () => {
	return `GitHub`;
};
var fr_footer_github = () => {
	return `GitHub`;
};
var es_footer_github = () => {
	return `GitHub`;
};
var de_footer_github = () => {
	return `GitHub`;
};
var it_footer_github = () => {
	return `GitHub`;
};
var pt_footer_github = () => {
	return `GitHub`;
};
var zh_footer_github = () => {
	return `GitHub`;
};
var ja_footer_github = () => {
	return `GitHub`;
};
var ko_footer_github = () => {
	return `GitHub`;
};
var ru_footer_github = () => {
	return `GitHub`;
};
var footer_github = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_github(inputs);
	if (locale === "fr") return fr_footer_github(inputs);
	if (locale === "es") return es_footer_github(inputs);
	if (locale === "de") return de_footer_github(inputs);
	if (locale === "it") return it_footer_github(inputs);
	if (locale === "pt") return pt_footer_github(inputs);
	if (locale === "zh") return zh_footer_github(inputs);
	if (locale === "ja") return ja_footer_github(inputs);
	if (locale === "ko") return ko_footer_github(inputs);
	return ru_footer_github(inputs);
});
var en_footer_methodology = () => {
	return `Methodology`;
};
var fr_footer_methodology = () => {
	return `Méthodologie`;
};
var es_footer_methodology = () => {
	return `Metodología`;
};
var de_footer_methodology = () => {
	return `Methodik`;
};
var it_footer_methodology = () => {
	return `Metodologia`;
};
var pt_footer_methodology = () => {
	return `Metodologia`;
};
var zh_footer_methodology = () => {
	return `方法论`;
};
var ja_footer_methodology = () => {
	return `方法論`;
};
var ko_footer_methodology = () => {
	return `방법론`;
};
var ru_footer_methodology = () => {
	return `Методология`;
};
var footer_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_methodology(inputs);
	if (locale === "fr") return fr_footer_methodology(inputs);
	if (locale === "es") return es_footer_methodology(inputs);
	if (locale === "de") return de_footer_methodology(inputs);
	if (locale === "it") return it_footer_methodology(inputs);
	if (locale === "pt") return pt_footer_methodology(inputs);
	if (locale === "zh") return zh_footer_methodology(inputs);
	if (locale === "ja") return ja_footer_methodology(inputs);
	if (locale === "ko") return ko_footer_methodology(inputs);
	return ru_footer_methodology(inputs);
});
var en_footer_contributing = () => {
	return `Contributing`;
};
var fr_footer_contributing = () => {
	return `Contribuer`;
};
var es_footer_contributing = () => {
	return `Contribuir`;
};
var de_footer_contributing = () => {
	return `Beitragen`;
};
var it_footer_contributing = () => {
	return `Contribuire`;
};
var pt_footer_contributing = () => {
	return `Contribuir`;
};
var zh_footer_contributing = () => {
	return `贡献`;
};
var ja_footer_contributing = () => {
	return `貢献する`;
};
var ko_footer_contributing = () => {
	return `기여하기`;
};
var ru_footer_contributing = () => {
	return `Вклад`;
};
var footer_contributing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contributing(inputs);
	if (locale === "fr") return fr_footer_contributing(inputs);
	if (locale === "es") return es_footer_contributing(inputs);
	if (locale === "de") return de_footer_contributing(inputs);
	if (locale === "it") return it_footer_contributing(inputs);
	if (locale === "pt") return pt_footer_contributing(inputs);
	if (locale === "zh") return zh_footer_contributing(inputs);
	if (locale === "ja") return ja_footer_contributing(inputs);
	if (locale === "ko") return ko_footer_contributing(inputs);
	return ru_footer_contributing(inputs);
});
var en_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.`;
};
var fr_footer_builtwith1 = () => {
	return `i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.`;
};
var es_footer_builtwith1 = () => {
	return `i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.`;
};
var de_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.`;
};
var it_footer_builtwith1 = () => {
	return `i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.`;
};
var pt_footer_builtwith1 = () => {
	return `i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.`;
};
var zh_footer_builtwith1 = () => {
	return `i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。`;
};
var ja_footer_builtwith1 = () => {
	return `i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。`;
};
var ko_footer_builtwith1 = () => {
	return `i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.`;
};
var ru_footer_builtwith1 = () => {
	return `i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.`;
};
var footer_builtwith1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_builtwith1(inputs);
	if (locale === "fr") return fr_footer_builtwith1(inputs);
	if (locale === "es") return es_footer_builtwith1(inputs);
	if (locale === "de") return de_footer_builtwith1(inputs);
	if (locale === "it") return it_footer_builtwith1(inputs);
	if (locale === "pt") return pt_footer_builtwith1(inputs);
	if (locale === "zh") return zh_footer_builtwith1(inputs);
	if (locale === "ja") return ja_footer_builtwith1(inputs);
	if (locale === "ko") return ko_footer_builtwith1(inputs);
	return ru_footer_builtwith1(inputs);
});
var en_footer_anopensourcetestapplication4 = () => {
	return `An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.`;
};
var fr_footer_anopensourcetestapplication4 = () => {
	return `Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.`;
};
var es_footer_anopensourcetestapplication4 = () => {
	return `Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.`;
};
var de_footer_anopensourcetestapplication4 = () => {
	return `Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.`;
};
var it_footer_anopensourcetestapplication4 = () => {
	return `Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.`;
};
var pt_footer_anopensourcetestapplication4 = () => {
	return `Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.`;
};
var zh_footer_anopensourcetestapplication4 = () => {
	return `一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。`;
};
var ja_footer_anopensourcetestapplication4 = () => {
	return `国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。`;
};
var ko_footer_anopensourcetestapplication4 = () => {
	return `국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.`;
};
var ru_footer_anopensourcetestapplication4 = () => {
	return `Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.`;
};
var footer_anopensourcetestapplication4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_anopensourcetestapplication4(inputs);
	if (locale === "fr") return fr_footer_anopensourcetestapplication4(inputs);
	if (locale === "es") return es_footer_anopensourcetestapplication4(inputs);
	if (locale === "de") return de_footer_anopensourcetestapplication4(inputs);
	if (locale === "it") return it_footer_anopensourcetestapplication4(inputs);
	if (locale === "pt") return pt_footer_anopensourcetestapplication4(inputs);
	if (locale === "zh") return zh_footer_anopensourcetestapplication4(inputs);
	if (locale === "ja") return ja_footer_anopensourcetestapplication4(inputs);
	if (locale === "ko") return ko_footer_anopensourcetestapplication4(inputs);
	return ru_footer_anopensourcetestapplication4(inputs);
});
function Footer() {
	const footerLinks = [
		{
			label: footer_github(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: footer_methodology(),
			href: "/about",
			isInternal: true
		},
		{
			label: footer_contributing(),
			href: "/contact",
			isInternal: true
		}
	];
	return jsx("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: jsxs("div", {
			className: "container py-8",
			children: [jsxs("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: footer_anopensourcetestapplication4()
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_resources()
					}), jsx("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => jsx("li", { children: linkEl.isInternal ? jsx(Link, {
							href: linkEl.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) : jsx("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) }, linkEl.label))
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: footer_contact()
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), jsx("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: footer_builtwith1()
			})]
		})
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
	return jsx(Wrapper, { children: jsx(Footer, {}) });
}
export { Wrapped as default };

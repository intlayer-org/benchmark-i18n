import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { derived, writable } from "svelte/store";
var URLPattern = {};
var locales$1 = [
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
	for (const locale of locales$1) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales$1.join(", ")}`);
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
var en_products_grid_clidesc1 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var fr_products_grid_clidesc1 = () => {
	return `Lancez des benchmarks en local. Configurations personnalisées et CI.`;
};
var es_products_grid_clidesc1 = () => {
	return `Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.`;
};
var de_products_grid_clidesc1 = () => {
	return `Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.`;
};
var it_products_grid_clidesc1 = () => {
	return `Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.`;
};
var pt_products_grid_clidesc1 = () => {
	return `Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.`;
};
var zh_products_grid_clidesc1 = () => {
	return `从您的终端本地运行基准测试。支持自定义配置和 CI 集成。`;
};
var ja_products_grid_clidesc1 = () => {
	return `ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。`;
};
var ko_products_grid_clidesc1 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var ru_products_grid_clidesc1 = () => {
	return `Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.`;
};
var products_grid_clidesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_clidesc1(inputs);
	if (locale === "es") return es_products_grid_clidesc1(inputs);
	if (locale === "de") return de_products_grid_clidesc1(inputs);
	if (locale === "it") return it_products_grid_clidesc1(inputs);
	if (locale === "pt") return pt_products_grid_clidesc1(inputs);
	if (locale === "zh") return zh_products_grid_clidesc1(inputs);
	if (locale === "ja") return ja_products_grid_clidesc1(inputs);
	if (locale === "ko") return ko_products_grid_clidesc1(inputs);
	if (locale === "ru") return ru_products_grid_clidesc1(inputs);
	return en_products_grid_clidesc1(inputs);
});
var en_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var fr_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var es_products_grid_cliname1 = () => {
	return `CLI de Benchmark`;
};
var de_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var it_products_grid_cliname1 = () => {
	return `CLI del Benchmark`;
};
var pt_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var zh_products_grid_cliname1 = () => {
	return `基准测试 CLI`;
};
var ja_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var ko_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var ru_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var products_grid_cliname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_cliname1(inputs);
	if (locale === "es") return es_products_grid_cliname1(inputs);
	if (locale === "de") return de_products_grid_cliname1(inputs);
	if (locale === "it") return it_products_grid_cliname1(inputs);
	if (locale === "pt") return pt_products_grid_cliname1(inputs);
	if (locale === "zh") return zh_products_grid_cliname1(inputs);
	if (locale === "ja") return ja_products_grid_cliname1(inputs);
	if (locale === "ko") return ko_products_grid_cliname1(inputs);
	if (locale === "ru") return ru_products_grid_cliname1(inputs);
	return en_products_grid_cliname1(inputs);
});
var en_products_grid_cliprice1 = () => {
	return `Free`;
};
var fr_products_grid_cliprice1 = () => {
	return `Gratuit`;
};
var es_products_grid_cliprice1 = () => {
	return `Gratis`;
};
var de_products_grid_cliprice1 = () => {
	return `Kostenlos`;
};
var it_products_grid_cliprice1 = () => {
	return `Gratis`;
};
var pt_products_grid_cliprice1 = () => {
	return `Grátis`;
};
var zh_products_grid_cliprice1 = () => {
	return `免费`;
};
var ja_products_grid_cliprice1 = () => {
	return `無料`;
};
var ko_products_grid_cliprice1 = () => {
	return `Free`;
};
var ru_products_grid_cliprice1 = () => {
	return `Бесплатно`;
};
var products_grid_cliprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_cliprice1(inputs);
	if (locale === "es") return es_products_grid_cliprice1(inputs);
	if (locale === "de") return de_products_grid_cliprice1(inputs);
	if (locale === "it") return it_products_grid_cliprice1(inputs);
	if (locale === "pt") return pt_products_grid_cliprice1(inputs);
	if (locale === "zh") return zh_products_grid_cliprice1(inputs);
	if (locale === "ja") return ja_products_grid_cliprice1(inputs);
	if (locale === "ko") return ko_products_grid_cliprice1(inputs);
	if (locale === "ru") return ru_products_grid_cliprice1(inputs);
	return en_products_grid_cliprice1(inputs);
});
var en_products_grid_clouddesc1 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var fr_products_grid_clouddesc1 = () => {
	return `Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.`;
};
var es_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.`;
};
var de_products_grid_clouddesc1 = () => {
	return `Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.`;
};
var it_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.`;
};
var pt_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.`;
};
var zh_products_grid_clouddesc1 = () => {
	return `具有历史追踪、警报和团队仪表板的自动化云基准测试。`;
};
var ja_products_grid_clouddesc1 = () => {
	return `履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。`;
};
var ko_products_grid_clouddesc1 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var ru_products_grid_clouddesc1 = () => {
	return `Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.`;
};
var products_grid_clouddesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_clouddesc1(inputs);
	if (locale === "es") return es_products_grid_clouddesc1(inputs);
	if (locale === "de") return de_products_grid_clouddesc1(inputs);
	if (locale === "it") return it_products_grid_clouddesc1(inputs);
	if (locale === "pt") return pt_products_grid_clouddesc1(inputs);
	if (locale === "zh") return zh_products_grid_clouddesc1(inputs);
	if (locale === "ja") return ja_products_grid_clouddesc1(inputs);
	if (locale === "ko") return ko_products_grid_clouddesc1(inputs);
	if (locale === "ru") return ru_products_grid_clouddesc1(inputs);
	return en_products_grid_clouddesc1(inputs);
});
var en_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var fr_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var es_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var de_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var it_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var pt_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var zh_products_grid_cloudname1 = () => {
	return `基准测试云`;
};
var ja_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var ko_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var ru_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var products_grid_cloudname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_cloudname1(inputs);
	if (locale === "es") return es_products_grid_cloudname1(inputs);
	if (locale === "de") return de_products_grid_cloudname1(inputs);
	if (locale === "it") return it_products_grid_cloudname1(inputs);
	if (locale === "pt") return pt_products_grid_cloudname1(inputs);
	if (locale === "zh") return zh_products_grid_cloudname1(inputs);
	if (locale === "ja") return ja_products_grid_cloudname1(inputs);
	if (locale === "ko") return ko_products_grid_cloudname1(inputs);
	if (locale === "ru") return ru_products_grid_cloudname1(inputs);
	return en_products_grid_cloudname1(inputs);
});
var en_products_grid_cloudprice1 = () => {
	return `$29/mo`;
};
var fr_products_grid_cloudprice1 = () => {
	return `29 €/mois`;
};
var es_products_grid_cloudprice1 = () => {
	return `29 $/mes`;
};
var de_products_grid_cloudprice1 = () => {
	return `29 $/Monat`;
};
var it_products_grid_cloudprice1 = () => {
	return `29 $/mese`;
};
var pt_products_grid_cloudprice1 = () => {
	return `29 $/mês`;
};
var zh_products_grid_cloudprice1 = () => {
	return `29 $/月`;
};
var ja_products_grid_cloudprice1 = () => {
	return `29ドル/月`;
};
var ko_products_grid_cloudprice1 = () => {
	return `$29/mo`;
};
var ru_products_grid_cloudprice1 = () => {
	return `29 $/мес`;
};
var products_grid_cloudprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_cloudprice1(inputs);
	if (locale === "es") return es_products_grid_cloudprice1(inputs);
	if (locale === "de") return de_products_grid_cloudprice1(inputs);
	if (locale === "it") return it_products_grid_cloudprice1(inputs);
	if (locale === "pt") return pt_products_grid_cloudprice1(inputs);
	if (locale === "zh") return zh_products_grid_cloudprice1(inputs);
	if (locale === "ja") return ja_products_grid_cloudprice1(inputs);
	if (locale === "ko") return ko_products_grid_cloudprice1(inputs);
	if (locale === "ru") return ru_products_grid_cloudprice1(inputs);
	return en_products_grid_cloudprice1(inputs);
});
var en_products_grid_enterprisedesc1 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var fr_products_grid_enterprisedesc1 = () => {
	return `On-premise avec SSO, journaux d'audit, SLA et support dédié.`;
};
var es_products_grid_enterprisedesc1 = () => {
	return `Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.`;
};
var de_products_grid_enterprisedesc1 = () => {
	return `On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.`;
};
var it_products_grid_enterprisedesc1 = () => {
	return `Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.`;
};
var pt_products_grid_enterprisedesc1 = () => {
	return `Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.`;
};
var zh_products_grid_enterprisedesc1 = () => {
	return `支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。`;
};
var ja_products_grid_enterprisedesc1 = () => {
	return `SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。`;
};
var ko_products_grid_enterprisedesc1 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var ru_products_grid_enterprisedesc1 = () => {
	return `Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.`;
};
var products_grid_enterprisedesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_enterprisedesc1(inputs);
	if (locale === "es") return es_products_grid_enterprisedesc1(inputs);
	if (locale === "de") return de_products_grid_enterprisedesc1(inputs);
	if (locale === "it") return it_products_grid_enterprisedesc1(inputs);
	if (locale === "pt") return pt_products_grid_enterprisedesc1(inputs);
	if (locale === "zh") return zh_products_grid_enterprisedesc1(inputs);
	if (locale === "ja") return ja_products_grid_enterprisedesc1(inputs);
	if (locale === "ko") return ko_products_grid_enterprisedesc1(inputs);
	if (locale === "ru") return ru_products_grid_enterprisedesc1(inputs);
	return en_products_grid_enterprisedesc1(inputs);
});
var en_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var fr_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var es_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var de_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var it_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var pt_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var zh_products_grid_enterprisename1 = () => {
	return `基准测试企业版`;
};
var ja_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var ko_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var ru_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_enterprisename1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_enterprisename1(inputs);
	if (locale === "es") return es_products_grid_enterprisename1(inputs);
	if (locale === "de") return de_products_grid_enterprisename1(inputs);
	if (locale === "it") return it_products_grid_enterprisename1(inputs);
	if (locale === "pt") return pt_products_grid_enterprisename1(inputs);
	if (locale === "zh") return zh_products_grid_enterprisename1(inputs);
	if (locale === "ja") return ja_products_grid_enterprisename1(inputs);
	if (locale === "ko") return ko_products_grid_enterprisename1(inputs);
	if (locale === "ru") return ru_products_grid_enterprisename1(inputs);
	return en_products_grid_enterprisename1(inputs);
});
var en_products_grid_enterpriseprice1 = () => {
	return `Contact Us`;
};
var fr_products_grid_enterpriseprice1 = () => {
	return `Nous contacter`;
};
var es_products_grid_enterpriseprice1 = () => {
	return `Contáctanos`;
};
var de_products_grid_enterpriseprice1 = () => {
	return `Kontaktieren Sie uns`;
};
var it_products_grid_enterpriseprice1 = () => {
	return `Contattaci`;
};
var pt_products_grid_enterpriseprice1 = () => {
	return `Contate-nos`;
};
var zh_products_grid_enterpriseprice1 = () => {
	return `联系我们`;
};
var ja_products_grid_enterpriseprice1 = () => {
	return `お問い合わせ`;
};
var ko_products_grid_enterpriseprice1 = () => {
	return `Contact Us`;
};
var ru_products_grid_enterpriseprice1 = () => {
	return `Связаться с нами`;
};
var products_grid_enterpriseprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_enterpriseprice1(inputs);
	if (locale === "es") return es_products_grid_enterpriseprice1(inputs);
	if (locale === "de") return de_products_grid_enterpriseprice1(inputs);
	if (locale === "it") return it_products_grid_enterpriseprice1(inputs);
	if (locale === "pt") return pt_products_grid_enterpriseprice1(inputs);
	if (locale === "zh") return zh_products_grid_enterpriseprice1(inputs);
	if (locale === "ja") return ja_products_grid_enterpriseprice1(inputs);
	if (locale === "ko") return ko_products_grid_enterpriseprice1(inputs);
	if (locale === "ru") return ru_products_grid_enterpriseprice1(inputs);
	return en_products_grid_enterpriseprice1(inputs);
});
var en_products_grid_learnmore1 = () => {
	return `Learn More`;
};
var fr_products_grid_learnmore1 = () => {
	return `En savoir plus`;
};
var es_products_grid_learnmore1 = () => {
	return `Más información`;
};
var de_products_grid_learnmore1 = () => {
	return `Mehr erfahren`;
};
var it_products_grid_learnmore1 = () => {
	return `Scopri di più`;
};
var pt_products_grid_learnmore1 = () => {
	return `Saiba Mais`;
};
var zh_products_grid_learnmore1 = () => {
	return `了解更多`;
};
var ja_products_grid_learnmore1 = () => {
	return `詳細はこちら`;
};
var ko_products_grid_learnmore1 = () => {
	return `Learn More`;
};
var ru_products_grid_learnmore1 = () => {
	return `Узнать больше`;
};
var products_grid_learnmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_learnmore1(inputs);
	if (locale === "es") return es_products_grid_learnmore1(inputs);
	if (locale === "de") return de_products_grid_learnmore1(inputs);
	if (locale === "it") return it_products_grid_learnmore1(inputs);
	if (locale === "pt") return pt_products_grid_learnmore1(inputs);
	if (locale === "zh") return zh_products_grid_learnmore1(inputs);
	if (locale === "ja") return ja_products_grid_learnmore1(inputs);
	if (locale === "ko") return ko_products_grid_learnmore1(inputs);
	if (locale === "ru") return ru_products_grid_learnmore1(inputs);
	return en_products_grid_learnmore1(inputs);
});
var en_products_grid_migrationdesc1 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var fr_products_grid_migrationdesc1 = () => {
	return `Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.`;
};
var es_products_grid_migrationdesc1 = () => {
	return `Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.`;
};
var de_products_grid_migrationdesc1 = () => {
	return `KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.`;
};
var it_products_grid_migrationdesc1 = () => {
	return `Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.`;
};
var pt_products_grid_migrationdesc1 = () => {
	return `Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.`;
};
var zh_products_grid_migrationdesc1 = () => {
	return `AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。`;
};
var ja_products_grid_migrationdesc1 = () => {
	return `ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。`;
};
var ko_products_grid_migrationdesc1 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var ru_products_grid_migrationdesc1 = () => {
	return `Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.`;
};
var products_grid_migrationdesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_migrationdesc1(inputs);
	if (locale === "es") return es_products_grid_migrationdesc1(inputs);
	if (locale === "de") return de_products_grid_migrationdesc1(inputs);
	if (locale === "it") return it_products_grid_migrationdesc1(inputs);
	if (locale === "pt") return pt_products_grid_migrationdesc1(inputs);
	if (locale === "zh") return zh_products_grid_migrationdesc1(inputs);
	if (locale === "ja") return ja_products_grid_migrationdesc1(inputs);
	if (locale === "ko") return ko_products_grid_migrationdesc1(inputs);
	if (locale === "ru") return ru_products_grid_migrationdesc1(inputs);
	return en_products_grid_migrationdesc1(inputs);
});
var en_products_grid_migrationname1 = () => {
	return `Migration Assistant`;
};
var fr_products_grid_migrationname1 = () => {
	return `Assistant de migration`;
};
var es_products_grid_migrationname1 = () => {
	return `Asistente de migración`;
};
var de_products_grid_migrationname1 = () => {
	return `Migrationsassistent`;
};
var it_products_grid_migrationname1 = () => {
	return `Assistente alla migrazione`;
};
var pt_products_grid_migrationname1 = () => {
	return `Assistente de migração`;
};
var zh_products_grid_migrationname1 = () => {
	return `迁移助手`;
};
var ja_products_grid_migrationname1 = () => {
	return `移行アシスタント`;
};
var ko_products_grid_migrationname1 = () => {
	return `Migration Assistant`;
};
var ru_products_grid_migrationname1 = () => {
	return `Помощник по миграции`;
};
var products_grid_migrationname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_migrationname1(inputs);
	if (locale === "es") return es_products_grid_migrationname1(inputs);
	if (locale === "de") return de_products_grid_migrationname1(inputs);
	if (locale === "it") return it_products_grid_migrationname1(inputs);
	if (locale === "pt") return pt_products_grid_migrationname1(inputs);
	if (locale === "zh") return zh_products_grid_migrationname1(inputs);
	if (locale === "ja") return ja_products_grid_migrationname1(inputs);
	if (locale === "ko") return ko_products_grid_migrationname1(inputs);
	if (locale === "ru") return ru_products_grid_migrationname1(inputs);
	return en_products_grid_migrationname1(inputs);
});
var en_products_grid_migrationprice1 = () => {
	return `$99 one-time`;
};
var fr_products_grid_migrationprice1 = () => {
	return `99 € (unique)`;
};
var es_products_grid_migrationprice1 = () => {
	return `99 $ pago único`;
};
var de_products_grid_migrationprice1 = () => {
	return `Einmalig 99 $`;
};
var it_products_grid_migrationprice1 = () => {
	return `99 $ una tantum`;
};
var pt_products_grid_migrationprice1 = () => {
	return `99 $ taxa única`;
};
var zh_products_grid_migrationprice1 = () => {
	return `99 $ 一次性费用`;
};
var ja_products_grid_migrationprice1 = () => {
	return `99ドル（一回限り）`;
};
var ko_products_grid_migrationprice1 = () => {
	return `$99 one-time`;
};
var ru_products_grid_migrationprice1 = () => {
	return `99 $ (разово)`;
};
var products_grid_migrationprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_migrationprice1(inputs);
	if (locale === "es") return es_products_grid_migrationprice1(inputs);
	if (locale === "de") return de_products_grid_migrationprice1(inputs);
	if (locale === "it") return it_products_grid_migrationprice1(inputs);
	if (locale === "pt") return pt_products_grid_migrationprice1(inputs);
	if (locale === "zh") return zh_products_grid_migrationprice1(inputs);
	if (locale === "ja") return ja_products_grid_migrationprice1(inputs);
	if (locale === "ko") return ko_products_grid_migrationprice1(inputs);
	if (locale === "ru") return ru_products_grid_migrationprice1(inputs);
	return en_products_grid_migrationprice1(inputs);
});
var en_products_grid_optimizerdesc1 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var fr_products_grid_optimizerdesc1 = () => {
	return `Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).`;
};
var es_products_grid_optimizerdesc1 = () => {
	return `Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.`;
};
var de_products_grid_optimizerdesc1 = () => {
	return `Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.`;
};
var it_products_grid_optimizerdesc1 = () => {
	return `Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.`;
};
var pt_products_grid_optimizerdesc1 = () => {
	return `Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.`;
};
var zh_products_grid_optimizerdesc1 = () => {
	return `通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。`;
};
var ja_products_grid_optimizerdesc1 = () => {
	return `ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。`;
};
var ko_products_grid_optimizerdesc1 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var ru_products_grid_optimizerdesc1 = () => {
	return `Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.`;
};
var products_grid_optimizerdesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_optimizerdesc1(inputs);
	if (locale === "es") return es_products_grid_optimizerdesc1(inputs);
	if (locale === "de") return de_products_grid_optimizerdesc1(inputs);
	if (locale === "it") return it_products_grid_optimizerdesc1(inputs);
	if (locale === "pt") return pt_products_grid_optimizerdesc1(inputs);
	if (locale === "zh") return zh_products_grid_optimizerdesc1(inputs);
	if (locale === "ja") return ja_products_grid_optimizerdesc1(inputs);
	if (locale === "ko") return ko_products_grid_optimizerdesc1(inputs);
	if (locale === "ru") return ru_products_grid_optimizerdesc1(inputs);
	return en_products_grid_optimizerdesc1(inputs);
});
var en_products_grid_optimizername1 = () => {
	return `Bundle Optimizer`;
};
var fr_products_grid_optimizername1 = () => {
	return `Optimiseur de bundle`;
};
var es_products_grid_optimizername1 = () => {
	return `Optimizador de bundle`;
};
var de_products_grid_optimizername1 = () => {
	return `Bundle-Optimierer`;
};
var it_products_grid_optimizername1 = () => {
	return `Ottimizzatore del bundle`;
};
var pt_products_grid_optimizername1 = () => {
	return `Otimizador de bundle`;
};
var zh_products_grid_optimizername1 = () => {
	return `包优化器`;
};
var ja_products_grid_optimizername1 = () => {
	return `バンドルオプティマイザー`;
};
var ko_products_grid_optimizername1 = () => {
	return `Bundle Optimizer`;
};
var ru_products_grid_optimizername1 = () => {
	return `Оптимизатор бандла`;
};
var products_grid_optimizername1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_optimizername1(inputs);
	if (locale === "es") return es_products_grid_optimizername1(inputs);
	if (locale === "de") return de_products_grid_optimizername1(inputs);
	if (locale === "it") return it_products_grid_optimizername1(inputs);
	if (locale === "pt") return pt_products_grid_optimizername1(inputs);
	if (locale === "zh") return zh_products_grid_optimizername1(inputs);
	if (locale === "ja") return ja_products_grid_optimizername1(inputs);
	if (locale === "ko") return ko_products_grid_optimizername1(inputs);
	if (locale === "ru") return ru_products_grid_optimizername1(inputs);
	return en_products_grid_optimizername1(inputs);
});
var en_products_grid_optimizerprice1 = () => {
	return `$49/mo`;
};
var fr_products_grid_optimizerprice1 = () => {
	return `49 €/mois`;
};
var es_products_grid_optimizerprice1 = () => {
	return `49 $/mes`;
};
var de_products_grid_optimizerprice1 = () => {
	return `49 $/Monat`;
};
var it_products_grid_optimizerprice1 = () => {
	return `49 $/mese`;
};
var pt_products_grid_optimizerprice1 = () => {
	return `49 $/mês`;
};
var zh_products_grid_optimizerprice1 = () => {
	return `49 $/月`;
};
var ja_products_grid_optimizerprice1 = () => {
	return `49ドル/月`;
};
var ko_products_grid_optimizerprice1 = () => {
	return `$49/mo`;
};
var ru_products_grid_optimizerprice1 = () => {
	return `49 $/мес`;
};
var products_grid_optimizerprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_optimizerprice1(inputs);
	if (locale === "es") return es_products_grid_optimizerprice1(inputs);
	if (locale === "de") return de_products_grid_optimizerprice1(inputs);
	if (locale === "it") return it_products_grid_optimizerprice1(inputs);
	if (locale === "pt") return pt_products_grid_optimizerprice1(inputs);
	if (locale === "zh") return zh_products_grid_optimizerprice1(inputs);
	if (locale === "ja") return ja_products_grid_optimizerprice1(inputs);
	if (locale === "ko") return ko_products_grid_optimizerprice1(inputs);
	if (locale === "ru") return ru_products_grid_optimizerprice1(inputs);
	return en_products_grid_optimizerprice1(inputs);
});
var en_products_grid_qadesc1 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var fr_products_grid_qadesc1 = () => {
	return `Contrôles automatiques : clés manquantes, pluriels, contexte.`;
};
var es_products_grid_qadesc1 = () => {
	return `Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.`;
};
var de_products_grid_qadesc1 = () => {
	return `Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.`;
};
var it_products_grid_qadesc1 = () => {
	return `Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.`;
};
var pt_products_grid_qadesc1 = () => {
	return `Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.`;
};
var zh_products_grid_qadesc1 = () => {
	return `自动检查翻译缺失、复数问题和上下文错误。`;
};
var ja_products_grid_qadesc1 = () => {
	return `翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。`;
};
var ko_products_grid_qadesc1 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var ru_products_grid_qadesc1 = () => {
	return `Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.`;
};
var products_grid_qadesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_qadesc1(inputs);
	if (locale === "es") return es_products_grid_qadesc1(inputs);
	if (locale === "de") return de_products_grid_qadesc1(inputs);
	if (locale === "it") return it_products_grid_qadesc1(inputs);
	if (locale === "pt") return pt_products_grid_qadesc1(inputs);
	if (locale === "zh") return zh_products_grid_qadesc1(inputs);
	if (locale === "ja") return ja_products_grid_qadesc1(inputs);
	if (locale === "ko") return ko_products_grid_qadesc1(inputs);
	if (locale === "ru") return ru_products_grid_qadesc1(inputs);
	return en_products_grid_qadesc1(inputs);
});
var en_products_grid_qaname1 = () => {
	return `Translation QA`;
};
var fr_products_grid_qaname1 = () => {
	return `QA des traductions`;
};
var es_products_grid_qaname1 = () => {
	return `QA de traducción`;
};
var de_products_grid_qaname1 = () => {
	return `Übersetzungs-QA`;
};
var it_products_grid_qaname1 = () => {
	return `QA delle traduzioni`;
};
var pt_products_grid_qaname1 = () => {
	return `QA de tradução`;
};
var zh_products_grid_qaname1 = () => {
	return `翻译 QA`;
};
var ja_products_grid_qaname1 = () => {
	return `翻訳QA`;
};
var ko_products_grid_qaname1 = () => {
	return `Translation QA`;
};
var ru_products_grid_qaname1 = () => {
	return `QA переводов`;
};
var products_grid_qaname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_qaname1(inputs);
	if (locale === "es") return es_products_grid_qaname1(inputs);
	if (locale === "de") return de_products_grid_qaname1(inputs);
	if (locale === "it") return it_products_grid_qaname1(inputs);
	if (locale === "pt") return pt_products_grid_qaname1(inputs);
	if (locale === "zh") return zh_products_grid_qaname1(inputs);
	if (locale === "ja") return ja_products_grid_qaname1(inputs);
	if (locale === "ko") return ko_products_grid_qaname1(inputs);
	if (locale === "ru") return ru_products_grid_qaname1(inputs);
	return en_products_grid_qaname1(inputs);
});
var en_products_grid_qaprice1 = () => {
	return `$19/mo`;
};
var fr_products_grid_qaprice1 = () => {
	return `19 €/mois`;
};
var es_products_grid_qaprice1 = () => {
	return `19 $/mes`;
};
var de_products_grid_qaprice1 = () => {
	return `19 $/Monat`;
};
var it_products_grid_qaprice1 = () => {
	return `19 $/mese`;
};
var pt_products_grid_qaprice1 = () => {
	return `19 $/mês`;
};
var zh_products_grid_qaprice1 = () => {
	return `19 $/月`;
};
var ja_products_grid_qaprice1 = () => {
	return `19ドル/月`;
};
var ko_products_grid_qaprice1 = () => {
	return `$19/mo`;
};
var ru_products_grid_qaprice1 = () => {
	return `19 $/мес`;
};
var products_grid_qaprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_products_grid_qaprice1(inputs);
	if (locale === "es") return es_products_grid_qaprice1(inputs);
	if (locale === "de") return de_products_grid_qaprice1(inputs);
	if (locale === "it") return it_products_grid_qaprice1(inputs);
	if (locale === "pt") return pt_products_grid_qaprice1(inputs);
	if (locale === "zh") return zh_products_grid_qaprice1(inputs);
	if (locale === "ja") return ja_products_grid_qaprice1(inputs);
	if (locale === "ko") return ko_products_grid_qaprice1(inputs);
	if (locale === "ru") return ru_products_grid_qaprice1(inputs);
	return en_products_grid_qaprice1(inputs);
});
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
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
var route = derived(pathname, (p) => parsePath(p));
var root = $.from_html(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="mb-4 text-sm text-muted-foreground"> </p></div> <div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"> </span> <button type="button" class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div></div>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function ProductsGrid($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const products = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: products_grid_cliname1(),
				desc: products_grid_clidesc1(),
				price: products_grid_cliprice1()
			},
			{
				name: products_grid_cloudname1(),
				desc: products_grid_clouddesc1(),
				price: products_grid_cloudprice1()
			},
			{
				name: products_grid_enterprisename1(),
				desc: products_grid_enterprisedesc1(),
				price: products_grid_enterpriseprice1()
			},
			{
				name: products_grid_migrationname1(),
				desc: products_grid_migrationdesc1(),
				price: products_grid_migrationprice1()
			},
			{
				name: products_grid_qaname1(),
				desc: products_grid_qadesc1(),
				price: products_grid_qaprice1()
			},
			{
				name: products_grid_optimizername1(),
				desc: products_grid_optimizerdesc1(),
				price: products_grid_optimizerprice1()
			}
		];
	});
	var div = root_1();
	$.each(div, 21, () => $.get(products), $.index, ($$anchor, p) => {
		var div_1 = root();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text = $.only_child(h3, true);
		var p_1 = $.sibling(h3, 2);
		var text_1 = $.only_child(p_1, true);
		$.reset(div_2);
		var div_3 = $.sibling(div_2, 2);
		var span = $.child(div_3);
		var text_2 = $.only_child(span, true);
		var button = $.sibling(span, 2);
		var text_3 = $.only_child(button, true);
		$.reset(div_3);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $.get(p).name);
			$.set_text(text_1, $.get(p).desc);
			$.set_text(text_2, $.get(p).price);
			$.set_text(text_3, $0);
		}, [() => products_grid_learnmore1()]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { ProductsGrid as default };

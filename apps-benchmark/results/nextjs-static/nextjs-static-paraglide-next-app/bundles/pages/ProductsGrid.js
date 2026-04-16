import { Profiler, useEffect } from "react";
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
var en_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var fr_products_grid_benchmarkcli1 = () => {
	return `CLI Benchmark`;
};
var es_products_grid_benchmarkcli1 = () => {
	return `CLI de Benchmark`;
};
var de_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var it_products_grid_benchmarkcli1 = () => {
	return `CLI del Benchmark`;
};
var pt_products_grid_benchmarkcli1 = () => {
	return `CLI de Benchmark`;
};
var zh_products_grid_benchmarkcli1 = () => {
	return `基准测试 CLI`;
};
var ja_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var ko_products_grid_benchmarkcli1 = () => {
	return `Benchmark CLI`;
};
var ru_products_grid_benchmarkcli1 = () => {
	return `CLI для бенчмаркинга`;
};
var products_grid_benchmarkcli1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkcli1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkcli1(inputs);
	if (locale === "es") return es_products_grid_benchmarkcli1(inputs);
	if (locale === "de") return de_products_grid_benchmarkcli1(inputs);
	if (locale === "it") return it_products_grid_benchmarkcli1(inputs);
	if (locale === "pt") return pt_products_grid_benchmarkcli1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkcli1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkcli1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkcli1(inputs);
	return ru_products_grid_benchmarkcli1(inputs);
});
var en_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var fr_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.`;
};
var es_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.`;
};
var de_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.`;
};
var it_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.`;
};
var pt_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.`;
};
var zh_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `在终端本地运行基准测试。支持自定义配置和 CI 集成。`;
};
var ja_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。`;
};
var ko_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.`;
};
var ru_products_grid_runbenchmarkslocallyfromyour4 = () => {
	return `Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.`;
};
var products_grid_runbenchmarkslocallyfromyour4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "fr") return fr_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "es") return es_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "de") return de_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "it") return it_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "pt") return pt_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "zh") return zh_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "ja") return ja_products_grid_runbenchmarkslocallyfromyour4(inputs);
	if (locale === "ko") return ko_products_grid_runbenchmarkslocallyfromyour4(inputs);
	return ru_products_grid_runbenchmarkslocallyfromyour4(inputs);
});
var en_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var fr_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var es_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var de_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var it_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var pt_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var zh_products_grid_benchmarkcloud1 = () => {
	return `云基准测试`;
};
var ja_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var ko_products_grid_benchmarkcloud1 = () => {
	return `Benchmark Cloud`;
};
var ru_products_grid_benchmarkcloud1 = () => {
	return `Облачный бенчмаркинг`;
};
var products_grid_benchmarkcloud1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkcloud1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkcloud1(inputs);
	if (locale === "es") return es_products_grid_benchmarkcloud1(inputs);
	if (locale === "de") return de_products_grid_benchmarkcloud1(inputs);
	if (locale === "it") return it_products_grid_benchmarkcloud1(inputs);
	if (locale === "pt") return pt_products_grid_benchmarkcloud1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkcloud1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkcloud1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkcloud1(inputs);
	return ru_products_grid_benchmarkcloud1(inputs);
});
var en_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var fr_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.`;
};
var es_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.`;
};
var de_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.`;
};
var it_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.`;
};
var pt_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.`;
};
var zh_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `自动化的云基准测试，支持历史追踪、警报和团队仪表板。`;
};
var ja_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。`;
};
var ko_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.`;
};
var ru_products_grid_automatedcloudbasedbenchmarkingwith4 = () => {
	return `Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "fr") return fr_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "es") return es_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "de") return de_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "it") return it_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "pt") return pt_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "zh") return zh_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "ja") return ja_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	if (locale === "ko") return ko_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
	return ru_products_grid_automatedcloudbasedbenchmarkingwith4(inputs);
});
var en_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var fr_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var es_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var de_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var it_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var pt_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var zh_products_grid_benchmarkenterprise1 = () => {
	return `企业级基准测试`;
};
var ja_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var ko_products_grid_benchmarkenterprise1 = () => {
	return `Benchmark Enterprise`;
};
var ru_products_grid_benchmarkenterprise1 = () => {
	return `Корпоративный бенчмаркинг`;
};
var products_grid_benchmarkenterprise1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_benchmarkenterprise1(inputs);
	if (locale === "fr") return fr_products_grid_benchmarkenterprise1(inputs);
	if (locale === "es") return es_products_grid_benchmarkenterprise1(inputs);
	if (locale === "de") return de_products_grid_benchmarkenterprise1(inputs);
	if (locale === "it") return it_products_grid_benchmarkenterprise1(inputs);
	if (locale === "pt") return pt_products_grid_benchmarkenterprise1(inputs);
	if (locale === "zh") return zh_products_grid_benchmarkenterprise1(inputs);
	if (locale === "ja") return ja_products_grid_benchmarkenterprise1(inputs);
	if (locale === "ko") return ko_products_grid_benchmarkenterprise1(inputs);
	return ru_products_grid_benchmarkenterprise1(inputs);
});
var en_products_grid_onpremisedeploymentwithsso4 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var fr_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.`;
};
var es_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.`;
};
var de_products_grid_onpremisedeploymentwithsso4 = () => {
	return `On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.`;
};
var it_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.`;
};
var pt_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.`;
};
var zh_products_grid_onpremisedeploymentwithsso4 = () => {
	return `支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。`;
};
var ja_products_grid_onpremisedeploymentwithsso4 = () => {
	return `SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。`;
};
var ko_products_grid_onpremisedeploymentwithsso4 = () => {
	return `SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.`;
};
var ru_products_grid_onpremisedeploymentwithsso4 = () => {
	return `Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.`;
};
var products_grid_onpremisedeploymentwithsso4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "fr") return fr_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "es") return es_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "de") return de_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "it") return it_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "pt") return pt_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "zh") return zh_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "ja") return ja_products_grid_onpremisedeploymentwithsso4(inputs);
	if (locale === "ko") return ko_products_grid_onpremisedeploymentwithsso4(inputs);
	return ru_products_grid_onpremisedeploymentwithsso4(inputs);
});
var en_products_grid_contactus1 = () => {
	return `Contact Us`;
};
var fr_products_grid_contactus1 = () => {
	return `Contactez-nous`;
};
var es_products_grid_contactus1 = () => {
	return `Contáctanos`;
};
var de_products_grid_contactus1 = () => {
	return `Kontaktieren Sie uns`;
};
var it_products_grid_contactus1 = () => {
	return `Contattaci`;
};
var pt_products_grid_contactus1 = () => {
	return `Contate-nos`;
};
var zh_products_grid_contactus1 = () => {
	return `联系我们`;
};
var ja_products_grid_contactus1 = () => {
	return `お問い合わせ`;
};
var ko_products_grid_contactus1 = () => {
	return `문의하기`;
};
var ru_products_grid_contactus1 = () => {
	return `Связаться с нами`;
};
var products_grid_contactus1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_contactus1(inputs);
	if (locale === "fr") return fr_products_grid_contactus1(inputs);
	if (locale === "es") return es_products_grid_contactus1(inputs);
	if (locale === "de") return de_products_grid_contactus1(inputs);
	if (locale === "it") return it_products_grid_contactus1(inputs);
	if (locale === "pt") return pt_products_grid_contactus1(inputs);
	if (locale === "zh") return zh_products_grid_contactus1(inputs);
	if (locale === "ja") return ja_products_grid_contactus1(inputs);
	if (locale === "ko") return ko_products_grid_contactus1(inputs);
	return ru_products_grid_contactus1(inputs);
});
var en_products_grid_migrationassistant1 = () => {
	return `Migration Assistant`;
};
var fr_products_grid_migrationassistant1 = () => {
	return `Assistant de migration`;
};
var es_products_grid_migrationassistant1 = () => {
	return `Asistente de migración`;
};
var de_products_grid_migrationassistant1 = () => {
	return `Migrationsassistent`;
};
var it_products_grid_migrationassistant1 = () => {
	return `Assistente alla Migrazione`;
};
var pt_products_grid_migrationassistant1 = () => {
	return `Assistente de Migração`;
};
var zh_products_grid_migrationassistant1 = () => {
	return `迁移助手`;
};
var ja_products_grid_migrationassistant1 = () => {
	return `移行アシスタント`;
};
var ko_products_grid_migrationassistant1 = () => {
	return `마이그레이션 어시스턴트`;
};
var ru_products_grid_migrationassistant1 = () => {
	return `Помощник по миграции`;
};
var products_grid_migrationassistant1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_migrationassistant1(inputs);
	if (locale === "fr") return fr_products_grid_migrationassistant1(inputs);
	if (locale === "es") return es_products_grid_migrationassistant1(inputs);
	if (locale === "de") return de_products_grid_migrationassistant1(inputs);
	if (locale === "it") return it_products_grid_migrationassistant1(inputs);
	if (locale === "pt") return pt_products_grid_migrationassistant1(inputs);
	if (locale === "zh") return zh_products_grid_migrationassistant1(inputs);
	if (locale === "ja") return ja_products_grid_migrationassistant1(inputs);
	if (locale === "ko") return ko_products_grid_migrationassistant1(inputs);
	return ru_products_grid_migrationassistant1(inputs);
});
var en_products_grid_aipoweredtoolthathelps4 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var fr_products_grid_aipoweredtoolthathelps4 = () => {
	return `Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.`;
};
var es_products_grid_aipoweredtoolthathelps4 = () => {
	return `Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.`;
};
var de_products_grid_aipoweredtoolthathelps4 = () => {
	return `KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.`;
};
var it_products_grid_aipoweredtoolthathelps4 = () => {
	return `Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.`;
};
var pt_products_grid_aipoweredtoolthathelps4 = () => {
	return `Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.`;
};
var zh_products_grid_aipoweredtoolthathelps4 = () => {
	return `人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。`;
};
var ja_products_grid_aipoweredtoolthathelps4 = () => {
	return `ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。`;
};
var ko_products_grid_aipoweredtoolthathelps4 = () => {
	return `다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.`;
};
var ru_products_grid_aipoweredtoolthathelps4 = () => {
	return `Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.`;
};
var products_grid_aipoweredtoolthathelps4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "fr") return fr_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "es") return es_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "de") return de_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "it") return it_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "pt") return pt_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "zh") return zh_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "ja") return ja_products_grid_aipoweredtoolthathelps4(inputs);
	if (locale === "ko") return ko_products_grid_aipoweredtoolthathelps4(inputs);
	return ru_products_grid_aipoweredtoolthathelps4(inputs);
});
var en_products_grid_translationqa1 = () => {
	return `Translation QA`;
};
var fr_products_grid_translationqa1 = () => {
	return `QA de traduction`;
};
var es_products_grid_translationqa1 = () => {
	return `QA de traducción`;
};
var de_products_grid_translationqa1 = () => {
	return `Übersetzungs-QA`;
};
var it_products_grid_translationqa1 = () => {
	return `QA delle Traduzioni`;
};
var pt_products_grid_translationqa1 = () => {
	return `QA de Tradução`;
};
var zh_products_grid_translationqa1 = () => {
	return `翻译质量保证`;
};
var ja_products_grid_translationqa1 = () => {
	return `翻訳QA`;
};
var ko_products_grid_translationqa1 = () => {
	return `번역 QA`;
};
var ru_products_grid_translationqa1 = () => {
	return `Контроль качества перевода`;
};
var products_grid_translationqa1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_translationqa1(inputs);
	if (locale === "fr") return fr_products_grid_translationqa1(inputs);
	if (locale === "es") return es_products_grid_translationqa1(inputs);
	if (locale === "de") return de_products_grid_translationqa1(inputs);
	if (locale === "it") return it_products_grid_translationqa1(inputs);
	if (locale === "pt") return pt_products_grid_translationqa1(inputs);
	if (locale === "zh") return zh_products_grid_translationqa1(inputs);
	if (locale === "ja") return ja_products_grid_translationqa1(inputs);
	if (locale === "ko") return ko_products_grid_translationqa1(inputs);
	return ru_products_grid_translationqa1(inputs);
});
var en_products_grid_automatedqualitychecksformissing4 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var fr_products_grid_automatedqualitychecksformissing4 = () => {
	return `Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.`;
};
var es_products_grid_automatedqualitychecksformissing4 = () => {
	return `Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.`;
};
var de_products_grid_automatedqualitychecksformissing4 = () => {
	return `Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.`;
};
var it_products_grid_automatedqualitychecksformissing4 = () => {
	return `Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.`;
};
var pt_products_grid_automatedqualitychecksformissing4 = () => {
	return `Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.`;
};
var zh_products_grid_automatedqualitychecksformissing4 = () => {
	return `针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。`;
};
var ja_products_grid_automatedqualitychecksformissing4 = () => {
	return `翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。`;
};
var ko_products_grid_automatedqualitychecksformissing4 = () => {
	return `누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.`;
};
var ru_products_grid_automatedqualitychecksformissing4 = () => {
	return `Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.`;
};
var products_grid_automatedqualitychecksformissing4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "fr") return fr_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "es") return es_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "de") return de_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "it") return it_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "pt") return pt_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "zh") return zh_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "ja") return ja_products_grid_automatedqualitychecksformissing4(inputs);
	if (locale === "ko") return ko_products_grid_automatedqualitychecksformissing4(inputs);
	return ru_products_grid_automatedqualitychecksformissing4(inputs);
});
var en_products_grid_bundleoptimizer1 = () => {
	return `Bundle Optimizer`;
};
var fr_products_grid_bundleoptimizer1 = () => {
	return `Optimiseur de bundle`;
};
var es_products_grid_bundleoptimizer1 = () => {
	return `Optimizador de bundle`;
};
var de_products_grid_bundleoptimizer1 = () => {
	return `Bundle-Optimierer`;
};
var it_products_grid_bundleoptimizer1 = () => {
	return `Ottimizzatore del Bundle`;
};
var pt_products_grid_bundleoptimizer1 = () => {
	return `Otimizador de Bundle`;
};
var zh_products_grid_bundleoptimizer1 = () => {
	return `包优化器`;
};
var ja_products_grid_bundleoptimizer1 = () => {
	return `バンドルオプティマイザー`;
};
var ko_products_grid_bundleoptimizer1 = () => {
	return `번들 옵티마이저`;
};
var ru_products_grid_bundleoptimizer1 = () => {
	return `Оптимизатор бандлов`;
};
var products_grid_bundleoptimizer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_bundleoptimizer1(inputs);
	if (locale === "fr") return fr_products_grid_bundleoptimizer1(inputs);
	if (locale === "es") return es_products_grid_bundleoptimizer1(inputs);
	if (locale === "de") return de_products_grid_bundleoptimizer1(inputs);
	if (locale === "it") return it_products_grid_bundleoptimizer1(inputs);
	if (locale === "pt") return pt_products_grid_bundleoptimizer1(inputs);
	if (locale === "zh") return zh_products_grid_bundleoptimizer1(inputs);
	if (locale === "ja") return ja_products_grid_bundleoptimizer1(inputs);
	if (locale === "ko") return ko_products_grid_bundleoptimizer1(inputs);
	return ru_products_grid_bundleoptimizer1(inputs);
});
var en_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var fr_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.`;
};
var es_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.`;
};
var de_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.`;
};
var it_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.`;
};
var pt_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.`;
};
var zh_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。`;
};
var ja_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。`;
};
var ko_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.`;
};
var ru_products_grid_analyzesandoptimizesyouri18n4 = () => {
	return `Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.`;
};
var products_grid_analyzesandoptimizesyouri18n4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "fr") return fr_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "es") return es_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "de") return de_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "it") return it_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "pt") return pt_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "zh") return zh_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "ja") return ja_products_grid_analyzesandoptimizesyouri18n4(inputs);
	if (locale === "ko") return ko_products_grid_analyzesandoptimizesyouri18n4(inputs);
	return ru_products_grid_analyzesandoptimizesyouri18n4(inputs);
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
	return `詳細を見る`;
};
var ko_products_grid_learnmore1 = () => {
	return `더 알아보기`;
};
var ru_products_grid_learnmore1 = () => {
	return `Узнать больше`;
};
var products_grid_learnmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_learnmore1(inputs);
	if (locale === "fr") return fr_products_grid_learnmore1(inputs);
	if (locale === "es") return es_products_grid_learnmore1(inputs);
	if (locale === "de") return de_products_grid_learnmore1(inputs);
	if (locale === "it") return it_products_grid_learnmore1(inputs);
	if (locale === "pt") return pt_products_grid_learnmore1(inputs);
	if (locale === "zh") return zh_products_grid_learnmore1(inputs);
	if (locale === "ja") return ja_products_grid_learnmore1(inputs);
	if (locale === "ko") return ko_products_grid_learnmore1(inputs);
	return ru_products_grid_learnmore1(inputs);
});
var en_products_grid_pricefree1 = () => {
	return `Free`;
};
var fr_products_grid_pricefree1 = () => {
	return `Gratuit`;
};
var es_products_grid_pricefree1 = en_products_grid_pricefree1;
var de_products_grid_pricefree1 = en_products_grid_pricefree1;
var it_products_grid_pricefree1 = en_products_grid_pricefree1;
var pt_products_grid_pricefree1 = en_products_grid_pricefree1;
var zh_products_grid_pricefree1 = en_products_grid_pricefree1;
var ja_products_grid_pricefree1 = en_products_grid_pricefree1;
var ko_products_grid_pricefree1 = en_products_grid_pricefree1;
var ru_products_grid_pricefree1 = en_products_grid_pricefree1;
var products_grid_pricefree1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_pricefree1(inputs);
	if (locale === "fr") return fr_products_grid_pricefree1(inputs);
	if (locale === "es") return es_products_grid_pricefree1(inputs);
	if (locale === "de") return de_products_grid_pricefree1(inputs);
	if (locale === "it") return it_products_grid_pricefree1(inputs);
	if (locale === "pt") return pt_products_grid_pricefree1(inputs);
	if (locale === "zh") return zh_products_grid_pricefree1(inputs);
	if (locale === "ja") return ja_products_grid_pricefree1(inputs);
	if (locale === "ko") return ko_products_grid_pricefree1(inputs);
	return ru_products_grid_pricefree1(inputs);
});
var en_products_grid_price29mo = () => {
	return `$29/mo`;
};
var fr_products_grid_price29mo = () => {
	return `29 €/mois`;
};
var es_products_grid_price29mo = en_products_grid_price29mo;
var de_products_grid_price29mo = en_products_grid_price29mo;
var it_products_grid_price29mo = en_products_grid_price29mo;
var pt_products_grid_price29mo = en_products_grid_price29mo;
var zh_products_grid_price29mo = en_products_grid_price29mo;
var ja_products_grid_price29mo = en_products_grid_price29mo;
var ko_products_grid_price29mo = en_products_grid_price29mo;
var ru_products_grid_price29mo = en_products_grid_price29mo;
var products_grid_price29mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_price29mo(inputs);
	if (locale === "fr") return fr_products_grid_price29mo(inputs);
	if (locale === "es") return es_products_grid_price29mo(inputs);
	if (locale === "de") return de_products_grid_price29mo(inputs);
	if (locale === "it") return it_products_grid_price29mo(inputs);
	if (locale === "pt") return pt_products_grid_price29mo(inputs);
	if (locale === "zh") return zh_products_grid_price29mo(inputs);
	if (locale === "ja") return ja_products_grid_price29mo(inputs);
	if (locale === "ko") return ko_products_grid_price29mo(inputs);
	return ru_products_grid_price29mo(inputs);
});
var en_products_grid_price99once = () => {
	return `$99 one-time`;
};
var fr_products_grid_price99once = () => {
	return `99 € une fois`;
};
var es_products_grid_price99once = en_products_grid_price99once;
var de_products_grid_price99once = en_products_grid_price99once;
var it_products_grid_price99once = en_products_grid_price99once;
var pt_products_grid_price99once = en_products_grid_price99once;
var zh_products_grid_price99once = en_products_grid_price99once;
var ja_products_grid_price99once = en_products_grid_price99once;
var ko_products_grid_price99once = en_products_grid_price99once;
var ru_products_grid_price99once = en_products_grid_price99once;
var products_grid_price99once = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_price99once(inputs);
	if (locale === "fr") return fr_products_grid_price99once(inputs);
	if (locale === "es") return es_products_grid_price99once(inputs);
	if (locale === "de") return de_products_grid_price99once(inputs);
	if (locale === "it") return it_products_grid_price99once(inputs);
	if (locale === "pt") return pt_products_grid_price99once(inputs);
	if (locale === "zh") return zh_products_grid_price99once(inputs);
	if (locale === "ja") return ja_products_grid_price99once(inputs);
	if (locale === "ko") return ko_products_grid_price99once(inputs);
	return ru_products_grid_price99once(inputs);
});
var en_products_grid_price19mo = () => {
	return `$19/mo`;
};
var fr_products_grid_price19mo = () => {
	return `19 €/mois`;
};
var es_products_grid_price19mo = en_products_grid_price19mo;
var de_products_grid_price19mo = en_products_grid_price19mo;
var it_products_grid_price19mo = en_products_grid_price19mo;
var pt_products_grid_price19mo = en_products_grid_price19mo;
var zh_products_grid_price19mo = en_products_grid_price19mo;
var ja_products_grid_price19mo = en_products_grid_price19mo;
var ko_products_grid_price19mo = en_products_grid_price19mo;
var ru_products_grid_price19mo = en_products_grid_price19mo;
var products_grid_price19mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_price19mo(inputs);
	if (locale === "fr") return fr_products_grid_price19mo(inputs);
	if (locale === "es") return es_products_grid_price19mo(inputs);
	if (locale === "de") return de_products_grid_price19mo(inputs);
	if (locale === "it") return it_products_grid_price19mo(inputs);
	if (locale === "pt") return pt_products_grid_price19mo(inputs);
	if (locale === "zh") return zh_products_grid_price19mo(inputs);
	if (locale === "ja") return ja_products_grid_price19mo(inputs);
	if (locale === "ko") return ko_products_grid_price19mo(inputs);
	return ru_products_grid_price19mo(inputs);
});
var en_products_grid_price49mo = () => {
	return `$49/mo`;
};
var fr_products_grid_price49mo = () => {
	return `49 €/mois`;
};
var es_products_grid_price49mo = en_products_grid_price49mo;
var de_products_grid_price49mo = en_products_grid_price49mo;
var it_products_grid_price49mo = en_products_grid_price49mo;
var pt_products_grid_price49mo = en_products_grid_price49mo;
var zh_products_grid_price49mo = en_products_grid_price49mo;
var ja_products_grid_price49mo = en_products_grid_price49mo;
var ko_products_grid_price49mo = en_products_grid_price49mo;
var ru_products_grid_price49mo = en_products_grid_price49mo;
var products_grid_price49mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_price49mo(inputs);
	if (locale === "fr") return fr_products_grid_price49mo(inputs);
	if (locale === "es") return es_products_grid_price49mo(inputs);
	if (locale === "de") return de_products_grid_price49mo(inputs);
	if (locale === "it") return it_products_grid_price49mo(inputs);
	if (locale === "pt") return pt_products_grid_price49mo(inputs);
	if (locale === "zh") return zh_products_grid_price49mo(inputs);
	if (locale === "ja") return ja_products_grid_price49mo(inputs);
	if (locale === "ko") return ko_products_grid_price49mo(inputs);
	return ru_products_grid_price49mo(inputs);
});
function ProductsGrid() {
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: products_grid_benchmarkcli1(),
				desc: products_grid_runbenchmarkslocallyfromyour4(),
				price: products_grid_pricefree1 ? products_grid_pricefree1() : "Free"
			},
			{
				name: products_grid_benchmarkcloud1(),
				desc: products_grid_automatedcloudbasedbenchmarkingwith4(),
				price: products_grid_price29mo ? products_grid_price29mo() : "$29/mo"
			},
			{
				name: products_grid_benchmarkenterprise1(),
				desc: products_grid_onpremisedeploymentwithsso4(),
				price: products_grid_contactus1()
			},
			{
				name: products_grid_migrationassistant1(),
				desc: products_grid_aipoweredtoolthathelps4(),
				price: products_grid_price99once ? products_grid_price99once() : "$99 one-time"
			},
			{
				name: products_grid_translationqa1(),
				desc: products_grid_automatedqualitychecksformissing4(),
				price: products_grid_price19mo ? products_grid_price19mo() : "$19/mo"
			},
			{
				name: products_grid_bundleoptimizer1(),
				desc: products_grid_analyzesandoptimizesyouri18n4(),
				price: products_grid_price49mo ? products_grid_price49mo() : "$49/mo"
			}
		].map((p) => jsxs("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [jsxs("div", { children: [jsx("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: p.name
			}), jsx("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: p.desc
			})] }), jsxs("div", {
				className: "flex items-center justify-between",
				children: [jsx("span", {
					className: "text-sm font-bold text-primary",
					children: p.price
				}), jsx("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: products_grid_learnmore1()
				})]
			})]
		}, p.name))
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
	return jsx(Wrapper, { children: jsx(ProductsGrid, {}) });
}
export { Wrapped as default };

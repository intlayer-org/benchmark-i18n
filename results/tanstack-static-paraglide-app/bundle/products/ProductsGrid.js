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
var products_grid_aipoweredtoolthathelps4$10 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var products_grid_analyzesandoptimizesyouri18n4$10 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$10 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var products_grid_automatedqualitychecksformissing4$10 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var products_grid_benchmarkcli1$10 = () => {
	return `Benchmark CLI`;
};
var products_grid_benchmarkcloud1$10 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$10 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$10 = () => {
	return `Bundle Optimizer`;
};
var products_grid_contactus1$10 = () => {
	return `Contact Us`;
};
var products_grid_learnmore1$10 = () => {
	return `Learn More`;
};
var products_grid_migrationassistant1$10 = () => {
	return `Migration Assistant`;
};
var products_grid_onpremisedeploymentwithsso4$10 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var products_grid_price19mo$2 = () => {
	return `$19/mo`;
};
var products_grid_price29mo$2 = () => {
	return `$29/mo`;
};
var products_grid_price49mo$2 = () => {
	return `$49/mo`;
};
var products_grid_price99once$2 = () => {
	return `$99 one-time`;
};
var products_grid_pricefree1$2 = () => {
	return `Free`;
};
var products_grid_runbenchmarkslocallyfromyour4$10 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var products_grid_translationqa1$10 = () => {
	return `Translation QA`;
};
var products_grid_aipoweredtoolthathelps4$9 = () => {
	return `Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.`;
};
var products_grid_analyzesandoptimizesyouri18n4$9 = () => {
	return `Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$9 = () => {
	return `Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.`;
};
var products_grid_automatedqualitychecksformissing4$9 = () => {
	return `Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.`;
};
var products_grid_benchmarkcli1$9 = () => {
	return `CLI Benchmark`;
};
var products_grid_benchmarkcloud1$9 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$9 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$9 = () => {
	return `Optimiseur de bundle`;
};
var products_grid_contactus1$9 = () => {
	return `Contactez-nous`;
};
var products_grid_learnmore1$9 = () => {
	return `En savoir plus`;
};
var products_grid_migrationassistant1$9 = () => {
	return `Assistant de migration`;
};
var products_grid_onpremisedeploymentwithsso4$9 = () => {
	return `Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.`;
};
var products_grid_price19mo$1 = () => {
	return `19 €/mois`;
};
var products_grid_price29mo$1 = () => {
	return `29 €/mois`;
};
var products_grid_price49mo$1 = () => {
	return `49 €/mois`;
};
var products_grid_price99once$1 = () => {
	return `99 € une fois`;
};
var products_grid_pricefree1$1 = () => {
	return `Gratuit`;
};
var products_grid_runbenchmarkslocallyfromyour4$9 = () => {
	return `Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.`;
};
var products_grid_translationqa1$9 = () => {
	return `QA de traduction`;
};
var products_grid_aipoweredtoolthathelps4$8 = () => {
	return `Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.`;
};
var products_grid_analyzesandoptimizesyouri18n4$8 = () => {
	return `Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$8 = () => {
	return `Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.`;
};
var products_grid_automatedqualitychecksformissing4$8 = () => {
	return `Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.`;
};
var products_grid_benchmarkcli1$8 = () => {
	return `CLI de Benchmark`;
};
var products_grid_benchmarkcloud1$8 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$8 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$8 = () => {
	return `Optimizador de bundle`;
};
var products_grid_contactus1$8 = () => {
	return `Contáctanos`;
};
var products_grid_learnmore1$8 = () => {
	return `Más información`;
};
var products_grid_migrationassistant1$8 = () => {
	return `Asistente de migración`;
};
var products_grid_onpremisedeploymentwithsso4$8 = () => {
	return `Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.`;
};
var products_grid_runbenchmarkslocallyfromyour4$8 = () => {
	return `Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.`;
};
var products_grid_translationqa1$8 = () => {
	return `QA de traducción`;
};
var products_grid_aipoweredtoolthathelps4$7 = () => {
	return `KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.`;
};
var products_grid_analyzesandoptimizesyouri18n4$7 = () => {
	return `Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$7 = () => {
	return `Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.`;
};
var products_grid_automatedqualitychecksformissing4$7 = () => {
	return `Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.`;
};
var products_grid_benchmarkcli1$7 = () => {
	return `Benchmark CLI`;
};
var products_grid_benchmarkcloud1$7 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$7 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$7 = () => {
	return `Bundle-Optimierer`;
};
var products_grid_contactus1$7 = () => {
	return `Kontaktieren Sie uns`;
};
var products_grid_learnmore1$7 = () => {
	return `Mehr erfahren`;
};
var products_grid_migrationassistant1$7 = () => {
	return `Migrationsassistent`;
};
var products_grid_onpremisedeploymentwithsso4$7 = () => {
	return `On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.`;
};
var products_grid_runbenchmarkslocallyfromyour4$7 = () => {
	return `Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.`;
};
var products_grid_translationqa1$7 = () => {
	return `Übersetzungs-QA`;
};
var products_grid_aipoweredtoolthathelps4$6 = () => {
	return `Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.`;
};
var products_grid_analyzesandoptimizesyouri18n4$6 = () => {
	return `Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$6 = () => {
	return `Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.`;
};
var products_grid_automatedqualitychecksformissing4$6 = () => {
	return `Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.`;
};
var products_grid_benchmarkcli1$6 = () => {
	return `CLI del Benchmark`;
};
var products_grid_benchmarkcloud1$6 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$6 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$6 = () => {
	return `Ottimizzatore del Bundle`;
};
var products_grid_contactus1$6 = () => {
	return `Contattaci`;
};
var products_grid_learnmore1$6 = () => {
	return `Scopri di più`;
};
var products_grid_migrationassistant1$6 = () => {
	return `Assistente alla Migrazione`;
};
var products_grid_onpremisedeploymentwithsso4$6 = () => {
	return `Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.`;
};
var products_grid_runbenchmarkslocallyfromyour4$6 = () => {
	return `Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.`;
};
var products_grid_translationqa1$6 = () => {
	return `QA delle Traduzioni`;
};
var products_grid_aipoweredtoolthathelps4$5 = () => {
	return `Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.`;
};
var products_grid_analyzesandoptimizesyouri18n4$5 = () => {
	return `Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$5 = () => {
	return `Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.`;
};
var products_grid_automatedqualitychecksformissing4$5 = () => {
	return `Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.`;
};
var products_grid_benchmarkcli1$5 = () => {
	return `CLI de Benchmark`;
};
var products_grid_benchmarkcloud1$5 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$5 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$5 = () => {
	return `Otimizador de Bundle`;
};
var products_grid_contactus1$5 = () => {
	return `Contate-nos`;
};
var products_grid_learnmore1$5 = () => {
	return `Saiba Mais`;
};
var products_grid_migrationassistant1$5 = () => {
	return `Assistente de Migração`;
};
var products_grid_onpremisedeploymentwithsso4$5 = () => {
	return `Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.`;
};
var products_grid_runbenchmarkslocallyfromyour4$5 = () => {
	return `Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.`;
};
var products_grid_translationqa1$5 = () => {
	return `QA de Tradução`;
};
var products_grid_aipoweredtoolthathelps4$4 = () => {
	return `人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。`;
};
var products_grid_analyzesandoptimizesyouri18n4$4 = () => {
	return `通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$4 = () => {
	return `自动化的云基准测试，支持历史追踪、警报和团队仪表板。`;
};
var products_grid_automatedqualitychecksformissing4$4 = () => {
	return `针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。`;
};
var products_grid_benchmarkcli1$4 = () => {
	return `基准测试 CLI`;
};
var products_grid_benchmarkcloud1$4 = () => {
	return `云基准测试`;
};
var products_grid_benchmarkenterprise1$4 = () => {
	return `企业级基准测试`;
};
var products_grid_bundleoptimizer1$4 = () => {
	return `包优化器`;
};
var products_grid_contactus1$4 = () => {
	return `联系我们`;
};
var products_grid_learnmore1$4 = () => {
	return `了解更多`;
};
var products_grid_migrationassistant1$4 = () => {
	return `迁移助手`;
};
var products_grid_onpremisedeploymentwithsso4$4 = () => {
	return `支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。`;
};
var products_grid_runbenchmarkslocallyfromyour4$4 = () => {
	return `在终端本地运行基准测试。支持自定义配置和 CI 集成。`;
};
var products_grid_translationqa1$4 = () => {
	return `翻译质量保证`;
};
var products_grid_aipoweredtoolthathelps4$3 = () => {
	return `ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。`;
};
var products_grid_analyzesandoptimizesyouri18n4$3 = () => {
	return `Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$3 = () => {
	return `履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。`;
};
var products_grid_automatedqualitychecksformissing4$3 = () => {
	return `翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。`;
};
var products_grid_benchmarkcli1$3 = () => {
	return `Benchmark CLI`;
};
var products_grid_benchmarkcloud1$3 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$3 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$3 = () => {
	return `バンドルオプティマイザー`;
};
var products_grid_contactus1$3 = () => {
	return `お問い合わせ`;
};
var products_grid_learnmore1$3 = () => {
	return `詳細を見る`;
};
var products_grid_migrationassistant1$3 = () => {
	return `移行アシスタント`;
};
var products_grid_onpremisedeploymentwithsso4$3 = () => {
	return `SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。`;
};
var products_grid_runbenchmarkslocallyfromyour4$3 = () => {
	return `ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。`;
};
var products_grid_translationqa1$3 = () => {
	return `翻訳QA`;
};
var products_grid_aipoweredtoolthathelps4$2 = () => {
	return `다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.`;
};
var products_grid_analyzesandoptimizesyouri18n4$2 = () => {
	return `트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$2 = () => {
	return `기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.`;
};
var products_grid_automatedqualitychecksformissing4$2 = () => {
	return `누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.`;
};
var products_grid_benchmarkcli1$2 = () => {
	return `Benchmark CLI`;
};
var products_grid_benchmarkcloud1$2 = () => {
	return `Benchmark Cloud`;
};
var products_grid_benchmarkenterprise1$2 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_bundleoptimizer1$2 = () => {
	return `번들 옵티마이저`;
};
var products_grid_contactus1$2 = () => {
	return `문의하기`;
};
var products_grid_learnmore1$2 = () => {
	return `더 알아보기`;
};
var products_grid_migrationassistant1$2 = () => {
	return `마이그레이션 어시스턴트`;
};
var products_grid_onpremisedeploymentwithsso4$2 = () => {
	return `SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.`;
};
var products_grid_runbenchmarkslocallyfromyour4$2 = () => {
	return `터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.`;
};
var products_grid_translationqa1$2 = () => {
	return `번역 QA`;
};
var products_grid_aipoweredtoolthathelps4$1 = () => {
	return `Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.`;
};
var products_grid_analyzesandoptimizesyouri18n4$1 = () => {
	return `Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.`;
};
var products_grid_automatedcloudbasedbenchmarkingwith4$1 = () => {
	return `Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.`;
};
var products_grid_automatedqualitychecksformissing4$1 = () => {
	return `Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.`;
};
var products_grid_benchmarkcli1$1 = () => {
	return `CLI для бенчмаркинга`;
};
var products_grid_benchmarkcloud1$1 = () => {
	return `Облачный бенчмаркинг`;
};
var products_grid_benchmarkenterprise1$1 = () => {
	return `Корпоративный бенчмаркинг`;
};
var products_grid_bundleoptimizer1$1 = () => {
	return `Оптимизатор бандлов`;
};
var products_grid_contactus1$1 = () => {
	return `Связаться с нами`;
};
var products_grid_learnmore1$1 = () => {
	return `Узнать больше`;
};
var products_grid_migrationassistant1$1 = () => {
	return `Помощник по миграции`;
};
var products_grid_onpremisedeploymentwithsso4$1 = () => {
	return `Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.`;
};
var products_grid_runbenchmarkslocallyfromyour4$1 = () => {
	return `Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.`;
};
var products_grid_translationqa1$1 = () => {
	return `Контроль качества перевода`;
};
var products_grid_aipoweredtoolthathelps4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_aipoweredtoolthathelps4$9(inputs);
	if (locale === "es") return products_grid_aipoweredtoolthathelps4$8(inputs);
	if (locale === "de") return products_grid_aipoweredtoolthathelps4$7(inputs);
	if (locale === "it") return products_grid_aipoweredtoolthathelps4$6(inputs);
	if (locale === "pt") return products_grid_aipoweredtoolthathelps4$5(inputs);
	if (locale === "zh") return products_grid_aipoweredtoolthathelps4$4(inputs);
	if (locale === "ja") return products_grid_aipoweredtoolthathelps4$3(inputs);
	if (locale === "ko") return products_grid_aipoweredtoolthathelps4$2(inputs);
	if (locale === "ru") return products_grid_aipoweredtoolthathelps4$1(inputs);
	return products_grid_aipoweredtoolthathelps4$10(inputs);
});
var products_grid_analyzesandoptimizesyouri18n4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_analyzesandoptimizesyouri18n4$9(inputs);
	if (locale === "es") return products_grid_analyzesandoptimizesyouri18n4$8(inputs);
	if (locale === "de") return products_grid_analyzesandoptimizesyouri18n4$7(inputs);
	if (locale === "it") return products_grid_analyzesandoptimizesyouri18n4$6(inputs);
	if (locale === "pt") return products_grid_analyzesandoptimizesyouri18n4$5(inputs);
	if (locale === "zh") return products_grid_analyzesandoptimizesyouri18n4$4(inputs);
	if (locale === "ja") return products_grid_analyzesandoptimizesyouri18n4$3(inputs);
	if (locale === "ko") return products_grid_analyzesandoptimizesyouri18n4$2(inputs);
	if (locale === "ru") return products_grid_analyzesandoptimizesyouri18n4$1(inputs);
	return products_grid_analyzesandoptimizesyouri18n4$10(inputs);
});
var products_grid_automatedcloudbasedbenchmarkingwith4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_automatedcloudbasedbenchmarkingwith4$9(inputs);
	if (locale === "es") return products_grid_automatedcloudbasedbenchmarkingwith4$8(inputs);
	if (locale === "de") return products_grid_automatedcloudbasedbenchmarkingwith4$7(inputs);
	if (locale === "it") return products_grid_automatedcloudbasedbenchmarkingwith4$6(inputs);
	if (locale === "pt") return products_grid_automatedcloudbasedbenchmarkingwith4$5(inputs);
	if (locale === "zh") return products_grid_automatedcloudbasedbenchmarkingwith4$4(inputs);
	if (locale === "ja") return products_grid_automatedcloudbasedbenchmarkingwith4$3(inputs);
	if (locale === "ko") return products_grid_automatedcloudbasedbenchmarkingwith4$2(inputs);
	if (locale === "ru") return products_grid_automatedcloudbasedbenchmarkingwith4$1(inputs);
	return products_grid_automatedcloudbasedbenchmarkingwith4$10(inputs);
});
var products_grid_automatedqualitychecksformissing4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_automatedqualitychecksformissing4$9(inputs);
	if (locale === "es") return products_grid_automatedqualitychecksformissing4$8(inputs);
	if (locale === "de") return products_grid_automatedqualitychecksformissing4$7(inputs);
	if (locale === "it") return products_grid_automatedqualitychecksformissing4$6(inputs);
	if (locale === "pt") return products_grid_automatedqualitychecksformissing4$5(inputs);
	if (locale === "zh") return products_grid_automatedqualitychecksformissing4$4(inputs);
	if (locale === "ja") return products_grid_automatedqualitychecksformissing4$3(inputs);
	if (locale === "ko") return products_grid_automatedqualitychecksformissing4$2(inputs);
	if (locale === "ru") return products_grid_automatedqualitychecksformissing4$1(inputs);
	return products_grid_automatedqualitychecksformissing4$10(inputs);
});
var products_grid_benchmarkcli1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_benchmarkcli1$9(inputs);
	if (locale === "es") return products_grid_benchmarkcli1$8(inputs);
	if (locale === "de") return products_grid_benchmarkcli1$7(inputs);
	if (locale === "it") return products_grid_benchmarkcli1$6(inputs);
	if (locale === "pt") return products_grid_benchmarkcli1$5(inputs);
	if (locale === "zh") return products_grid_benchmarkcli1$4(inputs);
	if (locale === "ja") return products_grid_benchmarkcli1$3(inputs);
	if (locale === "ko") return products_grid_benchmarkcli1$2(inputs);
	if (locale === "ru") return products_grid_benchmarkcli1$1(inputs);
	return products_grid_benchmarkcli1$10(inputs);
});
var products_grid_benchmarkcloud1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_benchmarkcloud1$9(inputs);
	if (locale === "es") return products_grid_benchmarkcloud1$8(inputs);
	if (locale === "de") return products_grid_benchmarkcloud1$7(inputs);
	if (locale === "it") return products_grid_benchmarkcloud1$6(inputs);
	if (locale === "pt") return products_grid_benchmarkcloud1$5(inputs);
	if (locale === "zh") return products_grid_benchmarkcloud1$4(inputs);
	if (locale === "ja") return products_grid_benchmarkcloud1$3(inputs);
	if (locale === "ko") return products_grid_benchmarkcloud1$2(inputs);
	if (locale === "ru") return products_grid_benchmarkcloud1$1(inputs);
	return products_grid_benchmarkcloud1$10(inputs);
});
var products_grid_benchmarkenterprise1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_benchmarkenterprise1$9(inputs);
	if (locale === "es") return products_grid_benchmarkenterprise1$8(inputs);
	if (locale === "de") return products_grid_benchmarkenterprise1$7(inputs);
	if (locale === "it") return products_grid_benchmarkenterprise1$6(inputs);
	if (locale === "pt") return products_grid_benchmarkenterprise1$5(inputs);
	if (locale === "zh") return products_grid_benchmarkenterprise1$4(inputs);
	if (locale === "ja") return products_grid_benchmarkenterprise1$3(inputs);
	if (locale === "ko") return products_grid_benchmarkenterprise1$2(inputs);
	if (locale === "ru") return products_grid_benchmarkenterprise1$1(inputs);
	return products_grid_benchmarkenterprise1$10(inputs);
});
var products_grid_bundleoptimizer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_bundleoptimizer1$9(inputs);
	if (locale === "es") return products_grid_bundleoptimizer1$8(inputs);
	if (locale === "de") return products_grid_bundleoptimizer1$7(inputs);
	if (locale === "it") return products_grid_bundleoptimizer1$6(inputs);
	if (locale === "pt") return products_grid_bundleoptimizer1$5(inputs);
	if (locale === "zh") return products_grid_bundleoptimizer1$4(inputs);
	if (locale === "ja") return products_grid_bundleoptimizer1$3(inputs);
	if (locale === "ko") return products_grid_bundleoptimizer1$2(inputs);
	if (locale === "ru") return products_grid_bundleoptimizer1$1(inputs);
	return products_grid_bundleoptimizer1$10(inputs);
});
var products_grid_contactus1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_contactus1$9(inputs);
	if (locale === "es") return products_grid_contactus1$8(inputs);
	if (locale === "de") return products_grid_contactus1$7(inputs);
	if (locale === "it") return products_grid_contactus1$6(inputs);
	if (locale === "pt") return products_grid_contactus1$5(inputs);
	if (locale === "zh") return products_grid_contactus1$4(inputs);
	if (locale === "ja") return products_grid_contactus1$3(inputs);
	if (locale === "ko") return products_grid_contactus1$2(inputs);
	if (locale === "ru") return products_grid_contactus1$1(inputs);
	return products_grid_contactus1$10(inputs);
});
var products_grid_learnmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_learnmore1$9(inputs);
	if (locale === "es") return products_grid_learnmore1$8(inputs);
	if (locale === "de") return products_grid_learnmore1$7(inputs);
	if (locale === "it") return products_grid_learnmore1$6(inputs);
	if (locale === "pt") return products_grid_learnmore1$5(inputs);
	if (locale === "zh") return products_grid_learnmore1$4(inputs);
	if (locale === "ja") return products_grid_learnmore1$3(inputs);
	if (locale === "ko") return products_grid_learnmore1$2(inputs);
	if (locale === "ru") return products_grid_learnmore1$1(inputs);
	return products_grid_learnmore1$10(inputs);
});
var products_grid_migrationassistant1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_migrationassistant1$9(inputs);
	if (locale === "es") return products_grid_migrationassistant1$8(inputs);
	if (locale === "de") return products_grid_migrationassistant1$7(inputs);
	if (locale === "it") return products_grid_migrationassistant1$6(inputs);
	if (locale === "pt") return products_grid_migrationassistant1$5(inputs);
	if (locale === "zh") return products_grid_migrationassistant1$4(inputs);
	if (locale === "ja") return products_grid_migrationassistant1$3(inputs);
	if (locale === "ko") return products_grid_migrationassistant1$2(inputs);
	if (locale === "ru") return products_grid_migrationassistant1$1(inputs);
	return products_grid_migrationassistant1$10(inputs);
});
var products_grid_onpremisedeploymentwithsso4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_onpremisedeploymentwithsso4$9(inputs);
	if (locale === "es") return products_grid_onpremisedeploymentwithsso4$8(inputs);
	if (locale === "de") return products_grid_onpremisedeploymentwithsso4$7(inputs);
	if (locale === "it") return products_grid_onpremisedeploymentwithsso4$6(inputs);
	if (locale === "pt") return products_grid_onpremisedeploymentwithsso4$5(inputs);
	if (locale === "zh") return products_grid_onpremisedeploymentwithsso4$4(inputs);
	if (locale === "ja") return products_grid_onpremisedeploymentwithsso4$3(inputs);
	if (locale === "ko") return products_grid_onpremisedeploymentwithsso4$2(inputs);
	if (locale === "ru") return products_grid_onpremisedeploymentwithsso4$1(inputs);
	return products_grid_onpremisedeploymentwithsso4$10(inputs);
});
var products_grid_price19mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_price19mo$1(inputs);
	if (locale === "es") return products_grid_price19mo$2(inputs);
	if (locale === "de") return products_grid_price19mo$2(inputs);
	if (locale === "it") return products_grid_price19mo$2(inputs);
	if (locale === "pt") return products_grid_price19mo$2(inputs);
	if (locale === "zh") return products_grid_price19mo$2(inputs);
	if (locale === "ja") return products_grid_price19mo$2(inputs);
	if (locale === "ko") return products_grid_price19mo$2(inputs);
	if (locale === "ru") return products_grid_price19mo$2(inputs);
	return products_grid_price19mo$2(inputs);
});
var products_grid_price29mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_price29mo$1(inputs);
	if (locale === "es") return products_grid_price29mo$2(inputs);
	if (locale === "de") return products_grid_price29mo$2(inputs);
	if (locale === "it") return products_grid_price29mo$2(inputs);
	if (locale === "pt") return products_grid_price29mo$2(inputs);
	if (locale === "zh") return products_grid_price29mo$2(inputs);
	if (locale === "ja") return products_grid_price29mo$2(inputs);
	if (locale === "ko") return products_grid_price29mo$2(inputs);
	if (locale === "ru") return products_grid_price29mo$2(inputs);
	return products_grid_price29mo$2(inputs);
});
var products_grid_price49mo = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_price49mo$1(inputs);
	if (locale === "es") return products_grid_price49mo$2(inputs);
	if (locale === "de") return products_grid_price49mo$2(inputs);
	if (locale === "it") return products_grid_price49mo$2(inputs);
	if (locale === "pt") return products_grid_price49mo$2(inputs);
	if (locale === "zh") return products_grid_price49mo$2(inputs);
	if (locale === "ja") return products_grid_price49mo$2(inputs);
	if (locale === "ko") return products_grid_price49mo$2(inputs);
	if (locale === "ru") return products_grid_price49mo$2(inputs);
	return products_grid_price49mo$2(inputs);
});
var products_grid_price99once = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_price99once$1(inputs);
	if (locale === "es") return products_grid_price99once$2(inputs);
	if (locale === "de") return products_grid_price99once$2(inputs);
	if (locale === "it") return products_grid_price99once$2(inputs);
	if (locale === "pt") return products_grid_price99once$2(inputs);
	if (locale === "zh") return products_grid_price99once$2(inputs);
	if (locale === "ja") return products_grid_price99once$2(inputs);
	if (locale === "ko") return products_grid_price99once$2(inputs);
	if (locale === "ru") return products_grid_price99once$2(inputs);
	return products_grid_price99once$2(inputs);
});
var products_grid_pricefree1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_pricefree1$1(inputs);
	if (locale === "es") return products_grid_pricefree1$2(inputs);
	if (locale === "de") return products_grid_pricefree1$2(inputs);
	if (locale === "it") return products_grid_pricefree1$2(inputs);
	if (locale === "pt") return products_grid_pricefree1$2(inputs);
	if (locale === "zh") return products_grid_pricefree1$2(inputs);
	if (locale === "ja") return products_grid_pricefree1$2(inputs);
	if (locale === "ko") return products_grid_pricefree1$2(inputs);
	if (locale === "ru") return products_grid_pricefree1$2(inputs);
	return products_grid_pricefree1$2(inputs);
});
var products_grid_runbenchmarkslocallyfromyour4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_runbenchmarkslocallyfromyour4$9(inputs);
	if (locale === "es") return products_grid_runbenchmarkslocallyfromyour4$8(inputs);
	if (locale === "de") return products_grid_runbenchmarkslocallyfromyour4$7(inputs);
	if (locale === "it") return products_grid_runbenchmarkslocallyfromyour4$6(inputs);
	if (locale === "pt") return products_grid_runbenchmarkslocallyfromyour4$5(inputs);
	if (locale === "zh") return products_grid_runbenchmarkslocallyfromyour4$4(inputs);
	if (locale === "ja") return products_grid_runbenchmarkslocallyfromyour4$3(inputs);
	if (locale === "ko") return products_grid_runbenchmarkslocallyfromyour4$2(inputs);
	if (locale === "ru") return products_grid_runbenchmarkslocallyfromyour4$1(inputs);
	return products_grid_runbenchmarkslocallyfromyour4$10(inputs);
});
var products_grid_translationqa1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return products_grid_translationqa1$9(inputs);
	if (locale === "es") return products_grid_translationqa1$8(inputs);
	if (locale === "de") return products_grid_translationqa1$7(inputs);
	if (locale === "it") return products_grid_translationqa1$6(inputs);
	if (locale === "pt") return products_grid_translationqa1$5(inputs);
	if (locale === "zh") return products_grid_translationqa1$4(inputs);
	if (locale === "ja") return products_grid_translationqa1$3(inputs);
	if (locale === "ko") return products_grid_translationqa1$2(inputs);
	if (locale === "ru") return products_grid_translationqa1$1(inputs);
	return products_grid_translationqa1$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsGrid.tsx";
function ProductsGrid() {
	const products = [
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
	];
	return jsxDEV("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: products.map((p) => jsxDEV("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [jsxDEV("div", { children: [jsxDEV("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: p.name
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 45,
				columnNumber: 13
			}, this), jsxDEV("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: p.desc
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 11
			}, this), jsxDEV("div", {
				className: "flex items-center justify-between",
				children: [jsxDEV("span", {
					className: "text-sm font-bold text-primary",
					children: p.price
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 51,
					columnNumber: 13
				}, this), jsxDEV("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: products_grid_learnmore1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 52,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 50,
				columnNumber: 11
			}, this)]
		}, p.name, true, {
			fileName: _jsxFileName$2,
			lineNumber: 40,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 38,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsGrid.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ProductsGrid, {}, void 0, false, {
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

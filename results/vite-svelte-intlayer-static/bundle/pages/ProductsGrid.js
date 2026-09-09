import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var products_grid_default = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"learnMore\":\"Learn More\",\"analyzesAndOptimizesYourI18n\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"bundleOptimizer\":\"Bundle Optimizer\",\"automatedQualityChecksForMissing\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"translationQa\":\"Translation QA\",\"aiPoweredToolThatHelps\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"migrationAssistant\":\"Migration Assistant\",\"contactUs\":\"Contact Us\",\"onPremiseDeploymentWithSso\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Free\",\"runBenchmarksLocallyFromYour\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"benchmarkCli\":\"Benchmark CLI\"},\"fr\":{\"learnMore\":\"En savoir plus\",\"analyzesAndOptimizesYourI18n\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le code splitting.\",\"bundleOptimizer\":\"Optimiseur de bundle\",\"automatedQualityChecksForMissing\":\"Contrôles qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"translationQa\":\"QA de traduction\",\"aiPoweredToolThatHelps\":\"Outil alimenté par l'IA qui aide à migrer votre codebase entre bibliothèques i18n sans temps d'arrêt.\",\"migrationAssistant\":\"Assistant de migration\",\"contactUs\":\"Contactez-nous\",\"onPremiseDeploymentWithSso\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"benchmarkEnterprise\":\"Benchmark Entreprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratuit\",\"runBenchmarksLocallyFromYour\":\"Exécutez des benchmarks localement depuis votre terminal. Prend en charge les configurations personnalisées et l'intégration CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"es\":{\"learnMore\":\"Saber más\",\"analyzesAndOptimizesYourI18n\":\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\",\"bundleOptimizer\":\"Optimizador de paquetes\",\"automatedQualityChecksForMissing\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización и errores de contexto.\",\"translationQa\":\"QA de traducción\",\"aiPoweredToolThatHelps\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n con cero tiempo de inactividad.\",\"migrationAssistant\":\"Asistente de migración\",\"contactUs\":\"Contáctenos\",\"onPremiseDeploymentWithSso\":\"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratis\",\"runBenchmarksLocallyFromYour\":\"Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"de\":{\"learnMore\":\"Mehr erfahren\",\"analyzesAndOptimizesYourI18n\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"bundleOptimizer\":\"Bundle-Optimierer\",\"automatedQualityChecksForMissing\":\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"translationQa\":\"Übersetzungs-QA\",\"aiPoweredToolThatHelps\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"migrationAssistant\":\"Migrationsassistent\",\"contactUs\":\"Kontaktieren Sie uns\",\"onPremiseDeploymentWithSso\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Automatisierte Cloud-basierte Benchmarking mit Verfolgung des Verlaufs, Warnungen und Team-Dashboards.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Kostenlos\",\"runBenchmarksLocallyFromYour\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"benchmarkCli\":\"Benchmark CLI\"},\"it\":{\"learnMore\":\"Scopri di più\",\"analyzesAndOptimizesYourI18n\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"bundleOptimizer\":\"Ottimizzatore di bundle\",\"automatedQualityChecksForMissing\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"translationQa\":\"QA di traduzione\",\"aiPoweredToolThatHelps\":\"Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\",\"migrationAssistant\":\"Assistente alla migrazione\",\"contactUs\":\"Contattaci\",\"onPremiseDeploymentWithSso\":\"Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard del team.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratis\",\"runBenchmarksLocallyFromYour\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"pt\":{\"learnMore\":\"Saiba mais\",\"analyzesAndOptimizesYourI18n\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"bundleOptimizer\":\"Otimizador de Bundle\",\"automatedQualityChecksForMissing\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"translationQa\":\"QA de Tradução\",\"aiPoweredToolThatHelps\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n com tempo de inatividade zero.\",\"migrationAssistant\":\"Assistente de Migração\",\"contactUs\":\"Contate-nos\",\"onPremiseDeploymentWithSso\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e dashboards de equipe.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Grátis\",\"runBenchmarksLocallyFromYour\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"zh\":{\"learnMore\":\"了解更多\",\"analyzesAndOptimizesYourI18n\":\"通过 tree-shaking 和代码分割分析并优化您的 i18n 生产包。\",\"bundleOptimizer\":\"包优化器\",\"automatedQualityChecksForMissing\":\"针对缺失翻译、复数问题和上下文错误的自动质量检查。\",\"translationQa\":\"翻译质量保证\",\"aiPoweredToolThatHelps\":\"人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机。\",\"migrationAssistant\":\"迁移助手\",\"contactUs\":\"联系我们\",\"onPremiseDeploymentWithSso\":\"支持 SSO、审计日志、自定义 SLA 和专属支持的本地部署。\",\"benchmarkEnterprise\":\"基准测试企业版\",\"automatedCloudBasedBenchmarkingWith\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"benchmarkCloud\":\"基准测试云端版\",\"free\":\"免费\",\"runBenchmarksLocallyFromYour\":\"从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"benchmarkCli\":\"基准测试 CLI\"},\"ja\":{\"learnMore\":\"詳細はこちら\",\"analyzesAndOptimizesYourI18n\":\"ツリーシェイキングとコード分割により、実稼働用の i18n バンドルを分析および最適化します。\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"automatedQualityChecksForMissing\":\"翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。\",\"translationQa\":\"翻訳 QA\",\"aiPoweredToolThatHelps\":\"ダウンタイムなしで i18n ライブラリ間でコードベースを移行するのを支援する AI 駆動ツール。\",\"migrationAssistant\":\"移行アシスタント\",\"contactUs\":\"お問い合わせ\",\"onPremiseDeploymentWithSso\":\"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。\",\"benchmarkEnterprise\":\"ベンチマークエンタープライズ\",\"automatedCloudBasedBenchmarkingWith\":\"履歴追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。\",\"benchmarkCloud\":\"ベンチマーククラウド\",\"free\":\"無料\",\"runBenchmarksLocallyFromYour\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。\",\"benchmarkCli\":\"ベンチマーク CLI\"},\"ko\":{\"learnMore\":\"자세히 알아보기\",\"analyzesAndOptimizesYourI18n\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"bundleOptimizer\":\"번들 최적화 도구\",\"automatedQualityChecksForMissing\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.\",\"translationQa\":\"번역 QA\",\"aiPoweredToolThatHelps\":\"가동 중지 시간 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 지원 도구입니다.\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"contactUs\":\"문의하기\",\"onPremiseDeploymentWithSso\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 통한 온프레미스 배포.\",\"benchmarkEnterprise\":\"벤치마크 엔터프라이즈\",\"automatedCloudBasedBenchmarkingWith\":\"기록 추적, 알림 및 팀 대시보드를 통한 자동화된 클라우드 기반 벤치마킹.\",\"benchmarkCloud\":\"벤치마크 클라우드\",\"free\":\"무료\",\"runBenchmarksLocallyFromYour\":\"터미널에서 로컬로 벤치마크를 실행하십시오. 맞춤형 구성 및 CI 통합을 지원합니다.\",\"benchmarkCli\":\"벤치마크 CLI\"},\"ru\":{\"learnMore\":\"Узнать больше\",\"analyzesAndOptimizesYourI18n\":\"Анализирует и оптимизирует ваш i18n бандл для продакшена с использованием tree-shaking и разделения кода.\",\"bundleOptimizer\":\"Оптимизатор бандлов\",\"automatedQualityChecksForMissing\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с множественным числом и ошибок контекста.\",\"translationQa\":\"QA переводов\",\"aiPoweredToolThatHelps\":\"Инструмент на базе ИИ, который помогает мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"migrationAssistant\":\"Ассистент миграции\",\"contactUs\":\"Связаться с нами\",\"onPremiseDeploymentWithSso\":\"Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, оповещениями и командными дашбордами.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Бесплатно\",\"runBenchmarksLocallyFromYour\":\"Запускайте бенчмарки локально из вашего терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\",\"benchmarkCli\":\"Benchmark CLI\"}}}")
};
var internationalization = {
	"locales": [
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => String(args.value ?? ""),
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "valueOf", {
		value: () => args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, Symbol.toPrimitive, {
		value: () => args.value ?? "",
		writable: true,
		configurable: true
	});
	if (args.value !== null && args.value !== void 0) {
		const valObj = Object(args.value);
		const proto = Object.getPrototypeOf(valObj);
		for (const prop of Object.getOwnPropertyNames(proto)) {
			if (prop === "constructor" || prop in Node) continue;
			const valProp = valObj[prop];
			if (typeof valProp === "function") Object.defineProperty(Node, prop, {
				value: valProp.bind(args.value),
				writable: true,
				configurable: true
			});
		}
	}
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => {
		return renderIntlayerNode({
			value: children ?? node,
			component: void 0,
			props: rest
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
	});
};
var root = $.from_html(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="mb-4 text-sm text-muted-foreground"> </p></div> <div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"> </span> <button type="button" class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div></div>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function ProductsGrid($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionary(products_grid_default);
	const products = [
		{
			name: get(content).benchmarkCli,
			desc: get(content).runBenchmarksLocallyFromYour,
			price: get(content).free
		},
		{
			name: get(content).benchmarkCloud,
			desc: get(content).automatedCloudBasedBenchmarkingWith,
			price: "$29/mo"
		},
		{
			name: get(content).benchmarkEnterprise,
			desc: get(content).onPremiseDeploymentWithSso,
			price: get(content).contactUs
		},
		{
			name: get(content).migrationAssistant,
			desc: get(content).aiPoweredToolThatHelps,
			price: "$99 one-time"
		},
		{
			name: get(content).translationQa,
			desc: get(content).automatedQualityChecksForMissing,
			price: "$19/mo"
		},
		{
			name: get(content).bundleOptimizer,
			desc: get(content).analyzesAndOptimizesYourI18n,
			price: "$49/mo"
		}
	];
	$.init();
	var div = root_1();
	$.each(div, 5, () => products, (p) => p.name, ($$anchor, p) => {
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
		$.template_effect(() => {
			$.set_text(text, $.get(p).name);
			$.set_text(text_1, $.get(p).desc);
			$.set_text(text_2, $.get(p).price);
			$.set_text(text_3, $content().learnMore);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { ProductsGrid as default };

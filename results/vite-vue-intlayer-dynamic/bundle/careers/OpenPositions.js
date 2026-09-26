import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, unref, watch } from "vue";
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
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
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
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var getPrefix = (configPrefix) => {
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var dictionaries = {
	"products-grid": {
		key: "products-grid",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"learnMore\":\"Learn More\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"price\":\"Free\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"price\":\"$29/mo\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"price\":\"Contact Us\"},{\"name\":\"Migration Assistant\",\"desc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"price\":\"$99 one-time\"},{\"name\":\"Translation QA\",\"desc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"price\":\"$19/mo\"},{\"name\":\"Bundle Optimizer\",\"desc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"price\":\"$49/mo\"}]},\"fr\":{\"learnMore\":\"En savoir plus\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Lancez des benchmarks en local. Configurations personnalisées et CI.\",\"price\":\"Gratuit\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\",\"price\":\"29 €/mois\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise avec SSO, journaux d'audit, SLA et support dédié.\",\"price\":\"Nous contacter\"},{\"name\":\"Assistant de migration\",\"desc\":\"Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\",\"price\":\"99 € (unique)\"},{\"name\":\"QA des traductions\",\"desc\":\"Contrôles automatiques : clés manquantes, pluriels, contexte.\",\"price\":\"19 €/mois\"},{\"name\":\"Optimiseur de bundle\",\"desc\":\"Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\",\"price\":\"49 €/mois\"}]},\"es\":{\"learnMore\":\"Más información\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Ejecute benchmarks localmente desde su terminal. Soporta configuraciones personalizadas e integración CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"price\":\"29 $/mes\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Despliegue en las instalaciones con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"price\":\"Contáctenos\"},{\"name\":\"Asistente de migración\",\"desc\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n con cero tiempo de inactividad.\",\"price\":\"99 $ (pago único)\"},{\"name\":\"QA de traducción\",\"desc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"price\":\"19 $/mes\"},{\"name\":\"Optimizador de paquetes\",\"desc\":\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\",\"price\":\"49 $/mes\"}]},\"de\":{\"learnMore\":\"Mehr erfahren\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"price\":\"Kostenlos\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.\",\"price\":\"29 €/Monat\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und engagiertem Support.\",\"price\":\"Kontaktieren Sie uns\"},{\"name\":\"Migrations-Assistent\",\"desc\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"price\":\"99 € (einmalig)\"},{\"name\":\"Übersetzungs-QS\",\"desc\":\"Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"price\":\"19 €/Monat\"},{\"name\":\"Bundle-Optimierer\",\"desc\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"price\":\"49 €/Monat\"}]},\"it\":{\"learnMore\":\"Scopri di più\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\",\"price\":\"29 €/mese\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"price\":\"Contattaci\"},{\"name\":\"Assistente alla migrazione\",\"desc\":\"Strumento basato su IA che aiuta a migrare il tuo codice tra le librerie i18n con zero tempi di inattività.\",\"price\":\"99 € (una tantum)\"},{\"name\":\"QA delle traduzioni\",\"desc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"price\":\"19 €/mese\"},{\"name\":\"Ottimizzatore di bundle\",\"desc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"price\":\"49 €/mese\"}]},\"pt\":{\"learnMore\":\"Saiba Mais\",\"products\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração CI.\",\"price\":\"Grátis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"price\":\"29 $/mês\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"price\":\"Contate-nos\"},{\"name\":\"Assistente de Migração\",\"desc\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n com zero tempo de inatividade.\",\"price\":\"99 $ (pagamento único)\"},{\"name\":\"QA de Tradução\",\"desc\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"price\":\"19 $/mês\"},{\"name\":\"Otimizador de Bundle\",\"desc\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"price\":\"49 $/mês\"}]},\"zh\":{\"learnMore\":\"了解更多\",\"products\":[{\"name\":\"基准测试 CLI\",\"desc\":\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"price\":\"免费\"},{\"name\":\"基准测试云\",\"desc\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"price\":\"29 美元/月\"},{\"name\":\"基准测试企业版\",\"desc\":\"具有 SSO、审计日志、自定义 SLA 和专用支持的本地部署。\",\"price\":\"联系我们\"},{\"name\":\"迁移助手\",\"desc\":\"由 AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，且实现零停机。\",\"price\":\"99 美元一次性付款\"},{\"name\":\"翻译质量保证\",\"desc\":\"针对缺失翻译、复数问题和上下文错误的自动质量检查。\",\"price\":\"19 美元/月\"},{\"name\":\"捆绑包优化器\",\"desc\":\"分析并优化生产环境的 i18n 捆绑包，支持 tree-shaking 和代码拆分。\",\"price\":\"49 美元/月\"}]},\"ja\":{\"learnMore\":\"詳細はこちら\",\"products\":[{\"name\":\"ベンチマーク CLI\",\"desc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。\",\"price\":\"無料\"},{\"name\":\"ベンチマーク クラウド\",\"desc\":\"履歴トラッキング、アラート、チームダッシュボードを備えた自動クラウドベースベンチマーク。\",\"price\":\"29ドル/月\"},{\"name\":\"ベンチマーク エンタープライズ\",\"desc\":\"SSO、監査ログ、カスタムSLA、専用サポートを備えたオンプレミス展開。\",\"price\":\"お問い合わせ\"},{\"name\":\"移行アシスタント\",\"desc\":\"AIを搭載したツールで、ダウンタイムなしでi18nライブラリ間のコードベースの移行を支援します。\",\"price\":\"99ドル（1回払い）\"},{\"name\":\"翻訳品質保証\",\"desc\":\"不足している翻訳、複数形の不一致、コンテキストエラーの自動品質チェック。\",\"price\":\"19ドル/月\"},{\"name\":\"バンドルオプティマイザー\",\"desc\":\"ツリーシェイキングとコード分割を使用して、生産用にi18nバンドルを分析および最適化します。\",\"price\":\"49ドル/月\"}]},\"ko\":{\"learnMore\":\"자세히 보기\",\"products\":[{\"name\":\"벤치마크 CLI\",\"desc\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.\",\"price\":\"무료\"},{\"name\":\"벤치마크 클라우드\",\"desc\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.\",\"price\":\"월 $29\"},{\"name\":\"벤치마크 엔터프라이즈\",\"desc\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.\",\"price\":\"문의하기\"},{\"name\":\"마이그레이션 어시스턴트\",\"desc\":\"다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"price\":\"99달러(1회성)\"},{\"name\":\"번역 QA\",\"desc\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.\",\"price\":\"월 $19\"},{\"name\":\"번들 최적화 도구\",\"desc\":\"트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"price\":\"월 $49\"}]},\"ru\":{\"learnMore\":\"Узнать больше\",\"products\":[{\"name\":\"Бенчмарк CLI\",\"desc\":\"Запуск бенчмарков локально из вашего терминала. Поддержка пользовательских конфигураций и интеграция с CI.\",\"price\":\"Бесплатно\"},{\"name\":\"Бенчмарк Облако\",\"desc\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, оповещениями и командными панелями.\",\"price\":\"29 $/мес\"},{\"name\":\"Бенчмарк Предприятие\",\"desc\":\"Локальное развертывание с SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"price\":\"Связаться с нами\"},{\"name\":\"Помощник по миграции\",\"desc\":\"Инструмент на базе ИИ, который помогает перенести вашу кодовую базу между библиотеками i18n без простоев.\",\"price\":\"99 $ (единоразово)\"},{\"name\":\"QA переводов\",\"desc\":\"Автоматические проверки качества на отсутствие переводов, проблемы с множественным числом и ошибки контекста.\",\"price\":\"19 $/мес\"},{\"name\":\"Оптимизатор бандлов\",\"desc\":\"Анализирует и оптимизирует ваш i18n-бандл для продакшена с использованием tree-shaking и разделения кода.\",\"price\":\"49 $/мес\"}]}}}"),
		location: "local",
		localId: "products-grid::local::src/components/pages/products/ProductsGrid.content.ts",
		filePath: "src/components/pages/products/ProductsGrid.content.ts"
	},
	"preferences-section": {
		key: "preferences-section",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Preferences",
					"notificationsTitle": "Email Notifications",
					"notificationsDescription": "Receive weekly benchmark reports",
					"toggleNotifications": "Toggle notifications",
					"darkModeTitle": "Dark Mode",
					"darkModeDescription": "Use dark color scheme",
					"toggleDarkMode": "Toggle dark mode",
					"languageLabel": "Default Language",
					"languages": [
						"English (en)",
						"French (fr)",
						"Spanish (es)",
						"German (de)",
						"Italian (it)",
						"Portuguese (pt)",
						"Chinese (zh)",
						"Japanese (ja)",
						"Korean (ko)",
						"Russian (ru)"
					]
				},
				"fr": {
					"title": "Préférences",
					"notificationsTitle": "Notifications e-mail",
					"notificationsDescription": "Recevoir les rapports hebdomadaires",
					"toggleNotifications": "Activer/désactiver les notifications",
					"darkModeTitle": "Mode sombre",
					"darkModeDescription": "Utiliser le thème sombre",
					"toggleDarkMode": "Basculer le mode sombre",
					"languageLabel": "Langue par défaut",
					"languages": [
						"Anglais (en)",
						"Français (fr)",
						"Espagnol (es)",
						"Allemand (de)",
						"Italien (it)",
						"Portugais (pt)",
						"Chinois (zh)",
						"Japonais (ja)",
						"Coréen (ko)",
						"Russe (ru)"
					]
				},
				"es": {
					"title": "Preferencias",
					"notificationsTitle": "Notificaciones por correo electrónico",
					"notificationsDescription": "Recibir informes semanales de benchmark",
					"toggleNotifications": "Alternar notificaciones",
					"darkModeTitle": "Modo oscuro",
					"darkModeDescription": "Usar esquema de colores oscuros",
					"toggleDarkMode": "Alternar modo oscuro",
					"languageLabel": "Idioma predeterminado",
					"languages": [
						"Inglés (en)",
						"Francés (fr)",
						"Español (es)",
						"Alemán (de)",
						"Italiano (it)",
						"Portugués (pt)",
						"Chino (zh)",
						"Japonés (ja)",
						"Coreano (ko)",
						"Ruso (ru)"
					]
				},
				"de": {
					"title": "Einstellungen",
					"notificationsTitle": "E-Mail-Benachrichtigungen",
					"notificationsDescription": "Erhalten Sie wöchentliche Benchmark-Berichte",
					"toggleNotifications": "Benachrichtigungen umschalten",
					"darkModeTitle": "Dunkelmodus",
					"darkModeDescription": "Dunkles Farbschema verwenden",
					"toggleDarkMode": "Dunkelmodus umschalten",
					"languageLabel": "Standardsprache",
					"languages": [
						"Englisch (en)",
						"Französisch (fr)",
						"Spanisch (es)",
						"Deutsch (de)",
						"Italienisch (it)",
						"Portugiesisch (pt)",
						"Chinesisch (zh)",
						"Japanisch (ja)",
						"Koreanisch (ko)",
						"Russisch (ru)"
					]
				},
				"it": {
					"title": "Preferenze",
					"notificationsTitle": "Notifiche e-mail",
					"notificationsDescription": "Ricevi rapporti settimanali sui benchmark",
					"toggleNotifications": "Attiva/disattiva notifiche",
					"darkModeTitle": "Modalità scura",
					"darkModeDescription": "Usa schema colori scuri",
					"toggleDarkMode": "Attiva/disattiva modalità scura",
					"languageLabel": "Lingua predefinita",
					"languages": [
						"Inglese (en)",
						"Francese (fr)",
						"Spagnolo (es)",
						"Tedesco (de)",
						"Italiano (it)",
						"Portoghese (pt)",
						"Cinese (zh)",
						"Giapponese (ja)",
						"Coreano (ko)",
						"Russo (ru)"
					]
				},
				"pt": {
					"title": "Preferências",
					"notificationsTitle": "Notificações por e-mail",
					"notificationsDescription": "Receber relatórios semanais de benchmark",
					"toggleNotifications": "Alternar notificações",
					"darkModeTitle": "Modo escuro",
					"darkModeDescription": "Usar esquema de cores escuro",
					"toggleDarkMode": "Alternar modo escuro",
					"languageLabel": "Idioma padrão",
					"languages": [
						"Inglês (en)",
						"Francês (fr)",
						"Espanhol (es)",
						"Alemão (de)",
						"Italiano (it)",
						"Português (pt)",
						"Chinês (zh)",
						"Japonês (ja)",
						"Coreano (ko)",
						"Russo (ru)"
					]
				},
				"zh": {
					"title": "偏好设置",
					"notificationsTitle": "邮件通知",
					"notificationsDescription": "接收每周基准报告",
					"toggleNotifications": "切换通知",
					"darkModeTitle": "深色模式",
					"darkModeDescription": "使用深色配色方案",
					"toggleDarkMode": "切换深色模式",
					"languageLabel": "默认语言",
					"languages": [
						"英语 (en)",
						"法语 (fr)",
						"西班牙语 (es)",
						"德语 (de)",
						"意大利语 (it)",
						"葡萄牙语 (pt)",
						"中文 (zh)",
						"日语 (ja)",
						"韩语 (ko)",
						"俄语 (ru)"
					]
				},
				"ja": {
					"title": "設定",
					"notificationsTitle": "メール通知",
					"notificationsDescription": "毎週のベンチマークレポートを受け取る",
					"toggleNotifications": "通知を切り替える",
					"darkModeTitle": "ダークモード",
					"darkModeDescription": "ダークカラーの配色を使用する",
					"toggleDarkMode": "ダークモードを切り替える",
					"languageLabel": "デフォルトの言語",
					"languages": [
						"英語 (en)",
						"フランス語 (fr)",
						"スペイン語 (es)",
						"ドイツ語 (de)",
						"イタリア語 (it)",
						"ポルトガル語 (pt)",
						"中国語 (zh)",
						"日本語 (ja)",
						"韓国語 (ko)",
						"ロシア語 (ru)"
					]
				},
				"ko": {
					"title": "환경 설정",
					"notificationsTitle": "이메일 알림",
					"notificationsDescription": "주간 벤치마크 보고서 받기",
					"toggleNotifications": "알림 전환",
					"darkModeTitle": "다크 모드",
					"darkModeDescription": "어두운 색상 테마 사용",
					"toggleDarkMode": "다크 모드 전환",
					"languageLabel": "기본 언어",
					"languages": [
						"영어 (en)",
						"프랑스어 (fr)",
						"스페인어 (es)",
						"독일어 (de)",
						"이탈리아어 (it)",
						"포르투갈어 (pt)",
						"중국어 (zh)",
						"일본어 (ja)",
						"한국어 (ko)",
						"러시아어 (ko)"
					]
				},
				"ru": {
					"title": "Настройки",
					"notificationsTitle": "Электронные уведомления",
					"notificationsDescription": "Получать еженедельные отчеты о бенчмарках",
					"toggleNotifications": "Переключить уведомления",
					"darkModeTitle": "Темная тема",
					"darkModeDescription": "Использовать темную цветовую схему",
					"toggleDarkMode": "Переключить темную тему",
					"languageLabel": "Язык по умолчанию",
					"languages": [
						"Английский (en)",
						"Французский (fr)",
						"Испанский (es)",
						"Немецкий (de)",
						"Итальянский (it)",
						"Португальский (pt)",
						"Китайский (zh)",
						"Японский (ja)",
						"Корейский (ko)",
						"Русский (ru)"
					]
				}
			}
		},
		location: "local",
		localId: "preferences-section::local::src/components/pages/settings/PreferencesSection.content.ts",
		filePath: "src/components/pages/settings/PreferencesSection.content.ts"
	},
	"header": {
		key: "header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"home": "Home",
					"methodology": "Methodology",
					"mockPages": "Mock Pages",
					"products": "Products",
					"pricing": "Pricing",
					"team": "Team",
					"blog": "Blog",
					"careers": "Careers",
					"faq": "FAQ",
					"contact": "Contact",
					"settings": "Settings",
					"appName": "i18n Benchmark",
					"goToGithub": "Go to GitHub",
					"header": "Header"
				},
				"fr": {
					"home": "Accueil",
					"methodology": "Méthodologie",
					"mockPages": "Pages fictives",
					"products": "Produits",
					"pricing": "Tarification",
					"team": "Équipe",
					"blog": "Blog",
					"careers": "Carrières",
					"faq": "FAQ",
					"contact": "Contact",
					"settings": "Paramètres",
					"appName": "Benchmark i18n",
					"goToGithub": "Aller sur GitHub",
					"header": "En-tête"
				},
				"es": {
					"home": "Inicio",
					"methodology": "Metodología",
					"mockPages": "Páginas de prueba",
					"products": "Productos",
					"pricing": "Precios",
					"team": "Equipo",
					"blog": "Blog",
					"careers": "Carreras",
					"faq": "FAQ",
					"contact": "Contacto",
					"settings": "Ajustes",
					"appName": "i18n Benchmark",
					"goToGithub": "Ir a GitHub",
					"header": "Encabezado"
				},
				"de": {
					"home": "Home",
					"methodology": "Methodik",
					"mockPages": "Testseiten",
					"products": "Produkte",
					"pricing": "Preise",
					"team": "Team",
					"blog": "Blog",
					"careers": "Karriere",
					"faq": "FAQ",
					"contact": "Kontakt",
					"settings": "Einstellungen",
					"appName": "i18n Benchmark",
					"goToGithub": "Zu GitHub",
					"header": "Header"
				},
				"it": {
					"home": "Home",
					"methodology": "Metodologia",
					"mockPages": "Pagine di prova",
					"products": "Prodotti",
					"pricing": "Prezzi",
					"team": "Team",
					"blog": "Blog",
					"careers": "Carriere",
					"faq": "FAQ",
					"contact": "Contatti",
					"settings": "Impostazioni",
					"appName": "i18n Benchmark",
					"goToGithub": "Vai su GitHub",
					"header": "Intestazione"
				},
				"pt": {
					"home": "Início",
					"methodology": "Metodologia",
					"mockPages": "Páginas de Teste",
					"products": "Produtos",
					"pricing": "Preços",
					"team": "Equipe",
					"blog": "Blog",
					"careers": "Carreiras",
					"faq": "FAQ",
					"contact": "Contato",
					"settings": "Configurações",
					"appName": "i18n Benchmark",
					"goToGithub": "Ir para o GitHub",
					"header": "Cabeçalho"
				},
				"zh": {
					"home": "首页",
					"methodology": "方法论",
					"mockPages": "模拟页面",
					"products": "产品",
					"pricing": "定价",
					"team": "团队",
					"blog": "博客",
					"careers": "职业",
					"faq": "常见问题",
					"contact": "联系我们",
					"settings": "设置",
					"appName": "i18n 基准测试",
					"goToGithub": "前往 GitHub",
					"header": "页眉"
				},
				"ja": {
					"home": "ホーム",
					"methodology": "方法論",
					"mockPages": "モックページ",
					"products": "製品",
					"pricing": "価格設定",
					"team": "チーム",
					"blog": "ブログ",
					"careers": "採用情報",
					"faq": "よくある質問",
					"contact": "お問い合わせ",
					"settings": "設定",
					"appName": "i18n ベンチマーク",
					"goToGithub": "GitHub へ",
					"header": "ヘッダー"
				},
				"ko": {
					"home": "홈",
					"methodology": "방법론",
					"mockPages": "모ック 페이지",
					"products": "제품",
					"pricing": "가격",
					"team": "팀",
					"blog": "블로그",
					"careers": "채용",
					"faq": "자주 묻는 질문",
					"contact": "문의",
					"settings": "설정",
					"appName": "i18n 벤치마크",
					"goToGithub": "GitHub으로 이동",
					"header": "헤더"
				},
				"ru": {
					"home": "Главная",
					"methodology": "Методология",
					"mockPages": "Мок-страницы",
					"products": "Продукты",
					"pricing": "Цены",
					"team": "Команда",
					"blog": "Блог",
					"careers": "Вакансии",
					"faq": "FAQ",
					"contact": "Контакт",
					"settings": "Настройки",
					"appName": "i18n Бенчмарк",
					"goToGithub": "Перейти на GitHub",
					"header": "Заголовок"
				}
			}
		},
		location: "local",
		localId: "header::local::src/components/Header.content.ts",
		filePath: "src/components/Header.content.ts"
	},
	"open-positions": {
		key: "open-positions",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Open Positions\",\"applyNow\":\"Apply Now\",\"openings\":[{\"title\":\"Senior Frontend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"},{\"title\":\"Backend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\"},{\"title\":\"Technical Writer\",\"location\":\"Remote\",\"type\":\"Part-time\",\"dept\":\"Documentation\",\"desc\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\"},{\"title\":\"DevRel Engineer\",\"location\":\"San Francisco / Remote\",\"type\":\"Full-time\",\"dept\":\"Community\",\"desc\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\"},{\"title\":\"QA Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"}]},\"fr\":{\"title\":\"Postes ouverts\",\"applyNow\":\"Postuler\",\"openings\":[{\"title\":\"Ingénieur front-end senior\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\"},{\"title\":\"Ingénieur back-end\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\"},{\"title\":\"Rédacteur·rice technique\",\"location\":\"À distance\",\"type\":\"Temps partiel\",\"dept\":\"Documentation\",\"desc\":\"Guides, références d'API et tutoriels pour la plateforme de benchmark.\"},{\"title\":\"Ingénieur DevRel\",\"location\":\"San Francisco / télétravail\",\"type\":\"Temps plein\",\"dept\":\"Communauté\",\"desc\":\"Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\"},{\"title\":\"Ingénieur QA\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Garantir la fiabilité des résultats par des tests et validations rigoureux.\"}]},\"es\":{\"title\":\"Posiciones abiertas\",\"applyNow\":\"Postular ahora\",\"openings\":[{\"title\":\"Ingeniero Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Construya y mantenga nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\"},{\"title\":\"Ingeniero Backend\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automáticas diariamente.\"},{\"title\":\"Redactor Técnico\",\"location\":\"Remoto\",\"type\":\"Medio tiempo\",\"dept\":\"Documentación\",\"desc\":\"Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\"},{\"title\":\"Ingeniero de DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Comunidad\",\"desc\":\"Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\"},{\"title\":\"Ingeniero de QA\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Garantice la precisión y confiabilidad de los resultados de los benchmarks mediante pruebas y validaciones rigurosas.\"}]},\"de\":{\"title\":\"Offene Stellen\",\"applyNow\":\"Jetzt bewerben\",\"openings\":[{\"title\":\"Senior Frontend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwickler-Tools mit React, TypeScript und Vite.\"},{\"title\":\"Backend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\"},{\"title\":\"Technischer Redakteur\",\"location\":\"Remote\",\"type\":\"Teilzeit\",\"dept\":\"Dokumentation\",\"desc\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\"},{\"title\":\"DevRel-Ingenieur\",\"location\":\"San Francisco / Remote\",\"type\":\"Vollzeit\",\"dept\":\"Community\",\"desc\":\"Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\"},{\"title\":\"QA-Ingenieur\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.\"}]},\"it\":{\"title\":\"Posizioni aperte\",\"applyNow\":\"Candidati ora\",\"openings\":[{\"title\":\"Ingegnere Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\"},{\"title\":\"Ingegnere Backend\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\"},{\"title\":\"Scrittore tecnico\",\"location\":\"Remoto\",\"type\":\"Part-time\",\"dept\":\"Documentazione\",\"desc\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\"},{\"title\":\"Ingegnere DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Comunità\",\"desc\":\"Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.\"},{\"title\":\"Ingegnere QA\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\"}]},\"pt\":{\"title\":\"Vagas Abertas\",\"applyNow\":\"Candidatar-se agora\",\"openings\":[{\"title\":\"Engenheiro Frontend Sênior\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\"},{\"title\":\"Engenheiro Backend\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Projete e dimensione nossa infraestrutura de benchmarking em nuvem, lidando com milhares de execuções automatizadas diariamente.\"},{\"title\":\"Escritor Técnico\",\"location\":\"Remoto\",\"type\":\"Meio período\",\"dept\":\"Documentação\",\"desc\":\"Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\"},{\"title\":\"Engenheiro DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Comunidade\",\"desc\":\"Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\"},{\"title\":\"Engenheiro de QA\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validações rigorosos.\"}]},\"zh\":{\"title\":\"开放职位\",\"applyNow\":\"立即申请\",\"openings\":[{\"title\":\"高级前端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\"},{\"title\":\"后端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"设计和扩展我们的云基准测试基础设施，每天处理数千次自动运行。\"},{\"title\":\"技术文档工程师\",\"location\":\"远程\",\"type\":\"兼职\",\"dept\":\"文档\",\"desc\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\"},{\"title\":\"开发者关系工程师\",\"location\":\"旧金山 / 远程\",\"type\":\"全职\",\"dept\":\"社区\",\"desc\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\"},{\"title\":\"测试工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\"}]},\"ja\":{\"title\":\"募集中の職種\",\"applyNow\":\"今すぐ応募\",\"openings\":[{\"title\":\"シニアフロントエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。\"},{\"title\":\"バックエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。\"},{\"title\":\"テクニカルライター\",\"location\":\"リモート\",\"type\":\"アルバイト・パート\",\"dept\":\"ドキュメンテーション\",\"desc\":\"ベンチマークプラットフォーム向けの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\"},{\"title\":\"DevRelエンジニア\",\"location\":\"サンフランシスコ / リモート\",\"type\":\"正社員\",\"dept\":\"コミュニティ\",\"desc\":\"講演、ワークショップ、ブログ記事、オープンソースへの貢献を通じて、i18nコミュニティと交流します。\"},{\"title\":\"QAエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\"}]},\"ko\":{\"title\":\"채용 중인 직무\",\"applyNow\":\"지금 지원하기\",\"openings\":[{\"title\":\"시니어 프론트엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\"},{\"title\":\"백엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\"},{\"title\":\"기술 작가\",\"location\":\"원격\",\"type\":\"아르바이트\",\"dept\":\"문서화\",\"desc\":\"벤치마킹 플랫폼을 위한 종합 가이드, API 참조 및 튜토리얼을 작성합니다.\"},{\"title\":\"DevRel 엔지니어\",\"location\":\"샌프란시스코 / 원격\",\"type\":\"정규직\",\"dept\":\"커뮤니티\",\"desc\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\"},{\"title\":\"QA 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\"}]},\"ru\":{\"title\":\"Открытые вакансии\",\"applyNow\":\"Подать заявку\",\"openings\":[{\"title\":\"Старший фронтенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Разработка и поддержка нашей панели мониторинга бенчмарков и инструментов для разработчиков с использованием React, TypeScript и Vite.\"},{\"title\":\"Бэкенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\"},{\"title\":\"Технический писатель\",\"location\":\"Удаленно\",\"type\":\"Частичная занятость\",\"dept\":\"Документация\",\"desc\":\"Создание подробных руководств, справочников API и обучающих материалов для нашей платформы бенчмаркинга.\"},{\"title\":\"DevRel-инженер\",\"location\":\"Сан-Франциско / Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Сообщество\",\"desc\":\"Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в открытый исходный код.\"},{\"title\":\"QA-инженер\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Обеспечение точности и надежности результатов бенчмарков посредством тщательного тестирования и валидации.\"}]}}}"),
		location: "local",
		localId: "open-positions::local::src/components/pages/careers/OpenPositions.content.ts",
		filePath: "src/components/pages/careers/OpenPositions.content.ts"
	},
	"careers-benefits": {
		key: "careers-benefits",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"x20TimeForOssContributions": "20% time for OSS contributions",
					"openSourceTime": "Open source time",
					"topOfMarketCompensation": "Top-of-market compensation",
					"competitivePay": "Competitive pay",
					"workFromAnywhereInThe": "Work from anywhere in the world"
				},
				"fr": {
					"x20TimeForOssContributions": "20 % du temps pour les contributions OSS",
					"openSourceTime": "Temps open source",
					"topOfMarketCompensation": "Rémunération haut de gamme",
					"competitivePay": "Salaire compétitif",
					"workFromAnywhereInThe": "Travailler d'où vous voulez dans le monde"
				},
				"es": {
					"x20TimeForOssContributions": "20% del tiempo para contribuciones OSS",
					"openSourceTime": "Tiempo de código abierto",
					"topOfMarketCompensation": "Compensación líder en el mercado",
					"competitivePay": "Salario competitivo",
					"workFromAnywhereInThe": "Trabaja desde cualquier lugar del mundo"
				},
				"de": {
					"x20TimeForOssContributions": "20 % der Zeit für OSS-Beiträge",
					"openSourceTime": "Open-Source-Zeit",
					"topOfMarketCompensation": "Marktführende Vergütung",
					"competitivePay": "Wettbewerbsfähige Bezahlung",
					"workFromAnywhereInThe": "Arbeiten Sie von überall auf der Welt"
				},
				"it": {
					"x20TimeForOssContributions": "20% del tempo per contributi OSS",
					"openSourceTime": "Tempo open source",
					"topOfMarketCompensation": "Compensi ai vertici del mercato",
					"competitivePay": "Retribuzione competitiva",
					"workFromAnywhereInThe": "Lavora da qualsiasi parte del mondo"
				},
				"pt": {
					"x20TimeForOssContributions": "20% do tempo para contribuições OSS",
					"openSourceTime": "Tempo de código aberto",
					"topOfMarketCompensation": "Compensação no topo do mercado",
					"competitivePay": "Pagamento competitivo",
					"workFromAnywhereInThe": "Trabalhe de qualquer lugar do mundo"
				},
				"zh": {
					"x20TimeForOssContributions": "20% 的时间用于 OSS 贡献",
					"openSourceTime": "开源时间",
					"topOfMarketCompensation": "市场顶级的薪酬",
					"competitivePay": "有竞争力的薪酬",
					"workFromAnywhereInThe": "可以在世界任何地方工作"
				},
				"ja": {
					"x20TimeForOssContributions": "OSS貢献のための20％の時間",
					"openSourceTime": "オープンソースの時間",
					"topOfMarketCompensation": "市場トップクラスの報酬",
					"competitivePay": "競争力のある給与",
					"workFromAnywhereInThe": "世界中のどこからでも働ける"
				},
				"ko": {
					"x20TimeForOssContributions": "OSS 기여를 위한 20%의 시간",
					"openSourceTime": "오픈 소스 시간",
					"topOfMarketCompensation": "업계 최고 수준의 보상",
					"competitivePay": "경쟁력 있는 급여",
					"workFromAnywhereInThe": "세계 어디서나 근무 가능"
				},
				"ru": {
					"x20TimeForOssContributions": "20% времени на вклад в OSS",
					"openSourceTime": "Время на открытый исходный код",
					"topOfMarketCompensation": "Вознаграждение выше рыночного",
					"competitivePay": "Конкурентоспособная оплата",
					"workFromAnywhereInThe": "Работайте из любой точки мира"
				}
			}
		},
		location: "local",
		localId: "careers-benefits::local::src/components/pages/careers/careersBenefits.content.ts",
		filePath: "src/components/pages/careers/careersBenefits.content.ts"
	},
	"footer": {
		key: "footer",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"description": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
					"resources": "Resources",
					"contact": "Contact",
					"github": "GitHub",
					"methodology": "Methodology",
					"contributing": "Contributing",
					"footerText": "i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.",
					"appName": "i18n Benchmark",
					"contactEmail": "contact@intlayer.org"
				},
				"fr": {
					"description": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
					"resources": "Ressources",
					"contact": "Contact",
					"github": "GitHub",
					"methodology": "Méthodologie",
					"contributing": "Contribuer",
					"footerText": "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et Vue Router.",
					"appName": "Benchmark i18n",
					"contactEmail": "contact@intlayer.org"
				},
				"es": {
					"description": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
					"resources": "Recursos",
					"contact": "Contacto",
					"github": "GitHub",
					"methodology": "Metodología",
					"contributing": "Contribuir",
					"footerText": "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y Vue Router.",
					"appName": "i18n Benchmark",
					"contactEmail": "contact@intlayer.org"
				},
				"de": {
					"description": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
					"resources": "Ressourcen",
					"contact": "Kontakt",
					"github": "GitHub",
					"methodology": "Methodik",
					"contributing": "Mitwirken",
					"footerText": "i18n Benchmark – Open-Source-Projekt. Erstellt mit Vue, Vite & Vue Router.",
					"appName": "i18n Benchmark",
					"contactEmail": "contact@intlayer.org"
				},
				"it": {
					"description": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
					"resources": "Risorse",
					"contact": "Contatto",
					"github": "GitHub",
					"methodology": "Metodologia",
					"contributing": "Contribuire",
					"footerText": "i18n Benchmark — Progetto open-source. Costruito con Vue, Vite e Vue Router.",
					"appName": "i18n Benchmark",
					"contactEmail": "contact@intlayer.org"
				},
				"pt": {
					"description": "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
					"resources": "Recursos",
					"contact": "Contato",
					"github": "GitHub",
					"methodology": "Metodologia",
					"contributing": "Contribuindo",
					"footerText": "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e Vue Router.",
					"appName": "i18n Benchmark",
					"contactEmail": "contact@intlayer.org"
				},
				"zh": {
					"description": "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
					"resources": "资源",
					"contact": "联系我们",
					"github": "GitHub",
					"methodology": "方法论",
					"contributing": "贡献",
					"footerText": "i18n 基准测试——开源项目。使用 Vue、Vite 和 Vue Router 构建。",
					"appName": "i18n 基准测试",
					"contactEmail": "contact@intlayer.org"
				},
				"ja": {
					"description": "バンドルサイズ、ロード時間、アプリの反応性に与える国際化ライブラリの実際の影響を測定するためのオープンソースのテストアプリケーション。",
					"resources": "リソース",
					"contact": "お問い合わせ",
					"github": "GitHub",
					"methodology": "方法論",
					"contributing": "貢献",
					"footerText": "i18n ベンチマーク — オープンソースプロジェクト。Vue、Vite、Vue Routerで構築されています。",
					"appName": "i18n ベンチマーク",
					"contactEmail": "contact@intlayer.org"
				},
				"ko": {
					"description": "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
					"resources": "리소스",
					"contact": "연락처",
					"github": "GitHub",
					"methodology": "방법론",
					"contributing": "기여하기",
					"footerText": "i18n 벤치마크 — 오픈 소스 프로젝트. Vue, Vite 및 Vue Router로 제작되었습니다.",
					"appName": "i18n 벤치마크",
					"contactEmail": "contact@intlayer.org"
				},
				"ru": {
					"description": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
					"resources": "Ресурсы",
					"contact": "Контакт",
					"github": "GitHub",
					"methodology": "Методология",
					"contributing": "Участие в проекте",
					"footerText": "i18n Benchmark — проект с открытым исходным кодом. Построен на Vue, Vite и Vue Router.",
					"appName": "i18n Бенчмарк",
					"contactEmail": "contact@intlayer.org"
				}
			}
		},
		location: "local",
		localId: "footer::local::src/components/Footer.content.ts",
		filePath: "src/components/Footer.content.ts"
	},
	"results-table": {
		key: "results-table",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Sample Results",
					"columns": {
						"library": "Library",
						"bundleSize": "Bundle Size",
						"lookupTime": "Lookup Time",
						"lazyLoading": "Lazy Loading"
					},
					"yes": "Yes",
					"manual": "Manual"
				},
				"fr": {
					"title": "Exemples de résultats",
					"columns": {
						"library": "Bibliothèque",
						"bundleSize": "Taille du bundle",
						"lookupTime": "Temps de recherche",
						"lazyLoading": "Chargement différé"
					},
					"yes": "Oui",
					"manual": "Manuel"
				},
				"es": {
					"title": "Resultados de muestra",
					"columns": {
						"library": "Biblioteca",
						"bundleSize": "Tamaño del paquete",
						"lookupTime": "Tiempo de búsqueda",
						"lazyLoading": "Carga diferida"
					},
					"yes": "Sí",
					"manual": "Manual"
				},
				"de": {
					"title": "Beispielergebnisse",
					"columns": {
						"library": "Bibliothek",
						"bundleSize": "Bundle-Größe",
						"lookupTime": "Lookup-Zeit",
						"lazyLoading": "Lazy Loading"
					},
					"yes": "Ja",
					"manual": "Manuell"
				},
				"it": {
					"title": "Risultati di esempio",
					"columns": {
						"library": "Libreria",
						"bundleSize": "Dimensioni del bundle",
						"lookupTime": "Tempo di ricerca",
						"lazyLoading": "Caricamento lazy"
					},
					"yes": "Sì",
					"manual": "Manuale"
				},
				"pt": {
					"title": "Resultados de Amostra",
					"columns": {
						"library": "Biblioteca",
						"bundleSize": "Tamanho do bundle",
						"lookupTime": "Tempo de busca",
						"lazyLoading": "Carregamento preguiçoso"
					},
					"yes": "Sim",
					"manual": "Manual"
				},
				"zh": {
					"title": "样本结果",
					"columns": {
						"library": "库",
						"bundleSize": "捆绑包大小",
						"lookupTime": "查找时间",
						"lazyLoading": "延迟加载"
					},
					"yes": "是",
					"manual": "手动"
				},
				"ja": {
					"title": "サンプル結果",
					"columns": {
						"library": "ライブラリ",
						"bundleSize": "バンドルサイズ",
						"lookupTime": "ルックアップ時間",
						"lazyLoading": "遅延ロード"
					},
					"yes": "はい",
					"manual": "手動"
				},
				"ko": {
					"title": "샘플 결과",
					"columns": {
						"library": "라이브러리",
						"bundleSize": "번들 크기",
						"lookupTime": "조회 시간",
						"lazyLoading": "지연 로딩"
					},
					"yes": "예",
					"manual": "수동"
				},
				"ru": {
					"title": "Примеры результатов",
					"columns": {
						"library": "Библиотека",
						"bundleSize": "Размер бандла",
						"lookupTime": "Время поиска",
						"lazyLoading": "Ленивая загрузка"
					},
					"yes": "Да",
					"manual": "Вручную"
				}
			}
		},
		location: "local",
		localId: "results-table::local::src/components/pages/home/ResultsTable.content.ts",
		filePath: "src/components/pages/home/ResultsTable.content.ts"
	},
	"settings-header": {
		key: "settings-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
					"settings": "Settings"
				},
				"fr": {
					"manageYourAccountPreferencesAnd": "Gérez vos préférences de compte et votre configuration.",
					"settings": "Paramètres"
				},
				"es": {
					"manageYourAccountPreferencesAnd": "Administre sus preferencias y configuración de cuenta.",
					"settings": "Ajustes"
				},
				"de": {
					"manageYourAccountPreferencesAnd": "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.",
					"settings": "Einstellungen"
				},
				"it": {
					"manageYourAccountPreferencesAnd": "Gestisci le preferenze e la configurazione del tuo account.",
					"settings": "Impostazioni"
				},
				"pt": {
					"manageYourAccountPreferencesAnd": "Gerencie suas preferências e configurações de conta.",
					"settings": "Configurações"
				},
				"zh": {
					"manageYourAccountPreferencesAnd": "管理您的帐户偏好和配置。",
					"settings": "设置"
				},
				"ja": {
					"manageYourAccountPreferencesAnd": "アカウントの設定と構成を管理します。",
					"settings": "設定"
				},
				"ko": {
					"manageYourAccountPreferencesAnd": "계정 기본 설정 및 구성을 관리합니다.",
					"settings": "설정"
				},
				"ru": {
					"manageYourAccountPreferencesAnd": "Управление настройками и конфигурацией вашего аккаунта.",
					"settings": "Настройки"
				}
			}
		},
		location: "local",
		localId: "settings-header::local::src/components/pages/settings/settingsHeader.content.ts",
		filePath: "src/components/pages/settings/settingsHeader.content.ts"
	},
	"contact-form": {
		key: "contact-form",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"nameLabel": "Name",
					"namePlaceholder": "Your name",
					"emailLabel": "Email",
					"emailPlaceholder": "you@example.com",
					"topicLabel": "Topic",
					"topics": [
						"Bug Report",
						"New Benchmark Idea",
						"Methodology Question",
						"Contribution",
						"Other"
					],
					"messageLabel": "Message",
					"messagePlaceholder": "Describe your question or idea...",
					"sendMessage": "Send Message"
				},
				"fr": {
					"nameLabel": "Nom",
					"namePlaceholder": "Votre nom",
					"emailLabel": "E-mail",
					"emailPlaceholder": "vous@exemple.com",
					"topicLabel": "Sujet",
					"topics": [
						"Rapport de bug",
						"Idée de benchmark",
						"Question de méthodologie",
						"Contribution",
						"Autre"
					],
					"messageLabel": "Message",
					"messagePlaceholder": "Décrivez votre question ou idée…",
					"sendMessage": "Envoyer"
				},
				"es": {
					"nameLabel": "Nombre",
					"namePlaceholder": "Su nombre",
					"emailLabel": "Correo electrónico",
					"emailPlaceholder": "tu@ejemplo.com",
					"topicLabel": "Tema",
					"topics": [
						"Informe de error",
						"Nueva idea de benchmark",
						"Pregunta sobre metodología",
						"Contribución",
						"Otro"
					],
					"messageLabel": "Mensaje",
					"messagePlaceholder": "Describa su pregunta o idea...",
					"sendMessage": "Enviar mensaje"
				},
				"de": {
					"nameLabel": "Name",
					"namePlaceholder": "Ihr Name",
					"emailLabel": "E-Mail",
					"emailPlaceholder": "sie@beispiel.de",
					"topicLabel": "Thema",
					"topics": [
						"Fehlerbericht",
						"Neue Benchmark-Idee",
						"Frage zur Methodik",
						"Beitrag",
						"Sonstiges"
					],
					"messageLabel": "Nachricht",
					"messagePlaceholder": "Beschreiben Sie Ihre Frage oder Idee...",
					"sendMessage": "Nachricht senden"
				},
				"it": {
					"nameLabel": "Nome",
					"namePlaceholder": "Il tuo nome",
					"emailLabel": "E-mail",
					"emailPlaceholder": "tu@esempio.com",
					"topicLabel": "Argomento",
					"topics": [
						"Segnalazione bug",
						"Nuova idea di benchmark",
						"Domanda sulla metodologia",
						"Contributo",
						"Altro"
					],
					"messageLabel": "Messaggio",
					"messagePlaceholder": "Descrivi la tua domanda o idea...",
					"sendMessage": "Invia messaggio"
				},
				"pt": {
					"nameLabel": "Nome",
					"namePlaceholder": "Seu nome",
					"emailLabel": "E-mail",
					"emailPlaceholder": "voce@exemplo.com",
					"topicLabel": "Assunto",
					"topics": [
						"Relatório de erro",
						"Nova ideia de benchmark",
						"Pergunta sobre metodologia",
						"Contribuição",
						"Outro"
					],
					"messageLabel": "Mensagem",
					"messagePlaceholder": "Descreva sua pergunta ou ideia...",
					"sendMessage": "Enviar Mensagem"
				},
				"zh": {
					"nameLabel": "姓名",
					"namePlaceholder": "您的姓名",
					"emailLabel": "电子邮件",
					"emailPlaceholder": "you@example.com",
					"topicLabel": "主题",
					"topics": [
						"错误报告",
						"新基准测试创意",
						"方法论问题",
						"贡献",
						"其他"
					],
					"messageLabel": "消息",
					"messagePlaceholder": "描述您的问题或想法...",
					"sendMessage": "发送消息"
				},
				"ja": {
					"nameLabel": "名前",
					"namePlaceholder": "お名前",
					"emailLabel": "メールアドレス",
					"emailPlaceholder": "you@example.com",
					"topicLabel": "トピック",
					"topics": [
						"バグ報告",
						"新しいベンチマークのアイデア",
						"方法論に関する質問",
						"貢献",
						"その他"
					],
					"messageLabel": "メッセージ",
					"messagePlaceholder": "質問やアイデアを説明してください...",
					"sendMessage": "メッセージを送信"
				},
				"ko": {
					"nameLabel": "이름",
					"namePlaceholder": "이름을 입력하세요",
					"emailLabel": "이메일",
					"emailPlaceholder": "you@example.com",
					"topicLabel": "주제",
					"topics": [
						"버그 보고",
						"새로운 벤치마크 아이디어",
						"방법론 관련 질문",
						"기여",
						"기타"
					],
					"messageLabel": "메시지",
					"messagePlaceholder": "질문이나 아이디어를 설명해 주세요...",
					"sendMessage": "메시지 보내기"
				},
				"ru": {
					"nameLabel": "Имя",
					"namePlaceholder": "Ваше имя",
					"emailLabel": "Электронная почта",
					"emailPlaceholder": "you@example.com",
					"topicLabel": "Тема",
					"topics": [
						"Отчет об ошибке",
						"Новая идея для бенчмарка",
						"Вопрос по методологии",
						"Вклад",
						"Другое"
					],
					"messageLabel": "Сообщение",
					"messagePlaceholder": "Опишите ваш вопрос или идею...",
					"sendMessage": "Отправить сообщение"
				}
			}
		},
		location: "local",
		localId: "contact-form::local::src/components/pages/contact/ContactForm.content.ts",
		filePath: "src/components/pages/contact/ContactForm.content.ts"
	},
	"contact-header": {
		key: "contact-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
					"getInTouch": "Get in Touch"
				},
				"fr": {
					"haveIdeasFoundABug": "Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à",
					"getInTouch": "Contactez-nous"
				},
				"es": {
					"haveIdeasFoundABug": "¿Tiene ideas, encontró un error o quiere contribuir con un benchmark? Póngase en contacto con nosotros en",
					"getInTouch": "Ponerse en contacto"
				},
				"de": {
					"haveIdeasFoundABug": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter",
					"getInTouch": "Kontaktieren Sie uns"
				},
				"it": {
					"haveIdeasFoundABug": "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo",
					"getInTouch": "Mettiti in contatto"
				},
				"pt": {
					"haveIdeasFoundABug": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em",
					"getInTouch": "Entre em contato"
				},
				"zh": {
					"haveIdeasFoundABug": "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们",
					"getInTouch": "联系我们"
				},
				"ja": {
					"haveIdeasFoundABug": "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでお問い合わせください：",
					"getInTouch": "お問い合わせ"
				},
				"ko": {
					"haveIdeasFoundABug": "아이디어가 있거나 버그를 발견했거나 벤치마크를 제공하고 싶으신가요? 다음 주소로 문의해 주세요.",
					"getInTouch": "연락처"
				},
				"ru": {
					"haveIdeasFoundABug": "Есть идеи, нашли ошибку или хотите предложить бенчмарк? Свяжитесь с нами по адресу",
					"getInTouch": "Связаться с нами"
				}
			}
		},
		location: "local",
		localId: "contact-header::local::src/components/pages/contact/contactHeader.content.ts",
		filePath: "src/components/pages/contact/contactHeader.content.ts"
	},
	"about-grid": {
		key: "about-grid",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"why\":{\"title\":\"Why This Exists\",\"description\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"},\"methodology\":{\"title\":\"Methodology\",\"description\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"}},\"fr\":{\"why\":{\"title\":\"Pourquoi cela existe\",\"description\":\"Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.\"},\"methodology\":{\"title\":\"Méthodologie\",\"description\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles.\"}},\"es\":{\"why\":{\"title\":\"Por qué existe esto\",\"description\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Ayuda realmente la carga diferida o solo traslada el coste? Este benchmark responde a esas preguntas con datos reales.\"},\"methodology\":{\"title\":\"Metodología\",\"description\":\"La misma aplicación de 10 páginas se crea una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"}},\"de\":{\"why\":{\"title\":\"Warum dies existiert\",\"description\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"},\"methodology\":{\"title\":\"Methodik\",\"description\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten bei Gebietsumschaltungen zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\"}},\"it\":{\"why\":{\"title\":\"Perché questo esiste\",\"description\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"},\"methodology\":{\"title\":\"Metodologia\",\"description\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiemy audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di locale. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"}},\"pt\":{\"why\":{\"title\":\"Por que Isso Existe\",\"description\":\"A escolha de uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"},\"methodology\":{\"title\":\"Metodologia\",\"description\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"}},\"zh\":{\"why\":{\"title\":\"为什么存在这个项目\",\"description\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有比较衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\"},\"methodology\":{\"title\":\"方法论\",\"description\":\"同一个包含 10 个页面的应用程序针对每个库构建一次。我们测量生产捆绑包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕获语言切换期间的渲染时间。所有测试都在具有一致硬件的 CI 中运行，以确保结果可复现。\"}},\"ja\":{\"why\":{\"title\":\"このプロジェクトの目的\",\"description\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を追加するか？数千の翻訳キーがロードされたときにレンダリングにどのように影響するか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの疑問に答えます。\"},\"methodology\":{\"title\":\"方法論\",\"description\":\"同じ10ページのアプリがライブラリごとに1回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer経由）、ロード指標のLighthouse監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間を取得します。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェア上のCIで実行されます。\"}},\"ko\":{\"why\":{\"title\":\"이 프로젝트의 존재 이유\",\"description\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미칩니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\"},\"methodology\":{\"title\":\"방법론\",\"description\":\"동일한 10페이지 분량의 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 지표에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로캘 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"}},\"ru\":{\"why\":{\"title\":\"Почему это существует\",\"description\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"},\"methodology\":{\"title\":\"Методология\",\"description\":\"Одно и то же 10-страничное приложение создается по одному разу для каждой библиотеки. Мы измеряем продакшн-бандл (с помощью rollup-plugin-visualizer), проводим аудит Lighthouse для получения метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении языков. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\"}}}}"),
		location: "local",
		localId: "about-grid::local::src/components/pages/about/AboutGrid.content.ts",
		filePath: "src/components/pages/about/AboutGrid.content.ts"
	},
	"pricing-tiers": {
		key: "pricing-tiers",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"starterName": "Starter",
					"starterPrice": "$0",
					"starterPeriod": "forever",
					"starterFeatures": [
						"5 benchmark runs/day",
						"3 libraries",
						"Community support",
						"Public results"
					],
					"proName": "Pro",
					"proPrice": "$29",
					"proPeriod": "/month",
					"proFeatures": [
						"Unlimited runs",
						"All libraries",
						"Priority support",
						"Private results",
						"CI integration",
						"Historical data"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Custom",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Everything in Pro",
						"On-premise option",
						"SSO & SAML",
						"Dedicated account manager",
						"Custom SLAs",
						"Audit logs",
						"Training sessions"
					],
					"contactSales": "Contact Sales",
					"getStarted": "Get Started"
				},
				"fr": {
					"starterName": "Starter",
					"starterPrice": "0 €",
					"starterPeriod": "pour toujours",
					"starterFeatures": [
						"5 exécutions de benchmark / jour",
						"3 bibliothèques",
						"Support communautaire",
						"Résultats publics"
					],
					"proName": "Pro",
					"proPrice": "29 €",
					"proPeriod": "/ mois",
					"proFeatures": [
						"Exécutions illimitées",
						"Toutes les bibliothèques",
						"Support prioritaire",
						"Résultats privés",
						"Intégration CI",
						"Historique"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Sur mesure",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Tout le Pro",
						"Option on-premise",
						"SSO et SAML",
						"Account manager dédié",
						"SLA sur mesure",
						"Journaux d'audit",
						"Sessions de formation"
					],
					"contactSales": "Contacter les ventes",
					"getStarted": "Commencer"
				},
				"es": {
					"starterName": "Starter",
					"starterPrice": "0 $",
					"starterPeriod": "para siempre",
					"starterFeatures": [
						"5 ejecuciones de benchmark al día",
						"3 bibliotecas",
						"Soporte de la comunidad",
						"Resultados públicos"
					],
					"proName": "Pro",
					"proPrice": "29 $",
					"proPeriod": "/mes",
					"proFeatures": [
						"Ejecuciones ilimitadas",
						"Todas las bibliotecas",
						"Soporte prioritario",
						"Resultados privados",
						"Integración CI",
						"Datos históricos"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Personalizado",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Todo lo de Pro",
						"Opción local",
						"SSO y SAML",
						"Gerente de cuenta dedicado",
						"SLAs personalizados",
						"Registros de auditoría",
						"Sesiones de formación"
					],
					"contactSales": "Contactar ventas",
					"getStarted": "Comenzar"
				},
				"de": {
					"starterName": "Starter",
					"starterPrice": "0 €",
					"starterPeriod": "für immer",
					"starterFeatures": [
						"5 Benchmark-Durchläufe/Tag",
						"3 Bibliotheken",
						"Community-Support",
						"Öffentliche Ergebnisse"
					],
					"proName": "Pro",
					"proPrice": "29 €",
					"proPeriod": "/Monat",
					"proFeatures": [
						"Unbegrenzte Durchläufe",
						"Alle Bibliotheken",
						"Prioritäts-Support",
						"Private Ergebnisse",
						"CI-Integration",
						"Historische Daten"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Individuell",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Alles in Pro",
						"On-Premise-Option",
						"SSO & SAML",
						"Dedizierter Account Manager",
						"Benutzerdefinierte SLAs",
						"Audit-Protokolle",
						"Schulungssitzungen"
					],
					"contactSales": "Vertrieb kontaktieren",
					"getStarted": "Erste Schritte"
				},
				"it": {
					"starterName": "Starter",
					"starterPrice": "0 €",
					"starterPeriod": "per sempre",
					"starterFeatures": [
						"5 esecuzioni benchmark/giorno",
						"3 librerie",
						"Supporto della comunità",
						"Risultati pubblici"
					],
					"proName": "Pro",
					"proPrice": "29 €",
					"proPeriod": "/mese",
					"proFeatures": [
						"Esecuzioni illimitate",
						"Tutte le librerie",
						"Supporto prioritario",
						"Risultati privati",
						"Integrazione CI",
						"Dati storici"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Personalizzato",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Tutto in Pro",
						"Opzione on-premise",
						"SSO e SAML",
						"Account manager dedicato",
						"SLA personalizzati",
						"Log di audit",
						"Sessioni di formazione"
					],
					"contactSales": "Contatta l'ufficio vendite",
					"getStarted": "Inizia"
				},
				"pt": {
					"starterName": "Starter",
					"starterPrice": "0 $",
					"starterPeriod": "para sempre",
					"starterFeatures": [
						"5 execuções de benchmark/dia",
						"3 bibliotecas",
						"Suporte da comunidade",
						"Resultados públicos"
					],
					"proName": "Pro",
					"proPrice": "29 $",
					"proPeriod": "/mês",
					"proFeatures": [
						"Execuções ilimitadas",
						"Todas as bibliotecas",
						"Suporte prioritário",
						"Resultados privados",
						"Integração CI",
						"Dados históricos"
					],
					"enterpriseName": "Enterprise",
					"enterprisePrice": "Personalizado",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Tudo no Pro",
						"Opção on-premise",
						"SSO e SAML",
						"Gerente de conta dedicado",
						"SLAs personalizados",
						"Logs de auditoria",
						"Sessões de treinamento"
					],
					"contactSales": "Contatar Vendas",
					"getStarted": "Começar"
				},
				"zh": {
					"starterName": "入门版",
					"starterPrice": "0 美元",
					"starterPeriod": "永久",
					"starterFeatures": [
						"每天 5 次基准测试",
						"3 个库",
						"社区支持",
						"公开结果"
					],
					"proName": "专业版",
					"proPrice": "29 美元",
					"proPeriod": "/月",
					"proFeatures": [
						"无限次运行",
						"所有库",
						"优先支持",
						"私人结果",
						"CI 集成",
						"历史数据"
					],
					"enterpriseName": "企业版",
					"enterprisePrice": "自定义",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"包含专业版所有功能",
						"本地部署选项",
						"SSO 和 SAML",
						"专属客户经理",
						"定制 SLA",
						"审计日志",
						"培训课程"
					],
					"contactSales": "联系销售",
					"getStarted": "开始使用"
				},
				"ja": {
					"starterName": "スターター",
					"starterPrice": "0ドル",
					"starterPeriod": "永久に",
					"starterFeatures": [
						"1日5回のベンチマーク実行",
						"3つのライブラリ",
						"コミュニティサポート",
						"公開結果"
					],
					"proName": "プロ",
					"proPrice": "29ドル",
					"proPeriod": "/月",
					"proFeatures": [
						"実行回数無制限",
						"すべてのライブラリ",
						"優先サポート",
						"非公開結果",
						"CI統合",
						"履歴データ"
					],
					"enterpriseName": "エンタープライズ",
					"enterprisePrice": "カスタム",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Proのすべての機能",
						"オンプレミスオプション",
						"SSOおよびSAML",
						"専任のアカウントマネージャー",
						"カスタムSLA",
						"監査ログ",
						"トレーニングセッション"
					],
					"contactSales": "営業に連絡",
					"getStarted": "開始する"
				},
				"ko": {
					"starterName": "스타터",
					"starterPrice": "0달러",
					"starterPeriod": "영구적으로",
					"starterFeatures": [
						"하루 5회 벤치마크 실행",
						"3개 라이브러리",
						"커뮤니티 지원",
						"공개 결과"
					],
					"proName": "프로",
					"proPrice": "29달러",
					"proPeriod": "/월",
					"proFeatures": [
						"무제한 실행",
						"모든 라이브러리",
						"우선 지원",
						"비공개 결과",
						"CI 통합",
						"기록 데이터"
					],
					"enterpriseName": "엔터프라이즈",
					"enterprisePrice": "맞춤형",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"프로의 모든 기능 포함",
						"온프레미스 옵션",
						"SSO 및 SAML",
						"전담 어카운트 매니저",
						"맞춤형 SLA",
						"감사 로그",
						"교육 세션"
					],
					"contactSales": "영업팀 문의",
					"getStarted": "시작하기"
				},
				"ru": {
					"starterName": "Начальный",
					"starterPrice": "0 $",
					"starterPeriod": "навсегда",
					"starterFeatures": [
						"5 запусков бенчмарков в день",
						"3 библиотеки",
						"Поддержка сообщества",
						"Публичные результаты"
					],
					"proName": "Профессиональный",
					"proPrice": "29 $",
					"proPeriod": "/мес",
					"proFeatures": [
						"Неограниченное количество запусков",
						"Все библиотеки",
						"Приоритетная поддержка",
						"Приватные результаты",
						"Интеграция с CI",
						"Исторические данные"
					],
					"enterpriseName": "Предприятие",
					"enterprisePrice": "Индивидуально",
					"enterprisePeriod": "",
					"enterpriseFeatures": [
						"Все функции Pro",
						"Локальное развертывание",
						"SSO и SAML",
						"Выделенный менеджер",
						"Индивидуальные SLA",
						"Журналы аудита",
						"Сессии по обучению"
					],
					"contactSales": "Связаться с отделом продаж",
					"getStarted": "Начать"
				}
			}
		},
		location: "local",
		localId: "pricing-tiers::local::src/components/pages/pricing/PricingTiers.content.ts",
		filePath: "src/components/pages/pricing/PricingTiers.content.ts"
	},
	"settings-footer": {
		key: "settings-footer",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"cancel": "Cancel",
					"saveChanges": "Save Changes"
				},
				"fr": {
					"cancel": "Annuler",
					"saveChanges": "Enregistrer"
				},
				"es": {
					"cancel": "Cancelar",
					"saveChanges": "Guardar cambios"
				},
				"de": {
					"cancel": "Abbrechen",
					"saveChanges": "Änderungen speichern"
				},
				"it": {
					"cancel": "Annulla",
					"saveChanges": "Salva modifiche"
				},
				"pt": {
					"cancel": "Cancelar",
					"saveChanges": "Salvar alterações"
				},
				"zh": {
					"cancel": "取消",
					"saveChanges": "保存更改"
				},
				"ja": {
					"cancel": "キャンセル",
					"saveChanges": "変更を保存"
				},
				"ko": {
					"cancel": "취소",
					"saveChanges": "변경 사항 저장"
				},
				"ru": {
					"cancel": "Отмена",
					"saveChanges": "Сохранить изменения"
				}
			}
		},
		location: "local",
		localId: "settings-footer::local::src/components/pages/settings/SettingsFooter.content.ts",
		filePath: "src/components/pages/settings/SettingsFooter.content.ts"
	},
	"theme-toggle": {
		key: "theme-toggle",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"auto": "Theme: Auto",
					"dark": "Theme: Dark",
					"light": "Theme: Light",
					"ariaLabelAuto": "Theme mode: auto (system). Click to switch to light mode.",
					"ariaLabelLight": "Theme mode: light. Click to switch to dark mode.",
					"ariaLabelDark": "Theme mode: dark. Click to switch to auto mode."
				},
				"fr": {
					"auto": "Thème : Auto",
					"dark": "Thème : Sombre",
					"light": "Thème : Clair",
					"ariaLabelAuto": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
					"ariaLabelLight": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
					"ariaLabelDark": "Mode de thème : sombre. Cliquez pour passer au mode auto."
				},
				"es": {
					"auto": "Tema: Automático",
					"dark": "Tema: Oscuro",
					"light": "Tema: Claro",
					"ariaLabelAuto": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
					"ariaLabelLight": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
					"ariaLabelDark": "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
				},
				"de": {
					"auto": "Design: Auto",
					"dark": "Design: Dunkel",
					"light": "Design: Hell",
					"ariaLabelAuto": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
					"ariaLabelLight": "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
					"ariaLabelDark": "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
				},
				"it": {
					"auto": "Tema: Auto",
					"dark": "Tema: Scuro",
					"light": "Tema: Chiaro",
					"ariaLabelAuto": "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
					"ariaLabelLight": "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
					"ariaLabelDark": "Modalità tema: scura. Fai clic per passare alla modalità automatica."
				},
				"pt": {
					"auto": "Tema: Automático",
					"dark": "Tema: Escuro",
					"light": "Tema: Claro",
					"ariaLabelAuto": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
					"ariaLabelLight": "Modo de tema: claro. Clique para mudar para o modo escuro.",
					"ariaLabelDark": "Modo de tema: escuro. Clique para mudar para o modo automático."
				},
				"zh": {
					"auto": "主题：自动",
					"dark": "主题：深色",
					"light": "主题：亮色",
					"ariaLabelAuto": "主题模式：自动（系统）。点击切换到亮色模式。",
					"ariaLabelLight": "主题模式：浅色。点击切换到深色模式。",
					"ariaLabelDark": "主题模式：深色。点击切换到自动模式。"
				},
				"ja": {
					"auto": "テーマ：自動",
					"dark": "テーマ：ダーク",
					"light": "テーマ：ライト",
					"ariaLabelAuto": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
					"ariaLabelLight": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
					"ariaLabelDark": "テーマモード：ダーク。クリックして自動モードに切り替えます。"
				},
				"ko": {
					"auto": "테마: 자동",
					"dark": "테마: 다크",
					"light": "테마: 라이트",
					"ariaLabelAuto": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
					"ariaLabelLight": "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
					"ariaLabelDark": "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
				},
				"ru": {
					"auto": "Тема: Авто",
					"dark": "Тема: Темная",
					"light": "Тема: Светлая",
					"ariaLabelAuto": "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
					"ariaLabelLight": "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
					"ariaLabelDark": "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
				}
			}
		},
		location: "local",
		localId: "theme-toggle::local::src/components/ThemeToggle.content.ts",
		filePath: "src/components/ThemeToggle.content.ts"
	},
	"about-header": {
		key: "about-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "About This Benchmark",
					"description": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page application where different i18n libraries can be integrated and measured under identical conditions."
				},
				"fr": {
					"title": "À propos de ce benchmark",
					"description": "Il s'agit d'une application de test open-source — pas d'un produit ou d'une entreprise. Son seul but est de fournir une application multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
				},
				"es": {
					"title": "Acerca de este benchmark",
					"description": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n bajo condiciones idénticas."
				},
				"de": {
					"title": "Über diesen Benchmark",
					"description": "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige Anwendung bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
				},
				"it": {
					"title": "Informazioni su questo benchmark",
					"description": "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione multi-pagina realistica in cui diverse librerie i18n possano essere integrate e misurate in condizioni identiche."
				},
				"pt": {
					"title": "Sobre este Benchmark",
					"description": "Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo de várias páginas realista, onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
				},
				"zh": {
					"title": "关于此基准测试",
					"description": "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个逼真的多页面应用程序，可以在相同条件下集成和测量不同的 i18n 库。"
				},
				"ja": {
					"title": "このベンチマークについて",
					"description": "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合および測定できる、現実的なマルチページアプリケーションを提供することです。"
				},
				"ko": {
					"title": "이 벤치마크에 대하여",
					"description": "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 애플리케이션을 제공하는 것입니다."
				},
				"ru": {
					"title": "Об этом бенчмарке",
					"description": "Это тестовое приложение с открытым исходным кодом — не продукт и не компания. Его единственная цель — предоставить реалистичное многостраничное приложение, в которое можно интегрировать различные библиотеки i18n и измерять их в идентичных условиях."
				}
			}
		},
		location: "local",
		localId: "about-header::local::src/components/pages/about/AboutHeader.content.ts",
		filePath: "src/components/pages/about/AboutHeader.content.ts"
	},
	"profile-section": {
		key: "profile-section",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Profile",
					"displayNameLabel": "Display Name",
					"emailLabel": "Email"
				},
				"fr": {
					"title": "Profil",
					"displayNameLabel": "Nom affiché",
					"emailLabel": "E-mail"
				},
				"es": {
					"title": "Perfil",
					"displayNameLabel": "Nombre a mostrar",
					"emailLabel": "Correo electrónico"
				},
				"de": {
					"title": "Profil",
					"displayNameLabel": "Anzeigename",
					"emailLabel": "E-Mail"
				},
				"it": {
					"title": "Profilo",
					"displayNameLabel": "Nome visualizzato",
					"emailLabel": "E-mail"
				},
				"pt": {
					"title": "Perfil",
					"displayNameLabel": "Nome de exibição",
					"emailLabel": "E-mail"
				},
				"zh": {
					"title": "个人资料",
					"displayNameLabel": "显示名称",
					"emailLabel": "电子邮件"
				},
				"ja": {
					"title": "プロフィール",
					"displayNameLabel": "表示名",
					"emailLabel": "メールアドレス"
				},
				"ko": {
					"title": "프로필",
					"displayNameLabel": "표시 이름",
					"emailLabel": "이메일"
				},
				"ru": {
					"title": "Профиль",
					"displayNameLabel": "Отображаемое имя",
					"emailLabel": "Электронная почта"
				}
			}
		},
		location: "local",
		localId: "profile-section::local::src/components/pages/settings/ProfileSection.content.ts",
		filePath: "src/components/pages/settings/ProfileSection.content.ts"
	},
	"pricing-header": {
		key: "pricing-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Simple, Transparent Pricing",
					"description": "Choose the plan that fits your team. No hidden fees."
				},
				"fr": {
					"title": "Tarification simple et transparente",
					"description": "Choisissez l'offre adaptée à votre équipe. Sans frais cachés."
				},
				"es": {
					"title": "Precios simples y transparentes",
					"description": "Elija el plan que se adapte a su equipo. Sin cargos ocultos."
				},
				"de": {
					"title": "Einfache, transparente Preise",
					"description": "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
				},
				"it": {
					"title": "Prezzi semplici e trasparenti",
					"description": "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
				},
				"pt": {
					"title": "Preços Simples e Transparentes",
					"description": "Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas."
				},
				"zh": {
					"title": "简单、透明的定价",
					"description": "选择适合您团队的计划。无隐藏费用。"
				},
				"ja": {
					"title": "シンプルで透明性の高い料金体系",
					"description": "チームに合ったプランをお選びください。隠れた費用はありません。"
				},
				"ko": {
					"title": "단순하고 투명한 요금제",
					"description": "팀에 적합한 플랜을 선택하세요. 숨겨진 수수료가 없습니다."
				},
				"ru": {
					"title": "Простые и прозрачные цены",
					"description": "Выберите план, который подходит вашей команде. Никаких скрытых платежей."
				}
			}
		},
		location: "local",
		localId: "pricing-header::local::src/components/pages/pricing/PricingHeader.content.ts",
		filePath: "src/components/pages/pricing/PricingHeader.content.ts"
	},
	"faq-header": {
		key: "faq-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Frequently Asked Questions",
					"description": "Everything you need to know about i18n Benchmark."
				},
				"fr": {
					"title": "Questions fréquemment posées",
					"description": "Tout ce que vous devez savoir sur i18n Benchmark."
				},
				"es": {
					"title": "Preguntas frecuentes",
					"description": "Todo lo que necesita saber sobre i18n Benchmark."
				},
				"de": {
					"title": "Häufig gestellte Fragen",
					"description": "Alles, was Sie über i18n Benchmark wissen müssen."
				},
				"it": {
					"title": "Domande frequenti",
					"description": "Tutto quello che c'è da sapere su i18n Benchmark."
				},
				"pt": {
					"title": "Perguntas Frequentes",
					"description": "Tudo o que você precisa saber sobre o i18n Benchmark."
				},
				"zh": {
					"title": "常见问题解答",
					"description": "关于 i18n 基准测试您需要了解的一切。"
				},
				"ja": {
					"title": "よくある質問",
					"description": "i18n ベンチマークについて知っておくべきことのすべて。"
				},
				"ko": {
					"title": "자주 묻는 질문",
					"description": "i18n 벤치마크에 대해 알아야 할 모든 것."
				},
				"ru": {
					"title": "Часто задаваемые вопросы",
					"description": "Все, что вам нужно знать о i18n Benchmark."
				}
			}
		},
		location: "local",
		localId: "faq-header::local::src/components/pages/faq/FAQHeader.content.ts",
		filePath: "src/components/pages/faq/FAQHeader.content.ts"
	},
	"blog-header": {
		key: "blog-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community.",
					"blog": "Blog"
				},
				"fr": {
					"insightsTutorialsAndAnalysisFrom": "Des analyses, tutoriels et points de vue de la communauté i18n.",
					"blog": "Blog"
				},
				"es": {
					"insightsTutorialsAndAnalysisFrom": "Ideas, tutoriales y análisis de la comunidad i18n.",
					"blog": "Blog"
				},
				"de": {
					"insightsTutorialsAndAnalysisFrom": "Einblicke, Tutorials und Analysen aus der i18n-Community.",
					"blog": "Blog"
				},
				"it": {
					"insightsTutorialsAndAnalysisFrom": "Approfondimenti, tutorial e analisi dalla comunità i18n.",
					"blog": "Blog"
				},
				"pt": {
					"insightsTutorialsAndAnalysisFrom": "Insights, tutoriais e análises da comunidade i18n.",
					"blog": "Blog"
				},
				"zh": {
					"insightsTutorialsAndAnalysisFrom": "来自 i18n 社区的见解、教程 and 分析。",
					"blog": "博客"
				},
				"ja": {
					"insightsTutorialsAndAnalysisFrom": "i18nコミュニティからのインサイト、チュートリアル、分析。",
					"blog": "ブログ"
				},
				"ko": {
					"insightsTutorialsAndAnalysisFrom": "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.",
					"blog": "블로그"
				},
				"ru": {
					"insightsTutorialsAndAnalysisFrom": "Идеи, руководства и аналитика от сообщества i18n.",
					"blog": "Блог"
				}
			}
		},
		location: "local",
		localId: "blog-header::local::src/components/pages/blog/blogHeader.content.ts",
		filePath: "src/components/pages/blog/blogHeader.content.ts"
	},
	"team-header": {
		key: "team-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "Our Team",
					"description": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
				},
				"fr": {
					"title": "Notre Équipe",
					"description": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
				},
				"es": {
					"title": "Nuestro equipo",
					"description": "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas para desarrolladores."
				},
				"de": {
					"title": "Unser Team",
					"description": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die gemeinsame Leidenschaft für großartige Entwickler-Tools."
				},
				"it": {
					"title": "Il nostro team",
					"description": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti per sviluppatori."
				},
				"pt": {
					"title": "Nossa Equipe",
					"description": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
				},
				"zh": {
					"title": "我们的团队",
					"description": "了解 i18n 基准测试背后的人员。一支多元化的团队，因对出色开发工具的共同热情 an 团结在一起。"
				},
				"ja": {
					"title": "私たちのチーム",
					"description": "i18n ベンチマークを支える人々を紹介します。優れた開発者ツールへの共通の情熱によって結ばれた、多様なチームです。"
				},
				"ko": {
					"title": "우리 팀",
					"description": "i18n 벤치마크를 만든 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
				},
				"ru": {
					"title": "Наша команда",
					"description": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к созданию отличных инструментов для разработчиков."
				}
			}
		},
		location: "local",
		localId: "team-header::local::src/components/pages/team/TeamHeader.content.ts",
		filePath: "src/components/pages/team/TeamHeader.content.ts"
	},
	"not-found": {
		key: "not-found",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "404",
					"description": "Oops! Page not found",
					"returnHome": "Return to Home"
				},
				"fr": {
					"title": "404",
					"description": "Oups ! Page introuvable",
					"returnHome": "Retour à l'accueil"
				},
				"es": {
					"title": "404",
					"description": "¡Ups! Página no encontrada",
					"returnHome": "Volver al inicio"
				},
				"de": {
					"title": "404",
					"description": "Hoppla! Seite nicht gefunden",
					"returnHome": "Zurück zur Startseite"
				},
				"it": {
					"title": "404",
					"description": "Oops! Pagina non trovata",
					"returnHome": "Torna alla home"
				},
				"pt": {
					"title": "404",
					"description": "Opa! Página não encontrada",
					"returnHome": "Voltar ao Início"
				},
				"zh": {
					"title": "404",
					"description": "糟糕！页面未找到",
					"returnHome": "返回首页"
				},
				"ja": {
					"title": "404",
					"description": "おっと！ページが見つかりません",
					"returnHome": "ホームに戻る"
				},
				"ko": {
					"title": "404",
					"description": "오 이런! 페이지를 찾을 수 없습니다",
					"returnHome": "홈으로 돌아가기"
				},
				"ru": {
					"title": "404",
					"description": "Ой! Страница не найдена",
					"returnHome": "Вернуться на главную"
				}
			}
		},
		location: "local",
		localId: "not-found::local::src/pages/NotFound.content.ts",
		filePath: "src/pages/NotFound.content.ts"
	},
	"mock-banner": {
		key: "mock-banner",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": { "message": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
				"fr": { "message": "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
				"es": { "message": "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." },
				"de": { "message": "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." },
				"it": { "message": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
				"pt": { "message": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." },
				"zh": { "message": "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" },
				"ja": { "message": "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" },
				"ko": { "message": "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
				"ru": { "message": "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
			}
		},
		location: "local",
		localId: "mock-banner::local::src/components/MockBanner.content.ts",
		filePath: "src/components/MockBanner.content.ts"
	},
	"faq-list": {
		key: "faq-list",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"faqs\":[{\"q\":\"What is i18n Benchmark?\",\"a\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"},{\"q\":\"How are benchmarks conducted?\",\"a\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"},{\"q\":\"Which libraries are currently supported?\",\"a\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"},{\"q\":\"Can I submit my own benchmarks?\",\"a\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},{\"q\":\"How often are benchmarks updated?\",\"a\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"},{\"q\":\"Is the data reliable?\",\"a\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"},{\"q\":\"Do you offer consulting services?\",\"a\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"},{\"q\":\"How can I contribute?\",\"a\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"}]},\"fr\":{\"faqs\":[{\"q\":\"Qu'est-ce qu'i18n Benchmark ?\",\"a\":\"Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\"},{\"q\":\"Comment sont menés les benchmarks ?\",\"a\":\"Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\"},{\"q\":\"Quelles bibliothèques sont prises en charge ?\",\"a\":\"react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\"},{\"q\":\"Puis-je proposer des benchmarks ?\",\"a\":\"Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\"},{\"q\":\"À quelle fréquence sont-ils mis à jour ?\",\"a\":\"Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\"},{\"q\":\"Les données sont-elles fiables ?\",\"a\":\"Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\"},{\"q\":\"Proposez-vous du conseil ?\",\"a\":\"Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\"},{\"q\":\"Comment contribuer ?\",\"a\":\"Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\"}]},\"es\":{\"faqs\":[{\"q\":\"¿Qué es i18n Benchmark?\",\"a\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del paquete y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\"},{\"q\":\"¿Cómo se realizan los benchmarks?\",\"a\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\"},{\"q\":\"¿Qué bibliotecas son compatibles actualmente?\",\"a\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\"},{\"q\":\"¿Puedo enviar mis propios benchmarks?\",\"a\":\"¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haga un fork de nuestro repositorio, añada su benchmark siguiendo nuestra guía de contribución y envíe un pull request. Nuestro equipo revisará y fusionará los envíos calificados.\"},{\"q\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"a\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmark inmediato.\"},{\"q\":\"¿Son confiables los datos?\",\"a\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\"},{\"q\":\"¿Ofrecen servicios de consultoría?\",\"a\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\"},{\"q\":\"¿Cómo puedo contribuir?\",\"a\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para más detalles.\"}]},\"de\":{\"faqs\":[{\"q\":\"Was ist i18n Benchmark?\",\"a\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\"},{\"q\":\"Wie werden Benchmarks durchgeführt?\",\"a\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit einheitlicher Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.\"},{\"q\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"a\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\"},{\"q\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"a\":\"Ja! Einreichungen von Community-Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Mitwirkende hinzu und reichen Sie einen Pull Request ein. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\"},{\"q\":\"Wie oft werden Benchmarks aktualisiert?\",\"a\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionsveröffentlichungen lösen sofort einen neuen Benchmarking-Zyklus aus.\"},{\"q\":\"Sind die Daten zuverlässig?\",\"a\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\"},{\"q\":\"Bieten Sie Beratungsdienstleistungen an?\",\"a\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.\"},{\"q\":\"Wie kann ich beitragen?\",\"a\":\"Es gibt viele Möglichkeiten, einen Beitrag zu leisten: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"}]},\"it\":{\"faqs\":[{\"q\":\"Cos'è i18n Benchmark?\",\"a\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.\"},{\"q\":\"Come vengono condotti i benchmark?\",\"a\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.\"},{\"q\":\"Quali librerie sono attualmente supportate?\",\"a\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso inviare i miei benchmark?\",\"a\":\"Sì! Le sottomissioni di benchmark da parte della comunità sono benvenute. Fai il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà le sottomissioni idonee.\"},{\"q\":\"Quanto spesso vengono aggiornati i benchmark?\",\"a\":\"Eseguiamo nuovamente tutti i benchmark ogni settimana con le ultime versioni stabili di ogni libreria. I rilasci di versioni principali attivano un ciclo di ri-benchmark immediato.\"},{\"q\":\"I dati sono affidabili?\",\"a\":\"Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di outlier e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\"},{\"q\":\"Offrite servizi di consulenza?\",\"a\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul tuo caso d'uso specifico, scala e vincoli.\"},{\"q\":\"Come posso contribuire?\",\"a\":\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"}]},\"pt\":{\"faqs\":[{\"q\":\"O que é o i18n Benchmark?\",\"a\":\"O i18n Benchmark é um conjunto de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.\"},{\"q\":\"Como os benchmarks são conduzidos?\",\"a\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\"},{\"q\":\"Quais bibliotecas são suportadas atualmente?\",\"a\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso enviar meus próprios benchmarks?\",\"a\":\"Sim! Envios de benchmarks da comunidade são bem-vindos. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará os envios qualificados.\"},{\"q\":\"Com que frequência os benchmarks são atualizados?\",\"a\":\"Executamos novamente todos os benchmarks semanalmente em relação às versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmarking.\"},{\"q\":\"Os dados são confiáveis?\",\"a\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\"},{\"q\":\"Vocês oferecem serviços de consultoria?\",\"a\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso específico, escala e restrições.\"},{\"q\":\"Como posso contribuir?\",\"a\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o proyecto. Visite nosso repositório no GitHub para mais detalhes.\"}]},\"zh\":{\"faqs\":[{\"q\":\"什么是 i18n 基准测试？\",\"a\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、捆绑包大小和开发人员体验。\"},{\"q\":\"如何进行基准测试？\",\"a\":\"我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显着性。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\"},{\"q\":\"目前支持哪些库？\",\"a\":\"我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\"},{\"q\":\"我可以提交自己的基准测试吗？\",\"a\":\"是的！欢迎社区提交基准测试。分叉我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交内容。\"},{\"q\":\"基准测试多久更新一次？\",\"a\":\"我们每周会针对每个库的最新稳定版本重新运行所有基准测试。主要版本的发布将立即触发重新基准测试周期。\"},{\"q\":\"数据可靠吗？\",\"a\":\"我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\"},{\"q\":\"你们提供咨询服务吗？\",\"a\":\"是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的特定用例、规模和限制提供量身定制的建议。\"},{\"q\":\"我该如何贡献？\",\"a\":\"有多种贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"}]},\"ja\":{\"faqs\":[{\"q\":\"i18n ベンチマークとは何ですか？\",\"a\":\"i18n ベンチマークは、JavaScript および React アプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"},{\"q\":\"ベンチマークはどのように行われますか？\",\"a\":\"一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\"},{\"q\":\"現在どのライブラリがサポートされていますか？\",\"a\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgeeをサポートしています。\"},{\"q\":\"自分のベンチマークを送信できますか？\",\"a\":\"はい！コミュニティからのベンチマーク送信を歓迎します。リポジトリをフォークし、投稿ガイドに従ってベンチマークを追加して、プルリクエストを送信してください。私たちのチームが審査し、要件を満たす送信をマージします。\"},{\"q\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"a\":\"各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルがトリガーされます。\"},{\"q\":\"データは信頼できますか？\",\"a\":\"ウォームアップ実行、異常値検出、信頼区間など、厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\"},{\"q\":\"コンサルティングサービスは提供していますか？\",\"a\":\"はい、エンタープライズプランには、i18nソリューションを検討しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\"},{\"q\":\"どのように貢献できますか？\",\"a\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しいメトリクスの提案、プロジェクトへのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\"}]},\"ko\":{\"faqs\":[{\"q\":\"i18n 벤치마크란 무엇인가요?\",\"a\":\"i18n 벤치마크는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\"},{\"q\":\"벤치마크는 어떻게 진행되나요?\",\"a\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 보장하기 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\"},{\"q\":\"현재 어떤 라이브러리가 지원되나요?\",\"a\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\"},{\"q\":\"직접 벤치마크를 제출할 수 있나요?\",\"a\":\"네! 커뮤니티 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 적격한 제출물을 병합할 것입니다.\"},{\"q\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"a\":\"각 라이브러리의 최신 안정 버전에 대해 매주 모든 벤치마크를 다시 실행합니다. 메이저 버전이 출시되면 즉시 벤치마크 사이클이 다시 시작됩니다.\"},{\"q\":\"데이터가 신뢰할 수 있나요?\",\"a\":\"웜업 실행, 이상값 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 투명성을 위해 분석과 함께 게시됩니다.\"},{\"q\":\"컨설팅 서비스를 제공하나요?\",\"a\":\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\"},{\"q\":\"어떻게 기여할 수 있나요?\",\"a\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\"}]},\"ru\":{\"faqs\":[{\"q\":\"Что такое i18n Benchmark?\",\"a\":\"i18n Benchmark — это пакет бенчмарков с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений JavaScript и React.\"},{\"q\":\"Как проводятся бенчмарки?\",\"a\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты и доступны в нашем репозитории GitHub.\"},{\"q\":\"Какие библиотеки поддерживаются в данный момент?\",\"a\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"},{\"q\":\"Могу ли я отправить свои собственные бенчмарки?\",\"a\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству для участников, и отправьте pull request. Наша команда рассмотрит и примет подходящие заявки.\"},{\"q\":\"Как часто обновляются бенчмарки?\",\"a\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход основных версий вызывает немедленный цикл повторного тестирования.\"},{\"q\":\"Надежны ли данные?\",\"a\":\"Мы следуем строгой статистической методологии, включая прогревочные прогоны, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\"},{\"q\":\"Предоставляете ли вы консультационные услуги?\",\"a\":\"Да, наш план Enterprise включает часы консультаций для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном сценарии использования, масштабе и ограничениях.\"},{\"q\":\"Как я могу помочь?\",\"a\":\"Есть много способов внести свой вклад: отправка бенчмарков, улучшение документации, сообщения об ошибках, предложения новых показателей или спонсорство проекта. Посетите наш репозиторий GitHub для получения более подробной информации.\"}]}}}"),
		location: "local",
		localId: "faq-list::local::src/components/pages/faq/FAQList.content.ts",
		filePath: "src/components/pages/faq/FAQList.content.ts"
	},
	"careers-header": {
		key: "careers-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
					"careers": "Careers"
				},
				"fr": {
					"joinOurMissionToImprove": "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe en télétravail qui valorise l'impact, la transparence et l'apprentissage continu.",
					"careers": "Carrières"
				},
				"es": {
					"joinOurMissionToImprove": "Únase a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo remoto que valora el impacto, la transparencia y el aprendizaje continuo.",
					"careers": "Carreras"
				},
				"de": {
					"joinOurMissionToImprove": "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.",
					"careers": "Karriere"
				},
				"it": {
					"joinOurMissionToImprove": "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che valorizza l'impatto, la trasparenza e l'apprendimento continuo.",
					"careers": "Carriere"
				},
				"pt": {
					"joinOurMissionToImprove": "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.",
					"careers": "Carreiras"
				},
				"zh": {
					"joinOurMissionToImprove": "加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。",
					"careers": "职业生涯"
				},
				"ja": {
					"joinOurMissionToImprove": "国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、インパクト、透明性、継続的な学習を重視するリモートファーストのチームです。",
					"careers": "採用情報"
				},
				"ko": {
					"joinOurMissionToImprove": "국제화 에코시스템을 개선하려는 우리의 미션에 동참하세요. 우리는 영향력, 투명성 및 지속적인 학습을 가치 있게 여기는 원격 우선 팀입니다.",
					"careers": "채용"
				},
				"ru": {
					"joinOurMissionToImprove": "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — команда, работающая удаленно, которая ценит результат, прозрачность и непрерывное обучение.",
					"careers": "Вакансии"
				}
			}
		},
		location: "local",
		localId: "careers-header::local::src/components/pages/careers/careersHeader.content.ts",
		filePath: "src/components/pages/careers/careersHeader.content.ts"
	},
	"products-header": {
		key: "products-header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow.",
					"products": "Products"
				},
				"fr": {
					"toolsAndServicesToStreamline": "Des outils et services pour rationaliser votre flux de travail d'internationalisation.",
					"products": "Produits"
				},
				"es": {
					"toolsAndServicesToStreamline": "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.",
					"products": "Productos"
				},
				"de": {
					"toolsAndServicesToStreamline": "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.",
					"products": "Produkte"
				},
				"it": {
					"toolsAndServicesToStreamline": "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.",
					"products": "Prodotti"
				},
				"pt": {
					"toolsAndServicesToStreamline": "Ferramentas e serviços para simplificar seu fluxo de trabalho de internacionalização.",
					"products": "Produtos"
				},
				"zh": {
					"toolsAndServicesToStreamline": "简化国际化工作流程的工具和服务。",
					"products": "产品"
				},
				"ja": {
					"toolsAndServicesToStreamline": "国際化ワークフローを合理化するためのツールとサービス。",
					"products": "製品"
				},
				"ko": {
					"toolsAndServicesToStreamline": "국제화 워크플로우를 간소화하는 도구 및 서비스.",
					"products": "제품"
				},
				"ru": {
					"toolsAndServicesToStreamline": "Инструменты и услуги для оптимизации рабочего процесса интернационализации.",
					"products": "Продукты"
				}
			}
		},
		location: "local",
		localId: "products-header::local::src/components/pages/products/productsHeader.content.ts",
		filePath: "src/components/pages/products/productsHeader.content.ts"
	},
	"what-we-measure": {
		key: "what-we-measure",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"What We Measure\",\"metrics\":[{\"metric\":\"Bundle size impact\",\"desc\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"},{\"metric\":\"Rendering overhead\",\"desc\":\"How much extra time the library adds to the render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"},{\"metric\":\"Hydration cost\",\"desc\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"},{\"metric\":\"Lazy loading effectiveness\",\"desc\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"},{\"metric\":\"Locale switch speed\",\"desc\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"}]},\"fr\":{\"title\":\"Ce que nous mesurons\",\"metrics\":[{\"metric\":\"Impact sur la taille du bundle\",\"desc\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\"},{\"metric\":\"Surcharge de rendu\",\"desc\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arborescence des composants.\"},{\"metric\":\"Coût d'hydratation\",\"desc\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\"},{\"metric\":\"Efficacité du chargement différé\",\"desc\":\"Si le fractionnement des traductions par itinéraire ou par espace de noms réduit réellement la charge initiale, et quels compromis il introduit (requêtes en cascade, FOUC, complexité du cache).\"},{\"metric\":\"Vitesse de changement de langue\",\"desc\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le re-rendu des composants et la mise à jour du DOM.\"}]},\"es\":{\"title\":\"Lo que medimos\",\"metrics\":[{\"metric\":\"Impacto en el tamaño del bundle\",\"desc\":\"Los bytes adicionales de JavaScript que se envían a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\"},{\"metric\":\"Sobrecarga de renderizado\",\"desc\":\"Cuánto tiempo adicional agrega la biblioteca al ciclo de renderizado. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\"},{\"metric\":\"Coste de hidratación\",\"desc\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\"},{\"metric\":\"Efectividad de la carga perezosa\",\"desc\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad del caché).\"},{\"metric\":\"Velocidad de cambio de idioma\",\"desc\":\"Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el re-renderizado de componentes y la actualización del DOM.\"}]},\"de\":{\"title\":\"Was wir messen\",\"metrics\":[{\"metric\":\"Auswirkungen auf die Bundle-Größe\",\"desc\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\"},{\"metric\":\"Rendering-Overhead\",\"desc\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\"},{\"metric\":\"Hydratationskosten\",\"desc\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratation – den Moment, in dem die Seite interaktiv wird.\"},{\"metric\":\"Effektivität von Lazy Loading\",\"desc\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namensraum die Erstbelastung tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\"},{\"metric\":\"Sprachumschaltgeschwindigkeit\",\"desc\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\"}]},\"it\":{\"title\":\"Cosa misuriamo\",\"metrics\":[{\"metric\":\"Impatto sulle dimensioni del bundle\",\"desc\":\"I byte JavaScript aggiuntivi inviati agli utenti quando sono incluse la libreria i18n e i relativi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\"},{\"metric\":\"Sovraccarico di rendering\",\"desc\":\"Quanto tempo extra aggiunge la libreria al ciclo di rendering. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare re-rendering non necessari in tutto l'albero dei componenti.\"},{\"metric\":\"Costo dell'idratazione\",\"desc\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, ovvero il momento in care la pagina diventa interattiva.\"},{\"metric\":\"Efficacia del caricamento pigro\",\"desc\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\"},{\"metric\":\"Velocità di cambio della lingua\",\"desc\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.\"}]},\"pt\":{\"title\":\"O Que Medimos\",\"metrics\":[{\"metric\":\"Impacto no tamanho do bundle\",\"desc\":\"Os bytes adicionais de JavaScript enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\"},{\"metric\":\"Sobrecarga de renderização\",\"desc\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\"},{\"metric\":\"Custo de hidratação\",\"desc\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga útil do HTML e retardam a hidratação — o momento em que a página se torna interativa.\"},{\"metric\":\"Eficácia do carregamento lento\",\"desc\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações isso introduz (solicitações em cascata, FOUC, complexidade de cache).\"},{\"metric\":\"Velocidade de troca de idioma\",\"desc\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\"}]},\"zh\":{\"title\":\"我们的测量指标\",\"metrics\":[{\"metric\":\"对捆绑包大小的影响\",\"desc\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这会直接影响慢速网络上的下载时间。\"},{\"metric\":\"渲染开销\",\"desc\":\"库为渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\"},{\"metric\":\"注水（Hydration）成本\",\"desc\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\"},{\"metric\":\"延迟加载的有效性\",\"desc\":\"按路由或命名空间拆分翻译是否真的减少了初始加载量，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\"},{\"metric\":\"语言切换速度\",\"desc\":\"应用程序在运行时从一种语言切换到另一种语言的速度有多快——包括获取新翻译、重新渲染组件和更新 DOM。\"}]},\"ja\":{\"title\":\"測定内容\",\"metrics\":[{\"metric\":\"バンドルサイズへの影響\",\"desc\":\"i18nライブラリとその翻訳ファイルが含まれている場合にユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。\"},{\"metric\":\"レンダリングのオーバーヘッド\",\"desc\":\"ライブラリがレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\"},{\"metric\":\"ハイドレーションのコスト\",\"desc\":\"SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\"},{\"metric\":\"遅延読み込みの有効性\",\"desc\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）を導入するか。\"},{\"metric\":\"言語切り替え速度\",\"desc\":\"ランタイムにアプリが言語を切り替える速度。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"}]},\"ko\":{\"title\":\"측정 항목\",\"metrics\":[{\"metric\":\"번들 크기 영향\",\"desc\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\"},{\"metric\":\"렌더링 오버헤드\",\"desc\":\"라이브러리가 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\"},{\"metric\":\"하이드레이션 비용\",\"desc\":\"SSR 기간 동안 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 하이드레이션 속도를 늦춥니다.\"},{\"metric\":\"지연 로딩의 효과성\",\"desc\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지 여부와 도입되는 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)는 무엇인지 확인합니다.\"},{\"metric\":\"언어 전환 속도\",\"desc\":\"런타임에 앱이 한 언어에서 다른 언어로 전환되는 속도(새 번역 가져오기, 구성 요소 재렌더링, DOM 업데이트 포함)입니다.\"}]},\"ru\":{\"title\":\"Что мы измеряем\",\"metrics\":[{\"metric\":\"Влияние на размер бандла\",\"desc\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\"},{\"metric\":\"Издержки на рендеринг\",\"desc\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга. Библиотеки, внедряющие переводы через один контекстный провайдер, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\"},{\"metric\":\"Стоимость гидратации\",\"desc\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML-кода и замедляют гидратацию — момент, когда страница становится интерактивной.\"},{\"metric\":\"Эффективность ленивой загрузки\",\"desc\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы это влечет за собой (каскадные запросы, FOUC, сложность кэширования).\"},{\"metric\":\"Скорость переключения языка\",\"desc\":\"Насколько быстро приложение может переключаться с одного языка на другой во время выполнения, включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"}]}}}"),
		location: "local",
		localId: "what-we-measure::local::src/components/pages/about/WhatWeMeasure.content.ts",
		filePath: "src/components/pages/about/WhatWeMeasure.content.ts"
	},
	"blog-list": {
		key: "blog-list",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"readMore\":\"Read More →\",\"posts\":[{\"title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"date\":\"March 15, 2026\",\"excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"category\":\"Benchmark\"},{\"title\":\"How to Reduce Your i18n Bundle by 60%\",\"date\":\"March 8, 2026\",\"excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"category\":\"Tutorial\"},{\"title\":\"The State of Internationalization in React\",\"date\":\"February 28, 2026\",\"excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"category\":\"Analysis\"},{\"title\":\"Migrating from react-i18next to Lingui\",\"date\":\"February 15, 2026\",\"excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components and i18n: What Changes?\",\"date\":\"February 1, 2026\",\"excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"category\":\"Analysis\"},{\"title\":\"Benchmark Methodology: How We Test\",\"date\":\"January 20, 2026\",\"excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"category\":\"Meta\"}]},\"fr\":{\"readMore\":\"Lire la suite →\",\"posts\":[{\"title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"date\":\"15 mars 2026\",\"excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"category\":\"Benchmark\"},{\"title\":\"Réduire votre bundle i18n de 60 %\",\"date\":\"8 mars 2026\",\"excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"category\":\"Tutoriel\"},{\"title\":\"État de l'internationalisation dans l'écosystème React\",\"date\":\"28 février 2026\",\"excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"category\":\"Analyse\"},{\"title\":\"Migrer de react-i18next vers Lingui\",\"date\":\"15 février 2026\",\"excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"category\":\"Tutoriel\"},{\"title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"date\":\"1er février 2026\",\"excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"category\":\"Analyse\"},{\"title\":\"Méthodologie de benchmark : comment nous testons\",\"date\":\"20 janvier 2026\",\"excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"category\":\"Méta\"}]},\"es\":{\"readMore\":\"Leer más →\",\"posts\":[{\"title\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"date\":\"15 de marzo de 2026\",\"excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Cómo reducir su paquete i18n en un 60%\",\"date\":\"8 de marzo de 2026\",\"excerpt\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga perezosa, división de código y optimizaciones en tiempo de compilación.\",\"category\":\"Tutorial\"},{\"title\":\"El estado de la internacionalización en React\",\"date\":\"28 de febrero de 2026\",\"excerpt\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"category\":\"Análisis\"},{\"title\":\"Migración de react-i18next a Lingui\",\"date\":\"15 de febrero de 2026\",\"excerpt\":\"Una guía paso a paso sobre cómo migrar una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: ¿Qué cambia?\",\"date\":\"1 de febrero de 2026\",\"excerpt\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"category\":\"Análisis\"},{\"title\":\"Metodología de benchmark: cómo probamos\",\"date\":\"20 de enero de 2026\",\"excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"category\":\"Meta\"}]},\"de\":{\"readMore\":\"Weiterlesen →\",\"posts\":[{\"title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"date\":\"15. März 2026\",\"excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"category\":\"Benchmark\"},{\"title\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"date\":\"8. März 2026\",\"excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"category\":\"Tutorial\"},{\"title\":\"Der Stand der Internationalisierung in React\",\"date\":\"28. Februar 2026\",\"excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"category\":\"Analyse\"},{\"title\":\"Migration von react-i18next zu Lingui\",\"date\":\"15. Februar 2026\",\"excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components und i18n: Was ändert sich?\",\"date\":\"1. Februar 2026\",\"excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"category\":\"Analyse\"},{\"title\":\"Benchmark-Methodik: Wie wir testen\",\"date\":\"20. Januar 2026\",\"excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"category\":\"Meta\"}]},\"it\":{\"readMore\":\"Leggi di più →\",\"posts\":[{\"title\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"date\":\"15 marzo 2026\",\"excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"category\":\"Benchmark\"},{\"title\":\"Come ridurre il bundle i18n del 60%\",\"date\":\"8 marzo 2026\",\"excerpt\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, tra cui lazy loading, code splitting e ottimizzazioni al tempo di compilazione.\",\"category\":\"Tutorial\"},{\"title\":\"Lo stato dell'internazionalizzazione in React\",\"date\":\"28 febbraio 2026\",\"excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"category\":\"Analisi\"},{\"title\":\"Migrazione da react-i18next a Lingui\",\"date\":\"15 febbraio 2026\",\"excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: cosa cambia?\",\"date\":\"1 febbraio 2026\",\"excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"category\":\"Analisi\"},{\"title\":\"Metodologia di benchmark: come testiamo\",\"date\":\"20 gennaio 2026\",\"excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"category\":\"Meta\"}]},\"pt\":{\"readMore\":\"Leia Mais →\",\"posts\":[{\"title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"date\":\"15 de março de 2026\",\"excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Como reduzir seu bundle i18n em 60%\",\"date\":\"8 de março de 2026\",\"excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"category\":\"Tutorial\"},{\"title\":\"O estado da internacionalização no React\",\"date\":\"28 de fevereiro de 2026\",\"excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"category\":\"Análise\"},{\"title\":\"Migrando do react-i18next para o Lingui\",\"date\":\"15 de fevereiro de 2026\",\"excerpt\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: O que muda?\",\"date\":\"1 de fevereiro de 2026\",\"excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"category\":\"Análise\"},{\"title\":\"Metodologia de Benchmark: Como testamos\",\"date\":\"20 de janeiro de 2026\",\"excerpt\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"category\":\"Meta\"}]},\"zh\":{\"readMore\":\"阅读更多 →\",\"posts\":[{\"title\":\"2026 年 i18n 库比较：深度研究\",\"date\":\"2026年3月15日\",\"excerpt\":\"我们测试了 12 种不同的国际化库，涉及性能、捆绑包大小和 DX。以下是令人惊讶的结果。\",\"category\":\"基准测试\"},{\"title\":\"如何将 i18n 捆绑包减少 60%\",\"date\":\"2026年3月8日\",\"excerpt\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"category\":\"教程\"},{\"title\":\"React 中的国际化现状\",\"date\":\"2026年2月28日\",\"excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"category\":\"分析\"},{\"title\":\"从 react-i18next 迁移到 Lingui\",\"date\":\"2026年2月15日\",\"excerpt\":\"关于将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"category\":\"教程\"},{\"title\":\"Server Components 和 i18n：有哪些变化？\",\"date\":\"2026年2月1日\",\"excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"category\":\"分析\"},{\"title\":\"基准测试方法：我们如何测试\",\"date\":\"2026年1月20日\",\"excerpt\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"category\":\"元\"}]},\"ja\":{\"readMore\":\"続きを読む →\",\"posts\":[{\"title\":\"2026年のi18nライブラリ比較：詳細な分析\",\"date\":\"2026年3月15日\",\"excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果はこちらです。\",\"category\":\"ベンチマーク\"},{\"title\":\"i18nバンドルを60%削減する方法\",\"date\":\"2026年3月8日\",\"excerpt\":\"遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"category\":\"チュートリアル\"},{\"title\":\"Reactにおける国際化の現状\",\"date\":\"2026年2月28日\",\"excerpt\":\"Reactにおける現在のi18nエコシステムの概要。トレンド、新しいパターン、コミュニティの好みを網羅しています。\",\"category\":\"分析\"},{\"title\":\"react-i18nextからLinguiへの移行\",\"date\":\"2026年2月15日\",\"excerpt\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"category\":\"チュートリアル\"},{\"title\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"date\":\"2026年2月1日\",\"excerpt\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"category\":\"分析\"},{\"title\":\"ベンチマーク方法：テスト方法\",\"date\":\"2026年1月20日\",\"excerpt\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"category\":\"メタ\"}]},\"ko\":{\"readMore\":\"자세히 보기 →\",\"posts\":[{\"title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"date\":\"2026년 3월 15일\",\"excerpt\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.\",\"category\":\"벤치마크\"},{\"title\":\"i18n 번들을 60% 줄이는 방법\",\"date\":\"2026년 3월 8일\",\"excerpt\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"React의 국제화 현황\",\"date\":\"2026년 2월 28일\",\"excerpt\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템에 대한 개요입니다.\",\"category\":\"분석\"},{\"title\":\"react-i18next에서 Lingui로 마이그레이션\",\"date\":\"2026년 2월 15일\",\"excerpt\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"서버 컴포넌트와 i18n: 무엇이 달라지나요?\",\"date\":\"2026년 2월 1일\",\"excerpt\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"category\":\"분석\"},{\"title\":\"벤치마크 방법론: 테스트 방법\",\"date\":\"2026년 1월 20일\",\"excerpt\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.\",\"category\":\"메타\"}]},\"ru\":{\"readMore\":\"Читать далее →\",\"posts\":[{\"title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"date\":\"15 марта 2026 г.\",\"excerpt\":\"Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.\",\"category\":\"Бенчмарк\"},{\"title\":\"Как уменьшить бандл i18n на 60%\",\"date\":\"8 марта 2026 г.\",\"excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"category\":\"Руководство\"},{\"title\":\"Состояние интернационализации в React\",\"date\":\"28 февраля 2026 г.\",\"excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"category\":\"Анализ\"},{\"title\":\"Миграция с react-i18next на Lingui\",\"date\":\"15 февраля 2026 г.\",\"excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"category\":\"Руководство\"},{\"title\":\"Server Components и i18n: что меняется?\",\"date\":\"1 февраля 2026 г.\",\"excerpt\":\"React Server Components внедряют новые паттерны для интернационализации. Мы изучаем последствия и лучшие практики.\",\"category\":\"Анализ\"},{\"title\":\"Методология бенчмарка: как мы тестируем\",\"date\":\"20 января 2026 г.\",\"excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"category\":\"Мета\"}]}}}"),
		location: "local",
		localId: "blog-list::local::src/components/pages/blog/BlogList.content.ts",
		filePath: "src/components/pages/blog/BlogList.content.ts"
	},
	"understanding-impact": {
		key: "understanding-impact",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Understanding the Impact\",\"largeJson\":{\"title\":\"Why a single large JSON can hurt performance\",\"description\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"points\":[\"The JSON must be parsed on every page load — blocking the main thread.\",\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"]},\"dynamicLoading\":{\"title\":\"The trade-offs of dynamic loading\",\"description\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"points\":[{\"label\":\"Waterfall requests:\",\"text\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\"},{\"label\":\"Flash of untranslated content (FOUC):\",\"text\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\"},{\"label\":\"Cache invalidation:\",\"text\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"}]},\"benchmarkMeasures\":{\"title\":\"What this benchmark measures\",\"description\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"}},\"fr\":{\"title\":\"Comprendre l'impact\",\"largeJson\":{\"title\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"description\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"points\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"]},\"dynamicLoading\":{\"title\":\"Les compromis du chargement dynamique\",\"description\":\"La répartition des traductions en morceaux par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"points\":[{\"label\":\"Requêtes en cascade :\",\"text\":\"l'application doit d'abord charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.\"},{\"label\":\"Flash de contenu non traduit (FOUC) :\",\"text\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du morceau.\"},{\"label\":\"Invalidation du cache :\",\"text\":\"la mise à jour des traductions nécessite des stratégies de cassage de cache pour garantir que les utilisateurs reçoivent du contenu frais sans re-télécharger les morceaux inchangés.\"}]},\"benchmarkMeasures\":{\"title\":\"Ce que ce benchmark mesure\",\"description\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"}},\"es\":{\"title\":\"Entendiendo el impacto\",\"largeJson\":{\"title\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"description\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"points\":[\"El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.\",\"Las arquitecturas basadas en el contexto pueden causar re-renderizaciones en cascada cuando cambia el idioma, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.\",\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload de HTML, aumentando el tamaño del documento que debe ser descargado e hidratado.\"]},\"dynamicLoading\":{\"title\":\"Los inconvenientes de la carga dinámica\",\"description\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"points\":[{\"label\":\"Solicitudes en cascada:\",\"text\":\"la aplicación primero debe cargar, determinar el idioma y luego buscar el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\"},{\"label\":\"Destello de contenido no traducido (FOUC):\",\"text\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\"},{\"label\":\"Invalidación de la caché:\",\"text\":\"actualizar las traducciones requiere estrategias de eliminación de caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\"}]},\"benchmarkMeasures\":{\"title\":\"Qué mide este benchmark\",\"description\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido, y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"}},\"de\":{\"title\":\"Die Auswirkungen verstehen\",\"largeJson\":{\"title\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\",\"description\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"points\":[\"Das JSON muss bei jedem Laden der Seite analysiert werden – was den Haupt-Thread blockiert.\",\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, selbst wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydriert werden muss.\"]},\"dynamicLoading\":{\"title\":\"Die Kompromisse des dynamischen Ladens\",\"description\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Payload drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"points\":[{\"label\":\"Waterfall-Anfragen:\",\"text\":\"Die App muss zuerst geladen werden, das Gebietsschema bestimmen und dann den richtigen Chunk abrufen – was Netzwerk-Roundtrips hinzufügt.\"},{\"label\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"text\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\"},{\"label\":\"Cache-Invalidierung:\",\"text\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"}]},\"benchmarkMeasures\":{\"title\":\"Was dieser Benchmark misst\",\"description\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken über drei Achsen hinweg zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"}},\"it\":{\"title\":\"Capire l'impatto\",\"largeJson\":{\"title\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"description\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"points\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\",\"Le architetture basate sul contesto possono causare re-render a cascata quando la localizzazione cambia, perché ogni consumer viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\"]},\"dynamicLoading\":{\"title\":\"I compromessi del caricamento dinamico\",\"description\":\"Dividere le traduzioni in blocchi per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"points\":[{\"label\":\"Richieste a cascata:\",\"text\":\"l'app deve prima caricarsi, determinare la localizzazione, quindi recuperare il blocco giusto — aggiungendo round-trip di rete.\"},{\"label\":\"Flash di contenuti non tradotti (FOUC):\",\"text\":\"gli utenti potrebbero vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il blocco.\"},{\"label\":\"Invalidazione della cache:\",\"text\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente blocchi invariati.\"}]},\"benchmarkMeasures\":{\"title\":\"Cosa misura questo benchmark\",\"description\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per l'analisi e il rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\"}},\"pt\":{\"title\":\"Compreendendo o Impacto\",\"largeJson\":{\"title\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"description\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"points\":[\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"Arquiteturas baseadas em contexto podem causar re-renderizações em cascata quando o local muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\"]},\"dynamicLoading\":{\"title\":\"As compensações do carregamento dinâmico\",\"description\":\"Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\",\"points\":[{\"label\":\"Solicitações em cascata:\",\"text\":\"o aplicativo deve primeiro carregar, determinar o local e, em seguida, buscar o pedaço certo — adicionando round-trips de rede.\"},{\"label\":\"Flash de conteúdo não traduzido (FOUC):\",\"text\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que o pedaço chegue.\"},{\"label\":\"Invalidação de cache:\",\"text\":\"a atualização das traduções requer estratégias de cache-busting para garantir que os usuários obtenham conteúdo novo sem baixar novamente pedaços inalterados.\"}]},\"benchmarkMeasures\":{\"title\":\"O que este benchmark mede\",\"description\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando o conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento preguiçoso. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"}},\"zh\":{\"title\":\"理解影响\",\"largeJson\":{\"title\":\"为什么单个大型 JSON 会损害性能\",\"description\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"points\":[\"JSON 必须在每次页面加载时进行解析——阻塞主线程。\",\"基于上下文的架构可能会在区域设置更改时引起级联重新渲染，因为每个使用者都会收到通知，即使他们的特定键没有更改。\",\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和水合的文件大小。\"]},\"dynamicLoading\":{\"title\":\"动态加载的权衡\",\"description\":\"将翻译拆分为每个路由或每个命名空间的块可以显着减少初始负载。但它引入了新的挑战：\",\"points\":[{\"label\":\"瀑布流请求：\",\"text\":\"应用程序必须首先加载，确定区域设置，然后获取正确的块——增加了网络往返。\"},{\"label\":\"未翻译内容的闪烁 (FOUC)：\",\"text\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\"},{\"label\":\"缓存失效：\",\"text\":\"更新翻译需要缓存清除策略，以确保用户获得新内容，而无需重新下载未更改的块。\"}]},\"benchmarkMeasures\":{\"title\":\"此基准测试衡量的指标\",\"description\":\"这个测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——从三个维度比较 i18n 库：它们为您的 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用程序中，因此结果具有直接可比性。\"}},\"ja\":{\"title\":\"影響を理解する\",\"largeJson\":{\"title\":\"単一の大きなJSONがパフォーマンスを低下させる理由\",\"description\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキー）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下を意味します。\",\"points\":[\"ページがロードされるたびにJSONを解析する必要があり、メインスレッドをブロックします。\",\"コンテキストベースのアーキテクチャでは、ロケールが変更されると連鎖的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\"]},\"dynamicLoading\":{\"title\":\"ダイナミックローディングのトレードオフ\",\"description\":\"翻訳をルートごとまたはネームスペースごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます。\",\"points\":[{\"label\":\"ウォーターフォールリクエスト：\",\"text\":\"アプリが最初にロードされ、ロケールを決定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが増加します。\"},{\"label\":\"翻訳されていないコンテンツのフラッシュ (FOUC)：\",\"text\":\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一時的に表示されることがあります。\"},{\"label\":\"キャッシュの無効化：\",\"text\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが最新のコンテンツを確実に取得できるようにするための、キャッシュバスティング戦略が必要です。\"}]},\"benchmarkMeasures\":{\"title\":\"このベンチマークが測定するもの\",\"description\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します。JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"}},\"ko\":{\"title\":\"영향 이해하기\",\"largeJson\":{\"title\":\"단일 대형 JSON이 성능을 저해할 수 있는 이유\",\"description\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이것은 다음을 의미합니다.\",\"points\":[\"페이지를 로드할 때마다 JSON을 구문 분석해야 하므로 메인 스레드가 차단됩니다.\",\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 커집니다.\"]},\"dynamicLoading\":{\"title\":\"동적 로딩의 트레이드오프\",\"description\":\"번역을 경로별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다.\",\"points\":[{\"label\":\"워터폴 요청:\",\"text\":\"앱이 먼저 로드되어 로캘을 확인한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\"},{\"label\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"text\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\"},{\"label\":\"캐시 무효화:\",\"text\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고 새로운 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"}]},\"benchmarkMeasures\":{\"title\":\"이 벤치마크가 측정하는 항목\",\"description\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10페이지의 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접 비교 가능합니다.\"}},\"ru\":{\"title\":\"Понимание воздействия\",\"largeJson\":{\"title\":\"Почему один большой JSON может снизить производительность\",\"description\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект велик (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"points\":[\"JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\",\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\",\"При серверном рендеринге весь словарь сериализуется в полезную нагрузку HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\"]},\"dynamicLoading\":{\"title\":\"Компромиссы динамической загрузки\",\"description\":\"Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно сократить начальную нагрузку. Но это создает новые проблемы:\",\"points\":[{\"label\":\"Каскадные запросы:\",\"text\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный фрагмент, что добавляет сетевые задержки.\"},{\"label\":\"Мерцание непереведенного контента (FOUC):\",\"text\":\"пользователи могут кратковременно видеть ключи перевода или резервный язык до того, как фрагмент будет загружен.\"},{\"label\":\"Инвалидация кэша:\",\"text\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.\"}]},\"benchmarkMeasures\":{\"title\":\"Что измеряет этот бенчмарк\",\"description\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем направлениям: вес, который они добавляют в ваш бандл JavaScript, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сравнимы.\"}}}}"),
		location: "local",
		localId: "understanding-impact::local::src/components/pages/home/UnderstandingImpact.content.ts",
		filePath: "src/components/pages/home/UnderstandingImpact.content.ts"
	},
	"team-grid": {
		key: "team-grid",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Founder & Lead Engineer\",\"bio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance Engineer\",\"bio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack Developer\",\"bio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Data Analyst\",\"bio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"}]},\"fr\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice & lead ingénieur\",\"bio\":\"Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingénieur performance\",\"bio\":\"Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer advocate\",\"bio\":\"Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Développeur full-stack\",\"bio\":\"Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analyste de données\",\"bio\":\"Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community manager\",\"bio\":\"Contributions communautaires, partenariats et événements — gouvernance open source.\"}]},\"es\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Ingeniera Principal\",\"bio\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a gran escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingeniero de Rendimiento\",\"bio\":\"Se especializa en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apasionada por la experiencia y educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desarrollador Full-Stack\",\"bio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto en Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Datos\",\"bio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"}]},\"de\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Gründerin & Lead Engineer\",\"bio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance-Ingenieur\",\"bio\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Leidenschaftlich für Entwicklererfahrung und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack-Entwickler\",\"bio\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Datenanalyst\",\"bio\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"}]},\"it\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice e Ingegnere Capo\",\"bio\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingegnere delle prestazioni\",\"bio\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Appassionata di esperienza e formazione per gli sviluppatori. Relatrice a React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Sviluppatore Full-Stack\",\"bio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista di dati\",\"bio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in Statistica applicata presso il MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"}]},\"pt\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Engenheira Líder\",\"bio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Engenheiro de Performance\",\"bio\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desenvolvedor Full-Stack\",\"bio\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor de código aberto do Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Dados\",\"bio\":\"Garante o rigor estatístico em todos os resultados do benchmark. Doutorado em Estatística Aplicada pelo MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Gerente de Comunidade\",\"bio\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"}]},\"zh\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"创始人兼首席工程师\",\"bio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"},{\"name\":\"Marcus Weber\",\"role\":\"性能工程师\",\"bio\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\"},{\"name\":\"Aisha Patel\",\"role\":\"开发者关系专员\",\"bio\":\"热衷于开发者体验和教育。曾在 React Conf、JSConf 和 i18nNext 上发表演讲。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"全栈开发人员\",\"bio\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"数据分析师\",\"bio\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\"},{\"name\":\"Elena Kowalski\",\"role\":\"社区经理\",\"bio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"}]},\"ja\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"創設者 兼 リードエンジニア\",\"bio\":\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\"},{\"name\":\"Marcus Weber\",\"role\":\"パフォーマンスエンジニア\",\"bio\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\"},{\"name\":\"Aisha Patel\",\"role\":\"デベロッパーアドボケイト\",\"bio\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextでの講演者。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"フルスタックデベロッパー\",\"bio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを保守しています。Linguiのオープンソースコントリビューター。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"データアナリスト\",\"bio\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MITで応用統計学の博士号を取得。\"},{\"name\":\"Elena Kowalski\",\"role\":\"コミュニティマネージャー\",\"bio\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\"}]},\"ko\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"설립자 및 수석 엔지니어\",\"bio\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\"},{\"name\":\"Marcus Weber\",\"role\":\"성능 엔지니어\",\"bio\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\"},{\"name\":\"Aisha Patel\",\"role\":\"데벨로퍼 애드보킷\",\"bio\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"풀스택 개발자\",\"bio\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"데이터 분석가\",\"bio\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"},{\"name\":\"Elena Kowalski\",\"role\":\"커뮤니티 매니저\",\"bio\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경을 가지고 있습니다.\"}]},\"ru\":{\"members\":[{\"name\":\"Sarah Chen\",\"role\":\"Основатель и ведущий инженер\",\"bio\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\"},{\"name\":\"Marcus Weber\",\"role\":\"Инженер по производительности\",\"bio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Адвокат разработчиков\",\"bio\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-stack разработчик\",\"bio\":\"Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Участник открытого проекта Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Аналитик данных\",\"bio\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики Массачусетского технологического института (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Комьюнити-менеджер\",\"bio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}]}}}"),
		location: "local",
		localId: "team-grid::local::src/components/pages/team/TeamGrid.content.ts",
		filePath: "src/components/pages/team/TeamGrid.content.ts"
	},
	"api-access-section": {
		key: "api-access-section",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "API Access",
					"apiKeyLabel": "API Key",
					"copy": "Copy",
					"description": "Use this key to access the benchmarking API programmatically."
				},
				"fr": {
					"title": "Accès API",
					"apiKeyLabel": "Clé API",
					"copy": "Copier",
					"description": "Utilisez cette clé pour appeler l'API de benchmark par programmation."
				},
				"es": {
					"title": "Acceso API",
					"apiKeyLabel": "Clave API",
					"copy": "Copiar",
					"description": "Utilice esta clave para acceder a la API de benchmarking de forma programada."
				},
				"de": {
					"title": "API-Zugriff",
					"apiKeyLabel": "API-Schlüssel",
					"copy": "Kopieren",
					"description": "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
				},
				"it": {
					"title": "Accesso API",
					"apiKeyLabel": "Chiave API",
					"copy": "Copia",
					"description": "Usa questa chiave per accedere all'API di benchmarking in modo programmatico."
				},
				"pt": {
					"title": "Acesso API",
					"apiKeyLabel": "Chave API",
					"copy": "Copiar",
					"description": "Use esta chave para acessar a API de benchmarking programaticamente."
				},
				"zh": {
					"title": "API 访问",
					"apiKeyLabel": "API 密钥",
					"copy": "复制",
					"description": "使用此密钥以编程方式访问基准测试 API。"
				},
				"ja": {
					"title": "API アクセス",
					"apiKeyLabel": "API キー",
					"copy": "コピー",
					"description": "このキーを使用して、プログラムでベンチマーク API にアクセスします。"
				},
				"ko": {
					"title": "API 액세스",
					"apiKeyLabel": "API 키",
					"copy": "복사",
					"description": "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오."
				},
				"ru": {
					"title": "Доступ к API",
					"apiKeyLabel": "Ключ API",
					"copy": "Копировать",
					"description": "Используйте этот ключ для программного доступа к API бенчмаркинга."
				}
			}
		},
		location: "local",
		localId: "api-access-section::local::src/components/pages/settings/ApiAccessSection.content.ts",
		filePath: "src/components/pages/settings/ApiAccessSection.content.ts"
	},
	"why-it-matters": {
		key: "why-it-matters",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Why These Metrics Matter\",\"bundleSize\":{\"title\":\"Bundle Size\",\"description\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"},\"renderingHydration\":{\"title\":\"Rendering & Hydration\",\"description\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Dynamic Loading\",\"description\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"}},\"fr\":{\"title\":\"Pourquoi ces mesures sont importantes\",\"bundleSize\":{\"title\":\"Taille du Bundle\",\"description\":\"Le bundle est l'ensemble des données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"},\"renderingHydration\":{\"title\":\"Rendu et Hydratation\",\"description\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Lors de l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Chargement Dynamique\",\"description\":\"Le chargement de toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy loading) répartit les traductions par itinéraire ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement différé introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de la mise en cache. Il est essentiel de mesurer les deux stratégies.\"}},\"es\":{\"title\":\"Por qué estas métricas importan\",\"bundleSize\":{\"title\":\"Tamaño del paquete\",\"description\":\"El paquete son los datos que se envían a todos los usuarios en todo el mundo. Un paquete más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas que son comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\"},\"renderingHydration\":{\"title\":\"Renderizado e hidratación\",\"description\":\"Conectar un dictionnaire JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede activar re-renderizaciones en todo el árbol. Durante la hidratación de SSR, el análisis y la vinculación de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI).\"},\"dynamicLoading\":{\"title\":\"Carga dinámica\",\"description\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propios inconvenientes: solicitudes en cascada, destellos de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"}},\"de\":{\"title\":\"Warum diese Metriken wichtig sind\",\"bundleSize\":{\"title\":\"Bundle-Größe\",\"description\":\"Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von wenigen Kilobyte bis zu Zehnern von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\"},\"renderingHydration\":{\"title\":\"Rendering & Hydrierung\",\"description\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings über den gesamten Baum auslösen. Während der SSR-Hydrierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\"},\"dynamicLoading\":{\"title\":\"Dynamisches Laden\",\"description\":\"Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Payload. Dynamisches (lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Das Messen beider Strategien ist unerlässlich.\"}},\"it\":{\"title\":\"Perché queste metriche sono importanti\",\"bundleSize\":{\"title\":\"Dimensioni del bundle\",\"description\":\"Il bundle è l'insieme di dati spediti a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi — specialmente su connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"},\"renderingHydration\":{\"title\":\"Rendering e idratazione\",\"description\":\"Collegare un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare re-render in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'allegatamento di enormi oggetti di traduzione aggiunge latenza prima che la pagina diventi interattiva — influenzando direttamente il Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Caricamento dinamico\",\"description\":\"Caricare tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento lazy introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.\"}},\"pt\":{\"title\":\"Por que essas métricas são importantes\",\"bundleSize\":{\"title\":\"Tamanho do bundle\",\"description\":\"O bundle são os dados enviados a todos os usuários em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\"},\"renderingHydration\":{\"title\":\"Renderização e Hidratação\",\"description\":\"Conectar um dicionário JSON grande a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar re-renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Carregamento Dinâmico\",\"description\":\"Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"}},\"zh\":{\"title\":\"为什么这些指标很重要\",\"bundleSize\":{\"title\":\"捆绑包大小\",\"description\":\"捆绑包是发送给全球每个用户的数据。更大的捆绑包意味着更长的下载时间——尤其是在许多地区常见的慢速 3G 连接上。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"},\"renderingHydration\":{\"title\":\"渲染与水合\",\"description\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 水合过程中，解析和附加海量的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\"},\"dynamicLoading\":{\"title\":\"动态加载\",\"description\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"}},\"ja\":{\"title\":\"なぜこれらの指標が重要なのか\",\"bundleSize\":{\"title\":\"バンドルサイズ\",\"description\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きくなると、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコードに加えて、翻訳ファイル自体の重さも加わります。\"},\"renderingHydration\":{\"title\":\"レンダリングとハイドレーション\",\"description\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更により、ツリー全体で再レンダリングがトリガーされる可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。\"},\"dynamicLoading\":{\"title\":\"ダイナミックローディング\",\"description\":\"すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。ダイナミック（遅延）ローディングは、ルートまたはネームスペースごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延ロードには独自のトレードオフがあります。ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどです。両方の戦略を測定することが不可欠です。\"}},\"ko\":{\"title\":\"이러한 지표가 중요한 이유\",\"bundleSize\":{\"title\":\"번들 크기\",\"description\":\"번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.\"},\"renderingHydration\":{\"title\":\"렌더링 및 하이드레이션\",\"description\":\"대규모 JSON 사전을 모든 구성 요소에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 변경은 전체 트리에서 다시 렌더링을 트리거할 수 있습니다. SSR 하이드레이션 중에 거대한 번역 개체를 구문 분석하고 첨부하면 페이지가 상호 작용하기 전에 대기 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\"},\"dynamicLoading\":{\"title\":\"동적 로딩\",\"description\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 보냅니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"}},\"ru\":{\"title\":\"Почему эти показатели важны\",\"bundleSize\":{\"title\":\"Размер бандла\",\"description\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Чем больше бандл, тем дольше время загрузки, особенно при медленном 3G-соединении, распространенном во многих регионах. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт кода во время выполнения, плюс сами файлы переводов.\"},\"renderingHydration\":{\"title\":\"Рендеринг и гидратация\",\"description\":\"Подключение большого словаря JSON к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода увеличивают задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\"},\"dynamicLoading\":{\"title\":\"Динамическая загрузка\",\"description\":\"Предварительная загрузка всех переводов перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\"}}}}"),
		location: "local",
		localId: "why-it-matters::local::src/components/pages/home/WhyItMatters.content.ts",
		filePath: "src/components/pages/home/WhyItMatters.content.ts"
	},
	"hero": {
		key: "hero",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "i18n Benchmark",
					"description": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
					"viewResults": "View Results",
					"methodology": "Methodology",
					"hero": "Hero"
				},
				"fr": {
					"title": "Benchmark i18n",
					"description": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
					"viewResults": "Voir les résultats",
					"methodology": "Méthodologie",
					"hero": "Héros"
				},
				"es": {
					"title": "i18n Benchmark",
					"description": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad del renderizado.",
					"viewResults": "Ver resultados",
					"methodology": "Metodología",
					"hero": "Hero"
				},
				"de": {
					"title": "i18n Benchmark",
					"description": "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
					"viewResults": "Ergebnisse anzeigen",
					"methodology": "Methodik",
					"hero": "Hero"
				},
				"it": {
					"title": "i18n Benchmark",
					"description": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
					"viewResults": "Visualizza risultati",
					"methodology": "Metodologia",
					"hero": "Hero"
				},
				"pt": {
					"title": "i18n Benchmark",
					"description": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
					"viewResults": "Ver Resultados",
					"methodology": "Metodologia",
					"hero": "Hero"
				},
				"zh": {
					"title": "i18n 基准测试",
					"description": "一个旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性真实影响的测试应用程序。",
					"viewResults": "查看结果",
					"methodology": "方法论",
					"hero": "英雄区"
				},
				"ja": {
					"title": "i18n ベンチマーク",
					"description": "国際化ライブラリがバンドルサイズ、ロードパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
					"viewResults": "結果を表示",
					"methodology": "方法論",
					"hero": "ヒーロー"
				},
				"ko": {
					"title": "i18n 벤치마크",
					"description": "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
					"viewResults": "결과 보기",
					"methodology": "방법론",
					"hero": "히어로"
				},
				"ru": {
					"title": "i18n Бенчмарк",
					"description": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
					"viewResults": "Посмотреть результаты",
					"methodology": "Методология",
					"hero": "Главный баннер"
				}
			}
		},
		location: "local",
		localId: "hero::local::src/components/pages/home/Hero.content.ts",
		filePath: "src/components/pages/home/Hero.content.ts"
	}
};
var getDictionaries = () => dictionaries;
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary(dictionary, localeOrSelector, plugins);
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
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
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
process.env.INTLAYER_OPTIMIZED_NESTING;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var r = ({ value: i, children: a, additionalProps: o = {} }) => {
	let s = ref(i), c = typeof a == "function" ? (e) => a(e) : () => a, l = (e) => (s.value, c(e)), u = ((e) => l(e));
	return Object.assign(u, {
		render: l,
		toString: () => String(s.value ?? ""),
		valueOf: () => s.value,
		[Symbol.toPrimitive]: () => s.value,
		toJSON: () => s.value,
		get raw() {
			return s.value;
		},
		set raw(e) {
			s.value = e;
		},
		get value() {
			return s.value;
		},
		use(e) {
			return r({
				value: s.value,
				children: () => c(e),
				additionalProps: o
			});
		},
		__update(e) {
			c = e.render, this.raw = e.raw;
		},
		...o
	}), Object.setPrototypeOf(u, getIntlayerNodePrototype(i, Function.prototype)), markRaw(u);
};
var E = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, n) => {
		let { children: i, dictionaryKey: a, keyPath: o } = n;
		let s = (e) => r({
			value: e,
			children: e
		}), c = s(i);
		if (typeof i != "function") return c;
		let l = (...e) => {
			let t = i(...e);
			return s(t);
		};
		Object.setPrototypeOf(l, Object.getPrototypeOf(c));
		for (let e of Object.getOwnPropertyNames(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		return markRaw(l);
	}
};
var O = fallbackPlugin;
var A = fallbackPlugin;
var j = fallbackPlugin;
var M = /* @__PURE__ */ new Map();
var N = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (M.has(n)) return M.get(n);
	let r = [
		E,
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		O,
		A,
		j
	].filter((e) => e !== fallbackPlugin);
	return M.set(n, r), r;
};
var n = (n, r) => {
	return getIntlayer(n, r, N(typeof r == "object" && r ? r.locale : r));
};
var a = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v$1 = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v$1(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
}));
var x = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return b(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
});
var v = (v, y$1) => {
	let b$1 = inject(a), x$2 = isRef(b$1?.locale) ? b$1.locale : ref(b$1?.locale ?? internationalization.defaultLocale), S = computed(() => {
		return {
			selector: void 0,
			locale: y$1 === void 0 ? void 0 : toValue(y$1)
		};
	}), C = computed(() => S.value.locale ?? x$2.value), w = shallowRef({});
	watch([
		() => toValue(v),
		() => C.value,
		() => S.value.selector
	], ([t, n$1, r]) => {
		w.value = r ? n(t, {
			...r,
			locale: n$1
		}) : n(t, n$1);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let T = /* @__PURE__ */ new Map(), E = (e) => {
		let t = e.join(".");
		if (T.has(t)) return T.get(t);
		let c = computed(() => g(w.value, e)), u = new Proxy({}, {
			get(t, u, d) {
				if (typeof u == "symbol" || typeof u == "string" && (u.startsWith("__") || u.startsWith("$"))) return u === "__v_isRef" ? !0 : u === "then" ? void 0 : Reflect.get(t, u, d);
				if (u === "value") return c.value ?? "";
				if (u === "c" || u === "asComponent") return b(() => c.value);
				if (u === "$raw") return c;
				if (u === Symbol.toPrimitive) return () => String(c.value ?? "");
				let f = e.concat(u), p = g(w.value, f);
				if (p === void 0 || _(p) && !v$1(p)) return E(f);
				if (y(p)) return x(computed(() => g(w.value, f)));
				if (typeof p == "function") {
					let t = g(w.value, e);
					return t != null && !Object.hasOwn(t, u) ? p.bind(t) : (...e) => g(w.value, f)?.(...e);
				}
				let m = computed(() => g(w.value, f));
				return new Proxy(m, { get(e, t, n) {
					return t === "value" ? e.value ?? "" : t === "__v_isRef" || Reflect.get(e, t, n);
				} });
			},
			ownKeys() {
				let t = g(w.value, e);
				return _(t) ? Reflect.ownKeys(t) : [];
			},
			getOwnPropertyDescriptor() {
				return {
					enumerable: !0,
					configurable: !0
				};
			}
		});
		return T.set(t, u), u;
	};
	return E([]);
};
var _hoisted_1 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_2 = { class: "space-y-4" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "text-sm text-muted-foreground" };
var _hoisted_5 = { class: "mt-2 flex gap-2" };
var _hoisted_6 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_7 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_8 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_9 = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
var OpenPositions_default = defineComponent({
	__name: "OpenPositions",
	setup(__props) {
		const { title, applyNow, openings } = v("open-positions");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h2", _hoisted_1, toDisplayString(unref(title)), 1), createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(openings), (o) => {
				return openBlock(), createElementBlock("div", {
					key: o.title,
					class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
				}, [createElementVNode("div", null, [
					createElementVNode("h3", _hoisted_3, toDisplayString(o.title), 1),
					createElementVNode("p", _hoisted_4, toDisplayString(o.desc), 1),
					createElementVNode("div", _hoisted_5, [
						createElementVNode("span", _hoisted_6, toDisplayString(o.dept), 1),
						createElementVNode("span", _hoisted_7, toDisplayString(o.location), 1),
						createElementVNode("span", _hoisted_8, toDisplayString(o.type), 1)
					])
				]), createElementVNode("button", _hoisted_9, toDisplayString(unref(applyNow)), 1)]);
			}), 128))])], 64);
		};
	}
});
export { OpenPositions_default as default };

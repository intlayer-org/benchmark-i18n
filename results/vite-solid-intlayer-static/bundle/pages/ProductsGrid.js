import { Dynamic, createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, useContext } from "solid-js";
var products_grid_default = {
	key: "products-grid",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"e": "Benchmark CLI",
				"n": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
				"j": "Free",
				"f": "Benchmark Cloud",
				"c": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
				"g": "Benchmark Enterprise",
				"m": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
				"i": "Contact Us",
				"l": "Migration Assistant",
				"a": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
				"o": "Translation QA",
				"d": "Automated quality checks for missing translations, pluralization issues, and context errors.",
				"h": "Bundle Optimizer",
				"b": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
				"k": "Learn More"
			},
			"fr": {
				"e": "CLI Benchmark",
				"n": "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
				"j": "Gratuit",
				"f": "Benchmark Cloud",
				"c": "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
				"g": "Benchmark Enterprise",
				"m": "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
				"i": "Contactez-nous",
				"l": "Assistant de migration",
				"a": "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
				"o": "QA de traduction",
				"d": "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
				"h": "Optimiseur de bundle",
				"b": "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.",
				"k": "En savoir plus"
			},
			"es": {
				"e": "CLI de Benchmark",
				"n": "Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
				"j": "Gratis",
				"f": "Benchmark Cloud",
				"c": "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
				"g": "Benchmark Enterprise",
				"m": "Despliegue local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
				"i": "Contáctenos",
				"l": "Asistente de migración",
				"a": "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n sin tiempo de inactividad.",
				"o": "Control de calidad de traducción",
				"d": "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
				"h": "Optimizador de bundle",
				"b": "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
				"k": "Más información"
			},
			"de": {
				"e": "Benchmark CLI",
				"n": "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
				"j": "Kostenlos",
				"f": "Benchmark Cloud",
				"c": "Automatisiertes cloudbasiertes Benchmarking mit historischer Nachverfolgung, Warnungen und Team-Dashboards.",
				"g": "Benchmark Enterprise",
				"m": "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
				"i": "Kontaktieren Sie uns",
				"l": "Migrationsassistent",
				"a": "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
				"o": "Übersetzungs-QA",
				"d": "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
				"h": "Bundle-Optimierer",
				"b": "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
				"k": "Mehr erfahren"
			},
			"it": {
				"e": "CLI del Benchmark",
				"n": "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
				"j": "Gratis",
				"f": "Benchmark Cloud",
				"c": "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
				"g": "Benchmark Enterprise",
				"m": "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
				"i": "Contattaci",
				"l": "Assistente alla migrazione",
				"a": "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.",
				"o": "QA delle traduzioni",
				"d": "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
				"h": "Ottimizzatore del bundle",
				"b": "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
				"k": "Scopri di più"
			},
			"pt": {
				"e": "CLI de Benchmark",
				"n": "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
				"j": "Grátis",
				"f": "Benchmark Cloud",
				"c": "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
				"g": "Benchmark Enterprise",
				"m": "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
				"i": "Contate-nos",
				"l": "Assistente de migração",
				"a": "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
				"o": "QA de tradução",
				"d": "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.",
				"h": "Otimizador de bundle",
				"b": "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
				"k": "Saiba Mais"
			},
			"zh": {
				"e": "基准测试 CLI",
				"n": "从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。",
				"j": "免费",
				"f": "基准测试云",
				"c": "具有历史跟踪、警报和团队仪表板的自动化云基准测试。",
				"g": "基准测试企业版",
				"m": "支持 SSO、审计日志、自定义 SLA 和专用支持的本地部署。",
				"i": "联系我们",
				"l": "迁移助手",
				"a": "人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
				"o": "翻译质量保证",
				"d": "针对缺失翻译、复数问题和上下文错误的自动质量检查。",
				"h": "捆绑包优化器",
				"b": "通过摇树优化和代码拆分，分析并优化您的生产 i18n 捆绑包。",
				"k": "了解更多"
			},
			"ja": {
				"e": "ベンチマーク CLI",
				"n": "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
				"j": "無料",
				"f": "ベンチマーククラウド",
				"c": "履歴の追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。",
				"g": "ベンチマークエンタープライズ",
				"m": "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。",
				"i": "お問い合わせ",
				"l": "移行アシスタント",
				"a": "i18nライブラリ間でコードベースをダウンタイムなしで移行するのを支援するAI搭載ツール。",
				"o": "翻訳QA",
				"d": "欠落している翻訳、複数形の問題、およびコンテキストエラーの自動品質チェック。",
				"h": "バンドルオプティマイザー",
				"b": "ツリーシェイキングとコード分割を使用して、本番用のi18nバンドルを分析および最適化します。",
				"k": "詳細はこちら"
			},
			"ko": {
				"e": "벤치마크 CLI",
				"n": "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.",
				"j": "무료",
				"f": "벤치마크 클라우드",
				"c": "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
				"g": "벤치마크 엔터프라이즈",
				"m": "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 갖춘 온프레미스 배포.",
				"i": "문의하기",
				"l": "마이그레이션 어시스턴트",
				"a": "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 기반 도구입니다.",
				"o": "번역 QA",
				"d": "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.",
				"h": "번들 최적화 도구",
				"b": "트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
				"k": "자세히 알아보기"
			},
			"ru": {
				"e": "CLI для бенчмарков",
				"n": "Запускайте бенчмарки локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
				"j": "Бесплатно",
				"f": "Облачный бенчмарк",
				"c": "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными дашбордами.",
				"g": "Бенчмарк для предприятий",
				"m": "Локальное развертывание с поддержкой SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.",
				"i": "Связаться с нами",
				"l": "Помощник по миграции",
				"a": "Инструмент на базе ИИ, который помогает переносить кодовую базу между библиотеками i18n без простоев.",
				"o": "QA переводов",
				"d": "Автоматизированные проверки качества на наличие отсутствующих переводов, проблем с множественным числом и контекстных ошибок.",
				"h": "Оптимизатор бандла",
				"b": "Анализирует и оптимизирует ваш i18n-бандл для продакшена с помощью tree-shaking и разделения кода.",
				"k": "Узнать больше"
			}
		}
	}
};
var e = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
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
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
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
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
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
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, S$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S$1,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
}, a = getLocaleFromStorageClient(localeStorageOptions), y = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="mb-4 text-sm text-muted-foreground"></p></div><div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"></span><button type=button class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function ProductsGrid() {
	const content = i(products_grid_default);
	const products = [
		{
			name: content().benchmarkCli.value,
			desc: content().runBenchmarksLocallyFromYour.value,
			price: content().free.value
		},
		{
			name: content().benchmarkCloud.value,
			desc: content().automatedCloudBasedBenchmarkingWith.value,
			price: "$29/mo"
		},
		{
			name: content().benchmarkEnterprise.value,
			desc: content().onPremiseDeploymentWithSso.value,
			price: content().contactUs.value
		},
		{
			name: content().migrationAssistant.value,
			desc: content().aiPoweredToolThatHelps.value,
			price: "$99 one-time"
		},
		{
			name: content().translationQa.value,
			desc: content().automatedQualityChecksForMissing.value,
			price: "$19/mo"
		},
		{
			name: content().bundleOptimizer.value,
			desc: content().analyzesAndOptimizesYourI18n.value,
			price: "$49/mo"
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: products,
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling;
				insert(_el$4, () => p.name);
				insert(_el$5, () => p.desc);
				insert(_el$7, () => p.price);
				insert(_el$8, () => content().learnMore);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { ProductsGrid as default };

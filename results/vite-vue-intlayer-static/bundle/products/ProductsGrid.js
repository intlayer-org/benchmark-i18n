import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var products_grid_default = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":\"Learn More\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"price\":\"Free\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"price\":\"$29/mo\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"price\":\"Contact Us\"},{\"name\":\"Migration Assistant\",\"desc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"price\":\"$99 one-time\"},{\"name\":\"Translation QA\",\"desc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"price\":\"$19/mo\"},{\"name\":\"Bundle Optimizer\",\"desc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"price\":\"$49/mo\"}]},\"fr\":{\"a\":\"En savoir plus\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Lancez des benchmarks en local. Configurations personnalisées et CI.\",\"price\":\"Gratuit\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\",\"price\":\"29 €/mois\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise avec SSO, journaux d'audit, SLA et support dédié.\",\"price\":\"Nous contacter\"},{\"name\":\"Assistant de migration\",\"desc\":\"Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\",\"price\":\"99 € (unique)\"},{\"name\":\"QA des traductions\",\"desc\":\"Contrôles automatiques : clés manquantes, pluriels, contexte.\",\"price\":\"19 €/mois\"},{\"name\":\"Optimiseur de bundle\",\"desc\":\"Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\",\"price\":\"49 €/mois\"}]},\"es\":{\"a\":\"Más información\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Ejecute benchmarks localmente desde su terminal. Soporta configuraciones personalizadas e integración CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"price\":\"29 $/mes\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Despliegue en las instalaciones con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"price\":\"Contáctenos\"},{\"name\":\"Asistente de migración\",\"desc\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n con cero tiempo de inactividad.\",\"price\":\"99 $ (pago único)\"},{\"name\":\"QA de traducción\",\"desc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"price\":\"19 $/mes\"},{\"name\":\"Optimizador de paquetes\",\"desc\":\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\",\"price\":\"49 $/mes\"}]},\"de\":{\"a\":\"Mehr erfahren\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"price\":\"Kostenlos\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.\",\"price\":\"29 €/Monat\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und engagiertem Support.\",\"price\":\"Kontaktieren Sie uns\"},{\"name\":\"Migrations-Assistent\",\"desc\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"price\":\"99 € (einmalig)\"},{\"name\":\"Übersetzungs-QS\",\"desc\":\"Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"price\":\"19 €/Monat\"},{\"name\":\"Bundle-Optimierer\",\"desc\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"price\":\"49 €/Monat\"}]},\"it\":{\"a\":\"Scopri di più\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\",\"price\":\"29 €/mese\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"price\":\"Contattaci\"},{\"name\":\"Assistente alla migrazione\",\"desc\":\"Strumento basato su IA che aiuta a migrare il tuo codice tra le librerie i18n con zero tempi di inattività.\",\"price\":\"99 € (una tantum)\"},{\"name\":\"QA delle traduzioni\",\"desc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"price\":\"19 €/mese\"},{\"name\":\"Ottimizzatore di bundle\",\"desc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"price\":\"49 €/mese\"}]},\"pt\":{\"a\":\"Saiba Mais\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração CI.\",\"price\":\"Grátis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"price\":\"29 $/mês\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"price\":\"Contate-nos\"},{\"name\":\"Assistente de Migração\",\"desc\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n com zero tempo de inatividade.\",\"price\":\"99 $ (pagamento único)\"},{\"name\":\"QA de Tradução\",\"desc\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"price\":\"19 $/mês\"},{\"name\":\"Otimizador de Bundle\",\"desc\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"price\":\"49 $/mês\"}]},\"zh\":{\"a\":\"了解更多\",\"b\":[{\"name\":\"基准测试 CLI\",\"desc\":\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"price\":\"免费\"},{\"name\":\"基准测试云\",\"desc\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"price\":\"29 美元/月\"},{\"name\":\"基准测试企业版\",\"desc\":\"具有 SSO、审计日志、自定义 SLA 和专用支持的本地部署。\",\"price\":\"联系我们\"},{\"name\":\"迁移助手\",\"desc\":\"由 AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，且实现零停机。\",\"price\":\"99 美元一次性付款\"},{\"name\":\"翻译质量保证\",\"desc\":\"针对缺失翻译、复数问题和上下文错误的自动质量检查。\",\"price\":\"19 美元/月\"},{\"name\":\"捆绑包优化器\",\"desc\":\"分析并优化生产环境的 i18n 捆绑包，支持 tree-shaking 和代码拆分。\",\"price\":\"49 美元/月\"}]},\"ja\":{\"a\":\"詳細はこちら\",\"b\":[{\"name\":\"ベンチマーク CLI\",\"desc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。\",\"price\":\"無料\"},{\"name\":\"ベンチマーク クラウド\",\"desc\":\"履歴トラッキング、アラート、チームダッシュボードを備えた自動クラウドベースベンチマーク。\",\"price\":\"29ドル/月\"},{\"name\":\"ベンチマーク エンタープライズ\",\"desc\":\"SSO、監査ログ、カスタムSLA、専用サポートを備えたオンプレミス展開。\",\"price\":\"お問い合わせ\"},{\"name\":\"移行アシスタント\",\"desc\":\"AIを搭載したツールで、ダウンタイムなしでi18nライブラリ間のコードベースの移行を支援します。\",\"price\":\"99ドル（1回払い）\"},{\"name\":\"翻訳品質保証\",\"desc\":\"不足している翻訳、複数形の不一致、コンテキストエラーの自動品質チェック。\",\"price\":\"19ドル/月\"},{\"name\":\"バンドルオプティマイザー\",\"desc\":\"ツリーシェイキングとコード分割を使用して、生産用にi18nバンドルを分析および最適化します。\",\"price\":\"49ドル/月\"}]},\"ko\":{\"a\":\"자세히 보기\",\"b\":[{\"name\":\"벤치마크 CLI\",\"desc\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.\",\"price\":\"무료\"},{\"name\":\"벤치마크 클라우드\",\"desc\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.\",\"price\":\"월 $29\"},{\"name\":\"벤치마크 엔터프라이즈\",\"desc\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.\",\"price\":\"문의하기\"},{\"name\":\"마이그레이션 어시스턴트\",\"desc\":\"다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"price\":\"99달러(1회성)\"},{\"name\":\"번역 QA\",\"desc\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.\",\"price\":\"월 $19\"},{\"name\":\"번들 최적화 도구\",\"desc\":\"트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"price\":\"월 $49\"}]},\"ru\":{\"a\":\"Узнать больше\",\"b\":[{\"name\":\"Бенчмарк CLI\",\"desc\":\"Запуск бенчмарков локально из вашего терминала. Поддержка пользовательских конфигураций и интеграция с CI.\",\"price\":\"Бесплатно\"},{\"name\":\"Бенчмарк Облако\",\"desc\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, оповещениями и командными панелями.\",\"price\":\"29 $/мес\"},{\"name\":\"Бенчмарк Предприятие\",\"desc\":\"Локальное развертывание с SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"price\":\"Связаться с нами\"},{\"name\":\"Помощник по миграции\",\"desc\":\"Инструмент на базе ИИ, который помогает перенести вашу кодовую базу между библиотеками i18n без простоев.\",\"price\":\"99 $ (единоразово)\"},{\"name\":\"QA переводов\",\"desc\":\"Автоматические проверки качества на отсутствие переводов, проблемы с множественным числом и ошибки контекста.\",\"price\":\"19 $/мес\"},{\"name\":\"Оптимизатор бандлов\",\"desc\":\"Анализирует и оптимизирует ваш i18n-бандл для продакшена с использованием tree-shaking и разделения кода.\",\"price\":\"49 $/мес\"}]}}}")
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
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
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
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
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var ProductsGrid_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ProductsGrid",
	setup(__props, { expose: __expose }) {
		__expose();
		const { a: learnMore, b: products } = b(products_grid_default);
		const __returned__ = {
			learnMore,
			products
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "text-sm font-bold text-primary" };
var _hoisted_6 = {
	type: "button",
	class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.products, (p) => {
		return openBlock(), createElementBlock("div", {
			key: p.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [createElementVNode("div", null, [createElementVNode("h3", _hoisted_2, toDisplayString(p.name), 1), createElementVNode("p", _hoisted_3, toDisplayString(p.desc), 1)]), createElementVNode("div", _hoisted_4, [createElementVNode("span", _hoisted_5, toDisplayString(p.price), 1), createElementVNode("button", _hoisted_6, toDisplayString($setup.learnMore), 1)])]);
	}), 128))]);
}
var ProductsGrid_default = _plugin_vue_export_helper_default(ProductsGrid_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/products/ProductsGrid.vue"]]);
export { ProductsGrid_default as default };

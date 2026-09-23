import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":\"Learn More\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"price\":\"Free\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"price\":\"$29/mo\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"price\":\"Contact Us\"},{\"name\":\"Migration Assistant\",\"desc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"price\":\"$99 one-time\"},{\"name\":\"Translation QA\",\"desc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"price\":\"$19/mo\"},{\"name\":\"Bundle Optimizer\",\"desc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"price\":\"$49/mo\"}]},\"fr\":{\"a\":\"En savoir plus\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Lancez des benchmarks en local. Configurations personnalisées et CI.\",\"price\":\"Gratuit\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\",\"price\":\"29 €/mois\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-premise avec SSO, journaux d'audit, SLA et support dédié.\",\"price\":\"Nous contacter\"},{\"name\":\"Assistant de migration\",\"desc\":\"Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\",\"price\":\"99 € (unique)\"},{\"name\":\"QA des traductions\",\"desc\":\"Contrôles automatiques : clés manquantes, pluriels, contexte.\",\"price\":\"19 €/mois\"},{\"name\":\"Optimiseur de bundle\",\"desc\":\"Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\",\"price\":\"49 €/mois\"}]},\"es\":{\"a\":\"Más información\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Ejecute benchmarks localmente desde su terminal. Soporta configuraciones personalizadas e integración CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"price\":\"29 $/mes\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Despliegue en las instalaciones con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"price\":\"Contáctenos\"},{\"name\":\"Asistente de migración\",\"desc\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n con cero tiempo de inactividad.\",\"price\":\"99 $ (pago único)\"},{\"name\":\"QA de traducción\",\"desc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"price\":\"19 $/mes\"},{\"name\":\"Optimizador de paquetes\",\"desc\":\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\",\"price\":\"49 $/mes\"}]},\"de\":{\"a\":\"Mehr erfahren\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"price\":\"Kostenlos\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.\",\"price\":\"29 €/Monat\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und engagiertem Support.\",\"price\":\"Kontaktieren Sie uns\"},{\"name\":\"Migrations-Assistent\",\"desc\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"price\":\"99 € (einmalig)\"},{\"name\":\"Übersetzungs-QS\",\"desc\":\"Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"price\":\"19 €/Monat\"},{\"name\":\"Bundle-Optimierer\",\"desc\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"price\":\"49 €/Monat\"}]},\"it\":{\"a\":\"Scopri di più\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"price\":\"Gratis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\",\"price\":\"29 €/mese\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"price\":\"Contattaci\"},{\"name\":\"Assistente alla migrazione\",\"desc\":\"Strumento basato su IA che aiuta a migrare il tuo codice tra le librerie i18n con zero tempi di inattività.\",\"price\":\"99 € (una tantum)\"},{\"name\":\"QA delle traduzioni\",\"desc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"price\":\"19 €/mese\"},{\"name\":\"Ottimizzatore di bundle\",\"desc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"price\":\"49 €/mese\"}]},\"pt\":{\"a\":\"Saiba Mais\",\"b\":[{\"name\":\"Benchmark CLI\",\"desc\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração CI.\",\"price\":\"Grátis\"},{\"name\":\"Benchmark Cloud\",\"desc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"price\":\"29 $/mês\"},{\"name\":\"Benchmark Enterprise\",\"desc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"price\":\"Contate-nos\"},{\"name\":\"Assistente de Migração\",\"desc\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n com zero tempo de inatividade.\",\"price\":\"99 $ (pagamento único)\"},{\"name\":\"QA de Tradução\",\"desc\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"price\":\"19 $/mês\"},{\"name\":\"Otimizador de Bundle\",\"desc\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"price\":\"49 $/mês\"}]},\"zh\":{\"a\":\"了解更多\",\"b\":[{\"name\":\"基准测试 CLI\",\"desc\":\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"price\":\"免费\"},{\"name\":\"基准测试云\",\"desc\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"price\":\"29 美元/月\"},{\"name\":\"基准测试企业版\",\"desc\":\"具有 SSO、审计日志、自定义 SLA 和专用支持的本地部署。\",\"price\":\"联系我们\"},{\"name\":\"迁移助手\",\"desc\":\"由 AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，且实现零停机。\",\"price\":\"99 美元一次性付款\"},{\"name\":\"翻译质量保证\",\"desc\":\"针对缺失翻译、复数问题和上下文错误的自动质量检查。\",\"price\":\"19 美元/月\"},{\"name\":\"捆绑包优化器\",\"desc\":\"分析并优化生产环境的 i18n 捆绑包，支持 tree-shaking 和代码拆分。\",\"price\":\"49 美元/月\"}]},\"ja\":{\"a\":\"詳細はこちら\",\"b\":[{\"name\":\"ベンチマーク CLI\",\"desc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。\",\"price\":\"無料\"},{\"name\":\"ベンチマーク クラウド\",\"desc\":\"履歴トラッキング、アラート、チームダッシュボードを備えた自動クラウドベースベンチマーク。\",\"price\":\"29ドル/月\"},{\"name\":\"ベンチマーク エンタープライズ\",\"desc\":\"SSO、監査ログ、カスタムSLA、専用サポートを備えたオンプレミス展開。\",\"price\":\"お問い合わせ\"},{\"name\":\"移行アシスタント\",\"desc\":\"AIを搭載したツールで、ダウンタイムなしでi18nライブラリ間のコードベースの移行を支援します。\",\"price\":\"99ドル（1回払い）\"},{\"name\":\"翻訳品質保証\",\"desc\":\"不足している翻訳、複数形の不一致、コンテキストエラーの自動品質チェック。\",\"price\":\"19ドル/月\"},{\"name\":\"バンドルオプティマイザー\",\"desc\":\"ツリーシェイキングとコード分割を使用して、生産用にi18nバンドルを分析および最適化します。\",\"price\":\"49ドル/月\"}]},\"ko\":{\"a\":\"자세히 보기\",\"b\":[{\"name\":\"벤치마크 CLI\",\"desc\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.\",\"price\":\"무료\"},{\"name\":\"벤치마크 클라우드\",\"desc\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.\",\"price\":\"월 $29\"},{\"name\":\"벤치마크 엔터프라이즈\",\"desc\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.\",\"price\":\"문의하기\"},{\"name\":\"마이그레이션 어시스턴트\",\"desc\":\"다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"price\":\"99달러(1회성)\"},{\"name\":\"번역 QA\",\"desc\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.\",\"price\":\"월 $19\"},{\"name\":\"번들 최적화 도구\",\"desc\":\"트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"price\":\"월 $49\"}]},\"ru\":{\"a\":\"Узнать больше\",\"b\":[{\"name\":\"Бенчмарк CLI\",\"desc\":\"Запуск бенчмарков локально из вашего терминала. Поддержка пользовательских конфигураций и интеграция с CI.\",\"price\":\"Бесплатно\"},{\"name\":\"Бенчмарк Облако\",\"desc\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, оповещениями и командными панелями.\",\"price\":\"29 $/мес\"},{\"name\":\"Бенчмарк Предприятие\",\"desc\":\"Локальное развертывание с SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"price\":\"Связаться с нами\"},{\"name\":\"Помощник по миграции\",\"desc\":\"Инструмент на базе ИИ, который помогает перенести вашу кодовую базу между библиотеками i18n без простоев.\",\"price\":\"99 $ (единоразово)\"},{\"name\":\"QA переводов\",\"desc\":\"Автоматические проверки качества на отсутствие переводов, проблемы с множественным числом и ошибки контекста.\",\"price\":\"19 $/мес\"},{\"name\":\"Оптимизатор бандлов\",\"desc\":\"Анализирует и оптимизирует ваш i18n-бандл для продакшена с использованием tree-shaking и разделения кода.\",\"price\":\"49 $/мес\"}]}}}")
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", ie = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
	locales: [
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
	requiredLocales: [
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
	strictMode: "inclusive",
	defaultLocale: "en"
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), we = (e, n) => {
	let r = a() ? s(xe) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	h([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return f(o);
			if (Se(s)) return Ce(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Te = i({
	__name: "ProductsGrid",
	setup(e, { expose: t }) {
		t();
		let { a: n, b: r } = we(g), i = {
			learnMore: n,
			products: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), Ee = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, De = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Oe = { class: "mb-2 text-lg font-semibold text-foreground" }, ke = { class: "mb-4 text-sm text-muted-foreground" }, Ae = { class: "flex items-center justify-between" }, $ = { class: "text-sm font-bold text-primary" }, je = {
	type: "button",
	class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function Me(t, i, a, o, s, c) {
	return u(), n("div", De, [(u(!0), n(e, null, f(o.products, (e) => (u(), n("div", {
		key: e.name,
		class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
	}, [r("div", null, [r("h3", Oe, p(e.name), 1), r("p", ke, p(e.desc), 1)]), r("div", Ae, [r("span", $, p(e.price), 1), r("button", je, p(o.learnMore), 1)])]))), 128))]);
}
var Ne = Ee(Te, [["render", Me], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/products/ProductsGrid.vue"]]);
export { Ne as default };

import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":\"Benchmark CLI\",\"r\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"f\":\"Benchmark Cloud\",\"c\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"g\":\"Benchmark Enterprise\",\"m\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"i\":\"Contact Us\",\"l\":\"Migration Assistant\",\"a\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"s\":\"Translation QA\",\"d\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"h\":\"Bundle Optimizer\",\"b\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"k\":\"Learn More\",\"j\":\"Free\",\"o\":\"$29/mo\",\"q\":\"$99 one-time\",\"n\":\"$19/mo\",\"p\":\"$49/mo\"},\"fr\":{\"e\":\"CLI de Benchmark\",\"r\":\"Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"g\":\"Benchmark Entreprise\",\"m\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"i\":\"Contactez-nous\",\"l\":\"Assistant de Migration\",\"a\":\"Outil propulsé par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d'arrêt.\",\"s\":\"QA de Traduction\",\"d\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"h\":\"Optimiseur de Bundle\",\"b\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\",\"k\":\"En savoir plus\",\"j\":\"Gratuit\",\"o\":\"29 $/mois\",\"q\":\"99 $ une fois\",\"n\":\"19 $/mois\",\"p\":\"49 $/mois\"},\"es\":{\"e\":\"CLI de Benchmark\",\"r\":\"Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"g\":\"Benchmark para Empresas\",\"m\":\"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"i\":\"Contáctenos\",\"l\":\"Asistente de Migración\",\"a\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.\",\"s\":\"QA de Traducción\",\"d\":\"Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"h\":\"Optimizador de Bundles\",\"b\":\"Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.\",\"k\":\"Más información\",\"j\":\"Gratis\",\"o\":\"29 $/mes\",\"q\":\"99 $ pago único\",\"n\":\"19 $/mes\",\"p\":\"49 $/mes\"},\"de\":{\"e\":\"Benchmark-CLI\",\"r\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"f\":\"Benchmark-Cloud\",\"c\":\"Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.\",\"g\":\"Benchmark-Enterprise\",\"m\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.\",\"i\":\"Kontaktieren Sie uns\",\"l\":\"Migrations-Assistent\",\"a\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"s\":\"Übersetzungs-QA\",\"d\":\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"h\":\"Bundle-Optimierer\",\"b\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.\",\"k\":\"Mehr erfahren\",\"j\":\"Kostenlos\",\"o\":\"29 €/Monat\",\"q\":\"99 € einmalig\",\"n\":\"19 €/Monat\",\"p\":\"49 €/Monat\"},\"it\":{\"e\":\"CLI di benchmark\",\"r\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"f\":\"Benchmark cloud\",\"c\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.\",\"g\":\"Benchmark enterprise\",\"m\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"i\":\"Contattaci\",\"l\":\"Assistente alla migrazione\",\"a\":\"Strumento basato sull’intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d’interruzione.\",\"s\":\"QA di traduzione\",\"d\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"h\":\"Ottimizzatore bundle\",\"b\":\"Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.\",\"k\":\"Scopri di più\",\"j\":\"Gratis\",\"o\":\"29 €/mese\",\"q\":\"99 € una volta\",\"n\":\"19 €/mese\",\"p\":\"49 €/mese\"},\"pt\":{\"e\":\"CLI do Benchmark\",\"r\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"g\":\"Benchmark Enterprise\",\"m\":\"Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"i\":\"Contate-nos\",\"l\":\"Assistente de Migração\",\"a\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\",\"s\":\"QA de Tradução\",\"d\":\"Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.\",\"h\":\"Otimizador de Bundle\",\"b\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"k\":\"Saiba mais\",\"j\":\"Grátis\",\"o\":\"29 €/mês\",\"q\":\"99 € pagamento único\",\"n\":\"19 €/mês\",\"p\":\"49 €/mês\"},\"zh\":{\"e\":\"基准测试 CLI\",\"r\":\"在终端本地运行基准测试。支持自定义配置和 CI 集成。\",\"f\":\"基准测试云\",\"c\":\"基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。\",\"g\":\"基准测试企业版\",\"m\":\"采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。\",\"i\":\"联系我们\",\"l\":\"迁移助手\",\"a\":\"由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。\",\"s\":\"翻译质量保证\",\"d\":\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\",\"h\":\"包优化器\",\"b\":\"通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。\",\"k\":\"了解更多\",\"j\":\"免费\",\"o\":\"29 美元/月\",\"q\":\"99 美元一次性\",\"n\":\"19 美元/月\",\"p\":\"49 美元/月\"},\"ja\":{\"e\":\"ベンチマーク CLI\",\"r\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。\",\"f\":\"ベンチマーククラウド\",\"c\":\"履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\",\"g\":\"ベンチマークエンタープライズ\",\"m\":\"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。\",\"i\":\"お問い合わせ\",\"l\":\"移行アシスタント\",\"a\":\"i18n ライブラリ間のコードベースをダウンタイムなしで移行するのに役立つ AI 搭載ツール。\",\"s\":\"翻訳 QA\",\"d\":\"翻訳の欠落、複数形の問題、コンテキストエラーに対する自動品質チェック。\",\"h\":\"バンドルオプティマイザー\",\"b\":\"生産向けに i18n バンドルをツリーシェイキングとコード分割で分析・最適化します。\",\"k\":\"詳細はこちら\",\"j\":\"無料\",\"o\":\"29 ドル/月\",\"q\":\"99 ドルの1回払い\",\"n\":\"19 ドル/月\",\"p\":\"49 ドル/月\"},\"ko\":{\"e\":\"벤치마크 CLI\",\"r\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.\",\"f\":\"벤치마크 클라우드\",\"c\":\"기록 추적, 알림 및 팀 대시보드를 제공하는 자동화된 클라우드 기반 벤치마킹.\",\"g\":\"벤치마크 엔터프라이즈\",\"m\":\"SSO, 감사 로그, 사용자 지정 SLA 및 전담 지원을 제공하는 온프레미스 배포.\",\"i\":\"문의하기\",\"l\":\"마이그레이션 어시스턴트\",\"a\":\"코드베이스를 가동 중지 시간 없이 i18n 라이브러리 간에 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"s\":\"번역 QA\",\"d\":\"누락된 번역, 복수화 문제 및 상황별 오류에 대한 자동화된 품질 검사.\",\"h\":\"번들 최적화기\",\"b\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"k\":\"자세히 알아보기\",\"j\":\"무료\",\"o\":\"29 달러/월\",\"q\":\"99 달러 일회성\",\"n\":\"19 달러/월\",\"p\":\"49 달러/월\"},\"ru\":{\"e\":\"CLI для бенчмаркинга\",\"r\":\"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.\",\"f\":\"Облачный бенчмаркинг\",\"c\":\"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.\",\"g\":\"Корпоративный бенчмаркинг\",\"m\":\"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"i\":\"Связаться с нами\",\"l\":\"Помощник по миграции\",\"a\":\"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"s\":\"Контроль качества перевода\",\"d\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.\",\"h\":\"Оптимизатор бандлов\",\"b\":\"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.\",\"k\":\"Узнать больше\",\"j\":\"Бесплатно\",\"o\":\"$29/мес\",\"q\":\"99 $ единоразово\",\"n\":\"$19/мес\",\"p\":\"$49/мес\"}}}")
}, p = {
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
}, m = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, g = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = h(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _ = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var v = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, y = (e = v) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, b = !1, x, S = () => typeof window > "u" ? y(v) : (b ||= (x = y(v), !0), x), ee = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (b = !1, !_ && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: h(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, g(r, e, i));
			} catch {}
		}
	}
}, C = /* @__PURE__ */ new Map(), te = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
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
}), ne = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = te(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, re = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ne(t)), w = /* @__PURE__ */ new WeakMap(), T = 0, ie = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, ae = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, oe = (e, t, n) => `${e}_${t}_${ie(n)}`, se = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, ce = "translation", le = "enumeration", ue = "plural", de = "condition", k = "insertion", fe = "object", pe = "array", A = "markdown", j = "html", me = "gender", he = "select", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ge = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, _e = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[j] : e[A];
}, ve = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? j : A;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = ve(e, P(_e(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ye = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ge(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ce,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, be = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	le,
	de,
	ue,
	me,
	he
], xe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && ye(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => xe(e, t, n) : t, Se = z, K = z, q = (e) => z, J = z, Ce = (e, t = !0) => [
	B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	V,
	H(e ?? p.defaultLocale),
	U,
	be,
	q(e ?? p.defaultLocale),
	J,
	Se,
	K
].filter((e) => e !== z), we = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = oe(r ?? p.defaultLocale, "", n), o = se(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return we(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Ee = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, De = (e, t = {}) => {
	if (!Object.values(t).some(Ee)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => re({
		value: t.children,
		children: t.children
	})
}, ke = z, Ae = (t, r) => {
	let i = De(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ae(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Me = z, Ne = z, Z = /* @__PURE__ */ new Map(), Pe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Oe,
		B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		V,
		H(e ?? p.defaultLocale),
		U,
		q(e ?? p.defaultLocale),
		J,
		Se,
		K,
		ke,
		je,
		Me,
		Ne
	].filter((e) => e !== z);
	return Z.set(n, r), r;
}, Fe = (e, t) => Te(e, t, Pe(typeof t == "object" && t ? t.locale : t)), Q = S, Ie = (e, t) => ee(e, {
	...v,
	isCookieEnabled: t
}), Le = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Re = (e, t = p?.locales, n = p?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, $ = t({
	get locale() {
		return Q() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), ze = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? Q() ?? t ?? m), [_, v] = c(e);
	e !== _ && (v(e), e && e !== h && g(e)), o(() => {
		Le();
	}, []);
	let y = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Ie(e, d);
		}
	}, [
		h,
		f,
		d
	]), b = a ?? y, x = Re(h), S = s(() => ({
		locale: x,
		setLocale: b,
		variant: n,
		disableEditor: l
	}), [
		x,
		b,
		n,
		l
	]);
	return u($.Provider, {
		value: S,
		children: r
	});
}, Be = ({ children: e, ...t }) => d(ze, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ve = (e, t) => {
	let { locale: n, variant: r } = a($) ?? {}, i = t ?? n, o = i;
	return s(() => Fe(e, i), [e.key, o]);
};
function He() {
	let e = Ve(f), t = [
		{
			name: e.e.value,
			desc: e.r.value,
			price: e.j.value
		},
		{
			name: e.f.value,
			desc: e.c.value,
			price: e.o.value
		},
		{
			name: e.g.value,
			desc: e.m.value,
			price: e.i.value
		},
		{
			name: e.l.value,
			desc: e.a.value,
			price: e.q.value
		},
		{
			name: e.s.value,
			desc: e.d.value,
			price: e.n.value
		},
		{
			name: e.h.value,
			desc: e.b.value,
			price: e.p.value
		}
	];
	return u("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((t) => d("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [d("div", { children: [u("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: t.name
			}), u("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: t.desc
			})] }), d("div", {
				className: "flex items-center justify-between",
				children: [u("span", {
					className: "text-sm font-bold text-primary",
					children: t.price
				}), u("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e.k
				})]
			})]
		}, t.name))
	});
}
function Ue({ children: e }) {
	return u(Be, {
		locale: "en",
		children: e
	});
}
function We() {
	return u(Ue, { children: u(He, {}) });
}
export { We as default };

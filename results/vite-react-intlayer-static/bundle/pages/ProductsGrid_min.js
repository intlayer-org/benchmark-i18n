import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":\"Benchmark CLI\",\"r\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"f\":\"Benchmark Cloud\",\"c\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"g\":\"Benchmark Enterprise\",\"m\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"i\":\"Contact Us\",\"l\":\"Migration Assistant\",\"a\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"s\":\"Translation QA\",\"d\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"h\":\"Bundle Optimizer\",\"b\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"k\":\"Learn More\",\"j\":\"Free\",\"o\":\"$29/mo\",\"q\":\"$99 one-time\",\"n\":\"$19/mo\",\"p\":\"$49/mo\"},\"fr\":{\"e\":\"CLI de Benchmark\",\"r\":\"Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"g\":\"Benchmark Entreprise\",\"m\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"i\":\"Contactez-nous\",\"l\":\"Assistant de Migration\",\"a\":\"Outil propulsé par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d'arrêt.\",\"s\":\"QA de Traduction\",\"d\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"h\":\"Optimiseur de Bundle\",\"b\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\",\"k\":\"En savoir plus\",\"j\":\"Gratuit\",\"o\":\"29 $/mois\",\"q\":\"99 $ une fois\",\"n\":\"19 $/mois\",\"p\":\"49 $/mois\"},\"es\":{\"e\":\"CLI de Benchmark\",\"r\":\"Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"g\":\"Benchmark para Empresas\",\"m\":\"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"i\":\"Contáctenos\",\"l\":\"Asistente de Migración\",\"a\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.\",\"s\":\"QA de Traducción\",\"d\":\"Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"h\":\"Optimizador de Bundles\",\"b\":\"Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.\",\"k\":\"Más información\",\"j\":\"Gratis\",\"o\":\"29 $/mes\",\"q\":\"99 $ pago único\",\"n\":\"19 $/mes\",\"p\":\"49 $/mes\"},\"de\":{\"e\":\"Benchmark-CLI\",\"r\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"f\":\"Benchmark-Cloud\",\"c\":\"Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.\",\"g\":\"Benchmark-Enterprise\",\"m\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.\",\"i\":\"Kontaktieren Sie uns\",\"l\":\"Migrations-Assistent\",\"a\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"s\":\"Übersetzungs-QA\",\"d\":\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"h\":\"Bundle-Optimierer\",\"b\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.\",\"k\":\"Mehr erfahren\",\"j\":\"Kostenlos\",\"o\":\"29 €/Monat\",\"q\":\"99 € einmalig\",\"n\":\"19 €/Monat\",\"p\":\"49 €/Monat\"},\"it\":{\"e\":\"CLI di benchmark\",\"r\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"f\":\"Benchmark cloud\",\"c\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.\",\"g\":\"Benchmark enterprise\",\"m\":\"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.\",\"i\":\"Contattaci\",\"l\":\"Assistente alla migrazione\",\"a\":\"Strumento basato sull’intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d’interruzione.\",\"s\":\"QA di traduzione\",\"d\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"h\":\"Ottimizzatore bundle\",\"b\":\"Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.\",\"k\":\"Scopri di più\",\"j\":\"Gratis\",\"o\":\"29 €/mese\",\"q\":\"99 € una volta\",\"n\":\"19 €/mese\",\"p\":\"49 €/mese\"},\"pt\":{\"e\":\"CLI do Benchmark\",\"r\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.\",\"f\":\"Benchmark Cloud\",\"c\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"g\":\"Benchmark Enterprise\",\"m\":\"Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"i\":\"Contate-nos\",\"l\":\"Assistente de Migração\",\"a\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\",\"s\":\"QA de Tradução\",\"d\":\"Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.\",\"h\":\"Otimizador de Bundle\",\"b\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"k\":\"Saiba mais\",\"j\":\"Grátis\",\"o\":\"29 €/mês\",\"q\":\"99 € pagamento único\",\"n\":\"19 €/mês\",\"p\":\"49 €/mês\"},\"zh\":{\"e\":\"基准测试 CLI\",\"r\":\"在终端本地运行基准测试。支持自定义配置和 CI 集成。\",\"f\":\"基准测试云\",\"c\":\"基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。\",\"g\":\"基准测试企业版\",\"m\":\"采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。\",\"i\":\"联系我们\",\"l\":\"迁移助手\",\"a\":\"由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。\",\"s\":\"翻译质量保证\",\"d\":\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\",\"h\":\"包优化器\",\"b\":\"通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。\",\"k\":\"了解更多\",\"j\":\"免费\",\"o\":\"29 美元/月\",\"q\":\"99 美元一次性\",\"n\":\"19 美元/月\",\"p\":\"49 美元/月\"},\"ja\":{\"e\":\"ベンチマーク CLI\",\"r\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。\",\"f\":\"ベンチマーククラウド\",\"c\":\"履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\",\"g\":\"ベンチマークエンタープライズ\",\"m\":\"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。\",\"i\":\"お問い合わせ\",\"l\":\"移行アシスタント\",\"a\":\"i18n ライブラリ間のコードベースをダウンタイムなしで移行するのに役立つ AI 搭載ツール。\",\"s\":\"翻訳 QA\",\"d\":\"翻訳の欠落、複数形の問題、コンテキストエラーに対する自動品質チェック。\",\"h\":\"バンドルオプティマイザー\",\"b\":\"生産向けに i18n バンドルをツリーシェイキングとコード分割で分析・最適化します。\",\"k\":\"詳細はこちら\",\"j\":\"無料\",\"o\":\"29 ドル/月\",\"q\":\"99 ドルの1回払い\",\"n\":\"19 ドル/月\",\"p\":\"49 ドル/月\"},\"ko\":{\"e\":\"벤치마크 CLI\",\"r\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.\",\"f\":\"벤치마크 클라우드\",\"c\":\"기록 추적, 알림 및 팀 대시보드를 제공하는 자동화된 클라우드 기반 벤치마킹.\",\"g\":\"벤치마크 엔터프라이즈\",\"m\":\"SSO, 감사 로그, 사용자 지정 SLA 및 전담 지원을 제공하는 온프레미스 배포.\",\"i\":\"문의하기\",\"l\":\"마이그레이션 어시스턴트\",\"a\":\"코드베이스를 가동 중지 시간 없이 i18n 라이브러리 간에 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.\",\"s\":\"번역 QA\",\"d\":\"누락된 번역, 복수화 문제 및 상황별 오류에 대한 자동화된 품질 검사.\",\"h\":\"번들 최적화기\",\"b\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"k\":\"자세히 알아보기\",\"j\":\"무료\",\"o\":\"29 달러/월\",\"q\":\"99 달러 일회성\",\"n\":\"19 달러/월\",\"p\":\"49 달러/월\"},\"ru\":{\"e\":\"CLI для бенчмаркинга\",\"r\":\"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.\",\"f\":\"Облачный бенчмаркинг\",\"c\":\"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.\",\"g\":\"Корпоративный бенчмаркинг\",\"m\":\"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"i\":\"Связаться с нами\",\"l\":\"Помощник по миграции\",\"a\":\"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"s\":\"Контроль качества перевода\",\"d\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.\",\"h\":\"Оптимизатор бандлов\",\"b\":\"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.\",\"k\":\"Узнать больше\",\"j\":\"Бесплатно\",\"o\":\"$29/мес\",\"q\":\"99 $ единоразово\",\"n\":\"$19/мес\",\"p\":\"$49/мес\"}}}")
}, u = {
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
}, d = {
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
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : s(o, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, p = /* @__PURE__ */ new WeakMap(), m = 0, h = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${h(n)}`, ee = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, te = "translation", x = "insertion", ne = "object", S = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: S,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", re = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? D : typeof e == "string" ? A(e, re) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(j) : [j(e)], N = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, ie = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, oe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, se = (e, t) => {
	if (!ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : N(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ie(e, n, t, s)).map((t) => oe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
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
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[w] : e[C];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, E(z(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, W = H, G = (e) => H, K = H, le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = E(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, q = H, J = H, Y = (e) => H, X = H, ue = (e, t = !0) => [
	U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	W,
	K,
	le,
	Y(e ?? u.defaultLocale),
	X,
	q,
	J
], de = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), fe = (e, t, n) => {
	let { locale: r, selector: i } = ce(t), a = y(r ?? u.defaultLocale, P(i), n), o = ee(e, a);
	if (o.hit) return o.content;
	let s = n ?? ue(r), c = se(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return de(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, me = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, he = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, ge = H, _e = (t, r) => {
	let i = me(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, ye = H, be = H, Q = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		W,
		G(e ?? u.defaultLocale),
		K,
		Y(e ?? u.defaultLocale),
		X,
		q,
		J,
		he,
		ge,
		ve,
		ye,
		be
	];
	return Q.set(n, r), r;
}, Se = (e, t) => fe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Ce = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, we = ((e = $) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Ce) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), Te = t({
	locale: we ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ee = (e, t) => {
	let { locale: n, variant: r } = i(Te) ?? {}, o = t ?? n, s = typeof o == "object" && o ? `${o.locale ?? ""}|${P(o)}` : o;
	return a(() => Se(e, o), [e.key, s]);
};
function De() {
	let e = Ee(l), t = [
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
	return s("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((t) => c("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [c("div", { children: [s("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: t.name
			}), s("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: t.desc
			})] }), c("div", {
				className: "flex items-center justify-between",
				children: [s("span", {
					className: "text-sm font-bold text-primary",
					children: t.price
				}), s("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e.k
				})]
			})]
		}, t.name))
	});
}
export { De as default };

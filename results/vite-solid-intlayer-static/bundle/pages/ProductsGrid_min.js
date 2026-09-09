import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "products-grid",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "Benchmark CLI",
				n: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
				j: "Free",
				f: "Benchmark Cloud",
				c: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
				g: "Benchmark Enterprise",
				m: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
				i: "Contact Us",
				l: "Migration Assistant",
				a: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
				o: "Translation QA",
				d: "Automated quality checks for missing translations, pluralization issues, and context errors.",
				h: "Bundle Optimizer",
				b: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
				k: "Learn More"
			},
			fr: {
				e: "CLI Benchmark",
				n: "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
				j: "Gratuit",
				f: "Benchmark Cloud",
				c: "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
				g: "Benchmark Enterprise",
				m: "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
				i: "Contactez-nous",
				l: "Assistant de migration",
				a: "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
				o: "QA de traduction",
				d: "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
				h: "Optimiseur de bundle",
				b: "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.",
				k: "En savoir plus"
			},
			es: {
				e: "CLI de Benchmark",
				n: "Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
				j: "Gratis",
				f: "Benchmark Cloud",
				c: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
				g: "Benchmark Enterprise",
				m: "Despliegue local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
				i: "Contáctenos",
				l: "Asistente de migración",
				a: "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n sin tiempo de inactividad.",
				o: "Control de calidad de traducción",
				d: "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
				h: "Optimizador de bundle",
				b: "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
				k: "Más información"
			},
			de: {
				e: "Benchmark CLI",
				n: "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
				j: "Kostenlos",
				f: "Benchmark Cloud",
				c: "Automatisiertes cloudbasiertes Benchmarking mit historischer Nachverfolgung, Warnungen und Team-Dashboards.",
				g: "Benchmark Enterprise",
				m: "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
				i: "Kontaktieren Sie uns",
				l: "Migrationsassistent",
				a: "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
				o: "Übersetzungs-QA",
				d: "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
				h: "Bundle-Optimierer",
				b: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
				k: "Mehr erfahren"
			},
			it: {
				e: "CLI del Benchmark",
				n: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
				j: "Gratis",
				f: "Benchmark Cloud",
				c: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
				g: "Benchmark Enterprise",
				m: "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
				i: "Contattaci",
				l: "Assistente alla migrazione",
				a: "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.",
				o: "QA delle traduzioni",
				d: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
				h: "Ottimizzatore del bundle",
				b: "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
				k: "Scopri di più"
			},
			pt: {
				e: "CLI de Benchmark",
				n: "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
				j: "Grátis",
				f: "Benchmark Cloud",
				c: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
				g: "Benchmark Enterprise",
				m: "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
				i: "Contate-nos",
				l: "Assistente de migração",
				a: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
				o: "QA de tradução",
				d: "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.",
				h: "Otimizador de bundle",
				b: "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
				k: "Saiba Mais"
			},
			zh: {
				e: "基准测试 CLI",
				n: "从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。",
				j: "免费",
				f: "基准测试云",
				c: "具有历史跟踪、警报和团队仪表板的自动化云基准测试。",
				g: "基准测试企业版",
				m: "支持 SSO、审计日志、自定义 SLA 和专用支持的本地部署。",
				i: "联系我们",
				l: "迁移助手",
				a: "人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
				o: "翻译质量保证",
				d: "针对缺失翻译、复数问题和上下文错误的自动质量检查。",
				h: "捆绑包优化器",
				b: "通过摇树优化和代码拆分，分析并优化您的生产 i18n 捆绑包。",
				k: "了解更多"
			},
			ja: {
				e: "ベンチマーク CLI",
				n: "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
				j: "無料",
				f: "ベンチマーククラウド",
				c: "履歴の追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。",
				g: "ベンチマークエンタープライズ",
				m: "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。",
				i: "お問い合わせ",
				l: "移行アシスタント",
				a: "i18nライブラリ間でコードベースをダウンタイムなしで移行するのを支援するAI搭載ツール。",
				o: "翻訳QA",
				d: "欠落している翻訳、複数形の問題、およびコンテキストエラーの自動品質チェック。",
				h: "バンドルオプティマイザー",
				b: "ツリーシェイキングとコード分割を使用して、本番用のi18nバンドルを分析および最適化します。",
				k: "詳細はこちら"
			},
			ko: {
				e: "벤치마크 CLI",
				n: "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.",
				j: "무료",
				f: "벤치마크 클라우드",
				c: "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
				g: "벤치마크 엔터프라이즈",
				m: "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 갖춘 온프레미스 배포.",
				i: "문의하기",
				l: "마이그레이션 어시스턴트",
				a: "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 기반 도구입니다.",
				o: "번역 QA",
				d: "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.",
				h: "번들 최적화 도구",
				b: "트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
				k: "자세히 알아보기"
			},
			ru: {
				e: "CLI для бенчмарков",
				n: "Запускайте бенчмарки локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
				j: "Бесплатно",
				f: "Облачный бенчмарк",
				c: "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными дашбордами.",
				g: "Бенчмарк для предприятий",
				m: "Локальное развертывание с поддержкой SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.",
				i: "Связаться с нами",
				l: "Помощник по миграции",
				a: "Инструмент на базе ИИ, который помогает переносить кодовую базу между библиотеками i18n без простоев.",
				o: "QA переводов",
				d: "Автоматизированные проверки качества на наличие отсутствующих переводов, проблем с множественным числом и контекстных ошибок.",
				h: "Оптимизатор бандла",
				b: "Анализирует и оптимизирует ваш i18n-бандл для продакшена с помощью tree-shaking и разделения кода.",
				k: "Узнать больше"
			}
		}
	}
}, l = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, u = (e) => typeof e == "string" && /^\d+$/.test(e), d = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === l.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === l.toString) return () => String(t ?? "");
		if (n === l.valueOf) return () => t;
		if (n === l.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== l.constructor && n !== l.length && !u(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, f = {
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
}, p = {
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, ee = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ee(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
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
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, N = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, P = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, F = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, R = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, ae = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? f.defaultLocale),
	J,
	G,
	K
], oe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = P(t), a = y(r ?? f.defaultLocale, F(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? ae(r), c = N(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => d({
		...n,
		value: n.children,
		children: n.children
	})
}, le = z, ue = z;
o(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = z;
o(() => X.then((e) => ({ default: e })));
var fe = z, Z = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		q(e ?? f.defaultLocale),
		J,
		G,
		K,
		ce,
		le,
		ue,
		de,
		fe
	];
	return Z.set(n, r), r;
}, me = (e, t) => se(e, t, pe(typeof t == "object" && t ? t.locale : t)), Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, he = ((e = $) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Q) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), ge = i({
	locale: () => he ?? f?.defaultLocale,
	setLocale: () => null
}), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, ye = (e, t) => {
	let n = s(ge) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return me(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, be = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), xe = n("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"mb-4 text-sm text-muted-foreground\"></p></div><div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"></span><button type=button class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Se() {
	let n = ye(c), i = [
		{
			name: n().e.value,
			desc: n().n.value,
			price: n().j.value
		},
		{
			name: n().f.value,
			desc: n().c.value,
			price: "$29/mo"
		},
		{
			name: n().g.value,
			desc: n().m.value,
			price: n().i.value
		},
		{
			name: n().l.value,
			desc: n().a.value,
			price: "$99 one-time"
		},
		{
			name: n().o.value,
			desc: n().d.value,
			price: "$19/mo"
		},
		{
			name: n().h.value,
			desc: n().b.value,
			price: "$49/mo"
		}
	];
	return (() => {
		var a = be();
		return t(a, e(r, {
			each: i,
			children: (e) => (() => {
				var r = xe(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = i.nextSibling.firstChild, c = s.nextSibling;
				return t(a, () => e.name), t(o, () => e.desc), t(s, () => e.price), t(c, () => n().k), r;
			})()
		})), a;
	})();
}
export { Se as default };

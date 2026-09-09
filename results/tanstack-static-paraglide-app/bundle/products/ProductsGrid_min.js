import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = C(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = C(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, b();
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function te(e, t) {
	return e.exec(t.href);
}
var ne = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), re = RegExp(`(?:^|;\\s*)${ne}=([^;]*)`), v = Symbol(), y = v;
function b() {
	y = v;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(b) : Promise.resolve().then(b);
}
function ae() {
	if (typeof document > "u") return;
	if (y !== v) return y;
	let e = document.cookie.match(re)?.[1];
	return y = h(e), ie(), y;
}
function oe(e) {
	return se(e);
}
function se(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var x, S;
function ce(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (x === t) return S;
	let r = _(new URL(t, "http://example.com")), i = oe(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (te(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return x = t, S = o, o;
}
function C(e) {
	let t = ce(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", D = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", O = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", k = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", A = () => "Benchmark CLI", j = () => "Benchmark Cloud", M = () => "Benchmark Enterprise", N = () => "Bundle Optimizer", P = () => "Contact Us", F = () => "Learn More", I = () => "Migration Assistant", L = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", R = () => "$19/mo", z = () => "$29/mo", B = () => "$49/mo", V = () => "$99 one-time", H = () => "Free", U = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", W = () => "Translation QA", G = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", le = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", ue = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", de = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", fe = () => "CLI Benchmark", pe = () => "Benchmark Cloud", me = () => "Benchmark Enterprise", he = () => "Optimiseur de bundle", ge = () => "Contactez-nous", _e = () => "En savoir plus", ve = () => "Assistant de migration", ye = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", be = () => "19 €/mois", xe = () => "29 €/mois", Se = () => "49 €/mois", Ce = () => "99 € une fois", we = () => "Gratuit", Te = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", Ee = () => "QA de traduction", De = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", Oe = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", ke = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", Ae = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", je = () => "CLI de Benchmark", Me = () => "Benchmark Cloud", Ne = () => "Benchmark Enterprise", Pe = () => "Optimizador de bundle", Fe = () => "Contáctanos", Ie = () => "Más información", Le = () => "Asistente de migración", Re = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", ze = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", Be = () => "QA de traducción", Ve = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", He = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", Ue = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", We = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Ge = () => "Benchmark CLI", Ke = () => "Benchmark Cloud", qe = () => "Benchmark Enterprise", Je = () => "Bundle-Optimierer", Ye = () => "Kontaktieren Sie uns", Xe = () => "Mehr erfahren", Ze = () => "Migrationsassistent", Qe = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", $e = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", et = () => "Übersetzungs-QA", tt = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", nt = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", rt = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", it = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", at = () => "CLI del Benchmark", ot = () => "Benchmark Cloud", st = () => "Benchmark Enterprise", ct = () => "Ottimizzatore del Bundle", lt = () => "Contattaci", ut = () => "Scopri di più", dt = () => "Assistente alla Migrazione", ft = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", pt = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", mt = () => "QA delle Traduzioni", ht = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", gt = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", _t = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", vt = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", yt = () => "CLI de Benchmark", bt = () => "Benchmark Cloud", xt = () => "Benchmark Enterprise", St = () => "Otimizador de Bundle", Ct = () => "Contate-nos", wt = () => "Saiba Mais", Tt = () => "Assistente de Migração", Et = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", Dt = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", Ot = () => "QA de Tradução", kt = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", At = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", jt = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", Mt = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Nt = () => "基准测试 CLI", Pt = () => "云基准测试", Ft = () => "企业级基准测试", It = () => "包优化器", Lt = () => "联系我们", Rt = () => "了解更多", zt = () => "迁移助手", Bt = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", Vt = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", Ht = () => "翻译质量保证", Ut = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", Wt = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", Gt = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Kt = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", qt = () => "Benchmark CLI", Jt = () => "Benchmark Cloud", Yt = () => "Benchmark Enterprise", Xt = () => "バンドルオプティマイザー", Zt = () => "お問い合わせ", Qt = () => "詳細を見る", $t = () => "移行アシスタント", en = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", tn = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", nn = () => "翻訳QA", rn = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", an = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", on = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", sn = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", cn = () => "Benchmark CLI", ln = () => "Benchmark Cloud", un = () => "Benchmark Enterprise", dn = () => "번들 옵티마이저", fn = () => "문의하기", pn = () => "더 알아보기", mn = () => "마이그레이션 어시스턴트", hn = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", gn = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", _n = () => "번역 QA", vn = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", yn = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", bn = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", xn = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Sn = () => "CLI для бенчмаркинга", Cn = () => "Облачный бенчмаркинг", wn = () => "Корпоративный бенчмаркинг", Tn = () => "Оптимизатор бандлов", En = () => "Связаться с нами", Dn = () => "Узнать больше", On = () => "Помощник по миграции", kn = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", An = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", jn = () => "Контроль качества перевода", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? G(e) : n === "es" ? De(e) : n === "de" ? Ve(e) : n === "it" ? tt(e) : n === "pt" ? ht(e) : n === "zh" ? kt(e) : n === "ja" ? Ut(e) : n === "ko" ? rn(e) : n === "ru" ? vn(e) : E(e);
}), Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? Oe(e) : n === "de" ? He(e) : n === "it" ? nt(e) : n === "pt" ? gt(e) : n === "zh" ? At(e) : n === "ja" ? Wt(e) : n === "ko" ? an(e) : n === "ru" ? yn(e) : D(e);
}), Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? ke(e) : n === "de" ? Ue(e) : n === "it" ? rt(e) : n === "pt" ? _t(e) : n === "zh" ? jt(e) : n === "ja" ? Gt(e) : n === "ko" ? on(e) : n === "ru" ? bn(e) : O(e);
}), Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? Ae(e) : n === "de" ? We(e) : n === "it" ? it(e) : n === "pt" ? vt(e) : n === "zh" ? Mt(e) : n === "ja" ? Kt(e) : n === "ko" ? sn(e) : n === "ru" ? xn(e) : k(e);
}), In = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? je(e) : n === "de" ? Ge(e) : n === "it" ? at(e) : n === "pt" ? yt(e) : n === "zh" ? Nt(e) : n === "ja" ? qt(e) : n === "ko" ? cn(e) : n === "ru" ? Sn(e) : A(e);
}), Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? Me(e) : n === "de" ? Ke(e) : n === "it" ? ot(e) : n === "pt" ? bt(e) : n === "zh" ? Pt(e) : n === "ja" ? Jt(e) : n === "ko" ? ln(e) : n === "ru" ? Cn(e) : j(e);
}), Rn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Ne(e) : n === "de" ? qe(e) : n === "it" ? st(e) : n === "pt" ? xt(e) : n === "zh" ? Ft(e) : n === "ja" ? Yt(e) : n === "ko" ? un(e) : n === "ru" ? wn(e) : M(e);
}), zn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? Pe(e) : n === "de" ? Je(e) : n === "it" ? ct(e) : n === "pt" ? St(e) : n === "zh" ? It(e) : n === "ja" ? Xt(e) : n === "ko" ? dn(e) : n === "ru" ? Tn(e) : N(e);
}), Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? Fe(e) : n === "de" ? Ye(e) : n === "it" ? lt(e) : n === "pt" ? Ct(e) : n === "zh" ? Lt(e) : n === "ja" ? Zt(e) : n === "ko" ? fn(e) : n === "ru" ? En(e) : P(e);
}), K = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? Ie(e) : n === "de" ? Xe(e) : n === "it" ? ut(e) : n === "pt" ? wt(e) : n === "zh" ? Rt(e) : n === "ja" ? Qt(e) : n === "ko" ? pn(e) : n === "ru" ? Dn(e) : F(e);
}), Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? Le(e) : n === "de" ? Ze(e) : n === "it" ? dt(e) : n === "pt" ? Tt(e) : n === "zh" ? zt(e) : n === "ja" ? $t(e) : n === "ko" ? mn(e) : n === "ru" ? On(e) : I(e);
}), Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ye(e) : n === "es" ? Re(e) : n === "de" ? Qe(e) : n === "it" ? ft(e) : n === "pt" ? Et(e) : n === "zh" ? Bt(e) : n === "ja" ? en(e) : n === "ko" ? hn(e) : n === "ru" ? kn(e) : L(e);
}), q = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? be(e) : R(e)), J = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? xe(e) : z(e)), Y = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? Se(e) : B(e)), X = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? Ce(e) : V(e)), Z = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? we(e) : H(e)), Un = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Te(e) : n === "es" ? ze(e) : n === "de" ? $e(e) : n === "it" ? pt(e) : n === "pt" ? Dt(e) : n === "zh" ? Vt(e) : n === "ja" ? tn(e) : n === "ko" ? gn(e) : n === "ru" ? An(e) : U(e);
}), Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ee(e) : n === "es" ? Be(e) : n === "de" ? et(e) : n === "it" ? mt(e) : n === "pt" ? Ot(e) : n === "zh" ? Ht(e) : n === "ja" ? nn(e) : n === "ko" ? _n(e) : n === "ru" ? jn(e) : W(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsGrid.tsx";
function Gn() {
	let e = [
		{
			name: In(),
			desc: Un(),
			price: Z ? Z() : "Free"
		},
		{
			name: Ln(),
			desc: Pn(),
			price: J ? J() : "$29/mo"
		},
		{
			name: Rn(),
			desc: Hn(),
			price: Bn()
		},
		{
			name: Vn(),
			desc: Mn(),
			price: X ? X() : "$99 one-time"
		},
		{
			name: Wn(),
			desc: Fn(),
			price: q ? q() : "$19/mo"
		},
		{
			name: zn(),
			desc: Nn(),
			price: Y ? Y() : "$49/mo"
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => t("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [t("div", { children: [t("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 45,
				columnNumber: 13
			}, this), t("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 48,
				columnNumber: 13
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 44,
				columnNumber: 11
			}, this), t("div", {
				className: "flex items-center justify-between",
				children: [t("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 51,
					columnNumber: 13
				}, this), t("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: K()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 52,
					columnNumber: 13
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 50,
				columnNumber: 11
			}, this)]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 40,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
var Kn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function qn({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: Kn,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsGrid.wrapper.tsx";
function Jn() {
	return t(qn, { children: t(Gn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Jn as default };

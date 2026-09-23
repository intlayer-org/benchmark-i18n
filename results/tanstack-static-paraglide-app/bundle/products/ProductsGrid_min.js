import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = x(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ce();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = m(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = x(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, v();
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function m(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = m(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function h(e) {
	return e;
}
function ie(e, t) {
	return e.exec(t.href);
}
var ae = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), oe = RegExp(`(?:^|;\\s*)${ae}=([^;]*)`), g = Symbol(), _ = g;
function v() {
	_ = g;
}
function se() {
	typeof queueMicrotask == "function" ? queueMicrotask(v) : Promise.resolve().then(v);
}
function ce() {
	if (typeof document > "u") return;
	if (_ !== g) return _;
	let e = document.cookie.match(oe)?.[1];
	return _ = m(e), se(), _;
}
function le(e) {
	return ue(e);
}
function ue(e) {
	let t = h(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && m(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), h(t);
}
var y, b;
function de(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (y === t) return b;
	let n = h(new URL(t, "http://example.com")), i = le(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (ie(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return y = t, b = o, o;
}
function x(e) {
	let t = de(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", T = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", E = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", D = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", O = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", k = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", A = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", j = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", M = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", N = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", P = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : n === "ru" ? N(e) : w(e);
}), F = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", I = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", L = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", R = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", z = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", B = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", V = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", H = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", fe = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", pe = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : F(e);
}), he = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", ge = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", _e = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", ve = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", ye = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", be = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", xe = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", Se = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Ce = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", we = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : n === "ru" ? we(e) : he(e);
}), Ee = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", De = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Oe = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", ke = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Ae = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", je = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Me = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Ne = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Pe = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Fe = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : n === "ru" ? Fe(e) : Ee(e);
}), Le = () => "Benchmark CLI", Re = () => "CLI Benchmark", ze = () => "CLI de Benchmark", Be = () => "Benchmark CLI", Ve = () => "CLI del Benchmark", He = () => "CLI de Benchmark", Ue = () => "基准测试 CLI", We = () => "Benchmark CLI", Ge = () => "Benchmark CLI", Ke = () => "CLI для бенчмаркинга", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : n === "ru" ? Ke(e) : Le(e);
}), Je = () => "Benchmark Cloud", Ye = () => "Benchmark Cloud", Xe = () => "Benchmark Cloud", Ze = () => "Benchmark Cloud", Qe = () => "Benchmark Cloud", $e = () => "Benchmark Cloud", et = () => "云基准测试", tt = () => "Benchmark Cloud", nt = () => "Benchmark Cloud", rt = () => "Облачный бенчмаркинг", it = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : n === "ru" ? rt(e) : Je(e);
}), at = () => "Benchmark Enterprise", ot = () => "Benchmark Enterprise", st = () => "Benchmark Enterprise", ct = () => "Benchmark Enterprise", lt = () => "Benchmark Enterprise", ut = () => "Benchmark Enterprise", dt = () => "企业级基准测试", ft = () => "Benchmark Enterprise", pt = () => "Benchmark Enterprise", mt = () => "Корпоративный бенчмаркинг", ht = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ot(e) : n === "es" ? st(e) : n === "de" ? ct(e) : n === "it" ? lt(e) : n === "pt" ? ut(e) : n === "zh" ? dt(e) : n === "ja" ? ft(e) : n === "ko" ? pt(e) : n === "ru" ? mt(e) : at(e);
}), gt = () => "Bundle Optimizer", _t = () => "Optimiseur de bundle", vt = () => "Optimizador de bundle", yt = () => "Bundle-Optimierer", bt = () => "Ottimizzatore del Bundle", xt = () => "Otimizador de Bundle", St = () => "包优化器", Ct = () => "バンドルオプティマイザー", wt = () => "번들 옵티마이저", Tt = () => "Оптимизатор бандлов", Et = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _t(e) : n === "es" ? vt(e) : n === "de" ? yt(e) : n === "it" ? bt(e) : n === "pt" ? xt(e) : n === "zh" ? St(e) : n === "ja" ? Ct(e) : n === "ko" ? wt(e) : n === "ru" ? Tt(e) : gt(e);
}), Dt = () => "Contact Us", Ot = () => "Contactez-nous", kt = () => "Contáctanos", At = () => "Kontaktieren Sie uns", jt = () => "Contattaci", Mt = () => "Contate-nos", Nt = () => "联系我们", Pt = () => "お問い合わせ", Ft = () => "문의하기", It = () => "Связаться с нами", Lt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : n === "ru" ? It(e) : Dt(e);
}), Rt = () => "Learn More", zt = () => "En savoir plus", Bt = () => "Más información", Vt = () => "Mehr erfahren", Ht = () => "Scopri di più", Ut = () => "Saiba Mais", Wt = () => "了解更多", Gt = () => "詳細を見る", Kt = () => "더 알아보기", qt = () => "Узнать больше", Jt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zt(e) : n === "es" ? Bt(e) : n === "de" ? Vt(e) : n === "it" ? Ht(e) : n === "pt" ? Ut(e) : n === "zh" ? Wt(e) : n === "ja" ? Gt(e) : n === "ko" ? Kt(e) : n === "ru" ? qt(e) : Rt(e);
}), Yt = () => "Migration Assistant", Xt = () => "Assistant de migration", Zt = () => "Asistente de migración", Qt = () => "Migrationsassistent", $t = () => "Assistente alla Migrazione", en = () => "Assistente de Migração", tn = () => "迁移助手", nn = () => "移行アシスタント", rn = () => "마이그레이션 어시스턴트", an = () => "Помощник по миграции", on = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xt(e) : n === "es" ? Zt(e) : n === "de" ? Qt(e) : n === "it" ? $t(e) : n === "pt" ? en(e) : n === "zh" ? tn(e) : n === "ja" ? nn(e) : n === "ko" ? rn(e) : n === "ru" ? an(e) : Yt(e);
}), sn = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", cn = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", ln = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", un = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", dn = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", fn = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", pn = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", mn = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", hn = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", gn = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", _n = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? cn(e) : n === "es" ? ln(e) : n === "de" ? un(e) : n === "it" ? dn(e) : n === "pt" ? fn(e) : n === "zh" ? pn(e) : n === "ja" ? mn(e) : n === "ko" ? hn(e) : n === "ru" ? gn(e) : sn(e);
}), U = () => "$19/mo", vn = () => "19 €/mois", yn = U, bn = U, xn = U, Sn = U, Cn = U, wn = U, Tn = U, En = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vn(e) : n === "es" ? yn(e) : n === "de" ? bn(e) : n === "it" ? xn(e) : n === "pt" ? Sn(e) : n === "zh" ? Cn(e) : n === "ja" ? wn(e) : n === "ko" ? Tn(e) : n === "ru" ? En(e) : U(e);
}), G = () => "$29/mo", Dn = () => "29 €/mois", On = G, kn = G, An = G, jn = G, Mn = G, Nn = G, Pn = G, Fn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Dn(e) : n === "es" ? On(e) : n === "de" ? kn(e) : n === "it" ? An(e) : n === "pt" ? jn(e) : n === "zh" ? Mn(e) : n === "ja" ? Nn(e) : n === "ko" ? Pn(e) : n === "ru" ? Fn(e) : G(e);
}), q = () => "$49/mo", In = () => "49 €/mois", Ln = q, Rn = q, zn = q, Bn = q, Vn = q, Hn = q, Un = q, Wn = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : q(e);
}), Y = () => "$99 one-time", Gn = () => "99 € une fois", Kn = Y, qn = Y, Jn = Y, Yn = Y, Xn = Y, Zn = Y, Qn = Y, $n = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : n === "ru" ? $n(e) : Y(e);
}), Z = () => "Free", er = () => "Gratuit", tr = Z, nr = Z, rr = Z, ir = Z, ar = Z, or = Z, sr = Z, cr = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : n === "ru" ? cr(e) : Z(e);
}), lr = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", ur = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", dr = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", fr = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", pr = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", mr = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", $ = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", hr = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", gr = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", _r = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? $(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : lr(e);
}), yr = () => "Translation QA", br = () => "QA de traduction", xr = () => "QA de traducción", Sr = () => "Übersetzungs-QA", Cr = () => "QA delle Traduzioni", wr = () => "QA de Tradução", Tr = () => "翻译质量保证", Er = () => "翻訳QA", Dr = () => "번역 QA", Or = () => "Контроль качества перевода", kr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? br(e) : n === "es" ? xr(e) : n === "de" ? Sr(e) : n === "it" ? Cr(e) : n === "pt" ? wr(e) : n === "zh" ? Tr(e) : n === "ja" ? Er(e) : n === "ko" ? Dr(e) : n === "ru" ? Or(e) : yr(e);
});
function Ar() {
	let e = [
		{
			name: qe(),
			desc: vr(),
			price: Q ? Q() : "Free"
		},
		{
			name: it(),
			desc: Te(),
			price: K ? K() : "$29/mo"
		},
		{
			name: ht(),
			desc: _n(),
			price: Lt()
		},
		{
			name: on(),
			desc: P(),
			price: X ? X() : "$99 one-time"
		},
		{
			name: kr(),
			desc: Ie(),
			price: W ? W() : "$19/mo"
		},
		{
			name: Et(),
			desc: me(),
			price: J ? J() : "$49/mo"
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => n("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [n("div", { children: [t("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}), t("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			})] }), n("div", {
				className: "flex items-center justify-between",
				children: [t("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}), t("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: Jt()
				})]
			})]
		}, e.name))
	});
}
p("en", { reload: !1 });
function jr({ children: n }) {
	return t(e, { children: n });
}
function Mr() {
	return t(jr, { children: t(Ar, {}) });
}
export { Mr as default };

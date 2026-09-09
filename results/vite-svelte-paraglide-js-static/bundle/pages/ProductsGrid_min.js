import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
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
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = j(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), i = E(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", F = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", I = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", L = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", R = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", z = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", B = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", V = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", H = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", U = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Benchmark CLI", K = () => "Benchmark CLI", q = () => "CLI de Benchmark", J = () => "Benchmark CLI", Y = () => "CLI del Benchmark", X = () => "Benchmark CLI", Z = () => "基准测试 CLI", Q = () => "Benchmark CLI", ne = () => "Benchmark CLI", re = () => "Benchmark CLI", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : G(e);
}), ae = () => "Free", oe = () => "Gratuit", se = () => "Gratis", ce = () => "Kostenlos", le = () => "Gratis", ue = () => "Grátis", de = () => "免费", fe = () => "無料", pe = () => "Free", me = () => "Бесплатно", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", _e = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", ve = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", ye = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", be = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", xe = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Se = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", Ce = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", we = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Te = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Benchmark Cloud", Oe = () => "Benchmark Cloud", ke = () => "Benchmark Cloud", Ae = () => "Benchmark Cloud", je = () => "Benchmark Cloud", Me = () => "Benchmark Cloud", Ne = () => "基准测试云", Pe = () => "Benchmark Cloud", Fe = () => "Benchmark Cloud", Ie = () => "Benchmark Cloud", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Re = () => "$29/mo", ze = () => "29 €/mois", Be = () => "29 $/mes", Ve = () => "29 $/Monat", He = () => "29 $/mese", Ue = () => "29 $/mês", We = () => "29 $/月", Ge = () => "29ドル/月", Ke = () => "$29/mo", qe = () => "29 $/мес", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : Re(e);
}), Ye = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Xe = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", Ze = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", Qe = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", $e = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", et = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", tt = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", nt = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", rt = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", it = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : n === "ru" ? it(e) : Ye(e);
}), ot = () => "Benchmark Enterprise", st = () => "Benchmark Enterprise", ct = () => "Benchmark Enterprise", lt = () => "Benchmark Enterprise", ut = () => "Benchmark Enterprise", dt = () => "Benchmark Enterprise", ft = () => "基准测试企业版", pt = () => "Benchmark Enterprise", mt = () => "Benchmark Enterprise", ht = () => "Benchmark Enterprise", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : n === "ru" ? ht(e) : ot(e);
}), _t = () => "Contact Us", vt = () => "Nous contacter", yt = () => "Contáctanos", bt = () => "Kontaktieren Sie uns", xt = () => "Contattaci", St = () => "Contate-nos", Ct = () => "联系我们", wt = () => "お問い合わせ", Tt = () => "Contact Us", Et = () => "Связаться с нами", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : n === "ru" ? Et(e) : _t(e);
}), Ot = () => "Learn More", kt = () => "En savoir plus", At = () => "Más información", jt = () => "Mehr erfahren", Mt = () => "Scopri di più", Nt = () => "Saiba Mais", Pt = () => "了解更多", Ft = () => "詳細はこちら", It = () => "Learn More", Lt = () => "Узнать больше", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : n === "ru" ? Lt(e) : Ot(e);
}), zt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Bt = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", Vt = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", Ht = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", Ut = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", Wt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", Gt = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", Kt = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", qt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Jt = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "Migration Assistant", Zt = () => "Assistant de migration", Qt = () => "Asistente de migración", $t = () => "Migrationsassistent", en = () => "Assistente alla migrazione", tn = () => "Assistente de migração", nn = () => "迁移助手", rn = () => "移行アシスタント", an = () => "Migration Assistant", on = () => "Помощник по миграции", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "$99 one-time", ln = () => "99 € (unique)", un = () => "99 $ pago único", dn = () => "Einmalig 99 $", fn = () => "99 $ una tantum", pn = () => "99 $ taxa única", mn = () => "99 $ 一次性费用", hn = () => "99ドル（一回限り）", gn = () => "$99 one-time", _n = () => "99 $ (разово)", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", bn = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", xn = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", Sn = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", Cn = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", wn = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", Tn = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", En = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", Dn = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", On = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "Bundle Optimizer", jn = () => "Optimiseur de bundle", Mn = () => "Optimizador de bundle", Nn = () => "Bundle-Optimierer", Pn = () => "Ottimizzatore del bundle", Fn = () => "Otimizador de bundle", In = () => "包优化器", Ln = () => "バンドルオプティマイザー", Rn = () => "Bundle Optimizer", zn = () => "Оптимизатор бандла", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "$49/mo", Hn = () => "49 €/mois", Un = () => "49 $/mes", Wn = () => "49 $/Monat", Gn = () => "49 $/mese", Kn = () => "49 $/mês", qn = () => "49 $/月", Jn = () => "49ドル/月", Yn = () => "$49/mo", Xn = () => "49 $/мес", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", $n = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", er = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", tr = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", nr = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", rr = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", ir = () => "自动检查翻译缺失、复数问题和上下文错误。", ar = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", or = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", sr = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "Translation QA", ur = () => "QA des traductions", dr = () => "QA de traducción", fr = () => "Übersetzungs-QA", pr = () => "QA delle traduzioni", mr = () => "QA de tradução", $ = () => "翻译 QA", hr = () => "翻訳QA", gr = () => "Translation QA", _r = () => "QA переводов", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? $(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : lr(e);
}), yr = () => "$19/mo", br = () => "19 €/mois", xr = () => "19 $/mes", Sr = () => "19 $/Monat", Cr = () => "19 $/mese", wr = () => "19 $/mês", Tr = () => "19 $/月", Er = () => "19ドル/月", Dr = () => "$19/mo", Or = () => "19 $/мес", kr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? br(e) : n === "es" ? xr(e) : n === "de" ? Sr(e) : n === "it" ? Cr(e) : n === "pt" ? wr(e) : n === "zh" ? Tr(e) : n === "ja" ? Er(e) : n === "ko" ? Dr(e) : n === "ru" ? Or(e) : yr(e);
}), Ar = [
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
];
function jr(e) {
	return Ar.includes(e);
}
var Mr = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function Nr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!jr(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Mr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Pr = n(typeof window < "u" ? window.location.pathname : "/en"), Fr = t(Pr, (e) => Nr(e)), Ir = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div></div>"), Lr = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function Rr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Fr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: ie(),
			desc: W(),
			price: he()
		},
		{
			name: Le(),
			desc: Ee(),
			price: Je()
		},
		{
			name: gt(),
			desc: at(),
			price: Dt()
		},
		{
			name: sn(),
			desc: Yt(),
			price: vn()
		},
		{
			name: vr(),
			desc: cr(),
			price: kr()
		},
		{
			name: Bn(),
			desc: kn(),
			price: Zn()
		}
	]));
	var c = Lr();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Ir(), i = e.child(r), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0);
		e.reset(i);
		var l = e.sibling(i, 2), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0);
		e.reset(l), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).name), e.set_text(c, e.get(n).desc), e.set_text(d, e.get(n).price), e.set_text(p, t);
		}, [() => Rt()]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Rr as default };

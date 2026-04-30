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
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], c = s;
	!m && typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
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
	let l = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Learn More", T = () => "En savoir plus", E = () => "Más información", D = () => "Mehr erfahren", O = () => "Scopri di più", k = () => "Saiba Mais", A = () => "了解更多", j = () => "詳細はこちら", M = () => "Learn More", N = () => "Узнать больше", P = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Benchmark CLI", I = () => "Benchmark CLI", L = () => "CLI de Benchmark", R = () => "Benchmark CLI", z = () => "CLI del Benchmark", B = () => "Benchmark CLI", V = () => "基准测试 CLI", H = () => "Benchmark CLI", U = () => "Benchmark CLI", W = () => "Benchmark CLI", G = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", q = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", J = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", Y = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", X = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", Z = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", Q = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", ne = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", re = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", ie = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Free", se = () => "Gratuit", ce = () => "Gratis", le = () => "Kostenlos", ue = () => "Gratis", de = () => "Grátis", fe = () => "免费", pe = () => "無料", me = () => "Free", he = () => "Бесплатно", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Benchmark Cloud", ve = () => "Benchmark Cloud", ye = () => "Benchmark Cloud", be = () => "Benchmark Cloud", xe = () => "Benchmark Cloud", Se = () => "Benchmark Cloud", Ce = () => "基准测试云", we = () => "Benchmark Cloud", Te = () => "Benchmark Cloud", Ee = () => "Benchmark Cloud", De = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", ke = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", Ae = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", je = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", Me = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Ne = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Pe = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", Fe = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", Ie = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Le = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "$29/mo", Be = () => "29 €/mois", Ve = () => "29 $/mes", He = () => "29 $/Monat", Ue = () => "29 $/mese", We = () => "29 $/mês", Ge = () => "29 $/月", Ke = () => "29ドル/月", qe = () => "$29/mo", Je = () => "29 $/мес", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Benchmark Enterprise", Ze = () => "Benchmark Enterprise", Qe = () => "Benchmark Enterprise", $e = () => "Benchmark Enterprise", et = () => "Benchmark Enterprise", tt = () => "Benchmark Enterprise", nt = () => "基准测试企业版", rt = () => "Benchmark Enterprise", it = () => "Benchmark Enterprise", at = () => "Benchmark Enterprise", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", ct = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", lt = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", ut = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", dt = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", ft = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", pt = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", mt = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", ht = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", gt = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "Contact Us", yt = () => "Nous contacter", bt = () => "Contáctanos", xt = () => "Kontaktieren Sie uns", St = () => "Contattaci", Ct = () => "Contate-nos", wt = () => "联系我们", Tt = () => "お問い合わせ", Et = () => "Contact Us", Dt = () => "Связаться с нами", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Migration Assistant", At = () => "Assistant de migration", jt = () => "Asistente de migración", Mt = () => "Migrationsassistent", Nt = () => "Assistente alla migrazione", Pt = () => "Assistente de migração", Ft = () => "迁移助手", It = () => "移行アシスタント", Lt = () => "Migration Assistant", Rt = () => "Помощник по миграции", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Vt = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", Ht = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", Ut = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", Wt = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", Gt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", Kt = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", qt = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", Jt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Yt = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "$99 one-time", Qt = () => "99 € (unique)", $t = () => "99 $ pago único", en = () => "Einmalig 99 $", tn = () => "99 $ una tantum", nn = () => "99 $ taxa única", rn = () => "99 $ 一次性费用", an = () => "99ドル（一回限り）", on = () => "$99 one-time", sn = () => "99 $ (разово)", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Translation QA", un = () => "QA des traductions", dn = () => "QA de traducción", fn = () => "Übersetzungs-QA", pn = () => "QA delle traduzioni", mn = () => "QA de tradução", hn = () => "翻译 QA", gn = () => "翻訳QA", _n = () => "Translation QA", vn = () => "QA переводов", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", xn = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", Sn = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Cn = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", wn = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Tn = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", En = () => "自动检查翻译缺失、复数问题和上下文错误。", Dn = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", On = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", kn = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "$19/mo", Mn = () => "19 €/mois", Nn = () => "19 $/mes", Pn = () => "19 $/Monat", Fn = () => "19 $/mese", In = () => "19 $/mês", Ln = () => "19 $/月", Rn = () => "19ドル/月", zn = () => "$19/mo", Bn = () => "19 $/мес", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Bundle Optimizer", Un = () => "Optimiseur de bundle", Wn = () => "Optimizador de bundle", Gn = () => "Bundle-Optimierer", Kn = () => "Ottimizzatore del bundle", qn = () => "Otimizador de bundle", Jn = () => "包优化器", Yn = () => "バンドルオプティマイザー", Xn = () => "Bundle Optimizer", Zn = () => "Оптимизатор бандла", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", er = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", tr = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", nr = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", rr = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", ir = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", ar = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", or = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", sr = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", $ = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : $(e);
}), lr = () => "$49/mo", ur = () => "49 €/mois", dr = () => "49 $/mes", fr = () => "49 $/Monat", pr = () => "49 $/mese", mr = () => "49 $/mês", hr = () => "49 $/月", gr = () => "49ドル/月", _r = () => "$49/mo", vr = () => "49 $/мес", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? lr(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
}), br = [
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
function xr(e) {
	return br.includes(e);
}
var Sr = new Set([
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
function Cr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!xr(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Sr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var wr = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => Cr(e)), Tr = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div></div>"), Er = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function Dr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(wr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: G(),
			desc: ae(),
			price: ge()
		},
		{
			name: De(),
			desc: Re(),
			price: Ye()
		},
		{
			name: ot(),
			desc: _t(),
			price: Ot()
		},
		{
			name: zt(),
			desc: Xt(),
			price: cn()
		},
		{
			name: yn(),
			desc: An(),
			price: Vn()
		},
		{
			name: Qn(),
			desc: cr(),
			price: yr()
		}
	]));
	var c = Er();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Tr(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), c = e.child(s, !0);
		e.reset(s), e.reset(i);
		var l = e.sibling(i, 2), u = e.child(l), d = e.child(u, !0);
		e.reset(u);
		var f = e.sibling(u, 2), p = e.child(f, !0);
		e.reset(f), e.reset(l), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).name), e.set_text(c, e.get(n).desc), e.set_text(d, e.get(n).price), e.set_text(p, t);
		}, [() => P()]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Dr as default };

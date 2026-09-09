import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, ee(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ee = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!u && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = v(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var k, A;
function j(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = v(new URL(t, "http://example.com")), r = D(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (y(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", I = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", L = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", R = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", z = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", B = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", V = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", H = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", U = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", W = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Benchmark CLI", q = () => "Benchmark CLI", J = () => "CLI de Benchmark", Y = () => "Benchmark CLI", X = () => "CLI del Benchmark", Z = () => "Benchmark CLI", Q = () => "基准测试 CLI", ne = () => "Benchmark CLI", re = () => "Benchmark CLI", ie = () => "Benchmark CLI", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : K(e);
}), oe = () => "Free", se = () => "Gratuit", ce = () => "Gratis", le = () => "Kostenlos", ue = () => "Gratis", de = () => "Grátis", fe = () => "免费", pe = () => "無料", me = () => "Free", he = () => "Бесплатно", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", ve = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", ye = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", be = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", xe = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Se = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Ce = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", we = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", Te = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Ee = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", De = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Benchmark Cloud", ke = () => "Benchmark Cloud", Ae = () => "Benchmark Cloud", je = () => "Benchmark Cloud", Me = () => "Benchmark Cloud", Ne = () => "Benchmark Cloud", Pe = () => "基准测试云", Fe = () => "Benchmark Cloud", Ie = () => "Benchmark Cloud", Le = () => "Benchmark Cloud", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "$29/mo", Be = () => "29 €/mois", Ve = () => "29 $/mes", He = () => "29 $/Monat", Ue = () => "29 $/mese", We = () => "29 $/mês", Ge = () => "29 $/月", Ke = () => "29ドル/月", qe = () => "$29/mo", Je = () => "29 $/мес", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Ze = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", Qe = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", $e = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", et = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", tt = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", nt = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", rt = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", it = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", at = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "Benchmark Enterprise", ct = () => "Benchmark Enterprise", lt = () => "Benchmark Enterprise", ut = () => "Benchmark Enterprise", dt = () => "Benchmark Enterprise", ft = () => "Benchmark Enterprise", pt = () => "基准测试企业版", mt = () => "Benchmark Enterprise", ht = () => "Benchmark Enterprise", gt = () => "Benchmark Enterprise", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Contact Us", yt = () => "Nous contacter", bt = () => "Contáctanos", xt = () => "Kontaktieren Sie uns", St = () => "Contattaci", Ct = () => "Contate-nos", wt = () => "联系我们", Tt = () => "お問い合わせ", Et = () => "Contact Us", Dt = () => "Связаться с нами", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "Learn More", At = () => "En savoir plus", jt = () => "Más información", Mt = () => "Mehr erfahren", Nt = () => "Scopri di più", Pt = () => "Saiba Mais", Ft = () => "了解更多", It = () => "詳細はこちら", Lt = () => "Learn More", Rt = () => "Узнать больше", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Vt = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", Ht = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", Ut = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", Wt = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", Gt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", Kt = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", qt = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", Jt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", Yt = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "Migration Assistant", Qt = () => "Assistant de migration", $t = () => "Asistente de migración", en = () => "Migrationsassistent", tn = () => "Assistente alla migrazione", nn = () => "Assistente de migração", rn = () => "迁移助手", an = () => "移行アシスタント", on = () => "Migration Assistant", sn = () => "Помощник по миграции", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "$99 one-time", un = () => "99 € (unique)", dn = () => "99 $ pago único", fn = () => "Einmalig 99 $", pn = () => "99 $ una tantum", mn = () => "99 $ taxa única", hn = () => "99 $ 一次性费用", gn = () => "99ドル（一回限り）", _n = () => "$99 one-time", vn = () => "99 $ (разово)", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", xn = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", Sn = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", Cn = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", wn = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", Tn = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", En = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", Dn = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", On = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", kn = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "Bundle Optimizer", Mn = () => "Optimiseur de bundle", Nn = () => "Optimizador de bundle", Pn = () => "Bundle-Optimierer", Fn = () => "Ottimizzatore del bundle", In = () => "Otimizador de bundle", Ln = () => "包优化器", Rn = () => "バンドルオプティマイザー", zn = () => "Bundle Optimizer", Bn = () => "Оптимизатор бандла", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = () => "$49/mo", Un = () => "49 €/mois", Wn = () => "49 $/mes", Gn = () => "49 $/Monat", Kn = () => "49 $/mese", qn = () => "49 $/mês", Jn = () => "49 $/月", Yn = () => "49ドル/月", Xn = () => "$49/mo", Zn = () => "49 $/мес", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), $n = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", er = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", tr = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", nr = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", rr = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", ir = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", ar = () => "自动检查翻译缺失、复数问题和上下文错误。", or = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", sr = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", cr = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : n === "ru" ? cr(e) : $n(e);
}), ur = () => "Translation QA", dr = () => "QA des traductions", fr = () => "QA de traducción", pr = () => "Übersetzungs-QA", mr = () => "QA delle traduzioni", $ = () => "QA de tradução", hr = () => "翻译 QA", gr = () => "翻訳QA", _r = () => "Translation QA", vr = () => "QA переводов", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? $(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : ur(e);
}), br = () => "$19/mo", xr = () => "19 €/mois", Sr = () => "19 $/mes", Cr = () => "19 $/Monat", wr = () => "19 $/mese", Tr = () => "19 $/mês", Er = () => "19 $/月", Dr = () => "19ドル/月", Or = () => "$19/mo", kr = () => "19 $/мес", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), Mr = n("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"mb-4 text-sm text-muted-foreground\"></p></div><div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"></span><button type=button class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Nr() {
	let n = () => [
		{
			name: ae(),
			desc: G(),
			price: ge()
		},
		{
			name: Re(),
			desc: De(),
			price: Ye()
		},
		{
			name: _t(),
			desc: ot(),
			price: Ot()
		},
		{
			name: cn(),
			desc: Xt(),
			price: yn()
		},
		{
			name: yr(),
			desc: lr(),
			price: Ar()
		},
		{
			name: Vn(),
			desc: An(),
			price: Qn()
		}
	];
	return (() => {
		var i = jr();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Mr(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling.firstChild, s = o.nextSibling;
				return t(i, () => e.name), t(a, () => e.desc), t(o, () => e.price), t(s, () => zt()), n;
			})()
		})), i;
	})();
}
export { Nr as default };

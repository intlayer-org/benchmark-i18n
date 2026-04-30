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
], l = [], u, d;
function ee(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Learn More", E = () => "En savoir plus", D = () => "Más información", O = () => "Mehr erfahren", k = () => "Scopri di più", A = () => "Saiba Mais", j = () => "了解更多", M = () => "詳細はこちら", N = () => "Learn More", P = () => "Узнать больше", F = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Benchmark CLI", L = () => "Benchmark CLI", R = () => "CLI de Benchmark", z = () => "Benchmark CLI", B = () => "CLI del Benchmark", V = () => "Benchmark CLI", H = () => "基准测试 CLI", U = () => "Benchmark CLI", W = () => "Benchmark CLI", G = () => "Benchmark CLI", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", J = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", Y = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", X = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", Z = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", Q = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", ne = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", re = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", ie = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", ae = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Free", ce = () => "Gratuit", le = () => "Gratis", ue = () => "Kostenlos", de = () => "Gratis", fe = () => "Grátis", pe = () => "免费", me = () => "無料", he = () => "Free", ge = () => "Бесплатно", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Benchmark Cloud", ye = () => "Benchmark Cloud", be = () => "Benchmark Cloud", xe = () => "Benchmark Cloud", Se = () => "Benchmark Cloud", Ce = () => "Benchmark Cloud", we = () => "基准测试云", Te = () => "Benchmark Cloud", Ee = () => "Benchmark Cloud", De = () => "Benchmark Cloud", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Ae = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", je = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", Me = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", Ne = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Pe = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Fe = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", Ie = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", Le = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Re = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "$29/mo", Ve = () => "29 €/mois", He = () => "29 $/mes", Ue = () => "29 $/Monat", We = () => "29 $/mese", Ge = () => "29 $/mês", Ke = () => "29 $/月", qe = () => "29ドル/月", Je = () => "$29/mo", Ye = () => "29 $/мес", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Benchmark Enterprise", Qe = () => "Benchmark Enterprise", $e = () => "Benchmark Enterprise", et = () => "Benchmark Enterprise", tt = () => "Benchmark Enterprise", nt = () => "Benchmark Enterprise", rt = () => "基准测试企业版", it = () => "Benchmark Enterprise", at = () => "Benchmark Enterprise", ot = () => "Benchmark Enterprise", st = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", lt = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", ut = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", dt = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", ft = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", pt = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", mt = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", ht = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", gt = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", _t = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "Contact Us", bt = () => "Nous contacter", $ = () => "Contáctanos", xt = () => "Kontaktieren Sie uns", St = () => "Contattaci", Ct = () => "Contate-nos", wt = () => "联系我们", Tt = () => "お問い合わせ", Et = () => "Contact Us", Dt = () => "Связаться с нами", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? $(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
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
}), $n = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", er = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", tr = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", nr = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", rr = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", ir = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", ar = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", or = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", sr = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", cr = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), ur = () => "$49/mo", dr = () => "49 €/mois", fr = () => "49 $/mes", pr = () => "49 $/Monat", mr = () => "49 $/mese", hr = () => "49 $/mês", gr = () => "49 $/月", _r = () => "49ドル/月", vr = () => "$49/mo", yr = () => "49 $/мес", br = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ur(e) : n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : yr(e);
}), xr = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), Sr = n("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"mb-4 text-sm text-muted-foreground\"></p></div><div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"></span><button type=button class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Cr() {
	let n = () => [
		{
			name: K(),
			desc: oe(),
			price: _e()
		},
		{
			name: Oe(),
			desc: ze(),
			price: Xe()
		},
		{
			name: st(),
			desc: vt(),
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
			desc: lr(),
			price: br()
		}
	];
	return (() => {
		var i = xr();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Sr(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling.firstChild, s = o.nextSibling;
				return t(i, () => e.name), t(a, () => e.desc), t(o, () => e.price), t(s, () => F()), n;
			})()
		})), i;
	})();
}
export { Cr as default };

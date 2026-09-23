import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = T(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ce();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var ne = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = T(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, re = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function v(e) {
	return e;
}
function ae(e, t) {
	return e.exec(t.href);
}
var oe = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${oe}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function se() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function ce() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = _(e), se(), x;
}
function le(e) {
	return ue(e);
}
function ue(e) {
	let t = v(typeof e == "string" ? new URL(e, re()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var C, w;
function de(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (C === t) return w;
	let n = v(new URL(t, "http://example.com")), r = le(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (ae(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return C = t, w = a, a;
}
function T(e) {
	let t = de(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", k = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", A = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", j = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", M = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", N = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", P = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", F = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", I = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", L = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", R = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : n === "ru" ? L(e) : O(e);
}), z = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", B = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", V = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", H = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", fe = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", pe = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", me = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", he = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", ge = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", _e = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : n === "ru" ? _e(e) : z(e);
}), ye = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", be = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", xe = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", Se = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", Ce = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", we = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Te = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", Ee = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", De = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", Oe = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : n === "ru" ? Oe(e) : ye(e);
}), Ae = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", je = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Me = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Ne = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Pe = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Fe = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Ie = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Le = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Re = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", ze = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : Ae(e);
}), Ve = () => "Benchmark CLI", He = () => "CLI Benchmark", Ue = () => "CLI de Benchmark", We = () => "Benchmark CLI", Ge = () => "CLI del Benchmark", Ke = () => "CLI de Benchmark", qe = () => "基准测试 CLI", Je = () => "Benchmark CLI", Ye = () => "Benchmark CLI", Xe = () => "CLI для бенчмаркинга", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Ve(e);
}), Qe = () => "Benchmark Cloud", $e = () => "Benchmark Cloud", et = () => "Benchmark Cloud", tt = () => "Benchmark Cloud", nt = () => "Benchmark Cloud", rt = () => "Benchmark Cloud", it = () => "云基准测试", at = () => "Benchmark Cloud", ot = () => "Benchmark Cloud", st = () => "Облачный бенчмаркинг", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : n === "ru" ? st(e) : Qe(e);
}), lt = () => "Benchmark Enterprise", ut = () => "Benchmark Enterprise", dt = () => "Benchmark Enterprise", ft = () => "Benchmark Enterprise", pt = () => "Benchmark Enterprise", mt = () => "Benchmark Enterprise", ht = () => "企业级基准测试", gt = () => "Benchmark Enterprise", _t = () => "Benchmark Enterprise", vt = () => "Корпоративный бенчмаркинг", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : n === "ru" ? vt(e) : lt(e);
}), bt = () => "Bundle Optimizer", xt = () => "Optimiseur de bundle", St = () => "Optimizador de bundle", Ct = () => "Bundle-Optimierer", wt = () => "Ottimizzatore del Bundle", Tt = () => "Otimizador de Bundle", Et = () => "包优化器", Dt = () => "バンドルオプティマイザー", Ot = () => "번들 옵티마이저", kt = () => "Оптимизатор бандлов", At = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : n === "ru" ? kt(e) : bt(e);
}), jt = () => "Contact Us", Mt = () => "Contactez-nous", Nt = () => "Contáctanos", Pt = () => "Kontaktieren Sie uns", Ft = () => "Contattaci", It = () => "Contate-nos", Lt = () => "联系我们", Rt = () => "お問い合わせ", zt = () => "문의하기", Bt = () => "Связаться с нами", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : n === "ru" ? Bt(e) : jt(e);
}), Ht = () => "Learn More", Ut = () => "En savoir plus", Wt = () => "Más información", Gt = () => "Mehr erfahren", Kt = () => "Scopri di più", qt = () => "Saiba Mais", Jt = () => "了解更多", Yt = () => "詳細を見る", Xt = () => "더 알아보기", Zt = () => "Узнать больше", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : n === "ru" ? Zt(e) : Ht(e);
}), $t = () => "Migration Assistant", en = () => "Assistant de migration", tn = () => "Asistente de migración", nn = () => "Migrationsassistent", rn = () => "Assistente alla Migrazione", an = () => "Assistente de Migração", on = () => "迁移助手", sn = () => "移行アシスタント", cn = () => "마이그레이션 어시스턴트", ln = () => "Помощник по миграции", un = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : n === "ru" ? ln(e) : $t(e);
}), dn = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", fn = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", pn = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", mn = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", hn = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", gn = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", _n = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", vn = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", yn = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", bn = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", xn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? fn(e) : n === "es" ? pn(e) : n === "de" ? mn(e) : n === "it" ? hn(e) : n === "pt" ? gn(e) : n === "zh" ? _n(e) : n === "ja" ? vn(e) : n === "ko" ? yn(e) : n === "ru" ? bn(e) : dn(e);
}), U = () => "$19/mo", Sn = () => "19 €/mois", Cn = U, wn = U, Tn = U, En = U, Dn = U, On = U, kn = U, An = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : n === "ru" ? An(e) : U(e);
}), G = () => "$29/mo", jn = () => "29 €/mois", Mn = G, Nn = G, Pn = G, Fn = G, In = G, Ln = G, Rn = G, zn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : G(e);
}), q = () => "$49/mo", Bn = () => "49 €/mois", Vn = q, Hn = q, Un = q, Wn = q, Gn = q, Kn = q, qn = q, Jn = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Bn(e) : n === "es" ? Vn(e) : n === "de" ? Hn(e) : n === "it" ? Un(e) : n === "pt" ? Wn(e) : n === "zh" ? Gn(e) : n === "ja" ? Kn(e) : n === "ko" ? qn(e) : n === "ru" ? Jn(e) : q(e);
}), Y = () => "$99 one-time", Yn = () => "99 € une fois", Xn = Y, Zn = Y, Qn = Y, $n = Y, er = Y, tr = Y, nr = Y, rr = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Yn(e) : n === "es" ? Xn(e) : n === "de" ? Zn(e) : n === "it" ? Qn(e) : n === "pt" ? $n(e) : n === "zh" ? er(e) : n === "ja" ? tr(e) : n === "ko" ? nr(e) : n === "ru" ? rr(e) : Y(e);
}), Z = () => "Free", ir = () => "Gratuit", ar = Z, or = Z, sr = Z, cr = Z, lr = Z, ur = Z, dr = Z, fr = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : n === "ru" ? fr(e) : Z(e);
}), pr = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", mr = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", $ = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", hr = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", gr = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", _r = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", vr = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", yr = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", br = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", xr = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mr(e) : n === "es" ? $(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : n === "ru" ? xr(e) : pr(e);
}), Cr = () => "Translation QA", wr = () => "QA de traduction", Tr = () => "QA de traducción", Er = () => "Übersetzungs-QA", Dr = () => "QA delle Traduzioni", Or = () => "QA de Tradução", kr = () => "翻译质量保证", Ar = () => "翻訳QA", jr = () => "번역 QA", Mr = () => "Контроль качества перевода", Nr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wr(e) : n === "es" ? Tr(e) : n === "de" ? Er(e) : n === "it" ? Dr(e) : n === "pt" ? Or(e) : n === "zh" ? kr(e) : n === "ja" ? Ar(e) : n === "ko" ? jr(e) : n === "ru" ? Mr(e) : Cr(e);
});
function Pr() {
	let e = [
		{
			name: Ze(),
			desc: Sr(),
			price: Q ? Q() : "Free"
		},
		{
			name: ct(),
			desc: ke(),
			price: K ? K() : "$29/mo"
		},
		{
			name: yt(),
			desc: xn(),
			price: Vt()
		},
		{
			name: un(),
			desc: R(),
			price: X ? X() : "$99 one-time"
		},
		{
			name: Nr(),
			desc: Be(),
			price: W ? W() : "$19/mo"
		},
		{
			name: At(),
			desc: ve(),
			price: J ? J() : "$49/mo"
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => a("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [a("div", { children: [i("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}), i("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			})] }), a("div", {
				className: "flex items-center justify-between",
				children: [i("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}), i("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: Qt()
				})]
			})]
		}, e.name))
	});
}
function Fr() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Ir(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Lr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ir("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Fr();
	}, []), i(r, { children: a });
}
function Rr({ children: e }) {
	return i(Lr, { children: e });
}
function zr() {
	return i(Rr, { children: i(Pr, {}) });
}
export { zr as default };

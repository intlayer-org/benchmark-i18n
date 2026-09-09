import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = C(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = le();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ne = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = C(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, b();
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, re = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function _(e) {
	return e;
}
function ae(e, t) {
	return e.exec(t.href);
}
var oe = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), se = RegExp(`(?:^|;\\s*)${oe}=([^;]*)`), v = Symbol(), y = v;
function b() {
	y = v;
}
function ce() {
	typeof queueMicrotask == "function" ? queueMicrotask(b) : Promise.resolve().then(b);
}
function le() {
	if (typeof document > "u") return;
	if (y !== v) return y;
	let e = document.cookie.match(se)?.[1];
	return y = g(e), ce(), y;
}
function ue(e) {
	return de(e);
}
function de(e) {
	let t = _(typeof e == "string" ? new URL(e, re()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var x, S;
function fe(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (x === t) return S;
	let n = _(new URL(t, "http://example.com")), r = ue(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (ae(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return x = t, S = a, a;
}
function C(e) {
	let t = fe(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var pe = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", E = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", D = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", O = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", k = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", A = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", j = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", M = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", N = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", P = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", F = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : n === "ru" ? P(e) : pe(e);
}), I = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", L = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", R = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", z = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", B = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", me = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", he = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", ge = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", _e = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", ve = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : I(e);
}), be = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", xe = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", Se = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", Ce = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", we = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Te = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Ee = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", De = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Oe = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", ke = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", Me = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Ne = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Pe = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Fe = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Ie = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Le = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Re = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", ze = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Be = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Benchmark CLI", Ue = () => "CLI Benchmark", We = () => "CLI de Benchmark", Ge = () => "Benchmark CLI", Ke = () => "CLI del Benchmark", qe = () => "CLI de Benchmark", Je = () => "基准测试 CLI", Ye = () => "Benchmark CLI", Xe = () => "Benchmark CLI", Ze = () => "CLI для бенчмаркинга", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Benchmark Cloud", et = () => "Benchmark Cloud", tt = () => "Benchmark Cloud", nt = () => "Benchmark Cloud", rt = () => "Benchmark Cloud", it = () => "Benchmark Cloud", at = () => "云基准测试", ot = () => "Benchmark Cloud", st = () => "Benchmark Cloud", ct = () => "Облачный бенчмаркинг", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Benchmark Enterprise", dt = () => "Benchmark Enterprise", ft = () => "Benchmark Enterprise", pt = () => "Benchmark Enterprise", mt = () => "Benchmark Enterprise", ht = () => "Benchmark Enterprise", gt = () => "企业级基准测试", _t = () => "Benchmark Enterprise", vt = () => "Benchmark Enterprise", yt = () => "Корпоративный бенчмаркинг", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "Bundle Optimizer", St = () => "Optimiseur de bundle", Ct = () => "Optimizador de bundle", wt = () => "Bundle-Optimierer", Tt = () => "Ottimizzatore del Bundle", Et = () => "Otimizador de Bundle", Dt = () => "包优化器", Ot = () => "バンドルオプティマイザー", kt = () => "번들 옵티마이저", At = () => "Оптимизатор бандлов", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "Contact Us", Nt = () => "Contactez-nous", Pt = () => "Contáctanos", Ft = () => "Kontaktieren Sie uns", It = () => "Contattaci", Lt = () => "Contate-nos", Rt = () => "联系我们", zt = () => "お問い合わせ", Bt = () => "문의하기", Vt = () => "Связаться с нами", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "Learn More", Wt = () => "En savoir plus", Gt = () => "Más información", Kt = () => "Mehr erfahren", qt = () => "Scopri di più", Jt = () => "Saiba Mais", Yt = () => "了解更多", Xt = () => "詳細を見る", Zt = () => "더 알아보기", Qt = () => "Узнать больше", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "Migration Assistant", tn = () => "Assistant de migration", nn = () => "Asistente de migración", rn = () => "Migrationsassistent", an = () => "Assistente alla Migrazione", on = () => "Assistente de Migração", sn = () => "迁移助手", cn = () => "移行アシスタント", ln = () => "마이그레이션 어시스턴트", un = () => "Помощник по миграции", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", pn = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", mn = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", hn = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", gn = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", _n = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", vn = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", yn = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", bn = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", xn = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), V = () => "$19/mo", Cn = () => "19 €/mois", wn = V, Tn = V, En = V, Dn = V, On = V, kn = V, An = V, jn = V, H = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Cn(e) : n === "es" ? wn(e) : n === "de" ? Tn(e) : n === "it" ? En(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : n === "ru" ? jn(e) : V(e);
}), U = () => "$29/mo", Mn = () => "29 €/mois", Nn = U, Pn = U, Fn = U, In = U, Ln = U, Rn = U, zn = U, Bn = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : U(e);
}), G = () => "$49/mo", Vn = () => "49 €/mois", Hn = G, Un = G, Wn = G, Gn = G, Kn = G, qn = G, Jn = G, Yn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Vn(e) : n === "es" ? Hn(e) : n === "de" ? Un(e) : n === "it" ? Wn(e) : n === "pt" ? Gn(e) : n === "zh" ? Kn(e) : n === "ja" ? qn(e) : n === "ko" ? Jn(e) : n === "ru" ? Yn(e) : G(e);
}), q = () => "$99 one-time", Xn = () => "99 € une fois", Zn = q, Qn = q, $n = q, er = q, tr = q, nr = q, rr = q, ir = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Xn(e) : n === "es" ? Zn(e) : n === "de" ? Qn(e) : n === "it" ? $n(e) : n === "pt" ? er(e) : n === "zh" ? tr(e) : n === "ja" ? nr(e) : n === "ko" ? rr(e) : n === "ru" ? ir(e) : q(e);
}), Y = () => "Free", ar = () => "Gratuit", or = Y, sr = Y, cr = Y, lr = Y, ur = Y, dr = Y, fr = Y, pr = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ar(e) : n === "es" ? or(e) : n === "de" ? sr(e) : n === "it" ? cr(e) : n === "pt" ? lr(e) : n === "zh" ? ur(e) : n === "ja" ? dr(e) : n === "ko" ? fr(e) : n === "ru" ? pr(e) : Y(e);
}), mr = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", hr = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", gr = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", _r = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", vr = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", yr = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", br = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", xr = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", Sr = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", Cr = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : n === "ru" ? Cr(e) : mr(e);
}), Tr = () => "Translation QA", Er = () => "QA de traduction", Dr = () => "QA de traducción", Z = () => "Übersetzungs-QA", Or = () => "QA delle Traduzioni", kr = () => "QA de Tradução", Ar = () => "翻译质量保证", jr = () => "翻訳QA", Mr = () => "번역 QA", Nr = () => "Контроль качества перевода", Pr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Z(e) : n === "it" ? Or(e) : n === "pt" ? kr(e) : n === "zh" ? Ar(e) : n === "ja" ? jr(e) : n === "ko" ? Mr(e) : n === "ru" ? Nr(e) : Tr(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/products/ProductsGrid.tsx";
function Fr() {
	let e = [
		{
			name: Qe(),
			desc: wr(),
			price: X ? X() : "Free"
		},
		{
			name: lt(),
			desc: Ae(),
			price: W ? W() : "$29/mo"
		},
		{
			name: bt(),
			desc: Sn(),
			price: Ht()
		},
		{
			name: dn(),
			desc: F(),
			price: J ? J() : "$99 one-time"
		},
		{
			name: Pr(),
			desc: Ve(),
			price: H ? H() : "$19/mo"
		},
		{
			name: jt(),
			desc: ye(),
			price: K ? K() : "$49/mo"
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => i("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [i("div", { children: [i("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 47,
				columnNumber: 13
			}, this), i("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 50,
				columnNumber: 13
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 46,
				columnNumber: 11
			}, this), i("div", {
				className: "flex items-center justify-between",
				children: [i("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 53,
					columnNumber: 13
				}, this), i("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: $t()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 54,
					columnNumber: 13
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 52,
				columnNumber: 11
			}, this)]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 42,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 40,
		columnNumber: 5
	}, this);
}
function Ir() {
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
function Lr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Rr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function zr({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Lr("AppRoot", c);
	}, [c]), e(() => {
		h(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Ir();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Rr,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Br = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Vr({ children: e }) {
	return i(zr, { children: e }, void 0, !1, {
		fileName: Br,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/products/ProductsGrid.wrapper.tsx";
function Hr() {
	return i(Vr, { children: i(Fr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Hr as default };

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
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
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
	let o = () => {
		!g && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return x(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Benchmark CLI", se = () => "CLI Benchmark", ce = () => "CLI de Benchmark", le = () => "Benchmark CLI", ue = () => "CLI del Benchmark", de = () => "CLI de Benchmark", w = () => "基准测试 CLI", T = () => "Benchmark CLI", E = () => "Benchmark CLI", D = () => "CLI для бенчмаркинга", O = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? w(e) : n === "ja" ? T(e) : n === "ko" ? E(e) : D(e);
}), k = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", A = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", j = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", M = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", N = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", P = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", F = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", I = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", L = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", R = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", z = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "Benchmark Cloud", V = () => "Benchmark Cloud", H = () => "Benchmark Cloud", fe = () => "Benchmark Cloud", pe = () => "Benchmark Cloud", me = () => "Benchmark Cloud", he = () => "云基准测试", ge = () => "Benchmark Cloud", _e = () => "Benchmark Cloud", ve = () => "Облачный бенчмаркинг", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", xe = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", Se = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", Ce = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", we = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Te = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Ee = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", De = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Oe = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", ke = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Benchmark Enterprise", Me = () => "Benchmark Enterprise", Ne = () => "Benchmark Enterprise", Pe = () => "Benchmark Enterprise", Fe = () => "Benchmark Enterprise", Ie = () => "Benchmark Enterprise", Le = () => "企业级基准测试", Re = () => "Benchmark Enterprise", ze = () => "Benchmark Enterprise", Be = () => "Корпоративный бенчмаркинг", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
}), He = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Ue = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", We = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", Ge = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", Ke = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", qe = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", Je = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", Ye = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", Xe = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", Ze = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? He(e) : n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : Ze(e);
}), $e = () => "Contact Us", et = () => "Contactez-nous", tt = () => "Contáctanos", nt = () => "Kontaktieren Sie uns", rt = () => "Contattaci", it = () => "Contate-nos", at = () => "联系我们", ot = () => "お問い合わせ", st = () => "문의하기", ct = () => "Связаться с нами", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : ct(e);
}), ut = () => "Migration Assistant", dt = () => "Assistant de migration", ft = () => "Asistente de migración", pt = () => "Migrationsassistent", mt = () => "Assistente alla Migrazione", ht = () => "Assistente de Migração", gt = () => "迁移助手", _t = () => "移行アシスタント", vt = () => "마이그레이션 어시스턴트", yt = () => "Помощник по миграции", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ut(e) : n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : yt(e);
}), xt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", St = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", Ct = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", wt = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", Tt = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", Et = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", Dt = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", Ot = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", kt = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", At = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xt(e) : n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : At(e);
}), Mt = () => "Translation QA", Nt = () => "QA de traduction", Pt = () => "QA de traducción", Ft = () => "Übersetzungs-QA", It = () => "QA delle Traduzioni", Lt = () => "QA de Tradução", Rt = () => "翻译质量保证", zt = () => "翻訳QA", Bt = () => "번역 QA", Vt = () => "Контроль качества перевода", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : Vt(e);
}), Ut = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", Wt = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Gt = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Kt = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", qt = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Jt = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Yt = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Xt = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Zt = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Qt = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ut(e) : n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : Qt(e);
}), en = () => "Bundle Optimizer", tn = () => "Optimiseur de bundle", nn = () => "Optimizador de bundle", rn = () => "Bundle-Optimierer", an = () => "Ottimizzatore del Bundle", on = () => "Otimizador de Bundle", sn = () => "包优化器", cn = () => "バンドルオプティマイザー", ln = () => "번들 옵티마이저", un = () => "Оптимизатор бандлов", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? en(e) : n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : un(e);
}), fn = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", pn = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", mn = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", hn = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", gn = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", _n = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", vn = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", yn = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", bn = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", xn = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? fn(e) : n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : xn(e);
}), Cn = () => "Learn More", wn = () => "En savoir plus", Tn = () => "Más información", En = () => "Mehr erfahren", Dn = () => "Scopri di più", On = () => "Saiba Mais", kn = () => "了解更多", An = () => "詳細を見る", jn = () => "더 알아보기", Mn = () => "Узнать больше", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Cn(e) : n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : Mn(e);
}), U = () => "Free", Pn = () => "Gratuit", Fn = U, In = U, Ln = U, Rn = U, zn = U, Bn = U, Vn = U, Hn = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? U(e) : n === "fr" ? Pn(e) : n === "es" ? Fn(e) : n === "de" ? In(e) : n === "it" ? Ln(e) : n === "pt" ? Rn(e) : n === "zh" ? zn(e) : n === "ja" ? Bn(e) : n === "ko" ? Vn(e) : Hn(e);
}), G = () => "$29/mo", Un = () => "29 €/mois", Wn = G, Gn = G, Kn = G, qn = G, Jn = G, Yn = G, Xn = G, Zn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? G(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), q = () => "$99 one-time", Qn = () => "99 € une fois", $n = q, er = q, tr = q, nr = q, rr = q, ir = q, ar = q, or = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? q(e) : n === "fr" ? Qn(e) : n === "es" ? $n(e) : n === "de" ? er(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : or(e);
}), Y = () => "$19/mo", sr = () => "19 €/mois", cr = Y, lr = Y, ur = Y, X = Y, dr = Y, fr = Y, pr = Y, mr = Y, Z = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? sr(e) : n === "es" ? cr(e) : n === "de" ? lr(e) : n === "it" ? ur(e) : n === "pt" ? X(e) : n === "zh" ? dr(e) : n === "ja" ? fr(e) : n === "ko" ? pr(e) : mr(e);
}), Q = () => "$49/mo", hr = () => "49 €/mois", gr = Q, _r = Q, vr = Q, yr = Q, br = Q, xr = Q, Sr = Q, Cr = Q, $ = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Q(e) : n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : Cr(e);
});
function wr() {
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: O(),
				desc: z(),
				price: W ? W() : "Free"
			},
			{
				name: ye(),
				desc: Ae(),
				price: K ? K() : "$29/mo"
			},
			{
				name: Ve(),
				desc: Qe(),
				price: lt()
			},
			{
				name: bt(),
				desc: jt(),
				price: J ? J() : "$99 one-time"
			},
			{
				name: Ht(),
				desc: $t(),
				price: Z ? Z() : "$19/mo"
			},
			{
				name: dn(),
				desc: Sn(),
				price: $ ? $() : "$49/mo"
			}
		].map((e) => a("div", {
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
					children: Nn()
				})]
			})]
		}, e.name))
	});
}
function Tr() {
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
function Er(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Dr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Er("AppRoot", c);
	}, [c]), e(() => {
		b(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Tr();
	}, []), i(r, { children: a });
}
function Or({ children: e }) {
	return i(Dr, { children: e });
}
function kr() {
	return i(Or, { children: i(wr, {}) });
}
export { kr as default };

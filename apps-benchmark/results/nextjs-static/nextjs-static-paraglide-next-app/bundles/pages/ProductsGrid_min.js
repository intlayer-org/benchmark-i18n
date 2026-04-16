import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
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
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
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
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (x(t) && b.has(t)) {
		let n = b.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return y(e);
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Benchmark CLI", se = () => "CLI Benchmark", ce = () => "CLI de Benchmark", le = () => "Benchmark CLI", ue = () => "CLI del Benchmark", de = () => "CLI de Benchmark", S = () => "基准测试 CLI", C = () => "Benchmark CLI", w = () => "Benchmark CLI", T = () => "CLI для бенчмаркинга", E = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? S(e) : n === "ja" ? C(e) : n === "ko" ? w(e) : T(e);
}), D = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", O = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", k = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", A = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", j = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", M = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", N = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", P = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", F = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", I = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", L = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "Benchmark Cloud", z = () => "Benchmark Cloud", B = () => "Benchmark Cloud", V = () => "Benchmark Cloud", H = () => "Benchmark Cloud", fe = () => "Benchmark Cloud", pe = () => "云基准测试", me = () => "Benchmark Cloud", he = () => "Benchmark Cloud", ge = () => "Облачный бенчмаркинг", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", ye = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", be = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", xe = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", Se = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Ce = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", we = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", Te = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Ee = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", De = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Benchmark Enterprise", Ae = () => "Benchmark Enterprise", je = () => "Benchmark Enterprise", Me = () => "Benchmark Enterprise", Ne = () => "Benchmark Enterprise", Pe = () => "Benchmark Enterprise", Fe = () => "企业级基准测试", Ie = () => "Benchmark Enterprise", Le = () => "Benchmark Enterprise", Re = () => "Корпоративный бенчмаркинг", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Ve = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", He = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", Ue = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", We = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", Ge = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", Ke = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", qe = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", Je = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", Ye = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Contact Us", Qe = () => "Contactez-nous", $e = () => "Contáctanos", et = () => "Kontaktieren Sie uns", tt = () => "Contattaci", nt = () => "Contate-nos", rt = () => "联系我们", it = () => "お問い合わせ", at = () => "문의하기", ot = () => "Связаться с нами", st = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "Migration Assistant", lt = () => "Assistant de migration", ut = () => "Asistente de migración", dt = () => "Migrationsassistent", ft = () => "Assistente alla Migrazione", pt = () => "Assistente de Migração", mt = () => "迁移助手", ht = () => "移行アシスタント", gt = () => "마이그레이션 어시스턴트", _t = () => "Помощник по миграции", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", bt = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", xt = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", St = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", Ct = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", wt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", Tt = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", Et = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", Dt = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", Ot = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), At = () => "Translation QA", jt = () => "QA de traduction", Mt = () => "QA de traducción", Nt = () => "Übersetzungs-QA", Pt = () => "QA delle Traduzioni", Ft = () => "QA de Tradução", It = () => "翻译质量保证", Lt = () => "翻訳QA", Rt = () => "번역 QA", zt = () => "Контроль качества перевода", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? At(e) : n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
}), Vt = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", Ht = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Ut = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Wt = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Gt = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Kt = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", qt = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Jt = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Yt = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Xt = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Vt(e) : n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "Bundle Optimizer", $t = () => "Optimiseur de bundle", en = () => "Optimizador de bundle", tn = () => "Bundle-Optimierer", nn = () => "Ottimizzatore del Bundle", rn = () => "Otimizador de Bundle", an = () => "包优化器", on = () => "バンドルオプティマイザー", sn = () => "번들 옵티마이저", cn = () => "Оптимизатор бандлов", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", dn = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", fn = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", pn = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", mn = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", hn = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", gn = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", _n = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", vn = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", yn = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? un(e) : n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : yn(e);
}), xn = () => "Learn More", Sn = () => "En savoir plus", Cn = () => "Más información", wn = () => "Mehr erfahren", Tn = () => "Scopri di più", En = () => "Saiba Mais", Dn = () => "了解更多", On = () => "詳細を見る", kn = () => "더 알아보기", An = () => "Узнать больше", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), U = () => "Free", Mn = () => "Gratuit", Nn = U, Pn = U, Fn = U, In = U, Ln = U, Rn = U, zn = U, Bn = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? U(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), G = () => "$29/mo", Vn = () => "29 €/mois", Hn = G, Un = G, Wn = G, Gn = G, Kn = G, qn = G, Jn = G, Yn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? G(e) : n === "fr" ? Vn(e) : n === "es" ? Hn(e) : n === "de" ? Un(e) : n === "it" ? Wn(e) : n === "pt" ? Gn(e) : n === "zh" ? Kn(e) : n === "ja" ? qn(e) : n === "ko" ? Jn(e) : Yn(e);
}), q = () => "$99 one-time", Xn = () => "99 € une fois", Zn = q, Qn = q, $n = q, er = q, tr = q, nr = q, rr = q, ir = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? Xn(e) : n === "es" ? Zn(e) : n === "de" ? Qn(e) : n === "it" ? $n(e) : n === "pt" ? er(e) : n === "zh" ? tr(e) : n === "ja" ? nr(e) : n === "ko" ? rr(e) : ir(e);
}), Y = () => "$19/mo", ar = () => "19 €/mois", or = Y, sr = Y, cr = Y, lr = Y, ur = Y, X = Y, dr = Y, fr = Y, Z = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Y(e) : n === "fr" ? ar(e) : n === "es" ? or(e) : n === "de" ? sr(e) : n === "it" ? cr(e) : n === "pt" ? lr(e) : n === "zh" ? ur(e) : n === "ja" ? X(e) : n === "ko" ? dr(e) : fr(e);
}), Q = () => "$49/mo", pr = () => "49 €/mois", mr = Q, hr = Q, gr = Q, _r = Q, vr = Q, yr = Q, br = Q, xr = Q, $ = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Q(e) : n === "fr" ? pr(e) : n === "es" ? mr(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : xr(e);
});
function Sr() {
	return n("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: E(),
				desc: L(),
				price: W ? W() : "Free"
			},
			{
				name: _e(),
				desc: Oe(),
				price: K ? K() : "$29/mo"
			},
			{
				name: ze(),
				desc: Xe(),
				price: st()
			},
			{
				name: vt(),
				desc: kt(),
				price: J ? J() : "$99 one-time"
			},
			{
				name: Bt(),
				desc: Zt(),
				price: Z ? Z() : "$19/mo"
			},
			{
				name: ln(),
				desc: bn(),
				price: $ ? $() : "$49/mo"
			}
		].map((e) => r("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [r("div", { children: [n("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}), n("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			})] }), r("div", {
				className: "flex items-center justify-between",
				children: [n("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}), n("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: jn()
				})]
			})]
		}, e.name))
	});
}
function Cr() {
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
function wr(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Tr({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		v(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Cr();
	}, []), n(e, {
		id: "AppRoot",
		onRender: wr,
		children: r
	});
}
function Er({ children: e }) {
	return n(Tr, { children: e });
}
function Dr() {
	return n(Er, { children: n(Sr, {}) });
}
export { Dr as default };

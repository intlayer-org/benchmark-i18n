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
], a = "PARAGLIDE_LOCALE", ee = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c, l;
function te(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function u(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var d = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (v(t) && _.has(t)) {
			let e = _.get(t);
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
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], s = o;
	typeof window < "u" && window.location?.href && (s = u(window.location.href));
	for (let t of s) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (v(t) && _.has(t)) {
		let n = _.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return g(e);
}
var _ = /* @__PURE__ */ new Map();
function v(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Benchmark CLI", se = () => "CLI Benchmark", ce = () => "CLI de Benchmark", le = () => "Benchmark CLI", ue = () => "CLI del Benchmark", de = () => "CLI de Benchmark", y = () => "基准测试 CLI", b = () => "Benchmark CLI", x = () => "Benchmark CLI", S = () => "CLI для бенчмаркинга", C = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? y(e) : n === "ja" ? b(e) : n === "ko" ? x(e) : S(e);
}), w = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", T = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", E = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", D = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", O = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", k = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", A = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", j = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", M = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", N = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", P = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Benchmark Cloud", I = () => "Benchmark Cloud", L = () => "Benchmark Cloud", R = () => "Benchmark Cloud", z = () => "Benchmark Cloud", B = () => "Benchmark Cloud", V = () => "云基准测试", H = () => "Benchmark Cloud", fe = () => "Benchmark Cloud", pe = () => "Облачный бенчмаркинг", me = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? fe(e) : pe(e);
}), he = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", ge = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", _e = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", ve = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", ye = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", be = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", xe = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", Se = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", Ce = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", we = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? he(e) : n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : we(e);
}), Ee = () => "Benchmark Enterprise", De = () => "Benchmark Enterprise", Oe = () => "Benchmark Enterprise", ke = () => "Benchmark Enterprise", Ae = () => "Benchmark Enterprise", je = () => "Benchmark Enterprise", Me = () => "企业级基准测试", Ne = () => "Benchmark Enterprise", Pe = () => "Benchmark Enterprise", Fe = () => "Корпоративный бенчмаркинг", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ee(e) : n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : Fe(e);
}), Le = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Re = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", ze = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", Be = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", Ve = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", He = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", Ue = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", We = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", Ge = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", Ke = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Le(e) : n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : Ke(e);
}), Je = () => "Contact Us", Ye = () => "Contactez-nous", Xe = () => "Contáctanos", Ze = () => "Kontaktieren Sie uns", Qe = () => "Contattaci", $e = () => "Contate-nos", et = () => "联系我们", tt = () => "お問い合わせ", nt = () => "문의하기", rt = () => "Связаться с нами", it = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Je(e) : n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : rt(e);
}), at = () => "Migration Assistant", ot = () => "Assistant de migration", st = () => "Asistente de migración", ct = () => "Migrationsassistent", lt = () => "Assistente alla Migrazione", ut = () => "Assistente de Migração", dt = () => "迁移助手", ft = () => "移行アシスタント", pt = () => "마이그레이션 어시스턴트", mt = () => "Помощник по миграции", ht = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? at(e) : n === "fr" ? ot(e) : n === "es" ? st(e) : n === "de" ? ct(e) : n === "it" ? lt(e) : n === "pt" ? ut(e) : n === "zh" ? dt(e) : n === "ja" ? ft(e) : n === "ko" ? pt(e) : mt(e);
}), gt = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", _t = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", vt = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", yt = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", bt = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", xt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", St = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", Ct = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", wt = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", Tt = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", Et = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? gt(e) : n === "fr" ? _t(e) : n === "es" ? vt(e) : n === "de" ? yt(e) : n === "it" ? bt(e) : n === "pt" ? xt(e) : n === "zh" ? St(e) : n === "ja" ? Ct(e) : n === "ko" ? wt(e) : Tt(e);
}), Dt = () => "Translation QA", Ot = () => "QA de traduction", kt = () => "QA de traducción", At = () => "Übersetzungs-QA", jt = () => "QA delle Traduzioni", Mt = () => "QA de Tradução", Nt = () => "翻译质量保证", Pt = () => "翻訳QA", Ft = () => "번역 QA", It = () => "Контроль качества перевода", Lt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Dt(e) : n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : It(e);
}), Rt = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", zt = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", Bt = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", Vt = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Ht = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Ut = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Wt = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Gt = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Kt = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", qt = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Jt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Rt(e) : n === "fr" ? zt(e) : n === "es" ? Bt(e) : n === "de" ? Vt(e) : n === "it" ? Ht(e) : n === "pt" ? Ut(e) : n === "zh" ? Wt(e) : n === "ja" ? Gt(e) : n === "ko" ? Kt(e) : qt(e);
}), Yt = () => "Bundle Optimizer", Xt = () => "Optimiseur de bundle", Zt = () => "Optimizador de bundle", Qt = () => "Bundle-Optimierer", $t = () => "Ottimizzatore del Bundle", en = () => "Otimizador de Bundle", tn = () => "包优化器", nn = () => "バンドルオプティマイザー", rn = () => "번들 옵티마이저", an = () => "Оптимизатор бандлов", on = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Yt(e) : n === "fr" ? Xt(e) : n === "es" ? Zt(e) : n === "de" ? Qt(e) : n === "it" ? $t(e) : n === "pt" ? en(e) : n === "zh" ? tn(e) : n === "ja" ? nn(e) : n === "ko" ? rn(e) : an(e);
}), sn = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", cn = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", ln = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", un = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", dn = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", fn = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", pn = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", mn = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", hn = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", gn = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", _n = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? sn(e) : n === "fr" ? cn(e) : n === "es" ? ln(e) : n === "de" ? un(e) : n === "it" ? dn(e) : n === "pt" ? fn(e) : n === "zh" ? pn(e) : n === "ja" ? mn(e) : n === "ko" ? hn(e) : gn(e);
}), vn = () => "Learn More", yn = () => "En savoir plus", bn = () => "Más información", xn = () => "Mehr erfahren", Sn = () => "Scopri di più", Cn = () => "Saiba Mais", wn = () => "了解更多", Tn = () => "詳細を見る", En = () => "더 알아보기", Dn = () => "Узнать больше", On = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? vn(e) : n === "fr" ? yn(e) : n === "es" ? bn(e) : n === "de" ? xn(e) : n === "it" ? Sn(e) : n === "pt" ? Cn(e) : n === "zh" ? wn(e) : n === "ja" ? Tn(e) : n === "ko" ? En(e) : Dn(e);
}), U = () => "Free", kn = () => "Gratuit", An = U, jn = U, Mn = U, Nn = U, Pn = U, Fn = U, In = U, Ln = U, W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? U(e) : n === "fr" ? kn(e) : n === "es" ? An(e) : n === "de" ? jn(e) : n === "it" ? Mn(e) : n === "pt" ? Nn(e) : n === "zh" ? Pn(e) : n === "ja" ? Fn(e) : n === "ko" ? In(e) : Ln(e);
}), G = () => "$29/mo", Rn = () => "29 €/mois", zn = G, Bn = G, Vn = G, Hn = G, Un = G, Wn = G, Gn = G, Kn = G, K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? G(e) : n === "fr" ? Rn(e) : n === "es" ? zn(e) : n === "de" ? Bn(e) : n === "it" ? Vn(e) : n === "pt" ? Hn(e) : n === "zh" ? Un(e) : n === "ja" ? Wn(e) : n === "ko" ? Gn(e) : Kn(e);
}), q = () => "$99 one-time", qn = () => "99 € une fois", Jn = q, Yn = q, Xn = q, Zn = q, Qn = q, $n = q, er = q, tr = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? q(e) : n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : tr(e);
}), Y = () => "$19/mo", nr = () => "19 €/mois", rr = Y, X = Y, ir = Y, ar = Y, or = Y, sr = Y, cr = Y, lr = Y, Z = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Y(e) : n === "fr" ? nr(e) : n === "es" ? rr(e) : n === "de" ? X(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
}), Q = () => "$49/mo", ur = () => "49 €/mois", dr = Q, fr = Q, pr = Q, mr = Q, hr = Q, gr = Q, _r = Q, vr = Q, $ = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Q(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
});
function yr() {
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: C(),
				desc: P(),
				price: W ? W() : "Free"
			},
			{
				name: me(),
				desc: Te(),
				price: K ? K() : "$29/mo"
			},
			{
				name: Ie(),
				desc: qe(),
				price: it()
			},
			{
				name: ht(),
				desc: Et(),
				price: J ? J() : "$99 one-time"
			},
			{
				name: Lt(),
				desc: Jt(),
				price: Z ? Z() : "$19/mo"
			},
			{
				name: on(),
				desc: _n(),
				price: $ ? $() : "$49/mo"
			}
		].map((e) => n("div", {
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
					children: On()
				})]
			})]
		}, e.name))
	});
}
h("en", { reload: !1 });
function br({ children: n }) {
	return t(e, { children: n });
}
function xr() {
	return t(br, { children: t(yr, {}) });
}
export { xr as default };

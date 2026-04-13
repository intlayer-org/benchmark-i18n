import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
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
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
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
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/products_grid_benchmarkcli1.js
var C = () => "Benchmark CLI", w = () => "CLI Benchmark", T = () => "CLI de Benchmark", E = () => "Benchmark CLI", D = () => "CLI del Benchmark", O = () => "CLI de Benchmark", k = () => "基准测试 CLI", A = () => "Benchmark CLI", j = () => "Benchmark CLI", M = () => "CLI для бенчмаркинга", N = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", F = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", I = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", L = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", R = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", z = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", B = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", V = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", H = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", U = () => "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Benchmark Cloud", K = () => "Benchmark Cloud", q = () => "Benchmark Cloud", J = () => "Benchmark Cloud", Y = () => "Benchmark Cloud", X = () => "Benchmark Cloud", Z = () => "云基准测试", Q = () => "Benchmark Cloud", ne = () => "Benchmark Cloud", re = () => "Облачный бенчмаркинг", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", oe = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", se = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", ce = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", le = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", ue = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", de = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", fe = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", pe = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", me = () => "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Benchmark Enterprise", _e = () => "Benchmark Enterprise", ve = () => "Benchmark Enterprise", ye = () => "Benchmark Enterprise", be = () => "Benchmark Enterprise", xe = () => "Benchmark Enterprise", Se = () => "企业级基准测试", Ce = () => "Benchmark Enterprise", we = () => "Benchmark Enterprise", Te = () => "Корпоративный бенчмаркинг", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Oe = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", ke = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", Ae = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", je = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", Me = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", Ne = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", Pe = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", Fe = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", Ie = () => "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "Contact Us", ze = () => "Contactez-nous", Be = () => "Contáctanos", Ve = () => "Kontaktieren Sie uns", He = () => "Contattaci", Ue = () => "Contate-nos", We = () => "联系我们", Ge = () => "お問い合わせ", Ke = () => "문의하기", qe = () => "Связаться с нами", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "Migration Assistant", Xe = () => "Assistant de migration", Ze = () => "Asistente de migración", Qe = () => "Migrationsassistent", $e = () => "Assistente alla Migrazione", et = () => "Assistente de Migração", tt = () => "迁移助手", nt = () => "移行アシスタント", rt = () => "마이그레이션 어시스턴트", it = () => "Помощник по миграции", at = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", st = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", ct = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", lt = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", ut = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", dt = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", ft = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", pt = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", mt = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", ht = () => "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "Translation QA", vt = () => "QA de traduction", yt = () => "QA de traducción", bt = () => "Übersetzungs-QA", xt = () => "QA delle Traduzioni", St = () => "QA de Tradução", Ct = () => "翻译质量保证", wt = () => "翻訳QA", Tt = () => "번역 QA", Et = () => "Контроль качества перевода", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", kt = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", At = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", jt = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", Mt = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Nt = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Pt = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", Ft = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", It = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Lt = () => "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "Bundle Optimizer", Bt = () => "Optimiseur de bundle", Vt = () => "Optimizador de bundle", Ht = () => "Bundle-Optimierer", Ut = () => "Ottimizzatore del Bundle", Wt = () => "Otimizador de Bundle", Gt = () => "包优化器", Kt = () => "バンドルオプティマイザー", qt = () => "번들 옵티마이저", Jt = () => "Оптимизатор бандлов", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
}), Xt = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", Zt = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", Qt = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", $t = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", en = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", $ = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", tn = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", nn = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", rn = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", an = () => "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.", on = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Xt(e) : n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? $(e) : n === "zh" ? tn(e) : n === "ja" ? nn(e) : n === "ko" ? rn(e) : an(e);
}), sn = () => "Learn More", cn = () => "En savoir plus", ln = () => "Más información", un = () => "Mehr erfahren", dn = () => "Scopri di più", fn = () => "Saiba Mais", pn = () => "了解更多", mn = () => "詳細を見る", hn = () => "더 알아보기", gn = () => "Узнать больше", _n = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? sn(e) : n === "fr" ? cn(e) : n === "es" ? ln(e) : n === "de" ? un(e) : n === "it" ? dn(e) : n === "pt" ? fn(e) : n === "zh" ? pn(e) : n === "ja" ? mn(e) : n === "ko" ? hn(e) : gn(e);
});
//#endregion
//#region src/components/pages/products/ProductsGrid.tsx
function vn() {
	return /* @__PURE__ */ t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: N(),
				desc: W(),
				price: "Free"
			},
			{
				name: ie(),
				desc: he(),
				price: "$29/mo"
			},
			{
				name: Ee(),
				desc: Le(),
				price: Je()
			},
			{
				name: at(),
				desc: gt(),
				price: "$99 one-time"
			},
			{
				name: Dt(),
				desc: Rt(),
				price: "$19/mo"
			},
			{
				name: Yt(),
				desc: on(),
				price: "$49/mo"
			}
		].map((e) => /* @__PURE__ */ n("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}), /* @__PURE__ */ t("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			})] }), /* @__PURE__ */ n("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ t("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}), /* @__PURE__ */ t("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: _n()
				})]
			})]
		}, e.name))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
_("en", { reload: !1 });
function yn({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/products/ProductsGrid.wrapper.tsx
function bn() {
	return /* @__PURE__ */ t(yn, { children: /* @__PURE__ */ t(vn, {}) });
}
//#endregion
export { bn as default };

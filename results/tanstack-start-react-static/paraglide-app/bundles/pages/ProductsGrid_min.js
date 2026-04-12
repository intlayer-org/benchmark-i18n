import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
var C = () => "Benchmark CLI", w = () => "Benchmark CLI", T = () => "CLI Benchmark", E = () => "CLI de Benchmark", D = () => "Benchmark CLI", O = () => "基准测试 CLI", k = () => "Benchmark CLI", A = () => "CLI del Benchmark", j = () => "CLI de Benchmark", M = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "de" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "ja" ? D(e) : n === "zh" ? O(e) : n === "ko" ? k(e) : n === "it" ? A(e) : j(e);
}), N = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", P = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", F = () => "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.", I = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", L = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", R = () => "在终端本地运行基准测试。支持自定义配置和 CI 集成。", z = () => "터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.", B = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", V = () => "Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.", H = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? N(e) : n === "de" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "ja" ? L(e) : n === "zh" ? R(e) : n === "ko" ? z(e) : n === "it" ? B(e) : V(e);
}), U = () => "Benchmark Cloud", W = () => "Benchmark Cloud", G = () => "Benchmark Cloud", K = () => "Benchmark Cloud", q = () => "Benchmark Cloud", J = () => "云基准测试", Y = () => "Benchmark Cloud", X = () => "Benchmark Cloud", Z = () => "Benchmark Cloud", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? U(e) : n === "de" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "ja" ? q(e) : n === "zh" ? J(e) : n === "ko" ? Y(e) : n === "it" ? X(e) : Z(e);
}), ne = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", re = () => "Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.", ie = () => "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.", ae = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", oe = () => "履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。", se = () => "自动化的云基准测试，支持历史追踪、警报和团队仪表板。", ce = () => "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.", le = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", ue = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", de = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ne(e) : n === "de" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "ja" ? oe(e) : n === "zh" ? se(e) : n === "ko" ? ce(e) : n === "it" ? le(e) : ue(e);
}), fe = () => "Benchmark Enterprise", pe = () => "Benchmark Enterprise", me = () => "Benchmark Enterprise", he = () => "Benchmark Enterprise", ge = () => "Benchmark Enterprise", _e = () => "企业级基准测试", ve = () => "Benchmark Enterprise", ye = () => "Benchmark Enterprise", be = () => "Benchmark Enterprise", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? fe(e) : n === "de" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "ja" ? ge(e) : n === "zh" ? _e(e) : n === "ko" ? ve(e) : n === "it" ? ye(e) : be(e);
}), Se = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Ce = () => "On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.", we = () => "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.", Te = () => "Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.", Ee = () => "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。", De = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", Oe = () => "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.", ke = () => "Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.", Ae = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Se(e) : n === "de" ? Ce(e) : n === "fr" ? we(e) : n === "es" ? Te(e) : n === "ja" ? Ee(e) : n === "zh" ? De(e) : n === "ko" ? Oe(e) : n === "it" ? ke(e) : Ae(e);
}), Me = () => "Contact Us", Ne = () => "Kontaktieren Sie uns", Pe = () => "Contactez-nous", Fe = () => "Contáctanos", Ie = () => "お問い合わせ", Le = () => "联系我们", Re = () => "문의하기", ze = () => "Contattaci", Be = () => "Contate-nos", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Me(e) : n === "de" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "ja" ? Ie(e) : n === "zh" ? Le(e) : n === "ko" ? Re(e) : n === "it" ? ze(e) : Be(e);
}), He = () => "Migration Assistant", Ue = () => "Migrationsassistent", We = () => "Assistant de migration", Ge = () => "Asistente de migración", Ke = () => "移行アシスタント", qe = () => "迁移助手", Je = () => "마이그레이션 어시스턴트", Ye = () => "Assistente alla Migrazione", Xe = () => "Assistente de Migração", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? He(e) : n === "de" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "ja" ? Ke(e) : n === "zh" ? qe(e) : n === "ko" ? Je(e) : n === "it" ? Ye(e) : Xe(e);
}), Qe = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", $e = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", et = () => "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.", tt = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", nt = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。", rt = () => "人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。", it = () => "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.", at = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.", ot = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qe(e) : n === "de" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "ja" ? nt(e) : n === "zh" ? rt(e) : n === "ko" ? it(e) : n === "it" ? at(e) : ot(e);
}), ct = () => "Translation QA", lt = () => "Übersetzungs-QA", ut = () => "QA de traduction", dt = () => "QA de traducción", ft = () => "翻訳QA", pt = () => "翻译质量保证", mt = () => "번역 QA", ht = () => "QA delle Traduzioni", gt = () => "QA de Tradução", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ct(e) : n === "de" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "ja" ? ft(e) : n === "zh" ? pt(e) : n === "ko" ? mt(e) : n === "it" ? ht(e) : gt(e);
}), vt = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", yt = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", bt = () => "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.", xt = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", St = () => "翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。", Ct = () => "针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。", wt = () => "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.", Tt = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", Et = () => "Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? vt(e) : n === "de" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "ja" ? St(e) : n === "zh" ? Ct(e) : n === "ko" ? wt(e) : n === "it" ? Tt(e) : Et(e);
}), Ot = () => "Bundle Optimizer", kt = () => "Bundle-Optimierer", At = () => "Optimiseur de bundle", jt = () => "Optimizador de bundle", Mt = () => "バンドルオプティマイザー", Nt = () => "包优化器", Pt = () => "번들 옵티마이저", Ft = () => "Ottimizzatore del Bundle", It = () => "Otimizador de Bundle", Lt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "de" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "ja" ? Mt(e) : n === "zh" ? Nt(e) : n === "ko" ? Pt(e) : n === "it" ? Ft(e) : It(e);
}), Rt = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", zt = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", Bt = () => "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.", Vt = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", Ht = () => "Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。", Ut = () => "通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。", Wt = () => "트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.", Gt = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", Kt = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", qt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Rt(e) : n === "de" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "ja" ? Ht(e) : n === "zh" ? Ut(e) : n === "ko" ? Wt(e) : n === "it" ? Gt(e) : Kt(e);
}), $ = () => "Learn More", Jt = () => "Mehr erfahren", Yt = () => "En savoir plus", Xt = () => "Más información", Zt = () => "詳細を見る", Qt = () => "了解更多", $t = () => "더 알아보기", en = () => "Scopri di più", tn = () => "Saiba Mais", nn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? $(e) : n === "de" ? Jt(e) : n === "fr" ? Yt(e) : n === "es" ? Xt(e) : n === "ja" ? Zt(e) : n === "zh" ? Qt(e) : n === "ko" ? $t(e) : n === "it" ? en(e) : tn(e);
});
//#endregion
//#region src/components/pages/products/ProductsGrid.tsx
function rn() {
	return /* @__PURE__ */ t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: M(),
				desc: H(),
				price: "Free"
			},
			{
				name: Q(),
				desc: de(),
				price: "$29/mo"
			},
			{
				name: xe(),
				desc: je(),
				price: Ve()
			},
			{
				name: Ze(),
				desc: st(),
				price: "$99 one-time"
			},
			{
				name: _t(),
				desc: Dt(),
				price: "$19/mo"
			},
			{
				name: Lt(),
				desc: qt(),
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
					children: nn()
				})]
			})]
		}, e.name))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
_("en", { reload: !1 });
function an({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/products/ProductsGrid.wrapper.tsx
function on() {
	return /* @__PURE__ */ t(an, { children: /* @__PURE__ */ t(rn, {}) });
}
//#endregion
export { on as default };

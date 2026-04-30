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
	if (t) return g || (h = t, g = !0, ne(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (b(t) && y.has(t)) {
			let e = y.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ne = (e, t) => {
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
	else if (b(t) && y.has(t)) {
		let n = y.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!m && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function ie() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var y = /* @__PURE__ */ new Map();
function b(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var x = () => "Open Positions", S = () => "Postes ouverts", C = () => "Puestos vacantes", w = () => "Offene Stellen", T = () => "Posizioni aperte", E = () => "Vagas abertas", D = () => "开放职位", O = () => "募集中の職種", k = () => "Open Positions", A = () => "Открытые вакансии", j = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? x(e) : n === "fr" ? S(e) : n === "es" ? C(e) : n === "de" ? w(e) : n === "it" ? T(e) : n === "pt" ? E(e) : n === "zh" ? D(e) : n === "ja" ? O(e) : n === "ko" ? k(e) : A(e);
}), M = () => "Apply Now", N = () => "Postuler", P = () => "Postular ahora", F = () => "Jetzt bewerben", I = () => "Candidati ora", L = () => "Candidatar-se agora", R = () => "立即申请", z = () => "今すぐ応募", B = () => "Apply Now", V = () => "Подать заявку", H = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? M(e) : n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : V(e);
}), U = () => "Remote", W = () => "À distance", G = () => "Remoto", K = () => "Remote", q = () => "Remoto", J = () => "Remoto", Y = () => "远程", ae = () => "リモート", oe = () => "Remote", se = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? U(e) : n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), ce = () => "Full-time", le = () => "Temps plein", ue = () => "Tiempo completo", de = () => "Vollzeit", fe = () => "Tempo pieno", pe = () => "Tempo integral", me = () => "全职", he = () => "フルタイム", ge = () => "Full-time", _e = () => "Полная занятость", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ve = () => "Part-time", ye = () => "Temps partiel", be = () => "Tiempo parcial", xe = () => "Teilzeit", Se = () => "Part-time", Ce = () => "Tempo parcial", we = () => "兼职", Te = () => "パートタイム", Ee = () => "Part-time", De = () => "Частичная занятость", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Engineering", Ae = () => "Ingénierie", je = () => "Ingeniería", Me = () => "Engineering", Ne = () => "Engineering", Pe = () => "Engenharia", Fe = () => "工程", Ie = () => "エンジニアリング", Le = () => "Engineering", Re = () => "Разработка", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), ze = () => "Documentation", Be = () => "Documentation", Ve = () => "Documentación", He = () => "Dokumentation", Ue = () => "Documentazione", We = () => "Documentação", Ge = () => "文档", Ke = () => "ドキュメンテーション", qe = () => "Documentation", Je = () => "Документация", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Community", Ze = () => "Communauté", Qe = () => "Comunidad", $e = () => "Community", et = () => "Comunità", tt = () => "Comunidade", nt = () => "社区", rt = () => "コミュニティ", it = () => "Community", at = () => "Сообщество", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "San Francisco / Remote", ct = () => "San Francisco / télétravail", lt = () => "San Francisco / Remoto", ut = () => "San Francisco / Remote", dt = () => "San Francisco / Remoto", ft = () => "San Francisco / Remoto", pt = () => "旧金山 / 远程", mt = () => "サンフランシスコ / リモート", ht = () => "San Francisco / Remote", gt = () => "Сан-Франциско / Удаленно", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "Senior Frontend Engineer", yt = () => "Ingénieur front-end senior", bt = () => "Ingeniero Frontend Senior", xt = () => "Senior Frontend Engineer", St = () => "Ingegnere Frontend Senior", Ct = () => "Engenheiro Frontend Sênior", wt = () => "高级前端工程师", Tt = () => "シニアフロントエンドエンジニア", Et = () => "Senior Frontend Engineer", Dt = () => "Старший фронтенд-инженер", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", At = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", jt = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", Mt = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", Nt = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", Pt = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", Ft = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", It = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", Lt = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", Rt = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Backend Engineer", Vt = () => "Ingénieur back-end", Ht = () => "Ingeniero Backend", Ut = () => "Backend-Ingenieur", Wt = () => "Backend Engineer", Gt = () => "Engenheiro Backend", Kt = () => "后端工程师", qt = () => "バックエンドエンジニア", Jt = () => "Backend Engineer", Yt = () => "Бэкенд-инженер", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Qt = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", $t = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", en = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", tn = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", nn = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", rn = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", an = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", on = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", sn = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Technical Writer", un = () => "Rédacteur·rice technique", dn = () => "Redactor técnico", fn = () => "Technischer Redakteur", pn = () => "Scrittore tecnico", mn = () => "Redator técnico", hn = () => "技术作家", gn = () => "テクニカルライター", _n = () => "Technical Writer", vn = () => "Технический писатель", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", xn = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", Sn = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Cn = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", wn = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Tn = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", En = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", Dn = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", On = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", kn = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "DevRel Engineer", Mn = () => "Ingénieur DevRel", Nn = () => "Ingeniero de DevRel", Pn = () => "DevRel-Ingenieur", Fn = () => "Ingegnere DevRel", In = () => "Engenheiro de DevRel", Ln = () => "DevRel 工程师", Rn = () => "DevRelエンジニア", zn = () => "DevRel Engineer", Bn = () => "DevRel-инженер", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Un = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", Wn = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Gn = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", Kn = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", qn = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", Jn = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", Yn = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", Xn = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Zn = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "QA Engineer", er = () => "Ingénieur QA", tr = () => "Ingeniero de QA", nr = () => "QA-Ingenieur", rr = () => "Ingegnere QA", ir = () => "Engenheiro de QA", ar = () => "QA 工程师", or = () => "QAエンジニア", sr = () => "QA Engineer", $ = () => "QA-инженер", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : $(e);
}), lr = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", ur = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", dr = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", fr = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", pr = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", mr = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", hr = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", gr = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", _r = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", vr = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", yr = ((e = {}, t = {}) => {
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
var wr = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => Cr(e)), Tr = e.from_html("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span></div></div> <button type=\"button\" class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>"), Er = e.from_html("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"space-y-4\"></div>", 1);
function Dr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(wr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			title: Ot(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: zt()
		},
		{
			title: Xt(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: cn()
		},
		{
			title: yn(),
			location: X(),
			type: Oe(),
			dept: Ye(),
			desc: An()
		},
		{
			title: Vn(),
			location: _t(),
			type: Z(),
			dept: ot(),
			desc: Qn()
		},
		{
			title: cr(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: yr()
		}
	]));
	var c = Er(), l = e.first_child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2);
	e.each(d, 21, () => e.get(s), e.index, (t, n) => {
		var r = Tr(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), c = e.child(s, !0);
		e.reset(s);
		var l = e.sibling(s, 2), u = e.child(l), d = e.child(u, !0);
		e.reset(u);
		var f = e.sibling(u, 2), p = e.child(f, !0);
		e.reset(f);
		var m = e.sibling(f, 2), h = e.child(m, !0);
		e.reset(m), e.reset(l), e.reset(i);
		var g = e.sibling(i, 2), _ = e.child(g, !0);
		e.reset(g), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).title), e.set_text(c, e.get(n).desc), e.set_text(d, e.get(n).dept), e.set_text(p, e.get(n).location), e.set_text(h, e.get(n).type), e.set_text(_, t);
		}, [() => H()]), e.append(t, r);
	}), e.reset(d), e.template_effect((t) => e.set_text(u, t), [() => j()]), e.append(t, c), e.pop(), a();
}
export { Dr as default };

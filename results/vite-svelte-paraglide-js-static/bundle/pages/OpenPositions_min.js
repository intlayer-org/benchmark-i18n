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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = O(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(te)?.[1];
	return S = _(e), w(), S;
}
function re(e) {
	return ie(e);
}
function ie(e) {
	let t = v(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var T, E;
function D(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let n = v(new URL(t, "http://example.com")), i = re(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (y(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Apply Now", M = () => "Postuler", N = () => "Postular ahora", P = () => "Jetzt bewerben", F = () => "Candidati ora", I = () => "Candidatar-se agora", L = () => "立即申请", R = () => "今すぐ応募", z = () => "Apply Now", B = () => "Подать заявку", V = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : n === "ru" ? B(e) : j(e);
}), H = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", U = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", W = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", G = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", K = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", q = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", J = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", Y = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", ae = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", oe = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", se = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? Y(e) : n === "ko" ? ae(e) : n === "ru" ? oe(e) : H(e);
}), ce = () => "Backend Engineer", le = () => "Ingénieur back-end", ue = () => "Ingeniero Backend", de = () => "Backend-Ingenieur", fe = () => "Backend Engineer", pe = () => "Engenheiro Backend", me = () => "后端工程师", he = () => "バックエンドエンジニア", ge = () => "Backend Engineer", _e = () => "Бэкенд-инженер", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : n === "ru" ? _e(e) : ce(e);
}), ye = () => "Community", be = () => "Communauté", xe = () => "Comunidad", Se = () => "Community", Ce = () => "Comunità", we = () => "Comunidade", Te = () => "社区", Ee = () => "コミュニティ", De = () => "Community", Oe = () => "Сообщество", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : n === "ru" ? Oe(e) : ye(e);
}), Ae = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", je = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", Me = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Ne = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", Pe = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", Fe = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", Ie = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", Le = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", Re = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", ze = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : Ae(e);
}), Ve = () => "DevRel Engineer", He = () => "Ingénieur DevRel", Ue = () => "Ingeniero de DevRel", We = () => "DevRel-Ingenieur", Ge = () => "Ingegnere DevRel", Ke = () => "Engenheiro de DevRel", qe = () => "DevRel 工程师", Je = () => "DevRelエンジニア", Ye = () => "DevRel Engineer", Xe = () => "DevRel-инженер", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Ve(e);
}), Qe = () => "Documentation", $e = () => "Documentation", et = () => "Documentación", tt = () => "Dokumentation", nt = () => "Documentazione", rt = () => "Documentação", it = () => "文档", at = () => "ドキュメンテーション", ot = () => "Documentation", st = () => "Документация", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : n === "ru" ? st(e) : Qe(e);
}), lt = () => "Engineering", ut = () => "Ingénierie", dt = () => "Ingeniería", ft = () => "Engineering", pt = () => "Engineering", mt = () => "Engenharia", ht = () => "工程", gt = () => "エンジニアリング", _t = () => "Engineering", vt = () => "Разработка", X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : n === "ru" ? vt(e) : lt(e);
}), yt = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", bt = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", xt = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", St = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", Ct = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", wt = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", Tt = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", Et = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", Dt = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", Ot = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : n === "ru" ? Ot(e) : yt(e);
}), At = () => "Senior Frontend Engineer", jt = () => "Ingénieur front-end senior", Mt = () => "Ingeniero Frontend Senior", Nt = () => "Senior Frontend Engineer", Pt = () => "Ingegnere Frontend Senior", Ft = () => "Engenheiro Frontend Sênior", It = () => "高级前端工程师", Lt = () => "シニアフロントエンドエンジニア", Rt = () => "Senior Frontend Engineer", zt = () => "Старший фронтенд-инженер", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : n === "ru" ? zt(e) : At(e);
}), Vt = () => "Full-time", Ht = () => "Temps plein", Ut = () => "Tiempo completo", Wt = () => "Vollzeit", Gt = () => "Tempo pieno", Kt = () => "Tempo integral", qt = () => "全职", Jt = () => "フルタイム", Yt = () => "Full-time", Xt = () => "Полная занятость", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Zt = () => "Part-time", Qt = () => "Temps partiel", $t = () => "Tiempo parcial", en = () => "Teilzeit", tn = () => "Part-time", nn = () => "Tempo parcial", rn = () => "兼职", an = () => "パートタイム", on = () => "Part-time", sn = () => "Частичная занятость", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", un = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", dn = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", fn = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", pn = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", mn = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", hn = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", gn = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", _n = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", vn = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "QA Engineer", xn = () => "Ingénieur QA", Sn = () => "Ingeniero de QA", Cn = () => "QA-Ingenieur", wn = () => "Ingegnere QA", Tn = () => "Engenheiro de QA", En = () => "QA 工程师", Dn = () => "QAエンジニア", On = () => "QA Engineer", kn = () => "QA-инженер", An = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "Remote", Mn = () => "À distance", Nn = () => "Remoto", Pn = () => "Remote", Fn = () => "Remoto", In = () => "Remoto", Ln = () => "远程", Rn = () => "リモート", zn = () => "Remote", Bn = () => "Удаленно", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Vn = () => "San Francisco / Remote", Hn = () => "San Francisco / télétravail", Un = () => "San Francisco / Remoto", Wn = () => "San Francisco / Remote", Gn = () => "San Francisco / Remoto", Kn = () => "San Francisco / Remoto", qn = () => "旧金山 / 远程", Jn = () => "サンフランシスコ / リモート", Yn = () => "San Francisco / Remote", Xn = () => "Сан-Франциско / Удаленно", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Open Positions", $n = () => "Postes ouverts", er = () => "Puestos vacantes", tr = () => "Offene Stellen", nr = () => "Posizioni aperte", rr = () => "Vagas abertas", ir = () => "开放职位", ar = () => "募集中の職種", or = () => "Open Positions", sr = () => "Открытые вакансии", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", ur = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", dr = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", fr = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", pr = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", mr = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", $ = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", hr = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", gr = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", _r = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? $(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : lr(e);
}), yr = () => "Technical Writer", br = () => "Rédacteur·rice technique", xr = () => "Redactor técnico", Sr = () => "Technischer Redakteur", Cr = () => "Scrittore tecnico", wr = () => "Redator técnico", Tr = () => "技术作家", Er = () => "テクニカルライター", Dr = () => "Technical Writer", Or = () => "Технический писатель", kr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? br(e) : n === "es" ? xr(e) : n === "de" ? Sr(e) : n === "it" ? Cr(e) : n === "pt" ? wr(e) : n === "zh" ? Tr(e) : n === "ja" ? Er(e) : n === "ko" ? Dr(e) : n === "ru" ? Or(e) : yr(e);
}), Ar = [
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
function jr(e) {
	return Ar.includes(e);
}
var Mr = /* @__PURE__ */ new Set([
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
function Nr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!jr(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Mr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Pr = n(typeof window < "u" ? window.location.pathname : "/en"), Fr = t(Pr, (e) => Nr(e)), Ir = e.from_html("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span></div></div> <button type=\"button\" class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>"), Lr = e.from_html("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"space-y-4\"></div>", 1);
function Rr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Fr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			title: Bt(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: kt()
		},
		{
			title: ve(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: se()
		},
		{
			title: kr(),
			location: Q(),
			type: cn(),
			dept: ct(),
			desc: vr()
		},
		{
			title: Ze(),
			location: Zn(),
			type: Z(),
			dept: ke(),
			desc: Be()
		},
		{
			title: An(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: yn()
		}
	]));
	var c = Lr(), l = e.first_child(c), u = e.only_child(l, !0), d = e.sibling(l, 2);
	e.each(d, 21, () => e.get(s), e.index, (t, n) => {
		var r = Ir(), i = e.child(r), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0), m = e.sibling(f, 2), h = e.only_child(m, !0);
		e.reset(l), e.reset(i);
		var g = e.sibling(i, 2), _ = e.only_child(g, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).title), e.set_text(c, e.get(n).desc), e.set_text(d, e.get(n).dept), e.set_text(p, e.get(n).location), e.set_text(h, e.get(n).type), e.set_text(_, t);
		}, [() => V()]), e.append(t, r);
	}), e.reset(d), e.template_effect((t) => e.set_text(u, t), [() => cr()]), e.append(t, c), e.pop(), a();
}
export { Rr as default };

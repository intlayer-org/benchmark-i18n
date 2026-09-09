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
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = k(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!u && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ie() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), re(), S;
}
function w(e) {
	return T(e);
}
function T(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var E, D;
function O(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = _(new URL(t, "http://example.com")), r = w(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Apply Now", N = () => "Postuler", P = () => "Postular ahora", F = () => "Jetzt bewerben", I = () => "Candidati ora", L = () => "Candidatar-se agora", R = () => "立即申请", z = () => "今すぐ応募", B = () => "Apply Now", V = () => "Подать заявку", H = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : M(e);
}), U = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", W = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", G = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", K = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", q = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", J = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", Y = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", ae = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", oe = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", se = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : U(e);
}), le = () => "Backend Engineer", ue = () => "Ingénieur back-end", de = () => "Ingeniero Backend", fe = () => "Backend-Ingenieur", pe = () => "Backend Engineer", me = () => "Engenheiro Backend", he = () => "后端工程师", ge = () => "バックエンドエンジニア", _e = () => "Backend Engineer", ve = () => "Бэкенд-инженер", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Community", xe = () => "Communauté", Se = () => "Comunidad", Ce = () => "Community", we = () => "Comunità", Te = () => "Comunidade", Ee = () => "社区", De = () => "コミュニティ", Oe = () => "Community", ke = () => "Сообщество", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Me = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", Ne = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Pe = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", Fe = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", Ie = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", Le = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", Re = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", ze = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Be = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "DevRel Engineer", Ue = () => "Ingénieur DevRel", We = () => "Ingeniero de DevRel", Ge = () => "DevRel-Ingenieur", Ke = () => "Ingegnere DevRel", qe = () => "Engenheiro de DevRel", Je = () => "DevRel 工程师", Ye = () => "DevRelエンジニア", Xe = () => "DevRel Engineer", Ze = () => "DevRel-инженер", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Documentation", et = () => "Documentation", tt = () => "Documentación", nt = () => "Dokumentation", rt = () => "Documentazione", it = () => "Documentação", at = () => "文档", ot = () => "ドキュメンテーション", st = () => "Documentation", ct = () => "Документация", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Engineering", dt = () => "Ingénierie", ft = () => "Ingeniería", pt = () => "Engineering", mt = () => "Engineering", ht = () => "Engenharia", gt = () => "工程", _t = () => "エンジニアリング", vt = () => "Engineering", yt = () => "Разработка", X = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), bt = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", xt = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", St = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", Ct = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", wt = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", Tt = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", Et = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", Dt = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", Ot = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", kt = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", At = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : n === "ru" ? kt(e) : bt(e);
}), jt = () => "Senior Frontend Engineer", Mt = () => "Ingénieur front-end senior", Nt = () => "Ingeniero Frontend Senior", Pt = () => "Senior Frontend Engineer", Ft = () => "Ingegnere Frontend Senior", It = () => "Engenheiro Frontend Sênior", Lt = () => "高级前端工程师", Rt = () => "シニアフロントエンドエンジニア", zt = () => "Senior Frontend Engineer", Bt = () => "Старший фронтенд-инженер", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : n === "ru" ? Bt(e) : jt(e);
}), Ht = () => "Full-time", Ut = () => "Temps plein", Wt = () => "Tiempo completo", Gt = () => "Vollzeit", Kt = () => "Tempo pieno", qt = () => "Tempo integral", Jt = () => "全职", Yt = () => "フルタイム", Xt = () => "Full-time", Zt = () => "Полная занятость", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : n === "ru" ? Zt(e) : Ht(e);
}), Qt = () => "Part-time", $t = () => "Temps partiel", en = () => "Tiempo parcial", tn = () => "Teilzeit", nn = () => "Part-time", rn = () => "Tempo parcial", an = () => "兼职", on = () => "パートタイム", sn = () => "Part-time", cn = () => "Частичная занятость", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : n === "ru" ? cn(e) : Qt(e);
}), un = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", dn = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", fn = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", pn = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", mn = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", hn = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", gn = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", _n = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", vn = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", yn = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : n === "ru" ? yn(e) : un(e);
}), xn = () => "QA Engineer", Sn = () => "Ingénieur QA", Cn = () => "Ingeniero de QA", wn = () => "QA-Ingenieur", Tn = () => "Ingegnere QA", En = () => "Engenheiro de QA", Dn = () => "QA 工程师", On = () => "QAエンジニア", kn = () => "QA Engineer", An = () => "QA-инженер", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : n === "ru" ? An(e) : xn(e);
}), Mn = () => "Remote", Nn = () => "À distance", Pn = () => "Remoto", Fn = () => "Remote", In = () => "Remoto", Ln = () => "Remoto", Rn = () => "远程", zn = () => "リモート", Bn = () => "Remote", Vn = () => "Удаленно", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Nn(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : n === "ru" ? Vn(e) : Mn(e);
}), Hn = () => "San Francisco / Remote", Un = () => "San Francisco / télétravail", Wn = () => "San Francisco / Remoto", Gn = () => "San Francisco / Remote", Kn = () => "San Francisco / Remoto", qn = () => "San Francisco / Remoto", Jn = () => "旧金山 / 远程", Yn = () => "サンフランシスコ / リモート", Xn = () => "San Francisco / Remote", Zn = () => "Сан-Франциско / Удаленно", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), $n = () => "Open Positions", er = () => "Postes ouverts", tr = () => "Puestos vacantes", nr = () => "Offene Stellen", rr = () => "Posizioni aperte", ir = () => "Vagas abertas", ar = () => "开放职位", or = () => "募集中の職種", sr = () => "Open Positions", cr = () => "Открытые вакансии", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : n === "ru" ? cr(e) : $n(e);
}), ur = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", dr = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", fr = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", pr = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", mr = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", $ = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", hr = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", gr = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", _r = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", vr = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? $(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : ur(e);
}), br = () => "Technical Writer", xr = () => "Rédacteur·rice technique", Sr = () => "Redactor técnico", Cr = () => "Technischer Redakteur", wr = () => "Scrittore tecnico", Tr = () => "Redator técnico", Er = () => "技术作家", Dr = () => "テクニカルライター", Or = () => "Technical Writer", kr = () => "Технический писатель", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), Mr = n("<div class=space-y-4>"), Nr = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Pr() {
	let n = () => [
		{
			title: Vt(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: At()
		},
		{
			title: ye(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: ce()
		},
		{
			title: Ar(),
			location: Q(),
			type: ln(),
			dept: lt(),
			desc: yr()
		},
		{
			title: Qe(),
			location: Qn(),
			type: Z(),
			dept: Ae(),
			desc: Ve()
		},
		{
			title: jn(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: bn()
		}
	];
	return [(() => {
		var e = jr();
		return t(e, () => lr()), e;
	})(), (() => {
		var i = Mr();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Nr(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.nextSibling, l = r.nextSibling;
				return t(i, () => e.title), t(a, () => e.desc), t(o, () => e.dept), t(s, () => e.location), t(c, () => e.type), t(l, () => H()), n;
			})()
		})), i;
	})()];
}
export { Pr as default };

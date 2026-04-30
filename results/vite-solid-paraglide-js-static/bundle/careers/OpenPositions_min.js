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
], l = [], u, d;
function ee(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = ee(e);
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
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, ne(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ne = (e, t) => {
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
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
	let l = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function ie() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return y(e);
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var S = () => "Open Positions", C = () => "Postes ouverts", w = () => "Puestos vacantes", T = () => "Offene Stellen", E = () => "Posizioni aperte", D = () => "Vagas abertas", O = () => "开放职位", k = () => "募集中の職種", A = () => "Open Positions", j = () => "Открытые вакансии", M = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? S(e) : n === "fr" ? C(e) : n === "es" ? w(e) : n === "de" ? T(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), N = () => "Apply Now", P = () => "Postuler", F = () => "Postular ahora", I = () => "Jetzt bewerben", L = () => "Candidati ora", R = () => "Candidatar-se agora", z = () => "立即申请", B = () => "今すぐ応募", V = () => "Apply Now", H = () => "Подать заявку", U = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "Remote", G = () => "À distance", K = () => "Remoto", q = () => "Remote", J = () => "Remoto", Y = () => "Remoto", ae = () => "远程", oe = () => "リモート", se = () => "Remote", ce = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), le = () => "Full-time", ue = () => "Temps plein", de = () => "Tiempo completo", fe = () => "Vollzeit", pe = () => "Tempo pieno", me = () => "Tempo integral", he = () => "全职", ge = () => "フルタイム", _e = () => "Full-time", ve = () => "Полная занятость", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), ye = () => "Part-time", be = () => "Temps partiel", xe = () => "Tiempo parcial", Se = () => "Teilzeit", Ce = () => "Part-time", we = () => "Tempo parcial", Te = () => "兼职", Ee = () => "パートタイム", De = () => "Part-time", Oe = () => "Частичная занятость", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Engineering", je = () => "Ingénierie", Me = () => "Ingeniería", Ne = () => "Engineering", Pe = () => "Engineering", Fe = () => "Engenharia", Ie = () => "工程", Le = () => "エンジニアリング", Re = () => "Engineering", ze = () => "Разработка", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Be = () => "Documentation", Ve = () => "Documentation", He = () => "Documentación", Ue = () => "Dokumentation", We = () => "Documentazione", Ge = () => "Documentação", Ke = () => "文档", qe = () => "ドキュメンテーション", Je = () => "Documentation", Ye = () => "Документация", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Community", Qe = () => "Communauté", $e = () => "Comunidad", et = () => "Community", tt = () => "Comunità", nt = () => "Comunidade", rt = () => "社区", it = () => "コミュニティ", at = () => "Community", ot = () => "Сообщество", st = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "San Francisco / Remote", lt = () => "San Francisco / télétravail", ut = () => "San Francisco / Remoto", dt = () => "San Francisco / Remote", ft = () => "San Francisco / Remoto", pt = () => "San Francisco / Remoto", mt = () => "旧金山 / 远程", ht = () => "サンフランシスコ / リモート", gt = () => "San Francisco / Remote", _t = () => "Сан-Франциско / Удаленно", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "Senior Frontend Engineer", bt = () => "Ingénieur front-end senior", xt = () => "Ingeniero Frontend Senior", St = () => "Senior Frontend Engineer", Ct = () => "Ingegnere Frontend Senior", wt = () => "Engenheiro Frontend Sênior", $ = () => "高级前端工程师", Tt = () => "シニアフロントエンドエンジニア", Et = () => "Senior Frontend Engineer", Dt = () => "Старший фронтенд-инженер", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? $(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
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
}), $n = () => "QA Engineer", er = () => "Ingénieur QA", tr = () => "Ingeniero de QA", nr = () => "QA-Ingenieur", rr = () => "Ingegnere QA", ir = () => "Engenheiro de QA", ar = () => "QA 工程师", or = () => "QAエンジニア", sr = () => "QA Engineer", cr = () => "QA-инженер", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), ur = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", dr = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", fr = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", pr = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", mr = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", hr = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", gr = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", _r = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", vr = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", yr = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", br = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ur(e) : n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : yr(e);
}), xr = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), Sr = n("<div class=space-y-4>"), Cr = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function wr() {
	let n = () => [
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
			type: ke(),
			dept: Xe(),
			desc: An()
		},
		{
			title: Vn(),
			location: vt(),
			type: Z(),
			dept: st(),
			desc: Qn()
		},
		{
			title: lr(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: br()
		}
	];
	return [(() => {
		var e = xr();
		return t(e, () => M()), e;
	})(), (() => {
		var i = Sr();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Cr(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.nextSibling, l = r.nextSibling;
				return t(i, () => e.title), t(a, () => e.desc), t(o, () => e.dept), t(s, () => e.location), t(c, () => e.type), t(l, () => U()), n;
			})()
		})), i;
	})()];
}
export { wr as default };

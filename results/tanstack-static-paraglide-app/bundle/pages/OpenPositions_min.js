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
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = re();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
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
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function re() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function ie(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let n = _(new URL(t, "http://example.com")), i = ie(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
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
var j = () => "Apply Now", M = () => "Postuler maintenant", N = () => "Postular ahora", P = () => "Jetzt bewerben", F = () => "Candidati ora", I = () => "Candidatar-se agora", L = () => "立即申请", R = () => "今すぐ応募", z = () => "지금 지원하기", B = () => "Подать заявку", V = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : n === "ru" ? B(e) : j(e);
}), H = () => "Backend Engineer", U = () => "Ingénieur Backend", W = () => "Ingeniero Backend", G = () => "Backend-Entwickler", K = () => "Ingegnere Backend", q = () => "Engenheiro Backend", J = () => "后端工程师", Y = () => "バックエンドエンジニア", ae = () => "백엔드 엔지니어", oe = () => "Бэкенд-инженер", se = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? Y(e) : n === "ko" ? ae(e) : n === "ru" ? oe(e) : H(e);
}), ce = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", le = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", ue = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", de = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", fe = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", pe = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", me = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", he = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", ge = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", _e = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : n === "ru" ? _e(e) : ce(e);
}), ye = () => "Community", be = () => "Communauté", xe = () => "Comunidad", Se = () => "Community", Ce = () => "Comunità", we = () => "Comunidade", Te = () => "社区", Ee = () => "コミュニティ", De = () => "커뮤니티", Oe = () => "Сообщество", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : n === "ru" ? Oe(e) : ye(e);
}), Ae = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", je = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Me = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Ne = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Pe = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Fe = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Ie = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", Le = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", Re = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", ze = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : Ae(e);
}), Ve = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", He = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", Ue = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", We = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Ge = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", Ke = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", qe = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", Je = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", Ye = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", Xe = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Ve(e);
}), Qe = () => "DevRel Engineer", $e = () => "Ingénieur DevRel", et = () => "Ingeniero DevRel", tt = () => "DevRel-Ingenieur", nt = () => "Ingegnere DevOps", rt = () => "Engenheiro DevRel", it = () => "开发者关系工程师", at = () => "DevRelエンジニア", ot = () => "DevRel 엔지니어", st = () => "DevRel-инженер", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : n === "ru" ? st(e) : Qe(e);
}), lt = () => "Documentation", ut = () => "Documentation", dt = () => "Documentación", ft = () => "Dokumentation", pt = () => "Documentazione", mt = () => "Documentação", ht = () => "文档", gt = () => "ドキュメンテーション", _t = () => "문서화", vt = () => "Документация", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : n === "ru" ? vt(e) : lt(e);
}), bt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", xt = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", St = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Ct = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", wt = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", Tt = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", Et = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", Dt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", Ot = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", kt = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", At = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : n === "ru" ? kt(e) : bt(e);
}), jt = () => "Engineering", Mt = () => "Ingénierie", Nt = () => "Ingeniería", Pt = () => "Entwicklung", Ft = () => "Ingegneria", It = () => "Engenharia", Lt = () => "工程", Rt = () => "エンジニアリング", zt = () => "엔지니어링", Bt = () => "Разработка", X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : n === "ru" ? Bt(e) : jt(e);
}), Vt = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Ht = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", Ut = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Wt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", Gt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Kt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", qt = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", Jt = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", Yt = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", Xt = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Qt = () => "Full-time", $t = () => "Temps plein", en = () => "Tiempo completo", tn = () => "Vollzeit", nn = () => "Tempo pieno", rn = () => "Tempo integral", an = () => "全职", on = () => "正社員", sn = () => "정규직", cn = () => "Полный рабочий день", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : n === "ru" ? cn(e) : Qt(e);
}), ln = () => "Open Positions", un = () => "Postes ouverts", dn = () => "Puestos vacantes", fn = () => "Offene Stellen", pn = () => "Posizioni aperte", mn = () => "Vagas abertas", hn = () => "开放职位", gn = () => "募集中の職種", _n = () => "채용 중인 포지션", vn = () => "Открытые вакансии", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "Part-time", xn = () => "Temps partiel", Sn = () => "Tiempo parcial", Cn = () => "Teilzeit", wn = () => "Part-time", Tn = () => "Tempo parcial", En = () => "兼职", Dn = () => "アルバイト", On = () => "아르바이트", kn = () => "Неполный рабочий день", An = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "QA Engineer", Mn = () => "Ingénieur QA", Nn = () => "Ingeniero QA", Pn = () => "QA-Ingenieur", Fn = () => "Ingegnere QA", In = () => "Engenheiro QA", Ln = () => "测试工程师", Rn = () => "QAエンジニア", zn = () => "QA 엔지니어", Bn = () => "QA-инженер", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = () => "Remote", Un = () => "À distance", Wn = () => "Remoto", Gn = () => "Remote", Kn = () => "Remoto", qn = () => "Remoto", Jn = () => "远程", Yn = () => "リモート", Xn = () => "원격", Zn = () => "Удаленно", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), Qn = () => "San Francisco / Remote", $n = () => "San Francisco / À distance", er = () => "San Francisco / Remoto", tr = () => "San Francisco / Remote", nr = () => "San Francisco / Remoto", rr = () => "San Francisco / Remoto", ir = () => "旧金山 / 远程", ar = () => "サンフランシスコ / リモート", or = () => "샌프란시스코 / 원격", sr = () => "Сан-Франциско / Удаленно", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "Senior Frontend Engineer", ur = () => "Ingénieur Frontend Senior", dr = () => "Ingeniero Frontend Senior", fr = () => "Senior Frontend-Entwickler", pr = () => "Ingegnere Frontend Senior", mr = () => "Engenheiro Frontend Sênior", $ = () => "高级前端工程师", hr = () => "シニアフロントエンドエンジニア", gr = () => "시니어 프론트엔드 엔지니어", _r = () => "Старший фронтенд-инженер", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? $(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : lr(e);
}), yr = () => "Technical Writer", br = () => "Rédacteur technique", xr = () => "Escritor técnico", Sr = () => "Technischer Redakteur", Cr = () => "Scrittore tecnico", wr = () => "Redator Técnico", Tr = () => "技术作家", Er = () => "テクニカルライター", Dr = () => "테크니컬 라이터", Or = () => "Технический писатель", kr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? br(e) : n === "es" ? xr(e) : n === "de" ? Sr(e) : n === "it" ? Cr(e) : n === "pt" ? wr(e) : n === "zh" ? Tr(e) : n === "ja" ? Er(e) : n === "ko" ? Dr(e) : n === "ru" ? Or(e) : yr(e);
});
function Ar() {
	let r = [
		{
			title: vr(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: ve()
		},
		{
			title: se(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: Ze()
		},
		{
			title: kr(),
			location: Q(),
			type: An(),
			dept: yt(),
			desc: Be()
		},
		{
			title: ct(),
			location: cr(),
			type: Z(),
			dept: ke(),
			desc: At()
		},
		{
			title: Vn(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: Zt()
		}
	];
	return n(e, { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: yn()
	}), t("div", {
		className: "space-y-4",
		children: r.map((e) => n("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [n("div", { children: [
				t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				t("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				n("div", {
					className: "mt-2 flex gap-2",
					children: [
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), t("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: V()
			})]
		}, e.title))
	})] });
}
m("en", { reload: !1 });
function jr({ children: n }) {
	return t(e, { children: n });
}
function Mr() {
	return t(jr, { children: t(Ar, {}) });
}
export { Mr as default };

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
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function ie() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), re(), T;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = b(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var k, A;
function j(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = b(new URL(t, "http://example.com")), r = D(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return k = t, A = a, a;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Apply Now", I = () => "Postuler maintenant", L = () => "Postular ahora", R = () => "Jetzt bewerben", z = () => "Candidati ora", B = () => "Candidatar-se agora", V = () => "立即申请", H = () => "今すぐ応募", U = () => "지금 지원하기", W = () => "Подать заявку", G = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Backend Engineer", q = () => "Ingénieur Backend", J = () => "Ingeniero Backend", Y = () => "Backend-Entwickler", ae = () => "Ingegnere Backend", oe = () => "Engenheiro Backend", se = () => "后端工程师", ce = () => "バックエンドエンジニア", le = () => "백엔드 엔지니어", ue = () => "Бэкенд-инженер", de = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? ae(e) : n === "pt" ? oe(e) : n === "zh" ? se(e) : n === "ja" ? ce(e) : n === "ko" ? le(e) : n === "ru" ? ue(e) : K(e);
}), fe = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", pe = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", me = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", he = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", ge = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", _e = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", ve = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", ye = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", be = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", xe = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", Se = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pe(e) : n === "es" ? me(e) : n === "de" ? he(e) : n === "it" ? ge(e) : n === "pt" ? _e(e) : n === "zh" ? ve(e) : n === "ja" ? ye(e) : n === "ko" ? be(e) : n === "ru" ? xe(e) : fe(e);
}), Ce = () => "Community", we = () => "Communauté", Te = () => "Comunidad", Ee = () => "Community", De = () => "Comunità", Oe = () => "Comunidade", ke = () => "社区", Ae = () => "コミュニティ", je = () => "커뮤니티", Me = () => "Сообщество", Ne = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? we(e) : n === "es" ? Te(e) : n === "de" ? Ee(e) : n === "it" ? De(e) : n === "pt" ? Oe(e) : n === "zh" ? ke(e) : n === "ja" ? Ae(e) : n === "ko" ? je(e) : n === "ru" ? Me(e) : Ce(e);
}), Pe = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", Fe = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Ie = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Le = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Re = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", ze = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Be = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", Ve = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", He = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", Ue = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", We = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Fe(e) : n === "es" ? Ie(e) : n === "de" ? Le(e) : n === "it" ? Re(e) : n === "pt" ? ze(e) : n === "zh" ? Be(e) : n === "ja" ? Ve(e) : n === "ko" ? He(e) : n === "ru" ? Ue(e) : Pe(e);
}), Ge = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Ke = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", qe = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", Je = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Ye = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", Xe = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", Ze = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", Qe = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", $e = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", et = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", tt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ke(e) : n === "es" ? qe(e) : n === "de" ? Je(e) : n === "it" ? Ye(e) : n === "pt" ? Xe(e) : n === "zh" ? Ze(e) : n === "ja" ? Qe(e) : n === "ko" ? $e(e) : n === "ru" ? et(e) : Ge(e);
}), nt = () => "DevRel Engineer", rt = () => "Ingénieur DevRel", it = () => "Ingeniero DevRel", at = () => "DevRel-Ingenieur", ot = () => "Ingegnere DevOps", st = () => "Engenheiro DevRel", ct = () => "开发者关系工程师", lt = () => "DevRelエンジニア", ut = () => "DevRel 엔지니어", dt = () => "DevRel-инженер", ft = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : n === "ru" ? dt(e) : nt(e);
}), pt = () => "Documentation", mt = () => "Documentation", ht = () => "Documentación", gt = () => "Dokumentation", _t = () => "Documentazione", vt = () => "Documentação", yt = () => "文档", bt = () => "ドキュメンテーション", xt = () => "문서화", St = () => "Документация", Ct = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mt(e) : n === "es" ? ht(e) : n === "de" ? gt(e) : n === "it" ? _t(e) : n === "pt" ? vt(e) : n === "zh" ? yt(e) : n === "ja" ? bt(e) : n === "ko" ? xt(e) : n === "ru" ? St(e) : pt(e);
}), wt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Tt = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", Et = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Dt = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", Ot = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", kt = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", At = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", jt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", Mt = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", Nt = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", Pt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tt(e) : n === "es" ? Et(e) : n === "de" ? Dt(e) : n === "it" ? Ot(e) : n === "pt" ? kt(e) : n === "zh" ? At(e) : n === "ja" ? jt(e) : n === "ko" ? Mt(e) : n === "ru" ? Nt(e) : wt(e);
}), Ft = () => "Engineering", It = () => "Ingénierie", Lt = () => "Ingeniería", Rt = () => "Entwicklung", zt = () => "Ingegneria", Bt = () => "Engenharia", Vt = () => "工程", Ht = () => "エンジニアリング", Ut = () => "엔지니어링", Wt = () => "Разработка", X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? It(e) : n === "es" ? Lt(e) : n === "de" ? Rt(e) : n === "it" ? zt(e) : n === "pt" ? Bt(e) : n === "zh" ? Vt(e) : n === "ja" ? Ht(e) : n === "ko" ? Ut(e) : n === "ru" ? Wt(e) : Ft(e);
}), Gt = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Kt = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", qt = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Jt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", Yt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Xt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", Zt = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", Qt = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", $t = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", en = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : n === "ru" ? en(e) : Gt(e);
}), nn = () => "Full-time", rn = () => "Temps plein", an = () => "Tiempo completo", on = () => "Vollzeit", sn = () => "Tempo pieno", cn = () => "Tempo integral", ln = () => "全职", un = () => "正社員", dn = () => "정규직", fn = () => "Полный рабочий день", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : n === "ru" ? fn(e) : nn(e);
}), pn = () => "Open Positions", mn = () => "Postes ouverts", hn = () => "Puestos vacantes", gn = () => "Offene Stellen", _n = () => "Posizioni aperte", vn = () => "Vagas abertas", yn = () => "开放职位", bn = () => "募集中の職種", xn = () => "채용 중인 포지션", Sn = () => "Открытые вакансии", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "Part-time", Tn = () => "Temps partiel", En = () => "Tiempo parcial", Dn = () => "Teilzeit", On = () => "Part-time", kn = () => "Tempo parcial", An = () => "兼职", jn = () => "アルバイト", Mn = () => "아르바이트", Nn = () => "Неполный рабочий день", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Fn = () => "QA Engineer", In = () => "Ingénieur QA", Ln = () => "Ingeniero QA", Rn = () => "QA-Ingenieur", zn = () => "Ingegnere QA", Bn = () => "Engenheiro QA", Vn = () => "测试工程师", Hn = () => "QAエンジニア", Un = () => "QA 엔지니어", Wn = () => "QA-инженер", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "Remote", qn = () => "À distance", Jn = () => "Remoto", Yn = () => "Remote", Xn = () => "Remoto", Zn = () => "Remoto", Qn = () => "远程", $n = () => "リモート", er = () => "원격", tr = () => "Удаленно", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : n === "ru" ? tr(e) : Kn(e);
}), nr = () => "San Francisco / Remote", rr = () => "San Francisco / À distance", ir = () => "San Francisco / Remoto", ar = () => "San Francisco / Remote", or = () => "San Francisco / Remoto", sr = () => "San Francisco / Remoto", cr = () => "旧金山 / 远程", lr = () => "サンフランシスコ / リモート", ur = () => "샌프란시스코 / 원격", dr = () => "Сан-Франциско / Удаленно", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : nr(e);
}), pr = () => "Senior Frontend Engineer", mr = () => "Ingénieur Frontend Senior", $ = () => "Ingeniero Frontend Senior", hr = () => "Senior Frontend-Entwickler", gr = () => "Ingegnere Frontend Senior", _r = () => "Engenheiro Frontend Sênior", vr = () => "高级前端工程师", yr = () => "シニアフロントエンドエンジニア", br = () => "시니어 프론트엔드 엔지니어", xr = () => "Старший фронтенд-инженер", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mr(e) : n === "es" ? $(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : n === "ru" ? xr(e) : pr(e);
}), Cr = () => "Technical Writer", wr = () => "Rédacteur technique", Tr = () => "Escritor técnico", Er = () => "Technischer Redakteur", Dr = () => "Scrittore tecnico", Or = () => "Redator Técnico", kr = () => "技术作家", Ar = () => "テクニカルライター", jr = () => "테크니컬 라이터", Mr = () => "Технический писатель", Nr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wr(e) : n === "es" ? Tr(e) : n === "de" ? Er(e) : n === "it" ? Dr(e) : n === "pt" ? Or(e) : n === "zh" ? kr(e) : n === "ja" ? Ar(e) : n === "ko" ? jr(e) : n === "ru" ? Mr(e) : Cr(e);
});
function Pr() {
	let e = [
		{
			title: Sr(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: Se()
		},
		{
			title: de(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: tt()
		},
		{
			title: Nr(),
			location: Q(),
			type: Pn(),
			dept: Ct(),
			desc: We()
		},
		{
			title: ft(),
			location: fr(),
			type: Z(),
			dept: Ne(),
			desc: Pt()
		},
		{
			title: Gn(),
			location: Q(),
			type: Z(),
			dept: X(),
			desc: tn()
		}
	];
	return a(r, { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Cn()
	}), i("div", {
		className: "space-y-4",
		children: e.map((e) => a("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [a("div", { children: [
				i("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				i("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				a("div", {
					className: "mt-2 flex gap-2",
					children: [
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), i("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: G()
			})]
		}, e.title))
	})] });
}
function Fr() {
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
function Ir(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Lr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ir("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Fr();
	}, []), i(r, { children: a });
}
function Rr({ children: e }) {
	return i(Lr, { children: e });
}
function zr() {
	return i(Rr, { children: i(Pr, {}) });
}
export { zr as default };

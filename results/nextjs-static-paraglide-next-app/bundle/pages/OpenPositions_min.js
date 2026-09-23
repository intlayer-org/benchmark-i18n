import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = k(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
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
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function ie() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function ae(e) {
	return oe(e);
}
function oe(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var E, D;
function O(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = y(new URL(t, "http://example.com")), r = ae(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return E = t, D = a, a;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Apply Now", N = () => "Postuler maintenant", P = () => "Postular ahora", F = () => "Jetzt bewerben", I = () => "Candidati ora", L = () => "Candidatar-se agora", R = () => "立即申请", z = () => "今すぐ応募", B = () => "지금 지원하기", V = () => "Подать заявку", H = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : M(e);
}), U = () => "Backend Engineer", W = () => "Ingénieur Backend", G = () => "Ingeniero Backend", K = () => "Backend-Entwickler", q = () => "Ingegnere Backend", se = () => "Engenheiro Backend", ce = () => "后端工程师", le = () => "バックエンドエンジニア", ue = () => "백엔드 엔지니어", de = () => "Бэкенд-инженер", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : U(e);
}), pe = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", me = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", he = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", ge = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", _e = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", ve = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", ye = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", be = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", xe = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", Se = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "Community", Te = () => "Communauté", Ee = () => "Comunidad", De = () => "Community", Oe = () => "Comunità", ke = () => "Comunidade", Ae = () => "社区", je = () => "コミュニティ", Me = () => "커뮤니티", Ne = () => "Сообщество", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Fe = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", Ie = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Le = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Re = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", ze = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Be = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Ve = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", He = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", Ue = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", We = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Ke = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", qe = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", Je = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", Ye = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Xe = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", Ze = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", Qe = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", $e = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", et = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", tt = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : Ke(e);
}), rt = () => "DevRel Engineer", it = () => "Ingénieur DevRel", at = () => "Ingeniero DevRel", ot = () => "DevRel-Ingenieur", st = () => "Ingegnere DevOps", ct = () => "Engenheiro DevRel", lt = () => "开发者关系工程师", ut = () => "DevRelエンジニア", dt = () => "DevRel 엔지니어", ft = () => "DevRel-инженер", pt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : n === "ru" ? ft(e) : rt(e);
}), mt = () => "Documentation", ht = () => "Documentation", gt = () => "Documentación", _t = () => "Dokumentation", vt = () => "Documentazione", yt = () => "Documentação", bt = () => "文档", xt = () => "ドキュメンテーション", St = () => "문서화", Ct = () => "Документация", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : n === "ru" ? Ct(e) : mt(e);
}), Tt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", Et = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", Dt = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Ot = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", kt = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", At = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", jt = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", Mt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", Nt = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", Pt = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : n === "ru" ? Pt(e) : Tt(e);
}), It = () => "Engineering", Lt = () => "Ingénierie", Rt = () => "Ingeniería", zt = () => "Entwicklung", Bt = () => "Ingegneria", Vt = () => "Engenharia", Ht = () => "工程", Ut = () => "エンジニアリング", Wt = () => "엔지니어링", Gt = () => "Разработка", J = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : n === "ru" ? Gt(e) : It(e);
}), Kt = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", qt = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", Jt = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Yt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", Xt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Zt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", Qt = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", $t = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", en = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", tn = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", nn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? qt(e) : n === "es" ? Jt(e) : n === "de" ? Yt(e) : n === "it" ? Xt(e) : n === "pt" ? Zt(e) : n === "zh" ? Qt(e) : n === "ja" ? $t(e) : n === "ko" ? en(e) : n === "ru" ? tn(e) : Kt(e);
}), rn = () => "Full-time", an = () => "Temps plein", on = () => "Tiempo completo", sn = () => "Vollzeit", cn = () => "Tempo pieno", ln = () => "Tempo integral", un = () => "全职", dn = () => "正社員", fn = () => "정규직", pn = () => "Полный рабочий день", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? an(e) : n === "es" ? on(e) : n === "de" ? sn(e) : n === "it" ? cn(e) : n === "pt" ? ln(e) : n === "zh" ? un(e) : n === "ja" ? dn(e) : n === "ko" ? fn(e) : n === "ru" ? pn(e) : rn(e);
}), mn = () => "Open Positions", hn = () => "Postes ouverts", gn = () => "Puestos vacantes", _n = () => "Offene Stellen", vn = () => "Posizioni aperte", yn = () => "Vagas abertas", bn = () => "开放职位", xn = () => "募集中の職種", Sn = () => "채용 중인 포지션", Cn = () => "Открытые вакансии", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : n === "ru" ? Cn(e) : mn(e);
}), Tn = () => "Part-time", En = () => "Temps partiel", Dn = () => "Tiempo parcial", On = () => "Teilzeit", kn = () => "Part-time", An = () => "Tempo parcial", jn = () => "兼职", Mn = () => "アルバイト", Nn = () => "아르바이트", Pn = () => "Неполный рабочий день", Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : n === "ru" ? Pn(e) : Tn(e);
}), In = () => "QA Engineer", Ln = () => "Ingénieur QA", Rn = () => "Ingeniero QA", zn = () => "QA-Ingenieur", Bn = () => "Ingegnere QA", Vn = () => "Engenheiro QA", Hn = () => "测试工程师", Un = () => "QAエンジニア", Wn = () => "QA 엔지니어", Gn = () => "QA-инженер", Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ln(e) : n === "es" ? Rn(e) : n === "de" ? zn(e) : n === "it" ? Bn(e) : n === "pt" ? Vn(e) : n === "zh" ? Hn(e) : n === "ja" ? Un(e) : n === "ko" ? Wn(e) : n === "ru" ? Gn(e) : In(e);
}), qn = () => "Remote", Jn = () => "À distance", Yn = () => "Remoto", Xn = () => "Remote", Zn = () => "Remoto", Qn = () => "Remoto", $n = () => "远程", er = () => "リモート", tr = () => "원격", nr = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Jn(e) : n === "es" ? Yn(e) : n === "de" ? Xn(e) : n === "it" ? Zn(e) : n === "pt" ? Qn(e) : n === "zh" ? $n(e) : n === "ja" ? er(e) : n === "ko" ? tr(e) : n === "ru" ? nr(e) : qn(e);
}), rr = () => "San Francisco / Remote", ir = () => "San Francisco / À distance", ar = () => "San Francisco / Remoto", or = () => "San Francisco / Remote", sr = () => "San Francisco / Remoto", cr = () => "San Francisco / Remoto", lr = () => "旧金山 / 远程", ur = () => "サンフランシスコ / リモート", dr = () => "샌프란시스코 / 원격", fr = () => "Сан-Франциско / Удаленно", pr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : n === "ru" ? fr(e) : rr(e);
}), mr = () => "Senior Frontend Engineer", hr = () => "Ingénieur Frontend Senior", gr = () => "Ingeniero Frontend Senior", _r = () => "Senior Frontend-Entwickler", vr = () => "Ingegnere Frontend Senior", yr = () => "Engenheiro Frontend Sênior", br = () => "高级前端工程师", xr = () => "シニアフロントエンドエンジニア", Sr = () => "시니어 프론트엔드 엔지니어", Cr = () => "Старший фронтенд-инженер", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : n === "ru" ? Cr(e) : mr(e);
}), Tr = () => "Technical Writer", Er = () => "Rédacteur technique", Dr = () => "Escritor técnico", Z = () => "Technischer Redakteur", Or = () => "Scrittore tecnico", kr = () => "Redator Técnico", Ar = () => "技术作家", jr = () => "テクニカルライター", Mr = () => "테크니컬 라이터", Nr = () => "Технический писатель", Pr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Z(e) : n === "it" ? Or(e) : n === "pt" ? kr(e) : n === "zh" ? Ar(e) : n === "ja" ? jr(e) : n === "ko" ? Mr(e) : n === "ru" ? Nr(e) : Tr(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/OpenPositions.tsx";
function Fr() {
	let e = [
		{
			title: wr(),
			location: X(),
			type: Y(),
			dept: J(),
			desc: Ce()
		},
		{
			title: fe(),
			location: X(),
			type: Y(),
			dept: J(),
			desc: nt()
		},
		{
			title: Pr(),
			location: X(),
			type: Fn(),
			dept: wt(),
			desc: Ge()
		},
		{
			title: pt(),
			location: pr(),
			type: Y(),
			dept: Pe(),
			desc: Ft()
		},
		{
			title: Kn(),
			location: X(),
			type: Y(),
			dept: J(),
			desc: nn()
		}
	];
	return i(r, { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: wn()
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 46,
		columnNumber: 7
	}, this), i("div", {
		className: "space-y-4",
		children: e.map((e) => i("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [i("div", { children: [
				i("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 56,
					columnNumber: 15
				}, this),
				i("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 59,
					columnNumber: 15
				}, this),
				i("div", {
					className: "mt-2 flex gap-2",
					children: [
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 61,
							columnNumber: 17
						}, this),
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 64,
							columnNumber: 17
						}, this),
						i("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 67,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 60,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: Q,
				lineNumber: 55,
				columnNumber: 13
			}, this), i("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: H()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 72,
				columnNumber: 13
			}, this)]
		}, e.title, !0, {
			fileName: Q,
			lineNumber: 51,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 49,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Q,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
function Ir() {
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
function Lr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Rr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function zr({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Lr("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Ir();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Rr,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Br = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Vr({ children: e }) {
	return i(zr, { children: e }, void 0, !1, {
		fileName: Br,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/OpenPositions.wrapper.tsx";
function Hr() {
	return i(Vr, { children: i(Fr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Hr as default };

import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = T(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
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
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = T(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, x();
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function te(e, t) {
	return e.exec(t.href);
}
var ne = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), v = RegExp(`(?:^|;\\s*)${ne}=([^;]*)`), y = Symbol(), b = y;
function x() {
	b = y;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(x) : Promise.resolve().then(x);
}
function ie() {
	if (typeof document > "u") return;
	if (b !== y) return b;
	let e = document.cookie.match(v)?.[1];
	return b = h(e), re(), b;
}
function ae(e) {
	return oe(e);
}
function oe(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var S, C;
function w(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (S === t) return C;
	let r = _(new URL(t, "http://example.com")), i = ae(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (te(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return S = t, C = o, o;
}
function T(e) {
	let t = w(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Apply Now", k = () => "Backend Engineer", A = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", j = () => "Community", M = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", N = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", P = () => "DevRel Engineer", F = () => "Documentation", I = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", L = () => "Engineering", R = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", z = () => "Full-time", B = () => "Open Positions", V = () => "Part-time", H = () => "QA Engineer", U = () => "Remote", W = () => "San Francisco / Remote", G = () => "Senior Frontend Engineer", K = () => "Technical Writer", q = () => "Postuler maintenant", se = () => "Ingénieur Backend", ce = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", le = () => "Communauté", ue = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", de = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", fe = () => "Ingénieur DevRel", pe = () => "Documentation", me = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", he = () => "Ingénierie", ge = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", _e = () => "Temps plein", ve = () => "Postes ouverts", ye = () => "Temps partiel", be = () => "Ingénieur QA", xe = () => "À distance", Se = () => "San Francisco / À distance", Ce = () => "Ingénieur Frontend Senior", we = () => "Rédacteur technique", Te = () => "Postular ahora", Ee = () => "Ingeniero Backend", De = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", Oe = () => "Comunidad", ke = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Ae = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", je = () => "Ingeniero DevRel", Me = () => "Documentación", Ne = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", Pe = () => "Ingeniería", Fe = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Ie = () => "Tiempo completo", Le = () => "Puestos vacantes", Re = () => "Tiempo parcial", ze = () => "Ingeniero QA", Be = () => "Remoto", Ve = () => "San Francisco / Remoto", He = () => "Ingeniero Frontend Senior", Ue = () => "Escritor técnico", We = () => "Jetzt bewerben", Ge = () => "Backend-Entwickler", Ke = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", qe = () => "Community", Je = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Ye = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Xe = () => "DevRel-Ingenieur", Ze = () => "Dokumentation", Qe = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", $e = () => "Entwicklung", et = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", tt = () => "Vollzeit", nt = () => "Offene Stellen", rt = () => "Teilzeit", it = () => "QA-Ingenieur", at = () => "Remote", ot = () => "San Francisco / Remote", st = () => "Senior Frontend-Entwickler", ct = () => "Technischer Redakteur", lt = () => "Candidati ora", ut = () => "Ingegnere Backend", dt = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", ft = () => "Comunità", pt = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", mt = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", ht = () => "Ingegnere DevOps", gt = () => "Documentazione", _t = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", vt = () => "Ingegneria", yt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", bt = () => "Tempo pieno", xt = () => "Posizioni aperte", St = () => "Part-time", Ct = () => "Ingegnere QA", wt = () => "Remoto", Tt = () => "San Francisco / Remoto", Et = () => "Ingegnere Frontend Senior", Dt = () => "Scrittore tecnico", Ot = () => "Candidatar-se agora", kt = () => "Engenheiro Backend", At = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", jt = () => "Comunidade", Mt = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Nt = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", Pt = () => "Engenheiro DevRel", Ft = () => "Documentação", It = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", Lt = () => "Engenharia", Rt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", zt = () => "Tempo integral", Bt = () => "Vagas abertas", Vt = () => "Tempo parcial", Ht = () => "Engenheiro QA", Ut = () => "Remoto", Wt = () => "San Francisco / Remoto", Gt = () => "Engenheiro Frontend Sênior", Kt = () => "Redator Técnico", qt = () => "立即申请", Jt = () => "后端工程师", Yt = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", Xt = () => "社区", Zt = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", Qt = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", $t = () => "开发者关系工程师", en = () => "文档", tn = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", nn = () => "工程", rn = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", an = () => "全职", on = () => "开放职位", sn = () => "兼职", cn = () => "测试工程师", ln = () => "远程", un = () => "旧金山 / 远程", dn = () => "高级前端工程师", fn = () => "技术作家", pn = () => "今すぐ応募", mn = () => "バックエンドエンジニア", hn = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", gn = () => "コミュニティ", _n = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", vn = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", yn = () => "DevRelエンジニア", bn = () => "ドキュメンテーション", xn = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", Sn = () => "エンジニアリング", Cn = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", wn = () => "正社員", Tn = () => "募集中の職種", En = () => "アルバイト", Dn = () => "QAエンジニア", On = () => "リモート", kn = () => "サンフランシスコ / リモート", An = () => "シニアフロントエンドエンジニア", jn = () => "テクニカルライター", Mn = () => "지금 지원하기", Nn = () => "백엔드 엔지니어", Pn = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", Fn = () => "커뮤니티", In = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", Ln = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", Rn = () => "DevRel 엔지니어", zn = () => "문서화", Bn = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", Vn = () => "엔지니어링", Hn = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", Un = () => "정규직", Wn = () => "채용 중인 포지션", Gn = () => "아르바이트", Kn = () => "QA 엔지니어", qn = () => "원격", Jn = () => "샌프란시스코 / 원격", Yn = () => "시니어 프론트엔드 엔지니어", Xn = () => "테크니컬 라이터", Zn = () => "Подать заявку", Qn = () => "Бэкенд-инженер", $n = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", er = () => "Сообщество", tr = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", nr = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", rr = () => "DevRel-инженер", ir = () => "Документация", ar = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", or = () => "Разработка", sr = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", cr = () => "Полный рабочий день", lr = () => "Открытые вакансии", ur = () => "Неполный рабочий день", dr = () => "QA-инженер", fr = () => "Удаленно", pr = () => "Сан-Франциско / Удаленно", mr = () => "Старший фронтенд-инженер", hr = () => "Технический писатель", gr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? q(e) : n === "es" ? Te(e) : n === "de" ? We(e) : n === "it" ? lt(e) : n === "pt" ? Ot(e) : n === "zh" ? qt(e) : n === "ja" ? pn(e) : n === "ko" ? Mn(e) : n === "ru" ? Zn(e) : O(e);
}), _r = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? se(e) : n === "es" ? Ee(e) : n === "de" ? Ge(e) : n === "it" ? ut(e) : n === "pt" ? kt(e) : n === "zh" ? Jt(e) : n === "ja" ? mn(e) : n === "ko" ? Nn(e) : n === "ru" ? Qn(e) : k(e);
}), vr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ce(e) : n === "es" ? De(e) : n === "de" ? Ke(e) : n === "it" ? dt(e) : n === "pt" ? At(e) : n === "zh" ? Yt(e) : n === "ja" ? hn(e) : n === "ko" ? Pn(e) : n === "ru" ? $n(e) : A(e);
}), yr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? Oe(e) : n === "de" ? qe(e) : n === "it" ? ft(e) : n === "pt" ? jt(e) : n === "zh" ? Xt(e) : n === "ja" ? gn(e) : n === "ko" ? Fn(e) : n === "ru" ? er(e) : j(e);
}), J = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? ke(e) : n === "de" ? Je(e) : n === "it" ? pt(e) : n === "pt" ? Mt(e) : n === "zh" ? Zt(e) : n === "ja" ? _n(e) : n === "ko" ? In(e) : n === "ru" ? tr(e) : M(e);
}), br = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? Ae(e) : n === "de" ? Ye(e) : n === "it" ? mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Qt(e) : n === "ja" ? vn(e) : n === "ko" ? Ln(e) : n === "ru" ? nr(e) : N(e);
}), xr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? je(e) : n === "de" ? Xe(e) : n === "it" ? ht(e) : n === "pt" ? Pt(e) : n === "zh" ? $t(e) : n === "ja" ? yn(e) : n === "ko" ? Rn(e) : n === "ru" ? rr(e) : P(e);
}), Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? Me(e) : n === "de" ? Ze(e) : n === "it" ? gt(e) : n === "pt" ? Ft(e) : n === "zh" ? en(e) : n === "ja" ? bn(e) : n === "ko" ? zn(e) : n === "ru" ? ir(e) : F(e);
}), Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Ne(e) : n === "de" ? Qe(e) : n === "it" ? _t(e) : n === "pt" ? It(e) : n === "zh" ? tn(e) : n === "ja" ? xn(e) : n === "ko" ? Bn(e) : n === "ru" ? ar(e) : I(e);
}), Y = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? Pe(e) : n === "de" ? $e(e) : n === "it" ? vt(e) : n === "pt" ? Lt(e) : n === "zh" ? nn(e) : n === "ja" ? Sn(e) : n === "ko" ? Vn(e) : n === "ru" ? or(e) : L(e);
}), wr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? Fe(e) : n === "de" ? et(e) : n === "it" ? yt(e) : n === "pt" ? Rt(e) : n === "zh" ? rn(e) : n === "ja" ? Cn(e) : n === "ko" ? Hn(e) : n === "ru" ? sr(e) : R(e);
}), X = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? Ie(e) : n === "de" ? tt(e) : n === "it" ? bt(e) : n === "pt" ? zt(e) : n === "zh" ? an(e) : n === "ja" ? wn(e) : n === "ko" ? Un(e) : n === "ru" ? cr(e) : z(e);
}), Tr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? Le(e) : n === "de" ? nt(e) : n === "it" ? xt(e) : n === "pt" ? Bt(e) : n === "zh" ? on(e) : n === "ja" ? Tn(e) : n === "ko" ? Wn(e) : n === "ru" ? lr(e) : B(e);
}), Er = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ye(e) : n === "es" ? Re(e) : n === "de" ? rt(e) : n === "it" ? St(e) : n === "pt" ? Vt(e) : n === "zh" ? sn(e) : n === "ja" ? En(e) : n === "ko" ? Gn(e) : n === "ru" ? ur(e) : V(e);
}), Dr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? be(e) : n === "es" ? ze(e) : n === "de" ? it(e) : n === "it" ? Ct(e) : n === "pt" ? Ht(e) : n === "zh" ? cn(e) : n === "ja" ? Dn(e) : n === "ko" ? Kn(e) : n === "ru" ? dr(e) : H(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xe(e) : n === "es" ? Be(e) : n === "de" ? at(e) : n === "it" ? wt(e) : n === "pt" ? Ut(e) : n === "zh" ? ln(e) : n === "ja" ? On(e) : n === "ko" ? qn(e) : n === "ru" ? fr(e) : U(e);
}), Or = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Se(e) : n === "es" ? Ve(e) : n === "de" ? ot(e) : n === "it" ? Tt(e) : n === "pt" ? Wt(e) : n === "zh" ? un(e) : n === "ja" ? kn(e) : n === "ko" ? Jn(e) : n === "ru" ? pr(e) : W(e);
}), kr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ce(e) : n === "es" ? He(e) : n === "de" ? st(e) : n === "it" ? Et(e) : n === "pt" ? Gt(e) : n === "zh" ? dn(e) : n === "ja" ? An(e) : n === "ko" ? Yn(e) : n === "ru" ? mr(e) : G(e);
}), Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? we(e) : n === "es" ? Ue(e) : n === "de" ? ct(e) : n === "it" ? Dt(e) : n === "pt" ? Kt(e) : n === "zh" ? fn(e) : n === "ja" ? jn(e) : n === "ko" ? Xn(e) : n === "ru" ? hr(e) : K(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/OpenPositions.tsx";
function jr() {
	let n = [
		{
			title: kr(),
			location: Z(),
			type: X(),
			dept: Y(),
			desc: vr()
		},
		{
			title: _r(),
			location: Z(),
			type: X(),
			dept: Y(),
			desc: br()
		},
		{
			title: Ar(),
			location: Z(),
			type: Er(),
			dept: Sr(),
			desc: J()
		},
		{
			title: xr(),
			location: Or(),
			type: X(),
			dept: yr(),
			desc: Cr()
		},
		{
			title: Dr(),
			location: Z(),
			type: X(),
			dept: Y(),
			desc: wr()
		}
	];
	return t(e, { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Tr()
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 44,
		columnNumber: 7
	}, this), t("div", {
		className: "space-y-4",
		children: n.map((e) => t("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [t("div", { children: [
				t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 54,
					columnNumber: 15
				}, this),
				t("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 57,
					columnNumber: 15
				}, this),
				t("div", {
					className: "mt-2 flex gap-2",
					children: [
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 59,
							columnNumber: 17
						}, this),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 17
						}, this),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 65,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 58,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: Q,
				lineNumber: 53,
				columnNumber: 13
			}, this), t("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: gr()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 70,
				columnNumber: 13
			}, this)]
		}, e.title, !0, {
			fileName: Q,
			lineNumber: 49,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 47,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Q,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
var Mr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Nr({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: Mr,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/OpenPositions.wrapper.tsx";
function Pr() {
	return t(Nr, { children: t(jr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Pr as default };

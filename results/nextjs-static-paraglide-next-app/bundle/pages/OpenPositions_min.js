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
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function ie() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return S(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Senior Frontend Engineer", E = () => "Ingénieur Frontend Senior", D = () => "Ingeniero Frontend Senior", O = () => "Senior Frontend-Entwickler", k = () => "Ingegnere Frontend Senior", A = () => "Engenheiro Frontend Sênior", j = () => "高级前端工程师", M = () => "シニアフロントエンドエンジニア", N = () => "시니어 프론트엔드 엔지니어", P = () => "Старший фронтенд-инженер", F = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", L = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", R = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", z = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", B = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", V = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", H = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", U = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", W = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", G = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Backend Engineer", J = () => "Ingénieur Backend", Y = () => "Ingeniero Backend", ae = () => "Backend-Entwickler", oe = () => "Ingegnere Backend", se = () => "Engenheiro Backend", ce = () => "后端工程师", le = () => "バックエンドエンジニア", ue = () => "백엔드 엔지니어", de = () => "Бэкенд-инженер", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? ae(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : de(e);
}), pe = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", me = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", he = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", ge = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", _e = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", ve = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", ye = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", be = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", xe = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", Se = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : Se(e);
}), we = () => "Technical Writer", Te = () => "Rédacteur technique", Ee = () => "Escritor técnico", De = () => "Technischer Redakteur", Oe = () => "Scrittore tecnico", ke = () => "Redator Técnico", Ae = () => "技术作家", je = () => "テクニカルライター", Me = () => "테크니컬 라이터", Ne = () => "Технический писатель", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? we(e) : n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : Ne(e);
}), Fe = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", Ie = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Le = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Re = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", ze = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Be = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Ve = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", He = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", Ue = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", We = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Fe(e) : n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : We(e);
}), Ke = () => "DevRel Engineer", qe = () => "Ingénieur DevRel", Je = () => "Ingeniero DevRel", Ye = () => "DevRel-Ingenieur", Xe = () => "Ingegnere DevOps", Ze = () => "Engenheiro DevRel", Qe = () => "开发者关系工程师", $e = () => "DevRelエンジニア", et = () => "DevRel 엔지니어", tt = () => "DevRel-инженер", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ke(e) : n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : tt(e);
}), rt = () => "San Francisco / Remote", it = () => "San Francisco / À distance", at = () => "San Francisco / Remoto", ot = () => "San Francisco / Remote", st = () => "San Francisco / Remoto", ct = () => "San Francisco / Remoto", lt = () => "旧金山 / 远程", ut = () => "サンフランシスコ / リモート", dt = () => "샌프란시스코 / 원격", ft = () => "Сан-Франциско / Удаленно", pt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? rt(e) : n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : ft(e);
}), mt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", ht = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", gt = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", _t = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", vt = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", yt = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", bt = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", xt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", St = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", Ct = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? mt(e) : n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : Ct(e);
}), Tt = () => "QA Engineer", Et = () => "Ingénieur QA", Dt = () => "Ingeniero QA", Ot = () => "QA-Ingenieur", kt = () => "Ingegnere QA", At = () => "Engenheiro QA", jt = () => "测试工程师", Mt = () => "QAエンジニア", Nt = () => "QA 엔지니어", Pt = () => "QA-инженер", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Tt(e) : n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : Pt(e);
}), It = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Lt = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", Rt = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", zt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", Bt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Vt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", Ht = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", Ut = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", Wt = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", Gt = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? It(e) : n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : Gt(e);
}), qt = () => "Open Positions", Jt = () => "Postes ouverts", Yt = () => "Puestos vacantes", Xt = () => "Offene Stellen", Zt = () => "Posizioni aperte", Qt = () => "Vagas abertas", $t = () => "开放职位", en = () => "募集中の職種", tn = () => "채용 중인 포지션", nn = () => "Открытые вакансии", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? qt(e) : n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : nn(e);
}), an = () => "Apply Now", on = () => "Postuler maintenant", sn = () => "Postular ahora", cn = () => "Jetzt bewerben", ln = () => "Candidati ora", un = () => "Candidatar-se agora", dn = () => "立即申请", fn = () => "今すぐ応募", pn = () => "지금 지원하기", mn = () => "Подать заявку", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? an(e) : n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : mn(e);
}), gn = () => "Remote", _n = () => "À distance", vn = () => "Remoto", yn = () => "Remote", bn = () => "Remoto", xn = () => "Remoto", Sn = () => "远程", Cn = () => "リモート", wn = () => "원격", Tn = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? gn(e) : n === "fr" ? _n(e) : n === "es" ? vn(e) : n === "de" ? yn(e) : n === "it" ? bn(e) : n === "pt" ? xn(e) : n === "zh" ? Sn(e) : n === "ja" ? Cn(e) : n === "ko" ? wn(e) : Tn(e);
}), En = () => "Full-time", Dn = () => "Temps plein", On = () => "Tiempo completo", kn = () => "Vollzeit", An = () => "Tempo pieno", jn = () => "Tempo integral", Mn = () => "全职", Nn = () => "正社員", Pn = () => "정규직", Fn = () => "Полный рабочий день", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? En(e) : n === "fr" ? Dn(e) : n === "es" ? On(e) : n === "de" ? kn(e) : n === "it" ? An(e) : n === "pt" ? jn(e) : n === "zh" ? Mn(e) : n === "ja" ? Nn(e) : n === "ko" ? Pn(e) : Fn(e);
}), In = () => "Part-time", Ln = () => "Temps partiel", Rn = () => "Tiempo parcial", zn = () => "Teilzeit", Bn = () => "Part-time", Vn = () => "Tempo parcial", Hn = () => "兼职", Un = () => "アルバイト", Wn = () => "아르바이트", Gn = () => "Неполный рабочий день", Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? In(e) : n === "fr" ? Ln(e) : n === "es" ? Rn(e) : n === "de" ? zn(e) : n === "it" ? Bn(e) : n === "pt" ? Vn(e) : n === "zh" ? Hn(e) : n === "ja" ? Un(e) : n === "ko" ? Wn(e) : Gn(e);
}), qn = () => "Engineering", Jn = () => "Ingénierie", Yn = () => "Ingeniería", Xn = () => "Entwicklung", Zn = () => "Ingegneria", Qn = () => "Engenharia", $n = () => "工程", er = () => "エンジニアリング", tr = () => "엔지니어링", nr = () => "Разработка", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? qn(e) : n === "fr" ? Jn(e) : n === "es" ? Yn(e) : n === "de" ? Xn(e) : n === "it" ? Zn(e) : n === "pt" ? Qn(e) : n === "zh" ? $n(e) : n === "ja" ? er(e) : n === "ko" ? tr(e) : nr(e);
}), rr = () => "Documentation", ir = () => "Documentation", ar = () => "Documentación", or = () => "Dokumentation", sr = () => "Documentazione", $ = () => "Documentação", cr = () => "文档", lr = () => "ドキュメンテーション", ur = () => "문서화", dr = () => "Документация", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? rr(e) : n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? $(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : dr(e);
}), pr = () => "Community", mr = () => "Communauté", hr = () => "Comunidad", gr = () => "Community", _r = () => "Comunità", vr = () => "Comunidade", yr = () => "社区", br = () => "コミュニティ", xr = () => "커뮤니티", Sr = () => "Сообщество", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? pr(e) : n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : Sr(e);
});
function wr() {
	let e = [
		{
			title: F(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: K()
		},
		{
			title: fe(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: Ce()
		},
		{
			title: Pe(),
			location: X(),
			type: Kn(),
			dept: fr(),
			desc: Ge()
		},
		{
			title: nt(),
			location: pt(),
			type: Z(),
			dept: Cr(),
			desc: wt()
		},
		{
			title: Ft(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: Kt()
		}
	];
	return a(r, { children: [i("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: rn()
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
				children: hn()
			})]
		}, e.title))
	})] });
}
function Tr() {
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
function Er(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Dr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Er("AppRoot", c);
	}, [c]), e(() => {
		x(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Tr();
	}, []), i(r, { children: a });
}
function Or({ children: e }) {
	return i(Dr, { children: e });
}
function kr() {
	return i(Or, { children: i(wr, {}) });
}
export { kr as default };

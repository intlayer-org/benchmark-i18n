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
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (y(t) && v.has(t)) {
			let e = v.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
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
	let i = [], s = o;
	typeof window < "u" && window.location?.href && (s = u(window.location.href));
	for (let t of s) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (y(t) && v.has(t)) {
		let n = v.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function ie() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return _(e);
}
var v = /* @__PURE__ */ new Map();
function y(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var b = () => "Senior Frontend Engineer", x = () => "Ingénieur Frontend Senior", S = () => "Ingeniero Frontend Senior", C = () => "Senior Frontend-Entwickler", w = () => "Ingegnere Frontend Senior", T = () => "Engenheiro Frontend Sênior", E = () => "高级前端工程师", D = () => "シニアフロントエンドエンジニア", O = () => "시니어 프론트엔드 엔지니어", k = () => "Старший фронтенд-инженер", A = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? b(e) : n === "fr" ? x(e) : n === "es" ? S(e) : n === "de" ? C(e) : n === "it" ? w(e) : n === "pt" ? T(e) : n === "zh" ? E(e) : n === "ja" ? D(e) : n === "ko" ? O(e) : k(e);
}), j = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", M = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", N = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", P = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", F = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", I = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", L = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", R = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", z = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", B = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", V = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? j(e) : n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : B(e);
}), H = () => "Backend Engineer", U = () => "Ingénieur Backend", W = () => "Ingeniero Backend", G = () => "Backend-Entwickler", K = () => "Ingegnere Backend", q = () => "Engenheiro Backend", J = () => "后端工程师", Y = () => "バックエンドエンジニア", ae = () => "백엔드 엔지니어", oe = () => "Бэкенд-инженер", se = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? H(e) : n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? Y(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", le = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", ue = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", de = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", fe = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", pe = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", me = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", he = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", ge = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", _e = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Technical Writer", be = () => "Rédacteur technique", xe = () => "Escritor técnico", Se = () => "Technischer Redakteur", Ce = () => "Scrittore tecnico", we = () => "Redator Técnico", Te = () => "技术作家", Ee = () => "テクニカルライター", De = () => "테크니컬 라이터", Oe = () => "Технический писатель", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", je = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Me = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Ne = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Pe = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Fe = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Ie = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", Le = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", Re = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", ze = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "DevRel Engineer", He = () => "Ingénieur DevRel", Ue = () => "Ingeniero DevRel", We = () => "DevRel-Ingenieur", Ge = () => "Ingegnere DevOps", Ke = () => "Engenheiro DevRel", qe = () => "开发者关系工程师", Je = () => "DevRelエンジニア", Ye = () => "DevRel 엔지니어", Xe = () => "DevRel-инженер", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "San Francisco / Remote", $e = () => "San Francisco / À distance", et = () => "San Francisco / Remoto", tt = () => "San Francisco / Remote", nt = () => "San Francisco / Remoto", rt = () => "San Francisco / Remoto", it = () => "旧金山 / 远程", at = () => "サンフランシスコ / リモート", ot = () => "샌프란시스코 / 원격", st = () => "Сан-Франциско / Удаленно", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", ut = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", dt = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", ft = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", pt = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", mt = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", ht = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", gt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", _t = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", vt = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "QA Engineer", xt = () => "Ingénieur QA", St = () => "Ingeniero QA", Ct = () => "QA-Ingenieur", wt = () => "Ingegnere QA", Tt = () => "Engenheiro QA", Et = () => "测试工程师", Dt = () => "QAエンジニア", Ot = () => "QA 엔지니어", kt = () => "QA-инженер", At = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Mt = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", Nt = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Pt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", Ft = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", It = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", Lt = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", Rt = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", zt = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", Bt = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : Bt(e);
}), Ht = () => "Open Positions", Ut = () => "Postes ouverts", Wt = () => "Puestos vacantes", Gt = () => "Offene Stellen", Kt = () => "Posizioni aperte", qt = () => "Vagas abertas", Jt = () => "开放职位", Yt = () => "募集中の職種", Xt = () => "채용 중인 포지션", Zt = () => "Открытые вакансии", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
}), $t = () => "Apply Now", en = () => "Postuler maintenant", tn = () => "Postular ahora", nn = () => "Jetzt bewerben", rn = () => "Candidati ora", an = () => "Candidatar-se agora", on = () => "立即申请", sn = () => "今すぐ応募", cn = () => "지금 지원하기", ln = () => "Подать заявку", un = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? $t(e) : n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : ln(e);
}), dn = () => "Remote", fn = () => "À distance", pn = () => "Remoto", mn = () => "Remote", hn = () => "Remoto", gn = () => "Remoto", _n = () => "远程", vn = () => "リモート", yn = () => "원격", bn = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? dn(e) : n === "fr" ? fn(e) : n === "es" ? pn(e) : n === "de" ? mn(e) : n === "it" ? hn(e) : n === "pt" ? gn(e) : n === "zh" ? _n(e) : n === "ja" ? vn(e) : n === "ko" ? yn(e) : bn(e);
}), xn = () => "Full-time", Sn = () => "Temps plein", Cn = () => "Tiempo completo", wn = () => "Vollzeit", Tn = () => "Tempo pieno", En = () => "Tempo integral", Dn = () => "全职", On = () => "正社員", kn = () => "정규직", An = () => "Полный рабочий день", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), jn = () => "Part-time", Mn = () => "Temps partiel", Nn = () => "Tiempo parcial", Pn = () => "Teilzeit", Fn = () => "Part-time", In = () => "Tempo parcial", Ln = () => "兼职", Rn = () => "アルバイト", zn = () => "아르바이트", Bn = () => "Неполный рабочий день", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Engineering", Un = () => "Ingénierie", Wn = () => "Ingeniería", Gn = () => "Entwicklung", Kn = () => "Ingegneria", qn = () => "Engenharia", Jn = () => "工程", Yn = () => "エンジニアリング", Xn = () => "엔지니어링", Zn = () => "Разработка", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), Qn = () => "Documentation", $n = () => "Documentation", er = () => "Documentación", $ = () => "Dokumentation", tr = () => "Documentazione", nr = () => "Documentação", rr = () => "文档", ir = () => "ドキュメンテーション", ar = () => "문서화", or = () => "Документация", sr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qn(e) : n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? $(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : or(e);
}), cr = () => "Community", lr = () => "Communauté", ur = () => "Comunidad", dr = () => "Community", fr = () => "Comunità", pr = () => "Comunidade", mr = () => "社区", hr = () => "コミュニティ", gr = () => "커뮤니티", _r = () => "Сообщество", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? cr(e) : n === "fr" ? lr(e) : n === "es" ? ur(e) : n === "de" ? dr(e) : n === "it" ? fr(e) : n === "pt" ? pr(e) : n === "zh" ? mr(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : _r(e);
});
function yr() {
	let r = [
		{
			title: A(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: V()
		},
		{
			title: se(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: ve()
		},
		{
			title: ke(),
			location: X(),
			type: Vn(),
			dept: sr(),
			desc: Be()
		},
		{
			title: Ze(),
			location: ct(),
			type: Z(),
			dept: vr(),
			desc: yt()
		},
		{
			title: At(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: Vt()
		}
	];
	return n(e, { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: Qt()
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
				children: un()
			})]
		}, e.title))
	})] });
}
g("en", { reload: !1 });
function br({ children: n }) {
	return t(e, { children: n });
}
function xr() {
	return t(br, { children: t(yr, {}) });
}
export { xr as default };

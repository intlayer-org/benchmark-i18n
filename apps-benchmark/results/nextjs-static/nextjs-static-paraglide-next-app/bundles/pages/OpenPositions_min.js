import { Profiler as e, useEffect as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
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
], u = [], d, f;
function te(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function p(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = l;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!h && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function ie() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return x(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Senior Frontend Engineer", T = () => "Ingénieur Frontend Senior", E = () => "Ingeniero Frontend Senior", D = () => "Senior Frontend-Entwickler", O = () => "Ingegnere Frontend Senior", k = () => "Engenheiro Frontend Sênior", A = () => "高级前端工程师", j = () => "シニアフロントエンドエンジニア", M = () => "시니어 프론트엔드 엔지니어", N = () => "Старший фронтенд-инженер", P = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", I = () => "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.", L = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", R = () => "Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.", z = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", B = () => "Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", V = () => "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。", H = () => "React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。", U = () => "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.", W = () => "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Backend Engineer", q = () => "Ingénieur Backend", J = () => "Ingeniero Backend", Y = () => "Backend-Entwickler", ae = () => "Ingegnere Backend", oe = () => "Engenheiro Backend", se = () => "后端工程师", ce = () => "バックエンドエンジニア", le = () => "백엔드 엔지니어", ue = () => "Бэкенд-инженер", de = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? ae(e) : n === "pt" ? oe(e) : n === "zh" ? se(e) : n === "ja" ? ce(e) : n === "ko" ? le(e) : ue(e);
}), fe = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", pe = () => "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.", me = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.", he = () => "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", ge = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.", _e = () => "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.", ve = () => "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", ye = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。", be = () => "매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.", xe = () => "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.", Se = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? fe(e) : n === "fr" ? pe(e) : n === "es" ? me(e) : n === "de" ? he(e) : n === "it" ? ge(e) : n === "pt" ? _e(e) : n === "zh" ? ve(e) : n === "ja" ? ye(e) : n === "ko" ? be(e) : xe(e);
}), Ce = () => "Technical Writer", we = () => "Rédacteur technique", Te = () => "Escritor técnico", Ee = () => "Technischer Redakteur", De = () => "Scrittore tecnico", Oe = () => "Redator Técnico", ke = () => "技术作家", Ae = () => "テクニカルライター", je = () => "테크니컬 라이터", Me = () => "Технический писатель", Ne = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ce(e) : n === "fr" ? we(e) : n === "es" ? Te(e) : n === "de" ? Ee(e) : n === "it" ? De(e) : n === "pt" ? Oe(e) : n === "zh" ? ke(e) : n === "ja" ? Ae(e) : n === "ko" ? je(e) : Me(e);
}), Pe = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", Fe = () => "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.", Ie = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Le = () => "Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Re = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", ze = () => "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Be = () => "为我们的基准测试平台创建全面的指南、API 参考和教程。", Ve = () => "私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。", He = () => "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.", Ue = () => "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.", We = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Pe(e) : n === "fr" ? Fe(e) : n === "es" ? Ie(e) : n === "de" ? Le(e) : n === "it" ? Re(e) : n === "pt" ? ze(e) : n === "zh" ? Be(e) : n === "ja" ? Ve(e) : n === "ko" ? He(e) : Ue(e);
}), Ge = () => "DevRel Engineer", Ke = () => "Ingénieur DevRel", qe = () => "Ingeniero DevRel", Je = () => "DevRel-Ingenieur", Ye = () => "Ingegnere DevOps", Xe = () => "Engenheiro DevRel", Ze = () => "开发者关系工程师", Qe = () => "DevRelエンジニア", $e = () => "DevRel 엔지니어", et = () => "DevRel-инженер", tt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ge(e) : n === "fr" ? Ke(e) : n === "es" ? qe(e) : n === "de" ? Je(e) : n === "it" ? Ye(e) : n === "pt" ? Xe(e) : n === "zh" ? Ze(e) : n === "ja" ? Qe(e) : n === "ko" ? $e(e) : et(e);
}), nt = () => "San Francisco / Remote", rt = () => "San Francisco / À distance", it = () => "San Francisco / Remoto", at = () => "San Francisco / Remote", ot = () => "San Francisco / Remoto", st = () => "San Francisco / Remoto", ct = () => "旧金山 / 远程", lt = () => "サンフランシスコ / リモート", ut = () => "샌프란시스코 / 원격", dt = () => "Сан-Франциско / Удаленно", ft = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? nt(e) : n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : dt(e);
}), pt = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", mt = () => "Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.", ht = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", gt = () => "Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", _t = () => "Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.", vt = () => "Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.", yt = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", bt = () => "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。", xt = () => "발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.", St = () => "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.", Ct = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? pt(e) : n === "fr" ? mt(e) : n === "es" ? ht(e) : n === "de" ? gt(e) : n === "it" ? _t(e) : n === "pt" ? vt(e) : n === "zh" ? yt(e) : n === "ja" ? bt(e) : n === "ko" ? xt(e) : St(e);
}), wt = () => "QA Engineer", Tt = () => "Ingénieur QA", Et = () => "Ingeniero QA", Dt = () => "QA-Ingenieur", Ot = () => "Ingegnere QA", kt = () => "Engenheiro QA", At = () => "测试工程师", jt = () => "QAエンジニア", Mt = () => "QA 엔지니어", Nt = () => "QA-инженер", Pt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? wt(e) : n === "fr" ? Tt(e) : n === "es" ? Et(e) : n === "de" ? Dt(e) : n === "it" ? Ot(e) : n === "pt" ? kt(e) : n === "zh" ? At(e) : n === "ja" ? jt(e) : n === "ko" ? Mt(e) : Nt(e);
}), Ft = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", It = () => "Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.", Lt = () => "Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Rt = () => "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.", zt = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Bt = () => "Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.", Vt = () => "通过严格的测试和验证确保基准测试结果的准确性和可靠性。", Ht = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", Ut = () => "철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.", Wt = () => "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.", Gt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ft(e) : n === "fr" ? It(e) : n === "es" ? Lt(e) : n === "de" ? Rt(e) : n === "it" ? zt(e) : n === "pt" ? Bt(e) : n === "zh" ? Vt(e) : n === "ja" ? Ht(e) : n === "ko" ? Ut(e) : Wt(e);
}), Kt = () => "Open Positions", qt = () => "Postes ouverts", Jt = () => "Puestos vacantes", Yt = () => "Offene Stellen", Xt = () => "Posizioni aperte", Zt = () => "Vagas abertas", Qt = () => "开放职位", $t = () => "募集中の職種", en = () => "채용 중인 포지션", tn = () => "Открытые вакансии", nn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Kt(e) : n === "fr" ? qt(e) : n === "es" ? Jt(e) : n === "de" ? Yt(e) : n === "it" ? Xt(e) : n === "pt" ? Zt(e) : n === "zh" ? Qt(e) : n === "ja" ? $t(e) : n === "ko" ? en(e) : tn(e);
}), rn = () => "Apply Now", an = () => "Postuler maintenant", on = () => "Postular ahora", sn = () => "Jetzt bewerben", cn = () => "Candidati ora", ln = () => "Candidatar-se agora", un = () => "立即申请", dn = () => "今すぐ応募", fn = () => "지금 지원하기", pn = () => "Подать заявку", mn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? rn(e) : n === "fr" ? an(e) : n === "es" ? on(e) : n === "de" ? sn(e) : n === "it" ? cn(e) : n === "pt" ? ln(e) : n === "zh" ? un(e) : n === "ja" ? dn(e) : n === "ko" ? fn(e) : pn(e);
}), hn = () => "Remote", gn = () => "À distance", _n = () => "Remoto", vn = () => "Remote", yn = () => "Remoto", bn = () => "Remoto", xn = () => "远程", Sn = () => "リモート", Cn = () => "원격", wn = () => "Удаленно", X = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? hn(e) : n === "fr" ? gn(e) : n === "es" ? _n(e) : n === "de" ? vn(e) : n === "it" ? yn(e) : n === "pt" ? bn(e) : n === "zh" ? xn(e) : n === "ja" ? Sn(e) : n === "ko" ? Cn(e) : wn(e);
}), Tn = () => "Full-time", En = () => "Temps plein", Dn = () => "Tiempo completo", On = () => "Vollzeit", kn = () => "Tempo pieno", An = () => "Tempo integral", jn = () => "全职", Mn = () => "正社員", Nn = () => "정규직", Pn = () => "Полный рабочий день", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Tn(e) : n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : Pn(e);
}), Fn = () => "Part-time", In = () => "Temps partiel", Ln = () => "Tiempo parcial", Rn = () => "Teilzeit", zn = () => "Part-time", Bn = () => "Tempo parcial", Vn = () => "兼职", Hn = () => "アルバイト", Un = () => "아르바이트", Wn = () => "Неполный рабочий день", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Fn(e) : n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : Wn(e);
}), Kn = () => "Engineering", qn = () => "Ingénierie", Jn = () => "Ingeniería", Yn = () => "Entwicklung", Xn = () => "Ingegneria", Zn = () => "Engenharia", Qn = () => "工程", $n = () => "エンジニアリング", er = () => "엔지니어링", tr = () => "Разработка", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Kn(e) : n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : tr(e);
}), nr = () => "Documentation", rr = () => "Documentation", ir = () => "Documentación", ar = () => "Dokumentation", or = () => "Documentazione", sr = () => "Documentação", $ = () => "文档", cr = () => "ドキュメンテーション", lr = () => "문서화", ur = () => "Документация", dr = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? nr(e) : n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? $(e) : n === "ja" ? cr(e) : n === "ko" ? lr(e) : ur(e);
}), fr = () => "Community", pr = () => "Communauté", mr = () => "Comunidad", hr = () => "Community", gr = () => "Comunità", _r = () => "Comunidade", vr = () => "社区", yr = () => "コミュニティ", br = () => "커뮤니티", xr = () => "Сообщество", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? fr(e) : n === "fr" ? pr(e) : n === "es" ? mr(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : xr(e);
});
function Cr() {
	let e = [
		{
			title: P(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: G()
		},
		{
			title: de(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: Se()
		},
		{
			title: Ne(),
			location: X(),
			type: Gn(),
			dept: dr(),
			desc: We()
		},
		{
			title: tt(),
			location: ft(),
			type: Z(),
			dept: Sr(),
			desc: Ct()
		},
		{
			title: Pt(),
			location: X(),
			type: Z(),
			dept: Q(),
			desc: Gt()
		}
	];
	return i(n, { children: [r("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: nn()
	}), r("div", {
		className: "space-y-4",
		children: e.map((e) => i("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [i("div", { children: [
				r("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				r("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				i("div", {
					className: "mt-2 flex gap-2",
					children: [
						r("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						r("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						r("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), r("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: mn()
			})]
		}, e.title))
	})] });
}
function wr() {
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
function Tr(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Er({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		b(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		wr();
	}, []), r(e, {
		id: "AppRoot",
		onRender: Tr,
		children: n
	});
}
function Dr({ children: e }) {
	return r(Er, { children: e });
}
function Or() {
	return r(Dr, { children: r(Cr, {}) });
}
export { Or as default };

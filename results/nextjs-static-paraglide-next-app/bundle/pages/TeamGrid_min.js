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
	!d && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
	!d && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
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
function E() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var k, A;
function j(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = y(new URL(t, "http://example.com")), r = D(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return k = t, A = a, a;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Aisha Patel", I = () => "Aisha Patel", L = () => "Aisha Patel", R = () => "Aisha Patel", z = () => "Aisha Patel", B = () => "Aisha Patel", V = () => "Aisha Patel", H = () => "Aisha Patel", U = () => "Aisha Patel", W = () => "Айша Патель", G = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Community Manager", q = () => "Responsable de communauté", J = () => "Responsable de la comunidad", Y = () => "Community-Managerin", X = () => "Responsabile della comunità", ie = () => "Gerente de Comunidade", ae = () => "社区经理", oe = () => "コミュニティマネージャー", se = () => "커뮤니티 매니저", ce = () => "Комьюнити-менеджер", le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : K(e);
}), ue = () => "Data Analyst", de = () => "Analyste de données", fe = () => "Analista de datos", pe = () => "Datenanalyst", me = () => "Analista dati", he = () => "Analista de Dados", ge = () => "数据分析师", _e = () => "データアナリスト", ve = () => "데이터 분석가", ye = () => "Аналитик данных", be = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "Developer Advocate", Se = () => "Developer Advocate", Ce = () => "Developer Advocate", we = () => "Developer Advocate", Te = () => "Developer Advocate", Ee = () => "Developer Advocate", De = () => "开发者倡导者", Oe = () => "デベロッパーアドボケイト", ke = () => "개발자 에반젤리스트", Ae = () => "Адвокат разработчиков", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Elena Kowalski", Ne = () => "Elena Kowalski", Pe = () => "Elena Kowalski", Fe = () => "Elena Kowalski", Ie = () => "Elena Kowalski", Le = () => "Elena Kowalski", Re = () => "Elena Kowalski", ze = () => "Elena Kowalski", Be = () => "Elena Kowalski", Ve = () => "Елена Ковальски", He = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", We = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", Ge = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Ke = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", qe = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", Je = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", Ye = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", Xe = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", Ze = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", Qe = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", tt = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", nt = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", rt = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", it = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", at = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", ot = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", st = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", ct = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", lt = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "Founder & Lead Engineer", ft = () => "Fondatrice & Ingénieure principale", pt = () => "Fundadora e ingeniera principal", mt = () => "Gründerin & Leitende Ingenieurin", ht = () => "Fondatrice e Responsabile tecnico", gt = () => "Fundadora e Engenheira Líder", _t = () => "创始人兼首席工程师", vt = () => "創設者 & リードエンジニア", yt = () => "설립자 겸 수석 엔지니어", bt = () => "Основатель и ведущий инженер", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "Full-Stack Developer", Ct = () => "Développeur Full-Stack", wt = () => "Desarrollador Full-Stack", Tt = () => "Full-Stack-Entwickler", Et = () => "Sviluppatore Full-Stack", Dt = () => "Desenvolvedor Full-Stack", Ot = () => "全栈开发人员", kt = () => "フルスタックデベロッパー", At = () => "풀스택 개발자", jt = () => "Фулстек-разработчик", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Nt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Pt = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", Ft = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", It = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Lt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Rt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", zt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Bt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", Vt = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", Ht = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Wt = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Gt = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", Kt = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", qt = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", Jt = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", Yt = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", Xt = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Zt = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", Qt = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", $t = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", en = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), tn = () => "Marcus Weber", nn = () => "Marcus Weber", rn = () => "Marcus Weber", an = () => "Marcus Weber", on = () => "Marcus Weber", sn = () => "Marcus Weber", cn = () => "Marcus Weber", ln = () => "Marcus Weber", un = () => "Marcus Weber", dn = () => "Маркус Вебер", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : tn(e);
}), pn = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", mn = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", hn = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", gn = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", _n = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", vn = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", yn = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", bn = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", xn = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", Sn = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "Performance Engineer", Tn = () => "Ingénieur performance", En = () => "Ingeniero de rendimiento", Dn = () => "Performance-Ingenieur", On = () => "Ingegnere delle prestazioni", kn = () => "Engenheiro de Performance", An = () => "性能工程师", jn = () => "パフォーマンスエンジニア", Mn = () => "성능 엔지니어", Nn = () => "Инженер по производительности", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Fn = () => "Sarah Chen", In = () => "Sarah Chen", Ln = () => "Sarah Chen", Rn = () => "Sarah Chen", zn = () => "Sarah Chen", Bn = () => "Sarah Chen", Vn = () => "Sarah Chen", Hn = () => "Sarah Chen", Un = () => "Sarah Chen", Wn = () => "Сара Чен", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", qn = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", Jn = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Yn = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Xn = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Zn = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Qn = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", $n = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", er = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", tr = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", nr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : n === "ru" ? tr(e) : Kn(e);
}), rr = () => "Tomás Rodríguez", ir = () => "Tomás Rodríguez", ar = () => "Tomás Rodríguez", or = () => "Tomás Rodríguez", sr = () => "Tomás Rodríguez", cr = () => "Tomás Rodríguez", lr = () => "Tomás Rodríguez", Z = () => "Tomás Rodríguez", ur = () => "Tomás Rodríguez", dr = () => "Томас Родригес", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? Z(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : rr(e);
}), pr = () => "Yuki Tanaka", mr = () => "Yuki Tanaka", hr = () => "Yuki Tanaka", gr = () => "Yuki Tanaka", _r = () => "Yuki Tanaka", vr = () => "Yuki Tanaka", yr = () => "Yuki Tanaka", br = () => "Yuki Tanaka", xr = () => "Yuki Tanaka", Sr = () => "Юки Танака", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : pr(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/team/TeamGrid.tsx";
function wr() {
	let e = [
		{
			name: Gn(),
			role: xt(),
			bio: ut()
		},
		{
			name: fn(),
			role: Pn(),
			bio: nr()
		},
		{
			name: G(),
			role: je(),
			bio: Cn()
		},
		{
			name: fr(),
			role: Mt(),
			bio: Ut()
		},
		{
			name: Cr(),
			role: be(),
			bio: $e()
		},
		{
			name: He(),
			role: le(),
			bio: en()
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => i("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				i("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 46,
					columnNumber: 11
				}, this),
				i("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				i("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 53,
					columnNumber: 11
				}, this),
				i("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 54,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 42,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 40,
		columnNumber: 5
	}, this);
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
var Dr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Or({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Er("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Tr();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Dr,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var kr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Ar({ children: e }) {
	return i(Or, { children: e }, void 0, !1, {
		fileName: kr,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/team/TeamGrid.wrapper.tsx";
function jr() {
	return i(Ar, { children: i(wr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { jr as default };

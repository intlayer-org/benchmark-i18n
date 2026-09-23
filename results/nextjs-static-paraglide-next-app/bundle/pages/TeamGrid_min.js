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
	!f && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function k() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function A(e) {
	return j(e);
}
function j(e) {
	let t = x(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var M, N;
function P(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (M === t) return N;
	let n = x(new URL(t, "http://example.com")), r = A(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return M = t, N = a, a;
}
function F(e) {
	let t = P(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var R = () => "Aisha Patel", z = () => "Aisha Patel", B = () => "Aisha Patel", V = () => "Aisha Patel", H = () => "Aisha Patel", U = () => "Aisha Patel", W = () => "Aisha Patel", G = () => "Aisha Patel", K = () => "Aisha Patel", q = () => "Айша Патель", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : n === "ru" ? q(e) : R(e);
}), Y = () => "Community Manager", X = () => "Responsable de communauté", Z = () => "Responsable de la comunidad", Q = () => "Community-Managerin", ne = () => "Responsabile della comunità", re = () => "Gerente de Comunidade", ie = () => "社区经理", ae = () => "コミュニティマネージャー", oe = () => "커뮤니티 매니저", se = () => "Комьюнити-менеджер", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : Y(e);
}), le = () => "Data Analyst", ue = () => "Analyste de données", de = () => "Analista de datos", fe = () => "Datenanalyst", pe = () => "Analista dati", me = () => "Analista de Dados", he = () => "数据分析师", ge = () => "データアナリスト", _e = () => "데이터 분석가", ve = () => "Аналитик данных", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Developer Advocate", xe = () => "Developer Advocate", Se = () => "Developer Advocate", Ce = () => "Developer Advocate", we = () => "Developer Advocate", Te = () => "Developer Advocate", Ee = () => "开发者倡导者", De = () => "デベロッパーアドボケイト", Oe = () => "개발자 에반젤리스트", ke = () => "Адвокат разработчиков", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Elena Kowalski", Me = () => "Elena Kowalski", Ne = () => "Elena Kowalski", Pe = () => "Elena Kowalski", Fe = () => "Elena Kowalski", Ie = () => "Elena Kowalski", Le = () => "Elena Kowalski", Re = () => "Elena Kowalski", ze = () => "Elena Kowalski", Be = () => "Елена Ковальски", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", Ue = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", We = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Ge = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", Ke = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", qe = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", Je = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", Ye = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", Xe = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", Ze = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", et = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", tt = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", nt = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", rt = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", it = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", at = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", ot = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", st = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", ct = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Founder & Lead Engineer", dt = () => "Fondatrice & Ingénieure principale", ft = () => "Fundadora e ingeniera principal", pt = () => "Gründerin & Leitende Ingenieurin", mt = () => "Fondatrice e Responsabile tecnico", ht = () => "Fundadora e Engenheira Líder", gt = () => "创始人兼首席工程师", _t = () => "創設者 & リードエンジニア", vt = () => "설립자 겸 수석 엔지니어", yt = () => "Основатель и ведущий инженер", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "Full-Stack Developer", St = () => "Développeur Full-Stack", Ct = () => "Desarrollador Full-Stack", wt = () => "Full-Stack-Entwickler", Tt = () => "Sviluppatore Full-Stack", Et = () => "Desenvolvedor Full-Stack", Dt = () => "全栈开发人员", Ot = () => "フルスタックデベロッパー", kt = () => "풀스택 개발자", At = () => "Фулстек-разработчик", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Nt = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", Pt = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Ft = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", It = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Lt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", Rt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", zt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", Bt = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", Vt = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Wt = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", Gt = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", Kt = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", qt = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", Jt = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", Yt = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Xt = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", Zt = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", Qt = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "Marcus Weber", tn = () => "Marcus Weber", nn = () => "Marcus Weber", rn = () => "Marcus Weber", an = () => "Marcus Weber", on = () => "Marcus Weber", sn = () => "Marcus Weber", cn = () => "Marcus Weber", ln = () => "Marcus Weber", un = () => "Маркус Вебер", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", pn = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", mn = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", hn = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", gn = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", _n = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", vn = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", yn = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", bn = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", xn = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Performance Engineer", wn = () => "Ingénieur performance", Tn = () => "Ingeniero de rendimiento", En = () => "Performance-Ingenieur", Dn = () => "Ingegnere delle prestazioni", On = () => "Engenheiro de Performance", kn = () => "性能工程师", An = () => "パフォーマンスエンジニア", jn = () => "성능 엔지니어", Mn = () => "Инженер по производительности", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Sarah Chen", Fn = () => "Sarah Chen", In = () => "Sarah Chen", Ln = () => "Sarah Chen", Rn = () => "Sarah Chen", zn = () => "Sarah Chen", Bn = () => "Sarah Chen", Vn = () => "Sarah Chen", Hn = () => "Sarah Chen", Un = () => "Сара Чен", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
}), Gn = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Kn = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", qn = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Jn = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Yn = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Xn = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Zn = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", Qn = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", $n = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", er = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Gn(e);
}), nr = () => "Tomás Rodríguez", rr = () => "Tomás Rodríguez", ir = () => "Tomás Rodríguez", ar = () => "Tomás Rodríguez", or = () => "Tomás Rodríguez", sr = () => "Tomás Rodríguez", $ = () => "Tomás Rodríguez", cr = () => "Tomás Rodríguez", lr = () => "Tomás Rodríguez", ur = () => "Томас Родригес", dr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? $(e) : n === "ja" ? cr(e) : n === "ko" ? lr(e) : n === "ru" ? ur(e) : nr(e);
}), fr = () => "Yuki Tanaka", pr = () => "Yuki Tanaka", mr = () => "Yuki Tanaka", hr = () => "Yuki Tanaka", gr = () => "Yuki Tanaka", _r = () => "Yuki Tanaka", vr = () => "Yuki Tanaka", yr = () => "Yuki Tanaka", br = () => "Yuki Tanaka", xr = () => "Юки Танака", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pr(e) : n === "es" ? mr(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : n === "ru" ? xr(e) : fr(e);
});
function Cr() {
	let e = [
		{
			name: Wn(),
			role: bt(),
			bio: lt()
		},
		{
			name: dn(),
			role: Nn(),
			bio: tr()
		},
		{
			name: J(),
			role: Ae(),
			bio: Sn()
		},
		{
			name: dr(),
			role: jt(),
			bio: Ht()
		},
		{
			name: Sr(),
			role: ye(),
			bio: Qe()
		},
		{
			name: Ve(),
			role: ce(),
			bio: $t()
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => a("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				i("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				i("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				i("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				i("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
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
function Tr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Er({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Tr("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		wr();
	}, []), i(r, { children: a });
}
function Dr({ children: e }) {
	return i(Er, { children: e });
}
function Or() {
	return i(Dr, { children: i(Cr, {}) });
}
export { Or as default };

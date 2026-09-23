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
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
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
	!l && typeof window < "u" && window.location?.href && (c = j(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
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
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), i = E(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Aisha Patel", F = () => "Aisha Patel", I = () => "Aisha Patel", L = () => "Aisha Patel", R = () => "Aisha Patel", z = () => "Aisha Patel", B = () => "Aisha Patel", V = () => "Aisha Patel", H = () => "Aisha Patel", U = () => "Айша Патель", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Community Manager", K = () => "Responsable de communauté", q = () => "Responsable de la comunidad", J = () => "Community-Managerin", Y = () => "Responsabile della comunità", X = () => "Gerente de Comunidade", Z = () => "社区经理", Q = () => "コミュニティマネージャー", ne = () => "커뮤니티 매니저", re = () => "Комьюнити-менеджер", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : G(e);
}), ae = () => "Data Analyst", oe = () => "Analyste de données", se = () => "Analista de datos", ce = () => "Datenanalyst", le = () => "Analista dati", ue = () => "Analista de Dados", de = () => "数据分析师", fe = () => "データアナリスト", pe = () => "데이터 분석가", me = () => "Аналитик данных", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Developer Advocate", _e = () => "Developer Advocate", ve = () => "Developer Advocate", ye = () => "Developer Advocate", be = () => "Developer Advocate", xe = () => "Developer Advocate", Se = () => "开发者倡导者", Ce = () => "デベロッパーアドボケイト", we = () => "개발자 에반젤리스트", Te = () => "Адвокат разработчиков", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Elena Kowalski", Oe = () => "Elena Kowalski", ke = () => "Elena Kowalski", Ae = () => "Elena Kowalski", je = () => "Elena Kowalski", Me = () => "Elena Kowalski", Ne = () => "Elena Kowalski", Pe = () => "Elena Kowalski", Fe = () => "Elena Kowalski", Ie = () => "Елена Ковальски", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Re = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", ze = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", Be = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Ve = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", He = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", Ue = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", We = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", Ge = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", Ke = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", qe = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : Re(e);
}), Ye = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", Xe = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", Ze = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", Qe = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", $e = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", et = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", tt = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", nt = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", rt = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", it = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : n === "ru" ? it(e) : Ye(e);
}), ot = () => "Founder & Lead Engineer", st = () => "Fondatrice & Ingénieure principale", ct = () => "Fundadora e ingeniera principal", lt = () => "Gründerin & Leitende Ingenieurin", ut = () => "Fondatrice e Responsabile tecnico", dt = () => "Fundadora e Engenheira Líder", ft = () => "创始人兼首席工程师", pt = () => "創設者 & リードエンジニア", mt = () => "설립자 겸 수석 엔지니어", ht = () => "Основатель и ведущий инженер", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : n === "ru" ? ht(e) : ot(e);
}), _t = () => "Full-Stack Developer", vt = () => "Développeur Full-Stack", yt = () => "Desarrollador Full-Stack", bt = () => "Full-Stack-Entwickler", xt = () => "Sviluppatore Full-Stack", St = () => "Desenvolvedor Full-Stack", Ct = () => "全栈开发人员", wt = () => "フルスタックデベロッパー", Tt = () => "풀스택 개발자", Et = () => "Фулстек-разработчик", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : n === "ru" ? Et(e) : _t(e);
}), Ot = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", kt = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", At = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", jt = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Mt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Nt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", Pt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Ft = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", It = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", Lt = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : n === "ru" ? Lt(e) : Ot(e);
}), zt = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Bt = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", Vt = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", Ht = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", Ut = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", Wt = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", Gt = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Kt = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", qt = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", Jt = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "Marcus Weber", Zt = () => "Marcus Weber", Qt = () => "Marcus Weber", $t = () => "Marcus Weber", en = () => "Marcus Weber", tn = () => "Marcus Weber", nn = () => "Marcus Weber", rn = () => "Marcus Weber", an = () => "Marcus Weber", on = () => "Маркус Вебер", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", ln = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", un = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", dn = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", fn = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", pn = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", mn = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", hn = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", gn = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", _n = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "Performance Engineer", bn = () => "Ingénieur performance", xn = () => "Ingeniero de rendimiento", Sn = () => "Performance-Ingenieur", Cn = () => "Ingegnere delle prestazioni", wn = () => "Engenheiro de Performance", Tn = () => "性能工程师", En = () => "パフォーマンスエンジニア", Dn = () => "성능 엔지니어", On = () => "Инженер по производительности", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "Sarah Chen", jn = () => "Sarah Chen", Mn = () => "Sarah Chen", Nn = () => "Sarah Chen", Pn = () => "Sarah Chen", Fn = () => "Sarah Chen", In = () => "Sarah Chen", Ln = () => "Sarah Chen", Rn = () => "Sarah Chen", zn = () => "Сара Чен", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Hn = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", Un = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Wn = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Gn = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Kn = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", qn = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", Jn = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", Yn = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", Xn = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Tomás Rodríguez", $n = () => "Tomás Rodríguez", er = () => "Tomás Rodríguez", $ = () => "Tomás Rodríguez", tr = () => "Tomás Rodríguez", nr = () => "Tomás Rodríguez", rr = () => "Tomás Rodríguez", ir = () => "Tomás Rodríguez", ar = () => "Tomás Rodríguez", or = () => "Томас Родригес", sr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? $(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : n === "ru" ? or(e) : Qn(e);
}), cr = () => "Yuki Tanaka", lr = () => "Yuki Tanaka", ur = () => "Yuki Tanaka", dr = () => "Yuki Tanaka", fr = () => "Yuki Tanaka", pr = () => "Yuki Tanaka", mr = () => "Yuki Tanaka", hr = () => "Yuki Tanaka", gr = () => "Yuki Tanaka", _r = () => "Юки Танака", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lr(e) : n === "es" ? ur(e) : n === "de" ? dr(e) : n === "it" ? fr(e) : n === "pt" ? pr(e) : n === "zh" ? mr(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : cr(e);
});
function yr() {
	let e = [
		{
			name: Bn(),
			role: gt(),
			bio: at()
		},
		{
			name: sn(),
			role: kn(),
			bio: Zn()
		},
		{
			name: W(),
			role: Ee(),
			bio: vn()
		},
		{
			name: sr(),
			role: Dt(),
			bio: Rt()
		},
		{
			name: vr(),
			role: he(),
			bio: Je()
		},
		{
			name: Le(),
			role: ie(),
			bio: Yt()
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => n("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				t("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				t("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				t("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
m("en", { reload: !1 });
function br({ children: n }) {
	return t(e, { children: n });
}
function xr() {
	return t(br, { children: t(yr, {}) });
}
export { xr as default };

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
	!c && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
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
	!c && typeof window < "u" && window.location?.href && (u = O(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
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
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Aisha Patel", M = () => "Community Manager", N = () => "Data Analyst", P = () => "Developer Advocate", F = () => "Elena Kowalski", I = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", L = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", R = () => "Founder & Lead Engineer", z = () => "Full-Stack Developer", B = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", V = () => "Manages community contributions, partnerships, and events. Background in open source governance.", H = () => "Marcus Weber", U = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", W = () => "Performance Engineer", G = () => "Sarah Chen", K = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", q = () => "Tomás Rodríguez", J = () => "Yuki Tanaka", Y = () => "Aisha Patel", X = () => "Responsable de communauté", ie = () => "Analyste de données", ae = () => "Developer Advocate", oe = () => "Elena Kowalski", se = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", ce = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", le = () => "Fondatrice & Ingénieure principale", ue = () => "Développeur Full-Stack", de = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", fe = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", pe = () => "Marcus Weber", me = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", he = () => "Ingénieur performance", ge = () => "Sarah Chen", _e = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", ve = () => "Tomás Rodríguez", ye = () => "Yuki Tanaka", be = () => "Aisha Patel", xe = () => "Responsable de la comunidad", Se = () => "Analista de datos", Ce = () => "Developer Advocate", we = () => "Elena Kowalski", Te = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Ee = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", De = () => "Fundadora e ingeniera principal", Oe = () => "Desarrollador Full-Stack", ke = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Ae = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", je = () => "Marcus Weber", Me = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", Ne = () => "Ingeniero de rendimiento", Pe = () => "Sarah Chen", Fe = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Ie = () => "Tomás Rodríguez", Le = () => "Yuki Tanaka", Re = () => "Aisha Patel", ze = () => "Community-Managerin", Be = () => "Datenanalyst", Ve = () => "Developer Advocate", He = () => "Elena Kowalski", Ue = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", We = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", Ge = () => "Gründerin & Leitende Ingenieurin", Ke = () => "Full-Stack-Entwickler", qe = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Je = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", Ye = () => "Marcus Weber", Xe = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", Ze = () => "Performance-Ingenieur", Qe = () => "Sarah Chen", $e = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", et = () => "Tomás Rodríguez", tt = () => "Yuki Tanaka", nt = () => "Aisha Patel", rt = () => "Responsabile della comunità", it = () => "Analista dati", at = () => "Developer Advocate", ot = () => "Elena Kowalski", st = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", ct = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", lt = () => "Fondatrice e Responsabile tecnico", ut = () => "Sviluppatore Full-Stack", dt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", ft = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", pt = () => "Marcus Weber", mt = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", ht = () => "Ingegnere delle prestazioni", gt = () => "Sarah Chen", _t = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", vt = () => "Tomás Rodríguez", yt = () => "Yuki Tanaka", bt = () => "Aisha Patel", xt = () => "Gerente de Comunidade", St = () => "Analista de Dados", Ct = () => "Developer Advocate", wt = () => "Elena Kowalski", Tt = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", Et = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", Dt = () => "Fundadora e Engenheira Líder", Ot = () => "Desenvolvedor Full-Stack", kt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", At = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", jt = () => "Marcus Weber", Mt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", Nt = () => "Engenheiro de Performance", Pt = () => "Sarah Chen", Ft = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", It = () => "Tomás Rodríguez", Lt = () => "Yuki Tanaka", Rt = () => "Aisha Patel", zt = () => "社区经理", Bt = () => "数据分析师", Vt = () => "开发者倡导者", Ht = () => "Elena Kowalski", Ut = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", Wt = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", Gt = () => "创始人兼首席工程师", Kt = () => "全栈开发人员", qt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Jt = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Yt = () => "Marcus Weber", Xt = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", Zt = () => "性能工程师", Qt = () => "Sarah Chen", $t = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", en = () => "Tomás Rodríguez", tn = () => "Yuki Tanaka", nn = () => "Aisha Patel", rn = () => "コミュニティマネージャー", an = () => "データアナリスト", on = () => "デベロッパーアドボケイト", sn = () => "Elena Kowalski", cn = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", ln = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", un = () => "創設者 & リードエンジニア", dn = () => "フルスタックデベロッパー", fn = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", pn = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", mn = () => "Marcus Weber", hn = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", gn = () => "パフォーマンスエンジニア", _n = () => "Sarah Chen", vn = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", yn = () => "Tomás Rodríguez", bn = () => "Yuki Tanaka", xn = () => "Aisha Patel", Sn = () => "커뮤니티 매니저", Cn = () => "데이터 분석가", wn = () => "개발자 에반젤리스트", Tn = () => "Elena Kowalski", En = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", Dn = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", On = () => "설립자 겸 수석 엔지니어", kn = () => "풀스택 개발자", An = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", jn = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", Mn = () => "Marcus Weber", Nn = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", Pn = () => "성능 엔지니어", Fn = () => "Sarah Chen", In = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", Ln = () => "Tomás Rodríguez", Rn = () => "Yuki Tanaka", zn = () => "Айша Патель", Bn = () => "Комьюнити-менеджер", Vn = () => "Аналитик данных", Hn = () => "Адвокат разработчиков", Un = () => "Елена Ковальски", Wn = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", Gn = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", Kn = () => "Основатель и ведущий инженер", qn = () => "Фулстек-разработчик", Jn = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Yn = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", Xn = () => "Маркус Вебер", Zn = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", Qn = () => "Инженер по производительности", $n = () => "Сара Чен", er = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", tr = () => "Томас Родригес", nr = () => "Юки Танака", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Y(e) : n === "es" ? be(e) : n === "de" ? Re(e) : n === "it" ? nt(e) : n === "pt" ? bt(e) : n === "zh" ? Rt(e) : n === "ja" ? nn(e) : n === "ko" ? xn(e) : n === "ru" ? zn(e) : j(e);
}), rr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? X(e) : n === "es" ? xe(e) : n === "de" ? ze(e) : n === "it" ? rt(e) : n === "pt" ? xt(e) : n === "zh" ? zt(e) : n === "ja" ? rn(e) : n === "ko" ? Sn(e) : n === "ru" ? Bn(e) : M(e);
}), ir = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ie(e) : n === "es" ? Se(e) : n === "de" ? Be(e) : n === "it" ? it(e) : n === "pt" ? St(e) : n === "zh" ? Bt(e) : n === "ja" ? an(e) : n === "ko" ? Cn(e) : n === "ru" ? Vn(e) : N(e);
}), ar = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? Ce(e) : n === "de" ? Ve(e) : n === "it" ? at(e) : n === "pt" ? Ct(e) : n === "zh" ? Vt(e) : n === "ja" ? on(e) : n === "ko" ? wn(e) : n === "ru" ? Hn(e) : P(e);
}), or = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oe(e) : n === "es" ? we(e) : n === "de" ? He(e) : n === "it" ? ot(e) : n === "pt" ? wt(e) : n === "zh" ? Ht(e) : n === "ja" ? sn(e) : n === "ko" ? Tn(e) : n === "ru" ? Un(e) : F(e);
}), sr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? se(e) : n === "es" ? Te(e) : n === "de" ? Ue(e) : n === "it" ? st(e) : n === "pt" ? Tt(e) : n === "zh" ? Ut(e) : n === "ja" ? cn(e) : n === "ko" ? En(e) : n === "ru" ? Wn(e) : I(e);
}), cr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ce(e) : n === "es" ? Ee(e) : n === "de" ? We(e) : n === "it" ? ct(e) : n === "pt" ? Et(e) : n === "zh" ? Wt(e) : n === "ja" ? ln(e) : n === "ko" ? Dn(e) : n === "ru" ? Gn(e) : L(e);
}), lr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? De(e) : n === "de" ? Ge(e) : n === "it" ? lt(e) : n === "pt" ? Dt(e) : n === "zh" ? Gt(e) : n === "ja" ? un(e) : n === "ko" ? On(e) : n === "ru" ? Kn(e) : R(e);
}), ur = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? Oe(e) : n === "de" ? Ke(e) : n === "it" ? ut(e) : n === "pt" ? Ot(e) : n === "zh" ? Kt(e) : n === "ja" ? dn(e) : n === "ko" ? kn(e) : n === "ru" ? qn(e) : z(e);
}), dr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? ke(e) : n === "de" ? qe(e) : n === "it" ? dt(e) : n === "pt" ? kt(e) : n === "zh" ? qt(e) : n === "ja" ? fn(e) : n === "ko" ? An(e) : n === "ru" ? Jn(e) : B(e);
}), fr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? Ae(e) : n === "de" ? Je(e) : n === "it" ? ft(e) : n === "pt" ? At(e) : n === "zh" ? Jt(e) : n === "ja" ? pn(e) : n === "ko" ? jn(e) : n === "ru" ? Yn(e) : V(e);
}), pr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? je(e) : n === "de" ? Ye(e) : n === "it" ? pt(e) : n === "pt" ? jt(e) : n === "zh" ? Yt(e) : n === "ja" ? mn(e) : n === "ko" ? Mn(e) : n === "ru" ? Xn(e) : H(e);
}), mr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Me(e) : n === "de" ? Xe(e) : n === "it" ? mt(e) : n === "pt" ? Mt(e) : n === "zh" ? Xt(e) : n === "ja" ? hn(e) : n === "ko" ? Nn(e) : n === "ru" ? Zn(e) : U(e);
}), hr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? Ne(e) : n === "de" ? Ze(e) : n === "it" ? ht(e) : n === "pt" ? Nt(e) : n === "zh" ? Zt(e) : n === "ja" ? gn(e) : n === "ko" ? Pn(e) : n === "ru" ? Qn(e) : W(e);
}), gr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? Pe(e) : n === "de" ? Qe(e) : n === "it" ? gt(e) : n === "pt" ? Pt(e) : n === "zh" ? Qt(e) : n === "ja" ? _n(e) : n === "ko" ? Fn(e) : n === "ru" ? $n(e) : G(e);
}), _r = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? Fe(e) : n === "de" ? $e(e) : n === "it" ? _t(e) : n === "pt" ? Ft(e) : n === "zh" ? $t(e) : n === "ja" ? vn(e) : n === "ko" ? In(e) : n === "ru" ? er(e) : K(e);
}), vr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? Ie(e) : n === "de" ? et(e) : n === "it" ? vt(e) : n === "pt" ? It(e) : n === "zh" ? en(e) : n === "ja" ? yn(e) : n === "ko" ? Ln(e) : n === "ru" ? tr(e) : q(e);
}), yr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ye(e) : n === "es" ? Le(e) : n === "de" ? tt(e) : n === "it" ? yt(e) : n === "pt" ? Lt(e) : n === "zh" ? tn(e) : n === "ja" ? bn(e) : n === "ko" ? Rn(e) : n === "ru" ? nr(e) : J(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/team/TeamGrid.tsx";
function br() {
	let e = [
		{
			name: gr(),
			role: lr(),
			bio: cr()
		},
		{
			name: pr(),
			role: hr(),
			bio: _r()
		},
		{
			name: Z(),
			role: ar(),
			bio: mr()
		},
		{
			name: vr(),
			role: ur(),
			bio: dr()
		},
		{
			name: yr(),
			role: ir(),
			bio: sr()
		},
		{
			name: or(),
			role: rr(),
			bio: fr()
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: e.map((e) => t("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				t("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 44,
					columnNumber: 11
				}, this),
				t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 50,
					columnNumber: 11
				}, this),
				t("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 51,
					columnNumber: 11
				}, this),
				t("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 52,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 40,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
var xr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Sr({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: xr,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/team/TeamGrid.wrapper.tsx";
function Cr() {
	return t(Sr, { children: t(br, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Cr as default };

import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
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
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Sarah Chen", D = () => "Sarah Chen", O = () => "Sarah Chen", k = () => "Sarah Chen", A = () => "Sarah Chen", j = () => "Sarah Chen", M = () => "Sarah Chen", N = () => "Sarah Chen", P = () => "Sarah Chen", F = () => "Сара Чен", I = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Founder & Lead Engineer", R = () => "Fondatrice & Ingénieure principale", z = () => "Fundadora e ingeniera principal", B = () => "Gründerin & Leitende Ingenieurin", V = () => "Fondatrice e Responsabile tecnico", H = () => "Fundadora e Engenheira Líder", U = () => "创始人兼首席工程师", W = () => "創設者 & リードエンジニア", G = () => "설립자 겸 수석 엔지니어", K = () => "Основатель и ведущий инженер", q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", Y = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", X = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", Z = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", Q = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", ne = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", re = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", ie = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", ae = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", oe = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", se = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Marcus Weber", le = () => "Marcus Weber", ue = () => "Marcus Weber", de = () => "Marcus Weber", fe = () => "Marcus Weber", pe = () => "Marcus Weber", me = () => "Marcus Weber", he = () => "Marcus Weber", ge = () => "Marcus Weber", _e = () => "Маркус Вебер", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Performance Engineer", be = () => "Ingénieur performance", xe = () => "Ingeniero de rendimiento", Se = () => "Performance-Ingenieur", Ce = () => "Ingegnere delle prestazioni", we = () => "Engenheiro de Performance", Te = () => "性能工程师", Ee = () => "パフォーマンスエンジニア", De = () => "성능 엔지니어", Oe = () => "Инженер по производительности", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", je = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", Me = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Ne = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Pe = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Fe = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Ie = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", Le = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", Re = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", ze = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "Aisha Patel", He = () => "Aisha Patel", Ue = () => "Aisha Patel", We = () => "Aisha Patel", Ge = () => "Aisha Patel", Ke = () => "Aisha Patel", qe = () => "Aisha Patel", Je = () => "Aisha Patel", Ye = () => "Aisha Patel", Xe = () => "Айша Патель", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "Developer Advocate", $e = () => "Developer Advocate", et = () => "Developer Advocate", tt = () => "Developer Advocate", nt = () => "Developer Advocate", rt = () => "Developer Advocate", it = () => "开发者倡导者", at = () => "デベロッパーアドボケイト", ot = () => "개발자 에반젤리스트", st = () => "Адвокат разработчиков", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", ut = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", dt = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", ft = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", pt = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", mt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", ht = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", gt = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", _t = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", vt = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "Tomás Rodríguez", xt = () => "Tomás Rodríguez", St = () => "Tomás Rodríguez", Ct = () => "Tomás Rodríguez", wt = () => "Tomás Rodríguez", Tt = () => "Tomás Rodríguez", Et = () => "Tomás Rodríguez", Dt = () => "Tomás Rodríguez", Ot = () => "Tomás Rodríguez", kt = () => "Томас Родригес", At = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "Full-Stack Developer", Mt = () => "Développeur Full-Stack", Nt = () => "Desarrollador Full-Stack", Pt = () => "Full-Stack-Entwickler", Ft = () => "Sviluppatore Full-Stack", It = () => "Desenvolvedor Full-Stack", Lt = () => "全栈开发人员", Rt = () => "フルスタックデベロッパー", zt = () => "풀스택 개발자", Bt = () => "Фулстек-разработчик", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : Bt(e);
}), Ht = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Ut = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", Wt = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Gt = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Kt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", qt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", Jt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Yt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", Xt = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", Zt = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
}), $t = () => "Yuki Tanaka", en = () => "Yuki Tanaka", tn = () => "Yuki Tanaka", nn = () => "Yuki Tanaka", rn = () => "Yuki Tanaka", an = () => "Yuki Tanaka", on = () => "Yuki Tanaka", sn = () => "Yuki Tanaka", cn = () => "Yuki Tanaka", ln = () => "Юки Танака", un = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $t(e) : n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : ln(e);
}), dn = () => "Data Analyst", fn = () => "Analyste de données", pn = () => "Analista de datos", mn = () => "Datenanalyst", hn = () => "Analista dati", gn = () => "Analista de Dados", _n = () => "数据分析师", vn = () => "データアナリスト", yn = () => "데이터 분석가", bn = () => "Аналитик данных", xn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? dn(e) : n === "fr" ? fn(e) : n === "es" ? pn(e) : n === "de" ? mn(e) : n === "it" ? hn(e) : n === "pt" ? gn(e) : n === "zh" ? _n(e) : n === "ja" ? vn(e) : n === "ko" ? yn(e) : bn(e);
}), Sn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", Cn = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", wn = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Tn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", En = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", Dn = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", On = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", kn = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", An = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", jn = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Sn(e) : n === "fr" ? Cn(e) : n === "es" ? wn(e) : n === "de" ? Tn(e) : n === "it" ? En(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : jn(e);
}), Nn = () => "Elena Kowalski", Pn = () => "Elena Kowalski", Fn = () => "Elena Kowalski", In = () => "Elena Kowalski", Ln = () => "Elena Kowalski", Rn = () => "Elena Kowalski", zn = () => "Elena Kowalski", Bn = () => "Elena Kowalski", Vn = () => "Elena Kowalski", Hn = () => "Елена Ковальски", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nn(e) : n === "fr" ? Pn(e) : n === "es" ? Fn(e) : n === "de" ? In(e) : n === "it" ? Ln(e) : n === "pt" ? Rn(e) : n === "zh" ? zn(e) : n === "ja" ? Bn(e) : n === "ko" ? Vn(e) : Hn(e);
}), Wn = () => "Community Manager", Gn = () => "Responsable de communauté", Kn = () => "Responsable de la comunidad", qn = () => "Community-Managerin", Jn = () => "Responsabile della comunità", Yn = () => "Gerente de Comunidade", Xn = () => "社区经理", Zn = () => "コミュニティマネージャー", Qn = () => "커뮤니티 매니저", $n = () => "Комьюнити-менеджер", er = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Wn(e) : n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : $n(e);
}), $ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", tr = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", nr = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", rr = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", ir = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", ar = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", or = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", sr = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", cr = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", lr = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
});
function dr() {
	return n("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: I(),
				role: q(),
				bio: se()
			},
			{
				name: ve(),
				role: ke(),
				bio: Be()
			},
			{
				name: Ze(),
				role: ct(),
				bio: yt()
			},
			{
				name: At(),
				role: Vt(),
				bio: Qt()
			},
			{
				name: un(),
				role: xn(),
				bio: Mn()
			},
			{
				name: Un(),
				role: er(),
				bio: ur()
			}
		].map((e) => r("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				n("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				n("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				n("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				n("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
function fr() {
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
function pr(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function mr({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		fr();
	}, []), n(e, {
		id: "AppRoot",
		onRender: pr,
		children: r
	});
}
function hr({ children: e }) {
	return n(mr, { children: e });
}
function gr() {
	return n(hr, { children: n(dr, {}) });
}
export { gr as default };

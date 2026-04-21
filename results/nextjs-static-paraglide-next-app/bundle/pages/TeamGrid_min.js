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
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
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
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Sarah Chen", k = () => "Sarah Chen", A = () => "Sarah Chen", j = () => "Sarah Chen", M = () => "Sarah Chen", N = () => "Sarah Chen", P = () => "Sarah Chen", F = () => "Sarah Chen", I = () => "Sarah Chen", L = () => "Сара Чен", R = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "Founder & Lead Engineer", B = () => "Fondatrice & Ingénieure principale", V = () => "Fundadora e ingeniera principal", H = () => "Gründerin & Leitende Ingenieurin", U = () => "Fondatrice e Responsabile tecnico", W = () => "Fundadora e Engenheira Líder", G = () => "创始人兼首席工程师", K = () => "創設者 & リードエンジニア", q = () => "설립자 겸 수석 엔지니어", J = () => "Основатель и ведущий инженер", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", Z = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", Q = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", ne = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", re = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", ie = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", ae = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", oe = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", se = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", ce = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", le = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "Marcus Weber", de = () => "Marcus Weber", fe = () => "Marcus Weber", pe = () => "Marcus Weber", me = () => "Marcus Weber", he = () => "Marcus Weber", ge = () => "Marcus Weber", _e = () => "Marcus Weber", ve = () => "Marcus Weber", ye = () => "Маркус Вебер", be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Performance Engineer", Se = () => "Ingénieur performance", Ce = () => "Ingeniero de rendimiento", we = () => "Performance-Ingenieur", Te = () => "Ingegnere delle prestazioni", Ee = () => "Engenheiro de Performance", De = () => "性能工程师", Oe = () => "パフォーマンスエンジニア", ke = () => "성능 엔지니어", Ae = () => "Инженер по производительности", je = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Ne = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", Pe = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Fe = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Ie = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Le = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Re = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", ze = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", Be = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", Ve = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", He = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : Ve(e);
}), Ue = () => "Aisha Patel", We = () => "Aisha Patel", Ge = () => "Aisha Patel", Ke = () => "Aisha Patel", qe = () => "Aisha Patel", Je = () => "Aisha Patel", Ye = () => "Aisha Patel", Xe = () => "Aisha Patel", Ze = () => "Aisha Patel", Qe = () => "Айша Патель", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
}), et = () => "Developer Advocate", tt = () => "Developer Advocate", nt = () => "Developer Advocate", rt = () => "Developer Advocate", it = () => "Developer Advocate", at = () => "Developer Advocate", ot = () => "开发者倡导者", st = () => "デベロッパーアドボケイト", ct = () => "개발자 에반젤리스트", lt = () => "Адвокат разработчиков", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? et(e) : n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : lt(e);
}), dt = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", ft = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", pt = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", mt = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", ht = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", gt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", _t = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", vt = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", yt = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", bt = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? dt(e) : n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : bt(e);
}), St = () => "Tomás Rodríguez", Ct = () => "Tomás Rodríguez", wt = () => "Tomás Rodríguez", Tt = () => "Tomás Rodríguez", Et = () => "Tomás Rodríguez", Dt = () => "Tomás Rodríguez", Ot = () => "Tomás Rodríguez", kt = () => "Tomás Rodríguez", At = () => "Tomás Rodríguez", jt = () => "Томас Родригес", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? St(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Nt = () => "Full-Stack Developer", Pt = () => "Développeur Full-Stack", Ft = () => "Desarrollador Full-Stack", It = () => "Full-Stack-Entwickler", Lt = () => "Sviluppatore Full-Stack", Rt = () => "Desenvolvedor Full-Stack", zt = () => "全栈开发人员", Bt = () => "フルスタックデベロッパー", Vt = () => "풀스택 개발자", Ht = () => "Фулстек-разработчик", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Nt(e) : n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : Ht(e);
}), Wt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Gt = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", Kt = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", qt = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Jt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Yt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", Xt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Zt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", Qt = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", $t = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", en = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Wt(e) : n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : $t(e);
}), tn = () => "Yuki Tanaka", nn = () => "Yuki Tanaka", rn = () => "Yuki Tanaka", an = () => "Yuki Tanaka", on = () => "Yuki Tanaka", sn = () => "Yuki Tanaka", cn = () => "Yuki Tanaka", ln = () => "Yuki Tanaka", un = () => "Yuki Tanaka", dn = () => "Юки Танака", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? tn(e) : n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : dn(e);
}), pn = () => "Data Analyst", mn = () => "Analyste de données", hn = () => "Analista de datos", gn = () => "Datenanalyst", _n = () => "Analista dati", vn = () => "Analista de Dados", yn = () => "数据分析师", bn = () => "データアナリスト", xn = () => "데이터 분석가", Sn = () => "Аналитик данных", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? pn(e) : n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : Sn(e);
}), wn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", Tn = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", En = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Dn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", On = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", kn = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", An = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", jn = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", Mn = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", Nn = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
}), Fn = () => "Elena Kowalski", In = () => "Elena Kowalski", Ln = () => "Elena Kowalski", Rn = () => "Elena Kowalski", zn = () => "Elena Kowalski", Bn = () => "Elena Kowalski", Vn = () => "Elena Kowalski", Hn = () => "Elena Kowalski", Un = () => "Elena Kowalski", Wn = () => "Елена Ковальски", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Fn(e) : n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : Wn(e);
}), Kn = () => "Community Manager", qn = () => "Responsable de communauté", Jn = () => "Responsable de la comunidad", Yn = () => "Community-Managerin", Xn = () => "Responsabile della comunità", Zn = () => "Gerente de Comunidade", Qn = () => "社区经理", $n = () => "コミュニティマネージャー", er = () => "커뮤니티 매니저", $ = () => "Комьюнити-менеджер", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Kn(e) : n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : $(e);
}), nr = () => "Manages community contributions, partnerships, and events. Background in open source governance.", rr = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", ir = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", ar = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", or = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", sr = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", cr = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", lr = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", ur = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", dr = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? nr(e) : n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : dr(e);
});
function pr() {
	return i("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: R(),
				role: Y(),
				bio: le()
			},
			{
				name: be(),
				role: je(),
				bio: He()
			},
			{
				name: $e(),
				role: ut(),
				bio: xt()
			},
			{
				name: Mt(),
				role: Ut(),
				bio: en()
			},
			{
				name: fn(),
				role: Cn(),
				bio: Pn()
			},
			{
				name: Gn(),
				role: tr(),
				bio: fr()
			}
		].map((e) => a("div", {
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
function mr() {
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
function hr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function gr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		hr("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		mr();
	}, []), i(r, { children: a });
}
function _r({ children: e }) {
	return i(gr, { children: e });
}
function vr() {
	return i(_r, { children: i(pr, {}) });
}
export { vr as default };

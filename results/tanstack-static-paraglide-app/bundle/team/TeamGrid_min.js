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
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
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
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Sarah Chen", w = () => "Sarah Chen", T = () => "Sarah Chen", E = () => "Sarah Chen", D = () => "Sarah Chen", O = () => "Sarah Chen", k = () => "Sarah Chen", A = () => "Sarah Chen", j = () => "Sarah Chen", M = () => "Сара Чен", N = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Founder & Lead Engineer", F = () => "Fondatrice & Ingénieure principale", I = () => "Fundadora e ingeniera principal", L = () => "Gründerin & Leitende Ingenieurin", R = () => "Fondatrice e Responsabile tecnico", z = () => "Fundadora e Engenheira Líder", B = () => "创始人兼首席工程师", V = () => "創設者 & リードエンジニア", H = () => "설립자 겸 수석 엔지니어", U = () => "Основатель и ведущий инженер", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", K = () => "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.", q = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", J = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", Y = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", X = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.", Z = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", Q = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", ne = () => "규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.", re = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "Marcus Weber", oe = () => "Marcus Weber", se = () => "Marcus Weber", ce = () => "Marcus Weber", le = () => "Marcus Weber", ue = () => "Marcus Weber", de = () => "Marcus Weber", fe = () => "Marcus Weber", pe = () => "Marcus Weber", me = () => "Маркус Вебер", he = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Performance Engineer", _e = () => "Ingénieur performance", ve = () => "Ingeniero de rendimiento", ye = () => "Performance-Ingenieur", be = () => "Ingegnere delle prestazioni", xe = () => "Engenheiro de Performance", Se = () => "性能工程师", Ce = () => "パフォーマンスエンジニア", we = () => "성능 엔지니어", Te = () => "Инженер по производительности", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Oe = () => "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.", ke = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Ae = () => "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.", je = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Me = () => "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Ne = () => "专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。", Pe = () => "JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。", Fe = () => "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.", Ie = () => "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "Aisha Patel", ze = () => "Aisha Patel", Be = () => "Aisha Patel", Ve = () => "Aisha Patel", He = () => "Aisha Patel", Ue = () => "Aisha Patel", We = () => "Aisha Patel", Ge = () => "Aisha Patel", Ke = () => "Aisha Patel", qe = () => "Айша Патель", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "Developer Advocate", Xe = () => "Developer Advocate", Ze = () => "Developer Advocate", Qe = () => "Developer Advocate", $e = () => "Developer Advocate", et = () => "Developer Advocate", tt = () => "开发者倡导者", nt = () => "デベロッパーアドボケイト", rt = () => "개발자 에반젤리스트", it = () => "Адвокат разработчиков", at = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", st = () => "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.", ct = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", lt = () => "Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", ut = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", dt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", ft = () => "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。", pt = () => "開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。", mt = () => "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.", ht = () => "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "Tomás Rodríguez", vt = () => "Tomás Rodríguez", yt = () => "Tomás Rodríguez", bt = () => "Tomás Rodríguez", xt = () => "Tomás Rodríguez", St = () => "Tomás Rodríguez", Ct = () => "Tomás Rodríguez", wt = () => "Tomás Rodríguez", Tt = () => "Tomás Rodríguez", Et = () => "Томас Родригес", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "Full-Stack Developer", kt = () => "Développeur Full-Stack", At = () => "Desarrollador Full-Stack", jt = () => "Full-Stack-Entwickler", Mt = () => "Sviluppatore Full-Stack", Nt = () => "Desenvolvedor Full-Stack", Pt = () => "全栈开发人员", Ft = () => "フルスタックデベロッパー", It = () => "풀스택 개발자", Lt = () => "Фулстек-разработчик", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Bt = () => "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.", Vt = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Ht = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.", Ut = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Wt = () => "Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.", Gt = () => "负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。", Kt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。", qt = () => "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.", Jt = () => "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
}), Xt = () => "Yuki Tanaka", Zt = () => "Yuki Tanaka", Qt = () => "Yuki Tanaka", $t = () => "Yuki Tanaka", en = () => "Yuki Tanaka", tn = () => "Yuki Tanaka", nn = () => "Yuki Tanaka", rn = () => "Yuki Tanaka", an = () => "Yuki Tanaka", on = () => "Юки Танака", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Xt(e) : n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : on(e);
}), cn = () => "Data Analyst", ln = () => "Analyste de données", un = () => "Analista de datos", dn = () => "Datenanalyst", fn = () => "Analista dati", pn = () => "Analista de Dados", mn = () => "数据分析师", hn = () => "データアナリスト", gn = () => "데이터 분석가", _n = () => "Аналитик данных", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? cn(e) : n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : _n(e);
}), yn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", bn = () => "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.", xn = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Sn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.", Cn = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", wn = () => "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.", Tn = () => "确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。", En = () => "すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。", Dn = () => "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.", On = () => "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? yn(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : On(e);
}), An = () => "Elena Kowalski", jn = () => "Elena Kowalski", Mn = () => "Elena Kowalski", Nn = () => "Elena Kowalski", Pn = () => "Elena Kowalski", Fn = () => "Elena Kowalski", In = () => "Elena Kowalski", Ln = () => "Elena Kowalski", Rn = () => "Elena Kowalski", zn = () => "Елена Ковальски", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? An(e) : n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : zn(e);
}), Vn = () => "Community Manager", Hn = () => "Responsable de communauté", Un = () => "Responsable de la comunidad", Wn = () => "Community-Managerin", Gn = () => "Responsabile della comunità", Kn = () => "Gerente de Comunidade", qn = () => "社区经理", $ = () => "コミュニティマネージャー", Jn = () => "커뮤니티 매니저", Yn = () => "Комьюнити-менеджер", Xn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Vn(e) : n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? $(e) : n === "ko" ? Jn(e) : Yn(e);
}), Zn = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Qn = () => "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.", $n = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", er = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", tr = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", nr = () => "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", rr = () => "负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", ir = () => "コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。", ar = () => "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.", or = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.", sr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Zn(e) : n === "fr" ? Qn(e) : n === "es" ? $n(e) : n === "de" ? er(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : or(e);
});
function cr() {
	return t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: N(),
				role: W(),
				bio: ie()
			},
			{
				name: he(),
				role: Ee(),
				bio: Le()
			},
			{
				name: Je(),
				role: at(),
				bio: gt()
			},
			{
				name: Dt(),
				role: Rt(),
				bio: Yt()
			},
			{
				name: sn(),
				role: vn(),
				bio: kn()
			},
			{
				name: Bn(),
				role: Xn(),
				bio: sr()
			}
		].map((e) => n("div", {
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
_("en", { reload: !1 });
function lr({ children: n }) {
	return t(e, { children: n });
}
function ur() {
	return t(lr, { children: t(cr, {}) });
}
export { ur as default };

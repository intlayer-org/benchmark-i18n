import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function f(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function p(e) {
	let t = f(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = c;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
	let l = () => {
		!h && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Sarah Chen", E = () => "Sarah Chen", D = () => "Sarah Chen", O = () => "Sarah Chen", k = () => "Sarah Chen", A = () => "Sarah Chen", j = () => "Sarah Chen", M = () => "Sarah Chen", N = () => "Sarah Chen", P = () => "Сара Чен", F = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Founder & Lead Engineer", L = () => "Fondatrice & lead ingénieur", R = () => "Fundadora e ingeniera principal", z = () => "Gründerin & Leitende Ingenieurin", B = () => "Fondatrice e Responsabile tecnico", V = () => "Fundadora e Engenheira Líder", H = () => "创始人兼首席工程师", U = () => "創設者 & リードエンジニア", W = () => "Founder & Lead Engineer", G = () => "Основатель и ведущий инженер", K = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", J = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", Y = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", X = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", Z = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", Q = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", ne = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", re = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", ie = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", ae = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Marcus Weber", ce = () => "Marcus Weber", le = () => "Marcus Weber", ue = () => "Marcus Weber", de = () => "Marcus Weber", fe = () => "Marcus Weber", pe = () => "Marcus Weber", me = () => "Marcus Weber", he = () => "Marcus Weber", ge = () => "Маркус Вебер", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Performance Engineer", ye = () => "Ingénieur performance", be = () => "Ingeniero de rendimiento", xe = () => "Performance-Ingenieur", Se = () => "Ingegnere delle prestazioni", Ce = () => "Engenheiro de performance", we = () => "性能工程师", Te = () => "パフォーマンスエンジニア", Ee = () => "Performance Engineer", De = () => "Инженер по производительности", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Ae = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", je = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", Me = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Ne = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Pe = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Fe = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", Ie = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", Le = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Re = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "Aisha Patel", Ve = () => "Aisha Patel", He = () => "Aisha Patel", Ue = () => "Aisha Patel", We = () => "Aisha Patel", Ge = () => "Aisha Patel", Ke = () => "Aisha Patel", qe = () => "Aisha Patel", Je = () => "Aisha Patel", Ye = () => "Айша Патель", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Developer Advocate", Qe = () => "Developer advocate", $e = () => "Developer Advocate", et = () => "Developer Advocate", tt = () => "Developer Advocate", nt = () => "Developer Advocate", rt = () => "开发者倡导者", it = () => "Developer Advocate", at = () => "Developer Advocate", ot = () => "Developer Advocate", st = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", lt = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", ut = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", dt = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", ft = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", pt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", mt = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", ht = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", gt = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", $ = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : $(e);
}), vt = () => "Tomás Rodríguez", yt = () => "Tomás Rodríguez", bt = () => "Tomás Rodríguez", xt = () => "Tomás Rodríguez", St = () => "Tomás Rodríguez", Ct = () => "Tomás Rodríguez", wt = () => "Tomás Rodríguez", Tt = () => "Tomás Rodríguez", Et = () => "Tomás Rodríguez", Dt = () => "Томас Родригес", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Full-Stack Developer", At = () => "Développeur full-stack", jt = () => "Desarrollador Full-Stack", Mt = () => "Full-Stack-Entwickler", Nt = () => "Sviluppatore Full-Stack", Pt = () => "Desenvolvedor Full-Stack", Ft = () => "全栈开发人员", It = () => "フルスタックデベロッパー", Lt = () => "Full-Stack Developer", Rt = () => "Full-Stack разработчик", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Vt = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", Ht = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Ut = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", Wt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Gt = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", Kt = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", qt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", Jt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Yt = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Yuki Tanaka", Qt = () => "Yuki Tanaka", $t = () => "Yuki Tanaka", en = () => "Yuki Tanaka", tn = () => "Yuki Tanaka", nn = () => "Yuki Tanaka", rn = () => "Yuki Tanaka", an = () => "Yuki Tanaka", on = () => "Yuki Tanaka", sn = () => "Юки Танака", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Data Analyst", un = () => "Analyste de données", dn = () => "Analista de datos", fn = () => "Datenanalyst", pn = () => "Analista dati", mn = () => "Analista de dados", hn = () => "数据分析师", gn = () => "データアナリスト", _n = () => "Data Analyst", vn = () => "Аналитик данных", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", xn = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", Sn = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Cn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", wn = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", Tn = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", En = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", Dn = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", On = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", kn = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", An = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "Elena Kowalski", Mn = () => "Elena Kowalski", Nn = () => "Elena Kowalski", Pn = () => "Elena Kowalski", Fn = () => "Elena Kowalski", In = () => "Elena Kowalski", Ln = () => "Elena Kowalski", Rn = () => "Elena Kowalski", zn = () => "Elena Kowalski", Bn = () => "Елена Ковальски", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Community Manager", Un = () => "Community manager", Wn = () => "Responsable de la comunidad", Gn = () => "Community Manager", Kn = () => "Responsable della comunità", qn = () => "Gerente de comunidade", Jn = () => "社区经理", Yn = () => "コミュニティマネージャー", Xn = () => "Community Manager", Zn = () => "Комьюнити-менеджер", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "Manages community contributions, partnerships, and events. Background in open source governance.", er = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", tr = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", nr = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", rr = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", ir = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", ar = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", or = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", sr = () => "Manages community contributions, partnerships, and events. Background in open source governance.", cr = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), ur = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), dr = n("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function fr() {
	let n = () => [
		{
			name: F(),
			role: K(),
			bio: oe()
		},
		{
			name: _e(),
			role: Oe(),
			bio: ze()
		},
		{
			name: Xe(),
			role: st(),
			bio: _t()
		},
		{
			name: Ot(),
			role: zt(),
			bio: Xt()
		},
		{
			name: cn(),
			role: yn(),
			bio: An()
		},
		{
			name: Vn(),
			role: Qn(),
			bio: lr()
		}
	];
	return (() => {
		var i = ur();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = dr(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.name.split(" ").map((e) => e[0]).join("")), t(i, () => e.name), t(a, () => e.role), t(o, () => e.bio), n;
			})()
		})), i;
	})();
}
export { fr as default };

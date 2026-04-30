import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
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
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], c = s;
	!m && typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
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
	let l = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Sarah Chen", T = () => "Sarah Chen", E = () => "Sarah Chen", D = () => "Sarah Chen", O = () => "Sarah Chen", k = () => "Sarah Chen", A = () => "Sarah Chen", j = () => "Sarah Chen", M = () => "Sarah Chen", N = () => "Сара Чен", P = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Founder & Lead Engineer", I = () => "Fondatrice & lead ingénieur", L = () => "Fundadora e ingeniera principal", R = () => "Gründerin & Leitende Ingenieurin", z = () => "Fondatrice e Responsabile tecnico", B = () => "Fundadora e Engenheira Líder", V = () => "创始人兼首席工程师", H = () => "創設者 & リードエンジニア", U = () => "Founder & Lead Engineer", W = () => "Основатель и ведущий инженер", G = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", q = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", J = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", Y = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", X = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", Z = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", Q = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", ne = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", re = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", ie = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Marcus Weber", se = () => "Marcus Weber", ce = () => "Marcus Weber", le = () => "Marcus Weber", ue = () => "Marcus Weber", de = () => "Marcus Weber", fe = () => "Marcus Weber", pe = () => "Marcus Weber", me = () => "Marcus Weber", he = () => "Маркус Вебер", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Performance Engineer", ve = () => "Ingénieur performance", ye = () => "Ingeniero de rendimiento", be = () => "Performance-Ingenieur", xe = () => "Ingegnere delle prestazioni", Se = () => "Engenheiro de performance", Ce = () => "性能工程师", we = () => "パフォーマンスエンジニア", Te = () => "Performance Engineer", Ee = () => "Инженер по производительности", De = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", ke = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", Ae = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", je = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", Me = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Ne = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Pe = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", Fe = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", Ie = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Le = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Aisha Patel", Be = () => "Aisha Patel", Ve = () => "Aisha Patel", He = () => "Aisha Patel", Ue = () => "Aisha Patel", We = () => "Aisha Patel", Ge = () => "Aisha Patel", Ke = () => "Aisha Patel", qe = () => "Aisha Patel", Je = () => "Айша Патель", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Developer Advocate", Ze = () => "Developer advocate", Qe = () => "Developer Advocate", $e = () => "Developer Advocate", et = () => "Developer Advocate", tt = () => "Developer Advocate", nt = () => "开发者倡导者", rt = () => "Developer Advocate", it = () => "Developer Advocate", at = () => "Developer Advocate", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", ct = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", lt = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", ut = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", dt = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", ft = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", pt = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", mt = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", ht = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", gt = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "Tomás Rodríguez", yt = () => "Tomás Rodríguez", bt = () => "Tomás Rodríguez", xt = () => "Tomás Rodríguez", St = () => "Tomás Rodríguez", Ct = () => "Tomás Rodríguez", wt = () => "Tomás Rodríguez", Tt = () => "Tomás Rodríguez", Et = () => "Tomás Rodríguez", Dt = () => "Томас Родригес", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Full-Stack Developer", At = () => "Développeur full-stack", jt = () => "Desarrollador Full-Stack", Mt = () => "Full-Stack-Entwickler", Nt = () => "Sviluppatore Full-Stack", Pt = () => "Desenvolvedor Full-Stack", Ft = () => "全栈开发人员", It = () => "フルスタックデベロッパー", Lt = () => "Full-Stack Developer", Rt = () => "Full-Stack разработчик", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Vt = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", Ht = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Ut = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", Wt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Gt = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", Kt = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", qt = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", Jt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Yt = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Yuki Tanaka", Qt = () => "Yuki Tanaka", $t = () => "Yuki Tanaka", en = () => "Yuki Tanaka", tn = () => "Yuki Tanaka", nn = () => "Yuki Tanaka", rn = () => "Yuki Tanaka", an = () => "Yuki Tanaka", on = () => "Yuki Tanaka", sn = () => "Юки Танака", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Data Analyst", un = () => "Analyste de données", dn = () => "Analista de datos", fn = () => "Datenanalyst", pn = () => "Analista dati", mn = () => "Analista de dados", hn = () => "数据分析师", gn = () => "データアナリスト", _n = () => "Data Analyst", vn = () => "Аналитик данных", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", xn = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", Sn = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", Cn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", wn = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", Tn = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", En = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", Dn = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", On = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", kn = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", An = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "Elena Kowalski", Mn = () => "Elena Kowalski", Nn = () => "Elena Kowalski", Pn = () => "Elena Kowalski", Fn = () => "Elena Kowalski", In = () => "Elena Kowalski", Ln = () => "Elena Kowalski", Rn = () => "Elena Kowalski", zn = () => "Elena Kowalski", Bn = () => "Елена Ковальски", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Community Manager", Un = () => "Community manager", Wn = () => "Responsable de la comunidad", Gn = () => "Community Manager", Kn = () => "Responsable della comunità", qn = () => "Gerente de comunidade", Jn = () => "社区经理", Yn = () => "コミュニティマネージャー", Xn = () => "Community Manager", Zn = () => "Комьюнити-менеджер", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "Manages community contributions, partnerships, and events. Background in open source governance.", er = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", $ = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", tr = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", nr = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", rr = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", ir = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", ar = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", or = () => "Manages community contributions, partnerships, and events. Background in open source governance.", sr = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? $(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : sr(e);
}), lr = [
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
];
function ur(e) {
	return lr.includes(e);
}
var dr = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function fr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!ur(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !dr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var pr = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => fr(e)), mr = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), hr = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function gr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(pr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: P(),
			role: G(),
			bio: ae()
		},
		{
			name: ge(),
			role: De(),
			bio: Re()
		},
		{
			name: Ye(),
			role: ot(),
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
			bio: cr()
		}
	]));
	var c = hr();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = mr(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o, 2), l = e.child(c, !0);
		e.reset(c);
		var u = e.sibling(c, 2), d = e.child(u, !0);
		e.reset(u), e.reset(r), e.template_effect((t) => {
			e.set_text(a, t), e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).role), e.set_text(d, e.get(n).bio);
		}, [() => e.get(n).name.split(" ").map((e) => e[0]).join("")]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { gr as default };

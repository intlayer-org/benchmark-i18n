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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, ee(t, { reload: !1 })), t;
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
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ee = (e, t) => {
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
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
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
	return S = h(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
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
var P = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", F = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", I = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", L = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", R = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", z = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", B = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", V = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", H = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", U = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Sarah Chen", K = () => "Sarah Chen", q = () => "Sarah Chen", J = () => "Sarah Chen", Y = () => "Sarah Chen", X = () => "Sarah Chen", Z = () => "Sarah Chen", Q = () => "Sarah Chen", ne = () => "Sarah Chen", re = () => "Сара Чен", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : G(e);
}), ae = () => "Founder & Lead Engineer", oe = () => "Fondatrice & lead ingénieur", se = () => "Fundadora e ingeniera principal", ce = () => "Gründerin & Leitende Ingenieurin", le = () => "Fondatrice e Responsabile tecnico", ue = () => "Fundadora e Engenheira Líder", de = () => "创始人兼首席工程师", fe = () => "創設者 & リードエンジニア", pe = () => "Founder & Lead Engineer", me = () => "Основатель и ведущий инженер", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", _e = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", ve = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", ye = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", be = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", xe = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Se = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", Ce = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", we = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Te = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Marcus Weber", Oe = () => "Marcus Weber", ke = () => "Marcus Weber", Ae = () => "Marcus Weber", je = () => "Marcus Weber", Me = () => "Marcus Weber", Ne = () => "Marcus Weber", Pe = () => "Marcus Weber", Fe = () => "Marcus Weber", Ie = () => "Маркус Вебер", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Re = () => "Performance Engineer", ze = () => "Ingénieur performance", Be = () => "Ingeniero de rendimiento", Ve = () => "Performance-Ingenieur", He = () => "Ingegnere delle prestazioni", Ue = () => "Engenheiro de performance", We = () => "性能工程师", Ge = () => "パフォーマンスエンジニア", Ke = () => "Performance Engineer", qe = () => "Инженер по производительности", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : Re(e);
}), Ye = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", Xe = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", Ze = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", Qe = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", $e = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", et = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", tt = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", nt = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", rt = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", it = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : n === "ru" ? it(e) : Ye(e);
}), ot = () => "Aisha Patel", st = () => "Aisha Patel", ct = () => "Aisha Patel", lt = () => "Aisha Patel", ut = () => "Aisha Patel", dt = () => "Aisha Patel", ft = () => "Aisha Patel", pt = () => "Aisha Patel", mt = () => "Aisha Patel", ht = () => "Айша Патель", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : n === "ru" ? ht(e) : ot(e);
}), _t = () => "Developer Advocate", vt = () => "Developer advocate", yt = () => "Developer Advocate", bt = () => "Developer Advocate", xt = () => "Developer Advocate", St = () => "Developer Advocate", Ct = () => "开发者倡导者", wt = () => "Developer Advocate", Tt = () => "Developer Advocate", Et = () => "Developer Advocate", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : n === "ru" ? Et(e) : _t(e);
}), Ot = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", kt = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", At = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", jt = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", Mt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Nt = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", Pt = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", Ft = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", It = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Lt = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : n === "ru" ? Lt(e) : Ot(e);
}), zt = () => "Tomás Rodríguez", Bt = () => "Tomás Rodríguez", Vt = () => "Tomás Rodríguez", Ht = () => "Tomás Rodríguez", Ut = () => "Tomás Rodríguez", Wt = () => "Tomás Rodríguez", Gt = () => "Tomás Rodríguez", Kt = () => "Tomás Rodríguez", qt = () => "Tomás Rodríguez", Jt = () => "Томас Родригес", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "Full-Stack Developer", Zt = () => "Développeur full-stack", Qt = () => "Desarrollador Full-Stack", $t = () => "Full-Stack-Entwickler", en = () => "Sviluppatore Full-Stack", tn = () => "Desenvolvedor Full-Stack", nn = () => "全栈开发人员", rn = () => "フルスタックデベロッパー", an = () => "Full-Stack Developer", on = () => "Full-Stack разработчик", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", ln = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", un = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", dn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", fn = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", pn = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", mn = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", hn = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", gn = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", _n = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "Yuki Tanaka", bn = () => "Yuki Tanaka", xn = () => "Yuki Tanaka", Sn = () => "Yuki Tanaka", Cn = () => "Yuki Tanaka", wn = () => "Yuki Tanaka", Tn = () => "Yuki Tanaka", En = () => "Yuki Tanaka", Dn = () => "Yuki Tanaka", On = () => "Юки Танака", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "Data Analyst", jn = () => "Analyste de données", Mn = () => "Analista de datos", Nn = () => "Datenanalyst", Pn = () => "Analista dati", Fn = () => "Analista de dados", In = () => "数据分析师", Ln = () => "データアナリスト", Rn = () => "Data Analyst", zn = () => "Аналитик данных", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Hn = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", Un = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", Wn = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", Gn = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", Kn = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", qn = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Jn = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", Yn = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Xn = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Elena Kowalski", $n = () => "Elena Kowalski", er = () => "Elena Kowalski", tr = () => "Elena Kowalski", nr = () => "Elena Kowalski", rr = () => "Elena Kowalski", ir = () => "Elena Kowalski", ar = () => "Elena Kowalski", or = () => "Elena Kowalski", sr = () => "Елена Ковальски", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), cr = () => "Community Manager", lr = () => "Community manager", ur = () => "Responsable de la comunidad", dr = () => "Community Manager", fr = () => "Responsable della comunità", pr = () => "Gerente de comunidade", mr = () => "社区经理", hr = () => "コミュニティマネージャー", gr = () => "Community Manager", _r = () => "Комьюнити-менеджер", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lr(e) : n === "es" ? ur(e) : n === "de" ? dr(e) : n === "it" ? fr(e) : n === "pt" ? pr(e) : n === "zh" ? mr(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : cr(e);
}), yr = [
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
function br(e) {
	return yr.includes(e);
}
var xr = /* @__PURE__ */ new Set([
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
function Sr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!br(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !xr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Cr = n(typeof window < "u" ? window.location.pathname : "/en"), wr = t(Cr, (e) => Sr(e)), Tr = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), Er = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function Dr(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(wr, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: ie(),
			role: he(),
			bio: W()
		},
		{
			name: Le(),
			role: Je(),
			bio: Ee()
		},
		{
			name: gt(),
			role: Dt(),
			bio: at()
		},
		{
			name: Yt(),
			role: sn(),
			bio: Rt()
		},
		{
			name: kn(),
			role: Bn(),
			bio: vn()
		},
		{
			name: $(),
			role: vr(),
			bio: Zn()
		}
	]));
	var c = Er();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Tr(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.only_child(u, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_text(a, t), e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).role), e.set_text(d, e.get(n).bio);
		}, [() => e.get(n).name.split(" ").map((e) => e[0]).join("")]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Dr as default };

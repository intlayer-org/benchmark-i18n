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
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
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
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t, w();
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
	let l = () => {
		!u && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(te)?.[1];
	return C = _(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = y(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var k, A;
function j(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = y(new URL(t, "http://example.com")), r = D(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (b(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", I = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", L = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", R = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", z = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", B = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", V = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", H = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", U = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", W = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Sarah Chen", q = () => "Sarah Chen", J = () => "Sarah Chen", Y = () => "Sarah Chen", X = () => "Sarah Chen", Z = () => "Sarah Chen", Q = () => "Sarah Chen", ne = () => "Sarah Chen", re = () => "Sarah Chen", ie = () => "Сара Чен", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : K(e);
}), oe = () => "Founder & Lead Engineer", se = () => "Fondatrice & lead ingénieur", ce = () => "Fundadora e ingeniera principal", le = () => "Gründerin & Leitende Ingenieurin", ue = () => "Fondatrice e Responsabile tecnico", de = () => "Fundadora e Engenheira Líder", fe = () => "创始人兼首席工程师", pe = () => "創設者 & リードエンジニア", me = () => "Founder & Lead Engineer", he = () => "Основатель и ведущий инженер", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", ve = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", ye = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", be = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", xe = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", Se = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", Ce = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", we = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", Te = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", Ee = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", De = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Marcus Weber", ke = () => "Marcus Weber", Ae = () => "Marcus Weber", je = () => "Marcus Weber", Me = () => "Marcus Weber", Ne = () => "Marcus Weber", Pe = () => "Marcus Weber", Fe = () => "Marcus Weber", Ie = () => "Marcus Weber", Le = () => "Маркус Вебер", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Performance Engineer", Be = () => "Ingénieur performance", Ve = () => "Ingeniero de rendimiento", He = () => "Performance-Ingenieur", Ue = () => "Ingegnere delle prestazioni", We = () => "Engenheiro de performance", Ge = () => "性能工程师", Ke = () => "パフォーマンスエンジニア", qe = () => "Performance Engineer", Je = () => "Инженер по производительности", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", Ze = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", Qe = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", $e = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", et = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", tt = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", nt = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", rt = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", it = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", at = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "Aisha Patel", ct = () => "Aisha Patel", lt = () => "Aisha Patel", ut = () => "Aisha Patel", dt = () => "Aisha Patel", ft = () => "Aisha Patel", pt = () => "Aisha Patel", mt = () => "Aisha Patel", ht = () => "Aisha Patel", gt = () => "Айша Патель", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Developer Advocate", yt = () => "Developer advocate", bt = () => "Developer Advocate", xt = () => "Developer Advocate", St = () => "Developer Advocate", Ct = () => "Developer Advocate", wt = () => "开发者倡导者", Tt = () => "Developer Advocate", Et = () => "Developer Advocate", Dt = () => "Developer Advocate", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", At = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", jt = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", Mt = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", Nt = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", Pt = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", Ft = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", It = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", Lt = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", Rt = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "Tomás Rodríguez", Vt = () => "Tomás Rodríguez", Ht = () => "Tomás Rodríguez", Ut = () => "Tomás Rodríguez", Wt = () => "Tomás Rodríguez", Gt = () => "Tomás Rodríguez", Kt = () => "Tomás Rodríguez", qt = () => "Tomás Rodríguez", Jt = () => "Tomás Rodríguez", Yt = () => "Томас Родригес", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "Full-Stack Developer", Qt = () => "Développeur full-stack", $t = () => "Desarrollador Full-Stack", en = () => "Full-Stack-Entwickler", tn = () => "Sviluppatore Full-Stack", nn = () => "Desenvolvedor Full-Stack", rn = () => "全栈开发人员", an = () => "フルスタックデベロッパー", on = () => "Full-Stack Developer", sn = () => "Full-Stack разработчик", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", un = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", dn = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", fn = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", pn = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", mn = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", hn = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", gn = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", _n = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", vn = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "Yuki Tanaka", xn = () => "Yuki Tanaka", Sn = () => "Yuki Tanaka", Cn = () => "Yuki Tanaka", wn = () => "Yuki Tanaka", Tn = () => "Yuki Tanaka", En = () => "Yuki Tanaka", Dn = () => "Yuki Tanaka", On = () => "Yuki Tanaka", kn = () => "Юки Танака", An = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "Data Analyst", Mn = () => "Analyste de données", Nn = () => "Analista de datos", Pn = () => "Datenanalyst", Fn = () => "Analista dati", In = () => "Analista de dados", Ln = () => "数据分析师", Rn = () => "データアナリスト", zn = () => "Data Analyst", Bn = () => "Аналитик данных", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Un = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", Wn = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", Gn = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", Kn = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", qn = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", Jn = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", Yn = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", Xn = () => "Manages community contributions, partnerships, and events. Background in open source governance.", Zn = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), $n = () => "Elena Kowalski", er = () => "Elena Kowalski", $ = () => "Elena Kowalski", tr = () => "Elena Kowalski", nr = () => "Elena Kowalski", rr = () => "Elena Kowalski", ir = () => "Elena Kowalski", ar = () => "Elena Kowalski", or = () => "Elena Kowalski", sr = () => "Елена Ковальски", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? er(e) : n === "es" ? $(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : $n(e);
}), lr = () => "Community Manager", ur = () => "Community manager", dr = () => "Responsable de la comunidad", fr = () => "Community Manager", pr = () => "Responsable della comunità", mr = () => "Gerente de comunidade", hr = () => "社区经理", gr = () => "コミュニティマネージャー", _r = () => "Community Manager", vr = () => "Комьюнити-менеджер", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : lr(e);
}), br = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), xr = n("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function Sr() {
	let n = () => [
		{
			name: ae(),
			role: ge(),
			bio: G()
		},
		{
			name: Re(),
			role: Ye(),
			bio: De()
		},
		{
			name: _t(),
			role: Ot(),
			bio: ot()
		},
		{
			name: Xt(),
			role: cn(),
			bio: zt()
		},
		{
			name: An(),
			role: Vn(),
			bio: yn()
		},
		{
			name: cr(),
			role: yr(),
			bio: Qn()
		}
	];
	return (() => {
		var i = br();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = xr(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.name.split(" ").map((e) => e[0]).join("")), t(i, () => e.name), t(a, () => e.role), t(o, () => e.bio), n;
			})()
		})), i;
	})();
}
export { Sr as default };

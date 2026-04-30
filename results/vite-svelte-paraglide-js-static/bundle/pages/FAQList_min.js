import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = Object.defineProperty, n = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, r = {}, i = [
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
function ee(e) {
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
function d(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var f = void 0, p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!p && typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], c = s;
	!p && typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
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
	let l = () => {
		!p && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return y(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "i18n Bench", w = () => "Bench i18n", T = () => "i18n Bench", E = () => "i18n Bench", D = () => "i18n Bench", O = () => "i18n Bench", k = () => "i18n Bench", A = () => "i18n Bench", j = () => "i18n Bench", M = () => "i18n Bench", N = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "i18n Benchmark", F = () => "Benchmark i18n", I = () => "i18n Benchmark", L = () => "i18n Benchmark", R = () => "i18n Benchmark", z = () => "i18n Benchmark", B = () => "i18n Benchmark", V = () => "i18n Benchmark", H = () => "i18n Benchmark", U = () => "i18n Benchmark", W = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "contact@intlayer.org", K = () => "contact@intlayer.org", q = () => "contact@intlayer.org", J = () => "contact@intlayer.org", Y = () => "contact@intlayer.org", X = () => "contact@intlayer.org", Z = () => "contact@intlayer.org", re = () => "contact@intlayer.org", ie = () => "contact@intlayer.org", ae = () => "contact@intlayer.org", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Go to GitHub", ce = () => "Aller sur GitHub", le = () => "Ir a GitHub", ue = () => "Zu GitHub", de = () => "Vai su GitHub", fe = () => "Ir para o GitHub", pe = () => "前往 GitHub", me = () => "GitHubへ", he = () => "Go to GitHub", ge = () => "Перейти на GitHub", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Home", ye = () => "Accueil", be = () => "Inicio", xe = () => "Home", Se = () => "Home", Ce = () => "Início", we = () => "首页", Te = () => "ホーム", Ee = () => "Home", De = () => "Главная", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Methodology", Ae = () => "Méthodologie", je = () => "Metodología", Me = () => "Methodik", Ne = () => "Metodologia", Pe = () => "Metodologia", Fe = () => "方法论", Ie = () => "手法", Le = () => "Methodology", Re = () => "Методология", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "Mock Pages", Ve = () => "Pages fictives", He = () => "Páginas de prueba", Ue = () => "Testseiten", We = () => "Pagine di test", Ge = () => "Páginas de Teste", Ke = () => "模拟页面", qe = () => "テストページ", Je = () => "Mock Pages", Ye = () => "Тестовые страницы", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Products", Qe = () => "Produits", $e = () => "Productos", et = () => "Produkte", tt = () => "Prodotti", nt = () => "Produtos", rt = () => "产品", it = () => "製品", at = () => "Products", ot = () => "Продукты", st = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "Pricing", lt = () => "Tarifs", ut = () => "Precios", dt = () => "Preise", ft = () => "Prezzi", pt = () => "Preços", mt = () => "价格", ht = () => "価格", gt = () => "Pricing", _t = () => "Цены", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "Team", bt = () => "Équipe", xt = () => "Equipo", St = () => "Team", Ct = () => "Team", wt = () => "Equipe", Tt = () => "团队", Et = () => "チーム", Dt = () => "Team", Ot = () => "Команда", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), At = () => "Blog", jt = () => "Blog", Mt = () => "Blog", Nt = () => "Blog", Pt = () => "Blog", Ft = () => "Blog", It = () => "博客", Lt = () => "ブログ", Rt = () => "Blog", zt = () => "Блог", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? At(e) : n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
}), Vt = () => "Careers", Ht = () => "Carrières", Ut = () => "Carreras", Wt = () => "Karriere", Gt = () => "Carriere", Kt = () => "Carreiras", qt = () => "招聘", Jt = () => "採用情報", Yt = () => "Careers", Xt = () => "Вакансии", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Vt(e) : n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "FAQ", $t = () => "FAQ", en = () => "FAQ", tn = () => "FAQ", nn = () => "FAQ", rn = () => "FAQ", an = () => "常见问题", on = () => "FAQ", sn = () => "FAQ", cn = () => "FAQ", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = () => "Contact", dn = () => "Contact", fn = () => "Contacto", pn = () => "Kontakt", mn = () => "Contatti", hn = () => "Contato", gn = () => "联系我们", _n = () => "お問い合わせ", vn = () => "Contact", yn = () => "Контакт", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? un(e) : n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : yn(e);
}), xn = () => "Settings", Sn = () => "Paramètres", Cn = () => "Ajustes", wn = () => "Einstellungen", Tn = () => "Impostazioni", En = () => "Configurações", Dn = () => "设置", On = () => "設定", kn = () => "Settings", An = () => "Настройки", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), Mn = () => "i18n Benchmark", Nn = () => "Benchmark i18n", Pn = () => "i18n Benchmark", Fn = () => "i18n Benchmark", In = () => "i18n Benchmark", Ln = () => "i18n Benchmark", Rn = () => "i18n Benchmark", zn = () => "i18n Benchmark", Bn = () => "i18n Benchmark", Vn = () => "i18n Benchmark", Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Mn(e) : n === "fr" ? Nn(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : Vn(e);
}), Un = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Wn = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Gn = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Kn = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", qn = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Jn = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Yn = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", Xn = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", Zn = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Qn = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", $n = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Un(e) : n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "de" ? Kn(e) : n === "it" ? qn(e) : n === "pt" ? Jn(e) : n === "zh" ? Yn(e) : n === "ja" ? Xn(e) : n === "ko" ? Zn(e) : Qn(e);
}), er = () => "Resources", tr = () => "Ressources", nr = () => "Recursos", rr = () => "Ressourcen", ir = () => "Risorse", ar = () => "Recursos", or = () => "资源", sr = () => "リソース", cr = () => "Resources", lr = () => "Ресурсы", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? er(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
}), dr = () => "GitHub", fr = () => "GitHub", pr = () => "GitHub", mr = () => "GitHub", hr = () => "GitHub", gr = () => "GitHub", _r = () => "GitHub", vr = () => "GitHub", yr = () => "GitHub", br = () => "GitHub", xr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? dr(e) : n === "fr" ? fr(e) : n === "es" ? pr(e) : n === "de" ? mr(e) : n === "it" ? hr(e) : n === "pt" ? gr(e) : n === "zh" ? _r(e) : n === "ja" ? vr(e) : n === "ko" ? yr(e) : br(e);
}), Sr = () => "Methodology", Cr = () => "Méthodologie", wr = () => "Metodología", Tr = () => "Methodik", Er = () => "Metodologia", Dr = () => "Metodologia", Or = () => "方法论", kr = () => "手法", Ar = () => "Methodology", jr = () => "Методология", Mr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Sr(e) : n === "fr" ? Cr(e) : n === "es" ? wr(e) : n === "de" ? Tr(e) : n === "it" ? Er(e) : n === "pt" ? Dr(e) : n === "zh" ? Or(e) : n === "ja" ? kr(e) : n === "ko" ? Ar(e) : jr(e);
}), Nr = () => "Contributing", Pr = () => "Contribuer", Fr = () => "Contribuir", Ir = () => "Beitragen", Lr = () => "Contribuire", Rr = () => "Contribuindo", zr = () => "贡献", Br = () => "貢献する", Vr = () => "Contributing", Hr = () => "Участие в проекте", Ur = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Nr(e) : n === "fr" ? Pr(e) : n === "es" ? Fr(e) : n === "de" ? Ir(e) : n === "it" ? Lr(e) : n === "pt" ? Rr(e) : n === "zh" ? zr(e) : n === "ja" ? Br(e) : n === "ko" ? Vr(e) : Hr(e);
}), Wr = () => "Contact", Gr = () => "Contact", Kr = () => "Contacto", qr = () => "Kontakt", Jr = () => "Contatti", Yr = () => "Contato", Xr = () => "联系我们", Zr = () => "お問い合わせ", Qr = () => "Contact", $r = () => "Контакт", ei = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Wr(e) : n === "fr" ? Gr(e) : n === "es" ? Kr(e) : n === "de" ? qr(e) : n === "it" ? Jr(e) : n === "pt" ? Yr(e) : n === "zh" ? Xr(e) : n === "ja" ? Zr(e) : n === "ko" ? Qr(e) : $r(e);
}), ti = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ni = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", ri = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ii = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", ai = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", oi = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", si = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ci = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", li = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ui = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", di = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ti(e) : n === "fr" ? ni(e) : n === "es" ? ri(e) : n === "de" ? ii(e) : n === "it" ? ai(e) : n === "pt" ? oi(e) : n === "zh" ? si(e) : n === "ja" ? ci(e) : n === "ko" ? li(e) : ui(e);
}), fi = () => "Theme: Auto", pi = () => "Thème : automatique", mi = () => "Tema: Auto", hi = () => "Thema: Auto", gi = () => "Tema: Auto", _i = () => "Tema: Automático", vi = () => "主题：自动", yi = () => "テーマ：自動", bi = () => "Theme: Auto", xi = () => "Тема: Авто", Si = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? fi(e) : n === "fr" ? pi(e) : n === "es" ? mi(e) : n === "de" ? hi(e) : n === "it" ? gi(e) : n === "pt" ? _i(e) : n === "zh" ? vi(e) : n === "ja" ? yi(e) : n === "ko" ? bi(e) : xi(e);
}), Ci = () => "Theme: Dark", wi = () => "Thème : sombre", Ti = () => "Tema: Oscuro", Ei = () => "Thema: Dunkel", Di = () => "Tema: Scuro", Oi = () => "Tema: Escuro", ki = () => "主题：深色", Ai = () => "テーマ：ダーク", ji = () => "Theme: Dark", Mi = () => "Тема: Темная", Ni = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ci(e) : n === "fr" ? wi(e) : n === "es" ? Ti(e) : n === "de" ? Ei(e) : n === "it" ? Di(e) : n === "pt" ? Oi(e) : n === "zh" ? ki(e) : n === "ja" ? Ai(e) : n === "ko" ? ji(e) : Mi(e);
}), Pi = () => "Theme: Light", Fi = () => "Thème : clair", Ii = () => "Tema: Claro", Li = () => "Thema: Hell", Ri = () => "Tema: Chiaro", zi = () => "Tema: Claro", Bi = () => "主题：浅色", Vi = () => "テーマ：ライト", Hi = () => "Theme: Light", Ui = () => "Тема: Светлая", Wi = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Pi(e) : n === "fr" ? Fi(e) : n === "es" ? Ii(e) : n === "de" ? Li(e) : n === "it" ? Ri(e) : n === "pt" ? zi(e) : n === "zh" ? Bi(e) : n === "ja" ? Vi(e) : n === "ko" ? Hi(e) : Ui(e);
}), Gi = () => "Theme mode: auto (system). Click to switch to light mode.", Ki = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", qi = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Ji = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Yi = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Xi = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", Zi = () => "主题模式：自动（系统）。点击切换到浅色模式。", Qi = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", $i = () => "Theme mode: auto (system). Click to switch to light mode.", ea = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", ta = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Gi(e) : n === "fr" ? Ki(e) : n === "es" ? qi(e) : n === "de" ? Ji(e) : n === "it" ? Yi(e) : n === "pt" ? Xi(e) : n === "zh" ? Zi(e) : n === "ja" ? Qi(e) : n === "ko" ? $i(e) : ea(e);
}), na = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ra = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, ia = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, aa = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, oa = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, sa = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, ca = (e) => `主题模式：${e?.mode}。点击切换模式。`, la = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, ua = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, da = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, fa = ((e, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? na(e) : n === "fr" ? ra(e) : n === "es" ? ia(e) : n === "de" ? aa(e) : n === "it" ? oa(e) : n === "pt" ? sa(e) : n === "zh" ? ca(e) : n === "ja" ? la(e) : n === "ko" ? ua(e) : da(e);
}), pa = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", ma = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", ha = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", ga = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", _a = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", va = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", ya = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", ba = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", xa = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", Sa = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", Ca = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? pa(e) : n === "fr" ? ma(e) : n === "es" ? ha(e) : n === "de" ? ga(e) : n === "it" ? _a(e) : n === "pt" ? va(e) : n === "zh" ? ya(e) : n === "ja" ? ba(e) : n === "ko" ? xa(e) : Sa(e);
}), wa = () => "i18n Benchmark", Ta = () => "Benchmark i18n", Ea = () => "i18n Benchmark", Da = () => "i18n Benchmark", Oa = () => "i18n Benchmark", ka = () => "i18n Benchmark", Aa = () => "i18n Benchmark", ja = () => "i18n Benchmark", Ma = () => "i18n Benchmark", Na = () => "i18n Benchmark", Pa = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? wa(e) : n === "fr" ? Ta(e) : n === "es" ? Ea(e) : n === "de" ? Da(e) : n === "it" ? Oa(e) : n === "pt" ? ka(e) : n === "zh" ? Aa(e) : n === "ja" ? ja(e) : n === "ko" ? Ma(e) : Na(e);
}), Fa = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", Ia = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", La = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", Ra = () => "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.", za = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", Ba = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.", Va = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", Ha = () => "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。", Ua = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", Wa = () => "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", Ga = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Fa(e) : n === "fr" ? Ia(e) : n === "es" ? La(e) : n === "de" ? Ra(e) : n === "it" ? za(e) : n === "pt" ? Ba(e) : n === "zh" ? Va(e) : n === "ja" ? Ha(e) : n === "ko" ? Ua(e) : Wa(e);
}), Ka = () => "View Results", qa = () => "Voir les résultats", Ja = () => "Ver resultados", Ya = () => "Ergebnisse anzeigen", Xa = () => "Visualizza i risultati", Za = () => "Ver Resultados", Qa = () => "查看结果", $a = () => "結果を見る", eo = () => "View Results", to = () => "Посмотреть результаты", no = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ka(e) : n === "fr" ? qa(e) : n === "es" ? Ja(e) : n === "de" ? Ya(e) : n === "it" ? Xa(e) : n === "pt" ? Za(e) : n === "zh" ? Qa(e) : n === "ja" ? $a(e) : n === "ko" ? eo(e) : to(e);
}), ro = () => "Methodology", io = () => "Méthodologie", ao = () => "Metodología", oo = () => "Methodik", so = () => "Metodologia", co = () => "Metodologia", lo = () => "方法论", uo = () => "手法", fo = () => "Methodology", po = () => "Методология", mo = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ro(e) : n === "fr" ? io(e) : n === "es" ? ao(e) : n === "de" ? oo(e) : n === "it" ? so(e) : n === "pt" ? co(e) : n === "zh" ? lo(e) : n === "ja" ? uo(e) : n === "ko" ? fo(e) : po(e);
}), ho = () => "Why These Metrics Matter", go = () => "Pourquoi ces métriques comptent", _o = () => "Por qué son importantes estas métricas", vo = () => "Warum diese Metriken wichtig sind", yo = () => "Perché queste metriche sono importanti", bo = () => "Por que estas métricas importam", xo = () => "为什么这些指标很重要", So = () => "なぜこれらの指標が重要なのか", Co = () => "Why These Metrics Matter", wo = () => "Почему эти метрики важны", To = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ho(e) : n === "fr" ? go(e) : n === "es" ? _o(e) : n === "de" ? vo(e) : n === "it" ? yo(e) : n === "pt" ? bo(e) : n === "zh" ? xo(e) : n === "ja" ? So(e) : n === "ko" ? Co(e) : wo(e);
}), Eo = () => "Bundle Size", Do = () => "Taille du bundle", Oo = () => "Tamaño del bundle", ko = () => "Bundle-Größe", Ao = () => "Dimensione del bundle", jo = () => "Tamanho do bundle", Mo = () => "包大小", No = () => "バンドルサイズ", Po = () => "Bundle Size", Fo = () => "Размер бандла", Io = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Eo(e) : n === "fr" ? Do(e) : n === "es" ? Oo(e) : n === "de" ? ko(e) : n === "it" ? Ao(e) : n === "pt" ? jo(e) : n === "zh" ? Mo(e) : n === "ja" ? No(e) : n === "ko" ? Po(e) : Fo(e);
}), Lo = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", Ro = () => "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.", zo = () => "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.", Bo = () => "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.", Vo = () => "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.", Ho = () => "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.", Uo = () => "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。", Wo = () => "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。", Go = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", Ko = () => "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.", qo = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Lo(e) : n === "fr" ? Ro(e) : n === "es" ? zo(e) : n === "de" ? Bo(e) : n === "it" ? Vo(e) : n === "pt" ? Ho(e) : n === "zh" ? Uo(e) : n === "ja" ? Wo(e) : n === "ko" ? Go(e) : Ko(e);
}), Jo = () => "Rendering & Hydration", Yo = () => "Rendu et hydratation", Xo = () => "Renderizado e hidratación", Zo = () => "Rendering & Hydrierung", Qo = () => "Rendering e idratazione", $o = () => "Renderização e hidratação", es = () => "渲染与注水", ts = () => "レンダリングとハイドレーション", ns = () => "Rendering & Hydration", rs = () => "Рендеринг и гидратация", is = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Jo(e) : n === "fr" ? Yo(e) : n === "es" ? Xo(e) : n === "de" ? Zo(e) : n === "it" ? Qo(e) : n === "pt" ? $o(e) : n === "zh" ? es(e) : n === "ja" ? ts(e) : n === "ko" ? ns(e) : rs(e);
}), as = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", os = () => "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).", ss = () => "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).", cs = () => "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.", ls = () => "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).", us = () => "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).", ds = () => "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。", fs = () => "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。", ps = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", ms = () => "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).", hs = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? as(e) : n === "fr" ? os(e) : n === "es" ? ss(e) : n === "de" ? cs(e) : n === "it" ? ls(e) : n === "pt" ? us(e) : n === "zh" ? ds(e) : n === "ja" ? fs(e) : n === "ko" ? ps(e) : ms(e);
}), gs = () => "Dynamic Loading", _s = () => "Chargement dynamique", vs = () => "Carga dinámica", ys = () => "Dynamisches Laden", bs = () => "Caricamento dinamico", xs = () => "Carregamento dinâmico", Ss = () => "动态加载", Cs = () => "動的読み込み", ws = () => "Dynamic Loading", Ts = () => "Динамическая загрузка", Es = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? gs(e) : n === "fr" ? _s(e) : n === "es" ? vs(e) : n === "de" ? ys(e) : n === "it" ? bs(e) : n === "pt" ? xs(e) : n === "zh" ? Ss(e) : n === "ja" ? Cs(e) : n === "ko" ? ws(e) : Ts(e);
}), Ds = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", Os = () => "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.", ks = () => "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.", As = () => "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.", js = () => "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.", Ms = () => "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.", Ns = () => "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。", Ps = () => "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。", Fs = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", Is = () => "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.", Ls = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ds(e) : n === "fr" ? Os(e) : n === "es" ? ks(e) : n === "de" ? As(e) : n === "it" ? js(e) : n === "pt" ? Ms(e) : n === "zh" ? Ns(e) : n === "ja" ? Ps(e) : n === "ko" ? Fs(e) : Is(e);
}), Rs = () => "Understanding the Impact", zs = () => "Comprendre l'impact", Bs = () => "Entendiendo el impacto", Vs = () => "Die Auswirkungen verstehen", Hs = () => "Capire l'impatto", Us = () => "Entendendo o impacto", Ws = () => "理解影响", Gs = () => "影響を理解する", Ks = () => "Understanding the Impact", qs = () => "Понимание влияния", Js = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Rs(e) : n === "fr" ? zs(e) : n === "es" ? Bs(e) : n === "de" ? Vs(e) : n === "it" ? Hs(e) : n === "pt" ? Us(e) : n === "zh" ? Ws(e) : n === "ja" ? Gs(e) : n === "ko" ? Ks(e) : qs(e);
}), Ys = () => "Why a single large JSON can hurt performance", Xs = () => "Pourquoi un unique gros JSON peut nuire aux performances", Zs = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", Qs = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", $s = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", ec = () => "Por que um único JSON grande pode prejudicar o desempenho", tc = () => "为什么单个大型 JSON 会损害性能", nc = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", rc = () => "Why a single large JSON can hurt performance", ic = () => "Почему один большой JSON может снизить производительность", ac = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ys(e) : n === "fr" ? Xs(e) : n === "es" ? Zs(e) : n === "de" ? Qs(e) : n === "it" ? $s(e) : n === "pt" ? ec(e) : n === "zh" ? tc(e) : n === "ja" ? nc(e) : n === "ko" ? rc(e) : ic(e);
}), oc = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", sc = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", cc = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", lc = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", uc = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", dc = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", fc = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", pc = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", mc = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", hc = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", gc = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oc(e) : n === "fr" ? sc(e) : n === "es" ? cc(e) : n === "de" ? lc(e) : n === "it" ? uc(e) : n === "pt" ? dc(e) : n === "zh" ? fc(e) : n === "ja" ? pc(e) : n === "ko" ? mc(e) : hc(e);
}), _c = () => "The JSON must be parsed on every page load — blocking the main thread.", vc = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", yc = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", bc = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", xc = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", Sc = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", Cc = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", wc = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", Tc = () => "The JSON must be parsed on every page load — blocking the main thread.", Ec = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", Dc = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _c(e) : n === "fr" ? vc(e) : n === "es" ? yc(e) : n === "de" ? bc(e) : n === "it" ? xc(e) : n === "pt" ? Sc(e) : n === "zh" ? Cc(e) : n === "ja" ? wc(e) : n === "ko" ? Tc(e) : Ec(e);
}), Oc = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", kc = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", Ac = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", jc = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", Mc = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", Nc = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", Pc = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", Fc = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", Ic = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", Lc = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", Rc = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Oc(e) : n === "fr" ? kc(e) : n === "es" ? Ac(e) : n === "de" ? jc(e) : n === "it" ? Mc(e) : n === "pt" ? Nc(e) : n === "zh" ? Pc(e) : n === "ja" ? Fc(e) : n === "ko" ? Ic(e) : Lc(e);
}), zc = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Bc = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", Vc = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Hc = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", Uc = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", Wc = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", Gc = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Kc = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", qc = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Jc = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", Yc = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zc(e) : n === "fr" ? Bc(e) : n === "es" ? Vc(e) : n === "de" ? Hc(e) : n === "it" ? Uc(e) : n === "pt" ? Wc(e) : n === "zh" ? Gc(e) : n === "ja" ? Kc(e) : n === "ko" ? qc(e) : Jc(e);
}), Xc = () => "The trade-offs of dynamic loading", Zc = () => "Les compromis du chargement dynamique", Qc = () => "Las compensaciones de la carga dinámica", $c = () => "Die Kompromisse beim dynamischen Laden", el = () => "I compromessi del caricamento dinamico", tl = () => "Os trade-offs do carregamento dinâmico", nl = () => "动态加载的权衡", rl = () => "動的読み込みのトレードオフ", il = () => "The trade-offs of dynamic loading", al = () => "Компромиссы динамической загрузки", ol = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Xc(e) : n === "fr" ? Zc(e) : n === "es" ? Qc(e) : n === "de" ? $c(e) : n === "it" ? el(e) : n === "pt" ? tl(e) : n === "zh" ? nl(e) : n === "ja" ? rl(e) : n === "ko" ? il(e) : al(e);
}), sl = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", cl = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", ll = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", ul = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", dl = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", fl = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", pl = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", ml = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", hl = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", gl = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", _l = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? sl(e) : n === "fr" ? cl(e) : n === "es" ? ll(e) : n === "de" ? ul(e) : n === "it" ? dl(e) : n === "pt" ? fl(e) : n === "zh" ? pl(e) : n === "ja" ? ml(e) : n === "ko" ? hl(e) : gl(e);
}), vl = () => "Waterfall requests:", yl = () => "Requêtes en cascade :", bl = () => "Solicitudes en cascada:", xl = () => "Waterfall-Anfragen:", Sl = () => "Richieste a cascata:", Cl = () => "Requisições em cascata:", wl = () => "瀑布流请求：", Tl = () => "ウォーターフォールリクエスト：", El = () => "Waterfall requests:", Dl = () => "Каскадные запросы:", Ol = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? vl(e) : n === "fr" ? yl(e) : n === "es" ? bl(e) : n === "de" ? xl(e) : n === "it" ? Sl(e) : n === "pt" ? Cl(e) : n === "zh" ? wl(e) : n === "ja" ? Tl(e) : n === "ko" ? El(e) : Dl(e);
}), kl = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Al = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", jl = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", Ml = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", Nl = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", Pl = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", Fl = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", Il = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", Ll = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Rl = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", zl = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? kl(e) : n === "fr" ? Al(e) : n === "es" ? jl(e) : n === "de" ? Ml(e) : n === "it" ? Nl(e) : n === "pt" ? Pl(e) : n === "zh" ? Fl(e) : n === "ja" ? Il(e) : n === "ko" ? Ll(e) : Rl(e);
}), Bl = () => "Flash of untranslated content (FOUC):", Vl = () => "Flash de contenu non traduit (FOUC) :", Hl = () => "Parpadeo de contenido no traducido (FOUC):", Ul = () => "Flash of Untranslated Content (FOUC):", Wl = () => "Flash di contenuti non tradotti (FOUC):", Gl = () => "Flash de conteúdo não traduzido (FOUC):", Kl = () => "未翻译内容闪烁 (FOUC)：", ql = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", Jl = () => "Flash of untranslated content (FOUC):", Yl = () => "Мерцание непереведенного контента (FOUC):", Xl = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Bl(e) : n === "fr" ? Vl(e) : n === "es" ? Hl(e) : n === "de" ? Ul(e) : n === "it" ? Wl(e) : n === "pt" ? Gl(e) : n === "zh" ? Kl(e) : n === "ja" ? ql(e) : n === "ko" ? Jl(e) : Yl(e);
}), Zl = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Ql = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", $l = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", eu = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", tu = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", nu = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", ru = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", iu = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", au = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", ou = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", su = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Zl(e) : n === "fr" ? Ql(e) : n === "es" ? $l(e) : n === "de" ? eu(e) : n === "it" ? tu(e) : n === "pt" ? nu(e) : n === "zh" ? ru(e) : n === "ja" ? iu(e) : n === "ko" ? au(e) : ou(e);
}), cu = () => "Cache invalidation:", lu = () => "Invalidation du cache :", uu = () => "Invalidación de la caché:", du = () => "Cache-Invalidierung:", fu = () => "Invalidazione della cache:", pu = () => "Invalidação de cache:", mu = () => "缓存失效：", hu = () => "キャッシュの無効化：", gu = () => "Cache invalidation:", _u = () => "Инвалидация кэша:", vu = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? cu(e) : n === "fr" ? lu(e) : n === "es" ? uu(e) : n === "de" ? du(e) : n === "it" ? fu(e) : n === "pt" ? pu(e) : n === "zh" ? mu(e) : n === "ja" ? hu(e) : n === "ko" ? gu(e) : _u(e);
}), yu = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", bu = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", xu = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", Su = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", Cu = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", wu = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", Tu = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", Eu = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", Du = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", Ou = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", ku = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yu(e) : n === "fr" ? bu(e) : n === "es" ? xu(e) : n === "de" ? Su(e) : n === "it" ? Cu(e) : n === "pt" ? wu(e) : n === "zh" ? Tu(e) : n === "ja" ? Eu(e) : n === "ko" ? Du(e) : Ou(e);
}), Au = () => "What this benchmark measures", ju = () => "Ce que mesure ce benchmark", Mu = () => "Qué mide este benchmark", Nu = () => "Was dieser Benchmark misst", Pu = () => "Cosa misura questo benchmark", Fu = () => "O que este benchmark mede", Iu = () => "此基准测试衡量的内容", Lu = () => "このベンチマークが測定するもの", Ru = () => "What this benchmark measures", zu = () => "Что измеряет этот бенчмарк", Bu = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Au(e) : n === "fr" ? ju(e) : n === "es" ? Mu(e) : n === "de" ? Nu(e) : n === "it" ? Pu(e) : n === "pt" ? Fu(e) : n === "zh" ? Iu(e) : n === "ja" ? Lu(e) : n === "ko" ? Ru(e) : zu(e);
}), Vu = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Hu = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", Uu = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Wu = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", Gu = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Ku = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", qu = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Ju = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Yu = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Xu = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", Zu = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Vu(e) : n === "fr" ? Hu(e) : n === "es" ? Uu(e) : n === "de" ? Wu(e) : n === "it" ? Gu(e) : n === "pt" ? Ku(e) : n === "zh" ? qu(e) : n === "ja" ? Ju(e) : n === "ko" ? Yu(e) : Xu(e);
}), Qu = () => "Sample Results", $u = () => "Exemple de résultats", ed = () => "Resultados de muestra", td = () => "Beispielergebnisse", nd = () => "Risultati di esempio", rd = () => "Resultados de exemplo", id = () => "示例结果", ad = () => "サンプル結果", od = () => "Sample Results", sd = () => "Примеры результатов", cd = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Qu(e) : n === "fr" ? $u(e) : n === "es" ? ed(e) : n === "de" ? td(e) : n === "it" ? nd(e) : n === "pt" ? rd(e) : n === "zh" ? id(e) : n === "ja" ? ad(e) : n === "ko" ? od(e) : sd(e);
}), ld = () => "Library", ud = () => "Bibliothèque", dd = () => "Biblioteca", fd = () => "Bibliothek", pd = () => "Libreria", md = () => "Biblioteca", hd = () => "库", gd = () => "ライブラリ", _d = () => "Library", vd = () => "Библиотека", yd = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ld(e) : n === "fr" ? ud(e) : n === "es" ? dd(e) : n === "de" ? fd(e) : n === "it" ? pd(e) : n === "pt" ? md(e) : n === "zh" ? hd(e) : n === "ja" ? gd(e) : n === "ko" ? _d(e) : vd(e);
}), bd = () => "Bundle Size", xd = () => "Taille du bundle", Sd = () => "Tamaño del bundle", Cd = () => "Bundle-Größe", wd = () => "Dimensione del bundle", Td = () => "Tamanho do Bundle", Ed = () => "包大小", Dd = () => "バンドルサイズ", Od = () => "Bundle Size", kd = () => "Размер бандла", Ad = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? bd(e) : n === "fr" ? xd(e) : n === "es" ? Sd(e) : n === "de" ? Cd(e) : n === "it" ? wd(e) : n === "pt" ? Td(e) : n === "zh" ? Ed(e) : n === "ja" ? Dd(e) : n === "ko" ? Od(e) : kd(e);
}), jd = () => "Lookup Time", Md = () => "Temps de recherche", Nd = () => "Tiempo de búsqueda", Pd = () => "Lookup-Zeit", Fd = () => "Tempo di ricerca", Id = () => "Tempo de Busca", Ld = () => "查找时间", Rd = () => "ルックアップ時間", zd = () => "Lookup Time", Bd = () => "Время поиска", Vd = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? jd(e) : n === "fr" ? Md(e) : n === "es" ? Nd(e) : n === "de" ? Pd(e) : n === "it" ? Fd(e) : n === "pt" ? Id(e) : n === "zh" ? Ld(e) : n === "ja" ? Rd(e) : n === "ko" ? zd(e) : Bd(e);
}), Hd = () => "Lazy Loading", Ud = () => "Chargement paresseux", Wd = () => "Carga diferida", Gd = () => "Lazy Loading", Kd = () => "Caricamento lazy", qd = () => "Carregamento Lento", Jd = () => "延迟加载", Yd = () => "遅延読み込み", Xd = () => "Lazy Loading", Zd = () => "Ленивая загрузка", Qd = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Hd(e) : n === "fr" ? Ud(e) : n === "es" ? Wd(e) : n === "de" ? Gd(e) : n === "it" ? Kd(e) : n === "pt" ? qd(e) : n === "zh" ? Jd(e) : n === "ja" ? Yd(e) : n === "ko" ? Xd(e) : Zd(e);
}), $d = () => "Yes", ef = () => "Oui", tf = () => "Sí", nf = () => "Ja", rf = () => "Sì", af = () => "Sim", of = () => "是", sf = () => "はい", cf = () => "Yes", lf = () => "Да", uf = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? $d(e) : n === "fr" ? ef(e) : n === "es" ? tf(e) : n === "de" ? nf(e) : n === "it" ? rf(e) : n === "pt" ? af(e) : n === "zh" ? of(e) : n === "ja" ? sf(e) : n === "ko" ? cf(e) : lf(e);
}), df = () => "Manual", ff = () => "Manuel", pf = () => "Manual", mf = () => "Manuell", hf = () => "Manuale", gf = () => "Manual", _f = () => "手动", vf = () => "手動", yf = () => "Manual", bf = () => "Вручную", xf = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? df(e) : n === "fr" ? ff(e) : n === "es" ? pf(e) : n === "de" ? mf(e) : n === "it" ? hf(e) : n === "pt" ? gf(e) : n === "zh" ? _f(e) : n === "ja" ? vf(e) : n === "ko" ? yf(e) : bf(e);
}), Sf = () => "Built-in", Cf = () => "Intégré", wf = () => "Integrado", Tf = () => "Integriert", Ef = () => "Integrato", Df = () => "Integrado", Of = () => "内置", kf = () => "内蔵", Af = () => "Built-in", jf = () => "Встроено", Mf = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Sf(e) : n === "fr" ? Cf(e) : n === "es" ? wf(e) : n === "de" ? Tf(e) : n === "it" ? Ef(e) : n === "pt" ? Df(e) : n === "zh" ? Of(e) : n === "ja" ? kf(e) : n === "ko" ? Af(e) : jf(e);
}), Nf = () => "About This Benchmark", Pf = () => "À propos de ce benchmark", Ff = () => "Acerca de este benchmark", If = () => "Über diesen Benchmark", Lf = () => "Informazioni su questo benchmark", Rf = () => "Sobre este benchmark", zf = () => "关于此基准测试", Bf = () => "このベンチマークについて", Vf = () => "About This Benchmark", Hf = () => "Об этом бенчмарке", Uf = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Nf(e) : n === "fr" ? Pf(e) : n === "es" ? Ff(e) : n === "de" ? If(e) : n === "it" ? Lf(e) : n === "pt" ? Rf(e) : n === "zh" ? zf(e) : n === "ja" ? Bf(e) : n === "ko" ? Vf(e) : Hf(e);
}), Wf = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", Gf = () => "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.", Kf = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", qf = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.", Jf = () => "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", Yf = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.", Xf = () => "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。", Zf = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。", Qf = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", $f = () => "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", ep = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Wf(e) : n === "fr" ? Gf(e) : n === "es" ? Kf(e) : n === "de" ? qf(e) : n === "it" ? Jf(e) : n === "pt" ? Yf(e) : n === "zh" ? Xf(e) : n === "ja" ? Zf(e) : n === "ko" ? Qf(e) : $f(e);
}), tp = () => "Why This Exists", np = () => "Pourquoi ce projet existe", rp = () => "Por qué existe esto", ip = () => "Warum dies existiert", ap = () => "Perché esiste", op = () => "Por que isto existe", sp = () => "为什么存在这个测试", cp = () => "なぜこれが存在するのか", lp = () => "Why This Exists", up = () => "Зачем это нужно", dp = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? tp(e) : n === "fr" ? np(e) : n === "es" ? rp(e) : n === "de" ? ip(e) : n === "it" ? ap(e) : n === "pt" ? op(e) : n === "zh" ? sp(e) : n === "ja" ? cp(e) : n === "ko" ? lp(e) : up(e);
}), fp = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", pp = () => "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.", mp = () => "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.", hp = () => "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.", gp = () => "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.", _p = () => "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.", vp = () => "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。", yp = () => "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。", bp = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", xp = () => "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.", Sp = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? fp(e) : n === "fr" ? pp(e) : n === "es" ? mp(e) : n === "de" ? hp(e) : n === "it" ? gp(e) : n === "pt" ? _p(e) : n === "zh" ? vp(e) : n === "ja" ? yp(e) : n === "ko" ? bp(e) : xp(e);
}), Cp = () => "Methodology", wp = () => "Méthodologie", Tp = () => "Metodología", Ep = () => "Methodik", Dp = () => "Metodologia", Op = () => "Metodologia", kp = () => "方法论", Ap = () => "手法", jp = () => "Methodology", Mp = () => "Методология", Np = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Cp(e) : n === "fr" ? wp(e) : n === "es" ? Tp(e) : n === "de" ? Ep(e) : n === "it" ? Dp(e) : n === "pt" ? Op(e) : n === "zh" ? kp(e) : n === "ja" ? Ap(e) : n === "ko" ? jp(e) : Mp(e);
}), Pp = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", Fp = () => "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.", Ip = () => "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.", Lp = () => "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.", Rp = () => "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.", zp = () => "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.", Bp = () => "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。", Vp = () => "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。", Hp = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", Up = () => "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.", Wp = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Pp(e) : n === "fr" ? Fp(e) : n === "es" ? Ip(e) : n === "de" ? Lp(e) : n === "it" ? Rp(e) : n === "pt" ? zp(e) : n === "zh" ? Bp(e) : n === "ja" ? Vp(e) : n === "ko" ? Hp(e) : Up(e);
}), Gp = () => "What We Measure", Kp = () => "Ce que nous mesurons", qp = () => "Qué medimos", Jp = () => "Was wir messen", Yp = () => "Cosa misuriamo", Xp = () => "O que medimos", Zp = () => "衡量指标", Qp = () => "測定項目", $p = () => "What We Measure", em = () => "Что мы измеряем", tm = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Gp(e) : n === "fr" ? Kp(e) : n === "es" ? qp(e) : n === "de" ? Jp(e) : n === "it" ? Yp(e) : n === "pt" ? Xp(e) : n === "zh" ? Zp(e) : n === "ja" ? Qp(e) : n === "ko" ? $p(e) : em(e);
}), nm = () => "Bundle size impact", rm = () => "Impact sur la taille du bundle", im = () => "Impacto en el tamaño del bundle", am = () => "Auswirkungen auf die Bundle-Größe", om = () => "Impatto sulla dimensione del bundle", sm = () => "Impacto no tamanho do bundle", cm = () => "包大小影响", lm = () => "バンドルサイズへの影響", um = () => "Bundle size impact", dm = () => "Влияние на размер бандла", fm = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? nm(e) : n === "fr" ? rm(e) : n === "es" ? im(e) : n === "de" ? am(e) : n === "it" ? om(e) : n === "pt" ? sm(e) : n === "zh" ? cm(e) : n === "ja" ? lm(e) : n === "ko" ? um(e) : dm(e);
}), pm = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", mm = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.", hm = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", gm = () => "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.", _m = () => "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.", vm = () => "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", ym = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", bm = () => "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。", xm = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", Sm = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", Cm = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? pm(e) : n === "fr" ? mm(e) : n === "es" ? hm(e) : n === "de" ? gm(e) : n === "it" ? _m(e) : n === "pt" ? vm(e) : n === "zh" ? ym(e) : n === "ja" ? bm(e) : n === "ko" ? xm(e) : Sm(e);
}), wm = () => "Rendering overhead", Tm = () => "Surcharge de rendu", Em = () => "Sobrecarga de renderizado", Dm = () => "Rendering-Overhead", Om = () => "Sovrapprezzo di rendering", km = () => "Sobrecarga de renderização", Am = () => "渲染开销", jm = () => "レンダリングのオーバーヘッド", Mm = () => "Rendering overhead", Nm = () => "Накладные расходы на рендеринг", Pm = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? wm(e) : n === "fr" ? Tm(e) : n === "es" ? Em(e) : n === "de" ? Dm(e) : n === "it" ? Om(e) : n === "pt" ? km(e) : n === "zh" ? Am(e) : n === "ja" ? jm(e) : n === "ko" ? Mm(e) : Nm(e);
}), Fm = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Im = () => "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.", Lm = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.", Rm = () => "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", zm = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", Bm = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", Vm = () => "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。", Hm = () => "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", Um = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Wm = () => "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.", Gm = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Fm(e) : n === "fr" ? Im(e) : n === "es" ? Lm(e) : n === "de" ? Rm(e) : n === "it" ? zm(e) : n === "pt" ? Bm(e) : n === "zh" ? Vm(e) : n === "ja" ? Hm(e) : n === "ko" ? Um(e) : Wm(e);
}), Km = () => "Hydration cost", qm = () => "Coût d'hydratation", Jm = () => "Coste de hidratación", Ym = () => "Hydrierungskosten", Xm = () => "Costo di idratazione", Zm = () => "Custo de hidratação", Qm = () => "注水成本", $m = () => "ハイドレーションコスト", eh = () => "Hydration cost", th = () => "Стоимость гидратации", nh = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Km(e) : n === "fr" ? qm(e) : n === "es" ? Jm(e) : n === "de" ? Ym(e) : n === "it" ? Xm(e) : n === "pt" ? Zm(e) : n === "zh" ? Qm(e) : n === "ja" ? $m(e) : n === "ko" ? eh(e) : th(e);
}), rh = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", ih = () => "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.", ah = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", oh = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.", sh = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", ch = () => "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.", lh = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。", uh = () => "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。", dh = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", fh = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", ph = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? rh(e) : n === "fr" ? ih(e) : n === "es" ? ah(e) : n === "de" ? oh(e) : n === "it" ? sh(e) : n === "pt" ? ch(e) : n === "zh" ? lh(e) : n === "ja" ? uh(e) : n === "ko" ? dh(e) : fh(e);
}), mh = () => "Lazy loading effectiveness", hh = () => "Efficacité du chargement paresseux", gh = () => "Eficacia de la carga diferida", _h = () => "Effektivität von Lazy Loading", vh = () => "Efficacia del caricamento pigro", yh = () => "Eficácia do carregamento lento", bh = () => "延迟加载有效性", xh = () => "遅延読み込みの有効性", Sh = () => "Lazy loading effectiveness", Ch = () => "Эффективность ленивой загрузки", wh = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? mh(e) : n === "fr" ? hh(e) : n === "es" ? gh(e) : n === "de" ? _h(e) : n === "it" ? vh(e) : n === "pt" ? yh(e) : n === "zh" ? bh(e) : n === "ja" ? xh(e) : n === "ko" ? Sh(e) : Ch(e);
}), Th = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Eh = () => "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?", Dh = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", Oh = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", kh = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", Ah = () => "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).", jh = () => "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", Mh = () => "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。", Nh = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Ph = () => "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).", Fh = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Th(e) : n === "fr" ? Eh(e) : n === "es" ? Dh(e) : n === "de" ? Oh(e) : n === "it" ? kh(e) : n === "pt" ? Ah(e) : n === "zh" ? jh(e) : n === "ja" ? Mh(e) : n === "ko" ? Nh(e) : Ph(e);
}), Ih = () => "Locale switch speed", Lh = () => "Vitesse de changement de langue", Rh = () => "Velocidad de cambio de idioma", zh = () => "Geschwindigkeit des Sprachwechsels", Bh = () => "Velocità di cambio lingua", Vh = () => "Velocidade de troca de localidade", Hh = () => "语言环境切换速度", Uh = () => "ロケール切り替え速度", Wh = () => "Locale switch speed", Gh = () => "Скорость переключения языка", Kh = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ih(e) : n === "fr" ? Lh(e) : n === "es" ? Rh(e) : n === "de" ? zh(e) : n === "it" ? Bh(e) : n === "pt" ? Vh(e) : n === "zh" ? Hh(e) : n === "ja" ? Uh(e) : n === "ko" ? Wh(e) : Gh(e);
}), qh = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", Jh = () => "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.", Yh = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", Xh = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", Zh = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", Qh = () => "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.", $h = () => "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。", eg = () => "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", tg = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", ng = () => "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", rg = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? qh(e) : n === "fr" ? Jh(e) : n === "es" ? Yh(e) : n === "de" ? Xh(e) : n === "it" ? Zh(e) : n === "pt" ? Qh(e) : n === "zh" ? $h(e) : n === "ja" ? eg(e) : n === "ko" ? tg(e) : ng(e);
}), ig = () => "Blog", ag = () => "Blog", og = () => "Blog", sg = () => "Blog", cg = () => "Blog", lg = () => "Blog", ug = () => "博客", dg = () => "ブログ", fg = () => "Blog", pg = () => "Блог", mg = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ig(e) : n === "fr" ? ag(e) : n === "es" ? og(e) : n === "de" ? sg(e) : n === "it" ? cg(e) : n === "pt" ? lg(e) : n === "zh" ? ug(e) : n === "ja" ? dg(e) : n === "ko" ? fg(e) : pg(e);
}), hg = () => "Insights, tutorials, and analysis from the i18n community.", gg = () => "Articles, tutoriels et analyses de la communauté i18n.", _g = () => "Información, tutoriales y análisis de la comunidad i18n.", vg = () => "Einblicke, Tutorials und Analysen aus der i18n-Community.", yg = () => "Approfondimenti, tutorial e analisi dalla comunità i18n.", bg = () => "Insights, tutoriais e análises da comunidade i18n.", xg = () => "来自 i18n 社区的见解、教程和分析。", Sg = () => "i18nコミュニティからのインサイト、チュートリアル、分析。", Cg = () => "Insights, tutorials, and analysis from the i18n community.", wg = () => "Инсайты, туториалы и аналитика от сообщества i18n.", Tg = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? hg(e) : n === "fr" ? gg(e) : n === "es" ? _g(e) : n === "de" ? vg(e) : n === "it" ? yg(e) : n === "pt" ? bg(e) : n === "zh" ? xg(e) : n === "ja" ? Sg(e) : n === "ko" ? Cg(e) : wg(e);
}), Eg = () => "Read More →", Dg = () => "Lire la suite →", Og = () => "Leer más →", kg = () => "Mehr lesen →", Ag = () => "Leggi di più →", jg = () => "Ler Mais →", Mg = () => "阅读更多 →", Ng = () => "続きを読む →", Pg = () => "Read More →", Fg = () => "Читать далее →", Ig = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Eg(e) : n === "fr" ? Dg(e) : n === "es" ? Og(e) : n === "de" ? kg(e) : n === "it" ? Ag(e) : n === "pt" ? jg(e) : n === "zh" ? Mg(e) : n === "ja" ? Ng(e) : n === "ko" ? Pg(e) : Fg(e);
}), Lg = () => "Comparing i18n Libraries in 2026: A Deep Dive", Rg = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", zg = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", Bg = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", Vg = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", Hg = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", Ug = () => "2026 年 i18n 库对比：深度分析", Wg = () => "2026年のi18nライブラリ比較：ディープダイブ", Gg = () => "Comparing i18n Libraries in 2026: A Deep Dive", Kg = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", qg = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Lg(e) : n === "fr" ? Rg(e) : n === "es" ? zg(e) : n === "de" ? Bg(e) : n === "it" ? Vg(e) : n === "pt" ? Hg(e) : n === "zh" ? Ug(e) : n === "ja" ? Wg(e) : n === "ko" ? Gg(e) : Kg(e);
}), Jg = () => "March 15, 2026", Yg = () => "15 mars 2026", Xg = () => "15 de marzo de 2026", Zg = () => "15. März 2026", Qg = () => "15 marzo 2026", $g = () => "15 de março de 2026", e_ = () => "2026年3月15日", t_ = () => "2026年3月15日", n_ = () => "March 15, 2026", r_ = () => "15 марта 2026 г.", i_ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Jg(e) : n === "fr" ? Yg(e) : n === "es" ? Xg(e) : n === "de" ? Zg(e) : n === "it" ? Qg(e) : n === "pt" ? $g(e) : n === "zh" ? e_(e) : n === "ja" ? t_(e) : n === "ko" ? n_(e) : r_(e);
}), a_ = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", o_ = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", s_ = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", c_ = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", l_ = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", u_ = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", d_ = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", f_ = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", p_ = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", m_ = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", h_ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? a_(e) : n === "fr" ? o_(e) : n === "es" ? s_(e) : n === "de" ? c_(e) : n === "it" ? l_(e) : n === "pt" ? u_(e) : n === "zh" ? d_(e) : n === "ja" ? f_(e) : n === "ko" ? p_(e) : m_(e);
}), g_ = () => "Benchmark", __ = () => "Benchmark", v_ = () => "Benchmark", y_ = () => "Benchmark", b_ = () => "Benchmark", x_ = () => "Benchmark", S_ = () => "基准测试", C_ = () => "ベンチマーク", w_ = () => "Benchmark", T_ = () => "Бенчмарк", E_ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? g_(e) : n === "fr" ? __(e) : n === "es" ? v_(e) : n === "de" ? y_(e) : n === "it" ? b_(e) : n === "pt" ? x_(e) : n === "zh" ? S_(e) : n === "ja" ? C_(e) : n === "ko" ? w_(e) : T_(e);
}), D_ = () => "How to Reduce Your i18n Bundle by 60%", O_ = () => "Réduire votre bundle i18n de 60 %", k_ = () => "Cómo reducir tu bundle i18n en un 60%", A_ = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", j_ = () => "Come ridurre il bundle i18n del 60%", M_ = () => "Como reduzir seu bundle i18n em 60%", N_ = () => "如何将 i18n 包大小减少 60%", P_ = () => "i18nバンドルを60%削減する方法", F_ = () => "How to Reduce Your i18n Bundle by 60%", I_ = () => "Как уменьшить бандл i18n на 60%", L_ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? D_(e) : n === "fr" ? O_(e) : n === "es" ? k_(e) : n === "de" ? A_(e) : n === "it" ? j_(e) : n === "pt" ? M_(e) : n === "zh" ? N_(e) : n === "ja" ? P_(e) : n === "ko" ? F_(e) : I_(e);
}), R_ = () => "March 8, 2026", z_ = () => "8 mars 2026", B_ = () => "8 de marzo de 2026", V_ = () => "8. März 2026", H_ = () => "8 marzo 2026", U_ = () => "8 de março de 2026", W_ = () => "2026年3月8日", G_ = () => "2026年3月8日", K_ = () => "March 8, 2026", q_ = () => "8 марта 2026 г.", J_ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? R_(e) : n === "fr" ? z_(e) : n === "es" ? B_(e) : n === "de" ? V_(e) : n === "it" ? H_(e) : n === "pt" ? U_(e) : n === "zh" ? W_(e) : n === "ja" ? G_(e) : n === "ko" ? K_(e) : q_(e);
}), Y_ = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", X_ = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", Z_ = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", Q_ = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", $_ = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", ev = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", tv = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", nv = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", rv = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", iv = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", av = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Y_(e) : n === "fr" ? X_(e) : n === "es" ? Z_(e) : n === "de" ? Q_(e) : n === "it" ? $_(e) : n === "pt" ? ev(e) : n === "zh" ? tv(e) : n === "ja" ? nv(e) : n === "ko" ? rv(e) : iv(e);
}), ov = () => "Tutorial", sv = () => "Tutoriel", cv = () => "Tutorial", lv = () => "Tutorial", uv = () => "Tutorial", dv = () => "Tutorial", fv = () => "教程", pv = () => "チュートリアル", mv = () => "Tutorial", hv = () => "Туториал", gv = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ov(e) : n === "fr" ? sv(e) : n === "es" ? cv(e) : n === "de" ? lv(e) : n === "it" ? uv(e) : n === "pt" ? dv(e) : n === "zh" ? fv(e) : n === "ja" ? pv(e) : n === "ko" ? mv(e) : hv(e);
}), _v = () => "The State of Internationalization in React", vv = () => "État de l'internationalisation dans l'écosystème React", yv = () => "El estado de la internacionalización en React", bv = () => "Der Stand der Internationalisierung in React", xv = () => "Lo stato dell'internazionalizzazione in React", Sv = () => "O estado da internacionalização no React", Cv = () => "React 国际化现状", wv = () => "Reactにおける国際化の現状", Tv = () => "The State of Internationalization in React", Ev = () => "Состояние интернационализации в React", Dv = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _v(e) : n === "fr" ? vv(e) : n === "es" ? yv(e) : n === "de" ? bv(e) : n === "it" ? xv(e) : n === "pt" ? Sv(e) : n === "zh" ? Cv(e) : n === "ja" ? wv(e) : n === "ko" ? Tv(e) : Ev(e);
}), Ov = () => "February 28, 2026", kv = () => "28 février 2026", Av = () => "28 de febrero de 2026", jv = () => "28. Februar 2026", Mv = () => "28 febbraio 2026", Nv = () => "28 de fevereiro de 2026", Pv = () => "2026年2月28日", Fv = () => "2026年2月28日", Iv = () => "February 28, 2026", Lv = () => "28 февраля 2026 г.", Rv = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ov(e) : n === "fr" ? kv(e) : n === "es" ? Av(e) : n === "de" ? jv(e) : n === "it" ? Mv(e) : n === "pt" ? Nv(e) : n === "zh" ? Pv(e) : n === "ja" ? Fv(e) : n === "ko" ? Iv(e) : Lv(e);
}), zv = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Bv = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Vv = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Hv = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Uv = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Wv = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Gv = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Kv = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", qv = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Jv = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Yv = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zv(e) : n === "fr" ? Bv(e) : n === "es" ? Vv(e) : n === "de" ? Hv(e) : n === "it" ? Uv(e) : n === "pt" ? Wv(e) : n === "zh" ? Gv(e) : n === "ja" ? Kv(e) : n === "ko" ? qv(e) : Jv(e);
}), Xv = () => "Analysis", Zv = () => "Analyse", Qv = () => "Análisis", $v = () => "Analyse", ey = () => "Analisi", ty = () => "Análise", ny = () => "分析", ry = () => "分析", iy = () => "Analysis", ay = () => "Анализ", oy = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Xv(e) : n === "fr" ? Zv(e) : n === "es" ? Qv(e) : n === "de" ? $v(e) : n === "it" ? ey(e) : n === "pt" ? ty(e) : n === "zh" ? ny(e) : n === "ja" ? ry(e) : n === "ko" ? iy(e) : ay(e);
}), sy = () => "Migrating from react-i18next to Lingui", cy = () => "Migrer de react-i18next vers Lingui", ly = () => "Migración de react-i18next a Lingui", uy = () => "Migration von react-i18next zu Lingui", dy = () => "Migrazione da react-i18next a Lingui", fy = () => "Migrando de react-i18next para o Lingui", py = () => "从 react-i18next 迁移到 Lingui", my = () => "react-i18nextからLinguiへの移行", hy = () => "Migrating from react-i18next to Lingui", gy = () => "Миграция с react-i18next на Lingui", _y = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? sy(e) : n === "fr" ? cy(e) : n === "es" ? ly(e) : n === "de" ? uy(e) : n === "it" ? dy(e) : n === "pt" ? fy(e) : n === "zh" ? py(e) : n === "ja" ? my(e) : n === "ko" ? hy(e) : gy(e);
}), vy = () => "February 15, 2026", yy = () => "15 février 2026", by = () => "15 de febrero de 2026", xy = () => "15. Februar 2026", Sy = () => "15 febbraio 2026", Cy = () => "15 de fevereiro de 2026", wy = () => "2026年2月15日", Ty = () => "2026年2月15日", Ey = () => "February 15, 2026", Dy = () => "15 февраля 2026 г.", Oy = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? vy(e) : n === "fr" ? yy(e) : n === "es" ? by(e) : n === "de" ? xy(e) : n === "it" ? Sy(e) : n === "pt" ? Cy(e) : n === "zh" ? wy(e) : n === "ja" ? Ty(e) : n === "ko" ? Ey(e) : Dy(e);
}), ky = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Ay = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", jy = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", My = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Ny = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Py = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Fy = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Iy = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Ly = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Ry = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", zy = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ky(e) : n === "fr" ? Ay(e) : n === "es" ? jy(e) : n === "de" ? My(e) : n === "it" ? Ny(e) : n === "pt" ? Py(e) : n === "zh" ? Fy(e) : n === "ja" ? Iy(e) : n === "ko" ? Ly(e) : Ry(e);
}), By = () => "Tutorial", Vy = () => "Tutoriel", Hy = () => "Tutorial", Uy = () => "Tutorial", Wy = () => "Tutorial", Gy = () => "Tutorial", Ky = () => "教程", qy = () => "チュートリアル", Jy = () => "Tutorial", Yy = () => "Туториал", Xy = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? By(e) : n === "fr" ? Vy(e) : n === "es" ? Hy(e) : n === "de" ? Uy(e) : n === "it" ? Wy(e) : n === "pt" ? Gy(e) : n === "zh" ? Ky(e) : n === "ja" ? qy(e) : n === "ko" ? Jy(e) : Yy(e);
}), Zy = () => "Server Components and i18n: What Changes?", Qy = () => "Server Components et i18n : qu'est-ce qui change ?", $y = () => "Server Components e i18n: ¿Qué cambia?", eb = () => "Server Components und i18n: Was ändert sich?", tb = () => "Server Components e i18n: cosa cambia?", nb = () => "Server Components e i18n: o que muda?", rb = () => "Server Components 与 i18n：发生了什么变化？", ib = () => "Server Componentsとi18n：何が変わるのか？", ab = () => "Server Components and i18n: What Changes?", ob = () => "Server Components и i18n: что меняется?", sb = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Zy(e) : n === "fr" ? Qy(e) : n === "es" ? $y(e) : n === "de" ? eb(e) : n === "it" ? tb(e) : n === "pt" ? nb(e) : n === "zh" ? rb(e) : n === "ja" ? ib(e) : n === "ko" ? ab(e) : ob(e);
}), cb = () => "February 1, 2026", lb = () => "1er février 2026", ub = () => "1 de febrero de 2026", db = () => "1. Februar 2026", fb = () => "1 febbraio 2026", pb = () => "1 de fevereiro de 2026", mb = () => "2026年2月1日", hb = () => "2026年2月1日", gb = () => "February 1, 2026", _b = () => "1 февраля 2026 г.", vb = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? cb(e) : n === "fr" ? lb(e) : n === "es" ? ub(e) : n === "de" ? db(e) : n === "it" ? fb(e) : n === "pt" ? pb(e) : n === "zh" ? mb(e) : n === "ja" ? hb(e) : n === "ko" ? gb(e) : _b(e);
}), yb = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", bb = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", xb = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Sb = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Cb = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", wb = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Tb = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Eb = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Db = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Ob = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", kb = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yb(e) : n === "fr" ? bb(e) : n === "es" ? xb(e) : n === "de" ? Sb(e) : n === "it" ? Cb(e) : n === "pt" ? wb(e) : n === "zh" ? Tb(e) : n === "ja" ? Eb(e) : n === "ko" ? Db(e) : Ob(e);
}), Ab = () => "Analysis", jb = () => "Analyse", Mb = () => "Análisis", Nb = () => "Analyse", Pb = () => "Analisi", Fb = () => "Análise", Ib = () => "分析", Lb = () => "分析", Rb = () => "Analysis", zb = () => "Анализ", Bb = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ab(e) : n === "fr" ? jb(e) : n === "es" ? Mb(e) : n === "de" ? Nb(e) : n === "it" ? Pb(e) : n === "pt" ? Fb(e) : n === "zh" ? Ib(e) : n === "ja" ? Lb(e) : n === "ko" ? Rb(e) : zb(e);
}), Vb = () => "Benchmark Methodology: How We Test", Hb = () => "Méthodologie de benchmark : comment nous testons", Ub = () => "Metodología de benchmark: Cómo probamos", Wb = () => "Benchmark-Methodik: Wie wir testen", Gb = () => "Metodologia del benchmark: come testiamo", Kb = () => "Metodologia de benchmark: como testamos", qb = () => "基准测试方法论：我们如何测试", Jb = () => "ベンチマーク手法：テスト方法について", Yb = () => "Benchmark Methodology: How We Test", Xb = () => "Методология бенчмарка: как мы тестируем", Zb = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Vb(e) : n === "fr" ? Hb(e) : n === "es" ? Ub(e) : n === "de" ? Wb(e) : n === "it" ? Gb(e) : n === "pt" ? Kb(e) : n === "zh" ? qb(e) : n === "ja" ? Jb(e) : n === "ko" ? Yb(e) : Xb(e);
}), Qb = () => "January 20, 2026", $b = () => "20 janvier 2026", ex = () => "20 de enero de 2026", tx = () => "20. Januar 2026", nx = () => "20 gennaio 2026", rx = () => "20 de janeiro de 2026", ix = () => "2026年1月20日", ax = () => "2026年1月20日", ox = () => "January 20, 2026", sx = () => "20 января 2026 г.", cx = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Qb(e) : n === "fr" ? $b(e) : n === "es" ? ex(e) : n === "de" ? tx(e) : n === "it" ? nx(e) : n === "pt" ? rx(e) : n === "zh" ? ix(e) : n === "ja" ? ax(e) : n === "ko" ? ox(e) : sx(e);
}), lx = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", ux = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", dx = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", fx = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", px = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", mx = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", hx = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", gx = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", _x = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", vx = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", yx = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? lx(e) : n === "fr" ? ux(e) : n === "es" ? dx(e) : n === "de" ? fx(e) : n === "it" ? px(e) : n === "pt" ? mx(e) : n === "zh" ? hx(e) : n === "ja" ? gx(e) : n === "ko" ? _x(e) : vx(e);
}), bx = () => "Meta", xx = () => "Méta", Sx = () => "Meta", Cx = () => "Meta", wx = () => "Meta", Tx = () => "Meta", Ex = () => "Meta", Dx = () => "メタ", Ox = () => "Meta", kx = () => "Мета", Ax = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? bx(e) : n === "fr" ? xx(e) : n === "es" ? Sx(e) : n === "de" ? Cx(e) : n === "it" ? wx(e) : n === "pt" ? Tx(e) : n === "zh" ? Ex(e) : n === "ja" ? Dx(e) : n === "ko" ? Ox(e) : kx(e);
}), jx = () => "Careers", Mx = () => "Carrières", Nx = () => "Carreras", Px = () => "Karriere", Fx = () => "Carriere", Ix = () => "Carreiras", Lx = () => "招聘", Rx = () => "採用情報", zx = () => "Careers", Bx = () => "Вакансии", Vx = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? jx(e) : n === "fr" ? Mx(e) : n === "es" ? Nx(e) : n === "de" ? Px(e) : n === "it" ? Fx(e) : n === "pt" ? Ix(e) : n === "zh" ? Lx(e) : n === "ja" ? Rx(e) : n === "ko" ? zx(e) : Bx(e);
}), Hx = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", Ux = () => "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.", Wx = () => "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.", Gx = () => "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.", Kx = () => "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.", qx = () => "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.", Jx = () => "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。", Yx = () => "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。", Xx = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", Zx = () => "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.", Qx = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Hx(e) : n === "fr" ? Ux(e) : n === "es" ? Wx(e) : n === "de" ? Gx(e) : n === "it" ? Kx(e) : n === "pt" ? qx(e) : n === "zh" ? Jx(e) : n === "ja" ? Yx(e) : n === "ko" ? Xx(e) : Zx(e);
}), $x = () => "Remote-first", eS = () => "Remote-first", tS = () => "Remoto primero", nS = () => "Remote-First", rS = () => "Remote-first", iS = () => "Remoto primeiro", aS = () => "远程优先", oS = () => "リモートファースト", sS = () => "Remote-first", cS = () => "Удаленная работа", lS = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? $x(e) : n === "fr" ? eS(e) : n === "es" ? tS(e) : n === "de" ? nS(e) : n === "it" ? rS(e) : n === "pt" ? iS(e) : n === "zh" ? aS(e) : n === "ja" ? oS(e) : n === "ko" ? sS(e) : cS(e);
}), uS = () => "Work from anywhere in the world", dS = () => "Travaillez depuis n'importe où", fS = () => "Trabaja desde cualquier lugar del mundo", pS = () => "Arbeiten Sie von überall auf der Welt", mS = () => "Lavora da qualsiasi parte del mondo", hS = () => "Trabalhe de qualquer lugar do mundo", gS = () => "在世界任何地方工作", _S = () => "世界中のどこからでも仕事ができます", vS = () => "Work from anywhere in the world", yS = () => "Работайте из любой точки мира", bS = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? uS(e) : n === "fr" ? dS(e) : n === "es" ? fS(e) : n === "de" ? pS(e) : n === "it" ? mS(e) : n === "pt" ? hS(e) : n === "zh" ? gS(e) : n === "ja" ? _S(e) : n === "ko" ? vS(e) : yS(e);
}), xS = () => "Competitive pay", SS = () => "Rémunération compétitive", CS = () => "Salario competitivo", wS = () => "Wettbewerbsfähige Bezahlung", TS = () => "Retribuzione competitiva", ES = () => "Salário competitivo", DS = () => "具有竞争力的薪酬", OS = () => "競争力のある給与", kS = () => "Competitive pay", AS = () => "Конкурентная зарплата", jS = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? xS(e) : n === "fr" ? SS(e) : n === "es" ? CS(e) : n === "de" ? wS(e) : n === "it" ? TS(e) : n === "pt" ? ES(e) : n === "zh" ? DS(e) : n === "ja" ? OS(e) : n === "ko" ? kS(e) : AS(e);
}), MS = () => "Top-of-market compensation", NS = () => "Fourchettes haut de marché", PS = () => "Compensación superior a la del mercado", FS = () => "Überdurchschnittliche Vergütung", IS = () => "Compensazione ai vertici del mercato", LS = () => "Remuneração acima do mercado", RS = () => "市场顶尖的薪资水平", zS = () => "市場トップクラスの報酬", BS = () => "Top-of-market compensation", VS = () => "Вознаграждение выше рыночного", HS = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? MS(e) : n === "fr" ? NS(e) : n === "es" ? PS(e) : n === "de" ? FS(e) : n === "it" ? IS(e) : n === "pt" ? LS(e) : n === "zh" ? RS(e) : n === "ja" ? zS(e) : n === "ko" ? BS(e) : VS(e);
}), US = () => "Open source time", WS = () => "Temps open source", GS = () => "Tiempo para el código abierto", KS = () => "Open-Source-Zeit", qS = () => "Tempo per l'open source", JS = () => "Tempo para o código aberto", YS = () => "开源时间", XS = () => "オープンソースの時間", ZS = () => "Open source time", QS = () => "Время на open source", $S = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? US(e) : n === "fr" ? WS(e) : n === "es" ? GS(e) : n === "de" ? KS(e) : n === "it" ? qS(e) : n === "pt" ? JS(e) : n === "zh" ? YS(e) : n === "ja" ? XS(e) : n === "ko" ? ZS(e) : QS(e);
}), eC = () => "20% time for OSS contributions", tC = () => "20 % du temps pour contribuer à l'OSS", nC = () => "20% del tiempo para contribuciones a OSS", rC = () => "20 % der Zeit für OSS-Beiträge", iC = () => "20% del tempo per contributi open source", aC = () => "20% do tempo para contribuições OSS", oC = () => "20% 的时间用于 OSS 贡献", sC = () => "時間の20%をOSSへの貢献に", cC = () => "20% time for OSS contributions", lC = () => "20% времени на вклад в OSS", uC = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? eC(e) : n === "fr" ? tC(e) : n === "es" ? nC(e) : n === "de" ? rC(e) : n === "it" ? iC(e) : n === "pt" ? aC(e) : n === "zh" ? oC(e) : n === "ja" ? sC(e) : n === "ko" ? cC(e) : lC(e);
}), dC = () => "Open Positions", fC = () => "Postes ouverts", pC = () => "Puestos vacantes", mC = () => "Offene Stellen", hC = () => "Posizioni aperte", gC = () => "Vagas abertas", _C = () => "开放职位", vC = () => "募集中の職種", yC = () => "Open Positions", bC = () => "Открытые вакансии", xC = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? dC(e) : n === "fr" ? fC(e) : n === "es" ? pC(e) : n === "de" ? mC(e) : n === "it" ? hC(e) : n === "pt" ? gC(e) : n === "zh" ? _C(e) : n === "ja" ? vC(e) : n === "ko" ? yC(e) : bC(e);
}), SC = () => "Apply Now", CC = () => "Postuler", wC = () => "Postular ahora", TC = () => "Jetzt bewerben", EC = () => "Candidati ora", DC = () => "Candidatar-se agora", OC = () => "立即申请", kC = () => "今すぐ応募", AC = () => "Apply Now", jC = () => "Подать заявку", MC = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? SC(e) : n === "fr" ? CC(e) : n === "es" ? wC(e) : n === "de" ? TC(e) : n === "it" ? EC(e) : n === "pt" ? DC(e) : n === "zh" ? OC(e) : n === "ja" ? kC(e) : n === "ko" ? AC(e) : jC(e);
}), NC = () => "Remote", PC = () => "À distance", FC = () => "Remoto", IC = () => "Remote", LC = () => "Remoto", RC = () => "Remoto", zC = () => "远程", BC = () => "リモート", VC = () => "Remote", HC = () => "Удаленно", UC = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? NC(e) : n === "fr" ? PC(e) : n === "es" ? FC(e) : n === "de" ? IC(e) : n === "it" ? LC(e) : n === "pt" ? RC(e) : n === "zh" ? zC(e) : n === "ja" ? BC(e) : n === "ko" ? VC(e) : HC(e);
}), WC = () => "Full-time", GC = () => "Temps plein", KC = () => "Tiempo completo", qC = () => "Vollzeit", JC = () => "Tempo pieno", YC = () => "Tempo integral", XC = () => "全职", ZC = () => "フルタイム", QC = () => "Full-time", $C = () => "Полная занятость", ew = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? WC(e) : n === "fr" ? GC(e) : n === "es" ? KC(e) : n === "de" ? qC(e) : n === "it" ? JC(e) : n === "pt" ? YC(e) : n === "zh" ? XC(e) : n === "ja" ? ZC(e) : n === "ko" ? QC(e) : $C(e);
}), tw = () => "Part-time", nw = () => "Temps partiel", rw = () => "Tiempo parcial", iw = () => "Teilzeit", aw = () => "Part-time", ow = () => "Tempo parcial", sw = () => "兼职", cw = () => "パートタイム", lw = () => "Part-time", uw = () => "Частичная занятость", dw = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? tw(e) : n === "fr" ? nw(e) : n === "es" ? rw(e) : n === "de" ? iw(e) : n === "it" ? aw(e) : n === "pt" ? ow(e) : n === "zh" ? sw(e) : n === "ja" ? cw(e) : n === "ko" ? lw(e) : uw(e);
}), fw = () => "Engineering", pw = () => "Ingénierie", mw = () => "Ingeniería", hw = () => "Engineering", gw = () => "Engineering", _w = () => "Engenharia", vw = () => "工程", yw = () => "エンジニアリング", bw = () => "Engineering", xw = () => "Разработка", Sw = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? fw(e) : n === "fr" ? pw(e) : n === "es" ? mw(e) : n === "de" ? hw(e) : n === "it" ? gw(e) : n === "pt" ? _w(e) : n === "zh" ? vw(e) : n === "ja" ? yw(e) : n === "ko" ? bw(e) : xw(e);
}), Cw = () => "Documentation", ww = () => "Documentation", Tw = () => "Documentación", Ew = () => "Dokumentation", Dw = () => "Documentazione", Ow = () => "Documentação", kw = () => "文档", Aw = () => "ドキュメンテーション", jw = () => "Documentation", Mw = () => "Документация", Nw = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Cw(e) : n === "fr" ? ww(e) : n === "es" ? Tw(e) : n === "de" ? Ew(e) : n === "it" ? Dw(e) : n === "pt" ? Ow(e) : n === "zh" ? kw(e) : n === "ja" ? Aw(e) : n === "ko" ? jw(e) : Mw(e);
}), Pw = () => "Community", Fw = () => "Communauté", Iw = () => "Comunidad", Lw = () => "Community", Rw = () => "Comunità", zw = () => "Comunidade", Bw = () => "社区", Vw = () => "コミュニティ", Hw = () => "Community", Uw = () => "Сообщество", Ww = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Pw(e) : n === "fr" ? Fw(e) : n === "es" ? Iw(e) : n === "de" ? Lw(e) : n === "it" ? Rw(e) : n === "pt" ? zw(e) : n === "zh" ? Bw(e) : n === "ja" ? Vw(e) : n === "ko" ? Hw(e) : Uw(e);
}), Gw = () => "San Francisco / Remote", Kw = () => "San Francisco / télétravail", qw = () => "San Francisco / Remoto", Jw = () => "San Francisco / Remote", Yw = () => "San Francisco / Remoto", Xw = () => "San Francisco / Remoto", Zw = () => "旧金山 / 远程", Qw = () => "サンフランシスコ / リモート", $w = () => "San Francisco / Remote", eT = () => "Сан-Франциско / Удаленно", tT = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Gw(e) : n === "fr" ? Kw(e) : n === "es" ? qw(e) : n === "de" ? Jw(e) : n === "it" ? Yw(e) : n === "pt" ? Xw(e) : n === "zh" ? Zw(e) : n === "ja" ? Qw(e) : n === "ko" ? $w(e) : eT(e);
}), nT = () => "Senior Frontend Engineer", rT = () => "Ingénieur front-end senior", iT = () => "Ingeniero Frontend Senior", aT = () => "Senior Frontend Engineer", oT = () => "Ingegnere Frontend Senior", sT = () => "Engenheiro Frontend Sênior", cT = () => "高级前端工程师", lT = () => "シニアフロントエンドエンジニア", uT = () => "Senior Frontend Engineer", dT = () => "Старший фронтенд-инженер", fT = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? nT(e) : n === "fr" ? rT(e) : n === "es" ? iT(e) : n === "de" ? aT(e) : n === "it" ? oT(e) : n === "pt" ? sT(e) : n === "zh" ? cT(e) : n === "ja" ? lT(e) : n === "ko" ? uT(e) : dT(e);
}), pT = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", mT = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", hT = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", gT = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", _T = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", vT = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", yT = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", bT = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", xT = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", ST = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", CT = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? pT(e) : n === "fr" ? mT(e) : n === "es" ? hT(e) : n === "de" ? gT(e) : n === "it" ? _T(e) : n === "pt" ? vT(e) : n === "zh" ? yT(e) : n === "ja" ? bT(e) : n === "ko" ? xT(e) : ST(e);
}), wT = () => "Backend Engineer", TT = () => "Ingénieur back-end", ET = () => "Ingeniero Backend", DT = () => "Backend-Ingenieur", OT = () => "Backend Engineer", kT = () => "Engenheiro Backend", AT = () => "后端工程师", jT = () => "バックエンドエンジニア", MT = () => "Backend Engineer", NT = () => "Бэкенд-инженер", PT = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? wT(e) : n === "fr" ? TT(e) : n === "es" ? ET(e) : n === "de" ? DT(e) : n === "it" ? OT(e) : n === "pt" ? kT(e) : n === "zh" ? AT(e) : n === "ja" ? jT(e) : n === "ko" ? MT(e) : NT(e);
}), FT = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", IT = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", LT = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", RT = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", zT = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", BT = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", VT = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", HT = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", UT = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", WT = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", GT = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? FT(e) : n === "fr" ? IT(e) : n === "es" ? LT(e) : n === "de" ? RT(e) : n === "it" ? zT(e) : n === "pt" ? BT(e) : n === "zh" ? VT(e) : n === "ja" ? HT(e) : n === "ko" ? UT(e) : WT(e);
}), KT = () => "Technical Writer", qT = () => "Rédacteur·rice technique", JT = () => "Redactor técnico", YT = () => "Technischer Redakteur", XT = () => "Scrittore tecnico", ZT = () => "Redator técnico", QT = () => "技术作家", $T = () => "テクニカルライター", eE = () => "Technical Writer", tE = () => "Технический писатель", nE = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? KT(e) : n === "fr" ? qT(e) : n === "es" ? JT(e) : n === "de" ? YT(e) : n === "it" ? XT(e) : n === "pt" ? ZT(e) : n === "zh" ? QT(e) : n === "ja" ? $T(e) : n === "ko" ? eE(e) : tE(e);
}), rE = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", iE = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", aE = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", oE = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", sE = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", cE = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", lE = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", uE = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", dE = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", fE = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", pE = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? rE(e) : n === "fr" ? iE(e) : n === "es" ? aE(e) : n === "de" ? oE(e) : n === "it" ? sE(e) : n === "pt" ? cE(e) : n === "zh" ? lE(e) : n === "ja" ? uE(e) : n === "ko" ? dE(e) : fE(e);
}), mE = () => "DevRel Engineer", hE = () => "Ingénieur DevRel", gE = () => "Ingeniero de DevRel", _E = () => "DevRel-Ingenieur", vE = () => "Ingegnere DevRel", yE = () => "Engenheiro de DevRel", bE = () => "DevRel 工程师", xE = () => "DevRelエンジニア", SE = () => "DevRel Engineer", CE = () => "DevRel-инженер", wE = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? mE(e) : n === "fr" ? hE(e) : n === "es" ? gE(e) : n === "de" ? _E(e) : n === "it" ? vE(e) : n === "pt" ? yE(e) : n === "zh" ? bE(e) : n === "ja" ? xE(e) : n === "ko" ? SE(e) : CE(e);
}), TE = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", EE = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", DE = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", OE = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", kE = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", AE = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", jE = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", ME = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", NE = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", PE = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", FE = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? TE(e) : n === "fr" ? EE(e) : n === "es" ? DE(e) : n === "de" ? OE(e) : n === "it" ? kE(e) : n === "pt" ? AE(e) : n === "zh" ? jE(e) : n === "ja" ? ME(e) : n === "ko" ? NE(e) : PE(e);
}), IE = () => "QA Engineer", LE = () => "Ingénieur QA", RE = () => "Ingeniero de QA", zE = () => "QA-Ingenieur", BE = () => "Ingegnere QA", VE = () => "Engenheiro de QA", HE = () => "QA 工程师", UE = () => "QAエンジニア", WE = () => "QA Engineer", GE = () => "QA-инженер", KE = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? IE(e) : n === "fr" ? LE(e) : n === "es" ? RE(e) : n === "de" ? zE(e) : n === "it" ? BE(e) : n === "pt" ? VE(e) : n === "zh" ? HE(e) : n === "ja" ? UE(e) : n === "ko" ? WE(e) : GE(e);
}), qE = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", JE = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", YE = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", XE = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", ZE = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", QE = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", $E = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", eD = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", tD = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", nD = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", rD = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? qE(e) : n === "fr" ? JE(e) : n === "es" ? YE(e) : n === "de" ? XE(e) : n === "it" ? ZE(e) : n === "pt" ? QE(e) : n === "zh" ? $E(e) : n === "ja" ? eD(e) : n === "ko" ? tD(e) : nD(e);
}), iD = () => "Get in Touch", aD = () => "Contact", oD = () => "Ponte en contacto", sD = () => "Kontakt aufnehmen", cD = () => "Contattaci", lD = () => "Entre em contato", uD = () => "取得联系", dD = () => "お問い合わせ", fD = () => "Get in Touch", pD = () => "Связаться с нами", mD = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? iD(e) : n === "fr" ? aD(e) : n === "es" ? oD(e) : n === "de" ? sD(e) : n === "it" ? cD(e) : n === "pt" ? lD(e) : n === "zh" ? uD(e) : n === "ja" ? dD(e) : n === "ko" ? fD(e) : pD(e);
}), hD = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", gD = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", _D = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", vD = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", yD = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", bD = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", xD = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", SD = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", CD = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", wD = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", TD = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? hD(e) : n === "fr" ? gD(e) : n === "es" ? _D(e) : n === "de" ? vD(e) : n === "it" ? yD(e) : n === "pt" ? bD(e) : n === "zh" ? xD(e) : n === "ja" ? SD(e) : n === "ko" ? CD(e) : wD(e);
}), ED = () => "Name", DD = () => "Nom", OD = () => "Nombre", kD = () => "Name", AD = () => "Nome", jD = () => "Nome", MD = () => "姓名", ND = () => "名前", PD = () => "Name", FD = () => "Имя", ID = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ED(e) : n === "fr" ? DD(e) : n === "es" ? OD(e) : n === "de" ? kD(e) : n === "it" ? AD(e) : n === "pt" ? jD(e) : n === "zh" ? MD(e) : n === "ja" ? ND(e) : n === "ko" ? PD(e) : FD(e);
}), LD = () => "Your name", RD = () => "Votre nom", zD = () => "Tu nombre", BD = () => "Ihr Name", VD = () => "Il tuo nome", HD = () => "Seu nome", UD = () => "您的姓名", WD = () => "お名前", GD = () => "Your name", KD = () => "Ваше имя", qD = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? LD(e) : n === "fr" ? RD(e) : n === "es" ? zD(e) : n === "de" ? BD(e) : n === "it" ? VD(e) : n === "pt" ? HD(e) : n === "zh" ? UD(e) : n === "ja" ? WD(e) : n === "ko" ? GD(e) : KD(e);
}), JD = () => "Email", YD = () => "E-mail", XD = () => "Correo electrónico", ZD = () => "E-Mail", QD = () => "Email", $D = () => "E-mail", eO = () => "电子邮件", tO = () => "メールアドレス", nO = () => "Email", rO = () => "Электронная почта", iO = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? JD(e) : n === "fr" ? YD(e) : n === "es" ? XD(e) : n === "de" ? ZD(e) : n === "it" ? QD(e) : n === "pt" ? $D(e) : n === "zh" ? eO(e) : n === "ja" ? tO(e) : n === "ko" ? nO(e) : rO(e);
}), aO = () => "you@example.com", oO = () => "vous@exemple.com", sO = () => "tu@ejemplo.com", cO = () => "ihre@beispiel.de", lO = () => "tu@esempio.com", uO = () => "voce@exemplo.com", dO = () => "you@example.com", fO = () => "you@example.com", pO = () => "you@example.com", mO = () => "you@example.com", hO = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? aO(e) : n === "fr" ? oO(e) : n === "es" ? sO(e) : n === "de" ? cO(e) : n === "it" ? lO(e) : n === "pt" ? uO(e) : n === "zh" ? dO(e) : n === "ja" ? fO(e) : n === "ko" ? pO(e) : mO(e);
}), gO = () => "Topic", _O = () => "Sujet", vO = () => "Tema", yO = () => "Thema", bO = () => "Argomento", xO = () => "Assunto", SO = () => "主题", CO = () => "トピック", wO = () => "Topic", TO = () => "Тема", EO = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? gO(e) : n === "fr" ? _O(e) : n === "es" ? vO(e) : n === "de" ? yO(e) : n === "it" ? bO(e) : n === "pt" ? xO(e) : n === "zh" ? SO(e) : n === "ja" ? CO(e) : n === "ko" ? wO(e) : TO(e);
}), DO = () => "Bug Report", OO = () => "Rapport de bug", kO = () => "Informe de error", AO = () => "Fehlerbericht", jO = () => "Segnalazione bug", MO = () => "Relatório de bug", NO = () => "错误报告", PO = () => "バグ報告", FO = () => "Bug Report", IO = () => "Отчет об ошибке", LO = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? DO(e) : n === "fr" ? OO(e) : n === "es" ? kO(e) : n === "de" ? AO(e) : n === "it" ? jO(e) : n === "pt" ? MO(e) : n === "zh" ? NO(e) : n === "ja" ? PO(e) : n === "ko" ? FO(e) : IO(e);
}), RO = () => "New Benchmark Idea", zO = () => "Idée de benchmark", BO = () => "Nueva idea de benchmark", VO = () => "Neue Benchmark-Idee", HO = () => "Nuova idea di benchmark", UO = () => "Nova ideia de benchmark", WO = () => "新基准测试想法", GO = () => "新しいベンチマークのアイデア", KO = () => "New Benchmark Idea", qO = () => "Идея нового бенчмарка", JO = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? RO(e) : n === "fr" ? zO(e) : n === "es" ? BO(e) : n === "de" ? VO(e) : n === "it" ? HO(e) : n === "pt" ? UO(e) : n === "zh" ? WO(e) : n === "ja" ? GO(e) : n === "ko" ? KO(e) : qO(e);
}), YO = () => "Methodology Question", XO = () => "Question de méthodologie", ZO = () => "Pregunta sobre la metodología", QO = () => "Frage zur Methodik", $O = () => "Domanda sulla metodologia", ek = () => "Pergunta sobre metodologia", tk = () => "方法论问题", nk = () => "手法に関する質問", rk = () => "Methodology Question", ik = () => "Вопрос по методологии", ak = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? YO(e) : n === "fr" ? XO(e) : n === "es" ? ZO(e) : n === "de" ? QO(e) : n === "it" ? $O(e) : n === "pt" ? ek(e) : n === "zh" ? tk(e) : n === "ja" ? nk(e) : n === "ko" ? rk(e) : ik(e);
}), ok = () => "Contribution", sk = () => "Contribution", ck = () => "Contribución", lk = () => "Beitrag", uk = () => "Contributo", dk = () => "Contribuição", fk = () => "贡献", pk = () => "貢献", mk = () => "Contribution", hk = () => "Вклад в проект", gk = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ok(e) : n === "fr" ? sk(e) : n === "es" ? ck(e) : n === "de" ? lk(e) : n === "it" ? uk(e) : n === "pt" ? dk(e) : n === "zh" ? fk(e) : n === "ja" ? pk(e) : n === "ko" ? mk(e) : hk(e);
}), _k = () => "Other", vk = () => "Autre", yk = () => "Otro", bk = () => "Sonstiges", xk = () => "Altro", Sk = () => "Outro", Ck = () => "其他", wk = () => "その他", Tk = () => "Other", Ek = () => "Другое", Dk = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _k(e) : n === "fr" ? vk(e) : n === "es" ? yk(e) : n === "de" ? bk(e) : n === "it" ? xk(e) : n === "pt" ? Sk(e) : n === "zh" ? Ck(e) : n === "ja" ? wk(e) : n === "ko" ? Tk(e) : Ek(e);
}), Ok = () => "Message", kk = () => "Message", Ak = () => "Mensaje", jk = () => "Nachricht", Mk = () => "Messaggio", Nk = () => "Mensagem", Pk = () => "消息", Fk = () => "メッセージ", Ik = () => "Message", Lk = () => "Сообщение", Rk = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ok(e) : n === "fr" ? kk(e) : n === "es" ? Ak(e) : n === "de" ? jk(e) : n === "it" ? Mk(e) : n === "pt" ? Nk(e) : n === "zh" ? Pk(e) : n === "ja" ? Fk(e) : n === "ko" ? Ik(e) : Lk(e);
}), zk = () => "Describe your question or idea...", Bk = () => "Décrivez votre question ou idée…", Vk = () => "Describe tu pregunta o idea...", Hk = () => "Beschreiben Sie Ihre Frage oder Idee...", Uk = () => "Descrivi la tua domanda o idea...", Wk = () => "Descreva sua pergunta ou ideia...", Gk = () => "描述您的问题或想法...", Kk = () => "ご質問やアイデアを記入してください...", qk = () => "Describe your question or idea...", Jk = () => "Опишите ваш вопрос или идею...", Yk = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zk(e) : n === "fr" ? Bk(e) : n === "es" ? Vk(e) : n === "de" ? Hk(e) : n === "it" ? Uk(e) : n === "pt" ? Wk(e) : n === "zh" ? Gk(e) : n === "ja" ? Kk(e) : n === "ko" ? qk(e) : Jk(e);
}), Xk = () => "Send Message", Zk = () => "Envoyer", Qk = () => "Enviar mensaje", $k = () => "Nachricht senden", eA = () => "Invia messaggio", tA = () => "Enviar mensagem", nA = () => "发送消息", rA = () => "メッセージを送信", iA = () => "Send Message", aA = () => "Отправить сообщение", oA = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Xk(e) : n === "fr" ? Zk(e) : n === "es" ? Qk(e) : n === "de" ? $k(e) : n === "it" ? eA(e) : n === "pt" ? tA(e) : n === "zh" ? nA(e) : n === "ja" ? rA(e) : n === "ko" ? iA(e) : aA(e);
}), sA = () => "Frequently Asked Questions", cA = () => "Questions fréquentes", lA = () => "Preguntas frecuentes", uA = () => "Häufig gestellte Fragen", dA = () => "Domande frequenti", fA = () => "Perguntas frequentes", pA = () => "常见问题", mA = () => "よくある質問", Q = () => "Frequently Asked Questions", hA = () => "Часто задаваемые вопросы", gA = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? sA(e) : n === "fr" ? cA(e) : n === "es" ? lA(e) : n === "de" ? uA(e) : n === "it" ? dA(e) : n === "pt" ? fA(e) : n === "zh" ? pA(e) : n === "ja" ? mA(e) : n === "ko" ? Q(e) : hA(e);
}), _A = () => "Everything you need to know about i18n Benchmark.", vA = () => "Tout savoir sur i18n Benchmark.", yA = () => "Todo lo que necesitas saber sobre i18n Benchmark.", bA = () => "Alles, was Sie über i18n Benchmark wissen müssen.", xA = () => "Tutto quello che c'è da sapere su i18n Benchmark.", SA = () => "Tudo o que você precisa saber sobre o i18n Benchmark.", CA = () => "关于 i18n 基准测试您需要了解的一切。", wA = () => "i18n Benchmarkについて知っておくべきすべてのこと。", TA = () => "Everything you need to know about i18n Benchmark.", EA = () => "Все, что вам нужно знать об i18n Benchmark.", DA = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _A(e) : n === "fr" ? vA(e) : n === "es" ? yA(e) : n === "de" ? bA(e) : n === "it" ? xA(e) : n === "pt" ? SA(e) : n === "zh" ? CA(e) : n === "ja" ? wA(e) : n === "ko" ? TA(e) : EA(e);
}), OA = () => "What is i18n Benchmark?", kA = () => "Qu'est-ce qu'i18n Benchmark ?", AA = () => "¿Qué es i18n Benchmark?", jA = () => "Was ist i18n Benchmark?", MA = () => "Cos'è i18n Benchmark?", NA = () => "O que é o i18n Benchmark?", PA = () => "什么是 i18n 基准测试？", FA = () => "i18n Benchmarkとは何ですか？", IA = () => "What is i18n Benchmark?", LA = () => "Что такое i18n Benchmark?", RA = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? OA(e) : n === "fr" ? kA(e) : n === "es" ? AA(e) : n === "de" ? jA(e) : n === "it" ? MA(e) : n === "pt" ? NA(e) : n === "zh" ? PA(e) : n === "ja" ? FA(e) : n === "ko" ? IA(e) : LA(e);
}), zA = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", BA = () => "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.", VA = () => "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", HA = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", UA = () => "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", WA = () => "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.", GA = () => "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", KA = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。", qA = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", JA = () => "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.", YA = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zA(e) : n === "fr" ? BA(e) : n === "es" ? VA(e) : n === "de" ? HA(e) : n === "it" ? UA(e) : n === "pt" ? WA(e) : n === "zh" ? GA(e) : n === "ja" ? KA(e) : n === "ko" ? qA(e) : JA(e);
}), XA = () => "How are benchmarks conducted?", ZA = () => "Comment sont menés les benchmarks ?", QA = () => "¿Cómo se realizan los benchmarks?", $A = () => "Wie werden Benchmarks durchgeführt?", ej = () => "Come vengono condotti i benchmark?", tj = () => "Como os benchmarks são conduzidos?", nj = () => "基准测试是如何进行的？", rj = () => "ベンチマークはどのように実施されますか？", ij = () => "How are benchmarks conducted?", aj = () => "Как проводятся бенчмарки?", oj = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? XA(e) : n === "fr" ? ZA(e) : n === "es" ? QA(e) : n === "de" ? $A(e) : n === "it" ? ej(e) : n === "pt" ? tj(e) : n === "zh" ? nj(e) : n === "ja" ? rj(e) : n === "ko" ? ij(e) : aj(e);
}), sj = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", cj = () => "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.", lj = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.", uj = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.", dj = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.", fj = () => "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.", pj = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。", mj = () => "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", hj = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", gj = () => "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.", _j = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? sj(e) : n === "fr" ? cj(e) : n === "es" ? lj(e) : n === "de" ? uj(e) : n === "it" ? dj(e) : n === "pt" ? fj(e) : n === "zh" ? pj(e) : n === "ja" ? mj(e) : n === "ko" ? hj(e) : gj(e);
}), vj = () => "Which libraries are currently supported?", yj = () => "Quelles bibliothèques sont prises en charge ?", bj = () => "¿Qué bibliotecas se admiten actualmente?", xj = () => "Welche Bibliotheken werden derzeit unterstützt?", Sj = () => "Quali librerie sono attualmente supportate?", Cj = () => "Quais bibliotecas são suportadas atualmente?", wj = () => "目前支持哪些库？", Tj = () => "現在サポートされているライブラリは何ですか？", Ej = () => "Which libraries are currently supported?", Dj = () => "Какие библиотеки поддерживаются в данный момент?", Oj = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? vj(e) : n === "fr" ? yj(e) : n === "es" ? bj(e) : n === "de" ? xj(e) : n === "it" ? Sj(e) : n === "pt" ? Cj(e) : n === "zh" ? wj(e) : n === "ja" ? Tj(e) : n === "ko" ? Ej(e) : Dj(e);
}), kj = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Aj = () => "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.", jj = () => "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", Mj = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", Nj = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Pj = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Fj = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", Ij = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", Lj = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Rj = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", zj = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? kj(e) : n === "fr" ? Aj(e) : n === "es" ? jj(e) : n === "de" ? Mj(e) : n === "it" ? Nj(e) : n === "pt" ? Pj(e) : n === "zh" ? Fj(e) : n === "ja" ? Ij(e) : n === "ko" ? Lj(e) : Rj(e);
}), Bj = () => "Can I submit my own benchmarks?", Vj = () => "Puis-je proposer des benchmarks ?", Hj = () => "¿Puedo enviar mis propios benchmarks?", Uj = () => "Kann ich meine eigenen Benchmarks einreichen?", Wj = () => "Posso inviare i miei benchmark?", Gj = () => "Posso enviar meus próprios benchmarks?", Kj = () => "我可以提交我自己的基准测试吗？", qj = () => "自分のベンチマークを投稿できますか？", Jj = () => "Can I submit my own benchmarks?", Yj = () => "Могу ли я прислать свои собственные бенчмарки?", Xj = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Bj(e) : n === "fr" ? Vj(e) : n === "es" ? Hj(e) : n === "de" ? Uj(e) : n === "it" ? Wj(e) : n === "pt" ? Gj(e) : n === "zh" ? Kj(e) : n === "ja" ? qj(e) : n === "ko" ? Jj(e) : Yj(e);
}), Zj = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", Qj = () => "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.", $j = () => "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.", eM = () => "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.", tM = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", nM = () => "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", rM = () => "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。", iM = () => "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。", aM = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", oM = () => "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.", sM = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Zj(e) : n === "fr" ? Qj(e) : n === "es" ? $j(e) : n === "de" ? eM(e) : n === "it" ? tM(e) : n === "pt" ? nM(e) : n === "zh" ? rM(e) : n === "ja" ? iM(e) : n === "ko" ? aM(e) : oM(e);
}), cM = () => "How often are benchmarks updated?", lM = () => "À quelle fréquence sont-ils mis à jour ?", uM = () => "¿Con qué frecuencia se actualizan los benchmarks?", dM = () => "Wie oft werden Benchmarks aktualisiert?", fM = () => "Con quale frequenza vengono aggiornati i benchmark?", pM = () => "Com que frequência os benchmarks são atualizados?", mM = () => "基准测试多久更新一次？", hM = () => "ベンチマークはどのくらいの頻度で更新されますか？", gM = () => "How often are benchmarks updated?", _M = () => "Как часто обновляются бенчмарки?", vM = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? cM(e) : n === "fr" ? lM(e) : n === "es" ? uM(e) : n === "de" ? dM(e) : n === "it" ? fM(e) : n === "pt" ? pM(e) : n === "zh" ? mM(e) : n === "ja" ? hM(e) : n === "ko" ? gM(e) : _M(e);
}), yM = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", bM = () => "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.", xM = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", SM = () => "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.", CM = () => "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.", wM = () => "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.", TM = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。", EM = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", DM = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", OM = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.", kM = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yM(e) : n === "fr" ? bM(e) : n === "es" ? xM(e) : n === "de" ? SM(e) : n === "it" ? CM(e) : n === "pt" ? wM(e) : n === "zh" ? TM(e) : n === "ja" ? EM(e) : n === "ko" ? DM(e) : OM(e);
}), AM = () => "Is the data reliable?", jM = () => "Les données sont-elles fiables ?", MM = () => "¿Son fiables los datos?", NM = () => "Sind die Daten zuverlässig?", PM = () => "I dati sono affidabili?", FM = () => "Os dados são confiáveis?", IM = () => "数据可靠吗？", LM = () => "データは信頼できますか？", RM = () => "Is the data reliable?", zM = () => "Можно ли доверять данным?", BM = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? AM(e) : n === "fr" ? jM(e) : n === "es" ? MM(e) : n === "de" ? NM(e) : n === "it" ? PM(e) : n === "pt" ? FM(e) : n === "zh" ? IM(e) : n === "ja" ? LM(e) : n === "ko" ? RM(e) : zM(e);
}), VM = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", HM = () => "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.", UM = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", WM = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", GM = () => "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.", KM = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", qM = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。", JM = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。", YM = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", XM = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.", ZM = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? VM(e) : n === "fr" ? HM(e) : n === "es" ? UM(e) : n === "de" ? WM(e) : n === "it" ? GM(e) : n === "pt" ? KM(e) : n === "zh" ? qM(e) : n === "ja" ? JM(e) : n === "ko" ? YM(e) : XM(e);
}), QM = () => "Do you offer consulting services?", $M = () => "Proposez-vous du conseil ?", eN = () => "¿Ofrecen servicios de consultoría?", tN = () => "Bieten Sie Beratungsdienstleistungen an?", nN = () => "Offrite servizi di consulenza?", rN = () => "Vocês oferecem serviços de consultoria?", iN = () => "你们提供咨询服务吗？", aN = () => "コンサルティングサービスは提供していますか？", oN = () => "Do you offer consulting services?", sN = () => "Предоставляете ли вы консалтинговые услуги?", cN = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? QM(e) : n === "fr" ? $M(e) : n === "es" ? eN(e) : n === "de" ? tN(e) : n === "it" ? nN(e) : n === "pt" ? rN(e) : n === "zh" ? iN(e) : n === "ja" ? aN(e) : n === "ko" ? oN(e) : sN(e);
}), lN = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", uN = () => "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.", dN = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.", fN = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.", pN = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.", mN = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.", hN = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。", gN = () => "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。", _N = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", vN = () => "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.", yN = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? lN(e) : n === "fr" ? uN(e) : n === "es" ? dN(e) : n === "de" ? fN(e) : n === "it" ? pN(e) : n === "pt" ? mN(e) : n === "zh" ? hN(e) : n === "ja" ? gN(e) : n === "ko" ? _N(e) : vN(e);
}), bN = () => "How can I contribute?", xN = () => "Comment contribuer ?", SN = () => "¿Cómo puedo contribuir?", CN = () => "Wie kann ich beitragen?", wN = () => "Come posso contribuire?", TN = () => "Como posso contribuir?", EN = () => "我该如何贡献？", DN = () => "どのように貢献できますか？", ON = () => "How can I contribute?", kN = () => "Как я могу помочь проекту?", AN = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? bN(e) : n === "fr" ? xN(e) : n === "es" ? SN(e) : n === "de" ? CN(e) : n === "it" ? wN(e) : n === "pt" ? TN(e) : n === "zh" ? EN(e) : n === "ja" ? DN(e) : n === "ko" ? ON(e) : kN(e);
}), jN = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", MN = () => "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.", NN = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.", PN = () => "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", FN = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", IN = () => "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.", LN = () => "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。", RN = () => "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", zN = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", BN = () => "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.", VN = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? jN(e) : n === "fr" ? MN(e) : n === "es" ? NN(e) : n === "de" ? PN(e) : n === "it" ? FN(e) : n === "pt" ? IN(e) : n === "zh" ? LN(e) : n === "ja" ? RN(e) : n === "ko" ? zN(e) : BN(e);
}), HN = () => "Simple, Transparent Pricing", UN = () => "Tarification simple et transparente", WN = () => "Precios sencillos y transparentes", GN = () => "Einfache, transparente Preisgestaltung", KN = () => "Prezzi semplici e trasparenti", qN = () => "Preços simples e transparentes", JN = () => "简单透明的定价", YN = () => "シンプルで透明性の高い価格設定", XN = () => "Simple, Transparent Pricing", ZN = () => "Простые и прозрачные цены", QN = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? HN(e) : n === "fr" ? UN(e) : n === "es" ? WN(e) : n === "de" ? GN(e) : n === "it" ? KN(e) : n === "pt" ? qN(e) : n === "zh" ? JN(e) : n === "ja" ? YN(e) : n === "ko" ? XN(e) : ZN(e);
}), $N = () => "Choose the plan that fits your team. No hidden fees.", eP = () => "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.", tP = () => "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.", nP = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", rP = () => "Scegli il piano più adatto al tuo team. Nessun costo nascosto.", iP = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", aP = () => "选择适合您团队的计划。无隐藏费用。", oP = () => "チームに合ったプランをお選びください。隠れた費用はありません。", sP = () => "Choose the plan that fits your team. No hidden fees.", cP = () => "Выберите подходящий план для вашей команды. Никаких скрытых комиссий.", lP = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? $N(e) : n === "fr" ? eP(e) : n === "es" ? tP(e) : n === "de" ? nP(e) : n === "it" ? rP(e) : n === "pt" ? iP(e) : n === "zh" ? aP(e) : n === "ja" ? oP(e) : n === "ko" ? sP(e) : cP(e);
}), uP = () => "Starter", dP = () => "Starter", fP = () => "Starter", pP = () => "Starter", mP = () => "Starter", hP = () => "Starter", gP = () => "入门版", _P = () => "スターター", vP = () => "Starter", yP = () => "Starter", bP = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? uP(e) : n === "fr" ? dP(e) : n === "es" ? fP(e) : n === "de" ? pP(e) : n === "it" ? mP(e) : n === "pt" ? hP(e) : n === "zh" ? gP(e) : n === "ja" ? _P(e) : n === "ko" ? vP(e) : yP(e);
}), xP = () => "$0", SP = () => "0 €", CP = () => "0 $", wP = () => "0 $", TP = () => "0 $", EP = () => "0 $", DP = () => "0 $", OP = () => "0円", kP = () => "$0", AP = () => "0 $", jP = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? xP(e) : n === "fr" ? SP(e) : n === "es" ? CP(e) : n === "de" ? wP(e) : n === "it" ? TP(e) : n === "pt" ? EP(e) : n === "zh" ? DP(e) : n === "ja" ? OP(e) : n === "ko" ? kP(e) : AP(e);
}), MP = () => "forever", NP = () => "pour toujours", PP = () => "para siempre", FP = () => "für immer", IP = () => "per sempre", LP = () => "para sempre", RP = () => "永久", zP = () => "ずっと無料", BP = () => "forever", VP = () => "навсегда", HP = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? MP(e) : n === "fr" ? NP(e) : n === "es" ? PP(e) : n === "de" ? FP(e) : n === "it" ? IP(e) : n === "pt" ? LP(e) : n === "zh" ? RP(e) : n === "ja" ? zP(e) : n === "ko" ? BP(e) : VP(e);
}), UP = () => "5 benchmark runs/day", WP = () => "5 exécutions de benchmark / jour", GP = () => "5 ejecuciones de benchmark al día", KP = () => "5 Benchmark-Durchläufe/Tag", qP = () => "5 esecuzioni benchmark al giorno", JP = () => "5 execuções de benchmark/dia", YP = () => "每天 5 次基准测试运行", XP = () => "1日あたり5回のベンチマーク実行", ZP = () => "5 benchmark runs/day", QP = () => "5 запусков бенчмарка в день", $P = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? UP(e) : n === "fr" ? WP(e) : n === "es" ? GP(e) : n === "de" ? KP(e) : n === "it" ? qP(e) : n === "pt" ? JP(e) : n === "zh" ? YP(e) : n === "ja" ? XP(e) : n === "ko" ? ZP(e) : QP(e);
}), eF = () => "3 libraries", tF = () => "3 bibliothèques", nF = () => "3 bibliotecas", rF = () => "3 Bibliotheken", iF = () => "3 librerie", aF = () => "3 bibliotecas", oF = () => "3 个库", sF = () => "3ライブラリ", cF = () => "3 libraries", lF = () => "3 библиотеки", uF = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? eF(e) : n === "fr" ? tF(e) : n === "es" ? nF(e) : n === "de" ? rF(e) : n === "it" ? iF(e) : n === "pt" ? aF(e) : n === "zh" ? oF(e) : n === "ja" ? sF(e) : n === "ko" ? cF(e) : lF(e);
}), dF = () => "Community support", fF = () => "Support communautaire", pF = () => "Soporte de la comunidad", mF = () => "Community-Support", hF = () => "Supporto della comunità", gF = () => "Suporte da comunidade", _F = () => "社区支持", vF = () => "コミュニティサポート", yF = () => "Community support", bF = () => "Поддержка сообщества", xF = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? dF(e) : n === "fr" ? fF(e) : n === "es" ? pF(e) : n === "de" ? mF(e) : n === "it" ? hF(e) : n === "pt" ? gF(e) : n === "zh" ? _F(e) : n === "ja" ? vF(e) : n === "ko" ? yF(e) : bF(e);
}), SF = () => "Public results", CF = () => "Résultats publics", wF = () => "Resultados públicos", TF = () => "Öffentliche Ergebnisse", EF = () => "Risultati pubblici", DF = () => "Resultados públicos", OF = () => "公开结果", kF = () => "公開結果", AF = () => "Public results", jF = () => "Публичные результаты", MF = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? SF(e) : n === "fr" ? CF(e) : n === "es" ? wF(e) : n === "de" ? TF(e) : n === "it" ? EF(e) : n === "pt" ? DF(e) : n === "zh" ? OF(e) : n === "ja" ? kF(e) : n === "ko" ? AF(e) : jF(e);
}), NF = () => "Pro", PF = () => "Pro", FF = () => "Pro", IF = () => "Pro", LF = () => "Pro", RF = () => "Pro", zF = () => "专业版", BF = () => "プロ", VF = () => "Pro", HF = () => "Pro", UF = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? NF(e) : n === "fr" ? PF(e) : n === "es" ? FF(e) : n === "de" ? IF(e) : n === "it" ? LF(e) : n === "pt" ? RF(e) : n === "zh" ? zF(e) : n === "ja" ? BF(e) : n === "ko" ? VF(e) : HF(e);
}), WF = () => "$29", GF = () => "29 €", KF = () => "29 $", qF = () => "29 $", JF = () => "29 $", YF = () => "29 $", XF = () => "29 $", ZF = () => "29ドル", QF = () => "$29", $F = () => "29 $", eI = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? WF(e) : n === "fr" ? GF(e) : n === "es" ? KF(e) : n === "de" ? qF(e) : n === "it" ? JF(e) : n === "pt" ? YF(e) : n === "zh" ? XF(e) : n === "ja" ? ZF(e) : n === "ko" ? QF(e) : $F(e);
}), tI = () => "/month", nI = () => "/ mois", rI = () => "/mes", iI = () => "/Monat", aI = () => "/mese", oI = () => "/mês", sI = () => "/月", cI = () => "/月", lI = () => "/month", uI = () => "/мес", dI = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? tI(e) : n === "fr" ? nI(e) : n === "es" ? rI(e) : n === "de" ? iI(e) : n === "it" ? aI(e) : n === "pt" ? oI(e) : n === "zh" ? sI(e) : n === "ja" ? cI(e) : n === "ko" ? lI(e) : uI(e);
}), fI = () => "Unlimited runs", pI = () => "Exécutions illimitées", mI = () => "Ejecuciones ilimitadas", hI = () => "Unbegrenzte Durchläufe", gI = () => "Esecuzioni illimitate", _I = () => "Execuções ilimitadas", vI = () => "无限次运行", yI = () => "無制限の実行", bI = () => "Unlimited runs", xI = () => "Неограниченное число запусков", SI = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? fI(e) : n === "fr" ? pI(e) : n === "es" ? mI(e) : n === "de" ? hI(e) : n === "it" ? gI(e) : n === "pt" ? _I(e) : n === "zh" ? vI(e) : n === "ja" ? yI(e) : n === "ko" ? bI(e) : xI(e);
}), CI = () => "All libraries", wI = () => "Toutes les bibliothèques", TI = () => "Todas las bibliotecas", EI = () => "Alle Bibliotheken", DI = () => "Tutte le librerie", OI = () => "Todas as bibliotecas", kI = () => "所有库", AI = () => "すべてのライブラリ", jI = () => "All libraries", MI = () => "Все библиотеки", NI = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? CI(e) : n === "fr" ? wI(e) : n === "es" ? TI(e) : n === "de" ? EI(e) : n === "it" ? DI(e) : n === "pt" ? OI(e) : n === "zh" ? kI(e) : n === "ja" ? AI(e) : n === "ko" ? jI(e) : MI(e);
}), PI = () => "Priority support", FI = () => "Support prioritaire", II = () => "Soporte prioritario", LI = () => "Priorisierter Support", RI = () => "Supporto prioritario", zI = () => "Suporte prioritário", BI = () => "优先支持", VI = () => "優先サポート", HI = () => "Priority support", UI = () => "Приоритетная поддержка", WI = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? PI(e) : n === "fr" ? FI(e) : n === "es" ? II(e) : n === "de" ? LI(e) : n === "it" ? RI(e) : n === "pt" ? zI(e) : n === "zh" ? BI(e) : n === "ja" ? VI(e) : n === "ko" ? HI(e) : UI(e);
}), GI = () => "Private results", KI = () => "Résultats privés", qI = () => "Resultados privados", JI = () => "Private Ergebnisse", YI = () => "Risultati privati", XI = () => "Resultados privados", ZI = () => "私有结果", QI = () => "非公開の結果", $I = () => "Private results", eL = () => "Приватные результаты", tL = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? GI(e) : n === "fr" ? KI(e) : n === "es" ? qI(e) : n === "de" ? JI(e) : n === "it" ? YI(e) : n === "pt" ? XI(e) : n === "zh" ? ZI(e) : n === "ja" ? QI(e) : n === "ko" ? $I(e) : eL(e);
}), nL = () => "CI integration", rL = () => "Intégration CI", iL = () => "Integración CI", aL = () => "CI-Integration", oL = () => "Integrazione CI", sL = () => "Integração CI", cL = () => "CI 集成", lL = () => "CI統合", uL = () => "CI integration", dL = () => "Интеграция с CI", fL = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? nL(e) : n === "fr" ? rL(e) : n === "es" ? iL(e) : n === "de" ? aL(e) : n === "it" ? oL(e) : n === "pt" ? sL(e) : n === "zh" ? cL(e) : n === "ja" ? lL(e) : n === "ko" ? uL(e) : dL(e);
}), pL = () => "Historical data", mL = () => "Historique", hL = () => "Datos históricos", gL = () => "Historische Daten", _L = () => "Dati storici", vL = () => "Dados históricos", yL = () => "历史数据", bL = () => "履歴データ", xL = () => "Historical data", SL = () => "Исторические данные", CL = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? pL(e) : n === "fr" ? mL(e) : n === "es" ? hL(e) : n === "de" ? gL(e) : n === "it" ? _L(e) : n === "pt" ? vL(e) : n === "zh" ? yL(e) : n === "ja" ? bL(e) : n === "ko" ? xL(e) : SL(e);
}), wL = () => "Enterprise", TL = () => "Enterprise", EL = () => "Enterprise", DL = () => "Enterprise", OL = () => "Enterprise", kL = () => "Enterprise", AL = () => "企业版", jL = () => "エンタープライズ", ML = () => "Enterprise", NL = () => "Enterprise", PL = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? wL(e) : n === "fr" ? TL(e) : n === "es" ? EL(e) : n === "de" ? DL(e) : n === "it" ? OL(e) : n === "pt" ? kL(e) : n === "zh" ? AL(e) : n === "ja" ? jL(e) : n === "ko" ? ML(e) : NL(e);
}), FL = () => "Custom", IL = () => "Sur mesure", LL = () => "Personalizado", RL = () => "Individuell", zL = () => "Personalizzato", BL = () => "Personalizado", VL = () => "定制", HL = () => "カスタム", UL = () => "Custom", WL = () => "Индивидуально", GL = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? FL(e) : n === "fr" ? IL(e) : n === "es" ? LL(e) : n === "de" ? RL(e) : n === "it" ? zL(e) : n === "pt" ? BL(e) : n === "zh" ? VL(e) : n === "ja" ? HL(e) : n === "ko" ? UL(e) : WL(e);
}), KL = () => "Everything in Pro", qL = () => "Tout le Pro", JL = () => "Todo lo que hay en Pro", YL = () => "Alles in Pro enthalten", XL = () => "Tutto quello che c'è in Pro", ZL = () => "Tudo o que está no Pro", QL = () => "包含专业版中的所有功能", $L = () => "Proプランのすべてを含む", eR = () => "Everything in Pro", tR = () => "Все, что есть в Pro", nR = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? KL(e) : n === "fr" ? qL(e) : n === "es" ? JL(e) : n === "de" ? YL(e) : n === "it" ? XL(e) : n === "pt" ? ZL(e) : n === "zh" ? QL(e) : n === "ja" ? $L(e) : n === "ko" ? eR(e) : tR(e);
}), rR = () => "On-premise option", iR = () => "Option on-premise", aR = () => "Opción on-premise", oR = () => "On-Premise-Option", sR = () => "Opzione on-premise", cR = () => "Opção on-premise", lR = () => "本地部署选项", uR = () => "オンプレミスオプション", dR = () => "On-premise option", fR = () => "Локальная установка", pR = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? rR(e) : n === "fr" ? iR(e) : n === "es" ? aR(e) : n === "de" ? oR(e) : n === "it" ? sR(e) : n === "pt" ? cR(e) : n === "zh" ? lR(e) : n === "ja" ? uR(e) : n === "ko" ? dR(e) : fR(e);
}), mR = () => "SSO & SAML", hR = () => "SSO et SAML", gR = () => "SSO y SAML", _R = () => "SSO & SAML", vR = () => "SSO e SAML", yR = () => "SSO e SAML", bR = () => "SSO 和 SAML", xR = () => "SSO & SAML", SR = () => "SSO & SAML", CR = () => "SSO и SAML", wR = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? mR(e) : n === "fr" ? hR(e) : n === "es" ? gR(e) : n === "de" ? _R(e) : n === "it" ? vR(e) : n === "pt" ? yR(e) : n === "zh" ? bR(e) : n === "ja" ? xR(e) : n === "ko" ? SR(e) : CR(e);
}), TR = () => "Dedicated account manager", ER = () => "Account manager dédié", DR = () => "Gestor de cuentas dedicado", OR = () => "Dedizierter Account Manager", kR = () => "Account manager dedicato", AR = () => "Gerente de conta dedicado", jR = () => "专属客户经理", MR = () => "専任のアカウントマネージャー", NR = () => "Dedicated account manager", PR = () => "Персональный менеджер", FR = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? TR(e) : n === "fr" ? ER(e) : n === "es" ? DR(e) : n === "de" ? OR(e) : n === "it" ? kR(e) : n === "pt" ? AR(e) : n === "zh" ? jR(e) : n === "ja" ? MR(e) : n === "ko" ? NR(e) : PR(e);
}), IR = () => "Custom SLAs", LR = () => "SLA sur mesure", RR = () => "SLAs personalizados", zR = () => "Individuelle SLAs", BR = () => "SLA personalizzati", VR = () => "SLAs personalizados", HR = () => "定制 SLA", UR = () => "カスタムSLA", WR = () => "Custom SLAs", GR = () => "Индивидуальные SLA", KR = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? IR(e) : n === "fr" ? LR(e) : n === "es" ? RR(e) : n === "de" ? zR(e) : n === "it" ? BR(e) : n === "pt" ? VR(e) : n === "zh" ? HR(e) : n === "ja" ? UR(e) : n === "ko" ? WR(e) : GR(e);
}), qR = () => "Audit logs", JR = () => "Journaux d'audit", YR = () => "Registros de auditoría", XR = () => "Audit-Protokolle", ZR = () => "Log di controllo", QR = () => "Logs de auditoria", $R = () => "审计日志", ez = () => "監査ログ", tz = () => "Audit logs", nz = () => "Журналы аудита", rz = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? qR(e) : n === "fr" ? JR(e) : n === "es" ? YR(e) : n === "de" ? XR(e) : n === "it" ? ZR(e) : n === "pt" ? QR(e) : n === "zh" ? $R(e) : n === "ja" ? ez(e) : n === "ko" ? tz(e) : nz(e);
}), iz = () => "Training sessions", az = () => "Sessions de formation", oz = () => "Sesiones de formación", sz = () => "Schulungssitzungen", cz = () => "Sessioni di formazione", lz = () => "Sessões de treinamento", uz = () => "培训课程", dz = () => "トレーニングセッション", fz = () => "Training sessions", pz = () => "Обучающие сессии", mz = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? iz(e) : n === "fr" ? az(e) : n === "es" ? oz(e) : n === "de" ? sz(e) : n === "it" ? cz(e) : n === "pt" ? lz(e) : n === "zh" ? uz(e) : n === "ja" ? dz(e) : n === "ko" ? fz(e) : pz(e);
}), hz = () => "Contact Sales", gz = () => "Contacter les ventes", _z = () => "Contactar con ventas", vz = () => "Vertrieb kontaktieren", yz = () => "Contatta l'ufficio vendite", bz = () => "Contatar vendas", xz = () => "联系销售", Sz = () => "営業に問い合わせる", Cz = () => "Contact Sales", wz = () => "Связаться с отделом продаж", Tz = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? hz(e) : n === "fr" ? gz(e) : n === "es" ? _z(e) : n === "de" ? vz(e) : n === "it" ? yz(e) : n === "pt" ? bz(e) : n === "zh" ? xz(e) : n === "ja" ? Sz(e) : n === "ko" ? Cz(e) : wz(e);
}), Ez = () => "Get Started", Dz = () => "Commencer", Oz = () => "Empezar", kz = () => "Erste Schritte", Az = () => "Inizia ora", jz = () => "Começar", Mz = () => "开始使用", Nz = () => "始める", Pz = () => "Get Started", Fz = () => "Начать работу", Iz = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ez(e) : n === "fr" ? Dz(e) : n === "es" ? Oz(e) : n === "de" ? kz(e) : n === "it" ? Az(e) : n === "pt" ? jz(e) : n === "zh" ? Mz(e) : n === "ja" ? Nz(e) : n === "ko" ? Pz(e) : Fz(e);
}), Lz = () => "Products", Rz = () => "Produits", zz = () => "Productos", Bz = () => "Produkte", Vz = () => "Prodotti", Hz = () => "Produtos", Uz = () => "产品", Wz = () => "製品", Gz = () => "Products", Kz = () => "Продукты", qz = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Lz(e) : n === "fr" ? Rz(e) : n === "es" ? zz(e) : n === "de" ? Bz(e) : n === "it" ? Vz(e) : n === "pt" ? Hz(e) : n === "zh" ? Uz(e) : n === "ja" ? Wz(e) : n === "ko" ? Gz(e) : Kz(e);
}), Jz = () => "Tools and services to streamline your internationalization workflow.", Yz = () => "Outils et services pour fluidifier votre flux i18n.", Xz = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", Zz = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", Qz = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", $z = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", eB = () => "用于简化国际化工作流程的工具和服务。", tB = () => "国際化ワークフローを効率化するためのツールとサービス。", nB = () => "Tools and services to streamline your internationalization workflow.", rB = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", iB = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Jz(e) : n === "fr" ? Yz(e) : n === "es" ? Xz(e) : n === "de" ? Zz(e) : n === "it" ? Qz(e) : n === "pt" ? $z(e) : n === "zh" ? eB(e) : n === "ja" ? tB(e) : n === "ko" ? nB(e) : rB(e);
}), aB = () => "Learn More", oB = () => "En savoir plus", sB = () => "Más información", cB = () => "Mehr erfahren", lB = () => "Scopri di più", uB = () => "Saiba Mais", dB = () => "了解更多", fB = () => "詳細はこちら", pB = () => "Learn More", mB = () => "Узнать больше", hB = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? aB(e) : n === "fr" ? oB(e) : n === "es" ? sB(e) : n === "de" ? cB(e) : n === "it" ? lB(e) : n === "pt" ? uB(e) : n === "zh" ? dB(e) : n === "ja" ? fB(e) : n === "ko" ? pB(e) : mB(e);
}), gB = () => "Benchmark CLI", _B = () => "Benchmark CLI", vB = () => "CLI de Benchmark", yB = () => "Benchmark CLI", bB = () => "CLI del Benchmark", xB = () => "Benchmark CLI", SB = () => "基准测试 CLI", CB = () => "Benchmark CLI", wB = () => "Benchmark CLI", TB = () => "Benchmark CLI", EB = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? gB(e) : n === "fr" ? _B(e) : n === "es" ? vB(e) : n === "de" ? yB(e) : n === "it" ? bB(e) : n === "pt" ? xB(e) : n === "zh" ? SB(e) : n === "ja" ? CB(e) : n === "ko" ? wB(e) : TB(e);
}), DB = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", OB = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", kB = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", AB = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", jB = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", MB = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", NB = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", PB = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", FB = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", IB = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", LB = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? DB(e) : n === "fr" ? OB(e) : n === "es" ? kB(e) : n === "de" ? AB(e) : n === "it" ? jB(e) : n === "pt" ? MB(e) : n === "zh" ? NB(e) : n === "ja" ? PB(e) : n === "ko" ? FB(e) : IB(e);
}), RB = () => "Free", zB = () => "Gratuit", BB = () => "Gratis", VB = () => "Kostenlos", HB = () => "Gratis", UB = () => "Grátis", WB = () => "免费", GB = () => "無料", KB = () => "Free", qB = () => "Бесплатно", JB = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? RB(e) : n === "fr" ? zB(e) : n === "es" ? BB(e) : n === "de" ? VB(e) : n === "it" ? HB(e) : n === "pt" ? UB(e) : n === "zh" ? WB(e) : n === "ja" ? GB(e) : n === "ko" ? KB(e) : qB(e);
}), YB = () => "Benchmark Cloud", XB = () => "Benchmark Cloud", ZB = () => "Benchmark Cloud", QB = () => "Benchmark Cloud", $B = () => "Benchmark Cloud", eV = () => "Benchmark Cloud", tV = () => "基准测试云", nV = () => "Benchmark Cloud", rV = () => "Benchmark Cloud", iV = () => "Benchmark Cloud", aV = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? YB(e) : n === "fr" ? XB(e) : n === "es" ? ZB(e) : n === "de" ? QB(e) : n === "it" ? $B(e) : n === "pt" ? eV(e) : n === "zh" ? tV(e) : n === "ja" ? nV(e) : n === "ko" ? rV(e) : iV(e);
}), oV = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", sV = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", cV = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", lV = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", uV = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", dV = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", fV = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", pV = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", mV = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", hV = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", gV = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oV(e) : n === "fr" ? sV(e) : n === "es" ? cV(e) : n === "de" ? lV(e) : n === "it" ? uV(e) : n === "pt" ? dV(e) : n === "zh" ? fV(e) : n === "ja" ? pV(e) : n === "ko" ? mV(e) : hV(e);
}), _V = () => "$29/mo", vV = () => "29 €/mois", yV = () => "29 $/mes", bV = () => "29 $/Monat", xV = () => "29 $/mese", SV = () => "29 $/mês", CV = () => "29 $/月", wV = () => "29ドル/月", TV = () => "$29/mo", EV = () => "29 $/мес", DV = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _V(e) : n === "fr" ? vV(e) : n === "es" ? yV(e) : n === "de" ? bV(e) : n === "it" ? xV(e) : n === "pt" ? SV(e) : n === "zh" ? CV(e) : n === "ja" ? wV(e) : n === "ko" ? TV(e) : EV(e);
}), OV = () => "Benchmark Enterprise", kV = () => "Benchmark Enterprise", AV = () => "Benchmark Enterprise", jV = () => "Benchmark Enterprise", MV = () => "Benchmark Enterprise", NV = () => "Benchmark Enterprise", PV = () => "基准测试企业版", FV = () => "Benchmark Enterprise", IV = () => "Benchmark Enterprise", LV = () => "Benchmark Enterprise", RV = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? OV(e) : n === "fr" ? kV(e) : n === "es" ? AV(e) : n === "de" ? jV(e) : n === "it" ? MV(e) : n === "pt" ? NV(e) : n === "zh" ? PV(e) : n === "ja" ? FV(e) : n === "ko" ? IV(e) : LV(e);
}), zV = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", BV = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", VV = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", HV = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", UV = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", WV = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", GV = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", KV = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", qV = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", JV = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", YV = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zV(e) : n === "fr" ? BV(e) : n === "es" ? VV(e) : n === "de" ? HV(e) : n === "it" ? UV(e) : n === "pt" ? WV(e) : n === "zh" ? GV(e) : n === "ja" ? KV(e) : n === "ko" ? qV(e) : JV(e);
}), XV = () => "Contact Us", ZV = () => "Nous contacter", QV = () => "Contáctanos", $V = () => "Kontaktieren Sie uns", eH = () => "Contattaci", tH = () => "Contate-nos", nH = () => "联系我们", rH = () => "お問い合わせ", iH = () => "Contact Us", aH = () => "Связаться с нами", oH = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? XV(e) : n === "fr" ? ZV(e) : n === "es" ? QV(e) : n === "de" ? $V(e) : n === "it" ? eH(e) : n === "pt" ? tH(e) : n === "zh" ? nH(e) : n === "ja" ? rH(e) : n === "ko" ? iH(e) : aH(e);
}), sH = () => "Migration Assistant", cH = () => "Assistant de migration", lH = () => "Asistente de migración", uH = () => "Migrationsassistent", dH = () => "Assistente alla migrazione", fH = () => "Assistente de migração", pH = () => "迁移助手", mH = () => "移行アシスタント", hH = () => "Migration Assistant", gH = () => "Помощник по миграции", _H = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? sH(e) : n === "fr" ? cH(e) : n === "es" ? lH(e) : n === "de" ? uH(e) : n === "it" ? dH(e) : n === "pt" ? fH(e) : n === "zh" ? pH(e) : n === "ja" ? mH(e) : n === "ko" ? hH(e) : gH(e);
}), vH = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", yH = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", bH = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", xH = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", SH = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", CH = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", wH = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", TH = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", EH = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", DH = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", OH = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? vH(e) : n === "fr" ? yH(e) : n === "es" ? bH(e) : n === "de" ? xH(e) : n === "it" ? SH(e) : n === "pt" ? CH(e) : n === "zh" ? wH(e) : n === "ja" ? TH(e) : n === "ko" ? EH(e) : DH(e);
}), kH = () => "$99 one-time", AH = () => "99 € (unique)", jH = () => "99 $ pago único", MH = () => "Einmalig 99 $", NH = () => "99 $ una tantum", PH = () => "99 $ taxa única", FH = () => "99 $ 一次性费用", IH = () => "99ドル（一回限り）", LH = () => "$99 one-time", RH = () => "99 $ (разово)", zH = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? kH(e) : n === "fr" ? AH(e) : n === "es" ? jH(e) : n === "de" ? MH(e) : n === "it" ? NH(e) : n === "pt" ? PH(e) : n === "zh" ? FH(e) : n === "ja" ? IH(e) : n === "ko" ? LH(e) : RH(e);
}), BH = () => "Translation QA", VH = () => "QA des traductions", HH = () => "QA de traducción", UH = () => "Übersetzungs-QA", WH = () => "QA delle traduzioni", GH = () => "QA de tradução", KH = () => "翻译 QA", qH = () => "翻訳QA", JH = () => "Translation QA", YH = () => "QA переводов", XH = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? BH(e) : n === "fr" ? VH(e) : n === "es" ? HH(e) : n === "de" ? UH(e) : n === "it" ? WH(e) : n === "pt" ? GH(e) : n === "zh" ? KH(e) : n === "ja" ? qH(e) : n === "ko" ? JH(e) : YH(e);
}), ZH = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", QH = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", $H = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", eU = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", tU = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", nU = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", rU = () => "自动检查翻译缺失、复数问题和上下文错误。", iU = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", aU = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", oU = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", sU = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ZH(e) : n === "fr" ? QH(e) : n === "es" ? $H(e) : n === "de" ? eU(e) : n === "it" ? tU(e) : n === "pt" ? nU(e) : n === "zh" ? rU(e) : n === "ja" ? iU(e) : n === "ko" ? aU(e) : oU(e);
}), cU = () => "$19/mo", lU = () => "19 €/mois", uU = () => "19 $/mes", dU = () => "19 $/Monat", fU = () => "19 $/mese", pU = () => "19 $/mês", mU = () => "19 $/月", hU = () => "19ドル/月", gU = () => "$19/mo", _U = () => "19 $/мес", vU = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? cU(e) : n === "fr" ? lU(e) : n === "es" ? uU(e) : n === "de" ? dU(e) : n === "it" ? fU(e) : n === "pt" ? pU(e) : n === "zh" ? mU(e) : n === "ja" ? hU(e) : n === "ko" ? gU(e) : _U(e);
}), yU = () => "Bundle Optimizer", bU = () => "Optimiseur de bundle", xU = () => "Optimizador de bundle", SU = () => "Bundle-Optimierer", CU = () => "Ottimizzatore del bundle", wU = () => "Otimizador de bundle", TU = () => "包优化器", EU = () => "バンドルオプティマイザー", DU = () => "Bundle Optimizer", OU = () => "Оптимизатор бандла", kU = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yU(e) : n === "fr" ? bU(e) : n === "es" ? xU(e) : n === "de" ? SU(e) : n === "it" ? CU(e) : n === "pt" ? wU(e) : n === "zh" ? TU(e) : n === "ja" ? EU(e) : n === "ko" ? DU(e) : OU(e);
}), AU = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", jU = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", MU = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", NU = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", PU = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", FU = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", IU = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", LU = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", RU = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", zU = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", BU = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? AU(e) : n === "fr" ? jU(e) : n === "es" ? MU(e) : n === "de" ? NU(e) : n === "it" ? PU(e) : n === "pt" ? FU(e) : n === "zh" ? IU(e) : n === "ja" ? LU(e) : n === "ko" ? RU(e) : zU(e);
}), VU = () => "$49/mo", HU = () => "49 €/mois", UU = () => "49 $/mes", WU = () => "49 $/Monat", GU = () => "49 $/mese", KU = () => "49 $/mês", qU = () => "49 $/月", JU = () => "49ドル/月", YU = () => "$49/mo", XU = () => "49 $/мес", ZU = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? VU(e) : n === "fr" ? HU(e) : n === "es" ? UU(e) : n === "de" ? WU(e) : n === "it" ? GU(e) : n === "pt" ? KU(e) : n === "zh" ? qU(e) : n === "ja" ? JU(e) : n === "ko" ? YU(e) : XU(e);
}), QU = () => "Settings", $U = () => "Paramètres", eW = () => "Ajustes", tW = () => "Einstellungen", nW = () => "Impostazioni", rW = () => "Configurações", iW = () => "设置", aW = () => "設定", oW = () => "Settings", sW = () => "Настройки", cW = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? QU(e) : n === "fr" ? $U(e) : n === "es" ? eW(e) : n === "de" ? tW(e) : n === "it" ? nW(e) : n === "pt" ? rW(e) : n === "zh" ? iW(e) : n === "ja" ? aW(e) : n === "ko" ? oW(e) : sW(e);
}), lW = () => "Manage your account preferences and configuration.", uW = () => "Gérez les préférences et la configuration de votre compte.", dW = () => "Gestiona las preferencias y la configuración de tu cuenta.", fW = () => "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.", pW = () => "Gestisci le preferenze del tuo account e la configurazione.", mW = () => "Gerencie suas preferências de conta e configuração.", hW = () => "管理您的账户偏好和配置。", gW = () => "アカウント設定と構成を管理します。", _W = () => "Manage your account preferences and configuration.", vW = () => "Управляйте предпочтениями и конфигурацией вашей учетной записи.", yW = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? lW(e) : n === "fr" ? uW(e) : n === "es" ? dW(e) : n === "de" ? fW(e) : n === "it" ? pW(e) : n === "pt" ? mW(e) : n === "zh" ? hW(e) : n === "ja" ? gW(e) : n === "ko" ? _W(e) : vW(e);
}), bW = () => "Profile", xW = () => "Profil", SW = () => "Perfil", CW = () => "Profil", wW = () => "Profilo", TW = () => "Perfil", EW = () => "个人资料", DW = () => "プロフィール", OW = () => "Profile", kW = () => "Профиль", AW = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? bW(e) : n === "fr" ? xW(e) : n === "es" ? SW(e) : n === "de" ? CW(e) : n === "it" ? wW(e) : n === "pt" ? TW(e) : n === "zh" ? EW(e) : n === "ja" ? DW(e) : n === "ko" ? OW(e) : kW(e);
}), jW = () => "Display Name", MW = () => "Nom affiché", NW = () => "Nombre visible", PW = () => "Anzeigename", FW = () => "Nome visualizzato", IW = () => "Nome de exibição", LW = () => "显示名称", RW = () => "表示名", zW = () => "Display Name", BW = () => "Отображаемое имя", VW = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? jW(e) : n === "fr" ? MW(e) : n === "es" ? NW(e) : n === "de" ? PW(e) : n === "it" ? FW(e) : n === "pt" ? IW(e) : n === "zh" ? LW(e) : n === "ja" ? RW(e) : n === "ko" ? zW(e) : BW(e);
}), HW = () => "Email", UW = () => "E-mail", WW = () => "Correo electrónico", GW = () => "E-Mail", KW = () => "Email", qW = () => "E-mail", JW = () => "电子邮件", YW = () => "メールアドレス", XW = () => "Email", ZW = () => "Электронная почта", QW = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? HW(e) : n === "fr" ? UW(e) : n === "es" ? WW(e) : n === "de" ? GW(e) : n === "it" ? KW(e) : n === "pt" ? qW(e) : n === "zh" ? JW(e) : n === "ja" ? YW(e) : n === "ko" ? XW(e) : ZW(e);
}), $W = () => "Preferences", eG = () => "Préférences", tG = () => "Preferencias", nG = () => "Einstellungen", rG = () => "Preferenze", iG = () => "Preferências", aG = () => "偏好", oG = () => "設定", sG = () => "Preferences", cG = () => "Предпочтения", lG = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? $W(e) : n === "fr" ? eG(e) : n === "es" ? tG(e) : n === "de" ? nG(e) : n === "it" ? rG(e) : n === "pt" ? iG(e) : n === "zh" ? aG(e) : n === "ja" ? oG(e) : n === "ko" ? sG(e) : cG(e);
}), uG = () => "Email Notifications", dG = () => "Notifications e-mail", fG = () => "Notificaciones por correo electrónico", pG = () => "E-Mail-Benachrichtigungen", mG = () => "Notifiche via email", hG = () => "Notificações por e-mail", gG = () => "电子邮件通知", _G = () => "メール通知", vG = () => "Email Notifications", yG = () => "Уведомления по почте", bG = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? uG(e) : n === "fr" ? dG(e) : n === "es" ? fG(e) : n === "de" ? pG(e) : n === "it" ? mG(e) : n === "pt" ? hG(e) : n === "zh" ? gG(e) : n === "ja" ? _G(e) : n === "ko" ? vG(e) : yG(e);
}), xG = () => "Receive weekly benchmark reports", SG = () => "Recevoir les rapports hebdomadaires", CG = () => "Recibir informes semanales de benchmarks", wG = () => "Wöchentliche Benchmark-Berichte erhalten", TG = () => "Ricevi rapporti settimanali sui benchmark", EG = () => "Receber relatórios semanais de benchmarks", DG = () => "接收每周基准测试报告", OG = () => "毎週のベンチマークレポートを受け取る", kG = () => "Receive weekly benchmark reports", AG = () => "Получать еженедельные отчеты о бенчмарках", jG = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? xG(e) : n === "fr" ? SG(e) : n === "es" ? CG(e) : n === "de" ? wG(e) : n === "it" ? TG(e) : n === "pt" ? EG(e) : n === "zh" ? DG(e) : n === "ja" ? OG(e) : n === "ko" ? kG(e) : AG(e);
}), MG = () => "Toggle notifications", NG = () => "Activer/désactiver les notifications", PG = () => "Cambiar notificaciones", FG = () => "Benachrichtigungen umschalten", IG = () => "Attiva/disattiva notifiche", LG = () => "Alternar notificações", RG = () => "切换通知", zG = () => "通知の切り替え", BG = () => "Toggle notifications", VG = () => "Переключить уведомления", HG = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? MG(e) : n === "fr" ? NG(e) : n === "es" ? PG(e) : n === "de" ? FG(e) : n === "it" ? IG(e) : n === "pt" ? LG(e) : n === "zh" ? RG(e) : n === "ja" ? zG(e) : n === "ko" ? BG(e) : VG(e);
}), UG = () => "Dark Mode", WG = () => "Mode sombre", GG = () => "Modo oscuro", KG = () => "Dunkelmodus", qG = () => "Modalità scura", JG = () => "Modo Escuro", YG = () => "深色模式", XG = () => "ダークモード", ZG = () => "Dark Mode", QG = () => "Темная тема", $G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? UG(e) : n === "fr" ? WG(e) : n === "es" ? GG(e) : n === "de" ? KG(e) : n === "it" ? qG(e) : n === "pt" ? JG(e) : n === "zh" ? YG(e) : n === "ja" ? XG(e) : n === "ko" ? ZG(e) : QG(e);
}), eK = () => "Use dark color scheme", tK = () => "Utiliser le thème sombre", nK = () => "Usar esquema de colores oscuro", rK = () => "Dunkles Farbschema verwenden", iK = () => "Usa lo schema colori scuro", aK = () => "Usar esquema de cores escuro", oK = () => "使用深色配色方案", sK = () => "ダークカラー（暗い配色）を使用する", cK = () => "Use dark color scheme", lK = () => "Использовать темную цветовую схему", uK = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? eK(e) : n === "fr" ? tK(e) : n === "es" ? nK(e) : n === "de" ? rK(e) : n === "it" ? iK(e) : n === "pt" ? aK(e) : n === "zh" ? oK(e) : n === "ja" ? sK(e) : n === "ko" ? cK(e) : lK(e);
}), dK = () => "Toggle dark mode", fK = () => "Basculer le mode sombre", pK = () => "Cambiar modo oscuro", mK = () => "Dunkelmodus umschalten", hK = () => "Attiva/disattiva modalità scura", gK = () => "Alternar modo escuro", _K = () => "切换深色模式", vK = () => "ダークモードの切り替え", yK = () => "Toggle dark mode", bK = () => "Переключить темную тему", xK = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? dK(e) : n === "fr" ? fK(e) : n === "es" ? pK(e) : n === "de" ? mK(e) : n === "it" ? hK(e) : n === "pt" ? gK(e) : n === "zh" ? _K(e) : n === "ja" ? vK(e) : n === "ko" ? yK(e) : bK(e);
}), SK = () => "Default Language", CK = () => "Langue par défaut", wK = () => "Idioma predeterminado", TK = () => "Standardsprache", EK = () => "Lingua predefinita", DK = () => "Idioma padrão", OK = () => "默认语言", kK = () => "デフォルトの言語", AK = () => "Default Language", jK = () => "Язык по умолчанию", MK = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? SK(e) : n === "fr" ? CK(e) : n === "es" ? wK(e) : n === "de" ? TK(e) : n === "it" ? EK(e) : n === "pt" ? DK(e) : n === "zh" ? OK(e) : n === "ja" ? kK(e) : n === "ko" ? AK(e) : jK(e);
}), NK = () => "English (en)", PK = () => "Anglais (en)", FK = () => "Inglés (en)", IK = () => "Englisch (en)", LK = () => "Inglese (en)", RK = () => "Inglês (en)", zK = () => "英语 (en)", BK = () => "英語 (en)", VK = () => "English (en)", HK = () => "Английский (en)", UK = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? NK(e) : n === "fr" ? PK(e) : n === "es" ? FK(e) : n === "de" ? IK(e) : n === "it" ? LK(e) : n === "pt" ? RK(e) : n === "zh" ? zK(e) : n === "ja" ? BK(e) : n === "ko" ? VK(e) : HK(e);
}), WK = () => "French (fr)", GK = () => "Français (fr)", KK = () => "Francés (fr)", qK = () => "Französisch (fr)", JK = () => "Francese (fr)", YK = () => "Francés (fr)", XK = () => "法语 (fr)", ZK = () => "フランス語 (fr)", QK = () => "French (fr)", $K = () => "Французский (fr)", eq = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? WK(e) : n === "fr" ? GK(e) : n === "es" ? KK(e) : n === "de" ? qK(e) : n === "it" ? JK(e) : n === "pt" ? YK(e) : n === "zh" ? XK(e) : n === "ja" ? ZK(e) : n === "ko" ? QK(e) : $K(e);
}), tq = () => "German (de)", nq = () => "Allemand (de)", rq = () => "Alemán (de)", iq = () => "Deutsch (de)", aq = () => "Tedesco (de)", oq = () => "Alemão (de)", sq = () => "德语 (de)", cq = () => "ドイツ語 (de)", lq = () => "German (de)", uq = () => "Немецкий (de)", dq = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? tq(e) : n === "fr" ? nq(e) : n === "es" ? rq(e) : n === "de" ? iq(e) : n === "it" ? aq(e) : n === "pt" ? oq(e) : n === "zh" ? sq(e) : n === "ja" ? cq(e) : n === "ko" ? lq(e) : uq(e);
}), fq = () => "Spanish (es)", pq = () => "Espagnol (es)", mq = () => "Español (es)", hq = () => "Spanisch (es)", gq = () => "Spagnolo (es)", _q = () => "Espanhol (es)", vq = () => "西班牙语 (es)", yq = () => "スペイン語 (es)", bq = () => "Spanish (es)", xq = () => "Испанский (es)", Sq = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? fq(e) : n === "fr" ? pq(e) : n === "es" ? mq(e) : n === "de" ? hq(e) : n === "it" ? gq(e) : n === "pt" ? _q(e) : n === "zh" ? vq(e) : n === "ja" ? yq(e) : n === "ko" ? bq(e) : xq(e);
}), Cq = () => "Japanese (ja)", wq = () => "Japonais (ja)", Tq = () => "Japonés (ja)", Eq = () => "Japanisch (ja)", Dq = () => "Giapponese (ja)", Oq = () => "Japonês (ja)", kq = () => "日语 (ja)", Aq = () => "日本語 (ja)", jq = () => "Japanese (ja)", Mq = () => "Японский (ja)", Nq = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Cq(e) : n === "fr" ? wq(e) : n === "es" ? Tq(e) : n === "de" ? Eq(e) : n === "it" ? Dq(e) : n === "pt" ? Oq(e) : n === "zh" ? kq(e) : n === "ja" ? Aq(e) : n === "ko" ? jq(e) : Mq(e);
}), Pq = () => "Chinese Simplified (zh-CN)", Fq = () => "Chinois simplifié (zh-CN)", Iq = () => "Chino simplificado (zh-CN)", Lq = () => "Chinesisch vereinfacht (zh-CN)", Rq = () => "Cinese semplificato (zh-CN)", zq = () => "Chinês Simplificado (zh-CN)", Bq = () => "简体中文 (zh-CN)", Vq = () => "中国語（簡体字） (zh-CN)", Hq = () => "Chinese Simplified (zh-CN)", Uq = () => "Китайский упрощенный (zh-CN)", Wq = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Pq(e) : n === "fr" ? Fq(e) : n === "es" ? Iq(e) : n === "de" ? Lq(e) : n === "it" ? Rq(e) : n === "pt" ? zq(e) : n === "zh" ? Bq(e) : n === "ja" ? Vq(e) : n === "ko" ? Hq(e) : Uq(e);
}), Gq = () => "Arabic (ar)", Kq = () => "Arabe (ar)", qq = () => "Árabe (ar)", Jq = () => "Arabisch (ar)", Yq = () => "Arabo (ar)", Xq = () => "Árabe (ar)", Zq = () => "阿拉伯语 (ar)", Qq = () => "アラビア語 (ar)", $q = () => "Arabic (ar)", eJ = () => "Арабский (ar)", tJ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Gq(e) : n === "fr" ? Kq(e) : n === "es" ? qq(e) : n === "de" ? Jq(e) : n === "it" ? Yq(e) : n === "pt" ? Xq(e) : n === "zh" ? Zq(e) : n === "ja" ? Qq(e) : n === "ko" ? $q(e) : eJ(e);
}), nJ = () => "API Access", rJ = () => "Accès API", iJ = () => "Acceso API", aJ = () => "API-Zugriff", oJ = () => "Accesso API", sJ = () => "Acesso API", cJ = () => "API 访问", lJ = () => "APIアクセス", uJ = () => "API Access", dJ = () => "Доступ к API", fJ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? nJ(e) : n === "fr" ? rJ(e) : n === "es" ? iJ(e) : n === "de" ? aJ(e) : n === "it" ? oJ(e) : n === "pt" ? sJ(e) : n === "zh" ? cJ(e) : n === "ja" ? lJ(e) : n === "ko" ? uJ(e) : dJ(e);
}), pJ = () => "API Key", mJ = () => "Clé API", hJ = () => "Llave API", gJ = () => "API-Schlüssel", _J = () => "Chiave API", vJ = () => "Chave API", yJ = () => "API 密钥", bJ = () => "APIキー", xJ = () => "API Key", SJ = () => "Ключ API", CJ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? pJ(e) : n === "fr" ? mJ(e) : n === "es" ? hJ(e) : n === "de" ? gJ(e) : n === "it" ? _J(e) : n === "pt" ? vJ(e) : n === "zh" ? yJ(e) : n === "ja" ? bJ(e) : n === "ko" ? xJ(e) : SJ(e);
}), wJ = () => "Copy", TJ = () => "Copier", EJ = () => "Copiar", DJ = () => "Kopieren", OJ = () => "Copia", kJ = () => "Copiar", AJ = () => "复制", jJ = () => "コピー", MJ = () => "Copy", NJ = () => "Копировать", PJ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? wJ(e) : n === "fr" ? TJ(e) : n === "es" ? EJ(e) : n === "de" ? DJ(e) : n === "it" ? OJ(e) : n === "pt" ? kJ(e) : n === "zh" ? AJ(e) : n === "ja" ? jJ(e) : n === "ko" ? MJ(e) : NJ(e);
}), FJ = () => "Use this key to access the benchmarking API programmatically.", IJ = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", LJ = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", RJ = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", zJ = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", BJ = () => "Use esta chave para acessar a API de benchmarking programaticamente.", VJ = () => "使用此密钥以编程方式访问基准测试 API。", HJ = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", UJ = () => "Use this key to access the benchmarking API programmatically.", WJ = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", GJ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? FJ(e) : n === "fr" ? IJ(e) : n === "es" ? LJ(e) : n === "de" ? RJ(e) : n === "it" ? zJ(e) : n === "pt" ? BJ(e) : n === "zh" ? VJ(e) : n === "ja" ? HJ(e) : n === "ko" ? UJ(e) : WJ(e);
}), KJ = () => "Cancel", qJ = () => "Annuler", JJ = () => "Cancelar", YJ = () => "Abbrechen", XJ = () => "Annulla", ZJ = () => "Cancelar", QJ = () => "取消", $J = () => "キャンセル", eY = () => "Cancel", tY = () => "Отмена", nY = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? KJ(e) : n === "fr" ? qJ(e) : n === "es" ? JJ(e) : n === "de" ? YJ(e) : n === "it" ? XJ(e) : n === "pt" ? ZJ(e) : n === "zh" ? QJ(e) : n === "ja" ? $J(e) : n === "ko" ? eY(e) : tY(e);
}), rY = () => "Save Changes", iY = () => "Enregistrer", aY = () => "Guardar cambios", oY = () => "Änderungen speichern", sY = () => "Salva modifiche", cY = () => "Salvar alterações", lY = () => "保存更改", uY = () => "変更を保存", dY = () => "Save Changes", fY = () => "Сохранить изменения", pY = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? rY(e) : n === "fr" ? iY(e) : n === "es" ? aY(e) : n === "de" ? oY(e) : n === "it" ? sY(e) : n === "pt" ? cY(e) : n === "zh" ? lY(e) : n === "ja" ? uY(e) : n === "ko" ? dY(e) : fY(e);
}), mY = () => "Our Team", hY = () => "Notre équipe", gY = () => "Nuestro equipo", _Y = () => "Unser Team", vY = () => "Il nostro team", yY = () => "Nossa equipe", bY = () => "我们的团队", xY = () => "私たちのチーム", SY = () => "Our Team", CY = () => "Наша команда", wY = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? mY(e) : n === "fr" ? hY(e) : n === "es" ? gY(e) : n === "de" ? _Y(e) : n === "it" ? vY(e) : n === "pt" ? yY(e) : n === "zh" ? bY(e) : n === "ja" ? xY(e) : n === "ko" ? SY(e) : CY(e);
}), TY = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", EY = () => "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.", DY = () => "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.", OY = () => "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.", kY = () => "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.", AY = () => "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.", jY = () => "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。", MY = () => "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。", NY = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", PY = () => "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.", FY = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? TY(e) : n === "fr" ? EY(e) : n === "es" ? DY(e) : n === "de" ? OY(e) : n === "it" ? kY(e) : n === "pt" ? AY(e) : n === "zh" ? jY(e) : n === "ja" ? MY(e) : n === "ko" ? NY(e) : PY(e);
}), IY = () => "Sarah Chen", LY = () => "Sarah Chen", RY = () => "Sarah Chen", zY = () => "Sarah Chen", BY = () => "Sarah Chen", VY = () => "Sarah Chen", HY = () => "Sarah Chen", UY = () => "Sarah Chen", WY = () => "Sarah Chen", GY = () => "Сара Чен", KY = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? IY(e) : n === "fr" ? LY(e) : n === "es" ? RY(e) : n === "de" ? zY(e) : n === "it" ? BY(e) : n === "pt" ? VY(e) : n === "zh" ? HY(e) : n === "ja" ? UY(e) : n === "ko" ? WY(e) : GY(e);
}), qY = () => "Founder & Lead Engineer", JY = () => "Fondatrice & lead ingénieur", YY = () => "Fundadora e ingeniera principal", XY = () => "Gründerin & Leitende Ingenieurin", ZY = () => "Fondatrice e Responsabile tecnico", QY = () => "Fundadora e Engenheira Líder", $Y = () => "创始人兼首席工程师", eX = () => "創設者 & リードエンジニア", tX = () => "Founder & Lead Engineer", nX = () => "Основатель и ведущий инженер", rX = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? qY(e) : n === "fr" ? JY(e) : n === "es" ? YY(e) : n === "de" ? XY(e) : n === "it" ? ZY(e) : n === "pt" ? QY(e) : n === "zh" ? $Y(e) : n === "ja" ? eX(e) : n === "ko" ? tX(e) : nX(e);
}), iX = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", aX = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", oX = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", sX = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", cX = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", lX = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", uX = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", dX = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", fX = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", pX = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", mX = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? iX(e) : n === "fr" ? aX(e) : n === "es" ? oX(e) : n === "de" ? sX(e) : n === "it" ? cX(e) : n === "pt" ? lX(e) : n === "zh" ? uX(e) : n === "ja" ? dX(e) : n === "ko" ? fX(e) : pX(e);
}), hX = () => "Marcus Weber", gX = () => "Marcus Weber", _X = () => "Marcus Weber", vX = () => "Marcus Weber", yX = () => "Marcus Weber", bX = () => "Marcus Weber", xX = () => "Marcus Weber", SX = () => "Marcus Weber", CX = () => "Marcus Weber", wX = () => "Маркус Вебер", TX = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? hX(e) : n === "fr" ? gX(e) : n === "es" ? _X(e) : n === "de" ? vX(e) : n === "it" ? yX(e) : n === "pt" ? bX(e) : n === "zh" ? xX(e) : n === "ja" ? SX(e) : n === "ko" ? CX(e) : wX(e);
}), EX = () => "Performance Engineer", DX = () => "Ingénieur performance", OX = () => "Ingeniero de rendimiento", kX = () => "Performance-Ingenieur", AX = () => "Ingegnere delle prestazioni", jX = () => "Engenheiro de performance", MX = () => "性能工程师", NX = () => "パフォーマンスエンジニア", PX = () => "Performance Engineer", FX = () => "Инженер по производительности", IX = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? EX(e) : n === "fr" ? DX(e) : n === "es" ? OX(e) : n === "de" ? kX(e) : n === "it" ? AX(e) : n === "pt" ? jX(e) : n === "zh" ? MX(e) : n === "ja" ? NX(e) : n === "ko" ? PX(e) : FX(e);
}), LX = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", RX = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", zX = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", BX = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", VX = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", HX = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", UX = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", WX = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", GX = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", KX = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", qX = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? LX(e) : n === "fr" ? RX(e) : n === "es" ? zX(e) : n === "de" ? BX(e) : n === "it" ? VX(e) : n === "pt" ? HX(e) : n === "zh" ? UX(e) : n === "ja" ? WX(e) : n === "ko" ? GX(e) : KX(e);
}), JX = () => "Aisha Patel", YX = () => "Aisha Patel", XX = () => "Aisha Patel", ZX = () => "Aisha Patel", QX = () => "Aisha Patel", $X = () => "Aisha Patel", eZ = () => "Aisha Patel", tZ = () => "Aisha Patel", nZ = () => "Aisha Patel", rZ = () => "Айша Патель", iZ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? JX(e) : n === "fr" ? YX(e) : n === "es" ? XX(e) : n === "de" ? ZX(e) : n === "it" ? QX(e) : n === "pt" ? $X(e) : n === "zh" ? eZ(e) : n === "ja" ? tZ(e) : n === "ko" ? nZ(e) : rZ(e);
}), aZ = () => "Developer Advocate", oZ = () => "Developer advocate", sZ = () => "Developer Advocate", cZ = () => "Developer Advocate", lZ = () => "Developer Advocate", uZ = () => "Developer Advocate", dZ = () => "开发者倡导者", fZ = () => "Developer Advocate", pZ = () => "Developer Advocate", mZ = () => "Developer Advocate", hZ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? aZ(e) : n === "fr" ? oZ(e) : n === "es" ? sZ(e) : n === "de" ? cZ(e) : n === "it" ? lZ(e) : n === "pt" ? uZ(e) : n === "zh" ? dZ(e) : n === "ja" ? fZ(e) : n === "ko" ? pZ(e) : mZ(e);
}), gZ = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", _Z = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", vZ = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", yZ = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", bZ = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", xZ = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", SZ = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", CZ = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", wZ = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", TZ = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", EZ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? gZ(e) : n === "fr" ? _Z(e) : n === "es" ? vZ(e) : n === "de" ? yZ(e) : n === "it" ? bZ(e) : n === "pt" ? xZ(e) : n === "zh" ? SZ(e) : n === "ja" ? CZ(e) : n === "ko" ? wZ(e) : TZ(e);
}), DZ = () => "Tomás Rodríguez", OZ = () => "Tomás Rodríguez", kZ = () => "Tomás Rodríguez", AZ = () => "Tomás Rodríguez", jZ = () => "Tomás Rodríguez", MZ = () => "Tomás Rodríguez", NZ = () => "Tomás Rodríguez", PZ = () => "Tomás Rodríguez", FZ = () => "Tomás Rodríguez", IZ = () => "Томас Родригес", LZ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? DZ(e) : n === "fr" ? OZ(e) : n === "es" ? kZ(e) : n === "de" ? AZ(e) : n === "it" ? jZ(e) : n === "pt" ? MZ(e) : n === "zh" ? NZ(e) : n === "ja" ? PZ(e) : n === "ko" ? FZ(e) : IZ(e);
}), RZ = () => "Full-Stack Developer", zZ = () => "Développeur full-stack", BZ = () => "Desarrollador Full-Stack", VZ = () => "Full-Stack-Entwickler", HZ = () => "Sviluppatore Full-Stack", UZ = () => "Desenvolvedor Full-Stack", WZ = () => "全栈开发人员", GZ = () => "フルスタックデベロッパー", KZ = () => "Full-Stack Developer", qZ = () => "Full-Stack разработчик", JZ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? RZ(e) : n === "fr" ? zZ(e) : n === "es" ? BZ(e) : n === "de" ? VZ(e) : n === "it" ? HZ(e) : n === "pt" ? UZ(e) : n === "zh" ? WZ(e) : n === "ja" ? GZ(e) : n === "ko" ? KZ(e) : qZ(e);
}), YZ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", XZ = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", ZZ = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", QZ = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", $Z = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", eQ = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", tQ = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", nQ = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", rQ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", iQ = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", aQ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? YZ(e) : n === "fr" ? XZ(e) : n === "es" ? ZZ(e) : n === "de" ? QZ(e) : n === "it" ? $Z(e) : n === "pt" ? eQ(e) : n === "zh" ? tQ(e) : n === "ja" ? nQ(e) : n === "ko" ? rQ(e) : iQ(e);
}), oQ = () => "Yuki Tanaka", sQ = () => "Yuki Tanaka", cQ = () => "Yuki Tanaka", lQ = () => "Yuki Tanaka", uQ = () => "Yuki Tanaka", dQ = () => "Yuki Tanaka", fQ = () => "Yuki Tanaka", pQ = () => "Yuki Tanaka", mQ = () => "Yuki Tanaka", hQ = () => "Юки Танака", gQ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oQ(e) : n === "fr" ? sQ(e) : n === "es" ? cQ(e) : n === "de" ? lQ(e) : n === "it" ? uQ(e) : n === "pt" ? dQ(e) : n === "zh" ? fQ(e) : n === "ja" ? pQ(e) : n === "ko" ? mQ(e) : hQ(e);
}), _Q = () => "Data Analyst", vQ = () => "Analyste de données", yQ = () => "Analista de datos", bQ = () => "Datenanalyst", xQ = () => "Analista dati", SQ = () => "Analista de dados", CQ = () => "数据分析师", wQ = () => "データアナリスト", TQ = () => "Data Analyst", EQ = () => "Аналитик данных", DQ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _Q(e) : n === "fr" ? vQ(e) : n === "es" ? yQ(e) : n === "de" ? bQ(e) : n === "it" ? xQ(e) : n === "pt" ? SQ(e) : n === "zh" ? CQ(e) : n === "ja" ? wQ(e) : n === "ko" ? TQ(e) : EQ(e);
}), OQ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", kQ = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", AQ = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", jQ = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", MQ = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", NQ = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", PQ = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", FQ = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", IQ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", LQ = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", RQ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? OQ(e) : n === "fr" ? kQ(e) : n === "es" ? AQ(e) : n === "de" ? jQ(e) : n === "it" ? MQ(e) : n === "pt" ? NQ(e) : n === "zh" ? PQ(e) : n === "ja" ? FQ(e) : n === "ko" ? IQ(e) : LQ(e);
}), zQ = () => "Elena Kowalski", BQ = () => "Elena Kowalski", VQ = () => "Elena Kowalski", HQ = () => "Elena Kowalski", UQ = () => "Elena Kowalski", WQ = () => "Elena Kowalski", GQ = () => "Elena Kowalski", KQ = () => "Elena Kowalski", qQ = () => "Elena Kowalski", JQ = () => "Елена Ковальски", YQ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zQ(e) : n === "fr" ? BQ(e) : n === "es" ? VQ(e) : n === "de" ? HQ(e) : n === "it" ? UQ(e) : n === "pt" ? WQ(e) : n === "zh" ? GQ(e) : n === "ja" ? KQ(e) : n === "ko" ? qQ(e) : JQ(e);
}), XQ = () => "Community Manager", ZQ = () => "Community manager", QQ = () => "Responsable de la comunidad", $Q = () => "Community Manager", e$ = () => "Responsable della comunità", t$ = () => "Gerente de comunidade", n$ = () => "社区经理", r$ = () => "コミュニティマネージャー", i$ = () => "Community Manager", a$ = () => "Комьюнити-менеджер", o$ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? XQ(e) : n === "fr" ? ZQ(e) : n === "es" ? QQ(e) : n === "de" ? $Q(e) : n === "it" ? e$(e) : n === "pt" ? t$(e) : n === "zh" ? n$(e) : n === "ja" ? r$(e) : n === "ko" ? i$(e) : a$(e);
}), s$ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", c$ = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", l$ = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", u$ = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", d$ = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", f$ = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", p$ = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", m$ = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", h$ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", g$ = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", _$ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? s$(e) : n === "fr" ? c$(e) : n === "es" ? l$(e) : n === "de" ? u$(e) : n === "it" ? d$(e) : n === "pt" ? f$(e) : n === "zh" ? p$(e) : n === "ja" ? m$(e) : n === "ko" ? h$(e) : g$(e);
}), v$ = () => "404", y$ = () => "404", b$ = () => "404", x$ = () => "404", S$ = () => "404", C$ = () => "404", w$ = () => "404", T$ = () => "404", E$ = () => "404", D$ = () => "404", O$ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? v$(e) : n === "fr" ? y$(e) : n === "es" ? b$(e) : n === "de" ? x$(e) : n === "it" ? S$(e) : n === "pt" ? C$(e) : n === "zh" ? w$(e) : n === "ja" ? T$(e) : n === "ko" ? E$(e) : D$(e);
}), k$ = () => "Oops! Page not found", A$ = () => "Oups ! Page introuvable", j$ = () => "¡Ups! Página no encontrada", M$ = () => "Hoppla! Seite nicht gefunden", N$ = () => "Ops! Pagina non trovata", P$ = () => "Ops! Página não encontrada", F$ = () => "哎呀！页面未找到", I$ = () => "おっと！ページが見つかりません", L$ = () => "Oops! Page not found", R$ = () => "Упс! Страница не найдена", z$ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? k$(e) : n === "fr" ? A$(e) : n === "es" ? j$(e) : n === "de" ? M$(e) : n === "it" ? N$(e) : n === "pt" ? P$(e) : n === "zh" ? F$(e) : n === "ja" ? I$(e) : n === "ko" ? L$(e) : R$(e);
}), B$ = () => "Return to Home", V$ = () => "Retour à l'accueil", H$ = () => "Volver al inicio", U$ = () => "Zurück zur Startseite", W$ = () => "Torna alla Home", G$ = () => "Voltar para o início", K$ = () => "返回首页", q$ = () => "ホームに戻る", J$ = () => "Return to Home", Y$ = () => "Вернуться на главную", X$ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? B$(e) : n === "fr" ? V$(e) : n === "es" ? H$(e) : n === "de" ? U$(e) : n === "it" ? W$(e) : n === "pt" ? G$(e) : n === "zh" ? K$(e) : n === "ja" ? q$(e) : n === "ko" ? J$(e) : Y$(e);
}), $ = n({
	about_grid_methodologyDesc: () => Wp,
	about_grid_methodologyTitle: () => Np,
	about_grid_whyExistsDesc: () => Sp,
	about_grid_whyExistsTitle: () => dp,
	about_header_description: () => ep,
	about_header_title: () => Uf,
	about_whatWeMeasure_bundleSizeImpact: () => fm,
	about_whatWeMeasure_bundleSizeImpactDesc: () => Cm,
	about_whatWeMeasure_hydrationCost: () => nh,
	about_whatWeMeasure_hydrationCostDesc: () => ph,
	about_whatWeMeasure_lazyLoading: () => wh,
	about_whatWeMeasure_lazyLoadingDesc: () => Fh,
	about_whatWeMeasure_localeSwitch: () => Kh,
	about_whatWeMeasure_localeSwitchDesc: () => rg,
	about_whatWeMeasure_renderingOverhead: () => Pm,
	about_whatWeMeasure_renderingOverheadDesc: () => Gm,
	about_whatWeMeasure_title: () => tm,
	blog_header_description: () => Tg,
	blog_header_title: () => mg,
	blog_list_post1Category: () => E_,
	blog_list_post1Date: () => i_,
	blog_list_post1Excerpt: () => h_,
	blog_list_post1Title: () => qg,
	blog_list_post2Category: () => gv,
	blog_list_post2Date: () => J_,
	blog_list_post2Excerpt: () => av,
	blog_list_post2Title: () => L_,
	blog_list_post3Category: () => oy,
	blog_list_post3Date: () => Rv,
	blog_list_post3Excerpt: () => Yv,
	blog_list_post3Title: () => Dv,
	blog_list_post4Category: () => Xy,
	blog_list_post4Date: () => Oy,
	blog_list_post4Excerpt: () => zy,
	blog_list_post4Title: () => _y,
	blog_list_post5Category: () => Bb,
	blog_list_post5Date: () => vb,
	blog_list_post5Excerpt: () => kb,
	blog_list_post5Title: () => sb,
	blog_list_post6Category: () => Ax,
	blog_list_post6Date: () => cx,
	blog_list_post6Excerpt: () => yx,
	blog_list_post6Title: () => Zb,
	blog_list_readMore: () => Ig,
	careers_benefits_ossLabel: () => $S,
	careers_benefits_ossValue: () => uC,
	careers_benefits_payLabel: () => jS,
	careers_benefits_payValue: () => HS,
	careers_benefits_remoteLabel: () => lS,
	careers_benefits_remoteValue: () => bS,
	careers_header_description: () => Qx,
	careers_header_title: () => Vx,
	careers_openPositions_applyNow: () => MC,
	careers_openPositions_backendDesc: () => GT,
	careers_openPositions_backendTitle: () => PT,
	careers_openPositions_community: () => Ww,
	careers_openPositions_devrelDesc: () => FE,
	careers_openPositions_devrelTitle: () => wE,
	careers_openPositions_documentation: () => Nw,
	careers_openPositions_engineering: () => Sw,
	careers_openPositions_frontendDesc: () => CT,
	careers_openPositions_frontendTitle: () => fT,
	careers_openPositions_fullTime: () => ew,
	careers_openPositions_partTime: () => dw,
	careers_openPositions_qaDesc: () => rD,
	careers_openPositions_qaTitle: () => KE,
	careers_openPositions_remote: () => UC,
	careers_openPositions_sfRemote: () => tT,
	careers_openPositions_title: () => xC,
	careers_openPositions_writerDesc: () => pE,
	careers_openPositions_writerTitle: () => nE,
	contact_form_bugReport: () => LO,
	contact_form_contribution: () => gk,
	contact_form_email: () => iO,
	contact_form_emailPlaceholder: () => hO,
	contact_form_message: () => Rk,
	contact_form_messagePlaceholder: () => Yk,
	contact_form_methodologyQuestion: () => ak,
	contact_form_name: () => ID,
	contact_form_newBenchmarkIdea: () => JO,
	contact_form_other: () => Dk,
	contact_form_sendMessage: () => oA,
	contact_form_topic: () => EO,
	contact_form_yourName: () => qD,
	contact_header_description: () => TD,
	contact_header_title: () => mD,
	faq_header_description: () => DA,
	faq_header_title: () => gA,
	faq_list_a1: () => YA,
	faq_list_a2: () => _j,
	faq_list_a3: () => zj,
	faq_list_a4: () => sM,
	faq_list_a5: () => kM,
	faq_list_a6: () => ZM,
	faq_list_a7: () => yN,
	faq_list_a8: () => VN,
	faq_list_q1: () => RA,
	faq_list_q2: () => oj,
	faq_list_q3: () => Oj,
	faq_list_q4: () => Xj,
	faq_list_q5: () => vM,
	faq_list_q6: () => BM,
	faq_list_q7: () => cN,
	faq_list_q8: () => AN,
	footer_builtWith: () => di,
	footer_contact: () => ei,
	footer_contributing: () => Ur,
	footer_description: () => $n,
	footer_github: () => xr,
	footer_methodology: () => Mr,
	footer_resources: () => ur,
	footer_title: () => Hn,
	header_blog: () => Bt,
	header_careers: () => Zt,
	header_contact: () => bn,
	header_faq: () => ln,
	header_home: () => Oe,
	header_methodology: () => ze,
	header_mockPages: () => Xe,
	header_pricing: () => vt,
	header_products: () => st,
	header_settings: () => jn,
	header_team: () => kt,
	home_hero_description: () => Ga,
	home_hero_methodology: () => mo,
	home_hero_title: () => Pa,
	home_hero_viewResults: () => no,
	home_resultsTable_builtIn: () => Mf,
	home_resultsTable_bundleSize: () => Ad,
	home_resultsTable_lazyLoading: () => Qd,
	home_resultsTable_library: () => yd,
	home_resultsTable_lookupTime: () => Vd,
	home_resultsTable_manual: () => xf,
	home_resultsTable_title: () => cd,
	home_resultsTable_yes: () => uf,
	home_understandingImpact_cacheDesc: () => ku,
	home_understandingImpact_cacheLabel: () => vu,
	home_understandingImpact_foucDesc: () => su,
	home_understandingImpact_foucLabel: () => Xl,
	home_understandingImpact_measuresDesc: () => Zu,
	home_understandingImpact_measuresTitle: () => Bu,
	home_understandingImpact_singleJsonBullet1: () => Dc,
	home_understandingImpact_singleJsonBullet2: () => Rc,
	home_understandingImpact_singleJsonBullet3: () => Yc,
	home_understandingImpact_singleJsonIntro: () => gc,
	home_understandingImpact_singleJsonTitle: () => ac,
	home_understandingImpact_title: () => Js,
	home_understandingImpact_tradeOffsIntro: () => _l,
	home_understandingImpact_tradeOffsTitle: () => ol,
	home_understandingImpact_waterfallDesc: () => zl,
	home_understandingImpact_waterfallLabel: () => Ol,
	home_whyItMatters_bundleSizeDesc: () => qo,
	home_whyItMatters_bundleSizeTitle: () => Io,
	home_whyItMatters_dynamicLoadingDesc: () => Ls,
	home_whyItMatters_dynamicLoadingTitle: () => Es,
	home_whyItMatters_renderingDesc: () => hs,
	home_whyItMatters_renderingTitle: () => is,
	home_whyItMatters_title: () => To,
	mockBanner: () => Ca,
	notFound_description: () => z$,
	notFound_returnHome: () => X$,
	notFound_title: () => O$,
	pricing_header_description: () => lP,
	pricing_header_title: () => QN,
	pricing_tiers_contactSales: () => Tz,
	pricing_tiers_enterpriseFeature1: () => nR,
	pricing_tiers_enterpriseFeature2: () => pR,
	pricing_tiers_enterpriseFeature3: () => wR,
	pricing_tiers_enterpriseFeature4: () => FR,
	pricing_tiers_enterpriseFeature5: () => KR,
	pricing_tiers_enterpriseFeature6: () => rz,
	pricing_tiers_enterpriseFeature7: () => mz,
	pricing_tiers_enterpriseName: () => PL,
	pricing_tiers_enterprisePrice: () => GL,
	pricing_tiers_getStarted: () => Iz,
	pricing_tiers_proFeature1: () => SI,
	pricing_tiers_proFeature2: () => NI,
	pricing_tiers_proFeature3: () => WI,
	pricing_tiers_proFeature4: () => tL,
	pricing_tiers_proFeature5: () => fL,
	pricing_tiers_proFeature6: () => CL,
	pricing_tiers_proName: () => UF,
	pricing_tiers_proPeriod: () => dI,
	pricing_tiers_proPrice: () => eI,
	pricing_tiers_starterFeature1: () => $P,
	pricing_tiers_starterFeature2: () => uF,
	pricing_tiers_starterFeature3: () => xF,
	pricing_tiers_starterFeature4: () => MF,
	pricing_tiers_starterName: () => bP,
	pricing_tiers_starterPeriod: () => HP,
	pricing_tiers_starterPrice: () => jP,
	products_grid_cliDesc: () => LB,
	products_grid_cliName: () => EB,
	products_grid_cliPrice: () => JB,
	products_grid_cloudDesc: () => gV,
	products_grid_cloudName: () => aV,
	products_grid_cloudPrice: () => DV,
	products_grid_enterpriseDesc: () => YV,
	products_grid_enterpriseName: () => RV,
	products_grid_enterprisePrice: () => oH,
	products_grid_learnMore: () => hB,
	products_grid_migrationDesc: () => OH,
	products_grid_migrationName: () => _H,
	products_grid_migrationPrice: () => zH,
	products_grid_optimizerDesc: () => BU,
	products_grid_optimizerName: () => kU,
	products_grid_optimizerPrice: () => ZU,
	products_grid_qaDesc: () => sU,
	products_grid_qaName: () => XH,
	products_grid_qaPrice: () => vU,
	products_header_description: () => iB,
	products_header_title: () => qz,
	settings_apiAccess_apiKey: () => CJ,
	settings_apiAccess_copy: () => PJ,
	settings_apiAccess_description: () => GJ,
	settings_apiAccess_title: () => fJ,
	settings_footer_cancel: () => nY,
	settings_footer_saveChanges: () => pY,
	settings_header_description: () => yW,
	settings_header_title: () => cW,
	settings_preferences_arabic: () => tJ,
	settings_preferences_chinese: () => Wq,
	settings_preferences_darkColorScheme: () => uK,
	settings_preferences_darkMode: () => $G,
	settings_preferences_defaultLanguage: () => MK,
	settings_preferences_emailNotifications: () => bG,
	settings_preferences_english: () => UK,
	settings_preferences_french: () => eq,
	settings_preferences_german: () => dq,
	settings_preferences_japanese: () => Nq,
	settings_preferences_spanish: () => Sq,
	settings_preferences_title: () => lG,
	settings_preferences_toggleDarkMode: () => xK,
	settings_preferences_toggleNotifications: () => HG,
	settings_preferences_weeklyReports: () => jG,
	settings_profile_displayName: () => VW,
	settings_profile_email: () => QW,
	settings_profile_title: () => AW,
	shared_appName: () => N,
	shared_contactEmail: () => oe,
	shared_goToGithub: () => _e,
	shared_siteName: () => W,
	team_grid_member1Bio: () => mX,
	team_grid_member1Name: () => KY,
	team_grid_member1Role: () => rX,
	team_grid_member2Bio: () => qX,
	team_grid_member2Name: () => TX,
	team_grid_member2Role: () => IX,
	team_grid_member3Bio: () => EZ,
	team_grid_member3Name: () => iZ,
	team_grid_member3Role: () => hZ,
	team_grid_member4Bio: () => aQ,
	team_grid_member4Name: () => LZ,
	team_grid_member4Role: () => JZ,
	team_grid_member5Bio: () => RQ,
	team_grid_member5Name: () => gQ,
	team_grid_member5Role: () => DQ,
	team_grid_member6Bio: () => _$,
	team_grid_member6Name: () => YQ,
	team_grid_member6Role: () => o$,
	team_header_description: () => FY,
	team_header_title: () => wY,
	themeToggle_auto: () => Si,
	themeToggle_dark: () => Ni,
	themeToggle_labelAuto: () => ta,
	themeToggle_labelOther: () => fa,
	themeToggle_light: () => Wi
}), Z$ = e.from_html("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"> </summary> <p class=\"px-6 pb-4 text-sm text-muted-foreground\"> </p></details>"), Q$ = e.from_html("<div class=\"mx-auto max-w-3xl space-y-4\"></div>");
function $$(t, n) {
	e.push(n, !1);
	let r = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: $[`faq_list_q${e}`]?.(),
		a: $[`faq_list_a${e}`]?.()
	}));
	e.init();
	var i = Q$();
	e.each(i, 5, () => r, e.index, (t, n) => {
		var r = Z$(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).q), e.set_text(s, e.get(n).a);
		}), e.append(t, r);
	}), e.reset(i), e.append(t, i), e.pop();
}
export { $$ as default };

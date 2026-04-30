import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = Object.defineProperty, a = (e, t) => {
	let n = {};
	for (var r in e) i(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || i(n, Symbol.toStringTag, { value: "Module" }), n;
}, o = {}, s = [
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
], ee = "PARAGLIDE_LOCALE", te = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function ne(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function re(e) {
	let t = ne(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var ie = void 0, f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (ie) {
		let e = ie?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!f && typeof window < "u" && window.location?.href && (e = re(window.location.href));
	let t = ae(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, se(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ae(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = le();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (v(t) && _.has(t)) {
			let e = _.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ce(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var oe = (e) => {
	e ? window.location.href = e : window.location.reload();
}, se = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = c;
	!f && typeof window < "u" && window.location?.href && (a = re(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${ee}=${e}; path=/; max-age=${te}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (v(t) && _.has(t)) {
		let n = _.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && oe(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function ce(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function le() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${ee}=([^;]+)`))?.[2];
	return g(e);
}
var _ = /* @__PURE__ */ new Map();
function v(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var ue = () => "i18n Bench", de = () => "Bench i18n", fe = () => "i18n Bench", pe = () => "i18n Bench", me = () => "i18n Bench", he = () => "i18n Bench", ge = () => "i18n Bench", _e = () => "i18n Bench", ve = () => "i18n Bench", ye = () => "i18n Bench", y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), be = () => "i18n Benchmark", xe = () => "Benchmark i18n", Se = () => "i18n Benchmark", Ce = () => "i18n Benchmark", we = () => "i18n Benchmark", Te = () => "i18n Benchmark", Ee = () => "i18n Benchmark", De = () => "i18n Benchmark", Oe = () => "i18n Benchmark", ke = () => "i18n Benchmark", b = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), Ae = () => "contact@intlayer.org", je = () => "contact@intlayer.org", Me = () => "contact@intlayer.org", Ne = () => "contact@intlayer.org", Pe = () => "contact@intlayer.org", Fe = () => "contact@intlayer.org", Ie = () => "contact@intlayer.org", Le = () => "contact@intlayer.org", Re = () => "contact@intlayer.org", ze = () => "contact@intlayer.org", x = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Be = () => "Go to GitHub", Ve = () => "Aller sur GitHub", He = () => "Ir a GitHub", Ue = () => "Zu GitHub", We = () => "Vai su GitHub", Ge = () => "Ir para o GitHub", Ke = () => "前往 GitHub", qe = () => "GitHubへ", Je = () => "Go to GitHub", Ye = () => "Перейти на GitHub", S = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Xe = () => "Home", Ze = () => "Accueil", Qe = () => "Inicio", $e = () => "Home", et = () => "Home", tt = () => "Início", nt = () => "首页", rt = () => "ホーム", it = () => "Home", at = () => "Главная", C = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), ot = () => "Methodology", st = () => "Méthodologie", ct = () => "Metodología", lt = () => "Methodik", ut = () => "Metodologia", dt = () => "Metodologia", ft = () => "方法论", pt = () => "手法", mt = () => "Methodology", ht = () => "Методология", w = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), gt = () => "Mock Pages", _t = () => "Pages fictives", vt = () => "Páginas de prueba", yt = () => "Testseiten", bt = () => "Pagine di test", xt = () => "Páginas de Teste", St = () => "模拟页面", Ct = () => "テストページ", wt = () => "Mock Pages", Tt = () => "Тестовые страницы", T = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? gt(e) : n === "fr" ? _t(e) : n === "es" ? vt(e) : n === "de" ? yt(e) : n === "it" ? bt(e) : n === "pt" ? xt(e) : n === "zh" ? St(e) : n === "ja" ? Ct(e) : n === "ko" ? wt(e) : Tt(e);
}), Et = () => "Products", Dt = () => "Produits", Ot = () => "Productos", kt = () => "Produkte", At = () => "Prodotti", jt = () => "Produtos", Mt = () => "产品", Nt = () => "製品", Pt = () => "Products", Ft = () => "Продукты", E = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Et(e) : n === "fr" ? Dt(e) : n === "es" ? Ot(e) : n === "de" ? kt(e) : n === "it" ? At(e) : n === "pt" ? jt(e) : n === "zh" ? Mt(e) : n === "ja" ? Nt(e) : n === "ko" ? Pt(e) : Ft(e);
}), It = () => "Pricing", Lt = () => "Tarifs", Rt = () => "Precios", zt = () => "Preise", Bt = () => "Prezzi", Vt = () => "Preços", Ht = () => "价格", Ut = () => "価格", Wt = () => "Pricing", Gt = () => "Цены", D = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? It(e) : n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : Gt(e);
}), Kt = () => "Team", qt = () => "Équipe", Jt = () => "Equipo", Yt = () => "Team", Xt = () => "Team", Zt = () => "Equipe", Qt = () => "团队", $t = () => "チーム", en = () => "Team", tn = () => "Команда", O = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Kt(e) : n === "fr" ? qt(e) : n === "es" ? Jt(e) : n === "de" ? Yt(e) : n === "it" ? Xt(e) : n === "pt" ? Zt(e) : n === "zh" ? Qt(e) : n === "ja" ? $t(e) : n === "ko" ? en(e) : tn(e);
}), nn = () => "Blog", rn = () => "Blog", an = () => "Blog", on = () => "Blog", sn = () => "Blog", cn = () => "Blog", ln = () => "博客", un = () => "ブログ", dn = () => "Blog", fn = () => "Блог", k = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? nn(e) : n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : fn(e);
}), pn = () => "Careers", mn = () => "Carrières", hn = () => "Carreras", gn = () => "Karriere", _n = () => "Carriere", vn = () => "Carreiras", yn = () => "招聘", bn = () => "採用情報", xn = () => "Careers", Sn = () => "Вакансии", A = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? pn(e) : n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : Sn(e);
}), Cn = () => "FAQ", wn = () => "FAQ", Tn = () => "FAQ", En = () => "FAQ", Dn = () => "FAQ", On = () => "FAQ", kn = () => "常见问题", An = () => "FAQ", jn = () => "FAQ", Mn = () => "FAQ", j = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Cn(e) : n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : Mn(e);
}), Nn = () => "Contact", Pn = () => "Contact", Fn = () => "Contacto", In = () => "Kontakt", Ln = () => "Contatti", Rn = () => "Contato", zn = () => "联系我们", Bn = () => "お問い合わせ", Vn = () => "Contact", Hn = () => "Контакт", M = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Nn(e) : n === "fr" ? Pn(e) : n === "es" ? Fn(e) : n === "de" ? In(e) : n === "it" ? Ln(e) : n === "pt" ? Rn(e) : n === "zh" ? zn(e) : n === "ja" ? Bn(e) : n === "ko" ? Vn(e) : Hn(e);
}), Un = () => "Settings", Wn = () => "Paramètres", Gn = () => "Ajustes", Kn = () => "Einstellungen", qn = () => "Impostazioni", Jn = () => "Configurações", Yn = () => "设置", Xn = () => "設定", Zn = () => "Settings", Qn = () => "Настройки", N = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Un(e) : n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "de" ? Kn(e) : n === "it" ? qn(e) : n === "pt" ? Jn(e) : n === "zh" ? Yn(e) : n === "ja" ? Xn(e) : n === "ko" ? Zn(e) : Qn(e);
}), $n = () => "i18n Benchmark", er = () => "Benchmark i18n", tr = () => "i18n Benchmark", nr = () => "i18n Benchmark", rr = () => "i18n Benchmark", ir = () => "i18n Benchmark", ar = () => "i18n Benchmark", or = () => "i18n Benchmark", sr = () => "i18n Benchmark", cr = () => "i18n Benchmark", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), lr = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", ur = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", dr = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", fr = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", pr = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", mr = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", hr = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", gr = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", _r = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", vr = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", F = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? lr(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
}), yr = () => "Resources", br = () => "Ressources", xr = () => "Recursos", Sr = () => "Ressourcen", Cr = () => "Risorse", wr = () => "Recursos", Tr = () => "资源", Er = () => "リソース", Dr = () => "Resources", Or = () => "Ресурсы", I = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yr(e) : n === "fr" ? br(e) : n === "es" ? xr(e) : n === "de" ? Sr(e) : n === "it" ? Cr(e) : n === "pt" ? wr(e) : n === "zh" ? Tr(e) : n === "ja" ? Er(e) : n === "ko" ? Dr(e) : Or(e);
}), kr = () => "GitHub", Ar = () => "GitHub", jr = () => "GitHub", Mr = () => "GitHub", Nr = () => "GitHub", Pr = () => "GitHub", Fr = () => "GitHub", Ir = () => "GitHub", Lr = () => "GitHub", Rr = () => "GitHub", L = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kr(e) : n === "fr" ? Ar(e) : n === "es" ? jr(e) : n === "de" ? Mr(e) : n === "it" ? Nr(e) : n === "pt" ? Pr(e) : n === "zh" ? Fr(e) : n === "ja" ? Ir(e) : n === "ko" ? Lr(e) : Rr(e);
}), zr = () => "Methodology", Br = () => "Méthodologie", Vr = () => "Metodología", Hr = () => "Methodik", Ur = () => "Metodologia", Wr = () => "Metodologia", Gr = () => "方法论", Kr = () => "手法", qr = () => "Methodology", Jr = () => "Методология", R = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zr(e) : n === "fr" ? Br(e) : n === "es" ? Vr(e) : n === "de" ? Hr(e) : n === "it" ? Ur(e) : n === "pt" ? Wr(e) : n === "zh" ? Gr(e) : n === "ja" ? Kr(e) : n === "ko" ? qr(e) : Jr(e);
}), Yr = () => "Contributing", Xr = () => "Contribuer", Zr = () => "Contribuir", Qr = () => "Beitragen", $r = () => "Contribuire", ei = () => "Contribuindo", ti = () => "贡献", ni = () => "貢献する", ri = () => "Contributing", ii = () => "Участие в проекте", z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Yr(e) : n === "fr" ? Xr(e) : n === "es" ? Zr(e) : n === "de" ? Qr(e) : n === "it" ? $r(e) : n === "pt" ? ei(e) : n === "zh" ? ti(e) : n === "ja" ? ni(e) : n === "ko" ? ri(e) : ii(e);
}), ai = () => "Contact", oi = () => "Contact", si = () => "Contacto", ci = () => "Kontakt", li = () => "Contatti", ui = () => "Contato", di = () => "联系我们", fi = () => "お問い合わせ", pi = () => "Contact", mi = () => "Контакт", B = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ai(e) : n === "fr" ? oi(e) : n === "es" ? si(e) : n === "de" ? ci(e) : n === "it" ? li(e) : n === "pt" ? ui(e) : n === "zh" ? di(e) : n === "ja" ? fi(e) : n === "ko" ? pi(e) : mi(e);
}), hi = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", gi = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", _i = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", vi = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", yi = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", bi = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", xi = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", Si = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", Ci = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", wi = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", V = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? hi(e) : n === "fr" ? gi(e) : n === "es" ? _i(e) : n === "de" ? vi(e) : n === "it" ? yi(e) : n === "pt" ? bi(e) : n === "zh" ? xi(e) : n === "ja" ? Si(e) : n === "ko" ? Ci(e) : wi(e);
}), Ti = () => "Theme: Auto", Ei = () => "Thème : automatique", Di = () => "Tema: Auto", Oi = () => "Thema: Auto", ki = () => "Tema: Auto", Ai = () => "Tema: Automático", ji = () => "主题：自动", Mi = () => "テーマ：自動", Ni = () => "Theme: Auto", Pi = () => "Тема: Авто", H = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ti(e) : n === "fr" ? Ei(e) : n === "es" ? Di(e) : n === "de" ? Oi(e) : n === "it" ? ki(e) : n === "pt" ? Ai(e) : n === "zh" ? ji(e) : n === "ja" ? Mi(e) : n === "ko" ? Ni(e) : Pi(e);
}), Fi = () => "Theme: Dark", Ii = () => "Thème : sombre", Li = () => "Tema: Oscuro", Ri = () => "Thema: Dunkel", zi = () => "Tema: Scuro", Bi = () => "Tema: Escuro", Vi = () => "主题：深色", Hi = () => "テーマ：ダーク", Ui = () => "Theme: Dark", Wi = () => "Тема: Темная", U = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Fi(e) : n === "fr" ? Ii(e) : n === "es" ? Li(e) : n === "de" ? Ri(e) : n === "it" ? zi(e) : n === "pt" ? Bi(e) : n === "zh" ? Vi(e) : n === "ja" ? Hi(e) : n === "ko" ? Ui(e) : Wi(e);
}), Gi = () => "Theme: Light", Ki = () => "Thème : clair", qi = () => "Tema: Claro", Ji = () => "Thema: Hell", Yi = () => "Tema: Chiaro", Xi = () => "Tema: Claro", Zi = () => "主题：浅色", Qi = () => "テーマ：ライト", $i = () => "Theme: Light", ea = () => "Тема: Светлая", W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Gi(e) : n === "fr" ? Ki(e) : n === "es" ? qi(e) : n === "de" ? Ji(e) : n === "it" ? Yi(e) : n === "pt" ? Xi(e) : n === "zh" ? Zi(e) : n === "ja" ? Qi(e) : n === "ko" ? $i(e) : ea(e);
}), ta = () => "Theme mode: auto (system). Click to switch to light mode.", na = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", ra = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", ia = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", aa = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", oa = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", sa = () => "主题模式：自动（系统）。点击切换到浅色模式。", ca = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", la = () => "Theme mode: auto (system). Click to switch to light mode.", ua = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ta(e) : n === "fr" ? na(e) : n === "es" ? ra(e) : n === "de" ? ia(e) : n === "it" ? aa(e) : n === "pt" ? oa(e) : n === "zh" ? sa(e) : n === "ja" ? ca(e) : n === "ko" ? la(e) : ua(e);
}), da = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, fa = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, pa = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, ma = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, ha = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, ga = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, _a = (e) => `主题模式：${e?.mode}。点击切换模式。`, va = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, ya = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ba = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, K = ((e, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? da(e) : n === "fr" ? fa(e) : n === "es" ? pa(e) : n === "de" ? ma(e) : n === "it" ? ha(e) : n === "pt" ? ga(e) : n === "zh" ? _a(e) : n === "ja" ? va(e) : n === "ko" ? ya(e) : ba(e);
}), xa = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", Sa = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", Ca = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", wa = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", Ta = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", Ea = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", Da = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", Oa = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", ka = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", Aa = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xa(e) : n === "fr" ? Sa(e) : n === "es" ? Ca(e) : n === "de" ? wa(e) : n === "it" ? Ta(e) : n === "pt" ? Ea(e) : n === "zh" ? Da(e) : n === "ja" ? Oa(e) : n === "ko" ? ka(e) : Aa(e);
}), ja = () => "i18n Benchmark", Ma = () => "Benchmark i18n", Na = () => "i18n Benchmark", Pa = () => "i18n Benchmark", Fa = () => "i18n Benchmark", Ia = () => "i18n Benchmark", La = () => "i18n Benchmark", Ra = () => "i18n Benchmark", za = () => "i18n Benchmark", Ba = () => "i18n Benchmark", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ja(e) : n === "fr" ? Ma(e) : n === "es" ? Na(e) : n === "de" ? Pa(e) : n === "it" ? Fa(e) : n === "pt" ? Ia(e) : n === "zh" ? La(e) : n === "ja" ? Ra(e) : n === "ko" ? za(e) : Ba(e);
}), Va = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", Ha = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", Ua = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", Wa = () => "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.", Ga = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", Ka = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.", qa = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", Ja = () => "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。", Ya = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", Xa = () => "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Va(e) : n === "fr" ? Ha(e) : n === "es" ? Ua(e) : n === "de" ? Wa(e) : n === "it" ? Ga(e) : n === "pt" ? Ka(e) : n === "zh" ? qa(e) : n === "ja" ? Ja(e) : n === "ko" ? Ya(e) : Xa(e);
}), Za = () => "View Results", Qa = () => "Voir les résultats", $a = () => "Ver resultados", eo = () => "Ergebnisse anzeigen", to = () => "Visualizza i risultati", no = () => "Ver Resultados", ro = () => "查看结果", io = () => "結果を見る", ao = () => "View Results", oo = () => "Посмотреть результаты", X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Za(e) : n === "fr" ? Qa(e) : n === "es" ? $a(e) : n === "de" ? eo(e) : n === "it" ? to(e) : n === "pt" ? no(e) : n === "zh" ? ro(e) : n === "ja" ? io(e) : n === "ko" ? ao(e) : oo(e);
}), so = () => "Methodology", co = () => "Méthodologie", lo = () => "Metodología", uo = () => "Methodik", fo = () => "Metodologia", po = () => "Metodologia", mo = () => "方法论", ho = () => "手法", go = () => "Methodology", _o = () => "Методология", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? so(e) : n === "fr" ? co(e) : n === "es" ? lo(e) : n === "de" ? uo(e) : n === "it" ? fo(e) : n === "pt" ? po(e) : n === "zh" ? mo(e) : n === "ja" ? ho(e) : n === "ko" ? go(e) : _o(e);
}), vo = () => "Why These Metrics Matter", yo = () => "Pourquoi ces métriques comptent", bo = () => "Por qué son importantes estas métricas", xo = () => "Warum diese Metriken wichtig sind", So = () => "Perché queste metriche sono importanti", Co = () => "Por que estas métricas importam", wo = () => "为什么这些指标很重要", To = () => "なぜこれらの指標が重要なのか", Eo = () => "Why These Metrics Matter", Do = () => "Почему эти метрики важны", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vo(e) : n === "fr" ? yo(e) : n === "es" ? bo(e) : n === "de" ? xo(e) : n === "it" ? So(e) : n === "pt" ? Co(e) : n === "zh" ? wo(e) : n === "ja" ? To(e) : n === "ko" ? Eo(e) : Do(e);
}), Oo = () => "Bundle Size", ko = () => "Taille du bundle", Ao = () => "Tamaño del bundle", jo = () => "Bundle-Größe", Mo = () => "Dimensione del bundle", No = () => "Tamanho do bundle", Po = () => "包大小", Fo = () => "バンドルサイズ", Io = () => "Bundle Size", Lo = () => "Размер бандла", Ro = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Oo(e) : n === "fr" ? ko(e) : n === "es" ? Ao(e) : n === "de" ? jo(e) : n === "it" ? Mo(e) : n === "pt" ? No(e) : n === "zh" ? Po(e) : n === "ja" ? Fo(e) : n === "ko" ? Io(e) : Lo(e);
}), zo = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", Bo = () => "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.", Vo = () => "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.", Ho = () => "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.", Uo = () => "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.", Wo = () => "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.", Go = () => "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。", Ko = () => "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。", qo = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", Jo = () => "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.", Yo = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zo(e) : n === "fr" ? Bo(e) : n === "es" ? Vo(e) : n === "de" ? Ho(e) : n === "it" ? Uo(e) : n === "pt" ? Wo(e) : n === "zh" ? Go(e) : n === "ja" ? Ko(e) : n === "ko" ? qo(e) : Jo(e);
}), Xo = () => "Rendering & Hydration", Zo = () => "Rendu et hydratation", Qo = () => "Renderizado e hidratación", $o = () => "Rendering & Hydrierung", es = () => "Rendering e idratazione", ts = () => "Renderização e hidratação", ns = () => "渲染与注水", rs = () => "レンダリングとハイドレーション", is = () => "Rendering & Hydration", as = () => "Рендеринг и гидратация", os = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xo(e) : n === "fr" ? Zo(e) : n === "es" ? Qo(e) : n === "de" ? $o(e) : n === "it" ? es(e) : n === "pt" ? ts(e) : n === "zh" ? ns(e) : n === "ja" ? rs(e) : n === "ko" ? is(e) : as(e);
}), ss = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", cs = () => "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).", ls = () => "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).", us = () => "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.", ds = () => "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).", fs = () => "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).", ps = () => "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。", ms = () => "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。", hs = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", gs = () => "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).", _s = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ss(e) : n === "fr" ? cs(e) : n === "es" ? ls(e) : n === "de" ? us(e) : n === "it" ? ds(e) : n === "pt" ? fs(e) : n === "zh" ? ps(e) : n === "ja" ? ms(e) : n === "ko" ? hs(e) : gs(e);
}), vs = () => "Dynamic Loading", ys = () => "Chargement dynamique", bs = () => "Carga dinámica", xs = () => "Dynamisches Laden", Ss = () => "Caricamento dinamico", Cs = () => "Carregamento dinâmico", ws = () => "动态加载", Ts = () => "動的読み込み", Es = () => "Dynamic Loading", Ds = () => "Динамическая загрузка", Os = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vs(e) : n === "fr" ? ys(e) : n === "es" ? bs(e) : n === "de" ? xs(e) : n === "it" ? Ss(e) : n === "pt" ? Cs(e) : n === "zh" ? ws(e) : n === "ja" ? Ts(e) : n === "ko" ? Es(e) : Ds(e);
}), ks = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", As = () => "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.", js = () => "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.", Ms = () => "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.", Ns = () => "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.", Ps = () => "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.", Fs = () => "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。", Is = () => "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。", Ls = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", Rs = () => "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.", zs = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ks(e) : n === "fr" ? As(e) : n === "es" ? js(e) : n === "de" ? Ms(e) : n === "it" ? Ns(e) : n === "pt" ? Ps(e) : n === "zh" ? Fs(e) : n === "ja" ? Is(e) : n === "ko" ? Ls(e) : Rs(e);
}), Bs = () => "Understanding the Impact", Vs = () => "Comprendre l'impact", Hs = () => "Entendiendo el impacto", Us = () => "Die Auswirkungen verstehen", Ws = () => "Capire l'impatto", Gs = () => "Entendendo o impacto", Ks = () => "理解影响", qs = () => "影響を理解する", Js = () => "Understanding the Impact", Ys = () => "Понимание влияния", Xs = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Bs(e) : n === "fr" ? Vs(e) : n === "es" ? Hs(e) : n === "de" ? Us(e) : n === "it" ? Ws(e) : n === "pt" ? Gs(e) : n === "zh" ? Ks(e) : n === "ja" ? qs(e) : n === "ko" ? Js(e) : Ys(e);
}), Zs = () => "Why a single large JSON can hurt performance", Qs = () => "Pourquoi un unique gros JSON peut nuire aux performances", $s = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", ec = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", tc = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", nc = () => "Por que um único JSON grande pode prejudicar o desempenho", rc = () => "为什么单个大型 JSON 会损害性能", ic = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", ac = () => "Why a single large JSON can hurt performance", oc = () => "Почему один большой JSON может снизить производительность", sc = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Zs(e) : n === "fr" ? Qs(e) : n === "es" ? $s(e) : n === "de" ? ec(e) : n === "it" ? tc(e) : n === "pt" ? nc(e) : n === "zh" ? rc(e) : n === "ja" ? ic(e) : n === "ko" ? ac(e) : oc(e);
}), cc = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", lc = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", uc = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", dc = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", fc = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", pc = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", mc = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", hc = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", gc = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", _c = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", vc = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? cc(e) : n === "fr" ? lc(e) : n === "es" ? uc(e) : n === "de" ? dc(e) : n === "it" ? fc(e) : n === "pt" ? pc(e) : n === "zh" ? mc(e) : n === "ja" ? hc(e) : n === "ko" ? gc(e) : _c(e);
}), yc = () => "The JSON must be parsed on every page load — blocking the main thread.", bc = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", xc = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", Sc = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", Cc = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", wc = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", Tc = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", Ec = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", Dc = () => "The JSON must be parsed on every page load — blocking the main thread.", Oc = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", kc = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yc(e) : n === "fr" ? bc(e) : n === "es" ? xc(e) : n === "de" ? Sc(e) : n === "it" ? Cc(e) : n === "pt" ? wc(e) : n === "zh" ? Tc(e) : n === "ja" ? Ec(e) : n === "ko" ? Dc(e) : Oc(e);
}), Ac = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", jc = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", Mc = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", Nc = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", Pc = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", Fc = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", Ic = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", Lc = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", Rc = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", zc = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", Bc = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ac(e) : n === "fr" ? jc(e) : n === "es" ? Mc(e) : n === "de" ? Nc(e) : n === "it" ? Pc(e) : n === "pt" ? Fc(e) : n === "zh" ? Ic(e) : n === "ja" ? Lc(e) : n === "ko" ? Rc(e) : zc(e);
}), Vc = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Hc = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", Uc = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Wc = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", Gc = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", Kc = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", qc = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Jc = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Yc = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Xc = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", Zc = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Vc(e) : n === "fr" ? Hc(e) : n === "es" ? Uc(e) : n === "de" ? Wc(e) : n === "it" ? Gc(e) : n === "pt" ? Kc(e) : n === "zh" ? qc(e) : n === "ja" ? Jc(e) : n === "ko" ? Yc(e) : Xc(e);
}), Qc = () => "The trade-offs of dynamic loading", $c = () => "Les compromis du chargement dynamique", el = () => "Las compensaciones de la carga dinámica", tl = () => "Die Kompromisse beim dynamischen Laden", nl = () => "I compromessi del caricamento dinamico", rl = () => "Os trade-offs do carregamento dinâmico", il = () => "动态加载的权衡", al = () => "動的読み込みのトレードオフ", ol = () => "The trade-offs of dynamic loading", sl = () => "Компромиссы динамической загрузки", cl = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Qc(e) : n === "fr" ? $c(e) : n === "es" ? el(e) : n === "de" ? tl(e) : n === "it" ? nl(e) : n === "pt" ? rl(e) : n === "zh" ? il(e) : n === "ja" ? al(e) : n === "ko" ? ol(e) : sl(e);
}), ll = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", ul = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", dl = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", fl = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", pl = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", ml = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", hl = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", gl = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", _l = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", vl = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", yl = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ll(e) : n === "fr" ? ul(e) : n === "es" ? dl(e) : n === "de" ? fl(e) : n === "it" ? pl(e) : n === "pt" ? ml(e) : n === "zh" ? hl(e) : n === "ja" ? gl(e) : n === "ko" ? _l(e) : vl(e);
}), bl = () => "Waterfall requests:", xl = () => "Requêtes en cascade :", Sl = () => "Solicitudes en cascada:", Cl = () => "Waterfall-Anfragen:", wl = () => "Richieste a cascata:", Tl = () => "Requisições em cascata:", El = () => "瀑布流请求：", Dl = () => "ウォーターフォールリクエスト：", Ol = () => "Waterfall requests:", kl = () => "Каскадные запросы:", Al = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? bl(e) : n === "fr" ? xl(e) : n === "es" ? Sl(e) : n === "de" ? Cl(e) : n === "it" ? wl(e) : n === "pt" ? Tl(e) : n === "zh" ? El(e) : n === "ja" ? Dl(e) : n === "ko" ? Ol(e) : kl(e);
}), jl = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Ml = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", Nl = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", Pl = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", Fl = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", Il = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", Ll = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", Rl = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", zl = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Bl = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", Vl = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? jl(e) : n === "fr" ? Ml(e) : n === "es" ? Nl(e) : n === "de" ? Pl(e) : n === "it" ? Fl(e) : n === "pt" ? Il(e) : n === "zh" ? Ll(e) : n === "ja" ? Rl(e) : n === "ko" ? zl(e) : Bl(e);
}), Hl = () => "Flash of untranslated content (FOUC):", Ul = () => "Flash de contenu non traduit (FOUC) :", Wl = () => "Parpadeo de contenido no traducido (FOUC):", Gl = () => "Flash of Untranslated Content (FOUC):", Kl = () => "Flash di contenuti non tradotti (FOUC):", ql = () => "Flash de conteúdo não traduzido (FOUC):", Jl = () => "未翻译内容闪烁 (FOUC)：", Yl = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", Xl = () => "Flash of untranslated content (FOUC):", Zl = () => "Мерцание непереведенного контента (FOUC):", Ql = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Hl(e) : n === "fr" ? Ul(e) : n === "es" ? Wl(e) : n === "de" ? Gl(e) : n === "it" ? Kl(e) : n === "pt" ? ql(e) : n === "zh" ? Jl(e) : n === "ja" ? Yl(e) : n === "ko" ? Xl(e) : Zl(e);
}), $l = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", eu = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", tu = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", nu = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", ru = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", iu = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", au = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", ou = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", su = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", cu = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", lu = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $l(e) : n === "fr" ? eu(e) : n === "es" ? tu(e) : n === "de" ? nu(e) : n === "it" ? ru(e) : n === "pt" ? iu(e) : n === "zh" ? au(e) : n === "ja" ? ou(e) : n === "ko" ? su(e) : cu(e);
}), uu = () => "Cache invalidation:", du = () => "Invalidation du cache :", fu = () => "Invalidación de la caché:", pu = () => "Cache-Invalidierung:", mu = () => "Invalidazione della cache:", hu = () => "Invalidação de cache:", gu = () => "缓存失效：", _u = () => "キャッシュの無効化：", vu = () => "Cache invalidation:", yu = () => "Инвалидация кэша:", bu = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? uu(e) : n === "fr" ? du(e) : n === "es" ? fu(e) : n === "de" ? pu(e) : n === "it" ? mu(e) : n === "pt" ? hu(e) : n === "zh" ? gu(e) : n === "ja" ? _u(e) : n === "ko" ? vu(e) : yu(e);
}), xu = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", Su = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", Cu = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", wu = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", Tu = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", Eu = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", Du = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", Ou = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", ku = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", Au = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", ju = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xu(e) : n === "fr" ? Su(e) : n === "es" ? Cu(e) : n === "de" ? wu(e) : n === "it" ? Tu(e) : n === "pt" ? Eu(e) : n === "zh" ? Du(e) : n === "ja" ? Ou(e) : n === "ko" ? ku(e) : Au(e);
}), Mu = () => "What this benchmark measures", Nu = () => "Ce que mesure ce benchmark", Pu = () => "Qué mide este benchmark", Fu = () => "Was dieser Benchmark misst", Iu = () => "Cosa misura questo benchmark", Lu = () => "O que este benchmark mede", Ru = () => "此基准测试衡量的内容", zu = () => "このベンチマークが測定するもの", Bu = () => "What this benchmark measures", Vu = () => "Что измеряет этот бенчмарк", Hu = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Mu(e) : n === "fr" ? Nu(e) : n === "es" ? Pu(e) : n === "de" ? Fu(e) : n === "it" ? Iu(e) : n === "pt" ? Lu(e) : n === "zh" ? Ru(e) : n === "ja" ? zu(e) : n === "ko" ? Bu(e) : Vu(e);
}), Uu = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Wu = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", Gu = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Ku = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", qu = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Ju = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", Yu = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Xu = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Zu = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Qu = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", $u = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Uu(e) : n === "fr" ? Wu(e) : n === "es" ? Gu(e) : n === "de" ? Ku(e) : n === "it" ? qu(e) : n === "pt" ? Ju(e) : n === "zh" ? Yu(e) : n === "ja" ? Xu(e) : n === "ko" ? Zu(e) : Qu(e);
}), ed = () => "Sample Results", td = () => "Exemple de résultats", nd = () => "Resultados de muestra", rd = () => "Beispielergebnisse", id = () => "Risultati di esempio", ad = () => "Resultados de exemplo", od = () => "示例结果", sd = () => "サンプル結果", cd = () => "Sample Results", ld = () => "Примеры результатов", ud = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ed(e) : n === "fr" ? td(e) : n === "es" ? nd(e) : n === "de" ? rd(e) : n === "it" ? id(e) : n === "pt" ? ad(e) : n === "zh" ? od(e) : n === "ja" ? sd(e) : n === "ko" ? cd(e) : ld(e);
}), dd = () => "Library", fd = () => "Bibliothèque", pd = () => "Biblioteca", md = () => "Bibliothek", hd = () => "Libreria", gd = () => "Biblioteca", _d = () => "库", vd = () => "ライブラリ", yd = () => "Library", bd = () => "Библиотека", xd = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? dd(e) : n === "fr" ? fd(e) : n === "es" ? pd(e) : n === "de" ? md(e) : n === "it" ? hd(e) : n === "pt" ? gd(e) : n === "zh" ? _d(e) : n === "ja" ? vd(e) : n === "ko" ? yd(e) : bd(e);
}), Sd = () => "Bundle Size", Cd = () => "Taille du bundle", wd = () => "Tamaño del bundle", Td = () => "Bundle-Größe", Ed = () => "Dimensione del bundle", Dd = () => "Tamanho do Bundle", Od = () => "包大小", kd = () => "バンドルサイズ", Ad = () => "Bundle Size", jd = () => "Размер бандла", Md = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Sd(e) : n === "fr" ? Cd(e) : n === "es" ? wd(e) : n === "de" ? Td(e) : n === "it" ? Ed(e) : n === "pt" ? Dd(e) : n === "zh" ? Od(e) : n === "ja" ? kd(e) : n === "ko" ? Ad(e) : jd(e);
}), Nd = () => "Lookup Time", Pd = () => "Temps de recherche", Fd = () => "Tiempo de búsqueda", Id = () => "Lookup-Zeit", Ld = () => "Tempo di ricerca", Rd = () => "Tempo de Busca", zd = () => "查找时间", Bd = () => "ルックアップ時間", Vd = () => "Lookup Time", Hd = () => "Время поиска", Ud = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Nd(e) : n === "fr" ? Pd(e) : n === "es" ? Fd(e) : n === "de" ? Id(e) : n === "it" ? Ld(e) : n === "pt" ? Rd(e) : n === "zh" ? zd(e) : n === "ja" ? Bd(e) : n === "ko" ? Vd(e) : Hd(e);
}), Wd = () => "Lazy Loading", Gd = () => "Chargement paresseux", Kd = () => "Carga diferida", qd = () => "Lazy Loading", Jd = () => "Caricamento lazy", Yd = () => "Carregamento Lento", Xd = () => "延迟加载", Zd = () => "遅延読み込み", Qd = () => "Lazy Loading", $d = () => "Ленивая загрузка", ef = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Wd(e) : n === "fr" ? Gd(e) : n === "es" ? Kd(e) : n === "de" ? qd(e) : n === "it" ? Jd(e) : n === "pt" ? Yd(e) : n === "zh" ? Xd(e) : n === "ja" ? Zd(e) : n === "ko" ? Qd(e) : $d(e);
}), tf = () => "Yes", nf = () => "Oui", rf = () => "Sí", af = () => "Ja", of = () => "Sì", sf = () => "Sim", cf = () => "是", lf = () => "はい", uf = () => "Yes", df = () => "Да", ff = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? tf(e) : n === "fr" ? nf(e) : n === "es" ? rf(e) : n === "de" ? af(e) : n === "it" ? of(e) : n === "pt" ? sf(e) : n === "zh" ? cf(e) : n === "ja" ? lf(e) : n === "ko" ? uf(e) : df(e);
}), pf = () => "Manual", mf = () => "Manuel", hf = () => "Manual", gf = () => "Manuell", _f = () => "Manuale", vf = () => "Manual", yf = () => "手动", bf = () => "手動", xf = () => "Manual", Sf = () => "Вручную", Cf = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? pf(e) : n === "fr" ? mf(e) : n === "es" ? hf(e) : n === "de" ? gf(e) : n === "it" ? _f(e) : n === "pt" ? vf(e) : n === "zh" ? yf(e) : n === "ja" ? bf(e) : n === "ko" ? xf(e) : Sf(e);
}), wf = () => "Built-in", Tf = () => "Intégré", Ef = () => "Integrado", Df = () => "Integriert", Of = () => "Integrato", kf = () => "Integrado", Af = () => "内置", jf = () => "内蔵", Mf = () => "Built-in", Nf = () => "Встроено", Pf = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? wf(e) : n === "fr" ? Tf(e) : n === "es" ? Ef(e) : n === "de" ? Df(e) : n === "it" ? Of(e) : n === "pt" ? kf(e) : n === "zh" ? Af(e) : n === "ja" ? jf(e) : n === "ko" ? Mf(e) : Nf(e);
}), Ff = () => "About This Benchmark", If = () => "À propos de ce benchmark", Lf = () => "Acerca de este benchmark", Rf = () => "Über diesen Benchmark", zf = () => "Informazioni su questo benchmark", Bf = () => "Sobre este benchmark", Vf = () => "关于此基准测试", Hf = () => "このベンチマークについて", Uf = () => "About This Benchmark", Wf = () => "Об этом бенчмарке", Gf = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ff(e) : n === "fr" ? If(e) : n === "es" ? Lf(e) : n === "de" ? Rf(e) : n === "it" ? zf(e) : n === "pt" ? Bf(e) : n === "zh" ? Vf(e) : n === "ja" ? Hf(e) : n === "ko" ? Uf(e) : Wf(e);
}), Kf = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", qf = () => "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.", Jf = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", Yf = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.", Xf = () => "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", Zf = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.", Qf = () => "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。", $f = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。", ep = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", tp = () => "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", np = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Kf(e) : n === "fr" ? qf(e) : n === "es" ? Jf(e) : n === "de" ? Yf(e) : n === "it" ? Xf(e) : n === "pt" ? Zf(e) : n === "zh" ? Qf(e) : n === "ja" ? $f(e) : n === "ko" ? ep(e) : tp(e);
}), rp = () => "Why This Exists", ip = () => "Pourquoi ce projet existe", ap = () => "Por qué existe esto", op = () => "Warum dies existiert", sp = () => "Perché esiste", cp = () => "Por que isto existe", lp = () => "为什么存在这个测试", up = () => "なぜこれが存在するのか", dp = () => "Why This Exists", fp = () => "Зачем это нужно", pp = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? rp(e) : n === "fr" ? ip(e) : n === "es" ? ap(e) : n === "de" ? op(e) : n === "it" ? sp(e) : n === "pt" ? cp(e) : n === "zh" ? lp(e) : n === "ja" ? up(e) : n === "ko" ? dp(e) : fp(e);
}), mp = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", hp = () => "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.", gp = () => "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.", _p = () => "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.", vp = () => "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.", yp = () => "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.", bp = () => "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。", xp = () => "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。", Sp = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", Cp = () => "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.", wp = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? mp(e) : n === "fr" ? hp(e) : n === "es" ? gp(e) : n === "de" ? _p(e) : n === "it" ? vp(e) : n === "pt" ? yp(e) : n === "zh" ? bp(e) : n === "ja" ? xp(e) : n === "ko" ? Sp(e) : Cp(e);
}), Tp = () => "Methodology", Ep = () => "Méthodologie", Dp = () => "Metodología", Op = () => "Methodik", kp = () => "Metodologia", Ap = () => "Metodologia", jp = () => "方法论", Mp = () => "手法", Np = () => "Methodology", Pp = () => "Методология", Fp = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Tp(e) : n === "fr" ? Ep(e) : n === "es" ? Dp(e) : n === "de" ? Op(e) : n === "it" ? kp(e) : n === "pt" ? Ap(e) : n === "zh" ? jp(e) : n === "ja" ? Mp(e) : n === "ko" ? Np(e) : Pp(e);
}), Ip = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", Lp = () => "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.", Rp = () => "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.", zp = () => "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.", Bp = () => "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.", Vp = () => "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.", Hp = () => "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。", Up = () => "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。", Wp = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", Gp = () => "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.", Kp = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ip(e) : n === "fr" ? Lp(e) : n === "es" ? Rp(e) : n === "de" ? zp(e) : n === "it" ? Bp(e) : n === "pt" ? Vp(e) : n === "zh" ? Hp(e) : n === "ja" ? Up(e) : n === "ko" ? Wp(e) : Gp(e);
}), qp = () => "What We Measure", Jp = () => "Ce que nous mesurons", Yp = () => "Qué medimos", Xp = () => "Was wir messen", Zp = () => "Cosa misuriamo", Qp = () => "O que medimos", $p = () => "衡量指标", em = () => "測定項目", tm = () => "What We Measure", nm = () => "Что мы измеряем", rm = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? qp(e) : n === "fr" ? Jp(e) : n === "es" ? Yp(e) : n === "de" ? Xp(e) : n === "it" ? Zp(e) : n === "pt" ? Qp(e) : n === "zh" ? $p(e) : n === "ja" ? em(e) : n === "ko" ? tm(e) : nm(e);
}), im = () => "Bundle size impact", am = () => "Impact sur la taille du bundle", om = () => "Impacto en el tamaño del bundle", sm = () => "Auswirkungen auf die Bundle-Größe", cm = () => "Impatto sulla dimensione del bundle", lm = () => "Impacto no tamanho do bundle", um = () => "包大小影响", dm = () => "バンドルサイズへの影響", fm = () => "Bundle size impact", pm = () => "Влияние на размер бандла", mm = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? im(e) : n === "fr" ? am(e) : n === "es" ? om(e) : n === "de" ? sm(e) : n === "it" ? cm(e) : n === "pt" ? lm(e) : n === "zh" ? um(e) : n === "ja" ? dm(e) : n === "ko" ? fm(e) : pm(e);
}), hm = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", gm = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.", _m = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", vm = () => "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.", ym = () => "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.", bm = () => "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", xm = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", Sm = () => "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。", Cm = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", wm = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", Tm = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? hm(e) : n === "fr" ? gm(e) : n === "es" ? _m(e) : n === "de" ? vm(e) : n === "it" ? ym(e) : n === "pt" ? bm(e) : n === "zh" ? xm(e) : n === "ja" ? Sm(e) : n === "ko" ? Cm(e) : wm(e);
}), Em = () => "Rendering overhead", Dm = () => "Surcharge de rendu", Om = () => "Sobrecarga de renderizado", km = () => "Rendering-Overhead", Am = () => "Sovrapprezzo di rendering", jm = () => "Sobrecarga de renderização", Mm = () => "渲染开销", Nm = () => "レンダリングのオーバーヘッド", Pm = () => "Rendering overhead", Fm = () => "Накладные расходы на рендеринг", Im = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Em(e) : n === "fr" ? Dm(e) : n === "es" ? Om(e) : n === "de" ? km(e) : n === "it" ? Am(e) : n === "pt" ? jm(e) : n === "zh" ? Mm(e) : n === "ja" ? Nm(e) : n === "ko" ? Pm(e) : Fm(e);
}), Lm = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Rm = () => "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.", zm = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.", Bm = () => "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", Vm = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", Hm = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", Um = () => "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。", Wm = () => "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", Gm = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Km = () => "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.", qm = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Lm(e) : n === "fr" ? Rm(e) : n === "es" ? zm(e) : n === "de" ? Bm(e) : n === "it" ? Vm(e) : n === "pt" ? Hm(e) : n === "zh" ? Um(e) : n === "ja" ? Wm(e) : n === "ko" ? Gm(e) : Km(e);
}), Jm = () => "Hydration cost", Ym = () => "Coût d'hydratation", Xm = () => "Coste de hidratación", Zm = () => "Hydrierungskosten", Qm = () => "Costo di idratazione", $m = () => "Custo de hidratação", eh = () => "注水成本", th = () => "ハイドレーションコスト", nh = () => "Hydration cost", rh = () => "Стоимость гидратации", ih = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Jm(e) : n === "fr" ? Ym(e) : n === "es" ? Xm(e) : n === "de" ? Zm(e) : n === "it" ? Qm(e) : n === "pt" ? $m(e) : n === "zh" ? eh(e) : n === "ja" ? th(e) : n === "ko" ? nh(e) : rh(e);
}), ah = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", oh = () => "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.", sh = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", ch = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.", lh = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", uh = () => "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.", dh = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。", fh = () => "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。", ph = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", mh = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", hh = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ah(e) : n === "fr" ? oh(e) : n === "es" ? sh(e) : n === "de" ? ch(e) : n === "it" ? lh(e) : n === "pt" ? uh(e) : n === "zh" ? dh(e) : n === "ja" ? fh(e) : n === "ko" ? ph(e) : mh(e);
}), gh = () => "Lazy loading effectiveness", _h = () => "Efficacité du chargement paresseux", vh = () => "Eficacia de la carga diferida", yh = () => "Effektivität von Lazy Loading", bh = () => "Efficacia del caricamento pigro", xh = () => "Eficácia do carregamento lento", Sh = () => "延迟加载有效性", Ch = () => "遅延読み込みの有効性", wh = () => "Lazy loading effectiveness", Th = () => "Эффективность ленивой загрузки", Eh = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? gh(e) : n === "fr" ? _h(e) : n === "es" ? vh(e) : n === "de" ? yh(e) : n === "it" ? bh(e) : n === "pt" ? xh(e) : n === "zh" ? Sh(e) : n === "ja" ? Ch(e) : n === "ko" ? wh(e) : Th(e);
}), Dh = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Oh = () => "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?", kh = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", Ah = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", jh = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", Mh = () => "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).", Nh = () => "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", Ph = () => "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。", Fh = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Ih = () => "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).", Lh = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Dh(e) : n === "fr" ? Oh(e) : n === "es" ? kh(e) : n === "de" ? Ah(e) : n === "it" ? jh(e) : n === "pt" ? Mh(e) : n === "zh" ? Nh(e) : n === "ja" ? Ph(e) : n === "ko" ? Fh(e) : Ih(e);
}), Rh = () => "Locale switch speed", zh = () => "Vitesse de changement de langue", Bh = () => "Velocidad de cambio de idioma", Vh = () => "Geschwindigkeit des Sprachwechsels", Hh = () => "Velocità di cambio lingua", Uh = () => "Velocidade de troca de localidade", Wh = () => "语言环境切换速度", Gh = () => "ロケール切り替え速度", Kh = () => "Locale switch speed", qh = () => "Скорость переключения языка", Jh = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Rh(e) : n === "fr" ? zh(e) : n === "es" ? Bh(e) : n === "de" ? Vh(e) : n === "it" ? Hh(e) : n === "pt" ? Uh(e) : n === "zh" ? Wh(e) : n === "ja" ? Gh(e) : n === "ko" ? Kh(e) : qh(e);
}), Yh = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", Xh = () => "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.", Zh = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", Qh = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", $h = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", eg = () => "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.", tg = () => "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。", ng = () => "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", rg = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", ig = () => "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", ag = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Yh(e) : n === "fr" ? Xh(e) : n === "es" ? Zh(e) : n === "de" ? Qh(e) : n === "it" ? $h(e) : n === "pt" ? eg(e) : n === "zh" ? tg(e) : n === "ja" ? ng(e) : n === "ko" ? rg(e) : ig(e);
}), og = () => "Blog", sg = () => "Blog", cg = () => "Blog", lg = () => "Blog", ug = () => "Blog", dg = () => "Blog", fg = () => "博客", pg = () => "ブログ", mg = () => "Blog", hg = () => "Блог", gg = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? og(e) : n === "fr" ? sg(e) : n === "es" ? cg(e) : n === "de" ? lg(e) : n === "it" ? ug(e) : n === "pt" ? dg(e) : n === "zh" ? fg(e) : n === "ja" ? pg(e) : n === "ko" ? mg(e) : hg(e);
}), _g = () => "Insights, tutorials, and analysis from the i18n community.", vg = () => "Articles, tutoriels et analyses de la communauté i18n.", yg = () => "Información, tutoriales y análisis de la comunidad i18n.", bg = () => "Einblicke, Tutorials und Analysen aus der i18n-Community.", xg = () => "Approfondimenti, tutorial e analisi dalla comunità i18n.", Sg = () => "Insights, tutoriais e análises da comunidade i18n.", Cg = () => "来自 i18n 社区的见解、教程和分析。", wg = () => "i18nコミュニティからのインサイト、チュートリアル、分析。", Tg = () => "Insights, tutorials, and analysis from the i18n community.", Eg = () => "Инсайты, туториалы и аналитика от сообщества i18n.", Dg = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _g(e) : n === "fr" ? vg(e) : n === "es" ? yg(e) : n === "de" ? bg(e) : n === "it" ? xg(e) : n === "pt" ? Sg(e) : n === "zh" ? Cg(e) : n === "ja" ? wg(e) : n === "ko" ? Tg(e) : Eg(e);
}), Og = () => "Read More →", kg = () => "Lire la suite →", Ag = () => "Leer más →", jg = () => "Mehr lesen →", Mg = () => "Leggi di più →", Ng = () => "Ler Mais →", Pg = () => "阅读更多 →", Fg = () => "続きを読む →", Ig = () => "Read More →", Lg = () => "Читать далее →", Rg = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Og(e) : n === "fr" ? kg(e) : n === "es" ? Ag(e) : n === "de" ? jg(e) : n === "it" ? Mg(e) : n === "pt" ? Ng(e) : n === "zh" ? Pg(e) : n === "ja" ? Fg(e) : n === "ko" ? Ig(e) : Lg(e);
}), zg = () => "Comparing i18n Libraries in 2026: A Deep Dive", Bg = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", Vg = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", Hg = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", Ug = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", Wg = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", Gg = () => "2026 年 i18n 库对比：深度分析", Kg = () => "2026年のi18nライブラリ比較：ディープダイブ", qg = () => "Comparing i18n Libraries in 2026: A Deep Dive", Jg = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", Yg = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zg(e) : n === "fr" ? Bg(e) : n === "es" ? Vg(e) : n === "de" ? Hg(e) : n === "it" ? Ug(e) : n === "pt" ? Wg(e) : n === "zh" ? Gg(e) : n === "ja" ? Kg(e) : n === "ko" ? qg(e) : Jg(e);
}), Xg = () => "March 15, 2026", Zg = () => "15 mars 2026", Qg = () => "15 de marzo de 2026", $g = () => "15. März 2026", e_ = () => "15 marzo 2026", t_ = () => "15 de março de 2026", n_ = () => "2026年3月15日", r_ = () => "2026年3月15日", i_ = () => "March 15, 2026", a_ = () => "15 марта 2026 г.", o_ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xg(e) : n === "fr" ? Zg(e) : n === "es" ? Qg(e) : n === "de" ? $g(e) : n === "it" ? e_(e) : n === "pt" ? t_(e) : n === "zh" ? n_(e) : n === "ja" ? r_(e) : n === "ko" ? i_(e) : a_(e);
}), s_ = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", c_ = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", l_ = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", u_ = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", d_ = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", f_ = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", p_ = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", m_ = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", h_ = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", g_ = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", __ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? s_(e) : n === "fr" ? c_(e) : n === "es" ? l_(e) : n === "de" ? u_(e) : n === "it" ? d_(e) : n === "pt" ? f_(e) : n === "zh" ? p_(e) : n === "ja" ? m_(e) : n === "ko" ? h_(e) : g_(e);
}), v_ = () => "Benchmark", y_ = () => "Benchmark", b_ = () => "Benchmark", x_ = () => "Benchmark", S_ = () => "Benchmark", C_ = () => "Benchmark", w_ = () => "基准测试", T_ = () => "ベンチマーク", E_ = () => "Benchmark", D_ = () => "Бенчмарк", O_ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? v_(e) : n === "fr" ? y_(e) : n === "es" ? b_(e) : n === "de" ? x_(e) : n === "it" ? S_(e) : n === "pt" ? C_(e) : n === "zh" ? w_(e) : n === "ja" ? T_(e) : n === "ko" ? E_(e) : D_(e);
}), k_ = () => "How to Reduce Your i18n Bundle by 60%", A_ = () => "Réduire votre bundle i18n de 60 %", j_ = () => "Cómo reducir tu bundle i18n en un 60%", M_ = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", N_ = () => "Come ridurre il bundle i18n del 60%", P_ = () => "Como reduzir seu bundle i18n em 60%", F_ = () => "如何将 i18n 包大小减少 60%", I_ = () => "i18nバンドルを60%削減する方法", L_ = () => "How to Reduce Your i18n Bundle by 60%", R_ = () => "Как уменьшить бандл i18n на 60%", z_ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? k_(e) : n === "fr" ? A_(e) : n === "es" ? j_(e) : n === "de" ? M_(e) : n === "it" ? N_(e) : n === "pt" ? P_(e) : n === "zh" ? F_(e) : n === "ja" ? I_(e) : n === "ko" ? L_(e) : R_(e);
}), B_ = () => "March 8, 2026", V_ = () => "8 mars 2026", H_ = () => "8 de marzo de 2026", U_ = () => "8. März 2026", W_ = () => "8 marzo 2026", G_ = () => "8 de março de 2026", K_ = () => "2026年3月8日", q_ = () => "2026年3月8日", J_ = () => "March 8, 2026", Y_ = () => "8 марта 2026 г.", X_ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? B_(e) : n === "fr" ? V_(e) : n === "es" ? H_(e) : n === "de" ? U_(e) : n === "it" ? W_(e) : n === "pt" ? G_(e) : n === "zh" ? K_(e) : n === "ja" ? q_(e) : n === "ko" ? J_(e) : Y_(e);
}), Z_ = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Q_ = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", $_ = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", ev = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", tv = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", nv = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", rv = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", iv = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", av = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", ov = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", sv = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Z_(e) : n === "fr" ? Q_(e) : n === "es" ? $_(e) : n === "de" ? ev(e) : n === "it" ? tv(e) : n === "pt" ? nv(e) : n === "zh" ? rv(e) : n === "ja" ? iv(e) : n === "ko" ? av(e) : ov(e);
}), cv = () => "Tutorial", lv = () => "Tutoriel", uv = () => "Tutorial", dv = () => "Tutorial", fv = () => "Tutorial", pv = () => "Tutorial", mv = () => "教程", hv = () => "チュートリアル", gv = () => "Tutorial", _v = () => "Туториал", vv = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? cv(e) : n === "fr" ? lv(e) : n === "es" ? uv(e) : n === "de" ? dv(e) : n === "it" ? fv(e) : n === "pt" ? pv(e) : n === "zh" ? mv(e) : n === "ja" ? hv(e) : n === "ko" ? gv(e) : _v(e);
}), yv = () => "The State of Internationalization in React", bv = () => "État de l'internationalisation dans l'écosystème React", xv = () => "El estado de la internacionalización en React", Sv = () => "Der Stand der Internationalisierung in React", Cv = () => "Lo stato dell'internazionalizzazione in React", wv = () => "O estado da internacionalização no React", Tv = () => "React 国际化现状", Ev = () => "Reactにおける国際化の現状", Dv = () => "The State of Internationalization in React", Ov = () => "Состояние интернационализации в React", kv = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yv(e) : n === "fr" ? bv(e) : n === "es" ? xv(e) : n === "de" ? Sv(e) : n === "it" ? Cv(e) : n === "pt" ? wv(e) : n === "zh" ? Tv(e) : n === "ja" ? Ev(e) : n === "ko" ? Dv(e) : Ov(e);
}), Av = () => "February 28, 2026", jv = () => "28 février 2026", Mv = () => "28 de febrero de 2026", Nv = () => "28. Februar 2026", Pv = () => "28 febbraio 2026", Fv = () => "28 de fevereiro de 2026", Iv = () => "2026年2月28日", Lv = () => "2026年2月28日", Rv = () => "February 28, 2026", zv = () => "28 февраля 2026 г.", Bv = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Av(e) : n === "fr" ? jv(e) : n === "es" ? Mv(e) : n === "de" ? Nv(e) : n === "it" ? Pv(e) : n === "pt" ? Fv(e) : n === "zh" ? Iv(e) : n === "ja" ? Lv(e) : n === "ko" ? Rv(e) : zv(e);
}), Vv = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Hv = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Uv = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Wv = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Gv = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Kv = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", qv = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Jv = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Yv = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Xv = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Zv = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Vv(e) : n === "fr" ? Hv(e) : n === "es" ? Uv(e) : n === "de" ? Wv(e) : n === "it" ? Gv(e) : n === "pt" ? Kv(e) : n === "zh" ? qv(e) : n === "ja" ? Jv(e) : n === "ko" ? Yv(e) : Xv(e);
}), Qv = () => "Analysis", $v = () => "Analyse", ey = () => "Análisis", ty = () => "Analyse", ny = () => "Analisi", ry = () => "Análise", iy = () => "分析", ay = () => "分析", oy = () => "Analysis", sy = () => "Анализ", cy = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Qv(e) : n === "fr" ? $v(e) : n === "es" ? ey(e) : n === "de" ? ty(e) : n === "it" ? ny(e) : n === "pt" ? ry(e) : n === "zh" ? iy(e) : n === "ja" ? ay(e) : n === "ko" ? oy(e) : sy(e);
}), ly = () => "Migrating from react-i18next to Lingui", uy = () => "Migrer de react-i18next vers Lingui", dy = () => "Migración de react-i18next a Lingui", fy = () => "Migration von react-i18next zu Lingui", py = () => "Migrazione da react-i18next a Lingui", my = () => "Migrando de react-i18next para o Lingui", hy = () => "从 react-i18next 迁移到 Lingui", gy = () => "react-i18nextからLinguiへの移行", _y = () => "Migrating from react-i18next to Lingui", vy = () => "Миграция с react-i18next на Lingui", yy = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ly(e) : n === "fr" ? uy(e) : n === "es" ? dy(e) : n === "de" ? fy(e) : n === "it" ? py(e) : n === "pt" ? my(e) : n === "zh" ? hy(e) : n === "ja" ? gy(e) : n === "ko" ? _y(e) : vy(e);
}), by = () => "February 15, 2026", xy = () => "15 février 2026", Sy = () => "15 de febrero de 2026", Cy = () => "15. Februar 2026", wy = () => "15 febbraio 2026", Ty = () => "15 de fevereiro de 2026", Ey = () => "2026年2月15日", Dy = () => "2026年2月15日", Oy = () => "February 15, 2026", ky = () => "15 февраля 2026 г.", Ay = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? by(e) : n === "fr" ? xy(e) : n === "es" ? Sy(e) : n === "de" ? Cy(e) : n === "it" ? wy(e) : n === "pt" ? Ty(e) : n === "zh" ? Ey(e) : n === "ja" ? Dy(e) : n === "ko" ? Oy(e) : ky(e);
}), jy = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", My = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Ny = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Py = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Fy = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Iy = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Ly = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Ry = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", zy = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", By = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Vy = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? jy(e) : n === "fr" ? My(e) : n === "es" ? Ny(e) : n === "de" ? Py(e) : n === "it" ? Fy(e) : n === "pt" ? Iy(e) : n === "zh" ? Ly(e) : n === "ja" ? Ry(e) : n === "ko" ? zy(e) : By(e);
}), Hy = () => "Tutorial", Uy = () => "Tutoriel", Wy = () => "Tutorial", Gy = () => "Tutorial", Ky = () => "Tutorial", qy = () => "Tutorial", Jy = () => "教程", Yy = () => "チュートリアル", Xy = () => "Tutorial", Zy = () => "Туториал", Qy = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Hy(e) : n === "fr" ? Uy(e) : n === "es" ? Wy(e) : n === "de" ? Gy(e) : n === "it" ? Ky(e) : n === "pt" ? qy(e) : n === "zh" ? Jy(e) : n === "ja" ? Yy(e) : n === "ko" ? Xy(e) : Zy(e);
}), $y = () => "Server Components and i18n: What Changes?", eb = () => "Server Components et i18n : qu'est-ce qui change ?", tb = () => "Server Components e i18n: ¿Qué cambia?", nb = () => "Server Components und i18n: Was ändert sich?", rb = () => "Server Components e i18n: cosa cambia?", ib = () => "Server Components e i18n: o que muda?", ab = () => "Server Components 与 i18n：发生了什么变化？", ob = () => "Server Componentsとi18n：何が変わるのか？", sb = () => "Server Components and i18n: What Changes?", cb = () => "Server Components и i18n: что меняется?", lb = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $y(e) : n === "fr" ? eb(e) : n === "es" ? tb(e) : n === "de" ? nb(e) : n === "it" ? rb(e) : n === "pt" ? ib(e) : n === "zh" ? ab(e) : n === "ja" ? ob(e) : n === "ko" ? sb(e) : cb(e);
}), ub = () => "February 1, 2026", db = () => "1er février 2026", fb = () => "1 de febrero de 2026", pb = () => "1. Februar 2026", mb = () => "1 febbraio 2026", hb = () => "1 de fevereiro de 2026", gb = () => "2026年2月1日", _b = () => "2026年2月1日", vb = () => "February 1, 2026", yb = () => "1 февраля 2026 г.", bb = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ub(e) : n === "fr" ? db(e) : n === "es" ? fb(e) : n === "de" ? pb(e) : n === "it" ? mb(e) : n === "pt" ? hb(e) : n === "zh" ? gb(e) : n === "ja" ? _b(e) : n === "ko" ? vb(e) : yb(e);
}), xb = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Sb = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", Cb = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", wb = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Tb = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Eb = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Db = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Ob = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", kb = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Ab = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", jb = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xb(e) : n === "fr" ? Sb(e) : n === "es" ? Cb(e) : n === "de" ? wb(e) : n === "it" ? Tb(e) : n === "pt" ? Eb(e) : n === "zh" ? Db(e) : n === "ja" ? Ob(e) : n === "ko" ? kb(e) : Ab(e);
}), Mb = () => "Analysis", Nb = () => "Analyse", Pb = () => "Análisis", Fb = () => "Analyse", Ib = () => "Analisi", Lb = () => "Análise", Rb = () => "分析", zb = () => "分析", Bb = () => "Analysis", Vb = () => "Анализ", Hb = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Mb(e) : n === "fr" ? Nb(e) : n === "es" ? Pb(e) : n === "de" ? Fb(e) : n === "it" ? Ib(e) : n === "pt" ? Lb(e) : n === "zh" ? Rb(e) : n === "ja" ? zb(e) : n === "ko" ? Bb(e) : Vb(e);
}), Ub = () => "Benchmark Methodology: How We Test", Wb = () => "Méthodologie de benchmark : comment nous testons", Gb = () => "Metodología de benchmark: Cómo probamos", Kb = () => "Benchmark-Methodik: Wie wir testen", qb = () => "Metodologia del benchmark: come testiamo", Jb = () => "Metodologia de benchmark: como testamos", Yb = () => "基准测试方法论：我们如何测试", Xb = () => "ベンチマーク手法：テスト方法について", Zb = () => "Benchmark Methodology: How We Test", Qb = () => "Методология бенчмарка: как мы тестируем", $b = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ub(e) : n === "fr" ? Wb(e) : n === "es" ? Gb(e) : n === "de" ? Kb(e) : n === "it" ? qb(e) : n === "pt" ? Jb(e) : n === "zh" ? Yb(e) : n === "ja" ? Xb(e) : n === "ko" ? Zb(e) : Qb(e);
}), ex = () => "January 20, 2026", tx = () => "20 janvier 2026", nx = () => "20 de enero de 2026", rx = () => "20. Januar 2026", ix = () => "20 gennaio 2026", ax = () => "20 de janeiro de 2026", ox = () => "2026年1月20日", sx = () => "2026年1月20日", cx = () => "January 20, 2026", lx = () => "20 января 2026 г.", ux = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ex(e) : n === "fr" ? tx(e) : n === "es" ? nx(e) : n === "de" ? rx(e) : n === "it" ? ix(e) : n === "pt" ? ax(e) : n === "zh" ? ox(e) : n === "ja" ? sx(e) : n === "ko" ? cx(e) : lx(e);
}), dx = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", fx = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", px = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", mx = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", hx = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", gx = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", _x = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", vx = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", yx = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", bx = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", xx = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? dx(e) : n === "fr" ? fx(e) : n === "es" ? px(e) : n === "de" ? mx(e) : n === "it" ? hx(e) : n === "pt" ? gx(e) : n === "zh" ? _x(e) : n === "ja" ? vx(e) : n === "ko" ? yx(e) : bx(e);
}), Sx = () => "Meta", Cx = () => "Méta", wx = () => "Meta", Tx = () => "Meta", Ex = () => "Meta", Dx = () => "Meta", Ox = () => "Meta", kx = () => "メタ", Ax = () => "Meta", jx = () => "Мета", Mx = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Sx(e) : n === "fr" ? Cx(e) : n === "es" ? wx(e) : n === "de" ? Tx(e) : n === "it" ? Ex(e) : n === "pt" ? Dx(e) : n === "zh" ? Ox(e) : n === "ja" ? kx(e) : n === "ko" ? Ax(e) : jx(e);
}), Nx = () => "Careers", Px = () => "Carrières", Fx = () => "Carreras", Ix = () => "Karriere", Lx = () => "Carriere", Rx = () => "Carreiras", zx = () => "招聘", Bx = () => "採用情報", Vx = () => "Careers", Hx = () => "Вакансии", Ux = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Nx(e) : n === "fr" ? Px(e) : n === "es" ? Fx(e) : n === "de" ? Ix(e) : n === "it" ? Lx(e) : n === "pt" ? Rx(e) : n === "zh" ? zx(e) : n === "ja" ? Bx(e) : n === "ko" ? Vx(e) : Hx(e);
}), Wx = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", Gx = () => "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.", Kx = () => "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.", qx = () => "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.", Jx = () => "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.", Yx = () => "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.", Xx = () => "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。", Zx = () => "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。", Qx = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", $x = () => "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.", eS = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Wx(e) : n === "fr" ? Gx(e) : n === "es" ? Kx(e) : n === "de" ? qx(e) : n === "it" ? Jx(e) : n === "pt" ? Yx(e) : n === "zh" ? Xx(e) : n === "ja" ? Zx(e) : n === "ko" ? Qx(e) : $x(e);
}), tS = () => "Remote-first", nS = () => "Remote-first", rS = () => "Remoto primero", iS = () => "Remote-First", aS = () => "Remote-first", oS = () => "Remoto primeiro", sS = () => "远程优先", cS = () => "リモートファースト", lS = () => "Remote-first", uS = () => "Удаленная работа", dS = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? tS(e) : n === "fr" ? nS(e) : n === "es" ? rS(e) : n === "de" ? iS(e) : n === "it" ? aS(e) : n === "pt" ? oS(e) : n === "zh" ? sS(e) : n === "ja" ? cS(e) : n === "ko" ? lS(e) : uS(e);
}), fS = () => "Work from anywhere in the world", pS = () => "Travaillez depuis n'importe où", mS = () => "Trabaja desde cualquier lugar del mundo", hS = () => "Arbeiten Sie von überall auf der Welt", gS = () => "Lavora da qualsiasi parte del mondo", _S = () => "Trabalhe de qualquer lugar do mundo", vS = () => "在世界任何地方工作", yS = () => "世界中のどこからでも仕事ができます", bS = () => "Work from anywhere in the world", xS = () => "Работайте из любой точки мира", SS = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? fS(e) : n === "fr" ? pS(e) : n === "es" ? mS(e) : n === "de" ? hS(e) : n === "it" ? gS(e) : n === "pt" ? _S(e) : n === "zh" ? vS(e) : n === "ja" ? yS(e) : n === "ko" ? bS(e) : xS(e);
}), CS = () => "Competitive pay", wS = () => "Rémunération compétitive", TS = () => "Salario competitivo", ES = () => "Wettbewerbsfähige Bezahlung", DS = () => "Retribuzione competitiva", OS = () => "Salário competitivo", kS = () => "具有竞争力的薪酬", AS = () => "競争力のある給与", jS = () => "Competitive pay", MS = () => "Конкурентная зарплата", NS = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? CS(e) : n === "fr" ? wS(e) : n === "es" ? TS(e) : n === "de" ? ES(e) : n === "it" ? DS(e) : n === "pt" ? OS(e) : n === "zh" ? kS(e) : n === "ja" ? AS(e) : n === "ko" ? jS(e) : MS(e);
}), PS = () => "Top-of-market compensation", FS = () => "Fourchettes haut de marché", IS = () => "Compensación superior a la del mercado", LS = () => "Überdurchschnittliche Vergütung", RS = () => "Compensazione ai vertici del mercato", zS = () => "Remuneração acima do mercado", BS = () => "市场顶尖的薪资水平", VS = () => "市場トップクラスの報酬", HS = () => "Top-of-market compensation", US = () => "Вознаграждение выше рыночного", WS = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? PS(e) : n === "fr" ? FS(e) : n === "es" ? IS(e) : n === "de" ? LS(e) : n === "it" ? RS(e) : n === "pt" ? zS(e) : n === "zh" ? BS(e) : n === "ja" ? VS(e) : n === "ko" ? HS(e) : US(e);
}), GS = () => "Open source time", KS = () => "Temps open source", qS = () => "Tiempo para el código abierto", JS = () => "Open-Source-Zeit", YS = () => "Tempo per l'open source", XS = () => "Tempo para o código aberto", ZS = () => "开源时间", QS = () => "オープンソースの時間", $S = () => "Open source time", eC = () => "Время на open source", tC = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? GS(e) : n === "fr" ? KS(e) : n === "es" ? qS(e) : n === "de" ? JS(e) : n === "it" ? YS(e) : n === "pt" ? XS(e) : n === "zh" ? ZS(e) : n === "ja" ? QS(e) : n === "ko" ? $S(e) : eC(e);
}), nC = () => "20% time for OSS contributions", rC = () => "20 % du temps pour contribuer à l'OSS", iC = () => "20% del tiempo para contribuciones a OSS", aC = () => "20 % der Zeit für OSS-Beiträge", oC = () => "20% del tempo per contributi open source", sC = () => "20% do tempo para contribuições OSS", cC = () => "20% 的时间用于 OSS 贡献", lC = () => "時間の20%をOSSへの貢献に", uC = () => "20% time for OSS contributions", dC = () => "20% времени на вклад в OSS", fC = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? nC(e) : n === "fr" ? rC(e) : n === "es" ? iC(e) : n === "de" ? aC(e) : n === "it" ? oC(e) : n === "pt" ? sC(e) : n === "zh" ? cC(e) : n === "ja" ? lC(e) : n === "ko" ? uC(e) : dC(e);
}), pC = () => "Open Positions", mC = () => "Postes ouverts", hC = () => "Puestos vacantes", gC = () => "Offene Stellen", _C = () => "Posizioni aperte", vC = () => "Vagas abertas", yC = () => "开放职位", bC = () => "募集中の職種", xC = () => "Open Positions", SC = () => "Открытые вакансии", CC = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? pC(e) : n === "fr" ? mC(e) : n === "es" ? hC(e) : n === "de" ? gC(e) : n === "it" ? _C(e) : n === "pt" ? vC(e) : n === "zh" ? yC(e) : n === "ja" ? bC(e) : n === "ko" ? xC(e) : SC(e);
}), wC = () => "Apply Now", TC = () => "Postuler", EC = () => "Postular ahora", DC = () => "Jetzt bewerben", OC = () => "Candidati ora", kC = () => "Candidatar-se agora", AC = () => "立即申请", jC = () => "今すぐ応募", MC = () => "Apply Now", NC = () => "Подать заявку", PC = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? wC(e) : n === "fr" ? TC(e) : n === "es" ? EC(e) : n === "de" ? DC(e) : n === "it" ? OC(e) : n === "pt" ? kC(e) : n === "zh" ? AC(e) : n === "ja" ? jC(e) : n === "ko" ? MC(e) : NC(e);
}), FC = () => "Remote", IC = () => "À distance", LC = () => "Remoto", RC = () => "Remote", zC = () => "Remoto", BC = () => "Remoto", VC = () => "远程", HC = () => "リモート", UC = () => "Remote", WC = () => "Удаленно", GC = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? FC(e) : n === "fr" ? IC(e) : n === "es" ? LC(e) : n === "de" ? RC(e) : n === "it" ? zC(e) : n === "pt" ? BC(e) : n === "zh" ? VC(e) : n === "ja" ? HC(e) : n === "ko" ? UC(e) : WC(e);
}), KC = () => "Full-time", qC = () => "Temps plein", JC = () => "Tiempo completo", YC = () => "Vollzeit", XC = () => "Tempo pieno", ZC = () => "Tempo integral", QC = () => "全职", $C = () => "フルタイム", ew = () => "Full-time", tw = () => "Полная занятость", nw = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? KC(e) : n === "fr" ? qC(e) : n === "es" ? JC(e) : n === "de" ? YC(e) : n === "it" ? XC(e) : n === "pt" ? ZC(e) : n === "zh" ? QC(e) : n === "ja" ? $C(e) : n === "ko" ? ew(e) : tw(e);
}), rw = () => "Part-time", iw = () => "Temps partiel", aw = () => "Tiempo parcial", ow = () => "Teilzeit", sw = () => "Part-time", cw = () => "Tempo parcial", lw = () => "兼职", uw = () => "パートタイム", dw = () => "Part-time", fw = () => "Частичная занятость", pw = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? rw(e) : n === "fr" ? iw(e) : n === "es" ? aw(e) : n === "de" ? ow(e) : n === "it" ? sw(e) : n === "pt" ? cw(e) : n === "zh" ? lw(e) : n === "ja" ? uw(e) : n === "ko" ? dw(e) : fw(e);
}), mw = () => "Engineering", hw = () => "Ingénierie", gw = () => "Ingeniería", _w = () => "Engineering", vw = () => "Engineering", yw = () => "Engenharia", bw = () => "工程", xw = () => "エンジニアリング", Sw = () => "Engineering", Cw = () => "Разработка", ww = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? mw(e) : n === "fr" ? hw(e) : n === "es" ? gw(e) : n === "de" ? _w(e) : n === "it" ? vw(e) : n === "pt" ? yw(e) : n === "zh" ? bw(e) : n === "ja" ? xw(e) : n === "ko" ? Sw(e) : Cw(e);
}), Tw = () => "Documentation", Ew = () => "Documentation", Dw = () => "Documentación", Ow = () => "Dokumentation", kw = () => "Documentazione", Aw = () => "Documentação", jw = () => "文档", Mw = () => "ドキュメンテーション", Nw = () => "Documentation", Pw = () => "Документация", Fw = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Tw(e) : n === "fr" ? Ew(e) : n === "es" ? Dw(e) : n === "de" ? Ow(e) : n === "it" ? kw(e) : n === "pt" ? Aw(e) : n === "zh" ? jw(e) : n === "ja" ? Mw(e) : n === "ko" ? Nw(e) : Pw(e);
}), Iw = () => "Community", Lw = () => "Communauté", Rw = () => "Comunidad", zw = () => "Community", Bw = () => "Comunità", Vw = () => "Comunidade", Hw = () => "社区", Uw = () => "コミュニティ", Ww = () => "Community", Gw = () => "Сообщество", Kw = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Iw(e) : n === "fr" ? Lw(e) : n === "es" ? Rw(e) : n === "de" ? zw(e) : n === "it" ? Bw(e) : n === "pt" ? Vw(e) : n === "zh" ? Hw(e) : n === "ja" ? Uw(e) : n === "ko" ? Ww(e) : Gw(e);
}), qw = () => "San Francisco / Remote", Jw = () => "San Francisco / télétravail", Yw = () => "San Francisco / Remoto", Xw = () => "San Francisco / Remote", Zw = () => "San Francisco / Remoto", Qw = () => "San Francisco / Remoto", $w = () => "旧金山 / 远程", eT = () => "サンフランシスコ / リモート", tT = () => "San Francisco / Remote", nT = () => "Сан-Франциско / Удаленно", rT = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? qw(e) : n === "fr" ? Jw(e) : n === "es" ? Yw(e) : n === "de" ? Xw(e) : n === "it" ? Zw(e) : n === "pt" ? Qw(e) : n === "zh" ? $w(e) : n === "ja" ? eT(e) : n === "ko" ? tT(e) : nT(e);
}), iT = () => "Senior Frontend Engineer", aT = () => "Ingénieur front-end senior", oT = () => "Ingeniero Frontend Senior", sT = () => "Senior Frontend Engineer", cT = () => "Ingegnere Frontend Senior", lT = () => "Engenheiro Frontend Sênior", uT = () => "高级前端工程师", dT = () => "シニアフロントエンドエンジニア", fT = () => "Senior Frontend Engineer", pT = () => "Старший фронтенд-инженер", mT = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? iT(e) : n === "fr" ? aT(e) : n === "es" ? oT(e) : n === "de" ? sT(e) : n === "it" ? cT(e) : n === "pt" ? lT(e) : n === "zh" ? uT(e) : n === "ja" ? dT(e) : n === "ko" ? fT(e) : pT(e);
}), hT = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", gT = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", _T = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", vT = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", yT = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", bT = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", xT = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", ST = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", CT = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", wT = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", TT = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? hT(e) : n === "fr" ? gT(e) : n === "es" ? _T(e) : n === "de" ? vT(e) : n === "it" ? yT(e) : n === "pt" ? bT(e) : n === "zh" ? xT(e) : n === "ja" ? ST(e) : n === "ko" ? CT(e) : wT(e);
}), ET = () => "Backend Engineer", DT = () => "Ingénieur back-end", OT = () => "Ingeniero Backend", kT = () => "Backend-Ingenieur", AT = () => "Backend Engineer", jT = () => "Engenheiro Backend", MT = () => "后端工程师", NT = () => "バックエンドエンジニア", PT = () => "Backend Engineer", FT = () => "Бэкенд-инженер", IT = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ET(e) : n === "fr" ? DT(e) : n === "es" ? OT(e) : n === "de" ? kT(e) : n === "it" ? AT(e) : n === "pt" ? jT(e) : n === "zh" ? MT(e) : n === "ja" ? NT(e) : n === "ko" ? PT(e) : FT(e);
}), LT = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", RT = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", zT = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", BT = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", VT = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", HT = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", UT = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", WT = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", GT = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", KT = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", qT = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? LT(e) : n === "fr" ? RT(e) : n === "es" ? zT(e) : n === "de" ? BT(e) : n === "it" ? VT(e) : n === "pt" ? HT(e) : n === "zh" ? UT(e) : n === "ja" ? WT(e) : n === "ko" ? GT(e) : KT(e);
}), JT = () => "Technical Writer", YT = () => "Rédacteur·rice technique", XT = () => "Redactor técnico", ZT = () => "Technischer Redakteur", QT = () => "Scrittore tecnico", $T = () => "Redator técnico", eE = () => "技术作家", tE = () => "テクニカルライター", nE = () => "Technical Writer", rE = () => "Технический писатель", iE = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? JT(e) : n === "fr" ? YT(e) : n === "es" ? XT(e) : n === "de" ? ZT(e) : n === "it" ? QT(e) : n === "pt" ? $T(e) : n === "zh" ? eE(e) : n === "ja" ? tE(e) : n === "ko" ? nE(e) : rE(e);
}), aE = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", oE = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", sE = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", cE = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", lE = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", uE = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", dE = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", fE = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", pE = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", mE = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", hE = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? aE(e) : n === "fr" ? oE(e) : n === "es" ? sE(e) : n === "de" ? cE(e) : n === "it" ? lE(e) : n === "pt" ? uE(e) : n === "zh" ? dE(e) : n === "ja" ? fE(e) : n === "ko" ? pE(e) : mE(e);
}), gE = () => "DevRel Engineer", _E = () => "Ingénieur DevRel", vE = () => "Ingeniero de DevRel", yE = () => "DevRel-Ingenieur", bE = () => "Ingegnere DevRel", xE = () => "Engenheiro de DevRel", SE = () => "DevRel 工程师", CE = () => "DevRelエンジニア", wE = () => "DevRel Engineer", TE = () => "DevRel-инженер", EE = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? gE(e) : n === "fr" ? _E(e) : n === "es" ? vE(e) : n === "de" ? yE(e) : n === "it" ? bE(e) : n === "pt" ? xE(e) : n === "zh" ? SE(e) : n === "ja" ? CE(e) : n === "ko" ? wE(e) : TE(e);
}), DE = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", OE = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", kE = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", AE = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", jE = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", ME = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", NE = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", PE = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", FE = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", IE = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", LE = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? DE(e) : n === "fr" ? OE(e) : n === "es" ? kE(e) : n === "de" ? AE(e) : n === "it" ? jE(e) : n === "pt" ? ME(e) : n === "zh" ? NE(e) : n === "ja" ? PE(e) : n === "ko" ? FE(e) : IE(e);
}), RE = () => "QA Engineer", zE = () => "Ingénieur QA", BE = () => "Ingeniero de QA", VE = () => "QA-Ingenieur", HE = () => "Ingegnere QA", UE = () => "Engenheiro de QA", WE = () => "QA 工程师", GE = () => "QAエンジニア", KE = () => "QA Engineer", qE = () => "QA-инженер", JE = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? RE(e) : n === "fr" ? zE(e) : n === "es" ? BE(e) : n === "de" ? VE(e) : n === "it" ? HE(e) : n === "pt" ? UE(e) : n === "zh" ? WE(e) : n === "ja" ? GE(e) : n === "ko" ? KE(e) : qE(e);
}), YE = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", XE = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", ZE = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", QE = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", $E = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", eD = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", tD = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", nD = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", rD = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", iD = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", aD = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? YE(e) : n === "fr" ? XE(e) : n === "es" ? ZE(e) : n === "de" ? QE(e) : n === "it" ? $E(e) : n === "pt" ? eD(e) : n === "zh" ? tD(e) : n === "ja" ? nD(e) : n === "ko" ? rD(e) : iD(e);
}), oD = () => "Get in Touch", sD = () => "Contact", cD = () => "Ponte en contacto", lD = () => "Kontakt aufnehmen", uD = () => "Contattaci", dD = () => "Entre em contato", fD = () => "取得联系", pD = () => "お問い合わせ", mD = () => "Get in Touch", hD = () => "Связаться с нами", gD = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oD(e) : n === "fr" ? sD(e) : n === "es" ? cD(e) : n === "de" ? lD(e) : n === "it" ? uD(e) : n === "pt" ? dD(e) : n === "zh" ? fD(e) : n === "ja" ? pD(e) : n === "ko" ? mD(e) : hD(e);
}), _D = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", vD = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", yD = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", bD = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", xD = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", SD = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", CD = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", wD = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", TD = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", ED = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", DD = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _D(e) : n === "fr" ? vD(e) : n === "es" ? yD(e) : n === "de" ? bD(e) : n === "it" ? xD(e) : n === "pt" ? SD(e) : n === "zh" ? CD(e) : n === "ja" ? wD(e) : n === "ko" ? TD(e) : ED(e);
}), OD = () => "Name", kD = () => "Nom", AD = () => "Nombre", jD = () => "Name", MD = () => "Nome", ND = () => "Nome", PD = () => "姓名", FD = () => "名前", ID = () => "Name", LD = () => "Имя", RD = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? OD(e) : n === "fr" ? kD(e) : n === "es" ? AD(e) : n === "de" ? jD(e) : n === "it" ? MD(e) : n === "pt" ? ND(e) : n === "zh" ? PD(e) : n === "ja" ? FD(e) : n === "ko" ? ID(e) : LD(e);
}), zD = () => "Your name", BD = () => "Votre nom", VD = () => "Tu nombre", HD = () => "Ihr Name", UD = () => "Il tuo nome", WD = () => "Seu nome", GD = () => "您的姓名", KD = () => "お名前", qD = () => "Your name", JD = () => "Ваше имя", YD = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zD(e) : n === "fr" ? BD(e) : n === "es" ? VD(e) : n === "de" ? HD(e) : n === "it" ? UD(e) : n === "pt" ? WD(e) : n === "zh" ? GD(e) : n === "ja" ? KD(e) : n === "ko" ? qD(e) : JD(e);
}), XD = () => "Email", ZD = () => "E-mail", QD = () => "Correo electrónico", $D = () => "E-Mail", eO = () => "Email", tO = () => "E-mail", nO = () => "电子邮件", rO = () => "メールアドレス", iO = () => "Email", aO = () => "Электронная почта", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? XD(e) : n === "fr" ? ZD(e) : n === "es" ? QD(e) : n === "de" ? $D(e) : n === "it" ? eO(e) : n === "pt" ? tO(e) : n === "zh" ? nO(e) : n === "ja" ? rO(e) : n === "ko" ? iO(e) : aO(e);
}), oO = () => "you@example.com", sO = () => "vous@exemple.com", cO = () => "tu@ejemplo.com", lO = () => "ihre@beispiel.de", uO = () => "tu@esempio.com", dO = () => "voce@exemplo.com", fO = () => "you@example.com", pO = () => "you@example.com", mO = () => "you@example.com", hO = () => "you@example.com", gO = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oO(e) : n === "fr" ? sO(e) : n === "es" ? cO(e) : n === "de" ? lO(e) : n === "it" ? uO(e) : n === "pt" ? dO(e) : n === "zh" ? fO(e) : n === "ja" ? pO(e) : n === "ko" ? mO(e) : hO(e);
}), _O = () => "Topic", vO = () => "Sujet", yO = () => "Tema", bO = () => "Thema", xO = () => "Argomento", SO = () => "Assunto", CO = () => "主题", wO = () => "トピック", TO = () => "Topic", EO = () => "Тема", DO = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _O(e) : n === "fr" ? vO(e) : n === "es" ? yO(e) : n === "de" ? bO(e) : n === "it" ? xO(e) : n === "pt" ? SO(e) : n === "zh" ? CO(e) : n === "ja" ? wO(e) : n === "ko" ? TO(e) : EO(e);
}), OO = () => "Bug Report", kO = () => "Rapport de bug", AO = () => "Informe de error", jO = () => "Fehlerbericht", MO = () => "Segnalazione bug", NO = () => "Relatório de bug", PO = () => "错误报告", FO = () => "バグ報告", IO = () => "Bug Report", LO = () => "Отчет об ошибке", RO = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? OO(e) : n === "fr" ? kO(e) : n === "es" ? AO(e) : n === "de" ? jO(e) : n === "it" ? MO(e) : n === "pt" ? NO(e) : n === "zh" ? PO(e) : n === "ja" ? FO(e) : n === "ko" ? IO(e) : LO(e);
}), zO = () => "New Benchmark Idea", BO = () => "Idée de benchmark", VO = () => "Nueva idea de benchmark", HO = () => "Neue Benchmark-Idee", UO = () => "Nuova idea di benchmark", WO = () => "Nova ideia de benchmark", GO = () => "新基准测试想法", KO = () => "新しいベンチマークのアイデア", qO = () => "New Benchmark Idea", JO = () => "Идея нового бенчмарка", YO = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zO(e) : n === "fr" ? BO(e) : n === "es" ? VO(e) : n === "de" ? HO(e) : n === "it" ? UO(e) : n === "pt" ? WO(e) : n === "zh" ? GO(e) : n === "ja" ? KO(e) : n === "ko" ? qO(e) : JO(e);
}), XO = () => "Methodology Question", ZO = () => "Question de méthodologie", QO = () => "Pregunta sobre la metodología", $O = () => "Frage zur Methodik", ek = () => "Domanda sulla metodologia", tk = () => "Pergunta sobre metodologia", nk = () => "方法论问题", rk = () => "手法に関する質問", ik = () => "Methodology Question", ak = () => "Вопрос по методологии", ok = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? XO(e) : n === "fr" ? ZO(e) : n === "es" ? QO(e) : n === "de" ? $O(e) : n === "it" ? ek(e) : n === "pt" ? tk(e) : n === "zh" ? nk(e) : n === "ja" ? rk(e) : n === "ko" ? ik(e) : ak(e);
}), sk = () => "Contribution", ck = () => "Contribution", lk = () => "Contribución", uk = () => "Beitrag", dk = () => "Contributo", fk = () => "Contribuição", pk = () => "贡献", mk = () => "貢献", hk = () => "Contribution", gk = () => "Вклад в проект", _k = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? sk(e) : n === "fr" ? ck(e) : n === "es" ? lk(e) : n === "de" ? uk(e) : n === "it" ? dk(e) : n === "pt" ? fk(e) : n === "zh" ? pk(e) : n === "ja" ? mk(e) : n === "ko" ? hk(e) : gk(e);
}), vk = () => "Other", yk = () => "Autre", bk = () => "Otro", xk = () => "Sonstiges", Sk = () => "Altro", Ck = () => "Outro", wk = () => "其他", Tk = () => "その他", Ek = () => "Other", Dk = () => "Другое", Ok = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vk(e) : n === "fr" ? yk(e) : n === "es" ? bk(e) : n === "de" ? xk(e) : n === "it" ? Sk(e) : n === "pt" ? Ck(e) : n === "zh" ? wk(e) : n === "ja" ? Tk(e) : n === "ko" ? Ek(e) : Dk(e);
}), kk = () => "Message", Ak = () => "Message", jk = () => "Mensaje", Mk = () => "Nachricht", Nk = () => "Messaggio", Pk = () => "Mensagem", Fk = () => "消息", Ik = () => "メッセージ", Lk = () => "Message", Rk = () => "Сообщение", zk = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kk(e) : n === "fr" ? Ak(e) : n === "es" ? jk(e) : n === "de" ? Mk(e) : n === "it" ? Nk(e) : n === "pt" ? Pk(e) : n === "zh" ? Fk(e) : n === "ja" ? Ik(e) : n === "ko" ? Lk(e) : Rk(e);
}), Bk = () => "Describe your question or idea...", Vk = () => "Décrivez votre question ou idée…", Hk = () => "Describe tu pregunta o idea...", Uk = () => "Beschreiben Sie Ihre Frage oder Idee...", Wk = () => "Descrivi la tua domanda o idea...", Gk = () => "Descreva sua pergunta ou ideia...", Kk = () => "描述您的问题或想法...", qk = () => "ご質問やアイデアを記入してください...", Jk = () => "Describe your question or idea...", Yk = () => "Опишите ваш вопрос или идею...", Xk = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Bk(e) : n === "fr" ? Vk(e) : n === "es" ? Hk(e) : n === "de" ? Uk(e) : n === "it" ? Wk(e) : n === "pt" ? Gk(e) : n === "zh" ? Kk(e) : n === "ja" ? qk(e) : n === "ko" ? Jk(e) : Yk(e);
}), Zk = () => "Send Message", Qk = () => "Envoyer", $k = () => "Enviar mensaje", eA = () => "Nachricht senden", tA = () => "Invia messaggio", nA = () => "Enviar mensagem", rA = () => "发送消息", iA = () => "メッセージを送信", aA = () => "Send Message", oA = () => "Отправить сообщение", sA = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Zk(e) : n === "fr" ? Qk(e) : n === "es" ? $k(e) : n === "de" ? eA(e) : n === "it" ? tA(e) : n === "pt" ? nA(e) : n === "zh" ? rA(e) : n === "ja" ? iA(e) : n === "ko" ? aA(e) : oA(e);
}), cA = () => "Frequently Asked Questions", lA = () => "Questions fréquentes", uA = () => "Preguntas frecuentes", dA = () => "Häufig gestellte Fragen", fA = () => "Domande frequenti", pA = () => "Perguntas frequentes", mA = () => "常见问题", hA = () => "よくある質問", gA = () => "Frequently Asked Questions", _A = () => "Часто задаваемые вопросы", vA = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? cA(e) : n === "fr" ? lA(e) : n === "es" ? uA(e) : n === "de" ? dA(e) : n === "it" ? fA(e) : n === "pt" ? pA(e) : n === "zh" ? mA(e) : n === "ja" ? hA(e) : n === "ko" ? gA(e) : _A(e);
}), yA = () => "Everything you need to know about i18n Benchmark.", bA = () => "Tout savoir sur i18n Benchmark.", xA = () => "Todo lo que necesitas saber sobre i18n Benchmark.", SA = () => "Alles, was Sie über i18n Benchmark wissen müssen.", CA = () => "Tutto quello che c'è da sapere su i18n Benchmark.", wA = () => "Tudo o que você precisa saber sobre o i18n Benchmark.", TA = () => "关于 i18n 基准测试您需要了解的一切。", EA = () => "i18n Benchmarkについて知っておくべきすべてのこと。", DA = () => "Everything you need to know about i18n Benchmark.", OA = () => "Все, что вам нужно знать об i18n Benchmark.", kA = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yA(e) : n === "fr" ? bA(e) : n === "es" ? xA(e) : n === "de" ? SA(e) : n === "it" ? CA(e) : n === "pt" ? wA(e) : n === "zh" ? TA(e) : n === "ja" ? EA(e) : n === "ko" ? DA(e) : OA(e);
}), AA = () => "What is i18n Benchmark?", jA = () => "Qu'est-ce qu'i18n Benchmark ?", MA = () => "¿Qué es i18n Benchmark?", NA = () => "Was ist i18n Benchmark?", PA = () => "Cos'è i18n Benchmark?", FA = () => "O que é o i18n Benchmark?", IA = () => "什么是 i18n 基准测试？", LA = () => "i18n Benchmarkとは何ですか？", RA = () => "What is i18n Benchmark?", zA = () => "Что такое i18n Benchmark?", BA = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? AA(e) : n === "fr" ? jA(e) : n === "es" ? MA(e) : n === "de" ? NA(e) : n === "it" ? PA(e) : n === "pt" ? FA(e) : n === "zh" ? IA(e) : n === "ja" ? LA(e) : n === "ko" ? RA(e) : zA(e);
}), VA = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", HA = () => "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.", UA = () => "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", WA = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", GA = () => "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", KA = () => "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.", qA = () => "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", JA = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。", YA = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", XA = () => "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.", ZA = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? VA(e) : n === "fr" ? HA(e) : n === "es" ? UA(e) : n === "de" ? WA(e) : n === "it" ? GA(e) : n === "pt" ? KA(e) : n === "zh" ? qA(e) : n === "ja" ? JA(e) : n === "ko" ? YA(e) : XA(e);
}), QA = () => "How are benchmarks conducted?", $A = () => "Comment sont menés les benchmarks ?", ej = () => "¿Cómo se realizan los benchmarks?", tj = () => "Wie werden Benchmarks durchgeführt?", nj = () => "Come vengono condotti i benchmark?", rj = () => "Como os benchmarks são conduzidos?", ij = () => "基准测试是如何进行的？", aj = () => "ベンチマークはどのように実施されますか？", oj = () => "How are benchmarks conducted?", sj = () => "Как проводятся бенчмарки?", cj = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? QA(e) : n === "fr" ? $A(e) : n === "es" ? ej(e) : n === "de" ? tj(e) : n === "it" ? nj(e) : n === "pt" ? rj(e) : n === "zh" ? ij(e) : n === "ja" ? aj(e) : n === "ko" ? oj(e) : sj(e);
}), lj = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", uj = () => "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.", dj = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.", fj = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.", pj = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.", mj = () => "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.", hj = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。", gj = () => "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", _j = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", vj = () => "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.", yj = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? lj(e) : n === "fr" ? uj(e) : n === "es" ? dj(e) : n === "de" ? fj(e) : n === "it" ? pj(e) : n === "pt" ? mj(e) : n === "zh" ? hj(e) : n === "ja" ? gj(e) : n === "ko" ? _j(e) : vj(e);
}), bj = () => "Which libraries are currently supported?", xj = () => "Quelles bibliothèques sont prises en charge ?", Sj = () => "¿Qué bibliotecas se admiten actualmente?", Cj = () => "Welche Bibliotheken werden derzeit unterstützt?", wj = () => "Quali librerie sono attualmente supportate?", Tj = () => "Quais bibliotecas são suportadas atualmente?", Ej = () => "目前支持哪些库？", Dj = () => "現在サポートされているライブラリは何ですか？", Oj = () => "Which libraries are currently supported?", kj = () => "Какие библиотеки поддерживаются в данный момент?", Aj = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? bj(e) : n === "fr" ? xj(e) : n === "es" ? Sj(e) : n === "de" ? Cj(e) : n === "it" ? wj(e) : n === "pt" ? Tj(e) : n === "zh" ? Ej(e) : n === "ja" ? Dj(e) : n === "ko" ? Oj(e) : kj(e);
}), jj = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Mj = () => "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.", Nj = () => "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", Pj = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", Fj = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Ij = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Lj = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", Rj = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", zj = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Bj = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", Vj = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? jj(e) : n === "fr" ? Mj(e) : n === "es" ? Nj(e) : n === "de" ? Pj(e) : n === "it" ? Fj(e) : n === "pt" ? Ij(e) : n === "zh" ? Lj(e) : n === "ja" ? Rj(e) : n === "ko" ? zj(e) : Bj(e);
}), Hj = () => "Can I submit my own benchmarks?", Uj = () => "Puis-je proposer des benchmarks ?", Wj = () => "¿Puedo enviar mis propios benchmarks?", Gj = () => "Kann ich meine eigenen Benchmarks einreichen?", Kj = () => "Posso inviare i miei benchmark?", qj = () => "Posso enviar meus próprios benchmarks?", Jj = () => "我可以提交我自己的基准测试吗？", Yj = () => "自分のベンチマークを投稿できますか？", Xj = () => "Can I submit my own benchmarks?", Zj = () => "Могу ли я прислать свои собственные бенчмарки?", Qj = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Hj(e) : n === "fr" ? Uj(e) : n === "es" ? Wj(e) : n === "de" ? Gj(e) : n === "it" ? Kj(e) : n === "pt" ? qj(e) : n === "zh" ? Jj(e) : n === "ja" ? Yj(e) : n === "ko" ? Xj(e) : Zj(e);
}), $j = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", eM = () => "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.", tM = () => "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.", nM = () => "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.", rM = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", iM = () => "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", aM = () => "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。", oM = () => "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。", sM = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", cM = () => "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.", lM = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $j(e) : n === "fr" ? eM(e) : n === "es" ? tM(e) : n === "de" ? nM(e) : n === "it" ? rM(e) : n === "pt" ? iM(e) : n === "zh" ? aM(e) : n === "ja" ? oM(e) : n === "ko" ? sM(e) : cM(e);
}), uM = () => "How often are benchmarks updated?", dM = () => "À quelle fréquence sont-ils mis à jour ?", fM = () => "¿Con qué frecuencia se actualizan los benchmarks?", pM = () => "Wie oft werden Benchmarks aktualisiert?", mM = () => "Con quale frequenza vengono aggiornati i benchmark?", hM = () => "Com que frequência os benchmarks são atualizados?", gM = () => "基准测试多久更新一次？", _M = () => "ベンチマークはどのくらいの頻度で更新されますか？", vM = () => "How often are benchmarks updated?", yM = () => "Как часто обновляются бенчмарки?", bM = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? uM(e) : n === "fr" ? dM(e) : n === "es" ? fM(e) : n === "de" ? pM(e) : n === "it" ? mM(e) : n === "pt" ? hM(e) : n === "zh" ? gM(e) : n === "ja" ? _M(e) : n === "ko" ? vM(e) : yM(e);
}), xM = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", SM = () => "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.", CM = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", wM = () => "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.", TM = () => "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.", EM = () => "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.", DM = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。", OM = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", kM = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", AM = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.", jM = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xM(e) : n === "fr" ? SM(e) : n === "es" ? CM(e) : n === "de" ? wM(e) : n === "it" ? TM(e) : n === "pt" ? EM(e) : n === "zh" ? DM(e) : n === "ja" ? OM(e) : n === "ko" ? kM(e) : AM(e);
}), MM = () => "Is the data reliable?", NM = () => "Les données sont-elles fiables ?", PM = () => "¿Son fiables los datos?", FM = () => "Sind die Daten zuverlässig?", IM = () => "I dati sono affidabili?", LM = () => "Os dados são confiáveis?", RM = () => "数据可靠吗？", zM = () => "データは信頼できますか？", BM = () => "Is the data reliable?", VM = () => "Можно ли доверять данным?", HM = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? MM(e) : n === "fr" ? NM(e) : n === "es" ? PM(e) : n === "de" ? FM(e) : n === "it" ? IM(e) : n === "pt" ? LM(e) : n === "zh" ? RM(e) : n === "ja" ? zM(e) : n === "ko" ? BM(e) : VM(e);
}), UM = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", WM = () => "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.", GM = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", KM = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", qM = () => "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.", JM = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", YM = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。", XM = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。", ZM = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", QM = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.", $M = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? UM(e) : n === "fr" ? WM(e) : n === "es" ? GM(e) : n === "de" ? KM(e) : n === "it" ? qM(e) : n === "pt" ? JM(e) : n === "zh" ? YM(e) : n === "ja" ? XM(e) : n === "ko" ? ZM(e) : QM(e);
}), eN = () => "Do you offer consulting services?", tN = () => "Proposez-vous du conseil ?", nN = () => "¿Ofrecen servicios de consultoría?", rN = () => "Bieten Sie Beratungsdienstleistungen an?", iN = () => "Offrite servizi di consulenza?", aN = () => "Vocês oferecem serviços de consultoria?", oN = () => "你们提供咨询服务吗？", sN = () => "コンサルティングサービスは提供していますか？", cN = () => "Do you offer consulting services?", lN = () => "Предоставляете ли вы консалтинговые услуги?", uN = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? eN(e) : n === "fr" ? tN(e) : n === "es" ? nN(e) : n === "de" ? rN(e) : n === "it" ? iN(e) : n === "pt" ? aN(e) : n === "zh" ? oN(e) : n === "ja" ? sN(e) : n === "ko" ? cN(e) : lN(e);
}), dN = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", fN = () => "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.", pN = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.", mN = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.", hN = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.", gN = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.", _N = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。", vN = () => "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。", yN = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", bN = () => "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.", xN = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? dN(e) : n === "fr" ? fN(e) : n === "es" ? pN(e) : n === "de" ? mN(e) : n === "it" ? hN(e) : n === "pt" ? gN(e) : n === "zh" ? _N(e) : n === "ja" ? vN(e) : n === "ko" ? yN(e) : bN(e);
}), SN = () => "How can I contribute?", CN = () => "Comment contribuer ?", wN = () => "¿Cómo puedo contribuir?", TN = () => "Wie kann ich beitragen?", EN = () => "Come posso contribuire?", DN = () => "Como posso contribuir?", ON = () => "我该如何贡献？", kN = () => "どのように貢献できますか？", AN = () => "How can I contribute?", jN = () => "Как я могу помочь проекту?", MN = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? SN(e) : n === "fr" ? CN(e) : n === "es" ? wN(e) : n === "de" ? TN(e) : n === "it" ? EN(e) : n === "pt" ? DN(e) : n === "zh" ? ON(e) : n === "ja" ? kN(e) : n === "ko" ? AN(e) : jN(e);
}), NN = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", PN = () => "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.", FN = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.", IN = () => "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", LN = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", RN = () => "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.", zN = () => "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。", BN = () => "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", VN = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", HN = () => "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.", UN = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? NN(e) : n === "fr" ? PN(e) : n === "es" ? FN(e) : n === "de" ? IN(e) : n === "it" ? LN(e) : n === "pt" ? RN(e) : n === "zh" ? zN(e) : n === "ja" ? BN(e) : n === "ko" ? VN(e) : HN(e);
}), WN = () => "Simple, Transparent Pricing", GN = () => "Tarification simple et transparente", KN = () => "Precios sencillos y transparentes", qN = () => "Einfache, transparente Preisgestaltung", JN = () => "Prezzi semplici e trasparenti", YN = () => "Preços simples e transparentes", XN = () => "简单透明的定价", ZN = () => "シンプルで透明性の高い価格設定", QN = () => "Simple, Transparent Pricing", $N = () => "Простые и прозрачные цены", eP = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? WN(e) : n === "fr" ? GN(e) : n === "es" ? KN(e) : n === "de" ? qN(e) : n === "it" ? JN(e) : n === "pt" ? YN(e) : n === "zh" ? XN(e) : n === "ja" ? ZN(e) : n === "ko" ? QN(e) : $N(e);
}), tP = () => "Choose the plan that fits your team. No hidden fees.", nP = () => "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.", rP = () => "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.", iP = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", aP = () => "Scegli il piano più adatto al tuo team. Nessun costo nascosto.", oP = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", sP = () => "选择适合您团队的计划。无隐藏费用。", cP = () => "チームに合ったプランをお選びください。隠れた費用はありません。", lP = () => "Choose the plan that fits your team. No hidden fees.", uP = () => "Выберите подходящий план для вашей команды. Никаких скрытых комиссий.", dP = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? tP(e) : n === "fr" ? nP(e) : n === "es" ? rP(e) : n === "de" ? iP(e) : n === "it" ? aP(e) : n === "pt" ? oP(e) : n === "zh" ? sP(e) : n === "ja" ? cP(e) : n === "ko" ? lP(e) : uP(e);
}), fP = () => "Starter", pP = () => "Starter", mP = () => "Starter", hP = () => "Starter", gP = () => "Starter", _P = () => "Starter", vP = () => "入门版", yP = () => "スターター", bP = () => "Starter", xP = () => "Starter", SP = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? fP(e) : n === "fr" ? pP(e) : n === "es" ? mP(e) : n === "de" ? hP(e) : n === "it" ? gP(e) : n === "pt" ? _P(e) : n === "zh" ? vP(e) : n === "ja" ? yP(e) : n === "ko" ? bP(e) : xP(e);
}), CP = () => "$0", wP = () => "0 €", TP = () => "0 $", EP = () => "0 $", DP = () => "0 $", OP = () => "0 $", kP = () => "0 $", AP = () => "0円", jP = () => "$0", MP = () => "0 $", NP = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? CP(e) : n === "fr" ? wP(e) : n === "es" ? TP(e) : n === "de" ? EP(e) : n === "it" ? DP(e) : n === "pt" ? OP(e) : n === "zh" ? kP(e) : n === "ja" ? AP(e) : n === "ko" ? jP(e) : MP(e);
}), PP = () => "forever", FP = () => "pour toujours", IP = () => "para siempre", LP = () => "für immer", RP = () => "per sempre", zP = () => "para sempre", BP = () => "永久", VP = () => "ずっと無料", HP = () => "forever", UP = () => "навсегда", WP = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? PP(e) : n === "fr" ? FP(e) : n === "es" ? IP(e) : n === "de" ? LP(e) : n === "it" ? RP(e) : n === "pt" ? zP(e) : n === "zh" ? BP(e) : n === "ja" ? VP(e) : n === "ko" ? HP(e) : UP(e);
}), GP = () => "5 benchmark runs/day", KP = () => "5 exécutions de benchmark / jour", qP = () => "5 ejecuciones de benchmark al día", JP = () => "5 Benchmark-Durchläufe/Tag", YP = () => "5 esecuzioni benchmark al giorno", XP = () => "5 execuções de benchmark/dia", ZP = () => "每天 5 次基准测试运行", QP = () => "1日あたり5回のベンチマーク実行", $P = () => "5 benchmark runs/day", eF = () => "5 запусков бенчмарка в день", tF = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? GP(e) : n === "fr" ? KP(e) : n === "es" ? qP(e) : n === "de" ? JP(e) : n === "it" ? YP(e) : n === "pt" ? XP(e) : n === "zh" ? ZP(e) : n === "ja" ? QP(e) : n === "ko" ? $P(e) : eF(e);
}), nF = () => "3 libraries", rF = () => "3 bibliothèques", iF = () => "3 bibliotecas", aF = () => "3 Bibliotheken", oF = () => "3 librerie", sF = () => "3 bibliotecas", cF = () => "3 个库", lF = () => "3ライブラリ", uF = () => "3 libraries", dF = () => "3 библиотеки", fF = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? nF(e) : n === "fr" ? rF(e) : n === "es" ? iF(e) : n === "de" ? aF(e) : n === "it" ? oF(e) : n === "pt" ? sF(e) : n === "zh" ? cF(e) : n === "ja" ? lF(e) : n === "ko" ? uF(e) : dF(e);
}), pF = () => "Community support", mF = () => "Support communautaire", hF = () => "Soporte de la comunidad", gF = () => "Community-Support", _F = () => "Supporto della comunità", vF = () => "Suporte da comunidade", yF = () => "社区支持", bF = () => "コミュニティサポート", xF = () => "Community support", SF = () => "Поддержка сообщества", CF = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? pF(e) : n === "fr" ? mF(e) : n === "es" ? hF(e) : n === "de" ? gF(e) : n === "it" ? _F(e) : n === "pt" ? vF(e) : n === "zh" ? yF(e) : n === "ja" ? bF(e) : n === "ko" ? xF(e) : SF(e);
}), wF = () => "Public results", TF = () => "Résultats publics", EF = () => "Resultados públicos", DF = () => "Öffentliche Ergebnisse", OF = () => "Risultati pubblici", kF = () => "Resultados públicos", AF = () => "公开结果", jF = () => "公開結果", MF = () => "Public results", NF = () => "Публичные результаты", PF = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? wF(e) : n === "fr" ? TF(e) : n === "es" ? EF(e) : n === "de" ? DF(e) : n === "it" ? OF(e) : n === "pt" ? kF(e) : n === "zh" ? AF(e) : n === "ja" ? jF(e) : n === "ko" ? MF(e) : NF(e);
}), FF = () => "Pro", IF = () => "Pro", LF = () => "Pro", RF = () => "Pro", zF = () => "Pro", BF = () => "Pro", VF = () => "专业版", HF = () => "プロ", UF = () => "Pro", WF = () => "Pro", GF = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? FF(e) : n === "fr" ? IF(e) : n === "es" ? LF(e) : n === "de" ? RF(e) : n === "it" ? zF(e) : n === "pt" ? BF(e) : n === "zh" ? VF(e) : n === "ja" ? HF(e) : n === "ko" ? UF(e) : WF(e);
}), KF = () => "$29", qF = () => "29 €", JF = () => "29 $", YF = () => "29 $", XF = () => "29 $", ZF = () => "29 $", QF = () => "29 $", $F = () => "29ドル", eI = () => "$29", tI = () => "29 $", nI = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? KF(e) : n === "fr" ? qF(e) : n === "es" ? JF(e) : n === "de" ? YF(e) : n === "it" ? XF(e) : n === "pt" ? ZF(e) : n === "zh" ? QF(e) : n === "ja" ? $F(e) : n === "ko" ? eI(e) : tI(e);
}), rI = () => "/month", iI = () => "/ mois", aI = () => "/mes", oI = () => "/Monat", sI = () => "/mese", cI = () => "/mês", lI = () => "/月", uI = () => "/月", dI = () => "/month", fI = () => "/мес", pI = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? rI(e) : n === "fr" ? iI(e) : n === "es" ? aI(e) : n === "de" ? oI(e) : n === "it" ? sI(e) : n === "pt" ? cI(e) : n === "zh" ? lI(e) : n === "ja" ? uI(e) : n === "ko" ? dI(e) : fI(e);
}), mI = () => "Unlimited runs", hI = () => "Exécutions illimitées", gI = () => "Ejecuciones ilimitadas", _I = () => "Unbegrenzte Durchläufe", vI = () => "Esecuzioni illimitate", yI = () => "Execuções ilimitadas", bI = () => "无限次运行", xI = () => "無制限の実行", SI = () => "Unlimited runs", CI = () => "Неограниченное число запусков", wI = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? mI(e) : n === "fr" ? hI(e) : n === "es" ? gI(e) : n === "de" ? _I(e) : n === "it" ? vI(e) : n === "pt" ? yI(e) : n === "zh" ? bI(e) : n === "ja" ? xI(e) : n === "ko" ? SI(e) : CI(e);
}), TI = () => "All libraries", EI = () => "Toutes les bibliothèques", DI = () => "Todas las bibliotecas", OI = () => "Alle Bibliotheken", kI = () => "Tutte le librerie", AI = () => "Todas as bibliotecas", jI = () => "所有库", MI = () => "すべてのライブラリ", NI = () => "All libraries", PI = () => "Все библиотеки", FI = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? TI(e) : n === "fr" ? EI(e) : n === "es" ? DI(e) : n === "de" ? OI(e) : n === "it" ? kI(e) : n === "pt" ? AI(e) : n === "zh" ? jI(e) : n === "ja" ? MI(e) : n === "ko" ? NI(e) : PI(e);
}), II = () => "Priority support", LI = () => "Support prioritaire", RI = () => "Soporte prioritario", zI = () => "Priorisierter Support", BI = () => "Supporto prioritario", VI = () => "Suporte prioritário", HI = () => "优先支持", UI = () => "優先サポート", WI = () => "Priority support", GI = () => "Приоритетная поддержка", KI = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? II(e) : n === "fr" ? LI(e) : n === "es" ? RI(e) : n === "de" ? zI(e) : n === "it" ? BI(e) : n === "pt" ? VI(e) : n === "zh" ? HI(e) : n === "ja" ? UI(e) : n === "ko" ? WI(e) : GI(e);
}), qI = () => "Private results", JI = () => "Résultats privés", YI = () => "Resultados privados", XI = () => "Private Ergebnisse", ZI = () => "Risultati privati", QI = () => "Resultados privados", $I = () => "私有结果", eL = () => "非公開の結果", tL = () => "Private results", nL = () => "Приватные результаты", rL = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? qI(e) : n === "fr" ? JI(e) : n === "es" ? YI(e) : n === "de" ? XI(e) : n === "it" ? ZI(e) : n === "pt" ? QI(e) : n === "zh" ? $I(e) : n === "ja" ? eL(e) : n === "ko" ? tL(e) : nL(e);
}), iL = () => "CI integration", aL = () => "Intégration CI", oL = () => "Integración CI", sL = () => "CI-Integration", cL = () => "Integrazione CI", lL = () => "Integração CI", uL = () => "CI 集成", dL = () => "CI統合", fL = () => "CI integration", pL = () => "Интеграция с CI", mL = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? iL(e) : n === "fr" ? aL(e) : n === "es" ? oL(e) : n === "de" ? sL(e) : n === "it" ? cL(e) : n === "pt" ? lL(e) : n === "zh" ? uL(e) : n === "ja" ? dL(e) : n === "ko" ? fL(e) : pL(e);
}), hL = () => "Historical data", gL = () => "Historique", _L = () => "Datos históricos", vL = () => "Historische Daten", yL = () => "Dati storici", bL = () => "Dados históricos", xL = () => "历史数据", SL = () => "履歴データ", CL = () => "Historical data", wL = () => "Исторические данные", TL = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? hL(e) : n === "fr" ? gL(e) : n === "es" ? _L(e) : n === "de" ? vL(e) : n === "it" ? yL(e) : n === "pt" ? bL(e) : n === "zh" ? xL(e) : n === "ja" ? SL(e) : n === "ko" ? CL(e) : wL(e);
}), EL = () => "Enterprise", DL = () => "Enterprise", OL = () => "Enterprise", kL = () => "Enterprise", AL = () => "Enterprise", jL = () => "Enterprise", ML = () => "企业版", NL = () => "エンタープライズ", PL = () => "Enterprise", FL = () => "Enterprise", IL = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? EL(e) : n === "fr" ? DL(e) : n === "es" ? OL(e) : n === "de" ? kL(e) : n === "it" ? AL(e) : n === "pt" ? jL(e) : n === "zh" ? ML(e) : n === "ja" ? NL(e) : n === "ko" ? PL(e) : FL(e);
}), LL = () => "Custom", RL = () => "Sur mesure", zL = () => "Personalizado", BL = () => "Individuell", VL = () => "Personalizzato", HL = () => "Personalizado", UL = () => "定制", WL = () => "カスタム", GL = () => "Custom", KL = () => "Индивидуально", qL = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? LL(e) : n === "fr" ? RL(e) : n === "es" ? zL(e) : n === "de" ? BL(e) : n === "it" ? VL(e) : n === "pt" ? HL(e) : n === "zh" ? UL(e) : n === "ja" ? WL(e) : n === "ko" ? GL(e) : KL(e);
}), JL = () => "Everything in Pro", YL = () => "Tout le Pro", XL = () => "Todo lo que hay en Pro", ZL = () => "Alles in Pro enthalten", QL = () => "Tutto quello che c'è in Pro", $L = () => "Tudo o que está no Pro", eR = () => "包含专业版中的所有功能", tR = () => "Proプランのすべてを含む", nR = () => "Everything in Pro", rR = () => "Все, что есть в Pro", iR = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? JL(e) : n === "fr" ? YL(e) : n === "es" ? XL(e) : n === "de" ? ZL(e) : n === "it" ? QL(e) : n === "pt" ? $L(e) : n === "zh" ? eR(e) : n === "ja" ? tR(e) : n === "ko" ? nR(e) : rR(e);
}), aR = () => "On-premise option", oR = () => "Option on-premise", sR = () => "Opción on-premise", cR = () => "On-Premise-Option", lR = () => "Opzione on-premise", uR = () => "Opção on-premise", dR = () => "本地部署选项", fR = () => "オンプレミスオプション", pR = () => "On-premise option", mR = () => "Локальная установка", hR = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? aR(e) : n === "fr" ? oR(e) : n === "es" ? sR(e) : n === "de" ? cR(e) : n === "it" ? lR(e) : n === "pt" ? uR(e) : n === "zh" ? dR(e) : n === "ja" ? fR(e) : n === "ko" ? pR(e) : mR(e);
}), gR = () => "SSO & SAML", _R = () => "SSO et SAML", vR = () => "SSO y SAML", yR = () => "SSO & SAML", bR = () => "SSO e SAML", xR = () => "SSO e SAML", SR = () => "SSO 和 SAML", CR = () => "SSO & SAML", wR = () => "SSO & SAML", TR = () => "SSO и SAML", ER = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? gR(e) : n === "fr" ? _R(e) : n === "es" ? vR(e) : n === "de" ? yR(e) : n === "it" ? bR(e) : n === "pt" ? xR(e) : n === "zh" ? SR(e) : n === "ja" ? CR(e) : n === "ko" ? wR(e) : TR(e);
}), DR = () => "Dedicated account manager", OR = () => "Account manager dédié", kR = () => "Gestor de cuentas dedicado", AR = () => "Dedizierter Account Manager", jR = () => "Account manager dedicato", MR = () => "Gerente de conta dedicado", NR = () => "专属客户经理", PR = () => "専任のアカウントマネージャー", FR = () => "Dedicated account manager", IR = () => "Персональный менеджер", LR = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? DR(e) : n === "fr" ? OR(e) : n === "es" ? kR(e) : n === "de" ? AR(e) : n === "it" ? jR(e) : n === "pt" ? MR(e) : n === "zh" ? NR(e) : n === "ja" ? PR(e) : n === "ko" ? FR(e) : IR(e);
}), RR = () => "Custom SLAs", zR = () => "SLA sur mesure", BR = () => "SLAs personalizados", VR = () => "Individuelle SLAs", HR = () => "SLA personalizzati", UR = () => "SLAs personalizados", WR = () => "定制 SLA", GR = () => "カスタムSLA", KR = () => "Custom SLAs", qR = () => "Индивидуальные SLA", JR = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? RR(e) : n === "fr" ? zR(e) : n === "es" ? BR(e) : n === "de" ? VR(e) : n === "it" ? HR(e) : n === "pt" ? UR(e) : n === "zh" ? WR(e) : n === "ja" ? GR(e) : n === "ko" ? KR(e) : qR(e);
}), YR = () => "Audit logs", XR = () => "Journaux d'audit", ZR = () => "Registros de auditoría", QR = () => "Audit-Protokolle", $R = () => "Log di controllo", ez = () => "Logs de auditoria", tz = () => "审计日志", nz = () => "監査ログ", rz = () => "Audit logs", iz = () => "Журналы аудита", az = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? YR(e) : n === "fr" ? XR(e) : n === "es" ? ZR(e) : n === "de" ? QR(e) : n === "it" ? $R(e) : n === "pt" ? ez(e) : n === "zh" ? tz(e) : n === "ja" ? nz(e) : n === "ko" ? rz(e) : iz(e);
}), oz = () => "Training sessions", sz = () => "Sessions de formation", cz = () => "Sesiones de formación", lz = () => "Schulungssitzungen", uz = () => "Sessioni di formazione", dz = () => "Sessões de treinamento", fz = () => "培训课程", pz = () => "トレーニングセッション", mz = () => "Training sessions", hz = () => "Обучающие сессии", gz = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oz(e) : n === "fr" ? sz(e) : n === "es" ? cz(e) : n === "de" ? lz(e) : n === "it" ? uz(e) : n === "pt" ? dz(e) : n === "zh" ? fz(e) : n === "ja" ? pz(e) : n === "ko" ? mz(e) : hz(e);
}), _z = () => "Contact Sales", vz = () => "Contacter les ventes", yz = () => "Contactar con ventas", bz = () => "Vertrieb kontaktieren", xz = () => "Contatta l'ufficio vendite", Sz = () => "Contatar vendas", Cz = () => "联系销售", wz = () => "営業に問い合わせる", Tz = () => "Contact Sales", Ez = () => "Связаться с отделом продаж", Dz = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _z(e) : n === "fr" ? vz(e) : n === "es" ? yz(e) : n === "de" ? bz(e) : n === "it" ? xz(e) : n === "pt" ? Sz(e) : n === "zh" ? Cz(e) : n === "ja" ? wz(e) : n === "ko" ? Tz(e) : Ez(e);
}), Oz = () => "Get Started", kz = () => "Commencer", Az = () => "Empezar", jz = () => "Erste Schritte", Mz = () => "Inizia ora", Nz = () => "Começar", Pz = () => "开始使用", Fz = () => "始める", Iz = () => "Get Started", Lz = () => "Начать работу", Rz = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Oz(e) : n === "fr" ? kz(e) : n === "es" ? Az(e) : n === "de" ? jz(e) : n === "it" ? Mz(e) : n === "pt" ? Nz(e) : n === "zh" ? Pz(e) : n === "ja" ? Fz(e) : n === "ko" ? Iz(e) : Lz(e);
}), zz = () => "Products", Bz = () => "Produits", Vz = () => "Productos", Hz = () => "Produkte", Uz = () => "Prodotti", Wz = () => "Produtos", Gz = () => "产品", Kz = () => "製品", qz = () => "Products", Jz = () => "Продукты", Yz = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zz(e) : n === "fr" ? Bz(e) : n === "es" ? Vz(e) : n === "de" ? Hz(e) : n === "it" ? Uz(e) : n === "pt" ? Wz(e) : n === "zh" ? Gz(e) : n === "ja" ? Kz(e) : n === "ko" ? qz(e) : Jz(e);
}), Xz = () => "Tools and services to streamline your internationalization workflow.", Zz = () => "Outils et services pour fluidifier votre flux i18n.", Qz = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", $z = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", eB = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", tB = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", nB = () => "用于简化国际化工作流程的工具和服务。", rB = () => "国際化ワークフローを効率化するためのツールとサービス。", iB = () => "Tools and services to streamline your internationalization workflow.", aB = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", oB = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xz(e) : n === "fr" ? Zz(e) : n === "es" ? Qz(e) : n === "de" ? $z(e) : n === "it" ? eB(e) : n === "pt" ? tB(e) : n === "zh" ? nB(e) : n === "ja" ? rB(e) : n === "ko" ? iB(e) : aB(e);
}), sB = () => "Learn More", cB = () => "En savoir plus", lB = () => "Más información", uB = () => "Mehr erfahren", dB = () => "Scopri di più", fB = () => "Saiba Mais", pB = () => "了解更多", mB = () => "詳細はこちら", hB = () => "Learn More", gB = () => "Узнать больше", _B = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? sB(e) : n === "fr" ? cB(e) : n === "es" ? lB(e) : n === "de" ? uB(e) : n === "it" ? dB(e) : n === "pt" ? fB(e) : n === "zh" ? pB(e) : n === "ja" ? mB(e) : n === "ko" ? hB(e) : gB(e);
}), vB = () => "Benchmark CLI", yB = () => "Benchmark CLI", bB = () => "CLI de Benchmark", xB = () => "Benchmark CLI", SB = () => "CLI del Benchmark", CB = () => "Benchmark CLI", wB = () => "基准测试 CLI", TB = () => "Benchmark CLI", EB = () => "Benchmark CLI", DB = () => "Benchmark CLI", OB = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vB(e) : n === "fr" ? yB(e) : n === "es" ? bB(e) : n === "de" ? xB(e) : n === "it" ? SB(e) : n === "pt" ? CB(e) : n === "zh" ? wB(e) : n === "ja" ? TB(e) : n === "ko" ? EB(e) : DB(e);
}), kB = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", AB = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", jB = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", MB = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", NB = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", PB = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", FB = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", IB = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", LB = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", RB = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", zB = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kB(e) : n === "fr" ? AB(e) : n === "es" ? jB(e) : n === "de" ? MB(e) : n === "it" ? NB(e) : n === "pt" ? PB(e) : n === "zh" ? FB(e) : n === "ja" ? IB(e) : n === "ko" ? LB(e) : RB(e);
}), BB = () => "Free", VB = () => "Gratuit", HB = () => "Gratis", UB = () => "Kostenlos", WB = () => "Gratis", GB = () => "Grátis", KB = () => "免费", qB = () => "無料", JB = () => "Free", YB = () => "Бесплатно", XB = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? BB(e) : n === "fr" ? VB(e) : n === "es" ? HB(e) : n === "de" ? UB(e) : n === "it" ? WB(e) : n === "pt" ? GB(e) : n === "zh" ? KB(e) : n === "ja" ? qB(e) : n === "ko" ? JB(e) : YB(e);
}), ZB = () => "Benchmark Cloud", QB = () => "Benchmark Cloud", $B = () => "Benchmark Cloud", eV = () => "Benchmark Cloud", tV = () => "Benchmark Cloud", nV = () => "Benchmark Cloud", rV = () => "基准测试云", iV = () => "Benchmark Cloud", aV = () => "Benchmark Cloud", oV = () => "Benchmark Cloud", sV = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ZB(e) : n === "fr" ? QB(e) : n === "es" ? $B(e) : n === "de" ? eV(e) : n === "it" ? tV(e) : n === "pt" ? nV(e) : n === "zh" ? rV(e) : n === "ja" ? iV(e) : n === "ko" ? aV(e) : oV(e);
}), cV = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", lV = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", uV = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", dV = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", fV = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", pV = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", mV = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", hV = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", gV = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", _V = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", vV = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? cV(e) : n === "fr" ? lV(e) : n === "es" ? uV(e) : n === "de" ? dV(e) : n === "it" ? fV(e) : n === "pt" ? pV(e) : n === "zh" ? mV(e) : n === "ja" ? hV(e) : n === "ko" ? gV(e) : _V(e);
}), yV = () => "$29/mo", bV = () => "29 €/mois", xV = () => "29 $/mes", SV = () => "29 $/Monat", CV = () => "29 $/mese", wV = () => "29 $/mês", TV = () => "29 $/月", EV = () => "29ドル/月", DV = () => "$29/mo", OV = () => "29 $/мес", kV = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yV(e) : n === "fr" ? bV(e) : n === "es" ? xV(e) : n === "de" ? SV(e) : n === "it" ? CV(e) : n === "pt" ? wV(e) : n === "zh" ? TV(e) : n === "ja" ? EV(e) : n === "ko" ? DV(e) : OV(e);
}), AV = () => "Benchmark Enterprise", jV = () => "Benchmark Enterprise", MV = () => "Benchmark Enterprise", NV = () => "Benchmark Enterprise", PV = () => "Benchmark Enterprise", FV = () => "Benchmark Enterprise", IV = () => "基准测试企业版", LV = () => "Benchmark Enterprise", RV = () => "Benchmark Enterprise", zV = () => "Benchmark Enterprise", BV = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? AV(e) : n === "fr" ? jV(e) : n === "es" ? MV(e) : n === "de" ? NV(e) : n === "it" ? PV(e) : n === "pt" ? FV(e) : n === "zh" ? IV(e) : n === "ja" ? LV(e) : n === "ko" ? RV(e) : zV(e);
}), VV = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", HV = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", UV = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", WV = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", GV = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", KV = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", qV = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", JV = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", YV = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", XV = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", ZV = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? VV(e) : n === "fr" ? HV(e) : n === "es" ? UV(e) : n === "de" ? WV(e) : n === "it" ? GV(e) : n === "pt" ? KV(e) : n === "zh" ? qV(e) : n === "ja" ? JV(e) : n === "ko" ? YV(e) : XV(e);
}), QV = () => "Contact Us", $V = () => "Nous contacter", eH = () => "Contáctanos", tH = () => "Kontaktieren Sie uns", nH = () => "Contattaci", rH = () => "Contate-nos", iH = () => "联系我们", aH = () => "お問い合わせ", oH = () => "Contact Us", sH = () => "Связаться с нами", cH = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? QV(e) : n === "fr" ? $V(e) : n === "es" ? eH(e) : n === "de" ? tH(e) : n === "it" ? nH(e) : n === "pt" ? rH(e) : n === "zh" ? iH(e) : n === "ja" ? aH(e) : n === "ko" ? oH(e) : sH(e);
}), lH = () => "Migration Assistant", uH = () => "Assistant de migration", dH = () => "Asistente de migración", fH = () => "Migrationsassistent", pH = () => "Assistente alla migrazione", mH = () => "Assistente de migração", hH = () => "迁移助手", gH = () => "移行アシスタント", _H = () => "Migration Assistant", vH = () => "Помощник по миграции", yH = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? lH(e) : n === "fr" ? uH(e) : n === "es" ? dH(e) : n === "de" ? fH(e) : n === "it" ? pH(e) : n === "pt" ? mH(e) : n === "zh" ? hH(e) : n === "ja" ? gH(e) : n === "ko" ? _H(e) : vH(e);
}), bH = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", xH = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", SH = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", CH = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", wH = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", TH = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", EH = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", DH = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", OH = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", kH = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", AH = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? bH(e) : n === "fr" ? xH(e) : n === "es" ? SH(e) : n === "de" ? CH(e) : n === "it" ? wH(e) : n === "pt" ? TH(e) : n === "zh" ? EH(e) : n === "ja" ? DH(e) : n === "ko" ? OH(e) : kH(e);
}), jH = () => "$99 one-time", MH = () => "99 € (unique)", NH = () => "99 $ pago único", PH = () => "Einmalig 99 $", FH = () => "99 $ una tantum", IH = () => "99 $ taxa única", LH = () => "99 $ 一次性费用", RH = () => "99ドル（一回限り）", zH = () => "$99 one-time", BH = () => "99 $ (разово)", VH = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? jH(e) : n === "fr" ? MH(e) : n === "es" ? NH(e) : n === "de" ? PH(e) : n === "it" ? FH(e) : n === "pt" ? IH(e) : n === "zh" ? LH(e) : n === "ja" ? RH(e) : n === "ko" ? zH(e) : BH(e);
}), HH = () => "Translation QA", UH = () => "QA des traductions", WH = () => "QA de traducción", GH = () => "Übersetzungs-QA", KH = () => "QA delle traduzioni", qH = () => "QA de tradução", JH = () => "翻译 QA", YH = () => "翻訳QA", XH = () => "Translation QA", ZH = () => "QA переводов", QH = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? HH(e) : n === "fr" ? UH(e) : n === "es" ? WH(e) : n === "de" ? GH(e) : n === "it" ? KH(e) : n === "pt" ? qH(e) : n === "zh" ? JH(e) : n === "ja" ? YH(e) : n === "ko" ? XH(e) : ZH(e);
}), $H = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", eU = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", tU = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", nU = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", rU = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", iU = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", aU = () => "自动检查翻译缺失、复数问题和上下文错误。", oU = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", sU = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", cU = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", lU = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $H(e) : n === "fr" ? eU(e) : n === "es" ? tU(e) : n === "de" ? nU(e) : n === "it" ? rU(e) : n === "pt" ? iU(e) : n === "zh" ? aU(e) : n === "ja" ? oU(e) : n === "ko" ? sU(e) : cU(e);
}), uU = () => "$19/mo", dU = () => "19 €/mois", fU = () => "19 $/mes", pU = () => "19 $/Monat", mU = () => "19 $/mese", hU = () => "19 $/mês", gU = () => "19 $/月", _U = () => "19ドル/月", vU = () => "$19/mo", yU = () => "19 $/мес", bU = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? uU(e) : n === "fr" ? dU(e) : n === "es" ? fU(e) : n === "de" ? pU(e) : n === "it" ? mU(e) : n === "pt" ? hU(e) : n === "zh" ? gU(e) : n === "ja" ? _U(e) : n === "ko" ? vU(e) : yU(e);
}), xU = () => "Bundle Optimizer", SU = () => "Optimiseur de bundle", CU = () => "Optimizador de bundle", wU = () => "Bundle-Optimierer", TU = () => "Ottimizzatore del bundle", EU = () => "Otimizador de bundle", DU = () => "包优化器", OU = () => "バンドルオプティマイザー", kU = () => "Bundle Optimizer", AU = () => "Оптимизатор бандла", jU = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xU(e) : n === "fr" ? SU(e) : n === "es" ? CU(e) : n === "de" ? wU(e) : n === "it" ? TU(e) : n === "pt" ? EU(e) : n === "zh" ? DU(e) : n === "ja" ? OU(e) : n === "ko" ? kU(e) : AU(e);
}), MU = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", NU = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", PU = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", FU = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", IU = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", LU = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", RU = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", zU = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", BU = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", VU = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", HU = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? MU(e) : n === "fr" ? NU(e) : n === "es" ? PU(e) : n === "de" ? FU(e) : n === "it" ? IU(e) : n === "pt" ? LU(e) : n === "zh" ? RU(e) : n === "ja" ? zU(e) : n === "ko" ? BU(e) : VU(e);
}), UU = () => "$49/mo", WU = () => "49 €/mois", GU = () => "49 $/mes", KU = () => "49 $/Monat", qU = () => "49 $/mese", JU = () => "49 $/mês", YU = () => "49 $/月", XU = () => "49ドル/月", ZU = () => "$49/mo", QU = () => "49 $/мес", $U = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? UU(e) : n === "fr" ? WU(e) : n === "es" ? GU(e) : n === "de" ? KU(e) : n === "it" ? qU(e) : n === "pt" ? JU(e) : n === "zh" ? YU(e) : n === "ja" ? XU(e) : n === "ko" ? ZU(e) : QU(e);
}), eW = () => "Settings", tW = () => "Paramètres", nW = () => "Ajustes", rW = () => "Einstellungen", iW = () => "Impostazioni", aW = () => "Configurações", oW = () => "设置", sW = () => "設定", cW = () => "Settings", lW = () => "Настройки", uW = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? eW(e) : n === "fr" ? tW(e) : n === "es" ? nW(e) : n === "de" ? rW(e) : n === "it" ? iW(e) : n === "pt" ? aW(e) : n === "zh" ? oW(e) : n === "ja" ? sW(e) : n === "ko" ? cW(e) : lW(e);
}), dW = () => "Manage your account preferences and configuration.", fW = () => "Gérez les préférences et la configuration de votre compte.", pW = () => "Gestiona las preferencias y la configuración de tu cuenta.", mW = () => "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.", hW = () => "Gestisci le preferenze del tuo account e la configurazione.", gW = () => "Gerencie suas preferências de conta e configuração.", _W = () => "管理您的账户偏好和配置。", vW = () => "アカウント設定と構成を管理します。", yW = () => "Manage your account preferences and configuration.", bW = () => "Управляйте предпочтениями и конфигурацией вашей учетной записи.", xW = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? dW(e) : n === "fr" ? fW(e) : n === "es" ? pW(e) : n === "de" ? mW(e) : n === "it" ? hW(e) : n === "pt" ? gW(e) : n === "zh" ? _W(e) : n === "ja" ? vW(e) : n === "ko" ? yW(e) : bW(e);
}), SW = () => "Profile", CW = () => "Profil", wW = () => "Perfil", TW = () => "Profil", EW = () => "Profilo", DW = () => "Perfil", OW = () => "个人资料", kW = () => "プロフィール", AW = () => "Profile", jW = () => "Профиль", MW = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? SW(e) : n === "fr" ? CW(e) : n === "es" ? wW(e) : n === "de" ? TW(e) : n === "it" ? EW(e) : n === "pt" ? DW(e) : n === "zh" ? OW(e) : n === "ja" ? kW(e) : n === "ko" ? AW(e) : jW(e);
}), NW = () => "Display Name", PW = () => "Nom affiché", FW = () => "Nombre visible", IW = () => "Anzeigename", LW = () => "Nome visualizzato", RW = () => "Nome de exibição", zW = () => "显示名称", BW = () => "表示名", VW = () => "Display Name", HW = () => "Отображаемое имя", UW = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? NW(e) : n === "fr" ? PW(e) : n === "es" ? FW(e) : n === "de" ? IW(e) : n === "it" ? LW(e) : n === "pt" ? RW(e) : n === "zh" ? zW(e) : n === "ja" ? BW(e) : n === "ko" ? VW(e) : HW(e);
}), WW = () => "Email", GW = () => "E-mail", KW = () => "Correo electrónico", qW = () => "E-Mail", JW = () => "Email", YW = () => "E-mail", XW = () => "电子邮件", ZW = () => "メールアドレス", QW = () => "Email", $W = () => "Электронная почта", eG = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? WW(e) : n === "fr" ? GW(e) : n === "es" ? KW(e) : n === "de" ? qW(e) : n === "it" ? JW(e) : n === "pt" ? YW(e) : n === "zh" ? XW(e) : n === "ja" ? ZW(e) : n === "ko" ? QW(e) : $W(e);
}), tG = () => "Preferences", nG = () => "Préférences", rG = () => "Preferencias", iG = () => "Einstellungen", aG = () => "Preferenze", oG = () => "Preferências", sG = () => "偏好", cG = () => "設定", lG = () => "Preferences", uG = () => "Предпочтения", dG = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? tG(e) : n === "fr" ? nG(e) : n === "es" ? rG(e) : n === "de" ? iG(e) : n === "it" ? aG(e) : n === "pt" ? oG(e) : n === "zh" ? sG(e) : n === "ja" ? cG(e) : n === "ko" ? lG(e) : uG(e);
}), fG = () => "Email Notifications", pG = () => "Notifications e-mail", mG = () => "Notificaciones por correo electrónico", hG = () => "E-Mail-Benachrichtigungen", gG = () => "Notifiche via email", _G = () => "Notificações por e-mail", vG = () => "电子邮件通知", yG = () => "メール通知", bG = () => "Email Notifications", xG = () => "Уведомления по почте", SG = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? fG(e) : n === "fr" ? pG(e) : n === "es" ? mG(e) : n === "de" ? hG(e) : n === "it" ? gG(e) : n === "pt" ? _G(e) : n === "zh" ? vG(e) : n === "ja" ? yG(e) : n === "ko" ? bG(e) : xG(e);
}), CG = () => "Receive weekly benchmark reports", wG = () => "Recevoir les rapports hebdomadaires", TG = () => "Recibir informes semanales de benchmarks", EG = () => "Wöchentliche Benchmark-Berichte erhalten", DG = () => "Ricevi rapporti settimanali sui benchmark", OG = () => "Receber relatórios semanais de benchmarks", kG = () => "接收每周基准测试报告", AG = () => "毎週のベンチマークレポートを受け取る", jG = () => "Receive weekly benchmark reports", MG = () => "Получать еженедельные отчеты о бенчмарках", NG = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? CG(e) : n === "fr" ? wG(e) : n === "es" ? TG(e) : n === "de" ? EG(e) : n === "it" ? DG(e) : n === "pt" ? OG(e) : n === "zh" ? kG(e) : n === "ja" ? AG(e) : n === "ko" ? jG(e) : MG(e);
}), PG = () => "Toggle notifications", FG = () => "Activer/désactiver les notifications", IG = () => "Cambiar notificaciones", LG = () => "Benachrichtigungen umschalten", RG = () => "Attiva/disattiva notifiche", zG = () => "Alternar notificações", BG = () => "切换通知", VG = () => "通知の切り替え", HG = () => "Toggle notifications", UG = () => "Переключить уведомления", WG = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? PG(e) : n === "fr" ? FG(e) : n === "es" ? IG(e) : n === "de" ? LG(e) : n === "it" ? RG(e) : n === "pt" ? zG(e) : n === "zh" ? BG(e) : n === "ja" ? VG(e) : n === "ko" ? HG(e) : UG(e);
}), GG = () => "Dark Mode", KG = () => "Mode sombre", qG = () => "Modo oscuro", JG = () => "Dunkelmodus", YG = () => "Modalità scura", XG = () => "Modo Escuro", ZG = () => "深色模式", QG = () => "ダークモード", $G = () => "Dark Mode", eK = () => "Темная тема", tK = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? GG(e) : n === "fr" ? KG(e) : n === "es" ? qG(e) : n === "de" ? JG(e) : n === "it" ? YG(e) : n === "pt" ? XG(e) : n === "zh" ? ZG(e) : n === "ja" ? QG(e) : n === "ko" ? $G(e) : eK(e);
}), nK = () => "Use dark color scheme", rK = () => "Utiliser le thème sombre", iK = () => "Usar esquema de colores oscuro", aK = () => "Dunkles Farbschema verwenden", oK = () => "Usa lo schema colori scuro", sK = () => "Usar esquema de cores escuro", cK = () => "使用深色配色方案", lK = () => "ダークカラー（暗い配色）を使用する", uK = () => "Use dark color scheme", dK = () => "Использовать темную цветовую схему", fK = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? nK(e) : n === "fr" ? rK(e) : n === "es" ? iK(e) : n === "de" ? aK(e) : n === "it" ? oK(e) : n === "pt" ? sK(e) : n === "zh" ? cK(e) : n === "ja" ? lK(e) : n === "ko" ? uK(e) : dK(e);
}), pK = () => "Toggle dark mode", mK = () => "Basculer le mode sombre", hK = () => "Cambiar modo oscuro", gK = () => "Dunkelmodus umschalten", _K = () => "Attiva/disattiva modalità scura", vK = () => "Alternar modo escuro", yK = () => "切换深色模式", bK = () => "ダークモードの切り替え", xK = () => "Toggle dark mode", SK = () => "Переключить темную тему", CK = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? pK(e) : n === "fr" ? mK(e) : n === "es" ? hK(e) : n === "de" ? gK(e) : n === "it" ? _K(e) : n === "pt" ? vK(e) : n === "zh" ? yK(e) : n === "ja" ? bK(e) : n === "ko" ? xK(e) : SK(e);
}), wK = () => "Default Language", TK = () => "Langue par défaut", EK = () => "Idioma predeterminado", DK = () => "Standardsprache", OK = () => "Lingua predefinita", kK = () => "Idioma padrão", AK = () => "默认语言", jK = () => "デフォルトの言語", MK = () => "Default Language", NK = () => "Язык по умолчанию", PK = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? wK(e) : n === "fr" ? TK(e) : n === "es" ? EK(e) : n === "de" ? DK(e) : n === "it" ? OK(e) : n === "pt" ? kK(e) : n === "zh" ? AK(e) : n === "ja" ? jK(e) : n === "ko" ? MK(e) : NK(e);
}), FK = () => "English (en)", IK = () => "Anglais (en)", LK = () => "Inglés (en)", RK = () => "Englisch (en)", zK = () => "Inglese (en)", BK = () => "Inglês (en)", VK = () => "英语 (en)", HK = () => "英語 (en)", UK = () => "English (en)", WK = () => "Английский (en)", GK = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? FK(e) : n === "fr" ? IK(e) : n === "es" ? LK(e) : n === "de" ? RK(e) : n === "it" ? zK(e) : n === "pt" ? BK(e) : n === "zh" ? VK(e) : n === "ja" ? HK(e) : n === "ko" ? UK(e) : WK(e);
}), KK = () => "French (fr)", qK = () => "Français (fr)", JK = () => "Francés (fr)", YK = () => "Französisch (fr)", XK = () => "Francese (fr)", ZK = () => "Francés (fr)", QK = () => "法语 (fr)", $K = () => "フランス語 (fr)", eq = () => "French (fr)", tq = () => "Французский (fr)", nq = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? KK(e) : n === "fr" ? qK(e) : n === "es" ? JK(e) : n === "de" ? YK(e) : n === "it" ? XK(e) : n === "pt" ? ZK(e) : n === "zh" ? QK(e) : n === "ja" ? $K(e) : n === "ko" ? eq(e) : tq(e);
}), rq = () => "German (de)", iq = () => "Allemand (de)", aq = () => "Alemán (de)", oq = () => "Deutsch (de)", sq = () => "Tedesco (de)", cq = () => "Alemão (de)", lq = () => "德语 (de)", uq = () => "ドイツ語 (de)", dq = () => "German (de)", fq = () => "Немецкий (de)", pq = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? rq(e) : n === "fr" ? iq(e) : n === "es" ? aq(e) : n === "de" ? oq(e) : n === "it" ? sq(e) : n === "pt" ? cq(e) : n === "zh" ? lq(e) : n === "ja" ? uq(e) : n === "ko" ? dq(e) : fq(e);
}), mq = () => "Spanish (es)", hq = () => "Espagnol (es)", gq = () => "Español (es)", _q = () => "Spanisch (es)", vq = () => "Spagnolo (es)", yq = () => "Espanhol (es)", bq = () => "西班牙语 (es)", xq = () => "スペイン語 (es)", Sq = () => "Spanish (es)", Cq = () => "Испанский (es)", wq = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? mq(e) : n === "fr" ? hq(e) : n === "es" ? gq(e) : n === "de" ? _q(e) : n === "it" ? vq(e) : n === "pt" ? yq(e) : n === "zh" ? bq(e) : n === "ja" ? xq(e) : n === "ko" ? Sq(e) : Cq(e);
}), Tq = () => "Japanese (ja)", Eq = () => "Japonais (ja)", Dq = () => "Japonés (ja)", Oq = () => "Japanisch (ja)", kq = () => "Giapponese (ja)", Aq = () => "Japonês (ja)", jq = () => "日语 (ja)", Mq = () => "日本語 (ja)", Nq = () => "Japanese (ja)", Pq = () => "Японский (ja)", Fq = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Tq(e) : n === "fr" ? Eq(e) : n === "es" ? Dq(e) : n === "de" ? Oq(e) : n === "it" ? kq(e) : n === "pt" ? Aq(e) : n === "zh" ? jq(e) : n === "ja" ? Mq(e) : n === "ko" ? Nq(e) : Pq(e);
}), Iq = () => "Chinese Simplified (zh-CN)", Lq = () => "Chinois simplifié (zh-CN)", Rq = () => "Chino simplificado (zh-CN)", zq = () => "Chinesisch vereinfacht (zh-CN)", Bq = () => "Cinese semplificato (zh-CN)", Vq = () => "Chinês Simplificado (zh-CN)", Hq = () => "简体中文 (zh-CN)", Uq = () => "中国語（簡体字） (zh-CN)", Wq = () => "Chinese Simplified (zh-CN)", Gq = () => "Китайский упрощенный (zh-CN)", Kq = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Iq(e) : n === "fr" ? Lq(e) : n === "es" ? Rq(e) : n === "de" ? zq(e) : n === "it" ? Bq(e) : n === "pt" ? Vq(e) : n === "zh" ? Hq(e) : n === "ja" ? Uq(e) : n === "ko" ? Wq(e) : Gq(e);
}), qq = () => "Arabic (ar)", Jq = () => "Arabe (ar)", Yq = () => "Árabe (ar)", Xq = () => "Arabisch (ar)", Zq = () => "Arabo (ar)", Qq = () => "Árabe (ar)", $q = () => "阿拉伯语 (ar)", eJ = () => "アラビア語 (ar)", tJ = () => "Arabic (ar)", nJ = () => "Арабский (ar)", rJ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? qq(e) : n === "fr" ? Jq(e) : n === "es" ? Yq(e) : n === "de" ? Xq(e) : n === "it" ? Zq(e) : n === "pt" ? Qq(e) : n === "zh" ? $q(e) : n === "ja" ? eJ(e) : n === "ko" ? tJ(e) : nJ(e);
}), iJ = () => "API Access", aJ = () => "Accès API", oJ = () => "Acceso API", sJ = () => "API-Zugriff", cJ = () => "Accesso API", lJ = () => "Acesso API", uJ = () => "API 访问", dJ = () => "APIアクセス", fJ = () => "API Access", pJ = () => "Доступ к API", mJ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? iJ(e) : n === "fr" ? aJ(e) : n === "es" ? oJ(e) : n === "de" ? sJ(e) : n === "it" ? cJ(e) : n === "pt" ? lJ(e) : n === "zh" ? uJ(e) : n === "ja" ? dJ(e) : n === "ko" ? fJ(e) : pJ(e);
}), hJ = () => "API Key", gJ = () => "Clé API", _J = () => "Llave API", vJ = () => "API-Schlüssel", yJ = () => "Chiave API", bJ = () => "Chave API", xJ = () => "API 密钥", SJ = () => "APIキー", CJ = () => "API Key", wJ = () => "Ключ API", TJ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? hJ(e) : n === "fr" ? gJ(e) : n === "es" ? _J(e) : n === "de" ? vJ(e) : n === "it" ? yJ(e) : n === "pt" ? bJ(e) : n === "zh" ? xJ(e) : n === "ja" ? SJ(e) : n === "ko" ? CJ(e) : wJ(e);
}), EJ = () => "Copy", DJ = () => "Copier", OJ = () => "Copiar", kJ = () => "Kopieren", AJ = () => "Copia", jJ = () => "Copiar", MJ = () => "复制", NJ = () => "コピー", PJ = () => "Copy", FJ = () => "Копировать", IJ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? EJ(e) : n === "fr" ? DJ(e) : n === "es" ? OJ(e) : n === "de" ? kJ(e) : n === "it" ? AJ(e) : n === "pt" ? jJ(e) : n === "zh" ? MJ(e) : n === "ja" ? NJ(e) : n === "ko" ? PJ(e) : FJ(e);
}), LJ = () => "Use this key to access the benchmarking API programmatically.", RJ = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", zJ = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", BJ = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", VJ = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", HJ = () => "Use esta chave para acessar a API de benchmarking programaticamente.", UJ = () => "使用此密钥以编程方式访问基准测试 API。", WJ = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", GJ = () => "Use this key to access the benchmarking API programmatically.", KJ = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", qJ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? LJ(e) : n === "fr" ? RJ(e) : n === "es" ? zJ(e) : n === "de" ? BJ(e) : n === "it" ? VJ(e) : n === "pt" ? HJ(e) : n === "zh" ? UJ(e) : n === "ja" ? WJ(e) : n === "ko" ? GJ(e) : KJ(e);
}), JJ = () => "Cancel", YJ = () => "Annuler", XJ = () => "Cancelar", ZJ = () => "Abbrechen", QJ = () => "Annulla", $J = () => "Cancelar", eY = () => "取消", tY = () => "キャンセル", nY = () => "Cancel", rY = () => "Отмена", iY = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? JJ(e) : n === "fr" ? YJ(e) : n === "es" ? XJ(e) : n === "de" ? ZJ(e) : n === "it" ? QJ(e) : n === "pt" ? $J(e) : n === "zh" ? eY(e) : n === "ja" ? tY(e) : n === "ko" ? nY(e) : rY(e);
}), aY = () => "Save Changes", oY = () => "Enregistrer", sY = () => "Guardar cambios", cY = () => "Änderungen speichern", lY = () => "Salva modifiche", uY = () => "Salvar alterações", dY = () => "保存更改", fY = () => "変更を保存", pY = () => "Save Changes", mY = () => "Сохранить изменения", hY = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? aY(e) : n === "fr" ? oY(e) : n === "es" ? sY(e) : n === "de" ? cY(e) : n === "it" ? lY(e) : n === "pt" ? uY(e) : n === "zh" ? dY(e) : n === "ja" ? fY(e) : n === "ko" ? pY(e) : mY(e);
}), gY = () => "Our Team", _Y = () => "Notre équipe", vY = () => "Nuestro equipo", yY = () => "Unser Team", bY = () => "Il nostro team", xY = () => "Nossa equipe", SY = () => "我们的团队", CY = () => "私たちのチーム", wY = () => "Our Team", TY = () => "Наша команда", EY = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? gY(e) : n === "fr" ? _Y(e) : n === "es" ? vY(e) : n === "de" ? yY(e) : n === "it" ? bY(e) : n === "pt" ? xY(e) : n === "zh" ? SY(e) : n === "ja" ? CY(e) : n === "ko" ? wY(e) : TY(e);
}), DY = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", OY = () => "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.", kY = () => "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.", AY = () => "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.", jY = () => "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.", MY = () => "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.", NY = () => "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。", PY = () => "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。", FY = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", IY = () => "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.", LY = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? DY(e) : n === "fr" ? OY(e) : n === "es" ? kY(e) : n === "de" ? AY(e) : n === "it" ? jY(e) : n === "pt" ? MY(e) : n === "zh" ? NY(e) : n === "ja" ? PY(e) : n === "ko" ? FY(e) : IY(e);
}), RY = () => "Sarah Chen", zY = () => "Sarah Chen", BY = () => "Sarah Chen", VY = () => "Sarah Chen", HY = () => "Sarah Chen", UY = () => "Sarah Chen", WY = () => "Sarah Chen", GY = () => "Sarah Chen", KY = () => "Sarah Chen", qY = () => "Сара Чен", JY = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? RY(e) : n === "fr" ? zY(e) : n === "es" ? BY(e) : n === "de" ? VY(e) : n === "it" ? HY(e) : n === "pt" ? UY(e) : n === "zh" ? WY(e) : n === "ja" ? GY(e) : n === "ko" ? KY(e) : qY(e);
}), YY = () => "Founder & Lead Engineer", XY = () => "Fondatrice & lead ingénieur", ZY = () => "Fundadora e ingeniera principal", QY = () => "Gründerin & Leitende Ingenieurin", $Y = () => "Fondatrice e Responsabile tecnico", eX = () => "Fundadora e Engenheira Líder", tX = () => "创始人兼首席工程师", nX = () => "創設者 & リードエンジニア", rX = () => "Founder & Lead Engineer", iX = () => "Основатель и ведущий инженер", aX = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? YY(e) : n === "fr" ? XY(e) : n === "es" ? ZY(e) : n === "de" ? QY(e) : n === "it" ? $Y(e) : n === "pt" ? eX(e) : n === "zh" ? tX(e) : n === "ja" ? nX(e) : n === "ko" ? rX(e) : iX(e);
}), oX = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", sX = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", cX = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", lX = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", uX = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", dX = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", fX = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", pX = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", mX = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", hX = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", gX = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oX(e) : n === "fr" ? sX(e) : n === "es" ? cX(e) : n === "de" ? lX(e) : n === "it" ? uX(e) : n === "pt" ? dX(e) : n === "zh" ? fX(e) : n === "ja" ? pX(e) : n === "ko" ? mX(e) : hX(e);
}), _X = () => "Marcus Weber", vX = () => "Marcus Weber", yX = () => "Marcus Weber", bX = () => "Marcus Weber", xX = () => "Marcus Weber", SX = () => "Marcus Weber", CX = () => "Marcus Weber", wX = () => "Marcus Weber", TX = () => "Marcus Weber", EX = () => "Маркус Вебер", DX = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _X(e) : n === "fr" ? vX(e) : n === "es" ? yX(e) : n === "de" ? bX(e) : n === "it" ? xX(e) : n === "pt" ? SX(e) : n === "zh" ? CX(e) : n === "ja" ? wX(e) : n === "ko" ? TX(e) : EX(e);
}), OX = () => "Performance Engineer", kX = () => "Ingénieur performance", AX = () => "Ingeniero de rendimiento", jX = () => "Performance-Ingenieur", MX = () => "Ingegnere delle prestazioni", NX = () => "Engenheiro de performance", PX = () => "性能工程师", FX = () => "パフォーマンスエンジニア", IX = () => "Performance Engineer", LX = () => "Инженер по производительности", RX = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? OX(e) : n === "fr" ? kX(e) : n === "es" ? AX(e) : n === "de" ? jX(e) : n === "it" ? MX(e) : n === "pt" ? NX(e) : n === "zh" ? PX(e) : n === "ja" ? FX(e) : n === "ko" ? IX(e) : LX(e);
}), zX = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", BX = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", VX = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", HX = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", UX = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", WX = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", GX = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", KX = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", qX = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", JX = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", YX = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? zX(e) : n === "fr" ? BX(e) : n === "es" ? VX(e) : n === "de" ? HX(e) : n === "it" ? UX(e) : n === "pt" ? WX(e) : n === "zh" ? GX(e) : n === "ja" ? KX(e) : n === "ko" ? qX(e) : JX(e);
}), XX = () => "Aisha Patel", ZX = () => "Aisha Patel", QX = () => "Aisha Patel", $X = () => "Aisha Patel", eZ = () => "Aisha Patel", tZ = () => "Aisha Patel", nZ = () => "Aisha Patel", rZ = () => "Aisha Patel", iZ = () => "Aisha Patel", aZ = () => "Айша Патель", oZ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? XX(e) : n === "fr" ? ZX(e) : n === "es" ? QX(e) : n === "de" ? $X(e) : n === "it" ? eZ(e) : n === "pt" ? tZ(e) : n === "zh" ? nZ(e) : n === "ja" ? rZ(e) : n === "ko" ? iZ(e) : aZ(e);
}), sZ = () => "Developer Advocate", cZ = () => "Developer advocate", lZ = () => "Developer Advocate", uZ = () => "Developer Advocate", dZ = () => "Developer Advocate", fZ = () => "Developer Advocate", pZ = () => "开发者倡导者", mZ = () => "Developer Advocate", hZ = () => "Developer Advocate", gZ = () => "Developer Advocate", _Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? sZ(e) : n === "fr" ? cZ(e) : n === "es" ? lZ(e) : n === "de" ? uZ(e) : n === "it" ? dZ(e) : n === "pt" ? fZ(e) : n === "zh" ? pZ(e) : n === "ja" ? mZ(e) : n === "ko" ? hZ(e) : gZ(e);
}), vZ = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", yZ = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", bZ = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", xZ = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", SZ = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", CZ = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", wZ = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", TZ = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", EZ = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", DZ = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", OZ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vZ(e) : n === "fr" ? yZ(e) : n === "es" ? bZ(e) : n === "de" ? xZ(e) : n === "it" ? SZ(e) : n === "pt" ? CZ(e) : n === "zh" ? wZ(e) : n === "ja" ? TZ(e) : n === "ko" ? EZ(e) : DZ(e);
}), kZ = () => "Tomás Rodríguez", AZ = () => "Tomás Rodríguez", jZ = () => "Tomás Rodríguez", MZ = () => "Tomás Rodríguez", NZ = () => "Tomás Rodríguez", PZ = () => "Tomás Rodríguez", FZ = () => "Tomás Rodríguez", IZ = () => "Tomás Rodríguez", LZ = () => "Tomás Rodríguez", RZ = () => "Томас Родригес", zZ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kZ(e) : n === "fr" ? AZ(e) : n === "es" ? jZ(e) : n === "de" ? MZ(e) : n === "it" ? NZ(e) : n === "pt" ? PZ(e) : n === "zh" ? FZ(e) : n === "ja" ? IZ(e) : n === "ko" ? LZ(e) : RZ(e);
}), BZ = () => "Full-Stack Developer", VZ = () => "Développeur full-stack", HZ = () => "Desarrollador Full-Stack", UZ = () => "Full-Stack-Entwickler", WZ = () => "Sviluppatore Full-Stack", GZ = () => "Desenvolvedor Full-Stack", KZ = () => "全栈开发人员", qZ = () => "フルスタックデベロッパー", JZ = () => "Full-Stack Developer", YZ = () => "Full-Stack разработчик", XZ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? BZ(e) : n === "fr" ? VZ(e) : n === "es" ? HZ(e) : n === "de" ? UZ(e) : n === "it" ? WZ(e) : n === "pt" ? GZ(e) : n === "zh" ? KZ(e) : n === "ja" ? qZ(e) : n === "ko" ? JZ(e) : YZ(e);
}), ZZ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", QZ = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", $Z = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", eQ = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", tQ = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", nQ = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", rQ = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", iQ = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", aQ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", oQ = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", sQ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ZZ(e) : n === "fr" ? QZ(e) : n === "es" ? $Z(e) : n === "de" ? eQ(e) : n === "it" ? tQ(e) : n === "pt" ? nQ(e) : n === "zh" ? rQ(e) : n === "ja" ? iQ(e) : n === "ko" ? aQ(e) : oQ(e);
}), cQ = () => "Yuki Tanaka", lQ = () => "Yuki Tanaka", uQ = () => "Yuki Tanaka", dQ = () => "Yuki Tanaka", fQ = () => "Yuki Tanaka", pQ = () => "Yuki Tanaka", mQ = () => "Yuki Tanaka", hQ = () => "Yuki Tanaka", gQ = () => "Yuki Tanaka", _Q = () => "Юки Танака", vQ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? cQ(e) : n === "fr" ? lQ(e) : n === "es" ? uQ(e) : n === "de" ? dQ(e) : n === "it" ? fQ(e) : n === "pt" ? pQ(e) : n === "zh" ? mQ(e) : n === "ja" ? hQ(e) : n === "ko" ? gQ(e) : _Q(e);
}), yQ = () => "Data Analyst", bQ = () => "Analyste de données", xQ = () => "Analista de datos", SQ = () => "Datenanalyst", CQ = () => "Analista dati", wQ = () => "Analista de dados", TQ = () => "数据分析师", EQ = () => "データアナリスト", DQ = () => "Data Analyst", OQ = () => "Аналитик данных", kQ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yQ(e) : n === "fr" ? bQ(e) : n === "es" ? xQ(e) : n === "de" ? SQ(e) : n === "it" ? CQ(e) : n === "pt" ? wQ(e) : n === "zh" ? TQ(e) : n === "ja" ? EQ(e) : n === "ko" ? DQ(e) : OQ(e);
}), AQ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", jQ = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", MQ = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", NQ = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", PQ = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", FQ = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", IQ = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", LQ = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", RQ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", zQ = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", BQ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? AQ(e) : n === "fr" ? jQ(e) : n === "es" ? MQ(e) : n === "de" ? NQ(e) : n === "it" ? PQ(e) : n === "pt" ? FQ(e) : n === "zh" ? IQ(e) : n === "ja" ? LQ(e) : n === "ko" ? RQ(e) : zQ(e);
}), VQ = () => "Elena Kowalski", HQ = () => "Elena Kowalski", UQ = () => "Elena Kowalski", WQ = () => "Elena Kowalski", GQ = () => "Elena Kowalski", KQ = () => "Elena Kowalski", qQ = () => "Elena Kowalski", JQ = () => "Elena Kowalski", YQ = () => "Elena Kowalski", XQ = () => "Елена Ковальски", ZQ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? VQ(e) : n === "fr" ? HQ(e) : n === "es" ? UQ(e) : n === "de" ? WQ(e) : n === "it" ? GQ(e) : n === "pt" ? KQ(e) : n === "zh" ? qQ(e) : n === "ja" ? JQ(e) : n === "ko" ? YQ(e) : XQ(e);
}), QQ = () => "Community Manager", $Q = () => "Community manager", e$ = () => "Responsable de la comunidad", t$ = () => "Community Manager", n$ = () => "Responsable della comunità", r$ = () => "Gerente de comunidade", i$ = () => "社区经理", a$ = () => "コミュニティマネージャー", o$ = () => "Community Manager", s$ = () => "Комьюнити-менеджер", c$ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? QQ(e) : n === "fr" ? $Q(e) : n === "es" ? e$(e) : n === "de" ? t$(e) : n === "it" ? n$(e) : n === "pt" ? r$(e) : n === "zh" ? i$(e) : n === "ja" ? a$(e) : n === "ko" ? o$(e) : s$(e);
}), l$ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", u$ = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", d$ = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", f$ = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", p$ = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", m$ = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", h$ = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", g$ = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", _$ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", v$ = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", y$ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? l$(e) : n === "fr" ? u$(e) : n === "es" ? d$(e) : n === "de" ? f$(e) : n === "it" ? p$(e) : n === "pt" ? m$(e) : n === "zh" ? h$(e) : n === "ja" ? g$(e) : n === "ko" ? _$(e) : v$(e);
}), b$ = () => "404", x$ = () => "404", S$ = () => "404", C$ = () => "404", w$ = () => "404", T$ = () => "404", E$ = () => "404", D$ = () => "404", O$ = () => "404", k$ = () => "404", A$ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? b$(e) : n === "fr" ? x$(e) : n === "es" ? S$(e) : n === "de" ? C$(e) : n === "it" ? w$(e) : n === "pt" ? T$(e) : n === "zh" ? E$(e) : n === "ja" ? D$(e) : n === "ko" ? O$(e) : k$(e);
}), j$ = () => "Oops! Page not found", M$ = () => "Oups ! Page introuvable", N$ = () => "¡Ups! Página no encontrada", P$ = () => "Hoppla! Seite nicht gefunden", F$ = () => "Ops! Pagina non trovata", I$ = () => "Ops! Página não encontrada", L$ = () => "哎呀！页面未找到", R$ = () => "おっと！ページが見つかりません", z$ = () => "Oops! Page not found", B$ = () => "Упс! Страница не найдена", V$ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? j$(e) : n === "fr" ? M$(e) : n === "es" ? N$(e) : n === "de" ? P$(e) : n === "it" ? F$(e) : n === "pt" ? I$(e) : n === "zh" ? L$(e) : n === "ja" ? R$(e) : n === "ko" ? z$(e) : B$(e);
}), H$ = () => "Return to Home", U$ = () => "Retour à l'accueil", W$ = () => "Volver al inicio", G$ = () => "Zurück zur Startseite", K$ = () => "Torna alla Home", q$ = () => "Voltar para o início", J$ = () => "返回首页", Y$ = () => "ホームに戻る", X$ = () => "Return to Home", Z$ = () => "Вернуться на главную", Q$ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? H$(e) : n === "fr" ? U$(e) : n === "es" ? W$(e) : n === "de" ? G$(e) : n === "it" ? K$(e) : n === "pt" ? q$(e) : n === "zh" ? J$(e) : n === "ja" ? Y$(e) : n === "ko" ? X$(e) : Z$(e);
}), $$ = a({
	about_grid_methodologyDesc: () => Kp,
	about_grid_methodologyTitle: () => Fp,
	about_grid_whyExistsDesc: () => wp,
	about_grid_whyExistsTitle: () => pp,
	about_header_description: () => np,
	about_header_title: () => Gf,
	about_whatWeMeasure_bundleSizeImpact: () => mm,
	about_whatWeMeasure_bundleSizeImpactDesc: () => Tm,
	about_whatWeMeasure_hydrationCost: () => ih,
	about_whatWeMeasure_hydrationCostDesc: () => hh,
	about_whatWeMeasure_lazyLoading: () => Eh,
	about_whatWeMeasure_lazyLoadingDesc: () => Lh,
	about_whatWeMeasure_localeSwitch: () => Jh,
	about_whatWeMeasure_localeSwitchDesc: () => ag,
	about_whatWeMeasure_renderingOverhead: () => Im,
	about_whatWeMeasure_renderingOverheadDesc: () => qm,
	about_whatWeMeasure_title: () => rm,
	blog_header_description: () => Dg,
	blog_header_title: () => gg,
	blog_list_post1Category: () => O_,
	blog_list_post1Date: () => o_,
	blog_list_post1Excerpt: () => __,
	blog_list_post1Title: () => Yg,
	blog_list_post2Category: () => vv,
	blog_list_post2Date: () => X_,
	blog_list_post2Excerpt: () => sv,
	blog_list_post2Title: () => z_,
	blog_list_post3Category: () => cy,
	blog_list_post3Date: () => Bv,
	blog_list_post3Excerpt: () => Zv,
	blog_list_post3Title: () => kv,
	blog_list_post4Category: () => Qy,
	blog_list_post4Date: () => Ay,
	blog_list_post4Excerpt: () => Vy,
	blog_list_post4Title: () => yy,
	blog_list_post5Category: () => Hb,
	blog_list_post5Date: () => bb,
	blog_list_post5Excerpt: () => jb,
	blog_list_post5Title: () => lb,
	blog_list_post6Category: () => Mx,
	blog_list_post6Date: () => ux,
	blog_list_post6Excerpt: () => xx,
	blog_list_post6Title: () => $b,
	blog_list_readMore: () => Rg,
	careers_benefits_ossLabel: () => tC,
	careers_benefits_ossValue: () => fC,
	careers_benefits_payLabel: () => NS,
	careers_benefits_payValue: () => WS,
	careers_benefits_remoteLabel: () => dS,
	careers_benefits_remoteValue: () => SS,
	careers_header_description: () => eS,
	careers_header_title: () => Ux,
	careers_openPositions_applyNow: () => PC,
	careers_openPositions_backendDesc: () => qT,
	careers_openPositions_backendTitle: () => IT,
	careers_openPositions_community: () => Kw,
	careers_openPositions_devrelDesc: () => LE,
	careers_openPositions_devrelTitle: () => EE,
	careers_openPositions_documentation: () => Fw,
	careers_openPositions_engineering: () => ww,
	careers_openPositions_frontendDesc: () => TT,
	careers_openPositions_frontendTitle: () => mT,
	careers_openPositions_fullTime: () => nw,
	careers_openPositions_partTime: () => pw,
	careers_openPositions_qaDesc: () => aD,
	careers_openPositions_qaTitle: () => JE,
	careers_openPositions_remote: () => GC,
	careers_openPositions_sfRemote: () => rT,
	careers_openPositions_title: () => CC,
	careers_openPositions_writerDesc: () => hE,
	careers_openPositions_writerTitle: () => iE,
	contact_form_bugReport: () => RO,
	contact_form_contribution: () => _k,
	contact_form_email: () => $,
	contact_form_emailPlaceholder: () => gO,
	contact_form_message: () => zk,
	contact_form_messagePlaceholder: () => Xk,
	contact_form_methodologyQuestion: () => ok,
	contact_form_name: () => RD,
	contact_form_newBenchmarkIdea: () => YO,
	contact_form_other: () => Ok,
	contact_form_sendMessage: () => sA,
	contact_form_topic: () => DO,
	contact_form_yourName: () => YD,
	contact_header_description: () => DD,
	contact_header_title: () => gD,
	faq_header_description: () => kA,
	faq_header_title: () => vA,
	faq_list_a1: () => ZA,
	faq_list_a2: () => yj,
	faq_list_a3: () => Vj,
	faq_list_a4: () => lM,
	faq_list_a5: () => jM,
	faq_list_a6: () => $M,
	faq_list_a7: () => xN,
	faq_list_a8: () => UN,
	faq_list_q1: () => BA,
	faq_list_q2: () => cj,
	faq_list_q3: () => Aj,
	faq_list_q4: () => Qj,
	faq_list_q5: () => bM,
	faq_list_q6: () => HM,
	faq_list_q7: () => uN,
	faq_list_q8: () => MN,
	footer_builtWith: () => V,
	footer_contact: () => B,
	footer_contributing: () => z,
	footer_description: () => F,
	footer_github: () => L,
	footer_methodology: () => R,
	footer_resources: () => I,
	footer_title: () => P,
	header_blog: () => k,
	header_careers: () => A,
	header_contact: () => M,
	header_faq: () => j,
	header_home: () => C,
	header_methodology: () => w,
	header_mockPages: () => T,
	header_pricing: () => D,
	header_products: () => E,
	header_settings: () => N,
	header_team: () => O,
	home_hero_description: () => Y,
	home_hero_methodology: () => Z,
	home_hero_title: () => J,
	home_hero_viewResults: () => X,
	home_resultsTable_builtIn: () => Pf,
	home_resultsTable_bundleSize: () => Md,
	home_resultsTable_lazyLoading: () => ef,
	home_resultsTable_library: () => xd,
	home_resultsTable_lookupTime: () => Ud,
	home_resultsTable_manual: () => Cf,
	home_resultsTable_title: () => ud,
	home_resultsTable_yes: () => ff,
	home_understandingImpact_cacheDesc: () => ju,
	home_understandingImpact_cacheLabel: () => bu,
	home_understandingImpact_foucDesc: () => lu,
	home_understandingImpact_foucLabel: () => Ql,
	home_understandingImpact_measuresDesc: () => $u,
	home_understandingImpact_measuresTitle: () => Hu,
	home_understandingImpact_singleJsonBullet1: () => kc,
	home_understandingImpact_singleJsonBullet2: () => Bc,
	home_understandingImpact_singleJsonBullet3: () => Zc,
	home_understandingImpact_singleJsonIntro: () => vc,
	home_understandingImpact_singleJsonTitle: () => sc,
	home_understandingImpact_title: () => Xs,
	home_understandingImpact_tradeOffsIntro: () => yl,
	home_understandingImpact_tradeOffsTitle: () => cl,
	home_understandingImpact_waterfallDesc: () => Vl,
	home_understandingImpact_waterfallLabel: () => Al,
	home_whyItMatters_bundleSizeDesc: () => Yo,
	home_whyItMatters_bundleSizeTitle: () => Ro,
	home_whyItMatters_dynamicLoadingDesc: () => zs,
	home_whyItMatters_dynamicLoadingTitle: () => Os,
	home_whyItMatters_renderingDesc: () => _s,
	home_whyItMatters_renderingTitle: () => os,
	home_whyItMatters_title: () => Q,
	mockBanner: () => q,
	notFound_description: () => V$,
	notFound_returnHome: () => Q$,
	notFound_title: () => A$,
	pricing_header_description: () => dP,
	pricing_header_title: () => eP,
	pricing_tiers_contactSales: () => Dz,
	pricing_tiers_enterpriseFeature1: () => iR,
	pricing_tiers_enterpriseFeature2: () => hR,
	pricing_tiers_enterpriseFeature3: () => ER,
	pricing_tiers_enterpriseFeature4: () => LR,
	pricing_tiers_enterpriseFeature5: () => JR,
	pricing_tiers_enterpriseFeature6: () => az,
	pricing_tiers_enterpriseFeature7: () => gz,
	pricing_tiers_enterpriseName: () => IL,
	pricing_tiers_enterprisePrice: () => qL,
	pricing_tiers_getStarted: () => Rz,
	pricing_tiers_proFeature1: () => wI,
	pricing_tiers_proFeature2: () => FI,
	pricing_tiers_proFeature3: () => KI,
	pricing_tiers_proFeature4: () => rL,
	pricing_tiers_proFeature5: () => mL,
	pricing_tiers_proFeature6: () => TL,
	pricing_tiers_proName: () => GF,
	pricing_tiers_proPeriod: () => pI,
	pricing_tiers_proPrice: () => nI,
	pricing_tiers_starterFeature1: () => tF,
	pricing_tiers_starterFeature2: () => fF,
	pricing_tiers_starterFeature3: () => CF,
	pricing_tiers_starterFeature4: () => PF,
	pricing_tiers_starterName: () => SP,
	pricing_tiers_starterPeriod: () => WP,
	pricing_tiers_starterPrice: () => NP,
	products_grid_cliDesc: () => zB,
	products_grid_cliName: () => OB,
	products_grid_cliPrice: () => XB,
	products_grid_cloudDesc: () => vV,
	products_grid_cloudName: () => sV,
	products_grid_cloudPrice: () => kV,
	products_grid_enterpriseDesc: () => ZV,
	products_grid_enterpriseName: () => BV,
	products_grid_enterprisePrice: () => cH,
	products_grid_learnMore: () => _B,
	products_grid_migrationDesc: () => AH,
	products_grid_migrationName: () => yH,
	products_grid_migrationPrice: () => VH,
	products_grid_optimizerDesc: () => HU,
	products_grid_optimizerName: () => jU,
	products_grid_optimizerPrice: () => $U,
	products_grid_qaDesc: () => lU,
	products_grid_qaName: () => QH,
	products_grid_qaPrice: () => bU,
	products_header_description: () => oB,
	products_header_title: () => Yz,
	settings_apiAccess_apiKey: () => TJ,
	settings_apiAccess_copy: () => IJ,
	settings_apiAccess_description: () => qJ,
	settings_apiAccess_title: () => mJ,
	settings_footer_cancel: () => iY,
	settings_footer_saveChanges: () => hY,
	settings_header_description: () => xW,
	settings_header_title: () => uW,
	settings_preferences_arabic: () => rJ,
	settings_preferences_chinese: () => Kq,
	settings_preferences_darkColorScheme: () => fK,
	settings_preferences_darkMode: () => tK,
	settings_preferences_defaultLanguage: () => PK,
	settings_preferences_emailNotifications: () => SG,
	settings_preferences_english: () => GK,
	settings_preferences_french: () => nq,
	settings_preferences_german: () => pq,
	settings_preferences_japanese: () => Fq,
	settings_preferences_spanish: () => wq,
	settings_preferences_title: () => dG,
	settings_preferences_toggleDarkMode: () => CK,
	settings_preferences_toggleNotifications: () => WG,
	settings_preferences_weeklyReports: () => NG,
	settings_profile_displayName: () => UW,
	settings_profile_email: () => eG,
	settings_profile_title: () => MW,
	shared_appName: () => y,
	shared_contactEmail: () => x,
	shared_goToGithub: () => S,
	shared_siteName: () => b,
	team_grid_member1Bio: () => gX,
	team_grid_member1Name: () => JY,
	team_grid_member1Role: () => aX,
	team_grid_member2Bio: () => YX,
	team_grid_member2Name: () => DX,
	team_grid_member2Role: () => RX,
	team_grid_member3Bio: () => OZ,
	team_grid_member3Name: () => oZ,
	team_grid_member3Role: () => _Z,
	team_grid_member4Bio: () => sQ,
	team_grid_member4Name: () => zZ,
	team_grid_member4Role: () => XZ,
	team_grid_member5Bio: () => BQ,
	team_grid_member5Name: () => vQ,
	team_grid_member5Role: () => kQ,
	team_grid_member6Bio: () => y$,
	team_grid_member6Name: () => ZQ,
	team_grid_member6Role: () => c$,
	team_header_description: () => LY,
	team_header_title: () => EY,
	themeToggle_auto: () => H,
	themeToggle_dark: () => U,
	themeToggle_labelAuto: () => G,
	themeToggle_labelOther: () => K,
	themeToggle_light: () => W
}), e1 = a({
	about_grid_methodologyDesc: () => Kp,
	about_grid_methodologyTitle: () => Fp,
	about_grid_whyExistsDesc: () => wp,
	about_grid_whyExistsTitle: () => pp,
	about_header_description: () => np,
	about_header_title: () => Gf,
	about_whatWeMeasure_bundleSizeImpact: () => mm,
	about_whatWeMeasure_bundleSizeImpactDesc: () => Tm,
	about_whatWeMeasure_hydrationCost: () => ih,
	about_whatWeMeasure_hydrationCostDesc: () => hh,
	about_whatWeMeasure_lazyLoading: () => Eh,
	about_whatWeMeasure_lazyLoadingDesc: () => Lh,
	about_whatWeMeasure_localeSwitch: () => Jh,
	about_whatWeMeasure_localeSwitchDesc: () => ag,
	about_whatWeMeasure_renderingOverhead: () => Im,
	about_whatWeMeasure_renderingOverheadDesc: () => qm,
	about_whatWeMeasure_title: () => rm,
	blog_header_description: () => Dg,
	blog_header_title: () => gg,
	blog_list_post1Category: () => O_,
	blog_list_post1Date: () => o_,
	blog_list_post1Excerpt: () => __,
	blog_list_post1Title: () => Yg,
	blog_list_post2Category: () => vv,
	blog_list_post2Date: () => X_,
	blog_list_post2Excerpt: () => sv,
	blog_list_post2Title: () => z_,
	blog_list_post3Category: () => cy,
	blog_list_post3Date: () => Bv,
	blog_list_post3Excerpt: () => Zv,
	blog_list_post3Title: () => kv,
	blog_list_post4Category: () => Qy,
	blog_list_post4Date: () => Ay,
	blog_list_post4Excerpt: () => Vy,
	blog_list_post4Title: () => yy,
	blog_list_post5Category: () => Hb,
	blog_list_post5Date: () => bb,
	blog_list_post5Excerpt: () => jb,
	blog_list_post5Title: () => lb,
	blog_list_post6Category: () => Mx,
	blog_list_post6Date: () => ux,
	blog_list_post6Excerpt: () => xx,
	blog_list_post6Title: () => $b,
	blog_list_readMore: () => Rg,
	careers_benefits_ossLabel: () => tC,
	careers_benefits_ossValue: () => fC,
	careers_benefits_payLabel: () => NS,
	careers_benefits_payValue: () => WS,
	careers_benefits_remoteLabel: () => dS,
	careers_benefits_remoteValue: () => SS,
	careers_header_description: () => eS,
	careers_header_title: () => Ux,
	careers_openPositions_applyNow: () => PC,
	careers_openPositions_backendDesc: () => qT,
	careers_openPositions_backendTitle: () => IT,
	careers_openPositions_community: () => Kw,
	careers_openPositions_devrelDesc: () => LE,
	careers_openPositions_devrelTitle: () => EE,
	careers_openPositions_documentation: () => Fw,
	careers_openPositions_engineering: () => ww,
	careers_openPositions_frontendDesc: () => TT,
	careers_openPositions_frontendTitle: () => mT,
	careers_openPositions_fullTime: () => nw,
	careers_openPositions_partTime: () => pw,
	careers_openPositions_qaDesc: () => aD,
	careers_openPositions_qaTitle: () => JE,
	careers_openPositions_remote: () => GC,
	careers_openPositions_sfRemote: () => rT,
	careers_openPositions_title: () => CC,
	careers_openPositions_writerDesc: () => hE,
	careers_openPositions_writerTitle: () => iE,
	contact_form_bugReport: () => RO,
	contact_form_contribution: () => _k,
	contact_form_email: () => $,
	contact_form_emailPlaceholder: () => gO,
	contact_form_message: () => zk,
	contact_form_messagePlaceholder: () => Xk,
	contact_form_methodologyQuestion: () => ok,
	contact_form_name: () => RD,
	contact_form_newBenchmarkIdea: () => YO,
	contact_form_other: () => Ok,
	contact_form_sendMessage: () => sA,
	contact_form_topic: () => DO,
	contact_form_yourName: () => YD,
	contact_header_description: () => DD,
	contact_header_title: () => gD,
	faq_header_description: () => kA,
	faq_header_title: () => vA,
	faq_list_a1: () => ZA,
	faq_list_a2: () => yj,
	faq_list_a3: () => Vj,
	faq_list_a4: () => lM,
	faq_list_a5: () => jM,
	faq_list_a6: () => $M,
	faq_list_a7: () => xN,
	faq_list_a8: () => UN,
	faq_list_q1: () => BA,
	faq_list_q2: () => cj,
	faq_list_q3: () => Aj,
	faq_list_q4: () => Qj,
	faq_list_q5: () => bM,
	faq_list_q6: () => HM,
	faq_list_q7: () => uN,
	faq_list_q8: () => MN,
	footer_builtWith: () => V,
	footer_contact: () => B,
	footer_contributing: () => z,
	footer_description: () => F,
	footer_github: () => L,
	footer_methodology: () => R,
	footer_resources: () => I,
	footer_title: () => P,
	header_blog: () => k,
	header_careers: () => A,
	header_contact: () => M,
	header_faq: () => j,
	header_home: () => C,
	header_methodology: () => w,
	header_mockPages: () => T,
	header_pricing: () => D,
	header_products: () => E,
	header_settings: () => N,
	header_team: () => O,
	home_hero_description: () => Y,
	home_hero_methodology: () => Z,
	home_hero_title: () => J,
	home_hero_viewResults: () => X,
	home_resultsTable_builtIn: () => Pf,
	home_resultsTable_bundleSize: () => Md,
	home_resultsTable_lazyLoading: () => ef,
	home_resultsTable_library: () => xd,
	home_resultsTable_lookupTime: () => Ud,
	home_resultsTable_manual: () => Cf,
	home_resultsTable_title: () => ud,
	home_resultsTable_yes: () => ff,
	home_understandingImpact_cacheDesc: () => ju,
	home_understandingImpact_cacheLabel: () => bu,
	home_understandingImpact_foucDesc: () => lu,
	home_understandingImpact_foucLabel: () => Ql,
	home_understandingImpact_measuresDesc: () => $u,
	home_understandingImpact_measuresTitle: () => Hu,
	home_understandingImpact_singleJsonBullet1: () => kc,
	home_understandingImpact_singleJsonBullet2: () => Bc,
	home_understandingImpact_singleJsonBullet3: () => Zc,
	home_understandingImpact_singleJsonIntro: () => vc,
	home_understandingImpact_singleJsonTitle: () => sc,
	home_understandingImpact_title: () => Xs,
	home_understandingImpact_tradeOffsIntro: () => yl,
	home_understandingImpact_tradeOffsTitle: () => cl,
	home_understandingImpact_waterfallDesc: () => Vl,
	home_understandingImpact_waterfallLabel: () => Al,
	home_whyItMatters_bundleSizeDesc: () => Yo,
	home_whyItMatters_bundleSizeTitle: () => Ro,
	home_whyItMatters_dynamicLoadingDesc: () => zs,
	home_whyItMatters_dynamicLoadingTitle: () => Os,
	home_whyItMatters_renderingDesc: () => _s,
	home_whyItMatters_renderingTitle: () => os,
	home_whyItMatters_title: () => Q,
	m: () => $$,
	mockBanner: () => q,
	notFound_description: () => V$,
	notFound_returnHome: () => Q$,
	notFound_title: () => A$,
	pricing_header_description: () => dP,
	pricing_header_title: () => eP,
	pricing_tiers_contactSales: () => Dz,
	pricing_tiers_enterpriseFeature1: () => iR,
	pricing_tiers_enterpriseFeature2: () => hR,
	pricing_tiers_enterpriseFeature3: () => ER,
	pricing_tiers_enterpriseFeature4: () => LR,
	pricing_tiers_enterpriseFeature5: () => JR,
	pricing_tiers_enterpriseFeature6: () => az,
	pricing_tiers_enterpriseFeature7: () => gz,
	pricing_tiers_enterpriseName: () => IL,
	pricing_tiers_enterprisePrice: () => qL,
	pricing_tiers_getStarted: () => Rz,
	pricing_tiers_proFeature1: () => wI,
	pricing_tiers_proFeature2: () => FI,
	pricing_tiers_proFeature3: () => KI,
	pricing_tiers_proFeature4: () => rL,
	pricing_tiers_proFeature5: () => mL,
	pricing_tiers_proFeature6: () => TL,
	pricing_tiers_proName: () => GF,
	pricing_tiers_proPeriod: () => pI,
	pricing_tiers_proPrice: () => nI,
	pricing_tiers_starterFeature1: () => tF,
	pricing_tiers_starterFeature2: () => fF,
	pricing_tiers_starterFeature3: () => CF,
	pricing_tiers_starterFeature4: () => PF,
	pricing_tiers_starterName: () => SP,
	pricing_tiers_starterPeriod: () => WP,
	pricing_tiers_starterPrice: () => NP,
	products_grid_cliDesc: () => zB,
	products_grid_cliName: () => OB,
	products_grid_cliPrice: () => XB,
	products_grid_cloudDesc: () => vV,
	products_grid_cloudName: () => sV,
	products_grid_cloudPrice: () => kV,
	products_grid_enterpriseDesc: () => ZV,
	products_grid_enterpriseName: () => BV,
	products_grid_enterprisePrice: () => cH,
	products_grid_learnMore: () => _B,
	products_grid_migrationDesc: () => AH,
	products_grid_migrationName: () => yH,
	products_grid_migrationPrice: () => VH,
	products_grid_optimizerDesc: () => HU,
	products_grid_optimizerName: () => jU,
	products_grid_optimizerPrice: () => $U,
	products_grid_qaDesc: () => lU,
	products_grid_qaName: () => QH,
	products_grid_qaPrice: () => bU,
	products_header_description: () => oB,
	products_header_title: () => Yz,
	settings_apiAccess_apiKey: () => TJ,
	settings_apiAccess_copy: () => IJ,
	settings_apiAccess_description: () => qJ,
	settings_apiAccess_title: () => mJ,
	settings_footer_cancel: () => iY,
	settings_footer_saveChanges: () => hY,
	settings_header_description: () => xW,
	settings_header_title: () => uW,
	settings_preferences_arabic: () => rJ,
	settings_preferences_chinese: () => Kq,
	settings_preferences_darkColorScheme: () => fK,
	settings_preferences_darkMode: () => tK,
	settings_preferences_defaultLanguage: () => PK,
	settings_preferences_emailNotifications: () => SG,
	settings_preferences_english: () => GK,
	settings_preferences_french: () => nq,
	settings_preferences_german: () => pq,
	settings_preferences_japanese: () => Fq,
	settings_preferences_spanish: () => wq,
	settings_preferences_title: () => dG,
	settings_preferences_toggleDarkMode: () => CK,
	settings_preferences_toggleNotifications: () => WG,
	settings_preferences_weeklyReports: () => NG,
	settings_profile_displayName: () => UW,
	settings_profile_email: () => eG,
	settings_profile_title: () => MW,
	shared_appName: () => y,
	shared_contactEmail: () => x,
	shared_goToGithub: () => S,
	shared_siteName: () => b,
	team_grid_member1Bio: () => gX,
	team_grid_member1Name: () => JY,
	team_grid_member1Role: () => aX,
	team_grid_member2Bio: () => YX,
	team_grid_member2Name: () => DX,
	team_grid_member2Role: () => RX,
	team_grid_member3Bio: () => OZ,
	team_grid_member3Name: () => oZ,
	team_grid_member3Role: () => _Z,
	team_grid_member4Bio: () => sQ,
	team_grid_member4Name: () => zZ,
	team_grid_member4Role: () => XZ,
	team_grid_member5Bio: () => BQ,
	team_grid_member5Name: () => vQ,
	team_grid_member5Role: () => kQ,
	team_grid_member6Bio: () => y$,
	team_grid_member6Name: () => ZQ,
	team_grid_member6Role: () => c$,
	team_header_description: () => LY,
	team_header_title: () => EY,
	themeToggle_auto: () => H,
	themeToggle_dark: () => U,
	themeToggle_labelAuto: () => G,
	themeToggle_labelOther: () => K,
	themeToggle_light: () => W
}), t1 = n("<div class=\"mx-auto max-w-3xl space-y-4\">"), n1 = n("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"></summary><p class=\"px-6 pb-4 text-sm text-muted-foreground\">");
function r1() {
	let n = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: e1[`faq_list_q${e}`]?.(),
		a: e1[`faq_list_a${e}`]?.()
	}));
	return (() => {
		var i = t1();
		return t(i, e(r, {
			each: n,
			children: (e) => (() => {
				var n = n1(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.q), t(i, () => e.a), n;
			})()
		})), i;
	})();
}
export { r1 as default };

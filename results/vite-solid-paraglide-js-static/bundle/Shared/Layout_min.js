import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { A as s, useLocation as c, useNavigate as l, useParams as u } from "@solidjs/router";
import { For as d, createEffect as f, createSignal as p, onMount as m } from "solid-js";
import { recordHydrationDuration as h, recordRenderTime as g } from "test-utils/browser-metrics";
var _ = {}, v = [
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
], y = "PARAGLIDE_LOCALE", ee = 3456e4, b = [
	"cookie",
	"globalVariable",
	"baseLocale"
], x = [], S, C;
function te(e) {
	if (x.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (S === t) return C;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of x) if (new _(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return S = t, C = r, r;
}
function w(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : b;
}
var T = void 0, E = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var D, O = !1, k = () => {
	if (T) {
		let e = T?.getStore()?.locale;
		if (e) return e;
	}
	let e = b;
	!E && typeof window < "u" && window.location?.href && (e = w(window.location.href));
	let t = A(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return O || (D = t, O = !0, M(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function A(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = P();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && D !== void 0) n = D;
		else if (I(t) && F.has(t)) {
			let e = F.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = N(n);
		if (e) return e;
	}
}
var j = (e) => {
	e ? window.location.href = e : window.location.reload();
}, M = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = k();
	} catch {}
	let i = [], a = b;
	!E && typeof window < "u" && window.location?.href && (a = w(window.location.href));
	for (let t of a) if (t === "globalVariable") D = e;
	else if (t === "cookie") {
		if (E || typeof document > "u" || typeof window > "u") continue;
		let t = `${y}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (I(t) && F.has(t)) {
		let n = F.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!E && n.reload && window.location && e !== r && j(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function N(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of v) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = N(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${v.join(", ")}`);
}
function P() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${y}=([^;]+)`))?.[2];
	return N(e);
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "i18n Bench", R = () => "Bench i18n", z = () => "i18n Bench", B = () => "i18n Bench", V = () => "i18n Bench", H = () => "i18n Bench", U = () => "i18n Bench", W = () => "i18n Bench", G = () => "i18n Bench", K = () => "i18n Bench", q = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "contact@intlayer.org", Y = () => "contact@intlayer.org", X = () => "contact@intlayer.org", Z = () => "contact@intlayer.org", re = () => "contact@intlayer.org", ie = () => "contact@intlayer.org", ae = () => "contact@intlayer.org", oe = () => "contact@intlayer.org", se = () => "contact@intlayer.org", ce = () => "contact@intlayer.org", le = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "Go to GitHub", de = () => "Aller sur GitHub", fe = () => "Ir a GitHub", pe = () => "Zu GitHub", me = () => "Vai su GitHub", he = () => "Ir para o GitHub", ge = () => "前往 GitHub", _e = () => "GitHubへ", ve = () => "Go to GitHub", ye = () => "Перейти на GitHub", be = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Home", Se = () => "Accueil", Ce = () => "Inicio", we = () => "Home", Te = () => "Home", Ee = () => "Início", De = () => "首页", Oe = () => "ホーム", ke = () => "Home", Ae = () => "Главная", je = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "Methodology", Ne = () => "Méthodologie", Pe = () => "Metodología", Fe = () => "Methodik", Ie = () => "Metodologia", Le = () => "Metodologia", Re = () => "方法论", ze = () => "手法", Be = () => "Methodology", Ve = () => "Методология", He = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : Ve(e);
}), Ue = () => "Mock Pages", We = () => "Pages fictives", Ge = () => "Páginas de prueba", Ke = () => "Testseiten", qe = () => "Pagine di test", Je = () => "Páginas de Teste", Ye = () => "模拟页面", Xe = () => "テストページ", Ze = () => "Mock Pages", Qe = () => "Тестовые страницы", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
}), et = () => "Products", tt = () => "Produits", nt = () => "Productos", rt = () => "Produkte", it = () => "Prodotti", at = () => "Produtos", ot = () => "产品", st = () => "製品", ct = () => "Products", lt = () => "Продукты", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? et(e) : n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : lt(e);
}), dt = () => "Pricing", ft = () => "Tarifs", pt = () => "Precios", mt = () => "Preise", ht = () => "Prezzi", gt = () => "Preços", _t = () => "价格", vt = () => "価格", yt = () => "Pricing", bt = () => "Цены", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? dt(e) : n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : bt(e);
}), St = () => "Team", Ct = () => "Équipe", wt = () => "Equipo", Tt = () => "Team", Et = () => "Team", Dt = () => "Equipe", Ot = () => "团队", kt = () => "チーム", At = () => "Team", jt = () => "Команда", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? St(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Nt = () => "Blog", Pt = () => "Blog", Ft = () => "Blog", It = () => "Blog", Lt = () => "Blog", Rt = () => "Blog", zt = () => "博客", Bt = () => "ブログ", Vt = () => "Blog", Ht = () => "Блог", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Nt(e) : n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : Ht(e);
}), Wt = () => "Careers", Gt = () => "Carrières", Kt = () => "Carreras", qt = () => "Karriere", Jt = () => "Carriere", Yt = () => "Carreiras", Xt = () => "招聘", Zt = () => "採用情報", Qt = () => "Careers", $t = () => "Вакансии", en = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Wt(e) : n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : $t(e);
}), tn = () => "FAQ", nn = () => "FAQ", rn = () => "FAQ", an = () => "FAQ", on = () => "FAQ", sn = () => "FAQ", cn = () => "常见问题", ln = () => "FAQ", un = () => "FAQ", dn = () => "FAQ", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? tn(e) : n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : dn(e);
}), pn = () => "Contact", mn = () => "Contact", hn = () => "Contacto", gn = () => "Kontakt", _n = () => "Contatti", vn = () => "Contato", yn = () => "联系我们", bn = () => "お問い合わせ", xn = () => "Contact", Sn = () => "Контакт", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? pn(e) : n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : Sn(e);
}), wn = () => "Settings", Tn = () => "Paramètres", En = () => "Ajustes", Dn = () => "Einstellungen", On = () => "Impostazioni", kn = () => "Configurações", An = () => "设置", jn = () => "設定", Mn = () => "Settings", Nn = () => "Настройки", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
}), Fn = () => "i18n Benchmark", In = () => "Benchmark i18n", Ln = () => "i18n Benchmark", Rn = () => "i18n Benchmark", zn = () => "i18n Benchmark", Bn = () => "i18n Benchmark", Vn = () => "i18n Benchmark", Hn = () => "i18n Benchmark", Un = () => "i18n Benchmark", Wn = () => "i18n Benchmark", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Fn(e) : n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : Wn(e);
}), Kn = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", qn = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Jn = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Yn = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Xn = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Zn = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Qn = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", $n = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", er = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", tr = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", nr = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Kn(e) : n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : tr(e);
}), rr = () => "Resources", ir = () => "Ressources", ar = () => "Recursos", or = () => "Ressourcen", sr = () => "Risorse", cr = () => "Recursos", lr = () => "资源", ur = () => "リソース", dr = () => "Resources", fr = () => "Ресурсы", pr = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? rr(e) : n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : fr(e);
}), mr = () => "GitHub", hr = () => "GitHub", gr = () => "GitHub", _r = () => "GitHub", vr = () => "GitHub", yr = () => "GitHub", br = () => "GitHub", xr = () => "GitHub", Sr = () => "GitHub", Cr = () => "GitHub", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? mr(e) : n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : Cr(e);
}), Tr = () => "Methodology", Er = () => "Méthodologie", Dr = () => "Metodología", Or = () => "Methodik", kr = () => "Metodologia", Ar = () => "Metodologia", jr = () => "方法论", Mr = () => "手法", Nr = () => "Methodology", Pr = () => "Методология", Fr = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Tr(e) : n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Or(e) : n === "it" ? kr(e) : n === "pt" ? Ar(e) : n === "zh" ? jr(e) : n === "ja" ? Mr(e) : n === "ko" ? Nr(e) : Pr(e);
}), Ir = () => "Contributing", Lr = () => "Contribuer", Rr = () => "Contribuir", zr = () => "Beitragen", Br = () => "Contribuire", Vr = () => "Contribuindo", Hr = () => "贡献", Ur = () => "貢献する", Wr = () => "Contributing", Gr = () => "Участие в проекте", Kr = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Ir(e) : n === "fr" ? Lr(e) : n === "es" ? Rr(e) : n === "de" ? zr(e) : n === "it" ? Br(e) : n === "pt" ? Vr(e) : n === "zh" ? Hr(e) : n === "ja" ? Ur(e) : n === "ko" ? Wr(e) : Gr(e);
}), qr = () => "Contact", Jr = () => "Contact", Yr = () => "Contacto", Xr = () => "Kontakt", Zr = () => "Contatti", Qr = () => "Contato", $r = () => "联系我们", ei = () => "お問い合わせ", ti = () => "Contact", ni = () => "Контакт", ri = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? qr(e) : n === "fr" ? Jr(e) : n === "es" ? Yr(e) : n === "de" ? Xr(e) : n === "it" ? Zr(e) : n === "pt" ? Qr(e) : n === "zh" ? $r(e) : n === "ja" ? ei(e) : n === "ko" ? ti(e) : ni(e);
}), ii = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ai = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", oi = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", si = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", ci = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", li = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", ui = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", di = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", fi = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", pi = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", mi = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? ii(e) : n === "fr" ? ai(e) : n === "es" ? oi(e) : n === "de" ? si(e) : n === "it" ? ci(e) : n === "pt" ? li(e) : n === "zh" ? ui(e) : n === "ja" ? di(e) : n === "ko" ? fi(e) : pi(e);
}), hi = () => "Theme: Auto", gi = () => "Thème : automatique", _i = () => "Tema: Auto", vi = () => "Thema: Auto", yi = () => "Tema: Auto", bi = () => "Tema: Automático", xi = () => "主题：自动", Si = () => "テーマ：自動", Ci = () => "Theme: Auto", wi = () => "Тема: Авто", Ti = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? hi(e) : n === "fr" ? gi(e) : n === "es" ? _i(e) : n === "de" ? vi(e) : n === "it" ? yi(e) : n === "pt" ? bi(e) : n === "zh" ? xi(e) : n === "ja" ? Si(e) : n === "ko" ? Ci(e) : wi(e);
}), Ei = () => "Theme: Dark", Di = () => "Thème : sombre", Oi = () => "Tema: Oscuro", ki = () => "Thema: Dunkel", Ai = () => "Tema: Scuro", ji = () => "Tema: Escuro", Mi = () => "主题：深色", Ni = () => "テーマ：ダーク", Pi = () => "Theme: Dark", Fi = () => "Тема: Темная", Ii = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Ei(e) : n === "fr" ? Di(e) : n === "es" ? Oi(e) : n === "de" ? ki(e) : n === "it" ? Ai(e) : n === "pt" ? ji(e) : n === "zh" ? Mi(e) : n === "ja" ? Ni(e) : n === "ko" ? Pi(e) : Fi(e);
}), Li = () => "Theme: Light", Ri = () => "Thème : clair", zi = () => "Tema: Claro", Bi = () => "Thema: Hell", Vi = () => "Tema: Chiaro", Hi = () => "Tema: Claro", Ui = () => "主题：浅色", Wi = () => "テーマ：ライト", Gi = () => "Theme: Light", Ki = () => "Тема: Светлая", qi = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Li(e) : n === "fr" ? Ri(e) : n === "es" ? zi(e) : n === "de" ? Bi(e) : n === "it" ? Vi(e) : n === "pt" ? Hi(e) : n === "zh" ? Ui(e) : n === "ja" ? Wi(e) : n === "ko" ? Gi(e) : Ki(e);
}), Ji = () => "Theme mode: auto (system). Click to switch to light mode.", Yi = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Xi = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Zi = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Qi = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", $i = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", ea = () => "主题模式：自动（系统）。点击切换到浅色模式。", ta = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", na = () => "Theme mode: auto (system). Click to switch to light mode.", ra = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", ia = ((e = {}, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? Ji(e) : n === "fr" ? Yi(e) : n === "es" ? Xi(e) : n === "de" ? Zi(e) : n === "it" ? Qi(e) : n === "pt" ? $i(e) : n === "zh" ? ea(e) : n === "ja" ? ta(e) : n === "ko" ? na(e) : ra(e);
}), aa = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, oa = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, Q = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, sa = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, ca = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, la = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, ua = (e) => `主题模式：${e?.mode}。点击切换模式。`, da = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, fa = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, pa = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, ma = ((e, t = {}) => {
	let n = t.locale ?? k();
	return n === "en" ? aa(e) : n === "fr" ? oa(e) : n === "es" ? Q(e) : n === "de" ? sa(e) : n === "it" ? ca(e) : n === "pt" ? la(e) : n === "zh" ? ua(e) : n === "ja" ? da(e) : n === "ko" ? fa(e) : pa(e);
}), ha = o("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function ga() {
	let t = u(), n = () => t.locale ?? "en";
	return (() => {
		var t = ha(), i = t.firstChild.firstChild, a = i.firstChild, o = a.firstChild, c = o.nextSibling, l = a.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild, f = d.firstChild, p = d.nextSibling, m = p.nextSibling, h = l.nextSibling.firstChild, g = h.nextSibling, _ = i.nextSibling;
		return r(o, () => Gn()), r(c, () => nr()), r(u, () => pr()), r(f, () => wr()), r(p, e(s, {
			get href() {
				return `/${n()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Fr();
			}
		})), r(m, e(s, {
			get href() {
				return `/${n()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Kr();
			}
		})), r(h, () => ri()), r(g, () => le()), r(_, () => mi()), t;
	})();
}
function _a(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var va = [
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
], ya = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, ba = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), xa = o("<option>");
function Sa() {
	let t = u(), i = l(), a = c(), o = (e) => {
		i(`${a.pathname.replace(/^\/[^/]+/, `/${e}`)}${a.search}${a.hash}`);
	};
	return (() => {
		var i = ba(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: va,
			children: (e) => (() => {
				var t = xa();
				return t.value = e, r(t, () => ya(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Ca = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function wa() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ta() {
	let [e, t] = p("auto");
	m(() => {
		let e = wa();
		t(e), $(e);
	}), f(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function i() {
		let n = e(), r = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		t(r), $(r), window.localStorage.setItem("theme", r);
	}
	let o = () => e() === "auto" ? ia() : ma({ mode: e() }), s = () => e() === "auto" ? Ti() : e() === "dark" ? Ii() : qi();
	return (() => {
		var e = Ca();
		return e.$$click = i, r(e, s), n((t) => {
			var n = o(), r = o();
			return n !== t.e && a(e, "aria-label", t.e = n), r !== t.t && a(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var Ea = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), Da = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Oa = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function ka(e) {
	return (() => {
		var t = Ea();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function Aa() {
	_a("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: ut()
		},
		{
			to: `/${o()}/pricing`,
			label: xt()
		},
		{
			to: `/${o()}/team`,
			label: Mt()
		},
		{
			to: `/${o()}/blog`,
			label: Ut()
		},
		{
			to: `/${o()}/careers`,
			label: en()
		},
		{
			to: `/${o()}/faq`,
			label: fn()
		},
		{
			to: `/${o()}/contact`,
			label: Cn()
		},
		{
			to: `/${o()}/settings`,
			label: Pn()
		}
	];
	return (() => {
		var a = Da(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild, m = l.nextSibling, h = m.firstChild.firstChild;
		return r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			get children() {
				return q();
			}
		}), u), r(u, e(s, {
			get href() {
				return `/${o()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return je();
			}
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return He();
			}
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, () => $e(), null), r(p, e(ka, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = Oa(), i = t.firstChild;
				return t.addEventListener("mouseleave", () => n(!1)), t.addEventListener("mouseenter", () => n(!0)), r(i, e(d, {
					get each() {
						return c();
					},
					children: (t) => e(s, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => n(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(h, () => be()), r(m, e(Sa, {}), null), r(m, e(Ta, {}), null), a;
	})();
}
t(["click"]);
function ja(t) {
	let n = u(), r = typeof performance < "u" ? performance.now() : 0;
	return m(() => {
		h(), g("AppRoot", r);
	}), f(() => {
		let e = n.locale ?? "en";
		document.documentElement.lang = e, M(e, { reload: !1 });
	}), [
		e(Aa, {}),
		i(() => t.children),
		e(ga, {})
	];
}
export { ja as default };

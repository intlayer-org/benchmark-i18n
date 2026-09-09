import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
import { recordHydrationDuration as n, recordRenderTime as r } from "test-utils/browser-metrics";
import { derived as i, get as a, writable as o } from "svelte/store";
import s from "lucide-svelte/icons/chevron-down";
import "svelte/internal/flags/legacy";
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", d = 3456e4, f = [
	"cookie",
	"globalVariable",
	"baseLocale"
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = M();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
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
	let i = [], a = f;
	!m && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, A();
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
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
}, x = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function w(e) {
	return e;
}
function T(e, t) {
	return e.exec(t.href);
}
var E = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), D = RegExp(`(?:^|;\\s*)${E}=([^;]*)`), O = Symbol(), k = O;
function A() {
	k = O;
}
function j() {
	typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A);
}
function M() {
	if (typeof document > "u") return;
	if (k !== O) return k;
	let e = document.cookie.match(D)?.[1];
	return k = S(e), j(), k;
}
function N(e) {
	return P(e);
}
function P(e) {
	let t = w(typeof e == "string" ? new URL(e, x()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && S(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), w(t);
}
var F, I;
function ee(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (F === t) return I;
	let n = w(new URL(t, "http://example.com")), r = N(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (T(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return F = t, I = a, a;
}
function L(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var te = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ne = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", re = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ie = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", B = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", V = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", H = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", U = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", W = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", G = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ne(e) : n === "es" ? re(e) : n === "de" ? ie(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : te(e);
}), q = () => "Contact", J = () => "Contact", Y = () => "Contacto", ae = () => "Kontakt", oe = () => "Contatti", se = () => "Contato", ce = () => "联系我们", le = () => "お問い合わせ", ue = () => "Contact", de = () => "Контакт", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? ae(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : q(e);
}), pe = () => "Contributing", me = () => "Contribuer", he = () => "Contribuir", ge = () => "Beitragen", _e = () => "Contribuire", ve = () => "Contribuindo", ye = () => "贡献", be = () => "貢献する", xe = () => "Contributing", Se = () => "Участие в проекте", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Te = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Ee = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", De = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Oe = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", ke = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Ae = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", je = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", Me = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Ne = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Fe = () => "GitHub", Ie = () => "GitHub", Le = () => "GitHub", Re = () => "GitHub", ze = () => "GitHub", Be = () => "GitHub", Ve = () => "GitHub", He = () => "GitHub", Ue = () => "GitHub", We = () => "GitHub", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Ke = () => "Methodology", qe = () => "Méthodologie", Je = () => "Metodología", Ye = () => "Methodik", Xe = () => "Metodologia", Ze = () => "Metodologia", Qe = () => "方法论", $e = () => "手法", et = () => "Methodology", tt = () => "Методология", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : Ke(e);
}), rt = () => "Resources", it = () => "Ressources", at = () => "Recursos", ot = () => "Ressourcen", st = () => "Risorse", ct = () => "Recursos", lt = () => "资源", ut = () => "リソース", dt = () => "Resources", ft = () => "Ресурсы", pt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : n === "ru" ? ft(e) : rt(e);
}), mt = () => "i18n Benchmark", ht = () => "Benchmark i18n", gt = () => "i18n Benchmark", _t = () => "i18n Benchmark", vt = () => "i18n Benchmark", yt = () => "i18n Benchmark", bt = () => "i18n Benchmark", xt = () => "i18n Benchmark", St = () => "i18n Benchmark", Ct = () => "i18n Benchmark", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : n === "ru" ? Ct(e) : mt(e);
}), Tt = () => "Blog", Et = () => "Blog", Dt = () => "Blog", Ot = () => "Blog", kt = () => "Blog", At = () => "Blog", jt = () => "博客", Mt = () => "ブログ", Nt = () => "Blog", Pt = () => "Блог", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : n === "ru" ? Pt(e) : Tt(e);
}), It = () => "Careers", Lt = () => "Carrières", Rt = () => "Carreras", zt = () => "Karriere", Bt = () => "Carriere", Vt = () => "Carreiras", Ht = () => "招聘", Ut = () => "採用情報", Wt = () => "Careers", Gt = () => "Вакансии", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : n === "ru" ? Gt(e) : It(e);
}), qt = () => "Contact", Jt = () => "Contact", Yt = () => "Contacto", Xt = () => "Kontakt", Zt = () => "Contatti", Qt = () => "Contato", $t = () => "联系我们", en = () => "お問い合わせ", tn = () => "Contact", nn = () => "Контакт", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : n === "ru" ? nn(e) : qt(e);
}), an = () => "FAQ", on = () => "FAQ", sn = () => "FAQ", cn = () => "FAQ", ln = () => "FAQ", un = () => "FAQ", dn = () => "常见问题", fn = () => "FAQ", pn = () => "FAQ", mn = () => "FAQ", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : n === "ru" ? mn(e) : an(e);
}), gn = () => "Home", _n = () => "Accueil", vn = () => "Inicio", yn = () => "Home", bn = () => "Home", xn = () => "Início", Sn = () => "首页", Cn = () => "ホーム", wn = () => "Home", Tn = () => "Главная", En = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? _n(e) : n === "es" ? vn(e) : n === "de" ? yn(e) : n === "it" ? bn(e) : n === "pt" ? xn(e) : n === "zh" ? Sn(e) : n === "ja" ? Cn(e) : n === "ko" ? wn(e) : n === "ru" ? Tn(e) : gn(e);
}), Dn = () => "Methodology", On = () => "Méthodologie", kn = () => "Metodología", An = () => "Methodik", jn = () => "Metodologia", Mn = () => "Metodologia", Nn = () => "方法论", Pn = () => "手法", Fn = () => "Methodology", In = () => "Методология", Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? On(e) : n === "es" ? kn(e) : n === "de" ? An(e) : n === "it" ? jn(e) : n === "pt" ? Mn(e) : n === "zh" ? Nn(e) : n === "ja" ? Pn(e) : n === "ko" ? Fn(e) : n === "ru" ? In(e) : Dn(e);
}), Rn = () => "Mock Pages", zn = () => "Pages fictives", Bn = () => "Páginas de prueba", Vn = () => "Testseiten", Hn = () => "Pagine di test", Un = () => "Páginas de Teste", Wn = () => "模拟页面", Gn = () => "テストページ", Kn = () => "Mock Pages", qn = () => "Тестовые страницы", Jn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? zn(e) : n === "es" ? Bn(e) : n === "de" ? Vn(e) : n === "it" ? Hn(e) : n === "pt" ? Un(e) : n === "zh" ? Wn(e) : n === "ja" ? Gn(e) : n === "ko" ? Kn(e) : n === "ru" ? qn(e) : Rn(e);
}), Yn = () => "Pricing", Xn = () => "Tarifs", Zn = () => "Precios", Qn = () => "Preise", $n = () => "Prezzi", er = () => "Preços", tr = () => "价格", nr = () => "価格", rr = () => "Pricing", ir = () => "Цены", ar = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Xn(e) : n === "es" ? Zn(e) : n === "de" ? Qn(e) : n === "it" ? $n(e) : n === "pt" ? er(e) : n === "zh" ? tr(e) : n === "ja" ? nr(e) : n === "ko" ? rr(e) : n === "ru" ? ir(e) : Yn(e);
}), or = () => "Products", sr = () => "Produits", cr = () => "Productos", lr = () => "Produkte", ur = () => "Prodotti", dr = () => "Produtos", fr = () => "产品", pr = () => "製品", mr = () => "Products", hr = () => "Продукты", gr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? sr(e) : n === "es" ? cr(e) : n === "de" ? lr(e) : n === "it" ? ur(e) : n === "pt" ? dr(e) : n === "zh" ? fr(e) : n === "ja" ? pr(e) : n === "ko" ? mr(e) : n === "ru" ? hr(e) : or(e);
}), _r = () => "Settings", vr = () => "Paramètres", yr = () => "Ajustes", br = () => "Einstellungen", xr = () => "Impostazioni", Sr = () => "Configurações", Cr = () => "设置", wr = () => "設定", Tr = () => "Settings", Er = () => "Настройки", Dr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? vr(e) : n === "es" ? yr(e) : n === "de" ? br(e) : n === "it" ? xr(e) : n === "pt" ? Sr(e) : n === "zh" ? Cr(e) : n === "ja" ? wr(e) : n === "ko" ? Tr(e) : n === "ru" ? Er(e) : _r(e);
}), Or = () => "Team", kr = () => "Équipe", Ar = () => "Equipo", jr = () => "Team", Mr = () => "Team", Nr = () => "Equipe", Pr = () => "团队", Fr = () => "チーム", Ir = () => "Team", Lr = () => "Команда", Rr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? kr(e) : n === "es" ? Ar(e) : n === "de" ? jr(e) : n === "it" ? Mr(e) : n === "pt" ? Nr(e) : n === "zh" ? Pr(e) : n === "ja" ? Fr(e) : n === "ko" ? Ir(e) : n === "ru" ? Lr(e) : Or(e);
}), zr = () => "i18n Bench", Br = () => "Bench i18n", Vr = () => "i18n Bench", Hr = () => "i18n Bench", Ur = () => "i18n Bench", Wr = () => "i18n Bench", Gr = () => "i18n Bench", Kr = () => "i18n Bench", qr = () => "i18n Bench", Jr = () => "i18n Bench", Yr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Br(e) : n === "es" ? Vr(e) : n === "de" ? Hr(e) : n === "it" ? Ur(e) : n === "pt" ? Wr(e) : n === "zh" ? Gr(e) : n === "ja" ? Kr(e) : n === "ko" ? qr(e) : n === "ru" ? Jr(e) : zr(e);
}), Xr = () => "contact@intlayer.org", Zr = () => "contact@intlayer.org", Qr = () => "contact@intlayer.org", $r = () => "contact@intlayer.org", ei = () => "contact@intlayer.org", ti = () => "contact@intlayer.org", ni = () => "contact@intlayer.org", ri = () => "contact@intlayer.org", ii = () => "contact@intlayer.org", ai = () => "contact@intlayer.org", oi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Zr(e) : n === "es" ? Qr(e) : n === "de" ? $r(e) : n === "it" ? ei(e) : n === "pt" ? ti(e) : n === "zh" ? ni(e) : n === "ja" ? ri(e) : n === "ko" ? ii(e) : n === "ru" ? ai(e) : Xr(e);
}), si = () => "Go to GitHub", ci = () => "Aller sur GitHub", li = () => "Ir a GitHub", ui = () => "Zu GitHub", di = () => "Vai su GitHub", fi = () => "Ir para o GitHub", pi = () => "前往 GitHub", mi = () => "GitHubへ", hi = () => "Go to GitHub", gi = () => "Перейти на GitHub", _i = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ci(e) : n === "es" ? li(e) : n === "de" ? ui(e) : n === "it" ? di(e) : n === "pt" ? fi(e) : n === "zh" ? pi(e) : n === "ja" ? mi(e) : n === "ko" ? hi(e) : n === "ru" ? gi(e) : si(e);
}), vi = () => "Theme: Auto", yi = () => "Thème : automatique", bi = () => "Tema: Auto", xi = () => "Thema: Auto", Si = () => "Tema: Auto", Ci = () => "Tema: Automático", wi = () => "主题：自动", Ti = () => "テーマ：自動", Ei = () => "Theme: Auto", Di = () => "Тема: Авто", Oi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? yi(e) : n === "es" ? bi(e) : n === "de" ? xi(e) : n === "it" ? Si(e) : n === "pt" ? Ci(e) : n === "zh" ? wi(e) : n === "ja" ? Ti(e) : n === "ko" ? Ei(e) : n === "ru" ? Di(e) : vi(e);
}), ki = () => "Theme: Dark", Ai = () => "Thème : sombre", ji = () => "Tema: Oscuro", Mi = () => "Thema: Dunkel", Ni = () => "Tema: Scuro", Pi = () => "Tema: Escuro", Fi = () => "主题：深色", Ii = () => "テーマ：ダーク", Li = () => "Theme: Dark", Ri = () => "Тема: Темная", zi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ai(e) : n === "es" ? ji(e) : n === "de" ? Mi(e) : n === "it" ? Ni(e) : n === "pt" ? Pi(e) : n === "zh" ? Fi(e) : n === "ja" ? Ii(e) : n === "ko" ? Li(e) : n === "ru" ? Ri(e) : ki(e);
}), Bi = () => "Theme mode: auto (system). Click to switch to light mode.", Vi = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Hi = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Ui = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Wi = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Gi = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", Ki = () => "主题模式：自动（系统）。点击切换到浅色模式。", qi = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", Ji = () => "Theme mode: auto (system). Click to switch to light mode.", Yi = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Xi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Vi(e) : n === "es" ? Hi(e) : n === "de" ? Ui(e) : n === "it" ? Wi(e) : n === "pt" ? Gi(e) : n === "zh" ? Ki(e) : n === "ja" ? qi(e) : n === "ko" ? Ji(e) : n === "ru" ? Yi(e) : Bi(e);
}), Zi = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, Qi = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, $i = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, ea = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, ta = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, na = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, ra = (e) => `主题模式：${e?.mode}。点击切换模式。`, ia = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, aa = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, oa = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, sa = ((e, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Qi(e) : n === "es" ? $i(e) : n === "de" ? ea(e) : n === "it" ? ta(e) : n === "pt" ? na(e) : n === "zh" ? ra(e) : n === "ja" ? ia(e) : n === "ko" ? aa(e) : n === "ru" ? oa(e) : Zi(e);
}), ca = () => "Theme: Light", la = () => "Thème : clair", ua = () => "Tema: Claro", da = () => "Thema: Hell", fa = () => "Tema: Chiaro", pa = () => "Tema: Claro", ma = () => "主题：浅色", ha = () => "テーマ：ライト", X = () => "Theme: Light", ga = () => "Тема: Светлая", _a = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? la(e) : n === "es" ? ua(e) : n === "de" ? da(e) : n === "it" ? fa(e) : n === "pt" ? pa(e) : n === "zh" ? ma(e) : n === "ja" ? ha(e) : n === "ko" ? X(e) : n === "ru" ? ga(e) : ca(e);
}), Z = [
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
function va(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function ya(e) {
	return Z.includes(e);
}
var ba = /* @__PURE__ */ new Set([
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
function xa(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!ya(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !ba.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Q = o(typeof window < "u" ? window.location.pathname : "/en"), $ = i(Q, (e) => xa(e));
function Sa(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Q.set(window.location.pathname));
}
var Ca = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), wa = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), Ta = e.from_html("<li><!></li>"), Ea = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function Da(t, n) {
	e.push(n, !0);
	let r = () => e.store_get($, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
		{
			label: Ge(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: nt(),
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: Ce(),
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var c = Ea(), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d), p = e.only_child(f, !0), m = e.sibling(f, 2), h = e.only_child(m, !0);
	e.reset(d);
	var g = e.sibling(d, 2), _ = e.child(g), v = e.only_child(_, !0), y = e.sibling(_, 2);
	e.each(y, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = Ta(), i = e.child(r), a = (t) => {
			var r = Ca(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = wa(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(y), e.reset(g);
	var b = e.sibling(g, 2), x = e.child(b), S = e.only_child(x, !0), C = e.sibling(x, 2), w = e.only_child(C, !0);
	e.reset(b), e.reset(u);
	var T = e.sibling(u, 2), E = e.only_child(T, !0);
	e.reset(l), e.reset(c), e.template_effect((t, n, r, i, a, o) => {
		e.set_text(p, t), e.set_text(h, n), e.set_text(v, r), e.set_text(S, i), e.set_text(w, a), e.set_text(E, o);
	}, [
		() => wt(),
		() => Pe(),
		() => pt(),
		() => fe(),
		() => oi(),
		() => K()
	]), e.append(t, c), e.pop(), a();
}
var Oa = e.from_html("<option> </option>"), ka = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function Aa(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(Q, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		Sa(a(Q).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = ka(), l = e.child(c);
	e.each(l, 5, () => Z, (e) => e, (t, n) => {
		var r = Oa(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => va(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var ja = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function Ma(n, r) {
	e.push(r, !0);
	function i() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function a(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let o = e.state("auto");
	t(() => {
		let t = i();
		e.set(o, t, !0), a(t);
	}), e.user_effect(() => {
		if (e.get(o) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => a("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function s() {
		let t = e.get(o) === "light" ? "dark" : e.get(o) === "dark" ? "auto" : "light";
		e.set(o, t, !0), a(t), window.localStorage.setItem("theme", t);
	}
	let c = e.derived(() => e.get(o) === "auto" ? Xi() : sa({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? Oi() : e.get(o) === "dark" ? zi() : _a());
	var u = ja(), d = e.only_child(u, !0);
	e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
var Na = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), Pa = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Fa = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Ia(t, n) {
	e.push(n, !0);
	let r = () => e.store_get($, "$route", i), [i, a] = e.setup_stores(), o = e.state(!1), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: gr()
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: ar()
		},
		{
			to: `/${e.get(c)}/team`,
			label: Rr()
		},
		{
			to: `/${e.get(c)}/blog`,
			label: Ft()
		},
		{
			to: `/${e.get(c)}/careers`,
			label: Kt()
		},
		{
			to: `/${e.get(c)}/faq`,
			label: hn()
		},
		{
			to: `/${e.get(c)}/contact`,
			label: rn()
		},
		{
			to: `/${e.get(c)}/settings`,
			label: Dr()
		}
	]), u = e.derived(() => r().kind === "ok" && r().page === ""), d = e.derived(() => r().kind === "ok" && r().page === "about");
	var f = Fa(), p = e.child(f), m = e.child(p), h = e.child(m), g = e.only_child(h, !0), _ = e.sibling(h, 2), v = e.child(_);
	let y;
	var b = e.only_child(v, !0), x = e.sibling(v, 2);
	let S;
	var C = e.only_child(x, !0), w = e.sibling(x, 2), T = e.child(w), E = e.child(T), D = e.sibling(E);
	{
		let t = e.derived(() => e.get(o) ? "transition-transform rotate-180" : "transition-transform");
		s(D, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(T);
	var O = e.sibling(T, 2), k = (t) => {
		var n = Pa(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = Na(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(o, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(o, !0)), e.event("mouseleave", n, () => e.set(o, !1)), e.append(t, n);
	};
	e.if(O, (t) => {
		e.get(o) && t(k);
	}), e.reset(w), e.reset(_), e.reset(m);
	var A = e.sibling(m, 2), j = e.child(A), M = e.child(j), N = e.only_child(M, !0);
	e.next(2), e.reset(j);
	var P = e.sibling(j, 2);
	Aa(P, {}), Ma(e.sibling(P, 2), {}), e.reset(A), e.reset(p), e.reset(f), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(h, "href", `/${e.get(c)}`), e.set_text(g, t), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_text(b, n), e.set_attribute(x, "href", `/${e.get(c)}/about`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(d) }), e.set_text(C, r), e.set_text(E, `${i ?? ""} `), e.set_text(N, a);
	}, [
		() => Yr(),
		() => En(),
		() => Ln(),
		() => Jn(),
		() => _i()
	]), e.event("mouseenter", T, () => e.set(o, !0)), e.event("mouseleave", T, () => e.set(o, !1)), e.delegated("click", T, () => e.set(o, !e.get(o))), e.append(t, f), e.pop(), a();
}
e.delegate(["click"]);
var La = e.from_html("<!> <!> <!>", 1);
function Ra(i, a) {
	e.push(a, !0);
	let o = typeof performance < "u" ? performance.now() : 0;
	t(() => {
		n(), r("AppRoot", o);
	}), e.user_effect(() => {
		document.documentElement.lang = a.locale, b(a.locale, { reload: !1 });
	});
	var s = La(), c = e.first_child(s);
	Ia(c, {});
	var l = e.sibling(c, 2);
	e.snippet(l, () => a.children), Da(e.sibling(l, 2), {}), e.append(i, s), e.pop();
}
export { Ra as default };

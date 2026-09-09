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
], x = [], S = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var C, w = !1, T = () => {
	let e = b;
	!S && typeof window < "u" && window.location?.href && (e = W(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return w || (C = t, w = !0, D(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = R();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && C !== void 0) n = C;
		else if (K(t) && G.has(t)) {
			let e = G.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return k(t);
			}
		}
		let e = O(n);
		if (e) return e;
	}
}
var E = (e) => {
	e ? window.location.href = e : window.location.reload();
}, D = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = T();
	} catch {}
	let i = [], a = b;
	!S && typeof window < "u" && window.location?.href && (a = W(window.location.href));
	for (let t of a) if (t === "globalVariable") C = e;
	else if (t === "cookie") {
		if (S || typeof document > "u" || typeof window > "u") continue;
		let t = `${y}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, I();
	} else if (t === "baseLocale") continue;
	else if (K(t) && G.has(t)) {
		let n = G.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!S && n.reload && window.location && e !== r && E(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function O(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of v) if (e.toLowerCase() === t) return e;
}
function k(e) {
	let t = O(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${v.join(", ")}`);
}
function A(e) {
	return e;
}
function j(e, t) {
	return e.exec(t.href);
}
var M = y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), N = RegExp(`(?:^|;\\s*)${M}=([^;]*)`), P = Symbol(), F = P;
function I() {
	F = P;
}
function L() {
	typeof queueMicrotask == "function" ? queueMicrotask(I) : Promise.resolve().then(I);
}
function R() {
	if (typeof document > "u") return;
	if (F !== P) return F;
	let e = document.cookie.match(N)?.[1];
	return F = O(e), L(), F;
}
function z(e) {
	return B(e);
}
function B(e) {
	let t = A(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && O(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), A(t);
}
var V, H;
function U(e) {
	if (x.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (V === t) return H;
	let n = A(new URL(t, "http://example.com")), r = z(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of x) if (j(new _(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return V = t, H = a, a;
}
function W(e) {
	let t = U(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : b;
}
var G = /* @__PURE__ */ new Map();
function K(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var q = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", J = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", Y = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", X = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", Z = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", re = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", ie = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ae = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", oe = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", se = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : q(e);
}), le = () => "Contact", ue = () => "Contact", de = () => "Contacto", fe = () => "Kontakt", pe = () => "Contatti", me = () => "Contato", he = () => "联系我们", ge = () => "お問い合わせ", _e = () => "Contact", ve = () => "Контакт", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Contributing", xe = () => "Contribuer", Se = () => "Contribuir", Ce = () => "Beitragen", we = () => "Contribuire", Te = () => "Contribuindo", Ee = () => "贡献", De = () => "貢献する", Oe = () => "Contributing", ke = () => "Участие в проекте", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Me = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Ne = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Pe = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Fe = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Ie = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Le = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", Re = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", ze = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Be = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "GitHub", Ue = () => "GitHub", We = () => "GitHub", Ge = () => "GitHub", Ke = () => "GitHub", qe = () => "GitHub", Je = () => "GitHub", Ye = () => "GitHub", Xe = () => "GitHub", Ze = () => "GitHub", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Methodology", et = () => "Méthodologie", tt = () => "Metodología", nt = () => "Methodik", rt = () => "Metodologia", it = () => "Metodologia", at = () => "方法论", ot = () => "手法", st = () => "Methodology", ct = () => "Методология", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Resources", dt = () => "Ressources", ft = () => "Recursos", pt = () => "Ressourcen", mt = () => "Risorse", ht = () => "Recursos", gt = () => "资源", _t = () => "リソース", vt = () => "Resources", yt = () => "Ресурсы", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "i18n Benchmark", St = () => "Benchmark i18n", Ct = () => "i18n Benchmark", wt = () => "i18n Benchmark", Tt = () => "i18n Benchmark", Et = () => "i18n Benchmark", Dt = () => "i18n Benchmark", Ot = () => "i18n Benchmark", kt = () => "i18n Benchmark", At = () => "i18n Benchmark", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "Blog", Nt = () => "Blog", Pt = () => "Blog", Ft = () => "Blog", It = () => "Blog", Lt = () => "Blog", Rt = () => "博客", zt = () => "ブログ", Bt = () => "Blog", Vt = () => "Блог", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "Careers", Wt = () => "Carrières", Gt = () => "Carreras", Kt = () => "Karriere", qt = () => "Carriere", Jt = () => "Carreiras", Yt = () => "招聘", Xt = () => "採用情報", Zt = () => "Careers", Qt = () => "Вакансии", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "Contact", tn = () => "Contact", nn = () => "Contacto", rn = () => "Kontakt", an = () => "Contatti", on = () => "Contato", sn = () => "联系我们", cn = () => "お問い合わせ", ln = () => "Contact", un = () => "Контакт", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "FAQ", pn = () => "FAQ", mn = () => "FAQ", hn = () => "FAQ", gn = () => "FAQ", _n = () => "FAQ", vn = () => "常见问题", yn = () => "FAQ", bn = () => "FAQ", xn = () => "FAQ", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Home", wn = () => "Accueil", Tn = () => "Inicio", En = () => "Home", Dn = () => "Home", On = () => "Início", kn = () => "首页", An = () => "ホーム", jn = () => "Home", Mn = () => "Главная", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Methodology", Fn = () => "Méthodologie", In = () => "Metodología", Ln = () => "Methodik", Rn = () => "Metodologia", zn = () => "Metodologia", Bn = () => "方法论", Q = () => "手法", Vn = () => "Methodology", Hn = () => "Методология", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Q(e) : n === "ko" ? Vn(e) : n === "ru" ? Hn(e) : Pn(e);
}), Wn = () => "Mock Pages", Gn = () => "Pages fictives", Kn = () => "Páginas de prueba", qn = () => "Testseiten", Jn = () => "Pagine di test", Yn = () => "Páginas de Teste", Xn = () => "模拟页面", Zn = () => "テストページ", Qn = () => "Mock Pages", $n = () => "Тестовые страницы", er = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : n === "ru" ? $n(e) : Wn(e);
}), tr = () => "Pricing", nr = () => "Tarifs", rr = () => "Precios", ir = () => "Preise", ar = () => "Prezzi", or = () => "Preços", sr = () => "价格", cr = () => "価格", lr = () => "Pricing", ur = () => "Цены", dr = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? nr(e) : n === "es" ? rr(e) : n === "de" ? ir(e) : n === "it" ? ar(e) : n === "pt" ? or(e) : n === "zh" ? sr(e) : n === "ja" ? cr(e) : n === "ko" ? lr(e) : n === "ru" ? ur(e) : tr(e);
}), fr = () => "Products", pr = () => "Produits", mr = () => "Productos", hr = () => "Produkte", gr = () => "Prodotti", _r = () => "Produtos", vr = () => "产品", yr = () => "製品", br = () => "Products", xr = () => "Продукты", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? pr(e) : n === "es" ? mr(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : n === "ru" ? xr(e) : fr(e);
}), Cr = () => "Settings", wr = () => "Paramètres", Tr = () => "Ajustes", Er = () => "Einstellungen", Dr = () => "Impostazioni", Or = () => "Configurações", kr = () => "设置", Ar = () => "設定", jr = () => "Settings", Mr = () => "Настройки", Nr = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? wr(e) : n === "es" ? Tr(e) : n === "de" ? Er(e) : n === "it" ? Dr(e) : n === "pt" ? Or(e) : n === "zh" ? kr(e) : n === "ja" ? Ar(e) : n === "ko" ? jr(e) : n === "ru" ? Mr(e) : Cr(e);
}), Pr = () => "Team", Fr = () => "Équipe", Ir = () => "Equipo", Lr = () => "Team", Rr = () => "Team", zr = () => "Equipe", Br = () => "团队", Vr = () => "チーム", Hr = () => "Team", Ur = () => "Команда", Wr = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Fr(e) : n === "es" ? Ir(e) : n === "de" ? Lr(e) : n === "it" ? Rr(e) : n === "pt" ? zr(e) : n === "zh" ? Br(e) : n === "ja" ? Vr(e) : n === "ko" ? Hr(e) : n === "ru" ? Ur(e) : Pr(e);
}), Gr = () => "i18n Bench", Kr = () => "Bench i18n", qr = () => "i18n Bench", Jr = () => "i18n Bench", Yr = () => "i18n Bench", Xr = () => "i18n Bench", Zr = () => "i18n Bench", Qr = () => "i18n Bench", $r = () => "i18n Bench", ei = () => "i18n Bench", ti = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Kr(e) : n === "es" ? qr(e) : n === "de" ? Jr(e) : n === "it" ? Yr(e) : n === "pt" ? Xr(e) : n === "zh" ? Zr(e) : n === "ja" ? Qr(e) : n === "ko" ? $r(e) : n === "ru" ? ei(e) : Gr(e);
}), ni = () => "contact@intlayer.org", ri = () => "contact@intlayer.org", ii = () => "contact@intlayer.org", ai = () => "contact@intlayer.org", oi = () => "contact@intlayer.org", si = () => "contact@intlayer.org", ci = () => "contact@intlayer.org", li = () => "contact@intlayer.org", ui = () => "contact@intlayer.org", di = () => "contact@intlayer.org", fi = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? ri(e) : n === "es" ? ii(e) : n === "de" ? ai(e) : n === "it" ? oi(e) : n === "pt" ? si(e) : n === "zh" ? ci(e) : n === "ja" ? li(e) : n === "ko" ? ui(e) : n === "ru" ? di(e) : ni(e);
}), pi = () => "Go to GitHub", mi = () => "Aller sur GitHub", hi = () => "Ir a GitHub", gi = () => "Zu GitHub", _i = () => "Vai su GitHub", vi = () => "Ir para o GitHub", yi = () => "前往 GitHub", bi = () => "GitHubへ", xi = () => "Go to GitHub", Si = () => "Перейти на GitHub", Ci = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? mi(e) : n === "es" ? hi(e) : n === "de" ? gi(e) : n === "it" ? _i(e) : n === "pt" ? vi(e) : n === "zh" ? yi(e) : n === "ja" ? bi(e) : n === "ko" ? xi(e) : n === "ru" ? Si(e) : pi(e);
}), wi = () => "Theme: Auto", Ti = () => "Thème : automatique", Ei = () => "Tema: Auto", Di = () => "Thema: Auto", Oi = () => "Tema: Auto", ki = () => "Tema: Automático", Ai = () => "主题：自动", ji = () => "テーマ：自動", Mi = () => "Theme: Auto", Ni = () => "Тема: Авто", Pi = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Ti(e) : n === "es" ? Ei(e) : n === "de" ? Di(e) : n === "it" ? Oi(e) : n === "pt" ? ki(e) : n === "zh" ? Ai(e) : n === "ja" ? ji(e) : n === "ko" ? Mi(e) : n === "ru" ? Ni(e) : wi(e);
}), Fi = () => "Theme: Dark", Ii = () => "Thème : sombre", Li = () => "Tema: Oscuro", Ri = () => "Thema: Dunkel", zi = () => "Tema: Scuro", Bi = () => "Tema: Escuro", Vi = () => "主题：深色", Hi = () => "テーマ：ダーク", Ui = () => "Theme: Dark", Wi = () => "Тема: Темная", Gi = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Ii(e) : n === "es" ? Li(e) : n === "de" ? Ri(e) : n === "it" ? zi(e) : n === "pt" ? Bi(e) : n === "zh" ? Vi(e) : n === "ja" ? Hi(e) : n === "ko" ? Ui(e) : n === "ru" ? Wi(e) : Fi(e);
}), Ki = () => "Theme mode: auto (system). Click to switch to light mode.", qi = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Ji = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Yi = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Xi = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Zi = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", Qi = () => "主题模式：自动（系统）。点击切换到浅色模式。", $i = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", ea = () => "Theme mode: auto (system). Click to switch to light mode.", ta = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", na = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? qi(e) : n === "es" ? Ji(e) : n === "de" ? Yi(e) : n === "it" ? Xi(e) : n === "pt" ? Zi(e) : n === "zh" ? Qi(e) : n === "ja" ? $i(e) : n === "ko" ? ea(e) : n === "ru" ? ta(e) : Ki(e);
}), ra = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ia = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, aa = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, oa = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, sa = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, ca = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, la = (e) => `主题模式：${e?.mode}。点击切换模式。`, ua = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, da = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, fa = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, pa = ((e, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? ia(e) : n === "es" ? aa(e) : n === "de" ? oa(e) : n === "it" ? sa(e) : n === "pt" ? ca(e) : n === "zh" ? la(e) : n === "ja" ? ua(e) : n === "ko" ? da(e) : n === "ru" ? fa(e) : ra(e);
}), ma = () => "Theme: Light", ha = () => "Thème : clair", ga = () => "Tema: Claro", _a = () => "Thema: Hell", va = () => "Tema: Chiaro", ya = () => "Tema: Claro", ba = () => "主题：浅色", xa = () => "テーマ：ライト", Sa = () => "Theme: Light", Ca = () => "Тема: Светлая", wa = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? ha(e) : n === "es" ? ga(e) : n === "de" ? _a(e) : n === "it" ? va(e) : n === "pt" ? ya(e) : n === "zh" ? ba(e) : n === "ja" ? xa(e) : n === "ko" ? Sa(e) : n === "ru" ? Ca(e) : ma(e);
}), Ta = o("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function Ea() {
	let t = u(), n = () => t.locale ?? "en";
	return (() => {
		var t = Ta(), i = t.firstChild.firstChild, a = i.firstChild, o = a.firstChild, c = o.nextSibling, l = a.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild, f = d.firstChild, p = d.nextSibling, m = p.nextSibling, h = l.nextSibling.firstChild, g = h.nextSibling, _ = i.nextSibling;
		return r(o, () => jt()), r(c, () => Ve()), r(u, () => bt()), r(f, () => Qe()), r(p, e(s, {
			get href() {
				return `/${n()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return lt();
			}
		})), r(m, e(s, {
			get href() {
				return `/${n()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Ae();
			}
		})), r(h, () => ye()), r(g, () => fi()), r(_, () => ce()), t;
	})();
}
function Da(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Oa = [
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
], ka = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Aa = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), ja = o("<option>");
function Ma() {
	let t = u(), i = l(), a = c(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Aa(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: Oa,
			children: (e) => (() => {
				var t = ja();
				return t.value = e, r(t, () => ka(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Na = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Pa() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Fa() {
	let [e, t] = p("auto");
	m(() => {
		let e = Pa();
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
	let o = () => e() === "auto" ? na() : pa({ mode: e() }), s = () => e() === "auto" ? Pi() : e() === "dark" ? Gi() : wa();
	return (() => {
		var e = Na();
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
var Ia = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), La = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Ra = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function za(e) {
	return (() => {
		var t = Ia();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function Ba() {
	Da("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: Sr()
		},
		{
			to: `/${o()}/pricing`,
			label: dr()
		},
		{
			to: `/${o()}/team`,
			label: Wr()
		},
		{
			to: `/${o()}/blog`,
			label: Ht()
		},
		{
			to: `/${o()}/careers`,
			label: $t()
		},
		{
			to: `/${o()}/faq`,
			label: Sn()
		},
		{
			to: `/${o()}/contact`,
			label: dn()
		},
		{
			to: `/${o()}/settings`,
			label: Nr()
		}
	];
	return (() => {
		var a = La(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild, m = l.nextSibling, h = m.firstChild.firstChild;
		return r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			get children() {
				return ti();
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
				return Nn();
			}
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return Un();
			}
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, () => er(), null), r(p, e(za, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = Ra(), i = t.firstChild;
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
		})(), null), r(h, () => Ci()), r(m, e(Ma, {}), null), r(m, e(Fa, {}), null), a;
	})();
}
t(["click"]);
function Va(t) {
	let n = u(), r = typeof performance < "u" ? performance.now() : 0;
	return m(() => {
		h(), g("AppRoot", r);
	}), f(() => {
		let e = n.locale ?? "en";
		document.documentElement.lang = e, D(e, { reload: !1 });
	}), [
		e(Ba, {}),
		i(() => t.children),
		e(Ea, {})
	];
}
export { Va as default };

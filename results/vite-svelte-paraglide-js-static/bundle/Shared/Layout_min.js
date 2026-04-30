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
], p = [], m, h;
function g(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (m === t) return h;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of p) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return m = t, h = r, r;
}
function _(e) {
	let t = g(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var v = void 0, y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = f;
	!y && typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return D(t);
			}
		}
		let e = E(n);
		if (e) return e;
	}
}
var w = (e) => {
	e ? window.location.href = e : window.location.reload();
}, T = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && w(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function E(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function D(e) {
	let t = E(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function O() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return E(e);
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "i18n Bench", M = () => "Bench i18n", N = () => "i18n Bench", P = () => "i18n Bench", ee = () => "i18n Bench", te = () => "i18n Bench", ne = () => "i18n Bench", re = () => "i18n Bench", ie = () => "i18n Bench", F = () => "i18n Bench", I = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? j(e) : n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? ee(e) : n === "pt" ? te(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : F(e);
}), L = () => "contact@intlayer.org", R = () => "contact@intlayer.org", z = () => "contact@intlayer.org", B = () => "contact@intlayer.org", V = () => "contact@intlayer.org", H = () => "contact@intlayer.org", U = () => "contact@intlayer.org", W = () => "contact@intlayer.org", G = () => "contact@intlayer.org", K = () => "contact@intlayer.org", q = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Go to GitHub", Y = () => "Aller sur GitHub", ae = () => "Ir a GitHub", oe = () => "Zu GitHub", se = () => "Vai su GitHub", ce = () => "Ir para o GitHub", le = () => "前往 GitHub", ue = () => "GitHubへ", de = () => "Go to GitHub", fe = () => "Перейти на GitHub", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : fe(e);
}), me = () => "Home", he = () => "Accueil", ge = () => "Inicio", _e = () => "Home", ve = () => "Home", ye = () => "Início", be = () => "首页", xe = () => "ホーム", Se = () => "Home", Ce = () => "Главная", we = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? me(e) : n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? xe(e) : n === "ko" ? Se(e) : Ce(e);
}), Te = () => "Methodology", Ee = () => "Méthodologie", De = () => "Metodología", Oe = () => "Methodik", ke = () => "Metodologia", Ae = () => "Metodologia", je = () => "方法论", Me = () => "手法", Ne = () => "Methodology", Pe = () => "Методология", Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Te(e) : n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : Pe(e);
}), Ie = () => "Mock Pages", Le = () => "Pages fictives", Re = () => "Páginas de prueba", ze = () => "Testseiten", Be = () => "Pagine di test", Ve = () => "Páginas de Teste", He = () => "模拟页面", Ue = () => "テストページ", We = () => "Mock Pages", Ge = () => "Тестовые страницы", Ke = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Ie(e) : n === "fr" ? Le(e) : n === "es" ? Re(e) : n === "de" ? ze(e) : n === "it" ? Be(e) : n === "pt" ? Ve(e) : n === "zh" ? He(e) : n === "ja" ? Ue(e) : n === "ko" ? We(e) : Ge(e);
}), qe = () => "Products", Je = () => "Produits", Ye = () => "Productos", Xe = () => "Produkte", Ze = () => "Prodotti", Qe = () => "Produtos", $e = () => "产品", et = () => "製品", tt = () => "Products", nt = () => "Продукты", rt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? qe(e) : n === "fr" ? Je(e) : n === "es" ? Ye(e) : n === "de" ? Xe(e) : n === "it" ? Ze(e) : n === "pt" ? Qe(e) : n === "zh" ? $e(e) : n === "ja" ? et(e) : n === "ko" ? tt(e) : nt(e);
}), it = () => "Pricing", at = () => "Tarifs", ot = () => "Precios", st = () => "Preise", ct = () => "Prezzi", lt = () => "Preços", ut = () => "价格", dt = () => "価格", ft = () => "Pricing", pt = () => "Цены", mt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? it(e) : n === "fr" ? at(e) : n === "es" ? ot(e) : n === "de" ? st(e) : n === "it" ? ct(e) : n === "pt" ? lt(e) : n === "zh" ? ut(e) : n === "ja" ? dt(e) : n === "ko" ? ft(e) : pt(e);
}), ht = () => "Team", gt = () => "Équipe", _t = () => "Equipo", vt = () => "Team", yt = () => "Team", bt = () => "Equipe", xt = () => "团队", St = () => "チーム", Ct = () => "Team", wt = () => "Команда", Tt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? ht(e) : n === "fr" ? gt(e) : n === "es" ? _t(e) : n === "de" ? vt(e) : n === "it" ? yt(e) : n === "pt" ? bt(e) : n === "zh" ? xt(e) : n === "ja" ? St(e) : n === "ko" ? Ct(e) : wt(e);
}), Et = () => "Blog", Dt = () => "Blog", Ot = () => "Blog", kt = () => "Blog", At = () => "Blog", jt = () => "Blog", Mt = () => "博客", Nt = () => "ブログ", Pt = () => "Blog", Ft = () => "Блог", It = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Et(e) : n === "fr" ? Dt(e) : n === "es" ? Ot(e) : n === "de" ? kt(e) : n === "it" ? At(e) : n === "pt" ? jt(e) : n === "zh" ? Mt(e) : n === "ja" ? Nt(e) : n === "ko" ? Pt(e) : Ft(e);
}), Lt = () => "Careers", Rt = () => "Carrières", zt = () => "Carreras", Bt = () => "Karriere", Vt = () => "Carriere", Ht = () => "Carreiras", Ut = () => "招聘", Wt = () => "採用情報", Gt = () => "Careers", Kt = () => "Вакансии", qt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Lt(e) : n === "fr" ? Rt(e) : n === "es" ? zt(e) : n === "de" ? Bt(e) : n === "it" ? Vt(e) : n === "pt" ? Ht(e) : n === "zh" ? Ut(e) : n === "ja" ? Wt(e) : n === "ko" ? Gt(e) : Kt(e);
}), Jt = () => "FAQ", Yt = () => "FAQ", Xt = () => "FAQ", Zt = () => "FAQ", Qt = () => "FAQ", $t = () => "FAQ", en = () => "常见问题", tn = () => "FAQ", nn = () => "FAQ", rn = () => "FAQ", an = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Jt(e) : n === "fr" ? Yt(e) : n === "es" ? Xt(e) : n === "de" ? Zt(e) : n === "it" ? Qt(e) : n === "pt" ? $t(e) : n === "zh" ? en(e) : n === "ja" ? tn(e) : n === "ko" ? nn(e) : rn(e);
}), on = () => "Contact", sn = () => "Contact", cn = () => "Contacto", ln = () => "Kontakt", un = () => "Contatti", dn = () => "Contato", fn = () => "联系我们", pn = () => "お問い合わせ", mn = () => "Contact", hn = () => "Контакт", gn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? on(e) : n === "fr" ? sn(e) : n === "es" ? cn(e) : n === "de" ? ln(e) : n === "it" ? un(e) : n === "pt" ? dn(e) : n === "zh" ? fn(e) : n === "ja" ? pn(e) : n === "ko" ? mn(e) : hn(e);
}), _n = () => "Settings", vn = () => "Paramètres", yn = () => "Ajustes", bn = () => "Einstellungen", xn = () => "Impostazioni", Sn = () => "Configurações", Cn = () => "设置", wn = () => "設定", Tn = () => "Settings", En = () => "Настройки", Dn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? _n(e) : n === "fr" ? vn(e) : n === "es" ? yn(e) : n === "de" ? bn(e) : n === "it" ? xn(e) : n === "pt" ? Sn(e) : n === "zh" ? Cn(e) : n === "ja" ? wn(e) : n === "ko" ? Tn(e) : En(e);
}), On = () => "i18n Benchmark", kn = () => "Benchmark i18n", An = () => "i18n Benchmark", jn = () => "i18n Benchmark", Mn = () => "i18n Benchmark", Nn = () => "i18n Benchmark", Pn = () => "i18n Benchmark", Fn = () => "i18n Benchmark", In = () => "i18n Benchmark", Ln = () => "i18n Benchmark", Rn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? On(e) : n === "fr" ? kn(e) : n === "es" ? An(e) : n === "de" ? jn(e) : n === "it" ? Mn(e) : n === "pt" ? Nn(e) : n === "zh" ? Pn(e) : n === "ja" ? Fn(e) : n === "ko" ? In(e) : Ln(e);
}), zn = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Bn = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Vn = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Hn = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Un = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Wn = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Gn = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", Kn = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", qn = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Jn = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Yn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? zn(e) : n === "fr" ? Bn(e) : n === "es" ? Vn(e) : n === "de" ? Hn(e) : n === "it" ? Un(e) : n === "pt" ? Wn(e) : n === "zh" ? Gn(e) : n === "ja" ? Kn(e) : n === "ko" ? qn(e) : Jn(e);
}), Xn = () => "Resources", Zn = () => "Ressources", Qn = () => "Recursos", $n = () => "Ressourcen", er = () => "Risorse", tr = () => "Recursos", nr = () => "资源", rr = () => "リソース", ir = () => "Resources", ar = () => "Ресурсы", or = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Xn(e) : n === "fr" ? Zn(e) : n === "es" ? Qn(e) : n === "de" ? $n(e) : n === "it" ? er(e) : n === "pt" ? tr(e) : n === "zh" ? nr(e) : n === "ja" ? rr(e) : n === "ko" ? ir(e) : ar(e);
}), sr = () => "GitHub", cr = () => "GitHub", lr = () => "GitHub", ur = () => "GitHub", dr = () => "GitHub", fr = () => "GitHub", pr = () => "GitHub", mr = () => "GitHub", hr = () => "GitHub", gr = () => "GitHub", _r = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? sr(e) : n === "fr" ? cr(e) : n === "es" ? lr(e) : n === "de" ? ur(e) : n === "it" ? dr(e) : n === "pt" ? fr(e) : n === "zh" ? pr(e) : n === "ja" ? mr(e) : n === "ko" ? hr(e) : gr(e);
}), vr = () => "Methodology", yr = () => "Méthodologie", br = () => "Metodología", xr = () => "Methodik", Sr = () => "Metodologia", Cr = () => "Metodologia", wr = () => "方法论", Tr = () => "手法", Er = () => "Methodology", Dr = () => "Методология", Or = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? vr(e) : n === "fr" ? yr(e) : n === "es" ? br(e) : n === "de" ? xr(e) : n === "it" ? Sr(e) : n === "pt" ? Cr(e) : n === "zh" ? wr(e) : n === "ja" ? Tr(e) : n === "ko" ? Er(e) : Dr(e);
}), kr = () => "Contributing", Ar = () => "Contribuer", jr = () => "Contribuir", Mr = () => "Beitragen", Nr = () => "Contribuire", Pr = () => "Contribuindo", Fr = () => "贡献", Ir = () => "貢献する", Lr = () => "Contributing", Rr = () => "Участие в проекте", zr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? kr(e) : n === "fr" ? Ar(e) : n === "es" ? jr(e) : n === "de" ? Mr(e) : n === "it" ? Nr(e) : n === "pt" ? Pr(e) : n === "zh" ? Fr(e) : n === "ja" ? Ir(e) : n === "ko" ? Lr(e) : Rr(e);
}), Br = () => "Contact", Vr = () => "Contact", Hr = () => "Contacto", Ur = () => "Kontakt", Wr = () => "Contatti", Gr = () => "Contato", Kr = () => "联系我们", qr = () => "お問い合わせ", Jr = () => "Contact", Yr = () => "Контакт", Xr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Br(e) : n === "fr" ? Vr(e) : n === "es" ? Hr(e) : n === "de" ? Ur(e) : n === "it" ? Wr(e) : n === "pt" ? Gr(e) : n === "zh" ? Kr(e) : n === "ja" ? qr(e) : n === "ko" ? Jr(e) : Yr(e);
}), Zr = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", Qr = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", $r = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ei = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", ti = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", ni = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", ri = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ii = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", ai = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", oi = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", si = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Zr(e) : n === "fr" ? Qr(e) : n === "es" ? $r(e) : n === "de" ? ei(e) : n === "it" ? ti(e) : n === "pt" ? ni(e) : n === "zh" ? ri(e) : n === "ja" ? ii(e) : n === "ko" ? ai(e) : oi(e);
}), ci = () => "Theme: Auto", li = () => "Thème : automatique", ui = () => "Tema: Auto", di = () => "Thema: Auto", fi = () => "Tema: Auto", pi = () => "Tema: Automático", mi = () => "主题：自动", hi = () => "テーマ：自動", gi = () => "Theme: Auto", _i = () => "Тема: Авто", vi = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? ci(e) : n === "fr" ? li(e) : n === "es" ? ui(e) : n === "de" ? di(e) : n === "it" ? fi(e) : n === "pt" ? pi(e) : n === "zh" ? mi(e) : n === "ja" ? hi(e) : n === "ko" ? gi(e) : _i(e);
}), yi = () => "Theme: Dark", bi = () => "Thème : sombre", xi = () => "Tema: Oscuro", Si = () => "Thema: Dunkel", Ci = () => "Tema: Scuro", wi = () => "Tema: Escuro", Ti = () => "主题：深色", Ei = () => "テーマ：ダーク", Di = () => "Theme: Dark", Oi = () => "Тема: Темная", ki = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? yi(e) : n === "fr" ? bi(e) : n === "es" ? xi(e) : n === "de" ? Si(e) : n === "it" ? Ci(e) : n === "pt" ? wi(e) : n === "zh" ? Ti(e) : n === "ja" ? Ei(e) : n === "ko" ? Di(e) : Oi(e);
}), Ai = () => "Theme: Light", ji = () => "Thème : clair", Mi = () => "Tema: Claro", Ni = () => "Thema: Hell", Pi = () => "Tema: Chiaro", Fi = () => "Tema: Claro", Ii = () => "主题：浅色", Li = () => "テーマ：ライト", Ri = () => "Theme: Light", zi = () => "Тема: Светлая", Bi = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Ai(e) : n === "fr" ? ji(e) : n === "es" ? Mi(e) : n === "de" ? Ni(e) : n === "it" ? Pi(e) : n === "pt" ? Fi(e) : n === "zh" ? Ii(e) : n === "ja" ? Li(e) : n === "ko" ? Ri(e) : zi(e);
}), Vi = () => "Theme mode: auto (system). Click to switch to light mode.", Hi = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Ui = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Wi = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Gi = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Ki = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", qi = () => "主题模式：自动（系统）。点击切换到浅色模式。", Ji = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", Yi = () => "Theme mode: auto (system). Click to switch to light mode.", Xi = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Zi = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Vi(e) : n === "fr" ? Hi(e) : n === "es" ? Ui(e) : n === "de" ? Wi(e) : n === "it" ? Gi(e) : n === "pt" ? Ki(e) : n === "zh" ? qi(e) : n === "ja" ? Ji(e) : n === "ko" ? Yi(e) : Xi(e);
}), Qi = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, $i = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, ea = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, ta = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, na = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, ra = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, ia = (e) => `主题模式：${e?.mode}。点击切换模式。`, aa = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, oa = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, sa = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, ca = ((e, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Qi(e) : n === "fr" ? $i(e) : n === "es" ? ea(e) : n === "de" ? ta(e) : n === "it" ? na(e) : n === "pt" ? ra(e) : n === "zh" ? ia(e) : n === "ja" ? aa(e) : n === "ko" ? oa(e) : sa(e);
}), X = [
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
function la(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function ua(e) {
	return X.includes(e);
}
var da = new Set([
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
function fa(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!ua(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !da.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Z = o(typeof window < "u" ? window.location.pathname : "/en"), Q = i(Z, (e) => fa(e));
function pa(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Z.set(window.location.pathname));
}
var ma = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), ha = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), ga = e.from_html("<li><!></li>"), _a = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function va(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
		{
			label: _r(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: Or(),
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: zr(),
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var c = _a(), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2), h = e.child(m, !0);
	e.reset(m), e.reset(d);
	var g = e.sibling(d, 2), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_, 2);
	e.each(y, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = ga(), i = e.child(r), a = (t) => {
			var r = ma(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = ha(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(y), e.reset(g);
	var b = e.sibling(g, 2), x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x, 2), w = e.child(C, !0);
	e.reset(C), e.reset(b), e.reset(u);
	var T = e.sibling(u, 2), E = e.child(T, !0);
	e.reset(T), e.reset(l), e.reset(c), e.template_effect((t, n, r, i, a, o) => {
		e.set_text(p, t), e.set_text(h, n), e.set_text(v, r), e.set_text(S, i), e.set_text(w, a), e.set_text(E, o);
	}, [
		() => Rn(),
		() => Yn(),
		() => or(),
		() => Xr(),
		() => q(),
		() => si()
	]), e.append(t, c), e.pop(), a();
}
var ya = e.from_html("<option> </option>"), ba = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function $(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(Z, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		pa(a(Z).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = ba(), l = e.child(c);
	e.each(l, 5, () => X, (e) => e, (t, n) => {
		var r = ya(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => la(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var xa = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function Sa(n, r) {
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
	let c = e.derived(() => e.get(o) === "auto" ? Zi() : ca({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? vi() : e.get(o) === "dark" ? ki() : Bi());
	var u = xa(), d = e.child(u, !0);
	e.reset(u), e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
var Ca = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), wa = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Ta = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Ea(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", i), [i, a] = e.setup_stores(), o = e.state(!1), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: rt()
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: mt()
		},
		{
			to: `/${e.get(c)}/team`,
			label: Tt()
		},
		{
			to: `/${e.get(c)}/blog`,
			label: It()
		},
		{
			to: `/${e.get(c)}/careers`,
			label: qt()
		},
		{
			to: `/${e.get(c)}/faq`,
			label: an()
		},
		{
			to: `/${e.get(c)}/contact`,
			label: gn()
		},
		{
			to: `/${e.get(c)}/settings`,
			label: Dn()
		}
	]), u = e.derived(() => r().kind === "ok" && r().page === ""), d = e.derived(() => r().kind === "ok" && r().page === "about");
	var f = Ta(), p = e.child(f), m = e.child(p), h = e.child(m), g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2), v = e.child(_);
	let y;
	var b = e.child(v, !0);
	e.reset(v);
	var x = e.sibling(v, 2);
	let S;
	var C = e.child(x, !0);
	e.reset(x);
	var w = e.sibling(x, 2), T = e.child(w), E = e.child(T), D = e.sibling(E);
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
		var n = wa(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = Ca(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(o, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(o, !0)), e.event("mouseleave", n, () => e.set(o, !1)), e.append(t, n);
	};
	e.if(O, (t) => {
		e.get(o) && t(k);
	}), e.reset(w), e.reset(_), e.reset(m);
	var A = e.sibling(m, 2), j = e.child(A), M = e.child(j), N = e.child(M, !0);
	e.reset(M), e.next(2), e.reset(j);
	var P = e.sibling(j, 2);
	$(P, {}), Sa(e.sibling(P, 2), {}), e.reset(A), e.reset(p), e.reset(f), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(h, "href", `/${e.get(c)}`), e.set_text(g, t), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_text(b, n), e.set_attribute(x, "href", `/${e.get(c)}/about`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(d) }), e.set_text(C, r), e.set_text(E, `${i ?? ""} `), e.set_text(N, a);
	}, [
		() => I(),
		() => we(),
		() => Fe(),
		() => Ke(),
		() => pe()
	]), e.event("mouseenter", T, () => e.set(o, !0)), e.event("mouseleave", T, () => e.set(o, !1)), e.delegated("click", T, () => e.set(o, !e.get(o))), e.append(t, f), e.pop(), a();
}
e.delegate(["click"]);
var Da = e.from_html("<!> <!> <!>", 1);
function Oa(i, a) {
	e.push(a, !0);
	let o = typeof performance < "u" ? performance.now() : 0;
	t(() => {
		n(), r("AppRoot", o);
	}), e.user_effect(() => {
		document.documentElement.lang = a.locale, T(a.locale, { reload: !1 });
	});
	var s = Da(), c = e.first_child(s);
	Ea(c, {});
	var l = e.sibling(c, 2);
	e.snippet(l, () => a.children), va(e.sibling(l, 2), {}), e.append(i, s), e.pop();
}
export { Oa as default };

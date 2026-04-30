import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import t from "lucide-svelte/icons/chevron-down";
import { derived as n, get as r, writable as i } from "svelte/store";
import "svelte/internal/flags/legacy";
import { onMount as a } from "svelte";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", l = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function m(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function h(e) {
	let t = m(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var g = void 0, _ = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var v, y = !1, b = () => {
	if (g) {
		let e = g?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!_ && typeof window < "u" && window.location?.href && (e = h(window.location.href));
	let t = x(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return y || (v = t, y = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function x(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && v !== void 0) n = v;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return T(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var S = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = b();
	} catch {}
	let i = [], a = u;
	!_ && typeof window < "u" && window.location?.href && (a = h(window.location.href));
	for (let t of a) if (t === "globalVariable") v = e;
	else if (t === "cookie") {
		if (_ || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${l}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!_ && n.reload && window.location && e !== r && S(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "i18n Bench", A = () => "Bench i18n", j = () => "i18n Bench", M = () => "i18n Bench", N = () => "i18n Bench", P = () => "i18n Bench", ee = () => "i18n Bench", te = () => "i18n Bench", ne = () => "i18n Bench", re = () => "i18n Bench", F = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? ee(e) : n === "ja" ? te(e) : n === "ko" ? ne(e) : re(e);
}), I = () => "Go to GitHub", L = () => "Aller sur GitHub", R = () => "Ir a GitHub", z = () => "Zu GitHub", B = () => "Vai su GitHub", V = () => "Ir para o GitHub", H = () => "前往 GitHub", U = () => "GitHubへ", W = () => "Go to GitHub", G = () => "Перейти на GitHub", K = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Home", J = () => "Accueil", Y = () => "Inicio", X = () => "Home", ie = () => "Home", ae = () => "Início", oe = () => "首页", se = () => "ホーム", ce = () => "Home", le = () => "Главная", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "Methodology", fe = () => "Méthodologie", pe = () => "Metodología", me = () => "Methodik", he = () => "Metodologia", ge = () => "Metodologia", _e = () => "方法论", ve = () => "手法", ye = () => "Methodology", be = () => "Методология", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "Mock Pages", Ce = () => "Pages fictives", we = () => "Páginas de prueba", Te = () => "Testseiten", Ee = () => "Pagine di test", De = () => "Páginas de Teste", Oe = () => "模拟页面", ke = () => "テストページ", Ae = () => "Mock Pages", je = () => "Тестовые страницы", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "Products", Pe = () => "Produits", Fe = () => "Productos", Ie = () => "Produkte", Le = () => "Prodotti", Re = () => "Produtos", ze = () => "产品", Be = () => "製品", Ve = () => "Products", He = () => "Продукты", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "Pricing", Ge = () => "Tarifs", Ke = () => "Precios", qe = () => "Preise", Je = () => "Prezzi", Ye = () => "Preços", Xe = () => "价格", Ze = () => "価格", Qe = () => "Pricing", $e = () => "Цены", et = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : $e(e);
}), tt = () => "Team", nt = () => "Équipe", rt = () => "Equipo", it = () => "Team", at = () => "Team", ot = () => "Equipe", st = () => "团队", ct = () => "チーム", lt = () => "Team", ut = () => "Команда", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? tt(e) : n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : ut(e);
}), ft = () => "Blog", pt = () => "Blog", mt = () => "Blog", ht = () => "Blog", gt = () => "Blog", _t = () => "Blog", vt = () => "博客", yt = () => "ブログ", bt = () => "Blog", xt = () => "Блог", St = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), Ct = () => "Careers", wt = () => "Carrières", Tt = () => "Carreras", Et = () => "Karriere", Dt = () => "Carriere", Ot = () => "Carreiras", kt = () => "招聘", At = () => "採用情報", jt = () => "Careers", Mt = () => "Вакансии", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ct(e) : n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : Mt(e);
}), Pt = () => "FAQ", Ft = () => "FAQ", It = () => "FAQ", Lt = () => "FAQ", Rt = () => "FAQ", zt = () => "FAQ", Bt = () => "常见问题", Vt = () => "FAQ", Ht = () => "FAQ", Ut = () => "FAQ", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Pt(e) : n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : Ut(e);
}), Gt = () => "Contact", Kt = () => "Contact", qt = () => "Contacto", Jt = () => "Kontakt", Yt = () => "Contatti", Xt = () => "Contato", Zt = () => "联系我们", Qt = () => "お問い合わせ", $t = () => "Contact", en = () => "Контакт", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Gt(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : en(e);
}), nn = () => "Settings", rn = () => "Paramètres", an = () => "Ajustes", on = () => "Einstellungen", sn = () => "Impostazioni", cn = () => "Configurações", ln = () => "设置", un = () => "設定", dn = () => "Settings", fn = () => "Настройки", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? nn(e) : n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : fn(e);
}), mn = () => "Theme: Auto", hn = () => "Thème : automatique", gn = () => "Tema: Auto", _n = () => "Thema: Auto", vn = () => "Tema: Auto", yn = () => "Tema: Automático", bn = () => "主题：自动", xn = () => "テーマ：自動", Sn = () => "Theme: Auto", Cn = () => "Тема: Авто", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? mn(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : Cn(e);
}), Tn = () => "Theme: Dark", En = () => "Thème : sombre", Dn = () => "Tema: Oscuro", On = () => "Thema: Dunkel", kn = () => "Tema: Scuro", An = () => "Tema: Escuro", jn = () => "主题：深色", Mn = () => "テーマ：ダーク", Nn = () => "Theme: Dark", Pn = () => "Тема: Темная", Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Tn(e) : n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : Pn(e);
}), In = () => "Theme: Light", Ln = () => "Thème : clair", Rn = () => "Tema: Claro", zn = () => "Thema: Hell", Bn = () => "Tema: Chiaro", Vn = () => "Tema: Claro", Hn = () => "主题：浅色", Un = () => "テーマ：ライト", Wn = () => "Theme: Light", Gn = () => "Тема: Светлая", Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? In(e) : n === "fr" ? Ln(e) : n === "es" ? Rn(e) : n === "de" ? zn(e) : n === "it" ? Bn(e) : n === "pt" ? Vn(e) : n === "zh" ? Hn(e) : n === "ja" ? Un(e) : n === "ko" ? Wn(e) : Gn(e);
}), qn = () => "Theme mode: auto (system). Click to switch to light mode.", Jn = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Yn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Xn = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Zn = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Qn = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", $n = () => "主题模式：自动（系统）。点击切换到浅色模式。", er = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", tr = () => "Theme mode: auto (system). Click to switch to light mode.", nr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", rr = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? qn(e) : n === "fr" ? Jn(e) : n === "es" ? Yn(e) : n === "de" ? Xn(e) : n === "it" ? Zn(e) : n === "pt" ? Qn(e) : n === "zh" ? $n(e) : n === "ja" ? er(e) : n === "ko" ? tr(e) : nr(e);
}), ir = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ar = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, or = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, sr = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, cr = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, lr = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, Z = (e) => `主题模式：${e?.mode}。点击切换模式。`, ur = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, dr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, fr = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, pr = ((e, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? ir(e) : n === "fr" ? ar(e) : n === "es" ? or(e) : n === "de" ? sr(e) : n === "it" ? cr(e) : n === "pt" ? lr(e) : n === "zh" ? Z(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : fr(e);
}), Q = [
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
function mr(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function hr(e) {
	return Q.includes(e);
}
var gr = new Set([
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
function _r(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!hr(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !gr.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var $ = i(typeof window < "u" ? window.location.pathname : "/en"), vr = n($, (e) => _r(e));
function yr(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), $.set(window.location.pathname));
}
var br = e.from_html("<option> </option>"), xr = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function Sr(t, n) {
	e.push(n, !1);
	let i = () => e.store_get($, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		yr(r($).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = xr(), l = e.child(c);
	e.each(l, 5, () => Q, (e) => e, (t, n) => {
		var r = br(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => mr(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var Cr = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function wr(t, n) {
	e.push(n, !0);
	function r() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function i(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let o = e.state("auto");
	a(() => {
		let t = r();
		e.set(o, t, !0), i(t);
	}), e.user_effect(() => {
		if (e.get(o) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => i("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function s() {
		let t = e.get(o) === "light" ? "dark" : e.get(o) === "dark" ? "auto" : "light";
		e.set(o, t, !0), i(t), window.localStorage.setItem("theme", t);
	}
	let c = e.derived(() => e.get(o) === "auto" ? rr() : pr({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? wn() : e.get(o) === "dark" ? Fn() : Kn());
	var u = Cr(), d = e.child(u, !0);
	e.reset(u), e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(t, u), e.pop();
}
e.delegate(["click"]);
var Tr = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), Er = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Dr = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Or(n, r) {
	e.push(r, !0);
	let i = () => e.store_get(vr, "$route", a), [a, o] = e.setup_stores(), s = e.state(!1), c = e.derived(() => i().kind === "ok" ? i().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: Ue()
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: et()
		},
		{
			to: `/${e.get(c)}/team`,
			label: dt()
		},
		{
			to: `/${e.get(c)}/blog`,
			label: St()
		},
		{
			to: `/${e.get(c)}/careers`,
			label: Nt()
		},
		{
			to: `/${e.get(c)}/faq`,
			label: Wt()
		},
		{
			to: `/${e.get(c)}/contact`,
			label: tn()
		},
		{
			to: `/${e.get(c)}/settings`,
			label: pn()
		}
	]), u = e.derived(() => i().kind === "ok" && i().page === ""), d = e.derived(() => i().kind === "ok" && i().page === "about");
	var f = Dr(), p = e.child(f), m = e.child(p), h = e.child(m), g = e.child(h, !0);
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
		let n = e.derived(() => e.get(s) ? "transition-transform rotate-180" : "transition-transform");
		t(D, {
			size: 14,
			get class() {
				return e.get(n);
			}
		});
	}
	e.reset(T);
	var O = e.sibling(T, 2), k = (t) => {
		var n = Er(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = Tr(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(s, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(s, !0)), e.event("mouseleave", n, () => e.set(s, !1)), e.append(t, n);
	};
	e.if(O, (t) => {
		e.get(s) && t(k);
	}), e.reset(w), e.reset(_), e.reset(m);
	var A = e.sibling(m, 2), j = e.child(A), M = e.child(j), N = e.child(M, !0);
	e.reset(M), e.next(2), e.reset(j);
	var P = e.sibling(j, 2);
	Sr(P, {}), wr(e.sibling(P, 2), {}), e.reset(A), e.reset(p), e.reset(f), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(h, "href", `/${e.get(c)}`), e.set_text(g, t), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_text(b, n), e.set_attribute(x, "href", `/${e.get(c)}/about`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(d) }), e.set_text(C, r), e.set_text(E, `${i ?? ""} `), e.set_text(N, a);
	}, [
		() => F(),
		() => ue(),
		() => xe(),
		() => Me(),
		() => K()
	]), e.event("mouseenter", T, () => e.set(s, !0)), e.event("mouseleave", T, () => e.set(s, !1)), e.delegated("click", T, () => e.set(s, !e.get(s))), e.append(n, f), e.pop(), o();
}
e.delegate(["click"]);
export { Or as default };

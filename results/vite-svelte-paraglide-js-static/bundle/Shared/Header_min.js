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
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = A();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${l}`;
		document.cookie = t, O();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, y = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function S(e) {
	return e;
}
function C(e, t) {
	return e.exec(t.href);
}
var w = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), T = RegExp(`(?:^|;\\s*)${w}=([^;]*)`), E = Symbol(), D = E;
function O() {
	D = E;
}
function k() {
	typeof queueMicrotask == "function" ? queueMicrotask(O) : Promise.resolve().then(O);
}
function A() {
	if (typeof document > "u") return;
	if (D !== E) return D;
	let e = document.cookie.match(T)?.[1];
	return D = b(e), k(), D;
}
function j(e) {
	return M(e);
}
function M(e) {
	let t = S(typeof e == "string" ? new URL(e, y()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && b(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), S(t);
}
var N, P;
function ee(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (N === t) return P;
	let n = S(new URL(t, "http://example.com")), r = j(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (C(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return N = t, P = a, a;
}
function F(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var te = () => "Blog", ne = () => "Blog", re = () => "Blog", R = () => "Blog", z = () => "Blog", B = () => "Blog", V = () => "博客", H = () => "ブログ", U = () => "Blog", W = () => "Блог", G = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ne(e) : n === "es" ? re(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : te(e);
}), K = () => "Careers", q = () => "Carrières", J = () => "Carreras", Y = () => "Karriere", X = () => "Carriere", ie = () => "Carreiras", ae = () => "招聘", oe = () => "採用情報", se = () => "Careers", ce = () => "Вакансии", le = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : K(e);
}), ue = () => "Contact", de = () => "Contact", fe = () => "Contacto", pe = () => "Kontakt", me = () => "Contatti", he = () => "Contato", ge = () => "联系我们", _e = () => "お問い合わせ", ve = () => "Contact", ye = () => "Контакт", be = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "FAQ", Se = () => "FAQ", Ce = () => "FAQ", we = () => "FAQ", Te = () => "FAQ", Ee = () => "FAQ", De = () => "常见问题", Oe = () => "FAQ", ke = () => "FAQ", Ae = () => "FAQ", je = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Home", Ne = () => "Accueil", Pe = () => "Inicio", Fe = () => "Home", Ie = () => "Home", Le = () => "Início", Re = () => "首页", ze = () => "ホーム", Be = () => "Home", Ve = () => "Главная", He = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "Methodology", We = () => "Méthodologie", Ge = () => "Metodología", Ke = () => "Methodik", qe = () => "Metodologia", Je = () => "Metodologia", Ye = () => "方法论", Xe = () => "手法", Ze = () => "Methodology", Qe = () => "Методология", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "Mock Pages", tt = () => "Pages fictives", nt = () => "Páginas de prueba", rt = () => "Testseiten", it = () => "Pagine di test", at = () => "Páginas de Teste", ot = () => "模拟页面", st = () => "テストページ", ct = () => "Mock Pages", lt = () => "Тестовые страницы", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "Pricing", ft = () => "Tarifs", pt = () => "Precios", mt = () => "Preise", ht = () => "Prezzi", gt = () => "Preços", _t = () => "价格", vt = () => "価格", yt = () => "Pricing", bt = () => "Цены", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "Products", Ct = () => "Produits", wt = () => "Productos", Tt = () => "Produkte", Et = () => "Prodotti", Dt = () => "Produtos", Ot = () => "产品", kt = () => "製品", At = () => "Products", jt = () => "Продукты", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Nt = () => "Settings", Pt = () => "Paramètres", Ft = () => "Ajustes", It = () => "Einstellungen", Lt = () => "Impostazioni", Rt = () => "Configurações", zt = () => "设置", Bt = () => "設定", Vt = () => "Settings", Ht = () => "Настройки", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Wt = () => "Team", Gt = () => "Équipe", Kt = () => "Equipo", qt = () => "Team", Jt = () => "Team", Yt = () => "Equipe", Xt = () => "团队", Zt = () => "チーム", Qt = () => "Team", $t = () => "Команда", en = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), tn = () => "i18n Bench", nn = () => "Bench i18n", rn = () => "i18n Bench", an = () => "i18n Bench", on = () => "i18n Bench", sn = () => "i18n Bench", cn = () => "i18n Bench", ln = () => "i18n Bench", un = () => "i18n Bench", dn = () => "i18n Bench", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : tn(e);
}), pn = () => "Go to GitHub", mn = () => "Aller sur GitHub", hn = () => "Ir a GitHub", gn = () => "Zu GitHub", _n = () => "Vai su GitHub", vn = () => "Ir para o GitHub", yn = () => "前往 GitHub", bn = () => "GitHubへ", xn = () => "Go to GitHub", Sn = () => "Перейти на GitHub", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "Theme: Auto", Tn = () => "Thème : automatique", En = () => "Tema: Auto", Dn = () => "Thema: Auto", On = () => "Tema: Auto", kn = () => "Tema: Automático", An = () => "主题：自动", jn = () => "テーマ：自動", Mn = () => "Theme: Auto", Nn = () => "Тема: Авто", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Fn = () => "Theme: Dark", In = () => "Thème : sombre", Ln = () => "Tema: Oscuro", Rn = () => "Thema: Dunkel", zn = () => "Tema: Scuro", Bn = () => "Tema: Escuro", Vn = () => "主题：深色", Hn = () => "テーマ：ダーク", Un = () => "Theme: Dark", Wn = () => "Тема: Темная", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "Theme mode: auto (system). Click to switch to light mode.", qn = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", Jn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Yn = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", Xn = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Zn = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", Qn = () => "主题模式：自动（系统）。点击切换到浅色模式。", $n = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", er = () => "Theme mode: auto (system). Click to switch to light mode.", tr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", nr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : n === "ru" ? tr(e) : Kn(e);
}), rr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ir = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, ar = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, or = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, sr = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, cr = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, lr = (e) => `主题模式：${e?.mode}。点击切换模式。`, ur = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, dr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, fr = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, pr = ((e, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : n === "ru" ? fr(e) : rr(e);
}), mr = () => "Theme: Light", hr = () => "Thème : clair", gr = () => "Tema: Claro", Z = () => "Thema: Hell", _r = () => "Tema: Chiaro", vr = () => "Tema: Claro", yr = () => "主题：浅色", br = () => "テーマ：ライト", xr = () => "Theme: Light", Sr = () => "Тема: Светлая", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? Z(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : mr(e);
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
function wr(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Tr(e) {
	return Q.includes(e);
}
var Er = /* @__PURE__ */ new Set([
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
function Dr(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Tr(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Er.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var $ = i(typeof window < "u" ? window.location.pathname : "/en"), Or = n($, (e) => Dr(e));
function kr(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), $.set(window.location.pathname));
}
var Ar = e.from_html("<option> </option>"), jr = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function Mr(t, n) {
	e.push(n, !1);
	let i = () => e.store_get($, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		kr(r($).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = jr(), l = e.child(c);
	e.each(l, 5, () => Q, (e) => e, (t, n) => {
		var r = Ar(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => wr(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var Nr = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function Pr(t, n) {
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
	let c = e.derived(() => e.get(o) === "auto" ? nr() : pr({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? Pn() : e.get(o) === "dark" ? Gn() : Cr());
	var u = Nr(), d = e.only_child(u, !0);
	e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(t, u), e.pop();
}
e.delegate(["click"]);
var Fr = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), Ir = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Lr = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Rr(n, r) {
	e.push(r, !0);
	let i = () => e.store_get(Or, "$route", a), [a, o] = e.setup_stores(), s = e.state(!1), c = e.derived(() => i().kind === "ok" ? i().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: Mt()
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: xt()
		},
		{
			to: `/${e.get(c)}/team`,
			label: en()
		},
		{
			to: `/${e.get(c)}/blog`,
			label: G()
		},
		{
			to: `/${e.get(c)}/careers`,
			label: le()
		},
		{
			to: `/${e.get(c)}/faq`,
			label: je()
		},
		{
			to: `/${e.get(c)}/contact`,
			label: be()
		},
		{
			to: `/${e.get(c)}/settings`,
			label: Ut()
		}
	]), u = e.derived(() => i().kind === "ok" && i().page === ""), d = e.derived(() => i().kind === "ok" && i().page === "about");
	var f = Lr(), p = e.child(f), m = e.child(p), h = e.child(m), g = e.only_child(h, !0), _ = e.sibling(h, 2), v = e.child(_);
	let y;
	var b = e.only_child(v, !0), x = e.sibling(v, 2);
	let S;
	var C = e.only_child(x, !0), w = e.sibling(x, 2), T = e.child(w), E = e.child(T), D = e.sibling(E);
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
		var n = Ir(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = Fr(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(s, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(s, !0)), e.event("mouseleave", n, () => e.set(s, !1)), e.append(t, n);
	};
	e.if(O, (t) => {
		e.get(s) && t(k);
	}), e.reset(w), e.reset(_), e.reset(m);
	var A = e.sibling(m, 2), j = e.child(A), M = e.child(j), N = e.only_child(M, !0);
	e.next(2), e.reset(j);
	var P = e.sibling(j, 2);
	Mr(P, {}), Pr(e.sibling(P, 2), {}), e.reset(A), e.reset(p), e.reset(f), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(h, "href", `/${e.get(c)}`), e.set_text(g, t), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_text(b, n), e.set_attribute(x, "href", `/${e.get(c)}/about`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(d) }), e.set_text(C, r), e.set_text(E, `${i ?? ""} `), e.set_text(N, a);
	}, [
		() => fn(),
		() => He(),
		() => $e(),
		() => ut(),
		() => Cn()
	]), e.event("mouseenter", T, () => e.set(s, !0)), e.event("mouseleave", T, () => e.set(s, !1)), e.delegated("click", T, () => e.set(s, !e.get(s))), e.append(n, f), e.pop(), o();
}
e.delegate(["click"]);
export { Rr as default };

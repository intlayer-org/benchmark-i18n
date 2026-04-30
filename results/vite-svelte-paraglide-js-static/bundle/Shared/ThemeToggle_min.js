import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c, l;
function u(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let r = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new n(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function d(e) {
	let t = u(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var f = void 0, p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	!p && typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
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
		r = g();
	} catch {}
	let s = [], c = o;
	!p && typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!p && n.reload && window.location && e !== r && _(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${i}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Theme: Auto", T = () => "Thème : automatique", E = () => "Tema: Auto", D = () => "Thema: Auto", O = () => "Tema: Auto", k = () => "Tema: Automático", A = () => "主题：自动", j = () => "テーマ：自動", M = () => "Theme: Auto", N = () => "Тема: Авто", P = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Theme: Dark", I = () => "Thème : sombre", L = () => "Tema: Oscuro", R = () => "Thema: Dunkel", z = () => "Tema: Scuro", B = () => "Tema: Escuro", V = () => "主题：深色", H = () => "テーマ：ダーク", U = () => "Theme: Dark", W = () => "Тема: Темная", G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Theme: Light", q = () => "Thème : clair", te = () => "Tema: Claro", J = () => "Thema: Hell", Y = () => "Tema: Chiaro", X = () => "Tema: Claro", Z = () => "主题：浅色", Q = () => "テーマ：ライト", ne = () => "Theme: Light", re = () => "Тема: Светлая", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? te(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "Theme mode: auto (system). Click to switch to light mode.", oe = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", se = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", ce = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", le = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", ue = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", de = () => "主题模式：自动（系统）。点击切换到浅色模式。", fe = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", pe = () => "Theme mode: auto (system). Click to switch to light mode.", me = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, _e = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, ve = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, ye = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, be = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, $ = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, xe = (e) => `主题模式：${e?.mode}。点击切换模式。`, Se = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, Ce = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, we = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Te = ((e, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? $(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : we(e);
}), Ee = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function De(n, r) {
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
	let c = e.derived(() => e.get(o) === "auto" ? he() : Te({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? P() : e.get(o) === "dark" ? G() : ie());
	var u = Ee(), d = e.child(u, !0);
	e.reset(u), e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
export { De as default };

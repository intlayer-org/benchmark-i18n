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
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = A(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && ee(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, m = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function g(e) {
	return e;
}
function _(e, t) {
	return e.exec(t.href);
}
var v = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function w() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = h(e), C(), x;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = g(typeof e == "string" ? new URL(e, m()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var D, O;
function k(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let r = g(new URL(t, "http://example.com")), i = T(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (_(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Theme: Auto", P = () => "Thème : automatique", F = () => "Tema: Auto", I = () => "Thema: Auto", L = () => "Tema: Auto", R = () => "Tema: Automático", z = () => "主题：自动", B = () => "テーマ：自動", V = () => "Theme: Auto", H = () => "Тема: Авто", U = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Theme: Dark", G = () => "Thème : sombre", K = () => "Tema: Oscuro", q = () => "Thema: Dunkel", J = () => "Tema: Scuro", Y = () => "Tema: Escuro", X = () => "主题：深色", Z = () => "テーマ：ダーク", Q = () => "Theme: Dark", ne = () => "Тема: Темная", re = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? Q(e) : n === "ru" ? ne(e) : W(e);
}), ie = () => "Theme mode: auto (system). Click to switch to light mode.", ae = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", oe = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", se = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", ce = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", le = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", ue = () => "主题模式：自动（系统）。点击切换到浅色模式。", de = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", fe = () => "Theme mode: auto (system). Click to switch to light mode.", pe = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : ie(e);
}), he = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, ge = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, _e = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, ve = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, ye = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, be = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, xe = (e) => `主题模式：${e?.mode}。点击切换模式。`, Se = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, Ce = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, we = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Te = ((e, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : n === "ru" ? we(e) : he(e);
}), Ee = () => "Theme: Light", De = () => "Thème : clair", $ = () => "Tema: Claro", Oe = () => "Thema: Hell", ke = () => "Tema: Chiaro", Ae = () => "Tema: Claro", je = () => "主题：浅色", Me = () => "テーマ：ライト", Ne = () => "Theme: Light", Pe = () => "Тема: Светлая", Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? De(e) : n === "es" ? $(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : n === "ru" ? Pe(e) : Ee(e);
}), Ie = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function Le(n, r) {
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
	let c = e.derived(() => e.get(o) === "auto" ? me() : Te({ mode: e.get(o) })), l = e.derived(() => e.get(o) === "auto" ? U() : e.get(o) === "dark" ? re() : Fe());
	var u = Ie(), d = e.only_child(u, !0);
	e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
export { Le as default };

import { useEffect as e, useState as t } from "react";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = j(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		!l && n.reload && window.location && e !== r && p(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), r = E(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Theme: Auto", F = () => "Thème : Auto", I = () => "Tema: Auto", L = () => "Thema: Auto", R = () => "Tema: Auto", z = () => "Tema: Auto", B = () => "主题：自动", V = () => "テーマ：自動", H = () => "테마: 자동", U = () => "Тема: Авто", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Theme: Dark", K = () => "Thème : Sombre", q = () => "Tema: Oscuro", J = () => "Thema: Dunkel", Y = () => "Tema: Scuro", X = () => "Tema: Escuro", Z = () => "主题：暗黑", re = () => "テーマ：ダーク", ie = () => "테마: 다크", ae = () => "Тема: Темная", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : G(e);
}), se = () => "Theme: Light", ce = () => "Thème : Clair", le = () => "Tema: Claro", ue = () => "Thema: Hell", de = () => "Tema: Chiaro", fe = () => "Tema: Claro", pe = () => "主题：明亮", me = () => "テーマ：ライト", he = () => "테마: 라이트", ge = () => "Тема: Светлая", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "Theme mode: auto (system). Click to switch to light mode.", ye = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", be = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", xe = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", Se = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Ce = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", we = () => "主题模式：自动（系统）。点击切换到明亮模式。", Te = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", Ee = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", De = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "Theme mode: dark. Click to switch to auto (system) mode.", Ae = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", je = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Me = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Ne = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Pe = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Fe = () => "主题模式：暗黑。点击切换到自动（系统）模式。", Ie = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", Le = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Re = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Theme mode: light. Click to switch to dark mode.", Ve = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", He = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", Q = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", Ue = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", We = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Ge = () => "主题模式：明亮。点击切换到暗黑模式。", Ke = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", qe = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Je = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Q(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : Be(e);
});
function Xe() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ze() {
	let [n, i] = t("auto");
	e(() => {
		let e = Xe();
		i(e), $(e);
	}, []), e(() => {
		if (n !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => $("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	function a() {
		let e = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		i(e), $(e), window.localStorage.setItem("theme", e);
	}
	let o = n === "auto" ? Oe() : n === "light" ? Ye() : ze();
	return r("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: n === "auto" ? W() : n === "dark" ? oe() : _e()
	});
}
m("en", { reload: !1 });
function Qe({ children: e }) {
	return r(n, { children: e });
}
function $e() {
	return r(Qe, { children: r(Ze, {}) });
}
export { $e as default };

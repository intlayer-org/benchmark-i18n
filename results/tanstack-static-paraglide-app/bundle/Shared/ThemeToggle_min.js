import { useEffect as e, useState as t } from "react";
import { Fragment as n, jsxDEV as r } from "react/jsx-dev-runtime";
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
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
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
	!l && typeof window < "u" && window.location?.href && (a = A(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
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
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function w() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), re(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = _(new URL(t, "http://example.com")), r = T(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Theme: Auto", P = () => "Theme: Dark", F = () => "Theme: Light", I = () => "Theme mode: auto (system). Click to switch to light mode.", L = () => "Theme mode: dark. Click to switch to auto (system) mode.", R = () => "Theme mode: light. Click to switch to dark mode.", z = () => "Thème : Auto", B = () => "Thème : Sombre", V = () => "Thème : Clair", H = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", U = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", W = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", G = () => "Tema: Auto", K = () => "Tema: Oscuro", q = () => "Tema: Claro", J = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Y = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", X = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", ie = () => "Thema: Auto", ae = () => "Thema: Dunkel", oe = () => "Thema: Hell", se = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", ce = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", le = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", ue = () => "Tema: Auto", de = () => "Tema: Scuro", fe = () => "Tema: Chiaro", pe = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", me = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", he = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", ge = () => "Tema: Auto", _e = () => "Tema: Escuro", ve = () => "Tema: Claro", ye = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", be = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", xe = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Se = () => "主题：自动", Ce = () => "主题：暗黑", we = () => "主题：明亮", Te = () => "主题模式：自动（系统）。点击切换到明亮模式。", Ee = () => "主题模式：暗黑。点击切换到自动（系统）模式。", De = () => "主题模式：明亮。点击切换到暗黑模式。", Oe = () => "テーマ：自動", ke = () => "テーマ：ダーク", Ae = () => "テーマ：ライト", je = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", Me = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", Ne = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", Pe = () => "테마: 자동", Fe = () => "테마: 다크", Ie = () => "테마: 라이트", Le = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", Re = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", ze = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Be = () => "Тема: Авто", Ve = () => "Тема: Темная", He = () => "Тема: Светлая", Ue = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Z = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", We = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? z(e) : n === "es" ? G(e) : n === "de" ? ie(e) : n === "it" ? ue(e) : n === "pt" ? ge(e) : n === "zh" ? Se(e) : n === "ja" ? Oe(e) : n === "ko" ? Pe(e) : n === "ru" ? Be(e) : N(e);
}), Ke = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? B(e) : n === "es" ? K(e) : n === "de" ? ae(e) : n === "it" ? de(e) : n === "pt" ? _e(e) : n === "zh" ? Ce(e) : n === "ja" ? ke(e) : n === "ko" ? Fe(e) : n === "ru" ? Ve(e) : P(e);
}), qe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? V(e) : n === "es" ? q(e) : n === "de" ? oe(e) : n === "it" ? fe(e) : n === "pt" ? ve(e) : n === "zh" ? we(e) : n === "ja" ? Ae(e) : n === "ko" ? Ie(e) : n === "ru" ? He(e) : F(e);
}), Je = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? H(e) : n === "es" ? J(e) : n === "de" ? se(e) : n === "it" ? pe(e) : n === "pt" ? ye(e) : n === "zh" ? Te(e) : n === "ja" ? je(e) : n === "ko" ? Le(e) : n === "ru" ? Ue(e) : I(e);
}), Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? Y(e) : n === "de" ? ce(e) : n === "it" ? me(e) : n === "pt" ? be(e) : n === "zh" ? Ee(e) : n === "ja" ? Me(e) : n === "ko" ? Re(e) : n === "ru" ? Z(e) : L(e);
}), Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? W(e) : n === "es" ? X(e) : n === "de" ? le(e) : n === "it" ? he(e) : n === "pt" ? xe(e) : n === "zh" ? De(e) : n === "ja" ? Ne(e) : n === "ko" ? ze(e) : n === "ru" ? We(e) : R(e);
}), Ze = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.tsx";
function Qe() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Q(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function $e() {
	let [n, i] = t("auto");
	e(() => {
		let e = Qe();
		i(e), Q(e);
	}, []), e(() => {
		if (n !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => Q("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	function a() {
		let e = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		i(e), Q(e), window.localStorage.setItem("theme", e);
	}
	let o = n === "auto" ? Je() : n === "light" ? Xe() : Ye();
	return r("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: n === "auto" ? Ge() : n === "dark" ? Ke() : qe()
	}, void 0, !1, {
		fileName: Ze,
		lineNumber: 74,
		columnNumber: 5
	}, this);
}
var et = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function tt({ children: e }) {
	return r(n, { children: e }, void 0, !1, {
		fileName: et,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.wrapper.tsx";
function nt() {
	return r(tt, { children: r($e, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { nt as default };

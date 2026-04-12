import { useEffect as e, useState as t } from "react";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var i = {}, a = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l, u;
function te(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of c) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return l = t, u = r, r;
}
function d(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var f = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
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
		r = h();
	} catch {}
	let i = [], a = s;
	typeof window < "u" && window.location?.href && (a = d(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return y(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/theme_toggle_thememodeautosystemclick4.js
var C = () => "Theme mode: auto (system). Click to switch to light mode.", w = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", T = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", E = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", D = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", O = () => "主题模式：自动（系统）。点击切换到明亮模式。", k = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", A = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", j = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", M = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? C(e) : n === "de" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "ja" ? D(e) : n === "zh" ? O(e) : n === "ko" ? k(e) : n === "it" ? A(e) : j(e);
}), N = () => "Theme mode: light. Click to switch to dark mode.", P = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", F = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", I = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", L = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", R = () => "主题模式：明亮。点击切换到暗黑模式。", z = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", B = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", V = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", H = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? N(e) : n === "de" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "ja" ? L(e) : n === "zh" ? R(e) : n === "ko" ? z(e) : n === "it" ? B(e) : V(e);
}), U = () => "Theme mode: dark. Click to switch to auto (system) mode.", W = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", G = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", K = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", q = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", J = () => "主题模式：暗黑。点击切换到自动（系统）模式。", Y = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", X = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Z = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? U(e) : n === "de" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "ja" ? q(e) : n === "zh" ? J(e) : n === "ko" ? Y(e) : n === "it" ? X(e) : Z(e);
}), ie = () => "Theme: Auto", ae = () => "Thema: Auto", oe = () => "Thème : Auto", se = () => "Tema: Auto", ce = () => "テーマ：自動", le = () => "主题：自动", ue = () => "테마: 자동", de = () => "Tema: Auto", fe = () => "Tema: Auto", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ie(e) : n === "de" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "ja" ? ce(e) : n === "zh" ? le(e) : n === "ko" ? ue(e) : n === "it" ? de(e) : fe(e);
}), me = () => "Theme: Dark", he = () => "Thema: Dunkel", ge = () => "Thème : Sombre", _e = () => "Tema: Oscuro", ve = () => "テーマ：ダーク", ye = () => "主题：暗黑", be = () => "테마: 다크", xe = () => "Tema: Scuro", Se = () => "Tema: Escuro", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? me(e) : n === "de" ? he(e) : n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "ja" ? ve(e) : n === "zh" ? ye(e) : n === "ko" ? be(e) : n === "it" ? xe(e) : Se(e);
}), we = () => "Theme: Light", Te = () => "Thema: Hell", Ee = () => "Thème : Clair", De = () => "Tema: Claro", Oe = () => "テーマ：ライト", Q = () => "主题：明亮", ke = () => "테마: 라이트", Ae = () => "Tema: Chiaro", je = () => "Tema: Claro", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? we(e) : n === "de" ? Te(e) : n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "ja" ? Oe(e) : n === "zh" ? Q(e) : n === "ko" ? ke(e) : n === "it" ? Ae(e) : je(e);
});
//#endregion
//#region src/components/ThemeToggle.tsx
function Ne() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Pe() {
	let [n, i] = t("auto");
	e(() => {
		let e = Ne();
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
	let o = n === "auto" ? M() : n === "light" ? H() : re();
	return /* @__PURE__ */ r("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: n === "auto" ? pe() : n === "dark" ? Ce() : Me()
	});
}
//#endregion
//#region scripts/Wrapper.tsx
v("en", { reload: !1 });
function Fe({ children: e }) {
	return /* @__PURE__ */ r(n, { children: e });
}
//#endregion
//#region src/components/ThemeToggle.wrapper.tsx
function Ie() {
	return /* @__PURE__ */ r(Fe, { children: /* @__PURE__ */ r(Pe, {}) });
}
//#endregion
export { Ie as default };

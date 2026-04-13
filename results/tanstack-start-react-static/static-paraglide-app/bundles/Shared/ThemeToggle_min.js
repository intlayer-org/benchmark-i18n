import { useEffect as e, useState as t } from "react";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
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
var C = () => "Theme mode: auto (system). Click to switch to light mode.", w = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", T = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", E = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", D = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", O = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", k = () => "主题模式：自动（系统）。点击切换到明亮模式。", A = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", j = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", M = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", N = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Theme mode: light. Click to switch to dark mode.", F = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", I = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", L = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", R = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", z = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", B = () => "主题模式：明亮。点击切换到暗黑模式。", V = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", H = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", U = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Theme mode: dark. Click to switch to auto (system) mode.", K = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", q = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", J = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Y = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", X = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Z = () => "主题模式：暗黑。点击切换到自动（系统）模式。", re = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", ie = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", ae = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Theme: Auto", ce = () => "Thème : Auto", le = () => "Tema: Auto", ue = () => "Thema: Auto", de = () => "Tema: Auto", fe = () => "Tema: Auto", pe = () => "主题：自动", me = () => "テーマ：自動", he = () => "테마: 자동", ge = () => "Тема: Авто", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Theme: Dark", ye = () => "Thème : Sombre", be = () => "Tema: Oscuro", xe = () => "Thema: Dunkel", Se = () => "Tema: Scuro", Ce = () => "Tema: Escuro", we = () => "主题：暗黑", Te = () => "テーマ：ダーク", Ee = () => "테마: 다크", De = () => "Тема: Темная", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Theme: Light", Ae = () => "Thème : Clair", je = () => "Tema: Claro", Me = () => "Thema: Hell", Ne = () => "Tema: Chiaro", Pe = () => "Tema: Claro", Fe = () => "主题：明亮", Q = () => "テーマ：ライト", Ie = () => "테마: 라이트", Le = () => "Тема: Светлая", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Q(e) : n === "ko" ? Ie(e) : Le(e);
});
//#endregion
//#region src/components/ThemeToggle.tsx
function ze() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Be() {
	let [n, i] = t("auto");
	e(() => {
		let e = ze();
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
	let o = n === "auto" ? N() : n === "light" ? W() : oe();
	return /* @__PURE__ */ r("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: n === "auto" ? _e() : n === "dark" ? Oe() : Re()
	});
}
//#endregion
//#region scripts/Wrapper.tsx
v("en", { reload: !1 });
function Ve({ children: e }) {
	return /* @__PURE__ */ r(n, { children: e });
}
//#endregion
//#region src/components/ThemeToggle.wrapper.tsx
function He() {
	return /* @__PURE__ */ r(Ve, { children: /* @__PURE__ */ r(Be, {}) });
}
//#endregion
export { He as default };

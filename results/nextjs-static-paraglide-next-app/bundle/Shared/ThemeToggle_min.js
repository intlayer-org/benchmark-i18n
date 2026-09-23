import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i } from "react/jsx-runtime";
import { useParams as a } from "next/navigation";
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var A, j;
function M(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = y(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return A = t, j = a, a;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Theme: Auto", L = () => "Thème : Auto", R = () => "Tema: Auto", z = () => "Thema: Auto", B = () => "Tema: Auto", V = () => "Tema: Auto", H = () => "主题：自动", U = () => "テーマ：自動", W = () => "테마: 자동", G = () => "Тема: Авто", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Theme: Dark", J = () => "Thème : Sombre", Y = () => "Tema: Oscuro", X = () => "Thema: Dunkel", Z = () => "Tema: Scuro", re = () => "Tema: Escuro", ie = () => "主题：暗黑", ae = () => "テーマ：ダーク", oe = () => "테마: 다크", se = () => "Тема: Темная", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : q(e);
}), le = () => "Theme: Light", ue = () => "Thème : Clair", de = () => "Tema: Claro", fe = () => "Thema: Hell", pe = () => "Tema: Chiaro", me = () => "Tema: Claro", he = () => "主题：明亮", ge = () => "テーマ：ライト", _e = () => "테마: 라이트", ve = () => "Тема: Светлая", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Theme mode: auto (system). Click to switch to light mode.", xe = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", Se = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Ce = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", we = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Te = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", Ee = () => "主题模式：自动（系统）。点击切换到明亮模式。", De = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", Oe = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", ke = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Theme mode: dark. Click to switch to auto (system) mode.", Me = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Ne = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Pe = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Fe = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Ie = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Le = () => "主题模式：暗黑。点击切换到自动（系统）模式。", Re = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", ze = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Be = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Theme mode: light. Click to switch to dark mode.", Ue = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", We = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", Ge = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", Ke = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", qe = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Je = () => "主题模式：明亮。点击切换到暗黑模式。", Ye = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", Q = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Xe = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Q(e) : n === "ru" ? Xe(e) : He(e);
});
function Qe() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function $e() {
	let [t, r] = n("auto");
	e(() => {
		let e = Qe();
		r(e), $(e);
	}, []), e(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function a() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		r(e), $(e), window.localStorage.setItem("theme", e);
	}
	let o = t === "auto" ? Ae() : t === "light" ? Ze() : Ve();
	return i("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? K() : t === "dark" ? ce() : ye()
	});
}
function et() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function tt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function nt({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		tt("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		et();
	}, []), i(r, { children: o });
}
function rt({ children: e }) {
	return i(nt, { children: e });
}
function it() {
	return i(rt, { children: i($e, {}) });
}
export { it as default };

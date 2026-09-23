import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
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
	!d && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
	!d && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
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
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function E() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var k, A;
function j(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = y(new URL(t, "http://example.com")), r = D(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return k = t, A = a, a;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Theme: Auto", I = () => "Thème : Auto", L = () => "Tema: Auto", R = () => "Thema: Auto", z = () => "Tema: Auto", B = () => "Tema: Auto", V = () => "主题：自动", H = () => "テーマ：自動", U = () => "테마: 자동", W = () => "Тема: Авто", G = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Theme: Dark", q = () => "Thème : Sombre", J = () => "Tema: Oscuro", Y = () => "Thema: Dunkel", X = () => "Tema: Scuro", ie = () => "Tema: Escuro", ae = () => "主题：暗黑", oe = () => "テーマ：ダーク", se = () => "테마: 다크", ce = () => "Тема: Темная", le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : K(e);
}), ue = () => "Theme: Light", de = () => "Thème : Clair", fe = () => "Tema: Claro", pe = () => "Thema: Hell", me = () => "Tema: Chiaro", he = () => "Tema: Claro", ge = () => "主题：明亮", _e = () => "テーマ：ライト", ve = () => "테마: 라이트", ye = () => "Тема: Светлая", be = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "Theme mode: auto (system). Click to switch to light mode.", Se = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", Ce = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", we = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", Te = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Ee = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", De = () => "主题模式：自动（系统）。点击切换到明亮模式。", Oe = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", ke = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", Ae = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Theme mode: dark. Click to switch to auto (system) mode.", Ne = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Pe = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Fe = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Ie = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Le = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Re = () => "主题模式：暗黑。点击切换到自动（系统）模式。", ze = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", Be = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Ve = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", He = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "Theme mode: light. Click to switch to dark mode.", We = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", Ge = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", Ke = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", qe = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", Je = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Ye = () => "主题模式：明亮。点击切换到暗黑模式。", Xe = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", Z = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Ze = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Z(e) : n === "ru" ? Ze(e) : Ue(e);
}), $e = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/ThemeToggle.tsx";
function et() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Q(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function tt() {
	let [t, r] = n("auto");
	e(() => {
		let e = et();
		r(e), Q(e);
	}, []), e(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Q("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function a() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		r(e), Q(e), window.localStorage.setItem("theme", e);
	}
	let o = t === "auto" ? je() : t === "light" ? Qe() : He();
	return i("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? G() : t === "dark" ? le() : be()
	}, void 0, !1, {
		fileName: $e,
		lineNumber: 76,
		columnNumber: 5
	}, this);
}
function nt() {
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
function rt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var it = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function at({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		rt("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		nt();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: it,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var ot = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function st({ children: e }) {
	return i(at, { children: e }, void 0, !1, {
		fileName: ot,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/ThemeToggle.wrapper.tsx";
function ct() {
	return i(st, { children: i(tt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ct as default };

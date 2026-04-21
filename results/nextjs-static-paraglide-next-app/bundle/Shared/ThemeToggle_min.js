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
], u = [], d, f;
function te(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function p(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = l;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!h && n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return S(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Theme mode: auto (system). Click to switch to light mode.", D = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", O = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", k = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", A = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", j = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", M = () => "主题模式：自动（系统）。点击切换到明亮模式。", N = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", P = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", F = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", I = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Theme mode: light. Click to switch to dark mode.", R = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", z = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", B = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", V = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", H = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", U = () => "主题模式：明亮。点击切换到暗黑模式。", W = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", G = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", K = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Theme mode: dark. Click to switch to auto (system) mode.", Y = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", X = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Z = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", re = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", ie = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", ae = () => "主题模式：暗黑。点击切换到自动（系统）模式。", oe = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", se = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", ce = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", le = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "Theme: Auto", de = () => "Thème : Auto", fe = () => "Tema: Auto", pe = () => "Thema: Auto", me = () => "Tema: Auto", he = () => "Tema: Auto", ge = () => "主题：自动", _e = () => "テーマ：自動", ve = () => "테마: 자동", ye = () => "Тема: Авто", be = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Theme: Dark", Se = () => "Thème : Sombre", Ce = () => "Tema: Oscuro", we = () => "Thema: Dunkel", Te = () => "Tema: Scuro", Ee = () => "Tema: Escuro", De = () => "主题：暗黑", Oe = () => "テーマ：ダーク", ke = () => "테마: 다크", Ae = () => "Тема: Темная", je = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "Theme: Light", Ne = () => "Thème : Clair", Pe = () => "Tema: Claro", Fe = () => "Thema: Hell", Q = () => "Tema: Chiaro", Ie = () => "Tema: Claro", Le = () => "主题：明亮", Re = () => "テーマ：ライト", ze = () => "테마: 라이트", Be = () => "Тема: Светлая", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Q(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
});
function He() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ue() {
	let [t, r] = n("auto");
	e(() => {
		let e = He();
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
	let o = t === "auto" ? I() : t === "light" ? q() : le();
	return i("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? be() : t === "dark" ? je() : Ve()
	});
}
function We() {
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
function Ge(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ke({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ge("AppRoot", c);
	}, [c]), e(() => {
		x(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		We();
	}, []), i(r, { children: o });
}
function qe({ children: e }) {
	return i(Ke, { children: e });
}
function Je() {
	return i(qe, { children: i(Ue, {}) });
}
export { Je as default };

import { Profiler as e, useEffect as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Theme mode: auto (system). Click to switch to light mode.", E = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", D = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", O = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", k = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", A = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", j = () => "主题模式：自动（系统）。点击切换到明亮模式。", M = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", N = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", P = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", F = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Theme mode: light. Click to switch to dark mode.", L = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", R = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", z = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", B = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", V = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", H = () => "主题模式：明亮。点击切换到暗黑模式。", U = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", W = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", G = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Theme mode: dark. Click to switch to auto (system) mode.", J = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Y = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", X = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Z = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", re = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", ie = () => "主题模式：暗黑。点击切换到自动（系统）模式。", ae = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", oe = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", se = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "Theme: Auto", ue = () => "Thème : Auto", de = () => "Tema: Auto", fe = () => "Thema: Auto", pe = () => "Tema: Auto", me = () => "Tema: Auto", he = () => "主题：自动", ge = () => "テーマ：自動", _e = () => "테마: 자동", ve = () => "Тема: Авто", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Theme: Dark", xe = () => "Thème : Sombre", Se = () => "Tema: Oscuro", Ce = () => "Thema: Dunkel", we = () => "Tema: Scuro", Te = () => "Tema: Escuro", Ee = () => "主题：暗黑", De = () => "テーマ：ダーク", Oe = () => "테마: 다크", ke = () => "Тема: Темная", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Theme: Light", Me = () => "Thème : Clair", Ne = () => "Tema: Claro", Pe = () => "Thema: Hell", Fe = () => "Tema: Chiaro", Q = () => "Tema: Claro", Ie = () => "主题：明亮", Le = () => "テーマ：ライト", Re = () => "테마: 라이트", ze = () => "Тема: Светлая", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Q(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
});
function Ve() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function He() {
	let [e, i] = n("auto");
	t(() => {
		let e = Ve();
		i(e), $(e);
	}, []), t(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function a() {
		let t = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		i(t), $(t), window.localStorage.setItem("theme", t);
	}
	let o = e === "auto" ? F() : e === "light" ? K() : ce();
	return r("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? ye() : e === "dark" ? Ae() : Be()
	});
}
function Ue() {
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
function We(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Ge({ children: n }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Ue();
	}, []), r(e, {
		id: "AppRoot",
		onRender: We,
		children: n
	});
}
function Ke({ children: e }) {
	return r(Ge, { children: e });
}
function qe() {
	return r(Ke, { children: r(He, {}) });
}
export { qe as default };

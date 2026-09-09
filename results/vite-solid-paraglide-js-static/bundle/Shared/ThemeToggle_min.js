import { delegateEvents as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createEffect as a, createSignal as o, onMount as s } from "solid-js";
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", d = 3456e4, f = [
	"cookie",
	"globalVariable",
	"baseLocale"
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = f;
	!m && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, b = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function C(e) {
	return e;
}
function w(e, t) {
	return e.exec(t.href);
}
var te = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ne = RegExp(`(?:^|;\\s*)${te}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function k() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(ne)?.[1];
	return E = x(e), O(), E;
}
function A(e) {
	return j(e);
}
function j(e) {
	let t = C(typeof e == "string" ? new URL(e, b()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && x(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), C(t);
}
var M, N;
function P(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (M === t) return N;
	let n = C(new URL(t, "http://example.com")), r = A(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (w(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return M = t, N = a, a;
}
function F(e) {
	let t = P(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var R = () => "Theme: Auto", z = () => "Thème : automatique", B = () => "Tema: Auto", V = () => "Thema: Auto", H = () => "Tema: Auto", U = () => "Tema: Automático", W = () => "主题：自动", G = () => "テーマ：自動", K = () => "Theme: Auto", q = () => "Тема: Авто", J = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : n === "ru" ? q(e) : R(e);
}), Y = () => "Theme: Dark", X = () => "Thème : sombre", Z = () => "Tema: Oscuro", re = () => "Thema: Dunkel", ie = () => "Tema: Scuro", ae = () => "Tema: Escuro", oe = () => "主题：深色", se = () => "テーマ：ダーク", ce = () => "Theme: Dark", le = () => "Тема: Темная", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : Y(e);
}), de = () => "Theme mode: auto (system). Click to switch to light mode.", fe = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", pe = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", me = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", he = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", ge = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", _e = () => "主题模式：自动（系统）。点击切换到浅色模式。", ve = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", ye = () => "Theme mode: auto (system). Click to switch to light mode.", be = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), Se = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, Ce = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, we = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, Te = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, Ee = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, De = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, Oe = (e) => `主题模式：${e?.mode}。点击切换模式。`, ke = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, Ae = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, je = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Me = ((e, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : n === "ru" ? je(e) : Se(e);
}), Ne = () => "Theme: Light", Pe = () => "Thème : clair", Fe = () => "Tema: Claro", Q = () => "Thema: Hell", Ie = () => "Tema: Chiaro", Le = () => "Tema: Claro", Re = () => "主题：浅色", ze = () => "テーマ：ライト", Be = () => "Theme: Light", Ve = () => "Тема: Светлая", He = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Q(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Ne(e);
}), Ue = i("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function We() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ge() {
	let [e, i] = o("auto");
	s(() => {
		let e = We();
		i(e), $(e);
	}), a(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function c() {
		let t = e(), n = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		i(n), $(n), window.localStorage.setItem("theme", n);
	}
	let l = () => e() === "auto" ? xe() : Me({ mode: e() }), u = () => e() === "auto" ? J() : e() === "dark" ? ue() : He();
	return (() => {
		var e = Ue();
		return e.$$click = c, n(e, u), t((t) => {
			var n = l(), i = l();
			return n !== t.e && r(e, "aria-label", t.e = n), i !== t.t && r(e, "title", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
e(["click"]);
export { Ge as default };

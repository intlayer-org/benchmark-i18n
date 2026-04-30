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
], p = [], m, h;
function g(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (m === t) return h;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of p) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return m = t, h = r, r;
}
function _(e) {
	let t = g(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var v = void 0, y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = f;
	!y && typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, ne(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ne = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Theme: Auto", k = () => "Thème : automatique", A = () => "Tema: Auto", j = () => "Thema: Auto", M = () => "Tema: Auto", N = () => "Tema: Automático", P = () => "主题：自动", F = () => "テーマ：自動", I = () => "Theme: Auto", L = () => "Тема: Авто", R = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "Theme: Dark", B = () => "Thème : sombre", V = () => "Tema: Oscuro", H = () => "Thema: Dunkel", U = () => "Tema: Scuro", W = () => "Tema: Escuro", G = () => "主题：深色", K = () => "テーマ：ダーク", q = () => "Theme: Dark", J = () => "Тема: Темная", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "Theme: Light", Z = () => "Thème : clair", re = () => "Tema: Claro", ie = () => "Thema: Hell", ae = () => "Tema: Chiaro", oe = () => "Tema: Claro", se = () => "主题：浅色", ce = () => "テーマ：ライト", le = () => "Theme: Light", ue = () => "Тема: Светлая", de = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? re(e) : n === "de" ? ie(e) : n === "it" ? ae(e) : n === "pt" ? oe(e) : n === "zh" ? se(e) : n === "ja" ? ce(e) : n === "ko" ? le(e) : ue(e);
}), fe = () => "Theme mode: auto (system). Click to switch to light mode.", pe = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", me = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", he = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", ge = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", _e = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", ve = () => "主题模式：自动（系统）。点击切换到浅色模式。", ye = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", be = () => "Theme mode: auto (system). Click to switch to light mode.", xe = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", Se = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? fe(e) : n === "fr" ? pe(e) : n === "es" ? me(e) : n === "de" ? he(e) : n === "it" ? ge(e) : n === "pt" ? _e(e) : n === "zh" ? ve(e) : n === "ja" ? ye(e) : n === "ko" ? be(e) : xe(e);
}), Ce = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, we = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, Te = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, Ee = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, De = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, Oe = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, Q = (e) => `主题模式：${e?.mode}。点击切换模式。`, ke = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, Ae = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, je = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Me = ((e, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Ce(e) : n === "fr" ? we(e) : n === "es" ? Te(e) : n === "de" ? Ee(e) : n === "it" ? De(e) : n === "pt" ? Oe(e) : n === "zh" ? Q(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = i("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Pe() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Fe() {
	let [e, i] = o("auto");
	s(() => {
		let e = Pe();
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
	let l = () => e() === "auto" ? Se() : Me({ mode: e() }), u = () => e() === "auto" ? R() : e() === "dark" ? Y() : de();
	return (() => {
		var e = Ne();
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
export { Fe as default };

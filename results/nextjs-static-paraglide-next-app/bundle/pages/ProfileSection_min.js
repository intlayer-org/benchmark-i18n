import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { useParams as s } from "next/navigation";
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
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, w(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return E(t);
			}
		}
		let e = T(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, w = (e, t) => {
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
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function D() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return T(e);
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "Profile", j = () => "Profil", M = () => "Perfil", N = () => "Profil", P = () => "Profilo", F = () => "Perfil", I = () => "个人资料", L = () => "プロファイル", R = () => "프로필", z = () => "Профиль", B = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? A(e) : n === "fr" ? j(e) : n === "es" ? M(e) : n === "de" ? N(e) : n === "it" ? P(e) : n === "pt" ? F(e) : n === "zh" ? I(e) : n === "ja" ? L(e) : n === "ko" ? R(e) : z(e);
}), V = () => "Display Name", H = () => "Nom d'affichage", U = () => "Nombre visible", te = () => "Anzeigename", W = () => "Nome visualizzato", G = () => "Nome de exibição", K = () => "显示名称", q = () => "表示名", J = () => "표시 이름", Y = () => "Отображаемое имя", X = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? V(e) : n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? te(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
}), Z = () => "Email", Q = () => "Email", ne = () => "Correo electrónico", re = () => "E-Mail", ie = () => "Email", ae = () => "E-mail", oe = () => "邮件地址", $ = () => "メールアドレス", se = () => "이메일 주소", ce = () => "Эл. почта", le = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? Z(e) : n === "fr" ? Q(e) : n === "es" ? ne(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? $(e) : n === "ko" ? se(e) : ce(e);
});
function ue() {
	let e = t(), n = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: B()
		}), o("div", {
			className: "space-y-4",
			children: [o("div", { children: [a("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: X()
			}), a("input", {
				id: e,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), o("div", { children: [a("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: le()
			}), a("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
function de() {
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
function fe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function pe({ children: t }) {
	let o = s().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		fe("AppRoot", c);
	}, [c]), e(() => {
		w(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		de();
	}, []), a(i, { children: t });
}
function me({ children: e }) {
	return a(pe, { children: e });
}
function he() {
	return a(me, { children: a(ue, {}) });
}
export { he as default };

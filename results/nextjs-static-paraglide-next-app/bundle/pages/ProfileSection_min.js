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
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
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
	let i = [], a = f;
	!m && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, k();
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
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
}, x = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function w(e) {
	return e;
}
function T(e, t) {
	return e.exec(t.href);
}
var E = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ee = RegExp(`(?:^|;\\s*)${E}=([^;]*)`), D = Symbol(), O = D;
function k() {
	O = D;
}
function A() {
	typeof queueMicrotask == "function" ? queueMicrotask(k) : Promise.resolve().then(k);
}
function j() {
	if (typeof document > "u") return;
	if (O !== D) return O;
	let e = document.cookie.match(ee)?.[1];
	return O = S(e), A(), O;
}
function M(e) {
	return N(e);
}
function N(e) {
	let t = w(typeof e == "string" ? new URL(e, x()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && S(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), w(t);
}
var P, F;
function I(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (P === t) return F;
	let n = w(new URL(t, "http://example.com")), r = M(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (T(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return P = t, F = a, a;
}
function L(e) {
	let t = I(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = () => "Display Name", V = () => "Nom d'affichage", H = () => "Nombre visible", U = () => "Anzeigename", W = () => "Nome visualizzato", G = () => "Nome de exibição", K = () => "显示名称", q = () => "表示名", J = () => "표시 이름", Y = () => "Отображаемое имя", X = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : n === "ru" ? Y(e) : B(e);
}), te = () => "Email", Z = () => "Email", Q = () => "Correo electrónico", ne = () => "E-Mail", re = () => "Email", ie = () => "E-mail", ae = () => "邮件地址", oe = () => "メールアドレス", se = () => "이메일 주소", ce = () => "Эл. почта", le = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : te(e);
}), ue = () => "Profile", de = () => "Profil", fe = () => "Perfil", pe = () => "Profil", me = () => "Profilo", he = () => "Perfil", ge = () => "个人资料", _e = () => "プロファイル", ve = () => "프로필", ye = () => "Профиль", be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
});
function $() {
	let e = t(), n = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: be()
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
function xe() {
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
function Se(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ce({ children: t }) {
	let o = s().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Se("AppRoot", c);
	}, [c]), e(() => {
		b(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		xe();
	}, []), a(i, { children: t });
}
function we({ children: e }) {
	return a(Ce, { children: e });
}
function Te() {
	return a(we, { children: a($, {}) });
}
export { Te as default };

import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i } from "next/navigation";
import { Fragment as a, jsx as o } from "react/jsx-runtime";
var s = (e) => /^https?:\/\//.test(e ?? "");
function c(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var l = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" || s(e) ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : o(r, {
		href: c(e, a),
		prefetch: !1,
		...n,
		children: t
	});
};
function u() {
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
function d(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var f = {}, p = [
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
], m = "PARAGLIDE_LOCALE", h = 3456e4, g = [
	"cookie",
	"globalVariable",
	"baseLocale"
], _ = [], v = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	let e = g;
	!v && typeof window < "u" && window.location?.href && (e = H(window.location.href));
	let t = S(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, w(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = I();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (W(t) && U.has(t)) {
			let e = U.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return D(t);
			}
		}
		let e = E(n);
		if (e) return e;
	}
}
var C = (e) => {
	e ? window.location.href = e : window.location.reload();
}, w = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = g;
	!v && typeof window < "u" && window.location?.href && (a = H(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (v || typeof document > "u" || typeof window > "u") continue;
		let t = `${m}=${e}; path=/; max-age=${h}`;
		document.cookie = t, P();
	} else if (t === "baseLocale") continue;
	else if (W(t) && U.has(t)) {
		let n = U.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && C(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, T = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function E(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of p) if (e.toLowerCase() === t) return e;
}
function D(e) {
	let t = E(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${p.join(", ")}`);
}
function O(e) {
	return e;
}
function k(e, t) {
	return e.exec(t.href);
}
var A = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), j = RegExp(`(?:^|;\\s*)${A}=([^;]*)`), M = Symbol(), N = M;
function P() {
	N = M;
}
function F() {
	typeof queueMicrotask == "function" ? queueMicrotask(P) : Promise.resolve().then(P);
}
function I() {
	if (typeof document > "u") return;
	if (N !== M) return N;
	let e = document.cookie.match(j)?.[1];
	return N = E(e), F(), N;
}
function L(e) {
	return R(e);
}
function R(e) {
	let t = O(typeof e == "string" ? new URL(e, T()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && E(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), O(t);
}
var z, B;
function V(e) {
	if (_.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (z === t) return B;
	let n = O(new URL(t, "http://example.com")), r = L(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of _) if (k(new f(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return z = t, B = a, a;
}
function H(e) {
	let t = V(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : g;
}
var U = /* @__PURE__ */ new Map();
function W(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
function G({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		d("AppRoot", c);
	}, [c]), e(() => {
		w(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		u();
	}, []), o(a, { children: r });
}
function K({ children: e }) {
	return o(G, { children: e });
}
function q() {
	return o(K, { children: o(l, {}) });
}
export { q as default };

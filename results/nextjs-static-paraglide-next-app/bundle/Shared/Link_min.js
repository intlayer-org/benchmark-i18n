import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i } from "next/navigation";
import { Fragment as a, jsxDEV as o } from "react/jsx-dev-runtime";
var s = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Link.tsx", c = (e) => /^https?:\/\//.test(e ?? "");
function l(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var u = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : c(e) ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : o(r, {
		href: l(e, a),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
};
function d() {
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
function f(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var p = {}, m = [
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
], h = "PARAGLIDE_LOCALE", g = 3456e4, _ = [
	"cookie",
	"globalVariable",
	"baseLocale"
], v = [], y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	let e = _;
	!y && typeof window < "u" && window.location?.href && (e = U(window.location.href));
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = L();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (G(t) && W.has(t)) {
			let e = W.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return O(t);
			}
		}
		let e = D(n);
		if (e) return e;
	}
}
var w = (e) => {
	e ? window.location.href = e : window.location.reload();
}, T = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = _;
	!y && typeof window < "u" && window.location?.href && (a = U(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${h}=${e}; path=/; max-age=${g}`;
		document.cookie = t, F();
	} else if (t === "baseLocale") continue;
	else if (G(t) && W.has(t)) {
		let n = W.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && w(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, E = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function D(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of m) if (e.toLowerCase() === t) return e;
}
function O(e) {
	let t = D(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${m.join(", ")}`);
}
function k(e) {
	return e;
}
function A(e, t) {
	return e.exec(t.href);
}
var j = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), M = RegExp(`(?:^|;\\s*)${j}=([^;]*)`), N = Symbol(), P = N;
function F() {
	P = N;
}
function I() {
	typeof queueMicrotask == "function" ? queueMicrotask(F) : Promise.resolve().then(F);
}
function L() {
	if (typeof document > "u") return;
	if (P !== N) return P;
	let e = document.cookie.match(M)?.[1];
	return P = D(e), I(), P;
}
function R(e) {
	return z(e);
}
function z(e) {
	let t = k(typeof e == "string" ? new URL(e, E()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && D(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), k(t);
}
var B, V;
function H(e) {
	if (v.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (B === t) return V;
	let n = k(new URL(t, "http://example.com")), r = R(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of v) if (A(new p(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return B = t, V = a, a;
}
function U(e) {
	let t = H(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : _;
}
var W = /* @__PURE__ */ new Map();
function G(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var K = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function q({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		f("AppRoot", c);
	}, [c]), e(() => {
		T(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		d();
	}, []), o(a, { children: r }, void 0, !1, {
		fileName: K,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var J = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Y({ children: e }) {
	return o(q, { children: e }, void 0, !1, {
		fileName: J,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var X = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Link.wrapper.tsx";
function Z() {
	return o(Y, { children: o(u, {}, void 0, !1, {
		fileName: X,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: X,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Z as default };

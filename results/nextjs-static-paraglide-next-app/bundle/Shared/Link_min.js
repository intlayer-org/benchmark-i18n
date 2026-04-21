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
], _ = [], v, y;
function b(e) {
	if (_.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (v === t) return y;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of _) if (new f(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return v = t, y = r, r;
}
function x(e) {
	let t = b(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : g;
}
var S = void 0, C = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var w, T = !1, E = () => {
	if (S) {
		let e = S?.getStore()?.locale;
		if (e) return e;
	}
	let e = g;
	!C && typeof window < "u" && window.location?.href && (e = x(window.location.href));
	let t = D(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return T || (w = t, T = !0, k(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function D(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = M();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && w !== void 0) n = w;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return j(t);
			}
		}
		let e = A(n);
		if (e) return e;
	}
}
var O = (e) => {
	e ? window.location.href = e : window.location.reload();
}, k = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = E();
	} catch {}
	let i = [], a = g;
	!C && typeof window < "u" && window.location?.href && (a = x(window.location.href));
	for (let t of a) if (t === "globalVariable") w = e;
	else if (t === "cookie") {
		if (C || typeof document > "u" || typeof window > "u") continue;
		let t = `${m}=${e}; path=/; max-age=${h}`;
		document.cookie = t;
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
		!C && n.reload && window.location && e !== r && O(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function A(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of p) if (e.toLowerCase() === t) return e;
}
function j(e) {
	let t = A(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${p.join(", ")}`);
}
function M() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${m}=([^;]+)`))?.[2];
	return A(e);
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
function F({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		d("AppRoot", c);
	}, [c]), e(() => {
		k(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		u();
	}, []), o(a, { children: r });
}
function I({ children: e }) {
	return o(F, { children: e });
}
function L() {
	return o(I, { children: o(l, {}) });
}
export { L as default };

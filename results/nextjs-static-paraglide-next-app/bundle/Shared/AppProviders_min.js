import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { useParams as r } from "next/navigation";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
function o() {
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
function s(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
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
	if (t) return x || (b = t, x = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
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
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
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
};
function E(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function D(e) {
	let t = E(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function O() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return E(e);
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
function j({ children: c }) {
	let l = r().locale ?? "en", [u] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		s("AppRoot", u);
	}, [u]), e(() => {
		T(l, { reload: !1 }), document.documentElement.lang = l;
	}, [l]), e(() => {
		o();
	}, []), a(i, { children: c });
}
function M({ children: e }) {
	return a(j, { children: e });
}
function N() {
	return a(M, { children: a(j, {}) });
}
export { N as default };

import { Profiler as e, useEffect as t } from "react";
import { useParams as n } from "next/navigation";
import r from "next/link";
import { jsx as i } from "react/jsx-runtime";
var a = (e) => /^https?:\/\//.test(e ?? ""), o = ({ href: e, children: t, ...o }) => {
	let s = n().locale ?? "en", c = a(e.toString());
	return i(r, {
		href: e && !c && !e.toString().startsWith(`/${s}`) ? `/${s}${e}` : e,
		...o,
		children: t
	});
};
function s() {
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
function c(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
var l = {}, u = [
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
], d = "PARAGLIDE_LOCALE", f = 3456e4, p = [
	"cookie",
	"globalVariable",
	"baseLocale"
], m = [], h, g;
function _(e) {
	if (m.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (h === t) return g;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of m) if (new l(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return h = t, g = r, r;
}
function v(e) {
	let t = _(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : p;
}
var y = void 0, b = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var x, S = !1, C = () => {
	if (y) {
		let e = y?.getStore()?.locale;
		if (e) return e;
	}
	let e = p;
	!b && typeof window < "u" && window.location?.href && (e = v(window.location.href));
	let t = w(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return S || (x = t, S = !0, E(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function w(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && x !== void 0) n = x;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
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
var T = (e) => {
	e ? window.location.href = e : window.location.reload();
}, E = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = C();
	} catch {}
	let i = [], a = p;
	!b && typeof window < "u" && window.location?.href && (a = v(window.location.href));
	for (let t of a) if (t === "globalVariable") x = e;
	else if (t === "cookie") {
		if (b || typeof document > "u" || typeof window > "u") continue;
		let t = `${d}=${e}; path=/; max-age=${f}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!b && n.reload && window.location && e !== r && T(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function D(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of u) if (e.toLowerCase() === t) return e;
}
function O(e) {
	let t = D(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${u.join(", ")}`);
}
function k() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${d}=([^;]+)`))?.[2];
	return D(e);
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
function M({ children: r }) {
	let a = n().locale ?? "en";
	return t(() => {
		E(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		s();
	}, []), i(e, {
		id: "AppRoot",
		onRender: c,
		children: r
	});
}
function N({ children: e }) {
	return i(M, { children: e });
}
function P() {
	return i(N, { children: i(o, {}) });
}
export { P as default };

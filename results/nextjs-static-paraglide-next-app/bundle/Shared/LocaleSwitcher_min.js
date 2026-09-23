import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { useParams as r, usePathname as i, useRouter as a } from "next/navigation";
import { Fragment as o, jsxDEV as s } from "react/jsx-dev-runtime";
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
	!m && typeof window < "u" && window.location?.href && (e = R(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = M();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (B(t) && z.has(t)) {
			let e = z.get(t);
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
	!m && typeof window < "u" && window.location?.href && (a = R(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, A();
	} else if (t === "baseLocale") continue;
	else if (B(t) && z.has(t)) {
		let n = z.get(t);
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
var E = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), D = RegExp(`(?:^|;\\s*)${E}=([^;]*)`), O = Symbol(), k = O;
function A() {
	k = O;
}
function j() {
	typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A);
}
function M() {
	if (typeof document > "u") return;
	if (k !== O) return k;
	let e = document.cookie.match(D)?.[1];
	return k = S(e), j(), k;
}
function N(e) {
	return P(e);
}
function P(e) {
	let t = w(typeof e == "string" ? new URL(e, x()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && S(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), w(t);
}
var F, I;
function L(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (F === t) return I;
	let n = w(new URL(t, "http://example.com")), r = N(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (T(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return F = t, I = a, a;
}
function R(e) {
	let t = L(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var z = /* @__PURE__ */ new Map();
function B(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var V = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/LocaleSwitcher.tsx";
function H() {
	let e = r().locale ?? "en", t = i(), n = a(), o = (e) => {
		try {
			let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
			return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
		} catch {
			return e.toUpperCase();
		}
	}, c = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return s("div", {
		className: "flex items-center gap-2",
		children: s("select", {
			value: e,
			onChange: (e) => c(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: l.map((e) => s("option", {
				value: e,
				children: o(e)
			}, e, !1, {
				fileName: V,
				lineNumber: 35,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: V,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: V,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
function U() {
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
function W(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var G = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function K({ children: i }) {
	let a = r().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		W("AppRoot", c);
	}, [c]), e(() => {
		b(a, { reload: !1 }), document.documentElement.lang = a;
	}, [a]), e(() => {
		U();
	}, []), s(o, { children: i }, void 0, !1, {
		fileName: G,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function J({ children: e }) {
	return s(K, { children: e }, void 0, !1, {
		fileName: q,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var Y = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/LocaleSwitcher.wrapper.tsx";
function X() {
	return s(J, { children: s(H, {}, void 0, !1, {
		fileName: Y,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Y,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { X as default };

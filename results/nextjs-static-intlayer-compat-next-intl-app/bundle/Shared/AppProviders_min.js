import { createContext as e, useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { usePathname as c } from "next/navigation";
var l = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, u = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, d = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, f = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, m = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = p(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, h = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var g = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, _ = (e = g) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!h) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, v = !1, y, b = () => typeof window > "u" ? _(g) : (v ||= (y = _(g), !0), y), x = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (v = !1, !h && u.storage.cookies)) for (let n = 0; n < u.storage.cookies.length; n++) {
		let { name: r, attributes: i } = u.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: p(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, m(r, e, i));
			} catch {}
		}
	}
}, S = "\x1B[0m", C = "\x1B[34m", w = "\x1B[31m", T = "\x1B[32m", E = "\x1B[36m", D = (e) => e, O = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = D(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, k = (e, t) => (n, r) => O(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? S : n : S}` : e;
A("✗", w), A("✓", T), A("⏲", C);
var j = ["en"], M = b, N = (e, t) => x(e, {
	...g,
	isCookieEnabled: t
}), P = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, F = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? l?.defaultLocale ?? "en",
	mode: e.mode ?? u?.mode ?? "prefix-no-default",
	locales: e.locales ?? l?.locales ?? j,
	rewrite: e.rewrite ?? u?.rewrite,
	domains: e.domains ?? u?.domains
}), I = (e, t) => !!e && (t ?? l.locales).includes(e), L = (e, t = l?.locales, n = l?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, R = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = F(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return I(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (I(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, z = e({
	get locale() {
		return M() ?? l?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), B = ({ locale: e, defaultLocale: r, variant: s, children: c, setLocale: u, disableEditor: d, isCookieEnabled: f }) => {
	let { locales: p, defaultLocale: m } = l ?? {}, [h, g] = a(() => e ?? M() ?? r ?? m), [_, v] = a(e);
	e !== _ && (v(e), e && e !== h && g(e)), n(() => {
		P();
	}, []);
	let y = t((e) => {
		if (h.toString() !== e.toString()) {
			if (!p?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), N(e, f);
		}
	}, [
		h,
		p,
		f
	]), b = u ?? y, x = L(h), S = i(() => ({
		locale: x,
		setLocale: b,
		variant: s,
		disableEditor: d
	}), [
		x,
		b,
		s,
		d
	]);
	return o(z.Provider, {
		value: S,
		children: c
	});
}, V = ({ children: e, ...t }) => s(B, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), H = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && k({ log: d })(`${A("NextIntlClientProvider", E)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let s = c(), l = u?.mode ?? "prefix-no-default", f = e ?? (l === "prefix-all" || l === "prefix-no-default" ? R(s) : void 0);
	return o(V, {
		locale: f,
		...a,
		children: t
	}, String(f));
};
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
function G({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		W("AppRoot", i);
	}, [i]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		U();
	}, []), o(H, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var K = "en";
function q({ children: e }) {
	return o(G, {
		locale: K,
		children: e
	});
}
function J() {
	return o(q, { children: o(G, {}) });
}
export { J as default };

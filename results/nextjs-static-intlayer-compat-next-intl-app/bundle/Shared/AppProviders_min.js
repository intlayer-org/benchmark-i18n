import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
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
}, f = "\x1B[0m", p = "\x1B[34m", m = "\x1B[31m", h = "\x1B[32m", g = "\x1B[36m", _ = (e) => e, v = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = _(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, y = (e, t) => (n, r) => v(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), b = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? f : n : f}` : e;
b("✗", m), b("✓", h), b("⏲", p);
var x = ["en"], S = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), C = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, w = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = C(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, T = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var E = {
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
}, D = (e = E) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!T) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, O = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !T && u.storage.cookies) for (let n = 0; n < u.storage.cookies.length; n++) {
		let { name: r, attributes: i } = u.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: C(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, w(r, e, i));
			} catch {}
		}
	}
}, k = D(E), A = (e, t) => O(e, {
	...E,
	isCookieEnabled: t
}), j = () => {
	let { locale: e } = t(B) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, M = ({ children: e }) => (j(), e), N = () => {
	let { locale: e } = t(B) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, P = ({ children: e }) => (N(), e), F = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, I = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? l?.defaultLocale ?? "en",
	mode: e.mode ?? u?.mode ?? "prefix-no-default",
	locales: e.locales ?? l?.locales ?? x,
	rewrite: e.rewrite ?? u?.rewrite,
	domains: e.domains ?? u?.domains
}), L = (e, t) => !!e && (t ?? l.locales).includes(e), R = (e, t = l?.locales, n = l?.defaultLocale) => {
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
}, z = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = I(t);
	if (!n || !r) return n;
	let a = S(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return L(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (L(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, B = e({
	locale: k ?? l?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), V = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: s, disableEditor: c, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = l ?? {}, [p, m] = a(e ?? k ?? t ?? f);
	n(() => {
		e && e !== p && m(e);
	}, [e]), n(() => {
		F();
	}, []);
	let h = s ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), A(e, u);
		}
	}), g = R(p);
	return o(B.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: r,
			disableEditor: c
		},
		children: i
	});
}, H = ({ children: e, ...t }) => s(V, {
	...t,
	children: [
		o(M, {}),
		o(P, {}),
		e
	]
}), U = (e) => o(H, { ...e }), W = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && y({ log: d })(`${b("NextIntlClientProvider", g)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let s = c(), l = u?.mode ?? "prefix-no-default", f = e ?? (l === "prefix-all" || l === "prefix-no-default" ? z(s) : void 0);
	return o(U, {
		locale: f,
		...a,
		children: t
	}, String(f));
};
function G() {
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
function K(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function q({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		K("AppRoot", i);
	}, [i]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		G();
	}, []), o(W, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var J = "en";
function Y({ children: e }) {
	return o(q, {
		locale: J,
		children: e
	});
}
function X() {
	return o(Y, { children: o(q, {}) });
}
export { X as default };

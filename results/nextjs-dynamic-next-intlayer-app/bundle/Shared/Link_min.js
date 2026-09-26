import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import s from "next/link";
import { jsx as c } from "react/jsx-runtime";
import { usePathname as l, useRouter as u } from "next/navigation.js";
var d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = ["en"], m = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = (e, t = d?.locales) => {
	let n = m(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, g = (e, t, n) => (n ?? f?.rewrite, e), _ = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? d?.defaultLocale ?? "en",
	mode: e.mode ?? f?.mode ?? "prefix-no-default",
	locales: e.locales ?? d?.locales ?? p,
	rewrite: e.rewrite ?? f?.rewrite,
	domains: e.domains ?? f?.domains
}), v = (e, t) => !!e && (t ?? d.locales).includes(e), y = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = _(t);
	return !e || !v(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, b = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), x = (e, t = d?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = _(n), c = h(e, a), l = new URL(c, "http://e.com"), u = b(g(l.pathname, void 0, void 0), t, void 0).path, { prefix: f } = y(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), p = `/${f}${u}`.replace(/\/+/g, "/");
	return p.length > 1 && p.endsWith("/") && (p = p.slice(0, -1)), `${p}${l.search}${l.hash}`;
}, S = (e, t = d?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = _(n), a = m(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${x(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, C = (e) => {
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
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!T) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, O = !1, k, A = () => typeof window > "u" ? D(E) : (O ||= (k = D(E), !0), k), j = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (O = !1, !T && f.storage.cookies)) for (let n = 0; n < f.storage.cookies.length; n++) {
		let { name: r, attributes: i } = f.storage.cookies[n];
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
}, M = A, N = (e, t) => j(e, {
	...E,
	isCookieEnabled: t
}), P = e({
	get locale() {
		return M() ?? d?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), { defaultLocale: F, locales: I } = d ?? {}, L = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(P) ?? {};
	return {
		locale: i,
		defaultLocale: F,
		availableLocales: I,
		setLocale: t((t) => {
			if (!I?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), N(t, e ?? o ?? !0), r?.(t);
		}, [
			I,
			r,
			a,
			e
		])
	};
}, R = () => {
	let e = l(), [t, n] = o("");
	r(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let i = t ? `${e}${t}` : e;
	return a(() => h(i), [i]);
}, z = ({ onChange: e = "replace", onLocaleChange: n, isCookieEnabled: r } = {}) => {
	let { replace: i, push: a } = u(), o = R();
	return {
		...L({
			onLocaleChange: t((t) => {
				if (!e) return;
				let r = S(o, t, { currentDomain: void 0 });
				if (typeof e == "function") {
					e({
						locale: t,
						path: r
					});
					return;
				}
				e === "replace" && i(r), e === "push" && a(r), n?.(t);
			}, [
				i,
				a,
				o,
				e,
				n
			]),
			isCookieEnabled: r
		}),
		pathWithoutLocale: o
	};
}, B = (e) => /^https?:\/\//.test(e ?? ""), V = ({ href: e, children: t, ...n }) => {
	let { locale: r } = z(), i = B(e.toString()), a = e && !i ? S(e.toString(), r) : e;
	return c(s, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	});
};
function H() {
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
function U(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function W({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		U("AppRoot", n);
	}, [n]), r(() => {
		t && (document.documentElement.lang = t);
	}, [t]), r(() => {
		H();
	}, []), e;
}
function G({ children: e }) {
	return c(W, {
		locale: "en",
		children: e
	});
}
function K() {
	return c(G, { children: c(V, {}) });
}
export { K as default };

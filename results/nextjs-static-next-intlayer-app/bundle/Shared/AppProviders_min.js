import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { jsxDEV as c } from "react/jsx-dev-runtime";
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, d = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, f = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = d(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, p = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, g = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !p && u.storage.cookies) for (let n = 0; n < u.storage.cookies.length; n++) {
		let { name: r, attributes: i } = u.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: d(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, f(r, e, i));
			} catch {}
		}
	}
}, _ = h(m), v = (e, t) => g(e, {
	...m,
	isCookieEnabled: t
}), y = () => {
	let { locale: e } = t(T) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, b = ({ children: e }) => (y(), e), x = () => {
	let { locale: e } = t(T) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, S = ({ children: e }) => (x(), e), C = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, w = (e, t = l?.locales, n = l?.defaultLocale) => {
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
}, T = e({
	locale: _ ?? l?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), E = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: s, disableEditor: c, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = l ?? {}, [p, m] = a(e ?? _ ?? t ?? f);
	n(() => {
		e && e !== p && m(e);
	}, [e]), n(() => {
		C();
	}, []);
	let h = s ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), v(e, u);
		}
	}), g = w(p);
	return o(T.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: r,
			disableEditor: c
		},
		children: i
	});
}, D = ({ children: e, ...t }) => s(E, {
	...t,
	children: [
		o(b, {}),
		o(S, {}),
		e
	]
}), O = (e) => o(D, { ...e });
function k() {
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
function A(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var j = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function M({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		A("AppRoot", i);
	}, [i]), n(() => {
		t && (document.documentElement.lang = t);
	}, [t]), n(() => {
		k();
	}, []), c(O, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: j,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var N = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function P({ children: e }) {
	return c(M, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: N,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var F = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.wrapper.tsx";
function I() {
	return c(P, { children: c(M, {}, void 0, !1, {
		fileName: F,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: F,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { I as default };

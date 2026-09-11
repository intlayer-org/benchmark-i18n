import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { usePathname as c } from "next/navigation";
import { jsxDEV as l } from "react/jsx-dev-runtime";
var u = {
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
}, d = {
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
}, f = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, p = "\x1B[0m", m = "\x1B[34m", h = "\x1B[31m", g = "\x1B[32m", _ = "\x1B[36m", v = (e) => e, y = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = v(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, b = (e, t) => (n, r) => y(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), x = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? p : n : p}` : e;
x("✗", h), x("✓", g), x("⏲", m);
var S = ["en"], C = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), w = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, T = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = w(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, E = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var D = {
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
}, O = (e = D) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!E) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, k = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !E && d.storage.cookies) for (let n = 0; n < d.storage.cookies.length; n++) {
		let { name: r, attributes: i } = d.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: w(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, T(r, e, i));
			} catch {}
		}
	}
}, A = O(D), j = (e, t) => k(e, {
	...D,
	isCookieEnabled: t
}), M = () => {
	let { locale: e } = t(V) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, N = ({ children: e }) => (M(), e), P = () => {
	let { locale: e } = t(V) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, F = ({ children: e }) => (P(), e), I = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, L = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? u?.defaultLocale ?? "en",
	mode: e.mode ?? d?.mode ?? "prefix-no-default",
	locales: e.locales ?? u?.locales ?? S,
	rewrite: e.rewrite ?? d?.rewrite,
	domains: e.domains ?? d?.domains
}), R = (e, t) => !!e && (t ?? u.locales).includes(e), z = (e, t = u?.locales, n = u?.defaultLocale) => {
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
}, B = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = L(t);
	if (!n || !r) return n;
	let a = C(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return R(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (R(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, V = e({
	locale: A ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), H = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: s, disableEditor: c, isCookieEnabled: l }) => {
	let { locales: d, defaultLocale: f } = u ?? {}, [p, m] = a(e ?? A ?? t ?? f);
	n(() => {
		e && e !== p && m(e);
	}, [e]), n(() => {
		I();
	}, []);
	let h = s ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), j(e, l);
		}
	}), g = z(p);
	return o(V.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: r,
			disableEditor: c
		},
		children: i
	});
}, U = ({ children: e, ...t }) => s(H, {
	...t,
	children: [
		o(N, {}),
		o(F, {}),
		e
	]
}), W = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && b({ log: f })(`${x("NextIntlClientProvider", _)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let s = c(), l = d?.mode ?? "prefix-no-default", u = e ?? (l === "prefix-all" || l === "prefix-no-default" ? B(s) : void 0);
	return o(U, {
		locale: u,
		...a,
		children: t
	}, String(u));
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
var q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function J({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		K("AppRoot", i);
	}, [i]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		G();
	}, []), l(W, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: q,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var Y = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", X = "en";
function Z({ children: e }) {
	return l(J, {
		locale: X,
		children: e
	}, void 0, !1, {
		fileName: Y,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/AppProviders.wrapper.tsx";
function $() {
	return l(Z, { children: l(J, {}, void 0, !1, {
		fileName: Q,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Q,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { $ as default };

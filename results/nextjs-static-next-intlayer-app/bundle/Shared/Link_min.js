import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "next/link";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { usePathname as d, useRouter as f } from "next/navigation.js";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
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
}, h = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = ["en"], _ = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), v = (e, t = m?.locales) => {
	let n = _(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://e.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://e.com", "");
}, y = (e, t, n) => (n ?? h?.rewrite, e), b = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? g,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), x = (e, t) => !!e && (t ?? m.locales).includes(e), ee = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = b(t);
	return !e || !x(e, i) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, S = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), C = (e, t = m?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s } = b(n), c = v(e, a), l = new URL(c, "http://e.com"), u = S(y(l.pathname, void 0, void 0), t, void 0).path, { prefix: d } = ee(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), f = `/${d}${u}`.replace(/\/+/g, "/");
	return f.length > 1 && f.endsWith("/") && (f = f.slice(0, -1)), `${f}${l.search}${l.hash}`;
}, w = (e, t = m?.defaultLocale, n = {}) => {
	let { domains: r, currentDomain: i } = b(n), a = _(e), o = a ? new URL(e) : new URL(e, "http://e.com");
	return `${a ? `${o.protocol}//${o.host}` : ""}${C(`${o.pathname}${o.search}${o.hash}`, t, n)}`;
}, T = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, E = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, D = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = E(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, O = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var k = {
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
}, A = (e = k) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!O) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, j = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !O && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: E(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, D(r, e, i));
			} catch {}
		}
	}
}, M = A(k), N = (e, t) => j(e, {
	...k,
	isCookieEnabled: t
}), P = () => {
	let { locale: e } = n(z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, F = ({ children: e }) => (P(), e), I = () => {
	let { locale: e } = n(z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, L = ({ children: e }) => (I(), e), R = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, z = e({
	locale: M ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), B = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = m ?? {}, [f, p] = s(e ?? M ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		R();
	}, []);
	let h = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), N(e, c);
		}
	}), g = T(f);
	return l(z.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, V = ({ children: e, ...t }) => u(B, {
	...t,
	children: [
		l(F, {}),
		l(L, {}),
		e
	]
}), { defaultLocale: H, locales: U } = m ?? {}, W = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(z) ?? {};
	return {
		locale: i,
		defaultLocale: H,
		availableLocales: U,
		setLocale: t((t) => {
			if (!U?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), N(t, e ?? o ?? !0), r?.(t);
		}, [
			U,
			r,
			a,
			e
		])
	};
}, G = (e) => l(V, { ...e }), K = () => {
	let e = d(), [t, n] = s("");
	r(() => {
		let e = typeof window < "u" ? window.location.search : "";
		n(e);
	}, [e]);
	let i = t ? `${e}${t}` : e;
	return a(() => v(i), [i]);
}, q = ({ onChange: e = "replace", onLocaleChange: n, isCookieEnabled: r } = {}) => {
	let { replace: i, push: a } = f(), o = K();
	return {
		...W({
			onLocaleChange: t((t) => {
				if (!e) return;
				let r = w(o, t, { currentDomain: void 0 });
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
}, J = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Link.tsx", Y = (e) => /^https?:\/\//.test(e ?? ""), X = ({ href: e, children: t, ...n }) => {
	let { locale: r } = q(), i = Y(e.toString()), a = e && !i ? w(e.toString(), r) : e;
	return p(c, {
		href: a,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: J,
		lineNumber: 26,
		columnNumber: 5
	}, void 0);
};
function Z() {
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
function Q(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var te = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function ne({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Q("AppRoot", n);
	}, [n]), r(() => {
		t && (document.documentElement.lang = t);
	}, [t]), r(() => {
		Z();
	}, []), p(G, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: te,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var re = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function ie({ children: e }) {
	return p(ne, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: re,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/Link.wrapper.tsx";
function ae() {
	return p(ie, { children: p(X, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ae as default };

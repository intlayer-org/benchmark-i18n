import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "next/link";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { usePathname as d, useRouter as f } from "next/navigation.js";
var p = {
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
	defaultLocale: "en"
}, m = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = (e, t = p?.locales) => {
	let n = h(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, _ = ["en"], v = (e = {}) => ({
	defaultLocale: p?.defaultLocale ?? "en",
	mode: m?.mode ?? "prefix-no-default",
	locales: p?.locales ?? _,
	rewrite: m?.rewrite,
	domains: m?.domains,
	...e
}), y = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = v(t);
	return !e || !i.includes(e) ? {
		prefix: "",
		localePrefix: void 0
	} : r === "prefix-all" || r === "prefix-no-default" && n !== e ? {
		prefix: `${e}/`,
		localePrefix: e
	} : {
		prefix: "",
		localePrefix: void 0
	};
}, b = (e, t, n) => e, x = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), S = (e, t = p?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = v(n), l = g(e, a), u = h(l), d = u ? new URL(l) : new URL(l, "http://example.com"), f = x(b(d.pathname, void 0, void 0), t, void 0).path, m = u ? `${d.protocol}//${d.host}` : "", { prefix: _ } = y(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), S = `/${_}${f}`.replace(/\/+/g, "/");
	return S.length > 1 && S.endsWith("/") && (S = S.slice(0, -1)), `${m}${S}${d.search}${d.hash}`;
}, C = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, w = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var T = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, E = (e) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!w) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, D = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !w && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, T(r, e, i));
			} catch {}
		}
	}
}, O = {
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
}, k = E(O), A = (e, t) => D(e, {
	...O,
	isCookieEnabled: t
}), j = () => {
	let { locale: e } = n(P) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, M = ({ children: e }) => (j(), e), N = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, P = e({
	locale: k ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), F = ({ locale: e, defaultLocale: t, children: n, setLocale: i, disableEditor: a, isCookieEnabled: o }) => {
	let { locales: c, defaultLocale: u } = p ?? {}, [d, f] = s(e ?? k ?? t ?? u);
	r(() => {
		e && e !== d && f(e);
	}, [e]), r(() => {
		N();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), A(e, o);
		}
	}), h = C(d);
	return l(P.Provider, {
		value: {
			locale: h,
			setLocale: m,
			disableEditor: a
		},
		children: n
	});
}, I = ({ children: e, ...t }) => u(F, {
	...t,
	children: [l(M, {}), e]
}), L = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { defaultLocale: i, locales: a } = p ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = n(P) ?? {};
	return {
		locale: o,
		defaultLocale: i,
		availableLocales: a,
		setLocale: t((t) => {
			if (!a?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			s(t), A(t, e ?? c ?? !0), r?.(t);
		}, [
			a,
			r,
			s,
			e
		])
	};
}, R = (e) => l(I, { ...e }), z = () => {
	let e = d(), [t, n] = s(e);
	return r(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), a(() => g(t), [t]);
}, B = ({ onChange: e = "replace" } = {}) => {
	let { replace: n, push: r } = f(), i = z();
	return {
		...L({ onLocaleChange: t((t) => {
			if (!e) return;
			let a = S(i, t, { currentDomain: void 0 });
			if (typeof e == "function") {
				e({
					locale: t,
					path: a
				});
				return;
			}
			e === "replace" && n(a), e === "push" && r(a);
		}, [
			n,
			r,
			i,
			e
		]) }),
		pathWithoutLocale: i
	};
}, V = (e) => /^https?:\/\//.test(e ?? ""), H = ({ href: e, children: t, ...n }) => {
	let { locale: r } = B(), i = V(e.toString());
	return l(c, {
		href: e && !i ? S(e.toString(), r) : e,
		prefetch: !1,
		...n,
		children: t
	});
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
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		W("AppRoot", n);
	}, [n]), r(() => {
		t && (document.documentElement.lang = t);
	}, [t]), r(() => {
		U();
	}, []), l(R, {
		locale: t,
		children: e
	});
}
function K({ children: e }) {
	return l(G, {
		locale: "en",
		children: e
	});
}
function q() {
	return l(K, { children: l(H, {}) });
}
export { q as default };

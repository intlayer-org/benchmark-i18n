import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
var c = {
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
}, l = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, u = (e, t = c?.locales, n = c?.defaultLocale) => {
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
}, d = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, p = (e) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!d) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, m = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !d && l.storage.cookies) for (let n = 0; n < l.storage.cookies.length; n++) {
		let { name: r, attributes: i } = l.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, f(r, e, i));
			} catch {}
		}
	}
}, h = {
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
}, g = p(h), _ = (e, t) => m(e, {
	...h,
	isCookieEnabled: t
}), v = () => {
	let { locale: e } = t(x) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		!e || !r.current || r.current.currentLocale.set(e);
	}, [e]);
}, y = ({ children: e }) => (v(), e), b = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, x = e({
	locale: g ?? c?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), S = ({ locale: e, defaultLocale: t, children: r, setLocale: i, disableEditor: s, isCookieEnabled: l }) => {
	let { locales: d, defaultLocale: f } = c ?? {}, [p, m] = a(e ?? g ?? t ?? f);
	n(() => {
		e && e !== p && m(e);
	}, [e]), n(() => {
		b();
	}, []);
	let h = i ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), _(e, l);
		}
	}), v = u(p);
	return o(x.Provider, {
		value: {
			locale: v,
			setLocale: h,
			disableEditor: s
		},
		children: r
	});
}, C = ({ children: e, ...t }) => s(S, {
	...t,
	children: [o(y, {}), e]
}), w = (e) => o(C, { ...e });
function T() {
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
function E(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function D({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		E("AppRoot", i);
	}, [i]), n(() => {
		t && (document.documentElement.lang = t);
	}, [t]), n(() => {
		T();
	}, []), o(w, {
		locale: t,
		children: e
	});
}
function O({ children: e }) {
	return o(D, {
		locale: "en",
		children: e
	});
}
function k() {
	return o(O, { children: o(D, {}) });
}
export { k as default };

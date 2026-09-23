import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
import { useParams as o, usePathname as s, useRouter as c } from "next/navigation";
import { jsxDEV as l } from "react/jsx-dev-runtime";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
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
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, h = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, g = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = h(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _ = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var v = {
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
}, y = (e = v) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, b = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_ && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: h(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, g(r, e, i));
			} catch {}
		}
	}
}, x = f.locales;
f.requiredLocales, f.defaultLocale;
var S = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/LocaleSwitcher.tsx";
function C(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function w() {
	let e = o().locale ?? "en", t = s(), n = c(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return l("div", {
		className: "flex items-center gap-2",
		children: l("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: x.map((e) => l("option", {
				value: e,
				children: C(e)
			}, e, !1, {
				fileName: S,
				lineNumber: 35,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: S,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: S,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var T = y(v), E = (e, t) => b(e, {
	...v,
	isCookieEnabled: t
}), D = () => {
	let { locale: e } = t(M) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, O = ({ children: e }) => (D(), e), k = () => {
	let { locale: e } = t(M) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, A = ({ children: e }) => (k(), e), j = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, M = e({
	locale: T ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), N = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: o, disableEditor: s, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: d } = f ?? {}, [p, h] = a(e ?? T ?? t ?? d);
	n(() => {
		e && e !== p && h(e);
	}, [e]), n(() => {
		j();
	}, []);
	let g = o ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), E(e, c);
		}
	}), _ = m(p);
	return u(M.Provider, {
		value: {
			locale: _,
			setLocale: g,
			variant: r,
			disableEditor: s
		},
		children: i
	});
}, P = ({ children: e, ...t }) => d(N, {
	...t,
	children: [
		u(O, {}),
		u(A, {}),
		e
	]
}), F = (e) => u(P, { ...e });
function I() {
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
function L(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var R = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/AppProviders.tsx";
function z({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		L("AppRoot", i);
	}, [i]), n(() => {
		t && (document.documentElement.lang = t);
	}, [t]), n(() => {
		I();
	}, []), l(F, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: R,
		lineNumber: 34,
		columnNumber: 7
	}, this);
}
var B = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/scripts/Wrapper.tsx";
function V({ children: e }) {
	return l(z, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: B,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var H = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/next-intlayer-app/src/components/LocaleSwitcher.wrapper.tsx";
function U() {
	return l(V, { children: l(w, {}, void 0, !1, {
		fileName: H,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: H,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { U as default };

import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useRef as i, useState as a } from "react";
import { useParams as o, usePathname as s, useRouter as c } from "next/navigation";
import { jsxDEV as l } from "react/jsx-dev-runtime";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
var f = [
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
];
function p(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var m = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/LocaleSwitcher.tsx";
function h() {
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
			children: f.map((e) => l("option", {
				value: e,
				children: p(e)
			}, e, !1, {
				fileName: m,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: m,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: m,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var g = {
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
}, _ = {
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
}, ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, v = "\x1B[0m", y = "\x1B[34m", b = "\x1B[31m", x = "\x1B[32m", S = "\x1B[36m", C = (e) => e, w = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = C(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, T = (e, t) => (n, r) => w(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), E = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e;
E("✗", b), E("✓", x), E("⏲", y);
var D = ["en"], O = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), k = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, A = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = k(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, j = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var M = {
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
}, N = (e = M) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!j) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, P = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !j && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: k(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, A(r, e, i));
			} catch {}
		}
	}
}, F = N(M), I = (e, t) => P(e, {
	...M,
	isCookieEnabled: t
}), L = () => {
	let { locale: e } = t(K) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, R = ({ children: e }) => (L(), e), z = () => {
	let { locale: e } = t(K) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, B = ({ children: e }) => (z(), e), V = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, H = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? D,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), U = (e, t) => !!e && (t ?? g.locales).includes(e), W = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, G = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = H(t);
	if (!n || !r) return n;
	let a = O(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return U(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (U(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, K = e({
	locale: F ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), q = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: o, disableEditor: s, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: d } = g ?? {}, [f, p] = a(e ?? F ?? t ?? d);
	n(() => {
		e && e !== f && p(e);
	}, [e]), n(() => {
		V();
	}, []);
	let m = o ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), I(e, c);
		}
	}), h = W(f);
	return u(K.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: r,
			disableEditor: s
		},
		children: i
	});
}, J = ({ children: e, ...t }) => d(q, {
	...t,
	children: [
		u(R, {}),
		u(B, {}),
		e
	]
}), Y = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && T({ log: ee })(`${E("NextIntlClientProvider", S)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = s(), c = _?.mode ?? "prefix-no-default", l = e ?? (c === "prefix-all" || c === "prefix-no-default" ? G(o) : void 0);
	return u(J, {
		locale: l,
		...a,
		children: t
	}, String(l));
};
function X() {
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
function Z(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function te({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		Z("AppRoot", i);
	}, [i]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		X();
	}, []), l(Y, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var ne = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", re = "en";
function ie({ children: e }) {
	return l(te, {
		locale: re,
		children: e
	}, void 0, !1, {
		fileName: ne,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/LocaleSwitcher.wrapper.tsx";
function ae() {
	return l(ie, { children: l(h, {}, void 0, !1, {
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

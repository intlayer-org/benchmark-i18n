import e, { createContext as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { useNavigate as o, useParams as s } from "@tanstack/react-router";
import { jsxDEV as c } from "react/jsx-dev-runtime";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
var d = [
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
function f(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var p = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/LocaleSwitcher.tsx";
function m() {
	let e = s({ strict: !1 }).locale ?? "en", t = o(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: d.map((e) => c("option", {
				value: e,
				children: f(e)
			}, e, !1, {
				fileName: p,
				lineNumber: 24,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: p,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: p,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var h = {
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
}, g = {
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
}, _ = {
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
var D = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, O = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = D(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, k = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var A = {
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
}, j = (e = A) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!k) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, M = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !k && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: D(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, O(r, e, i));
			} catch {}
		}
	}
}, N = j(A), P = (e, t) => M(e, {
	...A,
	isCookieEnabled: t
}), F = () => {
	let { locale: e } = n(V) ?? {}, t = i(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, I = ({ children: e }) => (F(), e), L = () => {
	let { locale: e } = n(V) ?? {}, t = i(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, R = ({ children: e }) => (L(), e), z = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, B = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, V = t({
	locale: N ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), H = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: o, disableEditor: s, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = h ?? {}, [f, p] = a(e ?? N ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		z();
	}, []);
	let m = o ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), P(e, c);
		}
	}), g = B(f);
	return l(V.Provider, {
		value: {
			locale: g,
			setLocale: m,
			variant: n,
			disableEditor: s
		},
		children: i
	});
}, U = ({ children: e, ...t }) => u(H, {
	...t,
	children: [
		l(I, {}),
		l(R, {}),
		e
	]
}), W = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && T({ log: _ })(`${E("IntlProvider", S)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), l(U, {
	locale: e,
	children: t
}, String(e))), G = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function K({ children: t }) {
	return c(e.Suspense, {
		fallback: null,
		children: c(W, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: G,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: G,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/LocaleSwitcher.wrapper.tsx";
function J() {
	return c(K, { children: c(m, {}, void 0, !1, {
		fileName: q,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: q,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { J as default };

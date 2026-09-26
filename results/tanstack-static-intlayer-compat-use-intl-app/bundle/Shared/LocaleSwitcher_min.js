import e, { createContext as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { useNavigate as o, useParams as s } from "@tanstack/react-router";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
var u = [
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
function d(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function f() {
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
			children: u.map((e) => c("option", {
				value: e,
				children: d(e)
			}, e))
		})
	});
}
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
}, m = {
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
}, h = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, g = "\x1B[0m", _ = "\x1B[34m", v = "\x1B[31m", y = "\x1B[32m", b = "\x1B[36m", x = (e) => e, S = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = x(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, C = (e, t) => (n, r) => S(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), w = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? g : n : g}` : e;
w("✗", v), w("✓", y), w("⏲", _);
var T = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, E = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = T(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, D = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var O = {
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
}, k = (e = O) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!D) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, A = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !D && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: T(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, E(r, e, i));
			} catch {}
		}
	}
}, j = k(O), M = (e, t) => A(e, {
	...O,
	isCookieEnabled: t
}), N = () => {
	let { locale: e } = n(z) ?? {}, t = i(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, P = ({ children: e }) => (N(), e), F = () => {
	let { locale: e } = n(z) ?? {}, t = i(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, I = ({ children: e }) => (F(), e), L = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, R = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, z = t({
	locale: j ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), B = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: o, disableEditor: s, isCookieEnabled: l }) => {
	let { locales: u, defaultLocale: d } = p ?? {}, [f, m] = a(e ?? j ?? t ?? d);
	r(() => {
		e && e !== f && m(e);
	}, [e]), r(() => {
		L();
	}, []);
	let h = o ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), M(e, l);
		}
	}), g = R(f);
	return c(z.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: s
		},
		children: i
	});
}, V = ({ children: e, ...t }) => l(B, {
	...t,
	children: [
		c(P, {}),
		c(I, {}),
		e
	]
}), H = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && C({ log: h })(`${w("IntlProvider", b)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), c(V, {
	locale: e,
	children: t
}, String(e)));
function U({ children: t }) {
	return c(e.Suspense, {
		fallback: null,
		children: c(H, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function W() {
	return c(U, { children: c(f, {}) });
}
export { W as default };

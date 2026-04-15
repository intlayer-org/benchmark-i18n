"use client";
import e from "next/link";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { usePathname as c, useRouter as l } from "next/navigation.js";
//#region .intlayer/config/configuration.mjs
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
	defaultLocale: "en"
}, d = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = (e, t = u?.locales) => {
	let n = f(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, m = ["en"], h = (e = {}) => ({
	defaultLocale: u?.defaultLocale ?? "en",
	mode: d?.mode ?? "prefix-no-default",
	locales: u?.locales ?? m,
	rewrite: d?.rewrite,
	domains: d?.domains,
	...e
}), g = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = h(t);
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
}, _ = (e, t, n) => e, v = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), y = (e, t = u?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = h(n), l = p(e, a), d = f(l), m = d ? new URL(l) : new URL(l, "http://example.com"), y = v(_(m.pathname, void 0, void 0), t, void 0).path, b = d ? `${m.protocol}//${m.host}` : "", { prefix: x } = g(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), S = `/${x}${y}`.replace(/\/+/g, "/");
	return S.length > 1 && S.endsWith("/") && (S = S.slice(0, -1)), `${b}${S}${m.search}${m.hash}`;
}, b = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var x = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, S = (e) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!b) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !b && d.storage.cookies) for (let n = 0; n < d.storage.cookies.length; n++) {
		let { name: r, attributes: i } = d.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, x(r, e, i));
			} catch {}
		}
	}
}, w = {
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
}, T = S(w), E = (e, t) => C(e, {
	...w,
	isCookieEnabled: t
}), D = t({
	locale: T ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), O = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: i, locales: a } = u ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = r(D) ?? {};
	return {
		locale: o,
		defaultLocale: i,
		availableLocales: a,
		setLocale: n((n) => {
			if (!a?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), E(n, e ?? c ?? !0), t?.(n);
		}, [
			a,
			t,
			s,
			e
		])
	};
}, k = () => {
	let e = c(), [t, n] = o(e);
	return i(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), a(() => p(t), [t]);
}, A = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: r } = l(), i = k();
	return {
		...O({ onLocaleChange: n((n) => {
			if (!e) return;
			let a = y(i, n, { currentDomain: void 0 });
			if (typeof e == "function") {
				e({
					locale: n,
					path: a
				});
				return;
			}
			e === "replace" && t(a), e === "push" && r(a);
		}, [
			t,
			r,
			i,
			e
		]) }),
		pathWithoutLocale: i
	};
}, j = (e) => /^https?:\/\//.test(e ?? ""), M = ({ href: t, children: n, ...r }) => {
	let { locale: i } = A(), a = j(t.toString());
	return /* @__PURE__ */ s(e, {
		href: t && !a ? y(t.toString(), i) : t,
		...r,
		children: n
	});
};
//#endregion
export { M as Link, j as checkIsExternalLink };

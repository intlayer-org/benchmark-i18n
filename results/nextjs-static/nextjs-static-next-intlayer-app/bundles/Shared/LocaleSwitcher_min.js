"use client";
import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { usePathname as s, useRouter as c } from "next/navigation.js";
//#region .intlayer/config/configuration.mjs
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
	defaultLocale: "en"
}, u = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, d = {
	internationalization: l,
	routing: u,
	editor: {
		applicationURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		cmsURL: "https://app.intlayer.org",
		backendURL: "https://back.intlayer.org",
		port: 8e3,
		enabled: !1,
		dictionaryPriorityStrategy: "local_first",
		liveSync: !0,
		liveSyncPort: 4e3,
		liveSyncURL: "http://localhost:4000"
	},
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	}
}, f = 50, p = /* @__PURE__ */ new Map(), m = (e, t, n) => {
	let r = t ?? l?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = p.get(e);
	a || (a = /* @__PURE__ */ new Map(), p.set(e, a));
	let o = a.get(i);
	return o || (a.size > f && a.clear(), o = new e(r, n), a.set(i, o)), o;
}, h = {
	Collator: function(e, t) {
		return m(Intl.Collator, e, t);
	},
	DateTimeFormat: function(e, t) {
		return m(Intl.DateTimeFormat, e, t);
	},
	DisplayNames: function(e, t) {
		return m(Intl.DisplayNames, e, t);
	},
	ListFormat: function(e, t) {
		return m(Intl.ListFormat, e, t);
	},
	NumberFormat: function(e, t) {
		return m(Intl.NumberFormat, e, t);
	},
	PluralRules: function(e, t) {
		return m(Intl.PluralRules, e, t);
	},
	RelativeTimeFormat: function(e, t) {
		return m(Intl.RelativeTimeFormat, e, t);
	},
	Segmenter: function(e, t) {
		return m(Intl.Segmenter, e, t);
	}
}, g = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), _ = (e, t = l?.locales) => {
	let n = g(e), r = e;
	e?.endsWith("/") && (r = e.slice(0, -1));
	let i = n ? new URL(r) : new URL(r, "http://example.com"), a = i.pathname;
	a.startsWith("/") || (i.pathname = `/${a}`);
	{
		let e = a.split("/"), n = e[1];
		t?.includes(n) && (e.splice(1, 1), i.pathname = e.join("/") ?? "/");
	}
	return n ? i.toString() : i.toString().replace("http://example.com", "");
}, v = ["en"], y = (e = {}) => ({
	defaultLocale: l?.defaultLocale ?? "en",
	mode: u?.mode ?? "prefix-no-default",
	locales: l?.locales ?? v,
	rewrite: u?.rewrite,
	domains: u?.domains,
	...e
}), b = (e, t = {}) => {
	let { defaultLocale: n, mode: r, locales: i, domains: a } = y(t);
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
}, x = (e, t, n) => e, S = (e, t, n) => ({
	path: e,
	isRewritten: !1
}), C = (e, t = l?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = y(n), u = _(e, a), d = g(u), f = d ? new URL(u) : new URL(u, "http://example.com"), p = S(x(f.pathname, void 0, void 0), t, void 0).path, m = d ? `${f.protocol}//${f.host}` : "", { prefix: h } = b(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), v = `/${h}${p}`.replace(/\/+/g, "/");
	return v.length > 1 && v.endsWith("/") && (v = v.slice(0, -1)), `${m}${v}${f.search}${f.hash}`;
}, w = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var T = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, E = (e) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!w) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, D = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !w && u.storage.cookies) for (let n = 0; n < u.storage.cookies.length; n++) {
		let { name: r, attributes: i } = u.storage.cookies[n];
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
}, k = (e, t = e) => new h.DisplayNames(t, { type: "language" }).of(e) ?? "Unknown locale", A = d.internationalization.locales;
d.internationalization.requiredLocales, d.internationalization.defaultLocale, d.editor;
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
var j = E(O), M = (e, t) => D(e, {
	...O,
	isCookieEnabled: t
}), N = e({
	locale: j ?? l?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), P = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { defaultLocale: i, locales: a } = l ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = n(N) ?? {};
	return {
		locale: o,
		defaultLocale: i,
		availableLocales: a,
		setLocale: t((t) => {
			if (!a?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			s(t), M(t, e ?? c ?? !0), r?.(t);
		}, [
			a,
			r,
			s,
			e
		])
	};
}, F = () => {
	let e = s(), [t, n] = a(e);
	return r(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), i(() => _(t), [t]);
}, I = ({ onChange: e = "replace" } = {}) => {
	let { replace: n, push: r } = c(), i = F();
	return {
		...P({ onLocaleChange: t((t) => {
			if (!e) return;
			let a = C(i, t, { currentDomain: void 0 });
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
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function L() {
	let { locale: e, setLocale: t } = I({ onChange: "push" });
	return /* @__PURE__ */ o("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ o("select", {
			value: e,
			onChange: (e) => t(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: A.map((e) => /* @__PURE__ */ o("option", {
				value: e,
				children: k(e)
			}, e))
		})
	});
}
//#endregion
export { L as default };

import { createContext as e, useCallback as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { useNavigate as o } from "@tanstack/react-router";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
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
}, d = (e, t = l?.locales, n = l?.defaultLocale) => {
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
}, f = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var p = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, m = (e) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!f) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, h = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !f && u.storage.cookies) for (let n = 0; n < u.storage.cookies.length; n++) {
		let { name: r, attributes: i } = u.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, p(r, e, i));
			} catch {}
		}
	}
}, g = {
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
}, _ = m(g), v = (e, t) => h(e, {
	...g,
	isCookieEnabled: t
}), y = () => {
	let { locale: e } = n(S) ?? {}, t = i(null);
	r(() => {}, []), r(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, b = ({ children: e }) => (y(), e), x = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, S = e({
	locale: _ ?? l?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), C = ({ locale: e, defaultLocale: t, children: n, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: f } = l ?? {}, [p, m] = a(e ?? _ ?? t ?? f);
	r(() => {
		e && e !== p && m(e);
	}, [e]), r(() => {
		x();
	}, []);
	let h = i ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), v(e, c);
		}
	}), g = d(p);
	return s(S.Provider, {
		value: {
			locale: g,
			setLocale: h,
			disableEditor: o
		},
		children: n
	});
}, w = ({ children: e, ...t }) => c(C, {
	...t,
	children: [s(b, {}), e]
}), T = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { defaultLocale: i, locales: a } = l ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = n(S) ?? {};
	return {
		locale: o,
		defaultLocale: i,
		availableLocales: a,
		setLocale: t((t) => {
			if (!a?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			s(t), v(t, e ?? c ?? !0), r?.(t);
		}, [
			a,
			r,
			s,
			e
		])
	};
};
function E(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function D() {
	let e = o(), { locale: t, availableLocales: n, setLocale: r } = T({ onLocaleChange: (t) => {
		e({
			to: ".",
			params: (e) => ({
				...e,
				locale: t
			})
		});
	} });
	return s("div", {
		className: "flex items-center gap-2",
		children: s("select", {
			value: t,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: n.map((e) => s("option", {
				value: e,
				children: E(e)
			}, e))
		})
	});
}
function O({ children: e }) {
	return s(w, {
		locale: "en",
		children: e
	});
}
function k() {
	return s(O, { children: s(D, {}) });
}
export { k as default };

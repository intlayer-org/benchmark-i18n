import { Profiler as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { usePathname as u, useRouter as d } from "next/navigation.js";
//#region .intlayer/config/configuration.mjs
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
	defaultLocale: "en"
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = {
	internationalization: f,
	routing: p,
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
}, h = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = (e, t = f?.locales) => {
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
	defaultLocale: f?.defaultLocale ?? "en",
	mode: p?.mode ?? "prefix-no-default",
	locales: f?.locales ?? _,
	rewrite: p?.rewrite,
	domains: p?.domains,
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
}), S = (e, t = f?.defaultLocale, n = {}) => {
	let { defaultLocale: r, mode: i, locales: a, rewrite: o, domains: s, currentDomain: c } = v(n), l = g(e, a), u = h(l), d = u ? new URL(l) : new URL(l, "http://example.com"), p = x(b(d.pathname, void 0, void 0), t, void 0).path, m = u ? `${d.protocol}//${d.host}` : "", { prefix: _ } = y(t, {
		defaultLocale: r,
		mode: i,
		locales: a,
		domains: s
	}), S = `/${_}${p}`.replace(/\/+/g, "/");
	return S.length > 1 && S.endsWith("/") && (S = S.slice(0, -1)), `${m}${S}${d.search}${d.hash}`;
}, C = (e, t = f?.locales, n = f?.defaultLocale) => {
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
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!w) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, D = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !w && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
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
}, k = m.internationalization.locales;
m.internationalization.requiredLocales, m.internationalization.defaultLocale, m.editor;
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
var A = E(O), j = (e, t) => D(e, {
	...O,
	isCookieEnabled: t
}), M = () => {
	let { locale: e } = r(F) ?? {}, t = o(null);
	i(() => {}, []), i(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, N = ({ children: e }) => (M(), e), P = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, F = t({
	locale: A ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), I = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: a, isCookieEnabled: o }) => {
	let { locales: l, defaultLocale: u } = f ?? {}, [d, p] = s(e ?? A ?? t ?? u);
	i(() => {
		e && e !== d && p(e);
	}, [e]), i(() => {
		P();
	}, []);
	let m = r ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), j(e, o);
		}
	}), h = C(d);
	return c(F.Provider, {
		value: {
			locale: h,
			setLocale: m,
			disableEditor: a
		},
		children: n
	});
}, L = ({ children: e, ...t }) => l(I, {
	...t,
	children: [c(N, {}), e]
}), R = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: i, locales: a } = f ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = r(F) ?? {};
	return {
		locale: o,
		defaultLocale: i,
		availableLocales: a,
		setLocale: n((n) => {
			if (!a?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), j(n, e ?? c ?? !0), t?.(n);
		}, [
			a,
			t,
			s,
			e
		])
	};
}, z = (e) => c(L, { ...e }), B = () => {
	let e = u(), [t, n] = s(e);
	return i(() => {
		let t = typeof window < "u" ? window.location.search : "";
		n(t ? `${e}${t}` : e);
	}, [e]), a(() => g(t), [t]);
}, V = ({ onChange: e = "replace" } = {}) => {
	let { replace: t, push: r } = d(), i = B();
	return {
		...R({ onLocaleChange: n((n) => {
			if (!e) return;
			let a = S(i, n, { currentDomain: void 0 });
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
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function H(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function U() {
	let { locale: e, setLocale: t } = V({ onChange: "push" });
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => t(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: k.map((e) => c("option", {
				value: e,
				children: H(e)
			}, e))
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function W() {
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
function G(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function K({ children: t, locale: n }) {
	return i(() => {
		n && (document.documentElement.lang = n);
	}, [n]), i(() => {
		W();
	}, []), c(e, {
		id: "AppRoot",
		onRender: G,
		children: c(z, {
			locale: n,
			children: t
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function q({ children: e }) {
	return c(K, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/LocaleSwitcher.wrapper.tsx
function J() {
	return c(q, { children: c(U, {}) });
}
//#endregion
export { J as default };

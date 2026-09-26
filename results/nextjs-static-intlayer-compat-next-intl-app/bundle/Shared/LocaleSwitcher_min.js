import { createContext as e, useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import { useParams as o, usePathname as s, useRouter as c } from "next/navigation";
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
function p() {
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
			children: d.map((e) => l("option", {
				value: e,
				children: f(e)
			}, e))
		})
	});
}
var m = {
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
}, h = {
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
}, g = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, _ = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), v = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, y = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = v(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, b = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var x = {
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
}, S = (e = x) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!b) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, C = !1, w, T = () => typeof window > "u" ? S(x) : (C ||= (w = S(x), !0), w), E = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (C = !1, !b && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: v(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, y(r, e, i));
			} catch {}
		}
	}
}, D = "\x1B[0m", O = "\x1B[34m", k = "\x1B[31m", A = "\x1B[32m", j = "\x1B[36m", M = (e) => e, N = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = M(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, P = (e, t) => (n, r) => N(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? D : n : D}` : e;
F("✗", k), F("✓", A), F("⏲", O);
var I = ["en"], L = T, R = (e, t) => E(e, {
	...x,
	isCookieEnabled: t
}), z = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, B = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? I,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), V = (e, t) => !!e && (t ?? m.locales).includes(e), H = (e, t = m?.locales, n = m?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, U = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = B(t);
	if (!n || !r) return n;
	let a = _(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return V(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (V(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, W = e({
	get locale() {
		return L() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), G = ({ locale: e, defaultLocale: r, variant: o, children: s, setLocale: c, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = a(() => e ?? L() ?? r ?? p), [_, v] = a(e);
	e !== _ && (v(e), e && e !== h && g(e)), n(() => {
		z();
	}, []);
	let y = t((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), R(e, d);
		}
	}, [
		h,
		f,
		d
	]), b = c ?? y, x = H(h), S = i(() => ({
		locale: x,
		setLocale: b,
		variant: o,
		disableEditor: u
	}), [
		x,
		b,
		o,
		u
	]);
	return l(W.Provider, {
		value: S,
		children: s
	});
}, K = ({ children: e, ...t }) => u(G, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), q = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && P({ log: g })(`${F("NextIntlClientProvider", j)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = s(), c = h?.mode ?? "prefix-no-default", u = e ?? (c === "prefix-all" || c === "prefix-no-default" ? U(o) : void 0);
	return l(K, {
		locale: u,
		...a,
		children: t
	}, String(u));
};
function J() {
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
function Y(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function X({ children: e, locale: t }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		Y("AppRoot", i);
	}, [i]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		J();
	}, []), l(q, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var Z = "en";
function Q({ children: e }) {
	return l(X, {
		locale: Z,
		children: e
	});
}
function $() {
	return l(Q, { children: l(p, {}) });
}
export { $ as default };

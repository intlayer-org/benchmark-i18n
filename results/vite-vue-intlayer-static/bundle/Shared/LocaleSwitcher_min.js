import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, openBlock as o, renderList as s, toDisplayString as c, unref as l, watch as u } from "vue";
import { useRoute as d, useRouter as f } from "vue-router";
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
}, y = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_ && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
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
}, b = (e, t) => y(e, {
	...v,
	isCookieEnabled: t
}), x = Symbol("intlayer"), { defaultLocale: S, locales: C } = p ?? {}, w = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = a(x);
	return {
		locale: t(() => r?.locale?.value ?? S),
		defaultLocale: S,
		availableLocales: C,
		setLocale: (t) => {
			if (!C?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), b(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, T = p.locales;
p.requiredLocales, p.defaultLocale;
var E = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, D = { class: "flex items-center gap-2" }, O = ["value"], k = ["value"], A = i({
	__name: "LocaleSwitcher",
	setup(i) {
		let a = d(), p = f(), { setLocale: m } = w(), h = t(() => a.params.locale || "en"), g = (e) => {
			m(e);
			let t = a.path.replace(/^\/[^/]+/, `/${e}`);
			p.push({
				path: t,
				query: a.query,
				hash: a.hash
			});
		};
		return u(h, (e) => {
			m(e);
		}, { immediate: !0 }), (t, i) => (o(), n("div", D, [r("select", {
			value: h.value,
			onChange: i[0] ||= (e) => g(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(o(!0), n(e, null, s(l(T), (e) => (o(), n("option", {
			key: e,
			value: e
		}, c(l(E)(e)), 9, k))), 128))], 40, O)]));
	}
});
export { A as default };

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
}, h = Symbol("intlayer"), g = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _ = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = g(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, v = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, b = (e = y) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!v) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, x = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !v && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: g(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _(r, e, i));
			} catch {}
		}
	}
};
b(y);
var S = (e, t) => x(e, {
	...y,
	isCookieEnabled: t
}), { defaultLocale: C, locales: w } = p ?? {}, T = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = a(h);
	return {
		locale: t(() => r?.locale?.value ?? C),
		defaultLocale: C,
		availableLocales: w,
		setLocale: (t) => {
			if (!w?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), S(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, E = p.locales;
p.requiredLocales, p.defaultLocale;
var D = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, O = { class: "flex items-center gap-2" }, k = ["value"], A = ["value"], j = i({
	__name: "LocaleSwitcher",
	setup(i) {
		let a = d(), p = f(), { setLocale: m } = T(), h = t(() => a.params.locale || "en"), g = (e) => {
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
		}, { immediate: !0 }), (t, i) => (o(), n("div", O, [r("select", {
			value: h.value,
			onChange: i[0] ||= (e) => g(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(o(!0), n(e, null, s(l(E), (e) => (o(), n("option", {
			key: e,
			value: e
		}, c(l(D)(e)), 9, A))), 128))], 40, k)]));
	}
});
export { j as default };

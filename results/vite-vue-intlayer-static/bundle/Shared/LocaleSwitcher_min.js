import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, openBlock as o, renderList as s, toDisplayString as c, watch as l } from "vue";
import { useRoute as u, useRouter as d } from "vue-router";
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
}, p = {
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
}, m = Symbol("intlayer"), h = (e) => {
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
}, y = (e = v) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, b = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_ && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
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
};
y(v);
var x = (e, t) => b(e, {
	...v,
	isCookieEnabled: t
}), S = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let { defaultLocale: r, locales: i } = f ?? {}, o = a(m);
	return {
		locale: t(() => o?.locale?.value ?? r),
		defaultLocale: r,
		availableLocales: i,
		setLocale: (t) => {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			o && o.setLocale(t), x(t, e ?? o?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, C = f.locales;
f.requiredLocales, f.defaultLocale;
var w = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, T = i({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = u(), i = d(), { setLocale: a } = S(), o = t(() => r.params.locale || "en"), s = (e) => {
			a(e);
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			i.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		l(o, (e) => {
			a(e);
		}, { immediate: !0 });
		let c = {
			route: r,
			router: i,
			setLocale: a,
			currentLocale: o,
			handleLocaleChange: s,
			get locales() {
				return C;
			},
			get getLocaleName() {
				return w;
			}
		};
		return Object.defineProperty(c, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), c;
	}
}), E = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, D = { class: "flex items-center gap-2" }, O = ["value"], k = ["value"];
function A(t, i, a, l, u, d) {
	return o(), n("div", D, [r("select", {
		value: l.currentLocale,
		onChange: i[0] ||= (e) => l.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(o(!0), n(e, null, s(l.locales, (e) => (o(), n("option", {
		key: e,
		value: e
	}, c(l.getLocaleName(e)), 9, k))), 128))], 40, O)]);
}
var j = E(T, [["render", A], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/LocaleSwitcher.vue"]]);
export { j as default };

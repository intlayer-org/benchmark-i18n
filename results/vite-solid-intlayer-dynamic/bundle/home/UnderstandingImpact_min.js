import { Dynamic as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, useContext as a } from "solid-js";
var o = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/de.json").then((e) => e.default),
	en: () => import("./en-CIeYQyEq.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/zh.json").then((e) => e.default)
}, s = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, c = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(c(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, l = {
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
}, d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? l.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
}, k = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => s({
		...n,
		value: n.children,
		children: n.children
	})
}, A = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? v : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => s({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : c(e)
	})
}, j = v, M = v, N = v, P = /* @__PURE__ */ new Map(), F = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if (P.has(n)) return P.get(n);
	let r = [
		y(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		b,
		x,
		w(e ?? l.defaultLocale),
		T,
		C,
		k,
		A,
		j,
		M,
		N
	];
	return P.set(n, r), r;
}, I = (e, t) => O(e, t, F(t)), L = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var R = (e = z) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!L) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, z = {
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
}, B = R(z), V = r({
	locale: () => B ?? l?.defaultLocale,
	setLocale: () => null
}), H = (e, t) => {
	let n = a(V) ?? {};
	return i(() => I(e, t ?? n?.locale?.()));
}, U = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
}, W = /* @__PURE__ */ new Map(), G = (e, t) => (W.has(e) || W.set(e, U(t)), W.get(e).read()), K = (e, t, n) => {
	let { locale: r } = a(V) ?? {}, i = l.defaultLocale, o = n ?? r?.() ?? i;
	return H(G(`${String(t)}.${o}`, e[o]?.()), o);
}, q = n("<section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"></h2><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li></li><li></li><li></li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li><strong class=text-foreground></strong></li><li><strong class=text-foreground></strong> </li><li><strong class=text-foreground></strong></li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">");
function J() {
	let e = K(o, "understanding-impact");
	return (() => {
		var n = q(), r = n.firstChild, i = r.nextSibling, a = i.firstChild, o = a.nextSibling, s = o.nextSibling.firstChild, c = s.nextSibling, l = c.nextSibling, u = i.nextSibling, d = u.firstChild, f = d.nextSibling, p = f.nextSibling.firstChild, m = p.firstChild, h = p.nextSibling, g = h.firstChild;
		g.nextSibling;
		var _ = h.nextSibling, v = _.firstChild, y = u.nextSibling.firstChild, b = y.nextSibling;
		return t(r, () => e().understandingTheImpact), t(a, () => e().whyASingleLargeJson), t(o, () => e().manyI18nLibrariesStoreTranslations), t(s, () => e().theJsonMustBeParsed), t(c, () => e().contextBasedArchitecturesCanCause), t(l, () => e().duringServerSideRenderingThe), t(d, () => e().theTradeOffsOfDynamic), t(f, () => e().splittingTranslationsIntoPerRoute), t(m, () => e().waterfallRequests), t(p, () => e().theAppMustFirstLoad, null), t(g, () => e().flashOfUntranslatedContentFouc), t(h, () => e().usersMayBrieflySeeTranslation, null), t(v, () => e().cacheInvalidation), t(_, () => e().updatingTranslationsRequiresCacheBusting, null), t(y, () => e().whatThisBenchmarkMeasures), t(b, () => e().thisTestAppProvidesA), n;
	})();
}
export { J as default };
var e = {
	key: "understanding-impact",
	content: {
		k: "Understanding the Impact",
		p: "Why a single large JSON can hurt performance",
		e: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		h: "The JSON must be parsed on every page load — blocking the main thread.",
		b: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		c: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		i: "The trade-offs of dynamic loading",
		f: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		n: "Waterfall requests:",
		g: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		d: "Flash of untranslated content (FOUC):",
		m: "users may briefly see translation keys or a fallback language before the chunk arrives.",
		a: "Cache invalidation:",
		l: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		o: "What this benchmark measures",
		j: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	}
};
export { e as default };

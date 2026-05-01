import { Dynamic as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createContext as a, createMemo as o, createUniqueId as s, useContext as c } from "solid-js";
var l = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((e) => e.default),
	en: () => import("./en-CRC5eXXY.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((e) => e.default)
}, u = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, d = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(d(n?.[e]));
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
}, f = {
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = "translation", h = "object", g = "array", _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => _(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: g,
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
					type: h,
					key: r
				}]
			}, i = _(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, v = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, y = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (v(e) && v(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : y(e[r], t[r]));
		return n;
	}
	return e;
}, b = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => y(e, t));
}, x = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, S = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? x : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: m,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return b(o, e, t);
	}
}, C = x, w = x, T = x, E = x, D = (e) => x, O = x, k = (e, t = !0) => [
	S(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	C,
	w,
	T,
	D(e ?? f.defaultLocale),
	O,
	E
], A = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), j = (e, t, n = k(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return A(e.content, r, n);
}, M = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => u({
		...n,
		value: n.children,
		children: n.children
	})
}, N = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? x : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => u({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : d(e)
	})
}, P = x, F = x, I = x, L = /* @__PURE__ */ new Map(), R = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		S(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		C,
		w,
		D(e ?? f.defaultLocale),
		O,
		E,
		M,
		N,
		P,
		F,
		I
	];
	return L.set(n, r), r;
}, z = (e, t) => j(e, t, R(t)), B = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var V = (e = H) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!B) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, H = {
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
}, U = V(H), W = a({
	locale: () => U ?? f?.defaultLocale,
	setLocale: () => null
}), G = (e, t) => {
	let n = c(W) ?? {};
	return o(() => z(e, t ?? n?.locale?.()));
}, K = (e) => {
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
}, q = /* @__PURE__ */ new Map(), J = (e, t) => (q.has(e) || q.set(e, K(t)), q.get(e).read()), Y = (e, t, n) => {
	let { locale: r } = c(W) ?? {}, i = f.defaultLocale, a = n ?? r?.() ?? i;
	return G(J(`${String(t)}.${a}`, e[a]?.()), a);
}, X = i("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function Z() {
	let e = Y(l, "preferences-section"), i = s();
	return (() => {
		var a = X(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling, E = T.nextSibling, D = E.nextSibling, O = D.nextSibling, k = O.nextSibling;
		return n(o, () => e().preferences), n(l, () => e().emailNotifications), n(u, () => e().receiveWeeklyBenchmarkReports), n(m, () => e().darkMode), n(h, () => e().useDarkColorScheme), r(_, "for", i), n(_, () => e().defaultLanguage), r(v, "id", i), n(y, () => e().englishEn), n(b, () => e().frenchFr), n(x, () => e().germanDe), n(S, () => e().spanishEs), n(C, () => e().japaneseJa), n(w, () => e().chineseSimplifiedZhCn), n(T, () => e().italianIt), n(E, () => e().portuguesePt), n(D, () => e().koreanKo), n(O, () => e().russianRu), n(k, () => e().arabicAr), t((t) => {
			var n = e().toggleNotifications.value, i = e().toggleDarkMode.value;
			return n !== t.e && r(d, "aria-label", t.e = n), i !== t.t && r(g, "aria-label", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), a;
	})();
}
export { Z as default };
var e = {
	key: "preferences-section",
	content: {
		m: "Preferences",
		e: "Email Notifications",
		n: "Receive weekly benchmark reports",
		r: "Toggle notifications",
		c: "Dark Mode",
		s: "Use dark color scheme",
		q: "Toggle dark mode",
		d: "Default Language",
		f: "English (en)",
		g: "French (fr)",
		h: "German (de)",
		p: "Spanish (es)",
		j: "Japanese (ja)",
		b: "Chinese Simplified (zh-CN)",
		i: "Italian (it)",
		l: "Portuguese (pt)",
		k: "Korean (ko)",
		o: "Russian (ru)",
		a: "Arabic (ar)"
	}
};
export { e as default };

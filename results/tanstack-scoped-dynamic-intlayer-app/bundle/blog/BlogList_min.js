import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as ee } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var d = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/de.json").then((e) => e.default),
	en: () => import("./en-OsqN71P2.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/zh.json").then((e) => e.default)
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
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : l(c, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, h = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = h(e);
				if (typeof r == "object" && r && "type" in r) {
					let e = r;
					return n(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return r;
			});
			return {
				...e,
				props: {
					...e.props,
					children: r
				}
			};
		} else if (t != null) {
			let n = h(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return n(t ?? "span", r, ...r.children);
}, te = "translation", g = "insertion", ne = "object", _ = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: _,
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
					type: ne,
					key: r
				}]
			}, i = v(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), y = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, b = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (y(e) && y(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : b(e[r], t[r]));
		return n;
	}
	return e;
}, ie = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => b(e, t));
}, ae = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", x = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", S = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, C = (e, t) => ae ? S : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ie(o, e, t);
	}
}, w = S, T = S, oe = x ? S : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = re(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, E = S, D = (e) => S, O = S, k = (e, t = !0) => [
	C(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	w,
	T,
	oe,
	D(e ?? f.defaultLocale),
	O,
	E
], A = (e, t, n = []) => v(e, {
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
}, M = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", N = /\{\{\s*(.*?)\s*\}\}/g, P = (e, t = {}) => {
	if (!Object.values(t).some(M)) return {
		isSimple: !0,
		parts: e.replace(N, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(N), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, F = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", I = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", R = F ? S : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, z = I ? S : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: "[[react-element]]",
		children: h(e)
	})
}, B = (t, r) => {
	let i = P(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, V = L ? S : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, H = S, U = S, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		C(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		w,
		T,
		D(e ?? f.defaultLocale),
		O,
		E,
		R,
		z,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, K = (e, t) => j(e, t, G(t)), q = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ce = (e) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, se(r, e, i));
			} catch {}
		}
	}
}, Y = {
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
}, X = ce(Y), ue = (e, t) => le(e, {
	...Y,
	isCookieEnabled: t
}), de = () => {
	let { locale: e } = i(Z) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, fe = ({ children: e }) => (de(), e), pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: X ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), me = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = f ?? {}, [u, d] = ee(e ?? X ?? t ?? c);
	a(() => {
		e && e !== u && d(e);
	}, [e]), a(() => {
		pe();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), ue(e, o);
		}
	}), m = q(u);
	return l(Z.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, Q = ({ children: e, ...t }) => u(me, {
	...t,
	children: [l(fe, {}), e]
}), he = (e, t) => {
	let { locale: n } = i(Z) ?? {};
	return o(() => K(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, ge = (e) => {
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
}, $ = /* @__PURE__ */ new Map(), _e = (e, t) => ($.has(e) || $.set(e, ge(t)), $.get(e).read()), ve = (e, t, n) => {
	let { locale: r } = i(Z) ?? {}, a = o(() => n ?? r ?? f.defaultLocale, [r, n]);
	return he(_e(`${String(t)}.${a}`, e[a]?.()), a);
};
function ye() {
	let e = ve(d, "blog-list");
	return l("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: e.g.value,
				date: e.m.value,
				excerpt: e.w.value,
				category: e.e.value
			},
			{
				title: e.k.value,
				date: e.n.value,
				excerpt: e.q.value,
				category: e.v.value
			},
			{
				title: e.u.value,
				date: e.j.value,
				excerpt: e.c.value,
				category: e.d.value
			},
			{
				title: e.p.value,
				date: e.i.value,
				excerpt: e.a.value,
				category: e.v.value
			},
			{
				title: e.t.value,
				date: e.h.value,
				excerpt: e.r.value,
				category: e.d.value
			},
			{
				title: e.f.value,
				date: e.l.value,
				excerpt: e.b.value,
				category: e.o.value
			}
		].map((t) => u("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				u("div", {
					className: "mb-3 flex items-center gap-3",
					children: [l("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}), l("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					})]
				}),
				l("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}),
				l("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}),
				l("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e.s
				})
			]
		}, t.title))
	});
}
function be({ children: e }) {
	return l(Q, {
		locale: "en",
		children: e
	});
}
function xe() {
	return l(be, { children: l(ye, {}) });
}
export { xe as default };
var e = {
	key: "blog-list",
	content: {
		g: "Comparing i18n Libraries in 2026: A Deep Dive",
		m: "March 15, 2026",
		w: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		k: "How to Reduce Your i18n Bundle by 60%",
		n: "March 8, 2026",
		q: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		u: "The State of Internationalization in React",
		j: "February 28, 2026",
		c: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		p: "Migrating from react-i18next to Lingui",
		i: "February 15, 2026",
		a: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		t: "Server Components and i18n: What Changes?",
		h: "February 1, 2026",
		r: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		f: "Benchmark Methodology: How We Test",
		l: "January 20, 2026",
		b: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		s: "Read More →",
		e: "Benchmark",
		v: "Tutorial",
		d: "Analysis",
		o: "Meta"
	}
};
export { e as default };

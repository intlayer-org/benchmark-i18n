import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region .intlayer/dynamic_dictionary/blog-list.mjs
var f = {
	de: () => import("./de-D0L2dHsA.js").then((e) => e.default),
	en: () => import("./en-BmH1m6dr.js").then((e) => e.default),
	es: () => import("./es-Dgw6ajRr.js").then((e) => e.default),
	fr: () => import("./fr-86Z0ysQ7.js").then((e) => e.default),
	it: () => import("./it-6QloE88c.js").then((e) => e.default),
	ja: () => import("./ja-D7-qpC8Q.js").then((e) => e.default),
	ko: () => import("./ko-DmpnHv7s.js").then((e) => e.default),
	pt: () => import("./pt-CxDXBrYX.js").then((e) => e.default),
	ru: () => import("./ru-DPhwUoA3.js").then((e) => e.default),
	zh: () => import("./zh-DStFmK51.js").then((e) => e.default)
}, p = {
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
}, m = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ u(l, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, g = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = g(e);
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
			let n = g(t);
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
}, te = "translation", _ = "insertion", ne = "object", re = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		n[r] = v(e[r], i);
	}
	return n;
}, ie = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), y = (e) => {
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
}, ae = (e, t, n) => {
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
}, x = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", S = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", C = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, w = (e, t) => x ? C : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return ae(a, e, t);
	}
}, T = C, E = C, oe = S ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ie(i, e);
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
}, D = C, O = (e) => C, k = C, A = (e, t = !0) => [
	w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	T,
	E,
	oe,
	O(e ?? p.defaultLocale),
	k,
	D
].filter(Boolean), j = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), M = (e, t, n = A(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return j(e.content, r, n);
}, N = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", P = /\{\{\s*(.*?)\s*\}\}/g, F = (e, t = {}) => {
	if (!Object.values(t).some(N)) return {
		isSimple: !0,
		parts: e.replace(P, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(P), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, I = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-55VIgmar.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-Cfd3z5Bm.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var z = I ? C : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, B = L ? C : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, V = (t, r) => {
	let i = F(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, H = R ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, U = C, W = C, G = (e, t = !0) => [
	w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	T,
	E,
	O(e ?? p.defaultLocale),
	k,
	D,
	z,
	B,
	H,
	U,
	W
].filter(Boolean), K = (e, t) => M(e, t, G(t)), q = (e, t = p?.locales, n = p?.defaultLocale) => {
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
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
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
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, fe = ({ children: e }) => (de(), e), pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: X ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), me = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [l, d] = ee(e ?? X ?? t ?? c);
	o(() => {
		e && e !== l && d(e);
	}, [e]), o(() => {
		pe();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), ue(e, a);
		}
	}), m = q(l);
	return /* @__PURE__ */ u(Z.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, Q = ({ children: e, ...t }) => /* @__PURE__ */ d(me, {
	...t,
	children: [/* @__PURE__ */ u(fe, {}), e]
}), he = (e, t) => {
	let { locale: n } = a(Z) ?? {};
	return s(() => K(e, t ?? n), [
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
	let { locale: r } = a(Z) ?? {}, i = s(() => n ?? r ?? p.defaultLocale, [r, n]);
	return he(_e(`${String(t)}.${i}`, e[i]?.()), i);
};
//#endregion
//#region src/components/pages/blog/BlogList.tsx
function ye() {
	let e = ve(f, "blog-list");
	return /* @__PURE__ */ u("div", {
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
		].map((t) => /* @__PURE__ */ d("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ d("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ u("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}), /* @__PURE__ */ u("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					})]
				}),
				/* @__PURE__ */ u("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}),
				/* @__PURE__ */ u("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}),
				/* @__PURE__ */ u("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e.s
				})
			]
		}, t.title))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function be({ children: e }) {
	return /* @__PURE__ */ u(Q, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/blog/BlogList.wrapper.tsx
function xe() {
	return /* @__PURE__ */ u(be, { children: /* @__PURE__ */ u(ye, {}) });
}
//#endregion
export { xe as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, l = t(void 0), u = () => r(l), d = (t, { components: r = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(r).filter(([, e]) => e).map(([e, t]) => [e, (e) => n(t, e)]));
	return /* @__PURE__ */ i(e, { children: c(t, new Proxy(a, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => n(t, e);
	} })) });
}, f = (e) => {
	let { html: t, userComponents: n } = e;
	return d(t, { components: {
		...u()?.components,
		...n
	} });
};
//#endregion
export { f as HTMLRendererPlugin };
import { createContext as e, useContext as t } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
var e = {
	key: "blog-list",
	content: {
		g: "i18n-Bibliotheken im Jahr 2026 im Vergleich: Eine tiefgehende Analyse",
		m: "15. März 2026",
		w: "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		k: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		n: "8. März 2026",
		q: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.",
		u: "Der Stand der Internationalisierung in React",
		j: "28. Februar 2026",
		c: "Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Vorlieben der Community.",
		p: "Migration von react-i18next zu Lingui",
		i: "15. Februar 2026",
		a: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		t: "Server Components und i18n: Was ändert sich?",
		h: "1. Februar 2026",
		r: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		f: "Benchmark-Methodik: Wie wir testen",
		l: "20. Januar 2026",
		b: "Ein transparenter Blick auf unsere Benchmark-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		s: "Weiterlesen →",
		e: "Benchmark",
		v: "Tutorial",
		d: "Analyse",
		o: "Meta"
	}
};
//#endregion
export { e as default };
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
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "Comparativa de bibliotecas i18n en 2026: un análisis profundo",
		m: "15 de marzo de 2026",
		w: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Estos son los resultados sorprendentes.",
		k: "Cómo reducir su bundle i18n en un 60 %",
		n: "8 de marzo de 2026",
		q: "Estrategias prácticas para optimizar los conjuntos de traducción, incluido el lazy loading, la división del código y las optimizaciones en el momento de la compilación.",
		u: "El estado de la internacionalización en React",
		j: "28 de febrero de 2026",
		c: "Una visión general del ecosistema actual de i18n en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		p: "Migración de react-i18next a Lingui",
		i: "15 de febrero de 2026",
		a: "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
		t: "Server Components e i18n: ¿Qué cambia?",
		h: "1 de febrero de 2026",
		r: "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		f: "Metodología del Benchmark: Cómo probamos",
		l: "20 de enero de 2026",
		b: "Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.",
		s: "Leer más →",
		e: "Benchmark",
		v: "Tutorial",
		d: "Análisis",
		o: "Meta"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "Comparer les bibliothèques i18n en 2026 : une analyse approfondie",
		m: "15 mars 2026",
		w: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
		k: "Comment réduire votre bundle i18n de 60 %",
		n: "8 mars 2026",
		q: "Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.",
		u: "L'état de l'internationalisation dans React",
		j: "28 février 2026",
		c: "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.",
		p: "Migrer de react-i18next vers Lingui",
		i: "15 février 2026",
		a: "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		t: "Server Components et i18n : qu'est-ce qui change ?",
		h: "1er février 2026",
		r: "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		f: "Méthodologie du Benchmark : comment nous testons",
		l: "20 janvier 2026",
		b: "Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.",
		s: "Lire la suite →",
		e: "Benchmark",
		v: "Tutoriel",
		d: "Analyse",
		o: "Méta"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "Confronto tra librerie i18n nel 2026: un’analisi approfondita",
		m: "15 marzo 2026",
		w: "Abbiamo testato 12 diverse librerie di internazionalizzazione in base a prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
		k: "Come ridurre il bundle i18n del 60%",
		n: "8 marzo 2026",
		q: "Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lento, suddivisione del codice e ottimizzazioni in fase di compilazione.",
		u: "Lo stato dell'internazionalizzazione in React",
		j: "28 febbraio 2026",
		c: "Una panoramica dell’attuale ecosistema i18n in React, con tendenze, pattern emergenti e preferenze della comunità.",
		p: "Migrazione da react-i18next a Lingui",
		i: "15 febbraio 2026",
		a: "Una guida dettagliata sulla migrazione di un’app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		t: "Server Components e i18n: cosa cambia?",
		h: "1 febbraio 2026",
		r: "I React Server Components introducono nuovi pattern per l’internazionalizzazione. Esploriamo implicazioni e best practice.",
		f: "Metodologia del benchmark: come testiamo",
		l: "20 gennaio 2026",
		b: "Uno sguardo trasparente alla nostra metodologia di benchmark, inclusi ambienti di test, metodi statistici e riproducibilità.",
		s: "Leggi di più →",
		e: "Benchmark",
		v: "Tutorial",
		d: "Analisi",
		o: "Meta"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "2026 年の i18n ライブラリの比較：詳細な分析",
		m: "2026年3月15日",
		w: "パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果が得られました。",
		k: "i18n バンドルを 60% 削減する方法",
		n: "2026年3月8日",
		q: "遅延読み込み、コード分割、コンパイル時の最適化などの翻訳バンドルを最適化するための実用的な戦略。",
		u: "React における国際化の現状",
		j: "2026年2月28日",
		c: "トレンド、新たなパターン、コミュニティの好みなど、React における現在の i18n エコシステムの概要。",
		p: "react-i18next から Lingui への移行",
		i: "2026年2月15日",
		a: "50,000 の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。",
		t: "サーバーコンポーネントと i18n：何が変わるのか？",
		h: "2026年2月1日",
		r: "React サーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを検討します。",
		f: "ベンチマークの方法論：テスト方法",
		l: "2026年1月20日",
		b: "テスト環境、統計手法、再現性など、当社のベンチマーク方法論を透過的に公開します。",
		s: "続きを読む →",
		e: "ベンチマーク",
		v: "チュートリアル",
		d: "分析",
		o: "メタ"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "2026년 i18n 라이브러리 비교: 심층 분석",
		m: "2026년 3월 15일",
		w: "성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 여기 놀라운 결과가 있습니다.",
		k: "i18n 번들을 60% 줄이는 방법",
		n: "2026년 3월 8일",
		q: "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함한 번역 번들 최적화를위한 실용적인 전략.",
		u: "React의 국제화 현황",
		j: "2026년 2월 28일",
		c: "React의 현재 i18n 생태계에 대한 개요로, 트렌드, 떠오르는 패턴 및 커뮤니티 선호도를 다룹니다.",
		p: "react-i18next에서 Lingui로 마이그레이션",
		i: "2026년 2월 15일",
		a: "50,000 개의 번역 키가있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드.",
		t: "서버 구성 요소 및 i18n: 무엇이 변합니까?",
		h: "2026년 2월 1일",
		r: "React Server Components는 국제화를위한 새로운 패턴을 도입합니다. 우리는 그 함의와 모범 사례를 탐구합니다.",
		f: "벤치 마크 방법론 : 테스트 방법",
		l: "2026년 1월 20일",
		b: "테스트 환경, 통계 방법 및 재현성을 포함한 벤치 마크 방법론에 대한 투명한 살펴보기.",
		s: "더 읽어보기 →",
		e: "벤치마크",
		v: "튜토리얼",
		d: "분석",
		o: "메타"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "Comparando bibliotecas i18n em 2026: um mergulho profundo",
		m: "15 de março de 2026",
		w: "Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		k: "Como reduzir seu bundle i18n em 60%",
		n: "8 de março de 2026",
		q: "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
		u: "O estado da internacionalização no React",
		j: "28 de fevereiro de 2026",
		c: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		p: "Migrando do react-i18next para o Lingui",
		i: "15 de fevereiro de 2026",
		a: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		t: "componentes de servidor e i18n: o que muda?",
		h: "1 de fevereiro de 2026",
		r: "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
		f: "Metodologia de Benchmark: como testamos",
		l: "20 de janeiro de 2026",
		b: "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estadísticos e reprodutibilidade.",
		s: "Leia mais →",
		e: "Benchmark",
		v: "Tutorial",
		d: "Análise",
		o: "Meta"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "Сравнение библиотек i18n в 2026 году: глубокое погружение",
		m: "15 марта 2026 года",
		w: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
		k: "Как уменьшить бандл i18n на 60%",
		n: "8 марта 2026 года",
		q: "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.",
		u: "Состояние интернационализации в React",
		j: "28 февраля 2026 года",
		c: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.",
		p: "Миграция с react-i18next на Lingui",
		i: "15 февраля 2026 года",
		a: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
		t: "Server Components и i18n: что меняется?",
		h: "1 февраля 2026 года",
		r: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
		f: "Методология бенчмарка: как мы тестируем",
		l: "20 января 2026 года",
		b: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
		s: "Читать далее →",
		e: "Бенчмарк",
		v: "Руководство",
		d: "Анализ",
		o: "Мета"
	}
};
//#endregion
export { e as default };
var e = {
	key: "blog-list",
	content: {
		g: "2026 年 i18n 库对比：深度分析",
		m: "2026年3月15日",
		w: "我们针对性能、包大小和 DX 测试了 12 种不同的国际化库。以下是令人惊讶的结果。",
		k: "如何将 i18n 包大小减少 60%",
		n: "2026年3月8日",
		q: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
		u: "React 国际化的现状",
		j: "2026年2月28日",
		c: "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
		p: "从 react-i18next 迁移到 Lingui",
		i: "2026年2月15日",
		a: "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
		t: "服务器组件和 i18n：有什么变化？",
		h: "2026年2月1日",
		r: "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
		f: "基准测试方法学：我们如何测试",
		l: "2026年1月20日",
		b: "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
		s: "阅读更多 →",
		e: "基准测试",
		v: "教程",
		d: "分析",
		o: "元数据"
	}
};
//#endregion
export { e as default };

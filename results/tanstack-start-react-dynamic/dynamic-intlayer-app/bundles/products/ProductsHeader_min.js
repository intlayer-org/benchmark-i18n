import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region .intlayer/dynamic_dictionary/products-header.mjs
var f = {
	de: () => import("./de-Dty6YXcM.js").then((e) => e.default),
	en: () => import("./en-Dx_3qWln.js").then((e) => e.default),
	es: () => import("./es-ydQqeWM5.js").then((e) => e.default),
	fr: () => import("./fr-BtrHmUBf.js").then((e) => e.default),
	it: () => import("./it-DeiaMPpZ.js").then((e) => e.default),
	ja: () => import("./ja-BNfL4LYs.js").then((e) => e.default),
	ko: () => import("./ko-YmdIuXGt.js").then((e) => e.default),
	pt: () => import("./pt-_FjPyqYt.js").then((e) => e.default),
	ru: () => import("./ru-DkoLWvXg.js").then((e) => e.default),
	zh: () => import("./zh-DRUOp7cR.js").then((e) => e.default)
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
}, oe = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", x = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", S = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, C = (e, t) => oe ? S : {
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
}, w = S, T = S, se = x ? S : {
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
}, E = S, D = (e) => S, O = S, k = (e, t = !0) => [
	C(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	w,
	T,
	se,
	D(e ?? p.defaultLocale),
	O,
	E
].filter(Boolean), A = (e, t, n = []) => v(e, {
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
}, F = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", I = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-55VIgmar.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-Cfd3z5Bm.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var R = F ? S : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, z = I ? S : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, B = (t, r) => {
	let i = P(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, V = L ? S : {
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
}, H = S, U = S, W = (e, t = !0) => [
	C(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	w,
	T,
	D(e ?? p.defaultLocale),
	O,
	E,
	R,
	z,
	V,
	H,
	U
].filter(Boolean), G = (e, t) => j(e, t, W(t)), K = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = (e) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!q) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ue = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !q && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ce(r, e, i));
			} catch {}
		}
	}
}, J = {
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
}, Y = le(J), de = (e, t) => ue(e, {
	...J,
	isCookieEnabled: t
}), fe = () => {
	let { locale: e } = a(X) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, pe = ({ children: e }) => (fe(), e), me = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, X = t({
	locale: Y ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), he = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [l, d] = ee(e ?? Y ?? t ?? c);
	o(() => {
		e && e !== l && d(e);
	}, [e]), o(() => {
		me();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), de(e, a);
		}
	}), m = K(l);
	return /* @__PURE__ */ u(X.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, Z = ({ children: e, ...t }) => /* @__PURE__ */ d(he, {
	...t,
	children: [/* @__PURE__ */ u(pe, {}), e]
}), ge = (e, t) => {
	let { locale: n } = a(X) ?? {};
	return s(() => G(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, _e = (e) => {
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
}, Q = /* @__PURE__ */ new Map(), ve = (e, t) => (Q.has(e) || Q.set(e, _e(t)), Q.get(e).read()), $ = (e, t, n) => {
	let { locale: r } = a(X) ?? {}, i = s(() => n ?? r ?? p.defaultLocale, [r, n]);
	return ge(ve(`${String(t)}.${i}`, e[i]?.()), i);
}, ye = {
	de: () => import("./de-BCZ4rYri.js").then((e) => e.default),
	en: () => import("./en-agmHR1La.js").then((e) => e.default),
	es: () => import("./es-CgV4_Cmg.js").then((e) => e.default),
	fr: () => import("./fr-BawRlf-Z.js").then((e) => e.default),
	it: () => import("./it-jF0oWbhB.js").then((e) => e.default),
	ja: () => import("./ja-BoIw9MtI.js").then((e) => e.default),
	ko: () => import("./ko-BuddURQA.js").then((e) => e.default),
	pt: () => import("./pt-DGVkgmVf.js").then((e) => e.default),
	ru: () => import("./ru-D0nve8s8.js").then((e) => e.default),
	zh: () => import("./zh-DwX40xrF.js").then((e) => e.default)
}, be = () => /* @__PURE__ */ u("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: $(ye, "mock-banner").a
});
//#endregion
//#region src/components/pages/products/ProductsHeader.tsx
function xe() {
	let e = $(f, "products-header");
	return /* @__PURE__ */ d(l, { children: [
		/* @__PURE__ */ u(be, {}),
		/* @__PURE__ */ u("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.a
		}),
		/* @__PURE__ */ u("p", {
			className: "mb-10 text-muted-foreground",
			children: e.b
		})
	] });
}
//#endregion
//#region scripts/Wrapper.tsx
function Se({ children: e }) {
	return /* @__PURE__ */ u(Z, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/products/ProductsHeader.wrapper.tsx
function Ce() {
	return /* @__PURE__ */ u(Se, { children: /* @__PURE__ */ u(xe, {}) });
}
//#endregion
export { Ce as default };
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
	key: "mock-banner",
	content: { a: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Tools und Dienste zur Optimierung Ihres Internationalisierungs-Worflows.",
		a: "Produkte"
	}
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Tools and services to streamline your internationalization workflow.",
		a: "Products"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización.",
		a: "Productos"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Outils et services pour rationaliser votre flux de travail d'internationalisation.",
		a: "Produits"
	}
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.",
		a: "Prodotti"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "国際化ワークフローを合理化するためのツールとサービス。",
		a: "製品"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。" }
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "국제화 워크플로우를 합리화하기 위한 도구 및 서비스입니다.",
		a: "제품"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio o serviço real." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Ferramentas e serviços para otimizar seu fluxo de trabalho de internacionalización.",
		a: "Produtos"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой." }
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "Инструменты и услуги для оптимизации рабочего процесса интернационализации.",
		a: "Продукты"
	}
};
//#endregion
export { e as default };
var e = {
	key: "products-header",
	content: {
		b: "简化国际化工作流程的工具和服务。",
		a: "产品"
	}
};
//#endregion
export { e as default };
var e = {
	key: "mock-banner",
	content: { a: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。" }
};
//#endregion
export { e as default };

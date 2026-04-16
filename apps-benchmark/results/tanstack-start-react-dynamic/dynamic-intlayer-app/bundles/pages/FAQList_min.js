import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as ee } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region .intlayer/dynamic_dictionary/faq-list.mjs
var d = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/de.json").then((e) => e.default),
	en: () => import("./en-DrRNPPNS.js").then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/zh.json").then((e) => e.default)
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
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
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
}, te = "translation", g = "insertion", ne = "object", re = "array", _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => _(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, {
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
		n[r] = _(e[r], i);
	}
	return n;
}, ie = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), v = (e) => {
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
		return b(a, e, t);
	}
}, T = C, E = C, ae = S ? C : {
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
	w(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	T,
	E,
	ae,
	O(e ?? f.defaultLocale),
	k,
	D
].filter(Boolean), j = (e, t, n = []) => _(e, {
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
}, I = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", z = I ? C : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, B = L ? C : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: "[[react-element]]",
		children: h(e)
	})
}, V = (t, r) => {
	let i = F(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, H = R ? C : {
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
	w(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	T,
	E,
	O(e ?? f.defaultLocale),
	k,
	D,
	z,
	B,
	H,
	U,
	W
].filter(Boolean), K = (e, t) => M(e, t, G(t)), q = (e, t = f?.locales, n = f?.defaultLocale) => {
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
var oe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, se = (e) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, oe(r, e, i));
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
}, X = se(Y), le = (e, t) => ce(e, {
	...Y,
	isCookieEnabled: t
}), ue = () => {
	let { locale: e } = i(Z) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, de = ({ children: e }) => (ue(), e), fe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: X ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), pe = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = f ?? {}, [u, d] = ee(e ?? X ?? t ?? c);
	a(() => {
		e && e !== u && d(e);
	}, [e]), a(() => {
		fe();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), le(e, o);
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
}, me = ({ children: e, ...t }) => u(pe, {
	...t,
	children: [l(de, {}), e]
}), Q = (e, t) => {
	let { locale: n } = i(Z) ?? {};
	return o(() => K(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, he = (e) => {
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
}, $ = /* @__PURE__ */ new Map(), ge = (e, t) => ($.has(e) || $.set(e, he(t)), $.get(e).read()), _e = (e, t, n) => {
	let { locale: r } = i(Z) ?? {}, a = o(() => n ?? r ?? f.defaultLocale, [r, n]);
	return Q(ge(`${String(t)}.${a}`, e[a]?.()), a);
};
//#endregion
//#region src/components/pages/faq/FAQList.tsx
function ve() {
	let e = _e(d, "faq-list");
	return l("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: e.m.value,
				a: e.f.value
			},
			{
				q: e.c.value,
				a: e.k.value
			},
			{
				q: e.n.value,
				a: e.l.value
			},
			{
				q: e.a.value,
				a: e.o.value
			},
			{
				q: e.e.value,
				a: e.j.value
			},
			{
				q: e.g.value,
				a: e.i.value
			},
			{
				q: e.b.value,
				a: e.p.value
			},
			{
				q: e.d.value,
				a: e.h.value
			}
		].map((e) => u("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [l("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), l("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function ye({ children: e }) {
	return l(me, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/faq/FAQList.wrapper.tsx
function be() {
	return l(ye, { children: l(ve, {}) });
}
//#endregion
export { be as default };
var e = {
	key: "faq-list",
	content: {
		m: "What is i18n Benchmark?",
		c: "How are benchmarks conducted?",
		k: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		n: "Which libraries are currently supported?",
		l: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		a: "Can I submit my own benchmarks?",
		o: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		e: "How often are benchmarks updated?",
		j: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		g: "Is the data reliable?",
		i: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		b: "Do you offer consulting services?",
		p: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		d: "How can I contribute?",
		h: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
		f: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
	}
};
//#endregion
export { e as default };

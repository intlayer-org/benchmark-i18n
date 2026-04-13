import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region \0rolldown_dynamic_import_helper.js
var f = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, p = ((e) => ({
	de: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/de.json": () => import("./de-B7F4HN3P.js"),
		"./json/blog/de.json": () => import("./de-Dz_zcHFU.js"),
		"./json/careers/de.json": () => import("./de-BnNJnvG_.js"),
		"./json/contact/de.json": () => import("./de-B8fDVTJf.js"),
		"./json/faq/de.json": () => import("./de-Bjg7Tu0I.js"),
		"./json/home/de.json": () => import("./de-JpOgXwxj.js"),
		"./json/pricing/de.json": () => import("./de-PHM6v_YO.js"),
		"./json/products/de.json": () => import("./de-CK7bAzvC.js"),
		"./json/settings/de.json": () => import("./de-BomtUmoG.js"),
		"./json/shared/de.json": () => import("./de-DMckDUF3.js"),
		"./json/team/de.json": () => import("./de-BSvxpnpr.js")
	}), `./json/${e}/de.json`, 4).then((e) => e.default),
	en: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/en.json": () => import("./en-Cga26VK1.js"),
		"./json/blog/en.json": () => import("./en-DXTvYSAr.js"),
		"./json/careers/en.json": () => import("./en-BnhTpXxu.js"),
		"./json/contact/en.json": () => import("./en-BXccaqQU.js"),
		"./json/faq/en.json": () => import("./en-9MHvEQOA.js"),
		"./json/home/en.json": () => import("./en-9TRzCveL.js"),
		"./json/pricing/en.json": () => import("./en-DGjhwXJI.js"),
		"./json/products/en.json": () => import("./en-Cx_J9Kto.js"),
		"./json/settings/en.json": () => import("./en-0WeihMjg.js"),
		"./json/shared/en.json": () => import("./en-CjNkzrEr.js"),
		"./json/team/en.json": () => import("./en-BnzT6tdC.js")
	}), `./json/${e}/en.json`, 4).then((e) => e.default),
	es: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/es.json": () => import("./es-ByUIY49x.js"),
		"./json/blog/es.json": () => import("./es-Cui1IkeD.js"),
		"./json/careers/es.json": () => import("./es-8TVgqMcR.js"),
		"./json/contact/es.json": () => import("./es-D0VbwaSV.js"),
		"./json/faq/es.json": () => import("./es-5XSYnBKw.js"),
		"./json/home/es.json": () => import("./es-B_udTqhQ.js"),
		"./json/pricing/es.json": () => import("./es-BQxzbmIG.js"),
		"./json/products/es.json": () => import("./es-CLymN-vi.js"),
		"./json/settings/es.json": () => import("./es-CsMX04GI.js"),
		"./json/shared/es.json": () => import("./es-CGBi6BFJ.js"),
		"./json/team/es.json": () => import("./es-C0eJVdWh.js")
	}), `./json/${e}/es.json`, 4).then((e) => e.default),
	fr: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/fr.json": () => import("./fr-Dfyth5tZ.js"),
		"./json/blog/fr.json": () => import("./fr-Z_6BtpaU.js"),
		"./json/careers/fr.json": () => import("./fr-BF1KNf0Q.js"),
		"./json/contact/fr.json": () => import("./fr-Cso9XL55.js"),
		"./json/faq/fr.json": () => import("./fr-CMQx5HHb.js"),
		"./json/home/fr.json": () => import("./fr-Dv8QA6j4.js"),
		"./json/pricing/fr.json": () => import("./fr-qXP9ENPS.js"),
		"./json/products/fr.json": () => import("./fr-CCN34rLh.js"),
		"./json/settings/fr.json": () => import("./fr-CypHMJ2k.js"),
		"./json/shared/fr.json": () => import("./fr-BgEejtS5.js"),
		"./json/team/fr.json": () => import("./fr-IHTmdd2U.js")
	}), `./json/${e}/fr.json`, 4).then((e) => e.default),
	it: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/it.json": () => import("./it-BU4D9zjB.js"),
		"./json/blog/it.json": () => import("./it-BZYp0VUx.js"),
		"./json/careers/it.json": () => import("./it-BPw5Qcch.js"),
		"./json/contact/it.json": () => import("./it-C2WKNC5g.js"),
		"./json/faq/it.json": () => import("./it-CpRg8B2F.js"),
		"./json/home/it.json": () => import("./it-CTef82fX.js"),
		"./json/pricing/it.json": () => import("./it-CreghajS.js"),
		"./json/products/it.json": () => import("./it-BBcRLMCJ.js"),
		"./json/settings/it.json": () => import("./it-CCvHW0KK.js"),
		"./json/shared/it.json": () => import("./it-BpPIRZP_.js"),
		"./json/team/it.json": () => import("./it-D7igT4bU.js")
	}), `./json/${e}/it.json`, 4).then((e) => e.default),
	ja: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/ja.json": () => import("./ja-Bb4TfcHt.js"),
		"./json/blog/ja.json": () => import("./ja-BnhIFgVv.js"),
		"./json/careers/ja.json": () => import("./ja-DFKN2-u5.js"),
		"./json/contact/ja.json": () => import("./ja-D_hh3O_o.js"),
		"./json/faq/ja.json": () => import("./ja-BqKzVZez.js"),
		"./json/home/ja.json": () => import("./ja-BWXsfqI_.js"),
		"./json/pricing/ja.json": () => import("./ja-Ur-GX9-g.js"),
		"./json/products/ja.json": () => import("./ja-WC2Va8VH.js"),
		"./json/settings/ja.json": () => import("./ja-UAP8-uR1.js"),
		"./json/shared/ja.json": () => import("./ja-CoZhPnSw.js"),
		"./json/team/ja.json": () => import("./ja-DPhRIsJq.js")
	}), `./json/${e}/ja.json`, 4).then((e) => e.default),
	ko: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/ko.json": () => import("./ko-BG07Pxlm.js"),
		"./json/blog/ko.json": () => import("./ko-B6T7Q2Vg.js"),
		"./json/careers/ko.json": () => import("./ko-D4KL0g2b.js"),
		"./json/contact/ko.json": () => import("./ko-pgPP2iwb.js"),
		"./json/faq/ko.json": () => import("./ko-T3XG5WMQ.js"),
		"./json/home/ko.json": () => import("./ko-Dfxem4PW.js"),
		"./json/pricing/ko.json": () => import("./ko-BBJi3R1P.js"),
		"./json/products/ko.json": () => import("./ko-6BmsejCN.js"),
		"./json/settings/ko.json": () => import("./ko-aI2dQq5s.js"),
		"./json/shared/ko.json": () => import("./ko-BBz2fgVg.js"),
		"./json/team/ko.json": () => import("./ko-BQCVtktO.js")
	}), `./json/${e}/ko.json`, 4).then((e) => e.default),
	pt: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/pt.json": () => import("./pt-JYcjq9Z9.js"),
		"./json/blog/pt.json": () => import("./pt-Cr7eLmqF.js"),
		"./json/careers/pt.json": () => import("./pt-B1M8JBYW.js"),
		"./json/contact/pt.json": () => import("./pt-BJrhqLe3.js"),
		"./json/faq/pt.json": () => import("./pt-B4-eYOgZ.js"),
		"./json/home/pt.json": () => import("./pt-BRYo7zmN.js"),
		"./json/pricing/pt.json": () => import("./pt-xEy4N1bi.js"),
		"./json/products/pt.json": () => import("./pt-DXpy-8oH.js"),
		"./json/settings/pt.json": () => import("./pt-DyCt_cOA.js"),
		"./json/shared/pt.json": () => import("./pt-C79gL5dn.js"),
		"./json/team/pt.json": () => import("./pt-Cv-8Oh45.js")
	}), `./json/${e}/pt.json`, 4).then((e) => e.default),
	ru: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/ru.json": () => import("./ru-DRB12nZR.js"),
		"./json/blog/ru.json": () => import("./ru-COXftbzo.js"),
		"./json/careers/ru.json": () => import("./ru-Bvn3ip6-.js"),
		"./json/contact/ru.json": () => import("./ru-DDLF-f4l.js"),
		"./json/faq/ru.json": () => import("./ru-By-w201a.js"),
		"./json/home/ru.json": () => import("./ru-CZntJU7C.js"),
		"./json/pricing/ru.json": () => import("./ru-CdcAiWne.js"),
		"./json/products/ru.json": () => import("./ru-_Sry78JY.js"),
		"./json/settings/ru.json": () => import("./ru-CGnJk5jz.js"),
		"./json/shared/ru.json": () => import("./ru-ThImh1qL.js"),
		"./json/team/ru.json": () => import("./ru-CVa3H48s.js")
	}), `./json/${e}/ru.json`, 4).then((e) => e.default),
	zh: () => f(/* @__PURE__ */ Object.assign({
		"./json/about/zh.json": () => import("./zh-Dh1nBXcf.js"),
		"./json/blog/zh.json": () => import("./zh-BxZQ5Mns.js"),
		"./json/careers/zh.json": () => import("./zh-BeObhw2u.js"),
		"./json/contact/zh.json": () => import("./zh-CjF3kD5y.js"),
		"./json/faq/zh.json": () => import("./zh-Bv1o2GKp.js"),
		"./json/home/zh.json": () => import("./zh-CApAbDHb.js"),
		"./json/pricing/zh.json": () => import("./zh-C98fN8NC.js"),
		"./json/products/zh.json": () => import("./zh-CyatYtIH.js"),
		"./json/settings/zh.json": () => import("./zh-DZfQw2QR.js"),
		"./json/shared/zh.json": () => import("./zh-BnC2UHAt.js"),
		"./json/team/zh.json": () => import("./zh-2vap2rCc.js")
	}), `./json/${e}/zh.json`, 4).then((e) => e.default)
}))("pricing"), m = {
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
}, h = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ u(l, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, _ = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = _(e);
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
			let n = _(t);
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
}, te = "translation", v = "insertion", ne = "object", re = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
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
		n[r] = y(e[r], i);
	}
	return n;
}, ie = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, S = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", C = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", w = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, T = (e, t) => S ? w : {
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
}, E = w, D = w, oe = C ? w : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
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
}, O = w, k = (e) => w, A = w, j = (e, t = !0) => [
	T(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	E,
	D,
	oe,
	k(e ?? m.defaultLocale),
	A,
	O
].filter(Boolean), M = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), N = (e, t, n = j(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return M(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-CtgvytJV.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-CAjFLd8d.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var B = L ? w : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => g({
		...n,
		value: n.children,
		children: n.children
	})
}, V = R ? w : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => g({
		...n,
		value: "[[react-element]]",
		children: _(e)
	})
}, H = (t, r) => {
	let i = I(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, U = z ? w : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = H(i, e);
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
}, W = w, G = w, K = (e, t = !0) => [
	T(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	E,
	D,
	k(e ?? m.defaultLocale),
	A,
	O,
	B,
	V,
	U,
	W,
	G
].filter(Boolean), q = (e, t) => N(e, t, K(t)), se = (e, t = m?.locales, n = m?.defaultLocale) => {
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
var ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = (e) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ue = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
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
}, X = le(Y), de = (e, t) => ue(e, {
	...Y,
	isCookieEnabled: t
}), fe = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, pe = ({ children: e }) => (fe(), e), me = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: X ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Q = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = m ?? {}, [l, d] = ee(e ?? X ?? t ?? c);
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
	}), p = se(l);
	return /* @__PURE__ */ u(Z.Provider, {
		value: {
			locale: p,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, he = ({ children: e, ...t }) => /* @__PURE__ */ d(Q, {
	...t,
	children: [/* @__PURE__ */ u(pe, {}), e]
}), ge = (e, t) => {
	let { locale: n } = a(Z) ?? {};
	return s(() => q(e, t ?? n), [
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
}, $ = /* @__PURE__ */ new Map(), ve = (e, t) => ($.has(e) || $.set(e, _e(t)), $.get(e).read()), ye = (e, t, n) => {
	let { locale: r } = a(Z) ?? {}, i = s(() => n ?? r ?? m.defaultLocale, [r, n]);
	return ge(ve(`${String(t)}.${i}`, e[i]?.()), i);
};
//#endregion
//#region src/components/pages/pricing/PricingTiers.tsx
function be() {
	let { b: e } = ye(p, "pricing");
	return /* @__PURE__ */ u("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: e.y,
				price: e.r,
				period: e.l,
				features: [
					e.c({ runs: "5" }),
					e.o({ libs: "3" }),
					e.e,
					e.w
				]
			},
			{
				name: e.v,
				price: e.s,
				period: e.p,
				features: [
					e.aa,
					e.a,
					e.t,
					e.u,
					e.d,
					e.n
				],
				highlighted: !0
			},
			{
				name: e.j,
				price: e.g,
				period: "",
				features: [
					e.k,
					e.q,
					e.x,
					e.i,
					e.h,
					e.b,
					e.z
				]
			}
		].map((t) => /* @__PURE__ */ d("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				/* @__PURE__ */ u("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				/* @__PURE__ */ d("div", {
					className: "my-4",
					children: [/* @__PURE__ */ u("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), /* @__PURE__ */ u("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				/* @__PURE__ */ u("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e, t) => /* @__PURE__ */ d("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ u("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, t))
				}),
				/* @__PURE__ */ u("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e.j ? e.f : e.m
				})
			]
		}, t.name.value))
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function xe({ children: e }) {
	return /* @__PURE__ */ u(he, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/pricing/PricingTiers.wrapper.tsx
function Se() {
	return /* @__PURE__ */ u(xe, { children: /* @__PURE__ */ u(be, {}) });
}
//#endregion
export { Se as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
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
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
//#region .intlayer/dynamic_dictionary/json/about/de.json
var e = "about", t = {
	a: "Über diesen Benchmark",
	n: "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.",
	b: "Auswirkungen auf die Bundle-Größe",
	l: "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit bei langsamen Netzwerken aus.",
	k: "Rendering-Overhead",
	f: "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzelnen Kontextanbieter injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.",
	g: "Hydratisierungs-Kosten",
	d: "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird.",
	h: "Effektivität des Lazy Loadings",
	p: "Ob die Aufteilung von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).",
	i: "Geschwindigkeit beim Sprachwechsel",
	e: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufs neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	o: "Was wir messen",
	q: "Warum dies existiert",
	c: "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.",
	j: "Methodik",
	m: "Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden React Profiler, um die Renderzeiten während des Sprachwechsels zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/de.json
var e = "contact", t = {
	a: {
		f: "Ihr Name",
		a: "Fehlerbericht",
		d: "Neue Benchmark-Idee",
		c: "Frage zur Methodik",
		b: "Beschreiben Sie Ihre Frage oder Idee...",
		e: "Nachricht senden"
	},
	b: {
		a: "Kontaktieren Sie uns",
		b: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/de.json
var e = "team", t = {
	b: {
		b: "Unser Team",
		a: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch eine gemeinsame Leidenschaft für großartige Entwicklertools vereint ist."
	},
	a: {
		o: "Sarah Chen",
		h: "Gründerin & Leitende Ingenieurin",
		g: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
		l: "Marcus Weber",
		n: "Performance-Ingenieur",
		p: "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
		a: "Aisha Patel",
		d: "Developer Advocate",
		m: "Leidenschaftlich für Developer Experience und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.",
		q: "Tomás Rodríguez",
		i: "Full-Stack-Entwickler",
		j: "Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.",
		r: "Yuki Tanaka",
		c: "Datenanalyst",
		f: "Sorgt für statistische Strenge in allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.",
		e: "Elena Kowalski",
		b: "Community-Manager",
		k: "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/de.json
var e = "faq", t = {
	b: {
		l: "Was ist i18n Benchmark ?",
		c: "Wie werden die Benchmarks durchgeführt ?",
		j: "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.",
		m: "Welche Bibliotheken werden derzeit unterstützt ?",
		k: "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.",
		a: "Kann ich meine eigenen Benchmarks einreichen ?",
		n: "Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.",
		e: "Wie oft werden die Benchmarks aktualisiert ?",
		i: "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.",
		f: "Sind die Daten zuverlässig ?",
		h: "Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmphasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.",
		b: "Bieten Sie Beratungsdienstleistungen an ?",
		o: "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen validieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Einschränkungen geben.",
		d: "Wie kann ich beitragen ?",
		g: "Es gibt viele Möglichkeiten, beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details."
	},
	a: {
		b: "Häufig gestellte Fragen",
		a: "Alles, was Sie über i18n Benchmark wissen müssen."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/de.json
var e = "careers", t = {
	a: {
		d: "Arbeiten von überall auf der Welt",
		a: "Wettbewerbsfähige Bezahlung",
		c: "Spitzenvergütung",
		b: "Open-Source-Zeit"
	},
	c: {
		r: "Senior Frontend-Entwickler",
		c: "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
		b: "Backend-Entwickler",
		f: "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
		s: "Technischer Redakteur",
		e: "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
		g: "DevRel-Ingenieur",
		q: "San Francisco / Remote",
		i: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
		o: "QA-Ingenieur",
		k: "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
		m: "Offene Stellen",
		a: "Jetzt bewerben",
		p: "Remote",
		l: "Vollzeit",
		n: "Teilzeit",
		j: "Engineering",
		h: "Dokumentation",
		d: "Community"
	},
	b: {
		b: "Karriere",
		a: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/de.json
var e = "settings", t = {
	a: {
		a: "API-Zugriff",
		b: "API-Schlüssel",
		d: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.",
		c: "Kopieren"
	},
	d: {
		b: "Änderungen speichern",
		a: "Abbrechen"
	},
	e: { a: "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen." },
	b: {
		j: "Präferenzen",
		e: "E-Mail-Benachrichtigungen",
		k: "Wöchentliche Benchmark-Berichte erhalten",
		n: "Benachrichtigungen umschalten",
		c: "Dunkelmodus",
		o: "Dunkles Farbschema verwenden",
		m: "Dunkelmodus umschalten",
		d: "Standardsprache",
		f: "Englisch (en)",
		g: "Französisch (fr)",
		h: "Deutsch (de)",
		l: "Spanisch (es)",
		i: "Japanisch (ja)",
		b: "Chinesisch vereinfacht (zh-CN)",
		a: "Arabisch (ar)"
	},
	c: {
		a: "Anzeigename",
		b: "E-Mail",
		c: "Profil"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/de.json
var e = "products", t = {
	a: {
		e: "Benchmark-CLI",
		m: "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
		f: "Benchmark-Cloud",
		c: "Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.",
		g: "Benchmark-Enterprise",
		l: "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
		i: "Kontaktieren Sie uns",
		k: "Migrations-Assistent",
		a: "KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.",
		n: "Übersetzungs-QA",
		d: "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
		h: "Bundle-Optimierer",
		b: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.",
		j: "Mehr erfahren"
	},
	b: { a: "Tools und Dienste zur Optimierung Ihres Internationalisierungs-Worflows." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/de.json
var e = "shared", t = {
	b: {
		f: "Startseite",
		g: "Methodik",
		h: "Testseiten",
		j: "Produkte",
		i: "Preise",
		l: "Team",
		a: "Blog",
		b: "Karriere",
		d: "FAQ",
		c: "Kontakt",
		k: "Einstellungen",
		e: "Zu GitHub gehen"
	},
	g: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	themeModeLightClick: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
	themeModeDarkClick: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	d: "Design: Auto",
	e: "Design: Dunkel",
	f: "Design: Hell",
	a: {
		g: "Ressourcen",
		c: "Kontakt",
		e: "GitHub",
		f: "Methodik",
		d: "Mitwirken",
		b: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
		a: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladezeit und App-Reaktivität."
	},
	c: {
		b: "Hoppla! Seite nicht gefunden",
		c: "Zurück zur Startseite",
		a: "Hydratisierungsdauer konnte nicht gemessen werden:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/de.json
var e = "blog", t = {
	b: {
		e: "i18n-Bibliotheken im Jahr 2026 im Vergleich: Eine tiefgehende Analyse",
		r: "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		i: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		k: "8. März 2026",
		m: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.",
		q: "Der Stand der Internationalisierung in React",
		h: "28. Februar 2026",
		c: "Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Vorlieben der Community.",
		l: "Migration von react-i18next zu Lingui",
		g: "15. Februar 2026",
		a: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		p: "Server Components und i18n: Was ändert sich?",
		f: "1. Februar 2026",
		n: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		d: "Benchmark-Methodik: Wie wir testen",
		j: "20. Januar 2026",
		b: "Ein transparenter Blick auf unsere Benchmark-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		o: "Weiterlesen →"
	},
	a: { a: "Einblicke, Tutorials und Analysen aus der i18n-Community." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/de.json
var e = "home", t = {
	c: {
		j: "Den Einfluss verstehen",
		m: "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann",
		e: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen konsumiert, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
		g: "Das JSON muss bei jedem Laden der Seite geparst werden – was den Haupt-Thread blockiert.",
		b: "Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich das Locale ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
		c: "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Nutzlast serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydratisiert werden muss.",
		h: "Die Kompromisse des dynamischen Ladens",
		f: "Das Aufteilen von Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Last drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
		k: "Wasserfall-Anfragen:",
		d: "Flash von unübersetztem Inhalt (FOUC):",
		a: "Cache-Invalidierung:",
		l: "Was dieser Benchmark misst",
		i: "Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken anhand von drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit für das Parsen und Rendern übersetzter Inhalte und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind."
	},
	a: {
		a: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladeleistung und Rendering-Reaktivität zu messen.",
		b: "Ergebnisse anzeigen"
	},
	d: {
		g: "Warum diese Metriken wichtig sind",
		a: "Bundle-Größe",
		f: "Das Bundle ist die Datenmenge, die an jeden Benutzer weltweit gesendet wird. Ein größeres Bundle bedeutet längere Downloadzeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.",
		e: "Rendering & Hydratisierung",
		b: "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.",
		c: "Dynamisches Laden",
		d: "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich."
	},
	b: {
		d: "Beispielergebnisse",
		a: "Bundle-Größe",
		c: "Abfragezeit",
		b: "Lazy Loading"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/de.json
var e = "pricing", t = {
	a: {
		b: "Einfache, transparente Preisgestaltung",
		a: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "für immer",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} Benchmark-Läufe/Tag"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} Bibliotheken"
		},
		e: "Community-Support",
		w: "Öffentliche Ergebnisse",
		v: "Pro",
		s: "29 $",
		p: "/Monat",
		aa: "Unbegrenzte Läufe",
		a: "Alle Bibliotheken",
		t: "Prioritäts-Support",
		u: "Private Ergebnisse",
		d: "CI-Integration",
		n: "Historische Daten",
		j: "Enterprise",
		g: "Benutzerdefiniert",
		k: "Alles in Pro",
		q: "On-Premise-Option",
		x: "SSO & SAML",
		i: "Dedizierter Account-Manager",
		h: "Benutzerdefinierte SLAs",
		b: "Audit-Logs",
		z: "Schulungssitzungen",
		f: "Vertrieb kontaktieren",
		m: "Erste Schritte"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/en.json
var e = "settings", t = {
	a: {
		a: "API Access",
		b: "API Key",
		d: "Use this key to access the benchmarking API programmatically.",
		c: "Copy"
	},
	d: {
		b: "Save Changes",
		a: "Cancel"
	},
	e: { a: "Manage your account preferences and configuration." },
	b: {
		j: "Preferences",
		e: "Email Notifications",
		k: "Receive weekly benchmark reports",
		n: "Toggle notifications",
		c: "Dark Mode",
		o: "Use dark color scheme",
		m: "Toggle dark mode",
		d: "Default Language",
		f: "English (en)",
		g: "French (fr)",
		h: "German (de)",
		l: "Spanish (es)",
		i: "Japanese (ja)",
		b: "Chinese Simplified (zh-CN)",
		a: "Arabic (ar)"
	},
	c: {
		a: "Display Name",
		b: "Email",
		c: "Profile"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/en.json
var e = "faq", t = {
	b: {
		l: "What is i18n Benchmark?",
		c: "How are benchmarks conducted?",
		j: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		m: "Which libraries are currently supported?",
		k: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		a: "Can I submit my own benchmarks?",
		n: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		e: "How often are benchmarks updated?",
		i: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		f: "Is the data reliable?",
		h: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		b: "Do you offer consulting services?",
		o: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		d: "How can I contribute?",
		g: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	},
	a: {
		b: "Frequently Asked Questions",
		a: "Everything you need to know about i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/en.json
var e = "home", t = {
	c: {
		j: "Understanding the Impact",
		m: "Why a single large JSON can hurt performance",
		e: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		g: "The JSON must be parsed on every page load — blocking the main thread.",
		b: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		c: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		h: "The trade-offs of dynamic loading",
		f: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		k: "Waterfall requests:",
		d: "Flash of untranslated content (FOUC):",
		a: "Cache invalidation:",
		l: "What this benchmark measures",
		i: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	a: {
		a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		b: "View Results"
	},
	d: {
		g: "Why These Metrics Matter",
		a: "Bundle Size",
		f: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		e: "Rendering & Hydration",
		b: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		c: "Dynamic Loading",
		d: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	b: {
		d: "Sample Results",
		a: "Bundle Size",
		c: "Lookup Time",
		b: "Lazy Loading"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/en.json
var e = "contact", t = {
	a: {
		f: "Your name",
		a: "Bug Report",
		d: "New Benchmark Idea",
		c: "Methodology Question",
		b: "Describe your question or idea...",
		e: "Send Message"
	},
	b: {
		a: "Get in Touch",
		b: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/en.json
var e = "careers", t = {
	a: {
		d: "Work from anywhere in the world",
		a: "Competitive pay",
		c: "Top-of-market compensation",
		b: "Open source time"
	},
	c: {
		r: "Senior Frontend Engineer",
		c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		b: "Backend Engineer",
		f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		s: "Technical Writer",
		e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		g: "DevRel Engineer",
		q: "San Francisco / Remote",
		i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		o: "QA Engineer",
		k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		m: "Open Positions",
		a: "Apply Now",
		p: "Remote",
		l: "Full-time",
		n: "Part-time",
		j: "Engineering",
		h: "Documentation",
		d: "Community"
	},
	b: {
		b: "Careers",
		a: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/en.json
var e = "team", t = {
	b: {
		b: "Our Team",
		a: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	a: {
		o: "Sarah Chen",
		h: "Founder & Lead Engineer",
		g: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
		l: "Marcus Weber",
		n: "Performance Engineer",
		p: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
		a: "Aisha Patel",
		d: "Developer Advocate",
		m: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
		q: "Tomás Rodríguez",
		i: "Full-Stack Developer",
		j: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
		r: "Yuki Tanaka",
		c: "Data Analyst",
		f: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
		e: "Elena Kowalski",
		b: "Community Manager",
		k: "Manages community contributions, partnerships, and events. Background in open source governance."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/en.json
var e = "about", t = {
	a: "About This Benchmark",
	n: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
	b: "Bundle size impact",
	l: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	k: "Rendering overhead",
	f: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	g: "Hydration cost",
	d: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	h: "Lazy loading effectiveness",
	p: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	i: "Locale switch speed",
	e: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	o: "What We Measure",
	q: "Why This Exists",
	c: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	j: "Methodology",
	m: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/en.json
var e = "shared", t = {
	b: {
		f: "Home",
		g: "Methodology",
		h: "Mock Pages",
		j: "Products",
		i: "Pricing",
		l: "Team",
		a: "Blog",
		b: "Careers",
		d: "FAQ",
		c: "Contact",
		k: "Settings",
		e: "Go to GitHub"
	},
	g: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	d: "Theme: Auto",
	e: "Theme: Dark",
	f: "Theme: Light",
	a: {
		g: "Resources",
		c: "Contact",
		e: "GitHub",
		f: "Methodology",
		d: "Contributing",
		b: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	c: {
		b: "Oops! Page not found",
		c: "Return to Home",
		a: "Could not measure hydration duration:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/en.json
var e = "products", t = {
	a: {
		e: "Benchmark CLI",
		m: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		f: "Benchmark Cloud",
		c: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		g: "Benchmark Enterprise",
		l: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		i: "Contact Us",
		k: "Migration Assistant",
		a: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		n: "Translation QA",
		d: "Automated quality checks for missing translations, pluralization issues, and context errors.",
		h: "Bundle Optimizer",
		b: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		j: "Learn More"
	},
	b: { a: "Tools and services to streamline your internationalization workflow." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/en.json
var e = "pricing", t = {
	a: {
		b: "Simple, Transparent Pricing",
		a: "Choose the plan that fits your team. No hidden fees."
	},
	b: {
		y: "Starter",
		r: "$0",
		l: "forever",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} benchmark runs/day"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} libraries"
		},
		e: "Community support",
		w: "Public results",
		v: "Pro",
		s: "$29",
		p: "/month",
		aa: "Unlimited runs",
		a: "All libraries",
		t: "Priority support",
		u: "Private results",
		d: "CI integration",
		n: "Historical data",
		j: "Enterprise",
		g: "Custom",
		k: "Everything in Pro",
		q: "On-premise option",
		x: "SSO & SAML",
		i: "Dedicated account manager",
		h: "Custom SLAs",
		b: "Audit logs",
		z: "Training sessions",
		f: "Contact Sales",
		m: "Get Started"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/en.json
var e = "blog", t = {
	b: {
		e: "Comparing i18n Libraries in 2026: A Deep Dive",
		r: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		i: "How to Reduce Your i18n Bundle by 60%",
		k: "March 8, 2026",
		m: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		q: "The State of Internationalization in React",
		h: "February 28, 2026",
		c: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		l: "Migrating from react-i18next to Lingui",
		g: "February 15, 2026",
		a: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		p: "Server Components and i18n: What Changes?",
		f: "February 1, 2026",
		n: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		d: "Benchmark Methodology: How We Test",
		j: "January 20, 2026",
		b: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		o: "Read More →"
	},
	a: { a: "Insights, tutorials, and analysis from the i18n community." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/es.json
var e = "faq", t = {
	b: {
		l: "¿Qué es i18n Benchmark ?",
		c: "¿Cómo se realizan los benchmarks ?",
		j: "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.",
		m: "¿Qué bibliotecas son compatibles actualmente ?",
		k: "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.",
		a: "¿Puedo enviar mis propios benchmarks ?",
		n: "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará las presentaciones que califiquen.",
		e: "¿Con qué frecuencia se actualizan los benchmarks ?",
		i: "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.",
		f: "¿Son fiables los datos ?",
		h: "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos sin procesar se publican junto con nuestro análisis para una total transparencia.",
		b: "¿Ofrecen servicios de consultoría ?",
		o: "¡Sí! Nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y restricciones.",
		d: "¿Cómo puedo contribuir ?",
		g: "Hay muchas formas de contribuir: enviando benchmarks, mejorando la documentación, informando errores, sugiriendo nuevas métricas o patrocinando el proyecto. Visite nuestro repositorio de GitHub para más detalles."
	},
	a: {
		b: "Preguntas Frecuentes",
		a: "Todo lo que necesitas saber sobre i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/es.json
var e = "careers", t = {
	a: {
		d: "Trabaja desde cualquier parte del mundo",
		a: "Salario competitivo",
		c: "Compensación superior al mercado",
		b: "Tiempo dedicado al código abierto"
	},
	c: {
		r: "Ingeniero Frontend Principal",
		c: "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
		b: "Ingeniero Backend",
		f: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
		s: "Redactor Técnico",
		e: "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
		g: "Ingeniero DevRel",
		q: "San Francisco / Remoto",
		i: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
		o: "Ingeniero QA",
		k: "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
		m: "Puestos Abiertos",
		a: "Postular Ahora",
		p: "Remoto",
		l: "Tiempo completo",
		n: "Tiempo parcial",
		j: "Ingeniería",
		h: "Documentación",
		d: "Comunidad"
	},
	b: {
		b: "Carreras",
		a: "Únete a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo remoto primero que valora el impacto, la transparencia y el aprendizaje continuo."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/es.json
var e = "pricing", t = {
	a: {
		b: "Precios Simples y Transparentes",
		a: "Elija el plan que se adapte a su equipo. Sin cargos ocultos."
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "para siempre",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} ejecuciones de benchmark/día"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} bibliotecas"
		},
		e: "Soporte de la comunidad",
		w: "Resultados públicos",
		v: "Pro",
		s: "29 $",
		p: "/mes",
		aa: "Ejecuciones ilimitadas",
		a: "Todas las bibliotecas",
		t: "Soporte prioritario",
		u: "Résultats privés",
		d: "Integración de CI",
		n: "Datos históricos",
		j: "Personalizado",
		g: "Custom",
		k: "Todo en Pro",
		q: "Opción local",
		x: "SSO y SAML",
		i: "Gerente de cuenta dedicado",
		h: "SLA personalizados",
		b: "Registros de auditoría",
		z: "Sesiones de formación",
		f: "Contactar a Ventas",
		m: "Empezar"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/es.json
var e = "home", t = {
	c: {
		j: "Comprendiendo el impacto",
		m: "Por qué un solo JSON grande puede perjudicar el rendimiento",
		e: "Muchas bibliotecas de i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
		g: "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.",
		b: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque se notifica a cada consumidor incluso si sus claves específicas no cambiaron.",
		c: "Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.",
		h: "Las compensaciones de la carga dinámica",
		f: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga inicial. Pero introduce nuevos desafíos:",
		k: "Solicitudes en cascada:",
		d: "Flash de contenido no traducido (FOUC):",
		a: "Invalidación de caché:",
		l: "Qué mide este benchmark",
		i: "Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar las bibliotecas de i18n en tres ejes: el peso que añaden a su bundle de JavaScript, el tiempo dedicado a analizar y renderizar contenido traducido, y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
	},
	a: {
		a: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
		b: "Ver Resultados"
	},
	d: {
		g: "Por qué estas métricas son importantes",
		a: "Tamaño del Bundle",
		f: "El bundle es la información que se envía a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas de i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de ejecución, además de los propios archivos de traducción.",
		e: "Renderizado e Hidratación",
		b: "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la fijación de objetos de traducción masivos agregan latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Tiempo de Interacción (TTI).",
		c: "Carga Dinámica",
		d: "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida presenta sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial."
	},
	b: {
		d: "Resultados de muestra",
		a: "Tamaño del bundle",
		c: "Tiempo de consulta",
		b: "Carga diferida"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/es.json
var e = "about", t = {
	a: "Acerca de este Benchmark",
	n: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.",
	b: "Impacto en el tamaño del bundle",
	l: "Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
	k: "Sobrecarga de renderizado",
	f: "¿Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React? Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.",
	g: "Costo de hidratación",
	d: "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
	h: "Efectividad del lazy loading",
	p: "Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	i: "Velocidad de cambio de idioma",
	e: "Qué tan rápido puede cambiar la aplicación de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	o: "Lo que medimos",
	q: "¿Por Qué Existe Este Proyecto?",
	c: "Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿El lazy loading realmente ayuda o solo traslada el costo? Este benchmark responde a esas preguntas con datos reales.",
	j: "Metodología",
	m: "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y usamos React Profiler para capturar los tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/es.json
var e = "team", t = {
	b: {
		b: "Nuestro Equipo",
		a: "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas de desarrollo."
	},
	a: {
		o: "Sarah Chen",
		h: "Fundadora e Ingeniera Principal",
		g: "Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.",
		l: "Marcus Weber",
		n: "Ingeniero de Rendimiento",
		p: "Especialista en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.",
		a: "Aisha Patel",
		d: "Evangelista de Desarrolladores",
		m: "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
		q: "Tomás Rodríguez",
		i: "Desarrollador Full-Stack",
		j: "Mantiene la infraestructura de benchmarking y el pipeline CI/CD. Colaborador de código abierto en Lingui.",
		r: "Yuki Tanaka",
		c: "Analista de Datos",
		f: "Asegura el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.",
		e: "Elena Kowalski",
		b: "Gerente de Comunidad",
		k: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/es.json
var e = "shared", t = {
	b: {
		f: "Inicio",
		g: "Metodología",
		h: "Páginas de Prueba",
		j: "Productos",
		i: "Precios",
		l: "Equipo",
		a: "Blog",
		b: "Carreras",
		d: "FAQ",
		c: "Contacto",
		k: "Ajustes",
		e: "Ir a GitHub"
	},
	g: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
	themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	d: "Tema: Auto",
	e: "Tema: Oscuro",
	f: "Tema: Claro",
	a: {
		g: "Recursos",
		c: "Contacto",
		e: "GitHub",
		f: "Metodología",
		d: "Contribuir",
		b: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
		a: "Una aplicación de prueba de código abierto para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación."
	},
	c: {
		b: "¡Vaya! Página no encontrada",
		c: "Volver al Inicio",
		a: "No se pudo medir la duración de la hidratación:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/es.json
var e = "products", t = {
	a: {
		e: "CLI de Benchmark",
		m: "Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
		f: "Benchmark Cloud",
		c: "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.",
		g: "Benchmark para Empresas",
		l: "Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
		i: "Contáctenos",
		k: "Asistente de Migración",
		a: "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.",
		n: "QA de Traducción",
		d: "Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.",
		h: "Optimizador de Bundles",
		b: "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
		j: "Más información"
	},
	b: { a: "Herramientas y servicios para simplificar su flujo de trabajo de internacionalización." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/es.json
var e = "settings", t = {
	a: {
		a: "Acceso API",
		b: "Clave API",
		d: "Utilice esta clave para acceder a la API de benchmarking mediante programación.",
		c: "Copiar"
	},
	d: {
		b: "Guardar cambios",
		a: "Cancelar"
	},
	e: { a: "Gestione sus preferencias de cuenta y configuración." },
	b: {
		j: "Preferencias",
		e: "Notificaciones por correo electrónico",
		k: "Recibir informes semanales de benchmark",
		n: "Alternar notificaciones",
		c: "Modo oscuro",
		o: "Usar esquema de colores oscuros",
		m: "Alternar modo oscuro",
		d: "Idioma predeterminado",
		f: "Inglés (en)",
		g: "Francés (fr)",
		h: "Alemán (de)",
		l: "Español (es)",
		i: "Japonés (ja)",
		b: "Chino simplificado (zh-CN)",
		a: "Árabe (ar)"
	},
	c: {
		a: "Nombre de pantalla",
		b: "Correo electrónico",
		c: "Perfil"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/es.json
var e = "blog", t = {
	b: {
		e: "Comparativa de bibliotecas i18n en 2026: un análisis profundo",
		r: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Estos son los resultados sorprendentes.",
		i: "Cómo reducir su bundle i18n en un 60 %",
		k: "8 de marzo de 2026",
		m: "Estrategias prácticas para optimizar los conjuntos de traducción, incluido el lazy loading, la división del código y las optimizaciones en el momento de la compilación.",
		q: "El estado de la internacionalización en React",
		h: "28 de febrero de 2026",
		c: "Una visión general del ecosistema actual de i18n en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		l: "Migración de react-i18next a Lingui",
		g: "15 de febrero de 2026",
		a: "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
		p: "Server Components e i18n: ¿Qué cambia?",
		f: "1 de febrero de 2026",
		n: "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		d: "Metodología del Benchmark: Cómo probamos",
		j: "20 de enero de 2026",
		b: "Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.",
		o: "Leer más →"
	},
	a: { a: "Información, tutoriales y análisis de la comunidad i18n." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/es.json
var e = "contact", t = {
	a: {
		f: "Tu nombre",
		a: "Informe de Errores",
		d: "Nueva Idea de Benchmark",
		c: "Pregunta sobre Metodología",
		b: "Describe tu pregunta o idea...",
		e: "Enviar Mensaje"
	},
	b: {
		a: "Póngase en contacto",
		b: "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/fr.json
var e = "careers", t = {
	a: {
		d: "Travailler de n'importe où dans le monde",
		a: "Rémunération compétitive",
		c: "Rémunération au-dessus du marché",
		b: "Temps alloué à l'open source"
	},
	c: {
		r: "Ingénieur Frontend Senior",
		c: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
		b: "Ingénieur Backend",
		f: "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
		s: "Rédacteur Technique",
		e: "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
		g: "Ingénieur DevRel",
		q: "San Francisco / Télétravail",
		i: "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
		o: "Ingénieur QA",
		k: "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
		m: "Postes Ouverts",
		a: "Postuler Maintenant",
		p: "Télétravail",
		l: "Temps plein",
		n: "Temps partiel",
		j: "Ingénierie",
		h: "Documentation",
		d: "Communauté"
	},
	b: {
		b: "Carrières",
		a: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe télétravail d'abord qui valorise l'impact, la transparence et l'apprentissage continu."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/fr.json
var e = "shared", t = {
	b: {
		f: "Accueil",
		g: "Méthodologie",
		h: "Pages de Test",
		j: "Produits",
		i: "Tarification",
		l: "Équipe",
		a: "Blog",
		b: "Carrières",
		d: "FAQ",
		c: "Contact",
		k: "Paramètres",
		e: "Aller sur GitHub"
	},
	g: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
	themeModeLightClick: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
	themeModeDarkClick: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
	d: "Thème : Auto",
	e: "Thème : Sombre",
	f: "Thème : Clair",
	a: {
		g: "Ressources",
		c: "Contact",
		e: "GitHub",
		f: "Méthodologie",
		d: "Contribuer",
		b: "i18n Benchmark — Projet open-source. Construit avec React, Vite & TanStack Router.",
		a: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
	},
	c: {
		b: "Oups ! Page non trouvée",
		c: "Retour à l'Accueil",
		a: "Impossible de mesurer la durée d'hydratation :"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/fr.json
var e = "products", t = {
	a: {
		e: "CLI de Benchmark",
		m: "Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
		f: "Benchmark Cloud",
		c: "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
		g: "Benchmark Entreprise",
		l: "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
		i: "Contactez-nous",
		k: "Assistant de Migration",
		a: "Outil propulsé par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d'arrêt.",
		n: "QA de Traduction",
		d: "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
		h: "Optimiseur de Bundle",
		b: "Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.",
		j: "En savoir plus"
	},
	b: { a: "Outils et services pour rationaliser votre flux de travail d'internationalisation." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/fr.json
var e = "faq", t = {
	b: {
		l: "Qu'est-ce que i18n Benchmark ?",
		c: "Comment les benchmarks sont-ils menés ?",
		j: "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.",
		m: "Quelles bibliothèques sont actuellement supportées ?",
		k: "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.",
		a: "Puis-je soumettre mes propres benchmarks ?",
		n: "Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.",
		e: "À quelle fréquence les benchmarks sont-ils mis à jour ?",
		i: "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle immédiat de re-benchmarking.",
		f: "Les données sont-elles fiables ?",
		h: "Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées aux côtés de notre analyse pour une transparence totale.",
		b: "Proposez-vous des services de conseil ?",
		o: "Oui, notre plan Entreprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation spécifique, votre échelle et vos contraintes.",
		d: "Comment puis-je contribuer ?",
		g: "Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails."
	},
	a: {
		b: "Foire Aux Questions",
		a: "Tout ce que vous devez savoir sur i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/fr.json
var e = "contact", t = {
	a: {
		f: "Votre nom",
		a: "Rapport de Bug",
		d: "Nouvelle Idée de Benchmark",
		c: "Question sur la Méthodologie",
		b: "Décrivez votre question ou idée...",
		e: "Envoyer le Message"
	},
	b: {
		a: "Contactez-nous",
		b: "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/fr.json
var e = "settings", t = {
	a: {
		a: "Accès API",
		b: "Clé API",
		d: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
		c: "Copier"
	},
	d: {
		b: "Enregistrer les modifications",
		a: "Annuler"
	},
	e: { a: "Gérez vos préférences de compte et votre configuration." },
	b: {
		j: "Préférences",
		e: "Notifications par email",
		k: "Recevoir des rapports hebdomadaires de benchmark",
		n: "Basculer les notifications",
		c: "Mode sombre",
		o: "Utiliser le schéma de couleurs sombres",
		m: "Basculer le mode sombre",
		d: "Langue par défaut",
		f: "Anglais (en)",
		g: "Français (fr)",
		h: "Allemand (de)",
		l: "Espagnol (es)",
		i: "Japonais (ja)",
		b: "Chinois simplifié (zh-CN)",
		a: "Arabe (ar)"
	},
	c: {
		a: "Nom d'affichage",
		b: "Email",
		c: "Profil"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/fr.json
var e = "about", t = {
	a: "À propos de ce Benchmark",
	n: "Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
	b: "Impact sur la taille du bundle",
	l: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
	k: "Surcharge de rendu",
	f: "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.",
	g: "Coût d'hydratation",
	d: "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	h: "Efficacité du lazy loading",
	p: "Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
	i: "Vitesse de changement de langue",
	e: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	o: "Ce que nous mesurons",
	q: "Pourquoi ce Projet Existe",
	c: "Choisir une bibliothèque i18n est une décision d'architecture aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Quel est son impact sur le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement asynchrone aide-t-il vraiment ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
	j: "Méthodologie",
	m: "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons le React Profiler pour capturer les temps de rendu lors des changements de locale. Tous les tests s'exécutent en CI sur du matériel constant pour garantir des résultats reproductibles."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/fr.json
var e = "home", t = {
	c: {
		j: "Comprendre l'impact",
		m: "Pourquoi un seul grand JSON peut nuire aux performances",
		e: "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
		g: "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
		b: "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
		c: "Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
		h: "Les compromis du chargement dynamique",
		f: "Diviser les traductions en morceaux par route ou par espace de noms peut réduire considérablement la charge initiale. Mais cela introduit de nouveaux défis :",
		k: "Requêtes en cascade :",
		d: "Flash de contenu non traduit (FOUC) :",
		a: "Invalidation du cache :",
		l: "Ce que ce benchmark mesure",
		i: "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de division de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables."
	},
	a: {
		a: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
		b: "Voir les Résultats"
	},
	d: {
		g: "Pourquoi ces Métriques Comptent",
		a: "Taille du Bundle",
		f: "Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
		e: "Rendu & Hydratation",
		b: "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
		c: "Chargement Dynamique",
		d: "Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
	},
	b: {
		d: "Résultats d'échantillon",
		a: "Taille du bundle",
		c: "Temps de consultation",
		b: "Chargement différé"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/fr.json
var e = "team", t = {
	b: {
		b: "Notre Équipe",
		a: "Découvrez les personnes derrière i18n Benchmark. Une équipe diverse unie par une passion partagée pour les excellents outils de développement."
	},
	a: {
		o: "Sarah Chen",
		h: "Fondatrice & Ingénieure Principale",
		g: "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
		l: "Marcus Weber",
		n: "Ingénieur Performance",
		p: "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.",
		a: "Aisha Patel",
		d: "Developer Advocate",
		m: "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
		q: "Tomás Rodríguez",
		i: "Développeur Full-Stack",
		j: "Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
		r: "Yuki Tanaka",
		c: "Analyste de Données",
		f: "Assure la rigueur statistique dans tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
		e: "Elena Kowalski",
		b: "Gestionnaire de Communauté",
		k: "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/fr.json
var e = "blog", t = {
	b: {
		e: "Comparer les bibliothèques i18n en 2026 : une analyse approfondie",
		r: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
		i: "Comment réduire votre bundle i18n de 60 %",
		k: "8 mars 2026",
		m: "Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.",
		q: "L'état de l'internationalisation dans React",
		h: "28 février 2026",
		c: "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.",
		l: "Migrer de react-i18next vers Lingui",
		g: "15 février 2026",
		a: "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		p: "Server Components et i18n : qu'est-ce qui change ?",
		f: "1er février 2026",
		n: "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		d: "Méthodologie du Benchmark : comment nous testons",
		j: "20 janvier 2026",
		b: "Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.",
		o: "Lire la suite →"
	},
	a: { a: "Aperçus, tutoriels et analyses de la communauté i18n." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/fr.json
var e = "pricing", t = {
	a: {
		b: "Tarification Simple et Transparente",
		a: "Choisissez le plan qui convient à votre équipe. Pas de frais cachés."
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "pour toujours",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} lancements de benchmark/jour"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} bibliothèques"
		},
		e: "Support de la communauté",
		w: "Résultats publics",
		v: "Pro",
		s: "29 $",
		p: "/mois",
		aa: "Lancements illimités",
		a: "Toutes les bibliothèques",
		t: "Support prioritaire",
		u: "Résultats privés",
		d: "Intégration CI",
		n: "Données historiques",
		j: "Entreprise",
		g: "Custom",
		k: "Tout dans Pro",
		q: "Option sur site",
		x: "SSO & SAML",
		i: "Gestionnaire de compte dédié",
		h: "SLA personnalisés",
		b: "Journaux d'audit",
		z: "Sessions de formation",
		f: "Contacter les ventes",
		m: "Commencer"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/it.json
var e = "products", t = {
	a: {
		e: "CLI di benchmark",
		m: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
		f: "Benchmark cloud",
		c: "Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.",
		g: "Benchmark enterprise",
		l: "Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.",
		i: "Contattaci",
		k: "Assistente alla migrazione",
		a: "Strumento basato sull’intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d’interruzione.",
		n: "QA di traduzione",
		d: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
		h: "Ottimizzatore bundle",
		b: "Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.",
		j: "Scopri di più"
	},
	b: { a: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/it.json
var e = "careers", t = {
	a: {
		d: "Lavora da qualsiasi parte del mondo",
		a: "Retribuzione competitiva",
		c: "Compensi ai vertici del mercato",
		b: "Tempo per l'open source"
	},
	c: {
		r: "Ingegnere frontend senior",
		c: "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
		b: "Ingegnere backend",
		f: "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
		s: "Redattore tecnico",
		e: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
		g: "Ingegnere DevRel",
		q: "San Francisco / Remoto",
		i: "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
		o: "Ingegnere QA",
		k: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
		m: "Posizioni aperte",
		a: "Candidati ora",
		p: "Remoto",
		l: "Tempo pieno",
		n: "Part-time",
		j: "Ingegneria",
		h: "Documentazione",
		d: "Comunità"
	},
	b: {
		b: "Carriere",
		a: "Unisciti alla nostra missione per migliorare l’ecosistema di internazionalizzazione. Siamo un team remote-first che valorizza l’impatto, la trasparenza e l’apprendimento continuo."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/it.json
var e = "about", t = {
	a: "Informazioni su questo benchmark",
	n: "Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.",
	b: "Impatto sulla dimensione del bundle",
	l: "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sui tempi di download su reti lente.",
	k: "Overhead di rendering",
	f: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che inseriscono traduzioni tramite un singolo provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
	g: "Costo di idratazione",
	d: "Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	h: "Efficacia del caricamento lento",
	p: "Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).",
	i: "Velocità di cambio lingua",
	e: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il nuovo rendering dei componenti e l'aggiornamento del DOM.",
	o: "Cosa misuriamo",
	q: "Perché esiste questo progetto",
	c: "La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lento aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
	j: "Metodologia",
	m: "La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/it.json
var e = "blog", t = {
	b: {
		e: "Confronto tra librerie i18n nel 2026: un’analisi approfondita",
		r: "Abbiamo testato 12 diverse librerie di internazionalizzazione in base a prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
		i: "Come ridurre il bundle i18n del 60%",
		k: "8 marzo 2026",
		m: "Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lento, suddivisione del codice e ottimizzazioni in fase di compilazione.",
		q: "Lo stato dell'internazionalizzazione in React",
		h: "28 febbraio 2026",
		c: "Una panoramica dell’attuale ecosistema i18n in React, con tendenze, pattern emergenti e preferenze della comunità.",
		l: "Migrazione da react-i18next a Lingui",
		g: "15 febbraio 2026",
		a: "Una guida dettagliata sulla migrazione di un’app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		p: "Server Components e i18n: cosa cambia?",
		f: "1 febbraio 2026",
		n: "I React Server Components introducono nuovi pattern per l’internazionalizzazione. Esploriamo implicazioni e best practice.",
		d: "Metodologia del benchmark: come testiamo",
		j: "20 gennaio 2026",
		b: "Uno sguardo trasparente alla nostra metodologia di benchmark, inclusi ambienti di test, metodi statistici e riproducibilità.",
		o: "Leggi di più →"
	},
	a: { a: "Approfondimenti, tutorial e analisi dalla comunità i18n." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/it.json
var e = "shared", t = {
	b: {
		f: "Home",
		g: "Metodologia",
		h: "Pagine di test",
		j: "Prodotti",
		i: "Prezzi",
		l: "Team",
		a: "Blog",
		b: "Carriere",
		d: "FAQ",
		c: "Contatti",
		k: "Impostazioni",
		e: "Vai su GitHub"
	},
	g: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
	themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	d: "Tema: Auto",
	e: "Tema: Scuro",
	f: "Tema: Chiaro",
	a: {
		g: "Risorse",
		c: "Contatti",
		e: "GitHub",
		f: "Metodologia",
		d: "Contribuire",
		b: "i18n Benchmark — Progetto open source. Costruito con React, Vite e TanStack Router.",
		a: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
	},
	c: {
		b: "Ops! Pagina non trovata",
		c: "Torna alla Home",
		a: "Impossibile misurare la durata dell'idratazione:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/it.json
var e = "contact", t = {
	a: {
		f: "Il tuo nome",
		a: "Segnalazione bug",
		d: "Nuova idea di benchmark",
		c: "Domanda sulla metodologia",
		b: "Descrivi la tua domanda o idea...",
		e: "Invia messaggio"
	},
	b: {
		a: "Mettiti in contatto",
		b: "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/it.json
var e = "settings", t = {
	a: {
		a: "Accesso API",
		b: "Chiave API",
		d: "Usa questa chiave per accedere alle API di benchmarking in modo programmatico.",
		c: "Copia"
	},
	d: {
		b: "Salva modifiche",
		a: "Annulla"
	},
	e: { a: "Gestisci le preferenze del tuo account e la configurazione." },
	b: {
		j: "Preferenze",
		e: "Notifiche via email",
		k: "Ricevi rapporti settimanali sui benchmark",
		n: "Attiva/disattiva notifiche",
		c: "Modalità scura",
		o: "Usa lo schema colori scuro",
		m: "Attiva/disattiva modalità scura",
		d: "Lingua predefinita",
		f: "Inglese (en)",
		g: "Francese (fr)",
		h: "Tedesco (de)",
		l: "Spagnolo (es)",
		i: "Giapponese (ja)",
		b: "Cinese semplificato (zh-CN)",
		a: "Arabo (ar)"
	},
	c: {
		a: "Nome visualizzato",
		b: "Email",
		c: "Profilo"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/it.json
var e = "home", t = {
	c: {
		j: "Comprendere l'impatto",
		m: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
		e: "Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
		g: "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
		b: "Le architetture basate sul contesto possono causare rendering a cascata quando la lingua cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
		c: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.",
		h: "I compromessi del caricamento dinamico",
		f: "Suddividere le traduzioni in blocchi per percorso o spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
		k: "Richieste a cascata:",
		d: "Flash di contenuto non tradotto (FOUC):",
		a: "Invalidazione della cache:",
		l: "Cosa misura questo benchmark",
		i: "Questa app di test fornisce un ambiente controllato (10 pagine con contenuti realistici) per confrontare le librerie i18n su tre assi: il peso che aggiungono al bundle JavaScript, il tempo speso per l'analisi e il rendering dei contenuti tradotti e l'efficacia delle loro strategie di suddivisione del codice e caricamento lento. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili."
	},
	a: {
		a: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
		b: "Visualizza i risultati"
	},
	d: {
		g: "Perché queste metriche sono importanti",
		a: "Dimensioni del bundle",
		f: "Il bundle rappresenta i dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
		e: "Rendering e idratazione",
		b: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
		c: "Caricamento dinamico",
		d: "Il caricamento preventivo di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromis: richieste a cascata (waterfall), flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale."
	},
	b: {
		d: "Risultati del campione",
		a: "Dimensioni del bundle",
		c: "Tempo di ricerca",
		b: "Caricamento lento"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/it.json
var e = "faq", t = {
	b: {
		l: "Cos'è i18n Benchmark ?",
		c: "Come vengono condotti i benchmark ?",
		j: "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.",
		m: "Quali librerie sono attualmente supportate ?",
		k: "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
		a: "Posso inviare i miei benchmark ?",
		n: "Sì! I contributi ai benchmark della comunità sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei.",
		e: "Ogni quanto vengono aggiornati i benchmark ?",
		i: "Eseguiamo nuovamente tutti i benchmark settimanalmente con le ultime versioni stabili di ogni libreria. Le versioni principali attivano un ciclo di benchmarking immediato.",
		f: "I dati sono affidabili ?",
		h: "Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.",
		b: "Offrite servizi di consulenza ?",
		o: "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire consigli su misura in base al tuo caso d’uso specifico, alle dimensioni e ai vincoli.",
		d: "Come posso contribuire ?",
		g: "Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli."
	},
	a: {
		b: "Domande frequenti",
		a: "Tutto quello che c'è da sapere su i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/it.json
var e = "pricing", t = {
	a: {
		b: "Prezzi semplici e trasparenti",
		a: "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "per sempre",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} esecuzioni di benchmark/giorno"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} librerie"
		},
		e: "Supporto della comunità",
		w: "Risultati pubblici",
		v: "Pro",
		s: "29 $",
		p: "/mese",
		aa: "Esecuzioni illimitate",
		a: "Tutte le librerie",
		t: "Supporto prioritario",
		u: "Risultati privati",
		d: "Integrazione CI",
		n: "Dati storici",
		j: "Enterprise",
		g: "Custom",
		k: "Tutto in Pro",
		q: "Opzione on-premise",
		x: "SSO e SAML",
		i: "Account manager dedicato",
		h: "SLA personalizzati",
		b: "Log di audit",
		z: "Sessioni di formazione",
		f: "Contatta le vendite",
		m: "Inizia ora"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/it.json
var e = "team", t = {
	b: {
		b: "Il nostro team",
		a: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori."
	},
	a: {
		o: "Sarah Chen",
		h: "Fondatrice e lead engineer",
		g: "Ex ingegnere di Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.",
		l: "Marcus Weber",
		n: "Ingegnere delle prestazioni",
		p: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.",
		a: "Aisha Patel",
		d: "Developer advocate",
		m: "Appassionata di developer experience e formazione. Relatrice a React Conf, JSConf e i18nNext.",
		q: "Tomás Rodríguez",
		i: "Sviluppatore Full-Stack",
		j: "Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.",
		r: "Yuki Tanaka",
		c: "Analista di dati",
		f: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata presso il MIT.",
		e: "Elena Kowalski",
		b: "Community manager",
		k: "Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/ja.json
var e = "home", t = {
	c: {
		j: "影響を理解する",
		m: "単一の大規模な JSON がパフォーマンスを損なう理由",
		e: "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは次のことを意味します：",
		g: "JSON はページを読み込むたびに解析する必要があり、メインスレッドをブロックします。",
		b: "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、ロケールが変更されたときにカスケード再レンダリングが発生する可能性があります。",
		c: "サーバーサイドレンダリング中、完全な辞書が HTML ペ이로드にシリアル化され、ダウンロードおよびハイドレーションが必要なドキュメントサイズが増加します。",
		h: "動的読み込みのトレードオフ",
		f: "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新しい課題をもたらします：",
		k: "ウォーターフォールリクエスト：",
		d: "翻訳前のコンテンツのフラッシュ (FOUC)：",
		a: "キャッシュの無効化：",
		l: "このベンチマークが測定するもの",
		i: "このテストアプリは、制御された環境（現実的なコンテンツを含む 10 ページ）を提供し、JavaScript バンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、コード分割と遅延読み込み戦略の有効性の 3 つの軸で i18n ライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
	},
	a: {
		a: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、およびレンダリングの反応性に与える実際の影を測定するために設計されたテストアプリケーション。",
		b: "結果を表示"
	},
	d: {
		g: "これらの指標が重要な理由",
		a: "バンドルサイズ",
		f: "バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。これは、多くの地域で一般的な低速な 3G 接続では特に顕著です。i18n ライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体が含まれます。",
		e: "レンダリングとハイドレーション",
		b: "大きな JSON 辞書を各コンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングをトリガーする可能性があります。SSR ハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。",
		c: "ダイナミックローディング",
		d: "すべての翻訳を事前読み込みすると、初期ペイロードが過負荷になります。ダイナミック（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。"
	},
	b: {
		d: "サンプル結果",
		a: "バンドルサイズ",
		c: "検索時間",
		b: "遅延読み込み"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/ja.json
var e = "about", t = {
	a: "このベンチマークについて",
	n: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまな i18n ライブラリを同一条件下で統合および測定できる、現実的なマルチページ React アプリを提供することです。",
	b: "バンドルサイズへの影響",
	l: "i18n ライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加の JavaScript バイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	k: "レンダリングのオーバーヘッド",
	f: "ライブラリが React のレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を挿入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。",
	g: "ハイドレーションのコスト",
	d: "SSR 中、翻訳データは HTML にシリアル化されます。大規模な辞書は HTML ペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。",
	h: "遅延読み込みの有効性",
	p: "ルートや名前空間ごとに翻訳を分割することが実際に初期読み込みを削減するかどうか、そしてどのようなトレードオフを導入するか（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）。",
	i: "ロケール切り替え速度",
	e: "ランタイム時にアプリが言語をどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOM の更新が含まれます。",
	o: "測定対象",
	q: "なぜこれが存在するのか",
	c: "i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API の使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。",
	j: "方法論",
	m: "同じ 10 ページのアプリがライブラリごとに 1 回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer を使用）、読み込みメトリクスの Lighthouse 監査を実行し、React Profiler を使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を保証するために、すべてのテストは一貫したハードウェア上の CI で実行されます。"
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/ja.json
var e = "blog", t = {
	b: {
		e: "2026 年の i18n ライブラリの比較：詳細な分析",
		r: "パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果が得られました。",
		i: "i18n バンドルを 60% 削減する方法",
		k: "2026年3月8日",
		m: "遅延読み込み、コード分割、コンパイル時の最適化などの翻訳バンドルを最適化するための実用的な戦略。",
		q: "React における国際化の現状",
		h: "2026年2月28日",
		c: "トレンド、新たなパターン、コミュニティの好みなど、React における現在の i18n エコシステムの概要。",
		l: "react-i18next から Lingui への移行",
		g: "2026年2月15日",
		a: "50,000 の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。",
		p: "サーバーコンポーネントと i18n：何が変わるのか？",
		f: "2026年2月1日",
		n: "React サーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを検討します。",
		d: "ベンチマークの方法論：テスト方法",
		j: "2026年1月20日",
		b: "テスト環境、統計手法、再現性など、当社のベンチマーク方法論を透過的に公開します。",
		o: "続きを読む →"
	},
	a: { a: "i18n コミュニティからの洞察、チュートリアル、分析。" }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/ja.json
var e = "faq", t = {
	b: {
		l: "i18n Benchmark とは何ですか？",
		c: "ベンチマークはどのように行われますか？",
		j: "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。",
		m: "現在サポートされているライブラリは何ですか？",
		k: "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgee をサポートしています。",
		a: "独自のベンチマークを送信できますか？",
		n: "はい！コミュニティからのベンチマークの送信を歓迎します。当社のリポジトリをフォークし、コントリビューションガイドに従ってベンチマークを追加し、プルリクエストを送信してください。当社のチームが、資格のある送信内容をレビューしてマージします。",
		e: "ベンチマークはどのくらいの頻度で更新されますか？",
		i: "各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが実行されます。",
		f: "データは信頼できますか？",
		h: "ウォームアップ実行、外れ値の検出、信頼区間などの厳密な統計的手法に従います。すべての生データは、完全な透明性のために当社の分析とともに公開されます。",
		b: "コンサルティングサービスを提供していますか？",
		o: "はい、当社のエンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。",
		d: "どのように貢献できますか？",
		g: "貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。"
	},
	a: {
		b: "よくある質問",
		a: "i18n Benchmark について知っておくべきことのすべて。"
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/ja.json
var e = "shared", t = {
	b: {
		f: "ホーム",
		g: "方法論",
		h: "モックページ",
		j: "製品",
		i: "価格",
		l: "チーム",
		a: "ブログ",
		b: "採用情報",
		d: "よくある質問",
		c: "お問い合わせ",
		k: "設定",
		e: "GitHubへ移動"
	},
	g: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
	themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
	themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
	d: "テーマ：自動",
	e: "テーマ：ダーク",
	f: "テーマ：ライト",
	a: {
		g: "リソース",
		c: "連絡先",
		e: "GitHub",
		f: "方法論",
		d: "貢献",
		b: "i18n Benchmark — オープンソースプロジェクト。React, Vite & TanStack Router で構築。",
		a: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソース의 테스트 애플리케이션。"
	},
	c: {
		b: "おっと！ページが見つかりません",
		c: "ホームに戻る",
		a: "ハイドレーション時間を測定できませんでした："
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/ja.json
var e = "careers", t = {
	a: {
		d: "世界中どこからでも仕事ができます",
		a: "競争力のある報酬",
		c: "市場最高水准の報酬",
		b: "オープンソースの時間"
	},
	c: {
		r: "シニアフロントエンドエンジニア",
		c: "React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。",
		b: "バックエンドエンジニア",
		f: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。",
		s: "テクニカルライター",
		e: "ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。",
		g: "DevRel エンジニア",
		q: "サンフランシスコ / リモート",
		i: "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。",
		o: "QA エンジニア",
		k: "厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
		m: "募集職種",
		a: "今すぐ応募",
		p: "リモート",
		l: "正社員",
		n: "アルバイト",
		j: "エンジニアリング",
		h: "ドキュメント",
		d: "コミュニティ"
	},
	b: {
		b: "採用情報",
		a: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、継続的な学習を重視するリモートファーストのチームです。"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/ja.json
var e = "team", t = {
	b: {
		b: "私たちのチーム",
		a: "i18n Benchmark を支える人々を紹介します。素晴らしい開発者ツールへの情熱を共有する多様なチームです。"
	},
	a: {
		o: "サラ・チェン (Sarah Chen)",
		h: "創設者兼リードエンジニア",
		g: "元 Google エンジニア。大規模な国際化システムの構築に 10 年の経験があります。",
		l: "マーカス・ウェーバー (Marcus Weber)",
		n: "パフォーマンスエンジニア",
		p: "JavaScript のパフォーマンス最適化とベンチマーク方法論を専門としています。以前は Vercel に在籍していました。",
		a: "アイシャ・パテル (Aisha Patel)",
		d: "デベロッパーアドボケイト",
		m: "デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNext のスピーカー。",
		q: "トマス・ロドリゲス (Tomás Rodríguez)",
		i: "フルスタックデベロッパー",
		j: "ベンチマークインフラストラクチャと CI/CD パイプラインを保守しています。Lingui へのオープンソースコントリビューターです。",
		r: "田中由紀 (Yuki Tanaka)",
		c: "データアナリスト",
		f: "すべてのベンチマーク結果において統計的な厳密さを確保します。MIT で応用統計学の博士号を取得。",
		e: "エレナ・コワルスキー (Elena Kowalski)",
		b: "コミュニティマネージャー",
		k: "コミュニティへの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経験があります。"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/ja.json
var e = "contact", t = {
	a: {
		f: "お名前",
		a: "バグ報告",
		d: "新しいベンチマークのアイデア",
		c: "方法論に関する質問",
		b: "質問やアイデアを説明してください...",
		e: "メッセージを送信"
	},
	b: {
		a: "お問い合わせ",
		b: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/ja.json
var e = "settings", t = {
	a: {
		a: "APIアクセス",
		b: "APIキー",
		d: "このキーを使用して、プログラムからベンチマークAPIにアクセスします。",
		c: "コピー"
	},
	d: {
		b: "変更を保存",
		a: "キャンセル"
	},
	e: { a: "アカウントの優先設定と構成を管理します。" },
	b: {
		j: "設定",
		e: "メール通知",
		k: "毎週のベンチマークレポートを受け取る",
		n: "通知の切り替え",
		c: "ダークモード",
		o: "ダークカラーの配色を使用する",
		m: "ダークモードの切り替え",
		d: "既定の言語",
		f: "英語 (en)",
		g: "フランス語 (fr)",
		h: "ドイツ語 (de)",
		l: "スペイン語 (es)",
		i: "日本語 (ja)",
		b: "中国語 簡体字 (zh-CN)",
		a: "アラビア語 (ar)"
	},
	c: {
		a: "表示名",
		b: "メールアドレス",
		c: "プロファイル"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/ja.json
var e = "pricing", t = {
	a: {
		b: "シンプルで透明性の高い料金プラン",
		a: "チームに合ったプランをお選びください。隠れた費用はありません。"
	},
	b: {
		y: "スターター",
		r: "0 $",
		l: "永久",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "毎日 {runs} 回のベンチマーク実行"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} 個のライブラリ"
		},
		e: "コミュニティサポート",
		w: "公開結果",
		v: "プロ",
		s: "29 $",
		p: "/月",
		aa: "無限の実行",
		a: "すべてのライブラリ",
		t: "優先サポート",
		u: "プライベート結果",
		d: "CI 統合",
		n: "履歴データ",
		j: "エンタープライズ",
		g: "カスタム価格",
		k: "Pro のすべて",
		q: "オンプレミスオプション",
		x: "SSO & SAML",
		i: "専任のアカウントマネージャー",
		h: "カスタム SLA",
		b: "監査ログ",
		z: "トレーニングセッション",
		f: "営業に問い合わせる",
		m: "使ってみる"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/ja.json
var e = "products", t = {
	a: {
		e: "ベンチマーク CLI",
		m: "ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。",
		f: "ベンチマーククラウド",
		c: "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。",
		g: "ベンチマークエンタープライズ",
		l: "SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。",
		i: "お問い合わせ",
		k: "移行アシスタント",
		a: "i18n ライブラリ間のコードベースをダウンタイムなしで移行するのに役立つ AI 搭載ツール。",
		n: "翻訳 QA",
		d: "翻訳の欠落、複数形の問題、コンテキストエラーに対する自動品質チェック。",
		h: "バンドルオプティマイザー",
		b: "生産向けに i18n バンドルをツリーシェイキングとコード分割で分析・最適化します。",
		j: "詳細はこちら"
	},
	b: { a: "国際化ワークフローを合理化するためのツールとサービス。" }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/ko.json
var e = "products", t = {
	a: {
		e: "벤치마크 CLI",
		m: "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.",
		f: "벤치마크 클라우드",
		c: "기록 추적, 알림 및 팀 대시보드를 제공하는 자동화된 클라우드 기반 벤치마킹.",
		g: "벤치마크 엔터프라이즈",
		l: "SSO, 감사 로그, 사용자 지정 SLA 및 전담 지원을 제공하는 온프레미스 배포.",
		i: "문의하기",
		k: "마이그레이션 어시스턴트",
		a: "코드베이스를 가동 중지 시간 없이 i18n 라이브러리 간에 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.",
		n: "번역 QA",
		d: "누락된 번역, 복수화 문제 및 상황별 오류에 대한 자동화된 품질 검사.",
		h: "번들 최적화기",
		b: "트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
		j: "자세히 알아보기"
	},
	b: { a: "국제화 워크플로우를 합리화하기 위한 도구 및 서비스입니다." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/ko.json
var e = "blog", t = {
	b: {
		e: "2026년 i18n 라이브러리 비교: 심층 분석",
		r: "성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 여기 놀라운 결과가 있습니다.",
		i: "i18n 번들을 60% 줄이는 방법",
		k: "2026년 3월 8일",
		m: "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함한 번역 번들 최적화를위한 실용적인 전략.",
		q: "React의 국제화 현황",
		h: "2026년 2월 28일",
		c: "React의 현재 i18n 생태계에 대한 개요로, 트렌드, 떠오르는 패턴 및 커뮤니티 선호도를 다룹니다.",
		l: "react-i18next에서 Lingui로 마이그레이션",
		g: "2026년 2월 15일",
		a: "50,000 개의 번역 키가있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드.",
		p: "서버 구성 요소 및 i18n: 무엇이 변합니까?",
		f: "2026년 2월 1일",
		n: "React Server Components는 국제화를위한 새로운 패턴을 도입합니다. 우리는 그 함의와 모범 사례를 탐구합니다.",
		d: "벤치 마크 방법론 : 테스트 방법",
		j: "2026년 1월 20일",
		b: "테스트 환경, 통계 방법 및 재현성을 포함한 벤치 마크 방법론에 대한 투명한 살펴보기.",
		o: "더 읽어보기 →"
	},
	a: { a: "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/ko.json
var e = "pricing", t = {
	a: {
		b: "간단하고 투명한 가격 책정",
		a: "팀에 적합한 요금제를 선택하십시오. 숨겨진 수수료가 없습니다."
	},
	b: {
		y: "스타터",
		r: "0 $",
		l: "영구적",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "하루 {runs} 회의 벤치마크 실행"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} 개의 라이브러리"
		},
		e: "커뮤니티 지원",
		w: "공개 결과",
		v: "프로",
		s: "29 $",
		p: "/월",
		aa: "무제한 실행",
		a: "모든 라이브러리",
		t: "우선 지원",
		u: "비공개 결과",
		d: "CI 통합",
		n: "기록 데이터",
		j: "엔터프라이즈",
		g: "맞춤형 가격",
		k: "프로의 모든 기능",
		q: "온프레미스 옵션",
		x: "SSO & SAML",
		i: "전담 어카운트 매니저",
		h: "사용자 지정 SLA",
		b: "감사 로그",
		z: "교육 세션",
		f: "영업 문의",
		m: "시작하기"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/ko.json
var e = "shared", t = {
	b: {
		f: "홈",
		g: "방법론",
		h: "모의 페이지",
		j: "제품",
		i: "가격",
		l: "팀",
		a: "블로그",
		b: "채용",
		d: "자주 묻는 질문",
		c: "연락처",
		k: "설정",
		e: "GitHub으로 이동"
	},
	g: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
	themeModeLightClick: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
	themeModeDarkClick: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
	d: "테마: 자동",
	e: "테마: 다크",
	f: "테마: 라이트",
	a: {
		g: "리소스",
		c: "연락처",
		e: "GitHub",
		f: "방법론",
		d: "기여",
		b: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
		a: "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
	},
	c: {
		b: "웁스! 페이지를 찾을 수 없습니다",
		c: "홈으로 돌아가기",
		a: "하이드레이션 기간을 측정할 수 없습니다:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/ko.json
var e = "about", t = {
	a: "이 벤치마크에 대하여",
	n: "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.",
	b: "번들 크기 영향",
	l: "i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	k: "렌더링 오버헤드",
	f: "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.",
	g: "하이드레이션 비용",
	d: "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화식으로 변하는 순간인 하이드레이션 속도를 늦춥니다.",
	h: "지연 로딩 효과",
	p: "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 도입하는지 여부입니다.",
	i: "로케일 전환 속도",
	e: "런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 — 새로운 번역 가져오기, 구성 요소 다시 렌더링 및 DOM 업데이트를 포함합니다.",
	o: "측정 대상",
	q: "왜 이것이 존재하는가",
	c: "i18n 라이브러리 선택은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.",
	j: "방법론",
	m: "동일한 10페이지 앱이 라이브러리당 한 번씩 구축됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/ko.json
var e = "team", t = {
	b: {
		b: "우리 팀",
		a: "i18n Benchmark 뒤에 있는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공유된 열정으로 뭉친 다양한 팀입니다."
	},
	a: {
		o: "사라 첸 (Sarah Chen)",
		h: "설립자 및 리드 엔지니어",
		g: "규모에 맞는 국제화 시스템을 구축한 10년 경력의 전직 Google 엔지니어입니다.",
		l: "마르쿠스 베버 (Marcus Weber)",
		n: "성능 엔지니어",
		p: "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.",
		a: "아이샤 파텔 (Aisha Patel)",
		d: "데벨로퍼 애드보킷",
		m: "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.",
		q: "토마스 로드리게스 (Tomás Rodríguez)",
		i: "풀스택 개발자",
		j: "벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여차입니다.",
		r: "유키 다나카 (Yuki Tanaka)",
		c: "데이터 분석가",
		f: "모든 벤치마크 결과에서 통계적 엄밀성을 보장합니다. MIT에서 응용 통계학 박사 학위를 받았습니다.",
		e: "엘레나 코발스키 (Elena Kowalski)",
		b: "커뮤니티 매니저",
		k: "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/ko.json
var e = "careers", t = {
	a: {
		d: "전 세계 어디서나 근무하십시오",
		a: "경쟁력있는 보수",
		c: "시장 최고의 보상",
		b: "오픈 소스 시간"
	},
	c: {
		r: "시니어 프런트 엔드 엔지니어",
		c: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
		b: "백엔드 엔지니어",
		f: "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
		s: "테크니컬 라이터",
		e: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
		g: "DevRel 엔지니어",
		q: "샌프란시스코 / 원격",
		i: "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
		o: "QA 엔지니어",
		k: "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
		m: "모집 부문",
		a: "지금 지원하기",
		p: "원격",
		l: "풀타임",
		n: "파트타임",
		j: "엔지니어링",
		h: "문서",
		d: "커뮤니티"
	},
	b: {
		b: "채용",
		a: "국제화 생태계를 개선하기 위한 우리의 임무에 동참하십시오. 우리는 영향력, 투명성 및 지속적인 학습을 중요하게 생각하는 원격 우선 팀입니다."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/ko.json
var e = "home", t = {
	c: {
		j: "영향 이해",
		m: "단일 대용량 JSON이 성능을 저하시킬 수 있는 이유",
		e: "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 유지합니다. 이는 다음을 의미합니다.",
		g: "JSON은 모든 페이지 로드 시 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
		b: "컨텍스트 기반 아키텍처는 로케일이 변경될 때 계단식 재렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않더라도 모든 소비자가 알림을 받기 때문입니다.",
		c: "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 커집니다.",
		h: "동적 로딩의 트레이드오프",
		f: "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 그러나 다음과 같은 새로운 과제가 발생합니다.",
		k: "폭포수 요청:",
		d: "번역되지 않은 콘텐츠의 깜박임 (FOUC):",
		a: "캐시 무효화:",
		l: "이 벤치마크 측정 대상",
		i: "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개 페이지의 제어된 환경을 제공하여 세 가지 축(JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과)에서 i18n 라이브러리를 비교합니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접 비교 가능합니다."
	},
	a: {
		a: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
		b: "결과 보기"
	},
	d: {
		g: "이러한 지표가 중요한 이유",
		a: "번들 크기",
		f: "번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 몇 킬로바이트에서 수십 킬로바이트까지 무게가 매우 다양하며, 번역 파일 자체도 포함됩니다.",
		e: "렌더링 및 하이드레이션",
		b: "대규모 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 트리거할 수 있습니다. SSR 하이드레이션 동안 대규모 번역 객체를 파싱하고 첨부하면 페이지가 상호 작용 가능해지기 전에 지연 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
		c: "동적 로딩",
		d: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 발생시킵니다. 두 전략을 모두 측정하는 것이 필수적입니다."
	},
	b: {
		d: "샘플 결과",
		a: "번들 크기",
		c: "조회 시간",
		b: "지연 로딩"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/ko.json
var e = "faq", t = {
	b: {
		l: "i18n Benchmark란 무엇인가요?",
		c: "벤치마크는 어떻게 진행되나요?",
		j: "우리는 일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.",
		m: "현재 어떤 라이브러리가 지원되나요?",
		k: "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.",
		a: "직접 벤치마크를 제출할 수 있나요?",
		n: "네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 되는 제출물을 검토하고 병합할 것입니다.",
		e: "벤치마크는 얼마나 자주 업데이트되나요?",
		i: "우리는 매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 재실행합니다. 메이저 버전이 출시되면 즉시 재벤치마크 주기가 시작됩니다.",
		f: "데이터가 신뢰할 수 있나요?",
		h: "우리는 웜업 실행, 이상값 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 게시됩니다.",
		b: "컨설팅 서비스를 제공합나요?",
		o: "네, 엔터프라이즈 요금제에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.",
		d: "어떻게 기여할 수 있나요?",
		g: "기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 참조하세요."
	},
	a: {
		b: "자주 묻는 질문",
		a: "i18n Benchmark에 대해 알아야 할 모든 것."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/ko.json
var e = "settings", t = {
	a: {
		a: "API 액세스",
		b: "API 키",
		d: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
		c: "복사"
	},
	d: {
		b: "변경 사항 저장",
		a: "취소"
	},
	e: { a: "계정 기본 설정 및 구성을 관리합니다." },
	b: {
		j: "환경 설정",
		e: "이메일 알림",
		k: "주간 벤치마크 보고서 받기",
		n: "알림 토글",
		c: "다크 모드",
		o: "어두운 색상 테마 사용",
		m: "다크 모드 토글",
		d: "기본 언어",
		f: "영어 (en)",
		g: "프랑스어 (fr)",
		h: "독일어 (de)",
		l: "스페인어 (es)",
		i: "일본어 (ja)",
		b: "중국어 간체 (zh-CN)",
		a: "아랍어 (ar)"
	},
	c: {
		a: "표시 이름",
		b: "이메일 주소",
		c: "프로필"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/ko.json
var e = "contact", t = {
	a: {
		f: "이름",
		a: "버그 보고",
		d: "새로운 벤치마크 아이디어",
		c: "방법론 질문",
		b: "질문이나 아이디어를 설명하세요...",
		e: "메시지 보내기"
	},
	b: {
		a: "문의하기",
		b: "아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/pt.json
var e = "careers", t = {
	a: {
		d: "Trabalhe de qualquer lugar do mundo",
		a: "Pagamento competitivo",
		c: "Compensação acima do mercado",
		b: "Tempo dedicado ao código aberto"
	},
	c: {
		r: "Engenheiro Frontend Sênior",
		c: "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
		b: "Engenheiro Backend",
		f: "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
		s: "Redator Técnico",
		e: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
		g: "Engenheiro DevRel",
		q: "San Francisco / Remoto",
		i: "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
		o: "Engenheiro QA",
		k: "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
		m: "Vagas abertas",
		a: "Candidatar-se agora",
		p: "Remoto",
		l: "Tempo integral",
		n: "Meio período",
		j: "Engenharia",
		h: "Documentação",
		d: "Comunidade"
	},
	b: {
		b: "Carreiras",
		a: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e que valoriza o impacto, a transparência e o aprendizado contínuo."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/pt.json
var e = "faq", t = {
	b: {
		l: "O que é o i18n Benchmark ?",
		c: "Como os benchmarks são conduzidos ?",
		j: "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.",
		m: "Quais bibliotecas são suportadas atualmente ?",
		k: "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
		a: "Posso enviar meus próprios benchmarks ?",
		n: "Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.",
		e: "Com que frequência os benchmarks são cập nhật ?",
		i: "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de novos benchmarks.",
		f: "Os dados são confiáveis ?",
		h: "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.",
		b: "Vocês oferecem serviços de consultoria ?",
		o: "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.",
		d: "Como posso contribuir ?",
		g: "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentazione, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes."
	},
	a: {
		b: "Perguntas Frequentes",
		a: "Tudo o que você precisa saber sobre o i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/pt.json
var e = "contact", t = {
	a: {
		f: "Seu nome",
		a: "Relatório de Bug",
		d: "Nova Ideia de Benchmark",
		c: "Pergunta sobre Metodologia",
		b: "Descreva sua pergunta ou ideia...",
		e: "Enviar Mensagem"
	},
	b: {
		a: "Entre em contato",
		b: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/pt.json
var e = "home", t = {
	c: {
		j: "Entendendo o Impacto",
		m: "Por que um único JSON grande pode prejudicar o desempenho",
		e: "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:",
		g: "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.",
		b: "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.",
		c: "Durante a renderização no lado do servidor, o dicionário completo é serializado na carga HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.",
		h: "As vantagens e desvantagens do carregamento dinâmico",
		f: "A divisão de traduções em partes por rota ou por namespace pode reduzir drasticamente a carga inicial. Mas introduz novos desafios:",
		k: "Solicitações em cascata:",
		d: "Flash de conteúdo não traduzido (FOUC):",
		a: "Invalidação de cache:",
		l: "O que este benchmark mede",
		i: "Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis."
	},
	a: {
		a: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
		b: "Ver Resultados"
	},
	d: {
		g: "Por que essas métricas são importantes",
		a: "Tamanho do Bundle",
		f: "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.",
		e: "Renderização e Hidratação",
		b: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
		c: "Carregamento Dinâmico",
		d: "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
	},
	b: {
		d: "Resultados de amostra",
		a: "Tamanho do bundle",
		c: "Tempo de consulta",
		b: "Carregamento lento"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/pt.json
var e = "shared", t = {
	b: {
		f: "Início",
		g: "Metodologia",
		h: "Páginas de teste",
		j: "Produtos",
		i: "Preços",
		l: "Equipe",
		a: "Blog",
		b: "Carreiras",
		d: "FAQ",
		c: "Contato",
		k: "Configurações",
		e: "Ir para GitHub"
	},
	g: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
	themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	d: "Tema: Auto",
	e: "Tema: Escuro",
	f: "Tema: Claro",
	a: {
		g: "Recursos",
		c: "Contato",
		e: "GitHub",
		f: "Metodologia",
		d: "Contribuir",
		b: "i18n Benchmark — Projeto de código abierto. Construído com React, Vite e TanStack Router.",
		a: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo."
	},
	c: {
		b: "Ops! Página não encontrada",
		c: "Voltar para o Início",
		a: "Não foi possível medir a duración da hidratação:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/pt.json
var e = "blog", t = {
	b: {
		e: "Comparando bibliotecas i18n em 2026: um mergulho profundo",
		r: "Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		i: "Como reduzir seu bundle i18n em 60%",
		k: "8 de março de 2026",
		m: "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
		q: "O estado da internacionalização no React",
		h: "28 de fevereiro de 2026",
		c: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		l: "Migrando do react-i18next para o Lingui",
		g: "15 de fevereiro de 2026",
		a: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		p: "componentes de servidor e i18n: o que muda?",
		f: "1 de fevereiro de 2026",
		n: "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
		d: "Metodologia de Benchmark: como testamos",
		j: "20 de janeiro de 2026",
		b: "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estadísticos e reprodutibilidade.",
		o: "Leia mais →"
	},
	a: { a: "Insights, tutoriais e análises da comunidade i18n." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/pt.json
var e = "team", t = {
	b: {
		b: "Nossa Equipe",
		a: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
	},
	a: {
		o: "Sarah Chen",
		h: "Fundadora e Engenheira Líder",
		g: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
		l: "Marcus Weber",
		n: "Engenheiro de Performance",
		p: "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
		a: "Aisha Patel",
		d: "Advogado de Desenvolvedores",
		m: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
		q: "Tomás Rodríguez",
		i: "Desenvolvedor Full-Stack",
		j: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
		r: "Yuki Tanaka",
		c: "Analista de Dados",
		f: "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
		e: "Elena Kowalski",
		b: "Gerente de Comunidade",
		k: "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/pt.json
var e = "products", t = {
	a: {
		e: "CLI do Benchmark",
		m: "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
		f: "Benchmark Cloud",
		c: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
		g: "Benchmark Enterprise",
		l: "Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
		i: "Contate-nos",
		k: "Assistente de Migração",
		a: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
		n: "QA de Tradução",
		d: "Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.",
		h: "Otimizador de Bundle",
		b: "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
		j: "Saiba mais"
	},
	b: { a: "Ferramentas e serviços para otimizar seu fluxo de trabalho de internacionalización." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/pt.json
var e = "settings", t = {
	a: {
		a: "Acesso à API",
		b: "Chave da API",
		d: "Use esta chave para acessar a API de benchmarking programaticamente.",
		c: "Copiar"
	},
	d: {
		b: "Salvar alterações",
		a: "Cancelar"
	},
	e: { a: "Gerencie as preferências de sua conta e a configuração." },
	b: {
		j: "Preferências",
		e: "Notificações por e-mail",
		k: "Receber relatórios semanais de benchmarks",
		n: "Alternar notificações",
		c: "Modo Escuro",
		o: "Usar esquema de cores escuras",
		m: "Alternar modo escuro",
		d: "Idioma Padrão",
		f: "Inglês (en)",
		g: "Francês (fr)",
		h: "Alemão (de)",
		l: "Espanhol (es)",
		i: "Japonês (ja)",
		b: "Chinês simplificado (zh-CN)",
		a: "Árabe (ar)"
	},
	c: {
		a: "Nome de exibição",
		b: "E-mail",
		c: "Perfil"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/pt.json
var e = "about", t = {
	a: "Sobre este Benchmark",
	n: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas.",
	b: "Impacto no tamanho do bundle",
	l: "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	k: "Sobrecarga de renderização",
	f: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de un único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.",
	g: "Custo de hidratação",
	d: "Durante o SSR, os datos de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	h: "Eficácia do carregamento lento",
	p: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascata, FOUC, complexidade de cache).",
	i: "Velocidade de troca de idioma",
	e: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	o: "O que medimos",
	q: "Por que isso existe",
	c: "Escolher uma biblioteca de i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas muda o custo? Este benchmark responde a essas perguntas com dados reais.",
	j: "Metodologia",
	m: "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de locale. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/pt.json
var e = "pricing", t = {
	a: {
		b: "Preços Simples e Transparentes",
		a: "Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas."
	},
	b: {
		y: "Iniciante",
		r: "0 $",
		l: "para sempre",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} execuções de benchmark/dia"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} bibliotecas"
		},
		e: "Suporte da comunidade",
		w: "Resultados públicos",
		v: "Pro",
		s: "29 $",
		p: "/mês",
		aa: "Execuções ilimitadas",
		a: "Todas as bibliotecas",
		t: "Suporte prioritário",
		u: "Resultados privados",
		d: "Integração de CI",
		n: "Dados históricos",
		j: "Personalizado",
		g: "Personalizado",
		k: "Tudo no Pro",
		q: "Opção on-premise",
		x: "SSO e SAML",
		i: "Gerente de conta dedicado",
		h: "SLAs personalizados",
		b: "Logs de auditoria",
		z: "Sessões de treinamento",
		f: "Contatar Vendas",
		m: "Começar"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/ru.json
var e = "careers", t = {
	a: {
		d: "Работайте из любой точки мира",
		a: "Конкурентоспособная оплата",
		c: "Компенсация выше рыночной",
		b: "Время на open source"
	},
	c: {
		r: "Старший фронтенд-инженер",
		c: "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
		b: "Бэкенд-инженер",
		f: "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
		s: "Технический писатель",
		e: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
		g: "DevRel-инженер",
		q: "Сан-Франциско / Удаленно",
		i: "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
		o: "QA-инженер",
		k: "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
		m: "Открытые вакансии",
		a: "Подать заявку",
		p: "Удаленно",
		l: "Полный рабочий день",
		n: "Неполный рабочий день",
		j: "Разработка",
		h: "Документация",
		d: "Сообщество"
	},
	b: {
		b: "Карьера",
		a: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/ru.json
var e = "faq", t = {
	b: {
		l: "Что такое i18n Benchmark ?",
		c: "Как проводятся бенчмарки ?",
		j: "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.",
		m: "Какие библиотеки поддерживаются в настоящее время ?",
		k: "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.",
		a: "Могу ли я отправить свои собственные бенчмарки ?",
		n: "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.",
		e: "Как часто обновляются бенчмарки ?",
		i: "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.",
		f: "Надежны ли данные ?",
		h: "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.",
		b: "Предлагаете ли вы консультационные услуги ?",
		o: "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.",
		d: "Как я могу помочь ?",
		g: "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации."
	},
	a: {
		b: "Часто задаваемые вопросы",
		a: "Все, что вам нужно знать об i18n Benchmark."
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/ru.json
var e = "settings", t = {
	a: {
		a: "Доступ к API",
		b: "Ключ API",
		d: "Используйте этот ключ для программного доступа к API бенчмаркинга.",
		c: "Копировать"
	},
	d: {
		b: "Сохранить изменения",
		a: "Отмена"
	},
	e: { a: "Управляет настройками и конфигурацией своего аккаунта." },
	b: {
		j: "Настройки",
		e: "Уведомления по эл. почте",
		k: "Получать еженедельные отчеты о бенчмарках",
		n: "Переключить уведомления",
		c: "Темный режим",
		o: "Использовать темную цветовую схему",
		m: "Переключить темный режим",
		d: "Язык по умолчанию",
		f: "Английский (en)",
		g: "Французский (fr)",
		h: "Немецкий (de)",
		l: "Испанский (es)",
		i: "Японский (ja)",
		b: "Китайский упрощенный (zh-CN)",
		a: "Арабский (ar)"
	},
	c: {
		a: "Отображаемое имя",
		b: "Эл. почта",
		c: "Профиль"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/ru.json
var e = "blog", t = {
	b: {
		e: "Сравнение библиотек i18n в 2026 году: глубокое погружение",
		r: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
		i: "Как уменьшить бандл i18n на 60%",
		k: "8 марта 2026 года",
		m: "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.",
		q: "Состояние интернационализации в React",
		h: "28 февраля 2026 года",
		c: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.",
		l: "Миграция с react-i18next на Lingui",
		g: "15 февраля 2026 года",
		a: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
		p: "Server Components и i18n: что меняется?",
		f: "1 февраля 2026 года",
		n: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
		d: "Методология бенчмарка: как мы тестируем",
		j: "20 января 2026 года",
		b: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
		o: "Читать далее →"
	},
	a: { a: "Инсайты, руководства и анализ от сообщества i18n." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/ru.json
var e = "team", t = {
	b: {
		b: "Наша команда",
		a: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
	},
	a: {
		o: "Сара Чен (Sarah Chen)",
		h: "Основатель и ведущий инженер",
		g: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
		l: "Маркус Вебер (Marcus Weber)",
		n: "Инженер по производительности",
		p: "Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.",
		a: "Айша Патель (Aisha Patel)",
		d: "Адвокат разработчиков",
		m: "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.",
		q: "Томас Родригес (Tomás Rodríguez)",
		i: "Фулстек-разработчик",
		j: "Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.",
		r: "Юки Танака (Yuki Tanaka)",
		c: "Аналитик данных",
		f: "Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.",
		e: "Елена Ковальски (Elena Kowalski)",
		b: "Комьюнити-менеджер",
		k: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом."
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/ru.json
var e = "home", t = {
	c: {
		j: "Понимание влияния",
		m: "Почему один большой JSON может нанести вред производительности",
		e: "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект велик (тысячи ключей), каждый компонент, потребляющий переводы, хранит ссылку на весь словарь. Это означает:",
		g: "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.",
		b: "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.",
		c: "При серверном рендеринге весь словарь сериализуется в полезную нагрузку HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.",
		h: "Компромиссы динамической загрузки",
		f: "Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно снизить начальную нагрузку. Но это создает новые проблемы:",
		k: "Каскадные запросы:",
		d: "Вспышка непереведенного контента (FOUC):",
		a: "Инвалидация кэша:",
		l: "Что измеряет этот бенчмарк",
		i: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют в ваш JavaScript-бандл, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
	},
	a: {
		a: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
		b: "Посмотреть результаты"
	},
	d: {
		g: "Почему эти показатели важны",
		a: "Размер бандла",
		f: "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
		e: "Рендеринг и гидратация",
		b: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
		c: "Динамическая загрузка",
		d: "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо."
	},
	b: {
		d: "Примеры результатов",
		a: "Размер бандла",
		c: "Время поиска",
		b: "Ленивая загрузка"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/ru.json
var e = "pricing", t = {
	a: {
		b: "Простое и прозрачное ценообразование",
		a: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий."
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "навсегда",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "{runs} запусков бенчмарка в день"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} библиотек"
		},
		e: "Сообщество поддержки",
		w: "Публичные результаты",
		v: "Pro",
		s: "29 $",
		p: "/месяц",
		aa: "Неограниченное количество запусков",
		a: "Все библиотеки",
		t: "Приоритетная поддержка",
		u: "Приватные результаты",
		d: "Интеграция с CI",
		n: "Исторические данные",
		j: "Корпоративный",
		g: "Индивидуальная цена",
		k: "Все возможности Pro",
		q: "Локальное развертывание",
		x: "SSO и SAML",
		i: "Выделенный менеджер",
		h: "Индивидуальные SLA",
		b: "Журналы аудита",
		z: "Сессии обучения",
		f: "Связаться с отделом продаж",
		m: "Начать"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/ru.json
var e = "contact", t = {
	a: {
		f: "Ваше имя",
		a: "Отчет об ошибке",
		d: "Новая идея для бенчмарка",
		c: "Вопрос по методологии",
		b: "Опишите ваш вопрос или идею...",
		e: "Отправить сообщение"
	},
	b: {
		a: "Связаться с нами",
		b: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/ru.json
var e = "about", t = {
	a: "Об этом бенчмарке",
	n: "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.",
	b: "Влияние на размер бандла",
	l: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
	k: "Затраты на рендеринг",
	f: "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
	g: "Стоимость гидратации",
	d: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
	h: "Эффективность ленивой загрузки",
	p: "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
	i: "Скорость переключения языка",
	e: "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	o: "Что мы измеряем",
	q: "Почему это существует",
	c: "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
	j: "Методология",
	m: "Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов."
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/ru.json
var e = "shared", t = {
	b: {
		f: "Главная",
		g: "Методология",
		h: "Тестовые страницы",
		j: "Продукты",
		i: "Цены",
		l: "Команда",
		a: "Блог",
		b: "Карьера",
		d: "FAQ",
		c: "Контакт",
		k: "Настройки",
		e: "Перейти на GitHub"
	},
	g: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
	themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	d: "Тема: Авто",
	e: "Тема: Темная",
	f: "Тема: Светлая",
	a: {
		g: "Ресурсы",
		c: "Контакт",
		e: "GitHub",
		f: "Методология",
		d: "Вклад",
		b: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
		a: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения."
	},
	c: {
		b: "Упс! Страница не найдена",
		c: "Вернуться на главную",
		a: "Не удалось измерить продолжительность гидратации:"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/ru.json
var e = "products", t = {
	a: {
		e: "CLI для бенчмаркинга",
		m: "Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
		f: "Облачный бенчмаркинг",
		c: "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.",
		g: "Корпоративный бенчмаркинг",
		l: "Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.",
		i: "Связаться с нами",
		k: "Помощник по миграции",
		a: "Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.",
		n: "Контроль качества перевода",
		d: "Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.",
		h: "Оптимизатор бандлов",
		b: "Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.",
		j: "Узнать больше"
	},
	b: { a: "Инструменты и услуги для оптимизации рабочего процесса интернационализации." }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/team/zh.json
var e = "team", t = {
	b: {
		b: "我们的团队",
		a: "认识 i18n Benchmark 背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。"
	},
	a: {
		o: "陈莎拉 (Sarah Chen)",
		h: "创始人兼首席工程师",
		g: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
		l: "马库斯·韦伯 (Marcus Weber)",
		n: "性能工程师",
		p: "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
		a: "艾莎·帕特尔 (Aisha Patel)",
		d: "开发者倡导者",
		m: "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
		q: "托马斯·罗德里格斯 (Tomás Rodríguez)",
		i: "全栈开发人员",
		j: "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
		r: "田中由纪 (Yuki Tanaka)",
		c: "数据分析师",
		f: "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
		e: "埃琳娜·科瓦尔斯基 (Elena Kowalski)",
		b: "社区经理",
		k: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/careers/zh.json
var e = "careers", t = {
	a: {
		d: "在全球任何地方工作",
		a: "有竞争力的薪酬",
		c: "市场顶级薪酬",
		b: "开源贡献时间"
	},
	c: {
		r: "高级前端工程师",
		c: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
		b: "后端工程师",
		f: "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
		s: "技术文档工程师",
		e: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
		g: "开发者关系工程师",
		q: "旧金山 / 远程",
		i: "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
		o: "测试工程师",
		k: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
		m: "开放职位",
		a: "立即申请",
		p: "远程",
		l: "全职",
		n: "兼职",
		j: "工程",
		h: "文档",
		d: "社区"
	},
	b: {
		b: "职业",
		a: "加入我们改善国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/shared/zh.json
var e = "shared", t = {
	b: {
		f: "首页",
		g: "方法学",
		h: "模拟页面",
		j: "产品",
		i: "价格",
		l: "团队",
		a: "博客",
		b: "职业",
		d: "常见问题",
		c: "联系我们",
		k: "设置",
		e: "前往 GitHub"
	},
	g: "主题模式：自动（系统）。点击切换到浅色模式。",
	themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
	themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
	d: "主题：自动",
	e: "主题：深色",
	f: "主题：浅色",
	a: {
		g: "资源",
		c: "联系",
		e: "GitHub",
		f: "方法论",
		d: "贡献",
		b: "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
		a: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。"
	},
	c: {
		b: "糟糕！找不到页面",
		c: "返回首页",
		a: "无法测量注水时长："
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/faq/zh.json
var e = "faq", t = {
	b: {
		l: "什么是 i18n Benchmark？",
		c: "如何进行基准测试？",
		j: "我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都重复多次，以确保统计学意义。所有测试配置都可以在我们的 GitHub 存储库中公开获得。",
		m: "目前支持哪些库？",
		k: "我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。",
		a: "我可以提交自己的基准测试吗？",
		n: "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。",
		e: "基准测试多久更新一次？",
		i: "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会触发立即重新进行基准测试。",
		f: "数据可靠吗？",
		h: "我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。",
		b: "你们提供咨询服务吗？",
		o: "是的，我们的企业版计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。",
		d: "我该如何贡献？",
		g: "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。"
	},
	a: {
		b: "常见问题",
		a: "您需要了解的有关 i18n Benchmark 的一切。"
	}
}, n = {
	key: "faq",
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/blog/zh.json
var e = "blog", t = {
	b: {
		e: "2026 年 i18n 库对比：深度分析",
		r: "我们针对性能、包大小和 DX 测试了 12 种不同的国际化库。以下是令人惊讶的结果。",
		i: "如何将 i18n 包大小减少 60%",
		k: "2026年3月8日",
		m: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
		q: "React 国际化的现状",
		h: "2026年2月28日",
		c: "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
		l: "从 react-i18next 迁移到 Lingui",
		g: "2026年2月15日",
		a: "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
		p: "服务器组件和 i18n：有什么变化？",
		f: "2026年2月1日",
		n: "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
		d: "基准测试方法学：我们如何测试",
		j: "2026年1月20日",
		b: "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
		o: "阅读更多 →"
	},
	a: { a: "来自 i18n 社区 de 见解、教程和分析。" }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/pricing/zh.json
var e = "pricing", t = {
	a: {
		b: "简单透明的定价",
		a: "选择适合您团队的计划。无隐藏费用。"
	},
	b: {
		y: "Starter",
		r: "0 $",
		l: "永久",
		c: {
			fields: [],
			nodeType: "insertion",
			insertion: "每天 {runs} 次基准测试运行"
		},
		o: {
			fields: [],
			nodeType: "insertion",
			insertion: "{libs} 个库"
		},
		e: "社区支持",
		w: "公共结果",
		v: "Pro",
		s: "29 $",
		p: "/月",
		aa: "无限运行",
		a: "所有库",
		t: "优先支持",
		u: "私人结果",
		d: "CI 集成",
		n: "历史数据",
		j: "企业版",
		g: "定制价格",
		k: "Pro 计划中的一切",
		q: "本地部署选项",
		x: "SSO & SAML",
		i: "专属大客户经理",
		h: "定制 SLA",
		b: "审核日志",
		z: "培训会议",
		f: "联系销售人员",
		m: "开始使用"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/home/zh.json
var e = "home", t = {
	c: {
		j: "了解其影响",
		m: "为什么单个大型 JSON 会损害性能",
		e: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都持有对整个字典的引用。这意味着：",
		g: "JSON 必须在每次页面加载时进行解析——阻塞主线程。",
		b: "基于上下文的架构可能会在区域设置更改时导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。",
		c: "在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和注水的文档大小。",
		h: "动态加载的权衡",
		f: "将翻译拆分为按路线或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
		k: "瀑布请求：",
		d: "未翻译内容的闪烁 (FOUC)：",
		a: "缓存失效：",
		l: "此基准测试测量什么",
		i: "此测试应用提供了一个受控环境——10 个具有真实内容的页面——从三个轴比较 i18n 库：它们为 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用程序中，因此结果具有直接可比性。"
	},
	a: {
		a: "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
		b: "查看结果"
	},
	d: {
		g: "为什么这些指标很重要",
		a: "包大小",
		f: "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
		e: "渲染与注水",
		b: "将大型 JSON 字典连接 to 每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
		c: "动态加载",
		d: "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
	},
	b: {
		d: "样本结果",
		a: "包大小",
		c: "查询时间",
		b: "延迟加载"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/contact/zh.json
var e = "contact", t = {
	a: {
		f: "您的姓名",
		a: "错误报告",
		d: "新基准测试想法",
		c: "方法论问题",
		b: "描述您的问题或想法...",
		e: "发送消息"
	},
	b: {
		a: "联系我们",
		b: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/products/zh.json
var e = "products", t = {
	a: {
		e: "基准测试 CLI",
		m: "在终端本地运行基准测试。支持自定义配置和 CI 集成。",
		f: "基准测试云",
		c: "基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。",
		g: "基准测试企业版",
		l: "采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。",
		i: "联系我们",
		k: "迁移助手",
		a: "由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
		n: "翻译质量保证",
		d: "针对缺失翻译、复数问题和上下文错误的自动化质量检查。",
		h: "包优化器",
		b: "通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。",
		j: "了解更多"
	},
	b: { a: "简化国际化工作流程的工具和服务。" }
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/settings/zh.json
var e = "settings", t = {
	a: {
		a: "API 访问权限",
		b: "API 密钥",
		d: "使用此密钥从程序访问基准测试 API。",
		c: "复制"
	},
	d: {
		b: "保存更改",
		a: "取消"
	},
	e: { a: "管理您的账户偏好和配置。" },
	b: {
		j: "偏好设置",
		e: "邮件通知",
		k: "接收每周基准测试报告",
		n: "切换通知",
		c: "深色模式",
		o: "使用深色配色方案",
		m: "切换深色模式",
		d: "默认语言",
		f: "英语 (en)",
		g: "法语 (fr)",
		h: "德语 (de)",
		l: "西班牙语 (es)",
		i: "日语 (ja)",
		b: "简体中文 (zh-CN)",
		a: "阿拉伯语 (ar)"
	},
	c: {
		a: "显示名称",
		b: "电子邮件地址",
		c: "个人资料"
	}
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };
//#region .intlayer/dynamic_dictionary/json/about/zh.json
var e = "about", t = {
	a: "关于此基准测试",
	n: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。",
	b: "包大小影响",
	l: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	k: "渲染开销",
	f: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	g: "注水成本",
	d: "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	h: "延迟加载有效性",
	p: "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	i: "本地语言切换速度",
	e: "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	o: "我们测量什么",
	q: "为什么存在这个项目",
	c: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的易用性，但很少有人衡量性能成本：该库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。",
	j: "方法学",
	m: "每个库都构建一次相同的 10 页应用程序。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用 React Profiler 捕获本地切换期间的渲染时间。所有测试都在具有相同硬件的 CI 上运行，以确保结果可重现。"
}, n = {
	key: e,
	content: t
};
//#endregion
export { t as content, n as default, e as key };

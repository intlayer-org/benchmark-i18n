import { Fragment as e, createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import ee from "../../../.intlayer/dictionary/faq.json";
import d from "../../../.intlayer/dictionary/header.json";
import f from "../../../.intlayer/dictionary/open-positions.json";
import te from "../../../.intlayer/dictionary/careers-benefits.json";
import p from "../../../.intlayer/dictionary/settings.json";
import ne from "../../../.intlayer/dictionary/footer.json";
import re from "../../../.intlayer/dictionary/results-table.json";
import ie from "../../../.intlayer/dictionary/contact-form.json";
import ae from "../../../.intlayer/dictionary/contact-header.json";
import oe from "../../../.intlayer/dictionary/about-grid.json";
import se from "../../../.intlayer/dictionary/mockBanner.json";
import ce from "../../../.intlayer/dictionary/theme-toggle.json";
import le from "../../../.intlayer/dictionary/about-header.json";
import ue from "../../../.intlayer/dictionary/faq-header1.json";
import de from "../../../.intlayer/dictionary/careers.json";
import fe from "../../../.intlayer/dictionary/blog-header.json";
import pe from "../../../.intlayer/dictionary/route.json";
import me from "../../../.intlayer/dictionary/faq-list.json";
import he from "../../../.intlayer/dictionary/careers-header.json";
import ge from "../../../.intlayer/dictionary/pricing.json";
import _e from "../../../.intlayer/dictionary/what-we-measure.json";
import ve from "../../../.intlayer/dictionary/products.json";
import ye from "../../../.intlayer/dictionary/contact.json";
import be from "../../../.intlayer/dictionary/blog-list.json";
import xe from "../../../.intlayer/dictionary/about.json";
import Se from "../../../.intlayer/dictionary/understanding-impact.json";
import Ce from "../../../.intlayer/dictionary/home.json";
import we from "../../../.intlayer/dictionary/team.json";
import Te from "../../../.intlayer/dictionary/blog.json";
import Ee from "../../../.intlayer/dictionary/why-it-matters.json";
import De from "../../../.intlayer/dictionary/hero.json";
import { usePathname as Oe } from "next/navigation";
var m = {
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
}, h = {
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
}, ke = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ae = /* @__PURE__ */ new WeakMap(), je = 0, Me = (e) => {
	if (!e) return "base";
	let t = Ae.get(e);
	if (t) return t;
	je += 1;
	let n = `p${je}`;
	return Ae.set(e, n), n;
}, Ne = 256, g = /* @__PURE__ */ new WeakMap(), Pe = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Me(n)}`, Ie = (e, t) => {
	if (!Pe(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!Pe(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= Ne && r.clear(), r.set(t, n), n;
}, Le = "translation", Re = "enumeration", ze = "plural", v = "insertion", Be = "object", Ve = "array", He = "markdown", y = "html", Ue = "gender", b = "select", x = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ve,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Be,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, We = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ge = (e, t) => e[We(e, t) ?? "fallback"], C = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), w = "default", Ke = /[^A-Za-z0-9._&=-]/g, T = /[^A-Za-z0-9._-]/g, qe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, E = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, qe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Je = (e) => e === void 0 ? w : typeof e == "string" ? E(e, Ke) : Object.keys(e).sort().map((t) => `${E(t, T)}=${E(String(e[t]), T)}`).join("&"), Ye = (e) => Array.isArray(e) ? e.length === 0 ? [w] : e.map(Je) : [Je(e)], Xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? w : e[0] ?? "default";
}, Ze = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Qe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, $e = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, et = (e, t) => {
	if (!Qe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? w : Xe(Ye(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ze(e, n, t, s)).map((t) => $e(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, tt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, nt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ye(n).join(",") : String(n)}`;
}).join("|") : "", D = "\x1B[0m", rt = "\x1B[34m", it = "\x1B[31m", at = "\x1B[32m", ot = "\x1B[38;5;3m", st = "\x1B[36m", ct = (e) => e, lt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ct(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ut = (e, t) => (n, r) => lt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? D : n : D}` : e, dt = (e, t = ot, n = D) => [e].flat().map((e) => O(e, t, n)).join(", ");
O("✗", it), O("✓", at), O("⏲", rt);
var ft = {
	faq: ee,
	header: d,
	"open-positions": f,
	"careers-benefits": te,
	settings: p,
	footer: ne,
	"results-table": re,
	"contact-form": ie,
	"contact-header": ae,
	"about-grid": oe,
	mockBanner: se,
	"theme-toggle": ce,
	"about-header": le,
	"faq-header1": ue,
	careers: de,
	"blog-header": fe,
	route: pe,
	"faq-list": me,
	"careers-header": he,
	pricing: ge,
	"what-we-measure": _e,
	products: ve,
	contact: ye,
	"blog-list": be,
	about: xe,
	"understanding-impact": Se,
	home: Ce,
	team: we,
	blog: Te,
	"why-it-matters": Ee,
	hero: De
}, pt = () => ft, mt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ht = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : mt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ht(e ? `${e}.${String(n)}` : String(n)) }), gt = /* @__PURE__ */ new Set(), k = (e, t, n) => {
	let r = pt()[e];
	return r ? Lt(r, t, n) : (gt.has(e) || (ut({ log: ke })(typeof window > "u" ? `Dictionary ${dt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), gt.add(e)), ht(e));
}, _t = 50, A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set(), vt = (e) => {
	j.has(e) || (j.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, yt = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, bt = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (vt(e), yt[e]);
};
function M(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = A.get(a);
	o || (o = /* @__PURE__ */ new Map(), A.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? bt(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > _t && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var xt = (e, t, n) => e[M("PluralRules", n).select(t)] ?? e.other, St = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, Ct = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, wt = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[y] : e[He];
}, Tt = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? y : He;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Et = (e, t, n, r, i) => {
	let a = Tt(e, C(wt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Dt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Le,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ct(o, e, t);
	}
}, Ot = I, kt = I, At = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? I : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => Et(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = C(i, e);
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
}, jt = I, Mt = I;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Nt = (e) => I, Pt = I, Ft = (e, t = !0) => [
	Dt(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Ot,
	kt,
	At,
	Nt(e ?? m.defaultLocale),
	Pt,
	jt,
	Mt
], It = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), Lt = (e, t, n) => {
	let { locale: r, selector: i } = tt(t), a = Fe(r ?? m.defaultLocale, nt(i), n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ft(r), c = et(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return It(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(l)) : _(e, a, l(c));
}, Rt = ["en"], zt = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), Bt = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Vt = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Bt)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = zt.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, Ht = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, L = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ht(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ut = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), R = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Wt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = R(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = {
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
}, Gt = (e = B) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Kt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !z && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: R(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Wt(r, e, i));
			} catch {}
		}
	}
}, qt = Gt(B), Jt = (e, t) => Kt(e, {
	...B,
	isCookieEnabled: t
}), Yt = () => {
	let { locale: e } = n(V) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Xt = ({ children: e }) => (Yt(), e), Zt = () => {
	let { locale: e } = n(V) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Qt = ({ children: e }) => (Zt(), e), $t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, en = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? Rt,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), tn = (e, t) => !!e && (t ?? m.locales).includes(e), nn = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, rn = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = en(t);
	if (!n || !r) return n;
	let a = Ut(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return tn(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (tn(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, V = t({
	locale: qt ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), an = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: ee } = m ?? {}, [d, f] = s(e ?? qt ?? t ?? ee);
	r(() => {
		e && e !== d && f(e);
	}, [e]), r(() => {
		$t();
	}, []);
	let te = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Jt(e, c);
		}
	}), p = nn(d);
	return l(V.Provider, {
		value: {
			locale: p,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, on = ({ children: e, ...t }) => u(an, {
	...t,
	children: [
		l(Xt, {}),
		l(Qt, {}),
		e
	]
}), sn = (e) => l(on, { ...e }), cn = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && ut({ log: ke })(`${O("NextIntlClientProvider", st)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = Oe(), s = h?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? rn(o) : void 0);
	return l(sn, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, H = (e) => x(Re, e), ln = (e) => x(Ue, e), U = (e, t) => x(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Vt(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return L(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => L(await e)), typeof n == "string") return L(n);
	try {
		return L(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), W = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, G = (e) => x(v, e, { fields: (() => {
	if (typeof e == "string") return W(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => W(await e)), typeof t == "string") return W(t);
	try {
		return W(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), un = (e) => x(ze, e), dn = (e, t) => x(b, e, { variable: t }), fn = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, K = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : G(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : t;
		if (t.type === "argument") return t.format ? G(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : G(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = K(a);
				}
				return e.__intlayer_icu_var = t.name, H(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = K(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return un(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = K(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ln({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dn(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = K(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, H(e);
		}
	}
	return e.map((e) => K([e]));
}, pn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return K(fn(e));
		} catch {
			return e;
		}
	}
}, mn = (e) => S(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...pn
	}]
}), hn = (e) => {
	let t = 0, n = () => {
		let n = [], a = "";
		for (; t < e.length;) {
			let o = e[t];
			if (o === "{" && e[t + 1] === "{") a &&= (n.push(a), ""), t += 2, n.push(r());
			else if (o === "{") a &&= (n.push(a), ""), t++, n.push(i());
			else if (o === "}") break;
			else a += o, t++;
		}
		return a && n.push(a), n;
	}, r = () => {
		let n = "";
		for (; t < e.length;) {
			if (e[t] === "}" && e[t + 1] === "}") return t += 2, {
				type: "argument",
				name: n.trim()
			};
			n += e[t], t++;
		}
		throw Error("Unclosed i18next variable");
	}, i = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, q = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : G(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? U(t) : t;
		if (t.type === "argument") return t.format ? G(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : G(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = q(a);
				}
				return e.__intlayer_icu_var = t.name, H(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = q(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return un(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = q(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ln({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dn(e, t.name);
		}
	}
	return e.map((e) => q([e]));
}, gn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return q(hn(e));
		} catch {
			return e;
		}
	}
}, _n = (e) => S(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...gn
	}]
}), vn = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, yn = (e) => {
	let t = 0, n = [], r = "";
	for (; t < e.length;) {
		let i = e[t];
		if (i === "{") {
			r &&= (n.push(r), ""), t++;
			let i = "";
			for (; t < e.length && e[t] !== "}";) i += e[t], t++;
			t < e.length && t++, n.push({
				type: "argument",
				name: i.trim()
			});
		} else r += i, t++;
	}
	return r && n.push(r), n;
}, bn = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(yn);
}, J = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return G(t);
}, xn = (e) => {
	if (e.length === 1) return J(e[0]);
	let t = {};
	return e.length === 2 ? H({
		1: J(e[0]),
		fallback: J(e[1])
	}) : e.length === 3 ? H({
		0: J(e[0]),
		1: J(e[1]),
		fallback: J(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = J(n) : t[r.toString()] = J(n);
	}), t.__intlayer_vue_i18n_var = "count", H(t));
}, Sn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return xn(bn(e));
		} catch {
			return e;
		}
	}
}, Cn = (e) => S(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Sn
	}]
}), wn = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], Y = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, X = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? M("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? M("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : M("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return M("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Tn = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : i ? X(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : X(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = Y(t, n);
	return r === void 0 ? e : String(r);
}), Z = (e, t) => e[t] ?? e.count ?? e.n, Q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Tn(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Q(r[v], t, n);
	if (r.nodeType === "html") return Q(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ze];
		return Q(xt(e, Number(Z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Re], i = wn.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wn.includes(t) || (o[t] = n);
		let s = Z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = M("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[b], i = Z(t, typeof r.variable == "string" ? r.variable : "value");
		return Q(St(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ue];
		return Q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, En = (e, t = {}, n = "en") => {
	let r = Q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Dn = (e) => (t, n = {}, r = "en") => En(typeof t == "string" ? e(t) : t, n, r), On = {
	icu: mn,
	i18next: _n,
	"vue-i18n": Cn
}, kn = (e, t = {}, n = "en", r = "icu") => Dn(On[r])(e, t, n), $ = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: $(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, An = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, jn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = jn(t.children, n), a = n[t.tag];
	return typeof a == "function" ? l(e, { children: a(i) }, r) : l(e, { children: i }, r);
}), Mn = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Mn(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Nn = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Fn(e, (t) => Pn(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Pn = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = pt();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = vn(k(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return vn(k(i, e), a);
	} catch {
		return;
	}
}, Fn = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return kn(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = An(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: jn($(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = An(t), o = r(e, i);
			return o === void 0 ? n(e) : Mn($(o), a);
		}
	});
}, In = ((e) => {
	let { locale: t } = n(V) ?? {};
	return a(() => Nn(t, e), [t, e]);
});
function Ln(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Rn() {
	let e = In(), t = In("header");
	return Ln("Hero"), u("section", {
		className: "mb-16 text-center",
		children: [
			l("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			l("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: e("home.hero.aTestApplicationDesignedTo")
			}),
			u("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [l("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e("home.hero.viewResults")
				}), l("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: t("methodology")
				})]
			})
		]
	});
}
function zn() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Bn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Vn({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Bn("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		zn();
	}, []), l(cn, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var Hn = "en";
function Un({ children: e }) {
	return l(Vn, {
		locale: Hn,
		children: e
	});
}
function Wn() {
	return l(Un, { children: l(Rn, {}) });
}
export { Wn as default };

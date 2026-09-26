import { Fragment as e, createContext as t, useContext as n, useEffect as r, useId as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import f from "../../../.intlayer/dictionary/faq.json";
import p from "../../../.intlayer/dictionary/header.json";
import ee from "../../../.intlayer/dictionary/open-positions.json";
import te from "../../../.intlayer/dictionary/careers-benefits.json";
import ne from "../../../.intlayer/dictionary/settings.json";
import re from "../../../.intlayer/dictionary/footer.json";
import ie from "../../../.intlayer/dictionary/results-table.json";
import ae from "../../../.intlayer/dictionary/contact-form.json";
import oe from "../../../.intlayer/dictionary/contact-header.json";
import se from "../../../.intlayer/dictionary/about-grid.json";
import ce from "../../../.intlayer/dictionary/mockBanner.json";
import le from "../../../.intlayer/dictionary/theme-toggle.json";
import ue from "../../../.intlayer/dictionary/about-header.json";
import de from "../../../.intlayer/dictionary/faq-header1.json";
import fe from "../../../.intlayer/dictionary/careers.json";
import pe from "../../../.intlayer/dictionary/blog-header.json";
import me from "../../../.intlayer/dictionary/route.json";
import he from "../../../.intlayer/dictionary/faq-list.json";
import ge from "../../../.intlayer/dictionary/careers-header.json";
import _e from "../../../.intlayer/dictionary/pricing.json";
import ve from "../../../.intlayer/dictionary/what-we-measure.json";
import ye from "../../../.intlayer/dictionary/products.json";
import be from "../../../.intlayer/dictionary/contact.json";
import xe from "../../../.intlayer/dictionary/blog-list.json";
import Se from "../../../.intlayer/dictionary/about.json";
import Ce from "../../../.intlayer/dictionary/understanding-impact.json";
import we from "../../../.intlayer/dictionary/home.json";
import Te from "../../../.intlayer/dictionary/team.json";
import Ee from "../../../.intlayer/dictionary/blog.json";
import De from "../../../.intlayer/dictionary/why-it-matters.json";
import Oe from "../../../.intlayer/dictionary/hero.json";
import { usePathname as ke } from "next/navigation";
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
}, g = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, Ae = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, je = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${Ae(n)}`, Ne = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= je && r.clear(), r.set(t, n), n;
}, Pe = "translation", S = "enumeration", C = "plural", w = "insertion", Fe = "object", Ie = "array", T = "markdown", E = "html", D = "gender", O = "select", k = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => A(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Fe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = A(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = A(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Le = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Re = (e, t) => e[Le(e, t) ?? "fallback"], j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = "default", ze = /[^A-Za-z0-9._&=-]/g, Be = /[^A-Za-z0-9._-]/g, Ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, N = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, He = (e) => e === void 0 ? M : typeof e == "string" ? N(e, ze) : Object.keys(e).sort().map((t) => `${N(t, Be)}=${N(String(e[t]), Be)}`).join("&"), Ue = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(He) : [He(e)], We = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? M : e[0] ?? "default";
}, Ge = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ke = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, qe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Je = (e, t) => {
	if (!Ke(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : We(Ue(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ge(e, n, t, s)).map((t) => qe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ye = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Xe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ue(n).join(",") : String(n)}`;
}).join("|") : "", P = "\x1B[0m", Ze = "\x1B[34m", Qe = "\x1B[31m", $e = "\x1B[32m", et = "\x1B[38;5;3m", tt = "\x1B[36m", nt = (e) => e, rt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = nt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, it = (e, t) => (n, r) => rt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? P : n : P}` : e, at = (e, t = et, n = P) => [e].flat().map((e) => F(e, t, n)).join(", ");
F("✗", Qe), F("✓", $e), F("⏲", Ze);
var ot = {
	faq: f,
	header: p,
	"open-positions": ee,
	"careers-benefits": te,
	settings: ne,
	footer: re,
	"results-table": ie,
	"contact-form": ae,
	"contact-header": oe,
	"about-grid": se,
	mockBanner: ce,
	"theme-toggle": le,
	"about-header": ue,
	"faq-header1": de,
	careers: fe,
	"blog-header": pe,
	route: me,
	"faq-list": he,
	"careers-header": ge,
	pricing: _e,
	"what-we-measure": ve,
	products: ye,
	contact: be,
	"blog-list": xe,
	about: Se,
	"understanding-impact": Ce,
	home: we,
	team: Te,
	blog: Ee,
	"why-it-matters": De,
	hero: Oe
}, st = () => ot, ct = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), lt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ct.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : lt(e ? `${e}.${String(n)}` : String(n)) }), I = /* @__PURE__ */ new Set(), ut = (e, t, n) => {
	let r = st()[e];
	return r ? Ft(r, t, n) : (I.has(e) || (it({ log: g })(typeof window > "u" ? `Dictionary ${at(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), I.add(e)), lt(e));
}, dt = 50, ft = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Set(), mt = (e) => {
	pt.has(e) || (pt.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ht = {
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
}, gt = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (mt(e), ht[e]);
};
function L(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ft.get(a);
	o || (o = /* @__PURE__ */ new Map(), ft.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? gt(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > dt && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var _t = (e, t, n) => e[L("PluralRules", n).select(t)] ?? e.other, vt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, yt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, bt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (yt(e) && yt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : bt(e[r], t[r]));
		return n;
	}
	return e;
}, xt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => bt(e, t));
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, St = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[E] : e[T];
}, Ct = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? E : T;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, wt = (e, t, n, r, i) => {
	let a = Ct(e, j(St(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Pe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return xt(o, e, t);
	}
}, Et = z, Dt = z, Ot = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => wt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
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
}, kt = z, At = z;
process.env.INTLAYER_OPTIMIZED_NESTING;
var jt = (e) => z, Mt = z, Nt = (e, t = !0) => [
	Tt(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Et,
	Dt,
	Ot,
	jt(e ?? m.defaultLocale),
	Mt,
	kt,
	At
], Pt = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Ft = (e, t, n) => {
	let { locale: r, selector: i } = Ye(t), a = Me(r ?? m.defaultLocale, Xe(i), n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Nt(r), c = Je(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Pt(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, It = ["en"], Lt = /* @__PURE__ */ new Set([
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
]), Rt = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, zt = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Rt)) {
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
				let e = Lt.has(i.toLowerCase());
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
}, Bt = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, B = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Bt(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Vt = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), Ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ut = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Wt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var V = {
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
}, Gt = (e = V) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Wt) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Kt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Wt && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ut(r, e, i));
			} catch {}
		}
	}
}, qt = Gt(V), Jt = (e, t) => Kt(e, {
	...V,
	isCookieEnabled: t
}), Yt = () => {
	let { locale: e } = n(H) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Xt = ({ children: e }) => (Yt(), e), Zt = () => {
	let { locale: e } = n(H) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Qt = ({ children: e }) => (Zt(), e), $t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, en = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? It,
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
	let a = Vt(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return tn(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (tn(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, H = t({
	locale: qt ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), an = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: d } = m ?? {}, [f, p] = c(e ?? qt ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		$t();
	}, []);
	let ee = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Jt(e, s);
		}
	}), te = nn(f);
	return u(H.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, on = ({ children: e, ...t }) => d(an, {
	...t,
	children: [
		u(Xt, {}),
		u(Qt, {}),
		e
	]
}), sn = (e) => u(on, { ...e }), cn = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && it({ log: g })(`${F("NextIntlClientProvider", tt)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = ke(), s = h?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? rn(o) : void 0);
	return u(sn, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, U = (e) => k(S, e), ln = (e) => k(D, e), W = (e, t) => k(E, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = zt(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return B(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => B(await e)), typeof n == "string") return B(n);
	try {
		return B(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), G = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, K = (e) => k(w, e, { fields: (() => {
	if (typeof e == "string") return G(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => G(await e)), typeof t == "string") return G(t);
	try {
		return G(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), un = (e) => k(C, e), dn = (e, t) => k(O, e, { variable: t }), fn = (e) => {
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
}, q = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : K(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : t;
		if (t.type === "argument") return t.format ? K(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : K(`{{${t.name}}}`);
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
				return e.__intlayer_icu_var = t.name, U(e);
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
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = q(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, U(e);
		}
	}
	return e.map((e) => q([e]));
}, pn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return q(fn(e));
		} catch {
			return e;
		}
	}
}, mn = (e) => A(e, {
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
}, J = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : K(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? W(t) : t;
		if (t.type === "argument") return t.format ? K(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : K(`{{${t.name}}}`);
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
					e[i] = J(a);
				}
				return e.__intlayer_icu_var = t.name, U(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = J(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return un(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = J(r);
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
	return e.map((e) => J([e]));
}, gn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return J(hn(e));
		} catch {
			return e;
		}
	}
}, _n = (e) => A(e, {
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
}, Y = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return K(t);
}, xn = (e) => {
	if (e.length === 1) return Y(e[0]);
	let t = {};
	return e.length === 2 ? U({
		1: Y(e[0]),
		fallback: Y(e[1])
	}) : e.length === 3 ? U({
		0: Y(e[0]),
		1: Y(e[1]),
		fallback: Y(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = Y(n) : t[r.toString()] = Y(n);
	}), t.__intlayer_vue_i18n_var = "count", U(t));
}, Sn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return xn(bn(e));
		} catch {
			return e;
		}
	}
}, Cn = (e) => A(e, {
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
], X = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Tn = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? L("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? L("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : L("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return L("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, En = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = X(t, r);
	return o === void 0 ? e : i ? Tn(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = X(t, r);
	return o === void 0 ? e : Tn(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = X(t, n);
	return r === void 0 ? e : String(r);
}), Z = (e, t) => e[t] ?? e.count ?? e.n, Q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return En(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Q(r[w], t, n);
	if (r.nodeType === "html") return Q(r[E], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return Q(_t(e, Number(Z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = wn.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wn.includes(t) || (o[t] = n);
		let s = Z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = L("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Re(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[O], i = Z(t, typeof r.variable == "string" ? r.variable : "value");
		return Q(vt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[D];
		return Q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Dn = (e, t = {}, n = "en") => {
	let r = Q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, On = (e) => (t, n = {}, r = "en") => Dn(typeof t == "string" ? e(t) : t, n, r), kn = {
	icu: mn,
	i18next: _n,
	"vue-i18n": Cn
}, An = (e, t = {}, n = "en", r = "icu") => On(kn[r])(e, t, n), $ = (e) => {
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
}, jn = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Mn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Mn(t.children, n), a = n[t.tag];
	return typeof a == "function" ? u(e, { children: a(i) }, r) : u(e, { children: i }, r);
}), Nn = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Nn(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Pn = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return In(e, (t) => Fn(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Fn = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = st();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = vn(ut(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return vn(ut(i, e), a);
	} catch {
		return;
	}
}, In = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return An(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = jn(t), o = r(e, i);
			return o === void 0 ? n(e) : u(l, { children: Mn($(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = jn(t), o = r(e, i);
			return o === void 0 ? n(e) : Nn($(o), a);
		}
	});
}, Ln = ((e) => {
	let { locale: t } = n(H) ?? {};
	return o(() => Pn(t, e), [t, e]);
});
function Rn() {
	let e = Ln(), t = i(), n = i(), r = i(), a = i();
	return d("form", {
		className: "space-y-6",
		children: [
			d("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [d("div", { children: [u("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e("contact.contact-form.yourName")
				}), u("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("contact.contact-form.yourName")
				})] }), d("div", { children: [u("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), u("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			d("div", { children: [u("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), d("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					u("option", { children: e("contact.contact-form.bugReport") }),
					u("option", { children: e("contact.contact-form.newBenchmarkIdea") }),
					u("option", { children: e("contact.contact-form.methodologyQuestion") }),
					u("option", { children: e("contact-header.getInTouch") })
				]
			})] }),
			d("div", { children: [u("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), u("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e("contact.contact-form.describeYourQuestionOrIdea")
			})] }),
			u("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("contact.contact-form.sendMessage")
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
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Bn("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		zn();
	}, []), u(cn, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var Hn = "en";
function Un({ children: e }) {
	return u(Vn, {
		locale: Hn,
		children: e
	});
}
function Wn() {
	return u(Un, { children: u(Rn, {}) });
}
export { Wn as default };

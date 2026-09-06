import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import u from "../../../../.intlayer/dictionary/products-grid.json";
import d from "../../../../.intlayer/dictionary/preferences-section.json";
import f from "../../../../.intlayer/dictionary/header.json";
import ee from "../../../../.intlayer/dictionary/open-positions.json";
import te from "../../../../.intlayer/dictionary/careers-benefits.json";
import ne from "../../../../.intlayer/dictionary/footer.json";
import re from "../../../../.intlayer/dictionary/results-table.json";
import ie from "../../../../.intlayer/dictionary/settings-header.json";
import ae from "../../../../.intlayer/dictionary/contact-form.json";
import oe from "../../../../.intlayer/dictionary/contact-header.json";
import se from "../../../../.intlayer/dictionary/about-grid.json";
import ce from "../../../../.intlayer/dictionary/pricing-tiers.json";
import le from "../../../../.intlayer/dictionary/mockBanner.json";
import ue from "../../../../.intlayer/dictionary/settings-footer.json";
import de from "../../../../.intlayer/dictionary/theme-toggle.json";
import fe from "../../../../.intlayer/dictionary/about-header.json";
import pe from "../../../../.intlayer/dictionary/profile-section.json";
import me from "../../../../.intlayer/dictionary/faq-header1.json";
import he from "../../../../.intlayer/dictionary/pricing-header.json";
import ge from "../../../../.intlayer/dictionary/blog-header.json";
import _e from "../../../../.intlayer/dictionary/team-header.json";
import ve from "../../../../.intlayer/dictionary/route.json";
import ye from "../../../../.intlayer/dictionary/faq-list.json";
import be from "../../../../.intlayer/dictionary/careers-header.json";
import xe from "../../../../.intlayer/dictionary/products-header.json";
import Se from "../../../../.intlayer/dictionary/what-we-measure.json";
import Ce from "../../../../.intlayer/dictionary/blog-list.json";
import we from "../../../../.intlayer/dictionary/understanding-impact.json";
import Te from "../../../../.intlayer/dictionary/team-grid.json";
import Ee from "../../../../.intlayer/dictionary/api-access-section.json";
import De from "../../../../.intlayer/dictionary/why-it-matters.json";
import Oe from "../../../../.intlayer/dictionary/hero.json";
import { Fragment as ke, jsx as p, jsxs as Ae } from "react/jsx-runtime";
import { Fragment as je, jsxDEV as m } from "react/jsx-dev-runtime";
var Me = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = {
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
}, g = {
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
}, Ne = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Pe = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, Fe = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && Pe(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, Ie = "__intlayerPreloaded", Le = ["en"], _ = "\x1B[0m", Re = "\x1B[34m", ze = "\x1B[31m", Be = "\x1B[32m", Ve = "\x1B[38;5;3m", He = "\x1B[36m", Ue = (e = {}) => ({
	defaultLocale: h?.defaultLocale ?? "en",
	mode: g?.mode ?? "prefix-no-default",
	locales: h?.locales ?? Le,
	rewrite: g?.rewrite,
	domains: g?.domains,
	...e
}), We = (e, t) => !!e && (t ?? h.locales).includes(e), Ge = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, Ke = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, qe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ke(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Je = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Ye = (e = v) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Je) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Xe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Je && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ke(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, qe(r, e, i));
			} catch {}
		}
	}
}, Ze = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = Ue(t);
	if (!n || !r) return n;
	let a = Me(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return We(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (We(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Qe = 50, y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), $e = (e) => {
	b.has(e) || (b.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, et = {
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
}, tt = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : ($e(e), et[e]);
};
function x(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = y.get(a);
	o || (o = /* @__PURE__ */ new Map(), y.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? tt(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Qe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var nt = (e) => e, rt = (e, t) => {
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
}), S = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, at = (e, t = Ve, n = _) => [e].flat().map((e) => S(e, t, n)).join(", ");
S("✗", ze), S("✓", Be), S("⏲", Re);
var ot = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = Ue(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = Fe(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = Ze(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return Ye() ?? t;
}, st, C, ct = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || st !== e) && (st = e, C = ot()), C;
}, w = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-wrapper-igvnle-en-CBtZMyQu.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, lt = ct(), ut = w[lt];
typeof window < "u" && typeof ut == "function" && ut().then((e) => {
	w.__intlayerPreloaded = {
		locale: lt,
		dictionary: e
	};
}, () => void 0);
var T = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-SettingsHeader-wrapper-igvnle-en-CBtZMyQu.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/zh.json").then((e) => e.default)
}, dt = ct(), ft = T[dt];
typeof window < "u" && typeof ft == "function" && ft().then((e) => {
	T.__intlayerPreloaded = {
		locale: dt,
		dictionary: e
	};
}, () => void 0);
var pt = /* @__PURE__ */ new WeakMap(), mt = 0, ht = (e) => {
	if (!e) return "base";
	let t = pt.get(e);
	if (t) return t;
	mt += 1;
	let n = `p${mt}`;
	return pt.set(e, n), n;
}, gt = 256, E = /* @__PURE__ */ new WeakMap(), _t = (e) => typeof e == "object" && !!e, vt = (e, t, n) => `${e}_${t}_${ht(n)}`, yt = (e, t) => {
	if (!_t(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!_t(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= gt && r.clear(), r.set(t, n), n;
}, bt = "translation", xt = "enumeration", St = "plural", O = "insertion", Ct = "object", wt = "array", Tt = "markdown", k = "html", Et = "gender", Dt = "select", A = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => j(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: wt,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ct,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = j(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = j(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ot = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, kt = (e, t) => e[Ot(e, t) ?? "fallback"], At = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = "default", jt = /[^A-Za-z0-9._&=-]/g, Mt = /[^A-Za-z0-9._-]/g, Nt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, N = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Nt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Pt = (e) => e === void 0 ? M : typeof e == "string" ? N(e, jt) : Object.keys(e).sort().map((t) => `${N(t, Mt)}=${N(String(e[t]), Mt)}`).join("&"), Ft = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(Pt) : [Pt(e)], It = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? M : e[0] ?? "default";
}, Lt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Rt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, zt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Bt = (e, t) => {
	if (!Rt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : It(Ft(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Lt(e, n, t, s)).map((t) => zt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Vt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ht = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ft(n).join(",") : String(n)}`;
}).join("|") : "", Ut = {
	"products-grid": u,
	"preferences-section": d,
	header: f,
	"open-positions": ee,
	"careers-benefits": te,
	footer: ne,
	"results-table": re,
	"settings-header": ie,
	"contact-form": ae,
	"contact-header": oe,
	"about-grid": se,
	"pricing-tiers": ce,
	mockBanner: le,
	"settings-footer": ue,
	"theme-toggle": de,
	"about-header": fe,
	"profile-section": pe,
	"faq-header1": me,
	"pricing-header": he,
	"blog-header": ge,
	"team-header": _e,
	route: ve,
	"faq-list": ye,
	"careers-header": be,
	"products-header": xe,
	"what-we-measure": Se,
	"blog-list": Ce,
	"understanding-impact": we,
	"team-grid": Te,
	"api-access-section": Ee,
	"why-it-matters": De,
	hero: Oe
}, Wt = () => Ut, Gt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Kt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Gt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Kt(e ? `${e}.${String(n)}` : String(n)) }), qt = /* @__PURE__ */ new Set(), Jt = (e, t, n) => {
	let r = Wt()[e];
	return r ? hn(r, t, n) : (qt.has(e) || (it({ log: Ne })(typeof window > "u" ? `Dictionary ${at(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), qt.add(e)), Kt(e));
}, Yt = (e, t, n) => e[x("PluralRules", n).select(t)] ?? e.other, Xt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Zt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Qt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Zt(e) && Zt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Qt(e[r], t[r]));
		return n;
	}
	return e;
}, $t = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Qt(e, t));
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, en = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[k] : e[Tt];
}, tn = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? k : Tt;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, nn = (e, t, n, r, i) => {
	let a = tn(e, At(en(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, rn = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: bt,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return $t(o, e, t);
	}
}, an = F, on = (e) => F, sn = F, cn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: O }], i = e[O], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => nn(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = At(i, e);
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
}, ln = F, un = F, dn = (e) => F, fn = F, pn = (e, t = !0) => [
	rn(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	an,
	sn,
	cn,
	dn(e ?? h.defaultLocale),
	fn,
	ln,
	un
], mn = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), hn = (e, t, n) => {
	let { locale: r, selector: i } = Vt(t), a = vt(r ?? h.defaultLocale, Ht(i), n), o = yt(e, a);
	if (o.hit) return o.content;
	let s = n ?? pn(r), c = Bt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return mn(e.content, t, s);
	};
	return c === null ? D(e, a, null) : Array.isArray(c) ? D(e, a, c.map(l)) : D(e, a, l(c));
}, gn = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[Ie];
	if (n && n.locale === t) return n.dictionary;
}, _n = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", vn = /\{\{\s*(.*?)\s*\}\}/g, yn = (e, t = {}) => {
	if (!Object.values(t).some(_n)) return {
		isSimple: !0,
		parts: e.replace(vn, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(vn), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, I = (e) => A(xt, e), bn = (e) => A(Et, e), xn = (e) => {
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
		let o = xn(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Sn = /* @__PURE__ */ new Set([
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
]), Cn = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, wn = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Cn)) {
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
				let e = Sn.has(i.toLowerCase());
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
}, R = (e, t) => A(k, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = wn(e);
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
})() }), z = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, B = (e) => A(O, e, { fields: (() => {
	if (typeof e == "string") return z(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => z(await e)), typeof t == "string") return z(t);
	try {
		return z(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Tn = (e) => A(St, e), En = (e, t) => A(Dt, e, { variable: t }), Dn = (e) => {
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
}, V = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : B(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
		if (t.type === "argument") return t.format ? B(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : B(`{{${t.name}}}`);
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
					e[i] = V(a);
				}
				return e.__intlayer_icu_var = t.name, I(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = V(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Tn(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = V(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? bn({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : En(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = V(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, I(e);
		}
	}
	return e.map((e) => V([e]));
}, On = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return V(Dn(e));
		} catch {
			return e;
		}
	}
}, kn = (e) => j(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...On
	}]
}), An = (e) => {
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
}, H = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : B(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
		if (t.type === "argument") return t.format ? B(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : B(`{{${t.name}}}`);
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
					e[i] = H(a);
				}
				return e.__intlayer_icu_var = t.name, I(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = H(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Tn(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = H(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? bn({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : En(e, t.name);
		}
	}
	return e.map((e) => H([e]));
}, jn = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return H(An(e));
		} catch {
			return e;
		}
	}
}, Mn = (e) => j(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...jn
	}]
}), U = (e, t, n = ".") => {
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
}, Nn = (e) => {
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
}, Pn = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(Nn);
}, W = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return B(t);
}, Fn = (e) => {
	if (e.length === 1) return W(e[0]);
	let t = {};
	return e.length === 2 ? I({
		1: W(e[0]),
		fallback: W(e[1])
	}) : e.length === 3 ? I({
		0: W(e[0]),
		1: W(e[1]),
		fallback: W(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = W(n) : t[r.toString()] = W(n);
	}), t.__intlayer_vue_i18n_var = "count", I(t));
}, In = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return Fn(Pn(e));
		} catch {
			return e;
		}
	}
}, Ln = (e) => j(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...In
	}]
}), Rn = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, zn = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? x("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? x("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : x("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return x("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Bn = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : zn(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Bn(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[O], t, n);
	if (r.nodeType === "html") return q(r[k], t, n);
	if (r.nodeType === "plural") {
		let e = r[St];
		return q(Yt(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[xt], i = Rn.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Rn.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = x("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? kt(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Dt], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Xt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Et];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Vn = {
	icu: (e) => kn(e),
	i18next: (e) => Mn(e),
	"vue-i18n": (e) => Ln(e)
}, Hn = (e, t = {}, n = "en", r = "icu") => {
	let i = q(typeof e == "string" ? Vn[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Un = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Wn = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Wn(e.children, n), a = n[e.tag];
	return typeof a == "function" ? p(t, { children: a(i) }, r) : p(t, { children: i }, r);
}), Y = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Y(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Gn = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Jn(e, (t) => Kn(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Kn = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = Wt();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = U(Jt(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return U(Jt(i, e), a);
	} catch {
		return;
	}
}, qn = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Jn(e, (e) => U(t, r(e)), r);
}, Jn = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Hn(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Un(t), o = r(e, i);
			return o === void 0 ? n(e) : p(ke, { children: Wn(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Un(t), o = r(e, i);
			return o === void 0 ? n(e) : Y(J(o), a);
		}
	});
}, Yn = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return {
		settled: r,
		read() {
			if (t === "pending") throw r;
			if (t === "error") throw n;
			return n;
		}
	};
}, X = /* @__PURE__ */ new Map(), Xn = (e, t) => (X.has(e) || X.set(e, Yn(t)), X.get(e).read()), Zn = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : p(ke, { children: e });
	return new Proxy(r, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, Qn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Zn({
		...n,
		value: n.children,
		children: n.children
	})
}, $n = F, er = (e, n) => {
	let i = yn(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, tr = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: O }], i = e[O], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => nn(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = er(i, e);
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
}, nr = F, rr = F, Z = /* @__PURE__ */ new Map(), ir = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		rn(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		an,
		on(e ?? h.defaultLocale),
		sn,
		dn(e ?? h.defaultLocale),
		fn,
		ln,
		un,
		Qn,
		$n,
		tr,
		nr,
		rr
	];
	return Z.set(n, r), r;
}, ar = (e, t) => hn(e, t, ir(typeof t == "object" && t ? t.locale : t)), or = Ye(v), sr = (e, t) => Xe(e, {
	...v,
	isCookieEnabled: t
}), cr = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, lr = ({ children: e }) => (cr(), e), ur = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, dr = ({ children: e }) => (ur(), e), fr = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: or ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), pr = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = h ?? {}, [d, f] = l(e ?? or ?? t ?? u);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		fr();
	}, []);
	let ee = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), sr(e, s);
		}
	}), te = Ge(d);
	return p(Q.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, mr = ({ children: e, ...t }) => Ae(pr, {
	...t,
	children: [
		p(lr, {}),
		p(dr, {}),
		e
	]
}), hr = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? h.defaultLocale, l = gn(e, c);
	if (l) return ar(l, c);
	let u = e;
	return ar(Xn(`${String(t)}.${c}`, u[c]?.()), c);
}, gr = ((e, t, n) => {
	let { locale: r } = a(Q) ?? {};
	return qn(r, hr(e, t), n);
}), _r = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && it({ log: Ne })(`${S("IntlProvider", He)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), p(mr, {
	locale: e,
	children: t
}, String(e))), vr = ((e) => {
	let { locale: t } = a(Q) ?? {};
	return s(() => Gn(t, e), [t, e]);
}), yr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/MockBanner.tsx", br = () => {
	let e = vr();
	return m("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: yr,
		lineNumber: 6,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsHeader.tsx";
function xr() {
	let e = gr(w, "header"), t = gr(T, "settings-header");
	return m(je, { children: [
		m(br, {}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		m("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("settings")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		m("p", {
			className: "mb-8 text-muted-foreground",
			children: t("manageYourAccountPreferencesAnd")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Sr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Cr({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(_r, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Sr,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Sr,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var wr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsHeader.wrapper.tsx";
function Tr() {
	return m(Cr, { children: m(xr, {}, void 0, !1, {
		fileName: wr,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: wr,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Tr as default };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = t({
	content: () => i,
	default: () => a,
	key: () => r
}), r = "header", i = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "settings-header", c = { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." }, l = {
	key: s,
	content: c
};
export { n, o as t };

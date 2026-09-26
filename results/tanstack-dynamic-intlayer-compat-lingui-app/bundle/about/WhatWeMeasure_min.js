import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, m = {
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
}, h = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, g = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ee = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && g(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, te = ["en"], _ = "\x1B[0m", v = "\x1B[34m", y = "\x1B[31m", ne = "\x1B[32m", re = "\x1B[38;5;3m", ie = "__intlayerPreloaded", ae = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? te,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), oe = (e, t) => !!e && (t ?? p.locales).includes(e), se = (e, t = p?.locales, n = p?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, ce = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, le = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ce(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ue = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var b = {
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
}, x = (e = b) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ue) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, de = !1, fe, pe = () => typeof window > "u" ? x(b) : (de ||= (fe = x(b), !0), fe), me = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (de = !1, !ue && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ce(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, le(r, e, i));
			} catch {}
		}
	}
}, he = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ae(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return oe(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (oe(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ge = 50, _e = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set(), ye = (e) => {
	ve.has(e) || (ve.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, be = {
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
}, xe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ye(e), be[e]);
};
function S(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = _e.get(a);
	o || (o = /* @__PURE__ */ new Map(), _e.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? xe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ge && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Se = (e) => e, Ce = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Se(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, we = (e, t) => (n, r) => Ce(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), C = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, Te = (e, t = re, n = _) => [e].flat().map((e) => C(e, t, n)).join(", ");
C("✗", y), C("✓", ne), C("⏲", v);
var Ee = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ae(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ee(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = he(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return x() ?? t;
}, De, w, Oe = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || De !== e) && (De = e, w = Ee()), w;
}, T = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/de.json").then((e) => e.default),
	en: () => import("./intlayer-WhatWeMeasure-wrapper-1y4jyu-en-BO_ob8vv.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/zh.json").then((e) => e.default)
}, E = Oe(), ke = T[E];
typeof window < "u" && typeof ke == "function" && ke().then((e) => {
	T.__intlayerPreloaded = {
		locale: E,
		dictionary: e
	};
}, () => void 0);
var Ae = t(null), je = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, Me = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ne = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, D = (e, t) => {
	let n = Me(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Me(n, t);
	}
}, Pe = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${Fe(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Fe = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Pe).join("") : String(e ?? ""), Ie = "translation", O = "enumeration", k = "plural", Le = "condition", A = "insertion", Re = "object", ze = "array", Be = "markdown", j = "html", M = "gender", N = "select", P = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), F = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), I = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, I);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => I(e, F(t, e, {
		type: ze,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Re,
			key: r
		};
		if (t.eager) {
			n[r] = I(e[r], F(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = I(e[r], F(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ve = (e) => P(O, e), He = (e) => P(M, e), Ue = (e) => {
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
		let o = Ue(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, We = /* @__PURE__ */ new Set([
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
]), Ge = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Ke = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ge)) {
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
				let e = We.has(i.toLowerCase());
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
}, R = (e, t) => P(j, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Ke(e);
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
}, B = (e) => P(A, e, { fields: (() => {
	if (typeof e == "string") return z(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => z(await e)), typeof t == "string") return z(t);
	try {
		return z(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), qe = (e) => P(k, e), Je = (e, t) => P(N, e, { variable: t }), Ye = (e) => {
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
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : B(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
		if (t?.type === "argument") return t.format ? B(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : B(`{{${t.name}}}`);
		if (t?.type === "plural") {
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
				return e.__intlayer_icu_var = t.name, Ve(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = V(i);
			}
			return qe(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = V(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? He({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Je(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = V(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Ve(e);
		}
	}
	return e.map((e) => V([e]));
}, Xe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return V(Ye(e));
		} catch {
			return e;
		}
	}
}, Ze = (e) => I(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Xe
	}]
}), Qe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, $e = (e, t) => e[Qe(e, t) ?? "fallback"], et = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, tt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, nt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], H = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, rt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? S("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? S("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : S("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return S("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, it = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : i ? rt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : rt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = H(t, n);
	return r === void 0 ? e : String(r);
}), U = (e, t) => e[t] ?? e.count ?? e.n, W = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return it(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return W(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(W(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return W(r[A], t, n);
	if (r.nodeType === "html") return W(r[j], t, n);
	if (r.nodeType === "plural") {
		let e = r[k];
		return W(et(e, Number(U(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[O], i = nt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) nt.includes(t) || (o[t] = n);
		let s = U(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? $e(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return W(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[N], i = U(t, typeof r.variable == "string" ? r.variable : "value");
		return W(tt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[M];
		return W(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, at = (e, t = {}, n = "en") => {
	let r = W(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ot = ((e) => (t, n = {}, r = "en") => at(typeof t == "string" ? e(t) : t, n, r))(Ze), st = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ct = class extends je {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Ne(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = st(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = D(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = D(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = D(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Fe(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? at(c.node, o, s) : ot(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, lt = (e) => {
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
}, G = /* @__PURE__ */ new Map(), ut = (e, t) => (G.has(e) || G.set(e, lt(t)), G.get(e).read()), dt = /* @__PURE__ */ new Map(), ft = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), pt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = dt.get(t);
	i || (i = /* @__PURE__ */ new Map(), dt.set(t, i));
	let a = i.get(r);
	return a || (a = ft(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, mt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, pt(t)), ht = /* @__PURE__ */ new WeakMap(), gt = 0, _t = (e) => {
	if (!e) return "base";
	let t = ht.get(e);
	if (t) return t;
	gt += 1;
	let n = `p${gt}`;
	return ht.set(e, n), n;
}, vt = 256, K = /* @__PURE__ */ new WeakMap(), yt = (e) => typeof e == "object" && !!e, bt = (e, t, n) => `${e}_${t}_${_t(n)}`, xt = (e, t) => {
	if (!yt(e)) return { hit: !1 };
	let n = K.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, q = (e, t, n) => {
	if (!yt(e)) return n;
	let r = K.get(e);
	return r || (r = /* @__PURE__ */ new Map(), K.set(e, r)), r.size >= vt && r.clear(), r.set(t, n), n;
}, St = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Ct = () => ({}), wt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Tt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : wt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Tt(e ? `${e}.${String(n)}` : String(n)) }), Et = /* @__PURE__ */ new Set(), Dt = (e, t, n) => {
	let r = Ct()[e];
	return r ? Yt(r, t, n) : (Et.has(e) || (we({ log: h })(typeof window > "u" ? `Dictionary ${Te(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Et.add(e)), Tt(e));
}, Ot = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, kt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ot(e) || !Ot(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? kt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, At = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => kt(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, jt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[j] : e[Be];
}, Mt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? j : Be;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Nt = (e, t, n, r, i) => {
	let a = Mt(e, St(jt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Pt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Ft = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = At(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ie,
				key: e
			}]
		});
	}
}, It = Y, Lt = (e) => Y, Rt = Y, zt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => Nt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = St(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ht(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Bt = [
	O,
	Le,
	k,
	M,
	N
], Vt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Bt.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && Pt(i) ? i(n) : i;
	};
}, Ht = (e, t) => typeof t == "function" && Bt.includes(e?.nodeType ?? "") ? (n) => Vt(e, t, n) : t, Ut = Y, Wt = Y, Gt = (e) => Y, Kt = Y, qt = (e, t = !0) => [
	Ft(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	It,
	Lt(e ?? p.defaultLocale),
	Rt,
	zt,
	Gt(e ?? p.defaultLocale),
	Kt,
	Ut,
	Wt
].filter((e) => e !== Y), Jt = (e, t, n = []) => I(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), Yt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = bt(r ?? p.defaultLocale, "", n), o = xt(e, a);
	if (o.hit) return o.content;
	let s = n ?? qt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return Jt(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? q(e, a, null) : Array.isArray(c) ? q(e, a, c.map(l)) : q(e, a, l(c));
}, Xt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, Zt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Qt = /\{\{\s*(.*?)\s*\}\}/g, $t = (e, t = {}) => {
	if (!Object.values(t).some(Zt)) return {
		isSimple: !0,
		parts: e.replace(Qt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Qt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, en = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => mt({
		value: t.children,
		children: t.children
	})
}, tn = Y, nn = (t, r) => {
	let i = $t(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, rn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => Nt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = nn(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ht(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, an = Y, on = Y, Z = /* @__PURE__ */ new Map(), sn = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		en,
		Ft(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		It,
		Lt(e ?? p.defaultLocale),
		Rt,
		Gt(e ?? p.defaultLocale),
		Kt,
		Ut,
		Wt,
		tn,
		rn,
		an,
		on
	].filter((e) => e !== Y);
	return Z.set(n, r), r;
}, cn = (e, t) => Yt(e, t, sn(typeof t == "object" && t ? t.locale : t)), ln = pe, Q = (e, t) => me(e, {
	...b,
	isCookieEnabled: t
}), un = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, dn = t({
	get locale() {
		return ln() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), fn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? ln() ?? t ?? m), [ee, te] = c(e);
	e !== ee && (te(e), e && e !== h && g(e)), o(() => {
		un();
	}, []);
	let _ = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Q(e, d);
		}
	}, [
		h,
		f,
		d
	]), v = a ?? _, y = se(h), ne = s(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: l
	}), [
		y,
		v,
		n,
		l
	]);
	return u(dn.Provider, {
		value: ne,
		children: r
	});
}, pn = ({ children: e, ...t }) => d(fn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: mn, locales: $ } = p ?? {}, hn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(dn) ?? {};
	return {
		locale: n,
		defaultLocale: mn,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Q(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, gn = (e, t) => {
	let n = new ct({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, _n = ([e, t], n) => cn(Xt(e, n) ?? ut(`${t}.${n}`, e[n]?.()), n), vn = (...e) => {
	let { locale: t } = hn(), n = t ?? p.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return s(() => gn(n, Object.fromEntries(e.map((e) => [e[1], _n(e, n)]))), [n, r]);
}, yn = () => {
	try {
		return Object.keys(Ct());
	} catch {
		return [];
	}
}, bn = (e, t) => {
	let n = yn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Dt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = D(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = D(a(t), e);
		if (n !== void 0) return n;
	}
}, xn = (e) => {
	let t = {};
	for (let n of yn()) try {
		Object.assign(t, Ne(Dt(n, e)));
	} catch {}
	return t;
}, Sn = () => ({
	lookup: bn,
	all: xn
}), Cn = (e) => new ct({
	...e,
	registry: Sn()
});
Cn({ locale: "en" });
var wn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), u(Ae.Provider, {
		value: i,
		children: u(pn, {
			locale: s,
			children: n
		})
	});
};
function Tn() {
	let { i18n: e } = vn([T, "what-we-measure"]), t = (t) => e._(`what-we-measure.${t}`), n = [
		{
			metric: t("bundleSizeImpact"),
			desc: t("theAdditionalJavascriptBytesSent")
		},
		{
			metric: t("renderingOverhead"),
			desc: t("howMuchExtraTimeThe")
		},
		{
			metric: t("hydrationCost"),
			desc: t("duringSsrTranslationDataIs")
		},
		{
			metric: t("lazyLoadingEffectiveness"),
			desc: t("whetherSplittingTranslationsByRoute")
		},
		{
			metric: t("localeSwitchSpeed"),
			desc: t("howFastTheAppCan")
		}
	];
	return d("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [u("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: t("whatWeMeasure")
		}), u("ul", {
			className: "space-y-4",
			children: n.map((e) => d("li", {
				className: "rounded-md border border-border p-4",
				children: [u("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), u("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
function En(e, t) {
	let n = Cn();
	return n.activate(e), n;
}
function Dn({ children: e }) {
	let t = s(() => En("en"), []);
	return u(wn, {
		i18n: t,
		children: e
	});
}
function On() {
	return u(Dn, { children: u(Tn, {}) });
}
export { On as default };
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "what-we-measure", r = {
	bundleSizeImpact: "Bundle size impact",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	hydrationCost: "Hydration cost",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	localeSwitchSpeed: "Locale switch speed",
	renderingOverhead: "Rendering overhead",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	whatWeMeasure: "What We Measure",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
}, i = {
	key: n,
	content: r
};
export { t };

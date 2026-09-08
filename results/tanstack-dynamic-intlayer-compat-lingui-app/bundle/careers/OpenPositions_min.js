import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = {
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
}, te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ne = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, re = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ne(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ie = "__intlayerPreloaded", ae = ["en"], _ = "\x1B[0m", oe = "\x1B[34m", se = "\x1B[31m", ce = "\x1B[32m", le = "\x1B[38;5;3m", ue = (e = {}) => ({
	defaultLocale: h?.defaultLocale ?? "en",
	mode: g?.mode ?? "prefix-no-default",
	locales: h?.locales ?? ae,
	rewrite: g?.rewrite,
	domains: g?.domains,
	...e
}), de = (e, t) => !!e && (t ?? h.locales).includes(e), fe = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, pe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, me = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = pe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, v = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, he = (e = y) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!v) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ge = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !v && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: pe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, me(r, e, i));
			} catch {}
		}
	}
}, _e = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ue(t);
	if (!n || !r) return n;
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return de(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (de(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ve = 50, ye = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set(), xe = (e) => {
	be.has(e) || (be.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Se = {
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
}, Ce = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (xe(e), Se[e]);
};
function b(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ye.get(a);
	o || (o = /* @__PURE__ */ new Map(), ye.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ve && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var we = (e) => e, Te = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = we(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ee = (e, t) => (n, r) => Te(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), x = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? _ : n : _}` : e, De = (e, t = le, n = _) => [e].flat().map((e) => x(e, t, n)).join(", ");
x("✗", se), x("✓", ce), x("⏲", oe);
var Oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ue(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = re(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = _e(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return he() ?? t;
}, ke, S, Ae = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (S === void 0 || ke !== e) && (ke = e, S = Oe()), S;
}, C = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/de.json").then((e) => e.default),
	en: () => import("./intlayer-OpenPositions-wrapper-mat519-en-QmpXLrjZ.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/zh.json").then((e) => e.default)
}, je = Ae(), Me = C[je];
typeof window < "u" && typeof Me == "function" && Me().then((e) => {
	C.__intlayerPreloaded = {
		locale: je,
		dictionary: e
	};
}, () => void 0);
var Ne = class {
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
}, Pe = (e, t) => {
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
}, Fe = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, w = (e, t) => {
	let n = Pe(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Pe(n, t);
	}
}, Ie = (e) => {
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
			i.push(`${t} {${T(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, T = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Ie).join("") : String(e ?? ""), Le = "translation", Re = "enumeration", ze = "plural", E = "insertion", Be = "object", Ve = "array", He = "markdown", D = "html", Ue = "gender", We = "select", O = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => k(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, {
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
			n[r] = k(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = k(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, A = (e) => O(Re, e), Ge = (e) => O(Ue, e), Ke = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, j = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ke(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, qe = /* @__PURE__ */ new Set([
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
]), Je = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Ye = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Je)) {
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
				let e = qe.has(i.toLowerCase());
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
}, M = (e, t) => O(D, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Ye(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return j(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => j(await e)), typeof n == "string") return j(n);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), N = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, P = (e) => O(E, e, { fields: (() => {
	if (typeof e == "string") return N(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => N(await e)), typeof t == "string") return N(t);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), F = (e) => O(ze, e), I = (e, t) => O(We, e, { variable: t }), Xe = (e) => {
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
}, L = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = L(a);
				}
				return e.__intlayer_icu_var = t.name, A(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = L(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return F(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = L(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ge({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : I(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = L(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, A(e);
		}
	}
	return e.map((e) => L([e]));
}, Ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return L(Xe(e));
		} catch {
			return e;
		}
	}
}, Qe = (e) => k(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ze
	}]
}), $e = (e) => {
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
}, R = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = R(a);
				}
				return e.__intlayer_icu_var = t.name, A(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return F(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = R(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ge({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : I(e, t.name);
		}
	}
	return e.map((e) => R([e]));
}, et = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return R($e(e));
		} catch {
			return e;
		}
	}
}, tt = (e) => k(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...et
	}]
}), nt = (e) => {
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
}, rt = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(nt);
}, z = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return P(t);
}, it = (e) => {
	if (e.length === 1) return z(e[0]);
	let t = {};
	return e.length === 2 ? A({
		1: z(e[0]),
		fallback: z(e[1])
	}) : e.length === 3 ? A({
		0: z(e[0]),
		1: z(e[1]),
		fallback: z(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = z(n) : t[r.toString()] = z(n);
	}), t.__intlayer_vue_i18n_var = "count", A(t));
}, at = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return it(rt(e));
		} catch {
			return e;
		}
	}
}, ot = (e) => k(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...at
	}]
}), st = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ct = (e, t) => e[st(e, t) ?? "fallback"], lt = (e, t, n) => e[b("PluralRules", n).select(t)] ?? e.other, ut = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, dt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], B = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ft = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? b("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? b("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : b("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return b("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, pt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : ft(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}), V = (e, t) => e[t] ?? e.count ?? e.n, H = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return pt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return H(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(H(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return H(r[E], t, n);
	if (r.nodeType === "html") return H(r[D], t, n);
	if (r.nodeType === "plural") {
		let e = r[ze];
		return H(lt(e, Number(V(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Re], i = dt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) dt.includes(t) || (o[t] = n);
		let s = V(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = b("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ct(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return H(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[We], i = V(t, typeof r.variable == "string" ? r.variable : "value");
		return H(ut(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ue];
		return H(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, mt = {
	icu: (e) => Qe(e),
	i18next: (e) => tt(e),
	"vue-i18n": (e) => ot(e)
}, ht = (e, t = {}, n = "en", r = "icu") => {
	let i = H(typeof e == "string" ? mt[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, gt = class extends Ne {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_dictionaryContent;
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
		return this._dictionaryContent !== void 0 && Object.assign(e, Fe(this._dictionaryContent)), {
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
	bindDictionaryContent(e) {
		return this._dictionaryContent = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	resolveTemplate(e) {
		if (this._dictionaryContent !== void 0) {
			let t = w(this._dictionaryContent, e);
			if (t !== void 0) return T(t);
		}
		let t = this._registry?.lookup(e, this._locale);
		if (t !== void 0) return t;
		let n = this._catalogs[this._locale];
		if (n) {
			let t = w(n, e);
			if (t !== void 0) return T(t);
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {};
		return ht(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, _t = t(null), vt = /* @__PURE__ */ new WeakMap(), yt = 0, bt = (e) => {
	if (!e) return "base";
	let t = vt.get(e);
	if (t) return t;
	yt += 1;
	let n = `p${yt}`;
	return vt.set(e, n), n;
}, xt = 256, U = /* @__PURE__ */ new WeakMap(), St = (e) => typeof e == "object" && !!e, Ct = (e, t, n) => `${e}_${t}_${bt(n)}`, wt = (e, t) => {
	if (!St(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!St(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= xt && r.clear(), r.set(t, n), n;
}, Tt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", Et = /[^A-Za-z0-9._&=-]/g, Dt = /[^A-Za-z0-9._-]/g, Ot = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ot);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, kt = (e) => e === void 0 ? G : typeof e == "string" ? K(e, Et) : Object.keys(e).sort().map((t) => `${K(t, Dt)}=${K(String(e[t]), Dt)}`).join("&"), At = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(kt) : [kt(e)], jt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, Mt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Nt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Pt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ft = (e, t) => {
	if (!Nt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : jt(At(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Mt(e, n, t, s)).map((t) => Pt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, It = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Lt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? At(n).join(",") : String(n)}`;
}).join("|") : "", q = () => ({}), Rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), zt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : zt(e ? `${e}.${String(n)}` : String(n)) }), Bt = /* @__PURE__ */ new Set(), Vt = (e, t, n) => {
	let r = q()[e];
	return r ? on(r, t, n) : (Bt.has(e) || (Ee({ log: te })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Bt.add(e)), zt(e));
}, Ht = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ut = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ht(e) && Ht(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ut(e[r], t[r]));
		return n;
	}
	return e;
}, Wt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ut(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Gt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[D] : e[He];
}, Kt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? D : He;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, qt = (e, t, n, r, i) => {
	let a = Kt(e, Tt(Gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Jt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
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
		return Wt(o, e, t);
	}
}, Yt = Y, Xt = (e) => Y, Zt = Y, Qt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => qt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Tt(i, e);
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
}, $t = Y, en = Y, tn = (e) => Y, nn = Y, rn = (e, t = !0) => [
	Jt(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	Yt,
	Zt,
	Qt,
	tn(e ?? h.defaultLocale),
	nn,
	$t,
	en
], an = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), on = (e, t, n) => {
	let { locale: r, selector: i } = It(t), a = Ct(r ?? h.defaultLocale, Lt(i), n), o = wt(e, a);
	if (o.hit) return o.content;
	let s = n ?? rn(r), c = Ft(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return an(e.content, t, s);
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, sn = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, cn = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", ln = /\{\{\s*(.*?)\s*\}\}/g, un = (e, t = {}) => {
	if (!Object.values(t).some(cn)) return {
		isSimple: !0,
		parts: e.replace(ln, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(ln), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, dn = () => {
	try {
		return Object.keys(q());
	} catch {
		return [];
	}
}, fn = (e, t) => {
	for (let n of dn()) {
		let r;
		try {
			r = Vt(n, t);
		} catch {
			continue;
		}
		let i = w(r, e);
		if (i !== void 0) return T(i);
	}
}, pn = (e) => {
	let t = {};
	for (let n of dn()) try {
		Object.assign(t, Fe(Vt(n, e)));
	} catch {}
	return t;
}, mn = () => ({
	lookup: fn,
	all: pn
}), hn = (e) => {
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
}, X = /* @__PURE__ */ new Map(), gn = (e, t) => (X.has(e) || X.set(e, hn(t)), X.get(e).read()), _n = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
	return new Proxy(i, { get(e, r, i) {
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
}, vn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => _n({
		...n,
		value: n.children,
		children: n.children
	})
}, yn = Y, bn = (t, r) => {
	let i = un(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, xn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => qt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = bn(i, e);
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
}, Sn = Y, Cn = Y, Z = /* @__PURE__ */ new Map(), wn = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Jt(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		Yt,
		Xt(e ?? h.defaultLocale),
		Zt,
		tn(e ?? h.defaultLocale),
		nn,
		$t,
		en,
		vn,
		yn,
		xn,
		Sn,
		Cn
	];
	return Z.set(n, r), r;
}, Tn = (e, t) => on(e, t, wn(typeof t == "object" && t ? t.locale : t)), En = he(y), Dn = (e, t) => ge(e, {
	...y,
	isCookieEnabled: t
}), On = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, kn = ({ children: e }) => (On(), e), An = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, jn = ({ children: e }) => (An(), e), Mn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: En ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Nn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = h ?? {}, [f, p] = l(e ?? En ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Mn();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Dn(e, s);
		}
	}), ee = fe(f);
	return d(Q.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Pn = ({ children: e, ...t }) => f(Nn, {
	...t,
	children: [
		d(kn, {}),
		d(jn, {}),
		e
	]
}), Fn = (e, t, n) => {
	let { locale: r, variant: i } = a(Q) ?? {}, { locale: o, selector: s } = {
		locale: n,
		selector: void 0
	}, c = o ?? r ?? h.defaultLocale, l = sn(e, c);
	if (l) return Tn(l, c);
	let u = e;
	return Tn(gn(`${String(t)}.${c}`, u[c]?.()), c);
}, In = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { defaultLocale: n, locales: r } = h ?? {}, { locale: o, setLocale: s, isCookieEnabled: c } = a(Q) ?? {};
	return {
		locale: o,
		defaultLocale: n,
		availableLocales: r,
		setLocale: i((n) => {
			if (!r?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			s(n), Dn(n, e ?? c ?? !0), t?.(n);
		}, [
			r,
			t,
			s,
			e
		])
	};
}, Ln = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), d(_t.Provider, {
		value: i,
		children: d(Pn, {
			locale: s,
			children: n
		})
	});
}, Rn = (e) => new gt({
	...e,
	registry: mn()
});
Rn({ locale: "en" });
var zn = (e, t) => {
	let n = Fn(e, t), { locale: r } = In();
	return s(() => {
		let e = new gt({ locale: r }).bindDictionaryContent(n);
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [r, n]);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/careers/OpenPositions.tsx";
function Bn() {
	let { i18n: e } = zn(C, "open-positions"), t = [
		{
			title: e._({
				id: "seniorFrontendEngineer",
				message: "Senior Frontend Engineer"
			}),
			location: e._({
				id: "remote",
				message: "Remote"
			}),
			type: e._({
				id: "fullTime",
				message: "Full-time"
			}),
			dept: e._({
				id: "engineering",
				message: "Engineering"
			}),
			desc: e._({
				id: "buildAndMaintainOurBenchmarking",
				message: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
			})
		},
		{
			title: e._({
				id: "backendEngineer",
				message: "Backend Engineer"
			}),
			location: e._({
				id: "remote",
				message: "Remote"
			}),
			type: e._({
				id: "fullTime",
				message: "Full-time"
			}),
			dept: e._({
				id: "engineering",
				message: "Engineering"
			}),
			desc: e._({
				id: "designAndScaleOurCloud",
				message: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
			})
		},
		{
			title: e._({
				id: "technicalWriter",
				message: "Technical Writer"
			}),
			location: e._({
				id: "remote",
				message: "Remote"
			}),
			type: e._({
				id: "partTime",
				message: "Part-time"
			}),
			dept: e._({
				id: "documentation",
				message: "Documentation"
			}),
			desc: e._({
				id: "createComprehensiveGuidesApiReferences",
				message: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
			})
		},
		{
			title: e._({
				id: "devrelEngineer",
				message: "DevRel Engineer"
			}),
			location: e._({
				id: "sanFranciscoRemote",
				message: "San Francisco / Remote"
			}),
			type: e._({
				id: "fullTime",
				message: "Full-time"
			}),
			dept: e._({
				id: "community",
				message: "Community"
			}),
			desc: e._({
				id: "engageWithTheI18nCommunity",
				message: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
			})
		},
		{
			title: e._({
				id: "qaEngineer",
				message: "QA Engineer"
			}),
			location: e._({
				id: "remote",
				message: "Remote"
			}),
			type: e._({
				id: "fullTime",
				message: "Full-time"
			}),
			dept: e._({
				id: "engineering",
				message: "Engineering"
			}),
			desc: e._({
				id: "ensureTheAccuracyAndReliability",
				message: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
			})
		}
	];
	return m(p, { children: [m("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e._({
			id: "openPositions",
			message: "Open Positions"
		})
	}, void 0, !1, {
		fileName: $,
		lineNumber: 46,
		columnNumber: 7
	}, this), m("div", {
		className: "space-y-4",
		children: t.map((t) => m("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [m("div", { children: [
				m("h3", {
					className: "text-base font-semibold text-foreground",
					children: t.title
				}, void 0, !1, {
					fileName: $,
					lineNumber: 56,
					columnNumber: 15
				}, this),
				m("p", {
					className: "text-sm text-muted-foreground",
					children: t.desc
				}, void 0, !1, {
					fileName: $,
					lineNumber: 59,
					columnNumber: 15
				}, this),
				m("div", {
					className: "mt-2 flex gap-2",
					children: [
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.dept
						}, void 0, !1, {
							fileName: $,
							lineNumber: 61,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.location
						}, void 0, !1, {
							fileName: $,
							lineNumber: 64,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.type
						}, void 0, !1, {
							fileName: $,
							lineNumber: 67,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: $,
				lineNumber: 55,
				columnNumber: 13
			}, this), m("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e._({
					id: "applyNow",
					message: "Apply Now"
				})
			}, void 0, !1, {
				fileName: $,
				lineNumber: 72,
				columnNumber: 13
			}, this)]
		}, t.title, !0, {
			fileName: $,
			lineNumber: 51,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 49,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: $,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
function Vn(e, t) {
	let n = Rn();
	return n.activate(e), n;
}
var Hn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Un({ children: e }) {
	let t = s(() => Vn("en"), []);
	return m(Ln, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Hn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Wn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/careers/OpenPositions.wrapper.tsx";
function Gn() {
	return m(Un, { children: m(Bn, {}, void 0, !1, {
		fileName: Wn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Wn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Gn as default };
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
}), n = "open-positions", r = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	community: "Community",
	createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	engineering: "Engineering",
	ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	fullTime: "Full-time",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	sanFranciscoRemote: "San Francisco / Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	technicalWriter: "Technical Writer"
}, i = {
	key: n,
	content: r
};
export { t };

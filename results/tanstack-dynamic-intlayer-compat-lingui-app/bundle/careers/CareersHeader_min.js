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
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/de.json").then((e) => e.default),
	en: () => import("./intlayer-CareersHeader-wrapper-f709e9-en-TvTG7zbi.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/zh.json").then((e) => e.default)
}, ke = Oe(), Ae = T[ke];
typeof window < "u" && typeof Ae == "function" && Ae().then((e) => {
	T.__intlayerPreloaded = {
		locale: ke,
		dictionary: e
	};
}, () => void 0);
var je = t(null), Me = class {
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
}, Ne = (e, t) => {
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
}, Pe = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, E = (e, t) => {
	let n = Ne(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Ne(n, t);
	}
}, Fe = (e) => {
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
			i.push(`${t} {${Ie(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Ie = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Fe).join("") : String(e ?? ""), Le = "translation", D = "enumeration", O = "plural", Re = "condition", k = "insertion", ze = "object", Be = "array", Ve = "markdown", A = "html", j = "gender", M = "select", N = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), P = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), F = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, F);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => F(e, P(t, e, {
		type: Be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ze,
			key: r
		};
		if (t.eager) {
			n[r] = F(e[r], P(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = F(e[r], P(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, He = (e) => N(D, e), Ue = (e) => N(j, e), We = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, I = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = We(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ge = /* @__PURE__ */ new Set([
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
]), Ke = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, qe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ke)) {
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
				let e = Ge.has(i.toLowerCase());
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
}, L = (e, t) => N(A, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = qe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return I(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => I(await e)), typeof n == "string") return I(n);
	try {
		return I(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), R = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, z = (e) => N(k, e, { fields: (() => {
	if (typeof e == "string") return R(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => R(await e)), typeof t == "string") return R(t);
	try {
		return R(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Je = (e) => N(O, e), Ye = (e, t) => N(M, e, { variable: t }), Xe = (e) => {
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
}, B = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? L(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? L(t) : z(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? L(t) : t;
		if (t?.type === "argument") return t.format ? z(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : z(`{{${t.name}}}`);
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
					e[i] = B(a);
				}
				return e.__intlayer_icu_var = t.name, He(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = B(i);
			}
			return Je(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = B(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ue({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ye(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = B(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, He(e);
		}
	}
	return e.map((e) => B([e]));
}, Ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return B(Xe(e));
		} catch {
			return e;
		}
	}
}, Qe = (e) => F(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ze
	}]
}), $e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, et = (e, t) => e[$e(e, t) ?? "fallback"], tt = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, nt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, rt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], V = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, it = (e, t, n, r) => {
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
}, at = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : i ? it(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : it(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = V(t, n);
	return r === void 0 ? e : String(r);
}), H = (e, t) => e[t] ?? e.count ?? e.n, U = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return at(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return U(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(U(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return U(r[k], t, n);
	if (r.nodeType === "html") return U(r[A], t, n);
	if (r.nodeType === "plural") {
		let e = r[O];
		return U(tt(e, Number(H(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[D], i = rt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) rt.includes(t) || (o[t] = n);
		let s = H(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? et(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return U(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[M], i = H(t, typeof r.variable == "string" ? r.variable : "value");
		return U(nt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[j];
		return U(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ot = (e, t = {}, n = "en") => {
	let r = U(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, st = ((e) => (t, n = {}, r = "en") => ot(typeof t == "string" ? e(t) : t, n, r))(Qe), ct = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, lt = class extends Me {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Pe(t));
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
		let { dictionaryKey: t, remainder: n } = ct(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = E(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = E(t, e);
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
			let t = E(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Ie(t)
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
		return (c.kind === "node" ? ot(c.node, o, s) : st(c.message, o, s)) ?? i;
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
}, ut = (e) => {
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
}, W = /* @__PURE__ */ new Map(), dt = (e, t) => (W.has(e) || W.set(e, ut(t)), W.get(e).read()), ft = /* @__PURE__ */ new Map(), pt = (e, t) => Object.create(new Proxy(e, {
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
}), mt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ft.get(t);
	i || (i = /* @__PURE__ */ new Map(), ft.set(t, i));
	let a = i.get(r);
	return a || (a = pt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ht = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, mt(t)), gt = /* @__PURE__ */ new WeakMap(), _t = 0, vt = (e) => {
	if (!e) return "base";
	let t = gt.get(e);
	if (t) return t;
	_t += 1;
	let n = `p${_t}`;
	return gt.set(e, n), n;
}, yt = 256, G = /* @__PURE__ */ new WeakMap(), bt = (e) => typeof e == "object" && !!e, xt = (e, t, n) => `${e}_${t}_${vt(n)}`, St = (e, t) => {
	if (!bt(e)) return { hit: !1 };
	let n = G.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, K = (e, t, n) => {
	if (!bt(e)) return n;
	let r = G.get(e);
	return r || (r = /* @__PURE__ */ new Map(), G.set(e, r)), r.size >= yt && r.clear(), r.set(t, n), n;
}, Ct = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), wt = () => ({}), Tt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Et = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Tt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Et(e ? `${e}.${String(n)}` : String(n)) }), Dt = /* @__PURE__ */ new Set(), Ot = (e, t, n) => {
	let r = wt()[e];
	return r ? Xt(r, t, n) : (Dt.has(e) || (we({ log: h })(typeof window > "u" ? `Dictionary ${Te(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Dt.add(e)), Et(e));
}, kt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, At = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !kt(e) || !kt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? At(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, jt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => At(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Mt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[A] : e[Ve];
}, Nt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? A : Ve;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Pt = (e, t, n, r, i) => {
	let a = Nt(e, Ct(Mt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ft = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, It = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = jt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Le,
				key: e
			}]
		});
	}
}, Lt = J, Rt = (e) => J, zt = J, Bt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Pt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ct(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ut(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Vt = [
	D,
	Re,
	O,
	j,
	M
], Ht = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Vt.includes(i)) return t;
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
		return !r && Ft(i) ? i(n) : i;
	};
}, Ut = (e, t) => typeof t == "function" && Vt.includes(e?.nodeType ?? "") ? (n) => Ht(e, t, n) : t, Wt = J, Gt = J, Kt = (e) => J, qt = J, Jt = (e, t = !0) => [
	It(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	Lt,
	Rt(e ?? p.defaultLocale),
	zt,
	Bt,
	Kt(e ?? p.defaultLocale),
	qt,
	Wt,
	Gt
].filter((e) => e !== J), Yt = (e, t, n = []) => F(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Xt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = xt(r ?? p.defaultLocale, "", n), o = St(e, a);
	if (o.hit) return o.content;
	let s = n ?? Jt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return Yt(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? K(e, a, null) : Array.isArray(c) ? K(e, a, c.map(l)) : K(e, a, l(c));
}, Zt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ie];
	if (n && n.locale === t) return n.dictionary;
}, Qt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", $t = /\{\{\s*(.*?)\s*\}\}/g, en = (e, t = {}) => {
	if (!Object.values(t).some(Qt)) return {
		isSimple: !0,
		parts: e.replace($t, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split($t), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, tn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ht({
		value: t.children,
		children: t.children
	})
}, nn = J, rn = (t, r) => {
	let i = en(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, an = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Pt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = rn(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ut(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, on = J, sn = J, X = /* @__PURE__ */ new Map(), cn = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		tn,
		It(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		Lt,
		Rt(e ?? p.defaultLocale),
		zt,
		Kt(e ?? p.defaultLocale),
		qt,
		Wt,
		Gt,
		nn,
		an,
		on,
		sn
	].filter((e) => e !== J);
	return X.set(n, r), r;
}, ln = (e, t) => Xt(e, t, cn(typeof t == "object" && t ? t.locale : t)), Z = pe, un = (e, t) => me(e, {
	...b,
	isCookieEnabled: t
}), dn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, fn = t({
	get locale() {
		return Z() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), pn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? Z() ?? t ?? m), [ee, te] = c(e);
	e !== ee && (te(e), e && e !== h && g(e)), o(() => {
		dn();
	}, []);
	let _ = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), un(e, d);
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
	return u(fn.Provider, {
		value: ne,
		children: r
	});
}, mn = ({ children: e, ...t }) => d(pn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: hn, locales: Q } = p ?? {}, gn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(fn) ?? {};
	return {
		locale: n,
		defaultLocale: hn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), un(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, _n = (e, t) => {
	let n = new lt({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, vn = ([e, t], n) => ln(Zt(e, n) ?? dt(`${t}.${n}`, e[n]?.()), n), yn = (...e) => {
	let { locale: t } = gn(), n = t ?? p.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return s(() => _n(n, Object.fromEntries(e.map((e) => [e[1], vn(e, n)]))), [n, r]);
}, bn = () => {
	try {
		return Object.keys(wt());
	} catch {
		return [];
	}
}, xn = (e, t) => {
	let n = bn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Ot(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = E(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = E(a(t), e);
		if (n !== void 0) return n;
	}
}, Sn = (e) => {
	let t = {};
	for (let n of bn()) try {
		Object.assign(t, Pe(Ot(n, e)));
	} catch {}
	return t;
}, Cn = () => ({
	lookup: xn,
	all: Sn
}), wn = (e) => new lt({
	...e,
	registry: Cn()
});
wn({ locale: "en" });
var Tn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), u(je.Provider, {
		value: i,
		children: u(mn, {
			locale: s,
			children: n
		})
	});
}, $ = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/de.json").then((e) => e.default),
	en: () => import("./intlayer-CareersHeader-wrapper-f709e9-en-TvTG7zbi.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/mockBanner/zh.json").then((e) => e.default)
}, En = Oe(), Dn = $[En];
typeof window < "u" && typeof Dn == "function" && Dn().then((e) => {
	$.__intlayerPreloaded = {
		locale: En,
		dictionary: e
	};
}, () => void 0);
var On = () => {
	let { i18n: e } = yn([$, "mockBanner"]);
	return u("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e._("mockBanner")
	});
};
function kn() {
	let { i18n: e } = yn([T, "careers-header"]), t = (t) => e._(`careers-header.${t}`);
	return d(l, { children: [
		u(On, {}),
		u("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: t("title")
		}),
		u("p", {
			className: "mb-4 text-muted-foreground",
			children: t("joinOurMissionToImprove")
		})
	] });
}
function An(e, t) {
	let n = wn();
	return n.activate(e), n;
}
function jn({ children: e }) {
	let t = s(() => An("en"), []);
	return u(Tn, {
		i18n: t,
		children: e
	});
}
function Mn() {
	return u(jn, { children: u(kn, {}) });
}
export { Mn as default };
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
}), r = "careers-header", i = {
	joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
	title: "Careers"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "mockBanner", c = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", l = {
	key: s,
	content: c
};
export { n, o as t };

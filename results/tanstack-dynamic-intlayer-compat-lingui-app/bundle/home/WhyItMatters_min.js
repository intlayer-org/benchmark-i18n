import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as ee, jsx as u, jsxs as d } from "react/jsx-runtime";
import { jsxDEV as f } from "react/jsx-dev-runtime";
var te = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, ne = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, re = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ie = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && re(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ae = "__intlayerPreloaded", oe = ["en"], h = "\x1B[0m", se = "\x1B[34m", ce = "\x1B[31m", le = "\x1B[32m", ue = "\x1B[38;5;3m", de = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? oe,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), fe = (e, t) => !!e && (t ?? p.locales).includes(e), pe = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, me = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, he = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = me(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ge = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var g = {
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
}, _e = (e = g) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ge) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ge && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: me(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, he(r, e, i));
			} catch {}
		}
	}
}, ye = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = de(t);
	if (!n || !r) return n;
	let a = te(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return fe(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (fe(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, be = 50, xe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), Ce = (e) => {
	Se.has(e) || (Se.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
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
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function _(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e) => e, De = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ee(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Oe = (e, t) => (n, r) => De(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), v = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? h : n : h}` : e, ke = (e, t = ue, n = h) => [e].flat().map((e) => v(e, t, n)).join(", ");
v("✗", ce), v("✓", le), v("⏲", se);
var Ae = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = de(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ie(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ye(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return _e() ?? t;
}, y, b, je = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = Ae()), b;
}, x = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/de.json").then((e) => e.default),
	en: () => import("./intlayer-WhyItMatters-wrapper-1s5uvk-en-D0yYWpKs.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/zh.json").then((e) => e.default)
}, S = je(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var Me = class {
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
}, w = (e, t) => {
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
}, T = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, E = (e, t) => {
	let n = w(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return w(n, t);
	}
}, Ne = (e) => {
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
			i.push(`${t} {${D(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, D = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Ne).join("") : String(e ?? ""), Pe = "translation", O = "enumeration", k = "plural", A = "insertion", Fe = "object", Ie = "array", Le = "markdown", j = "html", Re = "gender", ze = "select", M = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => N(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, {
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
			n[r] = N(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = N(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Be = (e) => M(O, e), Ve = (e) => M(Re, e), He = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, P = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = He(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ue = /* @__PURE__ */ new Set([
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
]), We = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Ge = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(We)) {
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
				let e = Ue.has(i.toLowerCase());
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
}, F = (e, t) => M(j, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Ge(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return P(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => P(await e)), typeof n == "string") return P(n);
	try {
		return P(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), I = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, L = (e) => M(A, e, { fields: (() => {
	if (typeof e == "string") return I(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => I(await e)), typeof t == "string") return I(t);
	try {
		return I(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ke = (e) => M(k, e), qe = (e, t) => M(ze, e, { variable: t }), Je = (e) => {
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
}, R = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : L(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : t;
		if (t.type === "argument") return t.format ? L(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : L(`{{${t.name}}}`);
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
				return e.__intlayer_icu_var = t.name, Be(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Ke(e);
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
			].includes(e)) ? Ve({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : qe(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Be(e);
		}
	}
	return e.map((e) => R([e]));
}, Ye = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return R(Je(e));
		} catch {
			return e;
		}
	}
}, Xe = (e) => N(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ye
	}]
}), Ze = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Qe = (e, t) => e[Ze(e, t) ?? "fallback"], $e = (e, t, n) => e[_("PluralRules", n).select(t)] ?? e.other, et = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, tt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], z = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, nt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? _("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? _("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : _("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return _("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, rt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : i ? nt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : nt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = z(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return rt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[A], t, n);
	if (r.nodeType === "html") return V(r[j], t, n);
	if (r.nodeType === "plural") {
		let e = r[k];
		return V($e(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[O], i = tt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) tt.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = _("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Qe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ze], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(et(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Re];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, H = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, it = ((e) => (t, n = {}, r = "en") => H(typeof t == "string" ? e(t) : t, n, r))(Xe), at = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ot = class extends Me {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, T(t));
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
		let { dictionaryKey: t, remainder: n } = at(e), r = this._boundDictionaries[t];
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
				message: D(t)
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
		return (c.kind === "node" ? H(c.node, o, s) : it(c.message, o, s)) ?? i;
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
}, st = t(null), ct = /* @__PURE__ */ new WeakMap(), lt = 0, ut = (e) => {
	if (!e) return "base";
	let t = ct.get(e);
	if (t) return t;
	lt += 1;
	let n = `p${lt}`;
	return ct.set(e, n), n;
}, dt = 256, U = /* @__PURE__ */ new WeakMap(), ft = (e) => typeof e == "object" && !!e, pt = (e, t, n) => `${e}_${t}_${ut(n)}`, mt = (e, t) => {
	if (!ft(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!ft(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= dt && r.clear(), r.set(t, n), n;
}, ht = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", gt = /[^A-Za-z0-9._&=-]/g, _t = /[^A-Za-z0-9._-]/g, vt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, vt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, yt = (e) => e === void 0 ? G : typeof e == "string" ? K(e, gt) : Object.keys(e).sort().map((t) => `${K(t, _t)}=${K(String(e[t]), _t)}`).join("&"), bt = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(yt) : [yt(e)], xt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, St = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ct = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, wt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Tt = (e, t) => {
	if (!Ct(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : xt(bt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => St(e, n, t, s)).map((t) => wt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Et = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Dt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? bt(n).join(",") : String(n)}`;
}).join("|") : "", Ot = () => ({}), kt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), At = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : kt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : At(e ? `${e}.${String(n)}` : String(n)) }), jt = /* @__PURE__ */ new Set(), Mt = (e, t, n) => {
	let r = Ot()[e];
	return r ? Xt(r, t, n) : (jt.has(e) || (Oe({ log: ne })(typeof window > "u" ? `Dictionary ${ke(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), jt.add(e)), At(e));
}, Nt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Pt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Nt(e) && Nt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Pt(e[r], t[r]));
		return n;
	}
	return e;
}, Ft = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Pt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, It = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[j] : e[Le];
}, Lt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? j : Le;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Rt = (e, t, n, r, i) => {
	let a = Lt(e, ht(It(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, zt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
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
		return Ft(o, e, t);
	}
}, Bt = J, Vt = (e) => J, Ht = J, Ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Rt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ht(i, e);
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
}, Wt = J, Gt = J, Kt = (e) => J, qt = J, Jt = (e, t = !0) => [
	zt(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	Bt,
	Ht,
	Ut,
	Kt(e ?? p.defaultLocale),
	qt,
	Wt,
	Gt
], Yt = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Xt = (e, t, n) => {
	let { locale: r, selector: i } = Et(t), a = pt(r ?? p.defaultLocale, Dt(i), n), o = mt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Jt(r), c = Tt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Yt(e.content, t, s);
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, Zt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[ae];
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
}, tn = () => {
	try {
		return Object.keys(Ot());
	} catch {
		return [];
	}
}, nn = (e, t) => {
	let n = tn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Mt(e, t);
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
}, rn = (e) => {
	let t = {};
	for (let n of tn()) try {
		Object.assign(t, T(Mt(n, e)));
	} catch {}
	return t;
}, an = () => ({
	lookup: nn,
	all: rn
}), on = (e) => {
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
}, Y = /* @__PURE__ */ new Map(), sn = (e, t) => (Y.has(e) || Y.set(e, on(t)), Y.get(e).read()), cn = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(ee, { children: e });
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
}, ln = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => cn({
		...n,
		value: n.children,
		children: n.children
	})
}, un = J, dn = (t, r) => {
	let i = en(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, fn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Rt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dn(i, e);
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
}, pn = J, mn = J, X = /* @__PURE__ */ new Map(), hn = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		zt(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		Bt,
		Vt(e ?? p.defaultLocale),
		Ht,
		Kt(e ?? p.defaultLocale),
		qt,
		Wt,
		Gt,
		ln,
		un,
		fn,
		pn,
		mn
	];
	return X.set(n, r), r;
}, gn = (e, t) => Xt(e, t, hn(typeof t == "object" && t ? t.locale : t)), _n = _e(g), vn = (e, t) => ve(e, {
	...g,
	isCookieEnabled: t
}), yn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, bn = ({ children: e }) => (yn(), e), xn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Sn = ({ children: e }) => (xn(), e), Cn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: _n ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), wn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: ee } = p ?? {}, [d, f] = l(e ?? _n ?? t ?? ee);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		Cn();
	}, []);
	let te = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), vn(e, s);
		}
	}), m = pe(d);
	return u(Z.Provider, {
		value: {
			locale: m,
			setLocale: te,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Tn = ({ children: e, ...t }) => d(wn, {
	...t,
	children: [
		u(bn, {}),
		u(Sn, {}),
		e
	]
}), { defaultLocale: En, locales: Q } = p ?? {}, Dn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: En,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), vn(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, On = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), u(st.Provider, {
		value: i,
		children: u(Tn, {
			locale: s,
			children: n
		})
	});
}, kn = (e, t) => {
	let n = new ot({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, An = ([e, t], n) => gn(Zt(e, n) ?? sn(`${t}.${n}`, e[n]?.()), n), jn = (...e) => {
	let { locale: t } = Dn(), n = t ?? p.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return s(() => kn(n, Object.fromEntries(e.map((e) => [e[1], An(e, n)]))), [n, r]);
}, Mn = (e) => new ot({
	...e,
	registry: an()
});
Mn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/home/WhyItMatters.tsx";
function Nn() {
	let { i18n: e } = jn([x, "why-it-matters"]), t = (t) => e._(`why-it-matters.${t}`);
	return f("section", {
		className: "mb-16",
		children: [f("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: t("whyTheseMetricsMatter")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this), f("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				f("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [f("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("bundleSize")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 14,
						columnNumber: 11
					}, this), f("p", {
						className: "text-sm text-muted-foreground",
						children: t("theBundleIsTheData")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 17,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				f("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [f("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("renderingHydration")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 22,
						columnNumber: 11
					}, this), f("p", {
						className: "text-sm text-muted-foreground",
						children: t("connectingALargeJsonDictionary")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 25,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				f("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [f("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("dynamicLoading")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 30,
						columnNumber: 11
					}, this), f("p", {
						className: "text-sm text-muted-foreground",
						children: t("loadingAllTranslationsUpfrontOverloads")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function Pn(e, t) {
	let n = Mn();
	return n.activate(e), n;
}
var Fn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function In({ children: e }) {
	let t = s(() => Pn("en"), []);
	return f(On, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Fn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Ln = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/home/WhyItMatters.wrapper.tsx";
function Rn() {
	return f(In, { children: f(Nn, {}, void 0, !1, {
		fileName: Ln,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Ln,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Rn as default };
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
}), n = "why-it-matters", r = {
	bundleSize: "Bundle Size",
	connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	renderingHydration: "Rendering & Hydration",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	whyTheseMetricsMatter: "Why These Metrics Matter"
}, i = {
	key: n,
	content: r
};
export { t };

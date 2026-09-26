import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "../../../.intlayer/dictionary/index.json";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useParams as f } from "next/navigation";
var p = {
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
}, g = "\x1B[0m", _ = "\x1B[34m", ee = "\x1B[31m", te = "\x1B[32m", ne = "\x1B[35m", re = "\x1B[38;5;3m", v = "\x1B[36m", ie = (e, t = p?.locales, n = p?.defaultLocale) => {
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
}, y = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ae = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = y(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, oe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, se = (e = b) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!oe) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !oe && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: y(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ae(r, e, i));
			} catch {}
		}
	}
}, le = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], ue = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return le.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, de = 50, fe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Set(), me = (e) => {
	pe.has(e) || (pe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, he = {
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
}, ge = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (me(e), he[e]);
};
function x(e, t, n) {
	let r = t ?? p?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = fe.get(a);
	o || (o = /* @__PURE__ */ new Map(), fe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ge(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > de && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var _e = (e) => e, ve = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = _e(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, S = (e, t) => (n, r) => ve(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), C = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? g : n : g}` : e, ye = (e, t = re, n = g) => [e].flat().map((e) => C(e, t, n)).join(", ");
C("✗", ee), C("✓", te), C("⏲", _);
var be = "translation", xe = "enumeration", Se = "plural", Ce = "insertion", we = "object", Te = "array", Ee = "html", De = "gender", Oe = "select", w = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Te,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: we,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = (e) => w(xe, e), D = (e) => w(De, e), ke = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, O = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ke(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ae = /* @__PURE__ */ new Set([
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
]), je = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Me = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(je)) {
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
				let e = Ae.has(i.toLowerCase());
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
}, k = (e, t) => w(Ee, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Me(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return O(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => O(await e)), typeof n == "string") return O(n);
	try {
		return O(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), A = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, j = (e) => w(Ce, e, { fields: (() => {
	if (typeof e == "string") return A(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => A(await e)), typeof t == "string") return A(t);
	try {
		return A(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ne = (e) => w(Se, e), Pe = (e, t) => w(Oe, e, { variable: t }), Fe = (e) => {
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
}, M = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : j(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
		if (t.type === "argument") return t.format ? j(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : j(`{{${t.name}}}`);
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
					e[i] = M(a);
				}
				return e.__intlayer_icu_var = t.name, E(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = M(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Ne(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = M(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? D({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Pe(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = M(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, E(e);
		}
	}
	return e.map((e) => M([e]));
}, Ie = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return M(Fe(e));
		} catch {
			return e;
		}
	}
}, Le = (e) => T(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ie
	}]
}), Re = (e) => {
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
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : j(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
		if (t.type === "argument") return t.format ? j(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : j(`{{${t.name}}}`);
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
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, E(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Ne(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? D({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Pe(e, t.name);
		}
	}
	return e.map((e) => N([e]));
}, ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(Re(e));
		} catch {
			return e;
		}
	}
}, Be = (e) => T(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...ze
	}]
}), Ve = (e, t, n = ".") => {
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
}, He = (e) => {
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
}, Ue = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(He);
}, P = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return j(t);
}, We = (e) => {
	if (e.length === 1) return P(e[0]);
	let t = {};
	return e.length === 2 ? E({
		1: P(e[0]),
		fallback: P(e[1])
	}) : e.length === 3 ? E({
		0: P(e[0]),
		1: P(e[1]),
		fallback: P(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = P(n) : t[r.toString()] = P(n);
	}), t.__intlayer_vue_i18n_var = "count", E(t));
}, Ge = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return We(Ue(e));
		} catch {
			return e;
		}
	}
}, Ke = (e) => T(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Ge
	}]
}), qe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Je = (e, t) => e[qe(e, t) ?? "fallback"], Ye = (e, t, n) => e[x("PluralRules", n).select(t)] ?? e.other, Xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ze = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], F = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Qe = (e, t, n, r) => {
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
}, $e = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : i ? Qe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : Qe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = F(t, n);
	return r === void 0 ? e : String(r);
}), I = (e, t) => e[t] ?? e.count ?? e.n, L = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return $e(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return L(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(L(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return L(r[Ce], t, n);
	if (r.nodeType === "html") return L(r[Ee], t, n);
	if (r.nodeType === "plural") {
		let e = r[Se];
		return L(Ye(e, Number(I(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[xe], i = Ze.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ze.includes(t) || (o[t] = n);
		let s = I(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = x("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Je(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return L(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Oe], i = I(t, typeof r.variable == "string" ? r.variable : "value");
		return L(Xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[De];
		return L(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, et = (e, t = {}, n = "en") => {
	let r = L(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, tt = (e) => (t, n = {}, r = "en") => et(typeof t == "string" ? e(t) : t, n, r), nt = {
	icu: Le,
	i18next: Be,
	"vue-i18n": Ke
}, R = (e, t = {}, n = "en", r = "icu") => tt(nt[r])(e, t, n), z = /* @__PURE__ */ new WeakMap(), B = 0, rt = (e) => {
	if (!e) return "base";
	let t = z.get(e);
	if (t) return t;
	B += 1;
	let n = `p${B}`;
	return z.set(e, n), n;
}, it = 256, V = /* @__PURE__ */ new WeakMap(), at = (e) => typeof e == "object" && !!e, ot = (e, t, n) => `${e}_${t}_${rt(n)}`, st = (e, t) => {
	if (!at(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!at(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= it && r.clear(), r.set(t, n), n;
}, U = "default", ct = /[^A-Za-z0-9._&=-]/g, lt = /[^A-Za-z0-9._-]/g, ut = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ut);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, dt = (e) => e === void 0 ? U : typeof e == "string" ? W(e, ct) : Object.keys(e).sort().map((t) => `${W(t, lt)}=${W(String(e[t]), lt)}`).join("&"), ft = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(dt) : [dt(e)], pt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, mt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ht = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, gt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, _t = (e, t) => {
	if (!ht(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : pt(ft(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => mt(e, n, t, s)).map((t) => gt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, vt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, yt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? ft(n).join(",") : String(n)}`;
}).join("|") : "", bt = { index: l }, xt = () => bt, St = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ct = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : St.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ct(e ? `${e}.${String(n)}` : String(n)) }), wt = /* @__PURE__ */ new Set(), G = (e, t, n) => {
	let r = xt()[e];
	return r ? Rt(r, t, n) : (wt.has(e) || (S({ log: h })(typeof window > "u" ? `Dictionary ${ye(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), wt.add(e)), Ct(e));
}, Tt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Et = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Tt(e) && Tt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Et(e[r], t[r]));
		return n;
	}
	return e;
}, Dt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Et(e, t));
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ot = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: be,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Dt(o, e, t);
	}
}, kt = K, At = K, jt = K, Mt = K, Nt = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Pt = (e) => K, Ft = K, It = (e, t = !0) => [
	Ot(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	kt,
	At,
	jt,
	Pt(e ?? p.defaultLocale),
	Ft,
	Mt,
	Nt
], Lt = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), Rt = (e, t, n) => {
	let { locale: r, selector: i } = vt(t), a = ot(r ?? p.defaultLocale, yt(i), n), o = st(e, a);
	if (o.hit) return o.content;
	let s = n ?? It(r), c = _t(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Lt(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, zt = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]), Bt = 5, Vt = "index", Ht = (e, t) => {
	if (e in xt()) return G(e, t);
}, Ut = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, q = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) zt.has(t) || (n[t] = r);
	return n;
}, J = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = Ht(c, p), m === void 0 && c === t && c !== Vt && (m = Ht(Vt, p)), m === void 0) return;
	let h;
	for (let t of Ut(l, r?.lng ?? e, u, d, f)) {
		let e = Ve(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = q(r), _ = R(h, g, r?.lng ?? e, "i18next");
	return o < Bt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = J({
			locale: e,
			namespace: c,
			key: l.trim(),
			options: r,
			keySeparator: i,
			nsSeparator: a,
			depth: o + 1,
			dictionaryContent: c === t ? s : void 0
		});
		return typeof u == "string" ? u : n;
	})), _;
}, Wt = (e) => {
	S({ log: h })(`${C(e, v)}: the ${C("`resources`", v)} option is ignored when using ${C("@intlayer/i18next", ne)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${C("`resources`", v)} option to reduce your bundle size.`);
}, Y = (e = {}) => {
	e.resources !== void 0 && Wt("createInstance");
	let t = p, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = J({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? R(o, q(i), e, "i18next") : n;
	}, l = {
		get language() {
			return n;
		},
		get languages() {
			return t?.locales?.map(String) ?? [n];
		},
		get resolvedLanguage() {
			return n;
		},
		get isInitialized() {
			return a;
		},
		isInitializing: !1,
		initializedStoreOnce: !1,
		initializedLanguageOnce: !1,
		options: e,
		modules: {},
		services: {},
		store: {},
		format: ((e) => String(e)),
		async init(e, t) {
			let i = typeof e == "function" ? {} : e ?? {};
			i.resources !== void 0 && Wt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = J({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? R(c, q(a), n, "i18next") : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return J({
				locale: n,
				namespace: r,
				key: e,
				options: t,
				...s()
			}) !== void 0;
		},
		getFixedT: ((e, t, i) => {
			let a = Array.isArray(e) ? e[0] ?? n : e ?? n, o = t ?? r;
			return (e, t) => {
				let n = i ? `${i}.${e}` : e;
				return c(a, o, n, t);
			};
		}),
		use(e) {
			return e?.init?.(l), l;
		},
		on(e, t) {
			return i.has(e) || i.set(e, /* @__PURE__ */ new Set()), i.get(e).add(t), l;
		},
		once(e, t) {
			let n = (...r) => {
				t(...r), l.off(e, n);
			};
			return l.on(e, n), l;
		},
		off(e, t) {
			t ? i.get(e)?.delete(t) : i.delete(e);
		},
		emit(e, ...t) {
			o(e, ...t);
		},
		createInstance(t, n) {
			return Y({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return Y({
				...e,
				...t
			});
		},
		dir(e) {
			return [
				"ar",
				"he",
				"fa",
				"ur",
				"ps",
				"yi",
				"dv",
				"ug"
			].some((t) => (e ?? n).startsWith(t)) ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return G(Array.isArray(e) ? e[0] : e, n), !0;
			} catch {
				return !1;
			}
		},
		async loadNamespaces(e) {},
		async loadLanguages(e) {},
		loadResources(e) {},
		async reloadResources() {},
		getDataByLanguage(e) {},
		getResource(e, t, n) {
			try {
				return Ve(G(t, e), n);
			} catch {
				return;
			}
		},
		addResource: () => l,
		addResources: () => l,
		addResourceBundle: () => l,
		hasResourceBundle: () => !1,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => l,
		toJSON() {
			return {
				options: e,
				store: {},
				language: n,
				languages: t?.locales?.map(String) ?? [n],
				resolvedLanguage: n
			};
		}
	};
	return l;
}, X = Y();
X.dir.bind(X), X.init.bind(X), X.loadResources.bind(X), X.reloadResources.bind(X), X.use.bind(X), X.changeLanguage.bind(X), X.getFixedT.bind(X), X.t.bind(X), X.exists.bind(X), X.setDefaultNamespace.bind(X), X.hasLoadedNamespace.bind(X), X.loadNamespaces.bind(X), X.loadLanguages.bind(X);
var Gt = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => J({
		locale: e,
		namespace: r,
		key: i ? `${i}.${t}` : t,
		options: n,
		dictionaryContent: a
	}), s = (t, n, r) => {
		let i = typeof n == "string" ? {
			defaultValue: n,
			...r
		} : n ?? {}, a = Array.isArray(t) ? t : [t];
		for (let e of a) {
			let t = o(e, i);
			if (t !== void 0) return t;
		}
		let s = i.defaultValue;
		return typeof s == "string" ? R(s, q(i), e, "i18next") : a[a.length - 1];
	};
	return {
		translate: s,
		i18n: {
			language: e,
			languages: n ?? [],
			resolvedLanguage: e,
			isInitialized: !0,
			changeLanguage: async (e) => {
				t(e);
			},
			dir: (t) => ue(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => J({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = J({
					locale: t ?? e,
					namespace: n ?? r,
					key: i,
					options: o,
					dictionaryContent: (t ?? e) === e && (n ?? r) === r ? a : void 0
				});
				return s === void 0 ? i : s;
			}
		}
	};
}, Kt = se(b), Z = (e, t) => ce(e, {
	...b,
	isCookieEnabled: t
}), qt = () => {
	let { locale: e } = r(Q) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Jt = ({ children: e }) => (qt(), e), Yt = () => {
	let { locale: e } = r(Q) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Xt = ({ children: e }) => (Yt(), e), Zt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Kt ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Qt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: d } = p ?? {}, [f, m] = c(e ?? Kt ?? t ?? d);
	i(() => {
		e && e !== f && m(e);
	}, [e]), i(() => {
		Zt();
	}, []);
	let h = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Z(e, s);
		}
	}), g = ie(f);
	return u(Q.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, $t = ({ children: e, ...t }) => d(Qt, {
	...t,
	children: [
		u(Jt, {}),
		u(Xt, {}),
		e
	]
}), { defaultLocale: en, locales: $ } = p ?? {}, tn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(Q) ?? {};
	return {
		locale: i,
		defaultLocale: en,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), Z(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, nn = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = tn(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => Gt({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: s
	}), [
		r,
		i,
		a,
		n,
		s
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
}, rn = ({ children: e, i18n: t }) => (t !== void 0 && S({ log: h })(`${C("I18nextProvider", v)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), u($t, { children: e }));
e.createContext({ i18n: null });
var an = {
	type: "3rdParty",
	init: (e) => {}
};
function on() {
	let { t: e } = nn();
	return d("header", {
		className: "mb-10 text-center",
		children: [u("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: e("products.productsHeader.ourProducts")
		}), u("p", {
			className: "mx-auto max-w-2xl text-muted-foreground",
			children: e("products.productsHeader.exploreOurSuiteOfTools")
		})]
	});
}
function sn() {
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
function cn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
X.use(an).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var ln = X;
function un({ locale: e }) {
	let { i18n: t } = nn();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function dn({ children: e }) {
	let t = f().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		cn("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		sn();
	}, []), d(rn, {
		i18n: ln,
		children: [u(un, { locale: t }), e]
	});
}
function fn({ children: e }) {
	return u(dn, { children: e });
}
function pn() {
	return u(fn, { children: u(on, {}) });
}
export { pn as default };

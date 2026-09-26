import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { useParams as d } from "next/navigation";
var f = {
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
}, p = {
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
}, m = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, h = "\x1B[0m", g = "\x1B[34m", _ = "\x1B[31m", ee = "\x1B[32m", te = "\x1B[35m", ne = "\x1B[38;5;3m", v = "\x1B[36m", re = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, ie = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ae = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ie(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, oe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, se = (e = y) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!oe) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !oe && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ie(i.expires)
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
function b(e, t, n) {
	let r = t ?? f?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = fe.get(a);
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
}, x = (e, t) => (n, r) => ve(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), S = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? h : n : h}` : e, ye = (e, t = ne, n = h) => [e].flat().map((e) => S(e, t, n)).join(", ");
S("✗", _), S("✓", ee), S("⏲", g);
var be = "translation", xe = "enumeration", C = "plural", Se = "insertion", Ce = "object", we = "array", Te = "html", Ee = "gender", De = "select", w = (e, t, n) => ({
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
			type: we,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ce,
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
}, E = (e) => w(xe, e), Oe = (e) => w(Ee, e), ke = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, D = (e) => {
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
}, O = (e, t) => w(Te, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Me(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return D(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => D(await e)), typeof n == "string") return D(n);
	try {
		return D(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), k = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, A = (e) => w(Se, e, { fields: (() => {
	if (typeof e == "string") return k(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => k(await e)), typeof t == "string") return k(t);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), j = (e) => w(C, e), M = (e, t) => w(De, e, { variable: t }), Ne = (e) => {
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
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : A(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
		if (t.type === "argument") return t.format ? A(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : A(`{{${t.name}}}`);
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
			return j(e);
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
			].includes(e)) ? Oe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : M(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, E(e);
		}
	}
	return e.map((e) => N([e]));
}, Pe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(Ne(e));
		} catch {
			return e;
		}
	}
}, Fe = (e) => T(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Pe
	}]
}), Ie = (e) => {
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
}, P = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : A(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
		if (t.type === "argument") return t.format ? A(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : A(`{{${t.name}}}`);
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
					e[i] = P(a);
				}
				return e.__intlayer_icu_var = t.name, E(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = P(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return j(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = P(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Oe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : M(e, t.name);
		}
	}
	return e.map((e) => P([e]));
}, Le = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return P(Ie(e));
		} catch {
			return e;
		}
	}
}, Re = (e) => T(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Le
	}]
}), F = (e, t, n = ".") => {
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
}, ze = (e) => {
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
}, Be = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(ze);
}, I = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return A(t);
}, Ve = (e) => {
	if (e.length === 1) return I(e[0]);
	let t = {};
	return e.length === 2 ? E({
		1: I(e[0]),
		fallback: I(e[1])
	}) : e.length === 3 ? E({
		0: I(e[0]),
		1: I(e[1]),
		fallback: I(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = I(n) : t[r.toString()] = I(n);
	}), t.__intlayer_vue_i18n_var = "count", E(t));
}, He = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return Ve(Be(e));
		} catch {
			return e;
		}
	}
}, Ue = (e) => T(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...He
	}]
}), We = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ge = (e, t) => e[We(e, t) ?? "fallback"], Ke = (e, t, n) => e[b("PluralRules", n).select(t)] ?? e.other, qe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Je = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ye = (e, t, n, r) => {
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
}, Xe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? Ye(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : Ye(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Xe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[Se], t, n);
	if (r.nodeType === "html") return z(r[Te], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return z(Ke(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[xe], i = Je.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Je.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = b("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[De], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(qe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ee];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ze = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Qe = (e) => (t, n = {}, r = "en") => Ze(typeof t == "string" ? e(t) : t, n, r), $e = {
	icu: Fe,
	i18next: Re,
	"vue-i18n": Ue
}, B = (e, t = {}, n = "en", r = "icu") => Qe($e[r])(e, t, n), V = /* @__PURE__ */ new WeakMap(), et = 0, tt = (e) => {
	if (!e) return "base";
	let t = V.get(e);
	if (t) return t;
	et += 1;
	let n = `p${et}`;
	return V.set(e, n), n;
}, nt = 256, H = /* @__PURE__ */ new WeakMap(), rt = (e) => typeof e == "object" && !!e, it = (e, t, n) => `${e}_${t}_${tt(n)}`, at = (e, t) => {
	if (!rt(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!rt(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= nt && r.clear(), r.set(t, n), n;
}, W = "default", ot = /[^A-Za-z0-9._&=-]/g, st = /[^A-Za-z0-9._-]/g, ct = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ct);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, lt = (e) => e === void 0 ? W : typeof e == "string" ? G(e, ot) : Object.keys(e).sort().map((t) => `${G(t, st)}=${G(String(e[t]), st)}`).join("&"), ut = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(lt) : [lt(e)], dt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
}, ft = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, pt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, mt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ht = (e, t) => {
	if (!pt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : dt(ut(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ft(e, n, t, s)).map((t) => mt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, gt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, _t = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? ut(n).join(",") : String(n)}`;
}).join("|") : "", vt = { index: {
	key: "index",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"settings.preferencesSection.preferences\":\"Preferences\",\"settings.preferencesSection.emailNotifications\":\"Email Notifications\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Receive weekly benchmark reports\",\"settings.preferencesSection.darkMode\":\"Dark Mode\",\"settings.preferencesSection.useDarkColorScheme\":\"Use dark color scheme\",\"settings.preferencesSection.defaultLanguage\":\"Default Language\",\"settings.settingsHeader.settings\":\"Settings\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Manage your account preferences and configuration.\",\"settings.settingsFooter.cancel\":\"Cancel\",\"settings.settingsFooter.saveChanges\":\"Save Changes\",\"settings.apiAccessSection.apiAccess\":\"API Access\",\"settings.apiAccessSection.apiKey\":\"API Key\",\"settings.apiAccessSection.useThisKeyTo\":\"Use this key to access the benchmarking API programmatically.\",\"settings.apiAccessSection.copy\":\"Copy\",\"settings.profileSection.profile\":\"Profile\",\"settings.profileSection.displayName\":\"Display Name\",\"settings.profileSection.email\":\"Email\",\"shared.header.home\":\"Home\",\"shared.header.methodology\":\"Methodology\",\"shared.header.mockPages\":\"Mock Pages\",\"shared.header.products\":\"Products\",\"shared.header.pricing\":\"Pricing\",\"shared.header.team\":\"Team\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Careers\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Contact\",\"shared.header.settings\":\"Settings\",\"shared.header.goToGithub\":\"Go to GitHub\",\"shared.footer.resources\":\"Resources\",\"shared.footer.contact\":\"Contact\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Methodology\",\"shared.footer.contributing\":\"Contributing\",\"shared.footer.builtWith\":\"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"shared.mockBanner.text\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Theme mode: auto (system). Click to switch to light mode.\",\"shared.themeToggle.themeModeLightClick\":\"Theme mode: light. Click to switch to dark mode.\",\"shared.themeToggle.themeModeDarkClick\":\"Theme mode: dark. Click to switch to auto (system) mode.\",\"shared.themeToggle.themeAuto\":\"Theme: Auto\",\"shared.themeToggle.themeDark\":\"Theme: Dark\",\"shared.themeToggle.themeLight\":\"Theme: Light\",\"careers.careersHeader.careers\":\"Careers\",\"careers.careersHero.fromAnywhere\":\"from anywhere in the world\",\"careers.careersBenefits.competitivePay\":\"Competitive pay\",\"careers.careersBenefits.topOfMarket\":\"Top-of-market compensation\",\"careers.careersBenefits.openSourceTime\":\"Open source time\",\"careers.careersBenefits.twentyPercentTime\":\"20% time for OSS\",\"careers.careersPositions.seniorFrontendEngineer\":\"Senior Frontend Engineer\",\"careers.careersPositions.seniorFrontendEngineerDesc\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"careers.openPositions.openPositions\":\"Open Positions\",\"careers.openPositions.remote\":\"Remote\",\"careers.openPositions.fullTime\":\"Full-time\",\"careers.openPositions.applyNow\":\"Apply Now\",\"route.route.oopsPageNotFound\":\"Oops! Page not found\",\"route.route.returnToHome\":\"Return to Home\",\"route.route.couldNotMeasureHydrationDuration\":\"Could not measure hydration duration:\",\"pricing.pricingTiers.starterTier\":\"Starter\",\"pricing.pricingTiers.starterPrice\":\"$0\",\"pricing.pricingTiers.forever\":\"forever\",\"pricing.pricingTiers.runsPerDay\":\"5 benchmark runs/day\",\"pricing.pricingTiers.libraries3\":\"3 libraries\",\"pricing.pricingTiers.communitySupport\":\"Community support\",\"pricing.pricingTiers.publicResults\":\"Public results\",\"pricing.pricingTiers.getStarted\":\"Get Started\",\"pricing.pricingTiers.proTier\":\"Pro\",\"pricing.pricingTiers.proPrice\":\"$29\",\"pricing.pricingTiers.perMonth\":\"/month\",\"pricing.pricingTiers.unlimitedRuns\":\"Unlimited runs\",\"pricing.pricingTiers.allLibraries\":\"All libraries\",\"pricing.pricingTiers.prioritySupport\":\"Priority support\",\"pricing.pricingTiers.privateResults\":\"Private results\",\"pricing.pricingTiers.ciIntegration\":\"CI integration\",\"pricing.pricingTiers.historicalData\":\"Historical data\",\"pricing.pricingTiers.enterpriseTier\":\"Enterprise\",\"pricing.pricingTiers.custom\":\"Custom\",\"pricing.pricingTiers.everythingInPro\":\"Everything in Pro\",\"pricing.pricingTiers.onPremiseOption\":\"On-premise option\",\"pricing.pricingTiers.ssoSaml\":\"SSO & SAML\",\"pricing.pricingTiers.dedicatedAccountManager\":\"Dedicated account manager\",\"pricing.pricingTiers.customSLAs\":\"Custom SLAs\",\"pricing.pricingTiers.auditLogs\":\"Audit logs\",\"pricing.pricingTiers.trainingSessions\":\"Training sessions\",\"pricing.pricingTiers.contactSales\":\"Contact Sales\",\"products.products.benchmarkCLI\":\"Benchmark CLI\",\"products.products.benchmarkCLIDesc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"products.products.benchmarkCLIPrice\":\"Free\",\"products.products.benchmarkCloud\":\"Benchmark Cloud\",\"products.products.benchmarkCloudDesc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"products.products.benchmarkCloudPrice\":\"$29/mo\",\"products.products.benchmarkEnterprise\":\"Benchmark Enterprise\",\"products.products.benchmarkEnterpriseDesc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"products.products.benchmarkEnterprisePrice\":\"Contact Us\",\"products.products.migrationAssistant\":\"Migration Assistant\",\"products.products.migrationAssistantDesc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"products.products.migrationAssistantPrice\":\"$99 one-time\",\"products.products.translationQA\":\"Translation QA\",\"products.products.translationQADesc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"products.products.translationQAPrice\":\"$19/mo\",\"products.products.bundleOptimizer\":\"Bundle Optimizer\",\"products.products.bundleOptimizerDesc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"products.products.bundleOptimizerPrice\":\"$49/mo\",\"products.products.learnMore\":\"Learn More\",\"products.productsHeader.ourProducts\":\"Our Products\",\"products.productsHeader.exploreOurSuiteOfTools\":\"Explore our suite of tools designed to help you build better i18n apps.\",\"contact.contactForm.name\":\"Name\",\"contact.contactForm.email\":\"Email\",\"contact.contactForm.subject\":\"Subject\",\"contact.contactForm.message\":\"Message\",\"contact.contactForm.sendMessage\":\"Send Message\",\"contact.contactForm.wellGetBackTo\":\"We'll get back to you within 48 hours.\",\"contact.contactHeader.contactUs\":\"Contact Us\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Have questions or want to contribute? We'd love to hear from you.\",\"home.understandingImpact.understandingTheImpact\":\"Understanding the Impact\",\"home.understandingImpact.whyASingleLargeJson\":\"Why a single large JSON can hurt performance\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"home.understandingImpact.theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"home.understandingImpact.waterfallRequests\":\"Waterfall requests:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Cache invalidation:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"home.understandingImpact.thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Why These Metrics Matter\",\"home.whyItMatters.bundleSize\":\"Bundle Size\",\"home.whyItMatters.theBundleIsTheData\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"home.whyItMatters.renderingHydration\":\"Rendering & Hydration\",\"home.whyItMatters.connectingALargeJson\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Dynamic Loading\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\",\"home.resultsTable.sampleResults\":\"Sample Results\",\"home.resultsTable.bundleSize\":\"Bundle Size\",\"home.resultsTable.lookupTime\":\"Lookup Time\",\"home.resultsTable.lazyLoading\":\"Lazy Loading\",\"home.hero.aTestApplicationDesignedTo\":\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\",\"home.hero.viewResults\":\"View Results\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Founder & Lead Engineer\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Performance Engineer\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Developer Advocate\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Full-Stack Developer\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Data Analyst\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Community Manager\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Manages community contributions, partnerships, and events. Background in open source governance.\",\"team.teamHeader.ourTeam\":\"Our Team\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\",\"blog.blogList.i18nBenchmark2026Results\":\"i18n Benchmark 2026 Results\",\"blog.blogList.march152026\":\"March 15, 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.\",\"blog.blogList.howToReduceYourI18n\":\"How to Reduce Your i18n Bundle by 60%\",\"blog.blogList.march82026\":\"March 8, 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.\",\"blog.blogList.theStateOfInternationalizationIn\":\"The State of Internationalization in 2026\",\"blog.blogList.february282026\":\"February 28, 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migrating from react-i18next to Lingui\",\"blog.blogList.february152026\":\"February 15, 2026\",\"blog.blogList.aStepByStepGuide\":\"A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components and i18n: What Changes?\",\"blog.blogList.february12026\":\"February 1, 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Benchmark Methodology: How We Test\",\"blog.blogList.january202026\":\"January 20, 2026\",\"blog.blogList.aTransparentLookAtOur\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"blog.blogList.readMore\":\"Read More →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Insights, deep dives, and updates from the i18n benchmarking community.\",\"about.aboutHeader.aboutThisBenchmark\":\"About This Benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\",\"about.aboutGrid.whyThisExists\":\"Why This Exists\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"about.aboutGrid.methodology\":\"Methodology\",\"about.aboutGrid.theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Bundle size impact\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"about.whatWeMeasure.renderingOverhead\":\"Rendering overhead\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"about.whatWeMeasure.hydrationCost\":\"Hydration cost\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Lazy loading effectiveness\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Locale switch speed\",\"about.whatWeMeasure.howFastTheAppCan\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"What We Measure\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Simple, Transparent Pricing\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Choose the plan that fits your team. No hidden fees.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Frequently Asked Questions\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Everything you need to know about i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"faq.faqList.weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"faq.faqList.weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"faq.faqList.weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"faq.faqList.isTheDataReliable\":\"Is the data reliable?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"faq.faqList.doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"faq.faqList.howCanIContribute\":\"How can I contribute?\",\"faq.faqList.thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"},\"fr\":{\"settings.preferencesSection.preferences\":\"Préférences\",\"settings.preferencesSection.emailNotifications\":\"Notifications par email\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Recevoir des rapports hebdomadaires de benchmark\",\"settings.preferencesSection.darkMode\":\"Mode sombre\",\"settings.preferencesSection.useDarkColorScheme\":\"Utiliser le schéma de couleurs sombres\",\"settings.preferencesSection.defaultLanguage\":\"Langue par défaut\",\"settings.settingsHeader.settings\":\"Paramètres\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Gérez vos préférences de compte et votre configuration.\",\"settings.settingsFooter.cancel\":\"Annuler\",\"settings.settingsFooter.saveChanges\":\"Enregistrer les modifications\",\"settings.apiAccessSection.apiAccess\":\"Accès API\",\"settings.apiAccessSection.apiKey\":\"Clé API\",\"settings.apiAccessSection.useThisKeyTo\":\"Utilisez cette clé pour accéder à l'API de benchmarking par programmation.\",\"settings.apiAccessSection.copy\":\"Copier\",\"settings.profileSection.profile\":\"Profil\",\"settings.profileSection.displayName\":\"Nom d'affichage\",\"settings.profileSection.email\":\"Email\",\"shared.header.home\":\"Accueil\",\"shared.header.methodology\":\"Méthodologie\",\"shared.header.mockPages\":\"Pages de test\",\"shared.header.products\":\"Produits\",\"shared.header.pricing\":\"Tarifs\",\"shared.header.team\":\"Équipe\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Carrières\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Contact\",\"shared.header.settings\":\"Paramètres\",\"shared.header.goToGithub\":\"Aller sur GitHub\",\"shared.footer.resources\":\"Ressources\",\"shared.footer.contact\":\"Contact\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Méthodologie\",\"shared.footer.contributing\":\"Contribuer\",\"shared.footer.builtWith\":\"i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"shared.mockBanner.text\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"shared.themeToggle.themeModeLightClick\":\"Mode thématique : clair. Cliquez pour passer en mode sombre.\",\"shared.themeToggle.themeModeDarkClick\":\"Mode thématique : sombre. Cliquez pour passer en mode auto (système).\",\"shared.themeToggle.themeAuto\":\"Thème : Auto\",\"shared.themeToggle.themeDark\":\"Thème : Sombre\",\"shared.themeToggle.themeLight\":\"Thème : Clair\",\"careers.careersHeader.careers\":\"Carrières\",\"careers.careersHero.fromAnywhere\":\"de n'importe où dans le monde\",\"careers.careersBenefits.competitivePay\":\"Salaire compétitif\",\"careers.careersBenefits.topOfMarket\":\"Rémunération au sommet du marché\",\"careers.careersBenefits.openSourceTime\":\"Temps open source\",\"careers.careersBenefits.twentyPercentTime\":\"20 % du temps pour l'OSS\",\"careers.careersPositions.seniorFrontendEngineer\":\"Ingénieur Frontend Senior\",\"careers.careersPositions.seniorFrontendEngineerDesc\":\"Construisez et maintenez notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\",\"careers.openPositions.openPositions\":\"Postes vacants\",\"careers.openPositions.remote\":\"À distance\",\"careers.openPositions.fullTime\":\"Temps plein\",\"careers.openPositions.applyNow\":\"Postuler maintenant\",\"route.route.oopsPageNotFound\":\"Oups ! Page non trouvée\",\"route.route.returnToHome\":\"Retour à l'accueil\",\"route.route.couldNotMeasureHydrationDuration\":\"Impossible de mesurer la durée d'hydratation :\",\"pricing.pricingTiers.starterTier\":\"Starter\",\"pricing.pricingTiers.starterPrice\":\"0 $\",\"pricing.pricingTiers.forever\":\"à vie\",\"pricing.pricingTiers.runsPerDay\":\"5 analyses de benchmark/jour\",\"pricing.pricingTiers.libraries3\":\"3 bibliothèques\",\"pricing.pricingTiers.communitySupport\":\"Support communautaire\",\"pricing.pricingTiers.publicResults\":\"Résultats publics\",\"pricing.pricingTiers.getStarted\":\"Démarrer\",\"pricing.pricingTiers.proTier\":\"Pro\",\"pricing.pricingTiers.proPrice\":\"29 $\",\"pricing.pricingTiers.perMonth\":\"/mois\",\"pricing.pricingTiers.unlimitedRuns\":\"Analyses illimitées\",\"pricing.pricingTiers.allLibraries\":\"Toutes les bibliothèques\",\"pricing.pricingTiers.prioritySupport\":\"Support prioritaire\",\"pricing.pricingTiers.privateResults\":\"Résultats privés\",\"pricing.pricingTiers.ciIntegration\":\"Intégration CI\",\"pricing.pricingTiers.historicalData\":\"Données historiques\",\"pricing.pricingTiers.enterpriseTier\":\"Entreprise\",\"pricing.pricingTiers.custom\":\"Sur mesure\",\"pricing.pricingTiers.everythingInPro\":\"Tout ce qui est dans Pro\",\"pricing.pricingTiers.onPremiseOption\":\"Option sur site\",\"pricing.pricingTiers.ssoSaml\":\"SSO & SAML\",\"pricing.pricingTiers.dedicatedAccountManager\":\"Gestionnaire de compte dédié\",\"pricing.pricingTiers.customSLAs\":\"SLAs personnalisés\",\"pricing.pricingTiers.auditLogs\":\"Journaux d'audit\",\"pricing.pricingTiers.trainingSessions\":\"Sessions de formation\",\"pricing.pricingTiers.contactSales\":\"Contacter les ventes\",\"products.products.benchmarkCLI\":\"CLI de Benchmark\",\"products.products.benchmarkCLIDesc\":\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"products.products.benchmarkCLIPrice\":\"Gratuit\",\"products.products.benchmarkCloud\":\"Benchmark Cloud\",\"products.products.benchmarkCloudDesc\":\"Benchmarking automatisé dans le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"products.products.benchmarkCloudPrice\":\"29 $/mois\",\"products.products.benchmarkEnterprise\":\"Benchmark Entreprise\",\"products.products.benchmarkEnterpriseDesc\":\"Déploiement sur site avec SSO, journaux d'audit, SLAs personnalisés et support dédié.\",\"products.products.benchmarkEnterprisePrice\":\"Nous contacter\",\"products.products.migrationAssistant\":\"Assistant de migration\",\"products.products.migrationAssistantDesc\":\"Outil propulsé par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.\",\"products.products.migrationAssistantPrice\":\"99 $ une fois\",\"products.products.translationQA\":\"QA de Traduction\",\"products.products.translationQADesc\":\"Vérifications automatiques de la qualité pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"products.products.translationQAPrice\":\"19 $/mois\",\"products.products.bundleOptimizer\":\"Optimiseur de bundle\",\"products.products.bundleOptimizerDesc\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le code splitting.\",\"products.products.bundleOptimizerPrice\":\"49 $/mois\",\"products.products.learnMore\":\"En savoir plus\",\"products.productsHeader.ourProducts\":\"Nos Produits\",\"products.productsHeader.exploreOurSuiteOfTools\":\"Explorez notre suite d'outils conçus pour vous aider à créer de meilleures applications i18n.\",\"contact.contactForm.name\":\"Nom\",\"contact.contactForm.email\":\"Email\",\"contact.contactForm.subject\":\"Sujet\",\"contact.contactForm.message\":\"Message\",\"contact.contactForm.sendMessage\":\"Envoyer le message\",\"contact.contactForm.wellGetBackTo\":\"Nous vous répondrons dans les 48 heures.\",\"contact.contactHeader.contactUs\":\"Contactez-nous\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre.\",\"home.understandingImpact.understandingTheImpact\":\"Comprendre l'impact\",\"home.understandingImpact.whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"home.understandingImpact.theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"home.understandingImpact.waterfallRequests\":\"Requêtes en cascade :\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"home.understandingImpact.cacheInvalidation\":\"Invalidation du cache :\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"home.understandingImpact.thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Pourquoi ces mesures sont importantes\",\"home.whyItMatters.bundleSize\":\"Taille du bundle\",\"home.whyItMatters.theBundleIsTheData\":\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"home.whyItMatters.renderingHydration\":\"Rendu & Hydratation\",\"home.whyItMatters.connectingALargeJson\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Chargement dynamique\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\",\"home.resultsTable.sampleResults\":\"Exemples de résultats\",\"home.resultsTable.bundleSize\":\"Taille du bundle\",\"home.resultsTable.lookupTime\":\"Temps de recherche\",\"home.resultsTable.lazyLoading\":\"Chargement différé\",\"home.hero.aTestApplicationDesignedTo\":\"Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\",\"home.hero.viewResults\":\"Voir les résultats\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Fondatrice & Ingénieure en chef\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Ingénieur Performance\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Developer Advocate\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Développeur Full-Stack\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Analyste de données\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Responsable de communauté\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\",\"team.teamHeader.ourTeam\":\"Notre équipe\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement.\",\"blog.blogList.i18nBenchmark2026Results\":\"Résultats de l'i18n Benchmark 2026\",\"blog.blogList.march152026\":\"15 mars 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs.\",\"blog.blogList.howToReduceYourI18n\":\"Comment réduire votre bundle i18n de 60 %\",\"blog.blogList.march82026\":\"8 mars 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.\",\"blog.blogList.theStateOfInternationalizationIn\":\"L'état de l'internationalisation en 2026\",\"blog.blogList.february282026\":\"28 février 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migration de react-i18next vers Lingui\",\"blog.blogList.february152026\":\"15 février 2026\",\"blog.blogList.aStepByStepGuide\":\"Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components et i18n : Qu'est-ce qui change ?\",\"blog.blogList.february12026\":\"1er février 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Méthodologie du benchmark : comment nous testons\",\"blog.blogList.january202026\":\"20 janvier 2026\",\"blog.blogList.aTransparentLookAtOur\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"blog.blogList.readMore\":\"Lire la suite →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n.\",\"about.aboutHeader.aboutThisBenchmark\":\"À propos de ce Benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.\",\"about.aboutGrid.whyThisExists\":\"Pourquoi ce Projet Existe\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision d'architecture aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Quel est son impact sur le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement asynchrone aide-t-il vraiment ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"about.aboutGrid.methodology\":\"Méthodologie\",\"about.aboutGrid.theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons le React Profiler pour capturer les temps de rendu lors des changements de locale. Tous les tests s'exécutent en CI sur du matériel constant pour garantir des résultats reproductibles.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Impact sur la taille du bundle\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"about.whatWeMeasure.renderingOverhead\":\"Surcharge de rendu\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.\",\"about.whatWeMeasure.hydrationCost\":\"Coût d'hydratation\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Efficacité du lazy loading\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Vitesse de changement de langue\",\"about.whatWeMeasure.howFastTheAppCan\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"Ce que nous mesurons\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Tarification Simple et Transparente\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Choisissez le plan qui convient à votre équipe. Pas de frais cachés.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Foire Aux Questions\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Tout ce que vous devez savoir sur i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"Qu'est-ce que i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite d'analyse comparative open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"faq.faqList.howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle immédiat de re-benchmarking.\",\"faq.faqList.isTheDataReliable\":\"Les données sont-elles fiables ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées aux côtés de notre analyse pour une transparence totale.\",\"faq.faqList.doYouOfferConsultingServices\":\"Proposez-vous des services de conseil ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Oui, notre plan Entreprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation spécifique, votre échelle et vos contraintes.\",\"faq.faqList.howCanIContribute\":\"Comment puis-je contribuer ?\",\"faq.faqList.thereAreManyWaysTo\":\"Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\"},\"es\":{\"settings.preferencesSection.preferences\":\"Preferencias\",\"settings.preferencesSection.emailNotifications\":\"Notificaciones por correo electrónico\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Recibir informes semanales de benchmark\",\"settings.preferencesSection.darkMode\":\"Modo oscuro\",\"settings.preferencesSection.useDarkColorScheme\":\"Usar esquema de colores oscuros\",\"settings.preferencesSection.defaultLanguage\":\"Idioma predeterminado\",\"settings.settingsHeader.settings\":\"Configuración\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Gestione sus preferencias de cuenta y configuración.\",\"settings.settingsFooter.cancel\":\"Cancelar\",\"settings.settingsFooter.saveChanges\":\"Guardar cambios\",\"settings.apiAccessSection.apiAccess\":\"Acceso API\",\"settings.apiAccessSection.apiKey\":\"Clave API\",\"settings.apiAccessSection.useThisKeyTo\":\"Utilice esta clave para acceder a la API de benchmarking de forma programática.\",\"settings.apiAccessSection.copy\":\"Copiar\",\"settings.profileSection.profile\":\"Perfil\",\"settings.profileSection.displayName\":\"Nombre de pantalla\",\"settings.profileSection.email\":\"Correo electrónico\",\"shared.header.home\":\"Inicio\",\"shared.header.methodology\":\"Metodología\",\"shared.header.mockPages\":\"Páginas de prueba\",\"shared.header.products\":\"Productos\",\"shared.header.pricing\":\"Precios\",\"shared.header.team\":\"Equipo\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Carreras\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Contacto\",\"shared.header.settings\":\"Configuración\",\"shared.header.goToGithub\":\"Ir a GitHub\",\"shared.footer.resources\":\"Recursos\",\"shared.footer.contact\":\"Contacto\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Metodología\",\"shared.footer.contributing\":\"Contribuir\",\"shared.footer.builtWith\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.\",\"shared.mockBanner.text\":\"⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"shared.themeToggle.themeModeLightClick\":\"Modo de tema: claro. Haga clic para cambiar al modo oscuro.\",\"shared.themeToggle.themeModeDarkClick\":\"Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).\",\"shared.themeToggle.themeAuto\":\"Tema: Auto\",\"shared.themeToggle.themeDark\":\"Tema: Oscuro\",\"shared.themeToggle.themeLight\":\"Tema: Claro\",\"careers.openPositions.openPositions\":\"Puestos abiertos\",\"careers.openPositions.seniorPerformanceEngineer\":\"Ingeniero de rendimiento senior\",\"careers.openPositions.fullTime\":\"Tiempo completo\",\"careers.openPositions.remote\":\"Remoto\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.\",\"careers.openPositions.technicalWriter\":\"Redactor técnico\",\"careers.openPositions.partTime\":\"Tiempo parcial\",\"careers.openPositions.createAndMaintainDocumentation\":\"Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.\",\"careers.openPositions.frontendDeveloper\":\"Desarrollador Frontend\",\"careers.openPositions.buildAndMaintainThe\":\"Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.\",\"careers.openPositions.devOpsEngineer\":\"Ingeniero DevOps\",\"careers.openPositions.designAndMaintainThe\":\"Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.\",\"careers.openPositions.applyNow\":\"Solicitar ahora\",\"careers.careersHeader.careers\":\"Carreras\",\"careers.careersHeader.joinOurMissionToMake\":\"Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar.\",\"careers.careersBenefits.whyJoinUs\":\"¿Por qué unirse a nosotros?\",\"careers.careersBenefits.remoteFirst\":\"Remoto primero\",\"careers.careersBenefits.workFromAnywhereFully\":\"Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.\",\"careers.careersBenefits.openSource\":\"Código abierto\",\"careers.careersBenefits.allOurWorkIs\":\"Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.\",\"careers.careersBenefits.impactful\":\"Impactante\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas.\",\"route.route.oopsPageNotFound\":\"¡Ups! Página no encontrada\",\"route.route.returnToHome\":\"Volver al inicio\",\"route.route.couldNotMeasureHydrationDuration\":\"No se pudo medir la duración de la hidratación:\",\"pricing.pricingTiers.freeTier\":\"Nivel gratuito\",\"pricing.pricingTiers.free\":\"Gratis\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"Tablero público de benchmarks\",\"pricing.pricingTiers.basicLibraryComparisons\":\"Comparaciones básicas de bibliotecas\",\"pricing.pricingTiers.communityForumAccess\":\"Acceso al foro de la comunidad\",\"pricing.pricingTiers.monthlyResultDigest\":\"Resumen mensual de resultados\",\"pricing.pricingTiers.getStarted\":\"Comenzar\",\"pricing.pricingTiers.proTier\":\"Nivel Pro\",\"pricing.pricingTiers.perMonth\":\"/mes\",\"pricing.pricingTiers.allFreeFeatures\":\"Todas las características del nivel gratuito\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"Configuraciones de benchmark personalizadas\",\"pricing.pricingTiers.privateResultsDashboard\":\"Tablero de resultados privado\",\"pricing.pricingTiers.apiAccess1000Requests\":\"Acceso API (1.000 peticiones/día)\",\"pricing.pricingTiers.slackIntegration\":\"Integración de Slack\",\"pricing.pricingTiers.subscribeToPro\":\"Suscribirse a Pro\",\"pricing.pricingTiers.enterpriseTier\":\"Nivel Enterprise\",\"pricing.pricingTiers.custom\":\"Personalizado\",\"pricing.pricingTiers.allProFeatures\":\"Todas las características del nivel Pro\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"Infraestructura de benchmark dedicada\",\"pricing.pricingTiers.customLibraryIntegrations\":\"Integraciones de bibliotecas personalizadas\",\"pricing.pricingTiers.slaGuarantees\":\"Garantías de SLA\",\"pricing.pricingTiers.prioritySupport\":\"Soporte prioritario\",\"pricing.pricingTiers.contactSales\":\"Contactar con ventas\",\"products.productsGrid.benchmarkDashboard\":\"Tablero de benchmarks\",\"products.productsGrid.interactiveChartsAndTables\":\"Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.\",\"products.productsGrid.bundleAnalyzer\":\"Analizador de paquetes\",\"products.productsGrid.uploadYourBuildOutput\":\"Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.\",\"products.productsGrid.migrationAssistant\":\"Asistente de migración\",\"products.productsGrid.automatedCodemodsAndGuides\":\"Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.\",\"products.productsGrid.performanceMonitor\":\"Monitor de rendimiento\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.\",\"products.productsGrid.learnMore\":\"Saber más\",\"products.productsHeader.products\":\"Productos\",\"products.productsHeader.toolsAndServicesTo\":\"Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización.\",\"contact.contactForm.name\":\"Nombre\",\"contact.contactForm.email\":\"Correo electrónico\",\"contact.contactForm.subject\":\"Asunto\",\"contact.contactForm.message\":\"Mensaje\",\"contact.contactForm.sendMessage\":\"Enviar mensaje\",\"contact.contactForm.wellGetBackTo\":\"Nos pondremos en contacto con usted en un plazo de 48 horas.\",\"contact.contactHeader.contactUs\":\"Contáctenos\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted.\",\"home.understandingImpact.understandingTheImpact\":\"Entendiendo el impacto\",\"home.understandingImpact.whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"home.understandingImpact.theJsonMustBeParsed\":\"El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"home.understandingImpact.waterfallRequests\":\"Solicitudes en cascada:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Invalidación de la caché:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"Lo que mide este benchmark\",\"home.understandingImpact.thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Por qué son importantes estas métricas\",\"home.whyItMatters.bundleSize\":\"Tamaño del paquete\",\"home.whyItMatters.theBundleIsTheData\":\"El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\",\"home.whyItMatters.renderingHydration\":\"Renderizado e hidratación\",\"home.whyItMatters.connectingALargeJson\":\"Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Carga dinámica\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\",\"home.resultsTable.sampleResults\":\"Resultados de muestra\",\"home.resultsTable.bundleSize\":\"Tamaño del paquete\",\"home.resultsTable.lookupTime\":\"Tiempo de búsqueda\",\"home.resultsTable.lazyLoading\":\"Carga diferida\",\"home.hero.aTestApplicationDesignedTo\":\"Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.\",\"home.hero.viewResults\":\"Ver resultados\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Fundadora e Ingeniera Principal\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Ingeniero de rendimiento\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Abogado de desarrolladores\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Desarrollador Full-Stack\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Analista de datos\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Responsable de la comunidad\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\",\"team.teamHeader.ourTeam\":\"Nuestro equipo\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo.\",\"blog.blogList.i18nBenchmark2026Results\":\"Resultados de i18n Benchmark 2026\",\"blog.blogList.march152026\":\"15 de marzo de 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos.\",\"blog.blogList.howToReduceYourI18n\":\"Cómo reducir su paquete i18n en un 60%\",\"blog.blogList.march82026\":\"8 de marzo de 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.\",\"blog.blogList.theStateOfInternationalizationIn\":\"El estado de la internacionalización en 2026\",\"blog.blogList.february282026\":\"28 de febrero de 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migración de react-i18next a Lingui\",\"blog.blogList.february152026\":\"15 de febrero de 2026\",\"blog.blogList.aStepByStepGuide\":\"Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components e i18n: ¿Qué cambia?\",\"blog.blogList.february12026\":\"1 de febrero de 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Metodología de benchmark: cómo probamos\",\"blog.blogList.january202026\":\"20 de enero de 2026\",\"blog.blogList.aTransparentLookAtOur\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"blog.blogList.readMore\":\"Leer más →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n.\",\"about.aboutHeader.aboutThisBenchmark\":\"Acerca de este Benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.\",\"about.aboutGrid.whyThisExists\":\"¿Por Qué Existe Este Proyecto?\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿El lazy loading realmente ayuda o solo traslada el costo? Este benchmark responde a esas preguntas con datos reales.\",\"about.aboutGrid.methodology\":\"Metodología\",\"about.aboutGrid.theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y usamos React Profiler para capturar los tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Impacto en el tamaño del bundle\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"about.whatWeMeasure.renderingOverhead\":\"Sobrecarga de renderizado\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"¿Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React? Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\",\"about.whatWeMeasure.hydrationCost\":\"Costo de hidratación\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Efectividad del lazy loading\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Velocidad de cambio de idioma\",\"about.whatWeMeasure.howFastTheAppCan\":\"Qué tan rápido puede cambiar la aplicación de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"Lo que medimos\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Precios Simples y Transparentes\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Elija el plan que se adapte a su equipo. Sin cargos ocultos.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Preguntas Frecuentes\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Todo lo que necesitas saber sobre i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas son compatibles actualmente ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará las presentaciones que califiquen.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se actualizan los benchmarks ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"faq.faqList.isTheDataReliable\":\"¿Son fiables los datos ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos sin procesar se publican junto con nuestro análisis para una total transparencia.\",\"faq.faqList.doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"¡Sí! Nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y restricciones.\",\"faq.faqList.howCanIContribute\":\"¿Cómo puedo contribuir ?\",\"faq.faqList.thereAreManyWaysTo\":\"Hay muchas formas de contribuir: enviando benchmarks, mejorando la documentación, informando errores, sugiriendo nuevas métricas o patrocinando el proyecto. Visite nuestro repositorio de GitHub para más detalles.\"},\"de\":{\"settings.preferencesSection.preferences\":\"Einstellungen\",\"settings.preferencesSection.emailNotifications\":\"E-Mail-Benachrichtigungen\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Wöchentliche Benchmark-Berichte erhalten\",\"settings.preferencesSection.darkMode\":\"Dunkelmodus\",\"settings.preferencesSection.useDarkColorScheme\":\"Dunkles Farbschema verwenden\",\"settings.preferencesSection.defaultLanguage\":\"Standardsprache\",\"settings.settingsHeader.settings\":\"Einstellungen\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.\",\"settings.settingsFooter.cancel\":\"Abbrechen\",\"settings.settingsFooter.saveChanges\":\"Änderungen speichern\",\"settings.apiAccessSection.apiAccess\":\"API-Zugriff\",\"settings.apiAccessSection.apiKey\":\"API-Schlüssel\",\"settings.apiAccessSection.useThisKeyTo\":\"Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.\",\"settings.apiAccessSection.copy\":\"Kopieren\",\"settings.profileSection.profile\":\"Profil\",\"settings.profileSection.displayName\":\"Anzeigename\",\"settings.profileSection.email\":\"E-Mail\",\"shared.header.home\":\"Startseite\",\"shared.header.methodology\":\"Methodik\",\"shared.header.mockPages\":\"Testseiten\",\"shared.header.products\":\"Produkte\",\"shared.header.pricing\":\"Preise\",\"shared.header.team\":\"Team\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Karriere\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Kontakt\",\"shared.header.settings\":\"Einstellungen\",\"shared.header.goToGithub\":\"Zu GitHub\",\"shared.footer.resources\":\"Ressourcen\",\"shared.footer.contact\":\"Kontakt\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Methodik\",\"shared.footer.contributing\":\"Beitragen\",\"shared.footer.builtWith\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.\",\"shared.mockBanner.text\":\"⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.\",\"shared.themeToggle.themeModeLightClick\":\"Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.\",\"shared.themeToggle.themeModeDarkClick\":\"Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.\",\"shared.themeToggle.themeAuto\":\"Thema: Auto\",\"shared.themeToggle.themeDark\":\"Thema: Dunkel\",\"shared.themeToggle.themeLight\":\"Thema: Hell\",\"careers.openPositions.openPositions\":\"Offene Stellen\",\"careers.openPositions.seniorPerformanceEngineer\":\"Senior Performance Engineer\",\"careers.openPositions.fullTime\":\"Vollzeit\",\"careers.openPositions.remote\":\"Remote\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.\",\"careers.openPositions.technicalWriter\":\"Technischer Redakteur\",\"careers.openPositions.partTime\":\"Teilzeit\",\"careers.openPositions.createAndMaintainDocumentation\":\"Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.\",\"careers.openPositions.frontendDeveloper\":\"Frontend-Entwickler\",\"careers.openPositions.buildAndMaintainThe\":\"Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.\",\"careers.openPositions.devOpsEngineer\":\"DevOps-Ingenieur\",\"careers.openPositions.designAndMaintainThe\":\"Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.\",\"careers.openPositions.applyNow\":\"Jetzt bewerben\",\"careers.careersHeader.careers\":\"Karriere\",\"careers.careersHeader.joinOurMissionToMake\":\"Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen.\",\"careers.careersBenefits.whyJoinUs\":\"Warum zu uns kommen?\",\"careers.careersBenefits.remoteFirst\":\"Remote-First\",\"careers.careersBenefits.workFromAnywhereFully\":\"Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.\",\"careers.careersBenefits.openSource\":\"Open Source\",\"careers.careersBenefits.allOurWorkIs\":\"Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.\",\"careers.careersBenefits.impactful\":\"Wirkungsvoll\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen.\",\"route.route.oopsPageNotFound\":\"Hoppla! Seite nicht gefunden\",\"route.route.returnToHome\":\"Zurück zur Startseite\",\"route.route.couldNotMeasureHydrationDuration\":\"Hydratationsdauer konnte nicht gemessen werden:\",\"pricing.pricingTiers.freeTier\":\"Kostenlose Stufe\",\"pricing.pricingTiers.free\":\"Kostenlos\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"Öffentliches Benchmark-Dashboard\",\"pricing.pricingTiers.basicLibraryComparisons\":\"Einfache Bibliotheksvergleiche\",\"pricing.pricingTiers.communityForumAccess\":\"Zugang zum Community-Forum\",\"pricing.pricingTiers.monthlyResultDigest\":\"Monatliche Ergebniszusammenfassung\",\"pricing.pricingTiers.getStarted\":\"Loslegen\",\"pricing.pricingTiers.proTier\":\"Pro-Stufe\",\"pricing.pricingTiers.perMonth\":\"/Monat\",\"pricing.pricingTiers.allFreeFeatures\":\"Alle kostenlosen Funktionen\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"Benutzerdefinierte Benchmark-Konfigurationen\",\"pricing.pricingTiers.privateResultsDashboard\":\"Privates Ergebnis-Dashboard\",\"pricing.pricingTiers.apiAccess1000Requests\":\"API-Zugriff (1.000 Anfragen/Tag)\",\"pricing.pricingTiers.slackIntegration\":\"Slack-Integration\",\"pricing.pricingTiers.subscribeToPro\":\"Pro abonnieren\",\"pricing.pricingTiers.enterpriseTier\":\"Enterprise-Stufe\",\"pricing.pricingTiers.custom\":\"Individuell\",\"pricing.pricingTiers.allProFeatures\":\"Alle Pro-Funktionen\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"Dedizierte Benchmark-Infrastruktur\",\"pricing.pricingTiers.customLibraryIntegrations\":\"Benutzerdefinierte Bibliotheksintegrationen\",\"pricing.pricingTiers.slaGuarantees\":\"SLA-Garantien\",\"pricing.pricingTiers.prioritySupport\":\"Priorisierter Support\",\"pricing.pricingTiers.contactSales\":\"Vertrieb kontaktieren\",\"products.productsGrid.benchmarkDashboard\":\"Benchmark-Dashboard\",\"products.productsGrid.interactiveChartsAndTables\":\"Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.\",\"products.productsGrid.bundleAnalyzer\":\"Bundle-Analyzer\",\"products.productsGrid.uploadYourBuildOutput\":\"Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.\",\"products.productsGrid.migrationAssistant\":\"Migrationsassistent\",\"products.productsGrid.automatedCodemodsAndGuides\":\"Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.\",\"products.productsGrid.performanceMonitor\":\"Leistungsmonitor\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.\",\"products.productsGrid.learnMore\":\"Mehr erfahren\",\"products.productsHeader.products\":\"Produkte\",\"products.productsHeader.toolsAndServicesTo\":\"Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie.\",\"contact.contactForm.name\":\"Name\",\"contact.contactForm.email\":\"E-Mail\",\"contact.contactForm.subject\":\"Betreff\",\"contact.contactForm.message\":\"Nachricht\",\"contact.contactForm.sendMessage\":\"Nachricht senden\",\"contact.contactForm.wellGetBackTo\":\"Wir melden uns innerhalb von 48 Stunden bei Ihnen.\",\"contact.contactHeader.contactUs\":\"Kontaktieren Sie uns\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören.\",\"home.understandingImpact.understandingTheImpact\":\"Die Auswirkungen verstehen\",\"home.understandingImpact.whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"home.understandingImpact.theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"home.understandingImpact.waterfallRequests\":\"Waterfall-Anfragen:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Cache-Invalidierung:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"home.understandingImpact.thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Warum diese Kennzahlen wichtig sind\",\"home.whyItMatters.bundleSize\":\"Bundle-Größe\",\"home.whyItMatters.theBundleIsTheData\":\"Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.\",\"home.whyItMatters.renderingHydration\":\"Rendering & Hydratation\",\"home.whyItMatters.connectingALargeJson\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"home.whyItMatters.dynamicLoading\":\"Dynamisches Laden\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.\",\"home.resultsTable.sampleResults\":\"Beispielergebnisse\",\"home.resultsTable.bundleSize\":\"Bundle-Größe\",\"home.resultsTable.lookupTime\":\"Suchzeit\",\"home.resultsTable.lazyLoading\":\"Lazy Loading\",\"home.hero.aTestApplicationDesignedTo\":\"Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\",\"home.hero.viewResults\":\"Ergebnisse anzeigen\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Gründerin & Leitende Ingenieurin\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Performance-Ingenieur\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Developer Advocate\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Full-Stack-Entwickler\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Datenanalystin\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Community-Managerin\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.\",\"team.teamHeader.ourTeam\":\"Unser Team\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools.\",\"blog.blogList.i18nBenchmark2026Results\":\"i18n Benchmark 2026 Ergebnisse\",\"blog.blogList.march152026\":\"15. März 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen.\",\"blog.blogList.howToReduceYourI18n\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"blog.blogList.march82026\":\"8. März 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.\",\"blog.blogList.theStateOfInternationalizationIn\":\"Der Stand der Internationalisierung im Jahr 2026\",\"blog.blogList.february282026\":\"28. Februar 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migration von react-i18next zu Lingui\",\"blog.blogList.february152026\":\"15. Februar 2026\",\"blog.blogList.aStepByStepGuide\":\"Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components und i18n: Was ändert sich?\",\"blog.blogList.february12026\":\"1. Februar 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Benchmark-Methodik: Wie wir testen\",\"blog.blogList.january202026\":\"20. Januar 2026\",\"blog.blogList.aTransparentLookAtOur\":\"Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"blog.blogList.readMore\":\"Mehr lesen →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community.\",\"about.aboutHeader.aboutThisBenchmark\":\"Über diesen Benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.\",\"about.aboutGrid.whyThisExists\":\"Warum dies existiert\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\",\"about.aboutGrid.methodology\":\"Methodik\",\"about.aboutGrid.theSame10PageApp\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden React Profiler, um die Renderzeiten während des Sprachwechsels zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Auswirkungen auf die Bundle-Größe\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit bei langsamen Netzwerken aus.\",\"about.whatWeMeasure.renderingOverhead\":\"Rendering-Overhead\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzelnen Kontextanbieter injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.\",\"about.whatWeMeasure.hydrationCost\":\"Hydratisierungs-Kosten\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Effektivität des Lazy Loadings\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Geschwindigkeit beim Sprachwechsel\",\"about.whatWeMeasure.howFastTheAppCan\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufs neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"Was wir messen\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Einfache, transparente Preisgestaltung\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Häufig gestellte Fragen\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Alles, was Sie über i18n Benchmark wissen müssen.\",\"faq.faqList.whatIsI18nBenchmark\":\"Was ist i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"Wie werden die Benchmarks durchgeführt ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"Wie oft werden die Benchmarks aktualisiert ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.\",\"faq.faqList.isTheDataReliable\":\"Sind die Daten zuverlässig ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmphasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"faq.faqList.doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen validieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Einschränkungen geben.\",\"faq.faqList.howCanIContribute\":\"Wie kann ich beitragen ?\",\"faq.faqList.thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details.\"},\"it\":{\"settings.preferencesSection.preferences\":\"Preferenze\",\"settings.preferencesSection.emailNotifications\":\"Notifiche via email\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Ricevi rapporti settimanali sui benchmark\",\"settings.preferencesSection.darkMode\":\"Modalità scura\",\"settings.preferencesSection.useDarkColorScheme\":\"Usa lo schema colori scuro\",\"settings.preferencesSection.defaultLanguage\":\"Lingua predefinita\",\"settings.settingsHeader.settings\":\"Impostazioni\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Gestisci le preferenze del tuo account e la configurazione.\",\"settings.settingsFooter.cancel\":\"Annulla\",\"settings.settingsFooter.saveChanges\":\"Salva modifiche\",\"settings.apiAccessSection.apiAccess\":\"Accesso API\",\"settings.apiAccessSection.apiKey\":\"Chiave API\",\"settings.apiAccessSection.useThisKeyTo\":\"Usa questa chiave per accedere programmaticamente all'API di benchmarking.\",\"settings.apiAccessSection.copy\":\"Copia\",\"settings.profileSection.profile\":\"Profilo\",\"settings.profileSection.displayName\":\"Nome visualizzato\",\"settings.profileSection.email\":\"Email\",\"shared.header.home\":\"Home\",\"shared.header.methodology\":\"Metodologia\",\"shared.header.mockPages\":\"Pagine di test\",\"shared.header.products\":\"Prodotti\",\"shared.header.pricing\":\"Prezzi\",\"shared.header.team\":\"Team\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Carriere\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Contatti\",\"shared.header.settings\":\"Impostazioni\",\"shared.header.goToGithub\":\"Vai su GitHub\",\"shared.footer.resources\":\"Risorse\",\"shared.footer.contact\":\"Contatti\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Metodologia\",\"shared.footer.contributing\":\"Contribuire\",\"shared.footer.builtWith\":\"i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\",\"shared.mockBanner.text\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\",\"shared.themeToggle.themeModeLightClick\":\"Modalità tema: chiara. Clicca per passare alla modalità scura.\",\"shared.themeToggle.themeModeDarkClick\":\"Modalità tema: scura. Clicca per passare alla modalità auto (sistema).\",\"shared.themeToggle.themeAuto\":\"Tema: Auto\",\"shared.themeToggle.themeDark\":\"Tema: Scuro\",\"shared.themeToggle.themeLight\":\"Tema: Chiaro\",\"careers.openPositions.openPositions\":\"Posizioni aperte\",\"careers.openPositions.seniorPerformanceEngineer\":\"Ingegnere delle prestazioni senior\",\"careers.openPositions.fullTime\":\"Tempo pieno\",\"careers.openPositions.remote\":\"Remoto\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.\",\"careers.openPositions.technicalWriter\":\"Scrittore tecnico\",\"careers.openPositions.partTime\":\"Part-time\",\"careers.openPositions.createAndMaintainDocumentation\":\"Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.\",\"careers.openPositions.frontendDeveloper\":\"Sviluppatore Frontend\",\"careers.openPositions.buildAndMaintainThe\":\"Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.\",\"careers.openPositions.devOpsEngineer\":\"Ingegnere DevOps\",\"careers.openPositions.designAndMaintainThe\":\"Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.\",\"careers.openPositions.applyNow\":\"Candidati ora\",\"careers.careersHeader.careers\":\"Carriere\",\"careers.careersHeader.joinOurMissionToMake\":\"Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque.\",\"careers.careersBenefits.whyJoinUs\":\"Perché unirti a noi?\",\"careers.careersBenefits.remoteFirst\":\"Remoto-first\",\"careers.careersBenefits.workFromAnywhereFully\":\"Lavora da ovunque. Team completamente distribuito in 6 fusi orari.\",\"careers.careersBenefits.openSource\":\"Open Source\",\"careers.careersBenefits.allOurWorkIs\":\"Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.\",\"careers.careersBenefits.impactful\":\"Impattante\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci.\",\"route.route.oopsPageNotFound\":\"Ops! Pagina non trovata\",\"route.route.returnToHome\":\"Torna alla Home\",\"route.route.couldNotMeasureHydrationDuration\":\"Impossibile misurare la durata dell'idratazione:\",\"pricing.pricingTiers.freeTier\":\"Piano Gratuito\",\"pricing.pricingTiers.free\":\"Gratis\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"Dashboard pubblica dei benchmark\",\"pricing.pricingTiers.basicLibraryComparisons\":\"Confronti base tra librerie\",\"pricing.pricingTiers.communityForumAccess\":\"Accesso al forum della comunità\",\"pricing.pricingTiers.monthlyResultDigest\":\"Riepilogo mensile dei risultati\",\"pricing.pricingTiers.getStarted\":\"Inizia ora\",\"pricing.pricingTiers.proTier\":\"Piano Pro\",\"pricing.pricingTiers.perMonth\":\"/mese\",\"pricing.pricingTiers.allFreeFeatures\":\"Tutte le funzioni del piano gratuito\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"Configurazioni di benchmark personalizzate\",\"pricing.pricingTiers.privateResultsDashboard\":\"Dashboard dei risultati privata\",\"pricing.pricingTiers.apiAccess1000Requests\":\"Accesso API (1.000 richieste/giorno)\",\"pricing.pricingTiers.slackIntegration\":\"Integrazione Slack\",\"pricing.pricingTiers.subscribeToPro\":\"Abbonati a Pro\",\"pricing.pricingTiers.enterpriseTier\":\"Piano Enterprise\",\"pricing.pricingTiers.custom\":\"Personalizzato\",\"pricing.pricingTiers.allProFeatures\":\"Tutte le funzioni del piano Pro\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"Infrastruttura di benchmark dedicata\",\"pricing.pricingTiers.customLibraryIntegrations\":\"Integrazioni librerie personalizzate\",\"pricing.pricingTiers.slaGuarantees\":\"Garanzie SLA\",\"pricing.pricingTiers.prioritySupport\":\"Supporto prioritario\",\"pricing.pricingTiers.contactSales\":\"Contatta l'ufficio vendite\",\"products.productsGrid.benchmarkDashboard\":\"Dashboard dei benchmark\",\"products.productsGrid.interactiveChartsAndTables\":\"Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.\",\"products.productsGrid.bundleAnalyzer\":\"Analizzatore di bundle\",\"products.productsGrid.uploadYourBuildOutput\":\"Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.\",\"products.productsGrid.migrationAssistant\":\"Assistente alla migrazione\",\"products.productsGrid.automatedCodemodsAndGuides\":\"Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.\",\"products.productsGrid.performanceMonitor\":\"Monitor delle prestazioni\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.\",\"products.productsGrid.learnMore\":\"Scopri di più\",\"products.productsHeader.products\":\"Prodotti\",\"products.productsHeader.toolsAndServicesTo\":\"Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione.\",\"contact.contactForm.name\":\"Nome\",\"contact.contactForm.email\":\"Email\",\"contact.contactForm.subject\":\"Oggetto\",\"contact.contactForm.message\":\"Messaggio\",\"contact.contactForm.sendMessage\":\"Invia messaggio\",\"contact.contactForm.wellGetBackTo\":\"Ti risponderemo entro 48 ore.\",\"contact.contactHeader.contactUs\":\"Contattaci\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Hai domande o vuoi contribuire? Ci piacerebbe sentirti.\",\"home.understandingImpact.understandingTheImpact\":\"Capire l'impatto\",\"home.understandingImpact.whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"home.understandingImpact.theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"home.understandingImpact.waterfallRequests\":\"Richieste a cascata:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Invalidazione della cache:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"home.understandingImpact.thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Perché queste metriche sono importanti\",\"home.whyItMatters.bundleSize\":\"Dimensione del bundle\",\"home.whyItMatters.theBundleIsTheData\":\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"home.whyItMatters.renderingHydration\":\"Rendering e idratazione\",\"home.whyItMatters.connectingALargeJson\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Caricamento dinamico\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\",\"home.resultsTable.sampleResults\":\"Risultati di esempio\",\"home.resultsTable.bundleSize\":\"Dimensione del bundle\",\"home.resultsTable.lookupTime\":\"Tempo di ricerca\",\"home.resultsTable.lazyLoading\":\"Caricamento lazy\",\"home.hero.aTestApplicationDesignedTo\":\"Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\",\"home.hero.viewResults\":\"Visualizza i risultati\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Fondatrice & Lead Engineer\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Ingegnere delle prestazioni\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Developer Advocate\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Analista dati\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Responsabile della comunità\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\",\"team.teamHeader.ourTeam\":\"Il nostro team\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo.\",\"blog.blogList.i18nBenchmark2026Results\":\"Risultati i18n Benchmark 2026\",\"blog.blogList.march152026\":\"15 marzo 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi.\",\"blog.blogList.howToReduceYourI18n\":\"Come ridurre il bundle i18n del 60%\",\"blog.blogList.march82026\":\"8 marzo 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.\",\"blog.blogList.theStateOfInternationalizationIn\":\"Lo stato dell'internazionalizzazione nel 2026\",\"blog.blogList.february282026\":\"28 febbraio 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migrazione da react-i18next a Lingui\",\"blog.blogList.february152026\":\"15 febbraio 2026\",\"blog.blogList.aStepByStepGuide\":\"Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components e i18n: cosa cambia?\",\"blog.blogList.february12026\":\"1 febbraio 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Metodologia del benchmark: come testiamo\",\"blog.blogList.january202026\":\"20 gennaio 2026\",\"blog.blogList.aTransparentLookAtOur\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.\",\"blog.blogList.readMore\":\"Leggi di più →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n.\",\"about.aboutHeader.aboutThisBenchmark\":\"Informazioni su questo benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\",\"about.aboutGrid.whyThisExists\":\"Perché esiste questo progetto\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lento aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"about.aboutGrid.methodology\":\"Metodologia\",\"about.aboutGrid.theSame10PageApp\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Impatto sulla dimensione del bundle\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sui tempi di download su reti lente.\",\"about.whatWeMeasure.renderingOverhead\":\"Overhead di rendering\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che inseriscono traduzioni tramite un singolo provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"about.whatWeMeasure.hydrationCost\":\"Costo di idratazione\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Efficacia del caricamento lento\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Velocità di cambio lingua\",\"about.whatWeMeasure.howFastTheAppCan\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il nuovo rendering dei componenti e l'aggiornamento del DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"Cosa misuriamo\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Prezzi semplici e trasparenti\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Scegli il piano più adatto al tuo team. Nessun costo nascosto.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Domande frequenti\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Tutto quello che c'è da sapere su i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"Cos'è i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"Come vengono condotti i benchmark ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Posso inviare i miei benchmark ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Sì! I contributi ai benchmark della comunità sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"Ogni quanto vengono aggiornati i benchmark ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente con le ultime versioni stabili di ogni libreria. Le versioni principali attivano un ciclo di benchmarking immediato.\",\"faq.faqList.isTheDataReliable\":\"I dati sono affidabili ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.\",\"faq.faqList.doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire consigli su misura in base al tuo caso d’uso specifico, alle dimensioni e ai vincoli.\",\"faq.faqList.howCanIContribute\":\"Come posso contribuire ?\",\"faq.faqList.thereAreManyWaysTo\":\"Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli.\"},\"pt\":{\"settings.preferencesSection.preferences\":\"Preferências\",\"settings.preferencesSection.emailNotifications\":\"Notificações por e-mail\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Receber relatórios semanais de benchmarks\",\"settings.preferencesSection.darkMode\":\"Modo Escuro\",\"settings.preferencesSection.useDarkColorScheme\":\"Usar esquema de cores escuras\",\"settings.preferencesSection.defaultLanguage\":\"Idioma Padrão\",\"settings.settingsHeader.settings\":\"Configurações\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Gerencie as suas preferências e configuração da conta.\",\"settings.settingsFooter.cancel\":\"Cancelar\",\"settings.settingsFooter.saveChanges\":\"Guardar alterações\",\"settings.apiAccessSection.apiAccess\":\"Acesso à API\",\"settings.apiAccessSection.apiKey\":\"Chave da API\",\"settings.apiAccessSection.useThisKeyTo\":\"Utilize esta chave para aceder à API de benchmarking de forma programática.\",\"settings.apiAccessSection.copy\":\"Copiar\",\"settings.profileSection.profile\":\"Perfil\",\"settings.profileSection.displayName\":\"Nome de exibição\",\"settings.profileSection.email\":\"E-Mail\",\"shared.header.home\":\"Início\",\"shared.header.methodology\":\"Metodologia\",\"shared.header.mockPages\":\"Páginas de teste\",\"shared.header.products\":\"Produtos\",\"shared.header.pricing\":\"Preços\",\"shared.header.team\":\"Equipe\",\"shared.header.blog\":\"Blog\",\"shared.header.careers\":\"Carreiras\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Contato\",\"shared.header.settings\":\"Configurações\",\"shared.header.goToGithub\":\"Ir para GitHub\",\"shared.footer.resources\":\"Recursos\",\"shared.footer.contact\":\"Contato\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Metodologia\",\"shared.footer.contributing\":\"Contribuir\",\"shared.footer.builtWith\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.\",\"shared.mockBanner.text\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"shared.themeToggle.themeModeLightClick\":\"Modo de tema: claro. Clique para mudar para o modo escuro.\",\"shared.themeToggle.themeModeDarkClick\":\"Modo de tema: escuro. Clique para mudar para o modo automático (sistema).\",\"shared.themeToggle.themeAuto\":\"Tema: Auto\",\"shared.themeToggle.themeDark\":\"Tema: Escuro\",\"shared.themeToggle.themeLight\":\"Tema: Claro\",\"careers.openPositions.openPositions\":\"Vagas abertas\",\"careers.openPositions.seniorPerformanceEngineer\":\"Engenheiro de Performance Sênior\",\"careers.openPositions.fullTime\":\"Tempo integral\",\"careers.openPositions.remote\":\"Remoto\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.\",\"careers.openPositions.technicalWriter\":\"Redator Técnico\",\"careers.openPositions.partTime\":\"Meio período\",\"careers.openPositions.createAndMaintainDocumentation\":\"Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.\",\"careers.openPositions.frontendDeveloper\":\"Desenvolvedor Frontend\",\"careers.openPositions.buildAndMaintainThe\":\"Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.\",\"careers.openPositions.devOpsEngineer\":\"Engenheiro DevOps\",\"careers.openPositions.designAndMaintainThe\":\"Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.\",\"careers.openPositions.applyNow\":\"Candidatar-se agora\",\"careers.careersHeader.careers\":\"Carreiras\",\"careers.careersHeader.joinOurMissionToMake\":\"Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares.\",\"careers.careersBenefits.whyJoinUs\":\"Por que se juntar a nós?\",\"careers.careersBenefits.remoteFirst\":\"Remoto primeiro\",\"careers.careersBenefits.workFromAnywhereFully\":\"Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.\",\"careers.careersBenefits.openSource\":\"Open Source\",\"careers.careersBenefits.allOurWorkIs\":\"Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.\",\"careers.careersBenefits.impactful\":\"Impactante\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos.\",\"route.route.oopsPageNotFound\":\"Ops! Página não encontrada\",\"route.route.returnToHome\":\"Voltar para o Início\",\"route.route.couldNotMeasureHydrationDuration\":\"Não foi possível medir a duração da hidratação:\",\"pricing.pricingTiers.freeTier\":\"Nível Gratuito\",\"pricing.pricingTiers.free\":\"Grátis\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"Dashboard público de benchmark\",\"pricing.pricingTiers.basicLibraryComparisons\":\"Comparações básicas de bibliotecas\",\"pricing.pricingTiers.communityForumAccess\":\"Acesso ao fórum da comunidade\",\"pricing.pricingTiers.monthlyResultDigest\":\"Resumo mensal dos resultados\",\"pricing.pricingTiers.getStarted\":\"Começar\",\"pricing.pricingTiers.proTier\":\"Nível Pro\",\"pricing.pricingTiers.perMonth\":\"/mês\",\"pricing.pricingTiers.allFreeFeatures\":\"Todas as funcionalidades gratuitas\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"Configurações de benchmark personalizadas\",\"pricing.pricingTiers.privateResultsDashboard\":\"Dashboard de resultados privado\",\"pricing.pricingTiers.apiAccess1000Requests\":\"Acesso à API (1.000 requisições/dia)\",\"pricing.pricingTiers.slackIntegration\":\"Integração com Slack\",\"pricing.pricingTiers.subscribeToPro\":\"Assinar Pro\",\"pricing.pricingTiers.enterpriseTier\":\"Nível Enterprise\",\"pricing.pricingTiers.custom\":\"Personalizado\",\"pricing.pricingTiers.allProFeatures\":\"Todas as funcionalidades Pro\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"Infraestrutura de benchmark dedicada\",\"pricing.pricingTiers.customLibraryIntegrations\":\"Integrações de bibliotecas personalizadas\",\"pricing.pricingTiers.slaGuarantees\":\"Garantias de SLA\",\"pricing.pricingTiers.prioritySupport\":\"Suporte prioritário\",\"pricing.pricingTiers.contactSales\":\"Contatar Vendas\",\"products.productsGrid.benchmarkDashboard\":\"Dashboard de Benchmark\",\"products.productsGrid.interactiveChartsAndTables\":\"Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.\",\"products.productsGrid.bundleAnalyzer\":\"Analisador de Bundle\",\"products.productsGrid.uploadYourBuildOutput\":\"Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.\",\"products.productsGrid.migrationAssistant\":\"Assistente de Migração\",\"products.productsGrid.automatedCodemodsAndGuides\":\"Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.\",\"products.productsGrid.performanceMonitor\":\"Monitor de Performance\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.\",\"products.productsGrid.learnMore\":\"Saiba Mais\",\"products.productsHeader.products\":\"Produtos\",\"products.productsHeader.toolsAndServicesTo\":\"Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização.\",\"contact.contactForm.name\":\"Nome\",\"contact.contactForm.email\":\"E-mail\",\"contact.contactForm.subject\":\"Assunto\",\"contact.contactForm.message\":\"Mensagem\",\"contact.contactForm.sendMessage\":\"Enviar Mensagem\",\"contact.contactForm.wellGetBackTo\":\"Retornaremos em até 48 horas.\",\"contact.contactHeader.contactUs\":\"Contate-nos\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você.\",\"home.understandingImpact.understandingTheImpact\":\"Entendendo o impacto\",\"home.understandingImpact.whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"home.understandingImpact.theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"home.understandingImpact.waterfallRequests\":\"Pedidos em cascata:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Invalidação da cache:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"home.understandingImpact.thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Por que essas métricas são importantes\",\"home.whyItMatters.bundleSize\":\"Tamanho do Bundle\",\"home.whyItMatters.theBundleIsTheData\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.\",\"home.whyItMatters.renderingHydration\":\"Renderização e Hidratação\",\"home.whyItMatters.connectingALargeJson\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Carregamento Dinâmico\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\",\"home.resultsTable.sampleResults\":\"Resultados de amostra\",\"home.resultsTable.bundleSize\":\"Tamanho do bundle\",\"home.resultsTable.lookupTime\":\"Tempo de consulta\",\"home.resultsTable.lazyLoading\":\"Carregamento lento\",\"home.hero.aTestApplicationDesignedTo\":\"Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.\",\"home.hero.viewResults\":\"Ver Resultados\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"Engenheiro de Performance\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"Advogado de Desenvolvedores\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"Analista de Dados\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"Gerente de Comunidade\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\",\"team.teamHeader.ourTeam\":\"Nossa Equipe\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\",\"blog.blogList.i18nBenchmark2026Results\":\"Resultados do i18n Benchmark 2026\",\"blog.blogList.march152026\":\"15 de março de 2026\",\"blog.blogList.weTested12DifferentInternationalization\":\"Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos.\",\"blog.blogList.howToReduceYourI18n\":\"Como reduzir seu bundle i18n em 60%\",\"blog.blogList.march82026\":\"8 de março de 2026\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"blog.blogList.theStateOfInternationalizationIn\":\"O estado da internacionalização em 2026\",\"blog.blogList.february282026\":\"28 de fevereiro de 2026\",\"blog.blogList.anOverviewOfTheCurrent\":\"Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Migrando do react-i18next para o Lingui\",\"blog.blogList.february152026\":\"15 de fevereiro de 2026\",\"blog.blogList.aStepByStepGuide\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components e i18n: o que muda?\",\"blog.blogList.february12026\":\"1 de fevereiro de 2026\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Metodologia de Benchmark: como testamos\",\"blog.blogList.january202026\":\"20 de janeiro de 2026\",\"blog.blogList.aTransparentLookAtOur\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"blog.blogList.readMore\":\"Leia mais →\",\"blog.blogHeader.blog\":\"Blog\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n.\",\"about.aboutHeader.aboutThisBenchmark\":\"Sobre este Benchmark\",\"about.aboutHeader.thisIsAnOpenSource\":\"Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas.\",\"about.aboutGrid.whyThisExists\":\"Por que isso existe\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Escolher uma biblioteca de i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas muda o custo? Este benchmark responde a essas perguntas com dados reais.\",\"about.aboutGrid.methodology\":\"Metodologia\",\"about.aboutGrid.theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar os tempos de renderização durante as trocas de locale. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Impacto no tamanho do bundle\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"about.whatWeMeasure.renderingOverhead\":\"Sobrecarga de renderização\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de un único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\",\"about.whatWeMeasure.hydrationCost\":\"Custo de hidratação\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Durante o SSR, os datos de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Eficácia do carregamento lento\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascata, FOUC, complexidade de cache).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Velocidade de troca de idioma\",\"about.whatWeMeasure.howFastTheAppCan\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"O que medimos\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Preços Simples e Transparentes\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Perguntas Frequentes\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Tudo o que você precisa saber sobre o i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"O que é o i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são cập nhật ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de novos benchmarks.\",\"faq.faqList.isTheDataReliable\":\"Os dados são confiáveis ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"faq.faqList.doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.\",\"faq.faqList.howCanIContribute\":\"Como posso contribuir ?\",\"faq.faqList.thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentazione, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes.\"},\"zh\":{\"settings.preferencesSection.preferences\":\"偏好设置\",\"settings.preferencesSection.emailNotifications\":\"邮件通知\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"接收每周基准测试报告\",\"settings.preferencesSection.darkMode\":\"深色模式\",\"settings.preferencesSection.useDarkColorScheme\":\"使用深色配色方案\",\"settings.preferencesSection.defaultLanguage\":\"默认语言\",\"settings.settingsHeader.settings\":\"设置\",\"settings.settingsHeader.manageYourAccountPreferences\":\"管理您的账户偏好和配置。\",\"settings.settingsFooter.cancel\":\"取消\",\"settings.settingsFooter.saveChanges\":\"保存更改\",\"settings.apiAccessSection.apiAccess\":\"API 访问\",\"settings.apiAccessSection.apiKey\":\"API 密钥\",\"settings.apiAccessSection.useThisKeyTo\":\"使用此密钥以编程方式访问基准测试 API。\",\"settings.apiAccessSection.copy\":\"复制\",\"settings.profileSection.profile\":\"个人资料\",\"settings.profileSection.displayName\":\"显示名称\",\"settings.profileSection.email\":\"电子邮件\",\"shared.header.home\":\"首页\",\"shared.header.methodology\":\"方法学\",\"shared.header.mockPages\":\"模拟页面\",\"shared.header.products\":\"产品\",\"shared.header.pricing\":\"价格\",\"shared.header.team\":\"团队\",\"shared.header.blog\":\"博客\",\"shared.header.careers\":\"职业\",\"shared.header.faq\":\"常见问题\",\"shared.header.contact\":\"联系我们\",\"shared.header.settings\":\"设置\",\"shared.header.goToGithub\":\"前往 GitHub\",\"shared.footer.resources\":\"资源\",\"shared.footer.contact\":\"联系\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"方法学\",\"shared.footer.contributing\":\"贡献\",\"shared.footer.builtWith\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。\",\"shared.footer.anOpenSourceTestApplication\":\"一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。\",\"shared.mockBanner.text\":\"⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。\",\"shared.themeToggle.themeModeAutoSystemClick\":\"主题模式：自动（系统）。点击切换到浅色模式。\",\"shared.themeToggle.themeModeLightClick\":\"主题模式：浅色。点击切换到深色模式。\",\"shared.themeToggle.themeModeDarkClick\":\"主题模式：深色。点击切换到自动（系统）模式。\",\"shared.themeToggle.themeAuto\":\"主题：自动\",\"shared.themeToggle.themeDark\":\"主题：深色\",\"shared.themeToggle.themeLight\":\"主题：浅色\",\"careers.openPositions.openPositions\":\"开放职位\",\"careers.openPositions.seniorPerformanceEngineer\":\"高级性能工程师\",\"careers.openPositions.fullTime\":\"全职\",\"careers.openPositions.remote\":\"远程\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。\",\"careers.openPositions.technicalWriter\":\"技术文档工程师\",\"careers.openPositions.partTime\":\"兼职\",\"careers.openPositions.createAndMaintainDocumentation\":\"创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。\",\"careers.openPositions.frontendDeveloper\":\"前端开发人员\",\"careers.openPositions.buildAndMaintainThe\":\"构建并维护基准仪表板、比较工具和交互式可视化效果。\",\"careers.openPositions.devOpsEngineer\":\"运维工程师\",\"careers.openPositions.designAndMaintainThe\":\"设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。\",\"careers.openPositions.applyNow\":\"立即申请\",\"careers.careersHeader.careers\":\"职业\",\"careers.careersHeader.joinOurMissionToMake\":\"加入我们的使命，让网络对世界各地的每一个人都更快、更方便。\",\"careers.careersBenefits.whyJoinUs\":\"为什么加入我们？\",\"careers.careersBenefits.remoteFirst\":\"远程优先\",\"careers.careersBenefits.workFromAnywhereFully\":\"在任何地方工作。完全分布在 6 个时区的团队。\",\"careers.careersBenefits.openSource\":\"开源\",\"careers.careersBenefits.allOurWorkIs\":\"我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。\",\"careers.careersBenefits.impactful\":\"有影响力的\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"你的工作直接帮助开发人员构建更好、更快的国际化应用程序。\",\"route.route.oopsPageNotFound\":\"糟糕！找不到页面\",\"route.route.returnToHome\":\"返回首页\",\"route.route.couldNotMeasureHydrationDuration\":\"无法测量注水时长：\",\"pricing.pricingTiers.freeTier\":\"免费版\",\"pricing.pricingTiers.free\":\"免费\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"公共基准测试仪表板\",\"pricing.pricingTiers.basicLibraryComparisons\":\"基本库比较\",\"pricing.pricingTiers.communityForumAccess\":\"社区论坛访问权限\",\"pricing.pricingTiers.monthlyResultDigest\":\"每月结果摘要\",\"pricing.pricingTiers.getStarted\":\"开始使用\",\"pricing.pricingTiers.proTier\":\"专业版\",\"pricing.pricingTiers.perMonth\":\"/月\",\"pricing.pricingTiers.allFreeFeatures\":\"包含所有免费版功能\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"自定义基准测试配置\",\"pricing.pricingTiers.privateResultsDashboard\":\"私人结果仪表板\",\"pricing.pricingTiers.apiAccess1000Requests\":\"API 访问（1,000 次请求/天）\",\"pricing.pricingTiers.slackIntegration\":\"Slack 集成\",\"pricing.pricingTiers.subscribeToPro\":\"订阅专业版\",\"pricing.pricingTiers.enterpriseTier\":\"企业版\",\"pricing.pricingTiers.custom\":\"定制\",\"pricing.pricingTiers.allProFeatures\":\"包含所有专业版功能\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"专用基准测试基础设施\",\"pricing.pricingTiers.customLibraryIntegrations\":\"自定义库集成\",\"pricing.pricingTiers.slaGuarantees\":\"SLA 保证\",\"pricing.pricingTiers.prioritySupport\":\"优先支持\",\"pricing.pricingTiers.contactSales\":\"联系销售人员\",\"products.productsGrid.benchmarkDashboard\":\"基准测试仪表板\",\"products.productsGrid.interactiveChartsAndTables\":\"交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。\",\"products.productsGrid.bundleAnalyzer\":\"包分析器\",\"products.productsGrid.uploadYourBuildOutput\":\"上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。\",\"products.productsGrid.migrationAssistant\":\"迁移助手\",\"products.productsGrid.automatedCodemodsAndGuides\":\"自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。\",\"products.productsGrid.performanceMonitor\":\"性能监控器\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。\",\"products.productsGrid.learnMore\":\"了解更多\",\"products.productsHeader.products\":\"产品\",\"products.productsHeader.toolsAndServicesTo\":\"帮助您优化国际化战略的工具和服务。\",\"contact.contactForm.name\":\"姓名\",\"contact.contactForm.email\":\"电子邮件\",\"contact.contactForm.subject\":\"主题\",\"contact.contactForm.message\":\"留言\",\"contact.contactForm.sendMessage\":\"发送消息\",\"contact.contactForm.wellGetBackTo\":\"我们将在 48 小时内回复您。\",\"contact.contactHeader.contactUs\":\"联系我们\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"有疑问或想做出贡献？我们很期待听到你的声音。\",\"home.understandingImpact.understandingTheImpact\":\"理解影响\",\"home.understandingImpact.whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：\",\"home.understandingImpact.theJsonMustBeParsed\":\"JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。\",\"home.understandingImpact.duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"动态加载的权衡\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"home.understandingImpact.waterfallRequests\":\"瀑布请求：\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"未翻译内容闪烁 (FOUC)：\",\"home.understandingImpact.cacheInvalidation\":\"缓存失效：\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"此基准测试测量什么\",\"home.understandingImpact.thisTestAppProvidesA\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\",\"home.whyItMatters.whyTheseMetricsMatter\":\"为什么这些指标很重要\",\"home.whyItMatters.bundleSize\":\"包大小\",\"home.whyItMatters.theBundleIsTheData\":\"Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。\",\"home.whyItMatters.renderingHydration\":\"渲染与注水\",\"home.whyItMatters.connectingALargeJson\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"home.whyItMatters.dynamicLoading\":\"动态加载\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\",\"home.resultsTable.sampleResults\":\"样本结果\",\"home.resultsTable.bundleSize\":\"包大小\",\"home.resultsTable.lookupTime\":\"查询时间\",\"home.resultsTable.lazyLoading\":\"延迟加载\",\"home.hero.aTestApplicationDesignedTo\":\"一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。\",\"home.hero.viewResults\":\"查看结果\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"创始人兼首席工程师\",\"team.teamGrid.formerGoogleEngineerWith10\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"性能工程师\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"开发者倡导者\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"全栈开发人员\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"数据分析师\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"社区经理\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\",\"team.teamHeader.ourTeam\":\"我们的团队\",\"team.teamHeader.meetThePeopleBehindI18n\":\"认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。\",\"blog.blogList.i18nBenchmark2026Results\":\"i18n 基准测试 2026 结果\",\"blog.blogList.march152026\":\"2026年3月15日\",\"blog.blogList.weTested12DifferentInternationalization\":\"我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。\",\"blog.blogList.howToReduceYourI18n\":\"如何将 i18n 包大小减少 60%\",\"blog.blogList.march82026\":\"2026年3月8日\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"blog.blogList.theStateOfInternationalizationIn\":\"React 国际化的现状\",\"blog.blogList.february282026\":\"2026年2月28日\",\"blog.blogList.anOverviewOfTheCurrent\":\"React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。\",\"blog.blogList.migratingFromReactI18nextTo\":\"从 react-i18next 迁移到 Lingui\",\"blog.blogList.february152026\":\"2026年2月15日\",\"blog.blogList.aStepByStepGuide\":\"从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。\",\"blog.blogList.serverComponentsAndI18nWhat\":\"服务器组件和 i18n：有什么变化？\",\"blog.blogList.february12026\":\"2026年2月1日\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"基准测试方法学：我们如何测试\",\"blog.blogList.january202026\":\"2026年1月20日\",\"blog.blogList.aTransparentLookAtOur\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。\",\"blog.blogList.readMore\":\"阅读更多 →\",\"blog.blogHeader.blog\":\"博客\",\"blog.blogHeader.insightsDeepDivesAnd\":\"来自 i18n 基准测试社区的见解、深入探讨和更新。\",\"about.aboutHeader.aboutThisBenchmark\":\"关于此基准测试\",\"about.aboutHeader.thisIsAnOpenSource\":\"这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。\",\"about.aboutGrid.whyThisExists\":\"为什么存在这个项目\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都侧重于 API 的易用性，但很少有人衡量性能成本：该库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"about.aboutGrid.methodology\":\"方法学\",\"about.aboutGrid.theSame10PageApp\":\"每个库都构建一次相同的 10 页应用程序。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用 React Profiler 捕获本地切换期间的渲染时间。所有测试都在具有相同硬件的 CI 上运行，以确保结果可重现。\",\"about.whatWeMeasure.bundleSizeImpact\":\"包大小影响\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。\",\"about.whatWeMeasure.renderingOverhead\":\"渲染开销\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\",\"about.whatWeMeasure.hydrationCost\":\"注水成本\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"延迟加载有效性\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\",\"about.whatWeMeasure.localeSwitchSpeed\":\"本地语言切换速度\",\"about.whatWeMeasure.howFastTheAppCan\":\"应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。\",\"about.whatWeMeasure.whatWeMeasure\":\"我们测量什么\",\"pricing.pricingHeader.simpleTransparentPricing\":\"简单透明的定价\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"选择适合您团队的计划。无隐藏费用。\",\"faq.faq-header1.frequentlyAskedQuestions\":\"常见问题\",\"faq.faq-header1.everythingYouNeedToKnow\":\"您需要了解的有关 i18n Benchmark 的一切。\",\"faq.faqList.whatIsI18nBenchmark\":\"什么是 i18n Benchmark？\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"如何进行基准测试？\",\"faq.faqList.weRunStandardizedTestsIn\":\"我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都重复多次，以确保统计学意义。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"目前支持哪些库？\",\"faq.faqList.weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"faq.faqList.canISubmitMyOwn\":\"我可以提交自己的基准测试吗？\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"基准测试多久更新一次？\",\"faq.faqList.weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会触发立即重新进行基准测试。\",\"faq.faqList.isTheDataReliable\":\"数据可靠吗？\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\",\"faq.faqList.doYouOfferConsultingServices\":\"你们提供咨询服务吗？\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"是的，我们的企业版计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。\",\"faq.faqList.howCanIContribute\":\"我该如何贡献？\",\"faq.faqList.thereAreManyWaysTo\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"},\"ja\":{\"settings.preferencesSection.preferences\":\"設定\",\"settings.preferencesSection.emailNotifications\":\"メール通知\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"ベンチマーク週報を受け取る\",\"settings.preferencesSection.darkMode\":\"ダークモード\",\"settings.preferencesSection.useDarkColorScheme\":\"ダークカラー体系を使用する\",\"settings.preferencesSection.defaultLanguage\":\"デフォルト言語\",\"settings.settingsHeader.settings\":\"設定\",\"settings.settingsHeader.manageYourAccountPreferences\":\"アカウントの設定と構成を管理します。\",\"settings.settingsFooter.cancel\":\"キャンセル\",\"settings.settingsFooter.saveChanges\":\"変更を保存\",\"settings.apiAccessSection.apiAccess\":\"APIアクセス\",\"settings.apiAccessSection.apiKey\":\"APIキー\",\"settings.apiAccessSection.useThisKeyTo\":\"このキーを使用して、ベンチマークAPIにプログラムでアクセスします。\",\"settings.apiAccessSection.copy\":\"コピー\",\"settings.profileSection.profile\":\"プロフィール\",\"settings.profileSection.displayName\":\"表示名\",\"settings.profileSection.email\":\"メールアドレス\",\"shared.header.home\":\"ホーム\",\"shared.header.methodology\":\"メソッド\",\"shared.header.mockPages\":\"テストページ\",\"shared.header.products\":\"製品\",\"shared.header.pricing\":\"料金\",\"shared.header.team\":\"チーム\",\"shared.header.blog\":\"ブログ\",\"shared.header.careers\":\"採用\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"お問い合わせ\",\"shared.header.settings\":\"設定\",\"shared.header.goToGithub\":\"GitHubへ\",\"shared.footer.resources\":\"リソース\",\"shared.footer.contact\":\"お問い合わせ\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"メソッド\",\"shared.footer.contributing\":\"貢献する\",\"shared.footer.builtWith\":\"i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。\",\"shared.footer.anOpenSourceTestApplication\":\"国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。\",\"shared.mockBanner.text\":\"⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。\",\"shared.themeToggle.themeModeAutoSystemClick\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替え。\",\"shared.themeToggle.themeModeLightClick\":\"テーマモード：ライト。クリックしてダークモードに切り替え。\",\"shared.themeToggle.themeModeDarkClick\":\"テーマモード：ダーク。クリックして自動（システム）モードに切り替え。\",\"shared.themeToggle.themeAuto\":\"テーマ：自動\",\"shared.themeToggle.themeDark\":\"テーマ：ダーク\",\"shared.themeToggle.themeLight\":\"テーマ：ライト\",\"careers.openPositions.openPositions\":\"募集中の職種\",\"careers.openPositions.seniorPerformanceEngineer\":\"シニアパフォーマンスエンジニア\",\"careers.openPositions.fullTime\":\"正社員\",\"careers.openPositions.remote\":\"リモート\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。\",\"careers.openPositions.technicalWriter\":\"テクニカルライター\",\"careers.openPositions.partTime\":\"パートタイム\",\"careers.openPositions.createAndMaintainDocumentation\":\"i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。\",\"careers.openPositions.frontendDeveloper\":\"フロントエンドデベロッパー\",\"careers.openPositions.buildAndMaintainThe\":\"ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。\",\"careers.openPositions.devOpsEngineer\":\"DevOpsエンジニア\",\"careers.openPositions.designAndMaintainThe\":\"ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。\",\"careers.openPositions.applyNow\":\"今すぐ応募\",\"careers.careersHeader.careers\":\"採用\",\"careers.careersHeader.joinOurMissionToMake\":\"世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。\",\"careers.careersBenefits.whyJoinUs\":\"なぜ参加するのか？\",\"careers.careersBenefits.remoteFirst\":\"リモートファースト\",\"careers.careersBenefits.workFromAnywhereFully\":\"どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。\",\"careers.careersBenefits.openSource\":\"オープンソース\",\"careers.careersBenefits.allOurWorkIs\":\"私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。\",\"careers.careersBenefits.impactful\":\"インパクトがある\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。\",\"route.route.oopsPageNotFound\":\"おっと！ページが見つかりません\",\"route.route.returnToHome\":\"ホームに戻る\",\"route.route.couldNotMeasureHydrationDuration\":\"ハイドレーション時間を測定できませんでした：\",\"pricing.pricingTiers.freeTier\":\"無料プラン\",\"pricing.pricingTiers.free\":\"無料\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"公開ベンチマークダッシュボード\",\"pricing.pricingTiers.basicLibraryComparisons\":\"基本的なライブラリ比較\",\"pricing.pricingTiers.communityForumAccess\":\"コミュニティフォーラムへのアクセス\",\"pricing.pricingTiers.monthlyResultDigest\":\"月次結果ダイジェスト\",\"pricing.pricingTiers.getStarted\":\"始める\",\"pricing.pricingTiers.proTier\":\"Proプラン\",\"pricing.pricingTiers.perMonth\":\"/月\",\"pricing.pricingTiers.allFreeFeatures\":\"無料プランの全機能\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"カスタムベンチマーク設定\",\"pricing.pricingTiers.privateResultsDashboard\":\"プライベート結果ダッシュボード\",\"pricing.pricingTiers.apiAccess1000Requests\":\"APIアクセス（1日1,000リクエスト）\",\"pricing.pricingTiers.slackIntegration\":\"Slack統合\",\"pricing.pricingTiers.subscribeToPro\":\"Proに登録\",\"pricing.pricingTiers.enterpriseTier\":\"Enterpriseプラン\",\"pricing.pricingTiers.custom\":\"カスタム\",\"pricing.pricingTiers.allProFeatures\":\"Proプランの全機能\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"専用ベンチマークインフラ\",\"pricing.pricingTiers.customLibraryIntegrations\":\"カスタムライブラリ統合\",\"pricing.pricingTiers.slaGuarantees\":\"SLA保証\",\"pricing.pricingTiers.prioritySupport\":\"優先サポート\",\"pricing.pricingTiers.contactSales\":\"営業に問い合わせる\",\"products.productsGrid.benchmarkDashboard\":\"ベンチマークダッシュボード\",\"products.productsGrid.interactiveChartsAndTables\":\"バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。\",\"products.productsGrid.bundleAnalyzer\":\"バンドルアナライザー\",\"products.productsGrid.uploadYourBuildOutput\":\"ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。\",\"products.productsGrid.migrationAssistant\":\"移行アシスタント\",\"products.productsGrid.automatedCodemodsAndGuides\":\"最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。\",\"products.productsGrid.performanceMonitor\":\"パフォーマンスモニター\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。\",\"products.productsGrid.learnMore\":\"詳細はこちら\",\"products.productsHeader.products\":\"製品\",\"products.productsHeader.toolsAndServicesTo\":\"国際化戦略の最適化に役立つツールとサービス。\",\"contact.contactForm.name\":\"お名前\",\"contact.contactForm.email\":\"メールアドレス\",\"contact.contactForm.subject\":\"件名\",\"contact.contactForm.message\":\"メッセージ\",\"contact.contactForm.sendMessage\":\"メッセージを送信\",\"contact.contactForm.wellGetBackTo\":\"48時間以内に返信いたします。\",\"contact.contactHeader.contactUs\":\"お問い合わせ\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"質問がある、または貢献したいですか？ぜひご連絡ください。\",\"home.understandingImpact.understandingTheImpact\":\"影響を理解する\",\"home.understandingImpact.whyASingleLargeJson\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：\",\"home.understandingImpact.theJsonMustBeParsed\":\"JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"home.understandingImpact.duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"動的読み込みのトレードオフ\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\",\"home.understandingImpact.waterfallRequests\":\"ウォーターフォールリクエスト：\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"未翻訳コンテンツのフラッシュ（FOUC）：\",\"home.understandingImpact.cacheInvalidation\":\"キャッシュの無効化：\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"home.understandingImpact.thisTestAppProvidesA\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"home.whyItMatters.whyTheseMetricsMatter\":\"なぜこれらの指標が重要なのか\",\"home.whyItMatters.bundleSize\":\"バンドルサイズ\",\"home.whyItMatters.theBundleIsTheData\":\"バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。\",\"home.whyItMatters.renderingHydration\":\"レンダリングとハイドレーション\",\"home.whyItMatters.connectingALargeJson\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。\",\"home.whyItMatters.dynamicLoading\":\"動的読み込み\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。\",\"home.resultsTable.sampleResults\":\"サンプル結果\",\"home.resultsTable.bundleSize\":\"バンドルサイズ\",\"home.resultsTable.lookupTime\":\"検索時間\",\"home.resultsTable.lazyLoading\":\"遅延読み込み\",\"home.hero.aTestApplicationDesignedTo\":\"国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。\",\"home.hero.viewResults\":\"結果を表示\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"創設者兼リードエンジニア\",\"team.teamGrid.formerGoogleEngineerWith10\":\"以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"パフォーマンスエンジニア\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"デベロッパーアドボケイト\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"フルスタックデベロッパー\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"データアナリスト\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"コミュニティマネージャー\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。\",\"team.teamHeader.ourTeam\":\"私たちのチーム\",\"team.teamHeader.meetThePeopleBehindI18n\":\"i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。\",\"blog.blogList.i18nBenchmark2026Results\":\"i18nベンチマーク2026の結果\",\"blog.blogList.march152026\":\"2026年3月15日\",\"blog.blogList.weTested12DifferentInternationalization\":\"10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。\",\"blog.blogList.howToReduceYourI18n\":\"i18nバンドルを60%削減する方法\",\"blog.blogList.march82026\":\"2026年3月8日\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。\",\"blog.blogList.theStateOfInternationalizationIn\":\"2026年における国際化の現状\",\"blog.blogList.february282026\":\"2026年2月28日\",\"blog.blogList.anOverviewOfTheCurrent\":\"メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。\",\"blog.blogList.migratingFromReactI18nextTo\":\"react-i18nextからLinguiへの移行\",\"blog.blogList.february152026\":\"2026年2月15日\",\"blog.blogList.aStepByStepGuide\":\"5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Componentsとi18n：何が変わるのか？\",\"blog.blogList.february12026\":\"2026年2月1日\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"ベンチマーク手法：どのようにテストするか\",\"blog.blogList.january202026\":\"2026年1月20日\",\"blog.blogList.aTransparentLookAtOur\":\"テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。\",\"blog.blogList.readMore\":\"続きを読む →\",\"blog.blogHeader.blog\":\"ブログ\",\"blog.blogHeader.insightsDeepDivesAnd\":\"i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。\",\"about.aboutHeader.aboutThisBenchmark\":\"このベンチマークについて\",\"about.aboutHeader.thisIsAnOpenSource\":\"これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまな i18n ライブラリを同一条件下で統合および測定できる、現実的なマルチページ React アプリを提供することです。\",\"about.aboutGrid.whyThisExists\":\"なぜこれが存在するのか\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API の使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでそれらの質問に答えます。\",\"about.aboutGrid.methodology\":\"方法論\",\"about.aboutGrid.theSame10PageApp\":\"同じ 10 ページのアプリがライブラリごとに 1 回構築されます。プロダクションバンドルを測定し（rollup-plugin-visualizer を使用）、読み込みメトリクスの Lighthouse 監査を実行し、React Profiler を使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を保証するために、すべてのテストは一貫したハードウェア上の CI で実行されます。\",\"about.whatWeMeasure.bundleSizeImpact\":\"バンドルサイズへの影響\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"i18n ライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加の JavaScript バイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\",\"about.whatWeMeasure.renderingOverhead\":\"レンダリングのオーバーヘッド\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"ライブラリが React のレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を挿入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。\",\"about.whatWeMeasure.hydrationCost\":\"ハイドレーションのコスト\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"SSR 中、翻訳データは HTML にシリアル化されます。大規模な辞書は HTML ペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"遅延読み込みの有効性\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期読み込みを削減するかどうか、そしてどのようなトレードオフを導入するか（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）。\",\"about.whatWeMeasure.localeSwitchSpeed\":\"ロケール切り替え速度\",\"about.whatWeMeasure.howFastTheAppCan\":\"ランタイム時にアプリが言語をどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOM の更新が含まれます。\",\"about.whatWeMeasure.whatWeMeasure\":\"測定対象\",\"pricing.pricingHeader.simpleTransparentPricing\":\"シンプルで透明性の高い料金プラン\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"チームに合ったプランをお選びください。隠れた費用はありません。\",\"faq.faq-header1.frequentlyAskedQuestions\":\"よくある質問\",\"faq.faq-header1.everythingYouNeedToKnow\":\"i18n Benchmark について知っておくべきことのすべて。\",\"faq.faqList.whatIsI18nBenchmark\":\"i18n Benchmark とは何ですか？\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"faq.faqList.weRunStandardizedTestsIn\":\"一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"現在サポートされているライブラリは何ですか？\",\"faq.faqList.weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgee をサポートしています。\",\"faq.faqList.canISubmitMyOwn\":\"独自のベンチマークを送信できますか？\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマークの送信を歓迎します。当社のリポジトリをフォークし、コントリビューションガイドに従ってベンチマークを追加し、プルリクエストを送信してください。当社のチームが、資格のある送信内容をレビューしてマージします。\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"faq.faqList.weReRunAllBenchmarks\":\"各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが実行されます。\",\"faq.faqList.isTheDataReliable\":\"データは信頼できますか？\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値の検出、信頼区間などの厳密な統計的手法に従います。すべての生データは、完全な透明性のために当社の分析とともに公開されます。\",\"faq.faqList.doYouOfferConsultingServices\":\"コンサルティングサービスを提供していますか？\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"はい、当社のエンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\",\"faq.faqList.howCanIContribute\":\"どのように貢献できますか？\",\"faq.faqList.thereAreManyWaysTo\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。\"},\"ko\":{\"settings.preferencesSection.preferences\":\"기본 설정\",\"settings.preferencesSection.emailNotifications\":\"이메일 알림\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"주간 벤치마크 보고서 받기\",\"settings.preferencesSection.darkMode\":\"다크 모드\",\"settings.preferencesSection.useDarkColorScheme\":\"어두운 색상 체계 사용\",\"settings.preferencesSection.defaultLanguage\":\"기본 언어\",\"settings.settingsHeader.settings\":\"설정\",\"settings.settingsHeader.manageYourAccountPreferences\":\"계정 기본 설정 및 구성을 관리합니다.\",\"settings.settingsFooter.cancel\":\"취소\",\"settings.settingsFooter.saveChanges\":\"변경 사항 저장\",\"settings.apiAccessSection.apiAccess\":\"API 액세스\",\"settings.apiAccessSection.apiKey\":\"API 키\",\"settings.apiAccessSection.useThisKeyTo\":\"이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.\",\"settings.apiAccessSection.copy\":\"복사\",\"settings.profileSection.profile\":\"프로필\",\"settings.profileSection.displayName\":\"표시 이름\",\"settings.profileSection.email\":\"이메일\",\"shared.header.home\":\"홈\",\"shared.header.methodology\":\"방법론\",\"shared.header.mockPages\":\"테스트 페이지\",\"shared.header.products\":\"제품\",\"shared.header.pricing\":\"가격\",\"shared.header.team\":\"팀\",\"shared.header.blog\":\"블로그\",\"shared.header.careers\":\"채용\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"문의하기\",\"shared.header.settings\":\"설정\",\"shared.header.goToGithub\":\"GitHub로 이동\",\"shared.footer.resources\":\"리소스\",\"shared.footer.contact\":\"문의\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"방법론\",\"shared.footer.contributing\":\"기여하기\",\"shared.footer.builtWith\":\"i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.\",\"shared.footer.anOpenSourceTestApplication\":\"국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"shared.mockBanner.text\":\"⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.\",\"shared.themeToggle.themeModeLightClick\":\"테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.\",\"shared.themeToggle.themeModeDarkClick\":\"테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.\",\"shared.themeToggle.themeAuto\":\"테마: 자동\",\"shared.themeToggle.themeDark\":\"테마: 다크\",\"shared.themeToggle.themeLight\":\"테마: 라이트\",\"careers.openPositions.openPositions\":\"채용 중인 직책\",\"careers.openPositions.seniorPerformanceEngineer\":\"시니어 성능 엔지니어\",\"careers.openPositions.fullTime\":\"정규직\",\"careers.openPositions.remote\":\"원격\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.\",\"careers.openPositions.technicalWriter\":\"테크니컬 라이터\",\"careers.openPositions.partTime\":\"파트타임\",\"careers.openPositions.createAndMaintainDocumentation\":\"i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.\",\"careers.openPositions.frontendDeveloper\":\"프론트엔드 개발자\",\"careers.openPositions.buildAndMaintainThe\":\"벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.\",\"careers.openPositions.devOpsEngineer\":\"DevOps 엔지니어\",\"careers.openPositions.designAndMaintainThe\":\"라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.\",\"careers.openPositions.applyNow\":\"지금 지원하기\",\"careers.careersHeader.careers\":\"채용\",\"careers.careersHeader.joinOurMissionToMake\":\"전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요.\",\"careers.careersBenefits.whyJoinUs\":\"왜 합류해야 하나요?\",\"careers.careersBenefits.remoteFirst\":\"리모트 퍼스트\",\"careers.careersBenefits.workFromAnywhereFully\":\"어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.\",\"careers.careersBenefits.openSource\":\"오픈 소스\",\"careers.careersBenefits.allOurWorkIs\":\"우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.\",\"careers.careersBenefits.impactful\":\"영향력 있는\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다.\",\"route.route.oopsPageNotFound\":\"앗! 페이지를 찾을 수 없습니다\",\"route.route.returnToHome\":\"홈으로 돌아가기\",\"route.route.couldNotMeasureHydrationDuration\":\"하이드레이션 시간을 측정할 수 없습니다:\",\"pricing.pricingTiers.freeTier\":\"무료 티어\",\"pricing.pricingTiers.free\":\"무료\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"공개 벤치마크 대시보드\",\"pricing.pricingTiers.basicLibraryComparisons\":\"기본 라이브러리 비교\",\"pricing.pricingTiers.communityForumAccess\":\"커뮤니티 포럼 액세스\",\"pricing.pricingTiers.monthlyResultDigest\":\"월간 결과 요약\",\"pricing.pricingTiers.getStarted\":\"시작하기\",\"pricing.pricingTiers.proTier\":\"프로 티어\",\"pricing.pricingTiers.perMonth\":\"/월\",\"pricing.pricingTiers.allFreeFeatures\":\"모든 무료 기능 포함\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"맞춤형 벤치마크 구성\",\"pricing.pricingTiers.privateResultsDashboard\":\"비공개 결과 대시보드\",\"pricing.pricingTiers.apiAccess1000Requests\":\"API 액세스(일일 1,000건)\",\"pricing.pricingTiers.slackIntegration\":\"Slack 연동\",\"pricing.pricingTiers.subscribeToPro\":\"프로 구독\",\"pricing.pricingTiers.enterpriseTier\":\"엔터프라이즈 티어\",\"pricing.pricingTiers.custom\":\"커스텀\",\"pricing.pricingTiers.allProFeatures\":\"모든 프로 기능 포함\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"전용 벤치마크 인프라\",\"pricing.pricingTiers.customLibraryIntegrations\":\"맞춤형 라이브러리 통합\",\"pricing.pricingTiers.slaGuarantees\":\"SLA 보장\",\"pricing.pricingTiers.prioritySupport\":\"우선 지원\",\"pricing.pricingTiers.contactSales\":\"영업팀 문의\",\"products.productsGrid.benchmarkDashboard\":\"벤치마크 대시보드\",\"products.productsGrid.interactiveChartsAndTables\":\"번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.\",\"products.productsGrid.bundleAnalyzer\":\"번들 분석기\",\"products.productsGrid.uploadYourBuildOutput\":\"빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.\",\"products.productsGrid.migrationAssistant\":\"마이그레이션 도우미\",\"products.productsGrid.automatedCodemodsAndGuides\":\"최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.\",\"products.productsGrid.performanceMonitor\":\"성능 모니터\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.\",\"products.productsGrid.learnMore\":\"더 알아보기\",\"products.productsHeader.products\":\"제품\",\"products.productsHeader.toolsAndServicesTo\":\"국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스.\",\"contact.contactForm.name\":\"이름\",\"contact.contactForm.email\":\"이메일\",\"contact.contactForm.subject\":\"제목\",\"contact.contactForm.message\":\"메시지\",\"contact.contactForm.sendMessage\":\"메시지 보내기\",\"contact.contactForm.wellGetBackTo\":\"48시간 이내에 답변해 드리겠습니다.\",\"contact.contactHeader.contactUs\":\"문의처\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다.\",\"home.understandingImpact.understandingTheImpact\":\"영향 이해하기\",\"home.understandingImpact.whyASingleLargeJson\":\"단일 대형 JSON이 성능을 저해하는 이유\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"home.understandingImpact.theJsonMustBeParsed\":\"JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"home.understandingImpact.waterfallRequests\":\"워터폴 요청:\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 플래시 (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"캐시 무효화:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"home.understandingImpact.thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"이 지표들이 중요한 이유\",\"home.whyItMatters.bundleSize\":\"번들 크기\",\"home.whyItMatters.theBundleIsTheData\":\"번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.\",\"home.whyItMatters.renderingHydration\":\"렌더링 및 하이드레이션\",\"home.whyItMatters.connectingALargeJson\":\"모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\",\"home.whyItMatters.dynamicLoading\":\"동적 로딩\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.\",\"home.resultsTable.sampleResults\":\"샘플 결과\",\"home.resultsTable.bundleSize\":\"번들 크기\",\"home.resultsTable.lookupTime\":\"조회 시간\",\"home.resultsTable.lazyLoading\":\"지연 로딩\",\"home.hero.aTestApplicationDesignedTo\":\"국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.\",\"home.hero.viewResults\":\"결과 보기\",\"team.teamGrid.sarahChen\":\"Sarah Chen\",\"team.teamGrid.founderLeadEngineer\":\"창립자 및 리드 엔지니어\",\"team.teamGrid.formerGoogleEngineerWith10\":\"전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.\",\"team.teamGrid.marcusWeber\":\"Marcus Weber\",\"team.teamGrid.performanceEngineer\":\"성능 엔지니어\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.\",\"team.teamGrid.aishaPatel\":\"Aisha Patel\",\"team.teamGrid.developerAdvocate\":\"개발자 에반젤리스트\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.\",\"team.teamGrid.tomasRodriguez\":\"Tomás Rodríguez\",\"team.teamGrid.fullStackDeveloper\":\"풀스택 개발자\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.\",\"team.teamGrid.yukiTanaka\":\"Yuki Tanaka\",\"team.teamGrid.dataAnalyst\":\"데이터 분석가\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.\",\"team.teamGrid.elenaKowalski\":\"Elena Kowalski\",\"team.teamGrid.communityManager\":\"커뮤니티 매니저\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。\",\"team.teamHeader.ourTeam\":\"우리 팀\",\"team.teamHeader.meetThePeopleBehindI18n\":\"i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.\",\"blog.blogList.i18nBenchmark2026Results\":\"i18n 벤치마크 2026 결과\",\"blog.blogList.march152026\":\"2026년 3월 15일\",\"blog.blogList.weTested12DifferentInternationalization\":\"우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다.\",\"blog.blogList.howToReduceYourI18n\":\"i18n 번들을 60% 줄이는 방법\",\"blog.blogList.march82026\":\"2026년 3월 8일\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.\",\"blog.blogList.theStateOfInternationalizationIn\":\"2026년 React 국제화의 현주소\",\"blog.blogList.february282026\":\"2026년 2월 28일\",\"blog.blogList.anOverviewOfTheCurrent\":\"메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.\",\"blog.blogList.migratingFromReactI18nextTo\":\"react-i18next에서 Lingui로 마이그레이션\",\"blog.blogList.february152026\":\"2026년 2월 15일\",\"blog.blogList.aStepByStepGuide\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"서버 컴포넌트와 i18n: 무엇이 변하는가?\",\"blog.blogList.february12026\":\"2026年 2월 1일\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"벤치마크 방법론: 테스트 방법\",\"blog.blogList.january202026\":\"2026년 1월 20일\",\"blog.blogList.aTransparentLookAtOur\":\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.\",\"blog.blogList.readMore\":\"더 읽어보기 →\",\"blog.blogHeader.blog\":\"블로그\",\"blog.blogHeader.insightsDeepDivesAnd\":\"i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트.\",\"about.aboutHeader.aboutThisBenchmark\":\"이 벤치마크에 대하여\",\"about.aboutHeader.thisIsAnOpenSource\":\"이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.\",\"about.aboutGrid.whyThisExists\":\"왜 이것이 존재하는가\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"i18n 라이브러리 선택은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 무게를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까 아니면 단지 비용을 전가합니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\",\"about.aboutGrid.methodology\":\"방법론\",\"about.aboutGrid.theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리당 한 번씩 구축됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\",\"about.whatWeMeasure.bundleSizeImpact\":\"번들 크기 영향\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"about.whatWeMeasure.renderingOverhead\":\"렌더링 오버헤드\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\",\"about.whatWeMeasure.hydrationCost\":\"하이드레이션 비용\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화식으로 변하는 순간인 하이드레이션 속도를 늦춥니다.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"지연 로딩 효과\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 도입하는지 여부입니다.\",\"about.whatWeMeasure.localeSwitchSpeed\":\"로케일 전환 속도\",\"about.whatWeMeasure.howFastTheAppCan\":\"런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 — 새로운 번역 가져오기, 구성 요소 다시 렌더링 및 DOM 업데이트를 포함합니다.\",\"about.whatWeMeasure.whatWeMeasure\":\"측정 대상\",\"pricing.pricingHeader.simpleTransparentPricing\":\"간단하고 투명한 가격 책정\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"팀에 적합한 요금제를 선택하십시오. 숨겨진 수수료가 없습니다.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"자주 묻는 질문\",\"faq.faq-header1.everythingYouNeedToKnow\":\"i18n Benchmark에 대해 알아야 할 모든 것.\",\"faq.faqList.whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"faq.faqList.weRunStandardizedTestsIn\":\"우리는 일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"faq.faqList.weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"faq.faqList.canISubmitMyOwn\":\"직접 벤치마크를 제출할 수 있나요?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 되는 제출물을 검토하고 병합할 것입니다.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"faq.faqList.weReRunAllBenchmarks\":\"우리는 매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 재실행합니다. 메이저 버전이 출시되면 즉시 재벤치마크 주기가 시작됩니다.\",\"faq.faqList.isTheDataReliable\":\"데이터가 신뢰할 수 있나요?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"우리는 웜업 실행, 이상값 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 게시됩니다.\",\"faq.faqList.doYouOfferConsultingServices\":\"컨설팅 서비스를 제공합나요?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"네, 엔터프라이즈 요금제에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"faq.faqList.howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"faq.faqList.thereAreManyWaysTo\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 참조하세요.\"},\"ru\":{\"settings.preferencesSection.preferences\":\"Настройки\",\"settings.preferencesSection.emailNotifications\":\"Email-уведомления\",\"settings.preferencesSection.receiveWeeklyBenchmarkReports\":\"Получать еженедельные отчеты о бенчмарках\",\"settings.preferencesSection.darkMode\":\"Темный режим\",\"settings.preferencesSection.useDarkColorScheme\":\"Использовать темную цветовою схему\",\"settings.preferencesSection.defaultLanguage\":\"Язык по умолчанию\",\"settings.settingsHeader.settings\":\"Настройки\",\"settings.settingsHeader.manageYourAccountPreferences\":\"Управляйте настройками своего аккаунта и конфигурацией.\",\"settings.settingsFooter.cancel\":\"Отмена\",\"settings.settingsFooter.saveChanges\":\"Сохранить изменения\",\"settings.apiAccessSection.apiAccess\":\"Доступ к API\",\"settings.apiAccessSection.apiKey\":\"Ключ API\",\"settings.apiAccessSection.useThisKeyTo\":\"Используйте этот ключ для программного доступа к API бенчмаркинга.\",\"settings.apiAccessSection.copy\":\"Копировать\",\"settings.profileSection.profile\":\"Профиль\",\"settings.profileSection.displayName\":\"Отображаемое имя\",\"settings.profileSection.email\":\"Email\",\"shared.header.home\":\"Главная\",\"shared.header.methodology\":\"Методология\",\"shared.header.mockPages\":\"Тестовые страницы\",\"shared.header.products\":\"Продукты\",\"shared.header.pricing\":\"Цены\",\"shared.header.team\":\"Команда\",\"shared.header.blog\":\"Блог\",\"shared.header.careers\":\"Карьера\",\"shared.header.faq\":\"FAQ\",\"shared.header.contact\":\"Контакт\",\"shared.header.settings\":\"Настройки\",\"shared.header.goToGithub\":\"Перейти на GitHub\",\"shared.footer.resources\":\"Ресурсы\",\"shared.footer.contact\":\"Контакт\",\"shared.footer.github\":\"GitHub\",\"shared.footer.methodology\":\"Методология\",\"shared.footer.contributing\":\"Вклад\",\"shared.footer.builtWith\":\"i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.\",\"shared.footer.anOpenSourceTestApplication\":\"Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.\",\"shared.mockBanner.text\":\"⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.\",\"shared.themeToggle.themeModeAutoSystemClick\":\"Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\",\"shared.themeToggle.themeModeLightClick\":\"Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.\",\"shared.themeToggle.themeModeDarkClick\":\"Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.\",\"shared.themeToggle.themeAuto\":\"Тема: Авто\",\"shared.themeToggle.themeDark\":\"Тема: Темная\",\"shared.themeToggle.themeLight\":\"Тема: Светлая\",\"careers.openPositions.openPositions\":\"Открытые вакансии\",\"careers.openPositions.seniorPerformanceEngineer\":\"Старший инженер по производительности\",\"careers.openPositions.fullTime\":\"Полный рабочий день\",\"careers.openPositions.remote\":\"Удаленно\",\"careers.openPositions.leadBenchmarkDesignAnd\":\"Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.\",\"careers.openPositions.technicalWriter\":\"Технический писатель\",\"careers.openPositions.partTime\":\"Неполный рабочий день\",\"careers.openPositions.createAndMaintainDocumentation\":\"Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.\",\"careers.openPositions.frontendDeveloper\":\"Frontend-разработчик\",\"careers.openPositions.buildAndMaintainThe\":\"Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.\",\"careers.openPositions.devOpsEngineer\":\"DevOps-инженер\",\"careers.openPositions.designAndMaintainThe\":\"Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.\",\"careers.openPositions.applyNow\":\"Подать заявку\",\"careers.careersHeader.careers\":\"Карьера\",\"careers.careersHeader.joinOurMissionToMake\":\"Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде.\",\"careers.careersBenefits.whyJoinUs\":\"Почему стоит присоединиться к нам?\",\"careers.careersBenefits.remoteFirst\":\"Сначала удаленка\",\"careers.careersBenefits.workFromAnywhereFully\":\"Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.\",\"careers.careersBenefits.openSource\":\"Открытый исходный код\",\"careers.careersBenefits.allOurWorkIs\":\"Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.\",\"careers.careersBenefits.impactful\":\"Значимо\",\"careers.careersBenefits.yourWorkDirectlyHelps\":\"Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения.\",\"route.route.oopsPageNotFound\":\"Упс! Страница не найдена\",\"route.route.returnToHome\":\"Вернуться на главную\",\"route.route.couldNotMeasureHydrationDuration\":\"Не удалось измерить продолжительность гидратации:\",\"pricing.pricingTiers.freeTier\":\"Бесплатный уровень\",\"pricing.pricingTiers.free\":\"Бесплатно\",\"pricing.pricingTiers.publicBenchmarkDashboard\":\"Публичный дашборд бенчмарков\",\"pricing.pricingTiers.basicLibraryComparisons\":\"Базовые сравнения библиотек\",\"pricing.pricingTiers.communityForumAccess\":\"Доступ к форуму сообщества\",\"pricing.pricingTiers.monthlyResultDigest\":\"Ежемесячный дайджест результатов\",\"pricing.pricingTiers.getStarted\":\"Начать\",\"pricing.pricingTiers.proTier\":\"Профессиональный уровень\",\"pricing.pricingTiers.perMonth\":\"/месяц\",\"pricing.pricingTiers.allFreeFeatures\":\"Все функции бесплатного уровня\",\"pricing.pricingTiers.customBenchmarkConfigurations\":\"Собственные конфигурации бенчмарков\",\"pricing.pricingTiers.privateResultsDashboard\":\"Приватный дашборд результатов\",\"pricing.pricingTiers.apiAccess1000Requests\":\"Доступ к API (1000 запросов/день)\",\"pricing.pricingTiers.slackIntegration\":\"Интеграция со Slack\",\"pricing.pricingTiers.subscribeToPro\":\"Подписаться на Pro\",\"pricing.pricingTiers.enterpriseTier\":\"Корпоративный уровень\",\"pricing.pricingTiers.custom\":\"Индивидуально\",\"pricing.pricingTiers.allProFeatures\":\"Все функции уровня Pro\",\"pricing.pricingTiers.dedicatedBenchmarkInfrastructure\":\"Выделенная инфраструктура для бенчмарков\",\"pricing.pricingTiers.customLibraryIntegrations\":\"Индивидуальные интеграции библиотек\",\"pricing.pricingTiers.slaGuarantees\":\"Гарантии SLA\",\"pricing.pricingTiers.prioritySupport\":\"Приоритетная поддержка\",\"pricing.pricingTiers.contactSales\":\"Связаться с отделом продаж\",\"products.productsGrid.benchmarkDashboard\":\"Дашборд бенчмарков\",\"products.productsGrid.interactiveChartsAndTables\":\"Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.\",\"products.productsGrid.bundleAnalyzer\":\"Анализатор бандла\",\"products.productsGrid.uploadYourBuildOutput\":\"Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.\",\"products.productsGrid.migrationAssistant\":\"Помощник по миграции\",\"products.productsGrid.automatedCodemodsAndGuides\":\"Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.\",\"products.productsGrid.performanceMonitor\":\"Монитор производительности\",\"products.productsGrid.continuousPerformanceTrackingFor\":\"Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.\",\"products.productsGrid.learnMore\":\"Узнать больше\",\"products.productsHeader.products\":\"Продукты\",\"products.productsHeader.toolsAndServicesTo\":\"Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации.\",\"contact.contactForm.name\":\"Имя\",\"contact.contactForm.email\":\"Email\",\"contact.contactForm.subject\":\"Тема\",\"contact.contactForm.message\":\"Сообщение\",\"contact.contactForm.sendMessage\":\"Отправить сообщение\",\"contact.contactForm.wellGetBackTo\":\"Мы ответим вам в течение 48 часов.\",\"contact.contactHeader.contactUs\":\"Связаться с нами\",\"contact.contactHeader.haveQuestionsOrWantTo\":\"Есть вопросы или хотите внести вклад? Мы будем рады услышать вас.\",\"home.understandingImpact.understandingTheImpact\":\"Понимание влияния\",\"home.understandingImpact.whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\",\"home.understandingImpact.manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"home.understandingImpact.theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"home.understandingImpact.contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"home.understandingImpact.duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"home.understandingImpact.theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"home.understandingImpact.splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"home.understandingImpact.waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"home.understandingImpact.flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"home.understandingImpact.cacheInvalidation\":\"Инвалидация кэша:\",\"home.understandingImpact.whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"home.understandingImpact.thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"home.whyItMatters.whyTheseMetricsMatter\":\"Почему эти показатели важны\",\"home.whyItMatters.bundleSize\":\"Размер бандла\",\"home.whyItMatters.theBundleIsTheData\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"home.whyItMatters.renderingHydration\":\"Рендеринг и гидратация\",\"home.whyItMatters.connectingALargeJson\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"home.whyItMatters.dynamicLoading\":\"Динамическая загрузка\",\"home.whyItMatters.loadingAllTranslationsUpfront\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\",\"home.resultsTable.sampleResults\":\"Примеры результатов\",\"home.resultsTable.bundleSize\":\"Размер бандла\",\"home.resultsTable.lookupTime\":\"Время поиска\",\"home.resultsTable.lazyLoading\":\"Ленивая загрузка\",\"home.hero.aTestApplicationDesignedTo\":\"Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\",\"home.hero.viewResults\":\"Посмотреть результаты\",\"team.teamGrid.sarahChen\":\"Сара Чен\",\"team.teamGrid.founderLeadEngineer\":\"Основатель и ведущий инженер\",\"team.teamGrid.formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"team.teamGrid.marcusWeber\":\"Маркус Вебер\",\"team.teamGrid.performanceEngineer\":\"Инженер по производительности\",\"team.teamGrid.specializesInJavascriptPerformanceOptimization\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"team.teamGrid.aishaPatel\":\"Айша Патель\",\"team.teamGrid.developerAdvocate\":\"Адвокат разработчиков\",\"team.teamGrid.passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\",\"team.teamGrid.tomasRodriguez\":\"Томас Родригес\",\"team.teamGrid.fullStackDeveloper\":\"Full-Stack разработчик\",\"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.\",\"team.teamGrid.yukiTanaka\":\"Юки Танака\",\"team.teamGrid.dataAnalyst\":\"Аналитик данных\",\"team.teamGrid.ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).\",\"team.teamGrid.elenaKowalski\":\"Елена Ковальски\",\"team.teamGrid.communityManager\":\"Комьюнити-менеджер\",\"team.teamGrid.managesCommunityContributionsPartnershipsAnd\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\",\"team.teamHeader.ourTeam\":\"Наша команда\",\"team.teamHeader.meetThePeopleBehindI18n\":\"Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.\",\"blog.blogList.i18nBenchmark2026Results\":\"Результаты i18n Benchmark 2026\",\"blog.blogList.march152026\":\"15 марта 2026 года\",\"blog.blogList.weTested12DifferentInternationalization\":\"Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками.\",\"blog.blogList.howToReduceYourI18n\":\"Как уменьшить бандл i18n на 60%\",\"blog.blogList.march82026\":\"8 марта 2026 года\",\"blog.blogList.practicalStrategiesForOptimizingTranslation\":\"Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.\",\"blog.blogList.theStateOfInternationalizationIn\":\"Состояние интернационализации в 2026 году\",\"blog.blogList.february282026\":\"28 февраля 2026 года\",\"blog.blogList.anOverviewOfTheCurrent\":\"Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.\",\"blog.blogList.migratingFromReactI18nextTo\":\"Миграция с react-i18next на Lingui\",\"blog.blogList.february152026\":\"15 февраля 2026 года\",\"blog.blogList.aStepByStepGuide\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"blog.blogList.serverComponentsAndI18nWhat\":\"Server Components и i18n: что меняется?\",\"blog.blogList.february12026\":\"1 февраля 2026 года\",\"blog.blogList.reactServerComponentsIntroduceNew\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"blog.blogList.benchmarkMethodologyHowWeTest\":\"Методология бенчмарка: как мы тестируем\",\"blog.blogList.january202026\":\"20 января 2026 года\",\"blog.blogList.aTransparentLookAtOur\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"blog.blogList.readMore\":\"Читать далее →\",\"blog.blogHeader.blog\":\"Блог\",\"blog.blogHeader.insightsDeepDivesAnd\":\"Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n.\",\"about.aboutHeader.aboutThisBenchmark\":\"Об этом бенчмарке\",\"about.aboutHeader.thisIsAnOpenSource\":\"Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\",\"about.aboutGrid.whyThisExists\":\"Почему это существует\",\"about.aboutGrid.choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"about.aboutGrid.methodology\":\"Методология\",\"about.aboutGrid.theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\",\"about.whatWeMeasure.bundleSizeImpact\":\"Влияние на размер бандла\",\"about.whatWeMeasure.theAdditionalJavascriptBytesSent\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"about.whatWeMeasure.renderingOverhead\":\"Затраты на рендеринг\",\"about.whatWeMeasure.howMuchExtraTimeThe\":\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"about.whatWeMeasure.hydrationCost\":\"Стоимость гидратации\",\"about.whatWeMeasure.duringSsrTranslationDataIs\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"about.whatWeMeasure.lazyLoadingEffectiveness\":\"Эффективность ленивой загрузки\",\"about.whatWeMeasure.whetherSplittingTranslationsByRoute\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\",\"about.whatWeMeasure.localeSwitchSpeed\":\"Скорость переключения языка\",\"about.whatWeMeasure.howFastTheAppCan\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"about.whatWeMeasure.whatWeMeasure\":\"Что мы измеряем\",\"pricing.pricingHeader.simpleTransparentPricing\":\"Простое и прозрачное ценообразование\",\"pricing.pricingHeader.chooseThePlanThatFits\":\"Выберите план, который подходит вашей команде. Никаких скрытых комиссий.\",\"faq.faq-header1.frequentlyAskedQuestions\":\"Часто задаваемые вопросы\",\"faq.faq-header1.everythingYouNeedToKnow\":\"Все, что вам нужно знать об i18n Benchmark.\",\"faq.faqList.whatIsI18nBenchmark\":\"Что такое i18n Benchmark ?\",\"faq.faqList.whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"faq.faqList.howAreBenchmarksConducted\":\"Как проводятся бенчмарки ?\",\"faq.faqList.weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.\",\"faq.faqList.whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в настоящее время ?\",\"faq.faqList.weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"faq.faqList.canISubmitMyOwn\":\"Могу ли я отправить свои собственные бенчмарки ?\",\"faq.faqList.yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.\",\"faq.faqList.howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки ?\",\"faq.faqList.weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.\",\"faq.faqList.isTheDataReliable\":\"Надежны ли данные ?\",\"faq.faqList.weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"faq.faqList.doYouOfferConsultingServices\":\"Предлагаете ли вы консультационные услуги ?\",\"faq.faqList.yesOurEnterprisePlanIncludes\":\"Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\",\"faq.faqList.howCanIContribute\":\"Как я могу помочь ?\",\"faq.faqList.thereAreManyWaysTo\":\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.\"}}}"),
	localIds: [
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/en.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/fr.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/es.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/de.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/it.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/pt.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/zh.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/ja.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/ko.json",
		"index::sync-json::./i18n/locales/{{locale}}.json::i18n/locales/ru.json"
	]
} }, yt = () => vt, bt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), xt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : bt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : xt(e ? `${e}.${String(n)}` : String(n)) }), St = /* @__PURE__ */ new Set(), K = (e, t, n) => {
	let r = yt()[e];
	return r ? It(r, t, n) : (St.has(e) || (x({ log: m })(typeof window > "u" ? `Dictionary ${ye(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), St.add(e)), xt(e));
}, Ct = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, wt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ct(e) && Ct(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : wt(e[r], t[r]));
		return n;
	}
	return e;
}, Tt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => wt(e, t));
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Et = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
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
		return Tt(o, e, t);
	}
}, Dt = q, Ot = q, kt = q, At = q, jt = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Mt = (e) => q, Nt = q, Pt = (e, t = !0) => [
	Et(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	Dt,
	Ot,
	kt,
	Mt(e ?? f.defaultLocale),
	Nt,
	At,
	jt
], Ft = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), It = (e, t, n) => {
	let { locale: r, selector: i } = gt(t), a = it(r ?? f.defaultLocale, _t(i), n), o = at(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pt(r), c = ht(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ft(e.content, t, s);
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, Lt = /* @__PURE__ */ new Set([
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
]), Rt = 5, zt = "index", Bt = (e, t) => {
	if (e in yt()) return K(e, t);
}, Vt = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, J = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) Lt.has(t) || (n[t] = r);
	return n;
}, Y = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = Bt(c, p), m === void 0 && c === t && c !== zt && (m = Bt(zt, p)), m === void 0) return;
	let h;
	for (let t of Vt(l, r?.lng ?? e, u, d, f)) {
		let e = F(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = J(r), _ = B(h, g, r?.lng ?? e, "i18next");
	return o < Rt && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = Y({
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
}, Ht = (e) => {
	x({ log: m })(`${S(e, v)}: the ${S("`resources`", v)} option is ignored when using ${S("@intlayer/i18next", te)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${S("`resources`", v)} option to reduce your bundle size.`);
}, X = (e = {}) => {
	e.resources !== void 0 && Ht("createInstance");
	let t = f, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = Y({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? B(o, J(i), e, "i18next") : n;
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
			i.resources !== void 0 && Ht("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = Y({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? B(c, J(a), n, "i18next") : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return Y({
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
			return X({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return X({
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
				return K(Array.isArray(e) ? e[0] : e, n), !0;
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
				return F(K(t, e), n);
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
}, Z = X();
Z.dir.bind(Z), Z.init.bind(Z), Z.loadResources.bind(Z), Z.reloadResources.bind(Z), Z.use.bind(Z), Z.changeLanguage.bind(Z), Z.getFixedT.bind(Z), Z.t.bind(Z), Z.exists.bind(Z), Z.setDefaultNamespace.bind(Z), Z.hasLoadedNamespace.bind(Z), Z.loadNamespaces.bind(Z), Z.loadLanguages.bind(Z);
var Ut = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => Y({
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
		return typeof s == "string" ? B(s, J(i), e, "i18next") : a[a.length - 1];
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
			exists: (t, n) => Y({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = Y({
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
}, Wt = se(y), Gt = (e, t) => ce(e, {
	...y,
	isCookieEnabled: t
}), Kt = () => {
	let { locale: e } = r(Q) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, qt = ({ children: e }) => (Kt(), e), Jt = () => {
	let { locale: e } = r(Q) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Yt = ({ children: e }) => (Jt(), e), Xt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Wt ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Zt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: u, defaultLocale: d } = f ?? {}, [p, m] = c(e ?? Wt ?? t ?? d);
	i(() => {
		e && e !== p && m(e);
	}, [e]), i(() => {
		Xt();
	}, []);
	let h = a ?? ((e) => {
		if (p.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Gt(e, s);
		}
	}), g = re(p);
	return l(Q.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, Qt = ({ children: e, ...t }) => u(Zt, {
	...t,
	children: [
		l(qt, {}),
		l(Yt, {}),
		e
	]
}), { defaultLocale: $t, locales: $ } = f ?? {}, en = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(Q) ?? {};
	return {
		locale: i,
		defaultLocale: $t,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), Gt(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, tn = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = en(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => Ut({
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
}, nn = ({ children: e, i18n: t }) => (t !== void 0 && x({ log: m })(`${S("I18nextProvider", v)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), l(Qt, { children: e }));
e.createContext({ i18n: null });
var rn = {
	type: "3rdParty",
	init: (e) => {}
};
function an() {
	let { t: e } = tn(), t = [
		{
			title: e("blog.blogList.i18nBenchmark2026Results"),
			date: e("blog.blogList.march152026"),
			excerpt: e("blog.blogList.weTested12DifferentInternationalization"),
			category: "Benchmark"
		},
		{
			title: e("blog.blogList.howToReduceYourI18n"),
			date: e("blog.blogList.march82026"),
			excerpt: e("blog.blogList.practicalStrategiesForOptimizingTranslation"),
			category: "Tutorial"
		},
		{
			title: e("blog.blogList.theStateOfInternationalizationIn"),
			date: e("blog.blogList.february282026"),
			excerpt: e("blog.blogList.anOverviewOfTheCurrent"),
			category: "Analysis"
		},
		{
			title: e("blog.blogList.migratingFromReactI18nextTo"),
			date: e("blog.blogList.february152026"),
			excerpt: e("blog.blogList.aStepByStepGuide"),
			category: "Tutorial"
		},
		{
			title: e("blog.blogList.serverComponentsAndI18nWhat"),
			date: e("blog.blogList.february12026"),
			excerpt: e("blog.blogList.reactServerComponentsIntroduceNew"),
			category: "Analysis"
		},
		{
			title: e("blog.blogList.benchmarkMethodologyHowWeTest"),
			date: e("blog.blogList.january202026"),
			excerpt: e("blog.blogList.aTransparentLookAtOur"),
			category: "Meta"
		}
	];
	return l("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: t.map((t) => u("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				u("div", {
					className: "mb-3 flex items-center gap-3",
					children: [l("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}), l("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					})]
				}),
				l("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}),
				l("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}),
				l("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e("blog.blogList.readMore")
				})
			]
		}, t.title))
	});
}
function on() {
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
function sn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Z.use(rn).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var cn = Z;
function ln({ locale: e }) {
	let { i18n: t } = tn();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function un({ children: e }) {
	let t = d().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		sn("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		on();
	}, []), u(nn, {
		i18n: cn,
		children: [l(ln, { locale: t }), e]
	});
}
function dn({ children: e }) {
	return l(un, { children: e });
}
function fn() {
	return l(dn, { children: l(an, {}) });
}
export { fn as default };

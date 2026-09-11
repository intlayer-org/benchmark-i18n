import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { jsxDEV as m } from "react/jsx-dev-runtime";
var h = {
	key: "settings",
	content: {
		nodeType: "translation",
		translation: {
			en: {},
			fr: {},
			es: {},
			de: {},
			it: {},
			pt: {},
			zh: {},
			ja: {},
			ko: {},
			ru: {}
		}
	}
}, ee = class {
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
}, g = (e, t) => {
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
}, te = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, _ = (e, t) => {
	let n = g(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return g(n, t);
	}
}, ne = (e) => {
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
			i.push(`${t} {${re(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, re = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ne).join("") : String(e ?? ""), ie = "translation", ae = "enumeration", oe = "plural", v = "insertion", se = "object", ce = "array", y = "markdown", b = "html", x = "gender", le = "select", S = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: se,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, ue = (e) => S(ae, e), de = (e) => S(x, e), fe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, w = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = fe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, pe = /* @__PURE__ */ new Set([
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
]), me = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, he = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(me)) {
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
				let e = pe.has(i.toLowerCase());
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
}, T = (e, t) => S(b, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = he(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return w(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => w(await e)), typeof n == "string") return w(n);
	try {
		return w(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), E = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, D = (e) => S(v, e, { fields: (() => {
	if (typeof e == "string") return E(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => E(await e)), typeof t == "string") return E(t);
	try {
		return E(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ge = (e) => S(oe, e), _e = (e, t) => S(le, e, { variable: t }), ve = (e) => {
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
}, O = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : D(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : t;
		if (t.type === "argument") return t.format ? D(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : D(`{{${t.name}}}`);
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
					e[i] = O(a);
				}
				return e.__intlayer_icu_var = t.name, ue(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = O(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return ge(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = O(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? de({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : _e(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = O(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ue(e);
		}
	}
	return e.map((e) => O([e]));
}, ye = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return O(ve(e));
		} catch {
			return e;
		}
	}
}, be = (e) => C(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...ye
	}]
}), xe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Se = (e, t) => e[xe(e, t) ?? "fallback"], k = {
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
}, A = {
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
}, Ce = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, we = 50, Te = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Set(), De = (e) => {
	Ee.has(e) || (Ee.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Oe = {
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
}, ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (De(e), Oe[e]);
};
function j(e, t, n) {
	let r = t ?? k?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Te.get(a);
	o || (o = /* @__PURE__ */ new Map(), Te.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > we && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e, t, n) => e[j("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Me = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], M = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ne = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? j("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? j("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : j("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return j("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Pe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : i ? Ne(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : Ne(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = M(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Pe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[v], t, n);
	if (r.nodeType === "html") return P(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[oe];
		return P(Ae(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ae], i = Me.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Me.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = j("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Se(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[x];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Fe = (e, t = {}, n = "en") => {
	let r = P(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ie = (e) => (t, n = {}, r = "en") => Fe(typeof t == "string" ? e(t) : t, n, r), Le = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Le(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Re = Ie(be), ze = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Be = class extends ee {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, te(t));
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
		let { dictionaryKey: t, remainder: n } = ze(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = _(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = _(t, e);
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
			let t = _(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: re(t)
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
		return (c.kind === "node" ? Fe(c.node, o, s) : Re(c.message, o, s)) ?? i;
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
}, Ve = t(null), F = /* @__PURE__ */ new WeakMap(), I = 0, He = (e) => {
	if (!e) return "base";
	let t = F.get(e);
	if (t) return t;
	I += 1;
	let n = `p${I}`;
	return F.set(e, n), n;
}, Ue = 256, L = /* @__PURE__ */ new WeakMap(), R = (e) => typeof e == "object" && !!e, We = (e, t, n) => `${e}_${t}_${He(n)}`, Ge = (e, t) => {
	if (!R(e)) return { hit: !1 };
	let n = L.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, z = (e, t, n) => {
	if (!R(e)) return n;
	let r = L.get(e);
	return r || (r = /* @__PURE__ */ new Map(), L.set(e, r)), r.size >= Ue && r.clear(), r.set(t, n), n;
}, B = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), V = "default", Ke = /[^A-Za-z0-9._&=-]/g, qe = /[^A-Za-z0-9._-]/g, Je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, H = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ye = (e) => e === void 0 ? V : typeof e == "string" ? H(e, Ke) : Object.keys(e).sort().map((t) => `${H(t, qe)}=${H(String(e[t]), qe)}`).join("&"), Xe = (e) => Array.isArray(e) ? e.length === 0 ? [V] : e.map(Ye) : [Ye(e)], Ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? V : e[0] ?? "default";
}, Qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, $e = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, et = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, tt = (e, t) => {
	if (!$e(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? V : Ze(Xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Qe(e, n, t, s)).map((t) => et(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, nt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, rt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Xe(n).join(",") : String(n)}`;
}).join("|") : "", U = "\x1B[0m", it = "\x1B[34m", at = "\x1B[31m", ot = "\x1B[32m", st = "\x1B[38;5;3m", ct = (e) => e, lt = (e, t) => {
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
}), W = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? U : n : U}` : e, dt = (e, t = st, n = U) => [e].flat().map((e) => W(e, t, n)).join(", ");
W("✗", at), W("✓", ot), W("⏲", it);
var ft = () => ({}), pt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), mt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : pt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : mt(e ? `${e}.${String(n)}` : String(n)) }), ht = /* @__PURE__ */ new Set(), gt = (e, t, n) => {
	let r = ft()[e];
	return r ? Pt(r, t, n) : (ht.has(e) || (ut({ log: Ce })(typeof window > "u" ? `Dictionary ${dt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ht.add(e)), mt(e));
}, _t = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, vt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (_t(e) && _t(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : vt(e[r], t[r]));
		return n;
	}
	return e;
}, yt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => vt(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, bt = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[b] : e[y];
}, xt = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? b : y;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, St = (e, t, n, r, i) => {
	let a = xt(e, B(bt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ct = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return yt(o, e, t);
	}
}, wt = K, Tt = (e) => K, Et = K, Dt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => St(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
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
}, Ot = K, kt = K, At = (e) => K, jt = K, Mt = (e, t = !0) => [
	Ct(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
	wt,
	Et,
	Dt,
	At(e ?? k.defaultLocale),
	jt,
	Ot,
	kt
], Nt = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), Pt = (e, t, n) => {
	let { locale: r, selector: i } = nt(t), a = We(r ?? k.defaultLocale, rt(i), n), o = Ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Mt(r), c = tt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Nt(e.content, t, s);
	};
	return c === null ? z(e, a, null) : Array.isArray(c) ? z(e, a, c.map(l)) : z(e, a, l(c));
}, Ft = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", It = /\{\{\s*(.*?)\s*\}\}/g, Lt = (e, t = {}) => {
	if (!Object.values(t).some(Ft)) return {
		isSimple: !0,
		parts: e.replace(It, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(It), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Rt = () => {
	try {
		return Object.keys(ft());
	} catch {
		return [];
	}
}, zt = (e, t) => {
	let n = Rt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return gt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = _(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = _(a(t), e);
		if (n !== void 0) return n;
	}
}, Bt = (e) => {
	let t = {};
	for (let n of Rt()) try {
		Object.assign(t, te(gt(n, e)));
	} catch {}
	return t;
}, Vt = () => ({
	lookup: zt,
	all: Bt
}), Ht = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
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
}, Ut = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ht({
		...n,
		value: n.children,
		children: n.children
	})
}, Wt = K, Gt = (t, r) => {
	let i = Lt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Kt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => St(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Gt(i, e);
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
}, qt = K, Jt = K, q = /* @__PURE__ */ new Map(), Yt = (e, t = !0) => {
	let n = `${e ?? k.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		Ct(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
		wt,
		Tt(e ?? k.defaultLocale),
		Et,
		At(e ?? k.defaultLocale),
		jt,
		Ot,
		kt,
		Ut,
		Wt,
		Kt,
		qt,
		Jt
	];
	return q.set(n, r), r;
}, Xt = (e, t) => Pt(e, t, Yt(typeof t == "object" && t ? t.locale : t)), J = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Zt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = J(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Qt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Y = {
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
}, $t = (e = Y) => {
	let { locales: t } = k;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Qt) for (let t = 0; t < (A.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(A.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, en = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Qt && A.storage.cookies) for (let n = 0; n < A.storage.cookies.length; n++) {
		let { name: r, attributes: i } = A.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: J(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Zt(r, e, i));
			} catch {}
		}
	}
}, tn = $t(Y), nn = (e, t) => en(e, {
	...Y,
	isCookieEnabled: t
}), rn = () => {
	let { locale: e } = a(X) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, an = ({ children: e }) => (rn(), e), on = () => {
	let { locale: e } = a(X) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, sn = ({ children: e }) => (on(), e), cn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ln = (e, t = k?.locales, n = k?.defaultLocale) => {
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
}, X = t({
	locale: tn ?? k?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), un = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = k ?? {}, [d, p] = u(e ?? tn ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		cn();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), nn(e, s);
		}
	}), h = ln(d);
	return f(X.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, dn = ({ children: e, ...t }) => p(un, {
	...t,
	children: [
		f(an, {}),
		f(sn, {}),
		e
	]
}), { defaultLocale: fn, locales: Z } = k ?? {}, pn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(X) ?? {};
	return {
		locale: n,
		defaultLocale: fn,
		availableLocales: Z,
		setLocale: i((n) => {
			if (!Z?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), nn(n, e ?? o ?? !0), t?.(n);
		}, [
			Z,
			t,
			r,
			e
		])
	};
}, mn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = u(() => r(e)), [s, c] = u(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), f(Ve.Provider, {
		value: i,
		children: f(dn, {
			locale: s,
			children: n
		})
	});
}, hn = (e, t) => {
	let n = new Be({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, gn = (...e) => {
	let { locale: t } = pn(), n = e.map((e) => e.key).join("\0");
	return c(() => hn(t, Object.fromEntries(e.map((e) => [e.key, Xt(e, t)]))), [t, n]);
}, _n = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = _n(t.children, n), a = n[t.tag];
	if (a === void 0) return f(e, { children: i }, r);
	if (typeof a == "function") return f(e, { children: a(f(d, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return f(e, {
			...t,
			children: i
		}, r);
	}
	return f(e, { children: i }, r);
}), vn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, u;
	if (l) {
		let e = _n(Le(c), r);
		u = f(d, { children: e });
	} else u = c;
	let p = {
		id: e,
		translation: u,
		children: u,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? f(m, {
		...p,
		children: u
	}) : f(d, { children: u });
}, Q = ({ dictionary: e, ...t }) => {
	let { i18n: n } = gn(e), { defaultComponent: r } = a(Ve) ?? {};
	return vn(t, n, r);
}, yn = (e) => new Be({
	...e,
	registry: Vt()
});
yn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/settings/ApiAccessSection.tsx";
function bn() {
	let e = s();
	return m("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [m("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: m(Q, {
				id: "settings.apiAccess.title",
				message: "API Access",
				dictionary: h
			}, void 0, !1, {
				fileName: $,
				lineNumber: 10,
				columnNumber: 9
			}, this)
		}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this), m("div", { children: [
			m("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: m(Q, {
					id: "settings.apiAccess.apiKey",
					message: "API Key",
					dictionary: h
				}, void 0, !1, {
					fileName: $,
					lineNumber: 17,
					columnNumber: 11
				}, this)
			}, void 0, !1, {
				fileName: $,
				lineNumber: 13,
				columnNumber: 9
			}, this),
			m("div", {
				className: "flex gap-2",
				children: [m("input", {
					id: e,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 20,
					columnNumber: 11
				}, this), m("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: m(Q, {
						id: "settings.apiAccess.copy",
						message: "Copy",
						dictionary: h
					}, void 0, !1, {
						fileName: $,
						lineNumber: 30,
						columnNumber: 13
					}, this)
				}, void 0, !1, {
					fileName: $,
					lineNumber: 26,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			m("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: m(Q, {
					id: "settings.apiAccess.useKeyDescription",
					message: "Use this key to access the benchmarking API programmatically.",
					dictionary: h
				}, void 0, !1, {
					fileName: $,
					lineNumber: 34,
					columnNumber: 11
				}, this)
			}, void 0, !1, {
				fileName: $,
				lineNumber: 33,
				columnNumber: 9
			}, this)
		] }, void 0, !0, {
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
function xn(e, t) {
	let n = yn();
	return n.activate(e), n;
}
var Sn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Cn({ children: e }) {
	let t = c(() => xn("en"), []);
	return m(mn, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Sn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var wn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/settings/ApiAccessSection.wrapper.tsx";
function Tn() {
	return m(Cn, { children: m(bn, {}, void 0, !1, {
		fileName: wn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: wn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Tn as default };

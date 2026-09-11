import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { jsxDEV as l } from "react/jsx-dev-runtime";
var u = class {
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
}, d = (e, t) => {
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
}, f = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, p = (e, t) => {
	let n = d(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return d(n, t);
	}
}, m = (e) => {
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
			i.push(`${t} {${h(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, h = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(m).join("") : String(e ?? ""), ee = "translation", te = "enumeration", g = "plural", _ = "insertion", ne = "object", re = "array", ie = "markdown", v = "html", ae = "gender", oe = "select", y = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, x = (e) => y(te, e), se = (e) => y(ae, e), ce = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, S = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ce(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, le = /* @__PURE__ */ new Set([
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
]), ue = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, de = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ue)) {
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
				let e = le.has(i.toLowerCase());
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
}, C = (e, t) => y(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = de(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return S(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => S(await e)), typeof n == "string") return S(n);
	try {
		return S(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), w = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, T = (e) => y(_, e, { fields: (() => {
	if (typeof e == "string") return w(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => w(await e)), typeof t == "string") return w(t);
	try {
		return w(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), fe = (e) => y(g, e), pe = (e, t) => y(oe, e, { variable: t }), me = (e) => {
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
}, E = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : T(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? C(t) : t;
		if (t.type === "argument") return t.format ? T(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : T(`{{${t.name}}}`);
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
					e[i] = E(a);
				}
				return e.__intlayer_icu_var = t.name, x(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = E(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return fe(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = E(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? se({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : pe(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = E(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, x(e);
		}
	}
	return e.map((e) => E([e]));
}, he = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return E(me(e));
		} catch {
			return e;
		}
	}
}, ge = (e) => b(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...he
	}]
}), _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], D = {
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
}, O = {
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
}, ye = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, be = 50, k = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Set(), xe = (e) => {
	A.has(e) || (A.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function j(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = k.get(a);
	o || (o = /* @__PURE__ */ new Map(), k.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var we = (e, t, n) => e[j("PluralRules", n).select(t)] ?? e.other, Te = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ee = [
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
}, De = (e, t, n, r) => {
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
}, Oe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : i ? De(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : De(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = M(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Oe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[_], t, n);
	if (r.nodeType === "html") return P(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[g];
		return P(we(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[te], i = Ee.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ee.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = j("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[oe], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(Te(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ae];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ke = (e, t = {}, n = "en") => {
	let r = P(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ae = ((e) => (t, n = {}, r = "en") => ke(typeof t == "string" ? e(t) : t, n, r))(ge), je = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Me = class extends u {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, f(t));
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
		let { dictionaryKey: t, remainder: n } = je(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = p(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = p(t, e);
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
			let t = p(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: h(t)
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
		return (c.kind === "node" ? ke(c.node, o, s) : Ae(c.message, o, s)) ?? i;
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
}, Ne = e(null), Pe = /* @__PURE__ */ new WeakMap(), F = 0, Fe = (e) => {
	if (!e) return "base";
	let t = Pe.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return Pe.set(e, n), n;
}, Ie = 256, I = /* @__PURE__ */ new WeakMap(), L = (e) => typeof e == "object" && !!e, Le = (e, t, n) => `${e}_${t}_${Fe(n)}`, Re = (e, t) => {
	if (!L(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!L(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Ie && r.clear(), r.set(t, n), n;
}, z = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), B = "default", ze = /[^A-Za-z0-9._&=-]/g, V = /[^A-Za-z0-9._-]/g, Be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, H = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, U = (e) => e === void 0 ? B : typeof e == "string" ? H(e, ze) : Object.keys(e).sort().map((t) => `${H(t, V)}=${H(String(e[t]), V)}`).join("&"), W = (e) => Array.isArray(e) ? e.length === 0 ? [B] : e.map(U) : [U(e)], Ve = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? B : e[0] ?? "default";
}, He = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ue = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, We = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ge = (e, t) => {
	if (!Ue(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? B : Ve(W(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => He(e, n, t, s)).map((t) => We(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ke = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? W(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", Je = "\x1B[34m", Ye = "\x1B[31m", Xe = "\x1B[32m", Ze = "\x1B[38;5;3m", Qe = (e) => e, $e = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Qe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, et = (e, t) => (n, r) => $e(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, tt = (e, t = Ze, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", Ye), K("✓", Xe), K("⏲", Je);
var nt = () => ({}), rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), it = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : it(e ? `${e}.${String(n)}` : String(n)) }), at = /* @__PURE__ */ new Set(), ot = (e, t, n) => {
	let r = nt()[e];
	return r ? Ct(r, t, n) : (at.has(e) || (et({ log: ye })(typeof window > "u" ? `Dictionary ${tt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), at.add(e)), it(e));
}, st = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, ct = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (st(e) && st(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : ct(e[r], t[r]));
		return n;
	}
	return e;
}, lt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => ct(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ut = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[v] : e[ie];
}, dt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? v : ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, ft = (e, t, n, r, i) => {
	let a = dt(e, z(ut(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, pt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ee,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return lt(o, e, t);
	}
}, mt = J, ht = J, gt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => ft(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = z(i, e);
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
}, _t = J, vt = J, yt = (e) => J, bt = J, xt = (e, t = !0) => [
	pt(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	mt,
	ht,
	gt,
	yt(e ?? D.defaultLocale),
	bt,
	_t,
	vt
], St = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), Ct = (e, t, n) => {
	let { locale: r, selector: i } = Ke(t), a = Le(r ?? D.defaultLocale, qe(i), n), o = Re(e, a);
	if (o.hit) return o.content;
	let s = n ?? xt(r), c = Ge(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return St(e.content, t, s);
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, wt = () => {
	try {
		return Object.keys(nt());
	} catch {
		return [];
	}
}, Tt = (e, t) => {
	let n = wt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ot(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = p(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = p(a(t), e);
		if (n !== void 0) return n;
	}
}, Et = (e) => {
	let t = {};
	for (let n of wt()) try {
		Object.assign(t, f(ot(n, e)));
	} catch {}
	return t;
}, Dt = () => ({
	lookup: Tt,
	all: Et
}), Ot = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, kt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ot(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, At = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, jt = (e = Y) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!At) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Mt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !At && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ot(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, kt(r, e, i));
			} catch {}
		}
	}
}, Nt = jt(Y), X = (e, t) => Mt(e, {
	...Y,
	isCookieEnabled: t
}), Pt = () => {
	let { locale: e } = n(Z) ?? {}, t = a(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ft = ({ children: e }) => (Pt(), e), It = () => {
	let { locale: e } = n(Z) ?? {}, t = a(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Lt = ({ children: e }) => (It(), e), Rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, zt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Z = e({
	locale: Nt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Bt = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: c, isCookieEnabled: l }) => {
	let { locales: u, defaultLocale: d } = D ?? {}, [f, p] = o(e ?? Nt ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		Rt();
	}, []);
	let m = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), X(e, l);
		}
	}), h = zt(f);
	return s(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: c
		},
		children: i
	});
}, Vt = ({ children: e, ...t }) => c(Bt, {
	...t,
	children: [
		s(Ft, {}),
		s(Lt, {}),
		e
	]
}), { defaultLocale: Ht, locales: Q } = D ?? {}, Ut = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Z) ?? {};
	return {
		locale: i,
		defaultLocale: Ht,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), X(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, Wt = () => {
	let e = n(Ne), { locale: t } = Ut(), r = i(() => {
		let e = new Me({
			locale: t,
			registry: Dt()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, Gt = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, c] = o(() => i(e)), [l, u] = o(e.locale);
	return r(() => (c(i(e)), u(e.locale), e.on("change", () => {
		c(i(e)), u(e.locale);
	})), [e]), s(Ne.Provider, {
		value: a,
		children: s(Vt, {
			locale: l,
			children: n
		})
	});
}, Kt = (e) => new Me({
	...e,
	registry: Dt()
});
Kt({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/products/ProductsGrid.tsx";
function qt() {
	let { i18n: e } = Wt(), t = [
		{
			name: e._({
				id: "products.benchmarkCli",
				message: "Benchmark CLI"
			}),
			desc: e._({
				id: "products.benchmarkCliDesc",
				message: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
			}),
			price: e._({
				id: "products.free",
				message: "Free"
			})
		},
		{
			name: e._({
				id: "products.benchmarkCloud",
				message: "Benchmark Cloud"
			}),
			desc: e._({
				id: "products.benchmarkCloudDesc",
				message: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
			}),
			price: "$29/mo"
		},
		{
			name: e._({
				id: "products.benchmarkEnterprise",
				message: "Benchmark Enterprise"
			}),
			desc: e._({
				id: "products.benchmarkEnterpriseDesc",
				message: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
			}),
			price: e._({
				id: "products.contactUs",
				message: "Contact Us"
			})
		},
		{
			name: e._({
				id: "products.migrationAssistant",
				message: "Migration Assistant"
			}),
			desc: e._({
				id: "products.migrationAssistantDesc",
				message: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
			}),
			price: "$99 one-time"
		},
		{
			name: e._({
				id: "products.translationQa",
				message: "Translation QA"
			}),
			desc: e._({
				id: "products.translationQaDesc",
				message: "Automated quality checks for missing translations, pluralization issues, and context errors."
			}),
			price: "$19/mo"
		},
		{
			name: e._({
				id: "products.bundleOptimizer",
				message: "Bundle Optimizer"
			}),
			desc: e._({
				id: "products.bundleOptimizerDesc",
				message: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
			}),
			price: "$49/mo"
		}
	];
	return l("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => l("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [l("div", { children: [l("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: e.name
			}, void 0, !1, {
				fileName: $,
				lineNumber: 77,
				columnNumber: 13
			}, this), l("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: e.desc
			}, void 0, !1, {
				fileName: $,
				lineNumber: 80,
				columnNumber: 13
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 76,
				columnNumber: 11
			}, this), l("div", {
				className: "flex items-center justify-between",
				children: [l("span", {
					className: "text-sm font-bold text-primary",
					children: e.price
				}, void 0, !1, {
					fileName: $,
					lineNumber: 83,
					columnNumber: 13
				}, this), l("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "Learn More"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 84,
					columnNumber: 13
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 82,
				columnNumber: 11
			}, this)]
		}, e.name, !0, {
			fileName: $,
			lineNumber: 72,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 70,
		columnNumber: 5
	}, this);
}
function Jt(e, t) {
	let n = Kt();
	return n.activate(e), n;
}
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Xt({ children: e }) {
	let t = i(() => Jt("en"), []);
	return l(Gt, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Yt,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/products/ProductsGrid.wrapper.tsx";
function Qt() {
	return l(Xt, { children: l(qt, {}, void 0, !1, {
		fileName: Zt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Zt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Qt as default };

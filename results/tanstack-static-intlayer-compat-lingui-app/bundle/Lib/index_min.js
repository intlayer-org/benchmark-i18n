import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
var c = e(null), l = class {
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
}, u = (e, t) => {
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
}, d = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, f = (e, t) => {
	let n = u(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return u(n, t);
	}
}, ee = (e) => {
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
			i.push(`${t} {${p(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, p = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ee).join("") : String(e ?? ""), m = "translation", h = "enumeration", g = "plural", te = "condition", _ = "insertion", v = "object", ne = "array", re = "markdown", y = "html", b = "gender", x = "select", S = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), C = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, w);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, C(t, e, {
		type: ne,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: v,
			key: r
		};
		if (t.eager) {
			n[r] = w(e[r], C(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = w(e[r], C(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ie = (e) => S(h, e), ae = (e) => S(b, e), oe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, T = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = oe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, se = /* @__PURE__ */ new Set([
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
]), ce = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, le = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ce)) {
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
				let e = se.has(i.toLowerCase());
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
}, E = (e, t) => S(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = le(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return T(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => T(await e)), typeof n == "string") return T(n);
	try {
		return T(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), D = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, O = (e) => S(_, e, { fields: (() => {
	if (typeof e == "string") return D(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => D(await e)), typeof t == "string") return D(t);
	try {
		return D(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ue = (e) => S(g, e), de = (e, t) => S(x, e, { variable: t }), fe = (e) => {
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
}, k = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? E(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? E(t) : O(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? E(t) : t;
		if (t?.type === "argument") return t.format ? O(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : O(`{{${t.name}}}`);
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
					e[i] = k(a);
				}
				return e.__intlayer_icu_var = t.name, ie(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = k(i);
			}
			return ue(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = k(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ae({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : de(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ie(e);
		}
	}
	return e.map((e) => k([e]));
}, pe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return k(fe(e));
		} catch {
			return e;
		}
	}
}, me = (e) => w(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...pe
	}]
}), he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], A = {
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
}, j = {
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
}, _e = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ve = 50, ye = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Set(), be = (e) => {
	M.has(e) || (M.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, xe = {
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
}, Se = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (be(e), xe[e]);
};
function N(e, t, n) {
	let r = t ?? A?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ye.get(a);
	o || (o = /* @__PURE__ */ new Map(), ye.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Se(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ve && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ce = (e, t, n) => e[N("PluralRules", n).select(t)] ?? e.other, we = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Te = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], P = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ee = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? N("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? N("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : N("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return N("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, De = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = P(t, r);
	return o === void 0 ? e : i ? Ee(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = P(t, r);
	return o === void 0 ? e : Ee(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = P(t, n);
	return r === void 0 ? e : String(r);
}), F = (e, t) => e[t] ?? e.count ?? e.n, I = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return De(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return I(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(I(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return I(r[_], t, n);
	if (r.nodeType === "html") return I(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[g];
		return I(Ce(e, Number(F(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[h], i = Te.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Te.includes(t) || (o[t] = n);
		let s = F(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = N("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return I(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[x], i = F(t, typeof r.variable == "string" ? r.variable : "value");
		return I(we(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[b];
		return I(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Oe = (e, t = {}, n = "en") => {
	let r = I(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ke = ((e) => (t, n = {}, r = "en") => Oe(typeof t == "string" ? e(t) : t, n, r))(me), Ae = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, L = class extends l {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, d(t));
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
		let { dictionaryKey: t, remainder: n } = Ae(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = f(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = f(t, e);
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
			let t = f(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: p(t)
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
		return (c.kind === "node" ? Oe(c.node, o, s) : ke(c.message, o, s)) ?? i;
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
}, R = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = R(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = {
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
}, V = (e = B) => {
	let { locales: t } = A;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (j.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(j.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, H = !1, U, Me = () => typeof window > "u" ? V(B) : (H ||= (U = V(B), !0), U), Ne = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (H = !1, !z && j.storage.cookies)) for (let n = 0; n < j.storage.cookies.length; n++) {
		let { name: r, attributes: i } = j.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: R(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, je(r, e, i));
			} catch {}
		}
	}
}, Pe = /* @__PURE__ */ new WeakMap(), W = 0, Fe = (e) => {
	if (!e) return "base";
	let t = Pe.get(e);
	if (t) return t;
	W += 1;
	let n = `p${W}`;
	return Pe.set(e, n), n;
}, Ie = 256, G = /* @__PURE__ */ new WeakMap(), Le = (e) => typeof e == "object" && !!e, Re = (e, t, n) => `${e}_${t}_${Fe(n)}`, ze = (e, t) => {
	if (!Le(e)) return { hit: !1 };
	let n = G.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, K = (e, t, n) => {
	if (!Le(e)) return n;
	let r = G.get(e);
	return r || (r = /* @__PURE__ */ new Map(), G.set(e, r)), r.size >= Ie && r.clear(), r.set(t, n), n;
}, Be = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), q = "\x1B[0m", Ve = "\x1B[34m", He = "\x1B[31m", Ue = "\x1B[32m", We = "\x1B[38;5;3m", Ge = (e) => e, Ke = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ge(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, qe = (e, t) => (n, r) => Ke(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, Je = (e, t = We, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", He), J("✓", Ue), J("⏲", Ve);
var Ye = () => ({}), Xe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ze = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Xe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ze(e ? `${e}.${String(n)}` : String(n)) }), Qe = /* @__PURE__ */ new Set(), $e = (e, t, n) => {
	let r = Ye()[e];
	return r ? xt(r, t, n) : (Qe.has(e) || (qe({ log: _e })(typeof window > "u" ? `Dictionary ${Je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Qe.add(e)), Ze(e));
}, et = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, tt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !et(e) || !et(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? tt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, nt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => tt(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, rt = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[y] : e[re];
}, it = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? y : re;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, at = (e, t, n, r, i) => {
	let a = it(e, Be(rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ot = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, st = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = nt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: m,
				key: e
			}]
		});
	}
}, ct = X, lt = (e) => X, ut = X, dt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => at(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Be(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return mt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ft = [
	h,
	te,
	g,
	b,
	x
], pt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !ft.includes(i)) return t;
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
		return !r && ot(i) ? i(n) : i;
	};
}, mt = (e, t) => typeof t == "function" && ft.includes(e?.nodeType ?? "") ? (n) => pt(e, t, n) : t, ht = X, gt = X, _t = (e) => X, vt = X, yt = (e, t = !0) => [
	st(e ?? A.defaultLocale, t ? A.defaultLocale : void 0),
	ct,
	lt(e ?? A.defaultLocale),
	ut,
	dt,
	_t(e ?? A.defaultLocale),
	vt,
	ht,
	gt
].filter((e) => e !== X), bt = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), xt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Re(r ?? A.defaultLocale, "", n), o = ze(e, a);
	if (o.hit) return o.content;
	let s = n ?? yt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return bt(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? K(e, a, null) : Array.isArray(c) ? K(e, a, c.map(l)) : K(e, a, l(c));
}, St = Me, Ct = (e, t) => Ne(e, {
	...B,
	isCookieEnabled: t
}), wt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Tt = (e, t = A?.locales, n = A?.defaultLocale) => {
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
}, Et = e({
	get locale() {
		return St() ?? A?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Dt = ({ locale: e, defaultLocale: n, variant: s, children: c, setLocale: l, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: ee } = A ?? {}, [p, m] = a(() => e ?? St() ?? n ?? ee), [h, g] = a(e);
	e !== h && (g(e), e && e !== p && m(e)), r(() => {
		wt();
	}, []);
	let te = t((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Ct(e, d);
		}
	}, [
		p,
		f,
		d
	]), _ = l ?? te, v = Tt(p), ne = i(() => ({
		locale: v,
		setLocale: _,
		variant: s,
		disableEditor: u
	}), [
		v,
		_,
		s,
		u
	]);
	return o(Et.Provider, {
		value: ne,
		children: c
	});
}, Ot = ({ children: e, ...t }) => s(Dt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: kt, locales: Q } = A ?? {}, At = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Et) ?? {};
	return {
		locale: i,
		defaultLocale: kt,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), Ct(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, jt = () => {
	try {
		return Object.keys(Ye());
	} catch {
		return [];
	}
}, Mt = (e, t) => {
	let n = jt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return $e(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = f(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = f(a(t), e);
		if (n !== void 0) return n;
	}
}, Nt = (e) => {
	let t = {};
	for (let n of jt()) try {
		Object.assign(t, d($e(n, e)));
	} catch {}
	return t;
}, Pt = () => ({
	lookup: Mt,
	all: Nt
}), Ft = () => {
	let e = n(c), { locale: t } = At(), r = i(() => {
		let e = new L({
			locale: t,
			registry: Pt()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, $ = (e) => new L({
	...e,
	registry: Pt()
});
$({ locale: "en" });
var It = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [s, l] = a(() => i(e)), [u, d] = a(e.locale);
	return r(() => (l(i(e)), d(e.locale), e.on("change", () => {
		l(i(e)), d(e.locale);
	})), [e]), o(c.Provider, {
		value: s,
		children: o(Ot, {
			locale: u,
			children: n
		})
	});
}, Lt = $();
Lt.activate("en");
var Rt = () => {
	let { _: e, i18n: t } = Ft();
	return t.locale, null;
};
function zt() {
	return o(It, {
		i18n: Lt,
		children: o(Rt, {})
	});
}
function Bt(e, t) {
	let n = $();
	return n.activate(e), n;
}
function Vt({ children: e }) {
	let t = i(() => Bt("en"), []);
	return o(It, {
		i18n: t,
		children: e
	});
}
function Ht() {
	return o(Vt, { children: o(zt, {}) });
}
export { Ht as default };

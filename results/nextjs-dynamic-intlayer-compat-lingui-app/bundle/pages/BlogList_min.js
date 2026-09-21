import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "../../../.intlayer/dictionary/header.json";
import l from "../../../.intlayer/dictionary/open-positions.json";
import ee from "../../../.intlayer/dictionary/careers-benefits.json";
import u from "../../../.intlayer/dictionary/settings.json";
import d from "../../../.intlayer/dictionary/footer.json";
import te from "../../../.intlayer/dictionary/results-table.json";
import ne from "../../../.intlayer/dictionary/settings-header.json";
import re from "../../../.intlayer/dictionary/contact-form.json";
import ie from "../../../.intlayer/dictionary/contact-header.json";
import ae from "../../../.intlayer/dictionary/about-grid.json";
import oe from "../../../.intlayer/dictionary/pricing-tiers.json";
import se from "../../../.intlayer/dictionary/mockBanner.json";
import ce from "../../../.intlayer/dictionary/theme-toggle.json";
import le from "../../../.intlayer/dictionary/about-header.json";
import ue from "../../../.intlayer/dictionary/pricing-header.json";
import de from "../../../.intlayer/dictionary/faq-header.json";
import fe from "../../../.intlayer/dictionary/blog-header.json";
import pe from "../../../.intlayer/dictionary/team-header.json";
import me from "../../../.intlayer/dictionary/faq-list.json";
import he from "../../../.intlayer/dictionary/careers-header.json";
import ge from "../../../.intlayer/dictionary/products-header.json";
import _e from "../../../.intlayer/dictionary/what-we-measure.json";
import ve from "../../../.intlayer/dictionary/products.json";
import ye from "../../../.intlayer/dictionary/blog-list.json";
import be from "../../../.intlayer/dictionary/understanding-impact.json";
import xe from "../../../.intlayer/dictionary/team.json";
import Se from "../../../.intlayer/dictionary/why-it-matters.json";
import Ce from "../../../.intlayer/dictionary/hero.json";
import { jsx as f, jsxs as we } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var Te = class {
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
}, Ee = (e, t) => {
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
}, De = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, m = (e, t) => {
	let n = Ee(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Ee(n, t);
	}
}, Oe = (e) => {
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
			i.push(`${t} {${ke(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ke = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Oe).join("") : String(e ?? ""), Ae = "translation", h = "enumeration", g = "plural", _ = "insertion", je = "object", Me = "array", v = "markdown", y = "html", b = "gender", x = "select", S = (e, t, n) => ({
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
			type: Me,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: je,
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
}, w = (e) => S(h, e), Ne = (e) => S(b, e), Pe = (e) => {
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
		let o = Pe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Fe = /* @__PURE__ */ new Set([
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
]), Ie = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Le = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ie)) {
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
				let e = Fe.has(i.toLowerCase());
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
		let { issues: t } = Le(e);
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
})() }), Re = (e) => S(g, e), ze = (e, t) => S(x, e, { variable: t }), Be = (e) => {
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
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? E(t) : O(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? E(t) : t;
		if (t.type === "argument") return t.format ? O(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : O(`{{${t.name}}}`);
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
					e[i] = k(a);
				}
				return e.__intlayer_icu_var = t.name, w(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Re(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = k(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ne({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ze(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, w(e);
		}
	}
	return e.map((e) => k([e]));
}, Ve = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return k(Be(e));
		} catch {
			return e;
		}
	}
}, He = (e) => C(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ve
	}]
}), Ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], A = {
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
}, Ge = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ke = 50, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Set(), qe = (e) => {
	N.has(e) || (N.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Je = {
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
}, Ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (qe(e), Je[e]);
};
function P(e, t, n) {
	let r = t ?? A?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = M.get(a);
	o || (o = /* @__PURE__ */ new Map(), M.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ke && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Xe = (e, t, n) => e[P("PluralRules", n).select(t)] ?? e.other, Ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, F = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], I = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, L = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? P("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? P("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : P("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return P("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Qe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : i ? L(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : L(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = I(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Qe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[_], t, n);
	if (r.nodeType === "html") return z(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[g];
		return z(Xe(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[h], i = F.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) F.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = P("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[x], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[b];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, B = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, $e = ((e) => (t, n = {}, r = "en") => B(typeof t == "string" ? e(t) : t, n, r))(He), et = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, V = class extends Te {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, De(t));
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
		let { dictionaryKey: t, remainder: n } = et(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = m(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = m(t, e);
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
			let t = m(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: ke(t)
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
		return (c.kind === "node" ? B(c.node, o, s) : $e(c.message, o, s)) ?? i;
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
}, tt = e(null), nt = /* @__PURE__ */ new WeakMap(), rt = 0, it = (e) => {
	if (!e) return "base";
	let t = nt.get(e);
	if (t) return t;
	rt += 1;
	let n = `p${rt}`;
	return nt.set(e, n), n;
}, at = 256, H = /* @__PURE__ */ new WeakMap(), ot = (e) => typeof e == "object" && !!e, st = (e, t, n) => `${e}_${t}_${it(n)}`, ct = (e, t) => {
	if (!ot(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!ot(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= at && r.clear(), r.set(t, n), n;
}, lt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "default", ut = /[^A-Za-z0-9._&=-]/g, dt = /[^A-Za-z0-9._-]/g, ft = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ft);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, pt = (e) => e === void 0 ? W : typeof e == "string" ? G(e, ut) : Object.keys(e).sort().map((t) => `${G(t, dt)}=${G(String(e[t]), dt)}`).join("&"), mt = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(pt) : [pt(e)], ht = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
}, gt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, _t = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, vt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, yt = (e, t) => {
	if (!_t(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : ht(mt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => gt(e, n, t, s)).map((t) => vt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, bt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, xt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? mt(n).join(",") : String(n)}`;
}).join("|") : "", K = "\x1B[0m", St = "\x1B[34m", Ct = "\x1B[31m", wt = "\x1B[32m", Tt = "\x1B[38;5;3m", Et = (e) => e, Dt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Et(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ot = (e, t) => (n, r) => Dt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), q = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? K : n : K}` : e, kt = (e, t = Tt, n = K) => [e].flat().map((e) => q(e, t, n)).join(", ");
q("✗", Ct), q("✓", wt), q("⏲", St);
var At = {
	header: c,
	"open-positions": l,
	"careers-benefits": ee,
	settings: u,
	footer: d,
	"results-table": te,
	"settings-header": ne,
	"contact-form": re,
	"contact-header": ie,
	"about-grid": ae,
	"pricing-tiers": oe,
	mockBanner: se,
	"theme-toggle": ce,
	"about-header": le,
	"pricing-header": ue,
	"faq-header": de,
	"blog-header": fe,
	"team-header": pe,
	"faq-list": me,
	"careers-header": he,
	"products-header": ge,
	"what-we-measure": _e,
	products: ve,
	"blog-list": ye,
	"understanding-impact": be,
	team: xe,
	"why-it-matters": Se,
	hero: Ce
}, jt = () => At, Mt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Nt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Mt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Nt(e ? `${e}.${String(n)}` : String(n)) }), Pt = /* @__PURE__ */ new Set(), Ft = (e, t, n) => {
	let r = jt()[e];
	return r ? Qt(r, t, n) : (Pt.has(e) || (Ot({ log: Ge })(typeof window > "u" ? `Dictionary ${kt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Pt.add(e)), Nt(e));
}, It = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Lt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (It(e) && It(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Lt(e[r], t[r]));
		return n;
	}
	return e;
}, Rt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Lt(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, zt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[y] : e[v];
}, Bt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Vt = (e, t, n, r, i) => {
	let a = Bt(e, lt(zt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ht = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Rt(o, e, t);
	}
}, Ut = Y, Wt = Y, Gt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => Vt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = lt(i, e);
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
}, Kt = Y, qt = Y;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Jt = (e) => Y, Yt = Y, Xt = (e, t = !0) => [
	Ht(e ?? A.defaultLocale, t ? A.defaultLocale : void 0),
	Ut,
	Wt,
	Gt,
	Jt(e ?? A.defaultLocale),
	Yt,
	Kt,
	qt
], Zt = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), Qt = (e, t, n) => {
	let { locale: r, selector: i } = bt(t), a = st(r ?? A.defaultLocale, xt(i), n), o = ct(e, a);
	if (o.hit) return o.content;
	let s = n ?? Xt(r), c = yt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Zt(e.content, t, s);
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, $t = () => {
	try {
		return Object.keys(jt());
	} catch {
		return [];
	}
}, en = (e, t) => {
	let n = $t(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Ft(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = m(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = m(a(t), e);
		if (n !== void 0) return n;
	}
}, tn = (e) => {
	let t = {};
	for (let n of $t()) try {
		Object.assign(t, De(Ft(n, e)));
	} catch {}
	return t;
}, nn = () => ({
	lookup: en,
	all: tn
}), rn = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, an = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = rn(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, on = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, sn = (e = X) => {
	let { locales: t } = A;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!on) for (let t = 0; t < (j.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(j.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, cn = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !on && j.storage.cookies) for (let n = 0; n < j.storage.cookies.length; n++) {
		let { name: r, attributes: i } = j.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: rn(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, an(r, e, i));
			} catch {}
		}
	}
}, ln = sn(X), un = (e, t) => cn(e, {
	...X,
	isCookieEnabled: t
}), dn = () => {
	let { locale: e } = n(Z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, fn = ({ children: e }) => (dn(), e), pn = () => {
	let { locale: e } = n(Z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, mn = ({ children: e }) => (pn(), e), hn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, gn = (e, t = A?.locales, n = A?.defaultLocale) => {
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
	locale: ln ?? A?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), _n = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: ee } = A ?? {}, [u, d] = s(e ?? ln ?? t ?? ee);
	r(() => {
		e && e !== u && d(e);
	}, [e]), r(() => {
		hn();
	}, []);
	let te = a ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), un(e, c);
		}
	}), ne = gn(u);
	return f(Z.Provider, {
		value: {
			locale: ne,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, vn = ({ children: e, ...t }) => we(_n, {
	...t,
	children: [
		f(fn, {}),
		f(mn, {}),
		e
	]
}), { defaultLocale: yn, locales: Q } = A ?? {}, bn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Z) ?? {};
	return {
		locale: i,
		defaultLocale: yn,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), un(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, xn = () => {
	let e = n(tt), { locale: t } = bn(), r = a(() => {
		let e = new V({
			locale: t,
			registry: nn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, Sn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = s(() => i(e)), [c, l] = s(e.locale);
	return r(() => (o(i(e)), l(e.locale), e.on("change", () => {
		o(i(e)), l(e.locale);
	})), [e]), f(tt.Provider, {
		value: a,
		children: f(vn, {
			locale: c,
			children: n
		})
	});
}, Cn = (e) => new V({
	...e,
	registry: nn()
});
Cn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/blog/BlogList.tsx";
function wn() {
	let { i18n: e } = xn(), t = [
		{
			title: e._("blog-list.comparingI18nLibrariesIn2026"),
			date: "March 15, 2026",
			excerpt: e._("blog-list.weTested12DifferentInternationalization"),
			category: "Benchmark"
		},
		{
			title: e._("blog-list.howToReduceYourI18n"),
			date: e._("blog-list.march82026"),
			excerpt: e._("blog-list.practicalStrategiesForOptimizingTranslation"),
			category: "Tutorial"
		},
		{
			title: e._("blog-list.theStateOfInternationalizationIn"),
			date: e._("blog-list.february282026"),
			excerpt: e._("blog-list.anOverviewOfTheCurrent"),
			category: "Analysis"
		},
		{
			title: e._("blog-list.migratingFromReactI18nextTo"),
			date: e._("blog-list.february152026"),
			excerpt: e._("blog-list.aStepByStepGuide"),
			category: "Tutorial"
		},
		{
			title: e._("blog-list.serverComponentsAndI18nWhat"),
			date: e._("blog-list.february12026"),
			excerpt: e._("blog-list.reactServerComponentsIntroduceNew"),
			category: "Analysis"
		},
		{
			title: e._("blog-list.benchmarkMethodologyHowWeTest"),
			date: e._("blog-list.january202026"),
			excerpt: e._("blog-list.aTransparentLookAtOur"),
			category: "Meta"
		}
	];
	return p("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: t.map((t) => p("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				p("div", {
					className: "mb-3 flex items-center gap-3",
					children: [p("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}, void 0, !1, {
						fileName: $,
						lineNumber: 55,
						columnNumber: 13
					}, this), p("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					}, void 0, !1, {
						fileName: $,
						lineNumber: 58,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 54,
					columnNumber: 11
				}, this),
				p("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}, void 0, !1, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				p("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}, void 0, !1, {
					fileName: $,
					lineNumber: 63,
					columnNumber: 11
				}, this),
				p("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e._("blog-list.readMore")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 64,
					columnNumber: 11
				}, this)
			]
		}, t.title, !0, {
			fileName: $,
			lineNumber: 50,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
function Tn() {
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
function En(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Dn(e, t) {
	let n = Cn();
	return n.activate(e), n;
}
var On = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/AppProviders.tsx";
function kn({ children: e, locale: t, messages: n }) {
	let o = a(() => Dn(t, n), [t, n]), [c] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		En("AppRoot", c);
	}, [c]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Tn();
	}, []), p(Sn, {
		i18n: o,
		children: e
	}, void 0, !1, {
		fileName: On,
		lineNumber: 39,
		columnNumber: 7
	}, this);
}
var An = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function jn({ children: e }) {
	return p(kn, {
		locale: "en",
		messages: {},
		children: e
	}, void 0, !1, {
		fileName: An,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var Mn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/blog/BlogList.wrapper.tsx";
function Nn() {
	return p(jn, { children: p(wn, {}, void 0, !1, {
		fileName: Mn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Mn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Nn as default };

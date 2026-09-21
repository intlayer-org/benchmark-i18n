import { createContext as e, useCallback as t, useContext as n, useEffect as r, useId as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "../../../.intlayer/dictionary/header.json";
import ee from "../../../.intlayer/dictionary/open-positions.json";
import u from "../../../.intlayer/dictionary/careers-benefits.json";
import d from "../../../.intlayer/dictionary/settings.json";
import te from "../../../.intlayer/dictionary/footer.json";
import ne from "../../../.intlayer/dictionary/results-table.json";
import re from "../../../.intlayer/dictionary/settings-header.json";
import ie from "../../../.intlayer/dictionary/contact-form.json";
import ae from "../../../.intlayer/dictionary/contact-header.json";
import oe from "../../../.intlayer/dictionary/about-grid.json";
import se from "../../../.intlayer/dictionary/pricing-tiers.json";
import ce from "../../../.intlayer/dictionary/mockBanner.json";
import le from "../../../.intlayer/dictionary/theme-toggle.json";
import ue from "../../../.intlayer/dictionary/about-header.json";
import de from "../../../.intlayer/dictionary/pricing-header.json";
import fe from "../../../.intlayer/dictionary/faq-header.json";
import pe from "../../../.intlayer/dictionary/blog-header.json";
import me from "../../../.intlayer/dictionary/team-header.json";
import he from "../../../.intlayer/dictionary/faq-list.json";
import ge from "../../../.intlayer/dictionary/careers-header.json";
import _e from "../../../.intlayer/dictionary/products-header.json";
import ve from "../../../.intlayer/dictionary/what-we-measure.json";
import ye from "../../../.intlayer/dictionary/products.json";
import be from "../../../.intlayer/dictionary/blog-list.json";
import xe from "../../../.intlayer/dictionary/understanding-impact.json";
import Se from "../../../.intlayer/dictionary/team.json";
import Ce from "../../../.intlayer/dictionary/why-it-matters.json";
import we from "../../../.intlayer/dictionary/hero.json";
import { jsx as f, jsxs as Te } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var Ee = class {
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
}, De = (e, t) => {
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
}, Oe = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, m = (e, t) => {
	let n = De(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return De(n, t);
	}
}, ke = (e) => {
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
}, h = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ke).join("") : String(e ?? ""), Ae = "translation", g = "enumeration", _ = "plural", v = "insertion", je = "object", Me = "array", y = "markdown", b = "html", x = "gender", S = "select", C = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
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
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, T = (e) => C(g, e), Ne = (e) => C(x, e), Pe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, E = (e) => {
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
}, D = (e, t) => C(b, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Le(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return E(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => E(await e)), typeof n == "string") return E(n);
	try {
		return E(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), O = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, k = (e) => C(v, e, { fields: (() => {
	if (typeof e == "string") return O(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => O(await e)), typeof t == "string") return O(t);
	try {
		return O(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Re = (e) => C(_, e), ze = (e, t) => C(S, e, { variable: t }), Be = (e) => {
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
}, A = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : k(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
		if (t.type === "argument") return t.format ? k(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : k(`{{${t.name}}}`);
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
					e[i] = A(a);
				}
				return e.__intlayer_icu_var = t.name, T(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Re(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = A(r);
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
				e[i] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, T(e);
		}
	}
	return e.map((e) => A([e]));
}, Ve = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return A(Be(e));
		} catch {
			return e;
		}
	}
}, He = (e) => w(e, {
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
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], j = {
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
}, M = {
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
}, Ke = 50, N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Set(), qe = (e) => {
	P.has(e) || (P.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function F(e, t, n) {
	let r = t ?? j?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = N.get(a);
	o || (o = /* @__PURE__ */ new Map(), N.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ke && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Xe = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, Ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, I = [
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
}, R = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? F("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? F("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : F("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return F("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Qe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? R(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : R(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), z = (e, t) => e[t] ?? e.count ?? e.n, B = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Qe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return B(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(B(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return B(r[v], t, n);
	if (r.nodeType === "html") return B(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[_];
		return B(Xe(e, Number(z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[g], i = I.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) I.includes(t) || (o[t] = n);
		let s = z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return B(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[S], i = z(t, typeof r.variable == "string" ? r.variable : "value");
		return B(Ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[x];
		return B(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, $e = (e, t = {}, n = "en") => {
	let r = B(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, et = ((e) => (t, n = {}, r = "en") => $e(typeof t == "string" ? e(t) : t, n, r))(He), tt = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, nt = class extends Ee {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Oe(t));
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
		let { dictionaryKey: t, remainder: n } = tt(e), r = this._boundDictionaries[t];
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
		return (c.kind === "node" ? $e(c.node, o, s) : et(c.message, o, s)) ?? i;
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
}, rt = e(null), it = /* @__PURE__ */ new WeakMap(), at = 0, ot = (e) => {
	if (!e) return "base";
	let t = it.get(e);
	if (t) return t;
	at += 1;
	let n = `p${at}`;
	return it.set(e, n), n;
}, st = 256, V = /* @__PURE__ */ new WeakMap(), ct = (e) => typeof e == "object" && !!e, lt = (e, t, n) => `${e}_${t}_${ot(n)}`, ut = (e, t) => {
	if (!ct(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!ct(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= st && r.clear(), r.set(t, n), n;
}, dt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", ft = /[^A-Za-z0-9._&=-]/g, pt = /[^A-Za-z0-9._-]/g, mt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, mt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, ht = (e) => e === void 0 ? U : typeof e == "string" ? W(e, ft) : Object.keys(e).sort().map((t) => `${W(t, pt)}=${W(String(e[t]), pt)}`).join("&"), gt = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(ht) : [ht(e)], _t = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, vt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, yt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, bt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, xt = (e, t) => {
	if (!yt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : _t(gt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => vt(e, n, t, s)).map((t) => bt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, St = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ct = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? gt(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", wt = "\x1B[34m", Tt = "\x1B[31m", Et = "\x1B[32m", Dt = "\x1B[38;5;3m", Ot = (e) => e, kt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ot(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, At = (e, t) => (n, r) => kt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, jt = (e, t = Dt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", Tt), K("✓", Et), K("⏲", wt);
var Mt = {
	header: l,
	"open-positions": ee,
	"careers-benefits": u,
	settings: d,
	footer: te,
	"results-table": ne,
	"settings-header": re,
	"contact-form": ie,
	"contact-header": ae,
	"about-grid": oe,
	"pricing-tiers": se,
	mockBanner: ce,
	"theme-toggle": le,
	"about-header": ue,
	"pricing-header": de,
	"faq-header": fe,
	"blog-header": pe,
	"team-header": me,
	"faq-list": he,
	"careers-header": ge,
	"products-header": _e,
	"what-we-measure": ve,
	products: ye,
	"blog-list": be,
	"understanding-impact": xe,
	team: Se,
	"why-it-matters": Ce,
	hero: we
}, Nt = () => Mt, Pt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ft = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Pt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ft(e ? `${e}.${String(n)}` : String(n)) }), It = /* @__PURE__ */ new Set(), Lt = (e, t, n) => {
	let r = Nt()[e];
	return r ? en(r, t, n) : (It.has(e) || (At({ log: Ge })(typeof window > "u" ? `Dictionary ${jt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), It.add(e)), Ft(e));
}, Rt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, zt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Rt(e) && Rt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : zt(e[r], t[r]));
		return n;
	}
	return e;
}, Bt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => zt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Vt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[b] : e[y];
}, Ht = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? b : y;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ut = (e, t, n, r, i) => {
	let a = Ht(e, dt(Vt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Wt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
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
		return Bt(o, e, t);
	}
}, Gt = J, Kt = J, qt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Ut(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dt(i, e);
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
}, Jt = J, Yt = J;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Xt = (e) => J, Zt = J, Qt = (e, t = !0) => [
	Wt(e ?? j.defaultLocale, t ? j.defaultLocale : void 0),
	Gt,
	Kt,
	qt,
	Xt(e ?? j.defaultLocale),
	Zt,
	Jt,
	Yt
], $t = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), en = (e, t, n) => {
	let { locale: r, selector: i } = St(t), a = lt(r ?? j.defaultLocale, Ct(i), n), o = ut(e, a);
	if (o.hit) return o.content;
	let s = n ?? Qt(r), c = xt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return $t(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, tn = () => {
	try {
		return Object.keys(Nt());
	} catch {
		return [];
	}
}, nn = (e, t) => {
	let n = tn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Lt(e, t);
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
}, rn = (e) => {
	let t = {};
	for (let n of tn()) try {
		Object.assign(t, Oe(Lt(n, e)));
	} catch {}
	return t;
}, an = () => ({
	lookup: nn,
	all: rn
}), on = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, sn = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = on(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, cn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ln = (e = Y) => {
	let { locales: t } = j;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!cn) for (let t = 0; t < (M.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(M.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, un = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !cn && M.storage.cookies) for (let n = 0; n < M.storage.cookies.length; n++) {
		let { name: r, attributes: i } = M.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: on(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, sn(r, e, i));
			} catch {}
		}
	}
}, X = ln(Y), dn = (e, t) => un(e, {
	...Y,
	isCookieEnabled: t
}), fn = () => {
	let { locale: e } = n(Z) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, pn = ({ children: e }) => (fn(), e), mn = () => {
	let { locale: e } = n(Z) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, hn = ({ children: e }) => (mn(), e), gn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, _n = (e, t = j?.locales, n = j?.defaultLocale) => {
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
	locale: X ?? j?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), vn = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: ee } = j ?? {}, [u, d] = c(e ?? X ?? t ?? ee);
	r(() => {
		e && e !== u && d(e);
	}, [e]), r(() => {
		gn();
	}, []);
	let te = a ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), dn(e, s);
		}
	}), ne = _n(u);
	return f(Z.Provider, {
		value: {
			locale: ne,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, yn = ({ children: e, ...t }) => Te(vn, {
	...t,
	children: [
		f(pn, {}),
		f(hn, {}),
		e
	]
}), { defaultLocale: bn, locales: Q } = j ?? {}, xn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Z) ?? {};
	return {
		locale: i,
		defaultLocale: bn,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), dn(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, Sn = () => {
	let e = n(rt), { locale: t } = xn(), r = o(() => {
		let e = new nt({
			locale: t,
			registry: an()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, Cn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = c(() => i(e)), [s, l] = c(e.locale);
	return r(() => (o(i(e)), l(e.locale), e.on("change", () => {
		o(i(e)), l(e.locale);
	})), [e]), f(rt.Provider, {
		value: a,
		children: f(yn, {
			locale: s,
			children: n
		})
	});
}, wn = (e) => new nt({
	...e,
	registry: an()
});
wn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/contact/ContactForm.tsx";
function Tn() {
	let { i18n: e } = Sn(), t = i(), n = i(), r = i(), a = i();
	return p("form", {
		className: "space-y-6",
		children: [
			p("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [p("div", { children: [p("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 18,
					columnNumber: 11
				}, this), p("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e._("contact-form.yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 24,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 17,
					columnNumber: 9
				}, this), p("div", { children: [p("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e._("contact-form.email")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 31,
					columnNumber: 11
				}, this), p("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 37,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 30,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.topic")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 46,
				columnNumber: 9
			}, this), p("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					p("option", { children: e._("contact-form.bugReport") }, void 0, !1, {
						fileName: $,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					p("option", { children: e._("contact-form.newBenchmarkIdea") }, void 0, !1, {
						fileName: $,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					p("option", { children: e._("contact-form.methodologyQuestion") }, void 0, !1, {
						fileName: $,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					p("option", { children: e._("contact-form.contribution") }, void 0, !1, {
						fileName: $,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					p("option", { children: e._("contact-form.other") }, void 0, !1, {
						fileName: $,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 52,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e._("contact-form.message")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 64,
				columnNumber: 9
			}, this), p("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e._("contact-form.describeYourQuestionOrIdea")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 70,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			p("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e._("contact-form.sendMessage")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 77,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
function En() {
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
function Dn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function On(e, t) {
	let n = wn();
	return n.activate(e), n;
}
var kn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/AppProviders.tsx";
function An({ children: e, locale: t, messages: n }) {
	let i = o(() => On(t, n), [t, n]), [s] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Dn("AppRoot", s);
	}, [s]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		En();
	}, []), p(Cn, {
		i18n: i,
		children: e
	}, void 0, !1, {
		fileName: kn,
		lineNumber: 39,
		columnNumber: 7
	}, this);
}
var jn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Mn({ children: e }) {
	return p(An, {
		locale: "en",
		messages: {},
		children: e
	}, void 0, !1, {
		fileName: jn,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var Nn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/contact/ContactForm.wrapper.tsx";
function Pn() {
	return p(Mn, { children: p(Tn, {}, void 0, !1, {
		fileName: Nn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Nn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Pn as default };

import { createContext as e, useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import { useParams as o, usePathname as s, useRouter as c } from "next/navigation";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import d from "../.intlayer/dictionary/header.json";
import f from "../.intlayer/dictionary/open-positions.json";
import ee from "../.intlayer/dictionary/careers-benefits.json";
import p from "../.intlayer/dictionary/settings.json";
import m from "../.intlayer/dictionary/footer.json";
import h from "../.intlayer/dictionary/results-table.json";
import te from "../.intlayer/dictionary/settings-header.json";
import ne from "../.intlayer/dictionary/contact-form.json";
import g from "../.intlayer/dictionary/contact-header.json";
import _ from "../.intlayer/dictionary/about-grid.json";
import v from "../.intlayer/dictionary/pricing-tiers.json";
import re from "../.intlayer/dictionary/mockBanner.json";
import ie from "../.intlayer/dictionary/theme-toggle.json";
import ae from "../.intlayer/dictionary/about-header.json";
import oe from "../.intlayer/dictionary/pricing-header.json";
import se from "../.intlayer/dictionary/faq-header.json";
import ce from "../.intlayer/dictionary/blog-header.json";
import le from "../.intlayer/dictionary/team-header.json";
import ue from "../.intlayer/dictionary/faq-list.json";
import de from "../.intlayer/dictionary/careers-header.json";
import fe from "../.intlayer/dictionary/products-header.json";
import pe from "../.intlayer/dictionary/what-we-measure.json";
import me from "../.intlayer/dictionary/products.json";
import he from "../.intlayer/dictionary/blog-list.json";
import ge from "../.intlayer/dictionary/understanding-impact.json";
import _e from "../.intlayer/dictionary/team.json";
import ve from "../.intlayer/dictionary/why-it-matters.json";
import ye from "../.intlayer/dictionary/hero.json";
var be = e(null), xe = class {
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
}, Se = (e, t) => {
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
}, Ce = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, y = (e, t) => {
	let n = Se(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Se(n, t);
	}
}, we = (e) => {
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
			i.push(`${t} {${Te(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Te = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(we).join("") : String(e ?? ""), Ee = "translation", b = "enumeration", x = "plural", De = "condition", S = "insertion", Oe = "object", ke = "array", C = "markdown", w = "html", T = "gender", E = "select", D = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: ke,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Oe,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e) => D(b, e), Ae = (e) => D(T, e), je = (e) => {
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
		let o = je(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Me = /* @__PURE__ */ new Set([
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
]), Ne = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Pe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ne)) {
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
				let e = Me.has(i.toLowerCase());
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
}, M = (e, t) => D(w, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Pe(e);
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
}, P = (e) => D(S, e, { fields: (() => {
	if (typeof e == "string") return N(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => N(await e)), typeof t == "string") return N(t);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Fe = (e) => D(x, e), Ie = (e, t) => D(E, e, { variable: t }), Le = (e) => {
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
}, F = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t?.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = F(a);
				}
				return e.__intlayer_icu_var = t.name, A(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = F(i);
			}
			return Fe(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = F(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ae({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ie(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = F(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, A(e);
		}
	}
	return e.map((e) => F([e]));
}, Re = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return F(Le(e));
		} catch {
			return e;
		}
	}
}, ze = (e) => k(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Re
	}]
}), Be = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ve = (e, t) => e[Be(e, t) ?? "fallback"], I = {
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
}, L = {
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
}, He = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ue = 50, R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Set(), We = (e) => {
	z.has(e) || (z.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ge = {
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
}, Ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (We(e), Ge[e]);
};
function B(e, t, n) {
	let r = t ?? I?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = R.get(a);
	o || (o = /* @__PURE__ */ new Map(), R.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var qe = (e, t, n) => e[B("PluralRules", n).select(t)] ?? e.other, Je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, V = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], H = (e, t) => {
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
			return n === "percent" ? B("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? B("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : B("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return B("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Xe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : i ? Ye(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : Ye(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = H(t, n);
	return r === void 0 ? e : String(r);
}), U = (e, t) => e[t] ?? e.count ?? e.n, W = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Xe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return W(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(W(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return W(r[S], t, n);
	if (r.nodeType === "html") return W(r[w], t, n);
	if (r.nodeType === "plural") {
		let e = r[x];
		return W(qe(e, Number(U(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[b], i = V.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) V.includes(t) || (o[t] = n);
		let s = U(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = B("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return W(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[E], i = U(t, typeof r.variable == "string" ? r.variable : "value");
		return W(Je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[T];
		return W(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, G = (e, t = {}, n = "en") => {
	let r = W(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ze = ((e) => (t, n = {}, r = "en") => G(typeof t == "string" ? e(t) : t, n, r))(ze), Qe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, $e = class extends xe {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Ce(t));
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
		let { dictionaryKey: t, remainder: n } = Qe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = y(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = y(t, e);
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
			let t = y(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Te(t)
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
		return (c.kind === "node" ? G(c.node, o, s) : Ze(c.message, o, s)) ?? i;
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
}, et = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, tt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = et(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, nt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var K = {
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
}, rt = (e = K) => {
	let { locales: t } = I;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!nt) for (let t = 0; t < (L.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(L.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, it = !1, at, ot = () => typeof window > "u" ? rt(K) : (it ||= (at = rt(K), !0), at), st = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (it = !1, !nt && L.storage.cookies)) for (let n = 0; n < L.storage.cookies.length; n++) {
		let { name: r, attributes: i } = L.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: et(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, tt(r, e, i));
			} catch {}
		}
	}
}, ct = /* @__PURE__ */ new WeakMap(), lt = 0, ut = (e) => {
	if (!e) return "base";
	let t = ct.get(e);
	if (t) return t;
	lt += 1;
	let n = `p${lt}`;
	return ct.set(e, n), n;
}, dt = 256, q = /* @__PURE__ */ new WeakMap(), ft = (e) => typeof e == "object" && !!e, pt = (e, t, n) => `${e}_${t}_${ut(n)}`, mt = (e, t) => {
	if (!ft(e)) return { hit: !1 };
	let n = q.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, J = (e, t, n) => {
	if (!ft(e)) return n;
	let r = q.get(e);
	return r || (r = /* @__PURE__ */ new Map(), q.set(e, r)), r.size >= dt && r.clear(), r.set(t, n), n;
}, ht = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Y = "\x1B[0m", gt = "\x1B[34m", _t = "\x1B[31m", vt = "\x1B[32m", yt = "\x1B[38;5;3m", bt = (e) => e, xt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = bt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, St = (e, t) => (n, r) => xt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), X = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Y : n : Y}` : e, Ct = (e, t = yt, n = Y) => [e].flat().map((e) => X(e, t, n)).join(", ");
X("✗", _t), X("✓", vt), X("⏲", gt);
var wt = {
	header: d,
	"open-positions": f,
	"careers-benefits": ee,
	settings: p,
	footer: m,
	"results-table": h,
	"settings-header": te,
	"contact-form": ne,
	"contact-header": g,
	"about-grid": _,
	"pricing-tiers": v,
	mockBanner: re,
	"theme-toggle": ie,
	"about-header": ae,
	"pricing-header": oe,
	"faq-header": se,
	"blog-header": ce,
	"team-header": le,
	"faq-list": ue,
	"careers-header": de,
	"products-header": fe,
	"what-we-measure": pe,
	products: me,
	"blog-list": he,
	"understanding-impact": ge,
	team: _e,
	"why-it-matters": ve,
	hero: ye
}, Tt = () => wt, Et = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Dt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Et.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Dt(e ? `${e}.${String(n)}` : String(n)) }), Ot = /* @__PURE__ */ new Set(), kt = (e, t, n) => {
	let r = Tt()[e];
	return r ? Zt(r, t, n) : (Ot.has(e) || (St({ log: He })(typeof window > "u" ? `Dictionary ${Ct(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ot.add(e)), Dt(e));
}, At = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, jt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !At(e) || !At(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? jt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Mt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => jt(e, t));
}, Z = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Nt = (e) => {
	if (typeof e == "string") return e;
	if (Z(e)) return e.nodeType === "html" ? e[w] : e[C];
}, Pt = (e, t) => {
	if (typeof e == "string") return t;
	if (Z(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ft = (e, t, n, r, i) => {
	let a = Pt(e, ht(Nt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, It = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Lt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Mt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ee,
				key: e
			}]
		});
	}
}, Rt = Q, zt = (e) => Q, Bt = Q, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Z(e),
			transform: (e, n, r) => {
				if (Z(e)) return (i) => Ft(e, i, n, t.plugins, r);
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
		return Wt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ht = [
	b,
	De,
	x,
	T,
	E
], Ut = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ht.includes(i)) return t;
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
		return !r && It(i) ? i(n) : i;
	};
}, Wt = (e, t) => typeof t == "function" && Ht.includes(e?.nodeType ?? "") ? (n) => Ut(e, t, n) : t, Gt = Q, Kt = Q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var qt = (e) => Q, Jt = Q, Yt = (e, t = !0) => [
	Lt(e ?? I.defaultLocale, t ? I.defaultLocale : void 0),
	Rt,
	zt(e ?? I.defaultLocale),
	Bt,
	Vt,
	qt(e ?? I.defaultLocale),
	Jt,
	Gt,
	Kt
].filter((e) => e !== Q), Xt = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), $ = /* @__PURE__ */ new WeakSet(), Zt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = pt(r ?? I.defaultLocale, "", n), o = mt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Yt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !$.has(e)
		};
		$.add(e);
		try {
			return Xt(e.content, t, s);
		} finally {
			t.eager && $.delete(e);
		}
	};
	return c === null ? J(e, a, null) : Array.isArray(c) ? J(e, a, c.map(l)) : J(e, a, l(c));
}, Qt = ot, $t = (e, t) => st(e, {
	...K,
	isCookieEnabled: t
}), en = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, tn = (e, t = I?.locales, n = I?.defaultLocale) => {
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
}, nn = e({
	get locale() {
		return Qt() ?? I?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), rn = ({ locale: e, defaultLocale: r, variant: o, children: s, setLocale: c, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: ee } = I ?? {}, [p, m] = a(() => e ?? Qt() ?? r ?? ee), [h, te] = a(e);
	e !== h && (te(e), e && e !== p && m(e)), n(() => {
		en();
	}, []);
	let ne = t((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), $t(e, d);
		}
	}, [
		p,
		f,
		d
	]), g = c ?? ne, _ = tn(p), v = i(() => ({
		locale: _,
		setLocale: g,
		variant: o,
		disableEditor: u
	}), [
		_,
		g,
		o,
		u
	]);
	return l(nn.Provider, {
		value: v,
		children: s
	});
}, an = ({ children: e, ...t }) => u(rn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), on = () => {
	try {
		return Object.keys(Tt());
	} catch {
		return [];
	}
}, sn = (e, t) => {
	let n = on(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return kt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = y(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = y(a(t), e);
		if (n !== void 0) return n;
	}
}, cn = (e) => {
	let t = {};
	for (let n of on()) try {
		Object.assign(t, Ce(kt(n, e)));
	} catch {}
	return t;
}, ln = () => ({
	lookup: sn,
	all: cn
}), un = (e) => new $e({
	...e,
	registry: ln()
});
un({ locale: "en" });
var dn = ({ i18n: e, defaultComponent: t, children: r }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [o, s] = a(() => i(e)), [c, u] = a(e.locale);
	return n(() => (s(i(e)), u(e.locale), e.on("change", () => {
		s(i(e)), u(e.locale);
	})), [e]), l(be.Provider, {
		value: o,
		children: l(an, {
			locale: c,
			children: r
		})
	});
}, fn = [
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
];
function pn(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function mn(e, t) {
	let n = un();
	return n.activate(e), n;
}
function hn() {
	let e = o().locale ?? "en", t = s(), n = c(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return l("div", {
		className: "flex items-center gap-2",
		children: l("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: fn.map((e) => l("option", {
				value: e,
				children: pn(e)
			}, e))
		})
	});
}
function gn() {
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
function _n(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function vn({ children: e, locale: t, messages: o }) {
	let s = i(() => mn(t, o), [t, o]), [c] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		_n("AppRoot", c);
	}, [c]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		gn();
	}, []), l(dn, {
		i18n: s,
		children: e
	});
}
function yn({ children: e }) {
	return l(vn, {
		locale: "en",
		messages: {},
		children: e
	});
}
function bn() {
	return l(yn, { children: l(hn, {}) });
}
export { bn as default };

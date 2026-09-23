import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "../.intlayer/dictionary/header.json";
import l from "../.intlayer/dictionary/open-positions.json";
import ee from "../.intlayer/dictionary/careers-benefits.json";
import u from "../.intlayer/dictionary/settings.json";
import d from "../.intlayer/dictionary/footer.json";
import te from "../.intlayer/dictionary/results-table.json";
import f from "../.intlayer/dictionary/settings-header.json";
import ne from "../.intlayer/dictionary/contact-form.json";
import re from "../.intlayer/dictionary/contact-header.json";
import ie from "../.intlayer/dictionary/about-grid.json";
import ae from "../.intlayer/dictionary/pricing-tiers.json";
import oe from "../.intlayer/dictionary/mockBanner.json";
import se from "../.intlayer/dictionary/theme-toggle.json";
import ce from "../.intlayer/dictionary/about-header.json";
import le from "../.intlayer/dictionary/pricing-header.json";
import ue from "../.intlayer/dictionary/faq-header.json";
import de from "../.intlayer/dictionary/blog-header.json";
import fe from "../.intlayer/dictionary/team-header.json";
import pe from "../.intlayer/dictionary/faq-list.json";
import me from "../.intlayer/dictionary/careers-header.json";
import he from "../.intlayer/dictionary/products-header.json";
import ge from "../.intlayer/dictionary/what-we-measure.json";
import _e from "../.intlayer/dictionary/products.json";
import ve from "../.intlayer/dictionary/blog-list.json";
import ye from "../.intlayer/dictionary/understanding-impact.json";
import be from "../.intlayer/dictionary/team.json";
import xe from "../.intlayer/dictionary/why-it-matters.json";
import Se from "../.intlayer/dictionary/hero.json";
import { jsx as p, jsxs as Ce } from "react/jsx-runtime";
import { useParams as we } from "next/navigation";
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
}, m = (e, t) => {
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
}, h = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = m(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return m(n, t);
	}
}, Ee = (e) => {
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
			i.push(`${t} {${_(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, _ = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Ee).join("") : String(e ?? ""), De = "translation", Oe = "enumeration", ke = "plural", v = "insertion", Ae = "object", je = "array", Me = "markdown", y = "html", Ne = "gender", Pe = "select", b = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: je,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, S = (e) => b(Oe, e), Fe = (e) => b(Ne, e), Ie = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, C = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ie(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Le = /* @__PURE__ */ new Set([
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
]), Re = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ze = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Re)) {
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
				let e = Le.has(i.toLowerCase());
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
}, w = (e, t) => b(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ze(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return C(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => C(await e)), typeof n == "string") return C(n);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), T = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, E = (e) => b(v, e, { fields: (() => {
	if (typeof e == "string") return T(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => T(await e)), typeof t == "string") return T(t);
	try {
		return T(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Be = (e) => b(ke, e), Ve = (e, t) => b(Pe, e, { variable: t }), He = (e) => {
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
}, D = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
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
					e[i] = D(a);
				}
				return e.__intlayer_icu_var = t.name, S(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Be(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = D(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Fe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ve(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, S(e);
		}
	}
	return e.map((e) => D([e]));
}, Ue = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return D(He(e));
		} catch {
			return e;
		}
	}
}, We = (e) => x(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ue
	}]
}), Ge = (e) => {
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
}, O = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
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
				return e.__intlayer_icu_var = t.name, S(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = O(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Be(e);
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
			].includes(e)) ? Fe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ve(e, t.name);
		}
	}
	return e.map((e) => O([e]));
}, Ke = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return O(Ge(e));
		} catch {
			return e;
		}
	}
}, qe = (e) => x(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Ke
	}]
}), Je = (e) => {
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
}, Ye = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(Je);
}, k = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return E(t);
}, Xe = (e) => {
	if (e.length === 1) return k(e[0]);
	let t = {};
	return e.length === 2 ? S({
		1: k(e[0]),
		fallback: k(e[1])
	}) : e.length === 3 ? S({
		0: k(e[0]),
		1: k(e[1]),
		fallback: k(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = k(n) : t[r.toString()] = k(n);
	}), t.__intlayer_vue_i18n_var = "count", S(t));
}, Ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return Xe(Ye(e));
		} catch {
			return e;
		}
	}
}, Qe = (e) => x(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Ze
	}]
}), $e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, et = (e, t) => e[$e(e, t) ?? "fallback"], A = {
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
}, tt = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, nt = 50, rt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Set(), at = (e) => {
	it.has(e) || (it.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ot = {
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
}, st = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (at(e), ot[e]);
};
function M(e, t, n) {
	let r = t ?? A?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = rt.get(a);
	o || (o = /* @__PURE__ */ new Map(), rt.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? st(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > nt && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ct = (e, t, n) => e[M("PluralRules", n).select(t)] ?? e.other, lt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ut = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], N = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, dt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? M("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? M("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : M("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return M("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ft = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : i ? dt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = N(t, r);
	return o === void 0 ? e : dt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = N(t, n);
	return r === void 0 ? e : String(r);
}), P = (e, t) => e[t] ?? e.count ?? e.n, F = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ft(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return F(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(F(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return F(r[v], t, n);
	if (r.nodeType === "html") return F(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ke];
		return F(ct(e, Number(P(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Oe], i = ut.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) ut.includes(t) || (o[t] = n);
		let s = P(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = M("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? et(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return F(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Pe], i = P(t, typeof r.variable == "string" ? r.variable : "value");
		return F(lt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ne];
		return F(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, pt = (e, t = {}, n = "en") => {
	let r = F(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, mt = (e) => (t, n = {}, r = "en") => pt(typeof t == "string" ? e(t) : t, n, r), ht = {
	icu: We,
	i18next: qe,
	"vue-i18n": Qe
}, gt = (e, t = {}, n = "en", r = "icu") => mt(ht[r])(e, t, n), I = class extends Te {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_dictionaryContent;
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
		return this._dictionaryContent !== void 0 && Object.assign(e, h(this._dictionaryContent)), {
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
	bindDictionaryContent(e) {
		return this._dictionaryContent = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	resolveTemplate(e) {
		if (this._dictionaryContent !== void 0) {
			let t = g(this._dictionaryContent, e);
			if (t !== void 0) return _(t);
		}
		let t = this._registry?.lookup(e, this._locale);
		if (t !== void 0) return t;
		let n = this._catalogs[this._locale];
		if (n) {
			let t = g(n, e);
			if (t !== void 0) return _(t);
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {};
		return gt(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, L = e(null), R = /* @__PURE__ */ new WeakMap(), z = 0, _t = (e) => {
	if (!e) return "base";
	let t = R.get(e);
	if (t) return t;
	z += 1;
	let n = `p${z}`;
	return R.set(e, n), n;
}, vt = 256, B = /* @__PURE__ */ new WeakMap(), V = (e) => typeof e == "object" && !!e, yt = (e, t, n) => `${e}_${t}_${_t(n)}`, bt = (e, t) => {
	if (!V(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!V(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= vt && r.clear(), r.set(t, n), n;
}, xt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", St = /[^A-Za-z0-9._&=-]/g, Ct = /[^A-Za-z0-9._-]/g, wt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, wt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Tt = (e) => e === void 0 ? U : typeof e == "string" ? W(e, St) : Object.keys(e).sort().map((t) => `${W(t, Ct)}=${W(String(e[t]), Ct)}`).join("&"), Et = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(Tt) : [Tt(e)], Dt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, Ot = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, kt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, At = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, jt = (e, t) => {
	if (!kt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : Dt(Et(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ot(e, n, t, s)).map((t) => At(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Mt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Nt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Et(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", Pt = "\x1B[34m", Ft = "\x1B[31m", It = "\x1B[32m", Lt = "\x1B[38;5;3m", Rt = (e) => e, zt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Rt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Bt = (e, t) => (n, r) => zt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, Vt = (e, t = Lt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", Ft), K("✓", It), K("⏲", Pt);
var Ht = {
	header: c,
	"open-positions": l,
	"careers-benefits": ee,
	settings: u,
	footer: d,
	"results-table": te,
	"settings-header": f,
	"contact-form": ne,
	"contact-header": re,
	"about-grid": ie,
	"pricing-tiers": ae,
	mockBanner: oe,
	"theme-toggle": se,
	"about-header": ce,
	"pricing-header": le,
	"faq-header": ue,
	"blog-header": de,
	"team-header": fe,
	"faq-list": pe,
	"careers-header": me,
	"products-header": he,
	"what-we-measure": ge,
	products: _e,
	"blog-list": ve,
	"understanding-impact": ye,
	team: be,
	"why-it-matters": xe,
	hero: Se
}, Ut = () => Ht, Wt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Gt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Wt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Gt(e ? `${e}.${String(n)}` : String(n)) }), Kt = /* @__PURE__ */ new Set(), qt = (e, t, n) => {
	let r = Ut()[e];
	return r ? dn(r, t, n) : (Kt.has(e) || (Bt({ log: tt })(typeof window > "u" ? `Dictionary ${Vt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Kt.add(e)), Gt(e));
}, Jt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Yt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Jt(e) && Jt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Yt(e[r], t[r]));
		return n;
	}
	return e;
}, Xt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Yt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Zt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[y] : e[Me];
}, Qt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? y : Me;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, $t = (e, t, n, r, i) => {
	let a = Qt(e, xt(Zt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, en = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: De,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Xt(o, e, t);
	}
}, tn = J, nn = J, rn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => $t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = xt(i, e);
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
}, an = J, on = J;
process.env.INTLAYER_OPTIMIZED_NESTING;
var sn = (e) => J, cn = J, ln = (e, t = !0) => [
	en(e ?? A.defaultLocale, t ? A.defaultLocale : void 0),
	tn,
	nn,
	rn,
	sn(e ?? A.defaultLocale),
	cn,
	an,
	on
], un = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), dn = (e, t, n) => {
	let { locale: r, selector: i } = Mt(t), a = yt(r ?? A.defaultLocale, Nt(i), n), o = bt(e, a);
	if (o.hit) return o.content;
	let s = n ?? ln(r), c = jt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return un(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, fn = () => {
	try {
		return Object.keys(Ut());
	} catch {
		return [];
	}
}, pn = (e, t) => {
	for (let n of fn()) {
		let r;
		try {
			r = qt(n, t);
		} catch {
			continue;
		}
		let i = g(r, e);
		if (i !== void 0) return _(i);
	}
}, mn = (e) => {
	let t = {};
	for (let n of fn()) try {
		Object.assign(t, h(qt(n, e)));
	} catch {}
	return t;
}, hn = () => ({
	lookup: pn,
	all: mn
}), gn = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _n = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = gn(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, vn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, yn = (e = Y) => {
	let { locales: t } = A;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!vn) for (let t = 0; t < (j.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(j.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bn = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !vn && j.storage.cookies) for (let n = 0; n < j.storage.cookies.length; n++) {
		let { name: r, attributes: i } = j.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: gn(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _n(r, e, i));
			} catch {}
		}
	}
}, X = yn(Y), xn = (e, t) => bn(e, {
	...Y,
	isCookieEnabled: t
}), Sn = () => {
	let { locale: e } = n(Z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Cn = ({ children: e }) => (Sn(), e), wn = () => {
	let { locale: e } = n(Z) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Tn = ({ children: e }) => (wn(), e), En = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dn = (e, t = A?.locales, n = A?.defaultLocale) => {
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
	locale: X ?? A?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), On = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: ee } = A ?? {}, [u, d] = s(e ?? X ?? t ?? ee);
	r(() => {
		e && e !== u && d(e);
	}, [e]), r(() => {
		En();
	}, []);
	let te = a ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), xn(e, c);
		}
	}), f = Dn(u);
	return p(Z.Provider, {
		value: {
			locale: f,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, kn = ({ children: e, ...t }) => Ce(On, {
	...t,
	children: [
		p(Cn, {}),
		p(Tn, {}),
		e
	]
}), { defaultLocale: An, locales: Q } = A ?? {}, jn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Z) ?? {};
	return {
		locale: i,
		defaultLocale: An,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), xn(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, Mn = () => {
	let e = n(L), { locale: t } = jn(), r = a(() => {
		let e = new I({
			locale: t,
			registry: hn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, Nn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = s(() => i(e)), [c, l] = s(e.locale);
	return r(() => (o(i(e)), l(e.locale), e.on("change", () => {
		o(i(e)), l(e.locale);
	})), [e]), p(L.Provider, {
		value: a,
		children: p(kn, {
			locale: c,
			children: n
		})
	});
}, $ = (e) => new I({
	...e,
	registry: hn()
});
$({ locale: "en" });
var Pn = () => {
	let { _: e, i18n: t } = Mn();
	return t.locale, null;
};
function Fn() {
	let e = $();
	return e.activate("en"), p(Nn, {
		i18n: e,
		children: p(Pn, {})
	});
}
function In() {
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
function Ln(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Rn(e) {
	return {};
}
function zn(e, t) {
	let n = $();
	return n.activate(e), n;
}
function Bn({ children: e }) {
	let t = we().locale ?? "en", n = a(() => Rn(t), [t]), o = a(() => zn(t, n), [t, n]), [c] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Ln("AppRoot", c);
	}, [c]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		In();
	}, []), p(Nn, {
		i18n: o,
		children: e
	});
}
function Vn({ children: e }) {
	return p(Bn, { children: e });
}
function Hn() {
	return p(Vn, { children: p(Fn, {}) });
}
export { Hn as default };

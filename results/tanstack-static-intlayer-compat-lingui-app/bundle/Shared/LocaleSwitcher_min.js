import { createContext as e, useContext as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
import { useNavigate as o, useParams as s } from "@tanstack/react-router";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
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
			i.push(`${t} {${m(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, m = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ee).join("") : String(e ?? ""), te = "translation", ne = "enumeration", h = "plural", g = "insertion", re = "object", ie = "array", _ = "markdown", v = "html", y = "gender", ae = "select", b = (e, t, n) => ({
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
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: re,
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
}, S = (e) => b(ne, e), C = (e) => b(y, e), oe = (e) => {
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
}, T = (e, t) => b(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = le(e);
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
}, D = (e) => b(g, e, { fields: (() => {
	if (typeof e == "string") return E(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => E(await e)), typeof t == "string") return E(t);
	try {
		return E(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), O = (e) => b(h, e), k = (e, t) => b(ae, e, { variable: t }), ue = (e) => {
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
					e[i] = A(a);
				}
				return e.__intlayer_icu_var = t.name, S(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return O(e);
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
			].includes(e)) ? C({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : k(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, S(e);
		}
	}
	return e.map((e) => A([e]));
}, de = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return A(ue(e));
		} catch {
			return e;
		}
	}
}, fe = (e) => x(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...de
	}]
}), pe = (e) => {
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
}, j = (e) => {
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
					e[i] = j(a);
				}
				return e.__intlayer_icu_var = t.name, S(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = j(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return O(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = j(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? C({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : k(e, t.name);
		}
	}
	return e.map((e) => j([e]));
}, me = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return j(pe(e));
		} catch {
			return e;
		}
	}
}, he = (e) => x(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...me
	}]
}), ge = (e) => {
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
}, _e = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(ge);
}, M = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return D(t);
}, ve = (e) => {
	if (e.length === 1) return M(e[0]);
	let t = {};
	return e.length === 2 ? S({
		1: M(e[0]),
		fallback: M(e[1])
	}) : e.length === 3 ? S({
		0: M(e[0]),
		1: M(e[1]),
		fallback: M(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = M(n) : t[r.toString()] = M(n);
	}), t.__intlayer_vue_i18n_var = "count", S(t));
}, ye = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return ve(_e(e));
		} catch {
			return e;
		}
	}
}, be = (e) => x(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...ye
	}]
}), xe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Se = (e, t) => e[xe(e, t) ?? "fallback"], N = {
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
}, P = {
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
function F(e, t, n) {
	let r = t ?? N?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Te.get(a);
	o || (o = /* @__PURE__ */ new Map(), Te.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > we && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
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
}, Me = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
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
	if (typeof e == "string") return Me(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return B(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(B(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return B(r[g], t, n);
	if (r.nodeType === "html") return B(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[h];
		return B(Ae(e, Number(z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ne], i = I.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) I.includes(t) || (o[t] = n);
		let s = z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Se(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return B(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ae], i = z(t, typeof r.variable == "string" ? r.variable : "value");
		return B(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[y];
		return B(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ne = (e, t = {}, n = "en") => {
	let r = B(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Pe = (e) => (t, n = {}, r = "en") => Ne(typeof t == "string" ? e(t) : t, n, r), Fe = {
	icu: fe,
	i18next: he,
	"vue-i18n": be
}, Ie = (e, t = {}, n = "en", r = "icu") => Pe(Fe[r])(e, t, n), Le = class extends u {
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
		return this._dictionaryContent !== void 0 && Object.assign(e, f(this._dictionaryContent)), {
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
			let t = p(this._dictionaryContent, e);
			if (t !== void 0) return m(t);
		}
		let t = this._registry?.lookup(e, this._locale);
		if (t !== void 0) return t;
		let n = this._catalogs[this._locale];
		if (n) {
			let t = p(n, e);
			if (t !== void 0) return m(t);
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {};
		return Ie(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, Re = e(null), V = /* @__PURE__ */ new WeakMap(), H = 0, ze = (e) => {
	if (!e) return "base";
	let t = V.get(e);
	if (t) return t;
	H += 1;
	let n = `p${H}`;
	return V.set(e, n), n;
}, Be = 256, U = /* @__PURE__ */ new WeakMap(), Ve = (e) => typeof e == "object" && !!e, He = (e, t, n) => `${e}_${t}_${ze(n)}`, Ue = (e, t) => {
	if (!Ve(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!Ve(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= Be && r.clear(), r.set(t, n), n;
}, We = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", Ge = /[^A-Za-z0-9._&=-]/g, Ke = /[^A-Za-z0-9._-]/g, qe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, qe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Je = (e) => e === void 0 ? G : typeof e == "string" ? K(e, Ge) : Object.keys(e).sort().map((t) => `${K(t, Ke)}=${K(String(e[t]), Ke)}`).join("&"), Ye = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(Je) : [Je(e)], Xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, Ze = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Qe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, $e = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, et = (e, t) => {
	if (!Qe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : Xe(Ye(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ze(e, n, t, s)).map((t) => $e(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, tt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, nt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ye(n).join(",") : String(n)}`;
}).join("|") : "", q = "\x1B[0m", rt = "\x1B[34m", it = "\x1B[31m", at = "\x1B[32m", ot = "\x1B[38;5;3m", st = (e) => e, ct = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = st(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, lt = (e, t) => (n, r) => ct(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, ut = (e, t = ot, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", it), J("✓", at), J("⏲", rt);
var dt = () => ({}), ft = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), pt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ft.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : pt(e ? `${e}.${String(n)}` : String(n)) }), mt = /* @__PURE__ */ new Set(), ht = (e, t, n) => {
	let r = dt()[e];
	return r ? Mt(r, t, n) : (mt.has(e) || (lt({ log: Ce })(typeof window > "u" ? `Dictionary ${ut(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), mt.add(e)), pt(e));
}, gt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _t = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (gt(e) && gt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : _t(e[r], t[r]));
		return n;
	}
	return e;
}, vt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _t(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, yt = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[v] : e[_];
}, bt = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, xt = (e, t, n, r, i) => {
	let a = bt(e, We(yt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return vt(o, e, t);
	}
}, Ct = X, wt = X, Tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = We(i, e);
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
}, Et = X, Dt = X, Ot = (e) => X, kt = X, At = (e, t = !0) => [
	St(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
	Ct,
	wt,
	Tt,
	Ot(e ?? N.defaultLocale),
	kt,
	Et,
	Dt
], jt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Mt = (e, t, n) => {
	let { locale: r, selector: i } = tt(t), a = He(r ?? N.defaultLocale, nt(i), n), o = Ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? At(r), c = et(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return jt(e.content, t, s);
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, Nt = () => {
	try {
		return Object.keys(dt());
	} catch {
		return [];
	}
}, Pt = (e, t) => {
	for (let n of Nt()) {
		let r;
		try {
			r = ht(n, t);
		} catch {
			continue;
		}
		let i = p(r, e);
		if (i !== void 0) return m(i);
	}
}, Ft = (e) => {
	let t = {};
	for (let n of Nt()) try {
		Object.assign(t, f(ht(n, e)));
	} catch {}
	return t;
}, It = () => ({
	lookup: Pt,
	all: Ft
}), Lt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Rt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Lt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, zt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, Bt = (e = Z) => {
	let { locales: t } = N;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!zt) for (let t = 0; t < (P.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(P.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Vt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !zt && P.storage.cookies) for (let n = 0; n < P.storage.cookies.length; n++) {
		let { name: r, attributes: i } = P.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Lt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Rt(r, e, i));
			} catch {}
		}
	}
}, Ht = Bt(Z), Ut = (e, t) => Vt(e, {
	...Z,
	isCookieEnabled: t
}), Wt = () => {
	let { locale: e } = t(Q) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, Gt = ({ children: e }) => (Wt(), e), Kt = () => {
	let { locale: e } = t(Q) ?? {}, r = i(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, qt = ({ children: e }) => (Kt(), e), Jt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Yt = (e, t = N?.locales, n = N?.defaultLocale) => {
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
}, Q = e({
	locale: Ht ?? N?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Xt = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: o, disableEditor: s, isCookieEnabled: l }) => {
	let { locales: u, defaultLocale: d } = N ?? {}, [f, p] = a(e ?? Ht ?? t ?? d);
	n(() => {
		e && e !== f && p(e);
	}, [e]), n(() => {
		Jt();
	}, []);
	let ee = o ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Ut(e, l);
		}
	}), m = Yt(f);
	return c(Q.Provider, {
		value: {
			locale: m,
			setLocale: ee,
			variant: r,
			disableEditor: s
		},
		children: i
	});
}, Zt = ({ children: e, ...t }) => l(Xt, {
	...t,
	children: [
		c(Gt, {}),
		c(qt, {}),
		e
	]
}), Qt = ({ i18n: e, defaultComponent: t, children: r }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [o, s] = a(() => i(e)), [l, u] = a(e.locale);
	return n(() => (s(i(e)), u(e.locale), e.on("change", () => {
		s(i(e)), u(e.locale);
	})), [e]), c(Re.Provider, {
		value: o,
		children: c(Zt, {
			locale: l,
			children: r
		})
	});
}, $ = (e) => new Le({
	...e,
	registry: It()
});
$({ locale: "en" });
var $t = [
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
function en(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function tn(e, t) {
	let n = $();
	return n.activate(e), n;
}
function nn() {
	let e = s({ strict: !1 }).locale ?? "en", t = o(), n = (e) => {
		t({ params: (t) => ({
			...t,
			locale: e
		}) });
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: $t.map((e) => c("option", {
				value: e,
				children: en(e)
			}, e))
		})
	});
}
function rn({ children: e }) {
	let t = r(() => tn("en"), []);
	return c(Qt, {
		i18n: t,
		children: e
	});
}
function an() {
	return c(rn, { children: c(nn, {}) });
}
export { an as default };

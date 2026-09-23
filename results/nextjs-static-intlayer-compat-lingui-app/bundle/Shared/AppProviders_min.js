import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { useParams as s } from "next/navigation";
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
}, h = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(m).join("") : String(e ?? ""), ee = "translation", g = "enumeration", _ = "plural", v = "insertion", te = "object", ne = "array", re = "markdown", y = "html", ie = "gender", b = "select", x = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ne,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: te,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, C = (e) => x(g, e), w = (e) => x(ie, e), ae = (e) => {
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
		let o = ae(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, oe = /* @__PURE__ */ new Set([
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
]), se = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ce = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(se)) {
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
				let e = oe.has(i.toLowerCase());
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
}, E = (e, t) => x(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ce(e);
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
}, O = (e) => x(v, e, { fields: (() => {
	if (typeof e == "string") return D(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => D(await e)), typeof t == "string") return D(t);
	try {
		return D(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), le = (e) => x(_, e), ue = (e, t) => x(b, e, { variable: t }), de = (e) => {
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
				return e.__intlayer_icu_var = t.name, C(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return le(e);
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
			].includes(e)) ? w({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ue(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, C(e);
		}
	}
	return e.map((e) => k([e]));
}, fe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return k(de(e));
		} catch {
			return e;
		}
	}
}, pe = (e) => S(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...fe
	}]
}), me = (e) => {
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
}, A = (e) => {
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
					e[i] = A(a);
				}
				return e.__intlayer_icu_var = t.name, C(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return le(e);
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
			].includes(e)) ? w({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ue(e, t.name);
		}
	}
	return e.map((e) => A([e]));
}, he = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return A(me(e));
		} catch {
			return e;
		}
	}
}, ge = (e) => S(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...he
	}]
}), _e = (e) => {
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
}, ve = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(_e);
}, j = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return O(t);
}, ye = (e) => {
	if (e.length === 1) return j(e[0]);
	let t = {};
	return e.length === 2 ? C({
		1: j(e[0]),
		fallback: j(e[1])
	}) : e.length === 3 ? C({
		0: j(e[0]),
		1: j(e[1]),
		fallback: j(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = j(n) : t[r.toString()] = j(n);
	}), t.__intlayer_vue_i18n_var = "count", C(t));
}, be = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return ye(ve(e));
		} catch {
			return e;
		}
	}
}, xe = (e) => S(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...be
	}]
}), Se = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ce = (e, t) => e[Se(e, t) ?? "fallback"], M = {
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
}, N = {
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
}, we = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Te = 50, P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), Ee = (e) => {
	F.has(e) || (F.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, De = {
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
}, Oe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ee(e), De[e]);
};
function I(e, t, n) {
	let r = t ?? M?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = P.get(a);
	o || (o = /* @__PURE__ */ new Map(), P.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Oe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Te && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ke = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, Ae = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, L = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], R = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, z = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? I("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? I("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : I("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return I("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, je = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : i ? z(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : z(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = R(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return je(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[v], t, n);
	if (r.nodeType === "html") return V(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[_];
		return V(ke(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[g], i = L.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) L.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ce(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[b], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(Ae(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ie];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Me = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Ne = (e) => (t, n = {}, r = "en") => Me(typeof t == "string" ? e(t) : t, n, r), Pe = {
	icu: pe,
	i18next: ge,
	"vue-i18n": xe
}, Fe = (e, t = {}, n = "en", r = "icu") => Ne(Pe[r])(e, t, n), Ie = class extends u {
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
			if (t !== void 0) return h(t);
		}
		let t = this._registry?.lookup(e, this._locale);
		if (t !== void 0) return t;
		let n = this._catalogs[this._locale];
		if (n) {
			let t = p(n, e);
			if (t !== void 0) return h(t);
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {};
		return Fe(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, Le = e(null), H = /* @__PURE__ */ new WeakMap(), Re = 0, ze = (e) => {
	if (!e) return "base";
	let t = H.get(e);
	if (t) return t;
	Re += 1;
	let n = `p${Re}`;
	return H.set(e, n), n;
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
}, We = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", Ge = /[^A-Za-z0-9._&=-]/g, K = /[^A-Za-z0-9._-]/g, Ke = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, q = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ke);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, qe = (e) => e === void 0 ? G : typeof e == "string" ? q(e, Ge) : Object.keys(e).sort().map((t) => `${q(t, K)}=${q(String(e[t]), K)}`).join("&"), Je = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(qe) : [qe(e)], Ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, Xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ze = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Qe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, $e = (e, t) => {
	if (!Ze(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : Ye(Je(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Xe(e, n, t, s)).map((t) => Qe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, et = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, tt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Je(n).join(",") : String(n)}`;
}).join("|") : "", J = "\x1B[0m", nt = "\x1B[34m", rt = "\x1B[31m", it = "\x1B[32m", at = "\x1B[38;5;3m", ot = (e) => e, st = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ot(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ct = (e, t) => (n, r) => st(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), Y = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? J : n : J}` : e, lt = (e, t = at, n = J) => [e].flat().map((e) => Y(e, t, n)).join(", ");
Y("✗", rt), Y("✓", it), Y("⏲", nt);
var ut = {
	header: {
		key: "header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					products: "Products",
					pricing: "Pricing",
					team: "Team",
					careers: "Careers",
					faq: "FAQ",
					contact: "Contact",
					settings: "Settings",
					i18nBench: "i18n Bench",
					home: "Home",
					methodology: "Methodology",
					mockPages: "Mock Pages",
					goToGithub: "Go to GitHub",
					blog: "Blog"
				},
				fr: {
					products: "Produits",
					pricing: "Tarifs",
					team: "Équipe",
					careers: "Carrières",
					faq: "FAQ",
					contact: "Contact",
					settings: "Paramètres",
					i18nBench: "i18n Bench",
					home: "Accueil",
					methodology: "Méthodologie",
					mockPages: "Pages de test",
					goToGithub: "Aller sur GitHub",
					blog: "Blog"
				},
				es: {
					products: "Productos",
					pricing: "Precios",
					team: "Equipo",
					careers: "Carreras",
					faq: "FAQ",
					contact: "Contacto",
					settings: "Ajustes",
					i18nBench: "i18n Bench",
					home: "Inicio",
					methodology: "Metodología",
					mockPages: "Páginas de prueba",
					goToGithub: "Ir a GitHub",
					blog: "Blog"
				},
				de: {
					products: "Produkte",
					pricing: "Preise",
					team: "Team",
					careers: "Karriere",
					faq: "FAQ",
					contact: "Kontakt",
					settings: "Einstellungen",
					i18nBench: "i18n Bench",
					home: "Startseite",
					methodology: "Methodik",
					mockPages: "Testseiten",
					goToGithub: "Zu GitHub",
					blog: "Blog"
				},
				it: {
					products: "Prodotti",
					pricing: "Prezzi",
					team: "Team",
					careers: "Carriere",
					faq: "FAQ",
					contact: "Contatti",
					settings: "Impostazioni",
					i18nBench: "i18n Bench",
					home: "Home",
					methodology: "Metodologia",
					mockPages: "Pagine di test",
					goToGithub: "Vai su GitHub",
					blog: "Blog"
				},
				pt: {
					products: "Produtos",
					pricing: "Preços",
					team: "Equipe",
					careers: "Carreiras",
					faq: "FAQ",
					contact: "Contato",
					settings: "Configurações",
					i18nBench: "i18n Bench",
					home: "Início",
					methodology: "Metodologia",
					mockPages: "Páginas de teste",
					goToGithub: "Ir para GitHub",
					blog: "Blog"
				},
				zh: {
					products: "产品",
					pricing: "价格",
					team: "团队",
					careers: "职业生涯",
					faq: "常见问题",
					contact: "联系我们",
					settings: "设置",
					i18nBench: "i18n Bench",
					home: "首页",
					methodology: "方法论",
					mockPages: "模拟页面",
					goToGithub: "访问 GitHub",
					blog: "博客"
				},
				ja: {
					products: "製品",
					pricing: "料金",
					team: "チーム",
					careers: "採用情報",
					faq: "FAQ",
					contact: "お問い合わせ",
					settings: "設定",
					i18nBench: "i18n Bench",
					home: "ホーム",
					methodology: "方法論",
					mockPages: "モックページ",
					goToGithub: "GitHubへ",
					blog: "ブログ"
				},
				ko: {
					products: "제품",
					pricing: "요금",
					team: "팀",
					careers: "채용",
					faq: "FAQ",
					contact: "문의하기",
					settings: "설정",
					i18nBench: "i18n Bench",
					home: "홈",
					methodology: "방법론",
					mockPages: "모의 페이지",
					goToGithub: "GitHub으로 이동",
					blog: "블로그"
				},
				ru: {
					products: "Продукты",
					pricing: "Цены",
					team: "Команда",
					careers: "Карьера",
					faq: "FAQ",
					contact: "Контакт",
					settings: "Настройки",
					i18nBench: "i18n Bench",
					home: "Главная",
					methodology: "Методология",
					mockPages: "Тестовые страницы",
					goToGithub: "Перейти на GitHub",
					blog: "Блог"
				}
			}
		},
		localIds: [
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"open-positions": {
		key: "open-positions",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					applyNow: "Apply Now",
					buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
					engineering: "Engineering",
					fullTime: "Full-time",
					openPositions: "Open Positions",
					remote: "Remote",
					seniorFrontendEngineer: "Senior Frontend Engineer"
				},
				fr: {
					applyNow: "Postuler maintenant",
					buildAndMaintainOurBenchmarking: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement à l'aide de React, TypeScript et Vite.",
					engineering: "Ingénierie",
					fullTime: "Temps plein",
					openPositions: "Postes ouverts",
					remote: "Télétravail",
					seniorFrontendEngineer: "Ingénieur Frontend Senior"
				},
				es: {
					applyNow: "Aplicar ahora",
					buildAndMaintainOurBenchmarking: "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
					engineering: "Ingeniería",
					fullTime: "Tiempo completo",
					openPositions: "Posiciones abiertas",
					remote: "Remoto",
					seniorFrontendEngineer: "Ingeniero Frontend Senior"
				},
				de: {
					applyNow: "Jetzt bewerben",
					buildAndMaintainOurBenchmarking: "Erstellen und Verwalten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
					engineering: "Engineering",
					fullTime: "Vollzeit",
					openPositions: "Offene Stellen",
					remote: "Remote",
					seniorFrontendEngineer: "Senior Frontend Engineer"
				},
				it: {
					applyNow: "Candidati ora",
					buildAndMaintainOurBenchmarking: "Costruire e mantenere la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
					engineering: "Ingegneria",
					fullTime: "Tempo pieno",
					openPositions: "Posizioni aperte",
					remote: "Remoto",
					seniorFrontendEngineer: "Senior Frontend Engineer"
				},
				pt: {
					applyNow: "Candidatar-se agora",
					buildAndMaintainOurBenchmarking: "Construir e manter nossos dashboards de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
					engineering: "Engenharia",
					fullTime: "Tempo integral",
					openPositions: "Vagas abertas",
					remote: "Remoto",
					seniorFrontendEngineer: "Engenheiro Frontend Sênior"
				},
				zh: {
					applyNow: "立即申请",
					buildAndMaintainOurBenchmarking: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试控制面板及开发者工具。",
					engineering: "工程部",
					fullTime: "全职",
					openPositions: "开放职位",
					remote: "远程办公",
					seniorFrontendEngineer: "高级前端工程师"
				},
				ja: {
					applyNow: "今すぐ応募",
					buildAndMaintainOurBenchmarking: "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および維持します。",
					engineering: "エンジニアリング",
					fullTime: "正社員",
					openPositions: "募集中の職種",
					remote: "リモート",
					seniorFrontendEngineer: "シニアフロントエンドエンジニア"
				},
				ko: {
					applyNow: "지금 지원하기",
					buildAndMaintainOurBenchmarking: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드와 개발자 도구를 구축하고 유지 관리합니다.",
					engineering: "엔지니어링",
					fullTime: "정규직",
					openPositions: "채용 중인 포지션",
					remote: "원격 근무",
					seniorFrontendEngineer: "시니어 프론트엔드 엔지니어"
				},
				ru: {
					applyNow: "Подать заявку",
					buildAndMaintainOurBenchmarking: "Создание и поддержка наших дашбордов для бенчмаркинга и инструментов для разработчиков на React, TypeScript и Vite.",
					engineering: "Инженерия",
					fullTime: "Полная занятость",
					openPositions: "Открытые вакансии",
					remote: "Удаленная работа",
					seniorFrontendEngineer: "Старший фронтенд-инженер"
				}
			}
		},
		localIds: [
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"open-positions::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"careers-benefits": {
		key: "careers-benefits",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					twentyPercentTime: "20% time for OSS",
					competitivePay: "Competitive pay",
					openSourceTime: "Open source time",
					topOfMarketCompensation: "Top-of-market compensation"
				},
				fr: {
					twentyPercentTime: "20 % de temps pour l'OSS",
					competitivePay: "Salaire compétitif",
					openSourceTime: "Temps pour l'Open Source",
					topOfMarketCompensation: "Rémunération attractive"
				},
				es: {
					twentyPercentTime: "20% tiempo para OSS",
					competitivePay: "Pago competitivo",
					openSourceTime: "Tiempo para open source",
					topOfMarketCompensation: "Compensación competitiva"
				},
				de: {
					twentyPercentTime: "20% Zeit für OSS",
					competitivePay: "Wettbewerbsfähige Bezahlung",
					openSourceTime: "Open-Source-Zeit",
					topOfMarketCompensation: "Branchenführende Vergütung"
				},
				it: {
					twentyPercentTime: "20% di tempo per l'OSS",
					competitivePay: "Retribuzione competitiva",
					openSourceTime: "Tempo per l'open source",
					topOfMarketCompensation: "Retribuzione ai vertici del mercato"
				},
				pt: {
					twentyPercentTime: "20% do tempo para OSS",
					competitivePay: "Remuneração competitiva",
					openSourceTime: "Tempo para código aberto",
					topOfMarketCompensation: "Remuneração acima do mercado"
				},
				zh: {
					twentyPercentTime: "20% 开源贡献时间",
					competitivePay: "具有竞争力的薪酬",
					openSourceTime: "开源贡献时间",
					topOfMarketCompensation: "市场领先的奖酬"
				},
				ja: {
					twentyPercentTime: "OSSのための20%の時間",
					competitivePay: "競争力のある報酬",
					openSourceTime: "オープンソースの時間",
					topOfMarketCompensation: "市場トップクラスの報酬"
				},
				ko: {
					twentyPercentTime: "OSS를 위한 20%의 시간",
					competitivePay: "경쟁력 있는 급여",
					openSourceTime: "오픈 소스 활동 기회",
					topOfMarketCompensation: "시장 최고 수준의 보상"
				},
				ru: {
					twentyPercentTime: "20% времени на OSS",
					competitivePay: "Конкурентная зарплата",
					openSourceTime: "Время на Open Source",
					topOfMarketCompensation: "Зарплата выше рыночной"
				}
			}
		},
		localIds: [
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"careers-benefits::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	settings: {
		key: "settings",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					"preferences.english": "English",
					"preferences.french": "French",
					"preferences.german": "German",
					"preferences.spanish": "Spanish",
					"preferences.japanese": "Japanese",
					"preferences.chinese": "Chinese",
					"preferences.arabic": "Arabic",
					"apiAccess.title": "API Access",
					"apiAccess.apiKey": "API Key",
					"footer.cancel": "Cancel",
					"apiAccess.copy": "Copy",
					"preferences.darkMode": "Dark Mode",
					"preferences.defaultLanguage": "Default Language",
					"profile.displayName": "Display Name",
					"profile.email": "Email",
					"preferences.emailNotifications": "Email Notifications",
					"preferences.title": "Preferences",
					"profile.title": "Profile",
					"preferences.receiveWeeklyReports": "Receive weekly benchmark reports",
					"footer.saveChanges": "Save Changes",
					"preferences.useDarkScheme": "Use dark color scheme",
					"apiAccess.useKeyDescription": "Use this key to access the benchmarking API programmatically."
				},
				fr: {
					"preferences.english": "Anglais",
					"preferences.french": "Français",
					"preferences.german": "Allemand",
					"preferences.spanish": "Espagnol",
					"preferences.japanese": "Japonais",
					"preferences.chinese": "Chinois",
					"preferences.arabic": "Arabe",
					"apiAccess.title": "Accès API",
					"apiAccess.apiKey": "Clé API",
					"footer.cancel": "Annuler",
					"apiAccess.copy": "Copier",
					"preferences.darkMode": "Mode sombre",
					"preferences.defaultLanguage": "Langue par défaut",
					"profile.displayName": "Nom d'affichage",
					"profile.email": "E-mail",
					"preferences.emailNotifications": "Notifications par e-mail",
					"preferences.title": "Préférences",
					"profile.title": "Profil",
					"preferences.receiveWeeklyReports": "Recevoir des rapports hebdomadaires de benchmark",
					"footer.saveChanges": "Enregistrer les modifications",
					"preferences.useDarkScheme": "Utiliser le thème sombre",
					"apiAccess.useKeyDescription": "Utilisez cette clé pour accéder par programmation à l'API de benchmarking."
				},
				es: {
					"preferences.english": "Inglés",
					"preferences.french": "Francés",
					"preferences.german": "Alemán",
					"preferences.spanish": "Español",
					"preferences.japanese": "Japonés",
					"preferences.chinese": "Chino",
					"preferences.arabic": "Árabe",
					"apiAccess.title": "Acceso API",
					"apiAccess.apiKey": "Clave API",
					"footer.cancel": "Cancelar",
					"apiAccess.copy": "Copiar",
					"preferences.darkMode": "Modo oscuro",
					"preferences.defaultLanguage": "Idioma predeterminado",
					"profile.displayName": "Nombre visible",
					"profile.email": "Correo electrónico",
					"preferences.emailNotifications": "Notificaciones por correo",
					"preferences.title": "Preferencias",
					"profile.title": "Perfil",
					"preferences.receiveWeeklyReports": "Recibir informes semanales de benchmark",
					"footer.saveChanges": "Guardar cambios",
					"preferences.useDarkScheme": "Usar esquema de colores oscuros",
					"apiAccess.useKeyDescription": "Usa esta clave para acceder a la API de benchmarking de forma programática."
				},
				de: {
					"preferences.english": "Englisch",
					"preferences.french": "Französisch",
					"preferences.german": "Deutsch",
					"preferences.spanish": "Spanisch",
					"preferences.japanese": "Japanisch",
					"preferences.chinese": "Chinesisch",
					"preferences.arabic": "Arabisch",
					"apiAccess.title": "API-Zugriff",
					"apiAccess.apiKey": "API-Schlüssel",
					"footer.cancel": "Abbrechen",
					"apiAccess.copy": "Kopieren",
					"preferences.darkMode": "Dunkelmodus",
					"preferences.defaultLanguage": "Standardsprache",
					"profile.displayName": "Anzeigename",
					"profile.email": "E-Mail",
					"preferences.emailNotifications": "E-Mail-Benachrichtigungen",
					"preferences.title": "Einstellungen",
					"profile.title": "Profil",
					"preferences.receiveWeeklyReports": "Wöchentliche Benchmarking-Berichte erhalten",
					"footer.saveChanges": "Änderungen speichern",
					"preferences.useDarkScheme": "Dunkles Farbschema verwenden",
					"apiAccess.useKeyDescription": "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
				},
				it: {
					"preferences.english": "Inglese",
					"preferences.french": "Francese",
					"preferences.german": "Tedesco",
					"preferences.spanish": "Spagnolo",
					"preferences.japanese": "Giapponese",
					"preferences.chinese": "Cinese",
					"preferences.arabic": "Arabo",
					"apiAccess.title": "Accesso API",
					"apiAccess.apiKey": "Chiave API",
					"footer.cancel": "Annulla",
					"apiAccess.copy": "Copia",
					"preferences.darkMode": "Modalità scura",
					"preferences.defaultLanguage": "Lingua predefinita",
					"profile.displayName": "Nome visualizzato",
					"profile.email": "Email",
					"preferences.emailNotifications": "Notifiche email",
					"preferences.title": "Preferenze",
					"profile.title": "Profilo",
					"preferences.receiveWeeklyReports": "Ricevi rapporti settimanali sui benchmark",
					"footer.saveChanges": "Salva le modifiche",
					"preferences.useDarkScheme": "Usa lo schema di colori scuri",
					"apiAccess.useKeyDescription": "Usa questa chiave per accedere alle API di benchmarking in modo programmatico."
				},
				pt: {
					"preferences.english": "Inglês",
					"preferences.french": "Francês",
					"preferences.german": "Alemão",
					"preferences.spanish": "Espanhol",
					"preferences.japanese": "Japonês",
					"preferences.chinese": "Chinês",
					"preferences.arabic": "Árabe",
					"apiAccess.title": "Acesso à API",
					"apiAccess.apiKey": "Chave da API",
					"footer.cancel": "Cancelar",
					"apiAccess.copy": "Copiar",
					"preferences.darkMode": "Modo escuro",
					"preferences.defaultLanguage": "Idioma padrão",
					"profile.displayName": "Nome de exibição",
					"profile.email": "E-mail",
					"preferences.emailNotifications": "Notificações por e-mail",
					"preferences.title": "Preferências",
					"profile.title": "Perfil",
					"preferences.receiveWeeklyReports": "Receber relatórios semanais de benchmark",
					"footer.saveChanges": "Salvar alterações",
					"preferences.useDarkScheme": "Usar esquema de cores escuro",
					"apiAccess.useKeyDescription": "Use esta chave para acessar a API de benchmarking programaticamente."
				},
				zh: {
					"preferences.english": "英语",
					"preferences.french": "法语",
					"preferences.german": "德语",
					"preferences.spanish": "西班牙语",
					"preferences.japanese": "日语",
					"preferences.chinese": "中文",
					"preferences.arabic": "阿拉伯语",
					"apiAccess.title": "API 访问",
					"apiAccess.apiKey": "API 密钥",
					"footer.cancel": "取消",
					"apiAccess.copy": "复制",
					"preferences.darkMode": "暗黑模式",
					"preferences.defaultLanguage": "默认语言",
					"profile.displayName": "显示名称",
					"profile.email": "电子邮箱",
					"preferences.emailNotifications": "邮件通知",
					"preferences.title": "偏好设置",
					"profile.title": "个人资料",
					"preferences.receiveWeeklyReports": "接收每周基准测试报告",
					"footer.saveChanges": "保存更改",
					"preferences.useDarkScheme": "使用深色方案",
					"apiAccess.useKeyDescription": "使用此密钥以编程方式访问基准测试 API。"
				},
				ja: {
					"preferences.english": "英語",
					"preferences.french": "フランス語",
					"preferences.german": "ドイツ語",
					"preferences.spanish": "スペイン語",
					"preferences.japanese": "日本語",
					"preferences.chinese": "中国語",
					"preferences.arabic": "アラビア語",
					"apiAccess.title": "APIアクセス",
					"apiAccess.apiKey": "APIキー",
					"footer.cancel": "キャンセル",
					"apiAccess.copy": "コピー",
					"preferences.darkMode": "ダークモード",
					"preferences.defaultLanguage": "デフォルトの言語",
					"profile.displayName": "表示名",
					"profile.email": "メールアドレス",
					"preferences.emailNotifications": "メール通知",
					"preferences.title": "設定",
					"profile.title": "プロフィール",
					"preferences.receiveWeeklyReports": "毎週のベンチマークレポートを受け取る",
					"footer.saveChanges": "変更を保存",
					"preferences.useDarkScheme": "ダークカラースキームを使用する",
					"apiAccess.useKeyDescription": "ベンチマークAPIにプログラムでアクセスするには、このキーを使用してください。"
				},
				ko: {
					"preferences.english": "영어",
					"preferences.french": "프랑스어",
					"preferences.german": "독일어",
					"preferences.spanish": "스페인어",
					"preferences.japanese": "일본어",
					"preferences.chinese": "중국어",
					"preferences.arabic": "아랍어",
					"apiAccess.title": "API 액세스",
					"apiAccess.apiKey": "API 키",
					"footer.cancel": "취소",
					"apiAccess.copy": "복사",
					"preferences.darkMode": "다크 모드",
					"preferences.defaultLanguage": "기본 언어",
					"profile.displayName": "표시 이름",
					"profile.email": "이메일",
					"preferences.emailNotifications": "이메일 알림",
					"preferences.title": "환경 설정",
					"profile.title": "프로필",
					"preferences.receiveWeeklyReports": "주간 벤치마크 보고서 수신",
					"footer.saveChanges": "변경 사항 저장",
					"preferences.useDarkScheme": "다크 테마 사용",
					"apiAccess.useKeyDescription": "벤치마킹 API에 프로그래밍 방식으로 액세스하려면 이 키를 사용하세요."
				},
				ru: {
					"preferences.english": "Английский",
					"preferences.french": "Французский",
					"preferences.german": "Немецкий",
					"preferences.spanish": "Испанский",
					"preferences.japanese": "Японский",
					"preferences.chinese": "Китайский",
					"preferences.arabic": "Арабский",
					"apiAccess.title": "Доступ к API",
					"apiAccess.apiKey": "Ключ API",
					"footer.cancel": "Отмена",
					"apiAccess.copy": "Копировать",
					"preferences.darkMode": "Темная тема",
					"preferences.defaultLanguage": "Язык по умолчанию",
					"profile.displayName": "Отображаемое имя",
					"profile.email": "Электронная почта",
					"preferences.emailNotifications": "Email-уведомления",
					"preferences.title": "Предпочтения",
					"profile.title": "Профиль",
					"preferences.receiveWeeklyReports": "Получать еженедельные отчеты о бенчмарках",
					"footer.saveChanges": "Сохранить изменения",
					"preferences.useDarkScheme": "Использовать темную схему",
					"apiAccess.useKeyDescription": "Используйте этот ключ для программного доступа к API бенчмаркинга."
				}
			}
		},
		localIds: [
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"settings::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	footer: {
		key: "footer",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					github: "GitHub",
					methodology: "Methodology",
					contributing: "Contributing",
					anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
					resources: "Resources",
					contact: "Contact",
					builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				fr: {
					github: "GitHub",
					methodology: "Méthodologie",
					contributing: "Contribuer",
					anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
					resources: "Ressources",
					contact: "Contact",
					builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				es: {
					github: "GitHub",
					methodology: "Metodología",
					contributing: "Contribuir",
					anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
					resources: "Recursos",
					contact: "Contacto",
					builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				de: {
					github: "GitHub",
					methodology: "Methodik",
					contributing: "Beitragen",
					anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
					resources: "Ressourcen",
					contact: "Kontakt",
					builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				it: {
					github: "GitHub",
					methodology: "Metodologia",
					contributing: "Contribuire",
					anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
					resources: "Risorse",
					contact: "Contatti",
					builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				pt: {
					github: "GitHub",
					methodology: "Metodologia",
					contributing: "Contribuir",
					anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
					resources: "Recursos",
					contact: "Contato",
					builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				},
				zh: {
					github: "GitHub",
					methodology: "方法论",
					contributing: "贡献",
					anOpenSourceTestApplication: "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。",
					resources: "资源",
					contact: "联系我们",
					builtWith: "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。",
					i18nBenchmark: "i18n Benchmark"
				},
				ja: {
					github: "GitHub",
					methodology: "方法論",
					contributing: "貢献する",
					anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。",
					resources: "リソース",
					contact: "お問い合わせ",
					builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。",
					i18nBenchmark: "i18n Benchmark"
				},
				ko: {
					github: "GitHub",
					methodology: "방법론",
					contributing: "기여하기",
					anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
					resources: "리소스",
					contact: "문의하기",
					builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
					i18nBenchmark: "i18n Benchmark"
				},
				ru: {
					github: "GitHub",
					methodology: "Методология",
					contributing: "Вклад",
					anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
					resources: "Ресурсы",
					contact: "Контакт",
					builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
					i18nBenchmark: "i18n Benchmark"
				}
			}
		},
		localIds: [
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"footer::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"results-table": {
		key: "results-table",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					bundleSize: "Bundle Size",
					lookupTime: "Lookup Time",
					lazyLoading: "Lazy Loading",
					library: "Library",
					sampleResults: "Sample Results"
				},
				fr: {
					bundleSize: "Taille du bundle",
					lookupTime: "Temps de recherche",
					lazyLoading: "Chargement différé",
					library: "Bibliothèque",
					sampleResults: "Exemples de résultats"
				},
				es: {
					bundleSize: "Tamaño del bundle",
					lookupTime: "Tiempo de búsqueda",
					lazyLoading: "Carga diferida",
					library: "Biblioteca",
					sampleResults: "Resultados de muestra"
				},
				de: {
					bundleSize: "Bundle-Größe",
					lookupTime: "Suchzeit",
					lazyLoading: "Lazy Loading",
					library: "Bibliothek",
					sampleResults: "Beispielergebnisse"
				},
				it: {
					bundleSize: "Dimensione del bundle",
					lookupTime: "Tempo di ricerca",
					lazyLoading: "Caricamento lazy",
					library: "Libreria",
					sampleResults: "Risultati di esempio"
				},
				pt: {
					bundleSize: "Tamanho do bundle",
					lookupTime: "Tempo de consulta",
					lazyLoading: "Carregamento lento",
					library: "Biblioteca",
					sampleResults: "Resultados de amostra"
				},
				zh: {
					bundleSize: "包大小",
					lookupTime: "查找时间",
					lazyLoading: "延迟加载",
					library: "库",
					sampleResults: "样本结果"
				},
				ja: {
					bundleSize: "バンドルサイズ",
					lookupTime: "ルックアップ時間",
					lazyLoading: "遅延読み込み",
					library: "ライブラリ",
					sampleResults: "サンプル結果"
				},
				ko: {
					bundleSize: "번들 크기",
					lookupTime: "조회 시간",
					lazyLoading: "지연 로딩",
					library: "라이브러리",
					sampleResults: "샘플 결과"
				},
				ru: {
					bundleSize: "Размер бандла",
					lookupTime: "Время поиска",
					lazyLoading: "Ленивая загрузка",
					library: "Библиотека",
					sampleResults: "Примеры результатов"
				}
			}
		},
		localIds: [
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"results-table::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"settings-header": {
		key: "settings-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					subtitle: "Manage your account preferences and configuration.",
					title: "Settings"
				},
				fr: {
					subtitle: "Gérez vos paramètres de compte et vos préférences.",
					title: "Paramètres"
				},
				es: {
					subtitle: "Gestiona las preferencias de tu cuenta y la configuración.",
					title: "Ajustes"
				},
				de: {
					subtitle: "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.",
					title: "Einstellungen"
				},
				it: {
					subtitle: "Gestisci le preferenze del tuo account e la configurazione.",
					title: "Impostazioni"
				},
				pt: {
					subtitle: "Gerencie as configurações e preferências da sua conta.",
					title: "Configurações"
				},
				zh: {
					subtitle: "管理您的账户设置和偏好。",
					title: "设置"
				},
				ja: {
					subtitle: "アカウントの設定と構成を管理します。",
					title: "設定"
				},
				ko: {
					subtitle: "계정 설정 및 구성을 관리하세요.",
					title: "설정"
				},
				ru: {
					subtitle: "Управляйте настройками и предпочтениями своего аккаунта.",
					title: "Настройки"
				}
			}
		},
		localIds: [
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"settings-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"contact-form": {
		key: "contact-form",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					yourName: "Your name",
					email: "Email",
					topic: "Topic",
					bugReport: "Bug Report",
					newBenchmarkIdea: "New Benchmark Idea",
					methodologyQuestion: "Methodology Question",
					contribution: "Contribution",
					other: "Other",
					message: "Message",
					describeYourQuestionOrIdea: "Describe your question or idea...",
					sendMessage: "Send Message"
				},
				fr: {
					yourName: "Votre nom",
					email: "E-mail",
					topic: "Sujet",
					bugReport: "Rapport de bug",
					newBenchmarkIdea: "Nouvelle idée de benchmark",
					methodologyQuestion: "Question sur la méthodologie",
					contribution: "Contribution",
					other: "Autre",
					message: "Message",
					describeYourQuestionOrIdea: "Décrivez votre question ou idée...",
					sendMessage: "Envoyer le message"
				},
				es: {
					yourName: "Tu nombre",
					email: "Correo electrónico",
					topic: "Tema",
					bugReport: "Informe de bug",
					newBenchmarkIdea: "Nueva idea de benchmark",
					methodologyQuestion: "Pregunta sobre metodología",
					contribution: "Contribución",
					other: "Otro",
					message: "Mensaje",
					describeYourQuestionOrIdea: "Describe tu pregunta o idea...",
					sendMessage: "Enviar mensaje"
				},
				de: {
					yourName: "Ihr Name",
					email: "E-Mail",
					topic: "Thema",
					bugReport: "Fehlerbericht",
					newBenchmarkIdea: "Neue Benchmark-Idee",
					methodologyQuestion: "Frage zur Methodik",
					contribution: "Beitrag",
					other: "Sonstiges",
					message: "Nachricht",
					describeYourQuestionOrIdea: "Beschreiben Sie Ihre Frage oder Idee...",
					sendMessage: "Nachricht senden"
				},
				it: {
					yourName: "Il tuo nome",
					email: "Email",
					topic: "Argomento",
					bugReport: "Segnalazione di bug",
					newBenchmarkIdea: "Nuova idea di benchmark",
					methodologyQuestion: "Domanda sulla metodologia",
					contribution: "Contributo",
					other: "Altro",
					message: "Messaggio",
					describeYourQuestionOrIdea: "Descrivi la tua domanda o idea...",
					sendMessage: "Invia messaggio"
				},
				pt: {
					yourName: "Seu nome",
					email: "E-mail",
					topic: "Assunto",
					bugReport: "Relatório de bug",
					newBenchmarkIdea: "Nova ideia de benchmark",
					methodologyQuestion: "Pergunta sobre metodologia",
					contribution: "Contribuição",
					other: "Outros",
					message: "Mensagem",
					describeYourQuestionOrIdea: "Descreva sua pergunta ou ideia...",
					sendMessage: "Enviar mensagem"
				},
				zh: {
					yourName: "您的姓名",
					email: "电子邮箱",
					topic: "话题",
					bugReport: "Bug 报告",
					newBenchmarkIdea: "新基准测试想法",
					methodologyQuestion: "方法论问题",
					contribution: "贡献",
					other: "其他",
					message: "消息内容",
					describeYourQuestionOrIdea: "描述您的问题或想法...",
					sendMessage: "发送消息"
				},
				ja: {
					yourName: "お名前",
					email: "メールアドレス",
					topic: "トピック",
					bugReport: "バグ報告",
					newBenchmarkIdea: "新しいベンチマークのアイデア",
					methodologyQuestion: "方法論に関する質問",
					contribution: "貢献",
					other: "その他",
					message: "メッセージ",
					describeYourQuestionOrIdea: "質問やアイデアの詳細を記入してください...",
					sendMessage: "メッセージを送信"
				},
				ko: {
					yourName: "이름",
					email: "이메일",
					topic: "주제",
					bugReport: "버그 보고",
					newBenchmarkIdea: "새로운 벤치마크 아이디어",
					methodologyQuestion: "방법론 질문",
					contribution: "기여",
					other: "기타",
					message: "메시지",
					describeYourQuestionOrIdea: "질문이나 아이디어를 설명해주세요...",
					sendMessage: "메시지 보내기"
				},
				ru: {
					yourName: "Ваше имя",
					email: "Электронная почта",
					topic: "Тема",
					bugReport: "Отчет об ошибке",
					newBenchmarkIdea: "Новая идея для бенчмарка",
					methodologyQuestion: "Вопрос по методологии",
					contribution: "Вклад",
					other: "Другое",
					message: "Сообщение",
					describeYourQuestionOrIdea: "Опишите ваш вопрос или идею...",
					sendMessage: "Отправить сообщение"
				}
			}
		},
		localIds: [
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"contact-form::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"contact-header": {
		key: "contact-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					getInTouch: "Get in Touch",
					haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
				},
				fr: {
					getInTouch: "Contactez-nous",
					haveIdeasFoundABug: "Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à"
				},
				es: {
					getInTouch: "Ponte en contacto",
					haveIdeasFoundABug: "¿Tienes ideas, has encontrado un bug o quieres contribuir con un benchmark? Contáctanos en"
				},
				de: {
					getInTouch: "Kontakt aufnehmen",
					haveIdeasFoundABug: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
				},
				it: {
					getInTouch: "Mettiti in contatto",
					haveIdeasFoundABug: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
				},
				pt: {
					getInTouch: "Entre em contato",
					haveIdeasFoundABug: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
				},
				zh: {
					getInTouch: "联系我们",
					haveIdeasFoundABug: "有想法、发现了 Bug 或想贡献基准测试？请联系我们："
				},
				ja: {
					getInTouch: "お問い合わせ",
					haveIdeasFoundABug: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください："
				},
				ko: {
					getInTouch: "연락하기",
					haveIdeasFoundABug: "아이디어가 있거나 버그를 발견했나요? 아니면 벤치마크를 기여하고 싶으신가요? 다음 주소로 연락주세요."
				},
				ru: {
					getInTouch: "Свяжитесь с нами",
					haveIdeasFoundABug: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
				}
			}
		},
		localIds: [
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"contact-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"about-grid": {
		key: "about-grid",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodology\":\"Methodology\",\"theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\",\"whyThisExists\":\"Why This Exists\"},\"fr\":{\"choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"methodology\":\"Méthodologie\",\"theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\",\"whyThisExists\":\"Pourquoi cela existe\"},\"es\":{\"choosingAnI18nLibraryIs\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.\",\"methodology\":\"Metodología\",\"theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.\",\"whyThisExists\":\"Por qué existe\"},\"de\":{\"choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\",\"methodology\":\"Methodik\",\"theSame10PageApp\":\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\",\"whyThisExists\":\"Warum dieses Projekt existiert\"},\"it\":{\"choosingAnI18nLibraryIs\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\",\"whyThisExists\":\"Perché esiste questo progetto\"},\"pt\":{\"choosingAnI18nLibraryIs\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\",\"whyThisExists\":\"Por que isso existe\"},\"zh\":{\"choosingAnI18nLibraryIs\":\"选择 i18n 库是一项具有长期影响的架构决策。大多数比较侧重于 API 的易用性，但很少衡量性能成本：库为包增加了多少权重？加载数千个翻译键时它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"methodology\":\"方法论\",\"theSame10PageApp\":\"同一个 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕获语言切换期间的渲染时间。所有测试都在一致的硬件上在 CI 中运行，以确保结果的可复现性。\",\"whyThisExists\":\"为什么存在这个基准测试\"},\"ja\":{\"choosingAnI18nLibraryIs\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは実際に役立つのか、それとも単にコストをシフトさせているだけなのか？このベンチマークは、実際のデータでそれらの疑問に答えます。\",\"methodology\":\"方法論\",\"theSame10PageApp\":\"同じ10ページのアプリがライブラリごとに1回構築されます。rollup-plugin-visualizerを介してプロダクションバンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを使用してCI上で実行されます。\",\"whyThisExists\":\"なぜこれが存在するのか\"},\"ko\":{\"choosingAnI18nLibraryIs\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\",\"methodology\":\"방법론\",\"theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\",\"whyThisExists\":\"이것이 존재하는 이유\"},\"ru\":{\"choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodology\":\"Методология\",\"theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\",\"whyThisExists\":\"Почему это существует\"}}}"),
		localIds: [
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"about-grid::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"pricing-tiers": {
		key: "pricing-tiers",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"month\":\"/month\",\"price0\":\"$0\",\"price29\":\"$29\",\"librariesNumber\":\"3 libraries\",\"benchmarkRunPerDay\":\"5 benchmark runs/day\",\"allLibraries\":\"All libraries\",\"auditLogs\":\"Audit logs\",\"ciIntegration\":\"CI integration\",\"communitySupport\":\"Community support\",\"contactSales\":\"Contact Sales\",\"customPrice\":\"Custom\",\"customSlas\":\"Custom SLAs\",\"dedicatedAccountManager\":\"Dedicated account manager\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Everything in Pro\",\"forever\":\"forever\",\"getStarted\":\"Get Started\",\"historicalData\":\"Historical data\",\"onPremiseOption\":\"On-premise option\",\"prioritySupport\":\"Priority support\",\"privateResults\":\"Private results\",\"pro\":\"Pro\",\"publicResults\":\"Public results\",\"ssoSaml\":\"SSO & SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Training sessions\",\"unlimitedRuns\":\"Unlimited runs\"},\"fr\":{\"month\":\"/mois\",\"price0\":\"0 €\",\"price29\":\"29 €\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliothèques\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} benchmarks/jour\"},\"allLibraries\":\"Toutes les bibliothèques\",\"auditLogs\":\"Journaux d'audit\",\"ciIntegration\":\"Intégration CI\",\"communitySupport\":\"Support communautaire\",\"contactSales\":\"Contacter le service commercial\",\"customPrice\":\"Sur mesure\",\"customSlas\":\"SLA personnalisés\",\"dedicatedAccountManager\":\"Gestionnaire de compte dédié\",\"enterprise\":\"Entreprise\",\"everythingInPro\":\"Tout ce qui est inclus dans l'offre Pro\",\"forever\":\"à vie\",\"getStarted\":\"Démarrer\",\"historicalData\":\"Données historiques\",\"onPremiseOption\":\"Option de déploiement sur site\",\"prioritySupport\":\"Support prioritaire\",\"privateResults\":\"Résultats privés\",\"pro\":\"Pro\",\"publicResults\":\"Résultats publics\",\"ssoSaml\":\"SSO & SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Sessions de formation\",\"unlimitedRuns\":\"Tests illimités\"},\"es\":{\"month\":\"/mes\",\"price0\":\"$0\",\"price29\":\"$29\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} ejecuciones de benchmark/día\"},\"allLibraries\":\"Todas las bibliotecas\",\"auditLogs\":\"Registros de auditoría\",\"ciIntegration\":\"Integración CI\",\"communitySupport\":\"Soporte comunitario\",\"contactSales\":\"Contactar con ventas\",\"customPrice\":\"Personalizado\",\"customSlas\":\"SLAs personalizados\",\"dedicatedAccountManager\":\"Gestor de cuenta dedicado\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Todo lo de Pro\",\"forever\":\"para siempre\",\"getStarted\":\"Comenzar\",\"historicalData\":\"Datos históricos\",\"onPremiseOption\":\"Opción on-premise\",\"prioritySupport\":\"Soporte prioritario\",\"privateResults\":\"Resultados privados\",\"pro\":\"Pro\",\"publicResults\":\"Resultados públicos\",\"ssoSaml\":\"SSO y SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Sesiones de formación\",\"unlimitedRuns\":\"Ejecuciones ilimitadas\"},\"de\":{\"month\":\"/Monat\",\"price0\":\"0 €\",\"price29\":\"29 €\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} Bibliotheken\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} Benchmark-Durchläufe/Tag\"},\"allLibraries\":\"Alle Bibliotheken\",\"auditLogs\":\"Audit-Protokolle\",\"ciIntegration\":\"CI-Integration\",\"communitySupport\":\"Community-Support\",\"contactSales\":\"Vertrieb kontaktieren\",\"customPrice\":\"Individueller Preis\",\"customSlas\":\"Benutzerdefinierte SLAs\",\"dedicatedAccountManager\":\"Dedizierter Account-Manager\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Alles in Pro\",\"forever\":\"für immer\",\"getStarted\":\"Loslegen\",\"historicalData\":\"Historische Daten\",\"onPremiseOption\":\"On-Premise-Option\",\"prioritySupport\":\"Priorisierter Support\",\"privateResults\":\"Private Ergebnisse\",\"pro\":\"Pro\",\"publicResults\":\"Öffentliche Ergebnisse\",\"ssoSaml\":\"SSO & SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Schulungssitzungen\",\"unlimitedRuns\":\"Unbegrenzte Ausführungen\"},\"it\":{\"month\":\"/mese\",\"price0\":\"0 €\",\"price29\":\"29 €\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} librerie\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} benchmark eseguiti al giorno\"},\"allLibraries\":\"Tutte le librerie\",\"auditLogs\":\"Registri di audit\",\"ciIntegration\":\"Integrazione CI\",\"communitySupport\":\"Supporto della community\",\"contactSales\":\"Contatta l'ufficio vendite\",\"customPrice\":\"Personalizzato\",\"customSlas\":\"SLA personalizzati\",\"dedicatedAccountManager\":\"Account manager dedicato\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Tutto quello che c'è in Pro\",\"forever\":\"per sempre\",\"getStarted\":\"Per iniziare\",\"historicalData\":\"Dati storici\",\"onPremiseOption\":\"Opzione on-premise\",\"prioritySupport\":\"Supporto prioritario\",\"privateResults\":\"Risultati privati\",\"pro\":\"Pro\",\"publicResults\":\"Risultati pubblici\",\"ssoSaml\":\"SSO e SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Sessioni di formazione\",\"unlimitedRuns\":\"Esecuzioni illimitate\"},\"pt\":{\"month\":\"/mês\",\"price0\":\"R$ 0\",\"price29\":\"R$ 145\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} benchmarks por dia\"},\"allLibraries\":\"Todas as bibliotecas\",\"auditLogs\":\"Logs de auditoria\",\"ciIntegration\":\"Integração CI\",\"communitySupport\":\"Suporte da comunidade\",\"contactSales\":\"Contatar Vendas\",\"customPrice\":\"Preço personalizado\",\"customSlas\":\"SLAs personalizados\",\"dedicatedAccountManager\":\"Gerente de conta dedicado\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Tudo no Pro\",\"forever\":\"para sempre\",\"getStarted\":\"Começar\",\"historicalData\":\"Dados históricos\",\"onPremiseOption\":\"Opção on-premise\",\"prioritySupport\":\"Suporte prioritário\",\"privateResults\":\"Resultados privados\",\"pro\":\"Pro\",\"publicResults\":\"Resultados públicos\",\"ssoSaml\":\"SSO & SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Sessões de treinamento\",\"unlimitedRuns\":\"Execuções ilimitadas\"},\"zh\":{\"month\":\"/月\",\"price0\":\"¥ 0\",\"price29\":\"¥ 299\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 个库\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"每天 {{runs}} 次基准测试\"},\"allLibraries\":\"所有库\",\"auditLogs\":\"审计日志\",\"ciIntegration\":\"CI 集成\",\"communitySupport\":\"社区支持\",\"contactSales\":\"联系销售\",\"customPrice\":\"定制价格\",\"customSlas\":\"定制 SLA\",\"dedicatedAccountManager\":\"专属客户经理\",\"enterprise\":\"企业版\",\"everythingInPro\":\"Pro 版的所有功能\",\"forever\":\"永久\",\"getStarted\":\"开始使用\",\"historicalData\":\"历史数据\",\"onPremiseOption\":\"本地部署选项\",\"prioritySupport\":\"优先支持\",\"privateResults\":\"私有结果\",\"pro\":\"Pro\",\"publicResults\":\"公开结果\",\"ssoSaml\":\"SSO 和 SAML\",\"starter\":\"入门版 (Starter)\",\"trainingSessions\":\"培训课程\",\"unlimitedRuns\":\"无限次运行\"},\"ja\":{\"month\":\"／月\",\"price0\":\"¥0\",\"price29\":\"¥3,500\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 個のライブラリ\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"1日あたり {{runs}} 回のベンチマーク実行\"},\"allLibraries\":\"すべてのライブラリ\",\"auditLogs\":\"監査ログ\",\"ciIntegration\":\"CI統合\",\"communitySupport\":\"コミュニティサポート\",\"contactSales\":\"営業に問い合わせる\",\"customPrice\":\"カスタム\",\"customSlas\":\"カスタムSLA\",\"dedicatedAccountManager\":\"専任のアカウントマネージャー\",\"enterprise\":\"エンタープライズ\",\"everythingInPro\":\"Proプランのすべて\",\"forever\":\"永久\",\"getStarted\":\"始める\",\"historicalData\":\"履歴データ\",\"onPremiseOption\":\"オンプレミスオプション\",\"prioritySupport\":\"優先サポート\",\"privateResults\":\"非公開結果\",\"pro\":\"Pro\",\"publicResults\":\"公開結果\",\"ssoSaml\":\"SSO ＆ SAML\",\"starter\":\"スターター\",\"trainingSessions\":\"トレーニングセッション\",\"unlimitedRuns\":\"無制限の実行\"},\"ko\":{\"month\":\"/월\",\"price0\":\"₩0\",\"price29\":\"₩29.000\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}}개 라이브러리\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"하루 {{runs}}회 벤치마크 실행\"},\"allLibraries\":\"모든 라이브러리\",\"auditLogs\":\"감사 로그\",\"ciIntegration\":\"CI 통합\",\"communitySupport\":\"커뮤니티 지원\",\"contactSales\":\"영업팀에 문의\",\"customPrice\":\"맞춤형\",\"customSlas\":\"맞춤형 SLA\",\"dedicatedAccountManager\":\"전담 계정 관리자\",\"enterprise\":\"엔터프라이즈\",\"everythingInPro\":\"Pro의 모든 기능\",\"forever\":\"평생\",\"getStarted\":\"시작하기\",\"historicalData\":\"기록 데이터\",\"onPremiseOption\":\"온프레미스 옵션\",\"prioritySupport\":\"우선 지원\",\"privateResults\":\"비공개 결과\",\"pro\":\"Pro\",\"publicResults\":\"공개 결과\",\"ssoSaml\":\"SSO 및 SAML\",\"starter\":\"스타터\",\"trainingSessions\":\"교육 세션\",\"unlimitedRuns\":\"제한 없는 실행\"},\"ru\":{\"month\":\"/мес\",\"price0\":\"0 ₽\",\"price29\":\"3 500 ₽\",\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"Библиотек: {{libs}}\"},\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} прогонов бенчмарков в день\"},\"allLibraries\":\"Все библиотеки\",\"auditLogs\":\"Логи аудита\",\"ciIntegration\":\"Интеграция с CI\",\"communitySupport\":\"Сообщество поддержки\",\"contactSales\":\"Связаться с отделом продаж\",\"customPrice\":\"Индивидуальная цена\",\"customSlas\":\"Кастомные SLA\",\"dedicatedAccountManager\":\"Персональный менеджер\",\"enterprise\":\"Enterprise\",\"everythingInPro\":\"Всё, что есть в Pro\",\"forever\":\"навсегда\",\"getStarted\":\"Начать\",\"historicalData\":\"Исторические данные\",\"onPremiseOption\":\"Вариант локального развертывания\",\"prioritySupport\":\"Приоритетная поддержка\",\"privateResults\":\"Приватные результаты\",\"pro\":\"Pro\",\"publicResults\":\"Публичные результаты\",\"ssoSaml\":\"SSO и SAML\",\"starter\":\"Starter\",\"trainingSessions\":\"Обучающие сессии\",\"unlimitedRuns\":\"Неограниченное количество запусков\"}}}"),
		localIds: [
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"pricing-tiers::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	mockBanner: {
		key: "mockBanner",
		content: {
			nodeType: "translation",
			translation: {
				en: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
				fr: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
				es: "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.",
				de: "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.",
				it: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.",
				pt: "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.",
				zh: "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。",
				ja: "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。",
				ko: "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
				ru: "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой."
			}
		},
		localIds: [
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"mockBanner::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"theme-toggle": {
		key: "theme-toggle",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
					themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
					themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
					themeAuto: "Theme: Auto",
					themeDark: "Theme: Dark",
					themeLight: "Theme: Light"
				},
				fr: {
					themeModeAutoSystemClick: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
					themeModeLightClick: "Mode thématique : clair. Cliquez pour passer en mode sombre.",
					themeModeDarkClick: "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
					themeAuto: "Thème : Auto",
					themeDark: "Thème : Sombre",
					themeLight: "Thème : Clair"
				},
				es: {
					themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.",
					themeModeLightClick: "Modo de tema: claro. Haz clic para cambiar al modo oscuro.",
					themeModeDarkClick: "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).",
					themeAuto: "Tema: Auto",
					themeDark: "Tema: Oscuro",
					themeLight: "Tema: Claro"
				},
				de: {
					themeModeAutoSystemClick: "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
					themeModeLightClick: "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
					themeModeDarkClick: "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
					themeAuto: "Thema: Auto",
					themeDark: "Thema: Dunkel",
					themeLight: "Thema: Hell"
				},
				it: {
					themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
					themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
					themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
					themeAuto: "Tema: Auto",
					themeDark: "Tema: Scuro",
					themeLight: "Tema: Chiaro"
				},
				pt: {
					themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
					themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
					themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
					themeAuto: "Tema: Auto",
					themeDark: "Tema: Escuro",
					themeLight: "Tema: Claro"
				},
				zh: {
					themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到明亮模式。",
					themeModeLightClick: "主题模式：明亮。点击切换到暗黑模式。",
					themeModeDarkClick: "主题模式：暗黑。点击切换到自动（系统）模式。",
					themeAuto: "主题：自动",
					themeDark: "主题：暗黑",
					themeLight: "主题：明亮"
				},
				ja: {
					themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
					themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
					themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
					themeAuto: "テーマ：自動",
					themeDark: "テーマ：ダーク",
					themeLight: "テーマ：ライト"
				},
				ko: {
					themeModeAutoSystemClick: "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.",
					themeModeLightClick: "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.",
					themeModeDarkClick: "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.",
					themeAuto: "테마: 자동",
					themeDark: "테마: 다크",
					themeLight: "테마: 라이트"
				},
				ru: {
					themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
					themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
					themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
					themeAuto: "Тема: Авто",
					themeDark: "Тема: Темная",
					themeLight: "Тема: Светлая"
				}
			}
		},
		localIds: [
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"theme-toggle::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"about-header": {
		key: "about-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					aboutThisBenchmark: "About This Benchmark",
					thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
				},
				fr: {
					aboutThisBenchmark: "À propos de ce benchmark",
					thisIsAnOpenSource: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
				},
				es: {
					aboutThisBenchmark: "Sobre este benchmark",
					thisIsAnOpenSource: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
				},
				de: {
					aboutThisBenchmark: "Über diesen Benchmark",
					thisIsAnOpenSource: "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
				},
				it: {
					aboutThisBenchmark: "Informazioni su questo benchmark",
					thisIsAnOpenSource: "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
				},
				pt: {
					aboutThisBenchmark: "Sobre este benchmark",
					thisIsAnOpenSource: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas."
				},
				zh: {
					aboutThisBenchmark: "关于本基准测试",
					thisIsAnOpenSource: "这是一个开源测试应用程序 —— 不是产品 or 公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
				},
				ja: {
					aboutThisBenchmark: "このベンチマークについて",
					thisIsAnOpenSource: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。"
				},
				ko: {
					aboutThisBenchmark: "이 벤치마크에 대하여",
					thisIsAnOpenSource: "이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
				},
				ru: {
					aboutThisBenchmark: "Об этом бенчмарке",
					thisIsAnOpenSource: "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
				}
			}
		},
		localIds: [
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"about-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"pricing-header": {
		key: "pricing-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees.",
					simpleTransparentPricing: "Simple, Transparent Pricing"
				},
				fr: {
					chooseThePlanThatFits: "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.",
					simpleTransparentPricing: "Une tarification simple et transparente"
				},
				es: {
					chooseThePlanThatFits: "Elige el plan que se adapte a tu equipo. Sin cargos ocultos.",
					simpleTransparentPricing: "Precios simples y transparentes"
				},
				de: {
					chooseThePlanThatFits: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.",
					simpleTransparentPricing: "Einfache, transparente Preisgestaltung"
				},
				it: {
					chooseThePlanThatFits: "Scegli il piano adatto al tuo team. Nessun costo nascosto.",
					simpleTransparentPricing: ""
				},
				pt: {
					chooseThePlanThatFits: "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.",
					simpleTransparentPricing: "Preços Simples e Trasparentes"
				},
				zh: {
					chooseThePlanThatFits: "选择适合您团队的计划。无隐藏费用。",
					simpleTransparentPricing: "简单透明的定价"
				},
				ja: {
					chooseThePlanThatFits: "チームに最適なプランをお選びください。隠れた費用はありません。",
					simpleTransparentPricing: "シンプルで透明な価格設定"
				},
				ko: {
					chooseThePlanThatFits: "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.",
					simpleTransparentPricing: "심플하고 투명한 요금제"
				},
				ru: {
					chooseThePlanThatFits: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.",
					simpleTransparentPricing: "Простое и прозрачное ценообразование"
				}
			}
		},
		localIds: [
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"pricing-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"faq-header": {
		key: "faq-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					subtitle: "Everything you need to know about i18n Benchmark.",
					title: "Frequently Asked Questions"
				},
				fr: {
					subtitle: "Tout ce que vous devez savoir sur i18n Benchmark.",
					title: "Foire aux questions"
				},
				es: {
					subtitle: "Todo lo que necesitas saber sobre i18n Benchmark.",
					title: "Preguntas frecuentes"
				},
				de: {
					subtitle: "Alles, was Sie über i18n Benchmark wissen müssen.",
					title: "Häufig gestellte Fragen"
				},
				it: {
					subtitle: "Tutto quello che c'è da sapere su i18n Benchmark.",
					title: "Domande frequenti"
				},
				pt: {
					subtitle: "Tudo o que você precisa saber sobre o benchmark i18n.",
					title: "Perguntas Frequentes"
				},
				zh: {
					subtitle: "关于 i18n 基准测试您需要了解的一切。",
					title: "常见问题"
				},
				ja: {
					subtitle: "i18nベンチマークについて知っておくべきすべてのこと。",
					title: "よくある質問"
				},
				ko: {
					subtitle: "i18n 벤치마크에 대해 알아야 할 모든 것.",
					title: "자주 묻는 질문"
				},
				ru: {
					subtitle: "Всё, что вам нужно знать о бенчмарке i18n.",
					title: "Часто задаваемые вопросы"
				}
			}
		},
		localIds: [
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"faq-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"blog-header": {
		key: "blog-header",
		content: {
			nodeType: "translation",
			translation: {
				en: { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
				fr: { insightsTutorialsAndAnalysisFrom: "Aperçus, tutoriels et analyses de la communauté i18n." },
				es: { insightsTutorialsAndAnalysisFrom: "Información, tutoriales y análisis de la comunidad i18n." },
				de: { insightsTutorialsAndAnalysisFrom: "Einblicke, Tutorials und Analysen aus der i18n-Community." },
				it: { insightsTutorialsAndAnalysisFrom: "Approfondimenti, tutorial e analisi dalla comunità i18n." },
				pt: { insightsTutorialsAndAnalysisFrom: "Insights, tutoriais e análises da comunidade i18n." },
				zh: { insightsTutorialsAndAnalysisFrom: "来自 i18n 社区的见解、教程和分析。" },
				ja: { insightsTutorialsAndAnalysisFrom: "i18nコミュニティからの洞察、チュートリアル、分析。" },
				ko: { insightsTutorialsAndAnalysisFrom: "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석." },
				ru: { insightsTutorialsAndAnalysisFrom: "Инсайты, руководства и анализ от сообщества i18n." }
			}
		},
		localIds: [
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"blog-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"team-header": {
		key: "team-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					subtitle: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
					title: "Our Team"
				},
				fr: {
					subtitle: "Rencontrez les visages derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les outils de développement exceptionnels.",
					title: "Notre équipe"
				},
				es: {
					subtitle: "Conoce a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las herramientas de desarrollo.",
					title: "Nuestro equipo"
				},
				de: {
					subtitle: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch eine gemeinsame Leidenschaft für großartige Entwicklertools.",
					title: "Unser Team"
				},
				it: {
					subtitle: "Incontra le persone dietro i18n Benchmark. Un team vario unito da una passione condivisa per i grandi strumenti per sviluppatori.",
					title: "Il nostro team"
				},
				pt: {
					subtitle: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.",
					title: "Nossa Equipe"
				},
				zh: {
					subtitle: "认识 i18n Benchmark 背后的人。一支多元化的团队，因对出色开发者工具的共同热爱而团结在一起。",
					title: "我们的团队"
				},
				ja: {
					subtitle: "i18n Benchmarkを支える人々を紹介します。素晴らしい開発者ツールに対する共通の情熱によって結ばれた多様なチームです。",
					title: "私たちのチーム"
				},
				ko: {
					subtitle: "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.",
					title: "우리 팀"
				},
				ru: {
					subtitle: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.",
					title: "Наша команда"
				}
			}
		},
		localIds: [
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"team-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"faq-list": {
		key: "faq-list",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"howCanIContribute\":\"How can I contribute?\",\"howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"isTheDataReliable\":\"Is the data reliable?\",\"thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\",\"weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},\"fr\":{\"canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"doYouOfferConsultingServices\":\"Proposez-vous des services de conseil ?\",\"howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"howCanIContribute\":\"Comment puis-je contribuer ?\",\"howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille des bundles et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"isTheDataReliable\":\"Les données sont-elles fiables ?\",\"thereAreManyWaysTo\":\"Il existe de nombreuses façons de contribuer : proposer des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou sponsoriser le projet. Consultez notre dépôt GitHub pour plus de détails.\",\"weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec l'analyse pour une transparence totale.\",\"weReRunAllBenchmarks\":\"Nous réexécutons tous les benchmarks chaque semaine pour les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle de retraitement immédiat.\",\"weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés avec un matériel identique. Chaque benchmark est répété plusieurs fois pour garantir sa pertinence statistique. Toutes les configurations de test sont publiques sur notre dépôt GitHub.\",\"weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"whatIsI18nBenchmark\":\"Qu'est-ce que i18n Benchmark ?\",\"whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"yesOurEnterprisePlanIncludes\":\"Oui, notre offre Entreprise comprend des heures de conseil pour les équipes évaluant des solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Nous accueillons avec plaisir les soumissions de benchmarks de la communauté. Veuillez forker le dépôt, ajouter votre benchmark en suivant notre guide de contribution, et soumettre une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\"},\"es\":{\"canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks?\",\"doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría?\",\"howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks?\",\"howCanIContribute\":\"¿Cómo puedo contribuir?\",\"howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización.\",\"isTheDataReliable\":\"¿Son fiables los datos?\",\"thereAreManyWaysTo\":\"Existen muchas formas de implementar la internacionalización, y cada una tiene sus propias compensaciones en cuanto a rendimiento y experiencia del desarrollador.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza.\",\"weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables.\",\"weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente.\",\"weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas están soportadas actualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Damos la bienvenida a las contribuciones de la comunidad. Por favor, haz un fork del repositorio y envía un pull request.\"},\"de\":{\"canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an?\",\"howAreBenchmarksConducted\":\"Wie werden Benchmarks durchgeführt?\",\"howCanIContribute\":\"Wie kann ich beitragen?\",\"howOftenAreBenchmarksUpdated\":\"Wie oft werden Benchmarks aktualisiert?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungs-Bibliotheken misst und vergleicht.\",\"isTheDataReliable\":\"Sind die Daten zuverlässig?\",\"thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, zur Internationalisierung beizutragen, von der Meldung von Fehlern bis hin zur Einreichung neuer Benchmark-Szenarien.\",\"weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, die Aufwärmphasen, Ausreißererkennung und Konfidenzintervalle umfasst.\",\"weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch.\",\"weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen unter Verwendung konsistenter Hardware durch.\",\"weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"whatIsI18nBenchmark\":\"Was ist i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Beitragsleitfaden hinzu und reichen Sie einen Pull-Request ein.\"},\"it\":{\"canISubmitMyOwn\":\"Posso inviare i miei benchmark?\",\"doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"howAreBenchmarksConducted\":\"Come vengono condotti i benchmark?\",\"howCanIContribute\":\"Come posso contribuire?\",\"howOftenAreBenchmarksUpdated\":\"Quanto spesso vengono aggiornati i benchmark?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark è una suite di benchmarking open-source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione.\",\"isTheDataReliable\":\"I dati sono affidabili?\",\"thereAreManyWaysTo\":\"Ci sono molti modi per contribuire al progetto.\",\"weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza.\",\"weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ciascuna libreria.\",\"weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente.\",\"weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"Cos'è i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate?\",\"yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sì! Siamo aperti ai contributi della community. Fai un fork della repository e invia una pull request.\"},\"pt\":{\"canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks?\",\"doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria?\",\"howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos?\",\"howCanIContribute\":\"Como posso contribuir?\",\"howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são atualizados?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do pacote e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicativos JavaScript e React.\",\"isTheDataReliable\":\"Os dados são confiáveis?\",\"thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para obter detalhes.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados com a análise para total transparência.\",\"weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente contra as últimas versões estáveis de cada biblioteca. Os lançamentos de versões principais acionam um ciclo de re-benchmarking imediato.\",\"weRunStandardizedTestsIn\":\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.\",\"weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"O que é o i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sim! Congratulamo-nos com o envio de benchmarks da comunidade. Por favor, faça um fork do repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe analisará e mesclará envios qualificados.\"},\"zh\":{\"canISubmitMyOwn\":\"我可以提交自己的基准测试吗？\",\"doYouOfferConsultingServices\":\"你们提供咨询服务吗？\",\"howAreBenchmarksConducted\":\"基准测试是如何进行的？\",\"howCanIContribute\":\"我如何贡献？\",\"howOftenAreBenchmarksUpdated\":\"基准测试多久更新一次？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、包大小和开发人员体验。\",\"isTheDataReliable\":\"数据可靠吗？\",\"thereAreManyWaysTo\":\"有很多贡献方式：提交基准测试、改进文档、报告 bug、提出新指标或赞助项目。详情请访问我们的 GitHub 仓库。\",\"weFollowRigorousStatisticalMethodology\":\"我们遵循严谨的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随分析报告一起发布，以确保完全透明。\",\"weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主版本发布会触发立即的基准测试周期。\",\"weRunStandardizedTestsIn\":\"我们使用一致的硬件在隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 仓库中公开。\",\"weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"whatIsI18nBenchmark\":\"什么是 i18n Benchmark？\",\"whichLibrariesAreCurrentlySupported\":\"目前支持哪些库？\",\"yesOurEnterprisePlanIncludes\":\"是的，我们的企业版计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\",\"yesCommunityBenchmarkSubmissionsAre\":\"是的！我们欢迎社区提交基准测试。请点击 Fork 仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审核并合并合格的提交。\"},\"ja\":{\"canISubmitMyOwn\":\"独自のベンチマークを提出できますか？\",\"doYouOfferConsultingServices\":\"コンサルティングサービスは提供していますか？\",\"howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"howCanIContribute\":\"どのように貢献できますか？\",\"howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\",\"isTheDataReliable\":\"データは信頼できますか？\",\"thereAreManyWaysTo\":\"貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、またはプロジェクトのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\",\"weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値検出、信頼区間を含む厳密な統計手法に従います。すべての生データは、完全な透明性のために分析と共に公開されます。\",\"weReRunAllBenchmarks\":\"各ライブラリの最新の安定バージョンに対して毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即時の再ベンチマークサイクルが開始されます。\",\"weRunStandardizedTestsIn\":\"一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。各ベンチマークは統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\",\"whatIsI18nBenchmark\":\"i18n Benchmarkとは何ですか？\",\"whichLibrariesAreCurrentlySupported\":\"現在、どのライブラリがサポートされていますか？\",\"yesOurEnterprisePlanIncludes\":\"はい、エンタープライズプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいてカスタマイズされた推奨事項を提供できます。\",\"yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な提出物をレビューしてマージします。\"},\"ko\":{\"canISubmitMyOwn\":\"함께 벤치마크를 제출할 수 있나요?\",\"doYouOfferConsultingServices\":\"컨설팅 서비스를 제공하나요?\",\"howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션을 위한 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\",\"isTheDataReliable\":\"데이터를 신뢰할 수 있나요?\",\"thereAreManyWaysTo\":\"벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 등 기여할 수 있는 방법은 많습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\",\"weFollowRigorousStatisticalMethodology\":\"저희는 웜업(warm-up) 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 공개됩니다.\",\"weReRunAllBenchmarks\":\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스는 즉각적인 재벤치마크 주기를 트리거합니다.\",\"weRunStandardizedTestsIn\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"yesOurEnterprisePlanIncludes\":\"예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출해 주세요. 저희 팀이 제출물을 검토하고 병합할 것입니다.\"},\"ru\":{\"canISubmitMyOwn\":\"Могу ли я предложить свой бенчмарк?\",\"doYouOfferConsultingServices\":\"Предоставляете ли вы консалтинговые услуги?\",\"howAreBenchmarksConducted\":\"Как проводятся бенчмарки?\",\"howCanIContribute\":\"Как я могу внести свой вклад?\",\"howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark — это открытый набор тестов, который измеряет и сравнивает производительность, размер пакета и опыт разработчика библиотек интернационализации для приложений на JavaScript и React.\",\"isTheDataReliable\":\"Надежны ли данные?\",\"thereAreManyWaysTo\":\"Есть много способов внести свой вклад: предложить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий GitHub для получения подробной информации.\",\"weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с анализом для полной прозрачности.\",\"weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выпуски основных версий запускают немедленный цикл повторного тестирования.\",\"weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.\",\"weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"whatIsI18nBenchmark\":\"Что такое i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в данный момент?\",\"yesOurEnterprisePlanIncludes\":\"Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации на основе вашего конкретного случая использования, масштаба и ограничений.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем бенчмарки от сообщества. Пожалуйста, сделайте форк репозитория, добавьте свой бенчмарк, следуя нашему руководству по вкладу, и отправьте pull request. Наша команда рассмотрит и примет подходящие предложения.\"}}}"),
		localIds: [
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"faq-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"careers-header": {
		key: "careers-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					title: "Careers",
					joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
				},
				fr: {
					title: "Carrières",
					joinOurMissionToImprove: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu."
				},
				es: {
					title: "Carreras",
					joinOurMissionToImprove: "Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo remoto que valora el impacto, la transparencia y el aprendizaje continuo."
				},
				de: {
					title: "Karriere",
					joinOurMissionToImprove: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt."
				},
				it: {
					title: "Carriere",
					joinOurMissionToImprove: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo."
				},
				pt: {
					title: "Carreiras",
					joinOurMissionToImprove: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo."
				},
				zh: {
					title: "职业生涯",
					joinOurMissionToImprove: "加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
				},
				ja: {
					title: "採用情報",
					joinOurMissionToImprove: "国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響、透明性、継続的な学習を重視するリモートファーストのチームです。"
				},
				ko: {
					title: "채용",
					joinOurMissionToImprove: "국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다."
				},
				ru: {
					title: "Карьера",
					joinOurMissionToImprove: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение."
				}
			}
		},
		localIds: [
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"careers-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"products-header": {
		key: "products-header",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					title: "Products",
					subtitle: "Tools and services to streamline your internationalization workflow."
				},
				fr: {
					title: "Produits",
					subtitle: "Outils et services pour optimiser votre flux de travail d'internationalisation."
				},
				es: {
					title: "Productos",
					subtitle: "Herramientas de nivel empresarial para optimizar, auditar y escalar tu estrategia de internacionalización."
				},
				de: {
					title: "Produkte",
					subtitle: "Leistungsstarke Tools zur Optimierung Ihrer Internationalisierungs-Strategie."
				},
				it: {
					title: "Prodotti",
					subtitle: "Strumenti per misurare, ottimizzare e mantenere le tue soluzioni di internazionalizzazione."
				},
				pt: {
					title: "Produtos",
					subtitle: "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização."
				},
				zh: {
					title: "产品",
					subtitle: "用于简化国际化工作流程的工具和服务。"
				},
				ja: {
					title: "製品",
					subtitle: "国際化ワークフローを合理化するためのツールとサービス。"
				},
				ko: {
					title: "제품",
					subtitle: "국제화 워크플로를 합리화하기 위한 도구 및 서비스."
				},
				ru: {
					title: "Продукты",
					subtitle: "Инструменты и услуги для оптимизации вашего рабочего процесса интернационализации."
				}
			}
		},
		localIds: [
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"products-header::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"what-we-measure": {
		key: "what-we-measure",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"bundleSizeImpact\":\"Bundle size impact\",\"theAdditionalJavascriptBytesSent\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"renderingOverhead\":\"Rendering overhead\",\"howMuchExtraTimeThe\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"hydrationCost\":\"Hydration cost\",\"duringSsrTranslationDataIs\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"lazyLoadingEffectiveness\":\"Lazy loading effectiveness\",\"whetherSplittingTranslationsByRoute\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"localeSwitchSpeed\":\"Locale switch speed\",\"howFastTheAppCan\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\",\"whatWeMeasure\":\"What We Measure\"},\"fr\":{\"bundleSizeImpact\":\"Impact sur la taille du bundle\",\"theAdditionalJavascriptBytesSent\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\",\"renderingOverhead\":\"Surcharge de rendu\",\"howMuchExtraTimeThe\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\",\"hydrationCost\":\"Coût d'hydratation\",\"duringSsrTranslationDataIs\":\"Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.\",\"lazyLoadingEffectiveness\":\"Efficacité du chargement différé\",\"whetherSplittingTranslationsByRoute\":\"Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\",\"localeSwitchSpeed\":\"Vitesse de changement de langue\",\"howFastTheAppCan\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.\",\"whatWeMeasure\":\"Ce que nous mesurons\"},\"es\":{\"bundleSizeImpact\":\"Impacto en el tamaño del bundle\",\"theAdditionalJavascriptBytesSent\":\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderizado\",\"howMuchExtraTimeThe\":\"Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\",\"hydrationCost\":\"Coste de hidratación\",\"duringSsrTranslationDataIs\":\"Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"lazyLoadingEffectiveness\":\"Eficacia de la carga diferida\",\"whetherSplittingTranslationsByRoute\":\"Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"localeSwitchSpeed\":\"Velocidad de cambio de idioma\",\"howFastTheAppCan\":\"Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\",\"whatWeMeasure\":\"Qué medimos\"},\"de\":{\"bundleSizeImpact\":\"Auswirkung auf die Bundle-Größe\",\"theAdditionalJavascriptBytesSent\":\"Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.\",\"renderingOverhead\":\"Rendering-Overhead\",\"howMuchExtraTimeThe\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\",\"hydrationCost\":\"Hydratisierungskosten\",\"duringSsrTranslationDataIs\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.\",\"lazyLoadingEffectiveness\":\"Effektivität von Lazy Loading\",\"whetherSplittingTranslationsByRoute\":\"Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\",\"localeSwitchSpeed\":\"Geschwindigkeit des Gebietsschemawechsels\",\"howFastTheAppCan\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\",\"whatWeMeasure\":\"Was wir messen\"},\"it\":{\"bundleSizeImpact\":\"Impatto sulla dimensione del bundle\",\"theAdditionalJavascriptBytesSent\":\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.\",\"renderingOverhead\":\"Sovrapprezzo di rendering\",\"howMuchExtraTimeThe\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"hydrationCost\":\"Costo di idratazione\",\"duringSsrTranslationDataIs\":\"Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\",\"lazyLoadingEffectiveness\":\"Efficacia del caricamento pigro\",\"whetherSplittingTranslationsByRoute\":\"Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\",\"localeSwitchSpeed\":\"Velocità di cambio lingua\",\"howFastTheAppCan\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\",\"whatWeMeasure\":\"Cosa misuriamo\"},\"pt\":{\"bundleSizeImpact\":\"Impacto no tamanho do bundle\",\"theAdditionalJavascriptBytesSent\":\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderização\",\"howMuchExtraTimeThe\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\",\"hydrationCost\":\"Costo de hidratação\",\"duringSsrTranslationDataIs\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\",\"lazyLoadingEffectiveness\":\"Eficácia do carregamento lento\",\"whetherSplittingTranslationsByRoute\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).\",\"localeSwitchSpeed\":\"Velocidade de troca de idioma\",\"howFastTheAppCan\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\",\"whatWeMeasure\":\"O que medimos\"},\"zh\":{\"bundleSizeImpact\":\"包大小影响\",\"theAdditionalJavascriptBytesSent\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\",\"renderingOverhead\":\"渲染开销\",\"howMuchExtraTimeThe\":\"库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。\",\"hydrationCost\":\"注水成本\",\"duringSsrTranslationDataIs\":\"在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。\",\"lazyLoadingEffectiveness\":\"延迟加载有效性\",\"whetherSplittingTranslationsByRoute\":\"按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\",\"localeSwitchSpeed\":\"语言切换速度\",\"howFastTheAppCan\":\"应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。\",\"whatWeMeasure\":\"我们测量什么\"},\"ja\":{\"bundleSizeImpact\":\"バンドルサイズへの影響\",\"theAdditionalJavascriptBytesSent\":\"i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。\",\"renderingOverhead\":\"レンダリングオーバーヘッド\",\"howMuchExtraTimeThe\":\"ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\",\"hydrationCost\":\"ハイドレーションコスト\",\"duringSsrTranslationDataIs\":\"SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\",\"lazyLoadingEffectiveness\":\"遅延読み込みの有効性\",\"whetherSplittingTranslationsByRoute\":\"ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。\",\"localeSwitchSpeed\":\"ロケール切り替え速度\",\"howFastTheAppCan\":\"実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\",\"whatWeMeasure\":\"私たちが測定するもの\"},\"ko\":{\"bundleSizeImpact\":\"번들 크기 영향\",\"theAdditionalJavascriptBytesSent\":\"i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\",\"renderingOverhead\":\"렌더링 오버헤드\",\"howMuchExtraTimeThe\":\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.\",\"hydrationCost\":\"수화 비용\",\"duringSsrTranslationDataIs\":\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.\",\"lazyLoadingEffectiveness\":\"지연 로딩 효과\",\"whetherSplittingTranslationsByRoute\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.\",\"localeSwitchSpeed\":\"로케일 전환 속도\",\"howFastTheAppCan\":\"실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.\",\"whatWeMeasure\":\"측정 항목\"},\"ru\":{\"bundleSizeImpact\":\"Влияние на размер бандла\",\"theAdditionalJavascriptBytesSent\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"renderingOverhead\":\"Затраты на рендеринг\",\"howMuchExtraTimeThe\":\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\",\"hydrationCost\":\"Стоимость гидратации\",\"duringSsrTranslationDataIs\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"lazyLoadingEffectiveness\":\"Эффективность ленивой загрузки\",\"whetherSplittingTranslationsByRoute\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\",\"localeSwitchSpeed\":\"Скорость переключения языка\",\"howFastTheAppCan\":\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\",\"whatWeMeasure\":\"Что мы измеряем\"}}}"),
		localIds: [
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"what-we-measure::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	products: {
		key: "products",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"price.translationQa\":\"$19/mo\",\"price.benchmarkCloud\":\"$29/mo\",\"price.bundleOptimizer\":\"$49/mo\",\"price.migrationAssistant\":\"$99 one-time\",\"migrationAssistantDesc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"bundleOptimizerDesc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"benchmarkCloudDesc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"translationQaDesc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Contact Us\",\"free\":\"Free\",\"learnMore\":\"Learn More\",\"migrationAssistant\":\"Migration Assistant\",\"benchmarkEnterpriseDesc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"benchmarkCliDesc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"translationQa\":\"Translation QA\"},\"fr\":{\"price.translationQa\":\"19 €/mois\",\"price.benchmarkCloud\":\"29 €/mois\",\"price.bundleOptimizer\":\"49 €/mois\",\"price.migrationAssistant\":\"99 € une seule fois\",\"migrationAssistantDesc\":\"Outil alimenté par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans interruption de service.\",\"bundleOptimizerDesc\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\",\"benchmarkCloudDesc\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"translationQaDesc\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Optimiseur de bundle\",\"contactUs\":\"Nous contacter\",\"free\":\"Gratuit\",\"learnMore\":\"En savoir plus\",\"migrationAssistant\":\"Assistant de migration\",\"benchmarkEnterpriseDesc\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"benchmarkCliDesc\":\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"translationQa\":\"Translation QA\"},\"es\":{\"price.translationQa\":\"$19/mes\",\"price.benchmarkCloud\":\"$29/mes\",\"price.bundleOptimizer\":\"$49/mes\",\"price.migrationAssistant\":\"$99 pago único\",\"migrationAssistantDesc\":\"Herramienta impulsada por IA que ayuda a migrar tu código entre bibliotecas i18n sin tiempo de inactividad.\",\"bundleOptimizerDesc\":\"Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\",\"benchmarkCloudDesc\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"translationQaDesc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Optimizador de bundle\",\"contactUs\":\"Contáctanos\",\"free\":\"Gratis\",\"learnMore\":\"Saber más\",\"migrationAssistant\":\"Asistente de migración\",\"benchmarkEnterpriseDesc\":\"Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"benchmarkCliDesc\":\"Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\",\"translationQa\":\"QA de traducción\"},\"de\":{\"price.translationQa\":\"19 €/Monat\",\"price.benchmarkCloud\":\"29 €/Monat\",\"price.bundleOptimizer\":\"49 €/Monat\",\"price.migrationAssistant\":\"99 € einmalig\",\"migrationAssistantDesc\":\"KI-gestütztes Tool zur Unterstützung bei der Migration von Codebasen zwischen i18n-Bibliotheken ohne Ausfallzeiten.\",\"bundleOptimizerDesc\":\"Analysieren und optimieren Sie Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"benchmarkCloudDesc\":\"Automatisches cloudbasiertes Benchmarking mit historischer Verfolgung, Warnungen und Teampanels.\",\"translationQaDesc\":\"Automatische Qualitätskontrollen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Kontaktieren Sie uns\",\"free\":\"Kostenlos\",\"learnMore\":\"Mehr erfahren\",\"migrationAssistant\":\"Migrations-Assistent\",\"benchmarkEnterpriseDesc\":\"On-Premise-Bereitstellung mit SSO, Audit-Protokollen, benutzerdefinierten SLAs und dediziertem Support.\",\"benchmarkCliDesc\":\"Führen Sie Benchmarks lokal über Ihr Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"translationQa\":\"Übersetzungs-QA\"},\"it\":{\"price.translationQa\":\"19 €/mese\",\"price.benchmarkCloud\":\"29 €/mese\",\"price.bundleOptimizer\":\"49 €/mese\",\"price.migrationAssistant\":\"99 € una tantum\",\"migrationAssistantDesc\":\"Strumento basato sull'IA che aiuta a migrare il tuo codebase tra librerie i18n senza tempi di inattività.\",\"bundleOptimizerDesc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"benchmarkCloudDesc\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per il team.\",\"translationQaDesc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Ottimizzatore di bundle\",\"contactUs\":\"Contattaci\",\"free\":\"Gratuito\",\"learnMore\":\"Per saperne di più\",\"migrationAssistant\":\"Assistente alla migrazione\",\"benchmarkEnterpriseDesc\":\"Distribuzione on-premise con SSO, registri di audit, SLA personalizzati e supporto dedicato.\",\"benchmarkCliDesc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"translationQa\":\"QA delle traduzioni\"},\"pt\":{\"price.translationQa\":\"R$ 79/mês\",\"price.benchmarkCloud\":\"R$ 145/mês\",\"price.bundleOptimizer\":\"R$ 249/mês\",\"price.migrationAssistant\":\"R$ 495 (pagamento único)\",\"migrationAssistantDesc\":\"Ferramenta baseada em IA para ajudar a migrar bases de código entre bibliotecas i18n sem tempo de inatividade.\",\"bundleOptimizerDesc\":\"Analise e otimize seus bundles i18n para produção usando tree-shaking e divisão de código.\",\"benchmarkCloudDesc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e dashboards de equipe.\",\"translationQaDesc\":\"Verificações automáticas de qualidade para traduções ausentes, problemas de plural e erros de contexto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Contate-nos\",\"free\":\"Grátis\",\"learnMore\":\"Saiba mais\",\"migrationAssistant\":\"Assistente de Migração\",\"benchmarkEnterpriseDesc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"benchmarkCliDesc\":\"Execute benchmarks localmente a partir do seu terminal. Suporta configurações personalizadas e integração com CI.\",\"translationQa\":\"Tradução QA\"},\"zh\":{\"price.translationQa\":\"¥ 159/月\",\"price.benchmarkCloud\":\"¥ 299/月\",\"price.bundleOptimizer\":\"¥ 499/月\",\"price.migrationAssistant\":\"¥ 999 (一次性支付)\",\"migrationAssistantDesc\":\"基于 AI 的工具，帮助在 i18n 库之间迁移代码库，实现零停机时间。\",\"bundleOptimizerDesc\":\"通过 tree-shaking 和代码拆分来分析并优化生产环境的 i18n 包。\",\"benchmarkCloudDesc\":\"自动化云端基准测试，包含历史追踪、警报和团队控制面板。\",\"translationQaDesc\":\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\",\"benchmarkCli\":\"基准测试 CLI\",\"benchmarkCloud\":\"基准测试云\",\"benchmarkEnterprise\":\"基准测试企业版\",\"bundleOptimizer\":\"包优化器 (Bundle Optimizer)\",\"contactUs\":\"联系我们\",\"free\":\"免费\",\"learnMore\":\"了解更多\",\"migrationAssistant\":\"迁移助手\",\"benchmarkEnterpriseDesc\":\"本地部署选项，包含 SSO、审计日志、定制 SLA 和专属支持。\",\"benchmarkCliDesc\":\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"translationQa\":\"翻译 QA\"},\"ja\":{\"price.translationQa\":\"¥1,900／月\",\"price.benchmarkCloud\":\"¥3,500／月\",\"price.bundleOptimizer\":\"¥6,000／月\",\"price.migrationAssistant\":\"¥12,000（一度きり）\",\"migrationAssistantDesc\":\"ダウンタイムなしでi18nライブラリ間のコードベース移行を支援するAI搭載ツール。\",\"bundleOptimizerDesc\":\"ツリーシェイキングとコード分割を使用して、プロダクション用にi18nバンドルを分析および最適化します。\",\"benchmarkCloudDesc\":\"履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。\",\"translationQaDesc\":\"翻訳の欠落、複数形の問題、コンテキストエラーに関する自動品質チェック。\",\"benchmarkCli\":\"ベンチマークCLI\",\"benchmarkCloud\":\"ベンチマーククラウド\",\"benchmarkEnterprise\":\"ベンチマークエンタープライズ\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"contactUs\":\"お問い合わせ\",\"free\":\"無料\",\"learnMore\":\"詳細を見る\",\"migrationAssistant\":\"移行アシスタント\",\"benchmarkEnterpriseDesc\":\"SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミス展開。\",\"benchmarkCliDesc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\",\"translationQa\":\"翻訳QA\"},\"ko\":{\"price.translationQa\":\"₩19.000/월\",\"price.benchmarkCloud\":\"₩29.000/월\",\"price.bundleOptimizer\":\"₩49.000/월\",\"price.migrationAssistant\":\"₩99.000 (1회)\",\"migrationAssistantDesc\":\"다운타임 없이 i18n 라이브러리 간의 코드베이스 마이그레이션을 돕는 AI 기반 도구입니다.\",\"bundleOptimizerDesc\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"benchmarkCloudDesc\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹 서비스입니다.\",\"translationQaDesc\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 점검입니다.\",\"benchmarkCli\":\"벤치마크 CLI\",\"benchmarkCloud\":\"벤치마크 클라우드\",\"benchmarkEnterprise\":\"벤치마크 엔터프라이즈\",\"bundleOptimizer\":\"번들 옵티마이저\",\"contactUs\":\"문의하기\",\"free\":\"무료\",\"learnMore\":\"더 알아보기\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"benchmarkEnterpriseDesc\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포 옵션입니다.\",\"benchmarkCliDesc\":\"터미널에서 로컬로 벤치마크를 실행하세요. 맞춤형 구성 및 CI 통합을 지원합니다.\",\"translationQa\":\"번역 QA\"},\"ru\":{\"price.translationQa\":\"1 900 ₽ / мес\",\"price.benchmarkCloud\":\"3 500 ₽ / мес\",\"price.bundleOptimizer\":\"6 000 ₽ / мес\",\"price.migrationAssistant\":\"12 000 ₽ (единоразово)\",\"migrationAssistantDesc\":\"Инструмент на базе ИИ для помощи в миграции кодовых баз между библиотеками i18n без простоев.\",\"bundleOptimizerDesc\":\"Анализируйте и оптимизируйте свои i18n бандлы для продакшна с помощью tree-shaking и разделения кода.\",\"benchmarkCloudDesc\":\"Автоматизированный облачный бенчмаркинг с историческим отслеживанием, оповещениями и командными дашбордами.\",\"translationQaDesc\":\"Автоматические проверки качества на предмет отсутствующих переводов, проблем с формами множественного числа и контекстных ошибок.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Свяжитесь с нами\",\"free\":\"Бесплатно\",\"learnMore\":\"Узнать больше\",\"migrationAssistant\":\"Помощник по миграции\",\"benchmarkEnterpriseDesc\":\"Локальное развертывание с использованием SSO, логов аудита, кастомных SLA и персональной поддержки.\",\"benchmarkCliDesc\":\"Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\",\"translationQa\":\"Translation QA\"}}}"),
		localIds: [
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"products::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"blog-list": {
		key: "blog-list",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"comparingI18nLibrariesIn2026\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"weTested12DifferentInternationalization\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"howToReduceYourI18n\":\"How to Reduce Your i18n Bundle by 60%\",\"march82026\":\"March 8, 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"theStateOfInternationalizationIn\":\"The State of Internationalization in React\",\"february282026\":\"February 28, 2026\",\"anOverviewOfTheCurrent\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"migratingFromReactI18nextTo\":\"Migrating from react-i18next to Lingui\",\"february152026\":\"February 15, 2026\",\"aStepByStepGuide\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components and i18n: What Changes?\",\"february12026\":\"February 1, 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark Methodology: How We Test\",\"january202026\":\"January 20, 2026\",\"aTransparentLookAtOur\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"readMore\":\"Read More →\"},\"fr\":{\"comparingI18nLibrariesIn2026\":\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\",\"weTested12DifferentInternationalization\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.\",\"howToReduceYourI18n\":\"Comment réduire votre bundle i18n de 60 %\",\"march82026\":\"8 mars 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\",\"theStateOfInternationalizationIn\":\"L'état de l'internationalisation dans React\",\"february282026\":\"28 février 2026\",\"anOverviewOfTheCurrent\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"migratingFromReactI18nextTo\":\"Migration de react-i18next vers Lingui\",\"february152026\":\"15 février 2026\",\"aStepByStepGuide\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components et i18n : Qu'est-ce qui change ?\",\"february12026\":\"1er février 2026\",\"reactServerComponentsIntroduceNew\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"benchmarkMethodologyHowWeTest\":\"Méthodologie du benchmark : comment nous testons\",\"january202026\":\"20 janvier 2026\",\"aTransparentLookAtOur\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"readMore\":\"Lire la suite →\"},\"es\":{\"comparingI18nLibrariesIn2026\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"weTested12DifferentInternationalization\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.\",\"howToReduceYourI18n\":\"Cómo reducir tu bundle i18n en un 60%\",\"march82026\":\"8 de marzo de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\",\"theStateOfInternationalizationIn\":\"El estado de la internacionalización en React\",\"february282026\":\"28 de febrero de 2026\",\"anOverviewOfTheCurrent\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"migratingFromReactI18nextTo\":\"Migración de react-i18next a Lingui\",\"february152026\":\"15 de febrero de 2026\",\"aStepByStepGuide\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: ¿qué cambia?\",\"february12026\":\"1 de febrero de 2026\",\"reactServerComponentsIntroduceNew\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodología del benchmark: cómo probamos\",\"january202026\":\"20 de enero de 2026\",\"aTransparentLookAtOur\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"readMore\":\"Leer más →\"},\"de\":{\"comparingI18nLibrariesIn2026\":\"i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick\",\"weTested12DifferentInternationalization\":\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"howToReduceYourI18n\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"march82026\":\"8. März 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.\",\"theStateOfInternationalizationIn\":\"Der Stand der Internationalisierung in React\",\"february282026\":\"28. Februar 2026\",\"anOverviewOfTheCurrent\":\"Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"migratingFromReactI18nextTo\":\"Migration von react-i18next zu Lingui\",\"february152026\":\"15. Februar 2026\",\"aStepByStepGuide\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components und i18n: Was ändert sich?\",\"february12026\":\"1. Februar 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark-Methodik: Wie wir testen\",\"january202026\":\"20. Januar 2026\",\"aTransparentLookAtOur\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"readMore\":\"Weiterlesen →\"},\"it\":{\"comparingI18nLibrariesIn2026\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"weTested12DifferentInternationalization\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"howToReduceYourI18n\":\"Come ridurre il bundle i18n del 60%\",\"march82026\":\"8 marzo 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.\",\"theStateOfInternationalizationIn\":\"Lo stato dell'internazionalizzazione in React\",\"february282026\":\"28 febbraio 2026\",\"anOverviewOfTheCurrent\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"migratingFromReactI18nextTo\":\"Migrazione da react-i18next a Lingui\",\"february152026\":\"15 febbraio 2026\",\"aStepByStepGuide\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: cosa cambia?\",\"february12026\":\"1 febbraio 2026\",\"reactServerComponentsIntroduceNew\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia del benchmark: come testiamo\",\"january202026\":\"20 gennaio 2026\",\"aTransparentLookAtOur\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\",\"readMore\":\"Leggi di più →\"},\"pt\":{\"comparingI18nLibrariesIn2026\":\"Comparando Bibliotecas i18n em 2026: Uma Análise Profunda\",\"weTested12DifferentInternationalization\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"howToReduceYourI18n\":\"Como reduzir seu bundle i18n em 60%\",\"march82026\":\"8 de março de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\",\"theStateOfInternationalizationIn\":\"O estado da internacionalização no React\",\"february282026\":\"28 de fevereiro de 2026\",\"anOverviewOfTheCurrent\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"migratingFromReactI18nextTo\":\"Migrando do react-i18next para o Lingui\",\"february152026\":\"15 de fevereiro de 2026\",\"aStepByStepGuide\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: o que muda?\",\"february12026\":\"1 de fevereiro de 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia de Benchmark: como testamos\",\"january202026\":\"20 de janeiro de 2026\",\"aTransparentLookAtOur\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"readMore\":\"Leia mais →\"},\"zh\":{\"comparingI18nLibrariesIn2026\":\"2026 年 i18n 库对比：深度解析\",\"weTested12DifferentInternationalization\":\"我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。\",\"howToReduceYourI18n\":\"如何将您的 i18n 包减少 60%\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"theStateOfInternationalizationIn\":\"React 国际化的现状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\",\"migratingFromReactI18nextTo\":\"从 react-i18next 迁移到 Lingui\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\",\"serverComponentsAndI18nWhat\":\"服务器组件与 i18n：有哪些变化？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。\",\"benchmarkMethodologyHowWeTest\":\"基准测试方法论：我们如何测试\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"readMore\":\"阅读更多 →\"},\"ja\":{\"comparingI18nLibrariesIn2026\":\"2026年のi18nライブラリ比較：ディープダイブ\",\"weTested12DifferentInternationalization\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"howToReduceYourI18n\":\"i18nバンドルを60％削減する方法\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\",\"theStateOfInternationalizationIn\":\"Reactにおける国際化の現状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。\",\"migratingFromReactI18nextTo\":\"react-i18nextからLinguiへの移行\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"serverComponentsAndI18nWhat\":\"Server Componentsとi18n：何が変わるのか？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"benchmarkMethodologyHowWeTest\":\"ベンチマーク方法論：私たちのテスト方法\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。\",\"readMore\":\"続きを読む →\"},\"ko\":{\"comparingI18nLibrariesIn2026\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"weTested12DifferentInternationalization\":\"저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.\",\"howToReduceYourI18n\":\"i18n 번들을 60% 줄이는 방법\",\"march82026\":\"2026년 3월 8일\",\"practicalStrategiesForOptimizingTranslation\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"theStateOfInternationalizationIn\":\"React 국제화의 현주소\",\"february282026\":\"2026년 2월 28일\",\"anOverviewOfTheCurrent\":\"동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.\",\"migratingFromReactI18nextTo\":\"react-i18next에서 Lingui로 마이그레이션하기\",\"february152026\":\"2026년 2월 15일\",\"aStepByStepGuide\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.\",\"serverComponentsAndI18nWhat\":\"Server Components 및 i18n: 무엇이 달라지나요?\",\"february12026\":\"2026년 1월 1일\",\"reactServerComponentsIntroduceNew\":\"React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.\",\"benchmarkMethodologyHowWeTest\":\"벤치마크 방법론: 테스트 방법\",\"january202026\":\"2026년 1월 20일\",\"aTransparentLookAtOur\":\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.\",\"readMore\":\"더 읽어보기 →\"},\"ru\":{\"comparingI18nLibrariesIn2026\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"weTested12DifferentInternationalization\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"howToReduceYourI18n\":\"Как уменьшить бандл i18n на 60%\",\"march82026\":\"8 марта 2026 года\",\"practicalStrategiesForOptimizingTranslation\":\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\",\"theStateOfInternationalizationIn\":\"Состояние интернационализации в React\",\"february282026\":\"28 февраля 2026 года\",\"anOverviewOfTheCurrent\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\",\"migratingFromReactI18nextTo\":\"Миграция с react-i18next на Lingui\",\"february152026\":\"15 февраля 2026 года\",\"aStepByStepGuide\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components и i18n: что меняется?\",\"february12026\":\"1 февраля 2026 года\",\"reactServerComponentsIntroduceNew\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"benchmarkMethodologyHowWeTest\":\"Методология бенчмарка: как мы тестируем\",\"january202026\":\"20 января 2026 года\",\"aTransparentLookAtOur\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"readMore\":\"Читать далее →\"}}}"),
		localIds: [
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"blog-list::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"understanding-impact": {
		key: "understanding-impact",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"cacheInvalidation\":\"Cache invalidation:\",\"contextBasedArchitecturesCanCause\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"duringServerSideRenderingThe\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"flashOfUntranslatedContentFouc\":\"Flash of untranslated content (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"splittingTranslationsIntoPerRoute\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallRequestsDesc\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"theJsonMustBeParsed\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"theTradeOffsOfDynamic\":\"The trade-offs of dynamic loading\",\"thisTestAppProvidesA\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"understandingTheImpact\":\"Understanding the Impact\",\"cacheInvalidationDesc\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"flashOfUntranslatedContentFoucDesc\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"waterfallRequests\":\"Waterfall requests:\",\"whatThisBenchmarkMeasures\":\"What this benchmark measures\",\"whyASingleLargeJson\":\"Why a single large JSON can hurt performance\"},\"fr\":{\"cacheInvalidation\":\"Invalidation du cache :\",\"contextBasedArchitecturesCanCause\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"duringServerSideRenderingThe\":\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"flashOfUntranslatedContentFouc\":\"Flash de contenu non traduit (FOUC) :\",\"manyI18nLibrariesStoreTranslations\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"splittingTranslationsIntoPerRoute\":\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\",\"waterfallRequestsDesc\":\"Comme l'application doit d'abord se charger et déterminer la langue avant de récupérer le chunk correspondant, vous ajoutez des allers-retours réseau.\",\"theJsonMustBeParsed\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"theTradeOffsOfDynamic\":\"Les compromis du chargement dynamique\",\"thisTestAppProvidesA\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"understandingTheImpact\":\"Comprendre l'impact\",\"cacheInvalidationDesc\":\"La mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent le nouveau contenu sans retélécharger les morceaux non modifiés.\",\"flashOfUntranslatedContentFoucDesc\":\"Les utilisateurs peuvent voir brièvement les clés de traduction ou la langue par défaut avant que le morceau ne soit chargé.\",\"waterfallRequests\":\"Requêtes en cascade :\",\"whatThisBenchmarkMeasures\":\"Ce que ce benchmark mesure\",\"whyASingleLargeJson\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\"},\"es\":{\"cacheInvalidation\":\"Invalidación de la caché:\",\"contextBasedArchitecturesCanCause\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\",\"duringServerSideRenderingThe\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"flashOfUntranslatedContentFouc\":\"Parpadeo de contenido no traducido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"waterfallRequestsDesc\":\"la aplicación debe cargar primero, determinar el idioma y luego obtener el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\",\"theJsonMustBeParsed\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"theTradeOffsOfDynamic\":\"Las compensaciones de la carga dinámica\",\"thisTestAppProvidesA\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"understandingTheImpact\":\"Entendiendo el impacto\",\"cacheInvalidationDesc\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\",\"flashOfUntranslatedContentFoucDesc\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"waterfallRequests\":\"Solicitudes en cascada:\",\"whatThisBenchmarkMeasures\":\"Qué mide este benchmark\",\"whyASingleLargeJson\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\"},\"de\":{\"cacheInvalidation\":\"Cache-Invalidierung:\",\"contextBasedArchitecturesCanCause\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"duringServerSideRenderingThe\":\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.\",\"flashOfUntranslatedContentFouc\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"splittingTranslationsIntoPerRoute\":\"Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallRequestsDesc\":\"Anfragekaskaden: Da die App zuerst geladen werden und das Gebietsschema bestimmen muss, bevor der entsprechende Chunk abgerufen werden kann, entstehen zusätzliche Netzwerk-Roundtrips.\",\"theJsonMustBeParsed\":\"Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.\",\"theTradeOffsOfDynamic\":\"Die Kompromisse beim dynamischen Laden\",\"thisTestAppProvidesA\":\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"understandingTheImpact\":\"Die Auswirkungen verstehen\",\"cacheInvalidationDesc\":\"Cache-Invalidierung: Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Teilstücke erneut herunterzuladen.\",\"flashOfUntranslatedContentFoucDesc\":\"Flash of Untranslated Content (FOUC): Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Teilstück eintrifft.\",\"waterfallRequests\":\"Anfragekaskaden:\",\"whatThisBenchmarkMeasures\":\"Was dieser Benchmark misst\",\"whyASingleLargeJson\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\"},\"it\":{\"cacheInvalidation\":\"Invalidazione della cache:\",\"contextBasedArchitecturesCanCause\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"duringServerSideRenderingThe\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\",\"flashOfUntranslatedContentFouc\":\"Flash di contenuti non tradotti (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"splittingTranslationsIntoPerRoute\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallRequestsDesc\":\"l'app deve prima caricarsi, determinare la localizzazione e quindi recuperare il chunk giusto, aggiungendo round-trip di rete.\",\"theJsonMustBeParsed\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"theTradeOffsOfDynamic\":\"I compromessi del caricamento dinamico\",\"thisTestAppProvidesA\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\",\"understandingTheImpact\":\"Capire l'impatto\",\"cacheInvalidationDesc\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente chunk invariati.\",\"flashOfUntranslatedContentFoucDesc\":\"gli utenti possono visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"waterfallRequests\":\"\",\"whatThisBenchmarkMeasures\":\"Cosa misura questo benchmark\",\"whyASingleLargeJson\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\"},\"pt\":{\"cacheInvalidation\":\"Invalidação de cache:\",\"contextBasedArchitecturesCanCause\":\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"duringServerSideRenderingThe\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"flashOfUntranslatedContentFouc\":\"Flash de conteúdo não traduzido (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"splittingTranslationsIntoPerRoute\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"waterfallRequestsDesc\":\"Como o aplicativo deve primeiro carregar e decidir a localidade antes de buscar o bloco apropriado, você adiciona viagens de ida e volta à rede.\",\"theJsonMustBeParsed\":\"O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.\",\"theTradeOffsOfDynamic\":\"As compensações do carregamento dinâmico\",\"thisTestAppProvidesA\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"understandingTheImpact\":\"Entendendo o impacto\",\"cacheInvalidationDesc\":\"A atualização das traduções requer uma estratégia de invalidação de cache que garanta que os usuários recebam o novo conteúdo sem baixar novamente os blocos inalterados.\",\"flashOfUntranslatedContentFoucDesc\":\"Os usuários podem ver brevemente chaves de tradução ou o idioma de fallback antes que o bloco chegue.\",\"waterfallRequests\":\"Pedidos em cascata:\",\"whatThisBenchmarkMeasures\":\"O que este benchmark mede\",\"whyASingleLargeJson\":\"Por que um único JSON grande pode prejudicar o desempenho\"},\"zh\":{\"cacheInvalidation\":\"缓存失效：\",\"contextBasedArchitecturesCanCause\":\"基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。\",\"duringServerSideRenderingThe\":\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\",\"flashOfUntranslatedContentFouc\":\"未翻译内容闪烁 (FOUC)：\",\"manyI18nLibrariesStoreTranslations\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"splittingTranslationsIntoPerRoute\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"waterfallRequestsDesc\":\"由于应用必须先加载并确定语言环境，然后才能获取相应的块，因此您增加了网络往返时间。\",\"theJsonMustBeParsed\":\"JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。\",\"theTradeOffsOfDynamic\":\"动态加载的权衡\",\"thisTestAppProvidesA\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\",\"understandingTheImpact\":\"理解影响\",\"cacheInvalidationDesc\":\"更新翻译需要缓存失效策略，以确保用户收到最新内容，而无需重新下载未更改的块。\",\"flashOfUntranslatedContentFoucDesc\":\"用户在块到达之前可能会短暂看到翻译键或回退语言。\",\"waterfallRequests\":\"瀑布流请求：\",\"whatThisBenchmarkMeasures\":\"本基准测试测量什么\",\"whyASingleLargeJson\":\"为什么单个大型 JSON 会损害性能\"},\"ja\":{\"cacheInvalidation\":\"キャッシュの無効化:\",\"contextBasedArchitecturesCanCause\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\",\"duringServerSideRenderingThe\":\"サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"flashOfUntranslatedContentFouc\":\"未翻訳コンテンツのフラッシュ (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\",\"splittingTranslationsIntoPerRoute\":\"翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\",\"waterfallRequestsDesc\":\"アプリはまずロードし、ロケールを決定してから、適切なチャンクをフェッチする必要があるため、ネットワークのラウンドトリップが追加されます。\",\"theJsonMustBeParsed\":\"JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。\",\"theTradeOffsOfDynamic\":\"動的読み込みのトレードオフ\",\"thisTestAppProvidesA\":\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"understandingTheImpact\":\"影響を理解する\",\"cacheInvalidationDesc\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが新しいコンテンツを確実に取得できるようにするための、キャッシュ無効化戦略が必要です。\",\"flashOfUntranslatedContentFoucDesc\":\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬表示されることがあります。\",\"waterfallRequests\":\"ウォーターフォールリクエスト:\",\"whatThisBenchmarkMeasures\":\"このベンチマークが測定するもの\",\"whyASingleLargeJson\":\"ひとつの巨大な JSON がパフォーマンスを低下させる理由\"},\"ko\":{\"cacheInvalidation\":\"캐시 무효화:\",\"contextBasedArchitecturesCanCause\":\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"duringServerSideRenderingThe\":\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\",\"flashOfUntranslatedContentFouc\":\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\",\"splittingTranslationsIntoPerRoute\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\",\"waterfallRequestsDesc\":\"앱이 먼저 로드되고 로케일을 결정한 다음 적절한 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"theJsonMustBeParsed\":\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\",\"theTradeOffsOfDynamic\":\"동적 로딩의 트레이드오프\",\"thisTestAppProvidesA\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"understandingTheImpact\":\"영향 이해하기\",\"cacheInvalidationDesc\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 하는 캐시 무효화 전략이 필요합니다.\",\"flashOfUntranslatedContentFoucDesc\":\"사용자는 청크가 도착하기 전에 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\",\"waterfallRequests\":\"워터폴(Waterfall) 요청:\",\"whatThisBenchmarkMeasures\":\"이 벤치마크가 측정하는 것\",\"whyASingleLargeJson\":\"단일 대형 JSON이 성능을 저하시키는 이유\"},\"ru\":{\"cacheInvalidation\":\"Инвалидация кэша:\",\"contextBasedArchitecturesCanCause\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"duringServerSideRenderingThe\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"flashOfUntranslatedContentFouc\":\"Мерцание непереведенного контента (FOUC):\",\"manyI18nLibrariesStoreTranslations\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"splittingTranslationsIntoPerRoute\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"waterfallRequestsDesc\":\"Поскольку приложение сначала должно загрузиться и определить локаль перед получением соответствующего чанка, вы добавляете сетевые задержки (round-trips).\",\"theJsonMustBeParsed\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"theTradeOffsOfDynamic\":\"Компромиссы динамической загрузки\",\"thisTestAppProvidesA\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"understandingTheImpact\":\"Понимание влияния\",\"cacheInvalidationDesc\":\"Обновление переводов требует стратегии инвалидации кэша, гарантирующей получение пользователями нового контента без повторной загрузки неизмененных чанков.\",\"flashOfUntranslatedContentFoucDesc\":\"Пользователи могут кратковременно видеть ключи перевода или язык по умолчанию до загрузки чанка.\",\"waterfallRequests\":\"Каскадные запросы (Waterfall requests):\",\"whatThisBenchmarkMeasures\":\"Что измеряет этот бенчмарк\",\"whyASingleLargeJson\":\"Почему один большой JSON может снизить производительность\"}}}"),
		localIds: [
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"understanding-impact::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	team: {
		key: "team",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Community Manager\",\"dataAnalyst\":\"Data Analyst\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"sarahBio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"tomasBio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"elenaBio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"performanceEngineer\":\"Performance Engineer\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"fr\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Responsable de communauté\",\"dataAnalyst\":\"Analyste de données\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Garantit la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"sarahBio\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"founderLeadEngineer\":\"Fondatrice & Ingénieure principale\",\"fullStackDeveloper\":\"Développeur Full Stack\",\"tomasBio\":\"Maintient notre infrastructure de benchmarking et nos pipelines CI/CD. Contributeur open source pour Lingui.\",\"elenaBio\":\"Gère les contributions de la communauté, les partenariats et les événements. Background en gouvernance open source.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Passionnée par l'expérience développeur et l'éducation. Intervenante à React Conf, JSConf et i18nNext.\",\"performanceEngineer\":\"Ingénieur performance\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"tomasRodriguez\":\"Tomas Rodriguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"es\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Community Manager\",\"dataAnalyst\":\"Analista de datos\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. PhD en Estadística Aplicada del MIT.\",\"sarahBio\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.\",\"founderLeadEngineer\":\"Fundadora e Ingeniera Principal\",\"fullStackDeveloper\":\"Desarrollador Full-Stack\",\"tomasBio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto a Lingui.\",\"elenaBio\":\"Gestiona contribuciones de la comunidad, asociaciones y eventos. Experiencia en gobernanza de código abierto.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\",\"tomasRodriguez\":\"Tomas Rodriguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"de\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Community-Manager\",\"dataAnalyst\":\"Datenanalyst\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Gewährleistet statistische Strenge in allen Benchmarking-Ergebnissen. PhD in Angewandter Statistik vom MIT.\",\"sarahBio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen im großen Stil.\",\"founderLeadEngineer\":\"Gründer & Lead Engineer\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"tomasBio\":\"Verwaltet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.\",\"elenaBio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Leidenschaftlich für Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.\",\"performanceEngineer\":\"Performance Engineer\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"tomasRodriguez\":\"Tomas Rodriguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"it\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Community Manager\",\"dataAnalyst\":\"Analista di dati\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in statistica applicata presso il MIT.\",\"sarahBio\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su scala.\",\"founderLeadEngineer\":\"Fondatore e ingegnere capo\",\"fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"tomasBio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline di CI/CD. Contributore open source di Lingui.\",\"elenaBio\":\"Gestisce i contributi della community, le partnership e gli eventi. Background in governance open source.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Specializzato nell'ottimizzazione delle prestazioni di JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\",\"tomasRodriguez\":\"Tomas Rodriguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"pt\":{\"aishaPatel\":\"Aisha Patel\",\"communityManager\":\"Gerente de Comunidade\",\"dataAnalyst\":\"Analista de Dados\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Elena Kowalski\",\"yukiBio\":\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\",\"sarahBio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em larga escala.\",\"founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"fullStackDeveloper\":\"Desenvolvedor Full Stack\",\"tomasBio\":\"Mantém nossa infraestrutura de benchmarking e pipelines de CI/CD. Contribuidor de código aberto para o Lingui.\",\"elenaBio\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\",\"marcusWeber\":\"Marcus Weber\",\"aishaBio\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"performanceEngineer\":\"Engenheiro de Performance\",\"sarahChen\":\"Sarah Chen\",\"marcusBio\":\"Especializado em otimização de desempenho de JavaScript e metodologia de benchmarking. Ex-Vercel.\",\"tomasRodriguez\":\"Tomas Rodriguez\",\"yukiTanaka\":\"Yuki Tanaka\"},\"zh\":{\"aishaPatel\":\"艾莎·帕特尔 (Aisha Patel)\",\"communityManager\":\"社区经理\",\"dataAnalyst\":\"数据分析师\",\"developerAdvocate\":\"开发者倡导者 (Developer Advocate)\",\"elenaKowalski\":\"艾琳娜·科瓦尔斯基 (Elena Kowalski)\",\"yukiBio\":\"确保所有基准测试结果的统计严谨性。毕业于麻省理工学院 (MIT)，拥有应用统计学博士学位。\",\"sarahBio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"fullStackDeveloper\":\"全栈开发人员\",\"tomasBio\":\"维护我们的基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。\",\"elenaBio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\",\"marcusWeber\":\"马库斯·韦伯 (Marcus Weber)\",\"aishaBio\":\"热衷于开发者体验和教育。React Conf、JSConf 和 i18nNext 的讲师。\",\"performanceEngineer\":\"性能工程师\",\"sarahChen\":\"莎拉·陈 (Sarah Chen)\",\"marcusBio\":\"擅长 JavaScript 性能优化和基准测试方法论。曾在 Vercel 工作。\",\"tomasRodriguez\":\"托马斯·罗德里格斯 (Tomas Rodriguez)\",\"yukiTanaka\":\"田中雪 (Yuki Tanaka)\"},\"ja\":{\"aishaPatel\":\"アイシャ・パテル\",\"communityManager\":\"コミュニティマネージャー\",\"dataAnalyst\":\"データアナリスト\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"elenaKowalski\":\"エレナ・コワルスキー\",\"yukiBio\":\"すべてのベンチマーク結果における統計的厳密さを保証します。MITで応用統計学の博士号を取得。\",\"sarahBio\":\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\",\"founderLeadEngineer\":\"創設者 兼 リードエンジニア\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"tomasBio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\",\"elenaBio\":\"コミュニティへの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴があります。\",\"marcusWeber\":\"マルクス・ウェーバー\",\"aishaBio\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"sarahChen\":\"サラ・チェン\",\"marcusBio\":\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\",\"tomasRodriguez\":\"トマス・ロドリゲス\",\"yukiTanaka\":\"田中ゆき\"},\"ko\":{\"aishaPatel\":\"아이샤 파텔\",\"communityManager\":\"커뮤니티 매니저\",\"dataAnalyst\":\"데이터 분석가\",\"developerAdvocate\":\"데벨로퍼 애드보케이트\",\"elenaKowalski\":\"엘레나 코발스키\",\"yukiBio\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"sarahBio\":\"구글 엔지니어 출신으로 대규모 국제화 시스템 구축 분야에서 10년의 경력을 보유하고 있습니다.\",\"founderLeadEngineer\":\"설립자 및 리드 엔지니어\",\"fullStackDeveloper\":\"풀스택 개발자\",\"tomasBio\":\"벤치마킹 인프라와 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"elenaBio\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\",\"marcusWeber\":\"마르쿠스 베버\",\"aishaBio\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"performanceEngineer\":\"성능 엔지니어\",\"sarahChen\":\"사라 첸\",\"marcusBio\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.\",\"tomasRodriguez\":\"토마스 로드리게스\",\"yukiTanaka\":\"유키 타나카\"},\"ru\":{\"aishaPatel\":\"Айша Патель\",\"communityManager\":\"Комьюнити-менеджер\",\"dataAnalyst\":\"Аналитик данных\",\"developerAdvocate\":\"Developer Advocate\",\"elenaKowalski\":\"Елена Ковальски\",\"yukiBio\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики (MIT).\",\"sarahBio\":\"Бывший инженер Google с 10-летним опытом построения крупномасштабных систем интернационализации.\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"fullStackDeveloper\":\"Full Stack разработчик\",\"tomasBio\":\"Поддерживает нашу инфраструктуру бенчмаркинга и конвейеры CI/CD. Автор открытого кода для Lingui.\",\"elenaBio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Имеет опыт управления открытым исходным кодом.\",\"marcusWeber\":\"Маркус Вебер\",\"aishaBio\":\"Увлечена опытом разработчиков и образованием. Спикер React Conf, JSConf и i18nNext.\",\"performanceEngineer\":\"Инженер по производительности\",\"sarahChen\":\"Сара Чен\",\"marcusBio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"tomasRodriguez\":\"Томас Родригес\",\"yukiTanaka\":\"Юки Танака\"}}}"),
		localIds: [
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"team::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	"why-it-matters": {
		key: "why-it-matters",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"bundleSize\":\"Bundle Size\",\"connectingALargeJsonDictionary\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"dynamicLoading\":\"Dynamic Loading\",\"loadingAllTranslationsUpfrontOverloads\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\",\"renderingHydration\":\"Rendering & Hydration\",\"theBundleIsTheData\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"whyTheseMetricsMatter\":\"Why These Metrics Matter\"},\"fr\":{\"bundleSize\":\"Taille du bundle\",\"connectingALargeJsonDictionary\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"dynamicLoading\":\"Chargement dynamique\",\"loadingAllTranslationsUpfrontOverloads\":\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\",\"renderingHydration\":\"Rendu & Hydratation\",\"theBundleIsTheData\":\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"whyTheseMetricsMatter\":\"Pourquoi ces mesures sont importantes\"},\"es\":{\"bundleSize\":\"Tamaño del bundle\",\"connectingALargeJsonDictionary\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\",\"dynamicLoading\":\"Carga dinámica\",\"loadingAllTranslationsUpfrontOverloads\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\",\"renderingHydration\":\"Renderizado e hidratación\",\"theBundleIsTheData\":\"El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\",\"whyTheseMetricsMatter\":\"Por qué son importantes estas métricas\"},\"de\":{\"bundleSize\":\"Bundle-Größe\",\"connectingALargeJsonDictionary\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"dynamicLoading\":\"Dynamisches Laden\",\"loadingAllTranslationsUpfrontOverloads\":\"Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.\",\"renderingHydration\":\"Rendering & Hydratisierung\",\"theBundleIsTheData\":\"Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\",\"whyTheseMetricsMatter\":\"Warum diese Metriken wichtig sind\"},\"it\":{\"bundleSize\":\"Dimensione del bundle\",\"connectingALargeJsonDictionary\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"dynamicLoading\":\"Caricamento dinamico\",\"loadingAllTranslationsUpfrontOverloads\":\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\",\"renderingHydration\":\"Rendering e idratazione\",\"theBundleIsTheData\":\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"whyTheseMetricsMatter\":\"Perché queste metriche sono importanti\"},\"pt\":{\"bundleSize\":\"Tamanho do Bundle\",\"connectingALargeJsonDictionary\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"dynamicLoading\":\"Carregamento Dinâmico\",\"loadingAllTranslationsUpfrontOverloads\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\",\"renderingHydration\":\"Renderização e Hidratação\",\"theBundleIsTheData\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\",\"whyTheseMetricsMatter\":\"Por que essas métricas são importantes\"},\"zh\":{\"bundleSize\":\"包大小\",\"connectingALargeJsonDictionary\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"dynamicLoading\":\"动态加载\",\"loadingAllTranslationsUpfrontOverloads\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\",\"renderingHydration\":\"渲染与注水\",\"theBundleIsTheData\":\"包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\",\"whyTheseMetricsMatter\":\"为什么这些指标很重要\"},\"ja\":{\"bundleSize\":\"バンドルサイズ\",\"connectingALargeJsonDictionary\":\"巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。\",\"dynamicLoading\":\"動的ローディング\",\"loadingAllTranslationsUpfrontOverloads\":\"すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。\",\"renderingHydration\":\"レンダリングとハイドレーション\",\"theBundleIsTheData\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。\",\"whyTheseMetricsMatter\":\"これらの指標が重要な理由\"},\"ko\":{\"bundleSize\":\"번들 크기\",\"connectingALargeJsonDictionary\":\"모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.\",\"dynamicLoading\":\"동적 로딩\",\"loadingAllTranslationsUpfrontOverloads\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\",\"renderingHydration\":\"렌더링 및 수화(Hydration)\",\"theBundleIsTheData\":\"번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.\",\"whyTheseMetricsMatter\":\"이 지표가 중요한 이유\"},\"ru\":{\"bundleSize\":\"Размер бандла\",\"connectingALargeJsonDictionary\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"dynamicLoading\":\"Динамическая загрузка\",\"loadingAllTranslationsUpfrontOverloads\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\",\"renderingHydration\":\"Рендеринг и гидратация\",\"theBundleIsTheData\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"whyTheseMetricsMatter\":\"Почему эти показатели важны\"}}}"),
		localIds: [
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"why-it-matters::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	},
	hero: {
		key: "hero",
		content: {
			nodeType: "translation",
			translation: {
				en: {
					viewResults: "View Results",
					aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
					title: "i18n Benchmark"
				},
				fr: {
					viewResults: "Voir les résultats",
					aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
					title: "i18n Benchmark"
				},
				es: {
					viewResults: "Ver resultados",
					aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
					title: "i18n Benchmark"
				},
				de: {
					viewResults: "Ergebnisse anzeigen",
					aTestApplicationDesignedTo: "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
					title: "i18n Benchmark"
				},
				it: {
					viewResults: "Visualizza i risultati",
					aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
					title: "i18n Benchmark"
				},
				pt: {
					viewResults: "Ver Resultados",
					aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
					title: "i18n Benchmark"
				},
				zh: {
					viewResults: "查看结果",
					aTestApplicationDesignedTo: "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。",
					title: "i18n Benchmark"
				},
				ja: {
					viewResults: "結果を見る",
					aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
					title: "i18n Benchmark"
				},
				ko: {
					viewResults: "결과 보기",
					aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
					title: "i18n Benchmark"
				},
				ru: {
					viewResults: "Посмотреть результаты",
					aTestApplicationDesignedTo: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
					title: "i18n Benchmark"
				}
			}
		},
		localIds: [
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/en/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/fr/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/es/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/de/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/it/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/pt/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/zh/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/ja/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/ko/messages.json",
			"hero::sync-json::./locales/{{locale}}/{{key}}.json::locales/ru/messages.json"
		]
	}
}, dt = () => ut, ft = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), pt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ft.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : pt(e ? `${e}.${String(n)}` : String(n)) }), mt = /* @__PURE__ */ new Set(), ht = (e, t, n) => {
	let r = dt()[e];
	return r ? Mt(r, t, n) : (mt.has(e) || (ct({ log: we })(typeof window > "u" ? `Dictionary ${lt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), mt.add(e)), pt(e));
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
}, X = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, yt = (e) => {
	if (typeof e == "string") return e;
	if (X(e)) return e.nodeType === "html" ? e[y] : e[re];
}, bt = (e, t) => {
	if (typeof e == "string") return t;
	if (X(e)) {
		let n = e.nodeType === "html" ? y : re;
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
}, Z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Z : {
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
		return vt(o, e, t);
	}
}, Ct = Z, wt = Z, Tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || X(e),
			transform: (e, n, r) => {
				if (X(e)) return (i) => xt(e, i, n, t.plugins, r);
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
}, Et = Z, Dt = Z;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Ot = (e) => Z, kt = Z, At = (e, t = !0) => [
	St(e ?? M.defaultLocale, t ? M.defaultLocale : void 0),
	Ct,
	wt,
	Tt,
	Ot(e ?? M.defaultLocale),
	kt,
	Et,
	Dt
], jt = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), Mt = (e, t, n) => {
	let { locale: r, selector: i } = et(t), a = He(r ?? M.defaultLocale, tt(i), n), o = Ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? At(r), c = $e(e, i), l = (e) => {
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
		if (i !== void 0) return h(i);
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
var Q = {
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
}, Bt = (e = Q) => {
	let { locales: t } = M;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!zt) for (let t = 0; t < (N.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(N.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Vt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !zt && N.storage.cookies) for (let n = 0; n < N.storage.cookies.length; n++) {
		let { name: r, attributes: i } = N.storage.cookies[n];
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
}, Ht = Bt(Q), Ut = (e, t) => Vt(e, {
	...Q,
	isCookieEnabled: t
}), Wt = () => {
	let { locale: e } = t($) ?? {}, r = a(null);
	n(() => {}, []), n(() => {
		e && r.current && r.current.currentLocale.set(e);
	}, [e]);
}, Gt = ({ children: e }) => (Wt(), e), Kt = () => {
	let { locale: e } = t($) ?? {}, r = a(null);
	n(() => {}, []), n(() => {
		e && r.current && (r.current.setLocale(e), r.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, qt = ({ children: e }) => (Kt(), e), Jt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Yt = (e, t = M?.locales, n = M?.defaultLocale) => {
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
}, $ = e({
	locale: Ht ?? M?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Xt = ({ locale: e, defaultLocale: t, variant: r, children: i, setLocale: a, disableEditor: s, isCookieEnabled: l }) => {
	let { locales: u, defaultLocale: d } = M ?? {}, [f, p] = o(e ?? Ht ?? t ?? d);
	n(() => {
		e && e !== f && p(e);
	}, [e]), n(() => {
		Jt();
	}, []);
	let m = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Ut(e, l);
		}
	}), h = Yt(f);
	return c($.Provider, {
		value: {
			locale: h,
			setLocale: m,
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
	}), [a, s] = o(() => i(e)), [l, u] = o(e.locale);
	return n(() => (s(i(e)), u(e.locale), e.on("change", () => {
		s(i(e)), u(e.locale);
	})), [e]), c(Le.Provider, {
		value: a,
		children: c(Zt, {
			locale: l,
			children: r
		})
	});
}, $t = (e) => new Ie({
	...e,
	registry: It()
});
$t({ locale: "en" });
function en() {
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
function tn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function nn(e) {
	return {};
}
function rn(e, t) {
	let n = $t();
	return n.activate(e), n;
}
function an({ children: e }) {
	let t = s().locale ?? "en", a = i(() => nn(t), [t]), l = i(() => rn(t, a), [t, a]), [u] = o(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		tn("AppRoot", u);
	}, [u]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		en();
	}, []), c(Qt, {
		i18n: l,
		children: e
	});
}
function on({ children: e }) {
	return c(an, { children: e });
}
function sn() {
	return c(on, { children: c(an, {}) });
}
export { sn as default };

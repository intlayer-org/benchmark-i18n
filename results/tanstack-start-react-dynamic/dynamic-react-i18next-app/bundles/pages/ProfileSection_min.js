import { createContext as e, createElement as t, useCallback as n, useContext as r, useEffect as i, useId as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), f = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), p = (e) => typeof e == "string", m = () => {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}, h = (e) => e == null ? "" : String(e), g = (e, t, n) => {
	e.forEach((e) => {
		t[e] && (n[e] = t[e]);
	});
}, _ = /###/g, v = (e) => e && e.includes("###") ? e.replace(_, ".") : e, y = (e) => !e || p(e), b = (e, t, n) => {
	let r = p(t) ? t.split(".") : t, i = 0;
	for (; i < r.length - 1;) {
		if (y(e)) return {};
		let t = v(r[i]);
		!e[t] && n && (e[t] = new n()), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i;
	}
	return y(e) ? {} : {
		obj: e,
		k: v(r[i])
	};
}, x = (e, t, n) => {
	let { obj: r, k: i } = b(e, t, Object);
	if (r !== void 0 || t.length === 1) {
		r[i] = n;
		return;
	}
	let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = b(e, o, Object);
	for (; s.obj === void 0 && o.length;) a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = b(e, o, Object), s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0);
	s.obj[`${s.k}.${a}`] = n;
}, S = (e, t, n, r) => {
	let { obj: i, k: a } = b(e, t, Object);
	i[a] = i[a] || [], i[a].push(n);
}, C = (e, t) => {
	let { obj: n, k: r } = b(e, t);
	if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, w = (e, t, n) => {
	let r = C(e, n);
	return r === void 0 ? C(t, n) : r;
}, T = (e, t, n) => {
	for (let r in t) r !== "__proto__" && r !== "constructor" && (r in e ? p(e[r]) || e[r] instanceof String || p(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : T(e[r], t[r], n) : e[r] = t[r]);
	return e;
}, E = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), D = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
}, O = (e) => p(e) ? e.replace(/[&<>"'\/]/g, (e) => D[e]) : e, k = class {
	constructor(e) {
		this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
	}
	getRegExp(e) {
		let t = this.regExpMap.get(e);
		if (t !== void 0) return t;
		let n = new RegExp(e);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
	}
}, A = [
	" ",
	",",
	"?",
	"!",
	";"
], ee = new k(20), te = (e, t, n) => {
	t ||= "", n ||= "";
	let r = A.filter((e) => !t.includes(e) && !n.includes(e));
	if (r.length === 0) return !0;
	let i = ee.getRegExp(`(${r.map((e) => e === "?" ? "\\?" : e).join("|")})`), a = !i.test(e);
	if (!a) {
		let t = e.indexOf(n);
		t > 0 && !i.test(e.substring(0, t)) && (a = !0);
	}
	return a;
}, j = (e, t, n = ".") => {
	if (!e) return;
	if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
	let r = t.split(n), i = e;
	for (let e = 0; e < r.length;) {
		if (!i || typeof i != "object") return;
		let t, a = "";
		for (let o = e; o < r.length; ++o) if (o !== e && (a += n), a += r[o], t = i[a], t !== void 0) {
			if ([
				"string",
				"number",
				"boolean"
			].includes(typeof t) && o < r.length - 1) continue;
			e += o - e + 1;
			break;
		}
		i = t;
	}
	return i;
}, M = (e) => e?.replace(/_/g, "-"), ne = {
	type: "logger",
	log(e) {
		this.output("log", e);
	},
	warn(e) {
		this.output("warn", e);
	},
	error(e) {
		this.output("error", e);
	},
	output(e, t) {
		console?.[e]?.apply?.(console, t);
	}
}, N = new class e {
	constructor(e, t = {}) {
		this.init(e, t);
	}
	init(e, t = {}) {
		this.prefix = t.prefix || "i18next:", this.logger = e || ne, this.options = t, this.debug = t.debug;
	}
	log(...e) {
		return this.forward(e, "log", "", !0);
	}
	warn(...e) {
		return this.forward(e, "warn", "", !0);
	}
	error(...e) {
		return this.forward(e, "error", "");
	}
	deprecate(...e) {
		return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
	}
	forward(e, t, n, r) {
		return r && !this.debug ? null : (p(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
	}
	create(t) {
		return new e(this.logger, {
			prefix: `${this.prefix}:${t}:`,
			...this.options
		});
	}
	clone(t) {
		return t ||= this.options, t.prefix = t.prefix || this.prefix, new e(this.logger, t);
	}
}(), P = class {
	constructor() {
		this.observers = {};
	}
	on(e, t) {
		return e.split(" ").forEach((e) => {
			this.observers[e] || (this.observers[e] = /* @__PURE__ */ new Map());
			let n = this.observers[e].get(t) || 0;
			this.observers[e].set(t, n + 1);
		}), this;
	}
	off(e, t) {
		if (this.observers[e]) {
			if (!t) {
				delete this.observers[e];
				return;
			}
			this.observers[e].delete(t);
		}
	}
	once(e, t) {
		let n = (...r) => {
			t(...r), this.off(e, n);
		};
		return this.on(e, n), this;
	}
	emit(e, ...t) {
		this.observers[e] && Array.from(this.observers[e].entries()).forEach(([e, n]) => {
			for (let r = 0; r < n; r++) e(...t);
		}), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, r]) => {
			for (let i = 0; i < r; i++) n(e, ...t);
		});
	}
}, F = class extends P {
	constructor(e, t = {
		ns: ["translation"],
		defaultNS: "translation"
	}) {
		super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
	}
	addNamespaces(e) {
		this.options.ns.includes(e) || this.options.ns.push(e);
	}
	removeNamespaces(e) {
		let t = this.options.ns.indexOf(e);
		t > -1 && this.options.ns.splice(t, 1);
	}
	getResource(e, t, n, r = {}) {
		let i = r.keySeparator === void 0 ? this.options.keySeparator : r.keySeparator, a = r.ignoreJSONStructure === void 0 ? this.options.ignoreJSONStructure : r.ignoreJSONStructure, o;
		e.includes(".") ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : p(n) && i ? o.push(...n.split(i)) : o.push(n)));
		let s = C(this.data, o);
		return !s && !t && !n && e.includes(".") && (e = o[0], t = o[1], n = o.slice(2).join(".")), s || !a || !p(n) ? s : j(this.data?.[e]?.[t], n, i);
	}
	addResource(e, t, n, r, i = { silent: !1 }) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = [e, t];
		n && (o = o.concat(a ? n.split(a) : n)), e.includes(".") && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), x(this.data, o, r), i.silent || this.emit("added", e, t, n, r);
	}
	addResources(e, t, n, r = { silent: !1 }) {
		for (let r in n) (p(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], { silent: !0 });
		r.silent || this.emit("added", e, t, n);
	}
	addResourceBundle(e, t, n, r, i, a = {
		silent: !1,
		skipCopy: !1
	}) {
		let o = [e, t];
		e.includes(".") && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
		let s = C(this.data, o) || {};
		a.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? T(s, n, i) : s = {
			...s,
			...n
		}, x(this.data, o, s), a.silent || this.emit("added", e, t, n);
	}
	removeResourceBundle(e, t) {
		this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
	}
	hasResourceBundle(e, t) {
		return this.getResource(e, t) !== void 0;
	}
	getResourceBundle(e, t) {
		return t ||= this.options.defaultNS, this.getResource(e, t);
	}
	getDataByLanguage(e) {
		return this.data[e];
	}
	hasLanguageSomeTranslations(e) {
		let t = this.getDataByLanguage(e);
		return !!(t && Object.keys(t) || []).find((e) => t[e] && Object.keys(t[e]).length > 0);
	}
	toJSON() {
		return this.data;
	}
}, I = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e;
	},
	handle(e, t, n, r, i) {
		return e.forEach((e) => {
			t = this.processors[e]?.process(t, n, r, i) ?? t;
		}), t;
	}
}, L = Symbol("i18next/PATH_KEY");
function re() {
	let e = [], t = Object.create(null), n;
	return t.get = (r, i) => (n?.revoke?.(), i === L ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function R(e, t) {
	let { [L]: n } = e(re()), r = t?.keySeparator ?? ".", i = t?.nsSeparator ?? ":";
	if (n.length > 1 && i) {
		let e = t?.ns, a = Array.isArray(e) ? e : null;
		if (a && a.length > 1 && a.slice(1).includes(n[0])) return `${n[0]}${i}${n.slice(1).join(r)}`;
	}
	return n.join(r);
}
var z = (e) => !p(e) && typeof e != "boolean" && typeof e != "number", B = class e extends P {
	constructor(e, t = {}) {
		super(), g([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = N.create("translator"), this.checkedLoadedFor = {};
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e, t = { interpolation: {} }) {
		let n = { ...t };
		if (e == null) return !1;
		let r = this.resolve(e, n);
		if (r?.res === void 0) return !1;
		let i = z(r.res);
		return !(n.returnObjects === !1 && i);
	}
	extractFromKey(e, t) {
		let n = t.nsSeparator === void 0 ? this.options.nsSeparator : t.nsSeparator;
		n === void 0 && (n = ":");
		let r = t.keySeparator === void 0 ? this.options.keySeparator : t.keySeparator, i = t.ns || this.options.defaultNS || [], a = n && e.includes(n), o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !te(e, n, r);
		if (a && !o) {
			let t = e.match(this.interpolator.nestingRegexp);
			if (t && t.length > 0) return {
				key: e,
				namespaces: p(i) ? [i] : i
			};
			let a = e.split(n);
			(n !== r || n === r && this.options.ns.includes(a[0])) && (i = a.shift()), e = a.join(r);
		}
		return {
			key: e,
			namespaces: p(i) ? [i] : i
		};
	}
	translate(t, n, r) {
		let i = typeof n == "object" ? { ...n } : n;
		if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = { ...i }), i ||= {}, t == null) return "";
		typeof t == "function" && (t = R(t, {
			...this.options,
			...i
		})), Array.isArray(t) || (t = [String(t)]), t = t.map((e) => typeof e == "function" ? R(e, {
			...this.options,
			...i
		}) : String(e));
		let a = i.returnDetails === void 0 ? this.options.returnDetails : i.returnDetails, o = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, { key: s, namespaces: c } = this.extractFromKey(t[t.length - 1], i), l = c[c.length - 1], u = i.nsSeparator === void 0 ? this.options.nsSeparator : i.nsSeparator;
		u === void 0 && (u = ":");
		let d = i.lng || this.language, f = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (d?.toLowerCase() === "cimode") return f ? a ? {
			res: `${l}${u}${s}`,
			usedKey: s,
			exactUsedKey: s,
			usedLng: d,
			usedNS: l,
			usedParams: this.getUsedParamsDetails(i)
		} : `${l}${u}${s}` : a ? {
			res: s,
			usedKey: s,
			exactUsedKey: s,
			usedLng: d,
			usedNS: l,
			usedParams: this.getUsedParamsDetails(i)
		} : s;
		let m = this.resolve(t, i), h = m?.res, g = m?.usedKey || s, _ = m?.exactUsedKey || s, v = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		], y = i.joinArrays === void 0 ? this.options.joinArrays : i.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, x = i.count !== void 0 && !p(i.count), S = e.hasDefaultValue(i), C = x ? this.pluralResolver.getSuffix(d, i.count, i) : "", w = i.ordinal && x ? this.pluralResolver.getSuffix(d, i.count, { ordinal: !1 }) : "", T = x && !i.ordinal && i.count === 0, E = T && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${C}`] || i[`defaultValue${w}`] || i.defaultValue, D = h;
		b && !h && S && (D = E);
		let O = z(D), k = Object.prototype.toString.apply(D);
		if (b && D && O && !v.includes(k) && !(p(y) && Array.isArray(D))) {
			if (!i.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, D, {
					...i,
					ns: c
				}) : `key '${s} (${this.language})' returned an object instead of string.`;
				return a ? (m.res = e, m.usedParams = this.getUsedParamsDetails(i), m) : e;
			}
			if (o) {
				let e = Array.isArray(D), t = e ? [] : {}, n = e ? _ : g;
				for (let e in D) if (Object.prototype.hasOwnProperty.call(D, e)) {
					let r = `${n}${o}${e}`;
					S && !h ? t[e] = this.translate(r, {
						...i,
						defaultValue: z(E) ? E[e] : void 0,
						joinArrays: !1,
						ns: c
					}) : t[e] = this.translate(r, {
						...i,
						joinArrays: !1,
						ns: c
					}), t[e] === r && (t[e] = D[e]);
				}
				h = t;
			}
		} else if (b && p(y) && Array.isArray(h)) h = h.join(y), h &&= this.extendTranslation(h, t, i, r);
		else {
			let e = !1, n = !1;
			!this.isValidLookup(h) && S && (e = !0, h = E), this.isValidLookup(h) || (n = !0, h = s);
			let a = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && n ? void 0 : h, c = S && E !== h && this.options.updateMissing;
			if (n || e || c) {
				if (this.logger.log(c ? "updateKey" : "missingKey", d, l, s, c ? E : h), o) {
					let e = this.resolve(s, {
						...i,
						keySeparator: !1
					});
					e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let e = [], t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && t && t[0]) for (let n = 0; n < t.length; n++) e.push(t[n]);
				else this.options.saveMissingTo === "all" ? e = this.languageUtils.toResolveHierarchy(i.lng || this.language) : e.push(i.lng || this.language);
				let n = (e, t, n) => {
					let r = S && n !== h ? n : a;
					this.options.missingKeyHandler ? this.options.missingKeyHandler(e, l, t, r, c, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, l, t, r, c, i), this.emit("missingKey", e, l, t, h);
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && x ? e.forEach((e) => {
					let t = this.pluralResolver.getSuffixes(e, i);
					T && i[`defaultValue${this.options.pluralSeparator}zero`] && !t.includes(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach((t) => {
						n([e], s + t, i[`defaultValue${t}`] || E);
					});
				}) : n(e, s, E));
			}
			h = this.extendTranslation(h, t, i, m, r), n && h === s && this.options.appendNamespaceToMissingKey && (h = `${l}${u}${s}`), (n || e) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${u}${s}` : s, e ? h : void 0, i));
		}
		return a ? (m.res = h, m.usedParams = this.getUsedParamsDetails(i), m) : h;
	}
	extendTranslation(e, t, n, r, i) {
		if (this.i18nFormat?.parse) e = this.i18nFormat.parse(e, {
			...this.options.interpolation.defaultVariables,
			...n
		}, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, { resolved: r });
		else if (!n.skipInterpolation) {
			n.interpolation && this.interpolator.init({
				...n,
				interpolation: {
					...this.options.interpolation,
					...n.interpolation
				}
			});
			let a = p(e) && (n?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : n.interpolation.skipOnVariables), o;
			if (a) {
				let t = e.match(this.interpolator.nestingRegexp);
				o = t && t.length;
			}
			let s = n.replace && !p(n.replace) ? n.replace : n;
			if (this.options.interpolation.defaultVariables && (s = {
				...this.options.interpolation.defaultVariables,
				...s
			}), e = this.interpolator.interpolate(e, s, n.lng || this.language || r.usedLng, n), a) {
				let t = e.match(this.interpolator.nestingRegexp), r = t && t.length;
				o < r && (n.nest = !1);
			}
			!n.lng && r && r.res && (n.lng = this.language || r.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, (...e) => i?.[0] === e[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null) : this.translate(...e, t), n)), n.interpolation && this.interpolator.reset();
		}
		let a = n.postProcess || this.options.postProcess, o = p(a) ? [a] : a;
		return e != null && o?.length && n.applyPostProcessor !== !1 && (e = I.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...r,
				usedParams: this.getUsedParamsDetails(n)
			},
			...n
		} : n, this)), e;
	}
	resolve(e, t = {}) {
		let n, r, i, a, o;
		return p(e) && (e = [e]), Array.isArray(e) && (e = e.map((e) => typeof e == "function" ? R(e, {
			...this.options,
			...t
		}) : e)), e.forEach((e) => {
			if (this.isValidLookup(n)) return;
			let s = this.extractFromKey(e, t), c = s.key;
			r = c;
			let l = s.namespaces;
			this.options.fallbackNS && (l = l.concat(this.options.fallbackNS));
			let u = t.count !== void 0 && !p(t.count), d = u && !t.ordinal && t.count === 0, f = t.context !== void 0 && (p(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
			l.forEach((e) => {
				this.isValidLookup(n) || (o = e, !this.checkedLoadedFor[`${m[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (this.checkedLoadedFor[`${m[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((r) => {
					if (this.isValidLookup(n)) return;
					a = r;
					let o = [c];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(o, c, r, e, t);
					else {
						let e;
						u && (e = this.pluralResolver.getSuffix(r, t.count, t));
						let n = `${this.options.pluralSeparator}zero`, i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (u && (t.ordinal && e.startsWith(i) && o.push(c + e.replace(i, this.options.pluralSeparator)), o.push(c + e), d && o.push(c + n)), f) {
							let r = `${c}${this.options.contextSeparator || "_"}${t.context}`;
							o.push(r), u && (t.ordinal && e.startsWith(i) && o.push(r + e.replace(i, this.options.pluralSeparator)), o.push(r + e), d && o.push(r + n));
						}
					}
					let s;
					for (; s = o.pop();) this.isValidLookup(n) || (i = s, n = this.getResource(r, e, s, t));
				}));
			});
		}), {
			res: n,
			usedKey: r,
			exactUsedKey: i,
			usedLng: a,
			usedNS: o
		};
	}
	isValidLookup(e) {
		return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
	}
	getResource(e, t, n, r = {}) {
		return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
	}
	getUsedParamsDetails(e = {}) {
		let t = [
			"defaultValue",
			"ordinal",
			"context",
			"replace",
			"lng",
			"lngs",
			"fallbackLng",
			"ns",
			"keySeparator",
			"nsSeparator",
			"returnObjects",
			"returnDetails",
			"joinArrays",
			"postProcess",
			"interpolation"
		], n = e.replace && !p(e.replace), r = n ? e.replace : e;
		if (n && e.count !== void 0 && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
			...this.options.interpolation.defaultVariables,
			...r
		}), !n) {
			r = { ...r };
			for (let e of t) delete r[e];
		}
		return r;
	}
	static hasDefaultValue(e) {
		for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t) && t.startsWith("defaultValue") && e[t] !== void 0) return !0;
		return !1;
	}
}, V = class {
	constructor(e) {
		this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = N.create("languageUtils");
	}
	getScriptPartFromCode(e) {
		if (e = M(e), !e || !e.includes("-")) return null;
		let t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (e = M(e), !e || !e.includes("-")) return e;
		let t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (p(e) && e.includes("-")) {
			let t;
			try {
				t = Intl.getCanonicalLocales(e)[0];
			} catch {}
			return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
	}
	isSupportedCode(e) {
		return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
	}
	getBestMatchFromCodes(e) {
		if (!e) return null;
		let t;
		return e.forEach((e) => {
			if (t) return;
			let n = this.formatLanguageCode(e);
			(!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
		}), !t && this.options.supportedLngs && e.forEach((e) => {
			if (t) return;
			let n = this.getScriptPartFromCode(e);
			if (this.isSupportedCode(n)) return t = n;
			let r = this.getLanguagePartFromCode(e);
			if (this.isSupportedCode(r)) return t = r;
			t = this.options.supportedLngs.find((e) => e === r ? !0 : !e.includes("-") && !r.includes("-") ? !1 : !!(e.includes("-") && !r.includes("-") && e.slice(0, e.indexOf("-")) === r || e.startsWith(r) && r.length > 1));
		}), t ||= this.getFallbackCodes(this.options.fallbackLng)[0], t;
	}
	getFallbackCodes(e, t) {
		if (!e) return [];
		if (typeof e == "function" && (e = e(t)), p(e) && (e = [e]), Array.isArray(e)) return e;
		if (!t) return e.default || [];
		let n = e[t];
		return n ||= e[this.getScriptPartFromCode(t)], n ||= e[this.formatLanguageCode(t)], n ||= e[this.getLanguagePartFromCode(t)], n ||= e.default, n || [];
	}
	toResolveHierarchy(e, t) {
		let n = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], i = (e) => {
			e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
		};
		return p(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : p(e) && i(this.formatLanguageCode(e)), n.forEach((e) => {
			r.includes(e) || i(this.formatLanguageCode(e));
		}), r;
	}
}, H = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
}, U = {
	select: (e) => e === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
}, ie = class {
	constructor(e, t = {}) {
		this.languageUtils = e, this.options = t, this.logger = N.create("pluralResolver"), this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(e, t = {}) {
		let n = M(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
			cleanedCode: n,
			type: r
		});
		if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
		let a;
		try {
			a = new Intl.PluralRules(n, { type: r });
		} catch {
			if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), U;
			if (!e.match(/-|_/)) return U;
			let n = this.languageUtils.getLanguagePartFromCode(e);
			a = this.getRule(n, t);
		}
		return this.pluralRulesCache[i] = a, a;
	}
	needsPlural(e, t = {}) {
		let n = this.getRule(e, t);
		return n ||= this.getRule("dev", t), n?.resolvedOptions().pluralCategories.length > 1;
	}
	getPluralFormsOfKey(e, t, n = {}) {
		return this.getSuffixes(e, n).map((e) => `${t}${e}`);
	}
	getSuffixes(e, t = {}) {
		let n = this.getRule(e, t);
		return n ||= this.getRule("dev", t), n ? n.resolvedOptions().pluralCategories.sort((e, t) => H[e] - H[t]).map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : [];
	}
	getSuffix(e, t, n = {}) {
		let r = this.getRule(e, n);
		return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
	}
}, W = (e, t, n, r = ".", i = !0) => {
	let a = w(e, t, n);
	return !a && i && p(n) && (a = j(e, n, r), a === void 0 && (a = j(t, n, r))), a;
}, G = (e) => e.replace(/\$/g, "$$$$"), K = class {
	constructor(e = {}) {
		this.logger = N.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((e) => e), this.init(e);
	}
	init(e = {}) {
		e.interpolation ||= { escapeValue: !0 };
		let { escape: t, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: a, suffix: o, suffixEscaped: s, formatSeparator: c, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: f, nestingSuffix: p, nestingSuffixEscaped: m, nestingOptionsSeparator: h, maxReplaces: g, alwaysFormat: _ } = e.interpolation;
		this.escape = t === void 0 ? O : t, this.escapeValue = n === void 0 ? !0 : n, this.useRawValueToEscape = r === void 0 ? !1 : r, this.prefix = i ? E(i) : a || "{{", this.suffix = o ? E(o) : s || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = d ? E(d) : f || E("$t("), this.nestingSuffix = p ? E(p) : m || E(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = _ === void 0 ? !1 : _, this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
		this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(e, t, n, r) {
		let i, a, o, s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (e) => {
			if (!e.includes(this.formatSeparator)) {
				let i = W(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(i, void 0, n, {
					...r,
					...t,
					interpolationkey: e
				}) : i;
			}
			let i = e.split(this.formatSeparator), a = i.shift().trim(), o = i.join(this.formatSeparator).trim();
			return this.format(W(t, s, a, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
				...r,
				...t,
				interpolationkey: a
			});
		};
		this.resetRegExp();
		let l = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, u = r?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : r.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: (e) => G(e)
		}, {
			regex: this.regexp,
			safeValue: (e) => this.escapeValue ? G(this.escape(e)) : G(e)
		}].forEach((t) => {
			for (o = 0; i = t.regex.exec(e);) {
				let n = i[1].trim();
				if (a = c(n), a === void 0) if (typeof l == "function") {
					let t = l(e, i, r);
					a = p(t) ? t : "";
				} else if (r && Object.prototype.hasOwnProperty.call(r, n)) a = "";
				else if (u) {
					a = i[0];
					continue;
				} else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), a = "";
				else !p(a) && !this.useRawValueToEscape && (a = h(a));
				let s = t.safeValue(a);
				if (e = e.replace(i[0], s), u ? (t.regex.lastIndex += a.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, o++, o >= this.maxReplaces) break;
			}
		}), e;
	}
	nest(e, t, n = {}) {
		let r, i, a, o = (e, t) => {
			let n = this.nestingOptionsSeparator;
			if (!e.includes(n)) return e;
			let r = e.split(RegExp(`${E(n)}[ ]*{`)), i = `{${r[1]}`;
			e = r[0], i = this.interpolate(i, a);
			let o = i.match(/'/g), s = i.match(/"/g);
			((o?.length ?? 0) % 2 == 0 && !s || (s?.length ?? 0) % 2 != 0) && (i = i.replace(/'/g, "\""));
			try {
				a = JSON.parse(i), t && (a = {
					...t,
					...a
				});
			} catch (t) {
				return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${i}`;
			}
			return a.defaultValue && a.defaultValue.includes(this.prefix) && delete a.defaultValue, e;
		};
		for (; r = this.nestingRegexp.exec(e);) {
			let s = [];
			a = { ...n }, a = a.replace && !p(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
			let c = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
			if (c !== -1 && (s = r[1].slice(c).split(this.formatSeparator).map((e) => e.trim()).filter(Boolean), r[1] = r[1].slice(0, c)), i = t(o.call(this, r[1].trim(), a), a), i && r[0] === e && !p(i)) return i;
			p(i) || (i = h(i)), i ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), ""), s.length && (i = s.reduce((e, t) => this.format(e, t, n.lng, {
				...n,
				interpolationkey: r[1].trim()
			}), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
		}
		return e;
	}
}, ae = (e) => {
	let t = e.toLowerCase().trim(), n = {};
	if (e.includes("(")) {
		let r = e.split("(");
		t = r[0].toLowerCase().trim();
		let i = r[1].slice(0, -1);
		t === "currency" && !i.includes(":") ? n.currency ||= i.trim() : t === "relativetime" && !i.includes(":") ? n.range ||= i.trim() : i.split(";").forEach((e) => {
			if (e) {
				let [t, ...r] = e.split(":"), i = r.join(":").trim().replace(/^'+|'+$/g, ""), a = t.trim();
				n[a] || (n[a] = i), i === "false" && (n[a] = !1), i === "true" && (n[a] = !0), isNaN(i) || (n[a] = parseInt(i, 10));
			}
		});
	}
	return {
		formatName: t,
		formatOptions: n
	};
}, oe = (e) => {
	let t = {};
	return (n, r, i) => {
		let a = i;
		i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
			...a,
			[i.interpolationkey]: void 0
		});
		let o = r + JSON.stringify(a), s = t[o];
		return s || (s = e(M(r), i), t[o] = s), s(n);
	};
}, se = (e) => (t, n, r) => e(M(n), r)(t), ce = class {
	constructor(e = {}) {
		this.logger = N.create("formatter"), this.options = e, this.init(e);
	}
	init(e, t = { interpolation: {} }) {
		this.formatSeparator = t.interpolation.formatSeparator || ",";
		let n = t.cacheInBuiltFormats ? oe : se;
		this.formats = {
			number: n((e, t) => {
				let n = new Intl.NumberFormat(e, { ...t });
				return (e) => n.format(e);
			}),
			currency: n((e, t) => {
				let n = new Intl.NumberFormat(e, {
					...t,
					style: "currency"
				});
				return (e) => n.format(e);
			}),
			datetime: n((e, t) => {
				let n = new Intl.DateTimeFormat(e, { ...t });
				return (e) => n.format(e);
			}),
			relativetime: n((e, t) => {
				let n = new Intl.RelativeTimeFormat(e, { ...t });
				return (e) => n.format(e, t.range || "day");
			}),
			list: n((e, t) => {
				let n = new Intl.ListFormat(e, { ...t });
				return (e) => n.format(e);
			})
		};
	}
	add(e, t) {
		this.formats[e.toLowerCase().trim()] = t;
	}
	addCached(e, t) {
		this.formats[e.toLowerCase().trim()] = oe(t);
	}
	format(e, t, n, r = {}) {
		if (!t || e == null) return e;
		let i = t.split(this.formatSeparator);
		if (i.length > 1 && i[0].indexOf("(") > 1 && !i[0].includes(")") && i.find((e) => e.includes(")"))) {
			let e = i.findIndex((e) => e.includes(")"));
			i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator);
		}
		return i.reduce((e, t) => {
			let { formatName: i, formatOptions: a } = ae(t);
			if (this.formats[i]) {
				let t = e;
				try {
					let o = r?.formatParams?.[r.interpolationkey] || {}, s = o.locale || o.lng || r.locale || r.lng || n;
					t = this.formats[i](e, s, {
						...a,
						...r,
						...o
					});
				} catch (e) {
					this.logger.warn(e);
				}
				return t;
			} else this.logger.warn(`there was no format function for ${i}`);
			return e;
		}, e);
	}
}, le = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, ue = class extends P {
	constructor(e, t, n, r = {}) {
		super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = N.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
	}
	queueLoad(e, t, n, r) {
		let i = {}, a = {}, o = {}, s = {};
		return e.forEach((e) => {
			let r = !0;
			t.forEach((t) => {
				let o = `${e}|${t}`;
				!n.reload && this.store.hasResourceBundle(e, t) ? this.state[o] = 2 : this.state[o] < 0 || (this.state[o] === 1 ? a[o] === void 0 && (a[o] = !0) : (this.state[o] = 1, r = !1, a[o] === void 0 && (a[o] = !0), i[o] === void 0 && (i[o] = !0), s[t] === void 0 && (s[t] = !0)));
			}), r || (o[e] = !0);
		}), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
			pending: a,
			pendingCount: Object.keys(a).length,
			loaded: {},
			errors: [],
			callback: r
		}), {
			toLoad: Object.keys(i),
			pending: Object.keys(a),
			toLoadLanguages: Object.keys(o),
			toLoadNamespaces: Object.keys(s)
		};
	}
	loaded(e, t, n) {
		let r = e.split("|"), i = r[0], a = r[1];
		t && this.emit("failedLoading", i, a, t), !t && n && this.store.addResourceBundle(i, a, n, void 0, void 0, { skipCopy: !0 }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
		let o = {};
		this.queue.forEach((n) => {
			S(n.loaded, [i], a), le(n, e), t && n.errors.push(t), n.pendingCount === 0 && !n.done && (Object.keys(n.loaded).forEach((e) => {
				o[e] || (o[e] = {});
				let t = n.loaded[e];
				t.length && t.forEach((t) => {
					o[e][t] === void 0 && (o[e][t] = !0);
				});
			}), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback());
		}), this.emit("loaded", o), this.queue = this.queue.filter((e) => !e.done);
	}
	read(e, t, n, r = 0, i = this.retryTimeout, a) {
		if (!e.length) return a(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng: e,
				ns: t,
				fcName: n,
				tried: r,
				wait: i,
				callback: a
			});
			return;
		}
		this.readingCalls++;
		let o = (o, s) => {
			if (this.readingCalls--, this.waitingReads.length > 0) {
				let e = this.waitingReads.shift();
				this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
			}
			if (o && s && r < this.maxRetries) {
				setTimeout(() => {
					this.read(e, t, n, r + 1, i * 2, a);
				}, i);
				return;
			}
			a(o, s);
		}, s = this.backend[n].bind(this.backend);
		if (s.length === 2) {
			try {
				let n = s(e, t);
				n && typeof n.then == "function" ? n.then((e) => o(null, e)).catch(o) : o(null, n);
			} catch (e) {
				o(e);
			}
			return;
		}
		return s(e, t, o);
	}
	prepareLoading(e, t, n = {}, r) {
		if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
		p(e) && (e = this.languageUtils.toResolveHierarchy(e)), p(t) && (t = [t]);
		let i = this.queueLoad(e, t, n, r);
		if (!i.toLoad.length) return i.pending.length || r(), null;
		i.toLoad.forEach((e) => {
			this.loadOne(e);
		});
	}
	load(e, t, n) {
		this.prepareLoading(e, t, {}, n);
	}
	reload(e, t, n) {
		this.prepareLoading(e, t, { reload: !0 }, n);
	}
	loadOne(e, t = "") {
		let n = e.split("|"), r = n[0], i = n[1];
		this.read(r, i, "read", void 0, void 0, (n, a) => {
			n && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, n), !n && a && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, a), this.loaded(e, n, a);
		});
	}
	saveMissing(e, t, n, r, i, a = {}, o = () => {}) {
		if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
			this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return;
		}
		if (!(n == null || n === "")) {
			if (this.backend?.create) {
				let s = {
					...a,
					isUpdate: i
				}, c = this.backend.create.bind(this.backend);
				if (c.length < 6) try {
					let i;
					i = c.length === 5 ? c(e, t, n, r, s) : c(e, t, n, r), i && typeof i.then == "function" ? i.then((e) => o(null, e)).catch(o) : o(null, i);
				} catch (e) {
					o(e);
				}
				else c(e, t, n, r, o, s);
			}
			!e || !e[0] || this.store.addResource(e[0], t, n, r);
		}
	}
}, q = () => ({
	debug: !1,
	initAsync: !0,
	ns: ["translation"],
	defaultNS: ["translation"],
	fallbackLng: ["dev"],
	fallbackNS: !1,
	supportedLngs: !1,
	nonExplicitSupportedLngs: !1,
	load: "all",
	preload: !1,
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	partialBundledLanguages: !1,
	saveMissing: !1,
	updateMissing: !1,
	saveMissingTo: "fallback",
	saveMissingPlurals: !0,
	missingKeyHandler: !1,
	missingInterpolationHandler: !1,
	postProcess: !1,
	postProcessPassResolved: !1,
	returnNull: !1,
	returnEmptyString: !0,
	returnObjects: !1,
	joinArrays: !1,
	returnedObjectHandler: !1,
	parseMissingKeyHandler: !1,
	appendNamespaceToMissingKey: !1,
	appendNamespaceToCIMode: !1,
	overloadTranslationOptionHandler: (e) => {
		let t = {};
		if (typeof e[1] == "object" && (t = e[1]), p(e[1]) && (t.defaultValue = e[1]), p(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
			let n = e[3] || e[2];
			Object.keys(n).forEach((e) => {
				t[e] = n[e];
			});
		}
		return t;
	},
	interpolation: {
		escapeValue: !0,
		prefix: "{{",
		suffix: "}}",
		formatSeparator: ",",
		unescapePrefix: "-",
		nestingPrefix: "$t(",
		nestingSuffix: ")",
		nestingOptionsSeparator: ",",
		maxReplaces: 1e3,
		skipOnVariables: !0
	},
	cacheInBuiltFormats: !0
}), de = (e) => (p(e.ns) && (e.ns = [e.ns]), p(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), p(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), J = () => {}, fe = (e) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
		typeof e[t] == "function" && (e[t] = e[t].bind(e));
	});
}, Y = class e extends P {
	constructor(e = {}, t) {
		if (super(), this.options = de(e), this.services = {}, this.logger = N, this.modules = { external: [] }, fe(this), t && !this.isInitialized && !e.isClone) {
			if (!this.options.initAsync) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init(e = {}, t) {
		this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (p(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
		let n = q();
		this.options = {
			...n,
			...this.options,
			...de(e)
		}, this.options.interpolation = {
			...n.interpolation,
			...this.options.interpolation
		}, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler);
		let r = (e) => e ? typeof e == "function" ? new e() : e : null;
		if (!this.options.isClone) {
			this.modules.logger ? N.init(r(this.modules.logger), this.options) : N.init(null, this.options);
			let e;
			e = this.modules.formatter ? this.modules.formatter : ce;
			let t = new V(this.options);
			this.store = new F(this.options.resources, this.options);
			let n = this.services;
			n.logger = N, n.resourceStore = this.store, n.languageUtils = t, n.pluralResolver = new ie(t, { prepend: this.options.pluralSeparator }), e && (n.formatter = r(e), n.formatter.init && n.formatter.init(n, this.options), this.options.interpolation.format = n.formatter.format.bind(n.formatter)), n.interpolator = new K(this.options), n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, n.backendConnector = new ue(r(this.modules.backend), n.resourceStore, n, this.options), n.backendConnector.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.languageDetector && (n.languageDetector = r(this.modules.languageDetector), n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)), this.modules.i18nFormat && (n.i18nFormat = r(this.modules.i18nFormat), n.i18nFormat.init && n.i18nFormat.init(this)), this.translator = new B(this.services, this.options), this.translator.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.external.forEach((e) => {
				e.init && e.init(this);
			});
		}
		if (this.format = this.options.interpolation.format, t ||= J, this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			e.length > 0 && e[0] !== "dev" && (this.options.lng = e[0]);
		}
		!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), [
			"getResource",
			"hasResourceBundle",
			"getResourceBundle",
			"getDataByLanguage"
		].forEach((e) => {
			this[e] = (...t) => this.store[e](...t);
		}), [
			"addResource",
			"addResources",
			"addResourceBundle",
			"removeResourceBundle"
		].forEach((e) => {
			this[e] = (...t) => (this.store[e](...t), this);
		});
		let i = m(), a = () => {
			let e = (e, n) => {
				this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(n), t(e, n);
			};
			if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, e);
		};
		return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), i;
	}
	loadResources(e, t = J) {
		let n = t, r = p(e) ? e : this.language;
		if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
			if (r?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
			let e = [], t = (t) => {
				t && t !== "cimode" && this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
					t !== "cimode" && (e.includes(t) || e.push(t));
				});
			};
			r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e) => t(e)), this.options.preload?.forEach?.((e) => t(e)), this.services.backendConnector.load(e, this.options.ns, (e) => {
				!e && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(e);
			});
		} else n(null);
	}
	reloadResources(e, t, n) {
		let r = m();
		return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e ||= this.languages, t ||= this.options.ns, n ||= J, this.services.backendConnector.reload(e, t, (e) => {
			r.resolve(), n(e);
		}), r;
	}
	use(e) {
		if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && I.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
	}
	setResolvedLanguage(e) {
		if (!(!e || !this.languages) && !["cimode", "dev"].includes(e)) {
			for (let e = 0; e < this.languages.length; e++) {
				let t = this.languages[e];
				if (!["cimode", "dev"].includes(t) && this.store.hasLanguageSomeTranslations(t)) {
					this.resolvedLanguage = t;
					break;
				}
			}
			!this.resolvedLanguage && !this.languages.includes(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
		}
	}
	changeLanguage(e, t) {
		this.isLanguageChangingTo = e;
		let n = m();
		this.emit("languageChanging", e);
		let r = (e) => {
			this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e);
		}, i = (i, a) => {
			a ? this.isLanguageChangingTo === e && (r(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e));
		}, a = (t) => {
			!e && !t && this.services.languageDetector && (t = []);
			let n = p(t) ? t : t && t[0], a = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(p(t) ? [t] : t);
			a && (this.language || r(a), this.translator.language || this.translator.changeLanguage(a), this.services.languageDetector?.cacheUserLanguage?.(a)), this.loadResources(a, (e) => {
				i(e, a);
			});
		};
		return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), n;
	}
	getFixedT(e, t, n) {
		let r = (e, t, ...i) => {
			let a;
			a = typeof t == "object" ? { ...t } : this.options.overloadTranslationOptionHandler([e, t].concat(i)), a.lng = a.lng || r.lng, a.lngs = a.lngs || r.lngs, a.ns = a.ns || r.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || n || r.keyPrefix);
			let o = {
				...this.options,
				...a
			};
			typeof a.keyPrefix == "function" && (a.keyPrefix = R(a.keyPrefix, o));
			let s = this.options.keySeparator || ".", c;
			return a.keyPrefix && Array.isArray(e) ? c = e.map((e) => (typeof e == "function" && (e = R(e, o)), `${a.keyPrefix}${s}${e}`)) : (typeof e == "function" && (e = R(e, o)), c = a.keyPrefix ? `${a.keyPrefix}${s}${e}` : e), this.t(c, a);
		};
		return p(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
	}
	t(...e) {
		return this.translator?.translate(...e);
	}
	exists(...e) {
		return this.translator?.exists(...e);
	}
	setDefaultNamespace(e) {
		this.options.defaultNS = e;
	}
	hasLoadedNamespace(e, t = {}) {
		if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
		if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
		let n = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
		if (n.toLowerCase() === "cimode") return !0;
		let a = (e, t) => {
			let n = this.services.backendConnector.state[`${e}|${t}`];
			return n === -1 || n === 0 || n === 2;
		};
		if (t.precheck) {
			let e = t.precheck(this, a);
			if (e !== void 0) return e;
		}
		return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, e) && (!r || a(i, e)));
	}
	loadNamespaces(e, t) {
		let n = m();
		return this.options.ns ? (p(e) && (e = [e]), e.forEach((e) => {
			this.options.ns.includes(e) || this.options.ns.push(e);
		}), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	loadLanguages(e, t) {
		let n = m();
		p(e) && (e = [e]);
		let r = this.options.preload || [], i = e.filter((e) => !r.includes(e) && this.services.languageUtils.isSupportedCode(e));
		return i.length ? (this.options.preload = r.concat(i), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	dir(e) {
		if (e ||= this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
		try {
			let t = new Intl.Locale(e);
			if (t && t.getTextInfo) {
				let e = t.getTextInfo();
				if (e && e.direction) return e.direction;
			}
		} catch {}
		let t = /* @__PURE__ */ "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb".split("."), n = this.services?.languageUtils || new V(q());
		return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(n.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(t = {}, n) {
		let r = new e(t, n);
		return r.createInstance = e.createInstance, r;
	}
	cloneInstance(t = {}, n = J) {
		let r = t.forkResourceStore;
		r && delete t.forkResourceStore;
		let i = {
			...this.options,
			...t,
			isClone: !0
		}, a = new e(i);
		if ((t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)), [
			"store",
			"services",
			"language"
		].forEach((e) => {
			a[e] = this[e];
		}), a.services = { ...this.services }, a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, r && (a.store = new F(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t] }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r] }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), t.interpolation) {
			let e = {
				...q().interpolation,
				...this.options.interpolation,
				...t.interpolation
			}, n = {
				...i,
				interpolation: e
			};
			a.services.interpolator = new K(n);
		}
		return a.translator = new B(a.services, i), a.translator.on("*", (e, ...t) => {
			a.emit(e, ...t);
		}), a.init(i, n), a.translator.options = i, a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a;
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		};
	}
}.createInstance();
Y.createInstance, Y.dir, Y.init, Y.loadResources, Y.reloadResources, Y.use, Y.changeLanguage, Y.getFixedT, Y.t, Y.exists, Y.setDefaultNamespace, Y.hasLoadedNamespace, Y.loadNamespaces, Y.loadLanguages;
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+7bc862f2056bc92b/node_modules/react-i18next/dist/es/utils.js
var pe = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	Q(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, me = {}, X = (e, t, n, r) => {
	Q(n) && me[n] || (Q(n) && (me[n] = /* @__PURE__ */ new Date()), pe(e, t, n, r));
}, he = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, Z = (e, t, n) => {
	e.loadNamespaces(t, he(e, n));
}, ge = (e, t, n, r) => {
	if (Q(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return Z(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, he(e, r));
}, _e = (e, t, n = {}) => !t.languages || !t.languages.length ? (X(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), Q = (e) => typeof e == "string", ve = (e) => typeof e == "object" && !!e, ye = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, be = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, xe = (e) => be[e], $ = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: (e) => e.replace(ye, xe),
	transDefaultProps: void 0
}, Se = (e = {}) => {
	$ = {
		...$,
		...e
	};
}, Ce = () => $, we, Te = (e) => {
	we = e;
}, Ee = () => we, De = {
	type: "3rdParty",
	init(e) {
		Se(e.options.react), Te(e);
	}
}, Oe = e(), ke = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(e) {
		e.forEach((e) => {
			this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
}, Ae = /* @__PURE__ */ d(((e) => {
	var t = f("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), je = /* @__PURE__ */ d(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!p) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var f = i[0].inst, m = i[1];
			return l(function() {
				f.value = n, f.getSnapshot = t, r(f) && m({ inst: f });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(f) && m({ inst: f }), e(function() {
					r(f) && m({ inst: f });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = f("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Me = (/* @__PURE__ */ d(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ae() : t.exports = je();
})))(), Ne = {
	t: (e, t) => {
		if (Q(t)) return t;
		if (ve(t) && Q(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, Pe = () => () => {}, Fe = (e, t = {}) => {
	let { i18n: a } = t, { i18n: l, defaultNS: u } = r(Oe) || {}, d = a || l || Ee();
	d && !d.reportNamespaces && (d.reportNamespaces = new ke()), d || X(d, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let f = o(() => ({
		...Ce(),
		...d?.options?.react,
		...t
	}), [d, t]), { useSuspense: p, keyPrefix: m } = f, h = e || u || d?.options?.defaultNS, g = Q(h) ? [h] : h || ["translation"], _ = o(() => g, g);
	d?.reportNamespaces?.addUsedNamespaces?.(_);
	let v = s(0), y = n((e) => {
		if (!d) return Pe;
		let { bindI18n: t, bindI18nStore: n } = f, r = () => {
			v.current += 1, e();
		};
		return t && d.on(t, r), n && d.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => d.off(e, r)), n && n.split(" ").forEach((e) => d.store.off(e, r));
		};
	}, [d, f]), b = s(), x = n(() => {
		if (!d) return Ne;
		let e = !!(d.isInitialized || d.initializedStoreOnce) && _.every((e) => _e(e, d, f)), n = t.lng || d.language, r = v.current, i = b.current;
		if (i && i.ready === e && i.lng === n && i.keyPrefix === m && i.revision === r) return i;
		let a = {
			t: d.getFixedT(n, f.nsMode === "fallback" ? _ : _[0], m),
			ready: e,
			lng: n,
			keyPrefix: m,
			revision: r
		};
		return b.current = a, a;
	}, [
		d,
		_,
		m,
		f,
		t.lng
	]), [S, C] = c(0), { t: w, ready: T } = (0, Me.useSyncExternalStore)(y, x, x);
	i(() => {
		if (d && !T && !p) {
			let e = () => C((e) => e + 1);
			t.lng ? ge(d, t.lng, _, e) : Z(d, _, e);
		}
	}, [
		d,
		t.lng,
		_,
		T,
		p,
		S
	]);
	let E = d || {}, D = s(null), O = s(), k = (e) => {
		let t = Object.getOwnPropertyDescriptors(e);
		t.__original && delete t.__original;
		let n = Object.create(Object.getPrototypeOf(e), t);
		if (!Object.prototype.hasOwnProperty.call(n, "__original")) try {
			Object.defineProperty(n, "__original", {
				value: e,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
		} catch {}
		return n;
	}, A = o(() => {
		let e = E, t = e?.language, n = e;
		e && (D.current && D.current.__original === e && O.current === t ? n = D.current : (n = k(e), D.current = n, O.current = t));
		let r = !T && !p ? (...e) => (X(d, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), w(...e)) : w, i = [
			r,
			n,
			T
		];
		return i.t = r, i.i18n = n, i.ready = T, i;
	}, [
		w,
		E,
		T,
		E.resolvedLanguage,
		E.language,
		E.languages
	]);
	if (d && p && !T) throw new Promise((e) => {
		let n = () => e();
		t.lng ? ge(d, t.lng, _, n) : Z(d, _, n);
	});
	return A;
};
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+7bc862f2056bc92b/node_modules/react-i18next/dist/es/I18nextProvider.js
function Ie({ i18n: e, defaultNS: n, children: r }) {
	let i = o(() => ({
		i18n: e,
		defaultNS: n
	}), [e, n]);
	return t(Oe.Provider, { value: i }, r);
}
//#endregion
//#region src/components/pages/settings/ProfileSection.tsx
function Le() {
	let { t: e } = Fe(), t = a(), n = a();
	return /* @__PURE__ */ u("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ l("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e("profileSection.profile")
		}), /* @__PURE__ */ u("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("profileSection.displayName")
			}), /* @__PURE__ */ l("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: e("profileSection.email")
			}), /* @__PURE__ */ l("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var Re = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
};
//#endregion
//#region src/i18n/i18n.ts
Y.use(De).use(function(e) {
	return {
		type: "backend",
		init: function(e, t, n) {},
		read: function(t, n, r) {
			if (typeof e == "function") {
				if (e.length < 3) {
					try {
						var i = e(t, n);
						i && typeof i.then == "function" ? i.then(function(e) {
							return r(null, e && e.default || e);
						}).catch(r) : r(null, i);
					} catch (e) {
						r(e);
					}
					return;
				}
				e(t, n, r);
				return;
			}
			r(null, e && e[t] && e[t][n]);
		}
	};
}((e) => Re(/* @__PURE__ */ Object.assign({
	"./locales/de.json": () => import("./de-D8F6P557.js"),
	"./locales/en.json": () => import("./en-BwwuTIHq.js"),
	"./locales/es.json": () => import("./es-ZzfFEpDi.js"),
	"./locales/fr.json": () => import("./fr-CedsXvKz.js"),
	"./locales/it.json": () => import("./it-CJj1Xys8.js"),
	"./locales/ja.json": () => import("./ja-6_7AwATT.js"),
	"./locales/ko.json": () => import("./ko-DgYvVjVV.js"),
	"./locales/pt.json": () => import("./pt-DtWHFTgX.js"),
	"./locales/ru.json": () => import("./ru-CHlbonmx.js"),
	"./locales/zh.json": () => import("./zh-D2d0KJq1.js")
}), `./locales/${e}.json`, 3))).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 }
});
var ze = Y;
//#endregion
//#region scripts/Wrapper.tsx
function Be({ children: e }) {
	return /* @__PURE__ */ l(Ie, {
		i18n: ze,
		children: e
	});
}
//#endregion
//#region src/components/pages/settings/ProfileSection.wrapper.tsx
function Ve() {
	return /* @__PURE__ */ l(Be, { children: /* @__PURE__ */ l(Le, {}) });
}
//#endregion
export { Ve as default };
//#region src/i18n/locales/de.json
var e = {
	oopsPageNotFound: "Hoppla! Seite nicht gefunden",
	returnToHome: "Zurück zur Startseite",
	couldNotMeasureHydrationDuration: "Hydratationsdauer konnte nicht gemessen werden:"
}, t = {
	home: "Startseite",
	methodology: "Methodik",
	mockPages: "Testseiten",
	products: "Produkte",
	pricing: "Preise",
	team: "Team",
	blog: "Blog",
	careers: "Karriere",
	faq: "FAQ",
	contact: "Kontakt",
	settings: "Einstellungen",
	goToGithub: "Zu GitHub"
}, n = {
	resources: "Ressourcen",
	contact: "Kontakt",
	github: "GitHub",
	methodology: "Methodik",
	contributing: "Beitragen",
	builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
	anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App."
}, r = {
	themeModeAutoSystemClick: "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	themeModeLightClick: "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
	themeModeDarkClick: "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	themeAuto: "Thema: Auto",
	themeDark: "Thema: Dunkel",
	themeLight: "Thema: Hell"
}, i = {
	aTestApplicationDesignedTo: "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
	viewResults: "Ergebnisse anzeigen"
}, a = {
	whyTheseMetricsMatter: "Warum diese Kennzahlen wichtig sind",
	bundleSize: "Bundle-Größe",
	theBundleIsTheData: "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
	renderingHydration: "Rendering & Hydratation",
	connectingALargeJson: "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	dynamicLoading: "Dynamisches Laden",
	loadingAllTranslationsUpfront: "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich."
}, o = {
	understandingTheImpact: "Die Auswirkungen verstehen",
	whyASingleLargeJson: "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
	manyI18nLibrariesStoreTranslations: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
	theJsonMustBeParsed: "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
	contextBasedArchitecturesCanCause: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
	duringServerSideRenderingThe: "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
	theTradeOffsOfDynamic: "Die Kompromisse beim dynamischen Laden",
	splittingTranslationsIntoPerRoute: "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
	waterfallRequests: "Waterfall-Anfragen:",
	flashOfUntranslatedContentFouc: "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
	cacheInvalidation: "Cache-Invalidierung:",
	whatThisBenchmarkMeasures: "Was dieser Benchmark misst",
	thisTestAppProvidesA: "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind."
}, s = {
	sampleResults: "Beispielergebnisse",
	bundleSize: "Bundle-Größe",
	lookupTime: "Suchzeit",
	lazyLoading: "Lazy Loading"
}, c = {
	methodology: "Methodik",
	weDesignedThisBenchmarkTo: "Wir haben diesen Benchmark so konzipiert, dass er faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken ermöglicht."
}, l = {
	testEnvironment: "Testumgebung",
	allBenchmarksRunOn: "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt, und wir geben den Median mit P95/P99-Perzentilen an.",
	applicationDesign: "Anwendungsdesign",
	theBenchmarkAppHas10: "Die Benchmark-App verfügt über 10 Seiten mit realistischem Inhalt — Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster darzustellen.",
	measurementMethodology: "Messmethodik",
	weUseBrowserNativeApis: "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzip-Verfahren mit source-map-explorer für die Genauigkeit gemessen.",
	fairComparison: "Fairer Vergleich",
	eachI18nLibraryIsIntegrated: "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, dieselbe Vite-Konfiguration, dasselbe Deployment."
}, u = {
	bundleSizeImpact: "Auswirkung auf die Bundle-Größe",
	theAdditionalJavascriptBytesSent: "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek an den Client gesendet werden, plus die Übersetzungsdateien für das aktuelle Gebietsschema.",
	renderingOverhead: "Rendering-Overhead",
	howMuchExtraTimeThe: "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Rendering hinzufügt — gemessen mit actualDuration des React Profilers.",
	hydrationCost: "Hydratationskosten",
	duringSsrTranslationDataIs: "Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.",
	lazyLoadingEffectiveness: "Effektivität von Lazy Loading",
	whetherSplittingTranslationsByRoute: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
	localeSwitchSpeed: "Geschwindigkeit des Sprachwechsels",
	howFastTheAppCan: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	whatWeMeasure: "Was wir messen"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community."
}, f = {
	i18nBenchmark2026Results: "i18n Benchmark 2026 Ergebnisse",
	march152026: "15. März 2026",
	weTested12DifferentInternationalization: "Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen.",
	howToReduceYourI18n: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
	march82026: "8. März 2026",
	practicalStrategiesForOptimizingTranslation: "Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.",
	theStateOfInternationalizationIn: "Der Stand der Internationalisierung im Jahr 2026",
	february282026: "28. Februar 2026",
	anOverviewOfTheCurrent: "Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.",
	migratingFromReactI18nextTo: "Migration von react-i18next zu Lingui",
	february152026: "15. Februar 2026",
	aStepByStepGuide: "Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
	serverComponentsAndI18nWhat: "Server Components und i18n: Was ändert sich?",
	february12026: "1. Februar 2026",
	reactServerComponentsIntroduceNew: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
	benchmarkMethodologyHowWeTest: "Benchmark-Methodik: Wie wir testen",
	january202026: "20. Januar 2026",
	aTransparentLookAtOur: "Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
	readMore: "Mehr lesen →"
}, p = {
	careers: "Karriere",
	joinOurMissionToMake: "Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen."
}, m = {
	whyJoinUs: "Warum zu uns kommen?",
	remoteFirst: "Remote-First",
	workFromAnywhereFully: "Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.",
	openSource: "Open Source",
	allOurWorkIs: "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
	impactful: "Wirkungsvoll",
	yourWorkDirectlyHelps: "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen."
}, h = {
	openPositions: "Offene Stellen",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	fullTime: "Vollzeit",
	remote: "Remote",
	leadBenchmarkDesignAnd: "Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.",
	technicalWriter: "Technischer Redakteur",
	partTime: "Teilzeit",
	createAndMaintainDocumentation: "Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.",
	frontendDeveloper: "Frontend-Entwickler",
	buildAndMaintainThe: "Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.",
	devOpsEngineer: "DevOps-Ingenieur",
	designAndMaintainThe: "Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.",
	applyNow: "Jetzt bewerben"
}, g = {
	contactUs: "Kontaktieren Sie uns",
	haveQuestionsOrWantTo: "Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören."
}, _ = {
	name: "Name",
	email: "E-Mail",
	subject: "Betreff",
	message: "Nachricht",
	sendMessage: "Nachricht senden",
	wellGetBackTo: "Wir melden uns innerhalb von 48 Stunden bei Ihnen."
}, v = {
	howAreTheBenchmarks: "Wie werden die Benchmarks durchgeführt?",
	allBenchmarksAreRun: "Alle Benchmarks werden mit Playwright auf einem einheitlichen Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen ausgeführt. Jeder Test umfasst 50 Iterationen, und wir geben den Median, P95- und P99-Werte an.",
	whatLibrariesAreCurrently: "Welche Bibliotheken werden derzeit getestet?",
	weCurrentlyBenchmarkReactI18next: "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
	canIContributeA: "Kann ich eine neue Bibliotheksintegration beisteuern?",
	absolutelyWeWelcomeCommunity: "Absolut! Wir begrüßen Beiträge aus der Community. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull-Request.",
	howOftenAreResults: "Wie oft werden die Ergebnisse aktualisiert?",
	benchmarksRunAutomaticallyVia: "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Ergebnisse werden innerhalb von 24 Stunden auf dem Dashboard veröffentlicht.",
	areTheResultsStatistically: "Sind die Ergebnisse statistisch signifikant?",
	yesWeUseThe: "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir geben auch Konfidenzintervalle und Effektstärken an."
}, y = {
	pricing: "Preise",
	transparentPricingForEvery: "Transparente Preise für jede Phase Ihrer i18n-Reise."
}, b = {
	freeTier: "Kostenlose Stufe",
	free: "Kostenlos",
	publicBenchmarkDashboard: "Öffentliches Benchmark-Dashboard",
	basicLibraryComparisons: "Einfache Bibliotheksvergleiche",
	communityForumAccess: "Zugang zum Community-Forum",
	monthlyResultDigest: "Monatliche Ergebniszusammenfassung",
	getStarted: "Loslegen",
	proTier: "Pro-Stufe",
	perMonth: "/Monat",
	allFreeFeatures: "Alle kostenlosen Funktionen",
	customBenchmarkConfigurations: "Benutzerdefinierte Benchmark-Konfigurationen",
	privateResultsDashboard: "Privates Ergebnis-Dashboard",
	apiAccess1000Requests: "API-Zugriff (1.000 Anfragen/Tag)",
	slackIntegration: "Slack-Integration",
	subscribeToPro: "Pro abonnieren",
	enterpriseTier: "Enterprise-Stufe",
	custom: "Individuell",
	allProFeatures: "Alle Pro-Funktionen",
	dedicatedBenchmarkInfrastructure: "Dedizierte Benchmark-Infrastruktur",
	customLibraryIntegrations: "Benutzerdefinierte Bibliotheksintegrationen",
	slaGuarantees: "SLA-Garantien",
	prioritySupport: "Priorisierter Support",
	contactSales: "Vertrieb kontaktieren"
}, x = {
	products: "Produkte",
	toolsAndServicesTo: "Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie."
}, S = {
	benchmarkDashboard: "Benchmark-Dashboard",
	interactiveChartsAndTables: "Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.",
	bundleAnalyzer: "Bundle-Analyzer",
	uploadYourBuildOutput: "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.",
	migrationAssistant: "Migrationsassistent",
	automatedCodemodsAndGuides: "Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
	performanceMonitor: "Leistungsmonitor",
	continuousPerformanceTrackingFor: "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.",
	learnMore: "Mehr erfahren"
}, C = {
	settings: "Einstellungen",
	manageYourAccountPreferences: "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen."
}, w = {
	profile: "Profil",
	displayName: "Anzeigename",
	email: "E-Mail"
}, T = {
	preferences: "Einstellungen",
	emailNotifications: "E-Mail-Benachrichtigungen",
	receiveWeeklyBenchmarkReports: "Wöchentliche Benchmark-Berichte erhalten",
	darkMode: "Dunkelmodus",
	useDarkColorScheme: "Dunkles Farbschema verwenden",
	defaultLanguage: "Standardsprache"
}, E = {
	apiAccess: "API-Zugriff",
	apiKey: "API-Schlüssel",
	useThisKeyTo: "Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.",
	copy: "Kopieren"
}, D = {
	cancel: "Abbrechen",
	saveChanges: "Änderungen speichern"
}, O = {
	ourTeam: "Unser Team",
	meetThePeopleBehindI18n: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Gründerin & Leitende Ingenieurin",
	formerGoogleEngineerWith10: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Performance-Ingenieur",
	specializesInJavascriptPerformanceOptimization: "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Developer Advocate",
	passionateAboutDeveloperExperienceAnd: "Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Full-Stack-Entwickler",
	maintainsTheBenchmarkingInfrastructureAnd: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Datenanalystin",
	ensuresStatisticalRigorInAll: "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Community-Managerin",
	managesCommunityContributionsPartnershipsAnd: "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance."
}, A = "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Häufig gestellte Fragen",
		everythingYouNeedToKnow: "Alles, was Sie über das i18n-Benchmark-Projekt wissen müssen."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/en.json
var e = {
	oopsPageNotFound: "Oops! Page not found",
	returnToHome: "Return to Home",
	couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
}, t = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
}, n = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
}, r = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, i = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
}, a = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
}, o = {
	understandingTheImpact: "Understanding the Impact",
	whyASingleLargeJson: "Why a single large JSON can hurt performance",
	manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
	contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
	splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	waterfallRequests: "Waterfall requests:",
	flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
	cacheInvalidation: "Cache invalidation:",
	whatThisBenchmarkMeasures: "What this benchmark measures",
	thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
}, s = {
	sampleResults: "Sample Results",
	bundleSize: "Bundle Size",
	lookupTime: "Lookup Time",
	lazyLoading: "Lazy Loading"
}, c = {
	methodology: "Methodology",
	weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach."
}, l = {
	testEnvironment: "Test Environment",
	allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	applicationDesign: "Application Design",
	theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	measurementMethodology: "Measurement Methodology",
	weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	fairComparison: "Fair Comparison",
	eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
}, u = {
	bundleSizeImpact: "Bundle size impact",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	renderingOverhead: "Rendering overhead",
	howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	hydrationCost: "Hydration cost",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	localeSwitchSpeed: "Locale switch speed",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	whatWeMeasure: "What We Measure"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community."
}, f = {
	i18nBenchmark2026Results: "i18n Benchmark 2026 Results",
	march152026: "March 15, 2026",
	weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
	march82026: "March 8, 2026",
	practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	theStateOfInternationalizationIn: "The State of Internationalization in 2026",
	february282026: "February 28, 2026",
	anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
	february152026: "February 15, 2026",
	aStepByStepGuide: "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
	february12026: "February 1, 2026",
	reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
	january202026: "January 20, 2026",
	aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	readMore: "Read More →"
}, p = {
	careers: "Careers",
	joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere."
}, m = {
	whyJoinUs: "Why Join Us?",
	remoteFirst: "Remote-First",
	workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
	openSource: "Open Source",
	allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
	impactful: "Impactful",
	yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications."
}, h = {
	openPositions: "Open Positions",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	fullTime: "Full-Time",
	remote: "Remote",
	leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
	technicalWriter: "Technical Writer",
	partTime: "Part-Time",
	createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
	frontendDeveloper: "Frontend Developer",
	buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
	devOpsEngineer: "DevOps Engineer",
	designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
	applyNow: "Apply Now"
}, g = {
	contactUs: "Contact Us",
	haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you."
}, _ = {
	name: "Name",
	email: "Email",
	subject: "Subject",
	message: "Message",
	sendMessage: "Send Message",
	wellGetBackTo: "We'll get back to you within 48 hours."
}, v = {
	howAreTheBenchmarks: "How are the benchmarks run?",
	allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	whatLibrariesAreCurrently: "What libraries are currently tested?",
	weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	canIContributeA: "Can I contribute a new library integration?",
	absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	howOftenAreResults: "How often are results updated?",
	benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	areTheResultsStatistically: "Are the results statistically significant?",
	yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
}, y = {
	pricing: "Pricing",
	transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
}, b = {
	freeTier: "Free Tier",
	free: "Free",
	publicBenchmarkDashboard: "Public benchmark dashboard",
	basicLibraryComparisons: "Basic library comparisons",
	communityForumAccess: "Community forum access",
	monthlyResultDigest: "Monthly result digest",
	getStarted: "Get Started",
	proTier: "Pro Tier",
	perMonth: "/month",
	allFreeFeatures: "All Free features",
	customBenchmarkConfigurations: "Custom benchmark configurations",
	privateResultsDashboard: "Private results dashboard",
	apiAccess1000Requests: "API access (1,000 requests/day)",
	slackIntegration: "Slack integration",
	subscribeToPro: "Subscribe to Pro",
	enterpriseTier: "Enterprise Tier",
	custom: "Custom",
	allProFeatures: "All Pro features",
	dedicatedBenchmarkInfrastructure: "Dedicated benchmark infrastructure",
	customLibraryIntegrations: "Custom library integrations",
	slaGuarantees: "SLA guarantees",
	prioritySupport: "Priority support",
	contactSales: "Contact Sales"
}, x = {
	products: "Products",
	toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
}, S = {
	benchmarkDashboard: "Benchmark Dashboard",
	interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	bundleAnalyzer: "Bundle Analyzer",
	uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	migrationAssistant: "Migration Assistant",
	automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	performanceMonitor: "Performance Monitor",
	continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	learnMore: "Learn More"
}, C = {
	settings: "Settings",
	manageYourAccountPreferences: "Manage your account preferences and configuration."
}, w = {
	profile: "Profile",
	displayName: "Display Name",
	email: "Email"
}, T = {
	preferences: "Preferences",
	emailNotifications: "Email Notifications",
	receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
	darkMode: "Dark Mode",
	useDarkColorScheme: "Use dark color scheme",
	defaultLanguage: "Default Language"
}, E = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
	copy: "Copy"
}, D = {
	cancel: "Cancel",
	saveChanges: "Save Changes"
}, O = {
	ourTeam: "Our Team",
	meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Founder & Lead Engineer",
	formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Performance Engineer",
	specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Developer Advocate",
	passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Data Analyst",
	ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Community Manager",
	managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance."
}, A = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Frequently Asked Questions",
		everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/es.json
var e = {
	oopsPageNotFound: "¡Ups! Página no encontrada",
	returnToHome: "Volver al inicio",
	couldNotMeasureHydrationDuration: "No se pudo medir la duración de la hidratación:"
}, t = {
	home: "Inicio",
	methodology: "Metodología",
	mockPages: "Páginas de prueba",
	products: "Productos",
	pricing: "Precios",
	team: "Equipo",
	blog: "Blog",
	careers: "Carreras",
	faq: "FAQ",
	contact: "Contacto",
	settings: "Configuración",
	goToGithub: "Ir a GitHub"
}, n = {
	resources: "Recursos",
	contact: "Contacto",
	github: "GitHub",
	methodology: "Metodología",
	contributing: "Contribuir",
	builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
	anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación."
}, r = {
	themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
	themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Oscuro",
	themeLight: "Tema: Claro"
}, i = {
	aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.",
	viewResults: "Ver resultados"
}, a = {
	whyTheseMetricsMatter: "Por qué son importantes estas métricas",
	bundleSize: "Tamaño del paquete",
	theBundleIsTheData: "El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
	renderingHydration: "Renderizado e hidratación",
	connectingALargeJson: "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).",
	dynamicLoading: "Carga dinámica",
	loadingAllTranslationsUpfront: "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
}, o = {
	understandingTheImpact: "Entendiendo el impacto",
	whyASingleLargeJson: "Por qué un solo JSON grande puede perjudicar el rendimiento",
	manyI18nLibrariesStoreTranslations: "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
	theJsonMustBeParsed: "El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.",
	contextBasedArchitecturesCanCause: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
	duringServerSideRenderingThe: "Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
	theTradeOffsOfDynamic: "Las compensaciones de la carga dinámica",
	splittingTranslationsIntoPerRoute: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
	waterfallRequests: "Solicitudes en cascada:",
	flashOfUntranslatedContentFouc: "Parpadeo de contenido no traducido (FOUC):",
	cacheInvalidation: "Invalidación de la caché:",
	whatThisBenchmarkMeasures: "Lo que mide este benchmark",
	thisTestAppProvidesA: "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
}, s = {
	sampleResults: "Resultados de muestra",
	bundleSize: "Tamaño del paquete",
	lookupTime: "Tiempo de búsqueda",
	lazyLoading: "Carga diferida"
}, c = {
	methodology: "Metodología",
	weDesignedThisBenchmarkTo: "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n."
}, l = {
	testEnvironment: "Entorno de prueba",
	allBenchmarksRunOn: "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces y reportamos la mediana con los percentiles P95/P99.",
	applicationDesign: "Diseño de la aplicación",
	theBenchmarkAppHas10: "La aplicación del benchmark tiene 10 páginas con contenido realista — navegación, formularios, listas dinámicas y texto estático. Cada página utiliza entre 15 y 30 claves de traducción para representar patrones de uso del mundo real.",
	measurementMethodology: "Metodología de medición",
	weUseBrowserNativeApis: "Utilizamos las API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con los datos del React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
	fairComparison: "Comparación justa",
	eachI18nLibraryIsIntegrated: "Cada biblioteca i18n se integra siguiendo su documentación oficial y sus mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración Vite, el mismo despliegue."
}, u = {
	bundleSizeImpact: "Impacto en el tamaño del paquete",
	theAdditionalJavascriptBytesSent: "Los bytes adicionales de JavaScript enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, además de los archivos de traducción para el local actual.",
	renderingOverhead: "Sobrecarga de renderizado",
	howMuchExtraTimeThe: "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente — medido con actualDuration del React Profiler.",
	hydrationCost: "Costo de hidratación",
	duringSsrTranslationDataIs: "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación — el momento en que la página se vuelve interactiva.",
	lazyLoadingEffectiveness: "Eficacia de la carga diferida",
	whetherSplittingTranslationsByRoute: "Si dividir las traducciones por ruta o por espacio de nombres realmente reduce la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	localeSwitchSpeed: "Velocidad de cambio de idioma",
	howFastTheAppCan: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución — incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	whatWeMeasure: "Lo que medimos"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n."
}, f = {
	i18nBenchmark2026Results: "Resultados de i18n Benchmark 2026",
	march152026: "15 de marzo de 2026",
	weTested12DifferentInternationalization: "Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos.",
	howToReduceYourI18n: "Cómo reducir su paquete i18n en un 60%",
	march82026: "8 de marzo de 2026",
	practicalStrategiesForOptimizingTranslation: "Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.",
	theStateOfInternationalizationIn: "El estado de la internacionalización en 2026",
	february282026: "28 de febrero de 2026",
	anOverviewOfTheCurrent: "Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
	migratingFromReactI18nextTo: "Migración de react-i18next a Lingui",
	february152026: "15 de febrero de 2026",
	aStepByStepGuide: "Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
	serverComponentsAndI18nWhat: "Server Components e i18n: ¿Qué cambia?",
	february12026: "1 de febrero de 2026",
	reactServerComponentsIntroduceNew: "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
	benchmarkMethodologyHowWeTest: "Metodología de benchmark: cómo probamos",
	january202026: "20 de enero de 2026",
	aTransparentLookAtOur: "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
	readMore: "Leer más →"
}, p = {
	careers: "Carreras",
	joinOurMissionToMake: "Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar."
}, m = {
	whyJoinUs: "¿Por qué unirse a nosotros?",
	remoteFirst: "Remoto primero",
	workFromAnywhereFully: "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
	openSource: "Código abierto",
	allOurWorkIs: "Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.",
	impactful: "Impactante",
	yourWorkDirectlyHelps: "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas."
}, h = {
	openPositions: "Puestos abiertos",
	seniorPerformanceEngineer: "Ingeniero de rendimiento senior",
	fullTime: "Tiempo completo",
	remote: "Remoto",
	leadBenchmarkDesignAnd: "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.",
	technicalWriter: "Redactor técnico",
	partTime: "Tiempo parcial",
	createAndMaintainDocumentation: "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
	frontendDeveloper: "Desarrollador Frontend",
	buildAndMaintainThe: "Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.",
	devOpsEngineer: "Ingeniero DevOps",
	designAndMaintainThe: "Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.",
	applyNow: "Solicitar ahora"
}, g = {
	contactUs: "Contáctenos",
	haveQuestionsOrWantTo: "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted."
}, _ = {
	name: "Nombre",
	email: "Correo electrónico",
	subject: "Asunto",
	message: "Mensaje",
	sendMessage: "Enviar mensaje",
	wellGetBackTo: "Nos pondremos en contacto con usted en un plazo de 48 horas."
}, v = {
	howAreTheBenchmarks: "¿Cómo se ejecutan los benchmarks?",
	allBenchmarksAreRun: "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones y reportamos la mediana, los valores P95 y P99.",
	whatLibrariesAreCurrently: "¿Qué bibliotecas se prueban actualmente?",
	weCurrentlyBenchmarkReactI18next: "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
	canIContributeA: "¿Puedo contribuir con una nueva integración de biblioteca?",
	absolutelyWeWelcomeCommunity: "¡Absolutamente! Damos la bienvenida a las contribuciones de la comunidad. Bifurque el repositorio, añada su integración de biblioteca siguiendo nuestra plantilla y envíe una pull request.",
	howOftenAreResults: "¿Con qué frecuencia se actualizan los resultados?",
	benchmarksRunAutomaticallyVia: "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el tablero en un plazo de 24 horas.",
	areTheResultsStatistically: "¿Son los resultados estadísticamente significativos?",
	yesWeUseThe: "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También reportamos intervalos de confianza y tamaños del efecto."
}, y = {
	pricing: "Precios",
	transparentPricingForEvery: "Precios transparentes para cada etapa de su viaje i18n."
}, b = {
	freeTier: "Nivel gratuito",
	free: "Gratis",
	publicBenchmarkDashboard: "Tablero público de benchmarks",
	basicLibraryComparisons: "Comparaciones básicas de bibliotecas",
	communityForumAccess: "Acceso al foro de la comunidad",
	monthlyResultDigest: "Resumen mensual de resultados",
	getStarted: "Comenzar",
	proTier: "Nivel Pro",
	perMonth: "/mes",
	allFreeFeatures: "Todas las características del nivel gratuito",
	customBenchmarkConfigurations: "Configuraciones de benchmark personalizadas",
	privateResultsDashboard: "Tablero de resultados privado",
	apiAccess1000Requests: "Acceso API (1.000 peticiones/día)",
	slackIntegration: "Integración de Slack",
	subscribeToPro: "Suscribirse a Pro",
	enterpriseTier: "Nivel Enterprise",
	custom: "Personalizado",
	allProFeatures: "Todas las características del nivel Pro",
	dedicatedBenchmarkInfrastructure: "Infraestructura de benchmark dedicada",
	customLibraryIntegrations: "Integraciones de bibliotecas personalizadas",
	slaGuarantees: "Garantías de SLA",
	prioritySupport: "Soporte prioritario",
	contactSales: "Contactar con ventas"
}, x = {
	products: "Productos",
	toolsAndServicesTo: "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización."
}, S = {
	benchmarkDashboard: "Tablero de benchmarks",
	interactiveChartsAndTables: "Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.",
	bundleAnalyzer: "Analizador de paquetes",
	uploadYourBuildOutput: "Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
	migrationAssistant: "Asistente de migración",
	automatedCodemodsAndGuides: "Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.",
	performanceMonitor: "Monitor de rendimiento",
	continuousPerformanceTrackingFor: "Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.",
	learnMore: "Saber más"
}, C = {
	settings: "Configuración",
	manageYourAccountPreferences: "Gestione sus preferencias de cuenta y configuración."
}, w = {
	profile: "Perfil",
	displayName: "Nombre de pantalla",
	email: "Correo electrónico"
}, T = {
	preferences: "Preferencias",
	emailNotifications: "Notificaciones por correo electrónico",
	receiveWeeklyBenchmarkReports: "Recibir informes semanales de benchmark",
	darkMode: "Modo oscuro",
	useDarkColorScheme: "Usar esquema de colores oscuros",
	defaultLanguage: "Idioma predeterminado"
}, E = {
	apiAccess: "Acceso API",
	apiKey: "Clave API",
	useThisKeyTo: "Utilice esta clave para acceder a la API de benchmarking de forma programática.",
	copy: "Copiar"
}, D = {
	cancel: "Cancelar",
	saveChanges: "Guardar cambios"
}, O = {
	ourTeam: "Nuestro equipo",
	meetThePeopleBehindI18n: "Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Fundadora e Ingeniera Principal",
	formerGoogleEngineerWith10: "Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Ingeniero de rendimiento",
	specializesInJavascriptPerformanceOptimization: "Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Abogado de desarrolladores",
	passionateAboutDeveloperExperienceAnd: "Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Desarrollador Full-Stack",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Analista de datos",
	ensuresStatisticalRigorInAll: "Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Responsable de la comunidad",
	managesCommunityContributionsPartnershipsAnd: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
}, A = "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Preguntas frecuentes",
		everythingYouNeedToKnow: "Todo lo que necesita saber sobre el proyecto i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/fr.json
var e = {
	oopsPageNotFound: "Oups ! Page non trouvée",
	returnToHome: "Retour à l'accueil",
	couldNotMeasureHydrationDuration: "Impossible de mesurer la durée d'hydratation :"
}, t = {
	home: "Accueil",
	methodology: "Méthodologie",
	mockPages: "Pages de test",
	products: "Produits",
	pricing: "Tarifs",
	team: "Équipe",
	blog: "Blog",
	careers: "Carrières",
	faq: "FAQ",
	contact: "Contact",
	settings: "Paramètres",
	goToGithub: "Aller sur GitHub"
}, n = {
	resources: "Ressources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Méthodologie",
	contributing: "Contribuer",
	builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
}, r = {
	themeModeAutoSystemClick: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	themeModeLightClick: "Mode thématique : clair. Cliquez pour passer en mode sombre.",
	themeModeDarkClick: "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
	themeAuto: "Thème : Auto",
	themeDark: "Thème : Sombre",
	themeLight: "Thème : Clair"
}, i = {
	aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
	viewResults: "Voir les résultats"
}, a = {
	whyTheseMetricsMatter: "Pourquoi ces mesures sont importantes",
	bundleSize: "Taille du bundle",
	theBundleIsTheData: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	renderingHydration: "Rendu & Hydratation",
	connectingALargeJson: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	dynamicLoading: "Chargement dynamique",
	loadingAllTranslationsUpfront: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
}, o = {
	understandingTheImpact: "Comprendre l'impact",
	whyASingleLargeJson: "Pourquoi un seul JSON volumineux peut nuire aux performances",
	manyI18nLibrariesStoreTranslations: "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
	theJsonMustBeParsed: "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
	contextBasedArchitecturesCanCause: "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
	duringServerSideRenderingThe: "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
	theTradeOffsOfDynamic: "Les compromis du chargement dynamique",
	splittingTranslationsIntoPerRoute: "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
	waterfallRequests: "Requêtes en cascade :",
	flashOfUntranslatedContentFouc: "Flash de contenu non traduit (FOUC) :",
	cacheInvalidation: "Invalidation du cache :",
	whatThisBenchmarkMeasures: "Ce que ce benchmark mesure",
	thisTestAppProvidesA: "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables."
}, s = {
	sampleResults: "Exemples de résultats",
	bundleSize: "Taille du bundle",
	lookupTime: "Temps de recherche",
	lazyLoading: "Chargement différé"
}, c = {
	methodology: "Méthodologie",
	weDesignedThisBenchmarkTo: "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n."
}, l = {
	testEnvironment: "Environnement de test",
	allBenchmarksRunOn: "Tous les benchmarks sont exécutés sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les percentiles P95/P99.",
	applicationDesign: "Conception de l'application",
	theBenchmarkAppHas10: "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter les modèles d'utilisation du monde réel.",
	measurementMethodology: "Méthodologie de mesure",
	weUseBrowserNativeApis: "Nous utilisons les API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après gzip à l'aide de source-map-explorer pour plus de précision.",
	fairComparison: "Comparaison équitable",
	eachI18nLibraryIsIntegrated: "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible. Même application React, même configuration Vite, même déploiement."
}, u = {
	bundleSizeImpact: "Impact sur la taille du bundle",
	theAdditionalJavascriptBytesSent: "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison du runtime de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
	renderingOverhead: "Surcharge de rendu",
	howMuchExtraTimeThe: "Combien de temps supplémentaire la couche i18n ajoute au rendu de chaque composant — mesuré à l'aide de actualDuration du React Profiler.",
	hydrationCost: "Coût d'hydratation",
	duringSsrTranslationDataIs: "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	lazyLoadingEffectiveness: "Efficacité du chargement différé",
	whetherSplittingTranslationsByRoute: "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
	localeSwitchSpeed: "Vitesse de changement de langue",
	howFastTheAppCan: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	whatWeMeasure: "Ce que nous mesurons"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n."
}, f = {
	i18nBenchmark2026Results: "Résultats de l'i18n Benchmark 2026",
	march152026: "15 mars 2026",
	weTested12DifferentInternationalization: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs.",
	howToReduceYourI18n: "Comment réduire votre bundle i18n de 60 %",
	march82026: "8 mars 2026",
	practicalStrategiesForOptimizingTranslation: "Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.",
	theStateOfInternationalizationIn: "L'état de l'internationalisation en 2026",
	february282026: "28 février 2026",
	anOverviewOfTheCurrent: "Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.",
	migratingFromReactI18nextTo: "Migration de react-i18next vers Lingui",
	february152026: "15 février 2026",
	aStepByStepGuide: "Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
	serverComponentsAndI18nWhat: "Server Components et i18n : Qu'est-ce qui change ?",
	february12026: "1er février 2026",
	reactServerComponentsIntroduceNew: "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
	benchmarkMethodologyHowWeTest: "Méthodologie du benchmark : comment nous testons",
	january202026: "20 janvier 2026",
	aTransparentLookAtOur: "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
	readMore: "Lire la suite →"
}, p = {
	careers: "Carrières",
	joinOurMissionToMake: "Rejoignez notre mission pour rendre le web plus rapide et plus accessible pour tout le monde, partout."
}, m = {
	whyJoinUs: "Pourquoi nous rejoindre ?",
	remoteFirst: "Télétravail d'abord",
	workFromAnywhereFully: "Travaillez de n'importe où. Équipe entièrement distribuée sur 6 fuseaux horaires.",
	openSource: "Open Source",
	allOurWorkIs: "Tout notre travail est open source. Construisez votre portfolio public tout en ayant un impact.",
	impactful: "Impactant",
	yourWorkDirectlyHelps: "Votre travail aide directement les développeurs à créer de meilleures applications internationalisées et plus rapides."
}, h = {
	openPositions: "Postes ouverts",
	seniorPerformanceEngineer: "Ingénieur performance senior",
	fullTime: "Temps plein",
	remote: "À distance",
	leadBenchmarkDesignAnd: "Diriger la conception et la mise en œuvre des benchmarks. Connaissance approfondie des composants internes de V8, des API de performance du navigateur et de l'analyse statistique requise.",
	technicalWriter: "Rédacteur technique",
	partTime: "Temps partiel",
	createAndMaintainDocumentation: "Créer et maintenir la documentation, les articles de blog et le contenu éducatif sur les meilleures pratiques de performance i18n.",
	frontendDeveloper: "Développeur Frontend",
	buildAndMaintainThe: "Construire et maintenir le tableau de bord du benchmark, les outils de comparaison et les visualisations interactives.",
	devOpsEngineer: "Ingénieur DevOps",
	designAndMaintainThe: "Concevoir et maintenir le pipeline CI/CD qui exécute les benchmarks automatiquement à chaque mise à jour de bibliothèque.",
	applyNow: "Postuler maintenant"
}, g = {
	contactUs: "Contactez-nous",
	haveQuestionsOrWantTo: "Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre."
}, _ = {
	name: "Nom",
	email: "Email",
	subject: "Sujet",
	message: "Message",
	sendMessage: "Envoyer le message",
	wellGetBackTo: "Nous vous répondrons dans les 48 heures."
}, v = {
	howAreTheBenchmarks: "Comment les benchmarks sont-ils exécutés ?",
	allBenchmarksAreRun: "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test effectue 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
	whatLibrariesAreCurrently: "Quelles bibliotecas sont actuellement testées ?",
	weCurrentlyBenchmarkReactI18next: "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres sur demande de la communauté.",
	canIContributeA: "Puis-je contribuer avec une nouvelle intégration de bibliothèque ?",
	absolutelyWeWelcomeCommunity: "Absolument ! Nous accueillons avec plaisir les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request.",
	howOftenAreResults: "À quelle fréquence les résultats sont-ils mis à jour ?",
	benchmarksRunAutomaticallyVia: "Les benchmarks s'exécutent automatiquement via CI à chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés dans les 24 heures.",
	areTheResultsStatistically: "Les résultats sont-ils statistiquement significatifs ?",
	yesWeUseThe: "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet."
}, y = {
	pricing: "Tarifs",
	transparentPricingForEvery: "Une tarification transparente pour chaque étape de votre voyage i18n."
}, b = {
	freeTier: "Offre gratuite",
	free: "Gratuit",
	publicBenchmarkDashboard: "Tableau de bord public des benchmarks",
	basicLibraryComparisons: "Comparaisons de base des bibliothèques",
	communityForumAccess: "Accès au forum de la communauté",
	monthlyResultDigest: "Résumé mensuel des résultats",
	getStarted: "Démarrer",
	proTier: "Offre Pro",
	perMonth: "/mois",
	allFreeFeatures: "Toutes les fonctionnalités gratuites",
	customBenchmarkConfigurations: "Configurations de benchmark personnalisées",
	privateResultsDashboard: "Tableau de bord des résultats privés",
	apiAccess1000Requests: "Accès API (1 000 requêtes/jour)",
	slackIntegration: "Intégration Slack",
	subscribeToPro: "S'abonner à Pro",
	enterpriseTier: "Offre Entreprise",
	custom: "Sur mesure",
	allProFeatures: "Toutes les fonctionnalités Pro",
	dedicatedBenchmarkInfrastructure: "Infrastructure de benchmark dédiée",
	customLibraryIntegrations: "Intégrations de bibliothèques personnalisées",
	slaGuarantees: "Garanties SLA",
	prioritySupport: "Support prioritaire",
	contactSales: "Contacter les ventes"
}, x = {
	products: "Produits",
	toolsAndServicesTo: "Des outils et des services pour vous aider à optimiser votre stratégie d'internationalisation."
}, S = {
	benchmarkDashboard: "Tableau de bord de référence",
	interactiveChartsAndTables: "Graphiques et tableaux interactifs comparant les bibliothèques i18n selon la taille du bundle, le temps de rendu et le coût d'hydratation.",
	bundleAnalyzer: "Analyseur de bundle",
	uploadYourBuildOutput: "Téléchargez votre sortie de build et obtenez une ventilation détaillée de la part de surcharge i18n dans votre bundle.",
	migrationAssistant: "Assistant de migration",
	automatedCodemodsAndGuides: "Codemods et guides automatisés pour migrer entre les bibliothèques i18n avec un minimum d'interruption.",
	performanceMonitor: "Moniteur de performance",
	continuousPerformanceTrackingFor: "Suivi continu des performances pour votre implémentation i18n. Recevez des alertes lorsque le chargement des traductions se dégrade.",
	learnMore: "En savoir plus"
}, C = {
	settings: "Paramètres",
	manageYourAccountPreferences: "Gérez vos préférences de compte et votre configuration."
}, w = {
	profile: "Profil",
	displayName: "Nom d'affichage",
	email: "Email"
}, T = {
	preferences: "Préférences",
	emailNotifications: "Notifications par email",
	receiveWeeklyBenchmarkReports: "Recevoir des rapports hebdomadaires de benchmark",
	darkMode: "Mode sombre",
	useDarkColorScheme: "Utiliser le schéma de couleurs sombres",
	defaultLanguage: "Langue par défaut"
}, E = {
	apiAccess: "Accès API",
	apiKey: "Clé API",
	useThisKeyTo: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
	copy: "Copier"
}, D = {
	cancel: "Annuler",
	saveChanges: "Enregistrer les modifications"
}, O = {
	ourTeam: "Notre équipe",
	meetThePeopleBehindI18n: "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Fondatrice & Ingénieure en chef",
	formerGoogleEngineerWith10: "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Ingénieur Performance",
	specializesInJavascriptPerformanceOptimization: "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Developer Advocate",
	passionateAboutDeveloperExperienceAnd: "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Développeur Full-Stack",
	maintainsTheBenchmarkingInfrastructureAnd: "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Analyste de données",
	ensuresStatisticalRigorInAll: "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Responsable de communauté",
	managesCommunityContributionsPartnershipsAnd: "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source."
}, A = "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Foire aux questions",
		everythingYouNeedToKnow: "Tout ce que vous devez savoir sur le projet i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/it.json
var e = {
	oopsPageNotFound: "Ops! Pagina non trovata",
	returnToHome: "Torna alla Home",
	couldNotMeasureHydrationDuration: "Impossibile misurare la durata dell'idratazione:"
}, t = {
	home: "Home",
	methodology: "Metodologia",
	mockPages: "Pagine di test",
	products: "Prodotti",
	pricing: "Prezzi",
	team: "Team",
	blog: "Blog",
	careers: "Carriere",
	faq: "FAQ",
	contact: "Contatti",
	settings: "Impostazioni",
	goToGithub: "Vai su GitHub"
}, n = {
	resources: "Risorse",
	contact: "Contatti",
	github: "GitHub",
	methodology: "Metodologia",
	contributing: "Contribuire",
	builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
	anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
}, r = {
	themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
	themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Scuro",
	themeLight: "Tema: Chiaro"
}, i = {
	aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
	viewResults: "Visualizza i risultati"
}, a = {
	whyTheseMetricsMatter: "Perché queste metriche sono importanti",
	bundleSize: "Dimensione del bundle",
	theBundleIsTheData: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	renderingHydration: "Rendering e idratazione",
	connectingALargeJson: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	dynamicLoading: "Caricamento dinamico",
	loadingAllTranslationsUpfront: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
}, o = {
	understandingTheImpact: "Capire l'impatto",
	whyASingleLargeJson: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
	manyI18nLibrariesStoreTranslations: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
	theJsonMustBeParsed: "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
	contextBasedArchitecturesCanCause: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
	duringServerSideRenderingThe: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
	theTradeOffsOfDynamic: "I compromessi del caricamento dinamico",
	splittingTranslationsIntoPerRoute: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
	waterfallRequests: "Richieste a cascata:",
	flashOfUntranslatedContentFouc: "Flash di contenuti non tradotti (FOUC):",
	cacheInvalidation: "Invalidazione della cache:",
	whatThisBenchmarkMeasures: "Cosa misura questo benchmark",
	thisTestAppProvidesA: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili."
}, s = {
	sampleResults: "Risultati di esempio",
	bundleSize: "Dimensione del bundle",
	lookupTime: "Tempo di ricerca",
	lazyLoading: "Caricamento lazy"
}, c = {
	methodology: "Metodologia",
	weDesignedThisBenchmarkTo: "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n."
}, l = {
	testEnvironment: "Ambiente di test",
	allBenchmarksRunOn: "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
	applicationDesign: "Design dell'applicazione",
	theBenchmarkAppHas10: "L'app di benchmark ha 10 pagine con contenuti realistici: navigazione, moduli, elenchi dinamici e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo reali.",
	measurementMethodology: "Metodologia di misurazione",
	weUseBrowserNativeApis: "Utilizziamo le API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle vengono misurate dopo la compressione gzip utilizzando source-map-explorer per accuratezza.",
	fairComparison: "Confronto equo",
	eachI18nLibraryIsIntegrated: "Ogni libreria i18n viene integrata seguendo la sua documentazione ufficiale e le migliori pratiche. Consultiamo i manutentori, quando possibile, per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stessa distribuzione."
}, u = {
	bundleSizeImpact: "Impatto sulla dimensione del bundle",
	theAdditionalJavascriptBytesSent: "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, oltre ai file di traduzione per la localizzazione corrente.",
	renderingOverhead: "Sovrapprezzo di rendering",
	howMuchExtraTimeThe: "Quanto tempo extra aggiunge lo strato i18n a ogni rendering di componente — misurato utilizzando actualDuration di React Profiler.",
	hydrationCost: "Costo di idratazione",
	duringSsrTranslationDataIs: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. I grandi dizionari aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	lazyLoadingEffectiveness: "Efficacia del caricamento lazy",
	whetherSplittingTranslationsByRoute: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
	localeSwitchSpeed: "Velocità di cambio localizzazione",
	howFastTheAppCan: "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	whatWeMeasure: "Cosa misuriamo"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n."
}, f = {
	i18nBenchmark2026Results: "Risultati i18n Benchmark 2026",
	march152026: "15 marzo 2026",
	weTested12DifferentInternationalization: "Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi.",
	howToReduceYourI18n: "Come ridurre il bundle i18n del 60%",
	march82026: "8 marzo 2026",
	practicalStrategiesForOptimizingTranslation: "Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.",
	theStateOfInternationalizationIn: "Lo stato dell'internazionalizzazione nel 2026",
	february282026: "28 febbraio 2026",
	anOverviewOfTheCurrent: "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
	migratingFromReactI18nextTo: "Migrazione da react-i18next a Lingui",
	february152026: "15 febbraio 2026",
	aStepByStepGuide: "Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
	serverComponentsAndI18nWhat: "Server Components e i18n: cosa cambia?",
	february12026: "1 febbraio 2026",
	reactServerComponentsIntroduceNew: "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
	benchmarkMethodologyHowWeTest: "Metodologia del benchmark: come testiamo",
	january202026: "20 gennaio 2026",
	aTransparentLookAtOur: "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.",
	readMore: "Leggi di più →"
}, p = {
	careers: "Carriere",
	joinOurMissionToMake: "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque."
}, m = {
	whyJoinUs: "Perché unirti a noi?",
	remoteFirst: "Remoto-first",
	workFromAnywhereFully: "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
	openSource: "Open Source",
	allOurWorkIs: "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.",
	impactful: "Impattante",
	yourWorkDirectlyHelps: "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci."
}, h = {
	openPositions: "Posizioni aperte",
	seniorPerformanceEngineer: "Ingegnere delle prestazioni senior",
	fullTime: "Tempo pieno",
	remote: "Remoto",
	leadBenchmarkDesignAnd: "Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.",
	technicalWriter: "Scrittore tecnico",
	partTime: "Part-time",
	createAndMaintainDocumentation: "Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.",
	frontendDeveloper: "Sviluppatore Frontend",
	buildAndMaintainThe: "Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
	devOpsEngineer: "Ingegnere DevOps",
	designAndMaintainThe: "Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.",
	applyNow: "Candidati ora"
}, g = {
	contactUs: "Contattaci",
	haveQuestionsOrWantTo: "Hai domande o vuoi contribuire? Ci piacerebbe sentirti."
}, _ = {
	name: "Nome",
	email: "Email",
	subject: "Oggetto",
	message: "Messaggio",
	sendMessage: "Invia messaggio",
	wellGetBackTo: "Ti risponderemo entro 48 ore."
}, v = {
	howAreTheBenchmarks: "Come vengono eseguiti i benchmark?",
	allBenchmarksAreRun: "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo la mediana, i valori P95 e P99.",
	whatLibrariesAreCurrently: "Quali librerie sono attualmente testate?",
	weCurrentlyBenchmarkReactI18next: "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Prevediamo di aggiungerne altre in base alle richieste della comunità.",
	canIContributeA: "Posso contribuire con l'integrazione di una nuova libreria?",
	absolutelyWeWelcomeCommunity: "Assolutamente! Accogliamo con favore i contributi della comunità. Forka il repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request.",
	howOftenAreResults: "Con quale frequenza vengono aggiornati i risultati?",
	benchmarksRunAutomaticallyVia: "I benchmark vengono eseguiti automaticamente tramite CI a ogni aggiornamento di dipendenza e settimanalmente sul branch main. I risultati vengono pubblicati sul cruscotto entro 24 ore.",
	areTheResultsStatistically: "I risultati sono statisticamente significativi?",
	yesWeUseThe: "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche gli intervalli di confidenza e le dimensioni dell'effetto."
}, y = {
	pricing: "Prezzi",
	transparentPricingForEvery: "Prezzi trasparenti per ogni fase del tuo percorso i18n."
}, b = {
	freeTier: "Piano Gratuito",
	free: "Gratis",
	publicBenchmarkDashboard: "Dashboard pubblica dei benchmark",
	basicLibraryComparisons: "Confronti base tra librerie",
	communityForumAccess: "Accesso al forum della comunità",
	monthlyResultDigest: "Riepilogo mensile dei risultati",
	getStarted: "Inizia ora",
	proTier: "Piano Pro",
	perMonth: "/mese",
	allFreeFeatures: "Tutte le funzioni del piano gratuito",
	customBenchmarkConfigurations: "Configurazioni di benchmark personalizzate",
	privateResultsDashboard: "Dashboard dei risultati privata",
	apiAccess1000Requests: "Accesso API (1.000 richieste/giorno)",
	slackIntegration: "Integrazione Slack",
	subscribeToPro: "Abbonati a Pro",
	enterpriseTier: "Piano Enterprise",
	custom: "Personalizzato",
	allProFeatures: "Tutte le funzioni del piano Pro",
	dedicatedBenchmarkInfrastructure: "Infrastruttura di benchmark dedicata",
	customLibraryIntegrations: "Integrazioni librerie personalizzate",
	slaGuarantees: "Garanzie SLA",
	prioritySupport: "Supporto prioritario",
	contactSales: "Contatta l'ufficio vendite"
}, x = {
	products: "Prodotti",
	toolsAndServicesTo: "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione."
}, S = {
	benchmarkDashboard: "Dashboard dei benchmark",
	interactiveChartsAndTables: "Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.",
	bundleAnalyzer: "Analizzatore di bundle",
	uploadYourBuildOutput: "Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.",
	migrationAssistant: "Assistente alla migrazione",
	automatedCodemodsAndGuides: "Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.",
	performanceMonitor: "Monitor delle prestazioni",
	continuousPerformanceTrackingFor: "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
	learnMore: "Scopri di più"
}, C = {
	settings: "Impostazioni",
	manageYourAccountPreferences: "Gestisci le preferenze del tuo account e la configurazione."
}, w = {
	profile: "Profilo",
	displayName: "Nome visualizzato",
	email: "Email"
}, T = {
	preferences: "Preferenze",
	emailNotifications: "Notifiche via email",
	receiveWeeklyBenchmarkReports: "Ricevi rapporti settimanali sui benchmark",
	darkMode: "Modalità scura",
	useDarkColorScheme: "Usa lo schema colori scuro",
	defaultLanguage: "Lingua predefinita"
}, E = {
	apiAccess: "Accesso API",
	apiKey: "Chiave API",
	useThisKeyTo: "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
	copy: "Copia"
}, D = {
	cancel: "Annulla",
	saveChanges: "Salva modifiche"
}, O = {
	ourTeam: "Il nostro team",
	meetThePeopleBehindI18n: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Fondatrice & Lead Engineer",
	formerGoogleEngineerWith10: "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Ingegnere delle prestazioni",
	specializesInJavascriptPerformanceOptimization: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Developer Advocate",
	passionateAboutDeveloperExperienceAnd: "Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Sviluppatore Full-Stack",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Analista dati",
	ensuresStatisticalRigorInAll: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Responsabile della comunità",
	managesCommunityContributionsPartnershipsAnd: "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
}, A = "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Domande frequenti",
		everythingYouNeedToKnow: "Tutto quello che c'è da sapere sul progetto i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/ja.json
var e = {
	oopsPageNotFound: "おっと！ページが見つかりません",
	returnToHome: "ホームに戻る",
	couldNotMeasureHydrationDuration: "ハイドレーション時間を測定できませんでした："
}, t = {
	home: "ホーム",
	methodology: "メソッド",
	mockPages: "テストページ",
	products: "製品",
	pricing: "料金",
	team: "チーム",
	blog: "ブログ",
	careers: "採用",
	faq: "FAQ",
	contact: "お問い合わせ",
	settings: "設定",
	goToGithub: "GitHubへ"
}, n = {
	resources: "リソース",
	contact: "お問い合わせ",
	github: "GitHub",
	methodology: "メソッド",
	contributing: "貢献する",
	builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
	anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。"
}, r = {
	themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
	themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替え。",
	themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
	themeAuto: "テーマ：自動",
	themeDark: "テーマ：ダーク",
	themeLight: "テーマ：ライト"
}, i = {
	aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
	viewResults: "結果を表示"
}, a = {
	whyTheseMetricsMatter: "なぜこれらの指標が重要なのか",
	bundleSize: "バンドルサイズ",
	theBundleIsTheData: "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
	renderingHydration: "レンダリングとハイドレーション",
	connectingALargeJson: "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
	dynamicLoading: "動的読み込み",
	loadingAllTranslationsUpfront: "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。"
}, o = {
	understandingTheImpact: "影響を理解する",
	whyASingleLargeJson: "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
	manyI18nLibrariesStoreTranslations: "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
	theJsonMustBeParsed: "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
	contextBasedArchitecturesCanCause: "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
	duringServerSideRenderingThe: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
	theTradeOffsOfDynamic: "動的読み込みのトレードオフ",
	splittingTranslationsIntoPerRoute: "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
	waterfallRequests: "ウォーターフォールリクエスト：",
	flashOfUntranslatedContentFouc: "未翻訳コンテンツのフラッシュ（FOUC）：",
	cacheInvalidation: "キャッシュの無効化：",
	whatThisBenchmarkMeasures: "このベンチマークが測定するもの",
	thisTestAppProvidesA: "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
}, s = {
	sampleResults: "サンプル結果",
	bundleSize: "バンドルサイズ",
	lookupTime: "検索時間",
	lazyLoading: "遅延読み込み"
}, c = {
	methodology: "メソッド",
	weDesignedThisBenchmarkTo: "私たちは、i18nライブラリを公平、再現可能、そして有意義に比較できるようにこのベンチマークを設計しました。"
}, l = {
	testEnvironment: "テスト環境",
	allBenchmarksRunOn: "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro、16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、P95/P99パーセンタイルの中央値を報告します。",
	applicationDesign: "アプリケーション設計",
	theBenchmarkAppHas10: "ベンチマークアプリには、ナビゲーション、フォーム、動的リスト、静的テキストなど、現実的なコンテンツを含む10ページがあります。各ページは、実際の使用パターンを表すために15〜30個の翻訳キーを使用しています。",
	measurementMethodology: "測定メソッド",
	weUseBrowserNativeApis: "Performance Timeline、Resource Timing、Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、正確を期すためにsource-map-explorerを使用してgzip後に測定されます。",
	fairComparison: "公平な比較",
	eachI18nLibraryIsIntegrated: "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。最適な構成を確保するために、可能な場合はメンテナに相談しています。同じReactアプリ、同じVite設定、同じデプロイメント。"
}, u = {
	bundleSizeImpact: "バンドルサイズへの影響",
	theAdditionalJavascriptBytesSent: "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	renderingOverhead: "レンダリングのオーバーヘッド",
	howMuchExtraTimeThe: "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
	hydrationCost: "ハイドレーションのコスト",
	duringSsrTranslationDataIs: "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	lazyLoadingEffectiveness: "遅延読み込みの有効性",
	whetherSplittingTranslationsByRoute: "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
	localeSwitchSpeed: "ロケール切り替え速度",
	howFastTheAppCan: "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
	whatWeMeasure: "測定するもの"
}, d = {
	blog: "ブログ",
	insightsDeepDivesAnd: "i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。"
}, f = {
	i18nBenchmark2026Results: "i18nベンチマーク2026の結果",
	march152026: "2026年3月15日",
	weTested12DifferentInternationalization: "10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。",
	howToReduceYourI18n: "i18nバンドルを60%削減する方法",
	march82026: "2026年3月8日",
	practicalStrategiesForOptimizingTranslation: "翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。",
	theStateOfInternationalizationIn: "2026年における国際化の現状",
	february282026: "2026年2月28日",
	anOverviewOfTheCurrent: "メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。",
	migratingFromReactI18nextTo: "react-i18nextからLinguiへの移行",
	february152026: "2026年2月15日",
	aStepByStepGuide: "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
	serverComponentsAndI18nWhat: "Server Componentsとi18n：何が変わるのか？",
	february12026: "2026年2月1日",
	reactServerComponentsIntroduceNew: "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
	benchmarkMethodologyHowWeTest: "ベンチマーク手法：どのようにテストするか",
	january202026: "2026年1月20日",
	aTransparentLookAtOur: "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
	readMore: "続きを読む →"
}, p = {
	careers: "採用",
	joinOurMissionToMake: "世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。"
}, m = {
	whyJoinUs: "なぜ参加するのか？",
	remoteFirst: "リモートファースト",
	workFromAnywhereFully: "どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。",
	openSource: "オープンソース",
	allOurWorkIs: "私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。",
	impactful: "インパクトがある",
	yourWorkDirectlyHelps: "あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。"
}, h = {
	openPositions: "募集中の職種",
	seniorPerformanceEngineer: "シニアパフォーマンスエンジニア",
	fullTime: "正社員",
	remote: "リモート",
	leadBenchmarkDesignAnd: "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。",
	technicalWriter: "テクニカルライター",
	partTime: "パートタイム",
	createAndMaintainDocumentation: "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。",
	frontendDeveloper: "フロントエンドデベロッパー",
	buildAndMaintainThe: "ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。",
	devOpsEngineer: "DevOpsエンジニア",
	designAndMaintainThe: "ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。",
	applyNow: "今すぐ応募"
}, g = {
	contactUs: "お問い合わせ",
	haveQuestionsOrWantTo: "質問がある、または貢献したいですか？ぜひご連絡ください。"
}, _ = {
	name: "お名前",
	email: "メールアドレス",
	subject: "件名",
	message: "メッセージ",
	sendMessage: "メッセージを送信",
	wellGetBackTo: "48時間以内に返信いたします。"
}, v = {
	howAreTheBenchmarks: "ベンチマークはどのように実行されますか？",
	allBenchmarksAreRun: "すべてのベンチマークは、Playwrightを使用して、一貫したハードウェア（M2 MacBook Pro）上でシミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、およびP99の値を報告します。",
	whatLibrariesAreCurrently: "現在テストされているライブラリは何ですか？",
	weCurrentlyBenchmarkReactI18next: "現在はreact-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl、Paraglideをベンチマークしています。コミュニティの要望に応じてさらに追加する予定です。",
	canIContributeA: "新しいライブラリの統合を提案できますか？",
	absolutelyWeWelcomeCommunity: "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリの統合を追加し、プルリクエストを送信してください。",
	howOftenAreResults: "結果はどのくらいの頻度で更新されますか？",
	benchmarksRunAutomaticallyVia: "ベンチマークは、依存関係の更新ごとにCIを介して自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
	areTheResultsStatistically: "結果は統計的に有意ですか？",
	yesWeUseThe: "はい。分布を比較するために、有意水準0.05のマン・ホイットニーのU検定を使用します。また、信頼区間と効果量も報告します。"
}, y = {
	pricing: "料金",
	transparentPricingForEvery: "i18nジャーニーのあらゆる段階に対応する、透明性の高い料金体系。"
}, b = {
	freeTier: "無料プラン",
	free: "無料",
	publicBenchmarkDashboard: "公開ベンチマークダッシュボード",
	basicLibraryComparisons: "基本的なライブラリ比較",
	communityForumAccess: "コミュニティフォーラムへのアクセス",
	monthlyResultDigest: "月次結果ダイジェスト",
	getStarted: "始める",
	proTier: "Proプラン",
	perMonth: "/月",
	allFreeFeatures: "無料プランの全機能",
	customBenchmarkConfigurations: "カスタムベンチマーク設定",
	privateResultsDashboard: "プライベート結果ダッシュボード",
	apiAccess1000Requests: "APIアクセス（1日1,000リクエスト）",
	slackIntegration: "Slack統合",
	subscribeToPro: "Proに登録",
	enterpriseTier: "Enterpriseプラン",
	custom: "カスタム",
	allProFeatures: "Proプランの全機能",
	dedicatedBenchmarkInfrastructure: "専用ベンチマークインフラ",
	customLibraryIntegrations: "カスタムライブラリ統合",
	slaGuarantees: "SLA保証",
	prioritySupport: "優先サポート",
	contactSales: "営業に問い合わせる"
}, x = {
	products: "製品",
	toolsAndServicesTo: "国際化戦略の最適化に役立つツールとサービス。"
}, S = {
	benchmarkDashboard: "ベンチマークダッシュボード",
	interactiveChartsAndTables: "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
	bundleAnalyzer: "バンドルアナライザー",
	uploadYourBuildOutput: "ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。",
	migrationAssistant: "移行アシスタント",
	automatedCodemodsAndGuides: "最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。",
	performanceMonitor: "パフォーマンスモニター",
	continuousPerformanceTrackingFor: "i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。",
	learnMore: "詳細はこちら"
}, C = {
	settings: "設定",
	manageYourAccountPreferences: "アカウントの設定と構成を管理します。"
}, w = {
	profile: "プロフィール",
	displayName: "表示名",
	email: "メールアドレス"
}, T = {
	preferences: "設定",
	emailNotifications: "メール通知",
	receiveWeeklyBenchmarkReports: "ベンチマーク週報を受け取る",
	darkMode: "ダークモード",
	useDarkColorScheme: "ダークカラー体系を使用する",
	defaultLanguage: "デフォルト言語"
}, E = {
	apiAccess: "APIアクセス",
	apiKey: "APIキー",
	useThisKeyTo: "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
	copy: "コピー"
}, D = {
	cancel: "キャンセル",
	saveChanges: "変更を保存"
}, O = {
	ourTeam: "私たちのチーム",
	meetThePeopleBehindI18n: "i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。"
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "創設者兼リードエンジニア",
	formerGoogleEngineerWith10: "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "パフォーマンスエンジニア",
	specializesInJavascriptPerformanceOptimization: "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "デベロッパーアドボケイト",
	passionateAboutDeveloperExperienceAnd: "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "フルスタックデベロッパー",
	maintainsTheBenchmarkingInfrastructureAnd: "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "データアナリスト",
	ensuresStatisticalRigorInAll: "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
	elenaKowalski: "Elena Kowalski",
	communityManager: "コミュニティマネージャー",
	managesCommunityContributionsPartnershipsAnd: "コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。"
}, A = "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "よくある質問",
		everythingYouNeedToKnow: "i18nベンチマークプロジェクトについて知っておくべきことのすべて。"
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/ko.json
var e = {
	oopsPageNotFound: "앗! 페이지를 찾을 수 없습니다",
	returnToHome: "홈으로 돌아가기",
	couldNotMeasureHydrationDuration: "하이드레이션 시간을 측정할 수 없습니다:"
}, t = {
	home: "홈",
	methodology: "방법론",
	mockPages: "테스트 페이지",
	products: "제품",
	pricing: "가격",
	team: "팀",
	blog: "블로그",
	careers: "채용",
	faq: "FAQ",
	contact: "문의하기",
	settings: "설정",
	goToGithub: "GitHub로 이동"
}, n = {
	resources: "리소스",
	contact: "문의",
	github: "GitHub",
	methodology: "방법론",
	contributing: "기여하기",
	builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
	anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
}, r = {
	themeModeAutoSystemClick: "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
	themeModeLightClick: "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.",
	themeModeDarkClick: "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
	themeAuto: "테마: 자동",
	themeDark: "테마: 다크",
	themeLight: "테마: 라이트"
}, i = {
	aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
	viewResults: "결과 보기"
}, a = {
	whyTheseMetricsMatter: "이 지표들이 중요한 이유",
	bundleSize: "번들 크기",
	theBundleIsTheData: "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
	renderingHydration: "렌더링 및 하이드레이션",
	connectingALargeJson: "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
	dynamicLoading: "동적 로딩",
	loadingAllTranslationsUpfront: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다."
}, o = {
	understandingTheImpact: "영향 이해하기",
	whyASingleLargeJson: "단일 대형 JSON이 성능을 저해하는 이유",
	manyI18nLibrariesStoreTranslations: "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
	theJsonMustBeParsed: "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
	contextBasedArchitecturesCanCause: "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
	duringServerSideRenderingThe: "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
	theTradeOffsOfDynamic: "동적 로딩의 트레이드오프",
	splittingTranslationsIntoPerRoute: "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
	waterfallRequests: "워터폴 요청:",
	flashOfUntranslatedContentFouc: "번역되지 않은 콘텐츠의 플래시 (FOUC):",
	cacheInvalidation: "캐시 무효화:",
	whatThisBenchmarkMeasures: "이 벤치마크가 측정하는 것",
	thisTestAppProvidesA: "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다."
}, s = {
	sampleResults: "샘플 결과",
	bundleSize: "번들 크기",
	lookupTime: "조회 시간",
	lazyLoading: "지연 로딩"
}, c = {
	methodology: "방법론",
	weDesignedThisBenchmarkTo: "우리는 i18n 라이브러리를 공정하고, 재현 가능하며, 의미 있게 비교할 수 있도록 이 벤치마크를 설계했습니다."
}, l = {
	testEnvironment: "테스트 환경",
	allBenchmarksRunOn: "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16 GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며, P95/P99 백분위수의 중앙값을 보고합니다.",
	applicationDesign: "애플리케이션 설계",
	theBenchmarkAppHas10: "벤치마크 앱에는 탐색, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 실제 사용 패턴을 나타내기 위해 15-30개의 번역 키를 사용합니다.",
	measurementMethodology: "측정 방법론",
	weUseBrowserNativeApis: "Performance Timeline, Resource Timing, Layout Instability와 같은 브라우저 기반 API와 React Profiler 데이터를 결합하여 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후에 측정됩니다.",
	fairComparison: "공정한 비교",
	eachI18nLibraryIsIntegrated: "각 i18n 라이브러리는 공식 문서와 모범 사례에 따라 통합되었습니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 설정, 동일한 배포 방식이 적용됩니다."
}, u = {
	bundleSizeImpact: "번들 크기 영향",
	theAdditionalJavascriptBytesSent: "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	renderingOverhead: "렌더링 오버헤드",
	howMuchExtraTimeThe: "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
	hydrationCost: "하이드레이션 비용",
	duringSsrTranslationDataIs: "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
	lazyLoadingEffectiveness: "지연 로딩 효과",
	whetherSplittingTranslationsByRoute: "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
	localeSwitchSpeed: "로케일 전환 속도",
	howFastTheAppCan: "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
	whatWeMeasure: "측정 항목"
}, d = {
	blog: "블로그",
	insightsDeepDivesAnd: "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트."
}, f = {
	i18nBenchmark2026Results: "i18n 벤치마크 2026 결과",
	march152026: "2026년 3월 15일",
	weTested12DifferentInternationalization: "우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다.",
	howToReduceYourI18n: "i18n 번들을 60% 줄이는 방법",
	march82026: "2026년 3월 8일",
	practicalStrategiesForOptimizingTranslation: "번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.",
	theStateOfInternationalizationIn: "2026년 React 국제화의 현주소",
	february282026: "2026년 2월 28일",
	anOverviewOfTheCurrent: "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.",
	migratingFromReactI18nextTo: "react-i18next에서 Lingui로 마이그레이션",
	february152026: "2026년 2월 15일",
	aStepByStepGuide: "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
	serverComponentsAndI18nWhat: "서버 컴포넌트와 i18n: 무엇이 변하는가?",
	february12026: "2026年 2월 1일",
	reactServerComponentsIntroduceNew: "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
	benchmarkMethodologyHowWeTest: "벤치마크 방법론: 테스트 방법",
	january202026: "2026년 1월 20일",
	aTransparentLookAtOur: "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
	readMore: "더 읽어보기 →"
}, p = {
	careers: "채용",
	joinOurMissionToMake: "전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요."
}, m = {
	whyJoinUs: "왜 합류해야 하나요?",
	remoteFirst: "리모트 퍼스트",
	workFromAnywhereFully: "어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.",
	openSource: "오픈 소스",
	allOurWorkIs: "우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.",
	impactful: "영향력 있는",
	yourWorkDirectlyHelps: "여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다."
}, h = {
	openPositions: "채용 중인 직책",
	seniorPerformanceEngineer: "시니어 성능 엔지니어",
	fullTime: "정규직",
	remote: "원격",
	leadBenchmarkDesignAnd: "벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
	technicalWriter: "테크니컬 라이터",
	partTime: "파트타임",
	createAndMaintainDocumentation: "i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
	frontendDeveloper: "프론트엔드 개발자",
	buildAndMaintainThe: "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
	devOpsEngineer: "DevOps 엔지니어",
	designAndMaintainThe: "라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
	applyNow: "지금 지원하기"
}, g = {
	contactUs: "문의처",
	haveQuestionsOrWantTo: "궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다."
}, _ = {
	name: "이름",
	email: "이메일",
	subject: "제목",
	message: "메시지",
	sendMessage: "메시지 보내기",
	wellGetBackTo: "48시간 이내에 답변해 드리겠습니다."
}, v = {
	howAreTheBenchmarks: "벤치마크는 어떻게 실행되나요?",
	allBenchmarksAreRun: "모든 벤치마크는 일관된 하드웨어 설정(M2 MacBook Pro)에서 시뮬레이션된 4G 네트워크 조건으로 Playwright를 사용하여 실행됩니다. 각 테스트는 50번 반복되며 중앙값, P95 및 P99 값을 보고합니다.",
	whatLibrariesAreCurrently: "현재 어떤 라이브러리가 테스트되고 있나요?",
	weCurrentlyBenchmarkReactI18next: "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티의 요청에 따라 더 많은 라이브러리를 추가할 계획입니다.",
	canIContributeA: "새로운 라이브러리 통합을 제안할 수 있나요?",
	absolutelyWeWelcomeCommunity: "물론입니다! 커뮤니티의 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요.",
	howOftenAreResults: "결과는 얼마나 자주 업데이트되나요?",
	benchmarksRunAutomaticallyVia: "벤치마크는 모든 종속성 업데이트 시 CI를 통해 자동으로 실행되며 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
	areTheResultsStatistically: "결과가 통계적으로 유의미한가요?",
	yesWeUseThe: "네. 0.05 유의 수준에서 Mann-Whitney U 검정을 사용하여 분포를 비교합니다. 또한 신뢰 구간과 효과 크기를 보고합니다."
}, y = {
	pricing: "가격",
	transparentPricingForEvery: "i18n 여정의 모든 단계에 적합한 투명한 요금제."
}, b = {
	freeTier: "무료 티어",
	free: "무료",
	publicBenchmarkDashboard: "공개 벤치마크 대시보드",
	basicLibraryComparisons: "기본 라이브러리 비교",
	communityForumAccess: "커뮤니티 포럼 액세스",
	monthlyResultDigest: "월간 결과 요약",
	getStarted: "시작하기",
	proTier: "프로 티어",
	perMonth: "/월",
	allFreeFeatures: "모든 무료 기능 포함",
	customBenchmarkConfigurations: "맞춤형 벤치마크 구성",
	privateResultsDashboard: "비공개 결과 대시보드",
	apiAccess1000Requests: "API 액세스(일일 1,000건)",
	slackIntegration: "Slack 연동",
	subscribeToPro: "프로 구독",
	enterpriseTier: "엔터프라이즈 티어",
	custom: "커스텀",
	allProFeatures: "모든 프로 기능 포함",
	dedicatedBenchmarkInfrastructure: "전용 벤치마크 인프라",
	customLibraryIntegrations: "맞춤형 라이브러리 통합",
	slaGuarantees: "SLA 보장",
	prioritySupport: "우선 지원",
	contactSales: "영업팀 문의"
}, x = {
	products: "제품",
	toolsAndServicesTo: "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스."
}, S = {
	benchmarkDashboard: "벤치마크 대시보드",
	interactiveChartsAndTables: "번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.",
	bundleAnalyzer: "번들 분석기",
	uploadYourBuildOutput: "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.",
	migrationAssistant: "마이그레이션 도우미",
	automatedCodemodsAndGuides: "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.",
	performanceMonitor: "성능 모니터",
	continuousPerformanceTrackingFor: "i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.",
	learnMore: "더 알아보기"
}, C = {
	settings: "설정",
	manageYourAccountPreferences: "계정 기본 설정 및 구성을 관리합니다."
}, w = {
	profile: "프로필",
	displayName: "표시 이름",
	email: "이메일"
}, T = {
	preferences: "기본 설정",
	emailNotifications: "이메일 알림",
	receiveWeeklyBenchmarkReports: "주간 벤치마크 보고서 받기",
	darkMode: "다크 모드",
	useDarkColorScheme: "어두운 색상 체계 사용",
	defaultLanguage: "기본 언어"
}, E = {
	apiAccess: "API 액세스",
	apiKey: "API 키",
	useThisKeyTo: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
	copy: "복사"
}, D = {
	cancel: "취소",
	saveChanges: "변경 사항 저장"
}, O = {
	ourTeam: "우리 팀",
	meetThePeopleBehindI18n: "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "창립자 및 리드 엔지니어",
	formerGoogleEngineerWith10: "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "성능 엔지니어",
	specializesInJavascriptPerformanceOptimization: "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "개발자 에반젤리스트",
	passionateAboutDeveloperExperienceAnd: "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "풀스택 개발자",
	maintainsTheBenchmarkingInfrastructureAnd: "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "데이터 분석가",
	ensuresStatisticalRigorInAll: "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "커뮤니티 매니저",
	managesCommunityContributionsPartnershipsAnd: "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。"
}, A = "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "자주 묻는 질문",
		everythingYouNeedToKnow: "i18n Benchmark 프로젝트에 대해 알아야 할 모든 것."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/pt.json
var e = {
	oopsPageNotFound: "Ops! Página não encontrada",
	returnToHome: "Voltar para o Início",
	couldNotMeasureHydrationDuration: "Não foi possível medir a duração da hidratação:"
}, t = {
	home: "Início",
	methodology: "Metodologia",
	mockPages: "Páginas de teste",
	products: "Produtos",
	pricing: "Preços",
	team: "Equipe",
	blog: "Blog",
	careers: "Carreiras",
	faq: "FAQ",
	contact: "Contato",
	settings: "Configurações",
	goToGithub: "Ir para GitHub"
}, n = {
	resources: "Recursos",
	contact: "Contato",
	github: "GitHub",
	methodology: "Metodologia",
	contributing: "Contribuir",
	builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
	anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo."
}, r = {
	themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
	themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Escuro",
	themeLight: "Tema: Claro"
}, i = {
	aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
	viewResults: "Ver Resultados"
}, a = {
	whyTheseMetricsMatter: "Por que essas métricas são importantes",
	bundleSize: "Tamanho do Bundle",
	theBundleIsTheData: "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
	renderingHydration: "Renderização e Hidratação",
	connectingALargeJson: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	dynamicLoading: "Carregamento Dinâmico",
	loadingAllTranslationsUpfront: "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
}, o = {
	understandingTheImpact: "Entendendo o impacto",
	whyASingleLargeJson: "Por que um único JSON grande pode prejudicar o desempenho",
	manyI18nLibrariesStoreTranslations: "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
	theJsonMustBeParsed: "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
	contextBasedArchitecturesCanCause: "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
	duringServerSideRenderingThe: "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
	theTradeOffsOfDynamic: "As compensações do carregamento dinâmico",
	splittingTranslationsIntoPerRoute: "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
	waterfallRequests: "Pedidos em cascata:",
	flashOfUntranslatedContentFouc: "Flash de conteúdo não traduzido (FOUC):",
	cacheInvalidation: "Invalidação da cache:",
	whatThisBenchmarkMeasures: "O que este benchmark mede",
	thisTestAppProvidesA: "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis."
}, s = {
	sampleResults: "Resultados de amostra",
	bundleSize: "Tamanho do bundle",
	lookupTime: "Tempo de consulta",
	lazyLoading: "Carregamento lento"
}, c = {
	methodology: "Metodologia",
	weDesignedThisBenchmarkTo: "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas das bibliotecas de i18n."
}, l = {
	testEnvironment: "Ambiente de Teste",
	allBenchmarksRunOn: "Todos os benchmarks são executados no mesmo hardware (M2 MacBook Pro, 16 GB de RAM), no mesmo navegador (Chromium 120 via Playwright) e nas mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e reportamos a mediana com percentis P95/P99.",
	applicationDesign: "Design do Aplicativo",
	theBenchmarkAppHas10: "O aplicativo de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa de 15 a 30 chaves de tradução para representar padrões de uso do mundo real.",
	measurementMethodology: "Metodologia de Medição",
	weUseBrowserNativeApis: "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para maior precisão.",
	fairComparison: "Comparação Justa",
	eachI18nLibraryIsIntegrated: "Cada biblioteca i18n é integrada seguindo sua documentação oficial e as melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo aplicativo React, a mesma configuração Vite, o mesmo deploy."
}, u = {
	bundleSizeImpact: "Impacto no tamanho do bundle",
	theAdditionalJavascriptBytesSent: "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	renderingOverhead: "Sobrecarga de renderização",
	howMuchExtraTimeThe: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React — medido usando o actualDuration do React Profiler.",
	hydrationCost: "Custo de hidratação",
	duringSsrTranslationDataIs: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	lazyLoadingEffectiveness: "Eficácia do carregamento lento",
	whetherSplittingTranslationsByRoute: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
	localeSwitchSpeed: "Velocidade de troca de idioma",
	howFastTheAppCan: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	whatWeMeasure: "O que medimos"
}, d = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n."
}, f = {
	i18nBenchmark2026Results: "Resultados do i18n Benchmark 2026",
	march152026: "15 de março de 2026",
	weTested12DifferentInternationalization: "Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos.",
	howToReduceYourI18n: "Como reduzir seu bundle i18n em 60%",
	march82026: "8 de março de 2026",
	practicalStrategiesForOptimizingTranslation: "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
	theStateOfInternationalizationIn: "O estado da internacionalização em 2026",
	february282026: "28 de fevereiro de 2026",
	anOverviewOfTheCurrent: "Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.",
	migratingFromReactI18nextTo: "Migrando do react-i18next para o Lingui",
	february152026: "15 de fevereiro de 2026",
	aStepByStepGuide: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
	serverComponentsAndI18nWhat: "Server Components e i18n: o que muda?",
	february12026: "1 de fevereiro de 2026",
	reactServerComponentsIntroduceNew: "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
	benchmarkMethodologyHowWeTest: "Metodologia de Benchmark: como testamos",
	january202026: "20 de janeiro de 2026",
	aTransparentLookAtOur: "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
	readMore: "Leia mais →"
}, p = {
	careers: "Carreiras",
	joinOurMissionToMake: "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares."
}, m = {
	whyJoinUs: "Por que se juntar a nós?",
	remoteFirst: "Remoto primeiro",
	workFromAnywhereFully: "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
	openSource: "Open Source",
	allOurWorkIs: "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
	impactful: "Impactante",
	yourWorkDirectlyHelps: "Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos."
}, h = {
	openPositions: "Vagas abertas",
	seniorPerformanceEngineer: "Engenheiro de Performance Sênior",
	fullTime: "Tempo integral",
	remote: "Remoto",
	leadBenchmarkDesignAnd: "Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.",
	technicalWriter: "Redator Técnico",
	partTime: "Meio período",
	createAndMaintainDocumentation: "Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.",
	frontendDeveloper: "Desenvolvedor Frontend",
	buildAndMaintainThe: "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
	devOpsEngineer: "Engenheiro DevOps",
	designAndMaintainThe: "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.",
	applyNow: "Candidatar-se agora"
}, g = {
	contactUs: "Contate-nos",
	haveQuestionsOrWantTo: "Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você."
}, _ = {
	name: "Nome",
	email: "E-mail",
	subject: "Assunto",
	message: "Mensagem",
	sendMessage: "Enviar Mensagem",
	wellGetBackTo: "Retornaremos em até 48 horas."
}, v = {
	howAreTheBenchmarks: "Como os benchmarks são executados?",
	allBenchmarksAreRun: "Todos os benchmarks são executados usando o Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos a mediana, e os valores P95 e P99.",
	whatLibrariesAreCurrently: "Quais bibliotecas são testadas atualmente?",
	weCurrentlyBenchmarkReactI18next: "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nas solicitações da comunidade.",
	canIContributeA: "Posso contribuir com uma nova integração de biblioteca?",
	absolutelyWeWelcomeCommunity: "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo o nosso modelo e envie um pull request.",
	howOftenAreResults: "Com que frequência os resultados são atualizados?",
	benchmarksRunAutomaticallyVia: "Os benchmarks são executados automaticamente via CI a cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
	areTheResultsStatistically: "Os resultados são estatisticamente significativos?",
	yesWeUseThe: "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito."
}, y = {
	pricing: "Preços",
	transparentPricingForEvery: "Preços transparentes para cada etapa da sua jornada i18n."
}, b = {
	freeTier: "Nível Gratuito",
	free: "Grátis",
	publicBenchmarkDashboard: "Dashboard público de benchmark",
	basicLibraryComparisons: "Comparações básicas de bibliotecas",
	communityForumAccess: "Acesso ao fórum da comunidade",
	monthlyResultDigest: "Resumo mensal dos resultados",
	getStarted: "Começar",
	proTier: "Nível Pro",
	perMonth: "/mês",
	allFreeFeatures: "Todas as funcionalidades gratuitas",
	customBenchmarkConfigurations: "Configurações de benchmark personalizadas",
	privateResultsDashboard: "Dashboard de resultados privado",
	apiAccess1000Requests: "Acesso à API (1.000 requisições/dia)",
	slackIntegration: "Integração com Slack",
	subscribeToPro: "Assinar Pro",
	enterpriseTier: "Nível Enterprise",
	custom: "Personalizado",
	allProFeatures: "Todas as funcionalidades Pro",
	dedicatedBenchmarkInfrastructure: "Infraestrutura de benchmark dedicada",
	customLibraryIntegrations: "Integrações de bibliotecas personalizadas",
	slaGuarantees: "Garantias de SLA",
	prioritySupport: "Suporte prioritário",
	contactSales: "Contatar Vendas"
}, x = {
	products: "Produtos",
	toolsAndServicesTo: "Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização."
}, S = {
	benchmarkDashboard: "Dashboard de Benchmark",
	interactiveChartsAndTables: "Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.",
	bundleAnalyzer: "Analisador de Bundle",
	uploadYourBuildOutput: "Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.",
	migrationAssistant: "Assistente de Migração",
	automatedCodemodsAndGuides: "Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.",
	performanceMonitor: "Monitor de Performance",
	continuousPerformanceTrackingFor: "Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.",
	learnMore: "Saiba Mais"
}, C = {
	settings: "Configurações",
	manageYourAccountPreferences: "Gerencie as suas preferências e configuração da conta."
}, w = {
	profile: "Perfil",
	displayName: "Nome de exibição",
	email: "E-Mail"
}, T = {
	preferences: "Preferências",
	emailNotifications: "Notificações por e-mail",
	receiveWeeklyBenchmarkReports: "Receber relatórios semanais de benchmarks",
	darkMode: "Modo Escuro",
	useDarkColorScheme: "Usar esquema de cores escuras",
	defaultLanguage: "Idioma Padrão"
}, E = {
	apiAccess: "Acesso à API",
	apiKey: "Chave da API",
	useThisKeyTo: "Utilize esta chave para aceder à API de benchmarking de forma programática.",
	copy: "Copiar"
}, D = {
	cancel: "Cancelar",
	saveChanges: "Guardar alterações"
}, O = {
	ourTeam: "Nossa Equipe",
	meetThePeopleBehindI18n: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "Fundadora e Engenheira Líder",
	formerGoogleEngineerWith10: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "Engenheiro de Performance",
	specializesInJavascriptPerformanceOptimization: "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "Advogado de Desenvolvedores",
	passionateAboutDeveloperExperienceAnd: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "Desenvolvedor Full-Stack",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "Analista de Dados",
	ensuresStatisticalRigorInAll: "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
	elenaKowalski: "Elena Kowalski",
	communityManager: "Gerente de Comunidade",
	managesCommunityContributionsPartnershipsAnd: "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
}, A = "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Perguntas Frequentes",
		everythingYouNeedToKnow: "Tudo o que você precisa saber sobre o projeto i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/ru.json
var e = {
	oopsPageNotFound: "Упс! Страница не найдена",
	returnToHome: "Вернуться на главную",
	couldNotMeasureHydrationDuration: "Не удалось измерить продолжительность гидратации:"
}, t = {
	home: "Главная",
	methodology: "Методология",
	mockPages: "Тестовые страницы",
	products: "Продукты",
	pricing: "Цены",
	team: "Команда",
	blog: "Блог",
	careers: "Карьера",
	faq: "FAQ",
	contact: "Контакт",
	settings: "Настройки",
	goToGithub: "Перейти на GitHub"
}, n = {
	resources: "Ресурсы",
	contact: "Контакт",
	github: "GitHub",
	methodology: "Методология",
	contributing: "Вклад",
	builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
	anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения."
}, r = {
	themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
	themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	themeAuto: "Тема: Авто",
	themeDark: "Тема: Темная",
	themeLight: "Тема: Светлая"
}, i = {
	aTestApplicationDesignedTo: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
	viewResults: "Посмотреть результаты"
}, a = {
	whyTheseMetricsMatter: "Почему эти показатели важны",
	bundleSize: "Размер бандла",
	theBundleIsTheData: "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	renderingHydration: "Рендеринг и гидратация",
	connectingALargeJson: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	dynamicLoading: "Динамическая загрузка",
	loadingAllTranslationsUpfront: "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо."
}, o = {
	understandingTheImpact: "Понимание влияния",
	whyASingleLargeJson: "Почему один большой JSON может снизить производительность",
	manyI18nLibrariesStoreTranslations: "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
	theJsonMustBeParsed: "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
	contextBasedArchitecturesCanCause: "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
	duringServerSideRenderingThe: "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
	theTradeOffsOfDynamic: "Компромиссы динамической загрузки",
	splittingTranslationsIntoPerRoute: "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
	waterfallRequests: "Каскадные запросы (Waterfall requests):",
	flashOfUntranslatedContentFouc: "Мерцание непереведенного контента (FOUC):",
	cacheInvalidation: "Инвалидация кэша:",
	whatThisBenchmarkMeasures: "Что измеряет этот бенчмарк",
	thisTestAppProvidesA: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
}, s = {
	sampleResults: "Примеры результатов",
	bundleSize: "Размер бандла",
	lookupTime: "Время поиска",
	lazyLoading: "Ленивая загрузка"
}, c = {
	methodology: "Методология",
	weDesignedThisBenchmarkTo: "Мы разработали этот бенчмарк, чтобы обеспечить справедливое, воспроизводимое и значимое сравнение библиотек i18n. Вот наш подход."
}, l = {
	testEnvironment: "Тестовая среда",
	allBenchmarksRunOn: "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и в одинаковых сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
	applicationDesign: "Дизайн приложения",
	theBenchmarkAppHas10: "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом — навигацией, формами, динамическими списками и статическим текстом. Каждая страница использует 15–30 ключей перевода для представления реальных сценариев использования, а не синтетических микро-бенчмарков.",
	measurementMethodology: "Методология измерения",
	weUseBrowserNativeApis: "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после gzip с использованием source-map-explorer для точности.",
	fairComparison: "Справедливое сравнение",
	eachI18nLibraryIsIntegrated: "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и лучшими практиками. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. Одно и то же приложение React, один и тот же конфиг Vite, одно и то же развертывание."
}, u = {
	bundleSizeImpact: "Влияние на размер бандла",
	theAdditionalJavascriptBytesSent: "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы перевода для текущего языка.",
	renderingOverhead: "Затраты на рендеринг",
	howMuchExtraTimeThe: "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
	hydrationCost: "Стоимость гидратации",
	duringSsrTranslationDataIs: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают HTML-пейлоад и замедляют гидратацию — момент, когда страница становится интерактивной.",
	lazyLoadingEffectiveness: "Эффективность ленивой загрузки",
	whetherSplittingTranslationsByRoute: "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
	localeSwitchSpeed: "Скорость переключения языка",
	howFastTheAppCan: "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	whatWeMeasure: "Что мы измеряем"
}, d = {
	blog: "Блог",
	insightsDeepDivesAnd: "Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n."
}, f = {
	i18nBenchmark2026Results: "Результаты i18n Benchmark 2026",
	march152026: "15 марта 2026 года",
	weTested12DifferentInternationalization: "Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками.",
	howToReduceYourI18n: "Как уменьшить бандл i18n на 60%",
	march82026: "8 марта 2026 года",
	practicalStrategiesForOptimizingTranslation: "Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.",
	theStateOfInternationalizationIn: "Состояние интернационализации в 2026 году",
	february282026: "28 февраля 2026 года",
	anOverviewOfTheCurrent: "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.",
	migratingFromReactI18nextTo: "Миграция с react-i18next на Lingui",
	february152026: "15 февраля 2026 года",
	aStepByStepGuide: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
	serverComponentsAndI18nWhat: "Server Components и i18n: что меняется?",
	february12026: "1 февраля 2026 года",
	reactServerComponentsIntroduceNew: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
	benchmarkMethodologyHowWeTest: "Методология бенчмарка: как мы тестируем",
	january202026: "20 января 2026 года",
	aTransparentLookAtOur: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
	readMore: "Читать далее →"
}, p = {
	careers: "Карьера",
	joinOurMissionToMake: "Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде."
}, m = {
	whyJoinUs: "Почему стоит присоединиться к нам?",
	remoteFirst: "Сначала удаленка",
	workFromAnywhereFully: "Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.",
	openSource: "Открытый исходный код",
	allOurWorkIs: "Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.",
	impactful: "Значимо",
	yourWorkDirectlyHelps: "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения."
}, h = {
	openPositions: "Открытые вакансии",
	seniorPerformanceEngineer: "Старший инженер по производительности",
	fullTime: "Полный рабочий день",
	remote: "Удаленно",
	leadBenchmarkDesignAnd: "Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.",
	technicalWriter: "Технический писатель",
	partTime: "Неполный рабочий день",
	createAndMaintainDocumentation: "Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.",
	frontendDeveloper: "Frontend-разработчик",
	buildAndMaintainThe: "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
	devOpsEngineer: "DevOps-инженер",
	designAndMaintainThe: "Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
	applyNow: "Подать заявку"
}, g = {
	contactUs: "Связаться с нами",
	haveQuestionsOrWantTo: "Есть вопросы или хотите внести вклад? Мы будем рады услышать вас."
}, _ = {
	name: "Имя",
	email: "Email",
	subject: "Тема",
	message: "Сообщение",
	sendMessage: "Отправить сообщение",
	wellGetBackTo: "Мы ответим вам в течение 48 часов."
}, v = {
	howAreTheBenchmarks: "Как запускаются бенчмарки?",
	allBenchmarksAreRun: "Все бенчмарки запускаются с использованием Playwright на стабильной конфигурации оборудования (M2 MacBook Pro) с симулированными условиями сети 4G. Каждый тест выполняется 50 раз, и мы сообщаем медиану, значения P95 и P99.",
	whatLibrariesAreCurrently: "Какие библиотеки сейчас тестируются?",
	weCurrentlyBenchmarkReactI18next: "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек на основе запросов сообщества.",
	canIContributeA: "Могу ли я предложить интеграцию новой библиотеки?",
	absolutelyWeWelcomeCommunity: "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки, следуя нашему шаблону, и отправьте пулл-реквест. Подробности см. в руководстве для контрибьюторов.",
	howOftenAreResults: "Как часто обновляются результаты?",
	benchmarksRunAutomaticallyVia: "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
	areTheResultsStatistically: "Являются ли результаты статистически значимыми?",
	yesWeUseThe: "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем доверительные интервалы и размеры эффекта."
}, y = {
	pricing: "Цены",
	transparentPricingForEvery: "Прозрачные цены для каждого этапа вашего пути в i18n."
}, b = {
	freeTier: "Бесплатный уровень",
	free: "Бесплатно",
	publicBenchmarkDashboard: "Публичный дашборд бенчмарков",
	basicLibraryComparisons: "Базовые сравнения библиотек",
	communityForumAccess: "Доступ к форуму сообщества",
	monthlyResultDigest: "Ежемесячный дайджест результатов",
	getStarted: "Начать",
	proTier: "Профессиональный уровень",
	perMonth: "/месяц",
	allFreeFeatures: "Все функции бесплатного уровня",
	customBenchmarkConfigurations: "Собственные конфигурации бенчмарков",
	privateResultsDashboard: "Приватный дашборд результатов",
	apiAccess1000Requests: "Доступ к API (1000 запросов/день)",
	slackIntegration: "Интеграция со Slack",
	subscribeToPro: "Подписаться на Pro",
	enterpriseTier: "Корпоративный уровень",
	custom: "Индивидуально",
	allProFeatures: "Все функции уровня Pro",
	dedicatedBenchmarkInfrastructure: "Выделенная инфраструктура для бенчмарков",
	customLibraryIntegrations: "Индивидуальные интеграции библиотек",
	slaGuarantees: "Гарантии SLA",
	prioritySupport: "Приоритетная поддержка",
	contactSales: "Связаться с отделом продаж"
}, x = {
	products: "Продукты",
	toolsAndServicesTo: "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации."
}, S = {
	benchmarkDashboard: "Дашборд бенчмарков",
	interactiveChartsAndTables: "Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
	bundleAnalyzer: "Анализатор бандла",
	uploadYourBuildOutput: "Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.",
	migrationAssistant: "Помощник по миграции",
	automatedCodemodsAndGuides: "Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.",
	performanceMonitor: "Монитор производительности",
	continuousPerformanceTrackingFor: "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
	learnMore: "Узнать больше"
}, C = {
	settings: "Настройки",
	manageYourAccountPreferences: "Управляйте настройками своего аккаунта и конфигурацией."
}, w = {
	profile: "Профиль",
	displayName: "Отображаемое имя",
	email: "Email"
}, T = {
	preferences: "Настройки",
	emailNotifications: "Email-уведомления",
	receiveWeeklyBenchmarkReports: "Получать еженедельные отчеты о бенчмарках",
	darkMode: "Темный режим",
	useDarkColorScheme: "Использовать темную цветовою схему",
	defaultLanguage: "Язык по умолчанию"
}, E = {
	apiAccess: "Доступ к API",
	apiKey: "Ключ API",
	useThisKeyTo: "Используйте этот ключ для программного доступа к API бенчмаркинга.",
	copy: "Копировать"
}, D = {
	cancel: "Отмена",
	saveChanges: "Сохранить изменения"
}, O = {
	ourTeam: "Наша команда",
	meetThePeopleBehindI18n: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
}, k = {
	sarahChen: "Сара Чен",
	founderLeadEngineer: "Основатель и ведущий инженер",
	formerGoogleEngineerWith10: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	marcusWeber: "Маркус Вебер",
	performanceEngineer: "Инженер по производительности",
	specializesInJavascriptPerformanceOptimization: "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
	aishaPatel: "Айша Патель",
	developerAdvocate: "Адвокат разработчиков",
	passionateAboutDeveloperExperienceAnd: "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
	tomasRodriguez: "Томас Родригес",
	fullStackDeveloper: "Full-Stack разработчик",
	maintainsTheBenchmarkingInfrastructureAnd: "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.",
	yukiTanaka: "Юки Танака",
	dataAnalyst: "Аналитик данных",
	ensuresStatisticalRigorInAll: "Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).",
	elenaKowalski: "Елена Ковальски",
	communityManager: "Комьюнити-менеджер",
	managesCommunityContributionsPartnershipsAnd: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом."
}, A = "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "Часто задаваемые вопросы",
		everythingYouNeedToKnow: "Все, что вам нужно знать о проекте i18n Benchmark."
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };
//#region src/i18n/locales/zh.json
var e = {
	oopsPageNotFound: "糟糕！找不到页面",
	returnToHome: "返回首页",
	couldNotMeasureHydrationDuration: "无法测量注水时长："
}, t = {
	home: "首页",
	methodology: "方法学",
	mockPages: "模拟页面",
	products: "产品",
	pricing: "价格",
	team: "团队",
	blog: "博客",
	careers: "职业",
	faq: "常见问题",
	contact: "联系我们",
	settings: "设置",
	goToGithub: "前往 GitHub"
}, n = {
	resources: "资源",
	contact: "联系",
	github: "GitHub",
	methodology: "方法学",
	contributing: "贡献",
	builtWith: "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
	anOpenSourceTestApplication: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。"
}, r = {
	themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到浅色模式。",
	themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
	themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
	themeAuto: "主题：自动",
	themeDark: "主题：深色",
	themeLight: "主题：浅色"
}, i = {
	aTestApplicationDesignedTo: "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
	viewResults: "查看结果"
}, a = {
	whyTheseMetricsMatter: "为什么这些指标很重要",
	bundleSize: "包大小",
	theBundleIsTheData: "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	renderingHydration: "渲染与注水",
	connectingALargeJson: "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
	dynamicLoading: "动态加载",
	loadingAllTranslationsUpfront: "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
}, o = {
	understandingTheImpact: "理解影响",
	whyASingleLargeJson: "为什么单个大型 JSON 会损害性能",
	manyI18nLibrariesStoreTranslations: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
	theJsonMustBeParsed: "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
	contextBasedArchitecturesCanCause: "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
	duringServerSideRenderingThe: "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
	theTradeOffsOfDynamic: "动态加载的权衡",
	splittingTranslationsIntoPerRoute: "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
	waterfallRequests: "瀑布请求：",
	flashOfUntranslatedContentFouc: "未翻译内容闪烁 (FOUC)：",
	cacheInvalidation: "缓存失效：",
	whatThisBenchmarkMeasures: "此基准测试测量什么",
	thisTestAppProvidesA: "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。"
}, s = {
	sampleResults: "样本结果",
	bundleSize: "包大小",
	lookupTime: "查询时间",
	lazyLoading: "延迟加载"
}, c = {
	methodology: "方法学",
	weDesignedThisBenchmarkTo: "我们设计这个基准是为了提供公平、可重现和有意义的 i18n 库比较。"
}, l = {
	testEnvironment: "测试环境",
	allBenchmarksRunOn: "所有基准测试都在相同的硬件（M2 MacBook Pro, 16 GB RAM）、相同的浏览器（通过 Playwright 运行 Chromium 120）和相同的网络条件（模拟 4G）下运行。每项测试重复 50 次，我们报告 P95/P99 百分位数的平均值。",
	applicationDesign: "应用设计",
	theBenchmarkAppHas10: "该基准测试应用有 10 个页面，包含现实内容 —— 导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表真实世界的使用模式。",
	measurementMethodology: "测量方法学",
	weUseBrowserNativeApis: "我们使用浏览器原生的 API（Performance Timeline, Resource Timing, Layout Instability）结合 React Profiler 数据。包大小在 gzip 后使用 source-map-explorer 测量以确保准确性。",
	fairComparison: "公平比较",
	eachI18nLibraryIsIntegrated: "每个 i18n 库都按照其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署。"
}, u = {
	bundleSizeImpact: "包大小影响",
	theAdditionalJavascriptBytesSent: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	renderingOverhead: "渲染开销",
	howMuchExtraTimeThe: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	hydrationCost: "注水成本",
	duringSsrTranslationDataIs: "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	lazyLoadingEffectiveness: "延迟加载有效性",
	whetherSplittingTranslationsByRoute: "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	localeSwitchSpeed: "本地语言切换速度",
	howFastTheAppCan: "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	whatWeMeasure: "我们测量什么"
}, d = {
	blog: "博客",
	insightsDeepDivesAnd: "来自 i18n 基准测试社区的见解、深入探讨和更新。"
}, f = {
	i18nBenchmark2026Results: "i18n 基准测试 2026 结果",
	march152026: "2026年3月15日",
	weTested12DifferentInternationalization: "我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。",
	howToReduceYourI18n: "如何将 i18n 包大小减少 60%",
	march82026: "2026年3月8日",
	practicalStrategiesForOptimizingTranslation: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
	theStateOfInternationalizationIn: "React 国际化的现状",
	february282026: "2026年2月28日",
	anOverviewOfTheCurrent: "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
	migratingFromReactI18nextTo: "从 react-i18next 迁移到 Lingui",
	february152026: "2026年2月15日",
	aStepByStepGuide: "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
	serverComponentsAndI18nWhat: "服务器组件和 i18n：有什么变化？",
	february12026: "2026年2月1日",
	reactServerComponentsIntroduceNew: "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。",
	benchmarkMethodologyHowWeTest: "基准测试方法学：我们如何测试",
	january202026: "2026年1月20日",
	aTransparentLookAtOur: "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
	readMore: "阅读更多 →"
}, p = {
	careers: "职业",
	joinOurMissionToMake: "加入我们的使命，让网络对世界各地的每一个人都更快、更方便。"
}, m = {
	whyJoinUs: "为什么加入我们？",
	remoteFirst: "远程优先",
	workFromAnywhereFully: "在任何地方工作。完全分布在 6 个时区的团队。",
	openSource: "开源",
	allOurWorkIs: "我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。",
	impactful: "有影响力的",
	yourWorkDirectlyHelps: "你的工作直接帮助开发人员构建更好、更快的国际化应用程序。"
}, h = {
	openPositions: "开放职位",
	seniorPerformanceEngineer: "高级性能工程师",
	fullTime: "全职",
	remote: "远程",
	leadBenchmarkDesignAnd: "领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。",
	technicalWriter: "技术文档工程师",
	partTime: "兼职",
	createAndMaintainDocumentation: "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
	frontendDeveloper: "前端开发人员",
	buildAndMaintainThe: "构建并维护基准仪表板、比较工具和交互式可视化效果。",
	devOpsEngineer: "运维工程师",
	designAndMaintainThe: "设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。",
	applyNow: "立即申请"
}, g = {
	contactUs: "联系我们",
	haveQuestionsOrWantTo: "有疑问或想做出贡献？我们很期待听到你的声音。"
}, _ = {
	name: "姓名",
	email: "电子邮件",
	subject: "主题",
	message: "留言",
	sendMessage: "发送消息",
	wellGetBackTo: "我们将在 48 小时内回复您。"
}, v = {
	howAreTheBenchmarks: "基准测试是如何运行的？",
	allBenchmarksAreRun: "所有的基准测试都是使用 Playwright 在一致的硬件设置（M2 MacBook Pro）上运行的，并模拟了 4G 网络条件。每个测试运行 50 次迭代，我们报告中位数、P95 和 P99 值。",
	whatLibrariesAreCurrently: "目前测试了哪些库？",
	weCurrentlyBenchmarkReactI18next: "我们目前对 react-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求增加更多。",
	canIContributeA: "我可以贡献一个新的库集成吗？",
	absolutelyWeWelcomeCommunity: "当然可以！我们欢迎社区做出贡献。Fork 该仓库，按照我们的模板添加您的库集成，并提交拉取请求。",
	howOftenAreResults: "结果多久更新一次？",
	benchmarksRunAutomaticallyVia: "基准测试在每次依赖项更新时通过 CI 自动运行，并每周在主分支上运行。结果会在 24 小时内发布到仪表板上。",
	areTheResultsStatistically: "结果是否具有统计学意义？",
	yesWeUseThe: "是的。我们使用 Mann-Whitney U 检验（显着性水平为 0.05）来比较分布。我们还报告置信区间和效应大小。"
}, y = {
	pricing: "价格",
	transparentPricingForEvery: "为您 i18n 旅程的每个阶段提供透明的价格。"
}, b = {
	freeTier: "免费版",
	free: "免费",
	publicBenchmarkDashboard: "公共基准测试仪表板",
	basicLibraryComparisons: "基本库比较",
	communityForumAccess: "社区论坛访问权限",
	monthlyResultDigest: "每月结果摘要",
	getStarted: "开始使用",
	proTier: "专业版",
	perMonth: "/月",
	allFreeFeatures: "包含所有免费版功能",
	customBenchmarkConfigurations: "自定义基准测试配置",
	privateResultsDashboard: "私人结果仪表板",
	apiAccess1000Requests: "API 访问（1,000 次请求/天）",
	slackIntegration: "Slack 集成",
	subscribeToPro: "订阅专业版",
	enterpriseTier: "企业版",
	custom: "定制",
	allProFeatures: "包含所有专业版功能",
	dedicatedBenchmarkInfrastructure: "专用基准测试基础设施",
	customLibraryIntegrations: "自定义库集成",
	slaGuarantees: "SLA 保证",
	prioritySupport: "优先支持",
	contactSales: "联系销售人员"
}, x = {
	products: "产品",
	toolsAndServicesTo: "帮助您优化国际化战略的工具和服务。"
}, S = {
	benchmarkDashboard: "基准测试仪表板",
	interactiveChartsAndTables: "交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。",
	bundleAnalyzer: "包分析器",
	uploadYourBuildOutput: "上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。",
	migrationAssistant: "迁移助手",
	automatedCodemodsAndGuides: "自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。",
	performanceMonitor: "性能监控器",
	continuousPerformanceTrackingFor: "对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。",
	learnMore: "了解更多"
}, C = {
	settings: "设置",
	manageYourAccountPreferences: "管理您的账户偏好和配置。"
}, w = {
	profile: "个人资料",
	displayName: "显示名称",
	email: "电子邮件"
}, T = {
	preferences: "偏好设置",
	emailNotifications: "邮件通知",
	receiveWeeklyBenchmarkReports: "接收每周基准测试报告",
	darkMode: "深色模式",
	useDarkColorScheme: "使用深色配色方案",
	defaultLanguage: "默认语言"
}, E = {
	apiAccess: "API 访问",
	apiKey: "API 密钥",
	useThisKeyTo: "使用此密钥以编程方式访问基准测试 API。",
	copy: "复制"
}, D = {
	cancel: "取消",
	saveChanges: "保存更改"
}, O = {
	ourTeam: "我们的团队",
	meetThePeopleBehindI18n: "认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。"
}, k = {
	sarahChen: "Sarah Chen",
	founderLeadEngineer: "创始人兼首席工程师",
	formerGoogleEngineerWith10: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
	marcusWeber: "Marcus Weber",
	performanceEngineer: "性能工程师",
	specializesInJavascriptPerformanceOptimization: "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
	aishaPatel: "Aisha Patel",
	developerAdvocate: "开发者倡导者",
	passionateAboutDeveloperExperienceAnd: "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
	tomasRodriguez: "Tomás Rodríguez",
	fullStackDeveloper: "全栈开发人员",
	maintainsTheBenchmarkingInfrastructureAnd: "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
	yukiTanaka: "Yuki Tanaka",
	dataAnalyst: "数据分析师",
	ensuresStatisticalRigorInAll: "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	elenaKowalski: "Elena Kowalski",
	communityManager: "社区经理",
	managesCommunityContributionsPartnershipsAnd: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
}, A = "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。", j = {
	route: e,
	header: t,
	footer: n,
	themeToggle: r,
	hero: i,
	whyItMatters: a,
	understandingImpact: o,
	resultsTable: s,
	aboutHeader: c,
	aboutGrid: l,
	whatWeMeasure: u,
	blogHeader: d,
	blogList: f,
	careersHeader: p,
	careersBenefits: m,
	openPositions: h,
	contactHeader: g,
	contactForm: _,
	"faq-header1": {
		frequentlyAskedQuestions: "常见问题",
		everythingYouNeedToKnow: "关于 i18n 基准测试项目，你需要知道的一切。"
	},
	faqList: v,
	pricingHeader: y,
	pricingTiers: b,
	productsHeader: x,
	productsGrid: S,
	settingsHeader: C,
	profileSection: w,
	preferencesSection: T,
	apiAccessSection: E,
	settingsFooter: D,
	teamHeader: O,
	teamGrid: k,
	mockBanner: A
};
//#endregion
export { l as aboutGrid, c as aboutHeader, E as apiAccessSection, d as blogHeader, f as blogList, m as careersBenefits, p as careersHeader, _ as contactForm, g as contactHeader, j as default, v as faqList, n as footer, t as header, i as hero, A as mockBanner, h as openPositions, T as preferencesSection, y as pricingHeader, b as pricingTiers, S as productsGrid, x as productsHeader, w as profileSection, s as resultsTable, e as route, D as settingsFooter, C as settingsHeader, k as teamGrid, O as teamHeader, r as themeToggle, o as understandingImpact, u as whatWeMeasure, a as whyItMatters };

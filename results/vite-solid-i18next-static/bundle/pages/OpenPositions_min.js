import { createComponent as e, insert as t, memo as n, template as r } from "solid-js/web";
import { For as i, createSignal as a } from "solid-js";
var o = (e) => typeof e == "string", s = () => {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}, c = (e) => e == null ? "" : String(e), l = (e, t, n) => {
	e.forEach((e) => {
		t[e] && (n[e] = t[e]);
	});
}, u = /###/g, d = (e) => e && e.includes("###") ? e.replace(u, ".") : e, f = (e) => !e || o(e), p = (e, t, n) => {
	let r = o(t) ? t.split(".") : t, i = 0;
	for (; i < r.length - 1;) {
		if (f(e)) return {};
		let t = d(r[i]);
		!e[t] && n && (e[t] = new n()), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i;
	}
	return f(e) ? {} : {
		obj: e,
		k: d(r[i])
	};
}, m = (e, t, n) => {
	let { obj: r, k: i } = p(e, t, Object);
	if (r !== void 0 || t.length === 1) {
		r[i] = n;
		return;
	}
	let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = p(e, o, Object);
	for (; s.obj === void 0 && o.length;) a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = p(e, o, Object), s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0);
	s.obj[`${s.k}.${a}`] = n;
}, h = (e, t, n, r) => {
	let { obj: i, k: a } = p(e, t, Object);
	i[a] = i[a] || [], i[a].push(n);
}, g = (e, t) => {
	let { obj: n, k: r } = p(e, t);
	if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, _ = (e, t, n) => {
	let r = g(e, n);
	return r === void 0 ? g(t, n) : r;
}, v = (e, t, n) => {
	for (let r in t) r !== "__proto__" && r !== "constructor" && (Object.prototype.hasOwnProperty.call(e, r) ? o(e[r]) || e[r] instanceof String || o(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : v(e[r], t[r], n) : e[r] = t[r]);
	return e;
}, y = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), b = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
}, x = (e) => o(e) ? e.replace(/[&<>"'\/]/g, (e) => b[e]) : e, S = class {
	constructor(e) {
		this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
	}
	getRegExp(e) {
		let t = this.regExpMap.get(e);
		if (t !== void 0) return t;
		let n = new RegExp(e);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
	}
}, C = [
	" ",
	",",
	"?",
	"!",
	";"
], w = new S(20), T = (e, t, n) => {
	t ||= "", n ||= "";
	let r = C.filter((e) => !t.includes(e) && !n.includes(e));
	if (r.length === 0) return !0;
	let i = w.getRegExp(`(${r.map((e) => e === "?" ? "\\?" : e).join("|")})`), a = !i.test(e);
	if (!a) {
		let t = e.indexOf(n);
		t > 0 && !i.test(e.substring(0, t)) && (a = !0);
	}
	return a;
}, E = (e, t, n = ".") => {
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
}, D = (e) => e?.replace(/_/g, "-"), O = {
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
}, k = new class e {
	constructor(e, t = {}) {
		this.init(e, t);
	}
	init(e, t = {}) {
		this.prefix = t.prefix || "i18next:", this.logger = e || O, this.options = t, this.debug = t.debug;
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
		return r && !this.debug ? null : (e = e.map((e) => o(e) ? e.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : e), o(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
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
}(), A = class {
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
}, j = class extends A {
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
		let i = r.keySeparator === void 0 ? this.options.keySeparator : r.keySeparator, a = r.ignoreJSONStructure === void 0 ? this.options.ignoreJSONStructure : r.ignoreJSONStructure, s;
		e.includes(".") ? s = e.split(".") : (s = [e, t], n && (Array.isArray(n) ? s.push(...n) : o(n) && i ? s.push(...n.split(i)) : s.push(n)));
		let c = g(this.data, s);
		return !c && !t && !n && e.includes(".") && (e = s[0], t = s[1], n = s.slice(2).join(".")), c || !a || !o(n) ? c : E(this.data?.[e]?.[t], n, i);
	}
	addResource(e, t, n, r, i = { silent: !1 }) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = [e, t];
		n && (o = o.concat(a ? n.split(a) : n)), e.includes(".") && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), m(this.data, o, r), i.silent || this.emit("added", e, t, n, r);
	}
	addResources(e, t, n, r = { silent: !1 }) {
		for (let r in n) (o(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], { silent: !0 });
		r.silent || this.emit("added", e, t, n);
	}
	addResourceBundle(e, t, n, r, i, a = {
		silent: !1,
		skipCopy: !1
	}) {
		let o = [e, t];
		e.includes(".") && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
		let s = g(this.data, o) || {};
		a.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? v(s, n, i) : s = {
			...s,
			...n
		}, m(this.data, o, s), a.silent || this.emit("added", e, t, n);
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
}, M = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e;
	},
	handle(e, t, n, r, i) {
		return e.forEach((e) => {
			t = this.processors[e]?.process(t, n, r, i) ?? t;
		}), t;
	}
}, N = Symbol("i18next/PATH_KEY");
function ee() {
	let e = [], t = Object.create(null), n;
	return t.get = (r, i) => (n?.revoke?.(), i === N ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function P(e, t) {
	let { [N]: n } = e(ee()), r = t?.keySeparator ?? ".", i = t?.nsSeparator ?? ":", a = t?.enableSelector === "strict";
	if (n.length > 1 && i) {
		let e = t?.ns, o = a ? Array.isArray(e) ? e : e ? [e] : null : Array.isArray(e) ? e : null;
		if (o && (a ? o : o.length > 1 ? o.slice(1) : []).includes(n[0])) return `${n[0]}${i}${n.slice(1).join(r)}`;
	}
	return n.join(r);
}
var F = (e) => !o(e) && typeof e != "boolean" && typeof e != "number", I = class e extends A {
	constructor(e, t = {}) {
		super(), l([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = k.create("translator"), this.checkedLoadedFor = {};
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e, t = { interpolation: {} }) {
		let n = { ...t };
		if (e == null) return !1;
		let r = this.resolve(e, n);
		if (r?.res === void 0) return !1;
		let i = F(r.res);
		return !(n.returnObjects === !1 && i);
	}
	extractFromKey(e, t) {
		let n = t.nsSeparator === void 0 ? this.options.nsSeparator : t.nsSeparator;
		n === void 0 && (n = ":");
		let r = t.keySeparator === void 0 ? this.options.keySeparator : t.keySeparator, i = t.ns || this.options.defaultNS || [], a = n && e.includes(n), s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !T(e, n, r);
		if (a && !s) {
			let t = e.match(this.interpolator.nestingRegexp);
			if (t && t.length > 0) return {
				key: e,
				namespaces: o(i) ? [i] : i
			};
			let a = e.split(n);
			(n !== r || n === r && this.options.ns.includes(a[0])) && (i = a.shift()), e = a.join(r);
		}
		return {
			key: e,
			namespaces: o(i) ? [i] : i
		};
	}
	translate(t, n, r) {
		let i = typeof n == "object" ? { ...n } : n;
		if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = { ...i }), i ||= {}, t == null) return "";
		typeof t == "function" && (t = P(t, {
			...this.options,
			...i
		})), Array.isArray(t) || (t = [String(t)]), t = t.map((e) => typeof e == "function" ? P(e, {
			...this.options,
			...i
		}) : String(e));
		let a = i.returnDetails === void 0 ? this.options.returnDetails : i.returnDetails, s = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, { key: c, namespaces: l } = this.extractFromKey(t[t.length - 1], i), u = l[l.length - 1], d = i.nsSeparator === void 0 ? this.options.nsSeparator : i.nsSeparator;
		d === void 0 && (d = ":");
		let f = i.lng || this.language, p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (f?.toLowerCase() === "cimode") return p ? a ? {
			res: `${u}${d}${c}`,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(i)
		} : `${u}${d}${c}` : a ? {
			res: c,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(i)
		} : c;
		let m = this.resolve(t, i), h = m?.res, g = m?.usedKey || c, _ = m?.exactUsedKey || c, v = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		], y = i.joinArrays === void 0 ? this.options.joinArrays : i.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, x = i.count !== void 0 && !o(i.count), S = e.hasDefaultValue(i), C = x ? this.pluralResolver.getSuffix(f, i.count, i) : "", w = i.ordinal && x ? this.pluralResolver.getSuffix(f, i.count, { ordinal: !1 }) : "", T = x && !i.ordinal && i.count === 0, E = T && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${C}`] || i[`defaultValue${w}`] || i.defaultValue, D = h;
		b && !h && S && (D = E);
		let O = F(D), k = Object.prototype.toString.apply(D);
		if (b && D && O && !v.includes(k) && !(o(y) && Array.isArray(D))) {
			if (!i.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, D, {
					...i,
					ns: l
				}) : `key '${c} (${this.language})' returned an object instead of string.`;
				return a ? (m.res = e, m.usedParams = this.getUsedParamsDetails(i), m) : e;
			}
			if (s) {
				let e = Array.isArray(D), t = e ? [] : {}, n = e ? _ : g;
				for (let e in D) if (Object.prototype.hasOwnProperty.call(D, e)) {
					let r = `${n}${s}${e}`;
					t[e] = S && !h ? this.translate(r, {
						...i,
						defaultValue: F(E) ? E[e] : void 0,
						joinArrays: !1,
						ns: l
					}) : this.translate(r, {
						...i,
						joinArrays: !1,
						ns: l
					}), t[e] === r && (t[e] = D[e]);
				}
				h = t;
			}
		} else if (b && o(y) && Array.isArray(h)) h = h.join(y), h &&= this.extendTranslation(h, t, i, r);
		else {
			let e = !1, n = !1;
			!this.isValidLookup(h) && S && (e = !0, h = E), this.isValidLookup(h) || (n = !0, h = c);
			let a = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && n ? void 0 : h, o = S && E !== h && this.options.updateMissing;
			if (n || e || o) {
				if (this.logger.log(o ? "updateKey" : "missingKey", f, u, x && !o ? `${c}${this.pluralResolver.getSuffix(f, i.count, i)}` : c, o ? E : h), s) {
					let e = this.resolve(c, {
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
					this.options.missingKeyHandler ? this.options.missingKeyHandler(e, u, t, r, o, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, u, t, r, o, i), this.emit("missingKey", e, u, t, h);
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && x ? e.forEach((e) => {
					let t = this.pluralResolver.getSuffixes(e, i);
					T && i[`defaultValue${this.options.pluralSeparator}zero`] && !t.includes(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach((t) => {
						n([e], c + t, i[`defaultValue${t}`] || E);
					});
				}) : n(e, c, E));
			}
			h = this.extendTranslation(h, t, i, m, r), n && h === c && this.options.appendNamespaceToMissingKey && (h = `${u}${d}${c}`), (n || e) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${d}${c}` : c, e ? h : void 0, i));
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
			let a = o(e) && (n?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : n.interpolation.skipOnVariables), s;
			if (a) {
				let t = e.match(this.interpolator.nestingRegexp);
				s = t && t.length;
			}
			let c = n.replace && !o(n.replace) ? n.replace : n;
			if (this.options.interpolation.defaultVariables && (c = {
				...this.options.interpolation.defaultVariables,
				...c
			}), e = this.interpolator.interpolate(e, c, n.lng || this.language || r.usedLng, n), a) {
				let t = e.match(this.interpolator.nestingRegexp), r = t && t.length;
				s < r && (n.nest = !1);
			}
			!n.lng && r && r.res && (n.lng = this.language || r.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, (...e) => i?.[0] === e[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null) : this.translate(...e, t), n)), n.interpolation && this.interpolator.reset();
		}
		let a = n.postProcess || this.options.postProcess, s = o(a) ? [a] : a;
		return e != null && s?.length && n.applyPostProcessor !== !1 && (e = M.handle(s, e, t, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...r,
				usedParams: this.getUsedParamsDetails(n)
			},
			...n
		} : n, this)), e;
	}
	resolve(e, t = {}) {
		let n, r, i, a, s;
		return o(e) && (e = [e]), Array.isArray(e) && (e = e.map((e) => typeof e == "function" ? P(e, {
			...this.options,
			...t
		}) : e)), e.forEach((e) => {
			if (this.isValidLookup(n)) return;
			let c = this.extractFromKey(e, t), l = c.key;
			r = l;
			let u = c.namespaces;
			this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
			let d = t.count !== void 0 && !o(t.count), f = d && !t.ordinal && t.count === 0, p = t.context !== void 0 && (o(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
			u.forEach((e) => {
				this.isValidLookup(n) || (s = e, !this.checkedLoadedFor[`${m[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(s) && (this.checkedLoadedFor[`${m[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((r) => {
					if (this.isValidLookup(n)) return;
					a = r;
					let o = [l];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(o, l, r, e, t);
					else {
						let e;
						d && (e = this.pluralResolver.getSuffix(r, t.count, t));
						let n = `${this.options.pluralSeparator}zero`, i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (d && (t.ordinal && e.startsWith(i) && o.push(l + e.replace(i, this.options.pluralSeparator)), o.push(l + e), f && o.push(l + n)), p) {
							let r = `${l}${this.options.contextSeparator || "_"}${t.context}`;
							o.push(r), d && (t.ordinal && e.startsWith(i) && o.push(r + e.replace(i, this.options.pluralSeparator)), o.push(r + e), f && o.push(r + n));
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
			usedNS: s
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
		], n = e.replace && !o(e.replace), r = n ? e.replace : e;
		if (n && e.count !== void 0 && (r = {
			...r,
			count: e.count
		}), this.options.interpolation.defaultVariables && (r = {
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
}, L = class {
	constructor(e) {
		this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = k.create("languageUtils"), this.resolveHierarchyCache = {};
	}
	clearCache() {
		this.resolveHierarchyCache = {};
	}
	getScriptPartFromCode(e) {
		if (e = D(e), !e || !e.includes("-")) return null;
		let t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (e = D(e), !e || !e.includes("-")) return e;
		let t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (o(e) && e.includes("-")) {
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
		if (typeof e == "function" && (e = e(t)), o(e) && (e = [e]), Array.isArray(e)) return e;
		if (!t) return e.default || [];
		let n = e[t];
		return n ||= e[this.getScriptPartFromCode(t)], n ||= e[this.formatLanguageCode(t)], n ||= e[this.getLanguagePartFromCode(t)], n ||= e.default, n || [];
	}
	toResolveHierarchy(e, t) {
		let n = this.options.fallbackLng, r = Array.isArray(n) ? n.join("|") : n;
		r !== this._cachedFallbackLng && (this.resolveHierarchyCache = {}, this._cachedFallbackLng = r);
		let i = t === void 0 || t === !1 || o(t), a = t === void 0 && typeof this.options.fallbackLng == "function", s = o(e) && i && !a, c = null;
		if (s) {
			let n;
			n = t === void 0 ? "undefined" : t === !1 ? "boolean:false" : `string:${t}`, c = `${e.length}:${e}|${n}`;
		}
		if (c !== null) {
			let e = this.resolveHierarchyCache[c];
			if (e !== void 0) return e.slice();
		}
		let l = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), u = [], d = (e) => {
			e && (this.isSupportedCode(e) ? u.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
		};
		return o(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && d(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && d(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && d(this.getLanguagePartFromCode(e))) : o(e) && d(this.formatLanguageCode(e)), l.forEach((e) => {
			u.includes(e) || d(this.formatLanguageCode(e));
		}), c === null ? u : (this.resolveHierarchyCache[c] = u, u.slice());
	}
}, R = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
}, z = {
	select: (e) => e === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
}, B = class {
	constructor(e, t = {}) {
		this.languageUtils = e, this.options = t, this.logger = k.create("pluralResolver"), this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(e, t = {}) {
		let n = D(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
			cleanedCode: n,
			type: r
		});
		if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
		let a;
		try {
			a = new Intl.PluralRules(n, { type: r });
		} catch {
			if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), z;
			if (!e.match(/-|_/)) return z;
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
		return n ||= this.getRule("dev", t), n ? n.resolvedOptions().pluralCategories.sort((e, t) => R[e] - R[t]).map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : [];
	}
	getSuffix(e, t, n = {}) {
		let r = this.getRule(e, n);
		return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
	}
}, V = (e, t, n, r = ".", i = !0) => {
	let a = _(e, t, n);
	return !a && i && o(n) && (a = E(e, n, r), a === void 0 && (a = E(t, n, r))), a;
}, H = (e) => e.replace(/\$/g, "$$$$"), U = class {
	constructor(e = {}) {
		this.logger = k.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((e) => e), this.init(e);
	}
	init(e = {}) {
		e.interpolation ||= { escapeValue: !0 };
		let { escape: t, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: a, suffix: o, suffixEscaped: s, formatSeparator: c, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: f, nestingSuffix: p, nestingSuffixEscaped: m, nestingOptionsSeparator: h, maxReplaces: g, alwaysFormat: _ } = e.interpolation;
		this.escape = t === void 0 ? x : t, this.escapeValue = n === void 0 || n, this.useRawValueToEscape = r !== void 0 && r, this.prefix = i ? y(i) : a || "{{", this.suffix = o ? y(o) : s || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : u ? y(u) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : l ? y(l) : "", this.nestingPrefix = d ? y(d) : f || y("$t("), this.nestingSuffix = p ? y(p) : m || y(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = _ !== void 0 && _, this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
		this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(e, t, n, r) {
		let i, a, s, l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (e) => {
			if (!e.includes(this.formatSeparator)) {
				let i = V(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(i, void 0, n, {
					...r,
					...t,
					interpolationkey: e
				}) : i;
			}
			let i = e.split(this.formatSeparator), a = i.shift().trim(), o = i.join(this.formatSeparator).trim();
			return this.format(V(t, l, a, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
				...r,
				...t,
				interpolationkey: a
			});
		};
		this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
		let d = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, f = r?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : r.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: (e) => e
		}, {
			regex: this.regexp,
			safeValue: (e) => this.escapeValue ? this.escape(e) : e
		}].forEach((t) => {
			for (s = 0; i = t.regex.exec(e);) {
				let n = i[1].trim();
				if (a = u(n), a === void 0) {
					if (typeof d == "function") {
						let t = d(e, i, r);
						a = o(t) ? t : "";
					} else if (r && Object.prototype.hasOwnProperty.call(r, n)) a = "";
					else if (f) {
						a = i[0];
						continue;
					} else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), a = "";
				} else !o(a) && !this.useRawValueToEscape && (a = c(a));
				let l = t.safeValue(a);
				if (e = e.replace(i[0], H(l)), f ? (t.regex.lastIndex += l.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, s++, s >= this.maxReplaces) break;
			}
		}), e;
	}
	nest(e, t, n = {}) {
		let r, i, a, s = (e, t) => {
			let n = this.nestingOptionsSeparator;
			if (!e.includes(n)) return e;
			let r = e.split(RegExp(`${y(n)}[ ]*{`)), i = `{${r[1]}`;
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
			let l = [];
			a = { ...n }, a = a.replace && !o(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
			let u = /{.*}/s.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
			if (u !== -1 && (l = r[1].slice(u).split(this.formatSeparator).map((e) => e.trim()).filter(Boolean), r[1] = r[1].slice(0, u)), i = t(s.call(this, r[1].trim(), a), a), i && r[0] === e && !o(i)) return i;
			o(i) || (i = c(i)), i ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), ""), l.length && (i = l.reduce((e, t) => this.format(e, t, n.lng, {
				...n,
				interpolationkey: r[1].trim()
			}), i.trim())), e = e.replace(r[0], H(c(i))), this.regexp.lastIndex = 0;
		}
		return e;
	}
}, W = (e) => {
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
}, G = (e) => {
	let t = {};
	return (n, r, i) => {
		let a = i;
		i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
			...a,
			[i.interpolationkey]: void 0
		});
		let o = r + JSON.stringify(a), s = t[o];
		return s || (s = e(D(r), i), t[o] = s), s(n);
	};
}, K = (e) => (t, n, r) => e(D(n), r)(t), te = class {
	constructor(e = {}) {
		this.logger = k.create("formatter"), this.options = e, this.init(e);
	}
	init(e, t = { interpolation: {} }) {
		this.formatSeparator = t.interpolation.formatSeparator || ",";
		let n = t.cacheInBuiltFormats ? G : K;
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
		this.formats[e.toLowerCase().trim()] = G(t);
	}
	format(e, t, n, r = {}) {
		if (!t || e == null) return e;
		let i = t.split(this.formatSeparator), a = [];
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			for (; t.indexOf("(") > -1 && !t.includes(")") && e + 1 < i.length;) t = `${t}${this.formatSeparator}${i[++e]}`;
			a.push(t);
		}
		return a.reduce((e, t) => {
			let { formatName: i, formatOptions: a } = W(t);
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
			}
			return this.logger.warn(`there was no format function for ${i}`), e;
		}, e);
	}
}, q = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, J = class extends A {
	constructor(e, t, n, r = {}) {
		super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = k.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
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
			h(n.loaded, [i], a), q(n, e), t && n.errors.push(t), n.pendingCount === 0 && !n.done && (Object.keys(n.loaded).forEach((e) => {
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
		o(e) && (e = this.languageUtils.toResolveHierarchy(e)), o(t) && (t = [t]);
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
		if (n != null && n !== "") {
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
			e && e[0] && this.store.addResource(e[0], t, n, r);
		}
	}
}, Y = () => ({
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
	enableSelector: !1,
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
		if (typeof e[1] == "object" && (t = e[1]), o(e[1]) && (t.defaultValue = e[1]), o(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
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
}), X = (e) => (o(e.ns) && (e.ns = [e.ns]), o(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), o(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), Z = () => {}, ne = (e) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
		typeof e[t] == "function" && (e[t] = e[t].bind(e));
	});
}, Q = class e extends A {
	constructor(e = {}, t) {
		if (super(), this.options = X(e), this.services = {}, this.logger = k, this.modules = { external: [] }, ne(this), t && !this.isInitialized && !e.isClone) {
			if (!this.options.initAsync) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init(e = {}, t) {
		this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (o(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
		let n = Y();
		this.options = {
			...n,
			...this.options,
			...X(e)
		}, this.options.interpolation = {
			...n.interpolation,
			...this.options.interpolation
		}, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler);
		let r = (e) => e ? typeof e == "function" ? new e() : e : null;
		if (!this.options.isClone) {
			this.modules.logger ? k.init(r(this.modules.logger), this.options) : k.init(null, this.options);
			let e;
			e = this.modules.formatter ? this.modules.formatter : te;
			let t = new L(this.options);
			this.store = new j(this.options.resources, this.options);
			let n = this.services;
			n.logger = k, n.resourceStore = this.store, n.languageUtils = t, n.pluralResolver = new B(t, { prepend: this.options.pluralSeparator }), e && (n.formatter = r(e), n.formatter.init && n.formatter.init(n, this.options), this.options.interpolation.format = n.formatter.format.bind(n.formatter)), n.interpolator = new U(this.options), n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, n.backendConnector = new J(r(this.modules.backend), n.resourceStore, n, this.options), n.backendConnector.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.languageDetector && (n.languageDetector = r(this.modules.languageDetector), n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)), this.modules.i18nFormat && (n.i18nFormat = r(this.modules.i18nFormat), n.i18nFormat.init && n.i18nFormat.init(this)), this.translator = new I(this.services, this.options), this.translator.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.external.forEach((e) => {
				e.init && e.init(this);
			});
		}
		if (this.format = this.options.interpolation.format, t ||= Z, this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
		let i = s(), a = () => {
			let e = (e, n) => {
				this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(n), t(e, n);
			};
			if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return e(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, e);
		};
		return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), i;
	}
	loadResources(e, t = Z) {
		let n = t, r = o(e) ? e : this.language;
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
		let r = s();
		return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e ||= this.languages, t ||= this.options.ns, n ||= Z, this.services.backendConnector.reload(e, t, (e) => {
			r.resolve(), n(e);
		}), r;
	}
	use(e) {
		if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && M.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
	}
	setResolvedLanguage(e) {
		if (e && this.languages && !["cimode", "dev"].includes(e)) {
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
		let n = s();
		this.emit("languageChanging", e);
		let r = (e) => {
			this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e);
		}, i = (i, a) => {
			a ? this.isLanguageChangingTo === e && (r(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e));
		}, a = (t) => {
			!e && !t && this.services.languageDetector && (t = []);
			let n = o(t) ? t : t && t[0], a = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(o(t) ? [t] : t);
			a && (this.language || r(a), this.translator.language || this.translator.changeLanguage(a), this.services.languageDetector?.cacheUserLanguage?.(a)), this.loadResources(a, (e) => {
				i(e, a);
			});
		};
		return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), n;
	}
	getFixedT(e, t, n, r) {
		let i = r?.scopeNs, a = (e, t, ...r) => {
			let o;
			o = typeof t == "object" ? { ...t } : this.options.overloadTranslationOptionHandler([e, t].concat(r)), o.lng = o.lng || a.lng, o.lngs = o.lngs || a.lngs;
			let s = o.ns !== void 0 && o.ns !== null;
			o.ns = o.ns || a.ns, o.keyPrefix !== "" && (o.keyPrefix = o.keyPrefix || n || a.keyPrefix);
			let c = {
				...this.options,
				...o
			};
			Array.isArray(i) && !s && (c.ns = i), typeof o.keyPrefix == "function" && (o.keyPrefix = P(o.keyPrefix, c));
			let l = this.options.keySeparator || ".", u;
			return o.keyPrefix && Array.isArray(e) ? u = e.map((e) => (typeof e == "function" && (e = P(e, c)), `${o.keyPrefix}${l}${e}`)) : (typeof e == "function" && (e = P(e, c)), u = o.keyPrefix ? `${o.keyPrefix}${l}${e}` : e), this.t(u, o);
		};
		return o(e) ? a.lng = e : a.lngs = e, a.ns = t, a.keyPrefix = n, a;
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
		let n = s();
		return this.options.ns ? (o(e) && (e = [e]), e.forEach((e) => {
			this.options.ns.includes(e) || this.options.ns.push(e);
		}), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	loadLanguages(e, t) {
		let n = s();
		o(e) && (e = [e]);
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
		let t = /* @__PURE__ */ "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb".split("."), n = this.services?.languageUtils || new L(Y());
		return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(n.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(t = {}, n) {
		let r = new e(t, n);
		return r.createInstance = e.createInstance, r;
	}
	cloneInstance(t = {}, n = Z) {
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
		}), a.services = { ...this.services }, a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, r && (a.store = new j(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t] }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r] }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), t.interpolation) {
			let e = {
				...Y().interpolation,
				...this.options.interpolation,
				...t.interpolation
			}, n = {
				...i,
				interpolation: e
			};
			a.services.interpolator = new U(n);
		}
		return a.translator = new I(a.services, i), a.translator.on("*", (e, ...t) => {
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
Q.createInstance, Q.dir, Q.init, Q.loadResources, Q.reloadResources, Q.use, Q.changeLanguage, Q.getFixedT, Q.t, Q.exists, Q.setDefaultNamespace, Q.hasLoadedNamespace, Q.loadNamespaces, Q.loadLanguages;
var re = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Go to GitHub"
	},
	header: {
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
		settings: "Settings"
	},
	footer: {
		title: "i18n Benchmark",
		description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		resources: "Resources",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		contact: "Contact",
		builtWith: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
	},
	themeToggle: {
		auto: "Theme: Auto",
		dark: "Theme: Dark",
		light: "Theme: Light",
		labelAuto: "Theme mode: auto (system). Click to switch to light mode.",
		labelOther: "Theme mode: {mode}. Click to switch mode."
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			viewResults: "View Results",
			methodology: "Methodology"
		},
		whyItMatters: {
			title: "Why These Metrics Matter",
			bundleSizeTitle: "Bundle Size",
			bundleSizeDesc: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			renderingTitle: "Rendering & Hydration",
			renderingDesc: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			dynamicLoadingTitle: "Dynamic Loading",
			dynamicLoadingDesc: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		},
		understandingImpact: {
			title: "Understanding the Impact",
			singleJsonTitle: "Why a single large JSON can hurt performance",
			singleJsonIntro: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			singleJsonBullet1: "The JSON must be parsed on every page load — blocking the main thread.",
			singleJsonBullet2: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			singleJsonBullet3: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			tradeOffsTitle: "The trade-offs of dynamic loading",
			tradeOffsIntro: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			waterfallLabel: "Waterfall requests:",
			waterfallDesc: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
			foucLabel: "Flash of untranslated content (FOUC):",
			foucDesc: "users may briefly see translation keys or a fallback language before the chunk arrives.",
			cacheLabel: "Cache invalidation:",
			cacheDesc: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
			measuresTitle: "What this benchmark measures",
			measuresDesc: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		resultsTable: {
			title: "Sample Results",
			library: "Library",
			bundleSize: "Bundle Size",
			lookupTime: "Lookup Time",
			lazyLoading: "Lazy Loading",
			yes: "Yes",
			manual: "Manual",
			builtIn: "Built-in"
		}
	},
	about: {
		header: {
			title: "About This Benchmark",
			description: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
		},
		grid: {
			whyExistsTitle: "Why This Exists",
			whyExistsDesc: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			methodologyTitle: "Methodology",
			methodologyDesc: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		},
		whatWeMeasure: {
			title: "What We Measure",
			bundleSizeImpact: "Bundle size impact",
			bundleSizeImpactDesc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
			renderingOverhead: "Rendering overhead",
			renderingOverheadDesc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
			hydrationCost: "Hydration cost",
			hydrationCostDesc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			lazyLoading: "Lazy loading effectiveness",
			lazyLoadingDesc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			localeSwitch: "Locale switch speed",
			localeSwitchDesc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Insights, tutorials, and analysis from the i18n community."
		},
		list: {
			readMore: "Read More →",
			post1Title: "Comparing i18n Libraries in 2026: A Deep Dive",
			post1Date: "March 15, 2026",
			post1Excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			post1Category: "Benchmark",
			post2Title: "How to Reduce Your i18n Bundle by 60%",
			post2Date: "March 8, 2026",
			post2Excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			post2Category: "Tutorial",
			post3Title: "The State of Internationalization in React",
			post3Date: "February 28, 2026",
			post3Excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			post3Category: "Analysis",
			post4Title: "Migrating from react-i18next to Lingui",
			post4Date: "February 15, 2026",
			post4Excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components and i18n: What Changes?",
			post5Date: "February 1, 2026",
			post5Excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			post5Category: "Analysis",
			post6Title: "Benchmark Methodology: How We Test",
			post6Date: "January 20, 2026",
			post6Excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Careers",
			description: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		},
		benefits: {
			remoteLabel: "Remote-first",
			remoteValue: "Work from anywhere in the world",
			payLabel: "Competitive pay",
			payValue: "Top-of-market compensation",
			ossLabel: "Open source time",
			ossValue: "20% time for OSS contributions"
		},
		openPositions: {
			title: "Open Positions",
			applyNow: "Apply Now",
			remote: "Remote",
			fullTime: "Full-time",
			partTime: "Part-time",
			engineering: "Engineering",
			documentation: "Documentation",
			community: "Community",
			sfRemote: "San Francisco / Remote",
			frontendTitle: "Senior Frontend Engineer",
			frontendDesc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			backendTitle: "Backend Engineer",
			backendDesc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
			writerTitle: "Technical Writer",
			writerDesc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
			devrelTitle: "DevRel Engineer",
			devrelDesc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
			qaTitle: "QA Engineer",
			qaDesc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
		}
	},
	contact: {
		header: {
			title: "Get in Touch",
			description: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
		},
		form: {
			name: "Name",
			yourName: "Your name",
			email: "Email",
			emailPlaceholder: "you@example.com",
			topic: "Topic",
			bugReport: "Bug Report",
			newBenchmarkIdea: "New Benchmark Idea",
			methodologyQuestion: "Methodology Question",
			contribution: "Contribution",
			other: "Other",
			message: "Message",
			messagePlaceholder: "Describe your question or idea...",
			sendMessage: "Send Message"
		}
	},
	faq: {
		header: {
			title: "Frequently Asked Questions",
			description: "Everything you need to know about i18n Benchmark."
		},
		list: {
			q1: "What is i18n Benchmark?",
			a1: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
			q2: "How are benchmarks conducted?",
			a2: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
			q3: "Which libraries are currently supported?",
			a3: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
			q4: "Can I submit my own benchmarks?",
			a4: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
			q5: "How often are benchmarks updated?",
			a5: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
			q6: "Is the data reliable?",
			a6: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
			q7: "Do you offer consulting services?",
			a7: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
			q8: "How can I contribute?",
			a8: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
		}
	},
	pricing: {
		header: {
			title: "Simple, Transparent Pricing",
			description: "Choose the plan that fits your team. No hidden fees."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "$0",
			starterPeriod: "forever",
			starterFeature1: "5 benchmark runs/day",
			starterFeature2: "3 libraries",
			starterFeature3: "Community support",
			starterFeature4: "Public results",
			proName: "Pro",
			proPrice: "$29",
			proPeriod: "/month",
			proFeature1: "Unlimited runs",
			proFeature2: "All libraries",
			proFeature3: "Priority support",
			proFeature4: "Private results",
			proFeature5: "CI integration",
			proFeature6: "Historical data",
			enterpriseName: "Enterprise",
			enterprisePrice: "Custom",
			enterpriseFeature1: "Everything in Pro",
			enterpriseFeature2: "On-premise option",
			enterpriseFeature3: "SSO & SAML",
			enterpriseFeature4: "Dedicated account manager",
			enterpriseFeature5: "Custom SLAs",
			enterpriseFeature6: "Audit logs",
			enterpriseFeature7: "Training sessions",
			contactSales: "Contact Sales",
			getStarted: "Get Started"
		}
	},
	products: {
		header: {
			title: "Products",
			description: "Tools and services to streamline your internationalization workflow."
		},
		grid: {
			learnMore: "Learn More",
			cliName: "Benchmark CLI",
			cliDesc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			cliPrice: "Free",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			cloudPrice: "$29/mo",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			enterprisePrice: "Contact Us",
			migrationName: "Migration Assistant",
			migrationDesc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			migrationPrice: "$99 one-time",
			qaName: "Translation QA",
			qaDesc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			qaPrice: "$19/mo",
			optimizerName: "Bundle Optimizer",
			optimizerDesc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			optimizerPrice: "$49/mo"
		}
	},
	settings: {
		header: {
			title: "Settings",
			description: "Manage your account preferences and configuration."
		},
		profile: {
			title: "Profile",
			displayName: "Display Name",
			email: "Email"
		},
		preferences: {
			title: "Preferences",
			emailNotifications: "Email Notifications",
			weeklyReports: "Receive weekly benchmark reports",
			toggleNotifications: "Toggle notifications",
			darkMode: "Dark Mode",
			darkColorScheme: "Use dark color scheme",
			toggleDarkMode: "Toggle dark mode",
			defaultLanguage: "Default Language",
			english: "English (en)",
			french: "French (fr)",
			german: "German (de)",
			spanish: "Spanish (es)",
			japanese: "Japanese (ja)",
			chinese: "Chinese Simplified (zh-CN)",
			arabic: "Arabic (ar)"
		},
		apiAccess: {
			title: "API Access",
			apiKey: "API Key",
			copy: "Copy",
			description: "Use this key to access the benchmarking API programmatically."
		},
		footer: {
			cancel: "Cancel",
			saveChanges: "Save Changes"
		}
	},
	team: {
		header: {
			title: "Our Team",
			description: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Founder & Lead Engineer",
			member1Bio: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			member2Name: "Marcus Weber",
			member2Role: "Performance Engineer",
			member2Bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Full-Stack Developer",
			member4Bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Data Analyst",
			member5Bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Community Manager",
			member6Bio: "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	},
	notFound: {
		title: "404",
		description: "Oops! Page not found",
		returnHome: "Return to Home"
	}
}, ie = {
	shared: {
		appName: "Bench i18n",
		siteName: "Benchmark i18n",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Aller sur GitHub"
	},
	header: {
		home: "Accueil",
		methodology: "Méthodologie",
		mockPages: "Pages fictives",
		products: "Produits",
		pricing: "Tarifs",
		team: "Équipe",
		blog: "Blog",
		careers: "Carrières",
		faq: "FAQ",
		contact: "Contact",
		settings: "Paramètres"
	},
	footer: {
		title: "Benchmark i18n",
		description: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
		resources: "Ressources",
		github: "GitHub",
		methodology: "Méthodologie",
		contributing: "Contribuer",
		contact: "Contact",
		builtWith: "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client."
	},
	themeToggle: {
		auto: "Thème : automatique",
		dark: "Thème : sombre",
		light: "Thème : clair",
		labelAuto: "Mode thème : automatique (système). Cliquez pour passer en mode clair.",
		labelOther: "Mode thème : {mode}. Cliquez pour changer de mode."
	},
	mockBanner: "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.",
	home: {
		hero: {
			title: "Benchmark i18n",
			description: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
			viewResults: "Voir les résultats",
			methodology: "Méthodologie"
		},
		whyItMatters: {
			title: "Pourquoi ces métriques comptent",
			bundleSizeTitle: "Taille du bundle",
			bundleSizeDesc: "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.",
			renderingTitle: "Rendu et hydratation",
			renderingDesc: "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).",
			dynamicLoadingTitle: "Chargement dynamique",
			dynamicLoadingDesc: "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches."
		},
		understandingImpact: {
			title: "Comprendre l'impact",
			singleJsonTitle: "Pourquoi un unique gros JSON peut nuire aux performances",
			singleJsonIntro: "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :",
			singleJsonBullet1: "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.",
			singleJsonBullet2: "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.",
			singleJsonBullet3: "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.",
			tradeOffsTitle: "Les compromis du chargement dynamique",
			tradeOffsIntro: "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :",
			waterfallLabel: "Requêtes en cascade :",
			waterfallDesc: "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.",
			foucLabel: "Flash de contenu non traduit (FOUC) :",
			foucDesc: "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.",
			cacheLabel: "Invalidation du cache :",
			cacheDesc: "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.",
			measuresTitle: "Ce que mesure ce benchmark",
			measuresDesc: "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables."
		},
		resultsTable: {
			title: "Exemple de résultats",
			library: "Bibliothèque",
			bundleSize: "Taille du bundle",
			lookupTime: "Temps de recherche",
			lazyLoading: "Chargement paresseux",
			yes: "Oui",
			manual: "Manuel",
			builtIn: "Intégré"
		}
	},
	about: {
		header: {
			title: "À propos de ce benchmark",
			description: "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions."
		},
		grid: {
			whyExistsTitle: "Pourquoi ce projet existe",
			whyExistsDesc: "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.",
			methodologyTitle: "Méthodologie",
			methodologyDesc: "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles."
		},
		whatWeMeasure: {
			title: "Ce que nous mesurons",
			bundleSizeImpact: "Impact sur la taille du bundle",
			bundleSizeImpactDesc: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.",
			renderingOverhead: "Surcharge de rendu",
			renderingOverheadDesc: "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.",
			hydrationCost: "Coût d'hydratation",
			hydrationCostDesc: "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.",
			lazyLoading: "Efficacité du chargement paresseux",
			lazyLoadingDesc: "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?",
			localeSwitch: "Vitesse de changement de langue",
			localeSwitchDesc: "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Articles, tutoriels et analyses de la communauté i18n."
		},
		list: {
			readMore: "Lire la suite →",
			post1Title: "Comparer les bibliothèques i18n en 2026 : plongée détaillée",
			post1Date: "15 mars 2026",
			post1Excerpt: "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.",
			post1Category: "Benchmark",
			post2Title: "Réduire votre bundle i18n de 60 %",
			post2Date: "8 mars 2026",
			post2Excerpt: "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.",
			post2Category: "Tutoriel",
			post3Title: "État de l'internationalisation dans l'écosystème React",
			post3Date: "28 février 2026",
			post3Excerpt: "Panorama des tendances, patterns émergents et préférences de la communauté.",
			post3Category: "Analyse",
			post4Title: "Migrer de react-i18next vers Lingui",
			post4Date: "15 février 2026",
			post4Excerpt: "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.",
			post4Category: "Tutoriel",
			post5Title: "Server Components et i18n : qu'est-ce qui change ?",
			post5Date: "1er février 2026",
			post5Excerpt: "Les React Server Components introduisent de nouveaux motifs pour l'i18n.",
			post5Category: "Analyse",
			post6Title: "Méthodologie de benchmark : comment nous testons",
			post6Date: "20 janvier 2026",
			post6Excerpt: "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.",
			post6Category: "Méta"
		}
	},
	careers: {
		header: {
			title: "Carrières",
			description: "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu."
		},
		benefits: {
			remoteLabel: "Remote-first",
			remoteValue: "Travaillez depuis n'importe où",
			payLabel: "Rémunération compétitive",
			payValue: "Fourchettes haut de marché",
			ossLabel: "Temps open source",
			ossValue: "20 % du temps pour contribuer à l'OSS"
		},
		openPositions: {
			title: "Postes ouverts",
			applyNow: "Postuler",
			remote: "À distance",
			fullTime: "Temps plein",
			partTime: "Temps partiel",
			engineering: "Ingénierie",
			documentation: "Documentation",
			community: "Communauté",
			sfRemote: "San Francisco / télétravail",
			frontendTitle: "Ingénieur front-end senior",
			frontendDesc: "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.",
			backendTitle: "Ingénieur back-end",
			backendDesc: "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.",
			writerTitle: "Rédacteur·rice technique",
			writerDesc: "Guides, références d'API et tutoriels pour la plateforme de benchmark.",
			devrelTitle: "Ingénieur DevRel",
			devrelDesc: "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.",
			qaTitle: "Ingénieur QA",
			qaDesc: "Garantir la fiabilité des résultats par des tests et validations rigoureux."
		}
	},
	contact: {
		header: {
			title: "Contact",
			description: "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à"
		},
		form: {
			name: "Nom",
			yourName: "Votre nom",
			email: "E-mail",
			emailPlaceholder: "vous@exemple.com",
			topic: "Sujet",
			bugReport: "Rapport de bug",
			newBenchmarkIdea: "Idée de benchmark",
			methodologyQuestion: "Question de méthodologie",
			contribution: "Contribution",
			other: "Autre",
			message: "Message",
			messagePlaceholder: "Décrivez votre question ou idée…",
			sendMessage: "Envoyer"
		}
	},
	faq: {
		header: {
			title: "Questions fréquentes",
			description: "Tout savoir sur i18n Benchmark."
		},
		list: {
			q1: "Qu'est-ce qu'i18n Benchmark ?",
			a1: "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.",
			q2: "Comment sont menés les benchmarks ?",
			a2: "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.",
			q3: "Quelles bibliothèques sont prises en charge ?",
			a3: "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.",
			q4: "Puis-je proposer des benchmarks ?",
			a4: "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.",
			q5: "À quelle fréquence sont-ils mis à jour ?",
			a5: "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.",
			q6: "Les données sont-elles fiables ?",
			a6: "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.",
			q7: "Proposez-vous du conseil ?",
			a7: "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.",
			q8: "Comment contribuer ?",
			a8: "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub."
		}
	},
	pricing: {
		header: {
			title: "Tarification simple et transparente",
			description: "Choisissez l'offre adaptée à votre équipe. Sans frais cachés."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 €",
			starterPeriod: "pour toujours",
			starterFeature1: "5 exécutions de benchmark / jour",
			starterFeature2: "3 bibliothèques",
			starterFeature3: "Support communautaire",
			starterFeature4: "Résultats publics",
			proName: "Pro",
			proPrice: "29 €",
			proPeriod: "/ mois",
			proFeature1: "Exécutions illimitées",
			proFeature2: "Toutes les bibliothèques",
			proFeature3: "Support prioritaire",
			proFeature4: "Résultats privés",
			proFeature5: "Intégration CI",
			proFeature6: "Historique",
			enterpriseName: "Enterprise",
			enterprisePrice: "Sur mesure",
			enterpriseFeature1: "Tout le Pro",
			enterpriseFeature2: "Option on-premise",
			enterpriseFeature3: "SSO et SAML",
			enterpriseFeature4: "Account manager dédié",
			enterpriseFeature5: "SLA sur mesure",
			enterpriseFeature6: "Journaux d'audit",
			enterpriseFeature7: "Sessions de formation",
			contactSales: "Contacter les ventes",
			getStarted: "Commencer"
		}
	},
	products: {
		header: {
			title: "Produits",
			description: "Outils et services pour fluidifier votre flux i18n."
		},
		grid: {
			learnMore: "En savoir plus",
			cliName: "Benchmark CLI",
			cliDesc: "Lancez des benchmarks en local. Configurations personnalisées et CI.",
			cliPrice: "Gratuit",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.",
			cloudPrice: "29 €/mois",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "On-premise avec SSO, journaux d'audit, SLA et support dédié.",
			enterprisePrice: "Nous contacter",
			migrationName: "Assistant de migration",
			migrationDesc: "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.",
			migrationPrice: "99 € (unique)",
			qaName: "QA des traductions",
			qaDesc: "Contrôles automatiques : clés manquantes, pluriels, contexte.",
			qaPrice: "19 €/mois",
			optimizerName: "Optimiseur de bundle",
			optimizerDesc: "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).",
			optimizerPrice: "49 €/mois"
		}
	},
	settings: {
		header: {
			title: "Paramètres",
			description: "Gérez les préférences et la configuration de votre compte."
		},
		profile: {
			title: "Profil",
			displayName: "Nom affiché",
			email: "E-mail"
		},
		preferences: {
			title: "Préférences",
			emailNotifications: "Notifications e-mail",
			weeklyReports: "Recevoir les rapports hebdomadaires",
			toggleNotifications: "Activer/désactiver les notifications",
			darkMode: "Mode sombre",
			darkColorScheme: "Utiliser le thème sombre",
			toggleDarkMode: "Basculer le mode sombre",
			defaultLanguage: "Langue par défaut",
			english: "Anglais (en)",
			french: "Français (fr)",
			german: "Allemand (de)",
			spanish: "Espagnol (es)",
			japanese: "Japonais (ja)",
			chinese: "Chinois simplifié (zh-CN)",
			arabic: "Arabe (ar)"
		},
		apiAccess: {
			title: "Accès API",
			apiKey: "Clé API",
			copy: "Copier",
			description: "Utilisez cette clé pour appeler l'API de benchmark par programmation."
		},
		footer: {
			cancel: "Annuler",
			saveChanges: "Enregistrer"
		}
	},
	team: {
		header: {
			title: "Notre équipe",
			description: "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Fondatrice & lead ingénieur",
			member1Bio: "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.",
			member2Name: "Marcus Weber",
			member2Role: "Ingénieur performance",
			member2Bio: "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer advocate",
			member3Bio: "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Développeur full-stack",
			member4Bio: "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Analyste de données",
			member5Bio: "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).",
			member6Name: "Elena Kowalski",
			member6Role: "Community manager",
			member6Bio: "Contributions communautaires, partenariats et événements — gouvernance open source."
		}
	},
	notFound: {
		title: "404",
		description: "Oups ! Page introuvable",
		returnHome: "Retour à l'accueil"
	}
}, ae = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Ir a GitHub"
	},
	header: {
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
		settings: "Ajustes"
	},
	footer: {
		title: "i18n Benchmark",
		description: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
		resources: "Recursos",
		github: "GitHub",
		methodology: "Metodología",
		contributing: "Contribuir",
		contact: "Contacto",
		builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente."
	},
	themeToggle: {
		auto: "Tema: Auto",
		dark: "Tema: Oscuro",
		light: "Tema: Claro",
		labelAuto: "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.",
		labelOther: "Modo de tema: {mode}. Haz clic para cambiar de modo."
	},
	mockBanner: "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
			viewResults: "Ver resultados",
			methodology: "Metodología"
		},
		whyItMatters: {
			title: "Por qué son importantes estas métricas",
			bundleSizeTitle: "Tamaño del bundle",
			bundleSizeDesc: "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.",
			renderingTitle: "Renderizado e hidratación",
			renderingDesc: "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).",
			dynamicLoadingTitle: "Carga dinámica",
			dynamicLoadingDesc: "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
		},
		understandingImpact: {
			title: "Entendiendo el impacto",
			singleJsonTitle: "Por qué un solo JSON grande puede perjudicar el rendimiento",
			singleJsonIntro: "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
			singleJsonBullet1: "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.",
			singleJsonBullet2: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.",
			singleJsonBullet3: "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
			tradeOffsTitle: "Las compensaciones de la carga dinámica",
			tradeOffsIntro: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:",
			waterfallLabel: "Solicitudes en cascada:",
			waterfallDesc: "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.",
			foucLabel: "Parpadeo de contenido no traducido (FOUC):",
			foucDesc: "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.",
			cacheLabel: "Invalidación de la caché:",
			cacheDesc: "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.",
			measuresTitle: "Qué mide este benchmark",
			measuresDesc: "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
		},
		resultsTable: {
			title: "Resultados de muestra",
			library: "Biblioteca",
			bundleSize: "Tamaño del bundle",
			lookupTime: "Tiempo de búsqueda",
			lazyLoading: "Carga diferida",
			yes: "Sí",
			manual: "Manual",
			builtIn: "Integrado"
		}
	},
	about: {
		header: {
			title: "Acerca de este benchmark",
			description: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
		},
		grid: {
			whyExistsTitle: "Por qué existe esto",
			whyExistsDesc: "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.",
			methodologyTitle: "Metodología",
			methodologyDesc: "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles."
		},
		whatWeMeasure: {
			title: "Qué medimos",
			bundleSizeImpact: "Impacto en el tamaño del bundle",
			bundleSizeImpactDesc: "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
			renderingOverhead: "Sobrecarga de renderizado",
			renderingOverheadDesc: "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.",
			hydrationCost: "Coste de hidratación",
			hydrationCostDesc: "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
			lazyLoading: "Eficacia de la carga diferida",
			lazyLoadingDesc: "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
			localeSwitch: "Velocidad de cambio de idioma",
			localeSwitchDesc: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Información, tutoriales y análisis de la comunidad i18n."
		},
		list: {
			readMore: "Leer más →",
			post1Title: "Comparativa de bibliotecas i18n en 2026: Un análisis profundo",
			post1Date: "15 de marzo de 2026",
			post1Excerpt: "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.",
			post1Category: "Benchmark",
			post2Title: "Cómo reducir tu bundle i18n en un 60%",
			post2Date: "8 de marzo de 2026",
			post2Excerpt: "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.",
			post2Category: "Tutorial",
			post3Title: "El estado de la internacionalización en React",
			post3Date: "28 de febrero de 2026",
			post3Excerpt: "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.",
			post3Category: "Análisis",
			post4Title: "Migración de react-i18next a Lingui",
			post4Date: "15 de febrero de 2026",
			post4Excerpt: "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components e i18n: ¿Qué cambia?",
			post5Date: "1 de febrero de 2026",
			post5Excerpt: "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
			post5Category: "Análisis",
			post6Title: "Metodología de benchmark: Cómo probamos",
			post6Date: "20 de enero de 2026",
			post6Excerpt: "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Carreras",
			description: "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo."
		},
		benefits: {
			remoteLabel: "Remoto primero",
			remoteValue: "Trabaja desde cualquier lugar del mundo",
			payLabel: "Salario competitivo",
			payValue: "Compensación superior a la del mercado",
			ossLabel: "Tiempo para el código abierto",
			ossValue: "20% del tiempo para contribuciones a OSS"
		},
		openPositions: {
			title: "Puestos vacantes",
			applyNow: "Postular ahora",
			remote: "Remoto",
			fullTime: "Tiempo completo",
			partTime: "Tiempo parcial",
			engineering: "Ingeniería",
			documentation: "Documentación",
			community: "Comunidad",
			sfRemote: "San Francisco / Remoto",
			frontendTitle: "Ingeniero Frontend Senior",
			frontendDesc: "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.",
			backendTitle: "Ingeniero Backend",
			backendDesc: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.",
			writerTitle: "Redactor técnico",
			writerDesc: "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
			devrelTitle: "Ingeniero de DevRel",
			devrelDesc: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.",
			qaTitle: "Ingeniero de QA",
			qaDesc: "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas."
		}
	},
	contact: {
		header: {
			title: "Ponte en contacto",
			description: "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en"
		},
		form: {
			name: "Nombre",
			yourName: "Tu nombre",
			email: "Correo electrónico",
			emailPlaceholder: "tu@ejemplo.com",
			topic: "Tema",
			bugReport: "Informe de error",
			newBenchmarkIdea: "Nueva idea de benchmark",
			methodologyQuestion: "Pregunta sobre la metodología",
			contribution: "Contribución",
			other: "Otro",
			message: "Mensaje",
			messagePlaceholder: "Describe tu pregunta o idea...",
			sendMessage: "Enviar mensaje"
		}
	},
	faq: {
		header: {
			title: "Preguntas frecuentes",
			description: "Todo lo que necesitas saber sobre i18n Benchmark."
		},
		list: {
			q1: "¿Qué es i18n Benchmark?",
			a1: "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.",
			q2: "¿Cómo se realizan los benchmarks?",
			a2: "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.",
			q3: "¿Qué bibliotecas se admiten actualmente?",
			a3: "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.",
			q4: "¿Puedo enviar mis propios benchmarks?",
			a4: "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.",
			q5: "¿Con qué frecuencia se actualizan los benchmarks?",
			a5: "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.",
			q6: "¿Son fiables los datos?",
			a6: "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.",
			q7: "¿Ofrecen servicios de consultoría?",
			a7: "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.",
			q8: "¿Cómo puedo contribuir?",
			a8: "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles."
		}
	},
	pricing: {
		header: {
			title: "Precios sencillos y transparentes",
			description: "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 $",
			starterPeriod: "para siempre",
			starterFeature1: "5 ejecuciones de benchmark al día",
			starterFeature2: "3 bibliotecas",
			starterFeature3: "Soporte de la comunidad",
			starterFeature4: "Resultados públicos",
			proName: "Pro",
			proPrice: "29 $",
			proPeriod: "/mes",
			proFeature1: "Ejecuciones ilimitadas",
			proFeature2: "Todas las bibliotecas",
			proFeature3: "Soporte prioritario",
			proFeature4: "Resultados privados",
			proFeature5: "Integración CI",
			proFeature6: "Datos históricos",
			enterpriseName: "Enterprise",
			enterprisePrice: "Personalizado",
			enterpriseFeature1: "Todo lo que hay en Pro",
			enterpriseFeature2: "Opción on-premise",
			enterpriseFeature3: "SSO y SAML",
			enterpriseFeature4: "Gestor de cuentas dedicado",
			enterpriseFeature5: "SLAs personalizados",
			enterpriseFeature6: "Registros de auditoría",
			enterpriseFeature7: "Sesiones de formación",
			contactSales: "Contactar con ventas",
			getStarted: "Empezar"
		}
	},
	products: {
		header: {
			title: "Productos",
			description: "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización."
		},
		grid: {
			learnMore: "Más información",
			cliName: "CLI de Benchmark",
			cliDesc: "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.",
			cliPrice: "Gratis",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.",
			cloudPrice: "29 $/mes",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.",
			enterprisePrice: "Contáctanos",
			migrationName: "Asistente de migración",
			migrationDesc: "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.",
			migrationPrice: "99 $ pago único",
			qaName: "QA de traducción",
			qaDesc: "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
			qaPrice: "19 $/mes",
			optimizerName: "Optimizador de bundle",
			optimizerDesc: "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.",
			optimizerPrice: "49 $/mes"
		}
	},
	settings: {
		header: {
			title: "Ajustes",
			description: "Gestiona las preferencias y la configuración de tu cuenta."
		},
		profile: {
			title: "Perfil",
			displayName: "Nombre visible",
			email: "Correo electrónico"
		},
		preferences: {
			title: "Preferencias",
			emailNotifications: "Notificaciones por correo electrónico",
			weeklyReports: "Recibir informes semanales de benchmarks",
			toggleNotifications: "Cambiar notificaciones",
			darkMode: "Modo oscuro",
			darkColorScheme: "Usar esquema de colores oscuro",
			toggleDarkMode: "Cambiar modo oscuro",
			defaultLanguage: "Idioma predeterminado",
			english: "Inglés (en)",
			french: "Francés (fr)",
			german: "Alemán (de)",
			spanish: "Español (es)",
			japanese: "Japonés (ja)",
			chinese: "Chino simplificado (zh-CN)",
			arabic: "Árabe (ar)"
		},
		apiAccess: {
			title: "Acceso API",
			apiKey: "Llave API",
			copy: "Copiar",
			description: "Usa esta llave para acceder a la API de benchmarking de forma programática."
		},
		footer: {
			cancel: "Cancelar",
			saveChanges: "Guardar cambios"
		}
	},
	team: {
		header: {
			title: "Nuestro equipo",
			description: "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Fundadora e ingeniera principal",
			member1Bio: "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.",
			member2Name: "Marcus Weber",
			member2Role: "Ingeniero de rendimiento",
			member2Bio: "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Desarrollador Full-Stack",
			member4Bio: "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Analista de datos",
			member5Bio: "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Responsable de la comunidad",
			member6Bio: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
		}
	},
	notFound: {
		title: "404",
		description: "¡Ups! Página no encontrada",
		returnHome: "Volver al inicio"
	}
}, oe = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Zu GitHub"
	},
	header: {
		home: "Home",
		methodology: "Methodik",
		mockPages: "Testseiten",
		products: "Produkte",
		pricing: "Preise",
		team: "Team",
		blog: "Blog",
		careers: "Karriere",
		faq: "FAQ",
		contact: "Kontakt",
		settings: "Einstellungen"
	},
	footer: {
		title: "i18n Benchmark",
		description: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
		resources: "Ressourcen",
		github: "GitHub",
		methodology: "Methodik",
		contributing: "Beitragen",
		contact: "Kontakt",
		builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router."
	},
	themeToggle: {
		auto: "Thema: Auto",
		dark: "Thema: Dunkel",
		light: "Thema: Hell",
		labelAuto: "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.",
		labelOther: "Themenmodus: {mode}. Klicken Sie hier, um den Modus zu wechseln."
	},
	mockBanner: "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
			viewResults: "Ergebnisse anzeigen",
			methodology: "Methodik"
		},
		whyItMatters: {
			title: "Warum diese Metriken wichtig sind",
			bundleSizeTitle: "Bundle-Größe",
			bundleSizeDesc: "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.",
			renderingTitle: "Rendering & Hydrierung",
			renderingDesc: "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
			dynamicLoadingTitle: "Dynamisches Laden",
			dynamicLoadingDesc: "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich."
		},
		understandingImpact: {
			title: "Die Auswirkungen verstehen",
			singleJsonTitle: "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann",
			singleJsonIntro: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:",
			singleJsonBullet1: "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.",
			singleJsonBullet2: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
			singleJsonBullet3: "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.",
			tradeOffsTitle: "Die Kompromisse beim dynamischen Laden",
			tradeOffsIntro: "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
			waterfallLabel: "Waterfall-Anfragen:",
			waterfallDesc: "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.",
			foucLabel: "Flash of Untranslated Content (FOUC):",
			foucDesc: "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.",
			cacheLabel: "Cache-Invalidierung:",
			cacheDesc: "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.",
			measuresTitle: "Was dieser Benchmark misst",
			measuresDesc: "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind."
		},
		resultsTable: {
			title: "Beispielergebnisse",
			library: "Bibliothek",
			bundleSize: "Bundle-Größe",
			lookupTime: "Lookup-Zeit",
			lazyLoading: "Lazy Loading",
			yes: "Ja",
			manual: "Manuell",
			builtIn: "Integriert"
		}
	},
	about: {
		header: {
			title: "Über diesen Benchmark",
			description: "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
		},
		grid: {
			whyExistsTitle: "Warum dies existiert",
			whyExistsDesc: "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.",
			methodologyTitle: "Methodik",
			methodologyDesc: "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten."
		},
		whatWeMeasure: {
			title: "Was wir messen",
			bundleSizeImpact: "Auswirkungen auf die Bundle-Größe",
			bundleSizeImpactDesc: "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.",
			renderingOverhead: "Rendering-Overhead",
			renderingOverheadDesc: "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.",
			hydrationCost: "Hydrierungskosten",
			hydrationCostDesc: "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.",
			lazyLoading: "Effektivität von Lazy Loading",
			lazyLoadingDesc: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
			localeSwitch: "Geschwindigkeit des Sprachwechsels",
			localeSwitchDesc: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Einblicke, Tutorials und Analysen aus der i18n-Community."
		},
		list: {
			readMore: "Mehr lesen →",
			post1Title: "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick",
			post1Date: "15. März 2026",
			post1Excerpt: "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
			post1Category: "Benchmark",
			post2Title: "Wie Sie Ihr i18n-Bundle um 60 % reduzieren",
			post2Date: "8. März 2026",
			post2Excerpt: "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.",
			post2Category: "Tutorial",
			post3Title: "Der Stand der Internationalisierung in React",
			post3Date: "28. Februar 2026",
			post3Excerpt: "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.",
			post3Category: "Analyse",
			post4Title: "Migration von react-i18next zu Lingui",
			post4Date: "15. Februar 2026",
			post4Excerpt: "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components und i18n: Was ändert sich?",
			post5Date: "1. Februar 2026",
			post5Excerpt: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
			post5Category: "Analyse",
			post6Title: "Benchmark-Methodik: Wie wir testen",
			post6Date: "20. Januar 2026",
			post6Excerpt: "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Karriere",
			description: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt."
		},
		benefits: {
			remoteLabel: "Remote-First",
			remoteValue: "Arbeiten Sie von überall auf der Welt",
			payLabel: "Wettbewerbsfähige Bezahlung",
			payValue: "Überdurchschnittliche Vergütung",
			ossLabel: "Open-Source-Zeit",
			ossValue: "20 % der Zeit für OSS-Beiträge"
		},
		openPositions: {
			title: "Offene Stellen",
			applyNow: "Jetzt bewerben",
			remote: "Remote",
			fullTime: "Vollzeit",
			partTime: "Teilzeit",
			engineering: "Engineering",
			documentation: "Dokumentation",
			community: "Community",
			sfRemote: "San Francisco / Remote",
			frontendTitle: "Senior Frontend Engineer",
			frontendDesc: "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
			backendTitle: "Backend-Ingenieur",
			backendDesc: "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
			writerTitle: "Technischer Redakteur",
			writerDesc: "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
			devrelTitle: "DevRel-Ingenieur",
			devrelDesc: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
			qaTitle: "QA-Ingenieur",
			qaDesc: "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung."
		}
	},
	contact: {
		header: {
			title: "Kontakt aufnehmen",
			description: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
		},
		form: {
			name: "Name",
			yourName: "Ihr Name",
			email: "E-Mail",
			emailPlaceholder: "ihre@beispiel.de",
			topic: "Thema",
			bugReport: "Fehlerbericht",
			newBenchmarkIdea: "Neue Benchmark-Idee",
			methodologyQuestion: "Frage zur Methodik",
			contribution: "Beitrag",
			other: "Sonstiges",
			message: "Nachricht",
			messagePlaceholder: "Beschreiben Sie Ihre Frage oder Idee...",
			sendMessage: "Nachricht senden"
		}
	},
	faq: {
		header: {
			title: "Häufig gestellte Fragen",
			description: "Alles, was Sie über i18n Benchmark wissen müssen."
		},
		list: {
			q1: "Was ist i18n Benchmark?",
			a1: "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.",
			q2: "Wie werden Benchmarks durchgeführt?",
			a2: "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.",
			q3: "Welche Bibliotheken werden derzeit unterstützt?",
			a3: "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.",
			q4: "Kann ich meine eigenen Benchmarks einreichen?",
			a4: "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.",
			q5: "Wie oft werden Benchmarks aktualisiert?",
			a5: "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.",
			q6: "Sind die Daten zuverlässig?",
			a6: "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.",
			q7: "Bieten Sie Beratungsdienstleistungen an?",
			a7: "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.",
			q8: "Wie kann ich beitragen?",
			a8: "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
		}
	},
	pricing: {
		header: {
			title: "Einfache, transparente Preisgestaltung",
			description: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 $",
			starterPeriod: "für immer",
			starterFeature1: "5 Benchmark-Durchläufe/Tag",
			starterFeature2: "3 Bibliotheken",
			starterFeature3: "Community-Support",
			starterFeature4: "Öffentliche Ergebnisse",
			proName: "Pro",
			proPrice: "29 $",
			proPeriod: "/Monat",
			proFeature1: "Unbegrenzte Durchläufe",
			proFeature2: "Alle Bibliotheken",
			proFeature3: "Priorisierter Support",
			proFeature4: "Private Ergebnisse",
			proFeature5: "CI-Integration",
			proFeature6: "Historische Daten",
			enterpriseName: "Enterprise",
			enterprisePrice: "Individuell",
			enterpriseFeature1: "Alles in Pro enthalten",
			enterpriseFeature2: "On-Premise-Option",
			enterpriseFeature3: "SSO & SAML",
			enterpriseFeature4: "Dedizierter Account Manager",
			enterpriseFeature5: "Individuelle SLAs",
			enterpriseFeature6: "Audit-Protokolle",
			enterpriseFeature7: "Schulungssitzungen",
			contactSales: "Vertrieb kontaktieren",
			getStarted: "Erste Schritte"
		}
	},
	products: {
		header: {
			title: "Produkte",
			description: "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows."
		},
		grid: {
			learnMore: "Mehr erfahren",
			cliName: "Benchmark CLI",
			cliDesc: "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
			cliPrice: "Kostenlos",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.",
			cloudPrice: "29 $/Monat",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.",
			enterprisePrice: "Kontaktieren Sie uns",
			migrationName: "Migrationsassistent",
			migrationDesc: "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
			migrationPrice: "Einmalig 99 $",
			qaName: "Übersetzungs-QA",
			qaDesc: "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
			qaPrice: "19 $/Monat",
			optimizerName: "Bundle-Optimierer",
			optimizerDesc: "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
			optimizerPrice: "49 $/Monat"
		}
	},
	settings: {
		header: {
			title: "Einstellungen",
			description: "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration."
		},
		profile: {
			title: "Profil",
			displayName: "Anzeigename",
			email: "E-Mail"
		},
		preferences: {
			title: "Einstellungen",
			emailNotifications: "E-Mail-Benachrichtigungen",
			weeklyReports: "Wöchentliche Benchmark-Berichte erhalten",
			toggleNotifications: "Benachrichtigungen umschalten",
			darkMode: "Dunkelmodus",
			darkColorScheme: "Dunkles Farbschema verwenden",
			toggleDarkMode: "Dunkelmodus umschalten",
			defaultLanguage: "Standardsprache",
			english: "Englisch (en)",
			french: "Französisch (fr)",
			german: "Deutsch (de)",
			spanish: "Spanisch (es)",
			japanese: "Japanisch (ja)",
			chinese: "Chinesisch vereinfacht (zh-CN)",
			arabic: "Arabisch (ar)"
		},
		apiAccess: {
			title: "API-Zugriff",
			apiKey: "API-Schlüssel",
			copy: "Kopieren",
			description: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
		},
		footer: {
			cancel: "Abbrechen",
			saveChanges: "Änderungen speichern"
		}
	},
	team: {
		header: {
			title: "Unser Team",
			description: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Gründerin & Leitende Ingenieurin",
			member1Bio: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
			member2Name: "Marcus Weber",
			member2Role: "Performance-Ingenieur",
			member2Bio: "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Full-Stack-Entwickler",
			member4Bio: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Datenanalyst",
			member5Bio: "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Community Manager",
			member6Bio: "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance."
		}
	},
	notFound: {
		title: "404",
		description: "Hoppla! Seite nicht gefunden",
		returnHome: "Zurück zur Startseite"
	}
}, se = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Vai su GitHub"
	},
	header: {
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
		settings: "Impostazioni"
	},
	footer: {
		title: "i18n Benchmark",
		description: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
		resources: "Risorse",
		github: "GitHub",
		methodology: "Metodologia",
		contributing: "Contribuire",
		contact: "Contatti",
		builtWith: "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client."
	},
	themeToggle: {
		auto: "Tema: Auto",
		dark: "Tema: Scuro",
		light: "Tema: Chiaro",
		labelAuto: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
		labelOther: "Modalità tema: {mode}. Clicca per cambiare modalità."
	},
	mockBanner: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
			viewResults: "Visualizza i risultati",
			methodology: "Metodologia"
		},
		whyItMatters: {
			title: "Perché queste metriche sono importanti",
			bundleSizeTitle: "Dimensione del bundle",
			bundleSizeDesc: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
			renderingTitle: "Rendering e idratazione",
			renderingDesc: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
			dynamicLoadingTitle: "Caricamento dinamico",
			dynamicLoadingDesc: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
		},
		understandingImpact: {
			title: "Capire l'impatto",
			singleJsonTitle: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
			singleJsonIntro: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
			singleJsonBullet1: "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.",
			singleJsonBullet2: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
			singleJsonBullet3: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
			tradeOffsTitle: "I compromessi del caricamento dinamico",
			tradeOffsIntro: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
			waterfallLabel: "Richieste a cascata:",
			waterfallDesc: "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.",
			foucLabel: "Flash di contenuti non tradotti (FOUC):",
			foucDesc: "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.",
			cacheLabel: "Invalidazione della cache:",
			cacheDesc: "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.",
			measuresTitle: "Cosa misura questo benchmark",
			measuresDesc: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili."
		},
		resultsTable: {
			title: "Risultati di esempio",
			library: "Libreria",
			bundleSize: "Dimensione del bundle",
			lookupTime: "Tempo di ricerca",
			lazyLoading: "Caricamento lazy",
			yes: "Sì",
			manual: "Manuale",
			builtIn: "Integrato"
		}
	},
	about: {
		header: {
			title: "Informazioni su questo benchmark",
			description: "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
		},
		grid: {
			whyExistsTitle: "Perché esiste",
			whyExistsDesc: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
			methodologyTitle: "Metodologia",
			methodologyDesc: "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
		},
		whatWeMeasure: {
			title: "Cosa misuriamo",
			bundleSizeImpact: "Impatto sulla dimensione del bundle",
			bundleSizeImpactDesc: "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.",
			renderingOverhead: "Sovrapprezzo di rendering",
			renderingOverheadDesc: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
			hydrationCost: "Costo di idratazione",
			hydrationCostDesc: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.",
			lazyLoading: "Efficacia del caricamento pigro",
			lazyLoadingDesc: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
			localeSwitch: "Velocità di cambio lingua",
			localeSwitchDesc: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Approfondimenti, tutorial e analisi dalla comunità i18n."
		},
		list: {
			readMore: "Leggi di più →",
			post1Title: "Confronto delle librerie i18n nel 2026: un'analisi approfondita",
			post1Date: "15 marzo 2026",
			post1Excerpt: "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.",
			post1Category: "Benchmark",
			post2Title: "Come ridurre il bundle i18n del 60%",
			post2Date: "8 marzo 2026",
			post2Excerpt: "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.",
			post2Category: "Tutorial",
			post3Title: "Lo stato dell'internazionalizzazione in React",
			post3Date: "28 febbraio 2026",
			post3Excerpt: "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.",
			post3Category: "Analisi",
			post4Title: "Migrazione da react-i18next a Lingui",
			post4Date: "15 febbraio 2026",
			post4Excerpt: "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components e i18n: cosa cambia?",
			post5Date: "1 febbraio 2026",
			post5Excerpt: "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
			post5Category: "Analisi",
			post6Title: "Metodologia del benchmark: come testiamo",
			post6Date: "20 gennaio 2026",
			post6Excerpt: "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Carriere",
			description: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo."
		},
		benefits: {
			remoteLabel: "Remote-first",
			remoteValue: "Lavora da qualsiasi parte del mondo",
			payLabel: "Retribuzione competitiva",
			payValue: "Compensazione ai vertici del mercato",
			ossLabel: "Tempo per l'open source",
			ossValue: "20% del tempo per contributi open source"
		},
		openPositions: {
			title: "Posizioni aperte",
			applyNow: "Candidati ora",
			remote: "Remoto",
			fullTime: "Tempo pieno",
			partTime: "Part-time",
			engineering: "Engineering",
			documentation: "Documentazione",
			community: "Comunità",
			sfRemote: "San Francisco / Remoto",
			frontendTitle: "Ingegnere Frontend Senior",
			frontendDesc: "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
			backendTitle: "Backend Engineer",
			backendDesc: "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
			writerTitle: "Scrittore tecnico",
			writerDesc: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
			devrelTitle: "Ingegnere DevRel",
			devrelDesc: "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.",
			qaTitle: "Ingegnere QA",
			qaDesc: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi."
		}
	},
	contact: {
		header: {
			title: "Contattaci",
			description: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
		},
		form: {
			name: "Nome",
			yourName: "Il tuo nome",
			email: "Email",
			emailPlaceholder: "tu@esempio.com",
			topic: "Argomento",
			bugReport: "Segnalazione bug",
			newBenchmarkIdea: "Nuova idea di benchmark",
			methodologyQuestion: "Domanda sulla metodologia",
			contribution: "Contributo",
			other: "Altro",
			message: "Messaggio",
			messagePlaceholder: "Descrivi la tua domanda o idea...",
			sendMessage: "Invia messaggio"
		}
	},
	faq: {
		header: {
			title: "Domande frequenti",
			description: "Tutto quello che c'è da sapere su i18n Benchmark."
		},
		list: {
			q1: "Cos'è i18n Benchmark?",
			a1: "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.",
			q2: "Come vengono condotti i benchmark?",
			a2: "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.",
			q3: "Quali librerie sono attualmente supportate?",
			a3: "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
			q4: "Posso inviare i miei benchmark?",
			a4: "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.",
			q5: "Con quale frequenza vengono aggiornati i benchmark?",
			a5: "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.",
			q6: "I dati sono affidabili?",
			a6: "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.",
			q7: "Offrite servizi di consulenza?",
			a7: "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.",
			q8: "Come posso contribuire?",
			a8: "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli."
		}
	},
	pricing: {
		header: {
			title: "Prezzi semplici e trasparenti",
			description: "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 $",
			starterPeriod: "per sempre",
			starterFeature1: "5 esecuzioni benchmark al giorno",
			starterFeature2: "3 librerie",
			starterFeature3: "Supporto della comunità",
			starterFeature4: "Risultati pubblici",
			proName: "Pro",
			proPrice: "29 $",
			proPeriod: "/mese",
			proFeature1: "Esecuzioni illimitate",
			proFeature2: "Tutte le librerie",
			proFeature3: "Supporto prioritario",
			proFeature4: "Risultati privati",
			proFeature5: "Integrazione CI",
			proFeature6: "Dati storici",
			enterpriseName: "Enterprise",
			enterprisePrice: "Personalizzato",
			enterpriseFeature1: "Tutto quello che c'è in Pro",
			enterpriseFeature2: "Opzione on-premise",
			enterpriseFeature3: "SSO e SAML",
			enterpriseFeature4: "Account manager dedicato",
			enterpriseFeature5: "SLA personalizzati",
			enterpriseFeature6: "Log di controllo",
			enterpriseFeature7: "Sessioni di formazione",
			contactSales: "Contatta l'ufficio vendite",
			getStarted: "Inizia ora"
		}
	},
	products: {
		header: {
			title: "Prodotti",
			description: "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione."
		},
		grid: {
			learnMore: "Scopri di più",
			cliName: "CLI del Benchmark",
			cliDesc: "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
			cliPrice: "Gratis",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
			cloudPrice: "29 $/mese",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
			enterprisePrice: "Contattaci",
			migrationName: "Assistente alla migrazione",
			migrationDesc: "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.",
			migrationPrice: "99 $ una tantum",
			qaName: "QA delle traduzioni",
			qaDesc: "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
			qaPrice: "19 $/mese",
			optimizerName: "Ottimizzatore del bundle",
			optimizerDesc: "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
			optimizerPrice: "49 $/mese"
		}
	},
	settings: {
		header: {
			title: "Impostazioni",
			description: "Gestisci le preferenze del tuo account e la configurazione."
		},
		profile: {
			title: "Profilo",
			displayName: "Nome visualizzato",
			email: "Email"
		},
		preferences: {
			title: "Preferenze",
			emailNotifications: "Notifiche via email",
			weeklyReports: "Ricevi rapporti settimanali sui benchmark",
			toggleNotifications: "Attiva/disattiva notifiche",
			darkMode: "Modalità scura",
			darkColorScheme: "Usa lo schema colori scuro",
			toggleDarkMode: "Attiva/disattiva modalità scura",
			defaultLanguage: "Lingua predefinita",
			english: "Inglese (en)",
			french: "Francese (fr)",
			german: "Tedesco (de)",
			spanish: "Spagnolo (es)",
			japanese: "Giapponese (ja)",
			chinese: "Cinese semplificato (zh-CN)",
			arabic: "Arabo (ar)"
		},
		apiAccess: {
			title: "Accesso API",
			apiKey: "Chiave API",
			copy: "Copia",
			description: "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
		},
		footer: {
			cancel: "Annulla",
			saveChanges: "Salva modifiche"
		}
	},
	team: {
		header: {
			title: "Il nostro team",
			description: "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Fondatrice e Responsabile tecnico",
			member1Bio: "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
			member2Name: "Marcus Weber",
			member2Role: "Ingegnere delle prestazioni",
			member2Bio: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Sviluppatore Full-Stack",
			member4Bio: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Analista dati",
			member5Bio: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Responsable della comunità",
			member6Bio: "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
		}
	},
	notFound: {
		title: "404",
		description: "Ops! Pagina non trovata",
		returnHome: "Torna alla Home"
	}
}, ce = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Ir para o GitHub"
	},
	header: {
		home: "Início",
		methodology: "Metodologia",
		mockPages: "Páginas de Teste",
		products: "Produtos",
		pricing: "Preços",
		team: "Equipe",
		blog: "Blog",
		careers: "Carreiras",
		faq: "FAQ",
		contact: "Contato",
		settings: "Configurações"
	},
	footer: {
		title: "i18n Benchmark",
		description: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
		resources: "Recursos",
		github: "GitHub",
		methodology: "Metodologia",
		contributing: "Contribuindo",
		contact: "Contato",
		builtWith: "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente."
	},
	themeToggle: {
		auto: "Tema: Automático",
		dark: "Tema: Escuro",
		light: "Tema: Claro",
		labelAuto: "Modo de tema: auto (sistema). Clique para mudar para o modo claro.",
		labelOther: "Modo de tema: {mode}. Clique para mudar de modo."
	},
	mockBanner: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.",
			viewResults: "Ver Resultados",
			methodology: "Metodologia"
		},
		whyItMatters: {
			title: "Por que estas métricas importam",
			bundleSizeTitle: "Tamanho do bundle",
			bundleSizeDesc: "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.",
			renderingTitle: "Renderização e hidratação",
			renderingDesc: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
			dynamicLoadingTitle: "Carregamento dinâmico",
			dynamicLoadingDesc: "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
		},
		understandingImpact: {
			title: "Entendendo o impacto",
			singleJsonTitle: "Por que um único JSON grande pode prejudicar o desempenho",
			singleJsonIntro: "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:",
			singleJsonBullet1: "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.",
			singleJsonBullet2: "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.",
			singleJsonBullet3: "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.",
			tradeOffsTitle: "Os trade-offs do carregamento dinâmico",
			tradeOffsIntro: "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:",
			waterfallLabel: "Requisições em cascata:",
			waterfallDesc: "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.",
			foucLabel: "Flash de conteúdo não traduzido (FOUC):",
			foucDesc: "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.",
			cacheLabel: "Invalidação de cache:",
			cacheDesc: "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.",
			measuresTitle: "O que este benchmark mede",
			measuresDesc: "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis."
		},
		resultsTable: {
			title: "Resultados de exemplo",
			library: "Biblioteca",
			bundleSize: "Tamanho do Bundle",
			lookupTime: "Tempo de Busca",
			lazyLoading: "Carregamento Lento",
			yes: "Sim",
			manual: "Manual",
			builtIn: "Integrado"
		}
	},
	about: {
		header: {
			title: "Sobre este benchmark",
			description: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas."
		},
		grid: {
			whyExistsTitle: "Por que isto existe",
			whyExistsDesc: "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.",
			methodologyTitle: "Metodologia",
			methodologyDesc: "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis."
		},
		whatWeMeasure: {
			title: "O que medimos",
			bundleSizeImpact: "Impacto no tamanho do bundle",
			bundleSizeImpactDesc: "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
			renderingOverhead: "Sobrecarga de renderização",
			renderingOverheadDesc: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.",
			hydrationCost: "Custo de hidratação",
			hydrationCostDesc: "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.",
			lazyLoading: "Eficácia do carregamento lento",
			lazyLoadingDesc: "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).",
			localeSwitch: "Velocidade de troca de localidade",
			localeSwitchDesc: "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Insights, tutoriais e análises da comunidade i18n."
		},
		list: {
			readMore: "Ler Mais →",
			post1Title: "Comparando bibliotecas i18n em 2026: um mergulho profundo",
			post1Date: "15 de março de 2026",
			post1Excerpt: "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.",
			post1Category: "Benchmark",
			post2Title: "Como reduzir seu bundle i18n em 60%",
			post2Date: "8 de março de 2026",
			post2Excerpt: "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.",
			post2Category: "Tutorial",
			post3Title: "O estado da internacionalização no React",
			post3Date: "28 de fevereiro de 2026",
			post3Excerpt: "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
			post3Category: "Análise",
			post4Title: "Migrando de react-i18next para o Lingui",
			post4Date: "15 de fevereiro de 2026",
			post4Excerpt: "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components e i18n: o que muda?",
			post5Date: "1 de fevereiro de 2026",
			post5Excerpt: "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.",
			post5Category: "Análise",
			post6Title: "Metodologia de benchmark: como testamos",
			post6Date: "20 de janeiro de 2026",
			post6Excerpt: "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Carreiras",
			description: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo."
		},
		benefits: {
			remoteLabel: "Remoto primeiro",
			remoteValue: "Trabalhe de qualquer lugar do mundo",
			payLabel: "Salário competitivo",
			payValue: "Remuneração acima do mercado",
			ossLabel: "Tempo para o código aberto",
			ossValue: "20% do tempo para contribuições OSS"
		},
		openPositions: {
			title: "Vagas abertas",
			applyNow: "Candidatar-se agora",
			remote: "Remoto",
			fullTime: "Tempo integral",
			partTime: "Tempo parcial",
			engineering: "Engenharia",
			documentation: "Documentação",
			community: "Comunidade",
			sfRemote: "San Francisco / Remoto",
			frontendTitle: "Engenheiro Frontend Sênior",
			frontendDesc: "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
			backendTitle: "Engenheiro Backend",
			backendDesc: "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.",
			writerTitle: "Redator técnico",
			writerDesc: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
			devrelTitle: "Engenheiro de DevRel",
			devrelDesc: "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.",
			qaTitle: "Engenheiro de QA",
			qaDesc: "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos."
		}
	},
	contact: {
		header: {
			title: "Entre em contato",
			description: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
		},
		form: {
			name: "Nome",
			yourName: "Seu nome",
			email: "E-mail",
			emailPlaceholder: "voce@exemplo.com",
			topic: "Assunto",
			bugReport: "Relatório de bug",
			newBenchmarkIdea: "Nova ideia de benchmark",
			methodologyQuestion: "Pergunta sobre metodologia",
			contribution: "Contribuição",
			other: "Outro",
			message: "Mensagem",
			messagePlaceholder: "Descreva sua pergunta ou ideia...",
			sendMessage: "Enviar mensagem"
		}
	},
	faq: {
		header: {
			title: "Perguntas frequentes",
			description: "Tudo o que você precisa saber sobre o i18n Benchmark."
		},
		list: {
			q1: "O que é o i18n Benchmark?",
			a1: "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.",
			q2: "Como os benchmarks são conduzidos?",
			a2: "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.",
			q3: "Quais bibliotecas são suportadas atualmente?",
			a3: "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
			q4: "Posso enviar meus próprios benchmarks?",
			a4: "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.",
			q5: "Com que frequência os benchmarks são atualizados?",
			a5: "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.",
			q6: "Os dados são confiáveis?",
			a6: "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.",
			q7: "Vocês oferecem serviços de consultoria?",
			a7: "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.",
			q8: "Como posso contribuir?",
			a8: "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes."
		}
	},
	pricing: {
		header: {
			title: "Preços simples e transparentes",
			description: "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 $",
			starterPeriod: "para sempre",
			starterFeature1: "5 execuções de benchmark/dia",
			starterFeature2: "3 bibliotecas",
			starterFeature3: "Suporte da comunidade",
			starterFeature4: "Resultados públicos",
			proName: "Pro",
			proPrice: "29 $",
			proPeriod: "/mês",
			proFeature1: "Execuções ilimitadas",
			proFeature2: "Todas as bibliotecas",
			proFeature3: "Suporte prioritário",
			proFeature4: "Resultados privados",
			proFeature5: "Integração CI",
			proFeature6: "Dados históricos",
			enterpriseName: "Enterprise",
			enterprisePrice: "Personalizado",
			enterpriseFeature1: "Tudo o que está no Pro",
			enterpriseFeature2: "Opção on-premise",
			enterpriseFeature3: "SSO e SAML",
			enterpriseFeature4: "Gerente de conta dedicado",
			enterpriseFeature5: "SLAs personalizados",
			enterpriseFeature6: "Logs de auditoria",
			enterpriseFeature7: "Sessões de treinamento",
			contactSales: "Contatar vendas",
			getStarted: "Começar"
		}
	},
	products: {
		header: {
			title: "Produtos",
			description: "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização."
		},
		grid: {
			learnMore: "Saiba Mais",
			cliName: "Benchmark CLI",
			cliDesc: "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.",
			cliPrice: "Grátis",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
			cloudPrice: "29 $/mês",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
			enterprisePrice: "Contate-nos",
			migrationName: "Assistente de migração",
			migrationDesc: "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
			migrationPrice: "99 $ taxa única",
			qaName: "QA de tradução",
			qaDesc: "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.",
			qaPrice: "19 $/mês",
			optimizerName: "Otimizador de bundle",
			optimizerDesc: "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
			optimizerPrice: "49 $/mês"
		}
	},
	settings: {
		header: {
			title: "Configurações",
			description: "Gerencie suas preferências de conta e configuração."
		},
		profile: {
			title: "Perfil",
			displayName: "Nome de exibição",
			email: "E-mail"
		},
		preferences: {
			title: "Preferências",
			emailNotifications: "Notificações por e-mail",
			weeklyReports: "Receber relatórios semanais de benchmarks",
			toggleNotifications: "Alternar notificações",
			darkMode: "Modo Escuro",
			darkColorScheme: "Usar esquema de cores escuro",
			toggleDarkMode: "Alternar modo escuro",
			defaultLanguage: "Idioma padrão",
			english: "Inglês (en)",
			french: "Francés (fr)",
			german: "Alemão (de)",
			spanish: "Espanhol (es)",
			japanese: "Japonês (ja)",
			chinese: "Chinês Simplificado (zh-CN)",
			arabic: "Árabe (ar)"
		},
		apiAccess: {
			title: "Acesso API",
			apiKey: "Chave API",
			copy: "Copiar",
			description: "Use esta chave para acessar a API de benchmarking programaticamente."
		},
		footer: {
			cancel: "Cancelar",
			saveChanges: "Salvar alterações"
		}
	},
	team: {
		header: {
			title: "Nossa equipe",
			description: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Fundadora e Engenheira Líder",
			member1Bio: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
			member2Name: "Marcus Weber",
			member2Role: "Engenheiro de performance",
			member2Bio: "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Desenvolvedor Full-Stack",
			member4Bio: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Analista de dados",
			member5Bio: "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Gerente de comunidade",
			member6Bio: "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
		}
	},
	notFound: {
		title: "404",
		description: "Ops! Página não encontrada",
		returnHome: "Voltar para o início"
	}
}, le = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "前往 GitHub"
	},
	header: {
		home: "首页",
		methodology: "方法论",
		mockPages: "模拟页面",
		products: "产品",
		pricing: "价格",
		team: "团队",
		blog: "博客",
		careers: "招聘",
		faq: "常见问题",
		contact: "联系我们",
		settings: "设置"
	},
	footer: {
		title: "i18n Benchmark",
		description: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
		resources: "资源",
		github: "GitHub",
		methodology: "方法论",
		contributing: "贡献",
		contact: "联系我们",
		builtWith: "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。"
	},
	themeToggle: {
		auto: "主题：自动",
		dark: "主题：深色",
		light: "主题：浅色",
		labelAuto: "主题模式：自动（系统）。点击切换到浅色模式。",
		labelOther: "主题模式：{mode}。点击切换模式。"
	},
	mockBanner: "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。",
			viewResults: "查看结果",
			methodology: "方法论"
		},
		whyItMatters: {
			title: "为什么这些指标很重要",
			bundleSizeTitle: "包大小",
			bundleSizeDesc: "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。",
			renderingTitle: "渲染与注水",
			renderingDesc: "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。",
			dynamicLoadingTitle: "动态加载",
			dynamicLoadingDesc: "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
		},
		understandingImpact: {
			title: "理解影响",
			singleJsonTitle: "为什么单个大型 JSON 会损害性能",
			singleJsonIntro: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：",
			singleJsonBullet1: "每次页面加载时都必须解析 JSON — 阻塞主线程。",
			singleJsonBullet2: "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。",
			singleJsonBullet3: "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。",
			tradeOffsTitle: "动态加载的权衡",
			tradeOffsIntro: "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：",
			waterfallLabel: "瀑布流请求：",
			waterfallDesc: "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。",
			foucLabel: "未翻译内容闪烁 (FOUC)：",
			foucDesc: "在块到达之前，用户可能会短暂看到翻译键或回退语言。",
			cacheLabel: "缓存失效：",
			cacheDesc: "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。",
			measuresTitle: "此基准测试衡量的内容",
			measuresDesc: "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。"
		},
		resultsTable: {
			title: "示例结果",
			library: "库",
			bundleSize: "包大小",
			lookupTime: "查找时间",
			lazyLoading: "延迟加载",
			yes: "是",
			manual: "手动",
			builtIn: "内置"
		}
	},
	about: {
		header: {
			title: "关于此基准测试",
			description: "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。"
		},
		grid: {
			whyExistsTitle: "为什么存在这个测试",
			whyExistsDesc: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。",
			methodologyTitle: "方法论",
			methodologyDesc: "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。"
		},
		whatWeMeasure: {
			title: "衡量指标",
			bundleSizeImpact: "包大小影响",
			bundleSizeImpactDesc: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。",
			renderingOverhead: "渲染开销",
			renderingOverheadDesc: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。",
			hydrationCost: "注水成本",
			hydrationCostDesc: "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。",
			lazyLoading: "延迟加载有效性",
			lazyLoadingDesc: "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。",
			localeSwitch: "语言环境切换速度",
			localeSwitchDesc: "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。"
		}
	},
	blog: {
		header: {
			title: "博客",
			description: "来自 i18n 社区的见解、教程和分析。"
		},
		list: {
			readMore: "阅读更多 →",
			post1Title: "2026 年 i18n 库对比：深度分析",
			post1Date: "2026年3月15日",
			post1Excerpt: "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。",
			post1Category: "基准测试",
			post2Title: "如何将 i18n 包大小减少 60%",
			post2Date: "2026年3月8日",
			post2Excerpt: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
			post2Category: "教程",
			post3Title: "React 国际化现状",
			post3Date: "2026年2月28日",
			post3Excerpt: "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。",
			post3Category: "分析",
			post4Title: "从 react-i18next 迁移到 Lingui",
			post4Date: "2026年2月15日",
			post4Excerpt: "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。",
			post4Category: "教程",
			post5Title: "Server Components 与 i18n：发生了什么变化？",
			post5Date: "2026年2月1日",
			post5Excerpt: "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
			post5Category: "分析",
			post6Title: "基准测试方法论：我们如何测试",
			post6Date: "2026年1月20日",
			post6Excerpt: "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "招聘",
			description: "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
		},
		benefits: {
			remoteLabel: "远程优先",
			remoteValue: "在世界任何地方工作",
			payLabel: "具有竞争力的薪酬",
			payValue: "市场顶尖的薪资水平",
			ossLabel: "开源时间",
			ossValue: "20% 的时间用于 OSS 贡献"
		},
		openPositions: {
			title: "开放职位",
			applyNow: "立即申请",
			remote: "远程",
			fullTime: "全职",
			partTime: "兼职",
			engineering: "工程",
			documentation: "文档",
			community: "社区",
			sfRemote: "旧金山 / 远程",
			frontendTitle: "高级前端工程师",
			frontendDesc: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
			backendTitle: "后端工程师",
			backendDesc: "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。",
			writerTitle: "技术作家",
			writerDesc: "为我们的基准测试平台编写全面的指南、API 参考和教程。",
			devrelTitle: "DevRel 工程师",
			devrelDesc: "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
			qaTitle: "QA 工程师",
			qaDesc: "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。"
		}
	},
	contact: {
		header: {
			title: "取得联系",
			description: "有想法、发现了错误或想贡献基准测试？请联系我们："
		},
		form: {
			name: "姓名",
			yourName: "您的姓名",
			email: "电子邮件",
			emailPlaceholder: "you@example.com",
			topic: "主题",
			bugReport: "错误报告",
			newBenchmarkIdea: "新基准测试想法",
			methodologyQuestion: "方法论问题",
			contribution: "贡献",
			other: "其他",
			message: "消息",
			messagePlaceholder: "描述您的问题或想法...",
			sendMessage: "发送消息"
		}
	},
	faq: {
		header: {
			title: "常见问题",
			description: "关于 i18n 基准测试您需要了解的一切。"
		},
		list: {
			q1: "什么是 i18n 基准测试？",
			a1: "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。",
			q2: "基准测试是如何进行的？",
			a2: "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。",
			q3: "目前支持哪些库？",
			a3: "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。",
			q4: "我可以提交我自己的基准测试吗？",
			a4: "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。",
			q5: "基准测试多久更新一次？",
			a5: "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。",
			q6: "数据可靠吗？",
			a6: "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。",
			q7: "你们提供咨询服务吗？",
			a7: "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。",
			q8: "我该如何贡献？",
			a8: "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。"
		}
	},
	pricing: {
		header: {
			title: "简单透明的定价",
			description: "选择适合您团队的计划。无隐藏费用。"
		},
		tiers: {
			starterName: "入门版",
			starterPrice: "0 $",
			starterPeriod: "永久",
			starterFeature1: "每天 5 次基准测试运行",
			starterFeature2: "3 个库",
			starterFeature3: "社区支持",
			starterFeature4: "公开结果",
			proName: "专业版",
			proPrice: "29 $",
			proPeriod: "/月",
			proFeature1: "无限次运行",
			proFeature2: "所有库",
			proFeature3: "优先支持",
			proFeature4: "私有结果",
			proFeature5: "CI 集成",
			proFeature6: "历史数据",
			enterpriseName: "企业版",
			enterprisePrice: "定制",
			enterpriseFeature1: "包含专业版中的所有功能",
			enterpriseFeature2: "本地部署选项",
			enterpriseFeature3: "SSO 和 SAML",
			enterpriseFeature4: "专属客户经理",
			enterpriseFeature5: "定制 SLA",
			enterpriseFeature6: "审计日志",
			enterpriseFeature7: "培训课程",
			contactSales: "联系销售",
			getStarted: "开始使用"
		}
	},
	products: {
		header: {
			title: "产品",
			description: "用于简化国际化工作流程的工具和服务。"
		},
		grid: {
			learnMore: "了解更多",
			cliName: "基准测试 CLI",
			cliDesc: "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。",
			cliPrice: "免费",
			cloudName: "基准测试云",
			cloudDesc: "具有历史追踪、警报和团队仪表板的自动化云基准测试。",
			cloudPrice: "29 $/月",
			enterpriseName: "基准测试企业版",
			enterpriseDesc: "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。",
			enterprisePrice: "联系我们",
			migrationName: "迁移助手",
			migrationDesc: "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。",
			migrationPrice: "99 $ 一次性费用",
			qaName: "翻译 QA",
			qaDesc: "自动检查翻译缺失、复数问题和上下文错误。",
			qaPrice: "19 $/月",
			optimizerName: "包优化器",
			optimizerDesc: "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。",
			optimizerPrice: "49 $/月"
		}
	},
	settings: {
		header: {
			title: "设置",
			description: "管理您的账户偏好和配置。"
		},
		profile: {
			title: "个人资料",
			displayName: "显示名称",
			email: "电子邮件"
		},
		preferences: {
			title: "偏好",
			emailNotifications: "电子邮件通知",
			weeklyReports: "接收每周基准测试报告",
			toggleNotifications: "切换通知",
			darkMode: "深色模式",
			darkColorScheme: "使用深色配色方案",
			toggleDarkMode: "切换深色模式",
			defaultLanguage: "默认语言",
			english: "英语 (en)",
			french: "法语 (fr)",
			german: "德语 (de)",
			spanish: "西班牙语 (es)",
			japanese: "日语 (ja)",
			chinese: "简体中文 (zh-CN)",
			arabic: "阿拉伯语 (ar)"
		},
		apiAccess: {
			title: "API 访问",
			apiKey: "API 密钥",
			copy: "复制",
			description: "使用此密钥以编程方式访问基准测试 API。"
		},
		footer: {
			cancel: "取消",
			saveChanges: "保存更改"
		}
	},
	team: {
		header: {
			title: "我们的团队",
			description: "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。"
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "创始人兼首席工程师",
			member1Bio: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
			member2Name: "Marcus Weber",
			member2Role: "性能工程师",
			member2Bio: "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。",
			member3Name: "Aisha Patel",
			member3Role: "开发者倡导者",
			member3Bio: "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。",
			member4Name: "Tomás Rodríguez",
			member4Role: "全栈开发人员",
			member4Bio: "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。",
			member5Name: "Yuki Tanaka",
			member5Role: "数据分析师",
			member5Bio: "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。",
			member6Name: "Elena Kowalski",
			member6Role: "社区经理",
			member6Bio: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
		}
	},
	notFound: {
		title: "404",
		description: "哎呀！页面未找到",
		returnHome: "返回首页"
	}
}, ue = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "GitHubへ"
	},
	header: {
		home: "ホーム",
		methodology: "手法",
		mockPages: "テストページ",
		products: "製品",
		pricing: "価格",
		team: "チーム",
		blog: "ブログ",
		careers: "採用情報",
		faq: "FAQ",
		contact: "お問い合わせ",
		settings: "設定"
	},
	footer: {
		title: "i18n Benchmark",
		description: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。",
		resources: "リソース",
		github: "GitHub",
		methodology: "手法",
		contributing: "貢献する",
		contact: "お問い合わせ",
		builtWith: "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。"
	},
	themeToggle: {
		auto: "テーマ：自動",
		dark: "テーマ：ダーク",
		light: "テーマ：ライト",
		labelAuto: "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。",
		labelOther: "テーマモード：{mode}。クリックしてモードを切り替えます。"
	},
	mockBanner: "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。",
			viewResults: "結果を見る",
			methodology: "手法"
		},
		whyItMatters: {
			title: "なぜこれらの指標が重要なのか",
			bundleSizeTitle: "バンドルサイズ",
			bundleSizeDesc: "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。",
			renderingTitle: "レンダリングとハイドレーション",
			renderingDesc: "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。",
			dynamicLoadingTitle: "動的読み込み",
			dynamicLoadingDesc: "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。"
		},
		understandingImpact: {
			title: "影響を理解する",
			singleJsonTitle: "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
			singleJsonIntro: "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：",
			singleJsonBullet1: "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。",
			singleJsonBullet2: "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。",
			singleJsonBullet3: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
			tradeOffsTitle: "動的読み込みのトレードオフ",
			tradeOffsIntro: "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：",
			waterfallLabel: "ウォーターフォールリクエスト：",
			waterfallDesc: "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。",
			foucLabel: "翻訳されていないコンテンツのフラッシュ (FOUC)：",
			foucDesc: "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。",
			cacheLabel: "キャッシュの無効化：",
			cacheDesc: "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。",
			measuresTitle: "このベンチマークが測定するもの",
			measuresDesc: "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
		},
		resultsTable: {
			title: "サンプル結果",
			library: "ライブラリ",
			bundleSize: "バンドルサイズ",
			lookupTime: "ルックアップ時間",
			lazyLoading: "遅延読み込み",
			yes: "はい",
			manual: "手動",
			builtIn: "内蔵"
		}
	},
	about: {
		header: {
			title: "このベンチマークについて",
			description: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。"
		},
		grid: {
			whyExistsTitle: "なぜこれが存在するのか",
			whyExistsDesc: "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。",
			methodologyTitle: "手法",
			methodologyDesc: "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。"
		},
		whatWeMeasure: {
			title: "測定項目",
			bundleSizeImpact: "バンドルサイズへの影響",
			bundleSizeImpactDesc: "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
			renderingOverhead: "レンダリングのオーバーヘッド",
			renderingOverheadDesc: "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
			hydrationCost: "ハイドレーションコスト",
			hydrationCostDesc: "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。",
			lazyLoading: "遅延読み込みの有効性",
			lazyLoadingDesc: "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。",
			localeSwitch: "ロケール切り替え速度",
			localeSwitchDesc: "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。"
		}
	},
	blog: {
		header: {
			title: "ブログ",
			description: "i18nコミュニティからのインサイト、チュートリアル、分析。"
		},
		list: {
			readMore: "続きを読む →",
			post1Title: "2026年のi18nライブラリ比較：ディープダイブ",
			post1Date: "2026年3月15日",
			post1Excerpt: "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。",
			post1Category: "ベンチマーク",
			post2Title: "i18nバンドルを60%削減する方法",
			post2Date: "2026年3月8日",
			post2Excerpt: "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。",
			post2Category: "チュートリアル",
			post3Title: "Reactにおける国際化の現状",
			post3Date: "2026年2月28日",
			post3Excerpt: "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。",
			post3Category: "分析",
			post4Title: "react-i18nextからLinguiへの移行",
			post4Date: "2026年2月15日",
			post4Excerpt: "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
			post4Category: "チュートリアル",
			post5Title: "Server Componentsとi18n：何が変わるのか？",
			post5Date: "2026年2月1日",
			post5Excerpt: "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
			post5Category: "分析",
			post6Title: "ベンチマーク手法：テスト方法について",
			post6Date: "2026年1月20日",
			post6Excerpt: "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。",
			post6Category: "メタ"
		}
	},
	careers: {
		header: {
			title: "採用情報",
			description: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。"
		},
		benefits: {
			remoteLabel: "リモートファースト",
			remoteValue: "世界中のどこからでも仕事ができます",
			payLabel: "競争力のある給与",
			payValue: "市場トップクラスの報酬",
			ossLabel: "オープンソースの時間",
			ossValue: "時間の20%をOSSへの貢献に"
		},
		openPositions: {
			title: "募集中の職種",
			applyNow: "今すぐ応募",
			remote: "リモート",
			fullTime: "フルタイム",
			partTime: "パートタイム",
			engineering: "エンジニアリング",
			documentation: "ドキュメンテーション",
			community: "コミュニティ",
			sfRemote: "サンフランシスコ / リモート",
			frontendTitle: "シニアフロントエンドエンジニア",
			frontendDesc: "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。",
			backendTitle: "バックエンドエンジニア",
			backendDesc: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。",
			writerTitle: "テクニカルライター",
			writerDesc: "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。",
			devrelTitle: "DevRelエンジニア",
			devrelDesc: "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。",
			qaTitle: "QAエンジニア",
			qaDesc: "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。"
		}
	},
	contact: {
		header: {
			title: "お問い合わせ",
			description: "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください："
		},
		form: {
			name: "名前",
			yourName: "お名前",
			email: "メールアドレス",
			emailPlaceholder: "you@example.com",
			topic: "トピック",
			bugReport: "バグ報告",
			newBenchmarkIdea: "新しいベンチマークのアイデア",
			methodologyQuestion: "手法に関する質問",
			contribution: "貢献",
			other: "その他",
			message: "メッセージ",
			messagePlaceholder: "ご質問やアイデアを記入してください...",
			sendMessage: "メッセージを送信"
		}
	},
	faq: {
		header: {
			title: "よくある質問",
			description: "i18n Benchmarkについて知っておくべきすべてのこと。"
		},
		list: {
			q1: "i18n Benchmarkとは何ですか？",
			a1: "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。",
			q2: "ベンチマークはどのように実施されますか？",
			a2: "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。",
			q3: "現在サポートされているライブラリは何ですか？",
			a3: "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。",
			q4: "自分のベンチマークを投稿できますか？",
			a4: "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。",
			q5: "ベンチマークはどのくらいの頻度で更新されますか？",
			a5: "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。",
			q6: "データは信頼できますか？",
			a6: "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。",
			q7: "コンサルティングサービスは提供していますか？",
			a7: "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。",
			q8: "どのように貢献できますか？",
			a8: "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。"
		}
	},
	pricing: {
		header: {
			title: "シンプルで透明性の高い価格設定",
			description: "チームに合ったプランをお選びください。隠れた費用はありません。"
		},
		tiers: {
			starterName: "スターター",
			starterPrice: "0円",
			starterPeriod: "ずっと無料",
			starterFeature1: "1日あたり5回のベンチマーク実行",
			starterFeature2: "3ライブラリ",
			starterFeature3: "コミュニティサポート",
			starterFeature4: "公開結果",
			proName: "プロ",
			proPrice: "29ドル",
			proPeriod: "/月",
			proFeature1: "無制限の実行",
			proFeature2: "すべてのライブラリ",
			proFeature3: "優先サポート",
			proFeature4: "非公開の結果",
			proFeature5: "CI統合",
			proFeature6: "履歴データ",
			enterpriseName: "エンタープライズ",
			enterprisePrice: "カスタム",
			enterpriseFeature1: "Proプランのすべてを含む",
			enterpriseFeature2: "オンプレミスオプション",
			enterpriseFeature3: "SSO & SAML",
			enterpriseFeature4: "専任のアカウントマネージャー",
			enterpriseFeature5: "カスタムSLA",
			enterpriseFeature6: "監査ログ",
			enterpriseFeature7: "トレーニングセッション",
			contactSales: "営業に問い合わせる",
			getStarted: "始める"
		}
	},
	products: {
		header: {
			title: "製品",
			description: "国際化ワークフローを効率化するためのツールとサービス。"
		},
		grid: {
			learnMore: "詳細はこちら",
			cliName: "Benchmark CLI",
			cliDesc: "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。",
			cliPrice: "無料",
			cloudName: "Benchmark Cloud",
			cloudDesc: "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。",
			cloudPrice: "29ドル/月",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。",
			enterprisePrice: "お問い合わせ",
			migrationName: "移行アシスタント",
			migrationDesc: "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。",
			migrationPrice: "99ドル（一回限り）",
			qaName: "翻訳QA",
			qaDesc: "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。",
			qaPrice: "19ドル/月",
			optimizerName: "バンドルオプティマイザー",
			optimizerDesc: "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。",
			optimizerPrice: "49ドル/月"
		}
	},
	settings: {
		header: {
			title: "設定",
			description: "アカウント設定と構成を管理します。"
		},
		profile: {
			title: "プロフィール",
			displayName: "表示名",
			email: "メールアドレス"
		},
		preferences: {
			title: "設定",
			emailNotifications: "メール通知",
			weeklyReports: "毎週のベンチマークレポートを受け取る",
			toggleNotifications: "通知の切り替え",
			darkMode: "ダークモード",
			darkColorScheme: "ダークカラー（暗い配色）を使用する",
			toggleDarkMode: "ダークモードの切り替え",
			defaultLanguage: "デフォルトの言語",
			english: "英語 (en)",
			french: "フランス語 (fr)",
			german: "ドイツ語 (de)",
			spanish: "スペイン語 (es)",
			japanese: "日本語 (ja)",
			chinese: "中国語（簡体字） (zh-CN)",
			arabic: "アラビア語 (ar)"
		},
		apiAccess: {
			title: "APIアクセス",
			apiKey: "APIキー",
			copy: "コピー",
			description: "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
		},
		footer: {
			cancel: "キャンセル",
			saveChanges: "変更を保存"
		}
	},
	team: {
		header: {
			title: "私たちのチーム",
			description: "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。"
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "創設者 & リードエンジニア",
			member1Bio: "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。",
			member2Name: "Marcus Weber",
			member2Role: "パフォーマンスエンジニア",
			member2Bio: "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。",
			member4Name: "Tomás Rodríguez",
			member4Role: "フルスタックデベロッパー",
			member4Bio: "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。",
			member5Name: "Yuki Tanaka",
			member5Role: "データアナリスト",
			member5Bio: "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。",
			member6Name: "Elena Kowalski",
			member6Role: "コミュニティマネージャー",
			member6Bio: "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。"
		}
	},
	notFound: {
		title: "404",
		description: "おっと！ページが見つかりません",
		returnHome: "ホームに戻る"
	}
}, de = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Go to GitHub"
	},
	header: {
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
		settings: "Settings"
	},
	footer: {
		title: "i18n Benchmark",
		description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		resources: "Resources",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		contact: "Contact",
		builtWith: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
	},
	themeToggle: {
		auto: "Theme: Auto",
		dark: "Theme: Dark",
		light: "Theme: Light",
		labelAuto: "Theme mode: auto (system). Click to switch to light mode.",
		labelOther: "Theme mode: {mode}. Click to switch mode."
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			viewResults: "View Results",
			methodology: "Methodology"
		},
		whyItMatters: {
			title: "Why These Metrics Matter",
			bundleSizeTitle: "Bundle Size",
			bundleSizeDesc: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			renderingTitle: "Rendering & Hydration",
			renderingDesc: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			dynamicLoadingTitle: "Dynamic Loading",
			dynamicLoadingDesc: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		},
		understandingImpact: {
			title: "Understanding the Impact",
			singleJsonTitle: "Why a single large JSON can hurt performance",
			singleJsonIntro: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			singleJsonBullet1: "The JSON must be parsed on every page load — blocking the main thread.",
			singleJsonBullet2: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			singleJsonBullet3: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			tradeOffsTitle: "The trade-offs of dynamic loading",
			tradeOffsIntro: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			waterfallLabel: "Waterfall requests:",
			waterfallDesc: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
			foucLabel: "Flash of untranslated content (FOUC):",
			foucDesc: "users may briefly see translation keys or a fallback language before the chunk arrives.",
			cacheLabel: "Cache invalidation:",
			cacheDesc: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
			measuresTitle: "What this benchmark measures",
			measuresDesc: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		resultsTable: {
			title: "Sample Results",
			library: "Library",
			bundleSize: "Bundle Size",
			lookupTime: "Lookup Time",
			lazyLoading: "Lazy Loading",
			yes: "Yes",
			manual: "Manual",
			builtIn: "Built-in"
		}
	},
	about: {
		header: {
			title: "About This Benchmark",
			description: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
		},
		grid: {
			whyExistsTitle: "Why This Exists",
			whyExistsDesc: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			methodologyTitle: "Methodology",
			methodologyDesc: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		},
		whatWeMeasure: {
			title: "What We Measure",
			bundleSizeImpact: "Bundle size impact",
			bundleSizeImpactDesc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
			renderingOverhead: "Rendering overhead",
			renderingOverheadDesc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
			hydrationCost: "Hydration cost",
			hydrationCostDesc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			lazyLoading: "Lazy loading effectiveness",
			lazyLoadingDesc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			localeSwitch: "Locale switch speed",
			localeSwitchDesc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
		}
	},
	blog: {
		header: {
			title: "Blog",
			description: "Insights, tutorials, and analysis from the i18n community."
		},
		list: {
			readMore: "Read More →",
			post1Title: "Comparing i18n Libraries in 2026: A Deep Dive",
			post1Date: "March 15, 2026",
			post1Excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			post1Category: "Benchmark",
			post2Title: "How to Reduce Your i18n Bundle by 60%",
			post2Date: "March 8, 2026",
			post2Excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			post2Category: "Tutorial",
			post3Title: "The State of Internationalization in React",
			post3Date: "February 28, 2026",
			post3Excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			post3Category: "Analysis",
			post4Title: "Migrating from react-i18next to Lingui",
			post4Date: "February 15, 2026",
			post4Excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			post4Category: "Tutorial",
			post5Title: "Server Components and i18n: What Changes?",
			post5Date: "February 1, 2026",
			post5Excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			post5Category: "Analysis",
			post6Title: "Benchmark Methodology: How We Test",
			post6Date: "January 20, 2026",
			post6Excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			post6Category: "Meta"
		}
	},
	careers: {
		header: {
			title: "Careers",
			description: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		},
		benefits: {
			remoteLabel: "Remote-first",
			remoteValue: "Work from anywhere in the world",
			payLabel: "Competitive pay",
			payValue: "Top-of-market compensation",
			ossLabel: "Open source time",
			ossValue: "20% time for OSS contributions"
		},
		openPositions: {
			title: "Open Positions",
			applyNow: "Apply Now",
			remote: "Remote",
			fullTime: "Full-time",
			partTime: "Part-time",
			engineering: "Engineering",
			documentation: "Documentation",
			community: "Community",
			sfRemote: "San Francisco / Remote",
			frontendTitle: "Senior Frontend Engineer",
			frontendDesc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			backendTitle: "Backend Engineer",
			backendDesc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
			writerTitle: "Technical Writer",
			writerDesc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
			devrelTitle: "DevRel Engineer",
			devrelDesc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
			qaTitle: "QA Engineer",
			qaDesc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
		}
	},
	contact: {
		header: {
			title: "Get in Touch",
			description: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
		},
		form: {
			name: "Name",
			yourName: "Your name",
			email: "Email",
			emailPlaceholder: "you@example.com",
			topic: "Topic",
			bugReport: "Bug Report",
			newBenchmarkIdea: "New Benchmark Idea",
			methodologyQuestion: "Methodology Question",
			contribution: "Contribution",
			other: "Other",
			message: "Message",
			messagePlaceholder: "Describe your question or idea...",
			sendMessage: "Send Message"
		}
	},
	faq: {
		header: {
			title: "Frequently Asked Questions",
			description: "Everything you need to know about i18n Benchmark."
		},
		list: {
			q1: "What is i18n Benchmark?",
			a1: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
			q2: "How are benchmarks conducted?",
			a2: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
			q3: "Which libraries are currently supported?",
			a3: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
			q4: "Can I submit my own benchmarks?",
			a4: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
			q5: "How often are benchmarks updated?",
			a5: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
			q6: "Is the data reliable?",
			a6: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
			q7: "Do you offer consulting services?",
			a7: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
			q8: "How can I contribute?",
			a8: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
		}
	},
	pricing: {
		header: {
			title: "Simple, Transparent Pricing",
			description: "Choose the plan that fits your team. No hidden fees."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "$0",
			starterPeriod: "forever",
			starterFeature1: "5 benchmark runs/day",
			starterFeature2: "3 libraries",
			starterFeature3: "Community support",
			starterFeature4: "Public results",
			proName: "Pro",
			proPrice: "$29",
			proPeriod: "/month",
			proFeature1: "Unlimited runs",
			proFeature2: "All libraries",
			proFeature3: "Priority support",
			proFeature4: "Private results",
			proFeature5: "CI integration",
			proFeature6: "Historical data",
			enterpriseName: "Enterprise",
			enterprisePrice: "Custom",
			enterpriseFeature1: "Everything in Pro",
			enterpriseFeature2: "On-premise option",
			enterpriseFeature3: "SSO & SAML",
			enterpriseFeature4: "Dedicated account manager",
			enterpriseFeature5: "Custom SLAs",
			enterpriseFeature6: "Audit logs",
			enterpriseFeature7: "Training sessions",
			contactSales: "Contact Sales",
			getStarted: "Get Started"
		}
	},
	products: {
		header: {
			title: "Products",
			description: "Tools and services to streamline your internationalization workflow."
		},
		grid: {
			learnMore: "Learn More",
			cliName: "Benchmark CLI",
			cliDesc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			cliPrice: "Free",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			cloudPrice: "$29/mo",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			enterprisePrice: "Contact Us",
			migrationName: "Migration Assistant",
			migrationDesc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			migrationPrice: "$99 one-time",
			qaName: "Translation QA",
			qaDesc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			qaPrice: "$19/mo",
			optimizerName: "Bundle Optimizer",
			optimizerDesc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			optimizerPrice: "$49/mo"
		}
	},
	settings: {
		header: {
			title: "Settings",
			description: "Manage your account preferences and configuration."
		},
		profile: {
			title: "Profile",
			displayName: "Display Name",
			email: "Email"
		},
		preferences: {
			title: "Preferences",
			emailNotifications: "Email Notifications",
			weeklyReports: "Receive weekly benchmark reports",
			toggleNotifications: "Toggle notifications",
			darkMode: "Dark Mode",
			darkColorScheme: "Use dark color scheme",
			toggleDarkMode: "Toggle dark mode",
			defaultLanguage: "Default Language",
			english: "English (en)",
			french: "French (fr)",
			german: "German (de)",
			spanish: "Spanish (es)",
			japanese: "Japanese (ja)",
			chinese: "Chinese Simplified (zh-CN)",
			arabic: "Arabic (ar)"
		},
		apiAccess: {
			title: "API Access",
			apiKey: "API Key",
			copy: "Copy",
			description: "Use this key to access the benchmarking API programmatically."
		},
		footer: {
			cancel: "Cancel",
			saveChanges: "Save Changes"
		}
	},
	team: {
		header: {
			title: "Our Team",
			description: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		grid: {
			member1Name: "Sarah Chen",
			member1Role: "Founder & Lead Engineer",
			member1Bio: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			member2Name: "Marcus Weber",
			member2Role: "Performance Engineer",
			member2Bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			member3Name: "Aisha Patel",
			member3Role: "Developer Advocate",
			member3Bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			member4Name: "Tomás Rodríguez",
			member4Role: "Full-Stack Developer",
			member4Bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			member5Name: "Yuki Tanaka",
			member5Role: "Data Analyst",
			member5Bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			member6Name: "Elena Kowalski",
			member6Role: "Community Manager",
			member6Bio: "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	},
	notFound: {
		title: "404",
		description: "Oops! Page not found",
		returnHome: "Return to Home"
	}
}, fe = {
	shared: {
		appName: "i18n Bench",
		siteName: "i18n Benchmark",
		contactEmail: "contact@intlayer.org",
		goToGithub: "Перейти на GitHub"
	},
	header: {
		home: "Главная",
		methodology: "Методология",
		mockPages: "Тестовые страницы",
		products: "Продукты",
		pricing: "Цены",
		team: "Команда",
		blog: "Блог",
		careers: "Вакансии",
		faq: "FAQ",
		contact: "Контакт",
		settings: "Настройки"
	},
	footer: {
		title: "i18n Benchmark",
		description: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
		resources: "Ресурсы",
		github: "GitHub",
		methodology: "Методология",
		contributing: "Участие в проекте",
		contact: "Контакт",
		builtWith: "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера."
	},
	themeToggle: {
		auto: "Тема: Авто",
		dark: "Тема: Темная",
		light: "Тема: Светлая",
		labelAuto: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
		labelOther: "Режим темы: {mode}. Нажмите, чтобы сменить режим."
	},
	mockBanner: "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.",
	home: {
		hero: {
			title: "i18n Benchmark",
			description: "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
			viewResults: "Посмотреть результаты",
			methodology: "Методология"
		},
		whyItMatters: {
			title: "Почему эти метрики важны",
			bundleSizeTitle: "Размер бандла",
			bundleSizeDesc: "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.",
			renderingTitle: "Рендеринг и гидратация",
			renderingDesc: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).",
			dynamicLoadingTitle: "Динамическая загрузка",
			dynamicLoadingDesc: "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии."
		},
		understandingImpact: {
			title: "Понимание влияния",
			singleJsonTitle: "Почему один большой JSON может снизить производительность",
			singleJsonIntro: "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
			singleJsonBullet1: "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.",
			singleJsonBullet2: "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.",
			singleJsonBullet3: "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.",
			tradeOffsTitle: "Компромиссы динамической загрузки",
			tradeOffsIntro: "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:",
			waterfallLabel: "Каскадные запросы:",
			waterfallDesc: "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.",
			foucLabel: "Мерцание непереведенного контента (FOUC):",
			foucDesc: "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.",
			cacheLabel: "Инвалидация кэша:",
			cacheDesc: "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.",
			measuresTitle: "Что измеряет этот бенчмарк",
			measuresDesc: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
		},
		resultsTable: {
			title: "Примеры результатов",
			library: "Библиотека",
			bundleSize: "Размер бандла",
			lookupTime: "Время поиска",
			lazyLoading: "Ленивая загрузка",
			yes: "Да",
			manual: "Вручную",
			builtIn: "Встроено"
		}
	},
	about: {
		header: {
			title: "Об этом бенчмарке",
			description: "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
		},
		grid: {
			whyExistsTitle: "Зачем это нужно",
			whyExistsDesc: "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
			methodologyTitle: "Методология",
			methodologyDesc: "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов."
		},
		whatWeMeasure: {
			title: "Что мы измеряем",
			bundleSizeImpact: "Влияние на размер бандла",
			bundleSizeImpactDesc: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
			renderingOverhead: "Накладные расходы на рендеринг",
			renderingOverheadDesc: "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.",
			hydrationCost: "Стоимость гидратации",
			hydrationCostDesc: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
			lazyLoading: "Эффективность ленивой загрузки",
			lazyLoadingDesc: "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).",
			localeSwitch: "Скорость переключения языка",
			localeSwitchDesc: "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM."
		}
	},
	blog: {
		header: {
			title: "Блог",
			description: "Инсайты, туториалы и аналитика от сообщества i18n."
		},
		list: {
			readMore: "Читать далее →",
			post1Title: "Сравнение библиотек i18n в 2026 году: глубокое погружение",
			post1Date: "15 марта 2026 г.",
			post1Excerpt: "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.",
			post1Category: "Бенчмарк",
			post2Title: "Как уменьшить бандл i18n на 60%",
			post2Date: "8 марта 2026 г.",
			post2Excerpt: "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.",
			post2Category: "Туториал",
			post3Title: "Состояние интернационализации в React",
			post3Date: "28 февраля 2026 г.",
			post3Excerpt: "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.",
			post3Category: "Анализ",
			post4Title: "Миграция с react-i18next на Lingui",
			post4Date: "15 февраля 2026 г.",
			post4Excerpt: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.",
			post4Category: "Туториал",
			post5Title: "Server Components и i18n: что меняется?",
			post5Date: "1 февраля 2026 г.",
			post5Excerpt: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
			post5Category: "Анализ",
			post6Title: "Методология бенчмарка: как мы тестируем",
			post6Date: "20 января 2026 г.",
			post6Excerpt: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
			post6Category: "Мета"
		}
	},
	careers: {
		header: {
			title: "Вакансии",
			description: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение."
		},
		benefits: {
			remoteLabel: "Удаленная работа",
			remoteValue: "Работайте из любой точки мира",
			payLabel: "Конкурентная зарплата",
			payValue: "Вознаграждение выше рыночного",
			ossLabel: "Время на open source",
			ossValue: "20% времени на вклад в OSS"
		},
		openPositions: {
			title: "Открытые вакансии",
			applyNow: "Подать заявку",
			remote: "Удаленно",
			fullTime: "Полная занятость",
			partTime: "Частичная занятость",
			engineering: "Разработка",
			documentation: "Документация",
			community: "Сообщество",
			sfRemote: "Сан-Франциско / Удаленно",
			frontendTitle: "Старший фронтенд-инженер",
			frontendDesc: "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.",
			backendTitle: "Бэкенд-инженер",
			backendDesc: "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.",
			writerTitle: "Технический писатель",
			writerDesc: "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.",
			devrelTitle: "DevRel-инженер",
			devrelDesc: "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.",
			qaTitle: "QA-инженер",
			qaDesc: "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации."
		}
	},
	contact: {
		header: {
			title: "Связаться с нами",
			description: "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу"
		},
		form: {
			name: "Имя",
			yourName: "Ваше имя",
			email: "Электронная почта",
			emailPlaceholder: "you@example.com",
			topic: "Тема",
			bugReport: "Отчет об ошибке",
			newBenchmarkIdea: "Идея нового бенчмарка",
			methodologyQuestion: "Вопрос по методологии",
			contribution: "Вклад в проект",
			other: "Другое",
			message: "Сообщение",
			messagePlaceholder: "Опишите ваш вопрос или идею...",
			sendMessage: "Отправить сообщение"
		}
	},
	faq: {
		header: {
			title: "Часто задаваемые вопросы",
			description: "Все, что вам нужно знать об i18n Benchmark."
		},
		list: {
			q1: "Что такое i18n Benchmark?",
			a1: "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.",
			q2: "Как проводятся бенчмарки?",
			a2: "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.",
			q3: "Какие библиотеки поддерживаются в данный момент?",
			a3: "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.",
			q4: "Могу ли я прислать свои собственные бенчмарки?",
			a4: "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.",
			q5: "Как часто обновляются бенчмарки?",
			a5: "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.",
			q6: "Можно ли доверять данным?",
			a6: "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.",
			q7: "Предоставляете ли вы консалтинговые услуги?",
			a7: "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.",
			q8: "Как я могу помочь проекту?",
			a8: "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей."
		}
	},
	pricing: {
		header: {
			title: "Простые и прозрачные цены",
			description: "Выберите подходящий план для вашей команды. Никаких скрытых комиссий."
		},
		tiers: {
			starterName: "Starter",
			starterPrice: "0 $",
			starterPeriod: "навсегда",
			starterFeature1: "5 запусков бенчмарка в день",
			starterFeature2: "3 библиотеки",
			starterFeature3: "Поддержка сообщества",
			starterFeature4: "Публичные результаты",
			proName: "Pro",
			proPrice: "29 $",
			proPeriod: "/мес",
			proFeature1: "Неограниченное число запусков",
			proFeature2: "Все библиотеки",
			proFeature3: "Приоритетная поддержка",
			proFeature4: "Приватные результаты",
			proFeature5: "Интеграция с CI",
			proFeature6: "Исторические данные",
			enterpriseName: "Enterprise",
			enterprisePrice: "Индивидуально",
			enterpriseFeature1: "Все, что есть в Pro",
			enterpriseFeature2: "Локальная установка",
			enterpriseFeature3: "SSO и SAML",
			enterpriseFeature4: "Персональный менеджер",
			enterpriseFeature5: "Индивидуальные SLA",
			enterpriseFeature6: "Журналы аудита",
			enterpriseFeature7: "Обучающие сессии",
			contactSales: "Связаться с отделом продаж",
			getStarted: "Начать работу"
		}
	},
	products: {
		header: {
			title: "Продукты",
			description: "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией."
		},
		grid: {
			learnMore: "Узнать больше",
			cliName: "Benchmark CLI",
			cliDesc: "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.",
			cliPrice: "Бесплатно",
			cloudName: "Benchmark Cloud",
			cloudDesc: "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.",
			cloudPrice: "29 $/мес",
			enterpriseName: "Benchmark Enterprise",
			enterpriseDesc: "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.",
			enterprisePrice: "Связаться с нами",
			migrationName: "Помощник по миграции",
			migrationDesc: "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.",
			migrationPrice: "99 $ (разово)",
			qaName: "QA переводов",
			qaDesc: "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.",
			qaPrice: "19 $/мес",
			optimizerName: "Оптимизатор бандла",
			optimizerDesc: "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.",
			optimizerPrice: "49 $/мес"
		}
	},
	settings: {
		header: {
			title: "Настройки",
			description: "Управляйте предпочтениями и конфигурацией вашей учетной записи."
		},
		profile: {
			title: "Профиль",
			displayName: "Отображаемое имя",
			email: "Электронная почта"
		},
		preferences: {
			title: "Предпочтения",
			emailNotifications: "Уведомления по почте",
			weeklyReports: "Получать еженедельные отчеты о бенчмарках",
			toggleNotifications: "Переключить уведомления",
			darkMode: "Темная тема",
			darkColorScheme: "Использовать темную цветовую схему",
			toggleDarkMode: "Переключить темную тему",
			defaultLanguage: "Язык по умолчанию",
			english: "Английский (en)",
			french: "Французский (fr)",
			german: "Немецкий (de)",
			spanish: "Испанский (es)",
			japanese: "Японский (ja)",
			chinese: "Китайский упрощенный (zh-CN)",
			arabic: "Арабский (ar)"
		},
		apiAccess: {
			title: "Доступ к API",
			apiKey: "Ключ API",
			copy: "Копировать",
			description: "Используйте этот ключ для программного доступа к API бенчмаркинга."
		},
		footer: {
			cancel: "Отмена",
			saveChanges: "Сохранить изменения"
		}
	},
	team: {
		header: {
			title: "Наша команда",
			description: "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков."
		},
		grid: {
			member1Name: "Сара Чен",
			member1Role: "Основатель и ведущий инженер",
			member1Bio: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.",
			member2Name: "Маркус Вебер",
			member2Role: "Инженер по производительности",
			member2Bio: "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
			member3Name: "Айша Патель",
			member3Role: "Developer Advocate",
			member3Bio: "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
			member4Name: "Томас Родригес",
			member4Role: "Full-Stack разработчик",
			member4Bio: "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.",
			member5Name: "Юки Танака",
			member5Role: "Аналитик данных",
			member5Bio: "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).",
			member6Name: "Елена Ковальски",
			member6Role: "Комьюнити-менеджер",
			member6Bio: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами."
		}
	},
	notFound: {
		title: "404",
		description: "Упс! Страница не найдена",
		returnHome: "Вернуться на главную"
	}
}, [pe, me] = a(Q.t.bind(Q)), he = {
	en: { translation: re },
	fr: { translation: ie },
	es: { translation: ae },
	de: { translation: oe },
	it: { translation: se },
	pt: { translation: ce },
	zh: { translation: le },
	ja: { translation: ue },
	ko: { translation: de },
	ru: { translation: fe }
};
Q.init({
	fallbackLng: "en",
	resources: he
}), me(() => Q.t.bind(Q));
function $(...e) {
	return pe()(...e);
}
var ge = r("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), _e = r("<div class=space-y-4>"), ve = r("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function ye() {
	let n = [
		{
			titleKey: "frontendTitle",
			descKey: "frontendDesc",
			deptKey: "engineering",
			locationKey: "remote",
			typeKey: "fullTime"
		},
		{
			titleKey: "backendTitle",
			descKey: "backendDesc",
			deptKey: "engineering",
			locationKey: "remote",
			typeKey: "fullTime"
		},
		{
			titleKey: "writerTitle",
			descKey: "writerDesc",
			deptKey: "documentation",
			locationKey: "remote",
			typeKey: "partTime"
		},
		{
			titleKey: "devrelTitle",
			descKey: "devrelDesc",
			deptKey: "community",
			locationKey: "sfRemote",
			typeKey: "fullTime"
		},
		{
			titleKey: "qaTitle",
			descKey: "qaDesc",
			deptKey: "engineering",
			locationKey: "remote",
			typeKey: "fullTime"
		}
	];
	return [(() => {
		var e = ge();
		return t(e, () => $("careers.openPositions.title")), e;
	})(), (() => {
		var r = _e();
		return t(r, e(i, {
			each: n,
			children: (e) => (() => {
				var n = ve(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.nextSibling, l = r.nextSibling;
				return t(i, () => $(`careers.openPositions.${e.titleKey}`)), t(a, () => $(`careers.openPositions.${e.descKey}`)), t(o, () => $(`careers.openPositions.${e.deptKey}`)), t(s, () => $(`careers.openPositions.${e.locationKey}`)), t(c, () => $(`careers.openPositions.${e.typeKey}`)), t(l, () => $("careers.openPositions.applyNow")), n;
			})()
		})), r;
	})()];
}
function be(e) {
	return n(() => e.children);
}
function xe() {
	return e(be, { get children() {
		return e(ye, {});
	} });
}
export { xe as default };

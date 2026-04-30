import { createSignal as e } from "solid-js";
var t = (e) => typeof e == "string", n = () => {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}, r = (e) => e == null ? "" : String(e), i = (e, t, n) => {
	e.forEach((e) => {
		t[e] && (n[e] = t[e]);
	});
}, a = /###/g, o = (e) => e && e.includes("###") ? e.replace(a, ".") : e, s = (e) => !e || t(e), c = (e, n, r) => {
	let i = t(n) ? n.split(".") : n, a = 0;
	for (; a < i.length - 1;) {
		if (s(e)) return {};
		let t = o(i[a]);
		!e[t] && r && (e[t] = new r()), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++a;
	}
	return s(e) ? {} : {
		obj: e,
		k: o(i[a])
	};
}, l = (e, t, n) => {
	let { obj: r, k: i } = c(e, t, Object);
	if (r !== void 0 || t.length === 1) {
		r[i] = n;
		return;
	}
	let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = c(e, o, Object);
	for (; s.obj === void 0 && o.length;) a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = c(e, o, Object), s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0);
	s.obj[`${s.k}.${a}`] = n;
}, u = (e, t, n, r) => {
	let { obj: i, k: a } = c(e, t, Object);
	i[a] = i[a] || [], i[a].push(n);
}, d = (e, t) => {
	let { obj: n, k: r } = c(e, t);
	if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, f = (e, t, n) => {
	let r = d(e, n);
	return r === void 0 ? d(t, n) : r;
}, p = (e, n, r) => {
	for (let i in n) i !== "__proto__" && i !== "constructor" && (i in e ? t(e[i]) || e[i] instanceof String || t(n[i]) || n[i] instanceof String ? r && (e[i] = n[i]) : p(e[i], n[i], r) : e[i] = n[i]);
	return e;
}, m = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), h = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
}, g = (e) => t(e) ? e.replace(/[&<>"'\/]/g, (e) => h[e]) : e, _ = class {
	constructor(e) {
		this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
	}
	getRegExp(e) {
		let t = this.regExpMap.get(e);
		if (t !== void 0) return t;
		let n = new RegExp(e);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
	}
}, v = [
	" ",
	",",
	"?",
	"!",
	";"
], y = new _(20), b = (e, t, n) => {
	t ||= "", n ||= "";
	let r = v.filter((e) => !t.includes(e) && !n.includes(e));
	if (r.length === 0) return !0;
	let i = y.getRegExp(`(${r.map((e) => e === "?" ? "\\?" : e).join("|")})`), a = !i.test(e);
	if (!a) {
		let t = e.indexOf(n);
		t > 0 && !i.test(e.substring(0, t)) && (a = !0);
	}
	return a;
}, x = (e, t, n = ".") => {
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
}, S = (e) => e?.replace(/_/g, "-"), C = {
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
}, w = new class e {
	constructor(e, t = {}) {
		this.init(e, t);
	}
	init(e, t = {}) {
		this.prefix = t.prefix || "i18next:", this.logger = e || C, this.options = t, this.debug = t.debug;
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
	forward(e, n, r, i) {
		return i && !this.debug ? null : (e = e.map((e) => t(e) ? e.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : e), t(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[n](e));
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
}(), T = class {
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
}, E = class extends T {
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
	getResource(e, n, r, i = {}) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = i.ignoreJSONStructure === void 0 ? this.options.ignoreJSONStructure : i.ignoreJSONStructure, s;
		e.includes(".") ? s = e.split(".") : (s = [e, n], r && (Array.isArray(r) ? s.push(...r) : t(r) && a ? s.push(...r.split(a)) : s.push(r)));
		let c = d(this.data, s);
		return !c && !n && !r && e.includes(".") && (e = s[0], n = s[1], r = s.slice(2).join(".")), c || !o || !t(r) ? c : x(this.data?.[e]?.[n], r, a);
	}
	addResource(e, t, n, r, i = { silent: !1 }) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = [e, t];
		n && (o = o.concat(a ? n.split(a) : n)), e.includes(".") && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), l(this.data, o, r), i.silent || this.emit("added", e, t, n, r);
	}
	addResources(e, n, r, i = { silent: !1 }) {
		for (let i in r) (t(r[i]) || Array.isArray(r[i])) && this.addResource(e, n, i, r[i], { silent: !0 });
		i.silent || this.emit("added", e, n, r);
	}
	addResourceBundle(e, t, n, r, i, a = {
		silent: !1,
		skipCopy: !1
	}) {
		let o = [e, t];
		e.includes(".") && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
		let s = d(this.data, o) || {};
		a.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? p(s, n, i) : s = {
			...s,
			...n
		}, l(this.data, o, s), a.silent || this.emit("added", e, t, n);
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
}, D = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e;
	},
	handle(e, t, n, r, i) {
		return e.forEach((e) => {
			t = this.processors[e]?.process(t, n, r, i) ?? t;
		}), t;
	}
}, O = Symbol("i18next/PATH_KEY");
function k() {
	let e = [], t = Object.create(null), n;
	return t.get = (r, i) => (n?.revoke?.(), i === O ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function A(e, t) {
	let { [O]: n } = e(k()), r = t?.keySeparator ?? ".", i = t?.nsSeparator ?? ":";
	if (n.length > 1 && i) {
		let e = t?.ns, a = Array.isArray(e) ? e : null;
		if (a && a.length > 1 && a.slice(1).includes(n[0])) return `${n[0]}${i}${n.slice(1).join(r)}`;
	}
	return n.join(r);
}
var j = (e) => !t(e) && typeof e != "boolean" && typeof e != "number", M = class e extends T {
	constructor(e, t = {}) {
		super(), i([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = w.create("translator"), this.checkedLoadedFor = {};
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e, t = { interpolation: {} }) {
		let n = { ...t };
		if (e == null) return !1;
		let r = this.resolve(e, n);
		if (r?.res === void 0) return !1;
		let i = j(r.res);
		return !(n.returnObjects === !1 && i);
	}
	extractFromKey(e, n) {
		let r = n.nsSeparator === void 0 ? this.options.nsSeparator : n.nsSeparator;
		r === void 0 && (r = ":");
		let i = n.keySeparator === void 0 ? this.options.keySeparator : n.keySeparator, a = n.ns || this.options.defaultNS || [], o = r && e.includes(r), s = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !b(e, r, i);
		if (o && !s) {
			let n = e.match(this.interpolator.nestingRegexp);
			if (n && n.length > 0) return {
				key: e,
				namespaces: t(a) ? [a] : a
			};
			let o = e.split(r);
			(r !== i || r === i && this.options.ns.includes(o[0])) && (a = o.shift()), e = o.join(i);
		}
		return {
			key: e,
			namespaces: t(a) ? [a] : a
		};
	}
	translate(n, r, i) {
		let a = typeof r == "object" ? { ...r } : r;
		if (typeof a != "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), typeof a == "object" && (a = { ...a }), a ||= {}, n == null) return "";
		typeof n == "function" && (n = A(n, {
			...this.options,
			...a
		})), Array.isArray(n) || (n = [String(n)]), n = n.map((e) => typeof e == "function" ? A(e, {
			...this.options,
			...a
		}) : String(e));
		let o = a.returnDetails === void 0 ? this.options.returnDetails : a.returnDetails, s = a.keySeparator === void 0 ? this.options.keySeparator : a.keySeparator, { key: c, namespaces: l } = this.extractFromKey(n[n.length - 1], a), u = l[l.length - 1], d = a.nsSeparator === void 0 ? this.options.nsSeparator : a.nsSeparator;
		d === void 0 && (d = ":");
		let f = a.lng || this.language, p = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (f?.toLowerCase() === "cimode") return p ? o ? {
			res: `${u}${d}${c}`,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(a)
		} : `${u}${d}${c}` : o ? {
			res: c,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(a)
		} : c;
		let m = this.resolve(n, a), h = m?.res, g = m?.usedKey || c, _ = m?.exactUsedKey || c, v = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		], y = a.joinArrays === void 0 ? this.options.joinArrays : a.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, x = a.count !== void 0 && !t(a.count), S = e.hasDefaultValue(a), C = x ? this.pluralResolver.getSuffix(f, a.count, a) : "", w = a.ordinal && x ? this.pluralResolver.getSuffix(f, a.count, { ordinal: !1 }) : "", T = x && !a.ordinal && a.count === 0, E = T && a[`defaultValue${this.options.pluralSeparator}zero`] || a[`defaultValue${C}`] || a[`defaultValue${w}`] || a.defaultValue, D = h;
		b && !h && S && (D = E);
		let O = j(D), k = Object.prototype.toString.apply(D);
		if (b && D && O && !v.includes(k) && !(t(y) && Array.isArray(D))) {
			if (!a.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, D, {
					...a,
					ns: l
				}) : `key '${c} (${this.language})' returned an object instead of string.`;
				return o ? (m.res = e, m.usedParams = this.getUsedParamsDetails(a), m) : e;
			}
			if (s) {
				let e = Array.isArray(D), t = e ? [] : {}, n = e ? _ : g;
				for (let e in D) if (Object.prototype.hasOwnProperty.call(D, e)) {
					let r = `${n}${s}${e}`;
					S && !h ? t[e] = this.translate(r, {
						...a,
						defaultValue: j(E) ? E[e] : void 0,
						joinArrays: !1,
						ns: l
					}) : t[e] = this.translate(r, {
						...a,
						joinArrays: !1,
						ns: l
					}), t[e] === r && (t[e] = D[e]);
				}
				h = t;
			}
		} else if (b && t(y) && Array.isArray(h)) h = h.join(y), h &&= this.extendTranslation(h, n, a, i);
		else {
			let e = !1, t = !1;
			!this.isValidLookup(h) && S && (e = !0, h = E), this.isValidLookup(h) || (t = !0, h = c);
			let r = (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && t ? void 0 : h, o = S && E !== h && this.options.updateMissing;
			if (t || e || o) {
				if (this.logger.log(o ? "updateKey" : "missingKey", f, u, x && !o ? `${c}${this.pluralResolver.getSuffix(f, a.count, a)}` : c, o ? E : h), s) {
					let e = this.resolve(c, {
						...a,
						keySeparator: !1
					});
					e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let e = [], t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && t && t[0]) for (let n = 0; n < t.length; n++) e.push(t[n]);
				else this.options.saveMissingTo === "all" ? e = this.languageUtils.toResolveHierarchy(a.lng || this.language) : e.push(a.lng || this.language);
				let n = (e, t, n) => {
					let i = S && n !== h ? n : r;
					this.options.missingKeyHandler ? this.options.missingKeyHandler(e, u, t, i, o, a) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, u, t, i, o, a), this.emit("missingKey", e, u, t, h);
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && x ? e.forEach((e) => {
					let t = this.pluralResolver.getSuffixes(e, a);
					T && a[`defaultValue${this.options.pluralSeparator}zero`] && !t.includes(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach((t) => {
						n([e], c + t, a[`defaultValue${t}`] || E);
					});
				}) : n(e, c, E));
			}
			h = this.extendTranslation(h, n, a, m, i), t && h === c && this.options.appendNamespaceToMissingKey && (h = `${u}${d}${c}`), (t || e) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${d}${c}` : c, e ? h : void 0, a));
		}
		return o ? (m.res = h, m.usedParams = this.getUsedParamsDetails(a), m) : h;
	}
	extendTranslation(e, n, r, i, a) {
		if (this.i18nFormat?.parse) e = this.i18nFormat.parse(e, {
			...this.options.interpolation.defaultVariables,
			...r
		}, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, { resolved: i });
		else if (!r.skipInterpolation) {
			r.interpolation && this.interpolator.init({
				...r,
				interpolation: {
					...this.options.interpolation,
					...r.interpolation
				}
			});
			let o = t(e) && (r?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : r.interpolation.skipOnVariables), s;
			if (o) {
				let t = e.match(this.interpolator.nestingRegexp);
				s = t && t.length;
			}
			let c = r.replace && !t(r.replace) ? r.replace : r;
			if (this.options.interpolation.defaultVariables && (c = {
				...this.options.interpolation.defaultVariables,
				...c
			}), e = this.interpolator.interpolate(e, c, r.lng || this.language || i.usedLng, r), o) {
				let t = e.match(this.interpolator.nestingRegexp), n = t && t.length;
				s < n && (r.nest = !1);
			}
			!r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, (...e) => a?.[0] === e[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${n[0]}`), null) : this.translate(...e, n), r)), r.interpolation && this.interpolator.reset();
		}
		let o = r.postProcess || this.options.postProcess, s = t(o) ? [o] : o;
		return e != null && s?.length && r.applyPostProcessor !== !1 && (e = D.handle(s, e, n, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...i,
				usedParams: this.getUsedParamsDetails(r)
			},
			...r
		} : r, this)), e;
	}
	resolve(e, n = {}) {
		let r, i, a, o, s;
		return t(e) && (e = [e]), Array.isArray(e) && (e = e.map((e) => typeof e == "function" ? A(e, {
			...this.options,
			...n
		}) : e)), e.forEach((e) => {
			if (this.isValidLookup(r)) return;
			let c = this.extractFromKey(e, n), l = c.key;
			i = l;
			let u = c.namespaces;
			this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
			let d = n.count !== void 0 && !t(n.count), f = d && !n.ordinal && n.count === 0, p = n.context !== void 0 && (t(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
			u.forEach((e) => {
				this.isValidLookup(r) || (s = e, !this.checkedLoadedFor[`${m[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(s) && (this.checkedLoadedFor[`${m[0]}-${e}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((t) => {
					if (this.isValidLookup(r)) return;
					o = t;
					let i = [l];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(i, l, t, e, n);
					else {
						let e;
						d && (e = this.pluralResolver.getSuffix(t, n.count, n));
						let r = `${this.options.pluralSeparator}zero`, a = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (d && (n.ordinal && e.startsWith(a) && i.push(l + e.replace(a, this.options.pluralSeparator)), i.push(l + e), f && i.push(l + r)), p) {
							let t = `${l}${this.options.contextSeparator || "_"}${n.context}`;
							i.push(t), d && (n.ordinal && e.startsWith(a) && i.push(t + e.replace(a, this.options.pluralSeparator)), i.push(t + e), f && i.push(t + r));
						}
					}
					let s;
					for (; s = i.pop();) this.isValidLookup(r) || (a = s, r = this.getResource(t, e, s, n));
				}));
			});
		}), {
			res: r,
			usedKey: i,
			exactUsedKey: a,
			usedLng: o,
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
		let n = [
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
		], r = e.replace && !t(e.replace), i = r ? e.replace : e;
		if (r && e.count !== void 0 && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
			...this.options.interpolation.defaultVariables,
			...i
		}), !r) {
			i = { ...i };
			for (let e of n) delete i[e];
		}
		return i;
	}
	static hasDefaultValue(e) {
		for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t) && t.startsWith("defaultValue") && e[t] !== void 0) return !0;
		return !1;
	}
}, N = class {
	constructor(e) {
		this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = w.create("languageUtils");
	}
	getScriptPartFromCode(e) {
		if (e = S(e), !e || !e.includes("-")) return null;
		let t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (e = S(e), !e || !e.includes("-")) return e;
		let t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (t(e) && e.includes("-")) {
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
	getFallbackCodes(e, n) {
		if (!e) return [];
		if (typeof e == "function" && (e = e(n)), t(e) && (e = [e]), Array.isArray(e)) return e;
		if (!n) return e.default || [];
		let r = e[n];
		return r ||= e[this.getScriptPartFromCode(n)], r ||= e[this.formatLanguageCode(n)], r ||= e[this.getLanguagePartFromCode(n)], r ||= e.default, r || [];
	}
	toResolveHierarchy(e, n) {
		let r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], e), i = [], a = (e) => {
			e && (this.isSupportedCode(e) ? i.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
		};
		return t(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(e))) : t(e) && a(this.formatLanguageCode(e)), r.forEach((e) => {
			i.includes(e) || a(this.formatLanguageCode(e));
		}), i;
	}
}, P = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
}, F = {
	select: (e) => e === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
}, I = class {
	constructor(e, t = {}) {
		this.languageUtils = e, this.options = t, this.logger = w.create("pluralResolver"), this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(e, t = {}) {
		let n = S(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
			cleanedCode: n,
			type: r
		});
		if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
		let a;
		try {
			a = new Intl.PluralRules(n, { type: r });
		} catch {
			if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), F;
			if (!e.match(/-|_/)) return F;
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
		return n ||= this.getRule("dev", t), n ? n.resolvedOptions().pluralCategories.sort((e, t) => P[e] - P[t]).map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : [];
	}
	getSuffix(e, t, n = {}) {
		let r = this.getRule(e, n);
		return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
	}
}, L = (e, n, r, i = ".", a = !0) => {
	let o = f(e, n, r);
	return !o && a && t(r) && (o = x(e, r, i), o === void 0 && (o = x(n, r, i))), o;
}, R = (e) => e.replace(/\$/g, "$$$$"), z = class {
	constructor(e = {}) {
		this.logger = w.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((e) => e), this.init(e);
	}
	init(e = {}) {
		e.interpolation ||= { escapeValue: !0 };
		let { escape: t, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: a, suffix: o, suffixEscaped: s, formatSeparator: c, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: f, nestingSuffix: p, nestingSuffixEscaped: h, nestingOptionsSeparator: _, maxReplaces: v, alwaysFormat: y } = e.interpolation;
		this.escape = t === void 0 ? g : t, this.escapeValue = n === void 0 ? !0 : n, this.useRawValueToEscape = r === void 0 ? !1 : r, this.prefix = i ? m(i) : a || "{{", this.suffix = o ? m(o) : s || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : u ? m(u) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : l ? m(l) : "", this.nestingPrefix = d ? m(d) : f || m("$t("), this.nestingSuffix = p ? m(p) : h || m(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = y === void 0 ? !1 : y, this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
		this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(e, n, i, a) {
		let o, s, c, l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (e) => {
			if (!e.includes(this.formatSeparator)) {
				let t = L(n, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(t, void 0, i, {
					...a,
					...n,
					interpolationkey: e
				}) : t;
			}
			let t = e.split(this.formatSeparator), r = t.shift().trim(), o = t.join(this.formatSeparator).trim();
			return this.format(L(n, l, r, this.options.keySeparator, this.options.ignoreJSONStructure), o, i, {
				...a,
				...n,
				interpolationkey: r
			});
		};
		this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
		let d = a?.missingInterpolationHandler || this.options.missingInterpolationHandler, f = a?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : a.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: (e) => R(e)
		}, {
			regex: this.regexp,
			safeValue: (e) => this.escapeValue ? R(this.escape(e)) : R(e)
		}].forEach((n) => {
			for (c = 0; o = n.regex.exec(e);) {
				let i = o[1].trim();
				if (s = u(i), s === void 0) if (typeof d == "function") {
					let n = d(e, o, a);
					s = t(n) ? n : "";
				} else if (a && Object.prototype.hasOwnProperty.call(a, i)) s = "";
				else if (f) {
					s = o[0];
					continue;
				} else this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`), s = "";
				else !t(s) && !this.useRawValueToEscape && (s = r(s));
				let l = n.safeValue(s);
				if (e = e.replace(o[0], l), f ? (n.regex.lastIndex += s.length, n.regex.lastIndex -= o[0].length) : n.regex.lastIndex = 0, c++, c >= this.maxReplaces) break;
			}
		}), e;
	}
	nest(e, n, i = {}) {
		let a, o, s, c = (e, t) => {
			let n = this.nestingOptionsSeparator;
			if (!e.includes(n)) return e;
			let r = e.split(RegExp(`${m(n)}[ ]*{`)), i = `{${r[1]}`;
			e = r[0], i = this.interpolate(i, s);
			let a = i.match(/'/g), o = i.match(/"/g);
			((a?.length ?? 0) % 2 == 0 && !o || (o?.length ?? 0) % 2 != 0) && (i = i.replace(/'/g, "\""));
			try {
				s = JSON.parse(i), t && (s = {
					...t,
					...s
				});
			} catch (t) {
				return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${i}`;
			}
			return s.defaultValue && s.defaultValue.includes(this.prefix) && delete s.defaultValue, e;
		};
		for (; a = this.nestingRegexp.exec(e);) {
			let l = [];
			s = { ...i }, s = s.replace && !t(s.replace) ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
			let u = /{.*}/.test(a[1]) ? a[1].lastIndexOf("}") + 1 : a[1].indexOf(this.formatSeparator);
			if (u !== -1 && (l = a[1].slice(u).split(this.formatSeparator).map((e) => e.trim()).filter(Boolean), a[1] = a[1].slice(0, u)), o = n(c.call(this, a[1].trim(), s), s), o && a[0] === e && !t(o)) return o;
			t(o) || (o = r(o)), o ||= (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), ""), l.length && (o = l.reduce((e, t) => this.format(e, t, i.lng, {
				...i,
				interpolationkey: a[1].trim()
			}), o.trim())), e = e.replace(a[0], o), this.regexp.lastIndex = 0;
		}
		return e;
	}
}, B = (e) => {
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
}, V = (e) => {
	let t = {};
	return (n, r, i) => {
		let a = i;
		i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
			...a,
			[i.interpolationkey]: void 0
		});
		let o = r + JSON.stringify(a), s = t[o];
		return s || (s = e(S(r), i), t[o] = s), s(n);
	};
}, H = (e) => (t, n, r) => e(S(n), r)(t), U = class {
	constructor(e = {}) {
		this.logger = w.create("formatter"), this.options = e, this.init(e);
	}
	init(e, t = { interpolation: {} }) {
		this.formatSeparator = t.interpolation.formatSeparator || ",";
		let n = t.cacheInBuiltFormats ? V : H;
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
		this.formats[e.toLowerCase().trim()] = V(t);
	}
	format(e, t, n, r = {}) {
		if (!t || e == null) return e;
		let i = t.split(this.formatSeparator);
		if (i.length > 1 && i[0].indexOf("(") > 1 && !i[0].includes(")") && i.find((e) => e.includes(")"))) {
			let e = i.findIndex((e) => e.includes(")"));
			i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator);
		}
		return i.reduce((e, t) => {
			let { formatName: i, formatOptions: a } = B(t);
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
}, W = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, G = class extends T {
	constructor(e, t, n, r = {}) {
		super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = w.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
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
			u(n.loaded, [i], a), W(n, e), t && n.errors.push(t), n.pendingCount === 0 && !n.done && (Object.keys(n.loaded).forEach((e) => {
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
	prepareLoading(e, n, r = {}, i) {
		if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
		t(e) && (e = this.languageUtils.toResolveHierarchy(e)), t(n) && (n = [n]);
		let a = this.queueLoad(e, n, r, i);
		if (!a.toLoad.length) return a.pending.length || i(), null;
		a.toLoad.forEach((e) => {
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
}, K = () => ({
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
		let n = {};
		if (typeof e[1] == "object" && (n = e[1]), t(e[1]) && (n.defaultValue = e[1]), t(e[2]) && (n.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
			let t = e[3] || e[2];
			Object.keys(t).forEach((e) => {
				n[e] = t[e];
			});
		}
		return n;
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
}), q = (e) => (t(e.ns) && (e.ns = [e.ns]), t(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), t(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), J = () => {}, Y = (e) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
		typeof e[t] == "function" && (e[t] = e[t].bind(e));
	});
}, X = class e extends T {
	constructor(e = {}, t) {
		if (super(), this.options = q(e), this.services = {}, this.logger = w, this.modules = { external: [] }, Y(this), t && !this.isInitialized && !e.isClone) {
			if (!this.options.initAsync) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init(e = {}, r) {
		this.isInitializing = !0, typeof e == "function" && (r = e, e = {}), e.defaultNS == null && e.ns && (t(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
		let i = K();
		this.options = {
			...i,
			...this.options,
			...q(e)
		}, this.options.interpolation = {
			...i.interpolation,
			...this.options.interpolation
		}, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = i.overloadTranslationOptionHandler);
		let a = (e) => e ? typeof e == "function" ? new e() : e : null;
		if (!this.options.isClone) {
			this.modules.logger ? w.init(a(this.modules.logger), this.options) : w.init(null, this.options);
			let e;
			e = this.modules.formatter ? this.modules.formatter : U;
			let t = new N(this.options);
			this.store = new E(this.options.resources, this.options);
			let n = this.services;
			n.logger = w, n.resourceStore = this.store, n.languageUtils = t, n.pluralResolver = new I(t, { prepend: this.options.pluralSeparator }), e && (n.formatter = a(e), n.formatter.init && n.formatter.init(n, this.options), this.options.interpolation.format = n.formatter.format.bind(n.formatter)), n.interpolator = new z(this.options), n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, n.backendConnector = new G(a(this.modules.backend), n.resourceStore, n, this.options), n.backendConnector.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.languageDetector && (n.languageDetector = a(this.modules.languageDetector), n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)), this.modules.i18nFormat && (n.i18nFormat = a(this.modules.i18nFormat), n.i18nFormat.init && n.i18nFormat.init(this)), this.translator = new M(this.services, this.options), this.translator.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.external.forEach((e) => {
				e.init && e.init(this);
			});
		}
		if (this.format = this.options.interpolation.format, r ||= J, this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
		let o = n(), s = () => {
			let e = (e, t) => {
				this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(t), r(e, t);
			};
			if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return e(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, e);
		};
		return this.options.resources || !this.options.initAsync ? s() : setTimeout(s, 0), o;
	}
	loadResources(e, n = J) {
		let r = n, i = t(e) ? e : this.language;
		if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
			if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
			let e = [], t = (t) => {
				t && t !== "cimode" && this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
					t !== "cimode" && (e.includes(t) || e.push(t));
				});
			};
			i ? t(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e) => t(e)), this.options.preload?.forEach?.((e) => t(e)), this.services.backendConnector.load(e, this.options.ns, (e) => {
				!e && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(e);
			});
		} else r(null);
	}
	reloadResources(e, t, r) {
		let i = n();
		return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e ||= this.languages, t ||= this.options.ns, r ||= J, this.services.backendConnector.reload(e, t, (e) => {
			i.resolve(), r(e);
		}), i;
	}
	use(e) {
		if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && D.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
	changeLanguage(e, r) {
		this.isLanguageChangingTo = e;
		let i = n();
		this.emit("languageChanging", e);
		let a = (e) => {
			this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e);
		}, o = (t, n) => {
			n ? this.isLanguageChangingTo === e && (a(n), this.translator.changeLanguage(n), this.isLanguageChangingTo = void 0, this.emit("languageChanged", n), this.logger.log("languageChanged", n)) : this.isLanguageChangingTo = void 0, i.resolve((...e) => this.t(...e)), r && r(t, (...e) => this.t(...e));
		}, s = (n) => {
			!e && !n && this.services.languageDetector && (n = []);
			let r = t(n) ? n : n && n[0], i = this.store.hasLanguageSomeTranslations(r) ? r : this.services.languageUtils.getBestMatchFromCodes(t(n) ? [n] : n);
			i && (this.language || a(i), this.translator.language || this.translator.changeLanguage(i), this.services.languageDetector?.cacheUserLanguage?.(i)), this.loadResources(i, (e) => {
				o(e, i);
			});
		};
		return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), i;
	}
	getFixedT(e, n, r) {
		let i = (e, t, ...n) => {
			let a;
			a = typeof t == "object" ? { ...t } : this.options.overloadTranslationOptionHandler([e, t].concat(n)), a.lng = a.lng || i.lng, a.lngs = a.lngs || i.lngs, a.ns = a.ns || i.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || i.keyPrefix);
			let o = {
				...this.options,
				...a
			};
			typeof a.keyPrefix == "function" && (a.keyPrefix = A(a.keyPrefix, o));
			let s = this.options.keySeparator || ".", c;
			return a.keyPrefix && Array.isArray(e) ? c = e.map((e) => (typeof e == "function" && (e = A(e, o)), `${a.keyPrefix}${s}${e}`)) : (typeof e == "function" && (e = A(e, o)), c = a.keyPrefix ? `${a.keyPrefix}${s}${e}` : e), this.t(c, a);
		};
		return t(e) ? i.lng = e : i.lngs = e, i.ns = n, i.keyPrefix = r, i;
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
	loadNamespaces(e, r) {
		let i = n();
		return this.options.ns ? (t(e) && (e = [e]), e.forEach((e) => {
			this.options.ns.includes(e) || this.options.ns.push(e);
		}), this.loadResources((e) => {
			i.resolve(), r && r(e);
		}), i) : (r && r(), Promise.resolve());
	}
	loadLanguages(e, r) {
		let i = n();
		t(e) && (e = [e]);
		let a = this.options.preload || [], o = e.filter((e) => !a.includes(e) && this.services.languageUtils.isSupportedCode(e));
		return o.length ? (this.options.preload = a.concat(o), this.loadResources((e) => {
			i.resolve(), r && r(e);
		}), i) : (r && r(), Promise.resolve());
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
		let t = /* @__PURE__ */ "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb".split("."), n = this.services?.languageUtils || new N(K());
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
		}), a.services = { ...this.services }, a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, r && (a.store = new E(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t] }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r] }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), t.interpolation) {
			let e = {
				...K().interpolation,
				...this.options.interpolation,
				...t.interpolation
			}, n = {
				...i,
				interpolation: e
			};
			a.services.interpolator = new z(n);
		}
		return a.translator = new M(a.services, i), a.translator.on("*", (e, ...t) => {
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
X.createInstance, X.dir, X.init, X.loadResources, X.reloadResources, X.use, X.changeLanguage, X.getFixedT, X.t, X.exists, X.setDefaultNamespace, X.hasLoadedNamespace, X.loadNamespaces, X.loadLanguages;
var Z = X.createInstance();
Z.init({
	lng: "en",
	fallbackLng: "en",
	resources: { en: { translation: {} } },
	interpolation: { escapeValue: !1 }
});
var [Q] = e(Z.t.bind(Z));
function $() {
	return Q()("header.home"), null;
}
export { $ as default };

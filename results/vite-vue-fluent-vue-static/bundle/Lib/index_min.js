import * as e from "vue";
import { defineComponent as t, getCurrentInstance as n } from "vue";
var r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.prototype.hasOwnProperty, s = (e, t) => {
	let n = {};
	for (var i in e) r(n, i, {
		get: e[i],
		enumerable: !0
	});
	return t || r(n, Symbol.toStringTag, { value: "Module" }), n;
}, c = (e, t, n, s) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !o.call(e, d) && d !== n && r(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(s = i(t, d)) || s.enumerable
	});
	return e;
}, l = (e, t, n) => (c(e, t, "default"), n && c(n, t, "default")), u = s({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => m,
	install: () => f,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => p
});
import * as d from "vue";
l(u, d);
function f() {}
function p(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function m(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
var h = class {
	constructor(e) {
		this.value = e;
	}
	valueOf() {
		return this.value;
	}
}, g = class extends h {
	constructor(e = "???") {
		super(e);
	}
	toString(e) {
		return `{${this.value}}`;
	}
}, _ = class extends h {
	constructor(e, t = {}) {
		super(e), this.opts = t;
	}
	toString(e) {
		if (e) try {
			return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
		} catch (t) {
			e.reportError(t);
		}
		return this.value.toString(10);
	}
}, v = class e extends h {
	static supportsValue(t) {
		if (typeof t == "number" || t instanceof Date) return !0;
		if (t instanceof h) return e.supportsValue(t.valueOf());
		if ("Temporal" in globalThis) {
			let e = globalThis.Temporal;
			if (t instanceof e.Instant || t instanceof e.PlainDateTime || t instanceof e.PlainDate || t instanceof e.PlainMonthDay || t instanceof e.PlainTime || t instanceof e.PlainYearMonth) return !0;
		}
		return !1;
	}
	constructor(t, n = {}) {
		t instanceof e ? (n = {
			...t.opts,
			...n
		}, t = t.value) : t instanceof h && (t = t.valueOf()), typeof t == "object" && "calendarId" in t && n.calendar === void 0 && (n = {
			...n,
			calendar: t.calendarId
		}), super(t), this.opts = n;
	}
	[Symbol.toPrimitive](e) {
		return e === "string" ? this.toString() : this.toNumber();
	}
	toNumber() {
		let e = this.value;
		if (typeof e == "number") return e;
		if (e instanceof Date) return e.getTime();
		if ("epochMilliseconds" in e) return e.epochMilliseconds;
		if ("toZonedDateTime" in e) return e.toZonedDateTime("UTC").epochMilliseconds;
		throw TypeError("Unwrapping a non-number value as a number");
	}
	toString(e) {
		if (e) try {
			return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
		} catch (t) {
			e.reportError(t);
		}
		return typeof this.value == "number" || this.value instanceof Date ? new Date(this.value).toISOString() : this.value.toString();
	}
}, y = 100, b = "⁨", x = "⁩";
function S(e, t, n) {
	return n === t || n instanceof _ && t instanceof _ && n.value === t.value || t instanceof _ && typeof n == "string" && n === e.memoizeIntlObject(Intl.PluralRules, t.opts).select(t.value);
}
function C(e, t, n) {
	return t[n] ? M(e, t[n].value) : (e.reportError(/* @__PURE__ */ RangeError("No default")), new g());
}
function w(e, t) {
	let n = [], r = Object.create(null);
	for (let i of t) i.type === "narg" ? r[i.name] = T(e, i.value) : n.push(T(e, i));
	return {
		positional: n,
		named: r
	};
}
function T(e, t) {
	switch (t.type) {
		case "str": return t.value;
		case "num": return new _(t.value, { minimumFractionDigits: t.precision });
		case "var": return E(e, t);
		case "mesg": return D(e, t);
		case "term": return O(e, t);
		case "func": return k(e, t);
		case "select": return A(e, t);
		default: return new g();
	}
}
function E(e, { name: t }) {
	let n;
	if (e.params) if (Object.prototype.hasOwnProperty.call(e.params, t)) n = e.params[t];
	else return new g(`$${t}`);
	else if (e.args && Object.prototype.hasOwnProperty.call(e.args, t)) n = e.args[t];
	else return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown variable: $${t}`)), new g(`$${t}`);
	if (n instanceof h) return n;
	switch (typeof n) {
		case "string": return n;
		case "number": return new _(n);
		case "object": if (v.supportsValue(n)) return new v(n);
		default: return e.reportError(/* @__PURE__ */ TypeError(`Variable type not supported: $${t}, ${typeof n}`)), new g(`$${t}`);
	}
}
function D(e, { name: t, attr: n }) {
	let r = e.bundle._messages.get(t);
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown message: ${t}`)), new g(t);
	if (n) {
		let i = r.attributes[n];
		return i ? M(e, i) : (e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new g(`${t}.${n}`));
	}
	return r.value ? M(e, r.value) : (e.reportError(/* @__PURE__ */ ReferenceError(`No value: ${t}`)), new g(t));
}
function O(e, { name: t, attr: n, args: r }) {
	let i = `-${t}`, a = e.bundle._terms.get(i);
	if (!a) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown term: ${i}`)), new g(i);
	if (n) {
		let t = a.attributes[n];
		if (t) {
			e.params = w(e, r).named;
			let n = M(e, t);
			return e.params = null, n;
		}
		return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new g(`${i}.${n}`);
	}
	e.params = w(e, r).named;
	let o = M(e, a.value);
	return e.params = null, o;
}
function k(e, { name: t, args: n }) {
	let r = e.bundle._functions[t];
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown function: ${t}()`)), new g(`${t}()`);
	if (typeof r != "function") return e.reportError(/* @__PURE__ */ TypeError(`Function ${t}() is not callable`)), new g(`${t}()`);
	try {
		let t = w(e, n);
		return r(t.positional, t.named);
	} catch (n) {
		return e.reportError(n), new g(`${t}()`);
	}
}
function A(e, { selector: t, variants: n, star: r }) {
	let i = T(e, t);
	if (i instanceof g) return C(e, n, r);
	for (let t of n) if (S(e, i, T(e, t.key))) return M(e, t.value);
	return C(e, n, r);
}
function j(e, t) {
	if (e.dirty.has(t)) return e.reportError(/* @__PURE__ */ RangeError("Cyclic reference")), new g();
	e.dirty.add(t);
	let n = [], r = e.bundle._useIsolating && t.length > 1;
	for (let i of t) {
		if (typeof i == "string") {
			n.push(e.bundle._transform(i));
			continue;
		}
		if (e.placeables++, e.placeables > y) throw e.dirty.delete(t), RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${y}`);
		r && n.push(b), n.push(T(e, i).toString(e)), r && n.push(x);
	}
	return e.dirty.delete(t), n.join("");
}
function M(e, t) {
	return typeof t == "string" ? e.bundle._transform(t) : j(e, t);
}
var N = class {
	constructor(e, t, n) {
		this.dirty = /* @__PURE__ */ new WeakSet(), this.params = null, this.placeables = 0, this.bundle = e, this.errors = t, this.args = n;
	}
	reportError(e) {
		if (!this.errors || !(e instanceof Error)) throw e;
		this.errors.push(e);
	}
	memoizeIntlObject(e, t) {
		let n = this.bundle._intls.get(e);
		n || (n = {}, this.bundle._intls.set(e, n));
		let r = JSON.stringify(t);
		return n[r] || (n[r] = new e(this.bundle.locales, t)), n[r];
	}
};
function P(e, t) {
	let n = Object.create(null);
	for (let [r, i] of Object.entries(e)) t.includes(r) && (n[r] = i.valueOf());
	return n;
}
var F = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function I(e, t) {
	let n = e[0];
	if (n instanceof g) return new g(`NUMBER(${n.valueOf()})`);
	if (n instanceof _) return new _(n.valueOf(), {
		...n.opts,
		...P(t, F)
	});
	if (n instanceof v) return new _(n.toNumber(), { ...P(t, F) });
	throw TypeError("Invalid argument to NUMBER");
}
var L = [
	"dateStyle",
	"timeStyle",
	"fractionalSecondDigits",
	"dayPeriod",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName"
];
function R(e, t) {
	let n = e[0];
	if (n instanceof g) return new g(`DATETIME(${n.valueOf()})`);
	if (n instanceof v || n instanceof _) return new v(n, P(t, L));
	throw TypeError("Invalid argument to DATETIME");
}
var z = /* @__PURE__ */ new Map();
function B(e) {
	let t = Array.isArray(e) ? e.join(" ") : e, n = z.get(t);
	return n === void 0 && (n = /* @__PURE__ */ new Map(), z.set(t, n)), n;
}
var V = class {
	constructor(e, { functions: t, useIsolating: n = !0, transform: r = (e) => e } = {}) {
		this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
			NUMBER: I,
			DATETIME: R,
			...t
		}, this._useIsolating = n, this._transform = r, this._intls = B(e);
	}
	hasMessage(e) {
		return this._messages.has(e);
	}
	getMessage(e) {
		return this._messages.get(e);
	}
	addResource(e, { allowOverrides: t = !1 } = {}) {
		let n = [];
		for (let r = 0; r < e.body.length; r++) {
			let i = e.body[r];
			if (i.id.startsWith("-")) {
				if (t === !1 && this._terms.has(i.id)) {
					n.push(/* @__PURE__ */ Error(`Attempt to override an existing term: "${i.id}"`));
					continue;
				}
				this._terms.set(i.id, i);
			} else {
				if (t === !1 && this._messages.has(i.id)) {
					n.push(/* @__PURE__ */ Error(`Attempt to override an existing message: "${i.id}"`));
					continue;
				}
				this._messages.set(i.id, i);
			}
		}
		return n;
	}
	formatPattern(e, t = null, n = null) {
		if (typeof e == "string") return this._transform(e);
		let r = new N(this, n, t);
		try {
			return j(r, e).toString(r);
		} catch (e) {
			if (r.errors && e instanceof Error) return r.errors.push(e), new g().toString(r);
			throw e;
		}
	}
}, H = class extends Array {
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
}, U = class extends H {
	constructor(e) {
		if (super(), Symbol.iterator in Object(e)) this.iterator = e[Symbol.iterator]();
		else throw TypeError("Argument must implement the iteration protocol.");
	}
	[Symbol.iterator]() {
		let e = this, t = 0;
		return { next() {
			return e.length <= t && e.push(e.iterator.next()), e[t++];
		} };
	}
	touchNext(e = 1) {
		let t = 0;
		for (; t++ < e;) {
			let e = this[this.length - 1];
			if (e && e.done) break;
			this.push(this.iterator.next());
		}
		return this[this.length - 1];
	}
};
function W(e, t) {
	return Array.isArray(t) ? t.map((t) => G(e, t)) : G(e, t);
}
function G(e, t) {
	for (let n of e) if (n.hasMessage(t)) return n;
	return null;
}
function K(e, t) {
	let n = new V(e, {
		functions: t._functions,
		useIsolating: t._useIsolating,
		transform: t._transform
	});
	return n._terms = new Map(t._terms), n._messages = new Map(t._messages), n;
}
function q(e, t) {
	if (!e) throw Error(`[fluent-vue] ${t}`);
}
function J(e, ...t) {
	console.warn(`[fluent-vue] ${e}`, ...t);
}
var Y = class {
	constructor(e, t) {
		this.options = t, this.format = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e);
			return this._format(n, r, t) ?? e;
		}, this.formatAttrs = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e);
			return this._formatAttrs(n, r, t) ?? {};
		}, this.formatWithAttrs = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e), i = this._format(n, r, t);
			return {
				value: i ?? e,
				attributes: this._formatAttrs(n, r, t) ?? {},
				hasValue: i !== null
			};
		}, this.$t = this.format, this.$ta = this.formatAttrs, this.bundles = e;
	}
	getBundle(e) {
		return W(this.bundles.value, e);
	}
	getMessage(e, t) {
		let n = e?.getMessage(t);
		return n === void 0 ? (this.options.warnMissing(t), null) : n;
	}
	formatPattern(e, t, n, r) {
		let i = [], a = r;
		if (a != null && this.options.mapVariable != null) for (let [e, t] of Object.entries(a)) {
			let n = this.options.mapVariable(t);
			n != null && (a[e] = n);
		}
		let o = e.formatPattern(n, a, i);
		for (let e of i) J(`Error when formatting message with key [${t}]`, e);
		return o;
	}
	_format(e, t, n) {
		return e === null || t === null || t.value === null ? null : this.formatPattern(e, t.id, t.value, n);
	}
	_formatAttrs(e, t, n) {
		if (e === null || t === null) return null;
		let r = {};
		for (let [i, a] of Object.entries(t.attributes)) r[i] = this.formatPattern(e, t.id, a, n);
		return r;
	}
};
function* X(e, t) {
	for (let n of e) yield* t(n);
}
function Z(e, t, n = !1) {
	if (t == null) return e;
	let r = t.$options ?? t.type;
	if (r._fluent != null) return r._fluent;
	let i = Q(e, r.fluent);
	return !n && !(typeof window > "u") && (r._fluent = i), i;
}
function Q(e, t) {
	return t == null ? e : new Y((0, u.computed)(() => U.from(X(e.bundles.value, (e) => Object.entries(t).map(([t, n]) => {
		let r = t.split(/[\s+,]/);
		if (e.locales.filter((e) => r.includes(e)).length === 0) return e;
		let i = K(r, e);
		return i.addResource(n, { allowOverrides: !0 }), i;
	})))), e.options);
}
var $ = Symbol("root-context");
function ee() {
	let e = (0, u.getCurrentInstance)();
	q(e != null, "useFluent called outside of setup");
	let t = (0, u.inject)($, void 0);
	return q(t != null, "useFluent called without installing plugin"), Z(t, e.proxy, !0);
}
var te = t({
	__name: "EmptyComponent",
	setup(e) {
		return ee(), (n()?.proxy)?.$t("header-home"), (e, t) => null;
	}
});
export { te as default };
